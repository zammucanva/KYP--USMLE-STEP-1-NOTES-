import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 29).
// Source: First Aid 2026, Part 1 pdf 126 / book 104
// (Complement; Opsonins; Inhibitors)

export const complementPathways: KypUsMLENote = {
  id: "complement-pathways",
  title: "The Complement System",
  subtitle:
    "A hepatically synthesized plasma-protein system serving innate immunity and inflammation, entered by three doors and ending in one pore. CLASSICAL: IgG or IgM mediated — antigen-antibody complexes engage the C1 complex. LECTIN: mannose or other sugars on the microbe surface engage MBL-MASP. ALTERNATIVE: bacterial products on microbial surfaces — spontaneous C3b with Factor B (Bb), stabilized by properdin or factor D — feeding a C3b amplification loop. All three converge on the C3 convertases (C4b2a classical/lectin; C3bBb alternative), which cleave C3 into C3b — opsonization, binding lipopolysaccharides on bacteria, clearing immune complexes — and C3a, an anaphylatoxin. C5 convertases cleave C5 into C5b and C5a: C5a is both an anaphylatoxin and the neutrophil chemotaxis signal; C5b recruits C6-C9 (polymerized C9) into the membrane attack complex (MAC, C5b-9) for cytolysis — the defense against gram-negative bacteria that matters most for Neisseria, whose deficiency causes recurrent infection. C3b and IgG are the two primary opsonins in bacterial defense. The system is held off self cells (eg, RBCs) by inhibitors: decay-accelerating factor (DAF/CD55) and C1 inhibitor (C1 esterase inhibitor). The CH50 test screens classical pathway activation.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — three activation pathways (classical IgG/IgM, lectin MBL, alternative tickover), C3/C5 convertases, opsonins (C3b, IgG), anaphylatoxins (C3a, C4a, C5a), C5a chemotaxis, MAC (C5b-9), Neisseria susceptibility, CH50, inhibitors (DAF/CD55, C1-INH)",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 104 (Complement; Opsonins; Inhibitors)",
  tags: [
    "complement",
    "classical pathway",
    "alternative pathway",
    "lectin pathway",
    "C1 complex",
    "C1qrs",
    "mannan-binding lectin",
    "MBL",
    "MASP",
    "properdin",
    "factor D",
    "factor B",
    "C3 convertase",
    "C4b2a",
    "C3bBb",
    "C3b",
    "C3a",
    "C4a",
    "C5a",
    "anaphylatoxin",
    "anaphylaxis",
    "neutrophil chemotaxis",
    "C5 convertase",
    "C5b",
    "C6",
    "C7",
    "C8",
    "C9",
    "membrane attack complex",
    "MAC",
    "C5b-9",
    "cytolysis",
    "opsonization",
    "opsonins",
    "IgG opsonin",
    "immune complexes",
    "lipopolysaccharide",
    "gram-negative bacteria",
    "Neisseria",
    "recurrent infection",
    "CH50",
    "decay-accelerating factor",
    "DAF",
    "CD55",
    "C1 inhibitor",
    "C1 esterase inhibitor",
    "hereditary angioedema",
    "paroxysmal nocturnal hemoglobinuria",
    "hepatic synthesis",
  ],
  core: {
    what: "Complement is a system of hepatically synthesized plasma proteins that play a role in innate immunity and inflammation; the membrane attack complex (MAC) defends against gram-negative bacteria, and the CH50 test screens for activation of the classical complement pathway. Activation occurs by three routes: CLASSICAL — IgG or IgM mediated (antigen-antibody complexes engaging the C1 complex); ALTERNATIVE — bacterial products on microbial surfaces, with spontaneous C3b, Factor B (Bb), and stabilization by properdin or factor D forming an amplification loop; LECTIN — mannose or other sugars on the microbe surface engaging the MBL-MASP complex. All three routes generate C3 convertases (classical/lectin C4b2a; alternative C3bBb) that cleave C3, and the C3 convertases plus C3b form C5 convertases that cleave C5. The functions map to the fragments: C3b — opsonization (it binds lipopolysaccharides on bacteria and also helps clear immune complexes); C3a, C4a, C5a — anaphylaxis (mast-cell degranulation, histamine, increased endothelial permeability, inflammation); C5a — neutrophil chemotaxis; C5b-9 (MAC) — cytolysis, with C5b recruiting C6, C7, C8, and polymerized C9 into the pore. C3b and IgG are the two primary opsonins in bacterial defense, enhancing phagocytosis. Regulation: decay-accelerating factor (DAF, also called CD55) and C1 inhibitor (formerly called C1 esterase inhibitor) help prevent complement activation on self cells (eg, RBCs). MAC is important for neutralizing Neisseria species, and its deficiency results in recurrent infection.",
    why: "Complement is where the antibody chapter and the innate effector chapter meet: IgG/IgM immune complexes are the classical door, the fragments carry the effector jobs (opsonize, inflame, recruit, lyse), and every deficiency state is a question about WHICH fragment failed. The clinical map is high-yield end to end: terminal component (C5-C9/MAC) deficiency = recurrent Neisseria meningitis/sepsis with preserved immunity to everything else (the single most-tested complement fact); C3 deficiency = severe recurrent pyogenic infections PLUS immune-complex disease (C3b clears complexes); properdin deficiency (X-linked) = Neisseria again, through a wobbling alternative pathway; C1 inhibitor deficiency = hereditary angioedema — recurrent non-pitting swelling without urticaria, since bradykinin, not histamine, is the mediator; and DAF/CD55 loss (with CD59) = paroxysmal nocturnal hemoglobinuria — RBCs lysed by the very cascade this page describes. The CH50 assay ties the bench to the bedside: it screens the WHOLE classical pathway, so any single classical/terminal deficiency drops it, while the AH50 screens the alternative route.",
    keyIdea: "Three doors, one engine, four outputs, two brakes. DOORS: classical (IgG/IgM immune complex → C1 complex), lectin (microbe-surface mannose → MBL-MASP), alternative (bacterial products → spontaneous C3b + Factor B/Bb, stabilized by properdin/factor D, self-amplifying). ENGINE: C3 convertase (C4b2a or C3bBb) splits C3; C3 convertase + C3b = C5 convertase splits C5. OUTPUTS by fragment: C3b = opsonin (binds LPS, clears immune complexes; with IgG one of the two primary opsonins); C3a/C4a/C5a = anaphylatoxins (mast cells → histamine → permeability → inflammation); C5a = also neutrophil chemotaxis; C5b + C6-C9 (polymerized C9) = MAC → cytolysis, the gram-negative/Neisseria defense (deficiency → recurrent infection). BRAKES: DAF (CD55) and C1-INH keep the cascade off self cells (RBCs). Test: CH50 = classical pathway screen. Disease map: terminal deficiency = Neisseria; C3 deficiency = pyogenic + immune-complex disease; C1-INH deficiency = hereditary angioedema (bradykinin, no urticaria); DAF/CD55 loss = RBC lysis (PNH).",
  },
  mechanisms: [
    {
      id: "complement-cascade-three-doors",
      title: "The cascade — three activation doors converge on C3, then C5, then the pore",
      context: "How complement goes from recognition to lysis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A target appears: an immune complex (classical), a microbe-surface sugar (lectin), or a bare microbial surface (alternative)",
            sublabel: "Input — classical is IgG/IgM mediated; lectin reads mannose; alternative reads bacterial products via spontaneous C3b + Factor B/Bb (properdin/factor D stabilized).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Each door builds its C3 convertase: C1 complex → C4b2a (classical); MBL-MASP → C4b2a (lectin); C3bBb (alternative, amplified by the C3b feedback loop)",
            sublabel: "Process — three enzymes, one product: all three doors cleave C3.",
            variant: "process",
          },
          {
            id: "s2",
            label: "C3 splits: C3b (opsonization, LPS binding, immune-complex clearance, amplification) and C3a (anaphylatoxin); C3 convertase + C3b becomes the C5 convertase",
            sublabel: "Process — C3b is both an effector (opsonin) and an amplifier (more C3 convertase) — the cascade's fulcrum.",
            variant: "process",
          },
          {
            id: "s3",
            label: "C5 splits: C5a (anaphylatoxin + neutrophil chemotaxis) and C5b (seeds the pore)",
            sublabel: "Process — C5b recruits C6 → C7 → C8 → polymerized C9 into the membrane attack complex.",
            variant: "process",
          },
          {
            id: "o1",
            label: "MAC (C5b-9) punches a cylinder pore → cytolysis — the gram-negative defense, critical for Neisseria (deficiency → recurrent infection)",
            sublabel: "Output — with the parallel soft outputs: opsonized targets eaten, neutrophils fetched, mast cells degranulated, vessels leaked.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "door opens" },
          { from: "s1", to: "s2", label: "C3 cleaved" },
          { from: "s2", to: "s3", label: "C5 convertase" },
          { from: "s3", to: "o1", label: "C5b-9 assembles" },
        ],
        caption:
          "The cascade is a converging funnel. Three independent recognition events — antibody engagement (classical, via the C1 complex), sugar-pattern reading (lectin, via MBL-MASP on mannose-coated surfaces), and spontaneous tickover on microbial surfaces that lack complement regulators (alternative, C3b + Factor B/Bb stabilized by properdin or factor D) — all produce a C3 convertase. From there the path is shared: C3 convertase splits C3 into C3b (the opsonin that binds LPS on bacteria and clears immune complexes, and the amplifier that builds more convertase — the feedback loop) and C3a (an anaphylatoxin). Adding C3b to a C3 convertase makes a C5 convertase, which splits C5 into C5a (anaphylatoxin AND neutrophil chemotaxis) and C5b (the seed of the pore). C5b assembles C6, C7, C8, and polymerized C9 into the membrane attack complex — a cylinder that drills through the membrane and lyses the cell. The design explains the deficiency map: anything upstream of C3 (classical components, C3 itself) compromises opsonization AND lysis AND immune-complex clearance; anything downstream (C5-C9) costs only the pore — hence isolated, recurrent Neisseria infections.",
      },
    },
    {
      id: "complement-self-nonself-brakes",
      title: "The brakes — why complement spares self cells, and what their failure causes",
      context: "Regulation: DAF/CD55 and C1 inhibitor",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "C3 tickover happens constantly — convertases assemble by accident on ANY nearby membrane, including self",
            sublabel: "Input — the alternative pathway is always idling; distinction between self and microbe is regulatory, not intrinsic.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Self cells carry decay-accelerating factor (DAF/CD55), which dismantles the convertases before they amplify",
            sublabel: "Process — DAF accelerates the decay of C3/C5 convertases on the host membrane; microbes lack it.",
            variant: "process",
          },
          {
            id: "s2",
            label: "C1 inhibitor (C1 esterase inhibitor) restrains the classical initiator (and the kallikrein-bradykinin axis)",
            sublabel: "Process — C1-INH keeps the C1 complex (and MASP, and kallikrein) in check at the activation door.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Self cells are spared; when the brakes fail: C1-INH loss → hereditary angioedema (bradykinin-mediated swelling, no urticaria); DAF/CD55 loss → complement-mediated RBC lysis (PNH)",
            sublabel: "Output — the two inhibitor-failure diseases are the exam's regulatory questions (disease specifics are the KYP clinical layer; the inhibitor names are the printed facts).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "tickover on self" },
          { from: "s1", to: "s2", label: "convertase decayed" },
          { from: "s2", to: "o1", label: "brakes hold or fail" },
        ],
        caption:
          "Complement's specificity for microbes is mostly NEGATIVE: microbial surfaces lack the regulators that host cells display, so the alternative pathway's idle tickover amplifies on bacteria and decays on self. The printed inhibitors are DAF (CD55) — which accelerates the decay of the C3 and C5 convertases on host membranes — and C1 inhibitor (formerly C1 esterase inhibitor), which restrains the classical door's C1 complex. Their failures produce two classic syndromes: C1-INH deficiency (hereditary angioedema) — recurrent episodes of non-pitting angioedema of the face, airway, and GI tract, triggered by trauma or stress, WITHOUT urticaria or pruritus, because the runaway is bradykinin (C1-INH also inhibits kallikrein), not the mast-cell histamine cascade; and loss of DAF/CD55 with CD59 on RBCs (paroxysmal nocturnal hemoglobinuria — GPI-anchor deficiency strips all GPI-linked regulators) — chronic complement-mediated hemolysis with hemoglobinuria. The lesson generalizes: complement diseases are regulator diseases as often as component diseases.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "complement-cascade-map",
      title: "The cascade — three doors, one engine, two brakes",
      caption:
        "An original KYP redraw of the source's cascade diagram: the classical (IgG/IgM immune complex → C1 complex), lectin (mannose/other sugars → MBL-MASP), and alternative (microbial surface, spontaneous C3b + Factor B/Bb, properdin/factor D, amplification loop) doors; the C3 and C5 convertases; the fragment outputs (C3b opsonization with LPS binding and immune-complex clearance; C3a anaphylatoxin; C5a anaphylatoxin + neutrophil chemotaxis; C5b → C6-C9/polymerized C9 → MAC → cytolysis); the anaphylatoxin-mast-cell-histamine-permeability rail; the opsonization panel (C3b-coated microbe engaging the complement receptor on a phagocyte — C3b and IgG the two primary opsonins); the testing/clinical anchors (CH50, gram-negative defense, Neisseria); and the inhibitor strip (DAF/CD55, C1-INH) with the failure-disease bridge.",
      notice:
        "The source's cascade diagram is pure vector (pdf 126 carries zero rasters); this visual is an original KYP redraw of its topology — FA's printed mnemonic phrases are not reproduced.",
    },
    {
      kind: "table",
      title: "Activation, functions, opsonins, inhibitors — verbatim",
      intro: "The source's complement roster, verbatim.",
      columns: ["", "Verbatim"],
      rows: [
        ["Definition", "System of hepatically synthesized plasma proteins that play a role in innate immunity and inflammation. Membrane attack complex (MAC) defends against gram ⊝ bacteria. The CH50 test is used to screen for activation of the classical complement pathway."],
        ["ACT — classical", "Classic—IgG or IgM mediated."],
        ["ACT — alternative", "Alternative—bacterial products."],
        ["ACT — lectin", "Lectin—mannose or other sugars on microbe surface."],
        ["Functions", "C3b—opsonization. C3a, C4a, C5a—anaphylaxis. C5a—neutrophil chemotaxis. C5b-9 (MAC)—cytolysis."],
        ["C3b targets + Neisseria", "C3b binds to lipopolysaccharides on bacteria. MAC complex is important for neutralizing Neisseria species. Deficiency results in recurrent infection."],
        ["Opsonins", "Opsonins—C3b and IgG are the two 1° opsonins in bacterial defense; enhance phagocytosis. C3b also helps clear immune complexes. Opsonin (Greek) = to prepare for eating."],
        ["Inhibitors", "Inhibitors—decay-accelerating factor (DAF, also called CD55) and C1 inhibitor (formerly called C1 esterase inhibitor) help prevent complement activation on self cells (eg, RBCs)."],
      ],
      caption:
        "Read the ACT rows as interchangeable entries into one funnel and the Functions row as the fragment job list: 'b' fragments bind (C3b opsonizes), 'a' fragments alarm (anaphylaxis), C5a additionally fetches (chemotaxis), and C5b-9 blasts (cytolysis). The CH50 sentence anchors the laboratory: it screens the CLASSICAL pathway specifically.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The deficiency map — which fragment failed predicts the infections",
      body: "Terminal components (C5-C9/MAC): recurrent Neisseria meningitidis and gonococcal infections — the pore is gone but opsonization is intact (the single most-tested complement deficiency pattern). C3 deficiency: severe recurrent pyogenic infections PLUS immune-complex/glomerular disease (C3b opsonizes AND clears complexes). Classical early components (C1-C4, eg, C2, C4): immune-complex disease and partial Neisseria risk. Properdin (X-linked): Neisseria via an unstable alternative pathway. C1-INH: hereditary angioedema — recurrent non-pitting face/airway/GI swelling WITHOUT urticaria (bradykinin, not histamine; worsened by trauma, dental work, stress; labs during attacks show LOW C4 with low C1-INH). DAF/CD55 (with CD59) loss: paroxysmal nocturnal hemoglobinuria — RBCs lysed by chronic complement tickover. (Disease-genetics specifics beyond the printed inhibitor sentence are the KYP clinical layer.)",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An 18-year-old has had two episodes of meningococcal meningitis; responses to routine vaccines are robust, and opsonization assays are normal.",
        discriminator: "Recurrent Neisseria with otherwise intact immunity",
        concept: "Terminal complement (C5-C9/MAC) deficiency",
        answer:
          "MAC is important for neutralizing Neisseria species; deficiency results in recurrent infection. Terminal-component loss removes only the pore: opsonization (C3b), anaphylaxis, and chemotaxis still function, so infections cluster on the one organism whose clearance is MAC-dependent — Neisseria (whose outer membrane and serum exposure make it the complement lysis sentinel). Screening: CH50 ≈ 0 with normal antigen-specific vaccine titers; management: meningococcal vaccination, prophylaxis, and prompt treatment of fevers.",
      },
      {
        stem: "A teenager develops recurrent episodes of facial and laryngeal swelling without hives or itching, beginning hours after dental procedures; there is no response to antihistamines, and C4 is persistently low.",
        discriminator: "Angioedema without urticaria + low C4 + procedure triggers",
        concept: "C1 inhibitor deficiency — hereditary angioedema",
        answer:
          "C1 inhibitor (formerly C1 esterase inhibitor) helps prevent complement activation on self cells; its deficiency also unleashes the kallikrein-bradykinin axis, so attacks are bradykinin-mediated — non-pitting angioedema without urticaria or pruritus, resistant to antihistamines, triggered by trauma (dental work) or stress. Consumed classical components keep C4 LOW between and during attacks. Therapy: C1-INH concentrate, bradykinin B2 receptor antagonists (icatibant) or kallikrein inhibitors during attacks.",
      },
      {
        stem: "A research sample's serum fails to lyse antibody-sensitized sheep erythrocytes (CH50 ≈ 0) but lyses rabbit erythrocytes normally in the alternative-pathway assay.",
        discriminator: "CH50 zero with normal alternative activity",
        concept: "Classical-pathway-specific defect screened by CH50",
        answer:
          "The CH50 test screens activation of the CLASSICAL complement pathway: it needs every classical and terminal component (C1 through C9). A zero CH50 with a normal alternative-pathway assay localizes the defect to the classical arm specifically — C1, C2, or C4 — while the alternative route (C3bBb, properdin-stabilized) remains functional. A zero in BOTH assays points to a shared component: C3 or a terminal (C5-C9) deficiency.",
      },
    ],
    traps: [
      {
        a: "C3a is the chemotaxis fragment",
        b: "C5a — not C3a — is the neutrophil chemotaxis signal",
        whyConfused: "All three 'a' fragments are anaphylatoxins, so their jobs blur.",
        keyDifference:
          "The printed list assigns jobs precisely: C3a, C4a, C5a — anaphylaxis (all three), but C5a — neutrophil chemotaxis (C5a alone). C5a is complement's most potent chemoattractant; if a stem asks what draws neutrophils to a complement-rich site, the answer is C5a.",
        clue: "Any chemotaxis or 'which fragment recruits neutrophils' question.",
      },
      {
        a: "CH50 screens all complement activity",
        b: "CH50 screens the CLASSICAL pathway specifically",
        whyConfused: "It is called 'the complement screen.'",
        keyDifference:
          "The source states it exactly: 'The CH50 test is used to screen for activation of the classical complement pathway' — antibody-sensitized cells lysis requires C1-C9. The alternative pathway has its own assay (AH50, rabbit-cell based). Comparing the two localizes defects: CH50 low/AH50 normal = classical; both low = C3 or terminal; AH50 low alone = alternative (properdin, factor D/B).",
        clue: "Any CH50 interpretation question.",
      },
      {
        a: "Alternative pathway requires antibody",
        b: "The alternative pathway is antibody-INDEPENDENT (bacterial products + tickover)",
        whyConfused: "All three pathways converge on the same convertases, so the doors blur.",
        keyDifference:
          "Classic—IgG or IgM mediated (needs adaptive antibody). Lectin—mannose or other sugars on the microbe surface (innate pattern recognition via MBL-MASP). Alternative—bacterial products: spontaneous C3 tickover on surfaces lacking regulators, Factor B (Bb), properdin/factor D. Only the classical door needs prior immunity — the other two are innate and can act immediately.",
        clue: "Any 'which pathway is antibody-independent' or first-response timing question.",
      },
    ],
    pivots: [
      {
        lookAlike: "C3 deficiency vs terminal (C5-C9) deficiency",
        differentiator: "Breadth of the immune defect",
        correctPath:
          "C3 deficiency: the fulcrum is gone — no opsonization (C3b), impaired immune-complex clearance, weak amplification → severe recurrent PYOGENIC infections + immune-complex disease, and Neisseria risk too. Terminal C5-C9: only the pore is missing → isolated recurrent NEISSERIA with normal opsonization and normal vaccine responses. Broad susceptibility = think C3 (or early classical); narrow Neisseria-only = think terminal components.",
      },
      {
        lookAlike: "Hereditary angioedema vs mast-cell-mediated angioedema",
        differentiator: "Mediator, urticaria, trigger pattern, and C4",
        correctPath:
          "C1-INH deficiency (hereditary angioedema): bradykinin-mediated — non-pitting swelling of face/airway/GI, NO urticaria or pruritus, antihistamine-unresponsive, triggered by trauma/dental work/stress, C4 persistently LOW (consumed C1 activity). Mast-cell-mediated (allergic): histamine-mediated — urticaria + pruritus + flushing usually accompany the swelling, antihistamine-responsive, antigen-triggered, C4 normal. The presence or absence of HIVES is the fastest discriminator.",
      },
    ],
    miniCase: {
      vignette:
        "A 16-year-old girl is evaluated for three episodes of facial and lip swelling over the past year, one progressing to stridor requiring emergency intubation. Each episode began 3-4 hours after dental cleaning or an intense exam week, lasted about 48 hours, and was non-pitting and non-pruritic — no hives, no erythema, no response to antihistamines or epinephrine. Between episodes she is entirely well. Her father reports a similar history of 'throat swelling' that was never diagnosed. Examination today is normal. Laboratory studies between episodes: C4 8 mg/dL (low), C3 normal, C1 inhibitor antigenic level low, normal tryptase.",
      question:
        "Which mechanism best explains this patient's recurrent episodes?",
      options: [
        {
          label: "A",
          text: "Deficiency of C1 inhibitor allowing unchecked bradykinin generation via the kallikrein pathway and classical complement activation",
          correct: true,
          why: "Correct — hereditary angioedema (C1 inhibitor deficiency, formerly C1 esterase inhibitor deficiency). C1-INH restrains both the classical pathway's C1 complex and the kallikrein-bradykinin axis; its loss produces bradykinin-mediated, non-pitting, NON-urticarial angioedema of the face, airway, and GI tract, triggered by trauma (dental work) or stress, unresponsive to antihistamines, with autosomal-dominant inheritance (the father). Low C4 reflects chronically consumed classical components; C3 stays normal; normal tryptase excludes mast-cell activation.",
        },
        {
          label: "B",
          text: "IgE-mediated mast-cell degranulation with histamine release after dental-procedure antigen exposure",
          why: "Mast-cell-mediated angioedema comes with urticaria, pruritus, and flushing, responds to antihistamines/epinephrine, and raises tryptase during attacks — none present here. The 3-4 hour post-procedure timing after MECHANICAL trauma (not a drug or latex antigen) and the family history point to the regulator deficiency instead.",
        },
        {
          label: "C",
          text: "Terminal complement (C5-C9) deficiency impairing Neisseria clearance",
          why: "MAC deficiency manifests as recurrent meningococcal/gonococcal infections — the pore is missing, not the regulator — and would not produce angioedema at all, let alone its bradykinin-trigger pattern. C4 would also be normal.",
        },
        {
          label: "D",
          text: "Loss of decay-accelerating factor (DAF/CD55) from erythrocyte membranes causing episodic intravascular hemolysis",
          why: "DAF loss (with CD59, in paroxysmal nocturnal hemoglobinuria) lets the alternative tickover lyse RBCs — hemolytic anemia, hemoglobinuria, morning dark urine — not soft-tissue angioedema, and it is acquired (GPI-anchor mutation in a clone), not autosomal dominant with a father's history.",
        },
        {
          label: "E",
          text: "Vasogenic edema from episodic bradykinin degradation by ACE-inhibitor medication",
          why: "ACE-inhibitor angioedema mimics the bradykinin phenotype (no urticaria, antihistamine-resistant) — but there is no drug history, episodes are recurring over a year with a family history, and C4 is LOW (C1-INH deficiency consumes C4; drug-induced angioedema leaves complement levels normal).",
        },
      ],
      reasoning:
        "The vignette assembles the hereditary angioedema pentad: recurrent non-pitting angioedema WITHOUT urticaria or pruritus, airway threat, trauma/stress triggers with a 3-4 hour delay, antihistamine unresponsiveness, and an autosomal-dominant family history — plus the laboratory signature of low C4 (classical consumption) with low C1-INH and normal C3. The mechanism is the printed inhibitor's failure: C1 inhibitor restrains both C1 (complement) and kallikrein (bradykinin); without it, bradykinin floods, vessels leak, and soft tissue swells. Distractors: mast-cell allergy (urticaria, tryptase, drug response), terminal deficiency (infections, normal C4), DAF loss (hemolysis, acquired), ACE-inhibitor edema (no drug, no family history, normal complement).",
    },
  },
  mnemonics: [
    {
      code: "\u201cThree ways in: antibodies ring the classical bell; mannose rings the lectin bell; a bare microbe surface rings the alternative bell.\u201d",
      meaning:
        "KYP's key for the three activation doors: IgG/IgM immune complexes engage C1 (classical — the adaptive door, needs prior antibody); microbe-surface mannose and other sugars engage MBL-MASP (lectin — the innate sugar-reader); bacterial products on bare microbial surfaces catch spontaneous C3b with Factor B/Bb, stabilized by properdin or factor D (alternative — the innate always-on door with the amplification loop).",
      memorizes: "The three pathways and their initiators",
      whenToUse: "Any pathway-identification or initiator-matching question.",
      clinical: "Only the classical pathway requires antibody — the lectin and alternative doors make complement part of the INNATE response (E20's sorting).",
    },
    {
      code: "\u201ca-fragments alarm, b-fragments bind; C5a fetches, C5b-9 blasts.\u201d",
      meaning:
        "KYP's key for the fragment jobs: the 'a' fragments (C3a, C4a, C5a) are anaphylatoxins — alarm signals that degranulate mast cells; the 'b' fragment (C3b) binds — the opsonin that coats bacteria (LPS) and immune complexes; C5a additionally FETCHES neutrophils (chemotaxis, its alone); and C5b-9 (with C6-C9, polymerized C9) is the BLAST — the membrane attack complex that lyses gram-negative targets.",
      memorizes: "Function list: C3b opsonization, C3a/C4a/C5a anaphylaxis, C5a chemotaxis, C5b-9 cytolysis",
      whenToUse: "Any fragment-function question — especially C5a vs C3a.",
      clinical: "C5a is the neutrophil magnet in septic foci; C3b (with IgG) is one of the two primary opsonins in bacterial defense.",
    },
    {
      code: "\u201cSelf cells carry the brakes: DAF dismantles the convertase, C1-INH gags the starter — lose one, your RBCs lyse; lose the other, your face swells.\u201d",
      meaning:
        "KYP's key for the inhibitors: DAF (CD55) accelerates convertase decay on self membranes (eg, RBCs) — losing it (with CD59, in PNH) lets tickover lyse red cells; C1 inhibitor restrains the C1 complex (and kallikrein) — losing it (hereditary angioedema) lets bradykinin swell the face and airway without a single hive.",
      memorizes: "DAF/CD55 and C1-INH functions and their deficiency diseases",
      whenToUse: "Any inhibitor, PNH, or hereditary-angioedema question.",
      clinical: "Hereditary angioedema: low C4, no urticaria, antihistamine-resistant; treat attacks with C1-INH concentrate or bradykinin-pathway blockers.",
    },
  ],
  rapidReview: {
    s30: [
      "Complement: hepatically synthesized plasma proteins — innate immunity + inflammation",
      "Classical: IgG or IgM (Ag-Ab complex → C1) · Lectin: mannose sugars (MBL-MASP) · Alternative: bacterial products (C3b + Bb, properdin/factor D)",
      "C3 convertases: C4b2a (classical/lectin) · C3bBb (alternative)",
      "C3b—opsonization · C3a, C4a, C5a—anaphylaxis · C5a—neutrophil chemotaxis · C5b-9 (MAC)—cytolysis",
      "MAC defends against gram ⊝ bacteria — key for Neisseria; deficiency → recurrent infection",
    ],
    m3: [
      "C3b binds LPS on bacteria; C3b + IgG = the two 1° opsonins",
      "C3b also clears immune complexes (C3 deficiency → immune-complex disease)",
      "C3a/C5a → mast-cell degranulation → histamine → ↑ endothelial permeability",
      "C5b + C6 → C7 → C8 → polymerized C9 = MAC pore",
      "Alternative pathway: spontaneous C3 tickover + amplification loop",
    ],
    m10: [
      "CH50 screens the CLASSICAL pathway (AH50 = alternative)",
      "Terminal C5-C9 deficiency → recurrent Neisseria, normal opsonization",
      "C3 deficiency → pyogenic infections + immune-complex disease",
      "C1-INH deficiency → hereditary angioedema: bradykinin, no urticaria, low C4",
      "DAF/CD55 (+CD59) loss → PNH: complement lysis of RBCs",
    ],
  },
  recall: [
    {
      q: "Define complement and name the test that screens its classical pathway.",
      a: "A system of hepatically synthesized plasma proteins that play a role in innate immunity and inflammation. Membrane attack complex (MAC) defends against gram-negative bacteria. The CH50 test is used to screen for activation of the classical complement pathway.",
    },
    {
      q: "Name the three activation routes and their triggers.",
      a: "Classic — IgG or IgM mediated (antigen-antibody complexes engaging the C1 complex). Alternative — bacterial products (microbial surfaces; spontaneous C3b with Factor B/Bb, stabilized by properdin or factor D). Lectin — mannose or other sugars on the microbe surface (MBL-MASP complex).",
    },
    {
      q: "List the four printed fragment functions.",
      a: "C3b — opsonization. C3a, C4a, C5a — anaphylaxis. C5a — neutrophil chemotaxis. C5b-9 (MAC) — cytolysis. Also: C3b binds to lipopolysaccharides on bacteria, and MAC is important for neutralizing Neisseria species; deficiency results in recurrent infection.",
    },
    {
      q: "What are the two primary opsonins, and what else does C3b do?",
      a: "C3b and IgG are the two 1° opsonins in bacterial defense; they enhance phagocytosis. C3b also helps clear immune complexes. (Opsonin, Greek: to prepare for eating.)",
    },
    {
      q: "Name the printed inhibitors and their shared job.",
      a: "Decay-accelerating factor (DAF, also called CD55) and C1 inhibitor (formerly called C1 esterase inhibitor) help prevent complement activation on self cells (eg, RBCs).",
    },
  ],
  related: [
    {
      title: "Immunoglobulin Isotypes & Antigen Memory",
      topicId: "immunoglobulin-isotypes",
      note: "IgM (the strongest fixer) and IgG open the classical door — the isotype-to-complement bridge.",
    },
    {
      title: "Antibody Structure & Function",
      topicId: "antibody-structure",
      note: "The Fc of IgM and IgG fixing complement is where the classical door begins — E27's 5th C in action.",
    },
    {
      title: "Innate vs Adaptive Immunity",
      topicId: "innate-vs-adaptive-immunity",
      note: "Complement is listed among the innate components; the lectin and alternative doors run without any antibody at all.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "The deficiency map in full — C1-INH, C3, terminal components, properdin, and the disease each one predicts.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (Neisseria)",
      connection: "Recurrent meningococcemia or meningococcal meningitis in an otherwise healthy teen = screen for terminal complement deficiency; MAC is the Neisseria-neutralizing effector.",
    },
    {
      subject: "Rheumatology (Immune-Complex Disease)",
      connection: "Early classical and C3 deficiencies impair C3b-mediated immune-complex clearance — the link to lupus-like syndromes and membranoproliferative GN (C3 loss also drives dense-deposit disease).",
    },
    {
      subject: "Hematology (PNH)",
      connection: "GPI-anchor loss strips DAF/CD55 and CD59 from RBCs — chronic complement-mediated hemolysis with hemoglobinuria, the inhibitor-failure disease of the alternative tickover.",
    },
    {
      subject: "Pharmacology (Hereditary Angioedema Therapy)",
      connection: "C1-INH concentrates, kallikrein inhibitors, and bradykinin B2 antagonists treat C1-INH deficiency attacks — antihistamines and epinephrine do not (bradykinin, not histamine).",
    },
  ],
};
