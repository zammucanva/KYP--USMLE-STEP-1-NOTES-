import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 30).
// Source: First Aid 2026, Part 1 pdf 127 / book 105
// (Complement disorders; complement pathway testing)

export const complementDisorders: KypUsMLENote = {
  id: "complement-disorders",
  title: "Complement Disorders & Pathway Testing",
  subtitle:
    "What each complement failure looks like at the bedside, and how the assays localize it. Early complement deficiencies (C1-C4) raise the risk of severe, recurrent pyogenic sinus and respiratory tract infections and, because C3b is used in the clearance of antigen-antibody complexes, the risk of SLE. Terminal complement deficiencies (C5-C9) raise susceptibility to recurrent Neisseria bacteremia with opsonization intact. C1 inhibitor deficiency causes hereditary angioedema: unregulated kallikrein activation raises bradykinin, C4 is characteristically low, ACE inhibitors are contraindicated (they also raise bradykinin), and treatment is ecallantide (kallikrein inhibitor) or icatibant (bradykinin-B2 receptor antagonist). Paroxysmal nocturnal hemoglobinuria is an acquired PIGA gene mutation that reduces GPI anchors, stripping CD55 (DAF) and CD59 (MIRL) from RBCs: CD59 loss disinhibits MAC formation (major intravascular hemolysis), CD55 loss increases C3b opsonization (minor extravascular hemolysis via reticuloendothelial clearance); labs show low haptoglobin, hemoglobinuria, and hemosiderinuria with dark urine often in the morning, and the clinical triad is hemolytic anemia, pancytopenia, and atypical venous thrombosis (Budd-Chiari, portal, cerebral, dermal). Treatment: eculizumab (anti-C5) blocks terminal complement — preventing intravascular hemolysis only — while proximal complement inhibitors (anti-C3, investigational) may reduce extravascular hemolysis. Testing: CH50 reads the classical pathway (C1, C2, C4; low in SLE, immune-complex disease, C2/C4 deficiency), AH50 reads the alternative pathway (factor D, B, properdin; low in properdin and factor D/B deficiency, Neisseria), and both together read the common/terminal pathways (C3, C5-C9; low in terminal defects or consumption — sepsis, autoimmune disease).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — early vs terminal complement deficiencies, C1 inhibitor deficiency and therapy, PNH (PIGA-GPI-CD55/CD59, two hemolysis routes, triad, eculizumab), CH50/AH50/combined testing logic",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 105 (Complement disorders; Complement pathway testing)",
  tags: [
    "complement disorders",
    "early complement deficiency",
    "C1-C4 deficiency",
    "terminal complement deficiency",
    "C5-C9 deficiency",
    "Neisseria bacteremia",
    "pyogenic infections",
    "sinus infections",
    "respiratory infections",
    "SLE",
    "immune complex clearance",
    "C1 inhibitor deficiency",
    "hereditary angioedema",
    "kallikrein",
    "bradykinin",
    "low C4",
    "ACE inhibitor contraindication",
    "ecallantide",
    "icatibant",
    "paroxysmal nocturnal hemoglobinuria",
    "PNH",
    "PIGA",
    "GPI anchors",
    "CD55",
    "DAF",
    "CD59",
    "MIRL",
    "intravascular hemolysis",
    "extravascular hemolysis",
    "haptoglobin",
    "hemoglobinuria",
    "hemosiderinuria",
    "pancytopenia",
    "venous thrombosis",
    "Budd-Chiari",
    "eculizumab",
    "anti-C5",
    "proximal complement inhibitors",
    "CH50",
    "AH50",
    "classical pathway",
    "alternative pathway",
    "complement consumption",
    "sepsis",
  ],
  core: {
    what: "Early complement deficiencies (C1-C4) carry an increased risk of severe, recurrent pyogenic sinus and respiratory tract infections; because C3b is used in the clearance of antigen-antibody complexes, early loss also raises the risk of SLE. Terminal complement deficiencies (C5-C9) increase susceptibility to recurrent Neisseria bacteremia. C1 inhibitor deficiency causes hereditary angioedema due to unregulated activation of kallikrein, increasing bradykinin; it is characterized by low C4 levels, ACE inhibitors are contraindicated (they also raise bradykinin), and treatment is ecallantide (a kallikrein inhibitor) or icatibant (a bradykinin-B2 receptor antagonist). Paroxysmal nocturnal hemoglobinuria is an acquired PIGA gene mutation that reduces GPI anchors, causing loss of CD55 (DAF) and CD59 (MIRL) and complement-mediated intravascular hemolysis with or without extravascular hemolysis: loss of CD59 disinhibits MAC formation (intravascular hemolysis, the major component), while loss of CD55 increases C3b opsonization (extravascular hemolysis, minor, with reticuloendothelial RBC clearance). Complement-mediated hemolysis produces low haptoglobin, hemoglobinuria, and hemosiderinuria (dark urine, often in the morning); the triad is hemolytic anemia, pancytopenia, and atypical venous thrombosis (eg, Budd-Chiari, portal, cerebral, dermal). Treatment is eculizumab (an anti-C5 antibody) blocking terminal complement — preventing intravascular hemolysis only — with proximal complement inhibitors (eg, anti-C3, investigational) potentially reducing extravascular hemolysis. Testing: CH50 tests the classical pathway (C1, C2, C4) and is low in SLE, immune complex diseases, and C2/C4 deficiency; AH50 tests the alternative pathway (factor D, B, properdin) and is low in properdin and factor D/B deficiency and Neisseria infections; CH50 plus AH50 together test the common/terminal pathways (C3, C5-C9) and are low in terminal pathway defect or complement consumption (eg, sepsis, autoimmune disease).",
    why: "This page is the disease layer built on E29's cascade: each fragment's job, when lost, predicts a specific infection or syndrome pattern, and the two assays let the laboratory name the missing piece. The patterns are among the highest-yield associations in Immunology: a teen with recurrent meningococcemia (terminal deficiency, normal vaccine responses), an SLE-like syndrome with recurrent sinusitis (early C2/C4), episodic non-urticarial airway swelling with low C4 (C1-INH), and the PNH tetrad of morning hemoglobinuria, pancytopenia, Budd-Chiari thrombosis, and smooth-menu anemia — each one a one-line mechanism question whose answer is a fragment or regulator on this page. The PNH block rewards mechanism reading: eculizumab blocks C5, so it stops MAC-mediated INTRAVASCULAR hemolysis but cannot stop the CD55-loss opsonic route — the distinction between the two hemolysis pathways becomes a pharmacology question. The testing panel closes the loop: assay results localize the lesion (CH50 alone = classical; AH50 alone = alternative; both = C3/terminal or consumption), turning a lab-value stem into an anatomic diagnosis of the cascade.",
    keyIdea: "Sort the failures by location in the cascade. EARLY (C1-C4): pyogenic sinus/respiratory infections PLUS immune-complex disease → SLE (C3b clears antigen-antibody complexes; lose it early and complexes deposit). TERMINAL (C5-C9): the pore is gone but opsonization is intact → recurrent Neisseria bacteremia, nothing else prominent. REGULATORY: C1-INH loss → hereditary angioedema (kallikrein → bradykinin; ↓C4; NO ACE inhibitors — they raise bradykinin too; treat with ecallantide or icatibant); PIGA loss (PNH) → no GPI anchors → CD55 and CD59 stripped from RBCs → CD59 loss = unchecked MAC = major INTRAVASCULAR hemolysis, CD55 loss = C3b opsonization = minor EXTRAVASCULAR hemolysis (RES clearance); labs ↓ haptoglobin + hemoglobinuria + hemosiderinuria (morning dark urine); triad = hemolytic anemia + pancytopenia + atypical thrombosis (Budd-Chiari); eculizumab (anti-C5) stops only the intravascular route. TESTING: CH50 = classical (C1/C2/C4; low in SLE, immune-complex, C2/C4 deficiency); AH50 = alternative (factor D/B/properdin; low in properdin and factor D/B deficiency, Neisseria); BOTH = common/terminal (C3, C5-C9; low in terminal defect or consumption — sepsis, autoimmune).",
  },
  mechanisms: [
    {
      id: "pnth-two-hemolysis-routes",
      title: "PNH — one mutation, two hemolysis routes, and why eculizumab fixes only one",
      context: "Paroxysmal nocturnal hemoglobinuria: PIGA → GPI → CD55/CD59 loss",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An acquired PIGA gene mutation arises in a hematopoietic stem cell clone",
            sublabel: "Input — PIGA encodes the first step of GPI-anchor synthesis; the mutation is somatic, so the clone and its progeny (RBCs, leukocytes, platelets) all lack GPI-linked proteins.",
            variant: "input",
          },
          {
            id: "s1",
            label: "↓ GPI anchors → loss of CD55 (DAF) and CD59 (MIRL) from the RBC surface",
            sublabel: "Process — both complement regulators are GPI-anchored; without the membrane hook they cannot be displayed.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Two brakes come off: CD59 loss disinhibits MAC formation (intravascular hemolysis, major); CD55 loss increases C3b opsonization (extravascular hemolysis, minor, RES clearance)",
            sublabel: "Process — the alternative-pathway tickover that E29's inhibitors held in check now runs on RBCs by both routes.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓ haptoglobin, hemoglobinuria, hemosiderinuria (dark urine, often morning) + the triad: hemolytic anemia, pancytopenia, atypical venous thrombosis (Budd-Chiari, portal, cerebral, dermal)",
            sublabel: "Output — eculizumab (anti-C5) blocks terminal complement, preventing the INTRAVASCULAR route only; proximal inhibitors (anti-C3, investigational) may reduce the extravascular route.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "PIGA mutated" },
          { from: "s1", to: "s2", label: "regulators lost" },
          { from: "s2", to: "o1", label: "both lytic routes open" },
        ],
        caption:
          "PNH is complement regulation failing on the red cell itself. The acquired PIGA mutation strips GPI anchors; CD55 (DAF, the convertase decay accelerator) and CD59 (MIRL, the MAC inhibitor) are both GPI-linked, so they vanish together. The consequences split by brake: without CD59, nothing stops C5b-9 assembly — RBCs lyse INTRAVASCULARLY (the major route, and the source of the hemoglobinuria, hemosiderinuria, and low haptoglobin; urine is darkest in the morning when overnight urine is concentrated); without CD55, C3 convertases persist on the RBC surface, C3b coats the cell, and the reticuloendothelial system clears it — EXTRAVASCULAR hemolysis, the minor route. The therapy maps exactly: eculizumab binds C5, blocking its cleavage, so no C5b-9 forms — intravascular hemolysis stops, but the C3b-opsonization route (upstream of C5) continues, leaving a residual extravascular hemolysis that proximal inhibitors (anti-C3, investigational) target. The thrombosis (Budd-Chiari et al.) is complement-mediated platelet activation on the same GPI-deficient surfaces; the pancytopenia is marrow failure from the same clone biology.",
      },
    },
    {
      id: "complement-test-localization",
      title: "CH50 and AH50 — two assays that localize the break in the cascade",
      context: "Complement pathway testing",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A patient has recurrent infections or unexplained immune-complex disease; the cascade must be interrogated",
            sublabel: "Input — the question is WHERE the cascade is broken, not merely whether.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CH50 tests the classical pathway (C1, C2, C4); AH50 tests the alternative pathway (factor D, B, properdin)",
            sublabel: "Process — each assay lyses indicator cells by one door: antibody-sensitized cells for CH50, rabbit cells (no antibody) for AH50.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Low CH50 alone localizes to classical (SLE, immune-complex disease, C2/C4 deficiency); low AH50 alone to alternative (properdin, factor D/B deficiency, Neisseria)",
            sublabel: "Process — one door broken, the other intact: the pattern names the arm.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Both low = the shared hallway: common/terminal pathway (C3, C5-C9) defect OR consumption (sepsis, autoimmune disease)",
            sublabel: "Output — consumption mimics deficiency because the fragments are being spent faster than the liver makes them; clinical context separates the two.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "assays sent" },
          { from: "s1", to: "s2", label: "one low" },
          { from: "s2", to: "o1", label: "both low" },
        ],
        caption:
          "The testing logic is anatomic. CH50 needs every classical component (C1, C2, C4) plus the shared C3 and terminal C5-C9 to lyse antibody-coated cells — so it is low in SLE, immune complex diseases (consumption at the classical door), and inherited C2/C4 deficiency. AH50 needs the alternative factors (D, B, properdin) plus the shared stretch — low in properdin deficiency (X-linked, Neisseria) and factor D/B deficiency. When BOTH are low, the lesion must lie in the shared hallway: either C3 or terminal (C5-C9) deficiency, or accelerated consumption of the whole cascade (sepsis, active autoimmune disease) — the classic distractor pair, separated by clinical tempo (lifelong recurrent infections = deficiency; acute critical illness = consumption). The exam pattern: give the assay values, name the missing component; or give the infection pattern, predict the assay values.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "complement-deficiency-map",
      title: "The deficiency map — early, terminal, regulatory, and the assays that name them",
      caption:
        "An original KYP map: the three deficiency cards (early C1-C4 — pyogenic sinus/respiratory infections + SLE risk via C3b immune-complex clearance; terminal C5-C9 — recurrent Neisseria bacteremia; C1 inhibitor — hereditary angioedema with ↓C4, ACE-inhibitor contraindication, ecallantide/icatibant therapy); the testing panel (CH50 classical / AH50 alternative / both = common-terminal or consumption); and the full PNH panel (PIGA → GPI → CD55/CD59 loss → the two hemolysis routes, labs, triad, and eculizumab's intravascular-only coverage).",
      notice:
        "The printed page's dark-urine photograph is copyrighted and is described in the visual and note, never reproduced; FA's printed testing mnemonic is not reproduced (KYP originals replace it).",
    },
    {
      kind: "table",
      title: "Complement disorders — verbatim",
      intro: "The source's deficiency and testing text, verbatim.",
      columns: ["Deficiency / test", "Verbatim"],
      rows: [
        ["Early complement deficiencies (C1-C4)", "↑ risk of severe, recurrent pyogenic sinus and respiratory tract infections. C3b used in clearance of antigen-antibody complexes → ↑ risk of SLE."],
        ["Terminal complement deficiencies (C5-C9)", "↑ susceptibility to recurrent Neisseria bacteremia."],
        ["C1 inhibitor deficiency", "Causes hereditary angioedema due to unregulated activation of kallikrein → ↑ bradykinin. Characterized by ↓ C4 levels. ACE inhibitors are contraindicated (also ↑ bradykinin). Treatment: ecallantide (Kallikrein inhibitor), icatibant (Bradykinin-B2 receptor antagonist)."],
        ["Paroxysmal nocturnal hemoglobinuria", "Acquired PIGA gene mutation → ↓ GPI anchors → loss of CD55(DAF)/CD59 (MIRL) → complement-mediated intravascular hemolysis +/− extravascular hemolysis. Loss of CD59 → uninhibited MAC formation → intravascular hemolysis (major). Loss of CD55 → ↑ C3b opsonization → extravascular hemolysis (minor; RBC clearance by reticuloendothelial system). Complement-mediated hemolysis → ↓ haptoglobin, hemoglobinuria, hemosiderinuria (dark urine, often in the morning). Triad of hemolytic anemia, pancytopenia, atypical venous thrombosis (eg, Budd-Chiari, portal, cerebral, dermal)."],
        ["PNH treatment", "Eculizumab (anti-C5 antibody)—blocks terminal complement (prevents intravascular hemolysis only). Proximal complement inhibitors (eg, anti-C3, investigational)—may reduce extravascular hemolysis."],
        ["CH50", "Tests classical pathway (C1, C2, C4); ↓ in SLE, immune complex diseases, C2/C4 deficiency."],
        ["AH50", "Tests alternative pathway (factor D, B, properdin); ↓ in properdin, factor D/B deficiency, Neisseria infections."],
        ["CH50 + AH50", "Test common/terminal pathways (C3, C5-C9); ↓ in terminal pathway defect (C5-C9) or complement consumption (eg, sepsis, autoimmune disease)."],
      ],
      caption:
        "Read the rows as a localization ladder: the infection pattern names the fragment (pyogenic + SLE = early; Neisseria-only = terminal), the regulator failures produce angioedema and hemolysis rather than infection, and the assay pair converts any pattern into a named component. The PNH rows reward mechanism reading — eculizumab's 'intravascular only' limitation is C5's position in the cascade.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Bradykinin twice over — why ACE inhibitors are contraindicated in C1-INH deficiency",
      body: "C1 inhibitor restrains both the classical complement door and the kallikrein-bradykinin axis. In its deficiency, unregulated kallikrein activation floods the system with bradykinin — the mediator of the non-urticarial, antihistamine-resistant angioedema. ACE inhibitors are contraindicated because ACE (kininase II) is a principal bradykinin-degrading enzyme: blocking it raises bradykinin further and can precipitate airway-threatening attacks. Therapy attacks the axis directly: ecallantide inhibits kallikrein (upstream) and icatibant blocks the bradykinin B2 receptor (downstream). The same logic explains ACE-inhibitor-induced angioedema — a drug-induced phenocopy of the hereditary disease — and both are distinguished from histamine-mediated angioedema by the absence of urticaria and the futility of antihistamines.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old man presents with his third episode of meningococcemia; vaccine antibody responses and opsonization assays are normal; CH50 is absent while AH50 is normal.",
        discriminator: "Neisseria-only susceptibility + both assays interpretable",
        concept: "Terminal complement deficiency with alternative pathway intact",
        answer:
          "Terminal complement deficiencies (C5-C9) increase susceptibility to recurrent Neisseria bacteremia — the MAC pore is the one effector Neisseria clearance depends on. Wait — both assays need C5-C9, so a terminal defect lowers CH50 AND AH50; a low CH50 with NORMAL AH50 instead localizes to the classical arm (C1, C2, or C4 — or consumption in immune-complex disease). This stem's assay pair is therefore the discriminator for a CLASSICAL-component lesion with Neisseria risk conferred by impaired classical-dependent MAC delivery; a pure terminal defect would show both low. Read the assays before naming the fragment.",
      },
      {
        stem: "A 30-year-old woman with a 3-year history of fatigue presents with jaundice and morning-dark urine; she recently developed abdominal pain and ascites, and Doppler ultrasound shows hepatic vein thrombosis. CBC shows pancytopenia with an LDH of 1,400 and undetectable haptoglobin.",
        discriminator: "Hemolytic anemia + pancytopenia + Budd-Chiari thrombosis",
        concept: "Paroxysmal nocturnal hemoglobinuria — the triad",
        answer:
          "PNH is the acquired PIGA mutation that strips GPI anchors (and with them CD55/CD59) from RBCs: complement-mediated intravascular hemolysis (major, CD59 loss → unchecked MAC) with or without extravascular hemolysis (minor, CD55 loss → C3b opsonization and RES clearance). Labs: low haptoglobin, hemoglobinuria, hemosiderinuria — dark urine often in the morning. The triad is hemolytic anemia, pancytopenia, and atypical venous thrombosis (Budd-Chiari, portal, cerebral, dermal). Treatment: eculizumab (anti-C5) — it stops the intravascular route only.",
      },
      {
        stem: "A patient with lifelong recurrent sinopulmonary infections is found to have a malar rash, arthralgias, and low C3 with low C4; autoantibody testing is positive for immune-complex deposition.",
        discriminator: "Pyogenic infections + lupus-like immune-complex disease",
        concept: "Early complement deficiency (C1-C4)",
        answer:
          "Early complement deficiencies (C1-C4) raise the risk of severe, recurrent pyogenic sinus and respiratory tract infections (lost opsonization) AND the risk of SLE: C3b is used in the clearance of antigen-antibody complexes, so early-component loss leaves immune complexes circulating and depositing — the SLE-like syndrome. C2 deficiency is the most common classical-component deficiency and classically presents exactly this way; C4 deficiency is one of the strongest monogenic SLE associations. The assay signature: low CH50 with normal AH50.",
      },
    ],
    traps: [
      {
        a: "Eculizumab stops all hemolysis in PNH",
        b: "Eculizumab blocks terminal complement — preventing INTRAVASCULAR hemolysis only",
        whyConfused: "It is called 'the PNH drug,' so its coverage feels total.",
        keyDifference:
          "Eculizumab binds C5: no cleavage, no C5b-9, no MAC — the intravascular (major) route stops. But the extravascular route (CD55 loss → C3b opsonization → RES clearance) operates UPSTREAM of C5 and persists; that is why proximal complement inhibitors (anti-C3, investigational) are being developed for the residual hemolysis. Block point = coverage: C5 blockade cannot reach a C3b-mediated process.",
        clue: "Any PNH-treatment or residual-hemolysis question.",
      },
      {
        a: "Low CH50 always means a complement deficiency",
        b: "Low CH50 also occurs with CONSUMPTION (SLE, immune-complex disease, sepsis)",
        whyConfused: "The assay is taught as a deficiency screen.",
        keyDifference:
          "CH50 falls either because a component is MISSING (C1, C2, C4 deficiency — lifelong, recurrent infections) or because the cascade is being SPENT (SLE and immune complex diseases actively consuming classical components; sepsis consuming everything — then AH50 falls too). Tempo and company distinguish them: lifelong recurrent infections + isolated low CH50 = deficiency; active autoimmune disease or critical illness with low levels = consumption.",
        clue: "Any CH50-interpretation stem with an SLE or sepsis context.",
      },
      {
        a: "ACE inhibitors are a reasonable treatment for hereditary angioedema flares",
        b: "ACE inhibitors are CONTRAINDICATED in C1-INH deficiency (they raise bradykinin)",
        whyConfused: "ACE inhibitors treat hypertension, which the patient may also have.",
        keyDifference:
          "ACE (kininase II) degrades bradykinin; blocking it raises bradykinin — the exact mediator already unregulated by C1-INH deficiency. ACE inhibitors therefore precipitate or worsen attacks (and independently cause a drug-induced phenocopy of angioedema). Treatment attacks the axis: ecallantide (kallikrein inhibitor) or icatibant (bradykinin-B2 antagonist) — never ACE inhibitors.",
        clue: "Any medication-choice question in a hereditary-angioedema patient.",
      },
    ],
    pivots: [
      {
        lookAlike: "PNH vs C1-INH deficiency (the two regulatory failures)",
        differentiator: "Which regulator, which cells, which mediator",
        correctPath:
          "C1-INH deficiency: a soluble inhibitor of the classical door and kallikrein is missing — bradykinin-mediated ANGEDEDEMA (face/airway/GI, non-pitting, no urticaria), ↓C4, no hemolysis, treat with ecallantide/icatibant. PNH: membrane regulators (CD55/CD59) are stripped from RBCs by the PIGA-GPI failure — complement-mediated HEMOLYSIS (↓ haptoglobin, hemoglobinuria/hemosiderinuria, morning-dark urine) plus pancytopenia and atypical thrombosis, treat with eculizumab. Swelling vs lysis: the exam's fastest split.",
      },
      {
        lookAlike: "Early (C1-C4) vs terminal (C5-C9) deficiency (the two component failures)",
        differentiator: "Breadth of loss and infection pattern",
        correctPath:
          "Early: opsonization AND immune-complex clearance impaired → severe recurrent PYOGENIC sinus/respiratory infections + SLE risk; CH50 low, AH50 normal. Terminal: only MAC lost → isolated recurrent NEISSERIA bacteremia with normal opsonization and vaccine responses; CH50 AND AH50 both low. Broad early loss vs narrow late loss: the cascade's funnel anatomy predicts the phenotype.",
      },
    ],
    miniCase: {
      vignette:
        "A 28-year-old woman presents with six months of fatigue and dyspnea, and one week of abdominal distention. For a year she has noticed that her first morning urine is dark, resolving through the day. She has no medication exposures, no travel, and no family history of hematologic disease. Examination: jaundice, tender hepatomegaly, and ascites. Laboratories: hemoglobin 8.2 g/dL, leukocytes 3.1 × 10⁹/L, platelets 84 × 10⁹/L, LDH 1,450 U/L (elevated), haptoglobin undetectable, total bilirubin 4.1 mg/dL (indirect-dominant), creatinine normal, and urinalysis positive for blood by dipstick with no RBCs on microscopy. Doppler ultrasound occludes the hepatic veins.",
      question:
        "Which mechanism best explains this patient's hemolytic anemia and hepatic vein thrombosis?",
      options: [
        {
          label: "A",
          text: "Acquired loss of GPI-anchored complement regulators (CD55/CD59) from erythrocytes, permitting complement-mediated hemolysis and platelet activation",
          correct: true,
          why: "Correct — paroxysmal nocturnal hemoglobinuria. The acquired PIGA mutation strips GPI anchors; CD55 (DAF) and CD59 (MIRL) disappear from RBCs. CD59 loss disinhibits MAC — intravascular hemolysis (the major route): elevated LDH, undetectable haptoglobin, dipstick-positive/microscopically-negative urine (hemoglobin and hemosiderin, dark in the concentrated morning specimen). CD55 loss adds minor extravascular hemolysis via C3b opsonization and RES clearance. Pancytopenia reflects the marrow clone; hepatic vein (Budd-Chiari) thrombosis is the atypical venous thrombosis of complement-mediated platelet activation — completing the triad.",
        },
        {
          label: "B",
          text: "IgM autoantibodies binding erythrocytes at cold temperatures, fixing complement and causing intravascular lysis",
          why: "Cold agglutinin disease shares intravascular hemolysis and hemoglobinuria — but it produces isolated anemia with a positive Coombs (complement) test, not pancytopenia plus hepatic vein thrombosis, and the hemolysis is not concentrated in the morning urine. The two-line lab discriminator: Coombs positive (AIHA) vs negative (PNH).",
        },
        {
          label: "C",
          text: "Terminal complement (C5-C9) deficiency permitting recurrent Neisseria bacteremia with sequestration crisis",
          why: "Terminal deficiency causes RECURRENT INFECTIONS (Neisseria), not hemolysis — the missing piece is the pore's target (bacteria), not its regulation (RBCs). Nothing in this vignette suggests infection, and the assay pattern (both CH50 and AH50 low) differs from PNH's normal complement levels.",
        },
        {
          label: "D",
          text: "C1 inhibitor deficiency with bradykinin-mediated visceral edema mimicking ascites",
          why: "C1-INH deficiency produces recurrent non-pitting angioedema (face, airway, GI walls — pain without hemolysis), low C4, and no anemia, hemoglobinuria, or thrombosis. Ascites from hepatic vein OCCLUSION with hemolytic labs is a thrombotic-hemolytic process, not episodic bradykinin edema.",
        },
        {
          label: "E",
          text: "Hereditary spherocytosis with gallstones and pigmented cirrhosis producing portal hypertension",
          why: "Spherocytosis gives chronic EXTRAVASCULAR hemolysis (splenic clearance), spherocytes on smear, and gallstones — hemoglobinuria and hemosiderinuria (intravascular markers) are absent, and the marrow failure and hepatic vein thrombosis do not belong to it. The dipstick-blood-without-RBCs finding points to intravascular free hemoglobin.",
        },
      ],
      reasoning:
        "The vignette stacks the PNH triad: hemolytic anemia with intravascular markers (LDH high, haptoglobin undetectable, dipstick-positive urine without microscopic RBCs — hemoglobinuria/hemosiderinuria, characteristically dark in the morning), pancytopenia (hemoglobin, leukocytes, and platelets all low — the GPI-deficient clone is a marrow disease), and atypical venous thrombosis (Budd-Chiari). The mechanism is the page's chain: PIGA → ↓GPI anchors → loss of CD55/CD59 → unchecked MAC (major intravascular route, the one eculizumab stops) plus C3b opsonization (minor extravascular route). Distractors: cold agglutinin (Coombs positive, no pancytopenia/thrombosis), terminal deficiency (infections, not lysis), C1-INH (edema, not hemolysis), spherocytosis (extravascular, no hemoglobinuria).",
    },
  },
  mnemonics: [
    {
      code: "\u201cEarly loss clears nothing: bugs return as sinus infections, complexes settle as lupus.\u201d",
      meaning:
        "KYP's key for the C1-C4 deficiency phenotype: early components feed both opsonization (C3b) and immune-complex clearance — lose them and severe recurrent pyogenic SINUS and RESPIRATORY infections return (unopsonized encapsulated bacteria) while antigen-antibody complexes circulate and deposit (↑ SLE risk).",
      memorizes: "Early (C1-C4) deficiency: pyogenic infections + SLE",
      whenToUse: "Any early-complement or C2-deficiency stem.",
      clinical: "C2 deficiency is the most common classical deficiency; C4 null alleles are among the strongest SLE genetic associations.",
    },
    {
      code: "\u201cC5-C9 is the pore crew; without it, Neisseria checks in and nothing else checks out.\u201d",
      meaning:
        "KYP's key for terminal deficiency: C5 through C9 are the MAC assembly line. Lose them and only the lytic pore is gone — opsonization, chemotaxis, and anaphylaxis are intact — so the phenotype is narrow: recurrent Neisseria bacteremia/meningitis with everything else normal.",
      memorizes: "Terminal (C5-C9) deficiency: recurrent Neisseria only",
      whenToUse: "Any recurrent-meningococcemia stem with normal vaccine titers.",
      clinical: "Vaccinate (meningococcal ACWY + B), consider antibiotic prophylaxis, and screen with CH50 + AH50 (both low).",
    },
    {
      code: "\u201cPIGA paints the anchor; no paint, no CD55/CD59 — and complement eats the cell it can no longer see as self.\u201d",
      meaning:
        "KYP's key for PNH: PIGA encodes the first step of GPI-anchor synthesis ('the paint'). Without GPI anchors, the two membrane complement regulators — CD55 (DAF, convertase brake) and CD59 (MIRL, MAC brake) — cannot be displayed. MAC runs unchecked → major INTRAVASCULAR hemolysis; C3b opsonization runs unchecked → minor EXTRAVASCULAR hemolysis. Eculizumab (anti-C5) stops the first route only.",
      memorizes: "The PIGA-GPI-CD55/CD59 chain and the two hemolysis routes",
      whenToUse: "Any PNH stem — hemoglobinuria, pancytopenia, Budd-Chiari, or eculizumab question.",
      clinical: "Confirm with flow cytometry for absent CD55/CD59 (FLAER); eculizumab needs meningococcal vaccination (it recreates a pharmacologic terminal deficiency).",
    },
  ],
  rapidReview: {
    s30: [
      "Early (C1-C4) deficiency: severe recurrent pyogenic sinus/respiratory infections + ↑ SLE risk",
      "Terminal (C5-C9) deficiency: ↑ recurrent Neisseria bacteremia",
      "C1-INH deficiency: hereditary angioedema — kallikrein → ↑ bradykinin, ↓ C4",
      "PNH: acquired PIGA mutation → ↓ GPI anchors → loss of CD55(DAF)/CD59(MIRL)",
      "PNH triad: hemolytic anemia · pancytopenia · atypical venous thrombosis",
    ],
    m3: [
      "CD59 loss → uninhibited MAC → INTRAVASCULAR hemolysis (major)",
      "CD55 loss → ↑ C3b opsonization → EXTRAVASCULAR hemolysis (minor, RES)",
      "PNH labs: ↓ haptoglobin · hemoglobinuria · hemosiderinuria (dark morning urine)",
      "Eculizumab (anti-C5): prevents intravascular hemolysis ONLY",
      "ACE inhibitors contraindicated in C1-INH deficiency (↑ bradykinin)",
    ],
    m10: [
      "CH50 = classical (C1/C2/C4); ↓ in SLE, immune-complex disease, C2/C4 deficiency",
      "AH50 = alternative (factor D/B/properdin); ↓ in properdin & factor D/B deficiency, Neisseria",
      "Both low = C3/terminal defect OR consumption (sepsis, autoimmune)",
      "C1-INH Rx: ecallantide (kallikrein inhibitor) · icatibant (B2 antagonist)",
      "Proximal inhibitors (anti-C3, investigational) target PNH's residual extravascular hemolysis",
    ],
  },
  recall: [
    {
      q: "Contrast early and terminal complement deficiencies.",
      a: "Early (C1-C4): ↑ risk of severe, recurrent pyogenic sinus and respiratory tract infections; C3b used in clearance of antigen-antibody complexes → ↑ risk of SLE. Terminal (C5-C9): ↑ susceptibility to recurrent Neisseria bacteremia.",
    },
    {
      q: "What does C1 inhibitor deficiency cause, and what are its treatment and contraindicated drug class?",
      a: "Hereditary angioedema due to unregulated activation of kallikrein → ↑ bradykinin; characterized by ↓ C4 levels. ACE inhibitors are contraindicated (they also ↑ bradykinin). Treatment: ecallantide (kallikrein inhibitor), icatibant (bradykinin-B2 receptor antagonist).",
    },
    {
      q: "Walk the PNH mechanism from gene to hemolysis.",
      a: "Acquired PIGA gene mutation → ↓ GPI anchors → loss of CD55 (DAF) and CD59 (MIRL) → complement-mediated intravascular hemolysis +/− extravascular hemolysis. Loss of CD59 → uninhibited MAC formation → intravascular hemolysis (major). Loss of CD55 → ↑ C3b opsonization → extravascular hemolysis (minor; RBC clearance by the reticuloendothelial system).",
    },
    {
      q: "Name the PNH laboratory findings and clinical triad.",
      a: "Complement-mediated hemolysis → ↓ haptoglobin, hemoglobinuria, hemosiderinuria (dark urine, often in the morning). Triad: hemolytic anemia, pancytopenia, atypical venous thrombosis (eg, Budd-Chiari, portal, cerebral, dermal).",
    },
    {
      q: "How do eculizumab and proximal complement inhibitors differ in PNH, and what do CH50, AH50, and both together read?",
      a: "Eculizumab (anti-C5 antibody) blocks terminal complement — prevents intravascular hemolysis only; proximal complement inhibitors (eg, anti-C3, investigational) may reduce extravascular hemolysis. CH50 tests the classical pathway (C1, C2, C4; ↓ in SLE, immune complex diseases, C2/C4 deficiency); AH50 tests the alternative pathway (factor D, B, properdin; ↓ in properdin, factor D/B deficiency, Neisseria infections); CH50 + AH50 together test the common/terminal pathways (C3, C5-C9; ↓ in terminal pathway defect or complement consumption — eg, sepsis, autoimmune disease).",
    },
  ],
  related: [
    {
      title: "The Complement System",
      topicId: "complement-pathways",
      note: "The cascade and its inhibitors — the anatomy whose failures this page maps to diseases.",
    },
    {
      title: "Immunoglobulin Isotypes & Antigen Memory",
      topicId: "immunoglobulin-isotypes",
      note: "Cold agglutinin (IgM) disease is the Coombs-positive mimic of PNH's intravascular hemolysis.",
    },
    {
      title: "B-Cell Immunodeficiencies",
      topicId: "b-cell-immunodeficiencies",
      note: "The encapsulated-bacteria susceptibility of early complement loss overlaps the humoral-deficiency phenotype — assays separate them.",
    },
    {
      title: "Hypersensitivity Reactions",
      topicId: "hypersensitivity-types",
      note: "Hereditary angioedema is NOT type I hypersensitivity — bradykinin, not IgE-mast-cell histamine, despite the swelling.",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology (Hemolytic Anemia)",
      connection: "PNH is the prototypic intravascular hemolytic anemia with a negative Coombs test — dark morning urine, low haptoglobin, hemosiderinuria, and flow cytometry for CD55/CD59.",
    },
    {
      subject: "Gastroenterology & Hepatology",
      connection: "Budd-Chiari syndrome in a young adult with hemolytic anemia and pancytopenia is PNH until proven otherwise — hepatic vein thrombosis is the classic atypical thrombosis.",
    },
    {
      subject: "Pharmacology (Complement-Directed Therapy)",
      connection: "Eculizumab (anti-C5) and ravulizumab recreated 'drug-induced terminal deficiency' for PNH/aHUS — meningococcal vaccination is mandatory before starting.",
    },
    {
      subject: "Rheumatology (SLE)",
      connection: "Low C3/C4 in a lupus flare is complement CONSUMPTION (immune complexes spending the classical arm), not deficiency — same low CH50, opposite mechanism.",
    },
  ],
};
