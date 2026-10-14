import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 57, 64, 65 / book 35, 42–43
// (Genetic code features; tRNA; Start and stop codons; Protein synthesis;
//  Posttranslational modifications; Chaperone protein)

export const translationProteinSynthesis: KypUsMLENote = {
  id: "translation-protein-synthesis",
  title: "Translation & Protein Processing",
  subtitle:
    "From a charged cloverleaf to a folded protein: the genetic code's five properties, the ribosome's three stages and three sites, the ATP/GTP bookkeeping — and the toxins, antibiotics, and chaperones that police the whole operation.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — translation and posttranslational processing",
  difficulty: 3,
  readTime: 15,
  sourceRef: "First Aid 2026, Part 1 pp. 35, 42–43 (genetic code features; tRNA; start and stop codons; protein synthesis; posttranslational modifications)",
  tags: [
    "translation",
    "tRNA",
    "ribosome",
    "aminoacyl-tRNA synthetase",
    "AUG",
    "stop codons",
    "wobble",
    "posttranslational modification",
  ],
  core: {
    what: "Translation reads mature mRNA codons through base-paired tRNAs and assembles protein on the ribosome. Aminoacyl-tRNA synthetases charge each tRNA with its amino acid (the accuracy step), eIFs assemble the small subunit on the cap, elongation cycles aminoacyl-tRNAs through A and P sites as rRNA catalyzes peptide bonds and the ribosome translocates three nucleotides per codon, and release factors end the chain at a stop codon. The finished N-to-C polypeptide is then trimmed, covalently altered, and folded — often with chaperone help.",
    why: "This page completes the central dogma and supplies the mechanism behind two entire drug classes (protein synthesis inhibitors act on the ribosome; many toxins act on elongation factors). The code's properties, the APE sites, the start/stop logic, and the energy ledger (ATP for charging, GTP for movement) are quoted verbatim in stems.",
    keyIdea: "Fidelity is decided twice: at charging (aminoacyl-tRNA synthetase scrutinizes amino acid before and after binding) and at pairing (first two codon positions are essential; the third wobbles). Everything downstream — APE traffic, translocation, termination — is mechanical consequence.",
  },
  mechanisms: [
    {
      id: "trna-charging-fidelity",
      title: "Charging — the synthetase as fidelity gate",
      context: "Cytosol; before any ribosome is involved",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Amino acid + ATP + cognate tRNA meet their ONE enzyme",
            sublabel: "Molecular — 1 unique aminoacyl-tRNA synthetase per respective amino acid; uses ATP (→ AMP + PPi).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Synthetase scrutinizes the amino acid before and after it binds tRNA",
            sublabel: "Molecular — double-check proofreading at the level of the enzyme itself.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Correct pair → amino acid covalently bound to the 3′ CCA end",
            sublabel: "Molecular — 3′-ACC-5′ is the amino acid ACCeptor site; the charged tRNA is ready.",
            variant: "process",
          },
          {
            id: "x1",
            label: "Incorrect amino acid attached → the bond is hydrolyzed",
            sublabel: "Molecular — editing: the enzyme rejects its mistake.",
            variant: "inhibit",
          },
          {
            id: "o1",
            label: "A mischarged tRNA reads the usual codon but inserts the wrong amino acid",
            sublabel: "Clinical — if a mischarged tRNA escapes, the ribosome cannot tell: codon-anticodon pairing looks perfect. Synthetase accuracy = amino acid sequence accuracy.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Charging + codon binding together are responsible for the accuracy of amino acid selection",
            sublabel: "Molecular — First Aid's own summary: the enzyme and the pairing step share the fidelity job.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "one enzyme per aa" },
          { from: "s1", to: "s2" },
          { from: "x1", to: "s1", type: "inhibit", label: "hydrolytic editing" },
          { from: "s2", to: "o1", label: "if editing fails" },
          { from: "s2", to: "o2" },
        ],
        caption:
          "Charging is where the genetic code actually becomes chemistry: a tRNA accepts whatever amino acid its synthetase gives it, so the enzyme's proofreading — not the codon — defines what gets inserted. ATP pays: one ATP → AMP + PPi per amino acid.",
      },
    },
    {
      id: "translation-ribosome-cycle",
      title: "The ribosome cycle — initiation, elongation, termination",
      context: "Cytoplasm; eukaryotic framing with prokaryotic contrasts",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Mature mRNA is loaded",
            sublabel: "Molecular — eukaryotes: eIFs identify the 5′ cap (prokaryotes align on Shine-Dalgarno via 16S rRNA).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Initiation: eIFs assemble 40S + initiator tRNA; 60S joins, eIFs released (GTP)",
            sublabel: "Molecular — the initiator tRNA binds the P site directly over AUG.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Elongation: aminoacyl-tRNA enters the A site (elongation factor + GTP)",
            sublabel: "Molecular — every subsequent tRNA enters at A; the initiator Met is the P-site exception.",
            variant: "process",
          },
          {
            id: "s3",
            label: "rRNA (“ribozyme”) catalyzes the peptide bond; growing chain transferred to the A-site amino acid",
            sublabel: "Molecular — the ribosome's catalytic center is ribosomal RNA, not protein.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Translocation: ribosome advances 3 nucleotides toward the 3′ end; peptidyl-tRNA now in P",
            sublabel: "Molecular — the empty tRNA moves to E and exits; synthesis runs N-terminus → C-terminus.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Termination: eRFs recognize the stop codon and halt translation",
            sublabel: "Molecular — UGA/UAA/UAG in the A site; completed polypeptide released; GTP spent.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Bacterial toxins ADP-ribosylate elongation factors",
            sublabel: "Clinical — elongation factors are targets of bacterial toxins (eg, Diphtheria, Pseudomonas): translocation halts and protein synthesis dies.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "cap recognition" },
          { from: "s1", to: "s2", label: "A-site loading" },
          { from: "s2", to: "s3", label: "peptidyl transfer" },
          { from: "s3", to: "s4", label: "translocation (GTP)" },
          { from: "s4", to: "s2", label: "cycle repeats" },
          { from: "s4", to: "o1", label: "stop codon reached" },
          { from: "x1", to: "s4", type: "inhibit", label: "EF poisoned" },
        ],
        caption:
          "One cycle, two GTPs per codon (entry + translocation) plus one ATP per amino acid at charging — and one ribozyme fact: rRNA, not protein, makes the peptide bond. Toxins pick the translocation step.",
      },
    },
    {
      id: "ptm-chaperone-folding",
      title: "Posttranslational processing — trimming, decorating, folding",
      context: "Endoplasmic reticulum and cytosol; after release",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Completed polypeptide is released from the ribosome",
            sublabel: "Molecular — synthesis occurred N-terminus to C-terminus; the raw chain is rarely the final product.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Trimming: N- or C-terminal propeptides removed from zymogens",
            sublabel: "Clinical — the classic example is trypsinogen to trypsin: inactive precursor → active enzyme.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Covalent alterations added",
            sublabel: "Molecular — phosphorylation, glycosylation, hydroxylation, methylation, acetylation, and ubiquitination.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Chaperones facilitate and maintain folding",
            sublabel: "Molecular — in yeast, heat shock proteins (eg, HSP60) are constitutively expressed; expression increases with high temperatures, acidic pH, and hypoxia to prevent denaturing/misfolding.",
            variant: "process",
          },
          {
            id: "o1",
            label: "A functional, correctly folded protein",
            sublabel: "Output — failure of the folding arm gives the protein-misfolding diseases (the amyloid family).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s3", to: "o1", label: "native fold" },
        ],
        caption:
          "The C-terminal chapter of the page: cut (zymogen activation), decorate (six named modifications), and fold (chaperones, heat-shock responsive) — three parallel fates, not a sequence.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "The genetic code's five properties — verbatim definitions",
      intro: "First Aid lists these as property definitions on the same spread; the exam tests the definition and the exceptions.",
      columns: ["Property", "Definition", "Exception"],
      rows: [
        ["Unambiguous", "Each codon specifies only 1 amino acid", "—"],
        ["Degenerate / redundant", "Most amino acids are coded by multiple codons", "Methionine (AUG) and tryptophan (UGG) have only 1 codon"],
        ["Commaless, nonoverlapping", "Read from a fixed starting point as a continuous sequence of bases", "Some viruses overlap genes"],
        ["Universal", "Genetic code is conserved throughout evolution", "Rare — usually stop codon variants (eg, mitochondrial DNA)"],
        ["Wobble pairing", "First 2 nucleotides of the codon are essential for anticodon recognition; the 3rd can vary", "— (the mechanism behind degeneracy)"],
      ],
      caption:
        "Degeneracy lives at the third position — the wobble. That is why alanine's four codons (GCU, GCC, GCA, GCG) all start GC: one tRNA with a wobbly 3′ anticodon base reads them all.",
    },
    {
      kind: "visual",
      visualId: "trna-structure-charging",
      title: "tRNA — the cloverleaf, the charging step, the antiparallel pairing",
      caption:
        "The 75–90-nucleotide cloverleaf with its 3′-ACC aminoacyl acceptor arm, T-arm (TΨC — Tethers to the ribosome), D-arm (Dihydrouridine — Detection by the synthetase), variable arm, and anticodon loop opposite the acceptor end; the charging panel (amino acid + ATP → aminoacyl-tRNA via the one-per-amino-acid synthetase, with hydrolytic editing); and the antiparallel 5′-AUG-3′ / 3′-UAC-5′ pairing with the wobble position marked.",
      notice:
        "The two fidelity facts live in the same drawing: the D-arm is what the synthetase reads (which tRNA am I holding?) and the anticodon is what the ribosome reads (which codon am I pairing?). The wobble chip explains degeneracy mechanically — third-position variation is tolerated because the first two positions carry the recognition weight.",
    },
    {
      kind: "list",
      title: "tRNA arms — three hooks, one per arm",
      intro: "First Aid attaches a mnemonic syllable to each structural feature; the exam does the same.",
      items: [
        { lead: "3′-ACC-5′ acceptor site", text: "The amino acid ACCeptor site — amino acid covalently bound to the 3′ end; all tRNAs, eukaryotic and prokaryotic, end in CCA." },
        { lead: "T-arm (TΨC)", text: "Ribothymidine, pseudouridine, cytidine sequence — Tethers the tRNA molecule to the ribosome (binding). " },
        { lead: "D-arm (Dihydrouridine)", text: "Allows Detection of the tRNA by the correct aminoacyl-tRNA synthetase — the recognition arm." },
        { lead: "Anticodon loop", text: "Sits opposite the 3′ aminoacyl end; reads the codon antiparallel (codon 5′-AUG-3′ pairs anticodon 3′-UAC-5′, written 5′-CAU-3′)." },
      ],
    },
    {
      kind: "visual",
      visualId: "translation-ribosome-stages",
      title: "Protein synthesis — initiation, elongation, termination on the 80S (70S) ribosome",
      caption:
        "Three panels: initiation with eIFs, the assembling 40S+60S (30S+50S) subunits and the initiator tRNA already in the P site over AUG; elongation with the E-P-A site traffic, the rRNA peptidyl-transferase center, and the left-to-right translocation; termination with the release factor over the stop codon and the completed N-to-C polypeptide released — plus the ATP/GTP bookkeeping, the subunit arithmetic, and the APE mnemonic.",
      notice:
        "Track the growing chain through the panels: it starts on the P-site initiator, transfers to the A-site tRNA with each peptide bond, and returns to P after every translocation. Note the one P-site exception — the initiator methionine — and the one enzyme that is not an enzyme but an RNA.",
    },
    {
      kind: "text",
      title: "Start and stop codons — the punctuation set",
      body: [
        "AUG is the mRNA start codon — “AUG inAUGurates protein synthesis.” In eukaryotes it codes for methionine, which may be removed before translation is completed; in prokaryotes it codes for N-formylmethionine (fMet), which additionally stimulates neutrophil chemotaxis — a fact that turns a codon question into an immunology answer.",
        "The three stop codons are UGA, UAA, and UAG, recognized by release factors — never by tRNAs. The mnemonic trio: UGA = U Go Away, UAA = U Are Away, UAG = U Are Gone.",
        "Subunit arithmetic is tested as a pair: eukaryotes 40S + 60S → 80S (“even”), prokaryotes 30S + 50S → 70S (“prime”). The 30S/50S prokaryotic ribosome is the target of aminoglycosides, tetracyclines, macrolides, chloramphenicol, and clindamycin — the pharmacology chapter revisits this page constantly.",
      ],
    },
    {
      kind: "compare",
      title: "ATP vs GTP — the energy ledger",
      intro: "“ATP—tRNA Activation (charging). GTP—tRNA Gripping and Going places (translocation).” One line stores the whole table.",
      columns: ["ATP spends at", "GTP spends at"],
      rows: [
        { label: "Reaction", a: "Charging: amino acid + tRNA → aminoacyl-tRNA (→ AMP + PPi)", b: "Initiation factor release, aminoacyl-tRNA entry (elongation factor), translocation, termination (eRF)" },
        { label: "Per codon cost", a: "1 ATP per amino acid charged", b: "2 GTP per codon elongated (entry + translocation)" },
        { label: "Mnemonic half", a: "Activation", b: "Gripping and Going places" },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) site mechanics — “in which site does the initiator tRNA bind?” (P — the exception) or “which site holds the growing peptide during translocation?” (P after the shift). (2) energy — “which energy carrier powers translocation?” (GTP). (3) start-codon biology — fMet and neutrophil chemotaxis (prokaryotes), or Met removal (eukaryotes). (4) mechanism-of-injury — diphtheria/Pseudomonas toxins ADP-ribosylating elongation factor (translocation arrest), the most common vignette form this page takes.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the ribosome is a ribozyme",
      body: "The peptidyl transferase center — the catalytic heart that forms each peptide bond — is made of ribosomal RNA, not ribosomal proteins. First Aid marks it with the quote “ribozyme” because it matters twice: mechanistically (rRNA positions the substrates and catalyzes the transfer of the growing chain to the A-site amino acid) and evolutionarily (an RNA-only machine at the center of biology is the strongest evidence for the RNA world). It also explains why some antibiotics can hit the catalytic core itself.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Elongation factors as toxin targets — diphtheria and Pseudomonas",
      body: [
        "Elongation factors are targets of bacterial toxins: diphtheria toxin (Corynebacterium diphtheriae, tox+ phage encoded) ADP-ribosylates eEF-2, the translocation factor — the ribosome stalls after the peptide bond and the chain cannot move; Pseudomonas aeruginosa exotoxin A does the same to host cells. Both present as “protein synthesis shuts off” at the level of translocation.",
        "The exam's version is mechanism-completion: a toxin halts translocation (not peptide-bond formation, not initiation) → the ADP-ribosylated factor is eEF-2. Keep the layer straight: antibiotics hit the ribosome; these toxins hit the factor.",
      ],
    },
    {
      kind: "text",
      title: "Posttranslational diseases — zymogens, collagen, chaperones",
      body: [
        "Trimming explains zymogen physiology: trypsinogen is cut to trypsin (and the pancreas protects itself by keeping the enzyme off until it reaches the gut — the basis of acute pancreatitis when activation happens early). Covalent alterations map to named diseases: glycosylation deficiencies, hydroxylation defects in collagen (vitamin C–dependent), and ubiquitination failures in protein-degradation syndromes.",
        "Chaperone proteins facilitate and maintain folding: in yeast, heat shock proteins (eg, HSP60) are constitutively expressed but increase with high temperatures, acidic pH, and hypoxia to prevent denaturing/misfolding — the stress-proteome response, and the conceptual root of the protein-aggregation diseases.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A child with pharyngeal membrane formation has a toxin described as halting host protein synthesis at the translocation step by ADP-ribosylating an elongation factor.",
        discriminator: "Translocation arrest + ADP-ribosylation of eEF-2",
        concept: "Diphtheria toxin mechanism",
        answer: "Elongation factor poisoning — the ribosome cannot advance 3 nucleotides along the mRNA",
      },
      {
        stem: "A molecular question asks in which ribosomal site the initiator methionyl-tRNA is found immediately after initiation complex assembly.",
        discriminator: "The P-site exception for the initiator",
        concept: "Ribosome site mechanics",
        answer: "The P site — all subsequent aminoacyl-tRNAs enter at the A site",
      },
      {
        stem: "An experiment shows a tRNA enzymatically attached to the wrong amino acid still being read normally at the codon level.",
        discriminator: "Codon-anticodon pairing intact; amino acid identity wrong",
        concept: "Mischarged tRNA biology",
        answer: "A mischarged tRNA reads the usual codon but inserts the wrong amino acid — fidelity lives in aminoacyl-tRNA synthetase",
      },
      {
        stem: "A prokaryotic translation question asks which start-codon amino acid additionally stimulates neutrophil chemotaxis.",
        discriminator: "Formylation difference between kingdoms",
        concept: "Start codon biology",
        answer: "N-formylmethionine (fMet) — prokaryotic initiator amino acid",
      },
      {
        stem: "A biochemistry calculation question asks how many high-energy phosphate bonds are spent adding one amino acid in elongation (charging plus entry plus translocation).",
        discriminator: "The ATP + 2 GTP ledger",
        concept: "Energy cost of translation",
        answer: "3 per amino acid: 1 ATP (charging, → AMP + PPi = 2 bonds) + 2 GTP (entry + translocation) — First Aid's Activation vs Gripping/Going split",
      },
    ],
    traps: [
      {
        a: "A site",
        b: "P site",
        whyConfused: "Both hold tRNAs during elongation; the traffic is easy to reverse.",
        keyDifference: "A = incoming Aminoacyl-tRNA (and the site of the codon being decoded); P = accommodates the growing Peptide; E = holds the Empty tRNA as it Exits.",
        clue: "“Incoming” or “decoding” → A. “Growing chain” → P. “Exits” → E. Initiator is the P-site exception at initiation.",
      },
      {
        a: "ATP",
        b: "GTP",
        whyConfused: "Both are named in the energy discussion.",
        keyDifference: "ATP = tRNA Activation (charging). GTP = tRNA Gripping and Going places — initiation, elongation-factor entry, translocation, termination.",
        clue: "Charging step → ATP. Movement/factor steps → GTP.",
      },
      {
        a: "Peptide bond formation (rRNA)",
        b: "Translocation (elongation factor)",
        whyConfused: "Both are “steps” of elongation; toxins and antibiotics are said to block “elongation” generically.",
        keyDifference: "The bond is catalyzed by the ribozyme (rRNA) — unaffected by diphtheria toxin; translocation (advancing 3 nucleotides) needs the factor that diphtheria/Pseudomonas ADP-ribosylate.",
        clue: "“Chain cannot move along the mRNA” → factor. “No bond between amino acids” → peptidyl transferase (e.g., clindamycin/chloramphenicol context).",
      },
      {
        a: "AUG in eukaryotes",
        b: "AUG in prokaryotes",
        whyConfused: "Same codon, different initiating amino acid.",
        keyDifference: "Eukaryotes: methionine, which may be removed before translation completes. Prokaryotes: N-formylmethionine (fMet) — and fMet stimulates neutrophil chemotaxis.",
        clue: "Chemotaxis clause or formyl group in the stem → prokaryotic fMet.",
      },
    ],
    pivots: [
      {
        lookAlike: "A protein-synthesis-inhibition stem that does not name the step",
        differentiator: "Which machine stopped: charging enzyme, ribosome center, or elongation factor",
        correctPath: "Wrong amino acid inserted → synthetase. No peptide bond → peptidyl transferase (rRNA). Ribosome frozen mid-mRNA → elongation factor (toxin: eEF-2 ADP-ribosylation).",
      },
      {
        lookAlike: "A codon-table or mutation question about third-position changes",
        differentiator: "Wobble logic — first two positions carry recognition weight",
        correctPath: "Third-base substitution → often silent (degenerate code, wobble); first- or second-base substitution → likely missense/nonsense. Met and Trp are the no-wobble exceptions.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old with incomplete immunization presents with sore throat, low-grade fever, and a dense gray pharyngeal membrane that bleeds when scraped. The organism recovered is lysogenized by a β-corynephage. In cultured cells the organism's toxin is shown to halt host protein synthesis while the cells retain intact ribosomes, intact mRNA, and intact aminoacyl-tRNA synthetases — but polyribosomes freeze in place along the mRNA.",
      question: "Which molecular step is inhibited by this toxin?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Translocation — the toxin ADP-ribosylates elongation factor 2 (eEF-2), so the ribosome cannot advance 3 nucleotides along the mRNA",
          why: "Correct. Diphtheria toxin (and Pseudomonas exotoxin A) ADP-ribosylate eEF-2; elongation factors are the named toxin targets on this page, and a frozen polyribosome is the translocation-arrest signature.",
        },
        {
          label: "B",
          text: "Peptide bond formation by the peptidyl transferase center",
          why: "Tempting because the net result is also no protein — but the rRNA catalytic center is intact here; drugs like clindamycin hit that step, not diphtheria toxin.",
        },
        {
          label: "C",
          text: "Aminoacyl-tRNA synthetase charging",
          why: "The stem explicitly excludes it — synthetases are intact, and mischarging is not the lesion; this toxin acts on the factor, not the enzyme.",
        },
        {
          label: "D",
          text: "Cap-dependent initiation by eIFs",
          why: "Initiation inhibitors would prevent ribosome assembly — but the drawing shows assembled ribosomes stuck mid-message, which requires initiation to have succeeded.",
        },
        {
          label: "E",
          text: "Release-factor action at stop codons",
          why: "A termination block would trap finished-length chains at stop codons, not freeze ribosomes throughout the coding sequence.",
        },
      ],
      reasoning:
        "The vignette's elimination is the reasoning: ribosomes intact (not the ribosome), synthetases intact (not charging), polyribosomes frozen along the message (assembled and elongating, then stopped mid-track). The only step left is translocation — and the gray-membrane organism with a phage-encoded toxin names diphtheria, whose eEF-2 ADP-ribosylation is First Aid's canonical elongation-factor toxin.",
    },
  },
  mnemonics: [
    {
      code: "“going APE”",
      meaning: "A site = incoming Aminoacyl-tRNA · P site = accommodates the growing Peptide · E site = holds the Empty tRNA as it Exits.",
      memorizes: "The three ribosomal sites and their cargo",
      whenToUse: "Any site-mechanics question — plus the exception clause: the initiator Met starts in P.",
      clinical: "Site identity decides which antibiotic's mechanism makes sense (A-site decoding vs peptidyl transferase vs exit tunnel).",
    },
    {
      code: "“ATP Activates; GTP Grips and Goes”",
      meaning: "ATP = tRNA Activation (charging). GTP = tRNA Gripping and Going places (initiation, entry, translocation, termination).",
      memorizes: "The energy ledger of translation",
      whenToUse: "Energy-carrier questions and cost-per-amino-acid calculations.",
      clinical: "The ledger is why rapidly translating cells are energy-hungry targets of toxins.",
    },
    {
      code: "“AUG inAUGurates; U Go Away, U Are Away, U Are Gone”",
      meaning: "AUG starts everything; the three stops are UGA, UAA, UAG in mnemonic order.",
      memorizes: "Start and stop codons in one breath",
      whenToUse: "Codon-identification questions, both directions (name the codon, name the role).",
      clinical: "Prokaryotic AUG means fMet — which stimulates neutrophil chemotaxis.",
    },
    {
      code: "“CCA Can Carry Amino acids”",
      meaning: "Every tRNA's 3′ end is CCA — the amino acid attachment (ACCeptor) site.",
      memorizes: "The universal tRNA 3′ sequence and its job",
      whenToUse: "tRNA structure questions and charging-mechanism stems.",
      clinical: "The D-arm (Detection) and T-arm (Tethers) complete the arm set: synthetase reads D, ribosome reads T.",
    },
  ],
  rapidReview: {
    s30: [
      "AUG start (Met in euk; fMet in prok — stimulates neutrophil chemotaxis); UGA/UAA/UAG stops, read by release factors.",
      "ATP = tRNA Activation (charging); GTP = Gripping and Going (initiation, entry, translocation, termination).",
      "A = Aminoacyl in, P = growing Peptide, E = Empty tRNA Exits; initiator binds P directly.",
      "Peptide bonds are catalyzed by rRNA — the ribosome is a ribozyme.",
      "Synthesis runs N-terminus → C-terminus.",
    ],
    m3: [
      "Aminoacyl-tRNA synthetase: 1 per amino acid, uses ATP (→ AMP + PPi), proofreads before and after binding.",
      "Mischarged tRNA reads the usual codon but inserts the wrong amino acid.",
      "Eukaryotes 40S + 60S → 80S (even); prokaryotes 30S + 50S → 70S (prime).",
      "Wobble: first 2 codon positions essential; the 3rd can vary — the basis of degeneracy.",
      "Shine-Dalgarno (prok) is recognized by 16S rRNA and aligns the ribosome with the start codon.",
      "Elongation factors are toxin targets — Diphtheria and Pseudomonas (eEF-2 ADP-ribosylation).",
    ],
    m10: [
      "Genetic code: unambiguous, degenerate, commaless/nonoverlapping (viral exceptions), universal (rare stop-codon variants, eg, mtDNA).",
      "Only Met (AUG) and Trp (UGG) are single-codon amino acids.",
      "tRNA is 75–90 nucleotides, 2° cloverleaf, anticodon opposite the 3′ aminoacyl end, chemically modified bases.",
      "T-arm Tethers (TΨC); D-arm = Detection (dihydrouridine, synthetase recognition); 3′-ACC-5′ = ACCeptor site.",
      "Trimming: zymogen → active enzyme (trypsinogen → trypsin).",
      "Covalent PTMs: phosphorylation, glycosylation, hydroxylation, methylation, acetylation, ubiquitination.",
      "Chaperones (HSP60): constitutive, up with heat, acidic pH, hypoxia — prevent denaturing/misfolding.",
    ],
  },
  recall: [
    {
      q: "Which enzyme charges a tRNA, how many exist, and what does it consume?",
      a: "Aminoacyl-tRNA synthetase — 1 unique enzyme per respective amino acid; uses ATP (→ AMP + PPi).",
    },
    {
      q: "What happens if an incorrect amino acid is attached to a tRNA, and what if a mischarged tRNA escapes anyway?",
      a: "The synthetase hydrolyzes the bond (proofreading); if a mischarged tRNA escapes, it reads the usual codon but inserts the wrong amino acid.",
    },
    {
      q: "In which site does the initiator tRNA bind, and how do all other aminoacyl-tRNAs enter?",
      a: "The initiator methionine binds the P site; every subsequent aminoacyl-tRNA enters at the A site (elongation factor + GTP).",
    },
    {
      q: "What catalyzes peptide bond formation, and in which direction does the chain grow?",
      a: "rRNA (“ribozyme”) catalyzes the bond, transferring the growing polypeptide to the amino acid in the A site; synthesis is N-terminus → C-terminus.",
    },
    {
      q: "How far does the ribosome advance per translocation, in which direction, and what powers it?",
      a: "3 nucleotides (one codon) toward the 3′ end of the mRNA; GTP powers translocation.",
    },
    {
      q: "Name the start-codon amino acids in each kingdom and the special function of the prokaryotic one.",
      a: "Eukaryotes: methionine (may be removed before translation completes). Prokaryotes: N-formylmethionine (fMet) — stimulates neutrophil chemotaxis.",
    },
    {
      q: "What are the five properties of the genetic code and the exceptions to the last two?",
      a: "Unambiguous; degenerate/redundant (except Met, Trp — single codons); commaless, nonoverlapping (except some viruses); universal (rare stop-codon variants, eg, mtDNA); wobble (first 2 positions essential).",
    },
    {
      q: "Which bacterial toxins target elongation factors and by what chemical mechanism?",
      a: "Diphtheria toxin and Pseudomonas exotoxin — ADP-ribosylation of elongation factor (eEF-2), halting translocation.",
    },
  ],
  related: [
    {
      title: "RNA Processing & Splicing",
      note: "The mature mRNA (cap, Kozak, ligated exons, poly-A tail) that this page's ribosomes read — eIFs recognize the cap made there.",
      topicId: "rna-processing",
    },
    {
      title: "Mutations in DNA",
      note: "Codon-level consequences — silent (wobble), missense, nonsense, frameshift — are the readout of this page's pairing rules.",
      topicId: "dna-mutations",
    },
    {
      title: "Eukaryotic Gene Organization & Regulation",
      note: "The open reading frame defined at the gene-anatomy level is the stretch translated here.",
      topicId: "eukaryotic-gene-organization",
    },
    {
      title: "Protein synthesis inhibitor pharmacology",
      note: "Aminoglycosides (30S), tetracyclines (30S), macrolides (50S), chloramphenicol, clindamycin, and linezolid all act on the machinery defined on this page.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Protein synthesis inhibitors act at the ribosomal sites and steps defined here — 30S/50S targeting is selective because humans run 80S from 40S+60S.",
    },
    {
      subject: "Microbiology",
      connection: "Diphtheria toxin and Pseudomonas exotoxin A ADP-ribosylate eEF-2 — the bacterial-toxin face of this page.",
    },
    {
      subject: "Immunology",
      connection: "Prokaryotic fMet stimulates neutrophil chemotaxis — bacterial start codons double as inflammatory signals.",
    },
    {
      subject: "Biochemistry — protein chemistry",
      connection: "PTMs (glycosylation, hydroxylation, phosphorylation, ubiquitination) and chaperone/HSP biology complete the folding story started here.",
    },
  ],
};
