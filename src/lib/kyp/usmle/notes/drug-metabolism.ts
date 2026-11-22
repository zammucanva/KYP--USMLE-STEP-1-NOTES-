import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH3).
// Source: pdf 252 / book 230 (Drug metabolism — Phase I vs Phase II flow
// diagram with the Lipophilic and Polar input rails, the Phase I
// reactions Reduction/Oxidation/Hydrolysis/Methylation (predominantly
// CYP450-dependent), the Phase II reactions Glucuronidation/Acetylation/
// Sulfation, the slightly-polar and very-polar-hydrophilic metabolite
// outputs, the Excretion routes Serum (urine, sweat) and bile (stool),
// the 'either or both phase I and phase II / not necessarily sequential'
// intro, and the 'Geriatric patients lose phase I first' + 'Slow
// acetylators have ↑ adverse effects (eg, isoniazid)' modifier note).
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The Drug Metabolism section has ONE vector
// flow diagram — redrawn as ORIGINAL_KYP_REDRAW vector graphics in the
// registry visual (no photographs, no copyrighted artwork reproduced).
// The Phase I / Phase II reaction lists and the polar-vs-lipophilic
// input split are pure text and are carried verbatim in this note's
// table blocks. NO copyrighted photographs; no mnemonic prints on
// book 230's Drug Metabolism section — the four KYP mnemonics are
// original designs. NOTE: page 252 (book 230) ALSO contains the
// Elimination of Drugs section (zero-order vs first-order, with the
// PEA mnemonic); that section is reserved for the separate
// elimination-of-drugs topic and is NOT covered here.

export const drugMetabolism: KypUsMLENote = {
  id: "drug-metabolism",
  title: "Drug Metabolism",
  subtitle:
    "Phase I (CYP450 reduction/oxidation/hydrolysis/methylation → slightly polar metabolite) and Phase II (glucuronidation/acetylation/sulfation → very polar hydrophilic metabolite) — and how the liver routes lipophilic and polar drugs to excretion (book 230). DRUG METABOLISM: drugs can be metabolized by either or both phase I and phase II reactions; the reactions bioactivate or deactivate substances and do NOT have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction). INPUT RAILS: Lipophilic drugs → Phase I → Phase II → Excretion; Polar drugs (water-soluble) → Phase II directly (skip Phase I). PHASE I (predominantly CYP450-dependent): Reduction, Oxidation, Hydrolysis, Methylation → Slightly polar metabolite (active or inactive) + Reactive oxygen metabolites. PHASE II (conjugation): Glucuronidation, Acetylation, Sulfation → Very polar, hydrophilic metabolite (EXCEPT the acetylated metabolite, which is less polar). EXCRETION: Serum (urine, sweat), bile (stool). MODIFIERS: Geriatric patients lose Phase I first (Phase II preserved); slow acetylators have ↑ adverse effects from ↓ rate of metabolism (eg, isoniazid).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The drug-metabolism page's complete architecture — the intro ('either or both phase I and phase II reactions', 'bioactivate or deactivate', 'do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)'); the two input rails (Lipophilic drugs → Phase I → Phase II → Excretion; Polar drugs → Phase II directly); the Phase I box with the four reaction types (Reduction, Oxidation, Hydrolysis, Methylation) and the CYP450-dependent label, outputting a Slightly polar metabolite (active or inactive) plus Reactive oxygen metabolites; the Phase II box with the three conjugation reactions (Glucuronidation, Acetylation, Sulfation) outputting a Very polar hydrophilic metabolite (except the acetylated metabolite); the Excretion box with Serum (urine, sweat) and bile (stool) routes; and the two modifier sentences ('Geriatric patients lose phase I first'; 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)').",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 230 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Drug metabolism — the intro 'Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)'; the geriatric-and-slow-acetylator modifier note 'Geriatric patients lose phase I first. Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)'; the two input rails 'Lipophilic drugs' and 'Polar drugs (water-soluble)'; the Phase I header 'Phase I (predominantly CYP450-dependent)' with the four reaction types Reduction, Oxidation, Hydrolysis, Methylation, outputting 'Slightly polar metabolite (active or inactive)' plus 'Reactive oxygen metabolites'; the Phase II header with the three conjugation reactions Glucuronidation, Acetylation, Sulfation, outputting 'Very polar, hydrophilic metabolite (except acetylated metabolite)'; and the Excretion box with 'Serum (urine, sweat), bile (stool)' routes)",
  tags: [
    "drug metabolism",
    "phase I",
    "phase II",
    "CYP450",
    "cytochrome P450",
    "reduction",
    "oxidation",
    "hydrolysis",
    "methylation",
    "glucuronidation",
    "acetylation",
    "sulfation",
    "conjugation",
    "bioactivation",
    "deactivation",
    "lipophilic drugs",
    "polar drugs",
    "water-soluble drugs",
    "slightly polar metabolite",
    "very polar hydrophilic metabolite",
    "acetylated metabolite",
    "reactive oxygen metabolites",
    "excretion",
    "serum",
    "urine",
    "sweat",
    "bile",
    "stool",
    "geriatric pharmacology",
    "phase I lost first",
    "slow acetylators",
    "isoniazid",
    "NAT2",
    "first-pass metabolism",
  ],
  core: {
    what:
      "DRUG METABOLISM (biotransformation) converts drugs into metabolites that are easier to excrete. Drugs can be metabolized by either or both PHASE I and PHASE II reactions. The reactions serve to bioactivate (eg, prodrugs → active forms) or deactivate substances, and do NOT have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction). PHASE I (predominantly CYP450-dependent) — the four reaction types are REDUCTION, OXIDATION, HYDROLYSIS, METHYLATION; Phase I yields a SLIGHTLY POLAR METABOLITE (active or inactive) plus REACTIVE OXYGEN METABOLITES. PHASE II (conjugation) — the three reaction types are GLUCURONIDATION, ACETYLATION, SULFATION; Phase II yields a VERY POLAR, HYDROPHILIC METABOLITE (except the ACETYLATED metabolite, which is less polar). The two input rails are LIPOPHILIC DRUGS (which need Phase I then Phase II to become excretable) and POLAR DRUGS (water-soluble) (which can skip Phase I and go straight to Phase II conjugation). The final EXCRETION routes are SERUM (urine, sweat) and BILE (stool). Two modifiers from the page: 'GERIATRIC PATIENTS LOSE PHASE I FIRST' (Phase I CYP450 capacity declines with age; Phase II conjugation is preserved — see the pharmacokinetics page's Phase I vs Phase II aging pattern); and 'PATIENTS WHO ARE SLOW ACETYLATORS have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)' — the NAT2 slow-acetylator polymorphism reduces Phase II acetylation, raising plasma isoniazid and the risk of hepatotoxicity and neuropathy.",
    why:
      "The body's excretion machinery (the kidney and the bile duct) handles polar, hydrophilic molecules — lipophilic drugs would be reabsorbed in the renal tubule and the enterohepatic circulation, so they would never leave. Phase I and Phase II exist to convert lipophilic drugs into polar metabolites the body can excrete. Phase I (cytochrome P450 oxidation, reduction, hydrolysis, methylation) introduces or unmasks a functional group (–OH, –COOH, –NH2) on the drug, making it slightly more polar — and either preserving, abolishing, or creating activity (the 'active or inactive' label on the Phase I output captures all three: codeine → morphine is bioactivation; diazepam → oxazepam preserves activity; many drugs are simply deactivated). Phase II (glucuronidation, sulfation, acetylation) attaches a bulky, highly polar conjugate (glucuronic acid, sulfate, acetate) to the Phase I functional group, producing a very polar, hydrophilic metabolite that the kidney or bile can excrete. The exception is acetylation — the acetylated metabolite is LESS polar than the parent (the page flags this), which is why slow acetylators accumulate isoniazid (the acetylated metabolite is not excreted as readily). The two input rails exist because polar drugs are already water-soluble enough to excrete (or to conjugate directly), so they bypass Phase I; lipophilic drugs need both phases. The 'do not have to take place sequentially' note is critical — some drugs undergo Phase II directly (eg, morphine → morphine-3-glucuronide), some undergo Phase I only (eg, codeine → morphine, no Phase II needed for the active form), and some undergo Phase II then Phase I (a reverse order, the page's named example). The geriatric and slow-acetylator modifiers are the two clinical landmines: aging preferentially loses Phase I (so Phase I-metabolized drugs like diazepam accumulate — the LOT benzodiazepines, which use Phase II, are preferred in the elderly), and the NAT2 slow-acetylator polymorphism reduces Phase II acetylation (so isoniazid, hydralazine, procainamide, and dapsone accumulate — the slow acetylators develop isoniazid hepatotoxicity, hydralazine/procainamide-induced lupus, and dapsone hemolysis).",
    keyIdea:
      "Read every metabolism question through two axes. AXIS 1 — THE PHASE-FLOW AXIS: LIPOPHILIC DRUGS → Phase I (Reduction, Oxidation, Hydrolysis, Methylation; predominantly CYP450-dependent) → SLIGHTLY POLAR METABOLITE (active or inactive) + REACTIVE OXYGEN METABOLITES → Phase II (Glucuronidation, Acetylation, Sulfation) → VERY POLAR HYDROPHILIC METABOLITE (except the acetylated metabolite, which is less polar) → EXCRETION (Serum [urine, sweat], bile [stool]). The POLAR DRUGS (water-soluble) shortcut: skip Phase I, go straight to Phase II. The reactions do NOT have to take place sequentially — phase I can follow phase II, or take place as a single reaction. AXIS 2 — THE METABOLISM-MODIFIER AXIS: 'GERIATRIC PATIENTS LOSE PHASE I FIRST' (Phase I CYP450 declines with age; Phase II conjugation preserved — see the pharmacokinetics page's Phase I vs Phase II aging pattern, where LOT [lorazepam, oxazepam, temazepam] Phase-II benzodiazepines are preferred over Phase-I diazepam); 'SLOW ACETYLATORS have ↑ adverse effects from ↓ rate of metabolism (eg, isoniazid)' — NAT2 polymorphism affects isoniazid, hydralazine, procainamide, dapsone. Bioactivation (prodrug → active) and deactivation (active → inactive) both occur; Phase I can produce active or inactive metabolites, Phase II generally deactivates (except acetylation, which can preserve or reduce polarity).",
  },
  mechanisms: [
    {
      id: "metabolism-phase-flow-axis",
      title: "The phase-flow axis: Lipophilic drugs through Phase I → Phase II → Excretion",
      context: "The Phase I → Phase II → Excretion flow diagram (book 230)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A drug enters the liver",
            sublabel:
              "Input — the drug arrives at the liver. Two rails: LIPOPHILIC DRUGS (need both phases to become excretable) and POLAR DRUGS (water-soluble, can skip Phase I). Drugs can be metabolized by either or both phase I and phase II reactions; the reactions bioactivate or deactivate substances and do NOT have to take place sequentially.",
            variant: "input",
          },
          {
            id: "phase1",
            label: "Phase I — Reduction, Oxidation, Hydrolysis, Methylation (CYP450)",
            sublabel:
              "PHASE I (predominantly CYP450-dependent) introduces or unmasks a functional group (–OH, –COOH, –NH2) via Reduction, Oxidation, Hydrolysis, or Methylation. The output is a SLIGHTLY POLAR METABOLITE (active or inactive — codeine → morphine is bioactivation; diazepam → oxazepam preserves activity; many drugs are deactivated) plus REACTIVE OXYGEN METABOLITES (a side product of CYP450 oxidation).",
            variant: "process",
          },
          {
            id: "phase2",
            label: "Phase II — Glucuronidation, Acetylation, Sulfation (conjugation)",
            sublabel:
              "PHASE II attaches a bulky polar conjugate (glucuronic acid, sulfate, or acetate) to the Phase I functional group via Glucuronidation, Acetylation, or Sulfation. The output is a VERY POLAR, HYDROPHILIC METABOLITE — EXCEPT the ACETYLATED METABOLITE, which is LESS polar than the parent (the page flags this exception; it is why slow acetylators accumulate isoniazid).",
            variant: "process",
          },
          {
            id: "excretion",
            label: "Excretion — Serum (urine, sweat), bile (stool)",
            sublabel:
              "Output — the very polar, hydrophilic Phase II metabolite is excreted via SERUM (urine, sweat) — the kidney filters water-soluble metabolites — or via BILE (stool) — the liver secretes larger conjugates into bile for fecal elimination. Lipophilic drugs would be reabsorbed in the renal tubule or enterohepatic circulation; the two phases exist to prevent that reabsorption.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "phase1", label: "lipophilic drugs → Phase I (or skip if polar)" },
          { from: "phase1", to: "phase2", label: "slightly polar metabolite → conjugation" },
          { from: "phase2", to: "excretion", label: "very polar metabolite → excreted" },
          { from: "input", to: "phase2", label: "polar drugs → Phase II directly (skip Phase I)" },
        ],
      },
    },
    {
      id: "metabolism-modifier-axis",
      title: "The metabolism-modifier axis: geriatric Phase I loss and slow acetylators",
      context: "The Geriatric and Slow-acetylator modifier sentences (book 230)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Two patient phenotypes shift Phase I or Phase II capacity",
            sublabel:
              "Input — the patient is either elderly (Phase I capacity falls) or a slow acetylator (Phase II acetylation falls). The two modifiers predict which drugs accumulate and which adverse effects appear.",
            variant: "input",
          },
          {
            id: "geriatric",
            label: "Geriatric — lose Phase I first; Phase II preserved",
            sublabel:
              "'GERIATRIC PATIENTS LOSE PHASE I FIRST.' Phase I (CYP450 oxidation, reduction, hydrolysis, methylation) declines with age as hepatic mass and blood flow fall; Phase II (glucuronidation, sulfation, acetylation) is relatively PRESERVED. Phase-I-metabolized drugs (diazepam — oxidized; many psychotropics) accumulate; Phase-II-metabolized drugs (lorazepam, oxazepam, temazepam — the 'LOT' glucuronidated benzodiazepines) are preferred in the elderly.",
            variant: "process",
          },
          {
            id: "slowacetylator",
            label: "Slow acetylator — ↓ Phase II acetylation; isoniazid accumulates",
            sublabel:
              "'PATIENTS WHO ARE SLOW ACETYLATORS have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' The NAT2 slow-acetylator polymorphism reduces Phase II acetylation. Affected drugs accumulate → toxicity: isoniazid (hepatotoxicity, peripheral neuropathy — give B6), hydralazine and procainamide (drug-induced lupus), dapsone (hemolysis).",
            variant: "process",
          },
          {
            id: "output",
            label: "Predicted accumulation and adverse effect",
            sublabel:
              "Output — the modifier predicts which drug accumulates and which adverse effect appears. Elderly + Phase I drug → accumulation → toxicity (use Phase II alternative). Slow acetylator + isoniazid/hydralazine/procainamide/dapsone → accumulation → the predicted adverse effect.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "geriatric", label: "elderly → Phase I loss" },
          { from: "input", to: "slowacetylator", label: "NAT2 polymorphism → acetylation loss" },
          { from: "geriatric", to: "output", label: "Phase I drug accumulates" },
          { from: "slowacetylator", to: "output", label: "acetylated drug accumulates" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-metabolism-map",
      title: "The drug-metabolism map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 230): the Phase I → Phase II → Excretion flow diagram with the Lipophilic drugs input rail (top-left) feeding Phase I (predominantly CYP450-dependent) → Reduction/Oxidation/Hydrolysis/Methylation → Slightly polar metabolite (active or inactive) + Reactive oxygen metabolites → Phase II → Glucuronidation/Acetylation/Sulfation → Very polar hydrophilic metabolite (except acetylated metabolite) → Excretion (Serum [urine, sweat], bile [stool]); the Polar drugs (water-soluble) shortcut rail bypassing Phase I and going directly to Phase II; the Phase I reaction list table (Reduction, Oxidation, Hydrolysis, Methylation with their catalytic notes and outputs); the Phase II reaction list table (Glucuronidation, Acetylation, Sulfation with their conjugate donors and outputs); and the two modifier callouts at the bottom ('GERIATRIC PATIENTS LOSE PHASE I FIRST' and 'SLOW ACETYLATORS ACCUMULATE (eg, isoniazid)'). The 'PHASE I = OXIDIZE/REDUCE/HYDROLYZE/METHYLATE (CYP450)' mnemonic callout sits at the bottom.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 252). The Drug Metabolism section has ONE vector flow diagram (the Phase I → Phase II → Excretion flow with the Lipophilic and Polar input rails) — redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry visual (no photographs, no copyrighted artwork reproduced). The Phase I / Phase II reaction lists are pure text and are carried verbatim in this note's table blocks. No copyrighted photographs exist on the page; nothing reproduced. No mnemonic prints on book 230's Drug Metabolism section; the four KYP mnemonics are original designs.",
    },
    {
      kind: "table",
      title: "Book 230 — the Phase I reaction list (carried verbatim)",
      intro:
        "The four Phase I reaction types with their catalysts, outputs, and clinical anchors, as printed.",
      columns: ["Phase I reaction", "Catalyst / note", "Output", "Clinical anchor"],
      rows: [
        ["Reduction", "Predominantly CYP450-dependent (anaerobic conditions)", "Slightly polar metabolite (active or inactive) + reactive oxygen metabolites", "Halothane reduction under low O2"],
        ["Oxidation", "Predominantly CYP450-dependent (the major Phase I route)", "Slightly polar metabolite (active or inactive) + reactive oxygen metabolites", "Codeine → morphine (CYP2D6 bioactivation); diazepam → oxazepam"],
        ["Hydrolysis", "Esterases / amidases (plasma and tissue, not only CYP450)", "Slightly polar metabolite (active or inactive)", "Procaine → PABA; succinylcholine; aspirin → salicylic acid"],
        ["Methylation", "Methyltransferases (COMT, TPMT, NNMT); uses SAM as methyl donor", "Slightly polar metabolite (active or inactive)", "Catechol-O-methylation (COMT); thiopurine methylation (TPMT polymorphism)"],
      ],
      caption:
        "Phase I introduces or unmasks a functional group on the drug. CYP450 oxidation is the dominant route — the page labels Phase I as 'predominantly CYP450-dependent.' The output is always a SLIGHTLY polar metabolite (active or inactive — codeine → morphine is bioactivation; diazepam → oxazepam preserves activity; most are deactivated) plus REACTIVE OXYGEN METABOLITES (a side product of CYP450 oxidation, the source of oxidative stress in heavy Phase I loads).",
    },
    {
      kind: "table",
      title: "Book 230 — the Phase II reaction list (carried verbatim)",
      intro:
        "The three Phase II conjugation reactions with their donors, outputs, and clinical anchors, as printed.",
      columns: ["Phase II reaction", "Conjugate donor", "Output", "Clinical anchor"],
      rows: [
        ["Glucuronidation", "UDP-glucuronic acid (UGT enzymes)", "Very polar, hydrophilic metabolite", "Bilirubin → bilirubin diglucuronide; morphine → morphine-3-glucuronide; lorazepam/oxazepam/temazepam (Phase-II LOT)"],
        ["Acetylation", "Acetyl-CoA (NAT1/NAT2 enzymes)", "EXCEPT the acetylated metabolite — LESS polar than the parent", "Isoniazid, hydralazine, procainamide, dapsone — affected by the NAT2 slow-acetylator polymorphism"],
        ["Sulfation", "PAPS (3'-phosphoadenosine-5'-phosphosulfate; SULT enzymes)", "Very polar, hydrophilic metabolite", "Steroids, neurotransmitters; acetaminophen → acetaminophen sulfate (alternative to glucuronidation)"],
      ],
      caption:
        "Phase II attaches a bulky polar conjugate to the Phase I functional group. The output is a VERY POLAR, HYDROPHILIC METABOLITE — EXCEPT the ACETYLATED METABOLITE, which is LESS polar than the parent (the page's verbatim exception). This exception is the mechanism behind the slow-acetylator accumulation of isoniazid: the less-polar acetylated metabolite is not excreted as readily, and the slow-acetylator polymorphism reduces the rate at which isoniazid is acetylated in the first place. The three Phase II reactions each have a distinct donor (UDP-glucuronic acid, acetyl-CoA, PAPS) and a distinct enzyme family (UGT, NAT, SULT).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "An 80-year-old patient is started on oral diazepam for anxiety. After several days of therapy, the patient is somnolent. The team reviews the pharmacokinetics of aging and recalls that 'Geriatric patients lose phase I first.'",
        discriminator:
          "Elderly + diazepam (a Phase I-oxidized benzodiazepine) + 'geriatric patients lose phase I first' → Phase I clearance falls → diazepam accumulates → toxicity",
        concept: "The geriatric Phase I loss axis",
        answer:
          "Diazepam is metabolized by Phase I CYP450 oxidation (CYP3A4 → nordiazepam → temazepam → oxazepam). The page states 'Geriatric patients lose phase I first' — Phase I CYP450 capacity declines with age as hepatic mass and blood flow fall, while Phase II conjugation is relatively preserved. Diazepam's clearance therefore falls, its half-life lengthens (from ~24 h in young adults to ~48-100 h in the elderly), and the standard dose produces somnolence. The alternative is to switch to a Phase II-glucuronidated benzodiazepine — lorazepam, oxazepam, or temazepam (the 'LOT' trio) — which does not depend on Phase I and is preferred in the elderly and in hepatic dysfunction. This pattern is the same Phase I vs Phase II aging axis shown on the pharmacokinetics page (PH2): Phase I falls, Phase II preserved.",
      },
      {
        stem:
          "A 35-year-old patient on isoniazid for latent TB develops peripheral neuropathy and elevated transaminases. Genotyping reveals the patient is a NAT2 slow acetylator. The team recalls the page's note that 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).'",
        discriminator:
          "NAT2 slow acetylator + isoniazid + 'slow acetylators have ↑ adverse effects (eg, isoniazid)' → ↓ Phase II acetylation → isoniazid accumulates → hepatotoxicity + peripheral neuropathy",
        concept: "The slow-acetylator accumulation axis",
        answer:
          "Isoniazid is metabolized by Phase II acetylation (NAT2 → acetylisoniazid). The page states explicitly that 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' In a NAT2 slow acetylator, the rate of isoniazid acetylation is reduced, so plasma isoniazid accumulates. Two toxicities follow: (1) HEPATOTOXICITY — isoniazid and its downstream metabolites (acetylhydrazine) damage hepatocytes; transaminases rise; the slow acetylator phenotype is a known risk factor for isoniazid hepatotoxicity. (2) PERIPHERAL NEUROPATHY — isoniazid inhibits pyridoxine (vitamin B6) metabolism; the slower clearance in slow acetylators raises the risk of B6-deficiency neuropathy (prophylactic B6 is given with isoniazid, especially in slow acetylators, alcoholics, diabetics, and pregnant patients). The same NAT2 slow-acetylator polymorphism affects hydralazine and procainamide (drug-induced lupus) and dapsone (hemolysis).",
      },
      {
        stem:
          "A pharmaceutical researcher is characterizing the metabolism of a new lipophilic prodrug. In vitro, the compound is oxidized by CYP3A4 to a slightly polar active metabolite, then glucuronidated by UGT2B7 to a very polar, water-soluble metabolite excreted in bile.",
        discriminator:
          "Lipophilic prodrug + Phase I (CYP3A4 oxidation → active metabolite) + Phase II (UGT2B7 glucuronidation → water-soluble) + biliary excretion = the canonical Phase I → Phase II → Excretion flow",
        concept: "The phase-flow axis",
        answer:
          "This is the canonical Phase I → Phase II → Excretion flow the page diagram illustrates. The prodrug is LIPOPHILIC (needs both phases to become excretable) — it enters Phase I, where CYP3A4 OXIDATION introduces a hydroxyl group (the 'slightly polar metabolite' output of Phase I, labeled 'active' because the metabolite is more active than the prodrug — a bioactivation). The Phase I product then enters Phase II, where UGT2B7 GLUCURONIDATION attaches a bulky glucuronic acid conjugate (the 'very polar, hydrophilic metabolite' output of Phase II — the page's default rule; no acetylation exception applies). The very polar metabolite is then excreted in BILE (one of the two routes printed on the page — Serum [urine, sweat] and bile [stool]). The page's note that 'reactions do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)' is the general rule, but this compound follows the canonical sequence: Phase I → Phase II → Excretion. The bioactivation (prodrug → active metabolite) is the 'active' branch of the 'slightly polar metabolite (active or inactive)' Phase I output.",
      },
    ],
    traps: [
      {
        a: "Phase I output (slightly polar metabolite)",
        b: "Phase II output (very polar hydrophilic metabolite)",
        whyConfused: "Both are 'metabolites'; students blur the polarity step",
        keyDifference:
          "PHASE I (Reduction, Oxidation, Hydrolysis, Methylation; predominantly CYP450-dependent) yields a SLIGHTLY POLAR METABOLITE (active or inactive) plus reactive oxygen metabolites — the functional group is introduced or unmasked but the molecule is still not polar enough to excrete efficiently. PHASE II (Glucuronidation, Acetylation, Sulfation) yields a VERY POLAR, HYDROPHILIC METABOLITE (except the acetylated metabolite) — a bulky polar conjugate is attached, making the molecule water-soluble and ready for excretion via Serum (urine, sweat) or bile (stool). The polarity step is the discriminator — Phase I 'slightly polar,' Phase II 'very polar hydrophilic.'",
        clue:
          "If the metabolite is described as 'slightly polar' or 'active/inactive' → Phase I. If 'very polar hydrophilic' or 'water-soluble enough to excrete' → Phase II. The acetylated metabolite is the lone Phase II exception (less polar than the parent).",
      },
      {
        a: "Acetylated Phase II metabolite (less polar than parent)",
        b: "Glucuronidated / sulfated Phase II metabolite (very polar)",
        whyConfused: "Both are Phase II; the page flags the acetylation exception",
        keyDifference:
          "The page states verbatim that the Phase II output is a 'VERY POLAR, HYDROPHILIC METABOLITE (EXCEPT ACETYLATED METABOLITE).' GLUCURONIDATION attaches a bulky glucuronic acid (with multiple carboxyl and hydroxyl groups) and SULFATION attaches a sulfate — both make the metabolite very polar and water-soluble, ready for renal or biliary excretion. ACETYLATION attaches only a small acetyl group (–COCH3) which MASKS an existing amine — the acetylated metabolite is LESS polar than the parent (the lone Phase II exception). This is why slow acetylators accumulate isoniazid: the less-polar acetylated metabolite is not excreted as readily, AND the slow-acetylator polymorphism reduces the rate of acetylation in the first place.",
        clue:
          "Phase II = conjugation; the rule is 'very polar hydrophilic' EXCEPT acetylation, which is the small acetyl group that masks the amine and reduces polarity.",
      },
      {
        a: "Phase I loss in the elderly (geriatric)",
        b: "Slow acetylation (NAT2 polymorphism)",
        whyConfused: "Both reduce metabolism capacity; both produce drug accumulation",
        keyDifference:
          "GERIATRIC loss is a PHASE I (CYP450) decline — affects all Phase I reactions (Reduction, Oxidation, Hydrolysis, Methylation); the page states 'Geriatric patients lose phase I first,' and Phase II (glucuronidation, sulfation, acetylation) is relatively preserved. SLOW ACETYLATION is a PHASE II polymorphism — affects only one of the three Phase II reactions (ACETYLATION, via the NAT2 enzyme); the page states 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' The affected drugs are isoniazid, hydralazine, procainamide, dapsone — all NAT2 substrates. The two modifiers operate on different phases and on different drug sets; both predict accumulation and toxicity but via different mechanisms.",
        clue:
          "If the stem says 'elderly' or 'geriatric' → Phase I loss (CYP450) — use Phase II alternatives (LOT benzodiazepines). If the stem mentions 'slow acetylator' or 'NAT2' or lists isoniazid/hydralazine/procainamide/dapsone → Phase II acetylation polymorphism.",
      },
      {
        a: "Phase I → Phase II sequential order (the canonical flow)",
        b: "Phase II → Phase I, or a single Phase I or Phase II reaction (the 'not necessarily sequential' rule)",
        whyConfused: "The flow diagram visually suggests Phase I always precedes Phase II",
        keyDifference:
          "The page's flow diagram shows the canonical LIPOPHILIC DRUGS → PHASE I → PHASE II → EXCRETION sequence, but the intro states explicitly that the reactions 'do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction).' So: (1) some drugs undergo Phase I only (eg, codeine CYP2D6 → morphine, no Phase II needed for the active form); (2) some drugs undergo Phase II only (eg, morphine UGT2B7 → morphine-3-glucuronide, skipping Phase I because morphine already has the –OH functional group); (3) some drugs undergo Phase II then Phase I (the page's named example, 'phase I can follow phase II'); (4) the polar-drug shortcut — Polar drugs (water-soluble) skip Phase I and go straight to Phase II conjugation. The flow diagram is the most common path, not the only path.",
        clue:
          "If the stem describes a drug undergoing only Phase I or only Phase II, or Phase II then Phase I — remember the 'do not have to take place sequentially' rule. Polar drugs skip Phase I; many Phase II substrates (morphine, acetaminophen) need no Phase I.",
      },
    ],
    pivots: [
      {
        lookAlike: "An elderly patient on a standard dose develops toxicity — is it Phase I or Phase II?",
        differentiator:
          "The page states 'Geriatric patients lose phase I first' — Phase I (CYP450 oxidation, reduction, hydrolysis, methylation) declines with age; Phase II (glucuronidation, sulfation, acetylation) is preserved. Identify the drug's metabolic route: if the drug is Phase I-metabolized (diazepam — oxidized; many psychotropics; CYP3A4 or CYP2D6 substrates), Phase I loss → accumulation → toxicity; switch to a Phase II alternative (lorazepam, oxazepam, temazepam — the 'LOT' glucuronidated benzodiazepines). If the drug is Phase II-metabolized (lorazepam — glucuronidated; morphine — glucuronidated), Phase II is preserved and the standard dose is acceptable. The pharmacokinetics page (PH2) makes the same Phase I vs Phase II aging distinction.",
        correctPath:
          "Read the drug label in this order: (1) Phase I or Phase II metabolized? (Phase I → expect accumulation in the elderly; Phase II → preserved). (2) Which Phase I enzyme? (CYP3A4, CYP2D6 — most drug-drug interactions involve these). (3) Is there a Phase II alternative? (LOT benzodiazepines for diazepam; levetiracetam for phenytoin).",
      },
      {
        lookAlike: "A patient on isoniazid develops hepatotoxicity — is it a Phase I or Phase II problem?",
        differentiator:
          "The page states 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' Isoniazid is metabolized by Phase II ACETYLATION (NAT2 → acetylisoniazid). The NAT2 slow-acetylator polymorphism reduces the rate of isoniazid acetylation, so plasma isoniazid accumulates. Two toxicities follow: hepatotoxicity (transaminase elevation; acetylhydrazine is the hepatotoxic intermediate) and peripheral neuropathy (B6 depletion). The acetylation exception on the page (the acetylated metabolite is LESS polar than the parent) compounds the problem — the slower-formed acetylated metabolite is also less readily excreted. The same NAT2 slow-acetylator polymorphism affects hydralazine and procainamide (drug-induced lupus) and dapsone (hemolysis).",
        correctPath:
          "Read the drug label: if the drug is isoniazid, hydralazine, procainamide, or dapsone → Phase II acetylation (NAT2) → slow acetylators accumulate. For isoniazid specifically: hepatotoxicity + peripheral neuropathy in slow acetylators; give pyridoxine (B6) to prevent the neuropathy.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old woman with latent tuberculosis is started on isoniazid 300 mg daily. Six weeks later, she returns with numbness and tingling in a stocking-glove distribution and fatigue; AST is 124 U/L, ALT 156 U/L (both upper-limit normal ~30). Genotyping reveals she is a NAT2 slow acetylator. The team consults the pharmacology chapter, which notes that 'Geriatric patients lose phase I first' and that 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' Separately, a 30-year-old fast acetylator on the same isoniazid dose tolerates it without toxicity.",
      question:
        "Explain why this patient developed both peripheral neuropathy and hepatotoxicity at a dose well-tolerated by the younger fast-acetylator patient. Identify whether each toxicity arises from Phase I or Phase II, and identify the pharmacologic intervention that prevents the neuropathy.",
      options: [
        {
          label:
            "Peripheral neuropathy is from isoniazid-induced pyridoxine (B6) depletion that is worsened by ↑ plasma isoniazid in a NAT2 slow acetylator (Phase II problem — ↓ acetylation → isoniazid accumulates → more B6 depletion). Hepatotoxicity is from acetylhydrazine, a downstream metabolite of acetylisoniazid whose formation is paradoxically preserved (or even relatively increased in slow acetylators via a shunt to the hydrazine pathway), accumulating in the elderly because Phase I (which converts acetylhydrazine to further oxidized products) is LOST FIRST. Two convergent mechanisms: slow acetylation (Phase II polymorphism) + elderly Phase I loss. The neuropathy is prevented with PYRIDOXINE (vitamin B6) supplementation.",
          text:
            "Neuropathy = Phase II slow acetylation → isoniazid ↑ → B6 depletion; hepatotoxicity = acetylhydrazine + elderly Phase I loss; prevent neuropathy with B6.",
          correct: true,
          why:
            "Correct on both toxicities, both phases, and the intervention. PERIPHERAL NEUROPATHY — isoniazid inhibits pyridoxine (vitamin B6) metabolism and depletes B6; the slower clearance in NAT2 slow acetylators raises plasma isoniazid and worsens B6 depletion → sensory peripheral neuropathy (stocking-glove numbness). The page's framework: 'slow acetylators have ↑ adverse effects (eg, isoniazid)' = ↓ Phase II acetylation → accumulation → B6-depletion neuropathy. PYRIDOXINE (B6) supplementation prevents the neuropathy (standard prophylaxis with isoniazid, especially in slow acetylators, alcoholics, diabetics, pregnant patients, and the elderly). HEPATOTOXICITY — isoniazid is acetylated by NAT2 to acetylisoniazid, which is hydrolyzed to acetylhydrazine (the hepatotoxic intermediate); acetylhydrazine is then oxidized by Phase I CYP2E1 to reactive hepatotoxins. The page's framework: 'geriatric patients lose phase I first' — elderly Phase I loss reduces the CYP2E1-mediated clearance of acetylhydrazine → acetylhydrazine accumulates → hepatotoxicity. So both Phase II (slow acetylation → ↑ isoniazid → ↑ acetylhydrazine substrate) AND Phase I (elderly CYP2E1 loss → ↓ acetylhydrazine clearance) converge in this 68-year-old slow acetylator. The 30-year-old fast acetylator has neither insult: fast acetylation keeps isoniazid and acetylhydrazine low, and young Phase I clears acetylhydrazine rapidly. The page's two modifiers each predict one of the two toxicities.",
        },
        {
          label:
            "Peripheral neuropathy is from Phase I CYP450 loss in the elderly (Phase I decline damages peripheral nerves directly), and hepatotoxicity is from Phase II glucuronidation overload. The intervention is a Phase II glucuronidation inducer like phenobarbital.",
          text:
            "Neuropathy = Phase I loss; hepatotoxicity = Phase II overload; induce glucuronidation.",
          why:
            "Wrong on both the mechanism and the intervention. The peripheral neuropathy is NOT from Phase I decline damaging nerves — it is from isoniazid depleting pyridoxine (B6), which is required for neurotransmitter synthesis; the slower clearance in slow acetylators worsens the depletion. Phase I loss has nothing to do with peripheral neuropathy. The hepatotoxicity is NOT from Phase II overload — it is from acetylhydrazine (a downstream product of acetylation) being oxidized by Phase I CYP2E1 to reactive hepatotoxins; the elderly Phase I loss reduces the CYP2E1-mediated clearance of acetylhydrazine, so acetylhydrazine accumulates. The intervention is B6 supplementation (for the neuropathy), not a glucuronidation inducer; phenobarbital would not prevent isoniazid neurotoxicity.",
        },
        {
          label:
            "Both toxicities are from Phase I CYP450 loss in the elderly (the page says 'geriatric patients lose phase I first'), so the slow-acetylator polymorphism is irrelevant; the intervention is to switch to a Phase II-metabolized alternative like rifampin.",
          text:
            "Both toxicities = elderly Phase I loss; switch to a Phase II alternative.",
          why:
            "Wrong on two counts. (1) The page explicitly identifies BOTH modifiers as relevant: 'geriatric patients lose phase I first' (Phase I decline) AND 'slow acetylators have ↑ adverse effects (eg, isoniazid)' (Phase II acetylation polymorphism). The slow-acetylator status is the reason the isoniazid accumulates in this patient — dismissing it ignores the page's explicit second modifier. (2) Rifampin is NOT a Phase II alternative to isoniazid — rifampin is a separate antibiotic (an RNA polymerase inhibitor) used in the standard RIPE regimen, not a substitute for isoniazid. Furthermore, rifampin is itself a potent CYP INDUCER that would interact with many drugs; it is not a 'safer' alternative. The intervention for the neuropathy is B6 supplementation; the hepatotoxicity is managed by discontinuing isoniazid and monitoring liver function.",
        },
        {
          label:
            "Both toxicities are from Phase II acetylation overload (the slow acetylator accumulates too much acetylated metabolite, which is the toxic species), and the elderly Phase I loss is irrelevant because isoniazid is a pure Phase II substrate. The intervention is to switch isoniazid to a faster-acetylator formulation.",
          text:
            "Both toxicities = Phase II acetylation overload; switch to a faster-acetylator formulation.",
          why:
            "Wrong on the toxic species and on the proposed intervention. The toxic species for HEPATOTOXICITY is acetylhydrazine (a downstream hydrolysis product of acetylisoniazid that is oxidized by Phase I CYP2E1 to reactive hepatotoxins), not the acetylated metabolite itself — and the page's acetylation-exception note (the acetylated metabolite is LESS polar) compounds the excretion problem but does not make acetylisoniazid itself the toxic species. The PERIPHERAL NEUROPATHY is from isoniazid depleting B6 (not from any acetylated metabolite). The elderly Phase I loss IS relevant — it reduces CYP2E1-mediated clearance of acetylhydrazine, contributing to hepatotoxicity. There is no 'faster-acetylator formulation' of isoniazid; the intervention is B6 supplementation (for the neuropathy) and dose reduction or discontinuation (for the hepatotoxicity).",
        },
        {
          label:
            "Peripheral neuropathy is a direct toxic effect of isoniazid on neurons (not B6-mediated), and hepatotoxicity is from Phase I oxidation of the parent isoniazid (not acetylhydrazine); the intervention is to add a CYP2E1 inducer like ethanol to clear the parent drug faster.",
          text:
            "Neuropathy = direct neuron toxicity; hepatotoxicity = Phase I oxidation of parent isoniazid; induce CYP2E1 with ethanol.",
          why:
            "Wrong on both the neuropathy mechanism and the hepatotoxicity mechanism, and the proposed intervention is actively harmful. The peripheral neuropathy is B6-MEDIATED (isoniazid inhibits pyridoxine metabolism), not a direct neuron toxicity — which is exactly why B6 supplementation prevents it. The hepatotoxicity is from Phase I oxidation of ACETYLHYDRAZINE (a downstream product of acetylation), not from oxidation of the parent isoniazid — and the elderly Phase I loss reduces CYP2E1 clearance of acetylhydrazine, contributing to hepatotoxicity (not preventing it). Inducing CYP2E1 with ethanol would INCREASE the oxidation of acetylhydrazine to reactive hepatotoxins, worsening the hepatotoxicity — chronic ethanol is a known risk factor for isoniazid hepatotoxicity precisely because it induces CYP2E1. The intervention for the neuropathy is B6; for the hepatotoxicity, discontinue isoniazid.",
        },
      ],
      reasoning:
        "The stem walks a single drug (isoniazid) through a patient with TWO convergent metabolism modifiers: elderly (Phase I loss) AND slow acetylator (Phase II acetylation loss). The page's framework predicts each contribution: (1) SLOW ACETYLATOR (NAT2 polymorphism) — the page states 'slow acetylators have ↑ adverse effects (eg, isoniazid)' because of ↓ Phase II acetylation rate; isoniazid and its downstream product acetylhydrazine accumulate. (2) ELDERLY — the page states 'geriatric patients lose phase I first'; CYP2E1 (the Phase I enzyme that clears acetylhydrazine) declines, so acetylhydrazine accumulates further. The two toxicities have distinct mechanisms: PERIPHERAL NEUROPATHY is from isoniazid depleting pyridoxine (B6) — slowed isoniazid clearance in the slow acetylator worsens the depletion, and the intervention is B6 supplementation (standard isoniazid prophylaxis, especially in slow acetylators, alcoholics, diabetics, the elderly, and pregnant patients). HEPATOTOXICITY is from acetylhydrazine (the hydrolysis product of acetylisoniazid) being oxidized by Phase I CYP2E1 to reactive hepatotoxins — the elderly Phase I loss reduces the CYP2E1-mediated clearance of acetylhydrazine, so it accumulates. The 30-year-old fast acetylator has NEITHER modifier: fast acetylation keeps isoniazid and acetylhydrazine low, and young Phase I clears acetylhydrazine rapidly. The page's two modifier sentences ('geriatric patients lose phase I first' and 'slow acetylators have ↑ adverse effects (eg, isoniazid)') each predict one of the two toxicities. The distractors fail at: 'Phase I decline damages nerves directly' (no, B6 depletion does); 'Phase II overload' (no, Phase II acetylation is reduced, not overloaded); 'slow-acetylator irrelevant' (the page makes it explicit); 'faster-acetylator formulation' (does not exist); 'direct neuron toxicity' (no, B6-mediated); 'ethanol induction' (would worsen hepatotoxicity, not prevent it).",
    },
  },
  mnemonics: [
    {
      code: "PHASE I = OXIDIZE / REDUCE / HYDROLYZE / METHYLATE (CYP450)",
      meaning:
        "Phase I has FOUR reaction types — Reduction, Oxidation, Hydrolysis, Methylation — and is predominantly CYP450-dependent. The mnemonic captures the four reactions and the CYP450 label in one phrase. The Phase I output is a SLIGHTLY POLAR METABOLITE (active or inactive) plus REACTIVE OXYGEN METABOLITES — the polarity is only slight, so Phase I alone is rarely enough to excrete a lipophilic drug; Phase II conjugation is usually needed to make the metabolite very polar and hydrophilic.",
      memorizes: "The four Phase I reaction types and the CYP450 dependence",
      whenToUse: "Any question asking which reactions are Phase I vs Phase II",
      clinical:
        "If the stem mentions CYP450, CYP3A4, CYP2D6, or any oxidation/reduction/hydrolysis/methylation → Phase I. Examples: codeine CYP2D6 → morphine (oxidation = bioactivation); diazepam CYP3A4 → nordiazepam (oxidation); procaine esterase → PABA (hydrolysis).",
    },
    {
      code: "PHASE II = CONJUGATE (GLUCURONIDE / SULFATE / ACETYLATE)",
      meaning:
        "Phase II has THREE conjugation reactions — Glucuronidation, Sulfation, Acetylation — each attaching a bulky polar conjugate (glucuronic acid, sulfate, or acetate) to the Phase I functional group. The Phase II output is a VERY POLAR, HYDROPHILIC METABOLITE — EXCEPT the acetylated metabolite, which is LESS polar than the parent (the lone Phase II exception, and the mechanism behind slow-acetylator accumulation of isoniazid). The mnemonic captures the three reactions and the conjugation concept in one phrase.",
      memorizes: "The three Phase II conjugation reactions and the polar-output rule (with the acetylation exception)",
      whenToUse: "Any question asking which reactions are Phase II, or asking about the acetylation exception",
      clinical:
        "If the stem mentions glucuronic acid, UDP-glucuronosyltransferase (UGT), sulfate, PAPS, acetyl-CoA, NAT2, or conjugation → Phase II. Examples: lorazepam UGT → lorazepam glucuronide; acetaminophen UGT/SULT → acetaminophen glucuronide/sulfate; isoniazid NAT2 → acetylisoniazid (the acetylation exception).",
    },
    {
      code: "GERIATRIC LOSES PHASE I FIRST",
      meaning:
        "The page's verbatim note: 'Geriatric patients lose phase I first.' Phase I (CYP450 oxidation, reduction, hydrolysis, methylation) declines with age as hepatic mass and blood flow fall; Phase II (glucuronidation, sulfation, acetylation) is relatively preserved. The clinical consequence: Phase-I-metabolized drugs (diazepam — oxidized; many psychotropics; CYP3A4 or CYP2D6 substrates) have longer half-lives in the elderly and require dose reduction; Phase-II-metabolized drugs (lorazepam, oxazepam, temazepam — the 'LOT' glucuronidated benzodiazepines) are preferred in the elderly and in hepatic dysfunction. This is the same Phase I vs Phase II aging axis shown on the pharmacokinetics page (PH2).",
      memorizes: "The geriatric Phase I vs Phase II aging pattern",
      whenToUse: "Any elderly prescribing question, especially benzodiazepine selection",
      clinical:
        "Use LOT (Lorazepam, Oxazepam, Temazepam) in the elderly and in liver disease — all are Phase II glucuronidated. Avoid diazepam, chlordiazepoxide, and midazolam in the elderly — all are Phase I CYP-oxidized and have longer t1/2 with age.",
    },
    {
      code: "SLOW ACETYLATORS ACCUMULATE (ISONIAZID, HYDRALAZINE, PROCAINAMIDE, DAPSONE)",
      meaning:
        "The page's verbatim note: 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' The NAT2 slow-acetylator polymorphism reduces Phase II acetylation, so the four NAT2 substrates — isoniazid, hydralazine, procainamide, dapsone — accumulate. Each produces a predictable adverse effect: isoniazid → hepatotoxicity + peripheral neuropathy (B6 depletion); hydralazine + procainamide → drug-induced lupus (positive antihistone antibody); dapsone → hemolysis (especially in G6PD deficiency). The page's acetylation exception (the acetylated metabolite is LESS polar than the parent) compounds the accumulation: the slower-formed acetylated metabolite is also less readily excreted.",
      memorizes: "The four NAT2-substrate drugs and their slow-acetylator adverse effects",
      whenToUse: "Any question about isoniazid, hydralazine, procainamide, or dapsone toxicity, or any 'slow acetylator' stem",
      clinical:
        "Slow acetylator + isoniazid → hepatotoxicity + neuropathy (give B6); slow acetylator + hydralazine/procainamide → drug-induced lupus (antihistone+); slow acetylator + dapsone → hemolysis (especially G6PD-deficient). The four drugs are the test set.",
    },
  ],
  rapidReview: {
    s30: [
      "Drugs can be metabolized by either or both phase I and phase II reactions; the reactions bioactivate or deactivate substances and do NOT have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)",
      "Phase I (predominantly CYP450-dependent): Reduction, Oxidation, Hydrolysis, Methylation → Slightly polar metabolite (active or inactive) + Reactive oxygen metabolites",
      "Phase II (conjugation): Glucuronidation, Acetylation, Sulfation → Very polar, hydrophilic metabolite (EXCEPT the acetylated metabolite, which is LESS polar than the parent)",
      "Two input rails: Lipophilic drugs → Phase I → Phase II → Excretion; Polar drugs (water-soluble) → Phase II directly (skip Phase I)",
      "Excretion routes: Serum (urine, sweat) and bile (stool) — the kidney filters water-soluble metabolites; the liver secretes larger conjugates into bile",
      "Geriatric patients lose Phase I first — Phase I CYP450 declines with age; Phase II conjugation is relatively preserved (the same Phase I vs Phase II aging axis shown on the pharmacokinetics page)",
      "Slow acetylators have ↑ adverse effects from ↓ rate of metabolism (eg, isoniazid) — NAT2 polymorphism reduces Phase II acetylation",
      "The four NAT2-substrate drugs: isoniazid (hepatotoxicity + neuropathy), hydralazine + procainamide (drug-induced lupus), dapsone (hemolysis)",
      "Bioactivation = prodrug → active metabolite (eg, codeine CYP2D6 → morphine); deactivation = active → inactive; Phase I output can be either ('active or inactive')",
      "Acetylation is the lone Phase II exception — the acetylated metabolite is LESS polar than the parent, which is why slow acetylators accumulate isoniazid (slower formation AND less readily excreted)",
    ],
    m3: [
      "PHASE I = OXIDIZE/REDUCE/HYDROLYZE/METHYLATE (CYP450) — slightly polar metabolite (active or inactive) + reactive oxygen metabolites",
      "PHASE II = CONJUGATE (GLUCURONIDE/SULFATE/ACETYLATE) — very polar hydrophilic metabolite (EXCEPT acetylated, which is less polar)",
      "GERIATRIC LOSES PHASE I FIRST — use Phase II alternatives (LOT: lorazepam, oxazepam, temazepam)",
      "SLOW ACETYLATORS ACCUMULATE (isoniazid, hydralazine, procainamide, dapsone) — NAT2 polymorphism reduces Phase II acetylation",
      "Lipophilic drugs need both phases; polar drugs skip Phase I; excretion via Serum (urine, sweat) and bile (stool)",
    ],
    m10: [
      "Phase I (CYP450): Reduction, Oxidation, Hydrolysis, Methylation → slightly polar metabolite (active or inactive) + reactive oxygen metabolites",
      "Phase II (conjugation): Glucuronidation (UGT, UDP-glucuronic acid), Acetylation (NAT1/NAT2, acetyl-CoA), Sulfation (SULT, PAPS) → very polar hydrophilic metabolite (except acetylated — less polar)",
      "Two input rails: Lipophilic drugs → Phase I → Phase II → Excretion (Serum [urine, sweat], bile [stool]); Polar drugs → Phase II directly",
      "Reactions do NOT have to take place sequentially — phase I can follow phase II, or take place as a single reaction; some drugs (morphine, acetaminophen) undergo Phase II directly",
      "Modifiers: Geriatric patients lose Phase I first (Phase II preserved → use LOT benzodiazepines); slow acetylators accumulate isoniazid/hydralazine/procainamide/dapsone (NAT2 polymorphism → ↑ adverse effects)",
    ],
  },
  recall: [
    {
      q: "The Drug metabolism intro verbatim (either or both phase I and phase II reactions; bioactivate or deactivate; not necessarily sequential).",
      a: "Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction).",
    },
    {
      q: "The Phase I reaction list and the Phase I output verbatim (with the CYP450 label).",
      a: "Phase I (predominantly CYP450-dependent) — the four reaction types are Reduction, Oxidation, Hydrolysis, Methylation. The Phase I output is a Slightly polar metabolite (active or inactive) plus Reactive oxygen metabolites.",
    },
    {
      q: "The Phase II reaction list and the Phase II output verbatim (with the acetylation exception).",
      a: "Phase II (conjugation) — the three reaction types are Glucuronidation, Acetylation, Sulfation. The Phase II output is a Very polar, hydrophilic metabolite — EXCEPT the acetylated metabolite, which is LESS polar than the parent (the page's verbatim exception: 'except acetylated metabolite').",
    },
    {
      q: "The two input rails and the Excretion routes verbatim.",
      a: "Two input rails: Lipophilic drugs → Phase I → Phase II → Excretion; Polar drugs (water-soluble) → Phase II directly (skip Phase I). Excretion routes: Serum (urine, sweat) and bile (stool) — the kidney filters water-soluble metabolites; the liver secretes larger conjugates into bile for fecal elimination.",
    },
    {
      q: "The two modifier sentences verbatim (geriatric Phase I loss; slow acetylators).",
      a: "Geriatric patients lose phase I first. Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid). The geriatric note drives benzodiazepine selection (LOT — Lorazepam, Oxazepam, Temazepam — Phase II glucuronidated, preferred over Phase I diazepam). The slow-acetylator note predicts toxicity from four NAT2-substrate drugs: isoniazid (hepatotoxicity + neuropathy, give B6), hydralazine and procainamide (drug-induced lupus, antihistone+), dapsone (hemolysis, especially G6PD-deficient).",
    },
  ],
  related: [
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The preceding page (PH2) is the PK foundation for this metabolism page: the age-related PK changes section on book 229 states 'Phase I of drug metabolism is decreased; phase II is relatively preserved' — the exact same Phase I vs Phase II aging axis that book 230 captures in the verbatim 'Geriatric patients lose phase I first' modifier sentence. The t1/2 = 0.7 × Vd / CL equation on PH2 propagates Phase I/II loss into half-life: ↓ Phase I clearance → ↑ t1/2 (eg, diazepam in the elderly). The bioavailability F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100 formula on PH2 is also Phase-I-dependent — first-pass metabolism (Phase I CYP3A4 in the gut wall and liver) lowers oral F, and the elderly's Phase I loss raises oral F (more drug reaches systemic circulation per oral dose).",
    },
    {
      title: "Enzyme Kinetics — Michaelis-Menten and Inhibition",
      topicId: "enzyme-kinetics",
      note:
        "The preceding page (PH1) is the kinetic foundation for this metabolism page: CYP450 enzymes are Michaelis-Menten enzymes with their own Km and Vmax — Phase I saturation is the mechanism behind zero-order elimination (the next page, elimination-of-drugs). The inhibition-type axis on PH1 (reversible competitive / irreversible competitive / noncompetitive) is the framework for every CYP drug-drug interaction: ketoconazole, ritonavir, and grapefruit juice are reversible competitive CYP3A4 inhibitors (↑ Km, ↓ potency of co-administered CYP3A4 substrates); erythromycin and clarithromycin are mechanism-based irreversible CYP3A4 inhibitors; rifampin, phenytoin, carbamazepine, and St. John's wort are CYP inducers (↑ Vmax by ↑ enzyme synthesis — the opposite kinetic move). The Km-vs-affinity rule (high Km = low affinity) predicts which CYP isoform dominates a given drug's metabolism.",
    },
    {
      title: "Ethanol Metabolism — ADH, MEOS, and Catalase",
      topicId: "ethanol-metabolism",
      note:
        "Ethanol metabolism is the textbook Phase I example: ethanol → acetaldehyde (via alcohol dehydrogenase, the major route; via CYP2E1 MEOS, induced by chronic ethanol; via catalase, minor). CYP2E1 is the Phase I enzyme induced by chronic ethanol — and it is the same CYP2E1 that oxidizes acetylhydrazine (the isoniazid hepatotoxic intermediate) to reactive hepatotoxins. The page's slow-acetylator + isoniazid hepatotoxicity is therefore compounded in chronic ethanol users (CYP2E1 induction → more acetylhydrazine oxidation → worse hepatotoxicity). The ethanol page's NADH excess (high NADH/NAD+ from ADH and ALDH2) is a Phase I byproduct in the same sense that the drug-metabolism page flags 'reactive oxygen metabolites' as a Phase I byproduct of CYP450 oxidation.",
    },
    {
      title: "Antimicrobial Overview — Target Classes",
      topicId: "antimicrobial-overview",
      note:
        "Isoniazid is the page's named example of a slow-acetylator-accumulated drug, and the antimicrobial pages are the clinical home of isoniazid (the RIPE regimen for TB). The same NAT2 slow-acetylator polymorphism predicts isoniazid hepatotoxicity and peripheral neuropathy (B6 depletion — the rationale for B6 prophylaxis with isoniazid). Sulfonamides are Phase II acetylation substrates too (N1-acetylation) — slow acetylators accumulate sulfonamides and are at higher risk of sulfonamide toxicity. Many antimicrobials are CYP substrates (macrolides — CYP3A inhibitors; rifampin — CYP3A inducer; fluoroquinolones — CYP1A2 inhibitors) — the Phase I axis on this page is the framework for every antimicrobial drug-drug interaction.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (cytochrome P450 and conjugation enzymology)",
      connection:
        "The Phase I (CYP450) and Phase II (UGT/NAT/SULT) enzymes on this page are biochemistry fundamentals: CYP450 is a heme-thiolate monooxygenase superfamily (CYP3A4, CYP2D6, CYP2E1, CYP1A2 are the major drug-metabolizing isoforms); UGT (UDP-glucuronosyltransferase) uses UDP-glucuronic acid; SULT (sulfotransferase) uses PAPS (3'-phosphoadenosine-5'-phosphosulfate); NAT (N-acetyltransferase, NAT1 and NAT2) uses acetyl-CoA. The heme-oxygen-rebound mechanism of CYP450 produces the 'reactive oxygen metabolites' the page flags as a Phase I byproduct — the source of oxidative stress in heavy Phase I loads (eg, acetaminophen CYP2E1 → NAPQI hepatotoxicity).",
    },
    {
      subject: "Pharmacology (drug-drug interactions and CYP induction/inhibition)",
      connection:
        "This page is the entry point to the entire drug-interaction axis in the Pharmacology chapter — CYP inducers (rifampin, phenytoin, carbamazepine, phenobarbital, St. John's wort, griseofulvin, smoking → CYP1A2) ↑ Phase I Vmax by ↑ enzyme synthesis (lower plasma levels of co-substrates); CYP inhibitors (ketoconazole, ritonavir, erythromycin, grapefruit juice, SSRIs → CYP2D6) ↓ Phase I activity (raise plasma levels of co-substrates). The Phase II acetylation polymorphism (NAT2) is one of three classical Phase II polymorphisms (NAT2 slow acetylator; UGT1A1 Gilbert syndrome; TPMT deficiency → thiopurine myelosuppression) — each shifts a Phase II capacity and predicts a clinical toxicity.",
    },
    {
      subject: "Geriatrics (elderly prescribing and the Beers criteria)",
      connection:
        "The page's 'Geriatric patients lose phase I first' note is the entire foundation of geriatric benzodiazepine selection: the Beers criteria list diazepam, chlordiazepoxide, and midazolam (Phase I CYP-oxidized, long t1/2 in the elderly) as potentially inappropriate medications in older adults; the LOT benzodiazepines (lorazepam, oxazepam, temazepam — Phase II glucuronidated, preserved clearance) are the safer alternatives. The same Phase I loss explains elderly toxicity from Phase I-metabolized drugs like phenytoin, theophylline, and many opioids (with the exception of morphine, which is Phase II glucuronidated and so is relatively preserved in the elderly).",
    },
    {
      subject: "Infectious disease (TB therapy and the RIPE regimen)",
      connection:
        "Isoniazid is the page's named slow-acetylator example, and isoniazid is the cornerstone of TB therapy (RIPE: Rifampin, Isoniazid, Pyrazinamide, Ethambutol). The NAT2 slow-acetylator polymorphism predicts isoniazid hepatotoxicity (transaminase elevation, occasionally fulminant hepatitis) and isoniazid-induced peripheral neuropathy (B6 depletion — give pyridoxine). The same polymorphism predicts hydralazine- and procainamide-induced lupus (antihistone positive) and dapsone hemolysis (especially in G6PD-deficient patients). The TB therapy page's monitoring protocol (baseline LFTs, monthly symptom check, B6 supplementation) is built on the Phase II acetylation axis this page introduces.",
    },
  ],
};
