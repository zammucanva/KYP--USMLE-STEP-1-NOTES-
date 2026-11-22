import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH5).
// Source: pdf 253 / book 231, top section — Urine pH and drug elimination
// (the same page's bottom section is Dosage calculations, a separate
// pending topic; NO Drug Metabolism (PH3) or Elimination kinetics (PH4)
// content lives on this page — those are pdf 252 / book 230). The header
// rule ('Ionized species are trapped in urine and cleared quickly. Neutral
// forms can be reabsorbed.'), the Weak acids row ('Examples: phenobarbital,
// methotrexate, aspirin (salicylates). Treat overdose with sodium
// bicarbonate to alkalinize urine.' with the RCOOH (lipid soluble) →
// RCOO– + H+ (trapped) strip), the Weak bases row ('Examples: tricyclic
// antidepressants (TCAs), amphetamines. Trapped in acidic environments.
// For severe alkalosis, treat with ammonium chloride to acidify urine.'
// with the RNH3+ (trapped) → RNH2 + H+ (lipid soluble) strip), the TCA
// margin note ('TCA toxicity is initially treated with sodium bicarbonate
// to overcome the sodium channel-blocking activity of TCAs. This treats
// cardiac toxicity, but does not accelerate drug elimination.'), and the
// pKa row ('pH at which drugs (weak acid or base) are 50% ionized and 50%
// nonionized. The pKa represents the strength of the weak acid or base.')
// with the Ionized species formation (%) vs pH graph (Weak acid and Weak
// base curves, 100/50/0 gridlines, 4/8/12/14 pH, 'pKa: 9.2', 'pKa = more
// acidic', 'pKa = more basic').
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). ONE vector graph — the Ionized species
// formation (%) plot — redrawn as an ORIGINAL_KYP_REDRAW vector graphic
// in the registry visual (no photographs, no copyrighted artwork
// reproduced). The two ionization reaction strips print in the text
// layer and are carried verbatim in this note's table blocks and the
// visual's species panels. The page prints NO margin mnemonic for this
// section; the KYP memory layer adds four original codes (ACID-in-ALKALI
// / BASE-in-ACID, PMA gets the BICARB, AA acidifies, 50/50 at pKa).

export const urinePhAndDrugElimination: KypUsMLENote = {
  id: "urine-ph-and-drug-elimination",
  title: "Urine pH and Drug Elimination",
  subtitle:
    "Ion trapping, the pH lever, and the pKa rule (book 231). IONIZED SPECIES ARE TRAPPED IN URINE AND CLEARED QUICKLY; NEUTRAL FORMS CAN BE REABSORBED. Weak acids (phenobarbital, methotrexate, aspirin/salicylates) exist as RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped) — alkalinize the urine with sodium bicarbonate and the anion is trapped and cleared. Weak bases (TCAs, amphetamines) exist as RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble) — they are trapped in acidic environments, and for severe alkalosis, ammonium chloride acidifies the urine. The TCA caveat: bicarbonate is the initial TCA treatment because it overcomes the sodium channel-blocking activity — that treats cardiac toxicity, but does not accelerate drug elimination. pKa is the pH at which a drug is 50% ionized and 50% nonionized — read off the Ionized species formation (%) graph where the Weak acid curve rises and the Weak base curve falls.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The urine-pH-and-drug-elimination page's complete architecture — the section header rule ('Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'); the Weak acids row ('Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.') with the ionization strip 'RCOOH (lipid soluble) → RCOO– + H+ (trapped)'; the Weak bases row ('Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.') with the ionization strip 'RNH3+ (trapped) → RNH2 + H+ (lipid soluble)'; the TCA margin note ('TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.'); and the pKa row ('pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.') with the Ionized species formation (%) vs pH graph (Weak acid / Weak base curves, 'pKa: 9.2', 'pKa = more acidic', 'pKa = more basic').",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 231 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Urine pH and drug elimination — the header rule 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed'; the weak-acids row 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine' with the RCOOH (lipid soluble) → RCOO– + H+ (trapped) strip; the weak-bases row 'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine' with the RNH3+ (trapped) → RNH2 + H+ (lipid soluble) strip; the TCA note 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination'; and the pKa row 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base' with the Ionized species formation (%) graph, 'pKa: 9.2', 'pKa = more acidic', 'pKa = more basic')",
  tags: [
    "urine pH",
    "drug elimination",
    "ion trapping",
    "ionized species",
    "neutral forms",
    "reabsorption",
    "weak acids",
    "weak bases",
    "phenobarbital",
    "methotrexate",
    "aspirin",
    "salicylates",
    "sodium bicarbonate",
    "alkalinize urine",
    "urinary alkalinization",
    "tricyclic antidepressants",
    "TCAs",
    "amphetamines",
    "acidic environments",
    "severe alkalosis",
    "ammonium chloride",
    "acidify urine",
    "sodium channel blockade",
    "cardiac toxicity",
    "pKa",
    "50% ionized",
    "50% nonionized",
    "ionized species formation",
    "RCOOH",
    "RCOO",
    "RNH3+",
    "RNH2",
    "lipid soluble",
    "trapped",
    "Henderson-Hasselbalch",
    "enhanced elimination",
    "renal clearance",
    "pharmacokinetics",
    "pharmacodynamics",
  ],
  core: {
    what:
      "URINE pH DECIDES WHICH FORM OF A DRUG SURVIVES THE TUBULE. The section's governing rule, verbatim: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' Only the NEUTRAL form is lipid soluble enough to cross back through the tubular epithelium into the blood; the IONIZED form is stuck in the lumen and leaves in the urine. WEAK ACIDS exist as 'RCOOH (lipid soluble)' ⇌ 'RCOO – + H+ (trapped)' — raising the tubular pH (alkalinization) pulls the equilibrium toward the deprotonated anion RCOO–, which is ionized, trapped, and cleared; 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' WEAK BASES exist as 'RNH3+ (trapped)' ⇌ 'RNH2 + H+ (lipid soluble)' — they are 'trapped in acidic environments' because low pH keeps the protonated cation RNH3+ in the lumen; 'For severe alkalosis, treat with ammonium chloride to acidify urine.' The TCA caveat, verbatim: 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.' And the pKa rule, verbatim: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' — read off the graph where the Weak acid curve (rising with pH) and the Weak base curve (falling with pH) cross the 50% line, annotated 'pKa: 9.2' for the weak-base example, with 'pKa = more acidic' and 'pKa = more basic' flanking the pKa axis.",
    why:
      "The mechanism is a membrane-permeability equilibrium. Renal tubular cells, like all lipid membranes, are crossed only by small lipophilic uncharged species — the NEUTRAL form of a drug. So each drug sits in a pH-dependent equilibrium between a neutral membrane-permeant form and an ionized membrane-impermeant form: for a weak acid, RCOOH (neutral, lipid soluble) ⇌ RCOO– + H+ (ionized, trapped); for a weak base, RNH3+ (ionized, trapped) ⇌ RNH2 (neutral, lipid soluble) + H+. Where that equilibrium sits is set by pH relative to pKa (the Henderson-Hasselbalch logic): at pH = pKa the drug is exactly 50% ionized / 50% nonionized; each pH unit away from the pKa shifts the ratio tenfold toward the ionized form of whichever side keeps the charge. Push the TUBULAR pH to the ionizing side and you trap the drug in the lumen: alkalinize the urine (sodium bicarbonate) and weak acids deprotonate to RCOO– — the anion cannot be reabsorbed, so renal clearance rises and the plasma level falls faster; this is why 'treat overdose with sodium bicarbonate to alkalinize urine' is printed for the weak-acid set (phenobarbital — a long-acting barbiturate whose neutral form is famously reabsorbed, making its overdose prolonged; methotrexate — whose clearance protects against the myelosuppression/mucositis of delayed elimination; aspirin/salicylates — the classic salicylate-poisoning indication). Symmetrically, weak bases are 'trapped in acidic environments': an acidic tubule keeps them protonated as RNH3+, and the page adds the clinical trigger — 'For severe alkalosis, treat with ammonium chloride to acidify urine' (in an alkalotic patient the whole system is tilted toward the neutral base, so acidifying the urine restores the trap; ammonium chloride is the acidifying agent, and vitamin C is the same idea). The TCA margin note exists because students assume the bicarbonate given in TCA overdose works by ion trapping: it does not — it is given 'to overcome the sodium channel-blocking activity of TCAs,' which 'treats cardiac toxicity, but does not accelerate drug elimination' (urinary manipulation is not how you clear a TCA; the sodium-channel blockade — QRS widening, dysrhythmias — is what kills, and bicarbonate is the antidote for that). Finally, pKa is the drug's own constant: 'the pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized,' and 'the pKa represents the strength of the weak acid or base' — a lower pKa means a stronger acid (it gives up its proton at a lower pH), and the graph's two curves are the same fact drawn twice: the Weak acid curve rises with pH (more ionization as pH climbs above its pKa) while the Weak base curve falls with pH (more ionization as pH drops below its pKa), with the example annotation 'pKa: 9.2' and the axis reminders 'pKa = more acidic' (left, low pKa) and 'pKa = more basic' (right, high pKa).",
    keyIdea:
      "Read every urine-pH question through two axes. AXIS 1 — THE EQUILIBRIUM AXIS (which form is where?): 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' Weak acid: RCOOH (lipid soluble — crosses back, reabsorbed) ⇌ RCOO– + H+ (trapped — cleared). Weak base: RNH3+ (trapped — cleared) ⇌ RNH2 + H+ (lipid soluble — crosses back, reabsorbed). AXIS 2 — THE pH LEVER (which way do you push?): to accelerate elimination of a weak ACID, ALKALINIZE the urine (sodium bicarbonate → traps the anion; the weak-acid set is PMA: Phenobarbital, Methotrexate, Aspirin/salicylates); to accelerate elimination of a weak BASE, ACIDIFY the urine ('trapped in acidic environments'; 'for severe alkalosis, treat with ammonium chloride to acidify urine' — the weak-base set is AA: Amphetamines And TCAs) — remembering the page's one exception-to-purpose note: in TCA toxicity the initial bicarbonate is for the SODIUM CHANNEL BLOCKADE ('this treats cardiac toxicity, but does not accelerate drug elimination'). The pKa rule anchors the arithmetic: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized' — on the graph, the Weak acid curve climbs and the Weak base curve falls through the 50% line, 'pKa: 9.2' marks the example crossing, and 'pKa = more acidic' / 'pKa = more basic' remind you that a lower pKa is a stronger acid. Every manipulation is just picking the side of the pKa that ionizes the offending drug.",
  },
  mechanisms: [
    {
      id: "ion-trapping-equilibrium",
      title: "The ion-trapping equilibrium: neutral forms are reabsorbed, ionized species are trapped",
      context: "The section header rule and the two ionization strips (book 231)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A weak acid or weak base reaches the renal tubule in equilibrium",
            sublabel:
              "Input — the drug arrives in the tubular lumen with its neutral and ionized forms in a pH-dependent equilibrium. The tubular epithelium is a lipid membrane: only the small, uncharged NEUTRAL form can cross back into the blood. The governing rule of the page: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'",
            variant: "input",
          },
          {
            id: "acidstrip",
            label: "Weak acid — RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped)",
            sublabel:
              "THE WEAK-ACID STRIP. The neutral acid RCOOH is lipid soluble — it is reabsorbed through the tubule back into plasma. The deprotonated anion RCOO– + H+ is ionized — it is TRAPPED in the lumen and cleared quickly. Pushing tubular pH UP (alkalinization) pulls the equilibrium toward the trapped anion; pulling pH DOWN (acidification) restores the neutral, reabsorbable acid.",
            variant: "process",
          },
          {
            id: "basestrip",
            label: "Weak base — RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble)",
            sublabel:
              "THE WEAK-BASE STRIP. The protonated cation RNH3+ is ionized — TRAPPED in the lumen and cleared quickly. The neutral base RNH2 + H+ is lipid soluble — it is reabsorbed. Weak bases are 'trapped in acidic environments': a low tubular pH keeps the equilibrium protonated (trapped); alkalemia shifts it toward the neutral, reabsorbable base.",
            variant: "process",
          },
          {
            id: "output",
            label: "The direction rule — which form leaves, which form stays",
            sublabel:
              "Output — the prediction. ALKALINE URINE traps weak acids (anion RCOO– stays in the lumen; clearance ↑; plasma level falls faster). ACIDIC URINE traps weak bases (cation RNH3+ stays in the lumen). In each case the opposite pH tilts the equilibrium toward the NEUTRAL form — which is reabsorbed, prolonging the drug's stay. This is why the treatment rows pick the pH that ionizes the offending species.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "acidstrip", label: "weak acid in the tubular filtrate" },
          { from: "input", to: "basestrip", label: "weak base in the tubular filtrate" },
          { from: "acidstrip", to: "output", label: "↑ urine pH → deprotonated anion trapped → cleared" },
          { from: "basestrip", to: "output", label: "↓ urine pH → protonated cation trapped → cleared" },
        ],
      },
    },
    {
      id: "urine-ph-treatment-axis",
      title: "The treatment axis: alkalinize for acids, acidify for bases — and the TCA caveat",
      context: "The two treatment rows, the TCA margin note, and the pKa row (book 231)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Choose the urine pH that ionizes the offending drug",
            sublabel:
              "Input — a weak-acid or weak-base overdose (or a severe alkalosis tilting the whole system toward neutral bases). The lever is tubular pH; the pKa rule ('pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized') predicts how far each push moves the equilibrium.",
            variant: "input",
          },
          {
            id: "alkalinize",
            label: "Alkalinize the urine — sodium bicarbonate — for WEAK ACIDS",
            sublabel:
              "'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' Bicarbonate raises tubular pH above the drug's pKa → the acid deprotonates to RCOO– → trapped and cleared. Phenobarbital: a long-acting barbiturate whose neutral form is reabsorbed (prolonged toxicity) — alkalinization converts it to the trapped anion. Methotrexate: faster renal clearance protects marrow and mucosa. Aspirin/salicylates: the classic salicylate-poisoning indication (with the acid-base page's respiratory alkalosis / anion-gap metabolic acidosis).",
            variant: "process",
          },
          {
            id: "acidify",
            label: "Acidify the urine — ammonium chloride — for WEAK BASES",
            sublabel:
              "'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' Ammonium chloride lowers tubular pH below the base's pKa → the base protonates to RNH3+ → trapped and cleared. The severe-alkalosis trigger: alkalemia keeps weak bases NEUTRAL (reabsorbable), so acidifying the urine restores the trap (vitamin C is the same idea in milder form).",
            variant: "process",
          },
          {
            id: "tcacaveat",
            label: "The TCA caveat — bicarbonate for the sodium channel, not for elimination",
            sublabel:
              "'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.' In TCA overdose the killer is the sodium-channel blockade (QRS widening, dysrhythmias, hypotension) — bicarbonate is its antidote. But the bicarbonate is NOT an ion-trapping maneuver here: clearing a TCA is not achieved by urinary manipulation. Two different jobs for the same infusion — do not conflate them.",
            variant: "target",
          },
          {
            id: "output",
            label: "The pKa graph — pH vs pKa predicts the ionized fraction",
            sublabel:
              "Output — the arithmetic. 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' On the Ionized species formation (%) graph: the Weak acid curve RISES with pH (ionized fraction ↑ as pH climbs above its pKa); the Weak base curve FALLS with pH (ionized fraction ↑ as pH drops below its pKa); the example crossing is labeled 'pKa: 9.2'; and the axis annotations read 'pKa = more acidic' (a low pKa is a stronger acid — it ionizes at a lower pH) and 'pKa = more basic' (a high pKa is a stronger base). Each pH unit on the ionizing side of the pKa moves the ratio roughly tenfold.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "alkalinize", label: "weak-acid overdose → bicarbonate → trap the anion" },
          { from: "input", to: "acidify", label: "weak base + severe alkalosis → ammonium chloride → trap the cation" },
          { from: "alkalinize", to: "tcacaveat", label: "except in TCA toxicity: bicarb targets the sodium channel" },
          { from: "acidify", to: "output", label: "pH set below the base's pKa → protonated → trapped" },
          { from: "alkalinize", to: "output", label: "pH set above the acid's pKa → deprotonated → trapped" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "urine-ph-elimination-map",
      title: "The urine-pH-and-drug-elimination map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 231): the governing rule ('Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'); the WEAK ACIDS panel — phenobarbital, methotrexate, aspirin (salicylates); 'Treat overdose with sodium bicarbonate to alkalinize urine'; the ionization strip RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped) with the alkaline-urine shift arrow; the WEAK BASES panel — TCAs, amphetamines; 'Trapped in acidic environments'; 'For severe alkalosis, treat with ammonium chloride to acidify urine'; the strip RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble) with the acidic-urine shift arrow; the TCA caveat callout (bicarbonate for the sodium channel-blocking activity — cardiac toxicity treated, elimination not accelerated); the pKa definition panel with 'pKa = more acidic' / 'pKa = more basic'; the Ionized species formation (%) vs pH graph redrawn (Weak acid curve rising, Weak base curve falling, 100/50/0 gridlines, 'pKa: 9.2'); and the four-code mnemonic strip.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The Urine pH and drug elimination section has ONE vector graph (the Ionized species formation (%) vs pH plot) — redrawn as an ORIGINAL_KYP_REDRAW vector graphic in the registry visual (no photographs, no copyrighted artwork reproduced). The two ionization reaction strips (RCOOH (lipid soluble) → RCOO– + H+ (trapped); RNH3+ (trapped) → RNH2 + H+ (lipid soluble)) print in the text layer and are carried verbatim in this note's table blocks and the visual's species panels. The page prints NO margin mnemonic for this section; the four mnemonic codes are KYP-original designs.",
    },
    {
      kind: "table",
      title: "Book 231 — the weak acid vs weak base comparison (carried verbatim)",
      intro:
        "The two species rows with their example drugs, trap environments, treatments, and ionization strips, as printed.",
      columns: ["Parameter", "Weak acids", "Weak bases"],
      rows: [
        ["Examples", "Phenobarbital, methotrexate, aspirin (salicylates)", "Tricyclic antidepressants (TCAs), amphetamines"],
        ["Where they are trapped", "Alkaline urine — the deprotonated anion RCOO– is trapped", "Acidic environments — the protonated cation RNH3+ is trapped ('Trapped in acidic environments')"],
        ["Treatment of overdose", "Treat overdose with sodium bicarbonate to alkalinize urine", "For severe alkalosis, treat with ammonium chloride to acidify urine"],
        ["The ionization strip (verbatim)", "RCOOH (lipid soluble) → RCOO – + H+ (trapped)", "RNH3+ (trapped) → RNH2 + H+ (lipid soluble)"],
        ["Form that is reabsorbed", "RCOOH — the neutral acid (lipid soluble) crosses back", "RNH2 — the neutral base (lipid soluble) crosses back"],
      ],
      caption:
        "The two rows are mirror images: whatever ionizes the drug traps it, whatever neutralizes it reabsorbs it. Weak acids (PMA: Phenobarbital, Methotrexate, Aspirin) get sodium bicarbonate — alkalinize the urine, deprotonate the acid, trap the anion, clear it quickly. Weak bases (AA: Amphetamines And TCAs) are 'trapped in acidic environments' — and the page adds the trigger for the reverse lever: 'For severe alkalosis, treat with ammonium chloride to acidify urine' (alkalemia tilts weak bases toward their neutral, reabsorbable form, so the urine must be re-acidified to restore the trap). The one place the page breaks the symmetry is the TCA margin note: bicarbonate in TCA toxicity is for the sodium channel blockade — 'this treats cardiac toxicity, but does not accelerate drug elimination.' See the elimination-of-drugs page (PH4) for the kinetic face of these overdoses (aspirin at high or toxic concentrations → salicylate saturation → zero-order elimination) — this page is the pH face: the same salicylate overdose is ALSO treated with bicarbonate, but by ion trapping rather than by desaturating enzymes.",
    },
    {
      kind: "table",
      title: "Book 231 — the pKa row, the header rule, and the graph's annotations (carried verbatim)",
      intro:
        "The governing rule, the pKa definition, and what the Ionized species formation (%) graph prints on its axes, gridlines, curves, and pKa annotations.",
      columns: ["Element", "As printed (book 231)"],
      rows: [
        ["The section header rule", "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed."],
        ["The pKa definition", "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base."],
        ["The graph's y-axis", "Ionized species formation (%) — gridlines 100, 50, 0"],
        ["The graph's x-axis", "pH — ticks 4, 8, 12, 14"],
        ["The two curves", "Weak acid (rises with pH — a weak acid ionizes as pH climbs above its pKa) and Weak base (falls with pH — a weak base ionizes as pH drops below its pKa)"],
        ["The pKa annotations", "pKa: 9.2 (the example 50% crossing) · pKa = more acidic (low pKa = stronger acid) · pKa = more basic (high pKa = stronger base)"],
        ["The TCA margin note", "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination."],
      ],
      caption:
        "The pKa row converts intuition into arithmetic. At pH = pKa the drug is exactly 50% ionized / 50% nonionized; each pH unit on the ionizing side moves the ratio about tenfold. So for a weak acid with pKa 3 (salicylates), a tubular pH of 8 is ~5 units above the pKa — overwhelmingly the trapped anion; for the weak base example the graph annotates 'pKa: 9.2', so a tubular pH of 5 is >4 units below it — overwhelmingly the trapped cation. The graph draws the same fact for both classes: the Weak acid curve climbs through the 50% line as pH rises, the Weak base curve falls through it, and the axis reminders 'pKa = more acidic' / 'pKa = more basic' keep the strength reading straight — a LOW pKa means a STRONGER acid (it deprotonates at a lower pH), a HIGH pKa means a STRONGER base. Read any stem the same way: classify the drug (weak acid vs weak base), locate its pKa, then ask which side of the pKa the proposed urine pH puts it — the ionizing side traps, the neutralizing side reabsorbs.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 19-year-old woman is brought to the emergency department 6 hours after ingesting roughly 40 aspirin tablets. She is tinnitus, hyperventilating at 30/min, and blood gas shows a respiratory alkalosis with an anion-gap metabolic acidosis; serum salicylate is 74 mg/dL. After activated charcoal and IV fluids, the team starts a sodium bicarbonate infusion targeting urine pH 7.5-8. The pharmacology text lists aspirin among the weak acids: 'Treat overdose with sodium bicarbonate to alkalinize urine.'",
        discriminator:
          "Aspirin (a weak acid, salicylates) + overdose + bicarbonate targeting an alkaline urine → ion trapping: the salicylate anion is trapped in the tubule and cleared quickly — this is the pH manipulation, distinct from the kinetic (saturation) story on the elimination page",
        concept: "The salicylate ion-trapping / urinary alkalinization axis",
        answer:
          "Aspirin is one of the page's three weak acids (with phenobarbital and methotrexate): 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' The strip prints RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped): bicarbonate raises tubular pH above salicylate's pKa (~3), so the equilibrium swings to the deprotonated anion — ionized, unable to cross the tubular epithelium, trapped in the lumen and cleared quickly, while the neutral RCOOH that would have been reabsorbed is depleted. Enhanced renal clearance pulls the plasma level down faster (and shortens the toxicity). The same infusion also treats the acidemia — but note the two jobs are different: bicarb here is BOTH the acid-base buffer AND the ion-trapping lever. Distinguish this from the elimination-of-drugs page (PH4): at toxic concentrations salicylate is ALSO capacity-limited ('↑ salicylate saturation → zero-order elimination') — the saturation story explains the climbing level and prolonged half-life; THIS page's story explains how urinary alkalinization accelerates renal clearance of whatever the saturated metabolism cannot finish. Serial levels guide both.",
      },
      {
        stem:
          "A 63-year-old woman with a phenobarbital prescription for epilepsy is found obtunded after taking an entire bottle. She is lethargic with slow respirations; phenobarbital level is well above therapeutic, and because the drug is long-acting (its neutral form is extensively reabsorbed in the tubule), the team alkalinizes the urine with sodium bicarbonate in addition to supportive care and charcoal.",
        discriminator:
          "Phenobarbital (a long-acting barbiturate and a weak ACID) + obtundation + the page's printed treatment 'sodium bicarbonate to alkalinize urine' → convert the reabsorbed neutral acid into the trapped anion",
        concept: "The phenobarbital/methotrexate weak-acid set axis",
        answer:
          "Phenobarbital is the first drug in the page's weak-acid row: 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' Its neutral RCOOH form is lipid soluble and reabsorbed — which is why phenobarbital has a long half-life and its overdose is prolonged and deep. Raising tubular pH above its pKa (~7.4, close to physiologic pH, so the equilibrium sits mid-strip at baseline) drives deprotonation to RCOO–: ionized, trapped in urine, cleared quickly. The clinical payoff is exactly what the section rule promises — 'ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed' — alkalinization converts a reabsorbed drug into a cleared one. Methotrexate is the third member of the set: in high-dose therapy or renal impairment, alkalinizing the urine (plus generous IV fluids) accelerates clearance of the weak acid and protects marrow and mucosa from prolonged exposure. The exam wants the classification first: weak acid → alkalinize; never acidify (acidification would push phenobarbital back toward the neutral, reabsorbable form and prolong the intoxication).",
      },
      {
        stem:
          "A 26-year-old man is brought in obtunded after ingesting a relative's amitriptyline. He is hypotensive with widened QRS complexes and runs of ventricular tachycardia. The team gives repeated sodium bicarbonate boluses; the QRS narrows and the dysrhythmias resolve, but the team notes the serum tricyclic level will still take many hours to fall.",
        discriminator:
          "TCA overdose + widened QRS + bicarbonate → the bicarb is overcoming the sodium channel-blocking activity of TCAs ('treats cardiac toxicity, but does not accelerate drug elimination') — NOT an ion-trapping maneuver",
        concept: "The TCA cardiac-vs-elimination caveat axis",
        answer:
          "This is the page's built-in exception note, verbatim: 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.' TCAs are weak bases — the row says they are 'trapped in acidic environments' and that 'for severe alkalosis, treat with ammonium chloride to acidify urine' — but in actual TCA overdose the lethal problem is the sodium-channel blockade (QRS widening, dysrhythmias, hypotension), and bicarbonate is the antidote for THAT. Two consequences follow. (1) The bicarbonate is not there to ion-trap the TCA: urinary pH manipulation does not meaningfully accelerate TCA clearance, which is why the level drifts down slowly while the ECG improves within minutes. (2) The weak-base rule still applies where the page attaches it — severe ALKALOSIS: an alkalotic patient tilts every weak base toward its neutral, reabsorbable form, so ammonium chloride (or vitamin C) acidifies the urine to restore the cation trap. The exam separates the two bicarbonate jobs: in salicylate poisoning bicarb accelerates elimination (ion trapping) AND buffers the acidemia; in TCA poisoning bicarb fixes the sodium channels and does nothing for elimination speed.",
      },
    ],
    traps: [
      {
        a: "Alkalinize the urine for weak ACIDS (sodium bicarbonate)",
        b: "Acidify the urine for weak acids",
        whyConfused: "The word 'acid' pulls students toward acidifying 'acid drugs'",
        keyDifference:
          "The trap is the OPPOSITE of the name: a weak ACID is trapped in ALKALINE urine. The page: 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' Raising tubular pH above the acid's pKa deprotonates it to the anion RCOO– — ionized, trapped, cleared quickly. Acidifying the urine of a weak-acid overdose would push the equilibrium back toward neutral RCOOH (lipid soluble) — reabsorbed, level maintained, intoxication prolonged. The rule that never fails: pick the pH that IONIZES the offending drug (the ionized species is the trapped one).",
        clue:
          "Weak acid + need for enhanced elimination → ALKALINIZE (bicarbonate). If an option pairs a weak acid with ammonium chloride, it is reversed. Mnemonic: ACID-in-ALKALI, BASE-in-ACID.",
      },
      {
        a: "Weak bases are trapped in acidic environments",
        b: "Weak bases are trapped in alkaline environments",
        whyConfused: "Students mirror the weak-acid rule onto the weak-base row",
        keyDifference:
          "The weak-base row is the mirror image: 'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' A LOW tubular pH keeps the base protonated as RNH3+ — ionized, trapped, cleared quickly. An ALKALINE tubule shifts the equilibrium toward neutral RNH2 (lipid soluble) — reabsorbed. This is also why the severe-alkalosis trigger exists: alkalemia systematically un-traps weak bases, so ammonium chloride re-acidifies the urine to restore the trap. Ionized = trapped, whichever charge the ion carries (anion for acids, cation for bases).",
        clue:
          "Weak base + severe alkalosis (or any need to trap it) → ACIDIFY (ammonium chloride; vitamin C is the milder version). 'Trapped in acidic environments' is the page's own phrasing — quote it back.",
      },
      {
        a: "In TCA toxicity, bicarbonate treats the sodium channel-blocking cardiac toxicity but does NOT accelerate drug elimination",
        b: "In TCA toxicity, bicarbonate accelerates elimination by ion trapping the TCA",
        whyConfused: "Bicarbonate is given in both salicylate and TCA poisoning — students assume it is for the same reason",
        keyDifference:
          "The page prints the caveat verbatim: 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.' In TCA overdose the killer is cardiac (sodium-channel blockade: QRS widening, dysrhythmias, hypotension) and bicarbonate is its antidote — the ECG improves within minutes while the serum level drifts down over many hours, because urinary pH manipulation does not clear a TCA. In salicylate poisoning, by contrast, bicarbonate IS the ion-trapping lever (weak acid → alkaline urine → trapped anion → faster clearance) in addition to buffering the acidemia. Same infusion, two completely different jobs.",
        clue:
          "Ask what the bicarbonate is FOR. Stem says QRS widening / ventricular dysrhythmias → sodium-channel job (cardiac). Stem asks about accelerating elimination of a weak acid → ion-trapping job.",
      },
      {
        a: "pKa = the pH at which the drug is 50% ionized and 50% nonionized (the pKa represents the strength of the weak acid or base)",
        b: "pKa = the pH at which the drug is 50% eliminated, or the pH at which it is 100% ionized",
        whyConfused: "The two 50% marks — 50% IONIZED vs 50% eliminated — and the assumption that ionization is all-or-none",
        keyDifference:
          "The pKa row is exact: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' It is an IONIZATION fraction, not an elimination fraction — and at the pKa the split is exactly half-and-half, not all-or-none. Each pH unit on the ionizing side of the pKa shifts the ratio roughly tenfold (Henderson-Hasselbalch), which is why alkalinizing urine from 5 to 8 for salicylate (pKa ~3) leaves almost nothing in the neutral form. The strength reading follows: a LOW pKa = a STRONGER acid ('pKa = more acidic'); a HIGH pKa = a STRONGER base ('pKa = more basic') — the graph annotates the example 'pKa: 9.2' on the weak-base curve.",
        clue:
          "Any option that defines pKa by elimination ('50% cleared') or by full ionization is wrong. At pH = pKa think '50/50 split of the two FORMS', then ask which side of the pKa the urine pH sits on.",
      },
    ],
    pivots: [
      {
        lookAlike: "An overdose question asks whether to alkalinize or acidify the urine — which lever applies?",
        differentiator:
          "Three steps. (1) CLASSIFY THE DRUG: weak acid or weak base — the page's acid set is PMA (Phenobarbital, Methotrexate, Aspirin/salicylates; also most barbiturates); the base set is AA (Amphetamines And TCAs; also most local anesthetics and many sympathomimetics). (2) PICK THE OPPOSITE pH: alkalinize for acids (sodium bicarbonate), acidify for bases (ammonium chloride — the page attaches it to severe alkalosis). (3) CHECK THE CAVEATS: in TCA toxicity the initial bicarbonate is for the sodium channel blockade and does not accelerate elimination; in salicylate poisoning the same bicarbonate both buffers the acidemia and ion-traps the salicylate. Anything that pairs a weak acid with ammonium chloride (or a weak base with urinary alkalinization for ELIMINATION purposes) is reversed.",
        correctPath:
          "Read the stem in this order: name the drug → acid or base → the ionizing pH is the therapeutic one (ACID-in-ALKALI, BASE-in-ACID) → then confirm with the special-case notes (TCA cardiac, salicylate dual job). If the stem is figure-based, locate the pKa and ask which side of it the proposed urine pH falls: the ionizing side traps; the neutralizing side reabsorbs.",
      },
      {
        lookAlike: "A question shows the Ionized species formation (%) graph or gives a pKa with a urine pH — what fraction is ionized/trapped?",
        differentiator:
          "The pKa rule does the arithmetic: at pH = pKa the drug is 50% ionized / 50% nonionized; each pH unit on the ionizing side moves the ratio ~tenfold. Weak ACID: ionized fraction rises as pH climbs ABOVE its pKa (the graph's Weak acid curve rises) — so an alkaline urine traps it. Weak BASE: ionized fraction rises as pH drops BELOW its pKa (the Weak base curve falls) — so an acidic urine traps it. 'pKa = more acidic' (low pKa, stronger acid) and 'pKa = more basic' (high pKa, stronger base) orient the strength axis; the graph's example annotation is 'pKa: 9.2'.",
        correctPath:
          "Locate pKa on the graph; drop a line at the proposed urine pH; the curve tells you the ionized fraction (Weak acid curve for acids, Weak base curve for bases). If the pH sits on the ionizing side of the pKa → trapped and cleared; on the neutralizing side → neutral, lipid soluble, reabsorbed. The 50% line is the pKa crossing — that is where '50% ionized and 50% nonionized' comes from.",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old woman with a history of depression is found obtunded after ingesting approximately 40 tablets of phenobarbital (a long-acting barbiturate) that had been prescribed to a relative. On arrival she is lethargic and hypoventilating, with sluggishly reactive pupils and downgoing toes; blood pressure 108/64, pulse 96/min, respirations 10/min. She is intubated for airway protection, given activated charcoal via the tube, and started on intravenous sodium bicarbonate with a target urine pH of 7.5-8, along with generous fluids. The pharmacology text lists phenobarbital among the weak acids: 'Treat overdose with sodium bicarbonate to alkalinize urine,' with the strip RCOOH (lipid soluble) → RCOO– + H+ (trapped), and the rule 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'",
      question:
        "Explain the mechanism by which urinary alkalinization accelerates phenobarbital clearance, which form of the drug is reabsorbed across the tubular epithelium and which form is trapped, why acidifying the urine with ammonium chloride would be counterproductive here, and what the pKa rule ('pH at which drugs are 50% ionized and 50% nonionized') predicts about the size of the effect.",
      options: [
        {
          label:
            "Bicarbonate raises the tubular pH above phenobarbital's pKa, shifting the equilibrium toward the deprotonated anion RCOO–. That anion is ionized — it cannot cross the lipid tubular epithelium, so it is TRAPPED in the lumen and cleared quickly, while the neutral RCOOH (lipid soluble), the form that would otherwise be reabsorbed, is depleted. Acidification with ammonium chloride would push the equilibrium back toward neutral RCOOH — reabsorbed, level maintained, intoxication prolonged. At pH = pKa the drug sits 50% ionized / 50% nonionized; every pH unit above the pKa moves the ratio roughly tenfold toward the trapped anion, so an alkaline urine several units above the pKa leaves almost nothing in the reabsorbable form.",
          text:
            "Alkalinize → trap the anion: RCOO– ionized and cleared quickly; RCOOH reabsorbed; acidification would reverse the trap; each pH unit above pKa shifts the split tenfold.",
          correct: true,
          why:
            "Correct on every element. (1) THE CLASSIFICATION: phenobarbital is the first drug of the page's weak-acid row ('Examples: phenobarbital, methotrexate, aspirin (salicylates)') — a long-acting barbiturate whose NEUTRAL form (RCOOH, lipid soluble) is reabsorbed from the tubule, which is exactly why its overdose is deep and prolonged. (2) THE MECHANISM: 'Treat overdose with sodium bicarbonate to alkalinize urine' — bicarbonate lifts tubular pH above the pKa, the equilibrium swings to RCOO– + H+ (trapped), and the governing rule pays out: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' The trapped anion cannot cross back; the neutral reabsorbable pool is drained by the same shift. (3) THE REVERSE LEVER: ammonium chloride is the page's acidifying agent — but the page attaches it to weak BASES in severe alkalosis; using it on a weak acid would push phenobarbital back toward the neutral, reabsorbable form and prolong the intoxication. (4) THE ARITHMETIC: the pKa row ('pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized') plus Henderson-Hasselbalch: tenfold per pH unit on the ionizing side — the reason a urine pH of 7.5-8 vs a phenobarbital pKa near physiologic pH still yields a large trapping gain, and why serial levels (and the acid-base page's monitoring) guide the infusion.",
        },
        {
          label:
            "Phenobarbital is a weak base, so the correct maneuver is to acidify the urine with ammonium chloride: the acidic tubule keeps it protonated as the trapped cation, which is cleared quickly, while bicarbonate would neutralize it and allow reabsorption.",
          text:
            "Phenobarbital is a weak base → acidify with ammonium chloride to trap the cation; bicarbonate would un-trap it.",
          why:
            "The classification is reversed — phenobarbital is a barbiturate, a WEAK ACID, and the page prints it in the weak-acid row with 'treat overdose with sodium bicarbonate to alkalinize urine.' The ammonium chloride acidification rule belongs to the weak-base row ('tricyclic antidepressants (TCAs), amphetamines... for severe alkalosis, treat with ammonium chloride to acidify urine') — a long-acting barbiturate is the wrong species for that lever. Applying it here would push the equilibrium toward neutral RCOOH (lipid soluble, reabsorbed) — the opposite of enhanced elimination.",
        },
        {
          label:
            "Urinary alkalinization works by converting phenobarbital into its NEUTRAL lipid-soluble form, which is then trapped in the urine; the ionized anion is the form that is reabsorbed across the tubule.",
          text:
            "Alkalinization makes the drug neutral and lipid soluble, which is the trapped form; the ionized form is reabsorbed.",
          why:
            "The definitional swap. The page's rule is the opposite: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' The NEUTRAL form (RCOOH, lipid soluble) is precisely the one that crosses the tubular epithelium back into plasma — it can never be the trapped form, because trapping is a CHARGE problem: the tubule is a lipid membrane, and ionized species (the anion RCOO–) cannot cross it. Alkalinization deprotonates the acid, creating the trapped anion; it does not create a trapped neutral species.",
        },
        {
          label:
            "Sodium bicarbonate is given to overcome phenobarbital's sodium channel-blocking activity: it treats the cardiac toxicity (QRS widening, dysrhythmias) but does not accelerate drug elimination, so the level will drift down slowly regardless of urine pH.",
          text:
            "Bicarb is for phenobarbital's sodium channel blockade — cardiac fix, not elimination; urine pH is irrelevant.",
          why:
            "The TCA caveat pasted onto the wrong drug. The page's margin note reads 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination' — that is the tricyclic antidepressant story (wide-complex dysrhythmias from sodium-channel blockade). Phenobarbital does not block sodium channels; it is a GABAergic sedative-hypnotic, and in its overdose bicarbonate IS the ion-trapping lever — 'treat overdose with sodium bicarbonate to alkalinize urine' is printed for it by name. This distractor catches students who memorize 'bicarbonate in overdose' without attaching the drug class.",
        },
        {
          label:
            "Bicarbonate accelerates phenobarbital elimination by saturating its hepatic metabolizing enzymes, converting elimination to zero-order kinetics; the pKa is the pH at which 50% of the drug has been eliminated from the body, so the urine pH target is read off that 50% elimination mark.",
          text:
            "Bicarb saturates the enzymes (zero-order switch) and pKa marks the pH of 50% elimination; ion trapping is irrelevant.",
          why:
            "Two errors, both cross-topic. (1) Saturation is the ELIMINATION KINETICS page's mechanism (the PH4 page: 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination' for aspirin) — bicarbonate does nothing to hepatic enzyme capacity; making elimination zero-order would, if anything, SLOW proportional clearance. Here the mechanism is renal ion trapping, page PH5. (2) pKa is 'the pH at which drugs (weak acid or base) are 50% IONIZED and 50% nonionized' — an ionization split, not a 50%-eliminated mark; the pKa 'represents the strength of the weak acid or base.' This distractor merges the two adjacent pages (kinetics and pH) into one false story.",
        },
      ],
      reasoning:
        "The stem walks phenobarbital — the first drug of the page's weak-acid row — through the full ion-trapping protocol, then asks for four connected predictions: the mechanism, the two forms, the reverse lever, and the arithmetic. The page supplies each answer verbatim. (1) MECHANISM: 'Treat overdose with sodium bicarbonate to alkalinize urine' — bicarbonate raises tubular pH above the pKa and the strip 'RCOOH (lipid soluble) → RCOO– + H+ (trapped)' shifts right. (2) FORMS: the governing rule — 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed' — the neutral RCOOH is the reabsorbed form (a lipid membrane problem), the anion RCOO– is the trapped form. (3) THE REVERSE LEVER: ammonium chloride is the weak-base/severe-alkalosis tool; on a weak acid it would restore the neutral reabsorbable form and prolong the intoxication. (4) ARITHMETIC: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized' — the 50/50 split at pKa, with ~tenfold per pH unit on the ionizing side, predicting a large trapping gain at urine pH 7.5-8. The distractors fail at: 'phenobarbital is a weak base' (classification reversed — it is the PMA weak-acid set); 'the neutral form is the trapped one' (the definitional swap — trapping is a charge problem); 'bicarb is for the sodium channel blockade' (the TCA caveat pasted onto a barbiturate — the note is printed for TCAs, whose cardiac sodium-channel blockade is what bicarb fixes); and 'bicarb saturates the enzymes / pKa is 50% eliminated' (the elimination-kinetics page's saturation story plus a pKa definitional error, merging PH4 into PH5).",
    },
  },
  mnemonics: [
    {
      code: "ACID-in-ALKALI · BASE-in-ACID — weak ACIDs are trapped in ALKALIne urine; weak BASEs are trapped in ACIDic urine",
      meaning:
        "The direction rule that prevents the classic reversal. The trap is always the IONIZED form ('ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed'), and the ionizing pH is the OPPOSITE of the drug's name: a weak ACID ionizes (deprotonates to RCOO–) when the pH is ALKALINE — above its pKa; a weak BASE ionizes (protonates to RNH3+) when the pH is ACIDIC — below its pKa. The graph draws the same rule twice: the Weak acid curve rises with pH; the Weak base curve falls with pH.",
      memorizes: "Which urine pH traps which drug class",
      whenToUse: "Any 'alkalinize or acidify?' question, and any option pair that matches a drug class with a urine lever",
      clinical:
        "Weak-acid overdose (salicylates, phenobarbital, methotrexate) → sodium bicarbonate (alkaline urine traps the anion). Weak base + severe alkalosis (amphetamines, TCAs) → ammonium chloride to acidify (acidic urine traps the cation). A weak acid paired with ammonium chloride — or a weak base alkalinized for elimination — is always reversed.",
    },
    {
      code: "PMA GETS THE BICARB — Phenobarbital · Methotrexate · Aspirin (the weak-acid set, with sodium bicarbonate to alkalinize urine)",
      meaning:
        "The page's own weak-acid roster, verbatim: 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' All three are weak acids whose trapped anion RCOO– is cleared in an alkaline urine: phenobarbital (long-acting barbiturate — its neutral form is reabsorbed, so alkalinization converts a prolonged intoxication into a cleared one), methotrexate (faster renal clearance protects marrow and mucosa), aspirin/salicylates (the classic salicylate-poisoning indication). KYP-original code — the page prints no mnemonic in this section.",
      memorizes: "The weak-acid example drugs and their shared treatment",
      whenToUse: "Any question naming one of the three and asking for the urine manipulation (or its mechanism)",
      clinical:
        "Salicylate poisoning: bicarbonate targets urine pH 7.5-8 → trapped salicylate anion + buffered acidemia. Phenobarbital overdose: alkalinization shortens a very long intoxication. High-dose methotrexate: alkalinized urine (plus fluids) prevents the delayed toxicity of slow clearance.",
    },
    {
      code: "AA ACIDIFIES — Amphetamines And TCAs (the weak-base set, 'trapped in acidic environments'; ammonium chloride for severe alkalosis)",
      meaning:
        "The page's own weak-base roster, verbatim: 'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' Both are weak bases whose trapped cation RNH3+ is cleared in an acidic urine — and the severe-alkalosis trigger is the clinical reason the acidifying lever exists: alkalemia tilts weak bases toward the neutral, reabsorbable form, so the urine is re-acidified (ammonium chloride; vitamin C is the milder version). Attach the page's one caveat: in TCA toxicity the initial bicarbonate is for the sodium channel blockade — 'this treats cardiac toxicity, but does not accelerate drug elimination.' KYP-original code.",
      memorizes: "The weak-base example drugs, their trap environment, and the TCA caveat",
      whenToUse: "Any weak-base elimination question, and every TCA-overdose question that asks what the bicarbonate is for",
      clinical:
        "Severe alkalosis with a weak base on board → ammonium chloride (acidify the urine, restore the cation trap). TCA overdose: bicarb for the widened QRS and dysrhythmias — the cardiac fix, not an elimination maneuver (the level still falls slowly over hours).",
    },
    {
      code: "50/50 AT pKa — at pH = pKa the drug is 50% ionized / 50% nonionized; the pKa represents the strength",
      meaning:
        "The pKa row, compressed: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' On the Ionized species formation (%) graph, the 50% line IS the pKa crossing — the Weak acid curve rises through it as pH climbs; the Weak base curve falls through it as pH drops (the example annotation reads 'pKa: 9.2'). Strength reading: 'pKa = more acidic' (a low pKa is a stronger acid — it ionizes at a lower pH); 'pKa = more basic' (a high pKa is a stronger base). Each pH unit on the ionizing side moves the ionized fraction roughly tenfold.",
      memorizes: "The pKa definition, the graph's 50% crossing, and the strength reading",
      whenToUse: "Any question quoting a pKa, showing the ionized-fraction graph, or asking how far a urine pH shift moves the equilibrium",
      clinical:
        "Salicylates (pKa ~3) at urine pH 8: ~5 units above the pKa → almost entirely the trapped anion. A weak base with pKa 9.2 at urine pH 5: >4 units below → almost entirely the trapped cation. The further the urine pH sits on the ionizing side of the pKa, the bigger the trapping gain — the arithmetic behind every 'alkalinize to pH 7.5-8' order.",
    },
  ],
  rapidReview: {
    s30: [
      "Governing rule (verbatim): 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'",
      "Weak acids (verbatim): 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' — the strip: RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped)",
      "Weak bases (verbatim): 'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' — the strip: RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble)",
      "TCA caveat (verbatim): 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.'",
      "pKa (verbatim): 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.'",
      "Direction rule: weak ACIDs are trapped in ALKALIne urine (deprotonate to the anion); weak BASEs are trapped in ACIDic urine (protonate to the cation) — the ionized form is always the trapped form; the neutral lipid-soluble form is always the reabsorbed one",
      "Weak-acid set (PMA): Phenobarbital, Methotrexate, Aspirin/salicylates → sodium bicarbonate (alkaline urine → trapped anion → cleared quickly)",
      "Weak-base set (AA): Amphetamines And TCAs → trapped in acidic environments; ammonium chloride to acidify the urine for severe alkalosis (vitamin C is the milder version)",
      "pKa graph reading: the Weak acid curve RISES with pH; the Weak base curve FALLS with pH; the 50% gridline is the pKa crossing ('pKa: 9.2' marks the example); 'pKa = more acidic' (low pKa = stronger acid) and 'pKa = more basic' (high pKa = stronger base)",
      "Henderson-Hasselbalch arithmetic: at pH = pKa the split is 50/50; each pH unit on the ionizing side of the pKa shifts the ratio ~tenfold toward the trapped ion — the reason urine pH 7.5-8 traps salicylates (pKa ~3) almost completely",
    ],
    m3: [
      "ACID-in-ALKALI · BASE-in-ACID — weak acids trapped by alkaline urine, weak bases trapped by acidic urine",
      "PMA gets the BICARB — Phenobarbital · Methotrexate · Aspirin (the weak-acid set, sodium bicarbonate)",
      "AA ACIDIFIES — Amphetamines And TCAs (the weak-base set; ammonium chloride for severe alkalosis)",
      "50/50 at pKa — 50% ionized / 50% nonionized at pH = pKa; pKa = strength (low pKa = more acidic, high pKa = more basic)",
      "TCA caveat — bicarb treats the sodium channel blockade (cardiac), NOT drug elimination",
    ],
    m10: [
      "Weak-acid row verbatim: 'Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' with RCOOH (lipid soluble) → RCOO– + H+ (trapped)",
      "Weak-base row verbatim: 'Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' with RNH3+ (trapped) → RNH2 + H+ (lipid soluble)",
      "TCA margin note verbatim: 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.'",
      "pKa row verbatim: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' — graph: Ionized species formation (%) vs pH (4/8/12/14), Weak acid curve rising, Weak base curve falling, 'pKa: 9.2', 'pKa = more acidic', 'pKa = more basic'",
      "Mechanism spine: trapping is a CHARGE problem — the tubule is a lipid membrane, so only the neutral form (RCOOH / RNH2) is reabsorbed; alkalinize above an acid's pKa to trap the anion, acidify below a base's pKa to trap the cation; ~tenfold shift per pH unit on the ionizing side (Henderson-Hasselbalch)",
    ],
  },
  recall: [
    {
      q: "The section's governing rule, verbatim.",
      a: "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.",
    },
    {
      q: "The weak-acid row verbatim (examples, treatment, and ionization strip).",
      a: "Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine. The strip: RCOOH (lipid soluble) → RCOO – + H+ (trapped).",
    },
    {
      q: "The weak-base row verbatim (examples, trap environment, treatment, and ionization strip).",
      a: "Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine. The strip: RNH3+ (trapped) → RNH2 + H+ (lipid soluble).",
    },
    {
      q: "The TCA-toxicity margin note verbatim — and what the bicarbonate is and is not for.",
      a: "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination. The bicarbonate is the antidote for the sodium-channel blockade (QRS widening, dysrhythmias) — it is NOT an ion-trapping maneuver; urinary pH manipulation does not meaningfully accelerate TCA clearance.",
    },
    {
      q: "The pKa row verbatim, and how it is read off the Ionized species formation (%) graph.",
      a: "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base. On the graph: the 50% gridline is the pKa crossing — the Weak acid curve rises through it as pH climbs above the acid's pKa, the Weak base curve falls through it as pH drops below the base's pKa (example annotation 'pKa: 9.2'), with 'pKa = more acidic' (low pKa = stronger acid) and 'pKa = more basic' (high pKa = stronger base) on the pKa axis.",
    },
  ],
  related: [
    {
      title: "Elimination of Drugs — Zero-order vs First-order Kinetics",
      topicId: "elimination-of-drugs",
      note:
        "The two pages are the two faces of the same overdoses. The elimination page (PH4, book 230) explains the LEVEL: at high or toxic concentrations aspirin saturates its pathways ('↑ salicylate saturation → zero-order elimination') — a constant amount cleared per hour, Cp ↓ linearly, t1/2 lengthening — which is why the salicylate level climbs disproportionately and why serial levels are drawn. THIS page (PH5, book 231) explains the LEVER: the same salicylate overdose is treated with sodium bicarbonate because aspirin is a weak acid — alkalinize the urine and the trapped anion is cleared quickly, converting renal excretion into the dominant clearance pathway around the saturated metabolism. One drug, two mechanisms: saturation governs the metabolic ceiling; ion trapping governs the renal exit. Note the bicarbonate jobs differ by drug: in salicylate poisoning it accelerates elimination (ion trapping) and buffers the acidemia; in TCA poisoning (per this page's margin note) it treats the sodium-channel cardiac toxicity and does not accelerate elimination.",
    },
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The PK machinery page (PH2, book 229) defines what this page manipulates. Clearance (CL = Vd × Ke) is the volume of plasma cleared per unit time — urinary ion trapping RAISES renal clearance by preventing tubular reabsorption (the neutral form crossing back is a reabsorption that reduces net CL). The half-life equation t1/2 = 0.7 × Vd / CL shows the payoff: push CL up and t1/2 falls — the drug spends less time in the body. But note which regime the rules assume: the 4-5 half-lives to steady state and the constant-t1/2 arithmetic are first-order properties, while the overdoses that prompt ion trapping are exactly the concentrations where saturation (PH4) bends the kinetics — which is why enhanced elimination is monitored by serial levels, not by half-life arithmetic.",
    },
    {
      title: "Drug Metabolism — Phase I, Phase II, and Excretion",
      topicId: "drug-metabolism",
      note:
        "The metabolism page (PH3, book 230) is the enzymatic route this page bypasses under saturation. Phase I (CYP450) and Phase II (glucuronidation, acetylation, sulfation) convert lipophilic drugs into polar metabolites for excretion — and salicylate saturation (the arrow on PH4's page) is the saturation of those same pathways. When they are saturated at toxic concentrations, the pH lever of this page takes over: ion trapping makes the renal route the dominant exit, independent of enzyme capacity. The metabolism page's polarity logic is the same physics as this page's strip — polar/ionized species cannot cross membranes — Phase II conjugation manufactures polarity inside the hepatocyte, while urinary alkalinization manufactures it in the tubule lumen.",
    },
    {
      title: "Acid-Base Physiology — Blood Gas Algorithm and RTA",
      topicId: "acid-base-physiology",
      note:
        "The acid-base page supplies the systemic state that the urine lever rides on. Salicylate poisoning classically shows a respiratory alkalosis (direct respiratory-center stimulation) with an anion-gap metabolic acidosis — the mixed disorder the acid-base algorithm disambiguates — and the bicarbonate given treats the acidemia while, on this page's logic, simultaneously alkalinizing the urine to trap the salicylate anion. The severe-alkalosis trigger on the weak-base row is the same physiology read backward: alkalemia keeps weak bases neutral (reabsorbable), so ammonium chloride re-acidifies the urine to restore the trap. The kidney's own pH machinery (HCO3– reclamation, H+ secretion, the intercalated cells) is what sets tubular pH in the first place — the manipulations of this page are pushes against that machinery.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Henderson-Hasselbalch and acid-base chemistry)",
      connection:
        "Every strip on this page is the Henderson-Hasselbalch equation drawn as an equilibrium: pH = pKa + log([A–]/[HA]) for weak acids, pH = pKa + log([B]/[BH+]) for weak bases. At pH = pKa the log term is zero — the 50% ionized / 50% nonionized split this page defines as pKa; each pH unit away shifts the ratio tenfold, which is why urine pH 7.5-8 against a salicylate pKa of ~3 leaves almost nothing in the neutral form. The same equation runs the acid-base page's buffers (the bicarbonate system with its pKa of 6.1 near physiologic pH) and every enzyme's pH optimum — charge and membrane permeability are the shared physics: ionized species cannot cross lipid bilayers, whether the membrane is the tubular epithelium (this page), the blood-brain barrier, or a gastric epithelium.",
    },
    {
      subject: "Toxicology (enhanced elimination and poisoning management)",
      connection:
        "This page is the pharmacologic core of urinary enhancement of elimination. Salicylate poisoning: bicarbonate to target urine pH 7.5-8 — trapped anion, faster clearance, plus buffering of the anion-gap metabolic acidosis; hemodialysis is reserved for severe levels, organ dysfunction, or deterioration (the elimination page's saturation story explains why levels climb while metabolism is saturated). Phenobarbital: the long-acting barbiturate whose neutral form is reabsorbed — alkalinization is the specific antidote-class maneuver. TCA overdose: the margin note is the exam's favorite — bicarb overcomes the sodium channel blockade (QRS narrowing, dysrhythmias resolving) but does NOT accelerate elimination, so the level drifts down over hours. Amphetamine/weak-base toxicity with severe alkalosis: ammonium chloride acidifies the urine to restore the cation trap — the reverse lever. The general rule across all of them: pick the pH that ionizes the offending species; the ionized species is trapped.",
    },
    {
      subject: "Renal physiology and acid-base (urine acidification and the tubule)",
      connection:
        "The kidney sets the tubular pH this page manipulates. The proximal tubule reclaims bicarbonate and secretes H+; α-intercalated cells secrete H+ (acidifying the urine), β-intercalated cells secrete bicarbonate — and administered sodium bicarbonate or ammonium chloride (metabolized to H+ + Cl–) shifts the balance. The acid-base page's disorders ride the same machinery: metabolic acidosis drives an acidic urine (more H+ available to trap weak bases); respiratory alkalosis in salicylate poisoning initially alkalinizes the urine — which is part of why salicylate toxicity is prolonged at presentation. Distal RTA (the acid-base page's type 1, the one with stones and the failure to acidify) is the disease-state version of this page's lever failing: a tubule that cannot reach a low pH cannot trap weak bases. The lesson crosses both directions — the kidney's pH machinery is the effector, and the pharmacologist pushes against it.",
    },
    {
      subject: "Cardiology and ECG (sodium channel blockade and QRS widening)",
      connection:
        "The TCA margin note is a cardiology fact wearing a pharmacology label. TCAs block fast sodium channels (like class I antiarrhythmics and local anesthetics — the same mechanism as cocaine and quinidine): the QRS widens, terminal R-wave patterns appear in aVR, and hypotension with ventricular dysrhythmias follows. Sodium bicarbonate is the antidote — it overcomes the sodium-channel blockade (sodium load plus alkalemia shifting the drug off the channel), narrowing the QRS within minutes. The page's second clause is the cross-link to keep straight: 'this treats cardiac toxicity, but does not accelerate drug elimination' — the ECG improves on a timescale of minutes while the serum level falls over many hours, because urinary pH manipulation does not clear a TCA. The exam uses this gap (fast ECG response, slow level decline) as the fingerprint that the bicarbonate was a channel maneuver, not an ion-trapping one.",
    },
  ],
};
