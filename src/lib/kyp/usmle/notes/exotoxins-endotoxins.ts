import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 8) — final Basic
// Bacteriology topic.
// Source: First Aid 2026, Part 1 pdf 151-153 / book 129-131
// (Main features of exotoxins and endotoxins + the exotoxin/endotoxin
//  mechanism diagram + the Bacteria-with-exotoxins roster [with the AB-toxin
//  footnote] + the endotoxin cascade)

export const exotoxinsEndotoxins: KypUsMLENote = {
  id: "exotoxins-endotoxins",
  title: "Exotoxins vs Endotoxins",
  subtitle:
    "The toxin axis and the cascade to shock. EXOTOXINS: from certain species of gram ⊕ and gram ⊝ bacteria; actively secreted from the cell; polypeptide chemistry; genes on plasmid or bacteriophage; high toxicity (fatal dose on the order of 1 µg); various clinical effects and modes of action; induce high-titer antibodies (antitoxins); toxoids used as vaccines; destroyed rapidly at 60 °C (except staphylococcal enterotoxin, E coli heat-stable toxin, and B cereus emetic toxin); typical diseases tetanus, botulism, diphtheria, cholera. ENDOTOXINS: the outer cell membrane of most gram ⊝ bacteria (LPS — O-antigen + core polysaccharide + lipid A, the toxic component; Neisseria have lipooligosaccharide); not secreted — released upon cell lysis or by living cells by blebs detaching from the outer surface membrane; lipid A chemistry; genes on the bacterial chromosome; low toxicity (fatal dose on the order of hundreds of micrograms); clinical effects fever, shock (hypotension), DIC; mode of action induces TNF, IL-1, and IL-6; poorly antigenic; no toxoids and no vaccine available; stable at 100 °C for 1 hr; typical diseases meningococcemia and sepsis by gram ⊝ rods. The exotoxin roster by mechanism group: protein synthesis inhibitors (diphtheria toxin and Pseudomonas Exotoxin A — EF-2 ADP-ribosylation; Shiga toxin — 60S ribosome inactivation in Shigella and EHEC O157:H7), fluid-secretion increasers (ETEC LT/ST, anthrax toxin, cholera toxin, pertussis toxin — the cyclase set), phagocytosis inhibitors (pertussis), neurotransmitter-release inhibitors (tetanospasmin and botulinum toxin — SNARE proteases); the membrane lysers (C perfringens alpha toxin; streptolysin O) and the superantigens (S aureus TSST-1, S pyogenes erythrogenic exotoxin A — cross-linking the β region of the TCR to MHC class II outside the antigen binding site).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — exotoxins vs endotoxins: the 11-row comparison axis (source, secretion, chemistry, genes, toxicity, effects, mode, antigenicity, vaccines, heat stability, diseases); the exotoxin roster by mechanism group (protein synthesis / fluid secretion / phagocytosis / neurotransmitter release; lysers; superantigens); the endotoxin cascade (TLR4/CD14, complement, tissue factor) to fever, shock, and DIC",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 129–131 (Main features of exotoxins and endotoxins; Bacteria with exotoxins; Endotoxin)",
  tags: [
    "exotoxins",
    "endotoxins",
    "toxin axis",
    "LPS",
    "lipid A",
    "O-antigen",
    "core polysaccharide",
    "lipooligosaccharide",
    "Neisseria",
    "gram negative",
    "outer cell membrane",
    "polypeptide",
    "plasmid or bacteriophage",
    "antitoxins",
    "toxoids",
    "heat stability",
    "staphylococcal enterotoxin",
    "E coli heat-stable toxin",
    "B cereus emetic toxin",
    "tetanus",
    "botulism",
    "diphtheria",
    "cholera",
    "meningococcemia",
    "sepsis",
    "TNF",
    "IL-1",
    "IL-6",
    "DIC",
    "shock",
    "hypotension",
    "macrophage activation",
    "TLR4",
    "CD14",
    "complement activation",
    "tissue factor activation",
    "diphtheria toxin",
    "Exotoxin A",
    "EF-2",
    "ADP-ribosylation",
    "Shiga toxin",
    "60S ribosome",
    "HUS",
    "EHEC",
    "O157:H7",
    "heat-labile toxin",
    "LT",
    "heat-stable toxin",
    "ST",
    "adenylate cyclase",
    "cAMP",
    "guanylate cyclase",
    "cGMP",
    "anthrax toxin",
    "black eschar",
    "cholera toxin",
    "Gs",
    "rice-water diarrhea",
    "pertussis toxin",
    "Gi",
    "whooping cough",
    "tetanospasmin",
    "botulinum toxin",
    "SNARE",
    "spastic paralysis",
    "flaccid paralysis",
    "infant botulism",
    "alpha toxin",
    "phospholipase",
    "lecithinase",
    "gas gangrene",
    "double zone hemolysis",
    "streptolysin O",
    "ASO",
    "superantigen",
    "TSST-1",
    "erythrogenic exotoxin A",
    "toxic shock syndrome",
    "scarlet fever",
    "scalded skin syndrome",
    "AB toxin",
    "ADP ribosyltransferase",
  ],
  core: {
    what: "EXOTOXINS: source — certain species of gram ⊕ and gram ⊝ bacteria; secreted from cell — yes (actively secreted); chemistry — polypeptide; location of genes — plasmid or bacteriophage; toxicity — high (fatal dose on the order of 1 µg); clinical effects — various; mode of action — various; antigenicity — induces high-titer antibodies called antitoxins; vaccines — toxoids used as vaccines; heat stability — destroyed rapidly at 60 °C (except staphylococcal enterotoxin, E coli heat-stable toxin, and B cereus emetic toxin); typical diseases — tetanus, botulism, diphtheria, cholera. ENDOTOXINS: source — outer cell membrane of most gram ⊝ bacteria; secreted from cell — no (released upon cell lysis or by living cells by blebs detaching from the outer surface membrane); chemistry — lipid A component of LPS (O-antigen + core polysaccharide + lipid A — the toxic component; Neisseria have lipooligosaccharide); location of genes — bacterial chromosome; toxicity — low (fatal dose on the order of hundreds of micrograms); clinical effects — fever, shock (hypotension), DIC; mode of action — induces TNF, IL-1, and IL-6; antigenicity — poorly antigenic; vaccines — no toxoids formed and no vaccine available; heat stability — stable at 100 °C for 1 hr; typical diseases — meningococcemia; sepsis by gram ⊝ rods. THE THREE MAIN EFFECTS of endotoxin: macrophage activation (TLR4/CD14), complement activation, and tissue factor activation.",
    why: "This page is the chapter's payoff table — the distinction that organizes every toxin question in microbiology and pharmacology. The axis runs on six discriminations: secretion (exotoxins are actively secreted polypeptides from plasmid/phage genes; endotoxin is not secreted at all — it is a structural lipid A, shed on lysis or in blebs, from a chromosomal gene that can never become a toxoid vaccine); toxicity (exotoxins are the most potent biologicals per microgram, and they invite antitoxins; endotoxin's low potency per dose still kills by amplification — the cascade); mode (exotoxins act one mechanism at a time; lipid A acts through exactly one: inducing TNF, IL-1, and IL-6); heat (exotoxins die at 60 °C with three exceptions; endotoxin survives 100 °C for an hour — the sterilization-resistant fever of contaminated fluids, extension); and vaccines (toxoids exist for the secreted proteins; nothing exists for lipid A). The cascade is why endotoxin kills: TLR4/CD14 macrophage activation releases the TNF/IL-1/IL-6 fever-shock axis, complement activation (C3a histamine → edema; C5a chemotaxis) and tissue factor activation drive DIC — fever, shock, DIC are the printed clinical effects.",
    keyIdea: "Read the axis, then the cascade, then the roster. THE AXIS: secreted polypeptide (plasmid/phage; antitoxins; toxoids; 60 °C-labile with 3 exceptions) versus shed lipid A (chromosomal; poorly antigenic; no vaccine; 100 °C-stable — 'eXtremely heat stable'). THE CASCADE: LPS (O-antigen + core polysaccharide + lipid A; LOS in Neisseria) released on lysis/blebs → three main effects: macrophage activation (TLR4/CD14 → TNF-α, IL-1, IL-6 → fever and hypotension), complement activation (C3a → histamine → hypotension and edema; C5a → neutrophil chemotaxis), tissue factor activation (coagulation cascade → DIC) — with nitric oxide driving hypotension; the outcome strip: fever, shock, edema, DIC/death. THE ROSTER by mechanism group: ① protein synthesis (diphtheria toxin + Exotoxin A: EF-2 ADP-ribosylation; Shiga toxin: 60S ribosome, adenine off rRNA — dysentery + HUS in EHEC O157:H7 which does not invade); ② fluid secretion (ETEC LT: adenylate cyclase/cAMP; ST: guanylate cyclase/cGMP; anthrax toxin: mimics adenylate cyclase — black eschar's edematous borders; cholera toxin: permanently activates Gs — rice-water diarrhea; pertussis toxin: inactivates Gi — whooping cough); ③ phagocytosis (pertussis again); ④ neurotransmitter release (tetanospasmin: no GABA/glycine from Renshaw cells — spastic paralysis; botulinum toxin: no ACh release — flaccid paralysis); the lysers (alpha toxin: phospholipase — gas gangrene, double-zone hemolysis; streptolysin O: ASO); and the superantigens (TSST-1, erythrogenic exotoxin A: TCR-β × MHC-II cross-link OUTSIDE the antigen binding site — IL-1/IL-2/IFN-γ/TNF-α flood → toxic shock syndrome; scalded skin; scarlet fever). The AB-toxin footnote: B binds and triggers uptake; A acts (usually an ADP ribosyltransferase).",
  },
  mechanisms: [
    {
      id: "toxin-axis",
      title: "The exotoxin/endotoxin axis: secretion, chemistry, genes, and consequences",
      context: "From the comparison table to the design logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A bacterium injures the host either by mailing proteins (exotoxins) or by being taken apart (endotoxin)",
            sublabel: "Input — two delivery models: active secretion vs structural shedding.",
            variant: "input",
          },
          {
            id: "s1",
            label: "EXOTOXIN SIDE: actively secreted polypeptides from plasmid/bacteriophage genes — high toxicity (fatal dose ~1 µg), high-titer antitoxins, toxoid vaccines, destroyed at 60 °C (3 exceptions: staph enterotoxin, E coli ST, B cereus emetic toxin)",
            sublabel: "Process — the secreted-protein model: potent, antigenic, vaccine-able, heat-labile.",
            variant: "process",
          },
          {
            id: "s2",
            label: "ENDOTOXIN SIDE: lipid A of LPS (O-antigen + core polysaccharide + lipid A; LOS in Neisseria) — a structural component released on lysis or in blebs, never secreted; chromosomal gene; poorly antigenic; no toxoid, no vaccine; stable at 100 °C for 1 hr",
            sublabel: "Process — the structural-shedding model: not a protein, not secreted, not vaccine-able — but always present when gram ⊝ bacteria die.",
            variant: "process",
          },
          {
            id: "s3",
            label: "AMPLIFICATION: endotoxin's low per-dose toxicity (fatal dose ~hundreds of µg) is compensated by the host response it triggers — and exotoxins' single mechanisms (EF-2, ribosomes, cyclases, SNAREs) are compensated by their potency",
            sublabel: "Process — two different compensations: the cascade (endotoxin) and the enzymatic potency (exotoxin).",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the clinical split: exotoxin diseases (tetanus, botulism, diphtheria, cholera — toxoid-preventable) versus endotoxin diseases (meningococcemia, gram ⊝ rod sepsis: fever, shock, DIC — manageable only by killing the source)",
            sublabel: "Output — the exam's answer bank: which class, which vaccine, which cascade.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "mailing proteins" },
          { from: "s1", to: "s2", label: "vs shedding" },
          { from: "s2", to: "s3", label: "amplify" },
          { from: "s3", to: "o1", label: "clinical split" },
        ],
        caption:
          "The axis is a delivery-and-design comparison. An exotoxin is a mailed protein: made from a plasmid or phage gene, actively secreted, chemically a polypeptide — so it can be potent (fatal dose on the order of 1 µg), antigenic (high-titer antitoxins), heat-labile (destroyed at 60 °C with three exceptions: staphylococcal enterotoxin, E coli heat-stable toxin, B cereus emetic toxin), and convertible into a toxoid vaccine (tetanus, botulism, diphtheria, cholera — the printed typical diseases). An endotoxin is not mailed at all: lipid A is a structural part of the gram ⊝ outer membrane (LPS = O-antigen + core polysaccharide + lipid A, the toxic component; Neisseria simplify to lipooligosaccharide), released when cells lyse or when blebs detach from living cells — chromosomal, poorly antigenic, never a toxoid (no vaccine available), and heat-stable at 100 °C for an hour ('eXtremely heat stable' — the printed cue; extension: why contaminated fluids stay pyrogenic after sterilization). Its low nominal toxicity (hundreds of µg fatal dose) is amplified by the host response into the printed clinical effects: fever, shock (hypotension), DIC.",
      },
    },
    {
      id: "cascade-to-shock",
      title: "The endotoxin cascade: three main effects, one outcome strip",
      context: "From lipid A to fever, shock, edema, and DIC",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "LPS is released — upon cell lysis, or by blebs detaching from the outer surface membrane of living cells (vs the exotoxin's active secretion)",
            sublabel: "Input — the gram ⊝ deaths of sepsis, or the blebbing of living rods.",
            variant: "input",
          },
          {
            id: "s1",
            label: "EFFECT 1 — MACROPHAGE ACTIVATION (TLR4/CD14): TNF-α, IL-1, IL-6 released — fever (TNF-α, IL-1, IL-6) and hypotension (TNF-α), with nitric oxide driving vasodilation",
            sublabel: "Process — the cytokine axis of the septic state.",
            variant: "process",
          },
          {
            id: "s2",
            label: "EFFECT 2 — COMPLEMENT ACTIVATION: C3a → histamine release → hypotension and edema; C5a → neutrophil chemotaxis",
            sublabel: "Process — the vascular leak and the neutrophil call.",
            variant: "process",
          },
          {
            id: "s3",
            label: "EFFECT 3 — TISSUE FACTOR ACTIVATION: the coagulation cascade runs → DIC",
            sublabel: "Process — the consumptive coagulopathy of gram ⊝ sepsis.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the outcome strip: fever · shock · edema · DIC/death — the printed clinical effects of endotoxin, and the mechanism diagram's 'downstream cellular reaction' (TNF, IL-1, IL-6 at the host cell)",
            sublabel: "Output — sepsis physiology as a single page: the same cascade the ICU manages.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "TLR4/CD14" },
          { from: "s1", to: "s2", label: "complement" },
          { from: "s2", to: "s3", label: "tissue factor" },
          { from: "s3", to: "o1", label: "outcome" },
        ],
        caption:
          "The cascade explains how a 'low-toxicity' structural molecule kills. LPS (lipid A) reaches the macrophage's TLR4/CD14 complex and flips it: TNF-α, IL-1, and IL-6 pour out — the fever of the printed clinical effects (IL-1 and IL-6 → fever; TNF-α → fever AND hypotension), with nitric oxide mediating the vasodilation that compounds the hypotension. Complement activation adds the vascular leak: C3a drives histamine release (hypotension and edema) while C5a calls neutrophil chemotaxis — the neutrophilia of sepsis. Tissue factor activation starts the coagulation cascade and consumes it into DIC — the disseminated coagulopathy that completes 'fever, shock (hypotension), DIC.' The mechanism diagram prints the same story at the host cell: the toxin (lipid A) triggers the downstream cellular reaction — TNF, IL-1, IL-6. The outcome strip reads: fever, shock, edema, DIC/death.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "toxin-comparison-map",
      title: "The toxin axis, the cascade, and the roster — three panels",
      caption:
        "An original KYP redraw: the 11-row exotoxin/endotoxin axis (source, secretion, chemistry, genes, toxicity, effects, mode, antigenicity, vaccines, heat stability with the 60 °C exceptions, typical diseases); the endotoxin cascade (LPS anatomy with LOS; three main effects — macrophage TLR4/CD14 → TNF-α/IL-1/IL-6, complement C3a/C5a, tissue factor → DIC; the readout strip with nitric oxide); the exotoxin roster by mechanism group (① protein synthesis — diphtheria/Exotoxin A [EF-2] + Shigella/EHEC [60S]; ② fluid secretion — LT/ST, anthrax, cholera [Gs], pertussis [Gi]; ③ phagocytosis — pertussis; ④ neurotransmitter release — tetanospasmin/botulinum [SNARE]); the lysers and superantigens panel (alpha toxin, streptolysin O/ASO; TSST-1 and erythrogenic exotoxin A with the TCR-β × MHC-II cross-link); and the AB-toxin footnote strip.",
      notice:
        "FA's printed mnemonic inside the ETEC manifestation cell ('labile in the Air (Adenylate cyclase), stable on the Ground (Guanylate cyclase)') is NOT reproduced here — verification only, carried verbatim in the note's table block as the source's own table text. The 9-toxin 'a' footnote marker set is documented in the manifest.",
    },
    {
      kind: "table",
      title: "The exotoxin/endotoxin axis — verbatim",
      intro: "The source's comparison table, verbatim.",
      columns: ["Feature", "Exotoxins · Endotoxins (verbatim)"],
      rows: [
        ["Source", "Certain species of gram ⊕ and gram ⊝ bacteria · Outer cell membrane of most gram ⊝ bacteria"],
        ["Secreted from cell", "Yes · No (released upon cell lysis or by living cells by blebs detaching from outer surface membrane; vs exotoxin, which is actively secreted)"],
        ["Chemistry", "Polypeptide · Lipid A component of LPS (structural part of bacteria; released when lysed)"],
        ["Location of genes", "Plasmid or bacteriophage · Bacterial chromosome"],
        ["Toxicity", "High (fatal dose on the order of 1 µg) · Low (fatal dose on the order of hundreds of micrograms)"],
        ["Clinical effects", "Various effects · Fever, shock (hypotension), DIC"],
        ["Mode of action", "Various modes · Induces TNF, IL-1, and IL-6"],
        ["Antigenicity", "Induces high-titer antibodies called antitoxins · Poorly antigenic"],
        ["Vaccines", "Toxoids used as vaccines · No toxoids formed and no vaccine available"],
        ["Heat stability", "Destroyed rapidly at 60 °C (except staphylococcal enterotoxin, E coli heat-stable toxin, and B cereus emetic toxin) · Stable at 100 °C for 1 hr"],
        ["Typical diseases", "Tetanus, botulism, diphtheria, cholera · Meningococcemia; sepsis by gram ⊝ rods"],
      ],
      caption:
        "Read the axis as six discriminations: secretion (mailing vs shedding), chemistry (polypeptide vs lipid A), genes (plasmid/phage vs chromosome), potency (1 µg vs hundreds of µg), vaccine-ability (toxoids vs none), and heat (60 °C-labile with three exceptions vs 100 °C-stable — 'eXtremely heat stable').",
    },
    {
      kind: "table",
      title: "The exotoxin roster — verbatim",
      intro: "The source's Bacteria-with-exotoxins table (with mechanism group banners and the AB-toxin footnote), verbatim.",
      columns: ["Bacteria · Toxin", "Mechanism · Manifestation (verbatim)"],
      rows: [
        ["INHIBIT PROTEIN SYNTHESIS — C diphtheriae / diphtheria toxin (a); P aeruginosa / Exotoxin A (a)", "Inactivate elongation factor (EF-2) through ADP-ribosylation · Pharyngitis with pseudomembranes in throat and severe lymphadenopathy (bull neck), myocarditis; host cell death"],
        ["INHIBIT PROTEIN SYNTHESIS — Shigella spp + enterohemorrhagic E coli / Shiga toxin (a)", "Inactivate 60S ribosome by removing adenine from rRNA · Damages GI mucosa → dysentery; toxin-mediated injury and cytokine release → hemolytic-uremic syndrome (HUS; prototypically in EHEC serotype O157:H7). Unlike Shigella, EHEC does not invade host cells"],
        ["INCREASE FLUID SECRETION — enterotoxigenic E coli / heat-labile toxin (LT) (a) + heat-stable toxin (ST)", "LT: overactivates adenylate cyclase (↑ cAMP) → ↑ Cl− secretion in gut and H2O efflux · ST: overactivates guanylate cyclase (↑ cGMP) → ↓ resorption of NaCl and H2O in gut · Watery diarrhea ('labile in the Air (Adenylate cyclase), stable on the Ground (Guanylate cyclase)'). Bacteria that ↑ cAMP include V cholerae, B anthracis, B pertussis, E coli"],
        ["INCREASE FLUID SECRETION — B anthracis / anthrax toxin (a)", "Mimics adenylate cyclase (↑ cAMP) · Likely responsible for characteristic edematous borders of black eschar in cutaneous anthrax"],
        ["INCREASE FLUID SECRETION — V cholerae / cholera toxin (a)", "Overactivates adenylate cyclase (↑ cAMP) by permanently activating Gs · Voluminous 'rice-water' diarrhea"],
        ["INCREASE FLUID SECRETION — B pertussis / pertussis toxin (a)", "Activates adenylate cyclase (↑ cAMP) by inactivating inhibitory subunit (Gi) · Whooping cough — child coughs on expiration and 'whoops' on inspiration; can cause '100-day cough' in adults; associated with posttussive emesis"],
        ["INHIBIT PHAGOCYTIC ABILITY — B pertussis", "(pertussis toxin's second job)"],
        ["INHIBIT RELEASE OF NEUROTRANSMITTER — C tetani / tetanospasmin (a); C botulinum / botulinum toxin (a)", "Both are proteases that cleave SNARE (soluble NSF attachment protein receptor), a set of proteins required for neurotransmitter release via vesicular fusion · Tetanospasmin: prevents release of inhibitory (GABA and glycine) neurotransmitters from Renshaw cells in spinal cord → spastic paralysis, risus sardonicus, trismus (lockjaw), opisthotonos. Botulinum: infant botulism (ingestion of spores — soil, raw honey; toxin produced in vivo); foodborne botulism (ingestion of preformed toxin — canned foods)"],
        ["LYSE CELL MEMBRANES — C perfringens / alpha toxin", "Phospholipase (lecithinase) that degrades tissue and cell membranes · Degradation of phospholipids → myonecrosis ('gas gangrene') and hemolysis ('double zone' of hemolysis on blood agar)"],
        ["LYSE CELL MEMBRANES — S pyogenes / streptolysin O", "Protein that degrades cell membrane · Lyses RBCs; contributes to β-hemolysis; host antibodies against toxin (ASO) used to diagnose rheumatic fever (do not confuse with immune complexes of poststreptococcal glomerulonephritis)"],
        ["SUPERANTIGENS CAUSING SHOCK — S aureus / toxic shock syndrome toxin (TSST-1)", "Cross-links β region of TCR to MHC class II on APCs outside of the antigen binding site → overwhelming release of IL-1, IL-2, IFN-γ, and TNF-α → shock · Toxic shock syndrome: fever, rash, shock; other toxins cause scalded skin syndrome (exfoliative toxin) and food poisoning (heat-stable enterotoxin)"],
        ["SUPERANTIGENS CAUSING SHOCK — S pyogenes / erythrogenic exotoxin A", "(same cross-link mechanism) · Toxic shock–like syndrome: fever, rash, shock; scarlet fever"],
      ],
      caption:
        "Read the roster by group banner: protein synthesis (EF-2 / 60S ribosome), fluid secretion (the cyclase set: LT/ST, anthrax, cholera-Gs, pertussis-Gi), phagocytosis (pertussis), neurotransmitter release (SNARE proteases — spastic vs flaccid by which transmitter is blocked), the lysers (phospholipase, streptolysin O), and the superantigens (TCR-β × MHC-II outside the antigen binding site). The trailing 'a' marks the AB-toxin footnote's roster (B binds, A acts — usually an ADP ribosyltransferase).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The cascade at the bedside, and the vaccine line",
      body: "THE SEPSIS READOUT: gram ⊝ bacteremia with fever, hypotension, and DIC is lipid A at work — TLR4/CD14 macrophage activation (TNF-α, IL-1, IL-6), complement (C3a histamine → edema; C5a chemotaxis), and tissue factor (coagulation cascade → DIC); nitric oxide compounds the hypotension. MANAGEMENT COROLLARY: killing the bacteria releases more lipid A (extension: the Jarisch-Herxheimer-like release concept), and no endotoxin vaccine exists — the printed 'no toxoids formed and no vaccine available.' THE VACCINE LINE: the toxoid vaccines exist exactly where the toxin is a secreted polypeptide (tetanus, diphtheria — and the pediatric DTaP; cholera toxoid in extension) — and nowhere else. THE HEAT LINE: fluids stay pyrogenic after autoclaving because endotoxin is stable at 100 °C for an hour (the 'eXtremely heat stable' cue; extension: pharmaceutical water systems monitor endotoxin for this reason) — while the exotoxins die at 60 °C except the three printed exceptions (staphylococcal enterotoxin, E coli heat-stable toxin, B cereus emetic toxin — the heat-STABLE trio worth memorizing as the exception set).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 78-year-old man with an indwelling urinary catheter develops rigors, hypotension, and oozing from venipuncture sites; cultures grow E coli, and the laboratory notes the isolate's fever-producing material survives autoclaving.",
        discriminator: "Gram ⊝ sepsis + DIC + autoclave-stable pyrogen",
        concept: "Endotoxin — lipid A",
        answer:
          "Lipid A of LPS (O-antigen + core polysaccharide + lipid A) induces TNF, IL-1, and IL-6 via TLR4/CD14 macrophage activation, with complement activation (C3a histamine, C5a chemotaxis) and tissue factor activation driving DIC. It is released on lysis or in blebs (not secreted), is stable at 100 °C for an hour (why the pyrogen survives autoclaving), is poorly antigenic, and has no vaccine — the printed endotoxin column.",
      },
      {
        stem: "A child with a gray pharyngeal membrane and 'bull neck' develops myocarditis two weeks into the illness; the organism's toxin is found to ADP-ribosylate elongation factor 2.",
        discriminator: "Pseudomembranous pharyngitis + EF-2 ADP-ribosylation",
        concept: "Diphtheria toxin — the AB toxin at EF-2",
        answer:
          "Diphtheria toxin (an AB toxin: B binds and triggers uptake; A acts) inactivates EF-2 through ADP-ribosylation — the protein-synthesis inhibition group's flagship. The manifestations: pseudomembranes in the throat, severe lymphadenopathy (bull neck), and myocarditis. The vaccine is the toxoid (the printed vaccines row); the gene is phage-encoded (the location-of-genes row).",
      },
      {
        stem: "A menstruating woman using tampons presents with fever, a diffuse scarlatiniform rash that desquamates, and hypotension; the isolate produces a toxin that cross-links the β region of the T-cell receptor to MHC class II outside the antigen binding site.",
        discriminator: "Fever + rash + shock + the outside-the-binding-site cross-link",
        concept: "TSST-1 — the superantigen",
        answer:
          "TSST-1 (S aureus) cross-links the β region of the TCR to MHC class II on APCs outside the antigen binding site — bypassing antigen specificity and activating large T-cell populations: overwhelming release of IL-1, IL-2, IFN-γ, and TNF-α → shock. Toxic shock syndrome: fever, rash, shock. The same mechanism in S pyogenes (erythrogenic exotoxin A) gives toxic shock–like syndrome with scarlet fever.",
      },
    ],
    traps: [
      {
        a: "Endotoxin is actively secreted by living gram ⊝ bacteria",
        b: "Endotoxin is released upon cell lysis or by blebs detaching from the outer surface membrane — vs the exotoxin, which is actively secreted",
        whyConfused: "Both are 'bacterial toxins,' so one delivery model blurs into the other.",
        keyDifference:
          "The secretion row is the axis's first discrimination: exotoxins are mailed (actively secreted polypeptides); endotoxin is structural lipid A, shed when cells die or bleb. This is why killing gram ⊝ bacteria can transiently worsen the state (extension) and why no secretion-targeted strategy exists for lipid A.",
        clue: "Any exotoxin-vs-endotoxin delivery question.",
      },
      {
        a: "Boiling a fluid destroys its endotoxin",
        b: "Endotoxin is stable at 100 °C for 1 hr ('eXtremely heat stable'); the exotoxins are destroyed at 60 °C except three",
        whyConfused: "Sterilization feels like it should de-toxin everything.",
        keyDifference:
          "Heat stability splits the classes: exotoxins (proteins) die at 60 °C — except staphylococcal enterotoxin, E coli heat-stable toxin, and B cereus emetic toxin (the printed exceptions); endotoxin (lipid A) survives an hour at 100 °C — autoclave-sterile fluids can remain pyrogenic (the pharmaceutical water-system corollary).",
        clue: "Any heat-stability or sterilization question.",
      },
      {
        a: "Tetanus and botulism toxins block the same transmitter, so they cause the same paralysis",
        b: "Both cleave SNAREs — but tetanospasmin blocks GABA/glycine release from Renshaw cells (SPASTIC paralysis) while botulinum toxin blocks ACh release at the neuromuscular junction (FLACCID paralysis)",
        whyConfused: "One SNARE mechanism, two opposite paralyses.",
        keyDifference:
          "The SNARE proteases share the mechanism (cleaving the vesicular-fusion proteins) and differ in the neuron they enter: tetanospasmin prevents inhibitory transmitter release in the spinal cord → unchecked excitation (spastic paralysis, risus sardonicus, trismus, opisthotonos); botulinum toxin prevents ACh release at the NMJ → flaccid paralysis. Same protease family, opposite clinical signs — the exam's favorite pair.",
        clue: "Any tetanus-vs-botulism comparison.",
      },
    ],
    pivots: [
      {
        lookAlike: "Exotoxin vs endotoxin (the axis in one line each)",
        differentiator: "Secreted polypeptide vs shed lipid A",
        correctPath:
          "EXOTOXIN: certain gram ⊕/⊝ species; actively secreted; polypeptide; plasmid/phage genes; fatal dose ~1 µg; antitoxins; toxoids; 60 °C-labile (3 exceptions); tetanus/botulism/diphtheria/cholera. ENDOTOXIN: outer membrane of most gram ⊝; released on lysis/blebs; lipid A of LPS; chromosomal; fatal dose ~hundreds of µg; fever/shock/DIC via TNF, IL-1, IL-6; poorly antigenic; no vaccine; 100 °C-stable; meningococcemia and gram ⊝ rod sepsis.",
      },
      {
        lookAlike: "Superantigen vs AB toxin (TSST-1 vs diphtheria toxin)",
        differentiator: "Cross-link outside the binding site vs B-binds/A-acts",
        correctPath:
          "SUPERANTIGEN (TSST-1, erythrogenic exotoxin A): cross-links the β region of the TCR to MHC class II OUTSIDE the antigen binding site — polyclonal T-cell activation, overwhelming IL-1/IL-2/IFN-γ/TNF-α, shock without enzymatic specificity. AB TOXIN (diphtheria, cholera, pertussis, tetanus, botulism...): B binds a receptor and triggers endocytosis; A acts enzymatically (usually an ADP ribosyltransferase) on one target (EF-2, Gs/Gi, SNAREs). Diffuse inflammatory flood vs precise enzymatic strike.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man with a long-term indwelling urinary catheter is admitted with four hours of rigors, confusion, and a blood pressure of 78/44. He is febrile to 39.2 °C, tachycardic, and has oozing from two venipuncture sites with laboratory evidence of consumptive coagulopathy (platelets 48 × 10⁹/L, elevated D-dimer, prolonged PT). Blood cultures grow a lactose-fermenting gram ⊝ rod after 14 hours. The intensive care team asks the laboratory whether the patient's plasma can be rendered non-pyrogenic by boiling the infusion materials; the laboratory reports that the fever-producing material in the isolate survives standard autoclaving.",
      question:
        "Which component of the isolate most directly mediates the fever, hypotension, and DIC?",
      options: [
        {
          label: "A",
          text: "Lipid A of lipopolysaccharide, inducing TNF, IL-1, and IL-6 via TLR4/CD14",
          correct: true,
          why: "Correct. This is gram ⊝ rod sepsis with DIC: the lactose-fermenting rod (E coli) releases lipid A on lysis and in blebs; lipid A induces TNF, IL-1, and IL-6 (macrophage activation via TLR4/CD14), activates complement (C3a histamine → edema; C5a chemotaxis), and activates tissue factor (coagulation cascade → DIC). Its heat stability (100 °C for 1 hr) is the printed reason the pyrogen survives autoclaving — 'no toxoids formed and no vaccine available.'",
        },
        {
          label: "B",
          text: "The O polysaccharide component of LPS, driving the serotype-specific antibody response",
          why: "The O-antigen is real LPS chemistry — but it is the ANTIGENIC serotype handle, not the toxic component; the toxicity, the TNF/IL-1/IL-6 induction, and the DIC belong to lipid A. The distractor tests which end of the LPS molecule is the toxin.",
        },
        {
          label: "C",
          text: "An exotoxin actively secreted by the living organisms, ADP-ribosylating elongation factor 2",
          why: "E coli does encode exotoxins (the LT/ST of ETEC, the Shiga toxin of EHEC) — but this isolate is a urinary catheter organism in septic shock, and the stem's DIC-plus-autoclave-stable-pyrogen signature is endotoxin's. EF-2 ADP-ribosylation is diphtheria/Pseudomonas; it does not cause DIC.",
        },
        {
          label: "D",
          text: "A superantigen cross-linking the TCR β region to MHC class II outside the antigen binding site",
          why: "Superantigens (TSST-1, erythrogenic exotoxin A) do cause shock — but not the consumptive coagulopathy with this signature, and the isolate is a gram ⊝ rod, not S aureus or S pyogenes. The distractor imports the shock mechanism that fits staphylococcal/streptococcal disease.",
        },
        {
          label: "E",
          text: "A SNARE protease preventing neurotransmitter release",
          why: "SNARE proteases (tetanospasmin, botulinum toxin) are real exotoxins with real disease — tetanus and botulism; neither is secreted by E coli, and neither produces fever, shock, and DIC. The distractor tests whether the exotoxin roster's neurological group is kept apart from the sepsis axis.",
        },
      ],
      reasoning:
        "The vignette assembles the classic gram ⊝ sepsis picture: catheter source, lactose-fermenting rod, fever with hypotension, and consumptive coagulopathy. The mechanism question is the endotoxin cascade: lipid A (the toxic component of LPS) inducing TNF, IL-1, and IL-6 through TLR4/CD14, complement, and tissue factor — fever, shock (hypotension), DIC. The heat-stability clue (autoclave-surviving pyrogen) is lipid A's printed property, and each distractor pairs a real toxin mechanism (O-antigen serotype handling, EF-2, superantigen, SNARE) with the wrong disease axis.",
    },
  },
  mnemonics: [
    {
      code: "\u201cExotoxins are mailed proteins; endotoxin is the wall's face, shed when the cell dies — that's why only the mailed ones become vaccines.\u201d",
      meaning:
        "KYP's key for the axis: exotoxin = actively secreted polypeptide (plasmid/phage gene; antitoxins; toxoid vaccines; 60 °C-labile with 3 exceptions). Endotoxin = lipid A of LPS (structural; chromosomal; poorly antigenic; NO vaccine; 100 °C-stable — 'eXtremely heat stable'), released on lysis or in blebs.",
      memorizes: "The 11-row axis",
      whenToUse: "Any exotoxin-vs-endotoxin question.",
      clinical: "Toxoids exist only for the mailed proteins — tetanus, diphtheria (DTaP), cholera.",
    },
    {
      code: "\u201cLipid A speaks three sentences to the host: cytokines (TNF, IL-1, IL-6), complement (C3a histamine, C5a chemotaxis), and clotting (tissue factor → DIC).\u201d",
      meaning:
        "KYP's key for the cascade: the three main effects — macrophage activation (TLR4/CD14 → TNF-α, IL-1, IL-6 → fever and hypotension; nitric oxide compounds it), complement activation (C3a → histamine: hypotension and edema; C5a → neutrophil chemotaxis), tissue factor activation (coagulation cascade → DIC). Outcome strip: fever · shock · edema · DIC/death.",
      memorizes: "The endotoxin cascade",
      whenToUse: "Any gram ⊝ sepsis physiology question.",
      clinical: "Fever + hypotension + DIC in gram ⊝ bacteremia = lipid A until proven otherwise.",
    },
    {
      code: "\u201cThe SNARE twins split by the transmitter they silence: tetanus unmutes the cord (spastic), botulism mutes the junction (flaccid).\u201d",
      meaning:
        "KYP's key for the SNARE pair: both tetanospasmin and botulinum toxin are proteases that cleave SNARE proteins — but tetanospasmin prevents GABA/glycine release from Renshaw cells in the spinal cord (spastic paralysis, risus sardonicus, trismus, opisthotonos) while botulinum toxin prevents ACh release at the neuromuscular junction (flaccid paralysis; infant botulism from spores, foodborne from preformed toxin).",
      memorizes: "Tetanus vs botulism",
      whenToUse: "Any SNARE-toxin question.",
      clinical: "Spastic vs flaccid names the site: cord vs junction.",
    },
  ],
  rapidReview: {
    s30: [
      "Exotoxins: secreted, polypeptide, plasmid/phage genes, fatal dose ~1 µg",
      "Endotoxin: lipid A of LPS, released on lysis/blebs, chromosomal, ~hundreds of µg",
      "Endotoxin effects: fever, shock (hypotension), DIC — via TNF, IL-1, IL-6",
      "Exotoxin vaccines: toxoids (tetanus, botulism, diphtheria, cholera)",
      "Endotoxin: no toxoids, no vaccine — stable at 100 °C for 1 hr (eXtremely heat stable)",
    ],
    m3: [
      "60 °C exceptions (heat-STABLE exotoxins): staph enterotoxin, E coli ST, B cereus emetic toxin",
      "Diphtheria toxin + Exotoxin A: EF-2 ADP-ribosylation (AB toxins)",
      "Shiga toxin: 60S ribosome — dysentery + HUS (EHEC O157:H7 does not invade)",
      "LT (adenylate cyclase/cAMP) + ST (guanylate cyclase/cGMP); cholera toxin: Gs; pertussis toxin: Gi",
      "Tetanospasmin + botulinum toxin: SNARE proteases — spastic vs flaccid",
    ],
    m10: [
      "Endotoxin cascade: TLR4/CD14 (TNF-α, IL-1, IL-6) · complement (C3a histamine, C5a chemotaxis) · tissue factor (DIC)",
      "Nitric oxide: hypotension; outcome strip: fever · shock · edema · DIC/death",
      "Alpha toxin (C perfringens): phospholipase — gas gangrene + double-zone hemolysis",
      "Streptolysin O: ASO antibodies (rheumatic fever diagnosis)",
      "Superantigens: TSST-1 + erythrogenic A — TCR-β × MHC-II outside the binding site → IL-1/IL-2/IFN-γ/TNF-α → TSS; scalded skin; scarlet fever",
    ],
  },
  recall: [
    {
      q: "Give the exotoxin/endotoxin axis in six discriminations.",
      a: "Secretion: actively secreted polypeptide vs released on lysis/blebs. Chemistry: polypeptide vs lipid A of LPS. Genes: plasmid or bacteriophage vs bacterial chromosome. Toxicity: high (fatal dose ~1 µg) vs low (~hundreds of µg). Antigenicity/vaccines: high-titer antitoxins and toxoids vs poorly antigenic, no toxoids, no vaccine. Heat: destroyed at 60 °C (3 exceptions) vs stable at 100 °C for 1 hr.",
    },
    {
      q: "Name endotoxin's three main effects and the mediators.",
      a: "Macrophage activation (TLR4/CD14) — inducing TNF, IL-1, and IL-6 (fever; hypotension; nitric oxide); complement activation — C3a → histamine release (hypotension and edema), C5a → neutrophil chemotaxis; tissue factor activation — the coagulation cascade → DIC. LPS = O-antigen + core polysaccharide + lipid A (the toxic component); Neisseria have lipooligosaccharide.",
    },
    {
      q: "Which exotoxins are heat-stable, and which organisms share the EF-2 mechanism?",
      a: "Heat-stable exotoxins (the 60 °C exceptions): staphylococcal enterotoxin, E coli heat-stable toxin, and B cereus emetic toxin. EF-2 ADP-ribosylation: Corynebacterium diphtheriae (diphtheria toxin) and Pseudomonas aeruginosa (Exotoxin A).",
    },
    {
      q: "How do the superantigens cause shock, and which organisms produce them?",
      a: "They cross-link the β region of the TCR to MHC class II on APCs outside the antigen binding site — overwhelming release of IL-1, IL-2, IFN-γ, and TNF-α → shock. S aureus TSST-1 (toxic shock syndrome; also scalded skin syndrome via exfoliative toxin and food poisoning via heat-stable enterotoxin) and S pyogenes erythrogenic exotoxin A (toxic shock–like syndrome; scarlet fever).",
    },
    {
      q: "Contrast the SNARE toxins' mechanisms and food-borne routes.",
      a: "Both cleave SNARE proteins: tetanospasmin prevents GABA/glycine release from Renshaw cells in the spinal cord → spastic paralysis (risus sardonicus, trismus, opisthotonos); botulinum toxin prevents ACh release → flaccid paralysis. Infant botulism = ingestion of spores (soil, raw honey; toxin produced in vivo); foodborne botulism = ingestion of preformed toxin (canned foods).",
    },
  ],
  related: [
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "M1's address book returns: lipid A is the outer leaflet's TNF/IL-1 face — the same LPS M1 mapped, now read as the toxin; the periplasm's β-lactamases sit under the same outer membrane.",
    },
    {
      title: "Important Cytokines",
      topicId: "cytokines",
      note: "TNF, IL-1, and IL-6 are E31's cytokines wearing the sepsis hat — the endotoxin cascade is where their map becomes ICU physiology.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "The cascade's complement arm (C3a histamine, C5a chemotaxis) is the same system E30 mapped in deficiency — here activated to excess rather than absent.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "Toxoid vaccines and anti-toxin therapy live here: the DTaP components (diphtheria and tetanus toxoids) are this page's exotoxins, denatured into immunogens — and lipid A's lack of a toxoid is why sepsis therapy targets the organism, not the toxin.",
    },
    {
      subject: "Cardiology (Shock)",
      connection: "Distributive shock by the numbers: TNF-α and nitric oxide drive the vasodilation; C3a histamine adds the leak; the DIC is tissue factor's coagulation cascade — sepsis physiology as a cardiology exam.",
    },
    {
      subject: "Neurology (Neuromuscular)",
      connection: "The SNARE pair: spastic paralysis from the cord (tetanospasmin) vs flaccid paralysis from the junction (botulinum toxin) — the same protease read at two addresses; botulinum toxin's therapeutic use is the extension.",
    },
    {
      subject: "Hematology (Coagulation)",
      connection: "Tissue factor activation → the coagulation cascade → DIC: the consumptive coagulopathy of gram ⊝ sepsis with thrombocytopenia, elevated D-dimer, and prolonged PT.",
    },
  ],
};
