import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOLOGY banner (PH-batch 3). Source: pdf 252 / book 230
// (Pharmacology — Pharmacokinetics and Pharmacodynamics: Drug metabolism —
// the TOP half of a SHARED page; the bottom half, "Elimination of drugs",
// is the sibling topic elimination-of-drugs, the p196 shared-page
// convention — only the metabolism block's contiguous lines are quoted,
// stopping before the "Elimination of drugs" heading). The metabolism
// block carries [1] the intro rule — "Drugs can be metabolized by either
// or both phase I and phase II reactions. These reactions serve to
// bioactivate or deactivate substances, and do not have to take place
// sequentially (eg, phase I can follow phase II, or take place as a
// single reaction)" — [2] the geriatric rule — "Geriatric patients lose
// phase I first" — [3] the slow-acetylator rule — "Patients who are slow
// acetylators have ↑ adverse effects from certain drugs because of ↓
// rate of metabolism (eg, isoniazid)" — and [4] ONE vector flow figure:
// Lipophilic drugs → Phase I (predominantly CYP450-dependent:
// Reduction, Oxidation, Hydrolysis) → Slightly polar metabolite
// (active or inactive) + Reactive oxygen metabolites → Phase II
// (Methylation, Acetylation, Glucuronidation, Sulfation) → Very polar,
// hydrophilic metabolite (except acetylated metabolite) → Excretion:
// Serum (urine, sweat), bile (stool). The figure also prints "Polar
// drugs (water-soluble)" — which bypass phase I and feed phase II
// directly — and prints "Reactive oxygen metabolites" TWICE (in the
// phase I output cluster and again beside the Phase II header).
// Census (pdfimages + VLM, ph3-vlm-census.ts): ZERO raster images on
// the page — pure text + the ONE vector flow figure; NO margin notes or
// mnemonics anywhere in the metabolism half (VLM confirmed). The KYP
// memory layer is original.

export const drugMetabolism: KypUsMLENote = {
  id: "drug-metabolism",
  title: "Drug Metabolism: Phase I & Phase II",
  subtitle:
    "The hepatic biotransformation fork — how a fat-soluble drug becomes a water-soluble one (book 230). Drugs can be metabolized by either or both phase I and phase II reactions; the reactions serve to bioactivate or deactivate substances and do NOT have to take place sequentially (phase I can follow phase II, or take place as a single reaction). PHASE I — predominantly CYP450-dependent functionalization (Reduction, Oxidation, Hydrolysis) → a slightly polar metabolite (active or inactive) plus reactive oxygen metabolites. PHASE II — conjugation (Methylation, Acetylation, Glucuronidation, Sulfation) → a very polar, hydrophilic metabolite (EXCEPT the acetylated metabolite) → excretion via serum (urine, sweat) or bile (stool). Two clinical rules ride on the fork: geriatric patients lose phase I first, and slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 230–230 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Drug metabolism; …)",
  tags: [
    "drug metabolism",
    "phase I metabolism",
    "phase II metabolism",
    "CYP450",
    "cytochrome P450",
    "biotransformation",
    "reduction",
    "oxidation",
    "hydrolysis",
    "methylation",
    "acetylation",
    "glucuronidation",
    "sulfation",
    "conjugation",
    "slow acetylator",
    "fast acetylator",
    "isoniazid",
    "geriatric pharmacology",
    "bioactivation",
    "prodrugs",
    "reactive oxygen metabolites",
    "lipophilic drugs",
    "polar drugs",
    "excretion",
    "bile",
    "urine",
    "pharmacokinetics",
  ],
  core: {
    what:
      "Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction). PHASE I — predominantly CYP450-dependent functionalization: Reduction, Oxidation, Hydrolysis convert a lipophilic drug into a slightly polar metabolite (active or inactive) while also generating reactive oxygen metabolites. PHASE II — conjugation: Methylation, Acetylation, Glucuronidation, and Sulfation attach an endogenous group to make a very polar, hydrophilic metabolite (except the acetylated metabolite), which exits via excretion — Serum (urine, sweat), bile (stool). Polar drugs (water-soluble) can skip phase I and enter phase II directly. Geriatric patients lose phase I first. Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).",
    why:
      "This is the machinery every later pharmacology page quietly depends on: the CYP450 system that phase I names is the same enzyme family the inducer/inhibitor questions and drug-interaction questions turn on; the phase II conjugation step is why metabolites appear in urine and bile; and the two printed clinical rules are the two classic patient-specific modifiers of metabolism — AGE (geriatric patients lose phase I first, because the predominantly CYP450-dependent reactions decline before the conjugation reactions do) and GENETIC PACE (slow acetylators clear acetylation-dependent drugs like isoniazid slowly, so the drug lingers and adverse effects rise). The 'either or both' + 'not sequential' clauses exist because the naive picture — a mandatory ladder of phase I then phase II — is wrong: a drug can be metabolized by phase I alone, by phase II alone, by both in either order, or a single reaction can finish the job. And the flow figure's most testable asymmetry is its exception: of the four phase II products, only the acetylated metabolite fails to become very polar and hydrophilic.",
    keyIdea:
      "Read every metabolism question through four gates. GATE 1 — THE FORK: which phase(s) does this drug need? Lipophilic drug → phase I first (CYP450-dependent reduction/oxidation/hydrolysis → slightly polar metabolite, active or inactive, + reactive oxygen metabolites) → phase II; polar drug (water-soluble) → skip phase I, phase II directly; some drugs need only one reaction. GATE 2 — THE PAYOFF: phase II conjugation (methylation, acetylation, glucuronidation, sulfation) makes the metabolite very polar and hydrophilic — EXCEPT acetylation — so it can be excreted via serum (urine, sweat) or bile (stool). GATE 3 — THE PATIENT MODIFIERS: geriatric → phase I is lost first (dose CYP450-dependent drugs cautiously); slow acetylator → ↓ rate of metabolism → ↑ adverse effects (eg, isoniazid). GATE 4 — THE DIRECTION: phase reactions bioactivate OR deactivate — metabolism is not synonym for detoxification (prodrugs are activated by phase I; reactive oxygen metabolites are generated by it).",
  },
  mechanisms: [
    {
      id: "phase-fork-map",
      title:
        "The phase fork: lipophilic drugs in, excreted metabolites out (with the polar-drug bypass)",
      context: "The flow figure (book 230)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Lipophilic drugs (and the polar bypass lane)",
            sublabel:
              "Input — lipophilic (fat-soluble) drugs cannot be excreted as-is and enter phase I; polar drugs (water-soluble) bypass phase I and feed phase II directly (the figure's second input lane).",
            variant: "input",
          },
          {
            id: "phase1",
            label: "PHASE I — predominantly CYP450-dependent functionalization",
            sublabel:
              "Reduction, Oxidation, Hydrolysis — the CYP450 reactor partially modifies the drug, yielding a SLIGHTLY POLAR METABOLITE (active or inactive) plus REACTIVE OXYGEN METABOLITES (the figure prints the reactive-oxygen label twice: at the phase I output and again beside the phase II header).",
            variant: "process",
          },
          {
            id: "phase2",
            label: "PHASE II — conjugation",
            sublabel:
              "Methylation, Acetylation, Glucuronidation, Sulfation — conjugation enzymes attach endogenous groups, yielding a VERY POLAR, HYDROPHILIC METABOLITE (except the acetylated metabolite — the figure's one exception).",
            variant: "process",
          },
          {
            id: "excretion",
            label: "EXCRETION — Serum (urine, sweat), bile (stool)",
            sublabel:
              "Output — the very polar, hydrophilic metabolite leaves via the serum route (urine, sweat) or the biliary route (bile → stool).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "phase1", label: "lipophilic drugs" },
          {
            from: "phase1",
            to: "phase2",
            label: "slightly polar metabolite (active or inactive)",
          },
          {
            from: "input",
            to: "phase2",
            label: "polar drugs (water-soluble) skip phase I",
          },
          {
            from: "phase2",
            to: "excretion",
            label: "very polar, hydrophilic — except acetylated",
          },
        ],
      },
    },
    {
      id: "acetylator-pace-map",
      title:
        "The acetylator pace chart: fast vs slow acetylation of isoniazid",
      context: "The slow-acetylator rule (book 230)",
      flow: {
        nodes: [
          {
            id: "drug",
            label: "An acetylation-dependent drug (eg, isoniazid)",
            sublabel:
              "Input — acetylation is one of the four phase II conjugations (methylation, acetylation, glucuronidation, sulfation); for isoniazid it is the dominant clearance route.",
            variant: "input",
          },
          {
            id: "pace",
            label: "THE PACE STEP — the patient's acetylation rate",
            sublabel:
              "Process — the patient's acetylator phenotype sets the rate of the phase II acetylation step; the drug's fate forks on this pace.",
            variant: "process",
          },
          {
            id: "slow",
            label: "SLOW ACETYLATOR — ↓ rate of metabolism",
            sublabel:
              "Consequence — the drug is metabolized slowly, levels persist, and the patient has ↑ adverse effects from certain drugs (eg, isoniazid: peripheral neuropathy and hepatotoxicity).",
            variant: "inhibit",
          },
          {
            id: "fast",
            label: "FAST ACETYLATOR — metabolism keeps pace",
            sublabel:
              "Comparator — with a normal-to-fast acetylation rate the same dose is cleared at rate, without the slow-acetylator accumulation of adverse effects.",
            variant: "target",
          },
        ],
        edges: [
          { from: "drug", to: "pace", label: "phase II acetylation" },
          { from: "pace", to: "slow", label: "↓ rate of metabolism" },
          { from: "pace", to: "fast", label: "rate maintained" },
          { from: "slow", to: "fast", label: "↑ adverse effects vs none", type: "inhibit" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "metabolism-phase-map",
      title: "The metabolism phase map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source flow figure (book 230): a LIPOPHILIC-DRUG chip (with the POLAR-DRUGS bypass lane that skips phase I) flowing into the PHASE I reactor — predominantly CYP450-dependent, with Reduction / Oxidation / Hydrolysis as its three sub-chutes — producing the SLIGHTLY POLAR METABOLITE (active or inactive) plus a REACTIVE-OXYGEN-METABOLITES warning flag; then the PHASE II conjugation station — Methylation / Acetylation / Glucuronidation / Sulfation — producing the VERY POLAR, HYDROPHILIC METABOLITE with the EXCEPT-ACETYLATED exception chip; then the two EXCRETION routes (serum → urine, sweat; bile → stool); plus the two clinical-rule callout cards (geriatric patients lose phase I first; slow acetylators → ↑ adverse effects from ↓ rate of metabolism, eg isoniazid) and the FORKS-NOT-A-LADDER banner (either or both phases, bioactivate or deactivate, never obligately sequential).",
      notice:
        "Census (pdfimages + VLM, ph3-vlm-census.ts): ZERO raster images on the page — the metabolism half is pure text plus ONE vector flow figure (VLM confirmed the topology: lipophilic drugs → phase I → slightly polar metabolite + reactive oxygen metabolites → phase II → very polar hydrophilic metabolite (except acetylated) → excretion; polar drugs (water-soluble) feed phase II directly, bypassing phase I; NO margin notes or mnemonics print anywhere in the metabolism half). The pipeline glyphs, the bypass lane, the exception chip, the two rule cards, and the banner are an ORIGINAL KYP redraw; the figure's labels are also carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title:
        "Book 230 — the phase I/II flow figure, carried verbatim (every printed label)",
      intro:
        "The flow figure's stations and labels exactly as printed, in flow order — including the polar-drug input lane and the twice-printed reactive-oxygen label.",
      columns: ["FLOW STATION", "PRINTED LABELS — book 230 (verbatim)"],
      rows: [
        [
          "INPUTS",
          "Lipophilic drugs · Polar drugs (water-soluble) — the two entry nodes: lipophilic drugs enter phase I; polar drugs (water-soluble) bypass phase I and feed phase II directly.",
        ],
        [
          "PHASE I",
          "Phase I (predominantly CYP450-dependent) — Reduction · Oxidation · Hydrolysis.",
        ],
        [
          "PHASE I OUTPUT",
          "Slightly polar metabolite (active or inactive) · Reactive oxygen metabolites — the reactive-oxygen label prints a second time beside the Phase II header as well.",
        ],
        [
          "PHASE II",
          "Phase II — Methylation · Acetylation · Glucuronidation · Sulfation.",
        ],
        [
          "PHASE II OUTPUT",
          "Very polar, hydrophilic metabolite (except acetylated metabolite) — the figure's one printed exception.",
        ],
        [
          "EXCRETION",
          "Excretion — Serum (urine, sweat), bile (stool).",
        ],
      ],
      caption:
        "One pipeline, one fork, one exception: CYP450-dependent phase I functionalization (reduction/oxidation/hydrolysis) turns lipophilic drugs into slightly polar metabolites (plus reactive oxygen metabolites); phase II conjugation (methylation/acetylation/glucuronidation/sulfation) finishes the job — every product very polar and hydrophilic except the acetylated one — and the metabolite leaves by serum (urine, sweat) or bile (stool).",
    },
    {
      kind: "steps",
      title: "The pipeline in six stations — from a fat-soluble molecule to the toilet",
      intro:
        "The flow figure distilled into an ordered walk; each station names its printed labels — ENTER, REACT, FLAG, CONJUGATE, EXCEPT, EXIT.",
      steps: [
        {
          label: "ENTER — lipophilic drugs (or the polar bypass)",
          detail:
            "Lipophilic drugs cannot be excreted unchanged, so they enter phase I; polar drugs (water-soluble) skip phase I and feed phase II directly.",
        },
        {
          label: "REACT — phase I, predominantly CYP450-dependent",
          detail:
            "Reduction, Oxidation, Hydrolysis: the CYP450 reactor partially functionalizes the drug — the reactions bioactivate or deactivate substances (phase I can even follow phase II, or take place as a single reaction).",
        },
        {
          label: "FLAG — the slightly polar metabolite + reactive oxygen metabolites",
          detail:
            "Phase I's output is a slightly polar metabolite (active or inactive) — the parenthetical is the prodrug clause — plus reactive oxygen metabolites, the byproduct that makes CYP450 oxidation a toxifying step.",
        },
        {
          label: "CONJUGATE — phase II",
          detail:
            "Methylation, Acetylation, Glucuronidation, Sulfation: conjugation caps the molecule with an endogenous group, making it very polar and hydrophilic.",
        },
        {
          label: "EXCEPT — the acetylated metabolite",
          detail:
            "Of the four conjugates, only the acetylated metabolite is NOT very polar and hydrophilic — the figure's one printed exception, and the exam's favorite reversal.",
        },
        {
          label: "EXIT — excretion",
          detail:
            "Serum (urine, sweat) or bile (stool): the hydrophilic metabolite leaves by the renal/sweat route or the biliary route.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 29-year-old woman started on isoniazid for latent tuberculosis infection returns 6 weeks later with numbness and tingling in a stocking-glove distribution; she is known to be a slow acetylator.",
        discriminator:
          "Slow acetylator → ↓ rate of metabolism → ↑ adverse effects (eg, isoniazid)",
        concept: "The slow-acetylator rule (phase II pace)",
        answer:
          "Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid). Acetylation is one of the four phase II conjugations; when the patient's acetylation step runs slowly, the drug accumulates and its adverse effects — for isoniazid, the classic peripheral neuropathy — surface at standard doses.",
      },
      {
        stem: "A 78-year-old man started on a standard adult dose of a drug cleared predominantly by CYP450-dependent oxidation is found to have supratherapeutic plasma levels and dose-related adverse effects; his renal function is normal for age.",
        discriminator:
          "Geriatric patients lose phase I first — the predominantly CYP450-dependent reactions decline before phase II conjugation",
        concept: "The geriatric rule (phase I lost first)",
        answer:
          "Geriatric patients lose phase I first. The predominantly CYP450-dependent reactions (reduction, oxidation, hydrolysis) decline with age before the phase II conjugation reactions do, so phase-I-dependent drugs accumulate at doses that were appropriate in younger adults — a metabolism problem, not a renal one.",
      },
      {
        stem: "An investigational prodrug is pharmacologically inert until it undergoes CYP450-dependent oxidation, which converts it into its active form; a patient co-treated with a potent CYP450 inhibitor has subtherapeutic effect.",
        discriminator:
          "Phase reactions serve to bioactivate or deactivate substances — metabolism is not always detoxification",
        concept: "Bioactivation (the 'active or inactive' clause)",
        answer:
          "Drugs can be metabolized by either or both phase I and phase II reactions, and these reactions serve to bioactivate or deactivate substances — the figure's 'slightly polar metabolite (active or inactive)' is the printed witness. A prodrug that requires CYP450-dependent oxidation for activation fails when the enzyme is inhibited, even though 'metabolism' sounds like it should lower drug effect.",
      },
      {
        stem: "A hepatology researcher traces a drug's CYP450-dependent oxidation and documents that the enzyme reaction itself generates reactive intermediates that mediate the drug's centrilobular hepatic necrosis.",
        discriminator:
          "Phase I generates reactive oxygen metabolites alongside the slightly polar metabolite",
        concept: "The reactive-oxygen-metabolites output",
        answer:
          "The flow figure prints a second arrow out of phase I: alongside the slightly polar metabolite (active or inactive), CYP450-dependent functionalization generates reactive oxygen metabolites — the printed reason a phase I step can be the toxifying step rather than the detoxifying one (the label prints twice on the page, at the phase I output and beside the phase II header).",
      },
    ],
    traps: [
      {
        a: "Phase I (predominantly CYP450-dependent)",
        b: "Phase II (conjugation)",
        whyConfused:
          "Both are 'metabolism' and both end in a polar metabolite headed for excretion",
        keyDifference:
          "PHASE I is predominantly CYP450-dependent FUNCTIONALIZATION — Reduction, Oxidation, Hydrolysis → a SLIGHTLY polar metabolite (active or inactive) + reactive oxygen metabolites; PHASE II is CONJUGATION — Methylation, Acetylation, Glucuronidation, Sulfation → a VERY polar, hydrophilic metabolite (except the acetylated metabolite)",
        clue:
          "A named CYP enzyme or a redox reaction → phase I; an added endogenous group (-methyl, -acetyl, glucuronide, sulfate) → phase II",
      },
      {
        a: "'Phase I must precede phase II'",
        b: "The printed non-sequential rule",
        whyConfused:
          "The flow figure reads left-to-right like a mandatory assembly line",
        keyDifference:
          "The page states the opposite: drugs can be metabolized by either or both phase I and phase II reactions, and they do NOT have to take place sequentially — phase I can follow phase II, or take place as a single reaction",
        clue:
          "Any option claiming a fixed phase I → phase II order, or that both phases are always required, contradicts the printed rule",
      },
      {
        a: "Acetylation",
        b: "The other three phase II conjugations",
        whyConfused:
          "All four are phase II conjugations, so all four 'should' behave alike",
        keyDifference:
          "Methylation, Glucuronidation, and Sulfation yield the VERY polar, hydrophilic metabolite — the acetylated metabolite is the printed EXCEPTION and is not very polar/hydrophilic",
        clue:
          "A question that treats acetylation as just another polarizing conjugation is testing whether you caught the 'except acetylated metabolite' parenthetical",
      },
      {
        a: "Bioactivation",
        b: "Deactivation",
        whyConfused:
          "'Metabolism' is used loosely as a synonym for detoxification",
        keyDifference:
          "The printed rule is bidirectional — the reactions serve to BIOACTIVATE or DEACTIVATE substances: a prodrug can be switched ON by phase I, and reactive oxygen metabolites generated by phase I can be MORE toxic than the parent drug",
        clue:
          "A prodrug needing oxidation for effect = bioactivation; a toxic reactive intermediate from a CYP450 step = bioactivation of the wrong kind",
      },
    ],
    pivots: [
      {
        lookAlike:
          "A patient with ↑ toxicity from a standard drug dose — is it the patient or the drug?",
        differentiator:
          "Route by the two printed modifiers: AGE — geriatric patients lose phase I first, so a predominantly CYP450-dependent drug accumulates; GENETIC PACE — slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid). A young, fast-metabolizing patient with toxicity points away from metabolism entirely (dose, renal elimination, drug interaction).",
        correctPath:
          "Ask which phase the drug depends on, then ask whether this patient has lost it (geriatric → phase I) or runs it slowly (slow acetylator → phase II acetylation)",
      },
      {
        lookAlike:
          "A question about a metabolite's polarity or its route out of the body",
        differentiator:
          "Slightly polar metabolite (active or inactive) = the phase I product, still not water-soluble enough for ready excretion; very polar, hydrophilic metabolite (except the acetylated metabolite) = the phase II product, cleared by excretion — Serum (urine, sweat), bile (stool).",
        correctPath:
          "Match the polarity adjective to its phase, then route the phase II product by serum (urine, sweat) or bile (stool) — and remember the acetylated conjugate is the exception that never becomes very polar",
      },
      {
        lookAlike:
          "A lipophilic drug vs a polar (water-soluble) drug — how much machinery does each need?",
        differentiator:
          "Lipophilic drugs enter phase I (predominantly CYP450-dependent: reduction, oxidation, hydrolysis) before phase II conjugation; polar drugs (water-soluble) bypass phase I and feed phase II directly — and a drug can be metabolized by either or both phases, or by a single reaction.",
        correctPath:
          "Fat-soluble → the full fork (phase I then phase II, in either order or as a single reaction); already water-soluble → the phase II bypass lane",
      },
    ],
    miniCase: {
      vignette:
        "Two patients are seen in the same afternoon clinic. Patient A is a 34-year-old woman who began isoniazid for latent tuberculosis infection 7 weeks ago and now reports burning paresthesias and numbness in both feet in a stocking-glove distribution; phenotyping shows she is a slow acetylator. Patient B is a 79-year-old man started 2 weeks ago on a standard adult dose of a drug that is cleared predominantly by CYP450-dependent oxidation; he has become somnolent with supratherapeutic plasma drug levels, and his estimated renal clearance is normal for his age. Which pair of mechanisms best explains both presentations?",
      question:
        "Identify the mechanism for each patient — Patient A first, Patient B second — and choose the option that correctly pairs them.",
      options: [
        {
          label:
            "Patient A: ↓ rate of phase II acetylation (slow acetylator) → ↑ adverse effects from isoniazid, presenting as peripheral neuropathy · Patient B: age-related loss of phase I metabolism first, so the predominantly CYP450-dependent (oxidation) drug accumulates",
          text:
            "One patient runs a phase II step slowly; the other has lost phase I with age.",
          correct: true,
          why:
            "Correct on both layers. PATIENT A — the printed rule: 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' Acetylation is one of the four phase II conjugations (methylation, acetylation, glucuronidation, sulfation); a slow acetylator clears isoniazid slowly, drug levels persist, and the classic dose-related adverse effect — peripheral neuropathy — emerges at a standard dose. PATIENT B — the printed rule: 'Geriatric patients lose phase I first.' The predominantly CYP450-dependent reactions (reduction, oxidation, hydrolysis) decline with age before phase II conjugation does, so a drug whose clearance depends on CYP450-dependent oxidation accumulates in an elderly patient even when renal function is intact — hence the supratherapeutic levels with a normal-for-age renal clearance.",
        },
        {
          label:
            "Patient A: rapid acetylation that inactivates isoniazid too quickly, causing a paradoxical neuropathy from subtherapeutic levels · Patient B: age-related loss of phase II conjugation first, with phase I preserved",
          text: "A pace problem and an age problem — both in the wrong direction.",
          why:
            "Both clauses invert the printed rules. Slow — not rapid — acetylation is the genotype that raises adverse effects (a rapid acetylator would tend toward subtherapeutic effect, not neuropathy from accumulation); and geriatric patients lose PHASE I first — the predominantly CYP450-dependent reactions — not phase II.",
        },
        {
          label:
            "Both patients demonstrate zero-order (capacity-limited) elimination: isoniazid and the CYP450-dependent drug each saturate their elimination machinery at therapeutic doses",
          text: "Blame the kinetics, not the patient.",
          why:
            "Wrong page — zero-order vs first-order elimination is the SIBLING subsection on the bottom half of the same book page (Elimination of drugs), and it describes constant-amount vs constant-fraction elimination (phenytoin, ethanol, high-dose aspirin), not patient-specific metabolism modifiers. The printed explanations for these two patients are the acetylator pace and the geriatric phase-I loss.",
        },
        {
          label:
            "Patient A: phase I must always precede phase II, so isoniazid's toxicity arises from failed CYP450-dependent oxidation · Patient B: the same mandatory sequence fails with age",
          text: "The assembly-line explanation.",
          why:
            "The premise is the page's explicit non-rule: the reactions 'do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction).' Isoniazid's trouble sits in the phase II acetylation step (the acetylator phenotype), and the geriatric loss is of phase I — neither requires a fixed phase I → phase II order, because no such order is required.",
        },
        {
          label:
            "Patient A: acetylation makes the isoniazid metabolite very polar and hydrophilic, so the neuropathy is from the highly polar acetylated metabolite itself · Patient B: the CYP450-dependent drug becomes toxic only after phase II conjugation",
          text: "Follow the polar metabolite.",
          why:
            "Both clauses misuse the figure's exception. The very polar, hydrophilic metabolite is the phase II product EXCEPT the acetylated metabolite — acetylation is precisely the conjugation that does NOT deliver a very polar, hydrophilic product; and Patient B's drug accumulates because geriatric patients lose phase I (the CYP450-dependent step) FIRST, not because a conjugate is downstream-toxic. The slow-acetylator rule is about the RATE of metabolism, not the polarity of the product.",
        },
      ],
      reasoning:
        "The stem hands you one patient per printed rule. PATIENT A (slow acetylator + isoniazid + stocking-glove paresthesias): the page prints 'Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)' — acetylation is a phase II conjugation, the slow step lets the drug persist, and isoniazid's dose-related neuropathy is the surfaced adverse effect. PATIENT B (79-year-old + CYP450-dependent drug + supratherapeutic levels + normal-for-age renal function): the page prints 'Geriatric patients lose phase I first' — the predominantly CYP450-dependent reactions decline before conjugation does, so an oxidation-cleared drug accumulates. The distractors each misfile one or both patients: the inverted-pace option swaps slow for rapid and phase I for phase II; the zero-order option imports the sibling subsection's elimination kinetics; the assembly-line option asserts the mandatory sequence the page explicitly denies ('do not have to take place sequentially'); and the polar-metabolite option reverses the acetylation exception (the acetylated metabolite is exactly the one that does NOT become very polar and hydrophilic). Match each patient to the printed rule, and check the direction of each clause before choosing.",
    },
  },
  mnemonics: [
    {
      code: "CYP RUNS R-O-H",
      meaning:
        "PHASE I is predominantly CYP450-dependent, and the CYP runs the three reaction types: R = Reduction, O = Oxidation, H = Hydrolysis. The phase I output is a slightly polar metabolite (active or inactive) plus reactive oxygen metabolites.",
      memorizes: "The phase I reaction trio and its CYP450 dependence",
      whenToUse: "Any question asking which reactions are phase I, or which phase is CYP450-dependent",
      clinical:
        "If the stem names a CYP enzyme or a reduction/oxidation/hydrolysis step, you are in phase I — and its byproduct, reactive oxygen metabolites, is why a CYP450 step can be the toxifying step.",
    },
    {
      code: "MAGS MAKE IT SWIM — EXCEPT THE A",
      meaning:
        "PHASE II conjugation: M = Methylation, A = Acetylation, G = Glucuronidation, S = Sulfation. The MAGS make the metabolite swim (very polar, hydrophilic → excretion via serum [urine, sweat] or bile [stool]) — EXCEPT the A: the acetylated metabolite is the printed exception that does not become very polar and hydrophilic.",
      memorizes: "The four phase II conjugations and the acetylation exception",
      whenToUse: "Any phase II list question, or any question about which conjugate stays less polar",
      clinical:
        "Three of the four conjugates are made water-soluble; acetylation is the odd one out — the exception the exam loves to reverse.",
    },
    {
      code: "FORKS, NOT A LADDER",
      meaning:
        "Drugs can be metabolized by EITHER OR BOTH phase I and phase II reactions — the phases are forks, not rungs: the reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (phase I can follow phase II, or take place as a single reaction). Polar drugs (water-soluble) take the bypass fork straight to phase II.",
      memorizes: "The either/both + non-sequential rule and the polar-drug bypass",
      whenToUse: "Any option claiming a fixed phase I → phase II order or that both phases are always required",
      clinical:
        "A drug can need phase I only, phase II only, both in either order, or a single reaction — never assume the assembly line.",
    },
    {
      code: "THE CYP GREYS FIRST, THE ACETYLATOR STALLS",
      meaning:
        "The two patient modifiers of metabolism: THE CYP GREYS FIRST = geriatric patients lose phase I (predominantly CYP450-dependent) first, before phase II conjugation; THE ACETYLATOR STALLS = slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid — peripheral neuropathy).",
      memorizes: "The geriatric rule and the slow-acetylator rule as one pair",
      whenToUse: "Any elderly patient with drug accumulation, or any slow-acetylator toxicity question",
      clinical:
        "Two questions, two answers: old + CYP450-dependent drug → phase I lost first; slow acetylator + isoniazid → ↓ metabolism rate, ↑ adverse effects.",
    },
  ],
  rapidReview: {
    s30: [
      "Drugs can be metabolized by either or both phase I and phase II reactions",
      "The reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction)",
      "Phase I is predominantly CYP450-dependent: Reduction, Oxidation, Hydrolysis → slightly polar metabolite (active or inactive) + reactive oxygen metabolites",
      "Phase II is conjugation: Methylation, Acetylation, Glucuronidation, Sulfation → very polar, hydrophilic metabolite (except the acetylated metabolite)",
      "Excretion: Serum (urine, sweat), bile (stool)",
      "Polar drugs (water-soluble) bypass phase I and feed phase II directly",
      "Geriatric patients lose phase I first",
      "Slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid)",
    ],
    m3: [
      "CYP RUNS R-O-H — phase I is predominantly CYP450-dependent (Reduction, Oxidation, Hydrolysis)",
      "MAGS MAKE IT SWIM — EXCEPT THE A — methylation/acetylation/glucuronidation/sulfation; acetylated is the non-polar exception",
      "FORKS, NOT A LADDER — either or both phases, never obligately sequential",
      "THE CYP GREYS FIRST, THE ACETYLATOR STALLS — geriatric loses phase I; slow acetylator stalls on isoniazid",
    ],
    m10: [
      "The figure prints 'Reactive oxygen metabolites' TWICE — at the phase I output and again beside the Phase II header",
      "'Slightly polar metabolite (active or inactive)' is the prodrug clause: phase I can bioactivate (prodrug → active) or deactivate",
      "The acetylation exception is printed as a parenthetical on the phase II output box: '(except acetylated metabolite)'",
      "Polar drugs (water-soluble) enter the figure at phase II directly — the bypass lane that skips the CYP450 reactor",
      "The two excretion routes are printed as one line: 'Serum (urine, sweat), bile (stool)' — renal/sweat out, biliary out",
      "Page 230 is a SHARED page: 'Drug metabolism' (top) and 'Elimination of drugs' (bottom) are distinct subsections — the p196 shared-page convention",
      "Zero rasters on the page (pdfimages + VLM census): the metabolism half is pure text + ONE vector flow figure; no margin mnemonics — the KYP memory layer is original",
    ],
  },
  recall: [
    {
      q: "The intro rule, verbatim — which phases metabolize drugs, what the reactions do, and their sequence rule.",
      a: "Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction).",
    },
    {
      q: "The geriatric rule, verbatim.",
      a: "Geriatric patients lose phase I first.",
    },
    {
      q: "The slow-acetylator rule, verbatim.",
      a: "Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).",
    },
    {
      q: "Phase I — which enzyme family does it depend on, and which three reaction types?",
      a: "Phase I (predominantly CYP450-dependent): Reduction, Oxidation, Hydrolysis.",
    },
    {
      q: "Phase II — which four conjugation reactions, and what is the printed exception?",
      a: "Phase II: Methylation, Acetylation, Glucuronidation, Sulfation → Very polar, hydrophilic metabolite (except acetylated metabolite).",
    },
    {
      q: "What two products leave phase I, according to the flow figure?",
      a: "Slightly polar metabolite (active or inactive) and Reactive oxygen metabolites.",
    },
    {
      q: "The flow figure's two drug inputs — and which one skips phase I?",
      a: "Lipophilic drugs (enter phase I) and Polar drugs (water-soluble) — the polar drugs bypass phase I and feed phase II directly.",
    },
    {
      q: "The excretion terminal, verbatim — both routes.",
      a: "Excretion: Serum (urine, sweat), bile (stool).",
    },
  ],
  related: [
    {
      title: "Pharmacokinetic Parameters & Age-Related Changes",
      topicId: "pharmacokinetics-aging",
      note: "The PK parameter page (book 229) supplies the age axis this page's geriatric rule plugs into — clearance, volume of distribution, and half-life all shift with age, and 'geriatric patients lose phase I first' is the metabolism piece of that age-related changes block.",
    },
    {
      title: "Elimination of Drugs: Zero & First Order",
      topicId: "elimination-of-drugs",
      note: "The SIBLING subsection on the bottom half of the same book page (the p196 shared-page convention): once metabolism has made the metabolite very polar and hydrophilic, elimination kinetics (zero-order constant-amount vs first-order constant-fraction) decide how fast it leaves — metabolism and elimination are the two halves of page 230.",
    },
    {
      title: "Urine pH, Ion Trapping & Dosage Calculations",
      topicId: "urine-ph-dosage",
      note: "The very polar, hydrophilic phase II metabolite exits by the serum route into urine — where urine pH and ion trapping (the next book page, 231) determine whether an ionized metabolite stays trapped in the renal tubule.",
    },
    {
      title: "Pupil Size & CYP450 (Inducers and Inhibitors)",
      topicId: "pupil-size-cyp450",
      note: "Phase I is predominantly CYP450-dependent — so the CYP450 inducer/inhibitor catalog (and its autonomic side effects) directly modulates this page's reactor: an induced CYP clears phase-I-dependent drugs faster; an inhibited CYP recreates the accumulation pattern of the geriatric rule in any patient.",
    },
    {
      title: "Antimycobacterials",
      topicId: "antimycobacterials",
      note: "Isoniazid is the printed example of the slow-acetylator rule — the antimycobacterial page carries the drug side (peripheral neuropathy, hepatotoxicity, pyridoxine supplementation), while this page carries the metabolism side (↓ rate of acetylation → ↑ adverse effects).",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (redox chemistry and the CYP450 monooxygenase system)",
      connection:
        "Phase I is predominantly CYP450-dependent because CYP450 is the heme-thiolate monooxygenase system — a redox enzyme that transfers electrons (via NADPH-cytochrome P450 reductase) to split molecular oxygen, which is exactly why its oxidation reactions generate the figure's reactive oxygen metabolites: an oxygen-activating enzyme leaks activated oxygen.",
    },
    {
      subject: "Microbiology & antimycobacterial therapy (isoniazid pharmacology)",
      connection:
        "The slow-acetylator rule is printed with isoniazid as its example: slow acetylators clear INH slowly, so the drug's dose-related adverse effects — peripheral neuropathy (prevented with pyridoxine) and hepatotoxicity — rise; the antimycobacterial page supplies the drug, this page supplies the reason the patient's phenotype matters.",
    },
    {
      subject: "Geriatrics & pathology of aging (hepatic changes with age)",
      connection:
        "'Geriatric patients lose phase I first' is hepatic aging applied: the liver's oxidative capacity (CYP450 content and hepatic blood flow) declines with age faster than its conjugation capacity, so the predominantly CYP450-dependent reactions drop before methylation/acetylation/glucuronidation/sulfation do — the pharmacology of the ageing liver.",
    },
    {
      subject: "Hepatobiliary & renal physiology (the two excretion routes)",
      connection:
        "The excretion terminal prints both exits — 'Serum (urine, sweat), bile (stool)': the serum route hands the hydrophilic metabolite to the kidney (filtration/secretion into urine) and sweat glands, while the biliary route exports it into bile for the stool; which route a conjugate takes is set by its polarity and size at the hepatocyte canalicular membrane.",
    },
  ],
};
