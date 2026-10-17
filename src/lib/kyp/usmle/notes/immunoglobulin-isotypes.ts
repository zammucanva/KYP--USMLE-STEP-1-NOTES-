import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 28).
// Source: First Aid 2026, Part 1 pdf 125 / book 103
// (Immunoglobulin isotypes; IgG; IgA; IgM; IgD; IgE;
//  Antigen type and memory; Thymus-independent antigens; Thymus-dependent antigens)

export const immunoglobulinIsotypes: KypUsMLENote = {
  id: "immunoglobulin-isotypes",
  title: "Immunoglobulin Isotypes & Antigen Memory",
  subtitle:
    "The five-isotype roster and what each is built for. All isotypes can exist as monomers; mature naïve B cells prior to activation express IgM and IgD on their surfaces, and in germinal centers they switch (gene rearrangement induced by cytokines and CD40L) into plasma cells secreting IgA, IgG, or IgE. IgG is the main antibody of the 2° response and the most abundant isotype in serum: it fixes complement, opsonizes bacteria, neutralizes toxins and viruses, and is the ONLY isotype that crosses the placenta (infant passive immunity that wanes after birth); it drives warm autoimmune hemolytic anemia. IgA guards the mucosa: it prevents attachment of bacteria and viruses to mucous membranes, does NOT fix complement, circulates as a monomer but is secreted as a dimer with J chain, crosses epithelial cells by transcytosis, is produced in the GI tract (Peyer patches) protecting against gut infections such as Giardia, is the most produced antibody overall (yet low in serum), appears in tears, saliva, mucus, and breast milk, and picks up secretory component that shields its Fc from luminal proteases. IgM is the FIRST antibody produced in a response, fixes complement, serves as the antigen receptor on the B-cell surface (monomer on the cell, pentamer with J chain when secreted — avid binding while the humoral response evolves), and drives cold autoimmune hemolytic anemia. IgD is the co-receptor on mature naïve B cells with low serum levels. IgE binds mast cells and basophils, cross-links on allergen exposure to mediate type I hypersensitivity via histamine, and contributes to parasite immunity by activating eosinophils. Affinity is the strength of a single antibody-antigen interaction; avidity is the overall strength of multiple interactions in a multivalent molecule (enhanced by the hinge and heavy-chain domains). Thymus-independent antigens (no peptide, eg, LPS, capsular polysaccharides) cannot be presented by MHC, are weakly immunogenic, and their vaccines (eg, PPSV23) need boosters and adjuvants; thymus-dependent antigens (protein component, eg, diphtheria toxoid) produce class switching and immunologic memory through direct B-Th contact.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — five-isotype roster (structure, timing, abundance, complement, placenta, secretions, mast cells), affinity vs avidity, thymus-independent vs thymus-dependent antigens",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 103 (Immunoglobulin isotypes; IgG; IgA; IgM; IgD; IgE; Antigen type and memory)",
  tags: [
    "immunoglobulin isotypes",
    "IgG",
    "IgA",
    "IgM",
    "IgD",
    "IgE",
    "secondary response",
    "primary response",
    "most abundant isotype",
    "serum",
    "fixes complement",
    "opsonization",
    "neutralization",
    "placenta",
    "placental transfer",
    "passive immunity",
    "warm autoimmune hemolytic anemia",
    "cold autoimmune hemolytic anemia",
    "mucous membranes",
    "J chain",
    "dimer",
    "pentamer",
    "transcytosis",
    "Peyer patches",
    "Giardia",
    "secretory component",
    "breast milk",
    "mast cells",
    "basophils",
    "type I hypersensitivity",
    "histamine",
    "eosinophils",
    "parasites",
    "affinity",
    "avidity",
    "isotype switching",
    "germinal centers",
    "thymus-independent antigens",
    "thymus-dependent antigens",
    "lipopolysaccharide",
    "capsular polysaccharide",
    "PPSV23",
    "adjuvants",
    "diphtheria toxoid",
    "class switching",
    "immunologic memory",
  ],
  core: {
    what: "All isotypes can exist as monomers. Mature, naïve B cells prior to activation express IgM and IgD on their surfaces; they may differentiate in germinal centers of lymph nodes by isotype switching (gene rearrangement, induced by cytokines and CD40L) into plasma cells that secrete IgA, IgG, or IgE. IgG is the main antibody in the 2° response to an antigen and the most abundant isotype in serum; it fixes complement, opsonizes bacteria, neutralizes bacterial toxins and viruses, and is the only isotype that crosses the placenta — providing infants with passive immunity that starts to wane after birth; it is associated with warm autoimmune hemolytic anemia. IgA prevents attachment of bacteria and viruses to mucous membranes and does not fix complement; it is a monomer in circulation or a dimer with J chain when secreted, crosses epithelial cells by transcytosis, is produced in the GI tract (eg, by Peyer patches) and protects against gut infections (eg, Giardia); it is the most produced antibody overall but has lower serum concentrations, is released into secretions (tears, saliva, mucus) and breast milk, and picks up secretory component from epithelial cells, which protects the Fc portion from luminal proteases. IgM is the first antibody to be produced during an immune response; it fixes complement and is the antigen receptor on the surface of B cells — a monomer on the B cell, a pentamer with J chain when secreted, the pentamer enabling avid binding to antigen while the humoral response evolves; it is associated with cold autoimmune hemolytic anemia. IgD is expressed on the surface of mature, naïve B cells, with normally low levels detectable in serum. IgE binds mast cells and basophils; it cross-links when exposed to allergen, mediating immediate (type I) hypersensitivity through release of inflammatory mediators such as histamine, and contributes to immunity to parasites by activating eosinophils. Affinity is the strength of a single antibody-antigen interaction; avidity (enhanced by the hinge region and heavy chain domains) is the overall binding strength from multiple interactions in a multivalent molecule. Thymus-independent antigens lack a peptide component (eg, lipopolysaccharides from gram-negative bacteria), cannot be presented by MHC to T cells, and are weakly immunogenic — their vaccines often require boosters and adjuvants (eg, the capsular polysaccharide PPSV23). Thymus-dependent antigens contain a protein component (eg, diphtheria toxoid); class switching and immunologic memory occur as a result of direct contact of B cells with Th cells.",
    why: "The isotype roster is the most-queried single table in Immunology: every vaccine vignette (PPSV23 boosters vs toxoid series), every maternal-infant IgG timeline question (passive immunity waning at 3-6 months), every hypersensitivity stem (IgE cross-linking), every serology question (IgM = recent/acute, IgG = past or secondary), and both autoimmune hemolytic anemias (warm IgG at body temperature, cold IgM) resolve to this page. The structure column explains the function column: IgM's pentamer (five Fc regions on one J-chained unit) makes it the strongest complement fixer and an avid early binder; IgA's dimer-plus-secretory-component design suits luminal survival; IgG's monomer balances abundance, placental transport (its Fc binds the neonatal Fc receptor), and opsonic flexibility; IgE's FcεRI affinity arms mast cells for weeks. The thymus-independent/dependent split then explains WHY polysaccharide vaccines underperform in infants and need conjugation (protein carriers convert TI antigens into TD ones, buying class switching and memory) — the immunologic logic behind every conjugate vaccine.",
    keyIdea: "Sort the five isotypes by their one-line signatures. IgG: 2° response, most abundant in serum, fixes complement, opsonizes, neutralizes — the ONLY placenta-crosser (warm AIHA). IgA: mucosal guardian — no complement fixation, dimer + J chain secreted across epithelium by transcytosis, secretory component protects the Fc, tears/saliva/milk, Giardia protection, most produced overall (cold serum levels belie the output). IgM: FIRST produced (1° response), B-cell antigen receptor (monomer on cell), pentamer + J chain when secreted → avid early binding + strongest complement fixation (cold AIHA). IgD: naïve B-cell co-receptor with IgM, low serum. IgE: mast cell/basophil arming via FcεRI — allergen cross-link → histamine → type I hypersensitivity; parasite defense by eosinophil activation. Naïve B cells carry IgM + IgD; germinal-center isotype switching (cytokines + CD40L) sends plasma cells to IgA, IgG, or IgE while the binding site stays identical. Affinity = one interaction's strength; avidity = the multivalent sum (hinge + heavy chains). TI antigens (no peptide — LPS, capsule) get no T-cell help: weak response, no class switching, no memory, boosters and adjuvants required (PPSV23); TD antigens (protein — toxoids) get B-Th contact: class switching + memory.",
  },
  mechanisms: [
    {
      id: "isotype-lifecycle",
      title: "The isotype lifecycle — IgM+IgD naïve chassis, CD40L-cytokine switching, plasma-cell output",
      context: "How one clone's binding site ends up in five different bodies",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A mature, naïve B cell expresses IgM and IgD on its surface",
            sublabel: "Input — the default chassis: IgM and IgD share the same antigen-binding site (same V region, different constant regions by alternative splicing).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Antigen encounter + Th-cell help (CD40L-CD40 + cytokines) launch the germinal-center reaction",
            sublabel: "Process — the two-signal activation of the lymphocyte-activation page, now running inside the follicle.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Isotype switching (gene rearrangement of the constant region, induced by cytokines and CD40L) selects IgA, IgG, or IgE",
            sublabel: "Process — the variable region is untouched: same specificity, new effector module (IgG: opsonic/complement; IgA: secretory; IgE: mast-cell arming).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Plasma cells secrete the switched isotype: IgG dominates the 2° response, IgA floods the secretions, IgE arms mast cells — and IgM remains the first responder of every future naive encounter",
            sublabel: "Output — the serum timing (IgM first, IgG second) and the compartmentalization (blood vs mucosa vs tissues) are both set by the switch.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "antigen + T help" },
          { from: "s1", to: "s2", label: "germinal center" },
          { from: "s2", to: "o1", label: "plasma-cell output" },
        ],
        caption:
          "One clone, five possible bodies. The naïve B cell starts as an IgM+IgD double-expresser — the same antigen receptor in two constant-region outfits. After antigen arrives WITH T-cell help (the two-signal requirement), the germinal center runs isotype switching: gene rearrangement downstream of the constant region, induced by cytokines and CD40L, replaces the Cμ/Cδ constant region with Cγ, Cα, or Cε. The binding site never changes — which is why a secondary response to the same antigen is IgG (or IgA at mucosa, IgE in allergy) with the SAME specificity the original IgM carried. IgM keeps its jobs regardless: first antibody produced in any response and the B-cell antigen receptor. The output timing is the serology clock examiners love: IgM = current or recent infection; IgG = past exposure or established secondary response; IgG rising with IgM falling = recent infection maturing.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "isotype-comparison-table",
      title: "The five-isotype comparison grid",
      caption:
        "An original KYP comparison grid: five columns (IgG, IgA, IgM, IgD, IgE) × five rows (drawn structures — monomer, dimer + J chain, pentamer + J chain, monomer, monomer; timing and abundance; complement and effects; signature roles — the placenta-crosser, the mucosal transcytoser with secretory component, the first-responder pentamer, the naïve co-receptor, the mast-cell armer; disease associations — warm vs cold AIHA, Giardia, type I hypersensitivity), with bottom cards for affinity-vs-avidity and thymus-independent-vs-dependent antigens.",
      notice:
        "The printed page's structure icons and roster layout are conveyed as an original KYP grid with drawn schematics; FA's printed mnemonic phrases are NOT reproduced (KYP originals in the mnemonics field instead). The verbatim isotype text is the note's table block.",
    },
    {
      kind: "table",
      title: "The five isotypes — verbatim",
      intro: "The source's isotype roster, verbatim by isotype.",
      columns: ["", "IgG", "IgA", "IgM", "IgD", "IgE"],
      rows: [
        [
          "TIMING / ABUNDANCE",
          "Main antibody in 2° response to an antigen. Most abundant isotype in serum.",
          "Most produced antibody overall, but has lower serum concentrations.",
          "First antibody to be produced during an immune response.",
          "Expressed on the surface of mature, naïve B cells.",
          "Binds mast cells and basophils.",
        ],
        [
          "STRUCTURE",
          "Monomer.",
          "Monomer (in circulation) or dimer (with J chain when secreted).",
          "Monomer on B cell, pentamer with J chain when secreted.",
          "Monomer.",
          "Monomer.",
        ],
        [
          "FUNCTION",
          "Fixes complement, opsonizes bacteria, neutralizes bacterial toxins and viruses.",
          "Prevents attachment of bacteria and viruses to mucous membranes; does not fix complement.",
          "Fixes complement. Antigen receptor on the surface of B cells. Pentamer enables avid binding to antigen while humoral response evolves.",
          "Normally, low levels are detectable in serum.",
          "Cross-links when exposed to allergen, mediating immediate (type I) hypersensitivity through release of inflammatory mediators such as histamine. Contributes to immunity to parasites by activating eosinophils.",
        ],
        [
          "SIGNATURE TRAIT",
          "Only isotype that crosses the placenta (provides infants with passive immunity that starts to wane after birth).",
          "Crosses epithelial cells by transcytosis. Picks up secretory component from epithelial cells, which protects the Fc portion from luminal proteases.",
          "Pentamer avidity while the response evolves.",
          "Naïve B-cell co-receptor (with IgM).",
          "Mast-cell and basophil arming for type I hypersensitivity.",
        ],
        [
          "COMPARTMENT / SOURCE",
          "Serum (2° response).",
          "Produced in GI tract (eg, by Peyer patches); released into secretions (tears, saliva, mucus) and breast milk; protects against gut infections (eg, Giardia).",
          "Serum + B-cell surface.",
          "B-cell surface; low serum.",
          "Tissues (mast-cell bound).",
        ],
        [
          "DISEASE ASSOCIATION",
          "Warm autoimmune hemolytic anemia.",
          "Giardia susceptibility when deficient.",
          "Cold autoimmune hemolytic anemia.",
          "—",
          "Immediate (type I) hypersensitivity; parasite immunity.",
        ],
      ],
      caption:
        "Read the table by column for an isotype's portrait and by row for the exam's favorite contrasts: IgG vs IgM abundance and response timing; IgA's secreted volume vs serum level; the two complement fixers (IgG, IgM) vs IgA's explicit non-fixation; and the single-owner traits — only IgG crosses the placenta, only IgE arms mast cells. Naïve B cells express IgM AND IgD together before any switching.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Antigen type and memory — why PPSV23 needs boosters and adjuvants",
      body: "Thymus-INdependent antigens lack a peptide component (eg, lipopolysaccharides from gram-negative bacteria; capsular polysaccharides) — they cannot be presented by MHC to T cells, so B cells get no T-cell help. Consequences: weakly immunogenic responses, no class switching, no immunologic memory — which is why their vaccines (eg, the capsular polysaccharide subunit of Streptococcus pneumoniae in PPSV23) often require boosters and adjuvants. Thymus-DEpendent antigens contain a protein component (eg, diphtheria toxoid): direct B-cell contact with Th cells delivers the CD40L-CD40 and cytokine signals, so class switching and immunologic memory occur. The clinical corollary (KYP bridge): conjugate vaccines chemically attach polysaccharide to a protein carrier (eg, diphtheria toxoid in PCV13), converting a TI antigen into a TD one — buying the infant's immune system the T-cell help it lacks, with class switching and memory as the payoff.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-year-old who received only the polysaccharide pneumococcal vaccine (PPSV23) develops pneumococcal bacteremia; his antibody response to the vaccine was IgM-dominant with no memory on repeat dosing.",
        discriminator: "Polysaccharide antigen + IgM-only, class-unswitched, memory-less response",
        concept: "Thymus-independent antigen behavior",
        answer:
          "Capsular polysaccharides lack a peptide component, cannot be presented by MHC to T cells, and therefore generate no T-cell help: the response is weakly immunogenic, IgM-dominant, without class switching or immunologic memory — requiring boosters and adjuvants (PPSV23's design). Protein-containing (thymus-dependent) antigens and conjugate vaccines (polysaccharide + protein carrier, eg, PCV13) restore B-Th contact, class switching, and memory.",
      },
      {
        stem: "A 5-month-old previously healthy infant presents with recurrent otitis media and one episode of pneumococcal pneumonia; he was full-term with normal birth weight and responded normally to his 2-month vaccines.",
        discriminator: "Infections resuming at 3-6 months = maternal IgG waning",
        concept: "Placental IgG transfer and passive immunity's timeline",
        answer:
          "IgG is the only isotype that crosses the placenta, providing infants with passive immunity that starts to wane after birth. Maternal IgG nadirs around 3-6 months of age while the infant's own IgG production ramps toward adult levels over the first year — the physiologic hypogammaglobulinemia window in which encapsulated-bacteria infections peak. The infant's vaccine responses were normal, distinguishing this from primary immunodeficiency.",
      },
      {
        stem: "A patient presents with fatigue and splenomegaly; the hematology laboratory reports red-cell agglutination at 4°C that resolves on warming, with a positive direct Coombs test for complement only.",
        discriminator: "Cold-reacting antibody = IgM",
        concept: "IgM — cold autoimmune hemolytic anemia",
        answer:
          "IgM is a pentamer whose Fc regions fix complement efficiently; cold agglutinins are IgM antibodies that bind erythrocytes best in the cold peripheral circulation, fix complement, and produce intravascular hemolysis with a complement-only Coombs test. Contrast warm autoimmune hemolytic anemia — IgG antibodies operating at 37°C, extravascular splenic clearance by Fc-receptor-bearing macrophages. The temperature of the stem is the isotype of the answer: cold = IgM, warm = IgG.",
      },
    ],
    traps: [
      {
        a: "IgA is the most abundant isotype in serum",
        b: "IgG is the most abundant in SERUM; IgA is the most PRODUCED overall",
        whyConfused: "'Most abundant' and 'most produced' sound like the same superlative.",
        keyDifference:
          "IgA is the most produced antibody overall (the mucosal surfaces are enormous), but most of it is secreted across epithelium into tears, saliva, mucus, and milk — so its SERUM concentration is lower than IgG's. IgG is the most abundant isotype IN SERUM. Read the compartment in the question stem before choosing the superlative.",
        clue: "Any 'most abundant/produced' question — check serum vs total body output.",
      },
      {
        a: "IgA fixes complement",
        b: "IgA does NOT fix complement (the printed exception)",
        whyConfused: "IgG and IgM fix complement, and IgA is a major defender.",
        keyDifference:
          "The source is explicit: IgA prevents attachment of bacteria and viruses to mucous membranes; it does NOT fix complement. Its mucosal defense is blocking adherence, not complement cascade activation — and its Fc is protected by secretory component from luminal proteases, not armed for C1q.",
        clue: "Any 'which isotype does not fix complement' or mucosal-defense mechanism question.",
      },
      {
        a: "IgE kills parasites directly",
        b: "IgE CONTRIBUTES to parasite immunity by activating EOSINOPHILS",
        whyConfused: "The parasite association is taught without the effector cell.",
        keyDifference:
          "IgE's antiparasite role is cell-mediated: IgE (often via its Fcε receptor on eosinophils and mast cells) promotes eosinophil activation against helminths — eosinophils are the effectors that damage the parasite. IgE itself binds and cross-links; it does not lyse anything. Its other face is type I hypersensitivity: mast-cell/basophil binding, allergen cross-linking, histamine release.",
        clue: "Any 'mechanism of IgE-mediated parasite immunity' or eosinophil question.",
      },
    ],
    pivots: [
      {
        lookAlike: "IgG vs IgM (which isotype answers the stem)",
        differentiator: "Response timing, temperature preference, and placental passage",
        correctPath:
          "IgG: 2° response, most abundant in serum, fixes complement + opsonizes + neutralizes, crosses the placenta, warm AIHA, serologic marker of past/established exposure. IgM: 1° response (first antibody produced), pentamer with J chain, B-cell antigen receptor, strongest complement fixation (avid pentamer), cold AIHA, serologic marker of recent/acute infection. An IgM-positive/IgG-negative panel = acute; IgG-positive with vaccination history = immune.",
      },
      {
        lookAlike: "Thymus-independent vs thymus-dependent antigens (which vaccine logic applies)",
        differentiator: "Peptide presence and T-cell help",
        correctPath:
          "TI: no peptide (LPS, capsular polysaccharide) → no MHC presentation → no T help → weak, IgM-dominant, no class switching, no memory → boosters + adjuvants (PPSV23; poorly immunogenic under age 2). TD: protein component (toxoids, conjugate-vaccine carriers) → B-Th contact → class switching + memory → durable series immunity (diphtheria toxoid, PCV13's conjugated polysaccharides). Conjugation converts TI into TD — the design logic of every conjugate vaccine.",
      },
    ],
    miniCase: {
      vignette:
        "A 5-month-old boy, born at term after an uncomplicated pregnancy, is brought for his third episode of otitis media in ten weeks; two weeks ago he was hospitalized with pneumococcal pneumonia. His mother notes he was 'never sick' until about a month ago. Growth and development are normal, thymus and tonsils are present, and there is no family history of immunodeficiency. He received PCV13 and routine immunizations at 2 and 4 months, with normal antibody titers to those vaccines. Laboratory studies: normal CBC and differential, normal total lymphocyte subsets, IgG 210 mg/dL (low for age), IgM and IgA appropriate for age, and a negative HIV PCR. A maternal antibody panel is pending.",
      question:
        "Which mechanism best explains this infant's recent susceptibility to encapsulated organisms?",
      options: [
        {
          label: "A",
          text: "Waning of maternally derived IgG that crossed the placenta, ahead of the infant's own IgG production",
          correct: true,
          why: "Correct — IgG is the only isotype that crosses the placenta and provides infants with passive immunity that starts to wane after birth. Maternal IgG (transferred increasingly in the third trimester) falls over the first months of life as catabolism outpaces the infant's synthesis, reaching a nadir around 3-6 months — exactly when this infant's infections began. His OWN vaccine responses are normal (PCV13 titers fine): the deficit is the passive transfer wearing off, and his IgG will climb as his response to vaccines and encounters matures.",
        },
        {
          label: "B",
          text: "Failure of IgM class switching due to absent CD40L, producing an IgM-only profile",
          why: "CD40L deficiency (X-linked hyper-IgM) would show ELEVATED IgM with very low IgG/IgA/IgE and histories of opportunistic infections — this infant's IgM and IgA are age-appropriate and his vaccine titers (which require class switching to IgG) were normal. The defect is passive immunity expiring, not an intrinsic switching failure.",
        },
        {
          label: "C",
          text: "Selective IgA deficiency impairing mucosal defense at the respiratory mucosa",
          why: "IgA deficiency predisposes to sinopulmonary infections — but typically presents later in childhood with recurrent sinopulmonary disease and often GI symptoms (Giardia), and this infant's IgA is normal for age. The 3-6-month onset and low IgG fit the maternal-transfer nadir instead.",
        },
        {
          label: "D",
          text: "Thymic aplasia with absent T-cell help for polysaccharide antigens",
          why: "Thymic aplasia (DiGeorge) would show low T cells, possibly hypocalcemia and conotruncal defects — none present here — and the thymus and tonsils are observed. Furthermore, infants respond poorly to pure polysaccharides at any T-cell count; this infant's problem is the timing of maternal IgG loss, not thymic architecture.",
        },
        {
          label: "E",
          text: "Physiologic IgM insufficiency, as IgM is the infant's main isotype until age 1",
          why: "Backwards: IgM is the FIRST isotype the infant makes (and its production is normal here), but the infant's circulating protection in early months is overwhelmingly maternal IGG — the isotype that crosses the placenta. IgM does not cross the placenta; the 'physiologic' dip is the IgG one.",
        },
      ],
      reasoning:
        "The vignette times the infections to the classic window: a term infant, well until ~3-4 months, then encapsulated organisms (otitis, pneumococcal pneumonia) — the passive-immunity gap between waning maternal IgG and the infant's maturing synthesis. The question's anchor is the page's single-owner trait: IgG is the ONLY placenta-crossing isotype, so its decline is the mechanism. Distractors test the neighboring concepts: CD40L/hyper-IgM (switching failure — but vaccine IgG titers were normal), IgA deficiency (mucosal, later, IgA low here), DiGeorge (T-cell counts and anatomy), and the IgM reversal. The pending maternal panel would show the expected pattern: low infant total IgG with intact own-vaccine responses.",
    },
  },
  mnemonics: [
    {
      code: "\u201cOne binding site, five bodies: M starts, G sustains, A patrols the borders, D decorates, E alarms.\u201d",
      meaning:
        "KYP's roster key: the same binding site ships in five constant-region bodies — IgM starts every response (first produced, pentamer avidity, B-cell receptor), IgG sustains it (2° response, most abundant in serum, crosses the placenta), IgA patrols the borders (secreted dimer at mucosa), IgD decorates the naïve B cell (with IgM), and IgE alarms the mast cells (type I hypersensitivity) and calls eosinophils on parasites.",
      memorizes: "The five-isotype signatures and the naïve-cell IgM+IgD pair",
      whenToUse: "Any isotype-identification or one-line-signature question.",
      clinical: "Serology clock: IgM = recent/acute; IgG = past/secondary; the switch from M to G marks a maturing response.",
    },
    {
      code: "\u201cWarm blood runs G; cold rivers run M.\u201d",
      meaning:
        "KYP's key for the two autoimmune hemolytic anemias: WARM AIHA is IgG (antibodies active at 37°C, extravascular splenic clearance, Coombs-positive for IgG) — 'warm blood runs G'. COLD AIHA is IgM (agglutination and complement fixation in the cold peripheries, intravascular hemolysis, Coombs-positive for complement) — 'cold rivers run M'. Temperature of the stem picks the isotype.",
      memorizes: "Warm AIHA = IgG · cold AIHA = IgM",
      whenToUse: "Any autoimmune hemolytic anemia stem.",
      clinical: "Cold agglutinin disease follows Mycoplasma and infectious mononucleosis; warm AIHA accompanies SLE and lymphoproliferative disease.",
    },
    {
      code: "\u201cNo protein, no T — no switch, no memory.\u201d",
      meaning:
        "KYP's key for the antigen-type split: an antigen with NO peptide component (LPS, capsular polysaccharide) cannot be presented by MHC, so B cells get NO T-cell help — and without T help there is NO class switching and NO immunologic memory, only a weak IgM-leaning response needing boosters and adjuvants. Add protein (toxoid, conjugate carrier) and everything changes: B-Th contact buys switching and memory.",
      memorizes: "Thymus-independent vs thymus-dependent consequences",
      whenToUse: "Any vaccine-design, PPSV23-vs-PCV13, or polysaccharide-response question.",
      clinical: "Conjugate vaccines exist precisely to convert TI polysaccharides into TD antigens for infants.",
    },
  ],
  rapidReview: {
    s30: [
      "Naïve B cells express IgM + IgD; switching (cytokines + CD40L) → IgA, IgG, or IgE",
      "IgG: 2° response, most abundant in serum, ONLY placenta-crosser, warm AIHA",
      "IgA: mucosal, NO complement fixation, dimer + J chain, secretory component, Giardia",
      "IgM: 1° response (first produced), pentamer + J chain, B-cell receptor, cold AIHA",
      "IgE: mast cells/basophils, type I hypersensitivity, parasites via eosinophils",
    ],
    m3: [
      "Affinity = single interaction strength · avidity = multivalent total (hinge + heavy chains)",
      "IgM pentamer = strongest complement fixation (five Fc regions)",
      "IgA most produced overall, but lower serum concentrations than IgG",
      "IgA transcytosis picks up secretory component → Fc protection from proteases",
      "Maternal IgG wanes over months 3-6 → physiologic vulnerability window",
    ],
    m10: [
      "TI antigens: no peptide, no MHC presentation, weak, no switch, no memory → boosters + adjuvants (PPSV23)",
      "TD antigens: protein (toxoid) → B-Th contact → class switching + memory",
      "Conjugate vaccines: polysaccharide + protein carrier = TI converted to TD (PCV13)",
      "Cold AIHA = IgM (complement Coombs); warm AIHA = IgG (splenic clearance)",
      "IgM = recent/acute infection; IgG = past exposure/immunity",
    ],
  },
  recall: [
    {
      q: "What do mature naïve B cells express, and what does germinal-center isotype switching require?",
      a: "Mature, naïve B cells prior to activation express IgM and IgD on their surfaces. They may differentiate in germinal centers of lymph nodes by isotype switching (gene rearrangement; induced by cytokines and CD40L) into plasma cells that secrete IgA, IgG, or IgE.",
    },
    {
      q: "Give IgG's complete profile.",
      a: "Main antibody in 2° response to an antigen. Most abundant isotype in serum. Fixes complement, opsonizes bacteria, neutralizes bacterial toxins and viruses. Only isotype that crosses the placenta (provides infants with passive immunity that starts to wane after birth). Associated with warm autoimmune hemolytic anemia.",
    },
    {
      q: "Give IgA's complete profile.",
      a: "Prevents attachment of bacteria and viruses to mucous membranes; does not fix complement. Monomer (in circulation) or dimer (with J chain when secreted). Crosses epithelial cells by transcytosis. Produced in GI tract (eg, by Peyer patches) and protects against gut infections (eg, Giardia). Most produced antibody overall, but has lower serum concentrations. Released into secretions (tears, saliva, mucus) and breast milk. Picks up secretory component from epithelial cells, which protects the Fc portion from luminal proteases.",
    },
    {
      q: "Give IgM's and IgD's complete profiles.",
      a: "IgM: first antibody to be produced during an immune response. Fixes complement. Antigen receptor on the surface of B cells. Monomer on B cell, pentamer with J chain when secreted; pentamer enables avid binding to antigen while humoral response evolves. Associated with cold autoimmune hemolytic anemia. IgD: expressed on the surface of mature, naïve B cells. Normally, low levels are detectable in serum.",
    },
    {
      q: "Define affinity and avidity, and contrast thymus-independent with thymus-dependent antigens.",
      a: "Affinity: the strength of a single antibody-antigen interaction. Avidity: the overall binding strength resulting from multiple antibody-antigen interactions in a multivalent molecule (enhanced by the hinge region and heavy chain domains). Thymus-independent antigens lack a peptide component (eg, LPS from gram-negative bacteria); they cannot be presented by MHC to T cells, are weakly immunogenic, and their vaccines often require boosters and adjuvants (eg, PPSV23). Thymus-dependent antigens contain a protein component (eg, diphtheria toxoid); class switching and immunologic memory occur as a result of direct contact of B cells with Th cells.",
    },
  ],
  related: [
    {
      title: "Antibody Structure & Function",
      topicId: "antibody-structure",
      note: "The anatomy this roster dresses in five outfits — the Fc's 5th C (confers isotype) is what switches.",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "The CD40L-CD40 + cytokine signals that license germinal-center isotype switching (step 5 of E27).",
    },
    {
      title: "Complement Pathways & Disorders",
      topicId: "complement-pathways",
      note: "Where IgM (strongly) and IgG fix complement — classical pathway entry and its deficiency syndromes.",
    },
    {
      title: "Hypersensitivity Reactions",
      topicId: "hypersensitivity-types",
      note: "IgE cross-linking on mast cells = type I; IgG warm AIHA = type II — both isotype signatures in disease.",
    },
  ],
  crossLinks: [
    {
      subject: "Pediatrics (Vaccinology)",
      connection: "PPSV23 (pure polysaccharide, TI) vs PCV13 (conjugated, TD) is this page applied: conjugation buys T help, class switching, and memory — and under-2 immunogenicity.",
    },
    {
      subject: "Hematology (Autoimmune Hemolytic Anemia)",
      connection: "Warm AIHA (IgG, 37°C, splenic clearance) vs cold agglutinin disease (IgM, complement, intravascular) — the temperature picks the isotype.",
    },
    {
      subject: "Obstetrics & Neonatology",
      connection: "Third-trimester placental IgG transfer protects the neonate and wanes by months 3-6; breast-milk IgA (secretory component intact) covers the mucosa instead.",
    },
    {
      subject: "Infectious Disease (Serology)",
      connection: "IgM-positive/IgG-negative = acute or recent infection; IgG-positive = past exposure or vaccination — the timing logic of every serology panel.",
    },
  ],
};
