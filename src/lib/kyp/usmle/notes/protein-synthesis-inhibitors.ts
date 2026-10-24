import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 33). Source: pdf 209-211 / book
// 187-189 (Protein synthesis inhibitors — the section intro with the 70S/80S
// selectivity rule and the -cidal/-static banner, the printed 30S/50S
// inhibitor lists, the TRANSLATION FIGURE printed entirely in the text layer
// (0 rasters on all three pages: the 70S ribosome with the
// Initiation/Elongation/Termination/Translocation panels, the mRNA thread
// 5´-A-U-G-C-A-U-G-A-U-3´, the E/P/A sites, and the five drug-door labels),
// then the eight drug cards: Aminoglycosides, Tetracyclines, Tigecycline,
// Chloramphenicol, Clindamycin, Linezolid, Macrolides, Polymyxins). The
// source's own margin typo 'ccel (sell)' for 'cell (sell)' prints on book
// 187 (the Buy-at-30 mnemonic line) — carried verbatim in the table, typo
// documented. The banner typo MICROCIOLOGY—ANTIMICROCIALS prints on all
// three pages. The source's own mnemonics ('Buy at 30', 'Mean GNATS',
// 'Teratocyclines', 'macroslides', 'MACRO') are carried ONLY inside the
// verbatim note-block tables per the E38 precedent — omitted from the visual
// and the KYP memory layer, which carries originals instead.

export const proteinSynthesisInhibitors: KypUsMLENote = {
  id: "protein-synthesis-inhibitors",
  title: "Protein Synthesis Inhibitors: 30S, 50S & Beyond",
  subtitle:
    "The ribosomal doors of the M31 map, in drug-directory form (books 187-189). THE SELECTIVITY RULE: protein synthesis inhibitors specifically target the smaller bacterial ribosome (70S, made of 30S and 50S subunits), leaving the human ribosome (80S) unaffected. THE -CIDAL/-STATIC BANNER: all are bacteriostatic, except aminoglycosides (bactericidal) and linezolid (variable). THE PRINTED LISTS: 30S inhibitors = aminoglycosides + tetracyclines; 50S inhibitors = chloramphenicol + clindamycin, erythromycin (macrolides), linezolid. THE TRANSLATION FIGURE: the 70S ribosome running the mRNA thread through Initiation → A-site binding → peptidyl transferase → Translocation → Termination, with the drug doors marked — aminoglycosides (30S) at initiation, tetracyclines (30S) at aminoacyl-tRNA attachment, chloramphenicol (50S) at the peptidyl transferase, macrolides and clindamycin (50S) at translocation, linezolid (50S) at the initiation complex. THE EIGHT CARDS: aminoglycosides (bactericidal; irreversible inhibition of initiation complex through binding of the 30S subunit; misreading of mRNA; block translocation; require O2 for uptake — ineffective against anaerobes; severe gram ⊝ rod infections; synergy with β-lactams; nephrotoxicity, neuromuscular blockade [absolute contraindication with myasthenia gravis], ototoxicity with loop diuretics, teratogenicity; resistance by acetylation/phosphorylation/adenylation); tetracyclines (bacteriostatic; bind 30S, prevent attachment of aminoacyl-tRNA; limited CNS penetration; doxycycline fecally eliminated — usable in renal failure; chelated by divalent cations — no milk/antacids/iron; Borrelia burgdorferi, M pneumoniae, Rickettsia, Chlamydia, acne, community-acquired MRSA [doxycycline]; GI distress, tooth discoloration and bone-growth inhibition in children, photosensitivity, teratogenicity; resistance by efflux pumps); tigecycline (tetracycline derivative, 30S; broad-spectrum anaerobic/gram ⊝/gram ⊕; MDR organisms — MRSA, VRE); chloramphenicol (blocks peptidyltransferase at 50S; meningitis and rickettsial diseases; anemia dose-dependent, aplastic anemia dose-independent, gray baby syndrome in premature infants lacking UDP-glucuronosyltransferase; acetyltransferase resistance); clindamycin (blocks translocation at 50S; anaerobic infections above the diaphragm vs metronidazole below; pseudomembranous colitis); linezolid (binds 23S rRNA of the 50S, prevents initiation-complex formation; gram ⊕ including MRSA and VRE; myelosuppression/thrombocytopenia, peripheral neuropathy, serotonin syndrome via partial MAO inhibition; rRNA point-mutation resistance); macrolides (block translocation at 50S — the macroslides; atypical pneumonias [Mycoplasma, Chlamydia, Legionella], STIs, streptococcal infections in penicillin-allergic patients, B pertussis; MACRO adverse set — GI motility, QT-prolonged arrhythmia, cholestatic hepatitis, rash, eOsinophilia; P-450 inhibition by clarithromycin/erythromycin; 23S methylation resistance); polymyxins (colistin/polymyxin B — cation polypeptides binding gram ⊝ membrane phospholipids; salvage for MDR gram ⊝; nephro/neurotoxicity).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The ribosomal doors ⑥⑦ of the M31 chart in full clinical form — the translation figure redrawn with every drug door marked, the -cidal/-static banner, the O2-uptake rule that spares anaerobes from aminoglycosides, the chelation rule that starves tetracyclines, and the two above/below-the-diaphragm anaerobe drugs.",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 187–189 (Protein synthesis inhibitors — the section intro, the translation figure, and the eight drug cards)",
  tags: [
    "protein synthesis inhibitors",
    "70S ribosome",
    "30S subunit",
    "50S subunit",
    "80S ribosome",
    "aminoglycosides",
    "gentamicin",
    "neomycin",
    "amikacin",
    "tobramycin",
    "streptomycin",
    "bactericidal",
    "initiation complex",
    "misreading of mRNA",
    "O2-dependent uptake",
    "anaerobes",
    "tetracyclines",
    "tetracycline",
    "doxycycline",
    "minocycline",
    "aminoacyl-tRNA",
    "chelation",
    "divalent cations",
    "tigecycline",
    "chloramphenicol",
    "peptidyltransferase",
    "gray baby syndrome",
    "aplastic anemia",
    "clindamycin",
    "pseudomembranous colitis",
    "linezolid",
    "23S rRNA",
    "myelosuppression",
    "serotonin syndrome",
    "macrolides",
    "azithromycin",
    "clarithromycin",
    "erythromycin",
    "macroslides",
    "QT prolongation",
    "cytochrome P-450",
    "polymyxins",
    "colistin",
    "polymyxin B",
    "peptidyl transfer",
    "translocation",
    "termination",
  ],
  core: {
    what: "THE SECTION (book 187). One selectivity sentence and one cidal sentence carry the whole page-set: protein synthesis inhibitors specifically target the smaller bacterial ribosome (70S, made of 30S and 50S subunits), leaving the human ribosome (80S) unaffected — and all are bacteriostatic, except aminoglycosides (bactericidal) and linezolid (variable). The printed lists: 30S inhibitors — Aminoglycosides, Tetracyclines; 50S inhibitors — Chloramphenicol, Clindamycin, Erythromycin (macrolides), Linezolid. THE FIGURE (same page): the 70S ribosome running the mRNA thread (5´-A-U-G-C-A-U-G-A-U-3´) through Initiation (initiator tRNA at the P site), A-site tRNA binding, peptidyl transferase, Elongation, Termination (UGA), and Translocation — with the five drug doors printed on it: Aminoglycosides (30S) and Linezolid (50S) at the initiation end, Tetracyclines (30S) at A-site aminoacyl-tRNA attachment, Chloramphenicol (50S) at the peptidyl transferase, Macrolides and Clindamycin (50S) at translocation. THE EIGHT CARDS. AMINOGLYCOSIDES (gentamicin, neomycin, amikacin, tobramycin, streptomycin): bactericidal; irreversible inhibition of the initiation complex through binding of the 30S subunit; cause misreading of mRNA; also block translocation; require O2 for uptake — therefore ineffective against anaerobes; severe gram ⊝ rod infections, synergistic with β-lactams, neomycin for bowel surgery; nephrotoxicity, neuromuscular blockade (absolute contraindication with myasthenia gravis), ototoxicity (especially with loop diuretics), teratogenicity; resistance by transferase enzymes (acetylation, phosphorylation, adenylation). TETRACYCLINES (tetracycline, doxycycline, minocycline): bacteriostatic; bind 30S and prevent attachment of aminoacyl-tRNA; limited CNS penetration; doxycycline is fecally eliminated — usable in renal failure; no milk (Ca2+), antacids (Ca2+/Mg2+), or iron — divalent cations inhibit absorption; Borrelia burgdorferi, M pneumoniae, Rickettsia, Chlamydia (intracellular accumulation), acne, community-acquired MRSA (doxycycline); GI distress, tooth discoloration and bone-growth inhibition in children, photosensitivity, teratogenicity (avoided in pregnancy and children except doxycycline); resistance by efflux pumps. TIGECYCLINE: tetracycline derivative binding 30S; broad-spectrum anaerobic, gram ⊝, gram ⊕ — MDR organisms (MRSA, VRE); nausea/vomiting. CHLORAMPHENICOL: blocks peptidyltransferase at the 50S; meningitis (H influenzae, N meningitidis, S pneumoniae) and rickettsial disease (RMSF); anemia (dose-dependent), aplastic anemia (dose-independent), gray baby syndrome (premature infants lack liver UDP-glucuronosyltransferase); acetyltransferase resistance. CLINDAMYCIN: blocks peptide transfer (translocation) at 50S; anaerobic infections (Bacteroides, C perfringens) in aspiration pneumonia, lung abscesses, oral infections; invasive group A strep; above-the-diaphragm anaerobes vs metronidazole below; pseudomembranous colitis (C difficile overgrowth), fever, diarrhea. LINEZOLID: binds the 23S rRNA of the 50S, preventing initiation-complex formation; gram ⊕ including MRSA and VRE; myelosuppression (especially thrombocytopenia), peripheral neuropathy, serotonin syndrome (partial MAO inhibition); rRNA point-mutation resistance. MACROLIDES (azithromycin, clarithromycin, erythromycin): block translocation at 50S; atypical pneumonias (Mycoplasma, Chlamydia, Legionella), STIs (Chlamydia), streptococcal infections in penicillin-allergic patients, B pertussis; MACRO adverse set — GI Motility issues, Arrhythmia (prolonged QT), acute Cholestatic hepatitis, Rash, eOsinophilia; ↑ theophylline and oral anticoagulants; clarithromycin/erythromycin inhibit cytochrome P-450; 23S methylation resistance. POLYMYXINS (colistin [polymyxin E], polymyxin B): cation polypeptides binding gram ⊝ membrane phospholipids — disrupt membrane integrity → leakage → cell death; salvage therapy for MDR gram ⊝ (P aeruginosa, E coli, K pneumoniae); polymyxin B in triple antibiotic ointment; nephrotoxicity, neurotoxicity (slurred speech, weakness, paresthesias), respiratory failure.",
    why: "This page-set is the ribosomal zone of the M31 map — doors ⑥⑦ — zoomed into prescribing form, and the translation figure is what makes the doors memorable: every drug in the set parks at one of the four stages the figure draws. Reading the figure left to right: the ribosome ASSEMBLES (initiation — where aminoglycosides strike the 30S subunit irreversibly and cause misreading, and where linezolid blocks the 50S 23S rRNA), the tRNA DELIVERS (A-site aminoacyl-tRNA attachment — tetracyclines' door), the peptide WELDS (peptidyl transferase — chloramphenicol's door), and the ribosome SLIDES (translocation — the macrolides' and clindamycin's door, the printed 'macroslides'). Two rules govern the whole set. FIRST, the 70S/80S rule: we build our proteins on 80S ribosomes, so nothing in this set touches human translation — the selectivity is structural, not biochemical. SECOND, the -cidal/-static banner: exactly two exceptions to bacteriostasis — the aminoglycosides (bactericidal because the misreading is irreversible) and linezolid (variable). The aminoglycosides carry the set's deepest transport idea: they require O2 for uptake (the transport-in step), which is why they are useless against anaerobes even though their door is wide open there — a favorite exam pairing with the myasthenia-gravis and loop-diuretic toxicity lines. The tetracyclines carry the set's absorption idea: divalent cations chelate them in the gut lumen, which converts a pharmacology fact into a practical counseling rule (no milk, antacids, or iron). And the two anaerobe drugs split the body at the diaphragm: clindamycin above, metronidazole below — a line that pairs naturally with the M31 metronidazole card.",
    keyIdea:
      "Read the set by SUBUNIT, STAGE, and RULE. SUBUNIT (30S vs 50S): 30S — aminoglycosides (bactericidal; irreversible initiation-complex inhibition; misreading; O2-required uptake), tetracyclines (static; block aminoacyl-tRNA attachment; chelated by Ca2+/Mg2+/iron), tigecycline (the MDR tetracycline — MRSA, VRE). 50S — chloramphenicol (peptidyltransferase; gray baby; aplastic anemia), clindamycin (translocation; anaerobes above the diaphragm; C difficile colitis), macrolides (translocation — the macroslides; atypicals + B pertussis; QT/cholestatic hepatitis/P-450), linezolid (23S rRNA initiation complex; MRSA + VRE; thrombocytopenia + serotonin syndrome). STAGE (the figure's four doors): initiation — aminoglycosides 30S + linezolid 50S; attachment — tetracyclines 30S; peptidyl transfer — chloramphenicol 50S; translocation — macrolides + clindamycin 50S. RULE: 70S vs 80S (bacterial 70S — our 80S is untouched); all static except aminoglycosides (cidal) and linezolid (variable); aminoglycosides need O2 for uptake (no anaerobe activity; synergy with β-lactams instead); tetracyclines starved by divalent cations; clindamycin above the diaphragm vs metronidazole below; polymyxins at the membrane (colistin/polymyxin B — gram ⊝ salvage).",
  },
  mechanisms: [
    {
      id: "translation-stage-doors",
      title: "The figure's four doors: assemble, deliver, weld, slide",
      context: "Reading any protein-synthesis-inhibitor question off the translation figure (book 187)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A protein synthesis inhibitor appears in a stem",
            sublabel: "Input — any of the directory drugs on books 187-189.",
            variant: "input",
          },
          {
            id: "subunit",
            label: "Which subunit door — 30S or 50S?",
            sublabel: "30S: aminoglycosides, tetracyclines, tigecycline · 50S: chloramphenicol, clindamycin, macrolides, linezolid.",
            variant: "process",
          },
          {
            id: "stage",
            label: "Which translation stage does it hit?",
            sublabel: "Initiation (aminoglycosides 30S, linezolid 50S) · aa-tRNA attachment (tetracyclines) · peptidyl transfer (chloramphenicol) · translocation (macrolides, clindamycin).",
            variant: "process",
          },
          {
            id: "effect",
            label: "The block — misreading (aminoglycosides), no delivery (tetracyclines), no weld (chloramphenicol), no slide (macrolides/clindamycin)",
            sublabel: "All static except aminoglycosides (cidal — the misreading is irreversible) and linezolid (variable).",
            variant: "output",
          },
          {
            id: "consequence",
            label: "The clinical phenotype and its escape",
            sublabel: "Resistance: transferases (aminoglycosides), efflux pumps (tetracyclines), acetyltransferase (chloramphenicol), 23S methylation (macrolides), rRNA point mutation (linezolid).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "subunit", label: "30S or 50S" },
          { from: "subunit", to: "stage", label: "pick the stage" },
          { from: "stage", to: "effect", label: "the block" },
          { from: "effect", to: "consequence", label: "express it clinically" },
        ],
      },
    },
    {
      id: "uptake-selectivity-rules",
      title: "The three selectivity rules: 70S, O2-in, and the chelation trap",
      context: "Why these drugs spare us, why aminoglycosides spare anaerobes, and why tetracyclines starve",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A selectivity or failure question — why does the drug not work here?",
            sublabel: "Input — a scenario: anaerobic abscess, milk with the pill, human tissue.",
            variant: "input",
          },
          {
            id: "ribosome",
            label: "70S vs 80S — the bacterial ribosome is 70S (30S + 50S); the human ribosome is 80S, untouched",
            sublabel: "The structural selectivity of the whole class.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Aminoglycosides require O2 for uptake (transport-in) — therefore ineffective against anaerobes",
            sublabel: "The door can be open and the drug still cannot enter; pair aminoglycosides with β-lactams for synergy instead.",
            variant: "process",
          },
          {
            id: "chelation",
            label: "Tetracyclines chelate with divalent cations (Ca2+, Mg2+, iron) — milk, antacids, iron preparations inhibit absorption",
            sublabel: "Do not take tetracyclines with milk, antacids, or iron; doxycycline is fecally eliminated (safe in renal failure).",
            variant: "process",
          },
          {
            id: "consequence",
            label: "The clinical routing — anaerobes get clindamycin (above the diaphragm) or metronidazole (below), never aminoglycosides alone; the human host is never the target",
            sublabel: "Polymyxins add the membrane door for MDR gram ⊝ salvage when the ribosomal doors are exhausted.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "ribosome", label: "the 70S/80S rule" },
          { from: "ribosome", to: "o2", label: "who can enter" },
          { from: "ribosome", to: "chelation", label: "who gets absorbed" },
          { from: "o2", to: "consequence", label: "route around anaerobes" },
          { from: "chelation", to: "consequence", label: "counsel the patient" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ribosome-target-map",
      title: "The ribosome target map — the translation figure, redrawn with every drug door",
      caption:
        "An original KYP redraw of the source's translation figure (book 187, printed entirely in the text layer — 0 rasters): the 70S ribosome (30S base + 50S cap) running the mRNA thread 5´-A-U-G-C-A-U-G-A-U-3´ through its four stages — Initiation (initiator tRNA at the P site), A-site aminoacyl-tRNA binding, peptidyl transferase, and Translocation, with Termination (UGA) — and the drug doors printed at their stages: aminoglycosides (30S) and linezolid (50S, 23S rRNA) at initiation, tetracyclines (30S) at aa-tRNA attachment, chloramphenicol (50S) at the peptidyl transferase, macrolides and clindamycin (50S) at translocation.",
      notice:
        "The source figure is pure text-layer glyphs (the 70S pair, the E/P/A sites, the mRNA bases, the codons) — redrawn here as clean vector panels. The source's own margin mnemonics ('Buy at 30, ccel (sell) at 50' — with its own 'ccel' typo, 'Mean GNATS') are omitted from this visual per the copyright boundary and carried only inside the note's verbatim tables. The -cidal/-static banner and the 70S/80S selectivity rule are printed facts, carried.",
    },
    {
      kind: "table",
      title: "Book 187 — the section intro, the inhibitor lists, and the aminoglycosides card (carried verbatim)",
      intro:
        "The page's printed lists and the first card, as printed — both columns, including the source's own margin mnemonics (with its own 'ccel (sell)' typo for 'cell (sell)', preserved as printed).",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 187)"],
      rows: [
        ["Section intro — selectivity", "Specifically target smaller bacterial ribosome (70S, made of 30S and 50S subunits), leaving human ribosome (80S) unaffected."],
        ["Section intro — cidal/static banner", "All are bacteriostatic, except aminoglycosides (bactericidal) and linezolid (variable)."],
        ["The printed 30S list", "Aminoglycosides · Tetracyclines."],
        ["The printed 50S list", "Chloramphenicol, Clindamycin · Erythromycin (macrolides) · Linezolid."],
        ["Margin note (source)", "“Buy at 30, ccel (sell) at 50.” [the source's own typo 'ccel' for 'cell', preserved as printed]"],
        ["Aminoglycosides — Drugs", "Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin."],
        ["— Margin note (source)", "“Mean” (aminoglycoside) GNATS cannot kill anaerobes."],
        ["— MECHANISM", "Bactericidal; irreversible inhibition of initiation complex through binding of the 30S subunit. Can cause misreading of mRNA. Also block translocation. Require O2 for uptake; therefore ineffective against anaerobes."],
        ["— CLINICAL USE", "Severe gram ⊝ rod infections. Synergistic with β-lactam antibiotics."],
        ["— Clinical note (source)", "Neomycin for bowel surgery."],
        ["— ADVERSE EFFECTS", "Nephrotoxicity, neuromuscular blockade (absolute contraindication with myasthenia gravis), ototoxicity (especially with loop diuretics), teratogenicity."],
        ["— MECHANISM OF RESISTANCE", "Bacterial transferase enzymes inactivate the drug by acetylation, phosphorylation, or adenylation."],
      ],
      caption:
        "The set's two banner rules (70S/80S selectivity; all static except aminoglycosides and linezolid) and the first card: the cidal door — 30S initiation-complex inhibition with misreading, the O2-uptake limit, and the myasthenia/loop-diuretic toxicity pair.",
    },
    {
      kind: "table",
      title: "Book 188 — the tetracyclines, tigecycline, chloramphenicol, and clindamycin cards (carried verbatim)",
      intro:
        "The page's four cards, as printed — including the source's own 'Teratocyclines' mnemonic in the adverse-effects row.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 188)"],
      rows: [
        ["Tetracyclines — Drugs", "Tetracycline, doxycycline, minocycline."],
        ["— MECHANISM", "Bacteriostatic; bind to 30S and prevent attachment of aminoacyl-tRNA. Limited CNS penetration. Doxycycline is fecally eliminated and can be used in patients with renal failure. Do not take tetracyclines with milk (Ca2+), antacids (eg, Ca2+ or Mg2+), or iron-containing preparations because divalent cations inhibit drugs’ absorption in the gut."],
        ["— CLINICAL USE", "Borrelia burgdorferi, M pneumoniae. Drugs’ ability to accumulate intracellularly makes them very effective against Rickettsia and Chlamydia. Also used to treat acne. Doxycycline effective against community-acquired MRSA."],
        ["— ADVERSE EFFECTS", "GI distress, discoloration of teeth and inhibition of bone growth in children, photosensitivity. “Teratocyclines” are teratogenic; generally avoided in pregnancy and in children (except doxycycline)."],
        ["— MECHANISM OF RESISTANCE", "↓ uptake or ↑ efflux out of bacterial cells by plasmid-encoded transport pumps."],
        ["Tigecycline — MECHANISM", "Tetracycline derivative. Binds to 30S, inhibiting protein synthesis. Generally bacteriostatic."],
        ["— CLINICAL USE", "Broad-spectrum anaerobic, gram ⊝, and gram ⊕ coverage. Multidrug-resistant organisms (eg, MRSA, VRE)."],
        ["— ADVERSE EFFECTS", "Nausea, vomiting."],
        ["Chloramphenicol — MECHANISM", "Blocks peptidyltransferase at 50S ribosomal subunit. Bacteriostatic."],
        ["— CLINICAL USE", "Meningitis (Haemophilus influenzae, Neisseria meningitidis, Streptococcus pneumoniae) and rickettsial diseases (eg, Rocky Mountain spotted fever [Rickettsia rickettsii]). Limited use due to toxicity but often still used in developing countries because of low cost."],
        ["— ADVERSE EFFECTS", "Anemia (dose dependent), aplastic anemia (dose independent), gray baby syndrome (in premature infants because they lack liver UDP-glucuronosyltransferase)."],
        ["— MECHANISM OF RESISTANCE", "Plasmid-encoded acetyltransferase inactivates the drug."],
        ["Clindamycin — MECHANISM", "Blocks peptide transfer (translocation) at 50S ribosomal subunit. Bacteriostatic."],
        ["— CLINICAL USE", "Anaerobic infections (eg, Bacteroides spp., C perfringens) in aspiration pneumonia, lung abscesses, and oral infections. Also effective against invasive group A streptococcal infection. Treats anaerobic infections above the diaphragm vs metronidazole (anaerobic infections below diaphragm)."],
        ["— ADVERSE EFFECTS", "Pseudomembranous colitis (C difficile overgrowth), fever, diarrhea."],
      ],
      caption:
        "The 30S attachment door (tetracyclines + the MDR tigecycline), the 50S weld door (chloramphenicol — with gray baby syndrome and the dose-dependent/dose-independent anemia pair), and the 50S slide door's first occupant (clindamycin — the above-diaphragm anaerobe drug that invites C difficile).",
    },
    {
      kind: "table",
      title: "Book 189 — the linezolid, macrolides, and polymyxins cards (carried verbatim)",
      intro:
        "The set's last three cards, as printed — including the source's own 'macroslides' and 'MACRO' mnemonics within the printed field text.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 189)"],
      rows: [
        ["Linezolid — MECHANISM", "Inhibits protein synthesis by binding to the 23S rRNA of the 50S ribosomal subunit and preventing formation of the initiation complex."],
        ["— CLINICAL USE", "Gram ⊕ species including MRSA and VRE."],
        ["— ADVERSE EFFECTS", "Myelosuppression (especially thrombocytopenia), peripheral neuropathy, serotonin syndrome (due to partial MAO inhibition)."],
        ["— MECHANISM OF RESISTANCE", "Point mutation of ribosomal RNA."],
        ["Macrolides — Drugs", "Azithromycin, clarithromycin, erythromycin."],
        ["— MECHANISM", "Inhibit protein synthesis by blocking translocation (“macroslides”); bind to the 50S ribosomal subunit. Bacteriostatic."],
        ["— CLINICAL USE", "Atypical pneumonias (Mycoplasma, Chlamydia, Legionella), STIs (Chlamydia), gram ⊕ cocci (streptococcal infections in patients allergic to penicillin), and B pertussis."],
        ["— ADVERSE EFFECTS", "MACRO: Gastrointestinal Motility issues, Arrhythmia caused by prolonged QT interval, acute Cholestatic hepatitis, Rash, eOsinophilia. Increases serum concentration of theophylline, oral anticoagulants. Clarithromycin and erythromycin inhibit cytochrome P-450."],
        ["— MECHANISM OF RESISTANCE", "Methylation of 23S rRNA-binding site prevents binding of drug."],
        ["Polymyxins — Drugs", "Colistin (polymyxin E), polymyxin B."],
        ["— MECHANISM", "Cation polypeptides that bind to phospholipids on cell membrane of gram ⊝ bacteria. Disrupt cell membrane integrity → leakage of cellular components → cell death."],
        ["— CLINICAL USE", "Salvage therapy for multidrug-resistant gram ⊝ bacteria (eg, P aeruginosa, E coli, K pneumoniae). Polymyxin B is a component of a triple antibiotic ointment used for superficial skin infections."],
        ["— ADVERSE EFFECTS", "Nephrotoxicity, neurotoxicity (eg, slurred speech, weakness, paresthesias), respiratory failure."],
      ],
      caption:
        "The 50S doors complete: linezolid (the 23S initiation-complex block — MRSA/VRE with the serotonin-syndrome twist via partial MAO inhibition) and the macrolides (the translocation slide with the MACRO toxicity set and P-450 inhibition). The polymyxins close the page-set at the membrane door — colistin/polymyxin B, the MDR gram ⊝ salvage pair.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these cards teach",
      body:
        "Rule 1 — THE STAGE NAMES THE DRUG: when a stem describes a translation stage (initiation misreading, aa-tRNA attachment blocked, peptidyl transfer blocked, translocation blocked), the drug follows mechanically — aminoglycosides/linezolid, tetracyclines, chloramphenicol, macrolides/clindamycin. Rule 2 — THE TWO CIDAL EXCEPTIONS: 'all bacteriostatic except...' is itself a tested line — aminoglycosides (the irreversible misreading) and linezolid (variable). Rule 3 — THE THREE PRACTICAL TRAPS: aminoglycosides never work on anaerobes (O2-dependent uptake — pair them with β-lactams instead); tetracyclines never work with milk, antacids, or iron (divalent-cation chelation); and clindamycin treats above the diaphragm while metronidazole treats below it — with clindamycin's own adverse effect (C difficile colitis) being the classic consequence of its broad anaerobic reach.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A premature newborn in a resource-limited setting is treated for bacterial meningitis with a low-cost 50S inhibitor; days later the infant develops abdominal distension, poor feeding, and a dusky gray cyanosis, progressing to cardiovascular collapse.",
        discriminator: "Premature infants lack liver UDP-glucuronosyltransferase — the drug accumulates because it cannot be conjugated",
        concept: "Gray baby syndrome — chloramphenicol",
        answer:
          "Chloramphenicol blocks peptidyltransferase at the 50S subunit and is still used in developing countries because of low cost — but premature infants lack the liver UDP-glucuronosyltransferase that conjugates it, so the drug accumulates: gray baby syndrome. The card's own adverse-effect line pairs it with dose-dependent anemia and dose-independent aplastic anemia, and its resistance is a plasmid-encoded acetyltransferase.",
      },
      {
        stem: "A 24-year-old on oral doxycycline for acne takes her pill with a glass of milk and an antacid; her acne fails to improve and a repeat history reveals the pattern.",
        discriminator: "Divalent cations (Ca2+, Mg2+) chelate tetracyclines in the gut — absorption inhibited",
        concept: "The chelation trap — tetracyclines",
        answer:
          "The card's own counseling line: do not take tetracyclines with milk (Ca2+), antacids (Ca2+ or Mg2+), or iron-containing preparations, because divalent cations inhibit the drugs' absorption in the gut. Doxycycline's redeeming feature is fecal elimination — it can be used in patients with renal failure — and it covers community-acquired MRSA, Borrelia burgdorferi, M pneumoniae, Rickettsia, and Chlamydia (the intracellular accumulators).",
      },
      {
        stem: "A 58-year-old with an aspiration pneumonia and lung abscess (Bacteroides on culture) is treated with the appropriate 50S drug; two weeks later she develops profuse watery diarrhea, fever, and colonic pseudomembranes on endoscopy.",
        discriminator: "Anaerobe coverage above the diaphragm — clindamycin; its signature adverse effect is C difficile overgrowth",
        concept: "The above/below-diaphragm split — clindamycin",
        answer:
          "Clindamycin blocks translocation at the 50S and treats anaerobic infections above the diaphragm (aspiration pneumonia, lung abscesses, oral infections — plus invasive group A strep), while metronidazole treats below the diaphragm. The broad anaerobic reach is exactly what invites its printed adverse effect: pseudomembranous colitis (C difficile overgrowth), with fever and diarrhea.",
      },
    ],
    traps: [
      {
        a: "Aminoglycosides (30S)",
        b: "Tetracyclines (30S)",
        whyConfused: "Both are the '30S inhibitors' of the printed list",
        keyDifference: "Aminoglycosides are BACTERICIDAL (irreversible initiation-complex inhibition + misreading, O2-dependent uptake); tetracyclines are static (block aminoacyl-tRNA attachment, chelated by divalent cations)",
        clue: "Severe gram ⊝ rod infection with β-lactam synergy → aminoglycoside; intracellular atypicals (Rickettsia, Chlamydia) or acne → tetracycline",
      },
      {
        a: "Chloramphenicol (50S)",
        b: "Macrolides / clindamycin (50S)",
        whyConfused: "Both sit on the 50S side of the list",
        keyDifference: "Chloramphenicol blocks the peptidyltransferase (the weld); macrolides and clindamycin block translocation (the slide) — 'macroslides' is the source's own gloss",
        clue: "Meningitis/rickettsial + gray baby or aplastic anemia → chloramphenicol; atypical pneumonia, B pertussis, streptococci in the penicillin-allergic, or anaerobes above the diaphragm → macrolide/clindamycin",
      },
      {
        a: "Linezolid (variable)",
        b: "Everything else in the set",
        whyConfused: "The -cidal/-static banner names two exceptions and the second one is often forgotten",
        keyDifference: "All are bacteriostatic except aminoglycosides (bactericidal) and linezolid (variable) — the banner's own two exceptions",
        clue: "MRSA + VRE with a serotonin-syndrome or thrombocytopenia history → linezolid (23S rRNA initiation-complex block)",
      },
    ],
    pivots: [
      {
        lookAlike: "Clindamycin vs metronidazole (the two anaerobe drugs)",
        differentiator: "The diaphragm — clindamycin treats anaerobes above it, metronidazole below it",
        correctPath: "Aspiration pneumonia, lung abscess, oral/dental infections → clindamycin; intra-abdominal and pelvic anaerobes → metronidazole (and watch for clindamycin's C difficile colitis)",
      },
      {
        lookAlike: "Azithromycin vs clarithromycin/erythromycin (the macrolide trio)",
        differentiator: "Cytochrome P-450 inhibition — clarithromycin and erythromycin inhibit it; azithromycin largely spares it",
        correctPath: "A patient on theophylline or oral anticoagulants with a QT-prolongation risk → prefer azithromycin; streptococcal infection in the penicillin-allergic patient or B pertussis → any macrolide, but watch the QT and the cholestatic hepatitis",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man with myasthenia gravis is admitted with severe Pseudomonas aeruginosa bacteremia from an infected urinary catheter. The team starts an aminoglycoside plus an antipseudomonal β-lactam. On hospital day 3, he reports new difficulty chewing and swallowing, worsening ptosis, and slurred speech; hearing testing shows a high-frequency threshold shift. He is also on furosemide for volume overload.",
      question: "Which pair of mechanisms best explains the new findings, and what is the appropriate response?",
      options: [
        {
          label: "Aminoglycoside neuromuscular blockade + ototoxicity",
          text: "The aminoglycoside blocks presynaptic calcium-dependent acetylcholine release at the neuromuscular junction and damages cochlear outer hair cells — both dose- and drug-class effects, compounded by the loop diuretic.",
          correct: true,
          why: "Correct. The card's own adverse-effect line: nephrotoxicity, neuromuscular blockade (absolute contraindication with myasthenia gravis), ototoxicity (especially with loop diuretics). Myasthenia gravis is the printed absolute contraindication — the aminoglycoside worsens the weakness by blocking transmitter release; the loop diuretic stacks on the ototoxicity. The response is to stop the aminoglycoside, hold the loop diuretic where possible, and continue the antipseudomonal β-lactam (the synergy partner) ± switch to a non-aminoglycoside agent.",
        },
        {
          label: "Myasthenic crisis from infection alone",
          text: "Worsening of the underlying autoimmune disease due to the physiological stress of bacteremia.",
          why: "Wrong, and tempting because myasthenia does worsen with physiologic stress. But the temporal lock to aminoglycoside day 3 plus the high-frequency hearing shift points to the drug: aminoglycosides are the classic myasthenia-aggravating class (presynaptic blockade), and the printed card names myasthenia as the absolute contraindication.",
        },
        {
          label: "β-lactam neurotoxicity from the antipseudomonal agent",
          text: "Seizure-risk CNS toxicity of high-dose carbapenem/cephalosporin therapy presenting as bulbar weakness.",
          why: "Wrong. The β-lactam's printed CNS risk is seizures at high plasma levels (the M32 carbapenem card) — not fluctuating bulbar weakness with a hearing threshold shift; and the β-lactam is the synergy partner here, not the culprit.",
        },
        {
          label: "Aminoglycoside nephrotoxicity presenting as weakness",
          text: "Acute kidney injury with electrolyte disturbance causing generalized fatigue and dysarthria.",
          why: "Partly-true-but-wrong: aminoglycoside nephrotoxicity is real and on the same card — but it does not cause ptosis, chewing/swallowing difficulty, or a high-frequency hearing shift. The pattern is presynaptic neuromuscular blockade plus cochlear ototoxicity, not renal failure.",
        },
        {
          label: "Serotonin syndrome from linezolid",
          text: "Hyperadrenergic neuromuscular excitation from the oxazolidinone's partial MAO inhibition.",
          why: "Wrong. Linezolid is on this set's cards and does cause serotonin syndrome (partial MAO inhibition) — a true-but-irrelevant distractor: no serotonergic drug is involved here, and the findings are cholinergic-junction weakness and hearing loss, not clonus/hyperthermia.",
        },
      ],
      reasoning:
        "The findings cluster exactly on the aminoglycoside card's two signature lines: neuromuscular blockade (the absolute contraindication with myasthenia gravis — presynaptic acetylcholine-release blockade worsening the bulbar weakness and ptosis) and ototoxicity (compounded by the loop diuretic, the printed 'especially with loop diuretics' pair). The O2-uptake rule explains why the drug was paired with a β-lactam for synergy in the first place; the response is to stop the aminoglycoside, protect the kidney and hearing, and lean on the antipseudomonal β-lactam.",
    },
  },
  mnemonics: [
    {
      code: "ASSEMBLE · DELIVER · WELD · SLIDE",
      meaning: "The translation figure's four stages as the drug doors: ASSEMBLE (initiation — aminoglycosides at 30S with misreading; linezolid at the 50S 23S rRNA), DELIVER (aminoacyl-tRNA attachment — tetracyclines at 30S), WELD (peptidyl transferase — chloramphenicol at 50S), SLIDE (translocation — macrolides and clindamycin at 50S).",
      memorizes: "Which drug blocks which translation stage, and at which subunit",
      whenToUse: "Any mechanism question pairing a protein-synthesis inhibitor with a translation stage",
      clinical: "Name the stage in the stem and the drug follows: misreading + cidal → aminoglycoside; no aa-tRNA delivery → tetracycline; no peptide bond → chloramphenicol; no slide → macrolide/clindamycin.",
    },
    {
      code: "O2 OR NO GO",
      meaning: "Aminoglycosides require O2 for uptake (the transport-in step) — in anaerobic territory the door is open but the drug cannot enter: no go.",
      memorizes: "Why aminoglycosides are ineffective against anaerobes",
      whenToUse: "Anaerobic abscess/infection questions that tempt an aminoglycoside",
      clinical: "For anaerobes use clindamycin (above the diaphragm) or metronidazole (below it); for severe gram ⊝ rods, pair the aminoglycoside with a β-lactam for synergy — never send it alone into an anaerobic pocket.",
    },
    {
      code: "CHELATE AND STARVE",
      meaning: "Divalent cations — Ca2+ (milk), Ca2+/Mg2+ (antacids), iron preparations — chelate tetracyclines in the gut lumen and starve the patient of the dose.",
      memorizes: "The tetracycline absorption trap",
      whenToUse: "Counseling and drug-interaction questions about oral tetracyclines",
      clinical: "Separate the tetracycline from dairy, antacids, and iron by hours; doxycycline remains usable in renal failure because it leaves fecally.",
    },
    {
      code: "THE UNGLUCURONIDATED BABY",
      meaning: "Premature infants lack liver UDP-glucuronosyltransferase — chloramphenicol cannot be conjugated, accumulates, and the baby turns gray: gray baby syndrome.",
      memorizes: "The chloramphenicol neonatal toxicity and its enzymatic basis",
      whenToUse: "Neonate + chloramphenicol + gray collapse stems",
      clinical: "The same enzyme family explains the drug's other printed toxicities (dose-dependent anemia, dose-independent aplastic anemia) — and the reason it survives only where cost forces its use.",
    },
  ],
  rapidReview: {
    s30: [
      "Banner rules: protein synthesis inhibitors target the bacterial 70S ribosome (30S + 50S), leaving the human 80S untouched; all are bacteriostatic EXCEPT aminoglycosides (bactericidal) and linezolid (variable)",
      "30S doors: aminoglycosides (gentamicin, neomycin, amikacin, tobramycin, streptomycin — irreversible initiation-complex inhibition, misreading, O2-dependent uptake) · tetracyclines (tetracycline, doxycycline, minocycline — block aminoacyl-tRNA attachment; chelated by Ca2+/Mg2+/iron) · tigecycline (the MDR tetracycline — MRSA, VRE)",
      "50S doors: chloramphenicol (peptidyltransferase; gray baby, aplastic anemia) · clindamycin (translocation; anaerobes above the diaphragm; C difficile colitis) · macrolides (azithromycin, clarithromycin, erythromycin — translocation, the macroslides; atypicals, B pertussis; QT, cholestatic hepatitis, P-450) · linezolid (23S rRNA initiation complex; MRSA + VRE; thrombocytopenia, serotonin syndrome)",
      "Polymyxins: colistin (polymyxin E) + polymyxin B — cation polypeptides binding gram ⊝ membrane phospholipids; salvage for MDR gram ⊝ (P aeruginosa, E coli, K pneumoniae); polymyxin B in triple antibiotic ointment; nephro/neurotoxicity",
      "Diaphragm rule: clindamycin treats anaerobes ABOVE (aspiration pneumonia, lung abscess, oral) vs metronidazole BELOW (the M31 door ③ pair)",
    ],
    m3: [
      "Aminoglycosides: bactericidal; bind 30S initiation complex irreversibly, cause misreading, block translocation; require O2 for uptake (ineffective against anaerobes); severe gram ⊝ rods + β-lactam synergy; neomycin for bowel surgery; nephrotoxicity, neuromuscular blockade (absolute contraindication with myasthenia gravis), ototoxicity (especially with loop diuretics), teratogenicity; resistance by acetylation/phosphorylation/adenylation",
      "Tetracyclines: static; bind 30S, prevent aa-tRNA attachment; limited CNS penetration; doxycycline fecally eliminated (renal failure OK); intracellular accumulation → Rickettsia, Chlamydia; Borrelia burgdorferi, M pneumoniae, acne, community-acquired MRSA (doxycycline); GI distress, tooth discoloration, bone-growth inhibition in children, photosensitivity, teratogenicity; resistance by efflux pumps",
      "Chloramphenicol: blocks peptidyltransferase at 50S; meningitis (H flu, N meningitidis, S pneumoniae) + RMSF; anemia (dose-dependent), aplastic anemia (dose-independent), gray baby syndrome (premature infants lack liver UDP-glucuronosyltransferase); acetyltransferase resistance",
      "Clindamycin + linezolid: clindamycin blocks peptide transfer at 50S — Bacteroides, C perfringens, aspiration pneumonia, oral infections, invasive group A strep; pseudomembranous colitis (C difficile). Linezolid binds 23S rRNA of the 50S, preventing the initiation complex — gram ⊕ including MRSA and VRE; myelosuppression (thrombocytopenia), peripheral neuropathy, serotonin syndrome (partial MAO inhibition); rRNA point-mutation resistance",
      "Macrolides: block translocation at 50S (macroslides); atypical pneumonias (Mycoplasma, Chlamydia, Legionella), STIs (Chlamydia), streptococci in penicillin-allergic patients, B pertussis; MACRO set (GI Motility, QT Arrhythmia, Cholestatic hepatitis, Rash, eOsinophilia); ↑ theophylline/oral anticoagulants; clarithromycin + erythromycin inhibit cytochrome P-450; 23S methylation resistance",
    ],
    m10: [
      "Census: p209/p210/p211 are PURE TEXT — 0 rasters each; the entire translation figure prints in the text layer (the 70S pair, E/P/A sites, the mRNA thread 5´-A-U-G-C-A-U-G-A-U-3´, the UGA stop, and the five drug-door labels)",
      "The source's own margin typo 'ccel (sell)' for 'cell (sell)' prints on book 187 (the Buy-at-30 mnemonic line, raw line 27); the banner typo MICROCIOLOGY—ANTIMICROCIALS prints on all three pages; 'SEC TION II' split-prints on all three",
      "The figure's glyphs emit in non-reading order in the raw layer: the 70S/30S/50S labels first (29-38), then Initiation (41-63), then the Elongation/A-site panels (69-101) with the drug labels interleaved (Aminoglycosides 138-141 and the drug-door labels at 29/35/87/95/135 inside the figure block)",
      "The aminoglycosides card emits AFTER the figure on book 187 (raw 138-161): drugs, the 'Mean GNATS' margin, then MECHANISM/CLINICAL USE (with 'Neomycin for bowel surgery' + the margin), ADVERSE EFFECTS, RESISTANCE — the page's physical-order convention documented in the manifest",
      "Polymyxins mechanism carries the C1-control-prefixed arrows ('\x8e→' — the normalizer strips them, as on M32's carbapenems line); the MACRO mnemonic and 'macroslides' print INSIDE the field text (not the margin column) on book 189",
    ],
  },
  recall: [
    {
      q: "Walk the set's banner rules, then the four translation-stage doors with their drugs.",
      a: "BANNER: protein synthesis inhibitors specifically target the smaller bacterial ribosome (70S, made of 30S and 50S subunits), leaving the human ribosome (80S) unaffected; all are bacteriostatic except aminoglycosides (bactericidal) and linezolid (variable). DOORS: INITIATION — aminoglycosides (30S: irreversible initiation-complex inhibition, misreading of mRNA, also block translocation; O2-required uptake) and linezolid (50S: binds 23S rRNA, prevents initiation-complex formation). ATTACHMENT — tetracyclines (30S: prevent aminoacyl-tRNA attachment) and tigecycline (the tetracycline derivative for MDR organisms — MRSA, VRE). PEPTIDYL TRANSFER — chloramphenicol (50S: blocks peptidyltransferase). TRANSLOCATION — macrolides and clindamycin (50S: block the slide). MEMBRANE (the non-ribosomal annex) — polymyxins (colistin, polymyxin B: cation polypeptides binding gram ⊝ membrane phospholipids → leakage → death).",
    },
    {
      q: "Carry the aminoglycosides card verbatim — all fields plus its margin notes.",
      a: "DRUGS: Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin. MECHANISM: Bactericidal; irreversible inhibition of initiation complex through binding of the 30S subunit. Can cause misreading of mRNA. Also block translocation. Require O2 for uptake; therefore ineffective against anaerobes. CLINICAL USE: Severe gram ⊝ rod infections. Synergistic with β-lactam antibiotics. [Margin: Neomycin for bowel surgery. 'Mean' (aminoglycoside) GNATS cannot kill anaerobes.] ADVERSE EFFECTS: Nephrotoxicity, neuromuscular blockade (absolute contraindication with myasthenia gravis), ototoxicity (especially with loop diuretics), teratogenicity. RESISTANCE: Bacterial transferase enzymes inactivate the drug by acetylation, phosphorylation, or adenylation.",
    },
    {
      q: "Separate the tetracyclines from chloramphenicol — mechanism, use, toxicity, resistance.",
      a: "TETRACYCLINES: bacteriostatic; bind 30S and prevent attachment of aminoacyl-tRNA; limited CNS penetration; doxycycline fecally eliminated (usable in renal failure); no milk (Ca2+), antacids (Ca2+/Mg2+), or iron — divalent cations inhibit absorption; clinical use: Borrelia burgdorferi, M pneumoniae, intracellular accumulation → Rickettsia and Chlamydia, acne, community-acquired MRSA (doxycycline); adverse: GI distress, tooth discoloration and bone-growth inhibition in children, photosensitivity, teratogenicity (avoided in pregnancy and children except doxycycline); resistance: ↓ uptake or ↑ efflux via plasmid-encoded transport pumps. CHLORAMPHENICOL: blocks peptidyltransferase at the 50S; bacteriostatic; clinical use: meningitis (H influenzae, N meningitidis, S pneumoniae) and rickettsial diseases (RMSF) — limited use due to toxicity, retained in developing countries for low cost; adverse: anemia (dose-dependent), aplastic anemia (dose-independent), gray baby syndrome (premature infants lack liver UDP-glucuronosyltransferase); resistance: plasmid-encoded acetyltransferase.",
    },
    {
      q: "Give the linezolid, macrolides, and polymyxins cards — mechanism through resistance.",
      a: "LINEZOLID: binds the 23S rRNA of the 50S ribosomal subunit, preventing formation of the initiation complex; gram ⊕ species including MRSA and VRE; adverse: myelosuppression (especially thrombocytopenia), peripheral neuropathy, serotonin syndrome (partial MAO inhibition); resistance: point mutation of ribosomal RNA. MACROLIDES (azithromycin, clarithromycin, erythromycin): block translocation ('macroslides') at the 50S; bacteriostatic; atypical pneumonias (Mycoplasma, Chlamydia, Legionella), STIs (Chlamydia), streptococcal infections in penicillin-allergic patients, B pertussis; adverse: MACRO — GI Motility issues, QT-prolonged Arrhythmia, acute Cholestatic hepatitis, Rash, eOsinophilia; ↑ theophylline and oral anticoagulants; clarithromycin and erythromycin inhibit cytochrome P-450; resistance: methylation of the 23S rRNA-binding site. POLYMYXINS (colistin [polymyxin E], polymyxin B): cation polypeptides binding phospholipids on the gram ⊝ cell membrane — disrupt membrane integrity → leakage of cellular components → cell death; salvage therapy for MDR gram ⊝ (P aeruginosa, E coli, K pneumoniae); polymyxin B in triple antibiotic ointment for superficial skin infections; adverse: nephrotoxicity, neurotoxicity (slurred speech, weakness, paresthesias), respiratory failure.",
    },
    {
      q: "State the three practical rules (O2, chelation, diaphragm) with their clinical consequences.",
      a: "O2 RULE: aminoglycosides require O2 for uptake — ineffective against anaerobes; pair with β-lactams for severe gram ⊝ rods instead (synergy), and remember the toxicity pair: neuromuscular blockade (absolute contraindication with myasthenia gravis) and ototoxicity compounded by loop diuretics. CHELATION RULE: divalent cations (Ca2+ in milk, Ca2+/Mg2+ antacids, iron preparations) inhibit tetracycline absorption in the gut — separate the doses; doxycycline remains the renal-failure-safe, community-MRSA-covering member because it leaves fecally. DIAPHRAGM RULE: clindamycin treats anaerobes above (aspiration pneumonia, lung abscess, oral infections, invasive group A strep) while metronidazole treats below — and clindamycin's broad anaerobic reach is what invites pseudomembranous colitis (C difficile overgrowth), its printed signature adverse effect.",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31's doors ⑥⑦ are this page-set's home: the 50S cap (chloramphenicol, clindamycin, linezolid, macrolides, streptogramins) and the 30S base (aminoglycosides, glycylcycline, tetracyclines) — M33 fills both rosters in clinical form and adds the membrane annex (polymyxins, door ②).",
    },
    {
      title: "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
      topicId: "cell-wall-inhibitors",
      note: "M32's door ⑨ drugs are the synergy partners named on the aminoglycoside card (β-lactam synergy for severe gram ⊝ rods); the cephalosporin card's ↑-aminoglycoside-nephrotoxicity line crosses forward into this set's nephrotoxicity discussion.",
    },
    {
      title: "DNA, RNA & Folate Pathway Inhibitors",
      topicId: "dna-rna-folate-inhibitors",
      note: "M34 continues the directory at doors ①③④⑤ (the folate pair, fluoroquinolones, metronidazole below the diaphragm — the other half of this set's diaphragm rule).",
    },
    {
      title: "Bacterial Genetics: Transformation, Conjugation, Transduction",
      topicId: "bacterial-genetics",
      note: "This set's resistance stories are M7's gene-flow outcomes in pharmacy form: the plasmid-encoded efflux pumps (tetracyclines), the acetyltransferase plasmid (chloramphenicol), the 23S methylase (macrolides), and the rRNA point mutations (linezolid).",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Translation)",
      connection:
        "The figure is the biochemistry chapter's translation machinery in pharmacologic cross-section: initiator tRNA at the P site, aminoacyl-tRNA at the A site, peptidyl transferase catalyzing the peptide bond, and translocation — each stage named there is a drug door here.",
    },
    {
      subject: "Pharmacology (Aminoglycoside Toxicity)",
      connection:
        "The neuromuscular blockade (presynaptic acetylcholine-release inhibition) and the ototoxicity (hair-cell injury compounded by loop diuretics) bridge to the Pharmacology chapter's adverse-effect tables and the myasthenia-gravis contraindication line.",
    },
    {
      subject: "Pediatrics (Gray Baby Syndrome)",
      connection:
        "The premature-infant UDP-glucuronosyltransferase deficiency is the pediatrics/biochemistry link (neonatal Phase II conjugation) — the same enzyme family that physiologic jaundice and kernicterus questions turn on.",
    },
    {
      subject: "Infectious Disease (Atypical Coverage)",
      connection:
        "The intracellular accumulators (Rickettsia, Chlamydia) and the atypical pneumonias (Mycoplasma, Legionella) route through this set's tetracycline and macrolide doors — the empiric-therapy side of the bugs-by-system matrices from M29-M30.",
    },
  ],
};
