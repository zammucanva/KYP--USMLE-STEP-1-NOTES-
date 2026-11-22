import type { KypUsMLENote } from "../types";

// Biochemistry — Cellular (M3).
// Source: First Aid 2026, Part 1 pdf 68–69 / book 46–47
// (Cytoskeletal elements; microtubule; cilia structure; Na+/K+-ATPase)

export const cytoskeletonCilia: KypUsMLENote = {
  id: "cytoskeleton-cilia",
  title: "Cytoskeleton, Microtubules & Cilia",
  subtitle:
    "Three filament systems, one polarity rule (minus at the nucleus, plus at the periphery), two motors (kinesin out, dynein back), a 9+2 axoneme with a 9-triplet basal body — and the Kartagener triad plus four microtubule drugs that ride on top of it.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Cellular",
  pilotCategory: "Cell biology — cytoskeleton, intracellular transport, ciliary disease",
  difficulty: 3,
  readTime: 15,
  sourceRef:
    "First Aid 2026, Part 1 pp. 46–47 (cytoskeletal elements; microtubule; cilia structure; Na+/K+-ATPase)",
  tags: [
    "microfilaments",
    "intermediate filaments",
    "microtubules",
    "kinesin",
    "dynein",
    "axoneme",
    "cilia",
    "Kartagener",
    "primary ciliary dyskinesia",
    "Na+/K+-ATPase",
    "digoxin",
    "vinca alkaloids",
    "taxanes",
  ],
  core: {
    what: "The cytoskeleton has three systems: microfilaments (actin — muscle contraction, cytokinesis, phagocytosis), intermediate filaments (structure and anchoring — vimentin, desmin, cytokeratin, lamins, GFAP, neurofilaments), and microtubules (movement and division — cilia, flagella, mitotic spindle, axonal transport, centrioles), built as a helical array of polymerized α/β-tubulin heterodimers, each dimer carrying 2 GTP, with the negative end near the nucleus and the positive end at the periphery. Kinesin walks anterograde (− → +); dynein walks retrograde (+ → −). Motile cilia carry a 9 doublet + 2 singlet axoneme on a 9-triplet basal body; the Na+/K+-ATPase exports 3 Na+ for every 2 K+ it imports per ATP.",
    why: "This page is the meeting point of four exam franchises: motor-direction questions (which motor, which way), the pathogen-transport set (tetanus toxin, polio, rabies, and HSV ride dynein retrograde; HSV reactivation rides kinesin back out), the microtubule-drug panel (mebendazole, griseofulvin, vinca alkaloids, taxanes), and the Kartagener syndrome vignette (dynein arm defect → immotile cilia → situs inversus, sinusitis/otitis/bronchiectasis, infertility).",
    keyIdea: "Anchor everything on polarity: minus end at the nucleus, plus end at the periphery. Kinesin Karrys away from the nucleus (anterograde, − → +); dynein Drag back (retrograde, + → −). Every pathogen, every drug, and every motor question resolves against that one axis.",
  },
  mechanisms: [
    {
      id: "kinesin-dynein-transport",
      title: "Axonal transport — kinesin out, dynein back",
      context: "A neuron moving cargo along a microtubule",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cargo must move along the axon's microtubule tracks",
            sublabel: "Molecular — microtubules serve movement, cell division, cilia, flagella, the mitotic spindle, axonal trafficking, and centrioles.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Microtubule track: negative end near nucleus, positive end toward periphery",
            sublabel: "Molecular — a helical array of polymerized α-/β-tubulin heterodimers; each dimer has 2 GTP.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Kinesin: anterograde to microtubule (− → +)",
            sublabel: "Molecular — carries secretory vesicles, organelles, and membrane components from the soma toward the axon terminal.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Fast anterograde delivery to the synapse",
            sublabel: "Output — neurotransmitter vesicles and membrane protein reach the terminal.",
            variant: "output",
          },
          {
            id: "s3",
            label: "Dynein: retrograde to microtubule (+ → −)",
            sublabel: "Molecular — returns degradative cargo and signaling endosomes to the soma.",
            variant: "process",
          },
          {
            id: "x1",
            label: "Pathogens hijack dynein retrograde: Clostridium tetani toxin, poliovirus, rabies virus, herpes simplex virus",
            sublabel: "Clinical — the axon's own return motor delivers toxins and viruses to the neuronal cell body.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "HSV reactivation occurs via anterograde transport from cell body (kinesin mediated)",
            sublabel: "Clinical — the same track runs both ways: the virus rides kinesin back out to the skin.",
            variant: "inhibit",
          },
          {
            id: "x3",
            label: "Slow anterograde transport = rate-limiting step of peripheral nerve regeneration",
            sublabel: "Clinical — axonal regrowth is throttled by how slowly cytoskeletal protein crawls out; this sets the pace of recovery after nerve injury.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "outbound" },
          { from: "s2", to: "o1" },
          { from: "s1", to: "s3", label: "inbound" },
          { from: "x1", to: "s3", type: "inhibit", label: "hijack" },
          { from: "x2", to: "s2", type: "inhibit", label: "hijack" },
          { from: "x3", to: "s2", type: "inhibit", label: "rate limit" },
        ],
        caption:
          "One track, two motors, three hijackers: kinesin runs anterograde (− → +) toward the periphery, dynein runs retrograde (+ → −) back to the soma. Tetanus toxin, poliovirus, rabies virus, and HSV ride dynein in; HSV reactivation rides kinesin out; and the slow component of anterograde transport is the rate-limiting step of peripheral nerve regeneration.",
      },
    },
    {
      id: "pcd-kartagener",
      title: "Dynein arm defect — primary ciliary dyskinesia to Kartagener syndrome",
      context: "Immotile cilia in a developing child",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Autosomal recessive dynein arm defect",
            sublabel: "Molecular — the ATPase arms that slide axonemal doublets are missing or dysfunctional.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Immotile cilia → dysfunctional ciliated epithelia",
            sublabel: "Pathway — the 9+2 axoneme is architecturally present but cannot bend: axonemal dynein is the ATPase that links peripheral doublets and causes bending by differential sliding of doublets.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Impaired migration/orientation during development → situs inversus",
            sublabel: "Clinical — nodal cilia that should sweep left fail; organs place randomly; ~50% end up mirrored (the figure's dextrocardia CXR).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Defective mucociliary clearance → recurrent sinopulmonary disease",
            sublabel: "Clinical — recurrent sinusitis and ear infections (eustachian tube cilia), bronchiectasis from impaired clearance of debris/pathogens.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Dysfunctional tubal cilia and immotile spermatozoa → infertility",
            sublabel: "Clinical — ↑ risk of ectopic pregnancy (fallopian tube cilia) and immotile spermatozoa.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Kartagener syndrome (PCD with situs inversus): dextrocardia + sinusitis/bronchiectasis + infertility",
            sublabel: "Output — the triad the exam writes whole; ↓ nasal nitric oxide is the screening test.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Nonmotile (primary) cilia work as chemical signal sensors",
            sublabel: "Pathway — the contrast class: primary cilia transduce signals and control cell growth; their dysgenesis leads to polycystic kidney disease, mitral valve prolapse, or retinal degeneration.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Gap junctions enable coordinated ciliary movement",
            sublabel: "Molecular — the coordination layer between neighboring ciliated cells.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no sliding" },
          { from: "s1", to: "s2" },
          { from: "s1", to: "s3" },
          { from: "s1", to: "s4" },
          { from: "s2", to: "o1", label: "situs inversus" },
          { from: "s3", to: "o1", label: "bronchiectasis" },
          { from: "s4", to: "o1", label: "infertility" },
          { from: "x1", to: "s1", type: "inhibit", label: "sensory, not motile" },
          { from: "x2", to: "s3", label: "coordination" },
        ],
        caption:
          "One arm defect, four organ systems: dynein arm failure → immotile cilia → situs inversus (development), sinusitis/otitis/bronchiectasis (clearance), and infertility (tubal cilia + immotile sperm). Most common form: Kartagener syndrome (PCD with situs inversus); ↓ nasal nitric oxide screens for it.",
      },
    },
    {
      id: "na-k-atpase-cycle",
      title: "The Na+/K+-ATPase — 3 out, 2 in, one ATP",
      context: "Every cell's membrane pump",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "ATP binds at the cytosolic face of the pump",
            sublabel: "Molecular — the ATP-binding site faces the cytosol, which makes the pump's energy budget a cytosolic event.",
            variant: "input",
          },
          {
            id: "s1",
            label: "3 Na+ bind intracellularly → ATP phosphorylates the pump",
            sublabel: "Molecular — phosphorylation flips the carrier to face outward, releasing Na+ outside.",
            variant: "process",
          },
          {
            id: "o1",
            label: "3 Na+ go out of the cell (pump phosphorylated)",
            sublabel: "Output — the source text's own arithmetic: for each ATP consumed, 3 Na+ leave.",
            variant: "output",
          },
          {
            id: "s2",
            label: "2 K+ bind extracellularly → pump dephosphorylates",
            sublabel: "Molecular — dephosphorylation flips the carrier back inward.",
            variant: "process",
          },
          {
            id: "o2",
            label: "2 K+ go in to the cell (pump dephosphorylated)",
            sublabel: "Output — the inward half of the 3:2 stoichiometry, net-exporting one positive charge per cycle (electrogenic).",
            variant: "output",
          },
          {
            id: "x1",
            label: "Digoxin directly inhibits Na+/K+-ATPase",
            sublabel: "Clinical — the pharmacologic lever: blocked pumps raise intracellular Na+, blunt the Na+/Ca2+ exchanger, raise intracellular Ca2+, and ↑ contractility.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "phosphorylate" },
          { from: "s1", to: "o1" },
          { from: "o1", to: "s2", label: "outward → inward" },
          { from: "s2", to: "o2" },
          { from: "x1", to: "s1", type: "inhibit", label: "digoxin ⊣ pump" },
        ],
        caption:
          "The source figure's cycle, verbatim in spirit: 3 Na+ out while phosphorylated, 2 K+ in while dephosphorylated, ATP on the cytosolic side — and digoxin as the direct inhibitor that converts the pump into an inotropy lever.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "The three cytoskeletal systems",
      intro: "Structure versus movement — the organizing axis of the whole page.",
      columns: ["System", "Function", "Members / examples"],
      rows: [
        ["Microfilaments (actin)", "Muscle contraction, cytokinesis, phagocytosis; microvilli core", "Actin polymers — also the crawling machinery of motile cells"],
        ["Intermediate filaments", "Structure, anchor organelles, cell-cell and cell-matrix junctions", "Vimentin, desmin, cytokeratin, lamins, glial fibrillary acidic protein (GFAP), neurofilaments"],
        ["Microtubules", "Movement, cell division", "Cilia, flagella, mitotic spindle, axonal trafficking, centrioles"],
      ],
      caption:
        "Intermediate filaments hold; microfilaments and microtubules move. Tumor-pathology panels exploit the member list — cytokeratin for carcinoma, desmin for muscle sarcoma, GFAP for glioma — so the six names are worth verbatim memory.",
    },
    {
      kind: "visual",
      visualId: "microtubule-architecture",
      title: "Microtubule architecture — the polarity axis",
      caption:
        "The cylinder rendered as the source draws it: protofilaments of α-/β-tubulin heterodimers arranged in a helical array, each dimer carrying 2 bound GTP, with the negative end near the nucleus and the positive end toward the cell periphery. Kinesin (anterograde, − → +) and dynein (retrograde, + → −) motor labels ride the tube to anchor the direction rule.",
      notice:
        "Everything on this page hangs on the two ends: minus near the nucleus, plus at the periphery, and 2 GTP per heterodimer. Fix the axis and every motor, pathogen, and drug question becomes a plug-in.",
      },
    {
      kind: "visual",
      visualId: "cilia-axoneme-basal-body",
      title: "Cilia structure — the 9+2 axoneme and its 9-triplet root",
      caption:
        "Cross-sections rendered from the source pair: the motile axoneme as 9 outer doublet microtubules surrounding 2 central singlets, with dynein arms reaching from one doublet toward the next and nexin links tying the ring together; and below it the basal body as 9 microtubule triplets with no central pair — the transition from the cell's anchoring structure to the motile whip.",
      notice:
        "Count, then classify: 9 doublets + 2 singlets = motile axoneme; 9 triplets + no central pair = basal body (and centriole, the same geometry). The dynein arms between doublets are the ATPase motors whose defect causes primary ciliary dyskinesia.",
      },
    {
      kind: "table",
      title: "Microtubule drugs — the assembly blockers",
      intro: "First Aid's own mnemonic: microtubule function 'gets constructed very terribly' by these four.",
      columns: ["Drug", "Class", "Microtubule effect"],
      rows: [
        ["Mebendazole", "Antihelminthic", "Inhibits microtubule assembly in parasitic cells"],
        ["Griseofulvin", "Antifungal", "Inhibits microtubule function (and mitotic spindle) in fungi"],
        ["Vincristine / vinblastine", "Vinca alkaloid (cancer chemotherapy)", "Prevent microtubule polymerization — M-phase arrest, dose-limiting neuropathy"],
        ["Paclitaxel and other taxanes", "Taxane (cancer chemotherapy)", "Stabilize microtubules against disassembly — also M-phase arrest"],
      ],
      caption:
        "Two destroy, two freeze: vinca alkaloids prevent assembly; taxanes prevent disassembly. Both halt the mitotic spindle, which is why M-phase specificity and peripheral neuropathy (axonal transport failure) are their shared signatures.",
    },
    {
      kind: "visual",
      visualId: "dextrocardia-cxr",
      title: "Situs inversus on chest radiograph — the Kartagener film",
      caption:
        "Two chest films side by side as the source presents them: the normal film with the cardiac apex pointing to the viewer's left, and the mirror-image film with the cardiac silhouette on the patient's right (dextrocardia) — the radiographic half of Kartagener syndrome (primary ciliary dyskinesia with situs inversus), with orientation markers A/R/L shown as on the source image.",
      notice:
        "The diagnostic pattern to preserve: heart shadow flipped to the right, apex pointing rightward. On the exam, 'cardiac apex in the right chest + chronic sinusitis + bronchiectasis' is Kartagener before any molecular detail is read.",
      },
    {
      kind: "visual",
      visualId: "na-k-atpase-pump",
      title: "The Na+/K+-ATPase — stoichiometry before pharmacology",
      caption:
        "The pump in the membrane as the source figure draws it: the ATP-binding site on the cytosolic face, 3 Na+ leaving while the pump is phosphorylated, 2 K+ entering as it dephosphorylates, and the digoxin note attached — direct inhibition of the pump raising intracellular Ca2+ and contractility.",
      notice:
        "Memorize the numbers as a fraction — 3 Na+ out / 2 K+ in per ATP — and remember the ATP site is cytosolic. Digoxin binds the extracellular face of the same pump; its inotropic effect is downstream Ca2+ handling, not a direct Ca2+ action.",
      },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) motor matching — kinesin vs dynein, always resolvable by the −/＋ axis; (2) the pathogen-transport set — tetanus toxin, poliovirus, rabies virus, HSV ride dynein retrograde; HSV reactivation exits by kinesin anterograde; (3) the Kartagener vignette — dextrocardia + sinusitis/otitis/bronchiectasis + infertility, screened by ↓ nasal nitric oxide; (4) microtubule-drug matching — which agent prevents polymerization (vinca) vs stabilizes (taxane); (5) pump stoichiometry — 3 Na+ out, 2 K+ in, digoxin as the direct inhibitor.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Why vincristine numbs the feet",
      body: "Vincristine's dose-limiting toxicity is peripheral neuropathy, and the mechanism is on this page twice over: it prevents microtubule polymerization, which both arrests dividing cells at M phase (the antitumor effect) and dismantles the axonal transport rails that kinesin and dynein run (the neurotoxic effect). The same logic explains why slow anterograde transport is the rate-limiting step of peripheral nerve regeneration — nerves regrow only as fast as their cytoskeleton can be shipped down the axon.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why one dynein protein, two dynein diseases",
      body: "Axonemal dynein (the ATPase arms of the 9+2 axoneme) and cytoplasmic dynein (the retrograde motor of axonal transport) are different members of the same family — so 'dynein' appears on this page in two unrelated disease stories: immotile cilia (axonemal arm defect, Kartagener) and retrograde infection routes (cytoplasmic dynein carrying tetanus toxin, polio, rabies, HSV). Reading the stem's context — ciliated epithelium versus neuron — tells you which dynein is meant.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Kartagener syndrome — the immotile-cilia triad",
      body: [
        "Primary ciliary dyskinesia is autosomal recessive, caused by a dynein arm defect producing immotile cilia and dysfunctional ciliated epithelia. The most common type is Kartagener syndrome, defined as PCD with situs inversus: the developmental half (impaired migration and orientation of organs during embryogenesis, giving dextrocardia and full or partial mirror-image anatomy) plus the functional half.",
        "The functional half collects every ciliated surface's failure: recurrent ear infections and sinusitis (eustachian tube and sinus cilia), bronchiectasis from impaired clearance of debris and pathogens, and infertility — ↑ risk of ectopic pregnancy from dysfunctional fallopian tube cilia and immotile spermatozoa. Screening uses ↓ nasal nitric oxide, the practical shortcut to diagnosis before genetic confirmation.",
      ],
    },
    {
      kind: "text",
      title: "Primary cilia — the sensory half of the page",
      body: [
        "Nonmotile (primary) cilia work as chemical signal sensors and have a role in signal transduction and cell growth control — a different job from the motile 9+2 whip. Their dysgenesis may lead to polycystic kidney disease (the primary cilium of the renal tubular epithelium is the flow-sensor whose failure drives cystogenesis), mitral valve prolapse, or retinal degeneration.",
        "This is why 'cilia' on an exam needs a follow-up question: motile cilia clear mucus and set organ laterality; primary cilia listen for signals. One child with dextrocardia and bronchiectasis (motile, dynein) and another with polycystic kidneys (sensory, polycystin pathway) both have ciliary disease — but entirely different ones.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Mebendazole",
      klass: "Antihelminthic",
      target: "Microtubule assembly (parasitic)",
      mechanism: "Inhibits microtubule polymerization in helminth cells — blocks glucose uptake",
      effect: "Starves the parasite of intracellular transport and glucose absorption",
      uses: "Pinworm, hookworm, roundworm, whipworm infections",
      adverse: "GI upset; avoid in pregnancy (first trimester)",
      clue: "The 'M' in the microtubule-inhibitor mnemonic set",
    },
    {
      drug: "Griseofulvin",
      klass: "Antifungal",
      target: "Microtubule function in fungi",
      mechanism: "Disrupts fungal mitotic spindle microtubules",
      effect: "Inhibits fungal mitosis in keratinized tissue",
      uses: "Tinea capitis, onychomycosis (dermatophytes)",
      adverse: "Disulfiram-like reaction with alcohol, teratogenic, ↑ warfarin requirement (CYP induction)",
      clue: "Fungal microtubule inhibitor concentrated in keratin",
    },
    {
      drug: "Vincristine / vinblastine",
      klass: "Vinca alkaloids (chemotherapy)",
      target: "Tubulin polymerization",
      mechanism: "Prevent microtubule assembly → mitotic spindle collapse → M-phase arrest",
      effect: "Antimitotic; also disables axonal transport",
      uses: "ALL, lymphomas, germ cell tumors (vincristine); Hodgkin lymphoma, bladder (vinblastine)",
      adverse: "Vincristine: peripheral neuropathy, constipation/ileus; vinblastine: myelosuppression",
      clue: "Prevent polymerization; vincristine = neurotoxic, vinblastine = marrow-toxic",
    },
    {
      drug: "Paclitaxel (taxanes)",
      klass: "Taxane (chemotherapy)",
      target: "Microtubule stability",
      mechanism: "Stabilizes microtubules against disassembly → cannot depolymerize for mitosis",
      effect: "M-phase arrest; also disrupts axonal transport",
      uses: "Ovarian, breast, and lung carcinomas",
      adverse: "Myelosuppression, hypersensitivity, peripheral neuropathy",
      clue: "The stabilizer — opposite failure mode to vinca, same M-phase arrest",
    },
    {
      drug: "Digoxin",
      klass: "Cardiac glycoside",
      target: "Na+/K+-ATPase (extracellular face)",
      mechanism: "Directly inhibits the pump → ↑ intracellular Na+ → ↓ Na+/Ca2+ exchange → ↑ intracellular Ca2+",
      effect: "↑ myocardial contractility (positive inotropy), ↓ AV conduction",
      uses: "Heart failure (HFrEF), rate control in atrial fibrillation",
      adverse: "GI, visual (yellow-tinted vision), arrhythmia — narrow index",
      clue: "The pump's one named inhibitor; the 3-out/2-in stoichiometry question is its preamble",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 22-year-old man with a lifelong history of recurrent sinusitis and otitis media has bronchiectasis on CT; his chest radiograph shows the cardiac apex in the right hemithorax; semen analysis shows immotile spermatozoa.",
        discriminator: "Dextrocardia + sinopulmonary disease + infertility",
        concept: "Dynein arm defect",
        answer: "Kartagener syndrome (primary ciliary dyskinesia with situs inversus) — screened by ↓ nasal nitric oxide",
      },
      {
        stem: "A gardener sustains a puncture wound; two weeks later trismus and risus sardonicus develop; toxin movement from the wound to the CNS is traced in an experimental model.",
        discriminator: "Toxin travels within the axon toward the cell body",
        concept: "Retrograde axonal transport",
        answer: "Dynein-mediated retrograde transport (as with Clostridium tetani toxin, poliovirus, rabies virus, and HSV)",
      },
      {
        stem: "A woman with recurrent HSV-1 labialis notices prodromal tingling at the lip vermillion border days after a febrile illness; viral particles travel from the trigeminal ganglion to the skin.",
        discriminator: "Ganglion → skin = away from the soma",
        concept: "Anterograde axonal transport",
        answer: "HSV reactivation occurs via anterograde transport from cell body (kinesin mediated)",
      },
      {
        stem: "A patient on chemotherapy for lymphoma develops symmetric numbness in a stocking distribution; the drug's target is shown as a polymerizing hollow cylinder.",
        discriminator: "Chemotherapy-induced peripheral neuropathy from microtubule disruption",
        concept: "Microtubule poisons",
        answer: "Vinca alkaloids prevent polymerization; taxanes stabilize against disassembly — both halt spindle function and axonal transport",
      },
      {
        stem: "A renal physiology question asks for the pump that exports 3 sodium ions for 2 potassium ions per ATP hydrolyzed, with the ATP site on the cytosolic face.",
        discriminator: "3:2 stoichiometry, electrogenic, ouabain/digoxin-sensitive",
        concept: "Primary active transport",
        answer: "Na+/K+-ATPase — directly inhibited by digoxin",
      },
    ],
    traps: [
      {
        a: "Kinesin",
        b: "Dynein",
        whyConfused: "Both are microtubule motors and both names appear in every transport question.",
        keyDifference: "Kinesin carries anterograde (− → +, soma to periphery); dynein carries retrograde (+ → −, periphery to soma).",
        clue: "Kinesin Karrys out; dynein Drags back. The pathogen set (tetanus, polio, rabies, HSV entry) always rides dynein.",
      },
      {
        a: "9 doublets + 2 singlets",
        b: "9 triplets",
        whyConfused: "Both are microtubule counting schemes from the same figure.",
        keyDifference: "9+2 is the motile axoneme (with dynein arms and nexin links); 9 triplets with NO central pair is the basal body (and the centriole).",
        clue: "If the stem says 'no central microtubules,' it is the basal body — count the outer ring for the rest.",
      },
      {
        a: "Vincristine",
        b: "Paclitaxel",
        whyConfused: "Both arrest mitosis at M phase and both cause neuropathy.",
        keyDifference: "Vinca alkaloids PREVENT microtubule polymerization; taxanes STABILIZE microtubules (prevent disassembly).",
        clue: "Opposite biochemistry, identical phenotype: spindle failure.",
      },
      {
        a: "Motile cilia",
        b: "Primary cilia",
        whyConfused: "Both are 'cilia' and both cause named diseases.",
        keyDifference: "Motile cilia (9+2 axoneme, dynein arms) clear and coordinate — their defect is PCD/Kartagener; nonmotile primary cilia are chemical signal sensors — their dysgenesis gives PKD, mitral valve prolapse, retinal degeneration.",
        clue: "Bronchiectasis/situs → motile; polycystic kidneys → primary (sensory).",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'neurotoxic chemotherapy' stem offering vincristine, cisplatin, and methotrexate",
        differentiator: "The target diagram: hollow cylinder (microtubule) vs DNA vs folate metabolism",
        correctPath: "Hollow-cylinder target with stocking-glove neuropathy → vinca alkaloid (or taxane); cisplatin is sensory-dominant neuropathy via DNA cross-linking; methotrexate marrow/toxicity is cell-cycle phased.",
      },
      {
        lookAlike: "A dextrocardia stem offering Kartagener, corrected transposition, and isolated dextrocardia",
        differentiator: "The company dextrocardia keeps",
        correctPath: "Dextrocardia + sinusitis/otitis/bronchiectasis ± infertility → Kartagener (dynein arm defect, ↓ nasal NO); isolated dextrocardia without sinopulmonary disease is a cardiac-axis problem.",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old man is evaluated for infertility. Since childhood he has had recurrent otitis media and maxillary sinusitis requiring multiple antibiotic courses, and high-resolution CT now shows bilateral lower-lobe bronchiectasis. On examination his apical impulse is palpable in the right fifth intercostal space. Chest radiograph confirms a right-sided cardiac silhouette with the stomach bubble in the right upper quadrant. Semen analysis reveals live but immotile spermatozoa. A screening test shows decreased nasal nitric oxide.",
      question: "Which structural defect best explains this patient's findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Absent dynein arms of the ciliary axoneme",
          why: "Correct. The dynein arm is the ATPase linking peripheral doublets; its defect (autosomal recessive) makes cilia immotile — situs inversus from failed embryonic rotation, sinusitis/otitis/bronchiectasis from failed clearance, and infertility from immotile sperm and dysfunctional tubal cilia. Kartagener syndrome is PCD with situs inversus, and ↓ nasal nitric oxide screens for it.",
        },
        {
          label: "B",
          text: "Defective kinesin-mediated anterograde transport",
          why: "Tempting because microtubule motors are the same family — but kinesin failure would halt cargo delivery to the periphery, not ciliary beating; the situs and clearance findings demand the axonemal story.",
        },
        {
          label: "C",
          text: "Absence of the central pair of microtubules in the basal body",
          why: "Nearly right by design: the basal body normally has 9 triplets and no central pair — that is its normal anatomy, not the lesion. The defect is the dynein arm of the 9+2 axoneme above it.",
        },
        {
          label: "D",
          text: "Loss of gap junctions between ciliated epithelial cells",
          why: "Gap junctions enable coordinated ciliary movement — a real participant from the same page — but their loss disrupts coordination, not the beat machinery itself, and would not produce situs inversus.",
        },
        {
          label: "E",
          text: "Defective Na+/K+-ATPase in ciliated epithelium",
          why: "The pump shares the page and the figure, but its inhibition explains ion gradients and digoxin pharmacology, not immotile cilia or mirrored organs.",
        },
      ],
      reasoning:
        "Three organ systems line up on one mechanism: situs inversus (embryonic nodal cilia failed to bias organ laterality), sinopulmonary disease (bronchiectasis from uncleared debris and pathogens), and infertility (immotile spermatozoa, ectopic-prone tubal cilia). The screening clue — ↓ nasal nitric oxide — closes it: primary ciliary dyskinesia, Kartagener type, from a dynein arm defect.",
    },
  },
  mnemonics: [
    {
      code: "“Kinesin Karrys; Dynein Drags back”",
      meaning: "Kinesin carries cargo anterograde (− → +, toward the periphery/terminal); dynein drags cargo retrograde (+ → −, back to the soma).",
      memorizes: "Motor-direction matching",
      whenToUse: "Any axonal-transport or pathogen-translocation question.",
      clinical: "Tetanus toxin, poliovirus, rabies virus, and HSV ride dynein in; HSV reactivation rides kinesin out.",
    },
    {
      code: "“Microtubule function gets Constructed Very Terribly”",
      meaning: "the four microtubule inhibitors —Constructed = Colchicine-class-style assembly blockers here: Mebendazole; Very = Vinca alkaloids (prevent assembly); Terribly = Taxanes (stabilize) with Griseofulvin anchoring the set (First Aid's own line: drugs inhibiting microtubule function 'get constructed very terribly').",
      memorizes: "Mebendazole, Griseofulvin, Vinca alkaloids, Taxanes",
      whenToUse: "Any microtubule-drug matching question.",
      clinical: "Vinca prevents polymerization; taxanes prevent disassembly — same spindle arrest, opposite lesions.",
    },
    {
      code: "“9+2 moves, 9-triplet roots, 3-out-2-in pumps”",
      meaning: "9 doublets + 2 singlets = motile axoneme; 9 triplets, no central pair = basal body/centriole; 3 Na+ out / 2 K+ in per ATP = Na+/K+-ATPase.",
      memorizes: "The three counting facts of the page",
      whenToUse: "Cilia cross-section identification and pump stoichiometry stems.",
      clinical: "Dynein arm defect between the 9+2 doublets = Kartagener; digoxin blocks the 3:2 pump.",
    },
  ],
  rapidReview: {
    s30: [
      "Microfilaments (actin): muscle contraction, cytokinesis, phagocytosis.",
      "Intermediate filaments (structure): vimentin, desmin, cytokeratin, lamins, GFAP, neurofilaments.",
      "Microtubules (movement/division): cilia, flagella, mitotic spindle, axonal trafficking, centrioles.",
      "Microtubule = helical array of α-/β-tubulin heterodimers; each dimer has 2 GTP.",
      "Kinesin anterograde (− → +); dynein retrograde (+ → −).",
      "Na+/K+-ATPase: 3 Na+ out, 2 K+ in per ATP; digoxin directly inhibits it.",
    ],
    m3: [
      "Negative end near nucleus; positive end toward periphery.",
      "Tetanus toxin, poliovirus, rabies virus, HSV use dynein retrograde transport; HSV reactivation exits via kinesin anterograde.",
      "Slow anterograde transport = rate-limiting step of peripheral nerve regeneration.",
      "Motile cilia: 9 doublet + 2 singlet axoneme; basal body: 9 triplets, no central microtubules.",
      "PCD: AR dynein arm defect → immotile cilia; Kartagener = PCD + situs inversus; ↓ nasal nitric oxide screening.",
      "Primary cilia are chemical signal sensors; dysgenesis → PKD, mitral valve prolapse, retinal degeneration.",
      "Axonemal dynein is an ATPase causing bending by differential sliding of doublets; gap junctions coordinate ciliary movement.",
    ],
    m10: [
      "Mebendazole and griseofulvin inhibit microtubule function in helminths and fungi respectively.",
      "Vinca alkaloids prevent polymerization; taxanes stabilize microtubules — both arrest M phase.",
      "Kartagener triad: dextrocardia, sinusitis/bronchiectasis, infertility (immotile sperm, ↑ ectopic risk).",
      "Vincristine's dose-limiting toxicity is peripheral neuropathy via axonal-transport failure.",
      "The Na+/K+-ATPase ATP-binding site faces the cytosol; digoxin binds the extracellular face.",
      "Pump stoichiometry is electrogenic: net one positive charge exported per cycle.",
    ],
  },
  recall: [
    {
      q: "Which motor runs anterograde transport and in which direction do the microtubule ends run?",
      a: "Kinesin, anterograde (− → +): negative end near the nucleus, positive end toward the cell periphery; dynein runs retrograde (+ → −).",
    },
    {
      q: "Which pathogens exploit dynein-mediated retrograde axonal transport?",
      a: "Clostridium tetani toxin, poliovirus, rabies virus, and herpes simplex virus; HSV reactivation exits the ganglion via kinesin-mediated anterograde transport.",
    },
    {
      q: "Describe the microtubule building block.",
      a: "A helical array of polymerized α- and β-tubulin heterodimers; each dimer has 2 GTP.",
    },
    {
      q: "Contrast the axoneme and the basal body.",
      a: "Axoneme (motile cilium): 9 doublet + 2 singlet arrangement with dynein arms; basal body: 9 microtubule triplets with no central microtubules.",
    },
    {
      q: "What is Kartagener syndrome and how is it screened?",
      a: "Primary ciliary dyskinesia with situs inversus — autosomal recessive dynein arm defect causing immotile cilia; recurrent sinusitis/otitis, bronchiectasis, infertility (immotile sperm, ectopic pregnancy risk); screened by ↓ nasal nitric oxide.",
    },
    {
      q: "Name the four microtubule-inhibiting drugs and distinguish vinca from taxane.",
      a: "Mebendazole, griseofulvin, vinca alkaloids (vincristine/vinblastine), taxanes (paclitaxel); vinca prevents microtubule polymerization, taxanes stabilize microtubules against disassembly.",
    },
    {
      q: "What are the functions of nonmotile primary cilia, and what diseases follow their dysgenesis?",
      a: "Chemical signal sensors with roles in signal transduction and cell growth control; dysgenesis may lead to polycystic kidney disease, mitral valve prolapse, or retinal degeneration.",
    },
    {
      q: "State the Na+/K+-ATPase stoichiometry and its direct inhibitor.",
      a: "For each ATP consumed, 3 Na+ go out of the cell and 2 K+ go in; digoxin directly inhibits Na+/K+-ATPase.",
    },
  ],
  related: [
    {
      title: "Organelles & Cell Trafficking",
      note: "Vesicular cargo moved by COPI/COPII/clathrin is hauled between organelles on these same microtubule rails — coats decide what rides, motors decide where.",
      topicId: "organelles-cell-trafficking",
    },
    {
      title: "Cell Cycle & Checkpoints",
      note: "The mitotic spindle that executes M phase is pure microtubule — vinca and taxane arrest there, which is the pharmacologic bridge between the two pages.",
      topicId: "cell-cycle",
    },
    {
      title: "Chromatin Organization",
      note: "Lamins — the intermediate filaments of the nuclear lamina — anchor chromatin; the cytoskeleton's structural class reaches into gene regulation.",
      topicId: "chromatin-organization",
    },
    {
      title: "Translation & Protein Processing",
      note: "Slow anterograde transport ships newly synthesized cytoskeletal and synaptic protein down the axon — synthesis and transport are one supply chain.",
      topicId: "translation-protein-synthesis",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology",
      connection: "Tetanus toxin, poliovirus, rabies virus, and HSV reach the CNS by dynein retrograde transport; HSV exits by kinesin anterograde transport.",
    },
    {
      subject: "Pharmacology",
      connection: "Mebendazole, griseofulvin, vinca alkaloids, and taxanes all poison microtubules; digoxin directly inhibits the Na+/K+-ATPase.",
    },
    {
      subject: "Pathology/Neurology",
      connection: "Bronchiectasis and sinusitis in Kartagener, and the peripheral neuropathy of chemotherapy, are the two clinical faces of cytoskeletal failure.",
    },
    {
      subject: "Renal/Cardiovascular",
      connection: "The 3:2 pump establishes the Na+ gradient every epithelium uses, and its digoxin inhibition is the inotropy lever of heart-failure pharmacology.",
    },
  ],
};
