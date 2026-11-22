import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 3 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 96–97 / book 74–75 (pyruvate
// dehydrogenase complex, its 5 cofactors, arsenic, regulation; PDH
// deficiency; pyruvate metabolism hub figure; the TCA cycle circle)

export const tcaCyclePdh: KypUsMLENote = {
  id: "tca-cycle-pdh",
  title: "TCA Cycle & Pyruvate Dehydrogenase",
  subtitle:
    "The five-cofactor gate from pyruvate to acetyl-CoA (thiamine, lipoic acid, CoA, FAD, NAD+ — 'the lovely coenzymes for nerds'), the four-exit pyruvate hub with its vitamin handles, and the eight-step Krebs circle that pays out 3 NADH, 1 FADH2, 1 GTP, and 2 CO2 per acetyl-CoA.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — TCA cycle & pyruvate dehydrogenase",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 74–75 (pyruvate dehydrogenase complex and cofactors; arsenic; pyruvate metabolism; TCA cycle; PDH complex deficiency)",
  tags: [
    "pyruvate dehydrogenase",
    "PDH complex",
    "thiamine pyrophosphate",
    "lipoic acid",
    "coenzyme A",
    "FAD",
    "NAD+",
    "arsenic",
    "PDH deficiency",
    "lactic acidosis",
    "alanine",
    "pyruvate carboxylase",
    "LDH",
    "ALT",
    "Cahill cycle",
    "Cori cycle",
    "TCA cycle",
    "Krebs cycle",
    "citrate synthase",
    "isocitrate dehydrogenase",
    "alpha-ketoglutarate dehydrogenase",
    "succinyl-CoA synthetase",
    "succinate dehydrogenase",
    "GTP",
    "irreversible enzymes",
  ],
  core: {
    what: "The pyruvate dehydrogenase complex is a mitochondrial enzyme complex linking glycolysis and the TCA cycle, differentially regulated in fed (active) and fasting (inactive) states. Reaction: pyruvate + NAD+ + CoA → acetyl-CoA + CO2 + NADH. It contains 3 enzymes requiring 5 cofactors: thiamine pyrophosphate (B1), lipoic acid, CoA (B5, pantothenic acid), FAD (B2, riboflavin), NAD+ (B3, niacin) — 'the lovely coenzymes for nerds.' Activated by ↑NAD+/NADH ratio, ↑ADP, ↑Ca2+. Arsenic inhibits lipoic acid. PDH complex deficiency (X-linked) causes a pyruvate buildup shunted to lactate (LDH) and alanine (ALT): neurologic defects, lactic acidosis, ↑serum alanine starting in infancy; treated with ↑ketogenic nutrients (high fat, or ↑lysine and leucine), B1, and lipoic acid. The pyruvate hub offers four fates with their cofactors: ALT (B6) → alanine (carries amino groups to liver from muscle — Cahill cycle); pyruvate carboxylase (B7) → oxaloacetate (replenishes TCA or feeds gluconeogenesis); PDH (B1, B2, B3, B5, lipoic acid) → acetyl-CoA (transition to TCA); LDH (B3) → lactate (end of anaerobic glycolysis — major pathway in RBCs, WBCs, kidney medulla, lens, cornea, and Sertoli cells) — lactate returns via the Cori cycle. The TCA cycle (Krebs cycle, mitochondria): pyruvate → acetyl-CoA produces 1 NADH, 1 CO2; the cycle produces 3 NADH, 1 FADH2, 2 CO2, 1 GTP per acetyl-CoA = 10 ATP/acetyl-CoA (2× everything per glucose). The irreversible enzymes are citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase; the α-KG dehydrogenase complex requires the same cofactors as PDH (B1, B2, B3, B5, lipoic acid). Citrate is Krebs' starting substrate for making oxaloacetate.",
    why: "This is the aerobic hinge of metabolism: every carbohydrate, fat, and (mostly) protein carbon passes through pyruvate → acetyl-CoA → the TCA circle. The five-cofactor list is the most-tested vitamin integration in biochemistry, arsenic and PDH deficiency are the two clinical stows, and the ATP accounting (10 per acetyl-CoA) is arithmetic the exam expects without warning.",
    keyIdea: "Learn PDH as a five-part machine the B vitamins built: TPP (B1) decarboxylates pyruvate, lipoic acid swings the 2-carbon fragment (arsenic's target), CoA (B5) receives it as acetyl-CoA, FAD (B2) relays electrons to NAD+ (B3) — and the SAME five cofactors run α-KG dehydrogenase in the TCA cycle, which is why one nutrient deficiency (thiamine) breaks both complexes at once. Then the hub logic: pyruvate has four exits, each with a vitamin handle (ALT-B6 → alanine/Cahill; pyruvate carboxylase-B7 → OAA; PDH → acetyl-CoA; LDH-B3 → lactate/Cori) — and PDH deficiency is the hub jamming toward the two shunts (lactate + alanine). The TCA circle then pays 3 NADH + 1 FADH2 + 1 GTP + 2 CO2 per acetyl-CoA (10 ATP), with three irreversible enzymes (citrate synthase, isocitrate DH, α-KG DH) as the regulated points.",
  },
  mechanisms: [
    {
      id: "pdh-five-cofactor-relay",
      title: "PDH — the five-cofactor relay from pyruvate to acetyl-CoA",
      context: "Fed state, aerobic tissues",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Pyruvate enters the mitochondrion from glycolysis",
            sublabel: "Input — glycolysis ends at pyruvate; the TCA cycle only accepts acetyl-CoA.",
            variant: "input",
          },
          {
            id: "s1",
            label: "TPP (B1) decarboxylates pyruvate — CO2 released, a 2-carbon fragment remains on the enzyme",
            sublabel: "Process — thiamine pyrophosphate, the same cofactor as transketolase and α-KG DH (Be APT).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Lipoic acid swings the 2-carbon fragment to CoA — the arm arsenic poisons",
            sublabel: "Process — lipoic acid is oxidized in the transfer and must be re-reduced.",
            variant: "process",
          },
          {
            id: "s3",
            label: "CoA (B5) accepts the fragment → acetyl-CoA; FAD (B2) re-reduces lipoic acid; NAD+ (B3) re-oxidizes FAD → NADH",
            sublabel: "Process — the electron relay that makes the complex's 1 NADH.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Acetyl-CoA + CO2 + NADH — pyruvate + NAD+ + CoA → acetyl-CoA + CO2 + NADH",
            sublabel: "Output — the 2-carbon ticket into the Krebs circle.",
            variant: "output",
          },
          {
            id: "x1",
            label: "ARSENIC inhibits lipoic acid — the relay arm locks up",
            sublabel: "Inhibitor — vampire imagery: pigmentary skin changes/skin cancer, vomiting and diarrhea, QT prolongation, garlic breath.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Regulation: activated by ↑NAD+/NADH ratio, ↑ADP, ↑Ca2+; fed-active/fasting-inactive (phosphorylation switch)",
            sublabel: "Clinical — why a high-carbohydrate load after thiamine depletion (the B1 note) crashes the gate.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "TPP (B1)" },
          { from: "s1", to: "s2", label: "2-C fragment" },
          { from: "s2", to: "s3", label: "CoA (B5) + FAD (B2) + NAD+ (B3)" },
          { from: "s3", to: "o1" },
          { from: "x1", to: "s2", type: "inhibit", label: "arsenic ⊟ lipoic acid" },
          { from: "x2", to: "trigger", type: "inhibit", label: "kinase in fasting" },
        ],
        caption:
          "The complex is an assembly line the B vitamins staff: B1's TPP removes pyruvate's carboxyl carbon, lipoic acid physically swings the remaining 2-carbon unit across to CoA (B5), and the FAD (B2) → NAD+ (B3) relay recycles the arm while generating the complex's single NADH. Arsenic jams the swinging arm (lipoic acid) — the vampire poisoning. The same five cofactors equip α-ketoglutarate dehydrogenase inside the TCA cycle, so thiamine deficiency (alcohol overuse) or arsenic poisons both gates at once: pyruvate cannot enter, α-KG cannot advance, and ATP production collapses at its two busiest junctions.",
      },
    },
    {
      id: "pyruvate-hub-four-exits",
      title: "The pyruvate hub — four exits, four vitamin handles, two cycles",
      context: "Aerobic vs anaerobic vs fasting states",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Pyruvate sits at the crossroads of glycolysis and everything after it",
            sublabel: "Input — cytosol (LDH, ALT) vs mitochondria (PDH, pyruvate carboxylase).",
            variant: "input",
          },
          {
            id: "s1",
            label: "PDH (B1, B2, B3, B5, lipoic acid): pyruvate → acetyl-CoA — the transition to the TCA cycle",
            sublabel: "Process — irreversible; fed-active; the aerobic route.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Pyruvate carboxylase (B7): pyruvate → oxaloacetate — replenishes the TCA cycle or feeds gluconeogenesis",
            sublabel: "Process — the anaplerotic + gluconeogenic route (mitochondrial, biotin-dependent).",
            variant: "process",
          },
          {
            id: "s3",
            label: "LDH (B3): pyruvate → lactate — the end of anaerobic glycolysis",
            sublabel: "Process — major pathway in RBCs, WBCs, kidney medulla, lens, cornea, and Sertoli cells; lactate returns to the liver via the CORI cycle.",
            variant: "process",
          },
          {
            id: "s4",
            label: "ALT (B6): pyruvate → alanine — carries amino groups to the liver from muscle",
            sublabel: "Process — the CAHILL cycle: muscle exports nitrogen safely as alanine.",
            variant: "process",
          },
          {
            id: "o1",
            label: "PDH deficiency (X-linked): the hub jams and traffic shunts to lactate and alanine",
            sublabel: "Output — neurologic defects, lactic acidosis, ↑ serum alanine from infancy; treat with ketogenic nutrients, B1, lipoic acid.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "PDH" },
          { from: "trigger", to: "s2", label: "PC (B7)" },
          { from: "trigger", to: "s3", label: "LDH (B3)" },
          { from: "trigger", to: "s4", label: "ALT (B6)" },
          { from: "s1", to: "o1", type: "inhibit", label: "deficiency ⊟" },
        ],
        caption:
          "Pyruvate's four exits each carry a vitamin handle the exam quotes: PDH needs five cofactors (B1, B2, B3, B5, lipoic acid) to reach the TCA cycle; pyruvate carboxylase spends biotin (B7) to build oxaloacetate for the cycle or for gluconeogenesis; LDH uses B3-derived NADH to make lactate — the anaerobic end in RBCs, WBCs, kidney medulla, lens, cornea, and Sertoli cells, with the lactate returning to the liver as Cori-cycle fuel; and ALT (B6) turns pyruvate into alanine, the muscle's safe nitrogen courier to the liver (Cahill cycle). When PDH fails (X-linked deficiency), the two shunt exits take everything: lactate and alanine rise together, which is why the deficiency presents as lactic acidosis with ↑alanine and neurologic defects from infancy.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pdh-cofactor-panel",
      title: "The PDH complex — five cofactors, one relay",
      caption:
        "The source's cofactor panel adapted: the reaction bar (pyruvate + NAD+ + CoA → acetyl-CoA + CO2 + NADH), the five numbered cofactor cards — 1 thiamine pyrophosphate (B1), 2 lipoic acid (arsenic's target), 3 CoA (B5, pantothenic acid), 4 FAD (B2, riboflavin), 5 NAD+ (B3, niacin) — 'the lovely coenzymes for nerds'; the activation panel (↑NAD+/NADH ratio, ↑ADP, ↑Ca2+; fed-active/fasting-inactive), the arsenic-vampire panel (pigmentary skin changes and skin cancer, vomiting and diarrhea, QT prolongation, garlic breath), and the X-linked deficiency strip with its ketogenic-nutrient treatment.",
      notice:
        "The five cofactors ARE the exam question — list them by vitamin and function: B1-TPP decarboxylates, lipoic acid swings the 2-carbon arm (arsenic), B5-CoA receives it, B2-FAD relays electrons, B3-NAD+ collects them as NADH. The α-KG dehydrogenase complex uses the same five — one list, two enzymes. Arsenic's four-finding vampire image (skin, GI, QT, breath) is the source's own mnemonic.",
    },
    {
      kind: "visual",
      visualId: "pyruvate-hub",
      title: "The pyruvate hub — four fates and two cycles",
      caption:
        "The registry's pyruvate-hub visual (built for the glycolysis pilot note, reused here where the source's pyruvate-metabolism figure lives): pyruvate at the center with its four exits — PDH to acetyl-CoA (mitochondria), pyruvate carboxylase to oxaloacetate, LDH to lactate (Cori cycle return), ALT to alanine (Cahill cycle, amino groups from muscle to liver) — with the cofactor handles (B1/B2/B3/B5/lipoic acid; B7; B3; B6) and the cytosol/mitochondria split the source figure draws.",
      notice:
        "Read the hub as four doors with vitamin doormen: the aerobic door (PDH, five cofactors), the anaplerotic-gluconeogenic door (pyruvate carboxylase, biotin), the anaerobic door (LDH, NADH — the only door open in RBCs and the other anaerobic tissues), and the nitrogen-courier door (ALT, PLP — alanine to the liver). The two named cycles are liver-muscle economics: Cori (lactate ↔ glucose) and Cahill (alanine ↔ glucose + urea).",
    },
    {
      kind: "visual",
      visualId: "tca-cycle-map",
      title: "The TCA circle — eight steps, three irreversible gates",
      caption:
        "The source's TCA figure redrawn: the PDH entry (pyruvate 3C → acetyl-CoA 2C, releasing CO2 + NADH), citrate synthase joining acetyl-CoA + oxaloacetate → citrate (6C, Krebs' starting substrate), then the clockwise circle — cis-aconitate, isocitrate (6C) with irreversible isocitrate dehydrogenase (CO2 + NADH), α-ketoglutarate (5C) with the irreversible α-KG dehydrogenase (CO2 + NADH; the same 5 cofactors as PDH), succinyl-CoA (4C) making GTP, succinate (4C) making FADH2, fumarate (4C), malate (4C) making NADH, back to oxaloacetate (4C) — with the regulation strip (ADP ⊕ isocitrate DH; ATP ⊝, NADH ⊝) and the ATP ledger (3 NADH + 1 FADH2 + 2 CO2 + 1 GTP = 10 ATP per acetyl-CoA, 2× per glucose).",
      notice:
        "Three starred enzymes are the irreversible, regulated gates — citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase; everything else runs near-equilibrium. Track the carbons: acetyl-CoA's 2 carbons do NOT leave as this turn's 2 CO2 (they leave in later turns) — a subtle favorite question. Count the yield per acetyl-CoA: 3 NADH (isocitrate DH, α-KG DH, malate DH) + 1 FADH2 (succinate DH) + 1 GTP (succinyl-CoA synthetase) + 2 CO2 = 10 ATP; pyruvate → acetyl-CoA adds 1 NADH + 1 CO2 more.",
    },
    {
      kind: "text",
      title: "Why the same cofactors run two dehydrogenase complexes",
      body: [
        "The PDH complex and the α-ketoglutarate dehydrogenase complex are mechanistic siblings: both decarboxylate an α-ketoacid, both swing the remaining fragment on lipoic acid to CoA, and both relay electrons through FAD to NAD+ — so both need the identical five cofactors (vitamins B1, B2, B3, B5, and lipoic acid). This shared chemistry is the deepest integration in the metabolism chapter: a single thiamine deficiency (the chronic alcohol overuse scenario from the B1 note) simultaneously starves pyruvate's entry gate and the TCA cycle's α-KG step, which is why the aerobic tissues (brain, heart) fail first and why giving dextrose without thiamine accelerates the crash.",
        "Arsenic exploits the same shared arm: by binding lipoic acid it poisons both complexes at once. The source's image — a vampire with pigmentary skin changes and skin cancer, vomiting and having diarrhea, running away from a cutie (QT prolongation) with garlic breath — encodes the four findings the exam tests. And the deficiency side is symmetrical: inherited PDH complex deficiency (X-linked) presents in infancy with neurologic defects, lactic acidosis, and ↑serum alanine — the hub shunting to its two emergency exits — and is treated by feeding the ketone route around the jam: ↑ketogenic nutrients (high fat, or ↑ lysine and leucine — the two purely ketogenic amino acids), plus B1 and lipoic acid.",
      ],
    },
    {
      kind: "table",
      title: "The four pyruvate fates — enzyme, cofactor, purpose",
      intro: "The source's pyruvate-metabolism list, verbatim pairings (book p. 75).",
      columns: ["Exit", "Enzyme (cofactor)", "Function"],
      rows: [
        ["→ Alanine", "Alanine aminotransferase (B6)", "Alanine carries amino groups to the liver from muscle (Cahill cycle)"],
        ["→ Oxaloacetate", "Pyruvate carboxylase (B7)", "Oxaloacetate can replenish TCA cycle or be used in gluconeogenesis"],
        ["→ Acetyl-CoA", "Pyruvate dehydrogenase (B1, B2, B3, B5, lipoic acid)", "Transition from glycolysis to the TCA cycle"],
        ["→ Lactate", "Lactic acid dehydrogenase (B3)", "End of anaerobic glycolysis (major pathway in RBCs, WBCs, kidney medulla, lens, cornea, and Sertoli cells in testes); Cori cycle return"],
      ],
      caption:
        "Each exit pairs a vitamin with a destination — the hub is the cleanest vitamin-pathway integration in the book. Two exits are cytosolic (LDH, ALT) and two mitochondrial (PDH, pyruvate carboxylase), matching the source figure's compartment split.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks these pages",
      body: "Six recurring shapes: (1) the cofactor stem — which vitamin serves which PDH role, or 'the α-KG dehydrogenase complex requires which cofactors?' (the same five); (2) the arsenic stem — pigmentary changes/GI/QT/garlic breath → lipoic acid inhibition; (3) the deficiency stem — infant boy with X-linked lactic acidosis + ↑alanine + neurologic defects → PDH deficiency (treat: ketogenic nutrients, B1, lipoic acid); (4) the accounting stem — ATP per acetyl-CoA (10) or per glucose from the TCA (20) plus the PDH step; (5) the irreversible-enzyme stem — which TCA enzymes are irreversible (citrate synthase, isocitrate DH, α-KG DH); (6) the tissue stem — which tissues run LDH as the major pathway (RBCs, WBCs, kidney medulla, lens, cornea, Sertoli cells).",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "From infancy to arsenic — the clinical range of the gate",
      body: [
        "The inherited end: PDH complex deficiency is X-linked and announces itself in infancy — pyruvate piles up behind the jammed gate and shunts to lactate (LDH) and alanine (ALT), so the finding set is neurologic defects (the brain's aerobic demand unmet), lactic acidosis, and ↑serum alanine. The treatment logic is pure pathway routing: feed ketogenic nutrients (high fat, or ↑ lysine and leucine — amino acids whose carbons become acetyl-CoA or ketones WITHOUT passing pyruvate), plus B1 and lipoic acid to maximize whatever complex remains.",
        "The toxic end: arsenic binds the lipoic acid swinging arm and stops both PDH and α-KG dehydrogenase — clinically the vampire quartet (pigmentary skin changes and skin cancer, vomiting and diarrhea, QT prolongation, garlic breath). Between the two sit the physiology questions: activation by ↑NAD+/NADH ratio, ↑ADP, and ↑Ca2+ (the last one ties PDH to muscle contraction's calcium transients — energy demand switches the gate open), and the fed/fasting phosphorylation switch that keeps the gate active when insulin says 'store and burn' and idle when glucagon says 'spare the glucose.'",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question asks which five cofactors the pyruvate dehydrogenase complex requires (or which vitamin is missing from a list).",
        discriminator: "The five-cofactor list",
        concept: "PDH cofactors",
        answer: "Thiamine pyrophosphate (B1), lipoic acid, CoA (B5, pantothenic acid), FAD (B2, riboflavin), NAD+ (B3, niacin) — 'the lovely coenzymes for nerds'; the α-ketoglutarate dehydrogenase complex requires the same cofactors.",
      },
      {
        stem: "A patient with chronic arsenic exposure has pigmentary skin changes, vomiting, diarrhea, QT prolongation, and garlic breath.",
        discriminator: "The vampire quartet → lipoic acid",
        concept: "Arsenic inhibits lipoic acid",
        answer: "Arsenic inhibits lipoic acid — jamming the PDH and α-KG dehydrogenase complexes' swinging arm; imagine a vampire (pigmentary skin changes, skin cancer), vomiting and having diarrhea, running away from a cutie (QT prolongation) with garlic breath.",
      },
      {
        stem: "An infant boy (X-linked) has developmental delay, seizures, lactic acidosis, and elevated serum alanine since birth; ketones are low after feeding.",
        discriminator: "Pyruvate shunting to lactate + alanine",
        concept: "PDH complex deficiency",
        answer: "Buildup of pyruvate shunted to lactate (via LDH) and alanine (via ALT): neurologic defects, lactic acidosis, ↑ serum alanine starting in infancy; treat with ↑ ketogenic nutrients (high fat or ↑ lysine and leucine), B1 and lipoic acid.",
      },
      {
        stem: "An accounting question asks the yield of the TCA cycle per acetyl-CoA, or per glucose.",
        discriminator: "3 NADH + 1 FADH2 + 1 GTP + 2 CO2",
        concept: "TCA cycle energetics",
        answer: "Pyruvate → acetyl-CoA produces 1 NADH, 1 CO2. The TCA cycle produces 3 NADH, 1 FADH2, 2 CO2, 1 GTP per acetyl-CoA = 10 ATP/acetyl-CoA (2× everything per glucose); reactions occur in the mitochondria.",
      },
      {
        stem: "A question asks which TCA cycle enzymes are irreversible, or which step makes GTP or FADH2.",
        discriminator: "The three starred gates + the two substrate-level outputs",
        concept: "TCA cycle enzymes",
        answer: "Irreversible: citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase. Succinyl-CoA synthetase makes GTP; succinate dehydrogenase (the TCA cycle's FAD enzyme, also complex II of the electron transport chain) makes FADH2.",
      },
      {
        stem: "A physiology question asks which tissues rely on lactate production as the major pathway, or which cycle returns muscle lactate/alanine to the liver.",
        discriminator: "The anaerobic tissue list + the two cycles",
        concept: "LDH route and the Cori/Cahill cycles",
        answer: "LDH (B3) ends anaerobic glycolysis — major pathway in RBCs, WBCs, kidney medulla, lens, cornea, and Sertoli cells in testes; lactate returns to the liver via the Cori cycle, and alanine (ALT, B6) carries amino groups from muscle to liver via the Cahill cycle.",
      },
    ],
    traps: [
      {
        a: "PDH complex",
        b: "α-Ketoglutarate dehydrogenase complex",
        whyConfused: "Same five cofactors, similar chemistry.",
        keyDifference: "PDH converts pyruvate → acetyl-CoA (entry to TCA); α-KG DH converts α-ketoglutarate → succinyl-CoA (mid-TCA). Both need B1, B2, B3, B5, lipoic acid — the shared list is the point.",
        clue: "Substrate names the complex; the cofactor list names neither uniquely.",
      },
      {
        a: "PDH deficiency (lactic acidosis + ↑alanine)",
        b: "Pyruvate carboxylase deficiency",
        whyConfused: "Both are pyruvate-hub enzymopathies with acidosis.",
        keyDifference: "PDH deficiency: pyruvate shunts to lactate + alanine (X-linked, neurologic defects). Pyruvate carboxylase deficiency: OAA falls → TCA stalls AND gluconeogenesis fails → lactic acidosis with hypoglycemia (biotin-dependent).",
        clue: "↑Alanine points at the PDH jam; hypoglycemia points at the carboxylase.",
      },
      {
        a: "TCA yield per acetyl-CoA",
        b: "Yield per glucose",
        whyConfused: "One glucose makes two acetyl-CoA.",
        keyDifference: "Per acetyl-CoA: 3 NADH, 1 FADH2, 2 CO2, 1 GTP = 10 ATP. Per glucose: 2× everything = 20 ATP from the cycle, PLUS 2 NADH from the two PDH steps (and the glycolysis yield upstream).",
        clue: "Count acetyl-CoA first — everything doubles per glucose.",
      },
      {
        a: "Cori cycle",
        b: "Cahill cycle",
        whyConfused: "Both are muscle → liver shuttles.",
        keyDifference: "Cori: lactate (from muscle glycolysis/RBCs) → liver → glucose. Cahill: alanine (from muscle, via ALT) → liver → glucose + urea (it carries NITROGEN as well as carbon).",
        clue: "Lactate = carbon only (Cori); alanine = carbon + nitrogen (Cahill).",
      },
      {
        a: "Arsenic (lipoic acid)",
        b: "Thiamine deficiency",
        whyConfused: "Both stall PDH and α-KG DH.",
        keyDifference: "Arsenic binds lipoic acid (toxic exposure, vampire signs); thiamine deficiency starves TPP (alcohol overuse, Wernicke); both respond to B1 only in the deficiency case.",
        clue: "Exposure history and the company the acidosis keeps.",
      },
    ],
    pivots: [
      {
        lookAlike: "An 'infant with lactic acidosis' stem offering PDH deficiency, pyruvate carboxylase deficiency, and mitochondrial disorders",
        differentiator: "The alanine level and the glucose",
        correctPath: "↑Alanine + normal glucose + X-linked boys → PDH deficiency; hypoglycemia + lactic acidosis (with OAA shortage) → pyruvate carboxylase or biotinidase; myopathy + ragged-red fibers → mitochondrial (MELAS) — note MELAS's own stroke-like episodes.",
      },
      {
        lookAlike: "A 'pyruvate builds up' stem asking which shunt products rise",
        differentiator: "The two emergency exits",
        correctPath: "Pyruvate → lactate (LDH, anion-gap acidosis) and pyruvate → alanine (ALT, ↑serum alanine) — the paired rise is the PDH-deficiency signature; oxaloacetate and acetyl-CoA fall on the far side of the jam.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-month-old boy is brought in for developmental delay and recurrent episodes of rapid breathing. He has hypotonia and microcephaly, and has had two seizures. Laboratories show a high anion gap metabolic acidosis with lactate of 9 mmol/L, and serum alanine is elevated; glucose is normal. Episodes worsen after carbohydrate-rich meals. His maternal uncle died in infancy of “severe metabolic acidosis.” Brain MRI shows symmetric lesions in the basal ganglia. Cerebrospinal fluid lactate is elevated, and the lactate-to-pyruvate ratio is low-normal.",
      question: "Which of the following is the most likely diagnosis?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Pyruvate dehydrogenase complex deficiency — X-linked; pyruvate builds up and is shunted to lactate (LDH) and alanine (ALT)",
          why: "Correct. Every clue assembles at the jammed gate: male infant (X-linked), neurologic defects (hypotonia, seizures, basal ganglia lesions — the brain's aerobic demand), lactic acidosis + ↑serum alanine (the two shunts), carbohydrate-triggered worsening (more pyruvate delivered to a blocked gate), and a low-normal lactate:pyruvate ratio (pyruvate rises with lactate — a mitochondrial redox disorder would raise the ratio).",
        },
        {
          label: "B",
          text: "Pyruvate carboxylase deficiency",
          why: "Carboxylase failure depletes oxaloacetate — the TCA cycle stalls AND gluconeogenesis fails, so hypoglycemia accompanies the lactic acidosis (and the lactate:pyruvate ratio is typically high). His normal glucose and prominent alanine shunting favor the PDH lesion.",
        },
        {
          label: "C",
          text: "MELAS (mitochondrial encephalomyopathy with lactic acidosis and stroke-like episodes)",
          why: "MELAS raises CSF and serum lactate with neurologic decline, but it is maternally inherited (not X-linked uncle-to-nephew), presents later with stroke-like episodes, and drives a HIGH lactate:pyruvate ratio from impaired oxidative phosphorylation — not the alanine-shunting signature.",
        },
        {
          label: "D",
          text: "Biotinidase deficiency",
          why: "Multiple carboxylase failure (including pyruvate carboxylase) gives lactic acidosis, but with hypoglycemia, alopecia, dermatitis, and a high lactate:pyruvate ratio; it responds to biotin — a different hub enzyme entirely.",
        },
        {
          label: "E",
          text: "Type I glycogen storage disease (von Gierke)",
          why: "Von Gierke causes severe FASTING hypoglycemia with lactic acidosis (glucose-6-phosphatase block) — hepatomegaly and doll-like facies dominate, and alanine rises only as a gluconeogenic precursor, not as the shunting signature with carbohydrate-triggered episodes.",
        },
      ],
      reasoning:
        "The stem is the PDH hub seen from its jam: pyruvate cannot cross to acetyl-CoA, so LDH makes lactate (anion-gap acidosis) and ALT makes alanine (↑serum alanine) — while the brain, the most aerobic tissue, hypertonias and seizes through its basal ganglia. The lactate:pyruvate ratio separates the two great infant-acidosis families: LOW-NORMAL here (both rise together) means a pyruvate-metabolism enzyme defect; HIGH would mean mitochondrial redox failure. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: X-linked infant + acidosis + ↑alanine + carbohydrate-worsened → PDH gate blocked → lactate/alanine shunting with neurologic deficits → PDH complex deficiency → ketogenic nutrients (high fat, ↑ lysine and leucine), B1 and lipoic acid — and thiamine-before-dextrose whenever glucose is given.",
    },
  },
  mnemonics: [
    {
      code: "“The lovely coenzymes for nerds — B1, lipoic acid, B5, B2, B3”",
      meaning: "PDH's five cofactors: thiamine pyrophosphate (B1), lipoic acid, CoA (B5 pantothenic acid), FAD (B2 riboflavin), NAD+ (B3 niacin); the same list equips α-ketoglutarate dehydrogenase.",
      memorizes: "The PDH/α-KG DH cofactor quintet",
      whenToUse: "Any cofactor or deficiency question touching either complex.",
      clinical: "Thiamine deficiency or arsenic takes out both complexes at once.",
    },
    {
      code: "“Arsenic makes a vampire: pigment, puke, prolonged QT, and putrid breath”",
      meaning: "Arsenic inhibits lipoic acid — pigmentary skin changes/skin cancer, vomiting and diarrhea, QT prolongation, garlic breath.",
      memorizes: "Arsenic poisoning findings",
      whenToUse: "Any arsenic or lipoic-acid stem.",
      clinical: "Both lipoic-acid complexes (PDH, α-KG DH) fail — think of it as acute, toxic PDH deficiency.",
    },
    {
      code: "“Krebs pays in 3s and 1s: 3 NADH, 1 FADH2, 1 GTP, 2 CO2 — 10 ATP a ticket”",
      meaning: "Per acetyl-CoA the TCA cycle yields 3 NADH, 1 FADH2, 2 CO2, and 1 GTP = 10 ATP; per glucose, 2× everything.",
      memorizes: "TCA cycle ATP accounting",
      whenToUse: "Any yield-per-acetyl-CoA or per-glucose arithmetic question.",
      clinical: "Add the PDH step (1 NADH) when the question starts at pyruvate.",
    },
  ],
  rapidReview: {
    s30: [
      "PDH: pyruvate + NAD+ + CoA → acetyl-CoA + CO2 + NADH; mitochondrial; links glycolysis to TCA; fed-active/fasting-inactive.",
      "PDH 5 cofactors: thiamine pyrophosphate (B1), lipoic acid, CoA (B5), FAD (B2), NAD+ (B3) — 'the lovely coenzymes for nerds.'",
      "PDH activated by ↑NAD+/NADH ratio, ↑ADP, ↑Ca2+.",
      "Arsenic inhibits lipoic acid: pigmentary skin changes/skin cancer, vomiting/diarrhea, QT prolongation, garlic breath.",
      "PDH complex deficiency: X-linked — neurologic defects, lactic acidosis, ↑serum alanine from infancy; treat with ketogenic nutrients (high fat, ↑ lysine/leucine), B1, lipoic acid.",
      "Pyruvate hub: ALT (B6) → alanine (Cahill); pyruvate carboxylase (B7) → oxaloacetate; PDH → acetyl-CoA; LDH (B3) → lactate (Cori).",
      "Anaerobic LDH majors: RBCs, WBCs, kidney medulla, lens, cornea, Sertoli cells.",
      "TCA per acetyl-CoA: 3 NADH, 1 FADH2, 2 CO2, 1 GTP = 10 ATP (2× per glucose); mitochondria.",
      "TCA irreversible enzymes: citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase.",
      "α-KG DH uses the same 5 cofactors as PDH; citrate is Krebs' starting substrate for making oxaloacetate.",
    ],
    m3: [
      "Pyruvate → acetyl-CoA itself yields 1 NADH + 1 CO2 — count it when the question starts at pyruvate.",
      "Succinate dehydrogenase is both the TCA FADH2 step and complex II of the electron transport chain.",
      "Succinyl-CoA synthetase is the cycle's substrate-level phosphorylation (GTP).",
      "Pyruvate carboxylase is biotin-dependent and mitochondrial — the hub's anaplerotic + gluconeogenic arm.",
      "Acetyl-CoA's two carbons exit as CO2 in LATER turns of the cycle, not the same turn — the radiolabel classic.",
      "Ca2+ activation ties PDH to contracting muscle — energy demand opens the gate.",
    ],
    m10: [
      "The lactate:pyruvate ratio sorts infant lactic acidoses: low-normal = pyruvate-metabolism enzymopathy (PDH); high = mitochondrial redox failure.",
      "Lysine and leucine are the purely ketogenic amino acids — the rationale for the deficiency diet's ↑ leucine/lysine.",
      "Arsenic and thiamine deficiency produce the same dual-complex stall by different mechanisms — cofactor starvation vs arm blockade.",
      "Basal ganglia lesions in PDH deficiency mirror those of thiamine deficiency (Wernicke's mammillary/thalamic preference differs).",
      "The Cori cycle costs the liver 4 ATP per glucose recycled — the RBC's anaerobic privilege billed to the hepatocyte.",
      "Cahill-cycle alanine carries BOTH carbon and nitrogen — muscle proteolysis in fasting feeds both gluconeogenesis and urea-cycle load.",
    ],
  },
  recall: [
    {
      q: "Write the PDH reaction and list its five cofactors with their vitamins.",
      a: "Pyruvate + NAD+ + CoA → acetyl-CoA + CO2 + NADH (mitochondrial). Cofactors: thiamine pyrophosphate (B1), lipoic acid, coenzyme A (B5, pantothenic acid), FAD (B2, riboflavin), NAD+ (B3, niacin).",
    },
    {
      q: "What activates PDH, and how is it differentially regulated?",
      a: "Activated by ↑NAD+/NADH ratio, ↑ADP, and ↑Ca2+. Differentially regulated in fed (active) / fasting (inactive) states — phosphorylation by its kinase inactivates it in fasting; insulin-fed signaling keeps it active.",
    },
    {
      q: "Give arsenic's mechanism and its four clinical findings.",
      a: "Arsenic inhibits lipoic acid — jamming PDH and α-KG DH. Findings: pigmentary skin changes and skin cancer, vomiting and diarrhea, QT prolongation, garlic breath (the vampire image).",
    },
    {
      q: "Describe PDH complex deficiency: inheritance, findings, treatment.",
      a: "X-linked. Pyruvate buildup shunted to lactate (via LDH) and alanine (via ALT): neurologic defects, lactic acidosis, ↑serum alanine starting in infancy. Treatment: ↑intake of ketogenic nutrients (eg, high fat content or ↑ lysine and leucine), B1 and lipoic acid.",
    },
    {
      q: "List pyruvate's four metabolic fates with enzyme, cofactor, and function.",
      a: "ALT (B6) → alanine, carrying amino groups to the liver from muscle (Cahill cycle). Pyruvate carboxylase (B7) → oxaloacetate, replenishing the TCA cycle or feeding gluconeogenesis. Pyruvate dehydrogenase (B1, B2, B3, B5, lipoic acid) → acetyl-CoA, the transition from glycolysis to the TCA cycle. Lactic acid dehydrogenase (B3) → lactate, the end of anaerobic glycolysis (major in RBCs, WBCs, kidney medulla, lens, cornea, Sertoli cells).",
    },
    {
      q: "State the TCA cycle's yield per acetyl-CoA and name its three irreversible enzymes.",
      a: "3 NADH, 1 FADH2, 2 CO2, and 1 GTP per acetyl-CoA = 10 ATP/acetyl-CoA (2× everything per glucose); pyruvate → acetyl-CoA adds 1 NADH, 1 CO2. Irreversible enzymes: citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase.",
    },
    {
      q: "Which TCA step makes GTP, and which makes FADH2?",
      a: "Succinyl-CoA synthetase makes GTP (substrate-level phosphorylation); succinate dehydrogenase makes FADH2 (the cycle's FAD enzyme — also complex II of the electron transport chain).",
    },
  ],
  related: [
    {
      title: "Metabolism Overview & Compartmentation",
      note: "The map this note zooms into — the pyruvate hub and TCA circle zones, with the carrier and compartment logic.",
      topicId: "metabolism-overview",
    },
    {
      title: "Glycolysis Regulation",
      note: "The pilot note owning the glycolysis side of the pyruvate story — PFK-1's switch, the F-2,6-BP economy, and this note's entry substrate.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Vitamins B1, B2, B3 & B5",
      note: "Four of PDH's five cofactors are those B vitamins — Wernicke (B1), riboflavin's FAD, niacin's NAD, pantothenic acid's CoA.",
      topicId: "b-vitamins-1",
    },
    {
      title: "Oxidative Phosphorylation",
      note: "The next note in book order — where the TCA cycle's 3 NADH and 1 FADH2 actually become ATP (and where succinate DH doubles as complex II).",
      topicId: "oxidative-phosphorylation",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry — Molecular",
      connection: "Thiamine's Be APT quartet includes both PDH and α-KG DH — the TPP chemistry the molecular notes and the B1 nutrition note share.",
    },
    {
      subject: "Neurology",
      connection: "Infant hypotonia + seizures + basal ganglia lesions with lactic acidosis — PDH deficiency and mitochondrial disease live in the same neuro-metabolic differential.",
    },
    {
      subject: "Hematology & Oncology",
      connection: "RBCs live on the LDH route (no mitochondria) — the pyruvate hub's anaerobic exit explains the RBC's metabolic dependence and arsenic's anemia overlap.",
    },
    {
      subject: "Pharmacology & Toxicology",
      connection: "Arsenic's lipoic-acid blockade — the toxicology rotation's QT-prolonging, garlic-breath classic and its chelation management.",
    },
  ],
};
