import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH-batch 5).
// Source: pdf 253 / book 231 — "Urine pH and drug elimination" +
// "Dosage calculations" (the two topics share the page). Census
// (pdfimages + VLM, ph5-vlm-census.ts): ZERO raster images — pure text
// plus ONE vector figure (the ionization-vs-pH curve: "Ionized species
// formation (%)" 0–100, Weak acid rising and Weak base falling curves
// crossing at 50%, pH axis 4–14 with ticks 4/8/12/14, dashed 50% and
// crossing lines, "pKa: 9.2", "pKa = more acidic" / "pKa = more basic"
// annotations with arrows), the two reaction equations (RCOOH ↔ RCOO– +
// H+ and RNH3+ ↔ RNH2 + H+, each tagged lipid soluble / trapped), and
// the two dosage formulas (Loading dose = Cp × Vd / F; Maintenance
// dose = Cp × CL × τ / F). VLM confirmed the curve topology (weak acid
// rises to the right, weak base falls to the right, crossing at 50% at
// pH ≈ 9–10) and NO margin mnemonics anywhere on the page; the KYP
// memory layer is original. Text-layer interleave quirk: the weak-acid
// equation lines (RCOOH / RCOO– + H+ / lipid soluble / trapped) print
// AFTER the "Weak bases" label in the raw layer — the two columns are
// interleaved by pdftotext (documented in the staged manifest).

export const urinePhDosage: KypUsMLENote = {
  id: "urine-ph-dosage",
  title: "Urine pH, Ion Trapping & Dosage Calculations",
  subtitle:
    "How the urine pH decides whether a drug leaves or stays, and the two equations that size a dose (book 231) — the ion-trapping rule: ionized species are trapped in urine and cleared quickly, while neutral forms can be reabsorbed; WEAK ACIDS exist as RCOOH (lipid soluble, reabsorbed) in equilibrium with RCOO– + H+ (trapped), with examples phenobarbital, methotrexate, and aspirin (salicylates), and overdose is treated with sodium bicarbonate to alkalinize the urine; WEAK BASES exist as RNH3+ (trapped) in equilibrium with RNH2 + H+ (lipid soluble, reabsorbed), with examples tricyclic antidepressants (TCAs) and amphetamines — trapped in acidic environments, and for severe alkalosis treated with ammonium chloride to acidify the urine; pKa is the pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized and represents the strength of the weak acid or base — the ionization-vs-pH curve shows the weak acid becoming more ionized as pH rises, the weak base becoming more ionized as pH falls, and the two curves crossing at 50% where pH = pKa; the TCA exception — TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity, which treats cardiac toxicity but does not accelerate drug elimination; and the DOSAGE CALCULATIONS — loading dose = Cp × Vd / F and maintenance dose = Cp × CL × τ / F, where Cp is the target plasma concentration and τ is the dosage interval (time between doses; does not apply for continuous infusions), with the rules that in renal or liver disease the maintenance dose is ↓ while the loading dose is usually unchanged, and time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete urine-pH ion-trapping apparatus — the trapped-vs-neutral rule, both equilibria (weak acid RCOOH ↔ RCOO– + H+; weak base RNH3+ ↔ RNH2 + H+) with their lipid-soluble and trapped tags, both example sets (phenobarbital/methotrexate/salicylates; TCAs/amphetamines), both urine-manipulation treatments (sodium bicarbonate to alkalinize for acids, ammonium chloride to acidify for bases), the pKa definition with the 50/50 reading of the ionization curve, the TCA sodium-channel exception to the bicarbonate rule — plus the full dosage-calculation panel (loading dose Cp × Vd / F, maintenance dose Cp × CL × τ / F, the Cp and τ definitions, the renal/liver-disease dosing rule, and the t1/2-only steady-state rule).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 231–231 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Urine pH and drug elimination [the ion-trapping rule; the weak-acid equilibrium RCOOH ↔ RCOO– + H+ with phenobarbital, methotrexate, and aspirin (salicylates) and sodium bicarbonate treatment; the weak-base equilibrium RNH3+ ↔ RNH2 + H+ with TCAs and amphetamines and ammonium chloride treatment; the pKa definition; the ionization-vs-pH figure with its 50% crossing and pKa annotations; the TCA sodium-channel rule] + Dosage calculations [loading dose = Cp × Vd / F; maintenance dose = Cp × CL × τ / F; the Cp and τ definitions; the renal/liver-disease rule and the steady-state rule])",
  tags: [
    "urine pH",
    "ion trapping",
    "ionized species",
    "weak acids",
    "weak bases",
    "RCOOH",
    "RCOO–",
    "RNH3+",
    "RNH2",
    "lipid soluble",
    "trapped",
    "tubular reabsorption",
    "renal elimination",
    "pKa",
    "50% ionized",
    "ionization curve",
    "pH 4 to 14",
    "phenobarbital",
    "methotrexate",
    "aspirin",
    "salicylates",
    "salicylate overdose",
    "sodium bicarbonate",
    "alkalinize urine",
    "tricyclic antidepressants",
    "TCAs",
    "amphetamines",
    "acidic environments",
    "ammonium chloride",
    "acidify urine",
    "severe alkalosis",
    "sodium channel blockade",
    "cardiac toxicity",
    "dosage calculations",
    "loading dose",
    "maintenance dose",
    "Cp",
    "target plasma concentration",
    "Vd",
    "volume of distribution",
    "CL",
    "clearance",
    "F",
    "bioavailability",
    "tau",
    "dosage interval",
    "continuous infusions",
    "renal disease dosing",
    "liver disease dosing",
    "steady state",
    "half-life",
    "t1/2",
    "pharmacokinetics",
    "Henderson-Hasselbalch",
  ],
  core: {
    what:
      "The rule: ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed — only the neutral, lipid-soluble form crosses the tubular epithelium back into blood. WEAK ACIDS: RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped). Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine — raising tubular pH pushes the equilibrium toward RCOO–, the ionized species that cannot cross back. WEAK BASES: RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble). Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments — lowering tubular pH pushes the equilibrium toward RNH3+. For severe alkalosis, treat with ammonium chloride to acidify urine. pKa: the pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized; the pKa represents the strength of the weak acid or base. The curve: a weak acid is more ionized at high pH (its curve rises to the right), a weak base is more ionized at low pH (its curve falls to the right), and the two curves cross at the 50% level where pH = pKa. The TCA exception: TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs — this treats cardiac toxicity, but does not accelerate drug elimination. DOSAGE CALCULATIONS: loading dose = Cp × Vd / F; maintenance dose = Cp × CL × τ / F; Cp = target plasma concentration; τ = dosage interval (time between doses), which does not apply for continuous infusions. In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged. Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
    why:
      "This page is the junction where acid-base chemistry meets clinical toxicology and where the three PK parameters of the previous pages (Vd, CL, F) become actual numbers on a prescription. The trapping rule is the answer key to every urine-manipulation question: alkaline urine traps weak acids (so bicarbonate is the renally-minded treatment for salicylate and phenobarbital and methotrexate overdose), while acidic urine traps weak bases (so ammonium chloride is the treatment that acidifies the urine for severe alkalosis with weak-base drugs like TCAs and amphetamines aboard). The pKa definition plus the curve is the quantitative spine — a drug sitting at its pKa is half ionized, and every pH unit away from pKa shifts the ratio roughly tenfold in the direction of the ionized form on one side or the other; the 50% crossing of the two curves is that fact drawn once. The TCA line is the exam's favorite trap in the whole topic: bicarbonate is given in TCA toxicity for its sodium-channel-blocking override (a cardiac indication), NOT for urinary enhancement — the same drug, a completely different reason, and explicitly 'does not accelerate drug elimination.' The dosage equations complete the arc: loading dose is Vd-driven (fill the container once, clearance irrelevant), maintenance dose is CL-driven (replace what elimination removes each τ), organ disease lowers CL so the maintenance dose falls while the loading dose usually stands, and no dosing maneuver changes when steady state arrives — that clock is t1/2's alone.",
    keyIdea:
      "Read every question on this page through three gates. GATE 1 — CLASSIFY: is the drug a weak acid (RCOOH family: phenobarbital, methotrexate, aspirin/salicylates) or a weak base (RNH2/RNH3+ family: TCAs, amphetamines)? GATE 2 — COUNT THE CHARGE at the tubular pH: at its pKa the drug is 50/50; above the pKa a weak acid is mostly ionized (RCOO–, trapped), below the pKa a weak base is mostly ionized (RNH3+, trapped); ionized = water-soluble = stuck in the tubule and cleared quickly, neutral = lipid-soluble = reabsorbed into blood. GATE 3 — MOVE THE URINE pH toward the ionized side: alkalinize with sodium bicarbonate for weak acids, acidify with ammonium chloride for weak bases (the printed indication: severe alkalosis). TWO EXCEPTIONS TO KEEP STRAIGHT: (1) TCA + bicarbonate — the indication is the sodium-channel blockade (cardiac toxicity), not urinary trapping; it does not accelerate elimination. (2) Dose sizing: loading dose = Cp × Vd / F (a one-time fill — Vd sets it, CL does not appear), maintenance dose = Cp × CL × τ / F (a per-interval replacement — CL sets it), τ does not apply for continuous infusions; renal or liver disease cuts CL so the maintenance dose ↓ while the loading dose is usually unchanged; and time to steady state rides t1/2 alone — independent of dose and of dosing frequency.",
  },
  mechanisms: [
    {
      id: "ion-trapping-map",
      title:
        "Ion trapping in the tubule: the charge decides, the urine pH turns the dial",
      context: "Urine pH and drug elimination (book 231)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A weak acid or weak base drug reaches the renal tubule",
            sublabel:
              "Input — the drug is filtered into the tubular lumen, where the urine pH (which clinicians can move) sits as an independent dial against the drug's pKa.",
            variant: "input",
          },
          {
            id: "acid-branch",
            label: "WEAK ACID BRANCH — RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped)",
            sublabel:
              "At low pH the neutral RCOOH dominates and diffuses back into blood (reabsorbed); at high pH the equilibrium shifts to the ionized RCOO–, which is trapped in urine and cleared quickly. Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine → push toward RCOO– → trap.",
            variant: "process",
          },
          {
            id: "base-branch",
            label: "WEAK BASE BRANCH — RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble)",
            sublabel:
              "At low pH the ionized RNH3+ dominates — weak bases are trapped in acidic environments; at high pH the neutral RNH2 dominates and is reabsorbed. Examples: tricyclic antidepressants (TCAs), amphetamines. For severe alkalosis, treat with ammonium chloride to acidify urine → push toward RNH3+ → trap.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed",
            sublabel:
              "The charge, not the drug, is what exits: only the neutral, lipid-soluble form crosses the tubular epithelium back into the peritubular blood; the ionized species is water-soluble, stays in the lumen, and leaves in the urine. pKa fixes the 50/50 point — the pH at which the drug is 50% ionized and 50% nonionized — and the ionization curves cross exactly there.",
            variant: "target",
          },
          {
            id: "output",
            label:
              "OUTPUT — enhanced renal elimination by urine manipulation (with the TCA exception)",
            sublabel:
              "Output — alkalinized urine clears weak acids faster (bicarbonate), acidified urine clears weak bases faster (ammonium chloride). Exception: in TCA toxicity, sodium bicarbonate is given to overcome the sodium channel-blocking activity — it treats cardiac toxicity but does not accelerate drug elimination.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "acid-branch", label: "RCOOH family drug" },
          { from: "trigger", to: "base-branch", label: "RNH2/RNH3+ family drug" },
          { from: "acid-branch", to: "rule", label: "high pH → RCOO– dominates" },
          { from: "base-branch", to: "rule", label: "low pH → RNH3+ dominates" },
          { from: "rule", to: "output", label: "ionized = cleared, neutral = reabsorbed" },
        ],
      },
    },
    {
      id: "dose-equation-map",
      title:
        "Loading vs maintenance dosing: fill the container, then match the drain",
      context: "Dosage calculations (book 231)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A target plasma concentration (Cp) is chosen",
            sublabel:
              "Input — Cp = target plasma concentration; every dose equation is built around reaching and then holding this number.",
            variant: "input",
          },
          {
            id: "loading",
            label: "LOADING DOSE = Cp × Vd / F — the one-time fill",
            sublabel:
              "Vd-driven: dose the container once to reach Cp. Clearance does not appear in the equation — a loading dose fills the apparent volume without waiting for elimination kinetics, which is why it is the dose you give when Cp is needed NOW.",
            variant: "process",
          },
          {
            id: "maintenance",
            label: "MAINTENANCE DOSE = Cp × CL × τ / F — the per-interval replacement",
            sublabel:
              "CL-driven: replace exactly what elimination removes over each dosing interval. τ = dosage interval (time between doses); does not apply for continuous infusions — an infusion has no interval, its rate already carries the CL × Cp product.",
            variant: "process",
          },
          {
            id: "modifiers",
            label: "THE ORGAN-DISEASE AND STEADY-STATE RULES",
            sublabel:
              "In renal or liver disease, clearance falls — maintenance dose ↓ and loading dose is usually unchanged (the container's size has not moved; only the drain has narrowed). Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency — no loading maneuver or dosing schedule shortens it.",
            variant: "target",
          },
          {
            id: "output",
            label: "OUTPUT — Cp reached once, then held at plateau",
            sublabel:
              "Output — the loading dose buys the target concentration immediately; the maintenance dose holds it once the t1/2-driven steady state arrives (~4–5 half-lives); F divides both equations because only the bioavailable fraction reaches plasma.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "loading", label: "reach Cp fast" },
          { from: "trigger", to: "maintenance", label: "hold Cp at plateau" },
          { from: "loading", to: "output", label: "Cp reached once" },
          { from: "maintenance", to: "output", label: "CL × τ replaced per dose" },
          { from: "modifiers", to: "output", label: "renal/liver disease ↓ maintenance only" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "urine-ph-trapping-map",
      title: "The urine-pH ion-trapping map and the dosage panel (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 231): a nephron/tubule glyph carrying both equilibria — weak acid RCOOH (lipid soluble, arrowed crossing back into blood) ↔ RCOO– + H+ (trapped, cleared in urine), weak base RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble, reabsorbed) — with the two treatment arrows (sodium bicarbonate alkalinizes the urine to trap acids; ammonium chloride acidifies it to trap bases); the ionization-vs-pH curve REDRAWN with original KYP axes (Ionized species formation (%) 0–100 against pH 4–14, the weak-acid curve rising and the weak-base curve falling, the 50% crossing at pH = pKa, the pKa 9.2 marker and the more-acidic/more-basic annotations); the TCA rule card (bicarbonate overcomes sodium channel blockade — cardiac toxicity, not elimination); and the dosage panel (loading dose = Cp × Vd / F and maintenance dose = Cp × CL × τ / F with the Cp and τ definitions, the renal/liver-disease rule, and the t1/2-only steady-state rule).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on this page — pure text plus ONE vector figure (the ionization-vs-pH curve with its Weak acid and Weak base curves crossing at 50%, ticks 0/50/100 and pH 4/8/12/14, the pKa 9.2 annotation, and the pKa = more acidic / pKa = more basic notes; VLM confirmed the topology and the arrows) plus the two typeset equations and the two dosage formulas. The tubule glyph, the redrawn curve, the rule cards, and the dosage panel are an ORIGINAL KYP adaptation; the source text is also carried verbatim in the note's table blocks. The KYP memory layer (the four mnemonics) is original — the VLM census confirmed no printed mnemonics anywhere on the page.",
    },
    {
      kind: "table",
      title: "Book 231 — Urine pH and drug elimination (carried verbatim)",
      intro: "The trapping rule, both equilibria with their tags and examples and treatments, the pKa definition, the figure labels, and the TCA rule — as printed.",
      columns: ["ELEMENT", "BOOK 231 (verbatim)"],
      rows: [
        [
          "THE RULE",
          "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.",
        ],
        [
          "WEAK ACIDS",
          "RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped). Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.",
        ],
        [
          "WEAK BASES",
          "RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble). Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.",
        ],
        [
          "pKa",
          "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.",
        ],
        [
          "THE IONIZATION FIGURE",
          "Ionized species formation (%) from 0 to 100 against pH from 4 to 14: the Weak acid curve and the Weak base curve cross at 50; pKa: 9.2 marks the example crossing; pKa = more acidic sits toward the low-pH side and pKa = more basic toward the high-pH side. Weak acids are increasingly ionized as pH rises; weak bases are increasingly ionized as pH falls.",
        ],
        [
          "THE TCA RULE",
          "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.",
        ],
      ],
      caption:
        "One page, two columns, one rule: the charge keeps the drug in the tubule, neutrality lets it go home — and bicarbonate has two entirely different jobs depending on whether the patient overdosed on aspirin or on a TCA.",
    },
    {
      kind: "compare",
      title: "Weak acids vs weak bases — the trapping mirror",
      intro:
        "The two halves of the page are mirror images: whatever the acid does, the base does the opposite at the same pH — push the urine pH to the side of the pKa that makes the drug charged, because ions are trapped and cleared while neutral forms are reabsorbed.",
      columns: ["WEAK ACIDS (RCOOH family)", "WEAK BASES (RNH2 family)"],
      rows: [
        {
          label: "EQUILIBRIUM",
          a: "RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped)",
          b: "RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble)",
        },
        {
          label: "REABSORBED FORM",
          a: "RCOOH — the neutral, lipid-soluble protonated acid",
          b: "RNH2 — the neutral, lipid-soluble unprotonated base",
        },
        {
          label: "TRAPPED FORM",
          a: "RCOO– — the ionized deprotonated anion",
          b: "RNH3+ — the ionized protonated cation",
        },
        {
          label: "EXAMPLES",
          a: "Phenobarbital, methotrexate, aspirin (salicylates)",
          b: "Tricyclic antidepressants (TCAs), amphetamines",
        },
        {
          label: "TRAPPING ENVIRONMENT",
          a: "Alkaline (high-pH) urine — a weak acid is more ionized at high pH",
          b: "Acidic (low-pH) urine — weak bases are trapped in acidic environments",
        },
        {
          label: "THE URINE MOVE",
          a: "Alkalinize the urine with sodium bicarbonate (treat overdose)",
          b: "Acidify the urine with ammonium chloride (for severe alkalosis)",
        },
        {
          label: "WHY IT WORKS",
          a: "Raising pH above the pKa pushes RCOOH → RCOO–; the ionized anion cannot cross back and is cleared quickly",
          b: "Lowering pH below the pKa pushes RNH2 → RNH3+; the ionized cation cannot cross back and is cleared quickly",
        },
      ],
    },
    {
      kind: "steps",
      title: "Any ion-trapping vignette in three moves",
      intro:
        "The exam template: an overdose, a weak acid or base, and a question about the urine. Three moves settle it.",
      steps: [
        {
          label: "MOVE 1 — CLASSIFY the drug",
          detail:
            "Weak acid (RCOOH family): phenobarbital, methotrexate, aspirin (salicylates). Weak base (RNH2/RNH3+ family): tricyclic antidepressants (TCAs), amphetamines. The class determines which direction the equilibrium turns.",
        },
        {
          label: "MOVE 2 — FIND the ionized form at the tubular pH",
          detail:
            "At pH = pKa the drug is 50% ionized and 50% nonionized (the pKa is the strength of the weak acid or base). Above its pKa a weak acid is mostly RCOO– (ionized, trapped); below its pKa a weak base is mostly RNH3+ (ionized, trapped). Ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed.",
        },
        {
          label: "MOVE 3 — MOVE the urine pH toward the ionized side",
          detail:
            "Weak acid overdose → sodium bicarbonate to alkalinize the urine (more RCOO–, more trapping). Weak base in severe alkalosis → ammonium chloride to acidify the urine (more RNH3+, more trapping). Before writing the order, check the TCA exception: bicarbonate in TCA toxicity is for the sodium channel blockade (cardiac toxicity), not for elimination.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The TCA exception — the same syringe, a different reason",
      body:
        "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs — a cardiac indication (it treats cardiac toxicity), not a renal one: it does not accelerate drug elimination. The exam pairs this line with the salicylate line to see whether you know which bicarbonate is which. Salicylate (weak acid) overdose + bicarbonate = urine alkalinization → RCOO– trapping → enhanced elimination. TCA (weak base) overdose + bicarbonate = sodium-channel override → cardiac rescue, elimination unchanged. And note the trap inside the trap: a weak base given bicarbonate moves toward its neutral RNH2 form — the reabsorbed one — which is exactly the wrong direction for urinary clearance.",
    },
    {
      kind: "table",
      title: "Book 231 — Dosage calculations (carried verbatim)",
      intro: "Both formulas, both definitions, and both clinical rules — as printed.",
      columns: ["ELEMENT", "BOOK 231 (verbatim)"],
      rows: [
        [
          "LOADING DOSE",
          "Loading dose = Cp × Vd / F",
        ],
        [
          "MAINTENANCE DOSE",
          "Maintenance dose = Cp × CL × τ / F",
        ],
        [
          "THE DEFINITIONS",
          "Cp = target plasma concentration. τ = dosage interval (time between doses); does not apply for continuous infusions.",
        ],
        [
          "ORGAN DISEASE",
          "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.",
        ],
        [
          "STEADY STATE",
          "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
        ],
      ],
      caption:
        "Loading is Vd's job (fill the container once — CL is nowhere in the equation); maintenance is CL's job (replace what the drain removes each τ); and the clock to steady state belongs to t1/2 alone.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 19-year-old woman is brought to the emergency department 4 hours after ingesting a bottle of aspirin tablets; she has tinnitus, tachypnea, and an anion-gap metabolic acidosis, and salicylate levels are rising.",
        discriminator:
          "Salicylate = weak acid (RCOOH family); the question asks for enhanced urinary elimination",
        concept: "Ion trapping of a weak acid",
        answer:
          "Treat with sodium bicarbonate to alkalinize the urine. Aspirin (salicylates) is one of the printed weak-acid examples (with phenobarbital and methotrexate); raising the tubular pH above the salicylate pKa shifts RCOOH (lipid soluble, reabsorbed) toward RCOO– + H+ (trapped), and the ionized species is trapped in urine and cleared quickly.",
      },
      {
        stem:
          "A 24-year-old man presents with a wide-complex tachycardia, QRS prolongation, and an anticholinergic toxidrome after ingesting a large quantity of his amitriptyline.",
        discriminator:
          "TCA overdose treated with sodium bicarbonate — for the sodium channel, not the kidney",
        concept: "The TCA exception to the trapping rule",
        answer:
          "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs — this treats cardiac toxicity, but does not accelerate drug elimination. TCAs are weak bases (trapped in acidic environments; ammonium chloride would acidify the urine), but the bicarbonate here is a cardiac drug, not a renal one.",
      },
      {
        stem:
          "A patient with severe alkalemia from a weak-base drug overdose needs urinary enhancement; the team considers acidifying the urine.",
        discriminator:
          "Weak base (TCAs, amphetamines) + ammonium chloride to acidify the urine",
        concept: "Ion trapping of a weak base",
        answer:
          "Weak bases — tricyclic antidepressants (TCAs), amphetamines — are trapped in acidic environments: RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble). For severe alkalosis, treat with ammonium chloride to acidify urine, shifting the equilibrium toward the ionized RNH3+ that cannot be reabsorbed and is cleared quickly.",
      },
      {
        stem:
          "A 74-year-old woman with stage 4 chronic kidney disease is started on a renally eliminated drug with a narrow therapeutic window; the team asks how to size the first dose and the ongoing doses.",
        discriminator:
          "Falling clearance in renal (or liver) disease — which equation moves?",
        concept: "Loading vs maintenance dose in organ dysfunction",
        answer:
          "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged. The maintenance dose (Cp × CL × τ / F) is clearance-driven, so it falls with CL; the loading dose (Cp × Vd / F) is volume-driven, and the container's size has not changed. Time to steady state still depends primarily on t1/2 and is independent of dose and dosing frequency.",
      },
    ],
    traps: [
      {
        a: "Bicarbonate for salicylate overdose",
        b: "Bicarbonate for TCA toxicity",
        whyConfused:
          "The same drug, sodium bicarbonate, is first-line in both overdoses",
        keyDifference:
          "SALICYLATE bicarbonate is RENAL — it alkalinizes the urine, traps the weak acid as RCOO–, and accelerates elimination; TCA bicarbonate is CARDIAC — it overcomes the sodium channel-blocking activity of TCAs, treats cardiac toxicity, and explicitly does not accelerate drug elimination",
        clue:
          "A question about enhanced urinary clearance of aspirin → the renal rationale; a question about QRS widening or wide-complex tachycardia in a TCA patient → the sodium-channel rationale",
      },
      {
        a: "Weak acid trapped in alkaline urine",
        b: "Weak base trapped in acidic urine",
        whyConfused:
          "Both are the same Henderson-Hasselbalch logic run in opposite directions",
        keyDifference:
          "A WEAK ACID ionizes as pH RISES above its pKa (RCOO– trapped in alkaline urine — treat with sodium bicarbonate); a WEAK BASE ionizes as pH FALLS below its pKa (RNH3+ trapped in acidic urine — weak bases are trapped in acidic environments; treat with ammonium chloride for severe alkalosis)",
        clue:
          "Classify the drug first: phenobarbital/methotrexate/salicylates are acids (alkalinize); TCAs/amphetamines are bases (acidify)",
      },
      {
        a: "Loading dose",
        b: "Maintenance dose",
        whyConfused:
          "Both are 'the dose' of the same drug and both formulas start with Cp / F",
        keyDifference:
          "LOADING dose = Cp × Vd / F — the one-time fill of the volume of distribution; CL does not appear. MAINTENANCE dose = Cp × CL × τ / F — the per-interval replacement of what clearance removes; τ = dosage interval (time between doses) and does not apply for continuous infusions",
        clue:
          "'Rapidly achieve therapeutic levels' → loading (Vd); 'maintain steady-state levels' → maintenance (CL × τ)",
      },
      {
        a: "Time to steady state",
        b: "Height of the steady-state level",
        whyConfused:
          "Both change when the dosing changes, so learners assume both are dosing-controlled",
        keyDifference:
          "The TIME to steady state depends primarily on t1/2 and is independent of dose and dosing frequency (~4–5 half-lives no matter what); the HEIGHT of the plateau is what the maintenance dose sets (rate in = rate out at Cp)",
        clue:
          "A stem asking 'when will steady state be reached' or offering 'more frequent dosing to reach steady state faster' → the t1/2-only rule; a stem asking 'what level will the plateau reach' → the maintenance equation",
      },
    ],
    pivots: [
      {
        lookAlike: "An overdose with a urine-manipulation question — which way do I move the urine?",
        differentiator:
          "Route by the drug class, not by the toxidrome: weak acids (phenobarbital, methotrexate, aspirin/salicylates) are trapped by ALKALINIZING the urine with sodium bicarbonate (RCOOH → RCOO–); weak bases (TCAs, amphetamines) are trapped by ACIDIFYING the urine with ammonium chloride for severe alkalosis (RNH2 → RNH3+); ionized species are trapped and cleared quickly, neutral forms are reabsorbed",
        correctPath:
          "Identify acid or base → find the ionized form on the far side of the pKa → order the pH move that increases the ionized fraction — and screen for the TCA exception before signing",
      },
      {
        lookAlike: "A dosing question in renal or liver disease — what changes?",
        differentiator:
          "Split the question by equation: the maintenance dose (Cp × CL × τ / F) falls because clearance falls; the loading dose (Cp × Vd / F) is usually unchanged because the volume of distribution has not moved; time to steady state still rides t1/2 alone",
        correctPath:
          "'Adjust the ongoing dose' → ↓ maintenance dose for the ↓ CL; 'size the first dose' → loading dose usually unchanged; 'when does it plateau' → t1/2, independent of dose and frequency",
      },
      {
        lookAlike: "A graph question — percent ionized at a pH above or below the pKa",
        differentiator:
          "On the ionization-vs-pH curve (Ionized species formation (%) 0–100 against pH 4–14), the weak-acid curve rises to the right (more ionized at high pH) and the weak-base curve falls to the right (more ionized at low pH); they cross at 50% exactly where pH = pKa — the pH at which drugs are 50% ionized and 50% nonionized",
        correctPath:
          "Locate the pKa (the 50/50 crossing), place the patient's pH relative to it, and read the curve for that drug's class: acid above its pKa → ionized; base below its pKa → ionized; at the pKa → half and half",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old woman with stage 4 chronic kidney disease (eGFR 28) is brought in after an unintentional salicylate overdose from her chronic arthritis regimen — she has tinnitus, tachypnea with respiratory alkalosis, and an elevated anion-gap metabolic acidosis; serum salicylate is in the potentially lethal range and her urine is currently acidic. The team wants to enhance renal elimination of the salicylate and to plan her ongoing dosing of another renally eliminated drug she takes. Which pairing is correct?",
      question:
        "Choose the correct combination of the renal-elimination maneuver for the salicylate and the dosing adjustment demanded by her kidney disease.",
      options: [
        {
          label:
            "Sodium bicarbonate to alkalinize the urine (trapping salicylate as RCOO– for rapid urinary clearance), plus a ↓ maintenance dose with the loading dose usually unchanged",
          text: "Alkalinize to trap the weak acid; shrink the maintenance dose only.",
          correct: true,
          why:
            "Correct on both layers. (1) ELIMINATION: aspirin (salicylates) is a printed weak acid — RCOOH (lipid soluble, reabsorbed) ↔ RCOO– + H+ (trapped) — and weak-acid overdose is treated with sodium bicarbonate to alkalinize urine; her acidic urine is currently keeping the salicylate in its neutral, reabsorbable RCOOH form, and alkalinization pushes the equilibrium toward the ionized RCOO–, which is trapped in urine and cleared quickly. (2) DOSING: in renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged — the maintenance equation (Cp × CL × τ / F) is clearance-driven and her falling CL demands a smaller maintenance dose, while the loading equation (Cp × Vd / F) is volume-driven and Vd has not moved.",
        },
        {
          label:
            "Ammonium chloride to acidify the urine further, plus a ↓ maintenance dose with the loading dose usually unchanged",
          text: "Acidify to trap the drug; shrink the maintenance dose only.",
          why:
            "Wrong direction on the first half: ammonium chloride is the weak-BASE maneuver — for severe alkalosis, it acidifies the urine to push RNH2 → RNH3+ (trapped) in drugs like TCAs and amphetamines. Salicylate is a weak ACID; acidifying the urine pushes it toward neutral RCOOH, the lipid-soluble, reabsorbed form — the opposite of enhanced clearance. The dosing half is right, which is exactly what makes this distractor tempting.",
        },
        {
          label:
            "Sodium bicarbonate to overcome the sodium channel-blocking activity of the salicylate, plus an unchanged maintenance dose and a doubled loading dose",
          text: "Bicarbonate for the heart; more drug because the kidneys fail.",
          why:
            "Two errors folded together. (1) The sodium channel-blocking rationale belongs to TRICYCLIC ANTIDEPRESSANT toxicity — bicarbonate there treats cardiac toxicity but does not accelerate drug elimination, and salicylate is not a sodium-channel blocker; giving bicarbonate for a salicylate is justified by urine alkalinization (RCOO– trapping), not by channel override. (2) Organ disease dosing runs the other way: maintenance dose ↓ (falling CL), and the loading dose is usually UNCHANGED — doubling it has no basis in either equation.",
        },
        {
          label:
            "Sodium bicarbonate to alkalinize the urine, plus an unchanged maintenance dose because dose adjustments do not change the time to steady state",
          text: "Alkalinize correctly; keep dosing because steady state is fixed.",
          why:
            "The elimination half is right, but the dosing logic conflates two different rules. Time to steady state indeed depends primarily on t1/2 and is independent of dose and dosing frequency — but that is a statement about WHEN the plateau arrives, not about HOW HIGH the dosing should be. In renal disease, clearance falls, so the maintenance dose (Cp × CL × τ / F) must ↓ to avoid accumulation; leaving it unchanged is precisely the accumulation error the rule exists to prevent.",
        },
        {
          label:
            "Ammonium chloride to correct her severe alkalosis, plus a ↓ maintenance dose and a ↓ loading dose",
          text: "Acidify to fix the blood; shrink both doses.",
          why:
            "The wrong maneuver wearing the printed word: the ammonium chloride line reads 'for severe alkalosis, treat with ammonium chloride to acidify urine' — that treatment exists to trap weak BASES (TCAs, amphetamines) in acidic urine, not to correct systemic alkalemia, and not for a weak acid like salicylate. The maintenance-dose half is correct (CL ↓ → dose ↓), but the loading dose is usually unchanged — Vd has not fallen with her kidney disease — so shrinking it is an unforced error.",
        },
      ],
      reasoning:
        "The stem hands you two independent questions. (1) THE ELIMINATION MANEUVER: classify the drug — salicylate is a weak acid, so the ion-trapping move is alkalinization with sodium bicarbonate (RCOOH → RCOO–; ionized species are trapped in urine and cleared quickly, neutral forms are reabsorbed); her acidic urine is the problem the bicarbonate fixes. The two ammonium chloride distractors invert the class rule (acidification traps weak BASES — TCAs, amphetamines — and the printed 'for severe alkalosis' clause is about acidifying the URINE to trap bases, not about correcting systemic pH), and the sodium-channel rationale is the TCA exception misplaced: bicarbonate in TCA toxicity treats cardiac toxicity without accelerating elimination, and salicylate has no sodium-channel story. (2) THE DOSING ADJUSTMENT: renal disease lowers CL, so the maintenance dose (Cp × CL × τ / F) ↓ while the loading dose (Cp × Vd / F) is usually unchanged — the volume has not moved, only the drain has narrowed; and the steady-state rule (time to plateau depends primarily on t1/2, independent of dose and dosing frequency) governs WHEN she plateaus, not how much drug per interval is safe. Match each half to its own equation and the correct pairing is the only one that is right on both.",
    },
  },
  mnemonics: [
    {
      code: "CHARGED TRAPPED, NEUTRAL RETURNED",
      meaning:
        "The master rule of the page: ionized (charged) species are trapped in urine and cleared quickly (CHARGED TRAPPED); neutral forms can be reabsorbed — only the neutral, lipid-soluble form crosses back into blood (NEUTRAL RETURNED). For acids the charged form is RCOO–; for bases it is RNH3+.",
      memorizes: "The ion-trapping rule and which form of each drug class exits",
      whenToUse: "Any question about urinary elimination, reabsorption, or ion trapping",
      clinical:
        "Before choosing a urine maneuver, name the charged form: if you cannot say which species is ionized at the tubular pH, you cannot say whether the drug stays or goes.",
    },
    {
      code: "BICARB TRAPS ACIDS, AMMONIUM TRAPS BASES",
      meaning:
        "The two treatment directions: BICARB TRAPS ACIDS — sodium bicarbonate alkalinizes the urine for weak-acid overdoses (phenobarbital, methotrexate, aspirin/salicylates), pushing RCOOH → RCOO– (trapped); AMMONIUM TRAPS BASES — ammonium chloride acidifies the urine (for severe alkalosis) for weak bases (TCAs, amphetamines), pushing RNH2 → RNH3+ (trapped).",
      memorizes: "Which agent moves the urine which way for which drug class",
      whenToUse: "Any overdose-treatment or urine-pH-manipulation question",
      clinical:
        "One breath: alkalinize for the acids (salicylate, phenobarbital, methotrexate), acidify for the bases (TCAs, amphetamines) — and remember the TCA patient still gets bicarb first, for the heart.",
    },
    {
      code: "AT THE pKa, 50/50 — ACIDS UP, BASES DOWN",
      meaning:
        "The pKa and the curve: AT THE pKa, 50/50 — pKa is the pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized, and it represents the strength of the weak acid or base (the two curves cross at 50% exactly there); ACIDS UP — the weak-acid curve rises to the right, more ionized at high pH; BASES DOWN — the weak-base curve falls to the right, more ionized at low pH (weak bases are trapped in acidic environments).",
      memorizes: "The pKa definition and how to read the ionization-vs-pH curve",
      whenToUse: "Any percent-ionized, pKa, or curve-reading question",
      clinical:
        "Draw the crossing at 50%, slope the acid up and the base down as pH climbs from 4 to 14, and every graph question on this page answers itself.",
    },
    {
      code: "LOAD WITH Vd, MAINTAIN WITH CL",
      meaning:
        "The two dose equations and their engines: LOAD WITH Vd — loading dose = Cp × Vd / F, a one-time fill of the volume of distribution (clearance does not appear); MAINTAIN WITH CL — maintenance dose = Cp × CL × τ / F, replacing what clearance removes each dosage interval τ (τ does not apply for continuous infusions). Attach the two rules: in renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged; time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
      memorizes: "Both formulas, what drives each, and the organ-disease + steady-state rules",
      whenToUse: "Any loading-dose, maintenance-dose, or steady-state dosing question",
      clinical:
        "Fill the container once (Vd), then match the drain (CL × τ) — and no matter how you schedule it, the plateau clock is t1/2's alone.",
    },
  ],
  rapidReview: {
    s30: [
      "Ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed",
      "Weak acids: RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped); examples phenobarbital, methotrexate, aspirin (salicylates); treat overdose with sodium bicarbonate to alkalinize urine",
      "Weak bases: RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble); examples TCAs, amphetamines; trapped in acidic environments; for severe alkalosis, treat with ammonium chloride to acidify urine",
      "pKa = the pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized; the pKa represents the strength of the weak acid or base",
      "The ionization curve: weak acid more ionized at high pH (curve rises), weak base more ionized at low pH (curve falls); the two curves cross at 50% where pH = pKa",
      "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity — treats cardiac toxicity, does not accelerate drug elimination",
      "Loading dose = Cp × Vd / F; maintenance dose = Cp × CL × τ / F",
      "Cp = target plasma concentration; τ = dosage interval (time between doses); does not apply for continuous infusions",
      "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged",
      "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency",
    ],
    m3: [
      "CHARGED TRAPPED, NEUTRAL RETURNED — the master rule",
      "BICARB TRAPS ACIDS, AMMONIUM TRAPS BASES — the treatment directions",
      "AT THE pKa, 50/50 — ACIDS UP, BASES DOWN — the definition and the curve",
      "LOAD WITH Vd, MAINTAIN WITH CL — the two dose equations",
      "TCAs get bicarbonate for the sodium channel (cardiac), not for elimination — the exception that anchors the topic",
    ],
    m10: [
      "The weak-acid example trio is phenobarbital, methotrexate, aspirin (salicylates); the weak-base example pair is TCAs and amphetamines — memorize them as class tags, not as an exhaustive list",
      "The ammonium chloride line carries its own qualifier: 'for severe alkalosis' — the indication is acidifying the urine to trap weak bases",
      "On the printed figure the crossing annotation is pKa: 9.2, with 'pKa = more acidic' toward low pH and 'pKa = more basic' toward high pH — lower pKa = stronger acid, higher pKa = stronger base (the pKa represents the strength of the weak acid or base)",
      "F (bioavailability) divides BOTH dose equations — only the absorbed fraction reaches plasma, so a drug with low F needs a proportionally larger oral dose for the same Cp",
      "The maintenance equation's τ clause ('does not apply for continuous infusions') is the tell between interval dosing and infusion-rate questions",
      "The steady-state rule cuts both ways: neither a bigger dose nor a shorter interval reaches plateau sooner — only a shorter t1/2 (or waiting ~4–5 half-lives) does",
      "Zero rasters on the source page (pdfimages + VLM census): the ionization curve is a vector figure, the equations are typeset text — the KYP tubule glyph, curve redraw, and dosage panel are original",
    ],
  },
  recall: [
    {
      q: "The ion-trapping rule, verbatim.",
      a: "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.",
    },
    {
      q: "The weak-acid equilibrium with both tags, and its example drugs and treatment — verbatim.",
      a: "RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped). Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.",
    },
    {
      q: "The weak-base equilibrium with both tags, and its example drugs, trapping environment, and treatment — verbatim.",
      a: "RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble). Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.",
    },
    {
      q: "The pKa definition, verbatim.",
      a: "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.",
    },
    {
      q: "On the ionization-vs-pH curve, which drug class is more ionized at high pH and which at low pH, and where do the curves cross?",
      a: "The weak acid is more ionized at high pH (its curve rises to the right); the weak base is more ionized at low pH (its curve falls to the right, and weak bases are trapped in acidic environments); the two curves cross at the 50% level, where pH = pKa (the printed example annotation is pKa: 9.2).",
    },
    {
      q: "The TCA rule, verbatim.",
      a: "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.",
    },
    {
      q: "Both dosage formulas and both symbol definitions — verbatim.",
      a: "Loading dose = Cp × Vd / F. Maintenance dose = Cp × CL × τ / F. Cp = target plasma concentration. τ = dosage interval (time between doses); does not apply for continuous infusions.",
    },
    {
      q: "What happens to dosing in renal or liver disease — verbatim.",
      a: "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.",
    },
    {
      q: "What determines the time to steady state — verbatim.",
      a: "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
    },
  ],
  related: [
    {
      title: "Elimination of Drugs: Zero & First Order",
      topicId: "elimination-of-drugs",
      note:
        "The page immediately before supplies the kinetics this page dosing-izes — first-order elimination and the half-life that the steady-state rule leans on: time to steady state depends primarily on t1/2, and the maintenance dose exists to balance first-order clearance over each τ.",
    },
    {
      title: "Pharmacokinetic Parameters & Age-Related Changes",
      topicId: "pharmacokinetics-aging",
      note:
        "The parameter trio the dosage equations consume — Vd (the loading-dose engine), CL (the maintenance-dose engine), and F (the divisor of both) — defined on book 229, with the age-related shifts that change the numbers the formulas produce.",
    },
    {
      title: "Specific Toxicity Treatments: The Antidote Table",
      topicId: "toxicity-treatments",
      note:
        "The toxicology spine this page plugs into — sodium bicarbonate for salicylates (the renal indication) and for TCAs (the cardiac indication) sits in the same antidote table as N-acetylcysteine, pralidoxime, and fomepizole; this page is the WHY behind those two bicarbonate rows.",
    },
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note:
        "Shares book 230 with elimination — metabolism (what the liver does to the drug before it reaches the tubule) is the other half of elimination, and hepatic disease moves the maintenance dose through the same CL term as renal disease.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note:
        "Amphetamines — the printed weak-base example here — are the indirect sympathomimetics whose pharmacology lives on book 241–242; the ion-trapping logic is why acidic urine was the classic amphetamine clearance maneuver.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Henderson-Hasselbalch and buffer chemistry)",
      connection:
        "Both equilibria are Henderson-Hasselbalch in disguise: pH − pKa = log([A–]/[HA]) for the weak acid (each pH unit above the pKa multiplies the RCOO–/RCOOH ratio tenfold) and pH − pKa = log([B]/[BH+]) for the weak base — the 50/50 crossing at pH = pKa and the tenfold-per-unit swings on either side are the same buffer math that governs the bicarbonate and phosphate systems.",
    },
    {
      subject: "Renal physiology (tubular handling of weak acids and bases)",
      connection:
        "The nephron's own transporters exploit the same chemistry — organic acid (PAH, penicillin, methotrexate) and organic base (histamine, choline) secretion carriers handle the charged species, while the urine-to-blood pH gradient set by H+ secretion and HCO3– handling decides how much of a filtered drug diffuses back; urine alkalinization is a deliberate shift of that gradient.",
    },
    {
      subject: "Cardiovascular pharmacology (sodium-channel blockade)",
      connection:
        "The TCA exception is membrane-stabilization pharmacology: TCAs block fast Na+ channels (the class I antiarrhythmic effect gone wrong), widening the QRS; sodium bicarbonate overcomes the channel blockade the same way hypertonic sodium and alkalemia rescue other sodium-channel toxicities — a cardiac-pharmacology mechanism hiding inside a pharmacokinetics page.",
    },
    {
      subject: "Toxicology & emergency medicine (antidote selection and enhanced elimination)",
      connection:
        "Urine manipulation is one of the four enhanced-elimination strategies (with activated charcoal, hemodialysis, and hemoperfusion) — bicarbonate diuresis for salicylates and phenobarbital is the classic pairing, and the decision to alkalinize always competes with dialysis when levels are extreme or the kidney is failing (as in the note's CKD miniCase).",
    },
  ],
};
