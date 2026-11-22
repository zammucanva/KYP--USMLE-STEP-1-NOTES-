import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics III (G3).
// Source: First Aid 2026, Part 1 pdf 83 / book 61 (Autosomal trisomies)

export const autosomalTrisomies: KypUsMLENote = {
  id: "autosomal-trisomies",
  title: "Autosomal Trisomies & Prenatal Screening",
  subtitle:
    "Three viable trisomies in age order — Down (21, drinking age), Edwards (18, election age), Patau (13, puberty) — with their photo-signs, the meiosis I vs meiosis II nondisjunction logic, and the two screening tables (Down runs the markers hi: ↑hCG, ↑inhibin; Edwards drops every marker).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — aneuploidy, nondisjunction, and prenatal screening",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 61 (autosomal trisomies; Down, Edwards, Patau; prenatal screening)",
  tags: [
    "trisomy 21",
    "Down syndrome",
    "trisomy 18",
    "Edwards syndrome",
    "trisomy 13",
    "Patau syndrome",
    "nondisjunction",
    "meiosis I",
    "meiosis II",
    "advanced maternal age",
    "nuchal translucency",
    "PAPP-A",
    "quad screen",
    "Brushfield spots",
    "rocker-bottom feet",
    "cutis aplasia",
  ],
  core: {
    what: "Autosomal trisomies are screened in the first and second trimesters with noninvasive prenatal tests; incidence runs Down (21) > Edwards (18) > Patau (13), and autosomal monosomies are incompatible with life. Down: intellectual disability, flat facies, prominent epicanthal folds, single palmar crease, incurved 5th finger, gap between the 1st 2 toes, duodenal atresia, Hirschsprung disease, congenital heart disease (eg, AVSD), Brushfield spots; early-onset Alzheimer disease (chromosome 21 codes for amyloid precursor protein) and ↑ risk of AML/ALL; 95% of cases from meiotic nondisjunction (most commonly meiosis I, rising with advanced maternal age from 1:1500 at <20 to 1:25 at >45), 4% unbalanced Robertsonian translocation (typically 14;21), 1% postfertilization mitotic error. Edwards (PRINCE Edward) and Patau both carry death usually by age 1, and in Edwards every prenatal screening marker decreases.",
    why: "These three trisomies are the most photographed, most quizzed congenital syndromes in pediatrics — every sign (single palmar crease, rocker-bottom feet, cutis aplasia, clenched fists) is a one-look discriminator, and the screening tables convert the phenotypes into lab markers the exam tests both directions.",
    keyIdea: "Anchor by AGE-NUMBER mnemonics (21 drinking, 18 election, 13 puberty), then read each trisomy as SIGNS + LETHALITY + MARKERS: Down is viable and common with markers running hi (↑hCG, ↑inhibin; PAPP-A ↓), Edwards drops EVERY marker, Patau blanks the quad screen. The nondisjunction figure then explains where the extra chromosome came from: meiosis I failure (homologues stick together) → 2 trisomy + 2 monosomy gametes; meiosis II failure (sister chromatids stick) → 1 trisomy + 1 monosomy + 2 normal gametes.",
  },
  mechanisms: [
    {
      id: "nondisjunction-mi-vs-mii",
      title: "Nondisjunction — meiosis I vs meiosis II gamete outcomes",
      context: "The origin of the extra (or missing) chromosome",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A homologous chromosome pair enters meiosis",
            sublabel: "Input — the pair must separate twice to make haploid gametes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Meiosis I nondisjunction: homologous chromosomes fail to separate",
            sublabel: "Molecular — both homologues travel to one pole; the other pole gets none.",
            variant: "process",
          },
          {
            id: "o1",
            label: "MI outcome: 2 gametes n+1 (trisomy after fertilization) + 2 gametes n−1 (monosomy)",
            sublabel: "Output — every gamete is affected; half trisomic, half monosomic.",
            variant: "output",
          },
          {
            id: "s2",
            label: "Meiosis II nondisjunction: sister chromatids fail to separate",
            sublabel: "Molecular — meiosis I was normal; one intermediate cell mis-segregates its chromatid pair.",
            variant: "process",
          },
          {
            id: "o2",
            label: "MII outcome: 1 trisomy (n+1) + 1 monosomy (n−1) + 2 normal (n) gametes",
            sublabel: "Output — only half the gametes are affected.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Down syndrome: 95% meiotic nondisjunction, most commonly during meiosis I",
            sublabel: "Clinical — incidence rises with advanced maternal age: 1:1500 (<20) → 1:25 (>45).",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Autosomal monosomies are incompatible with life",
            sublabel: "Clinical — the n−1 gametes matter mainly as miscarriages (high chance of recessive trait expression noted for monosomy).",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "homologues stuck" },
          { from: "s2", to: "o2", label: "chromatids stuck" },
          { from: "x1", to: "s1", label: "most commonly MI" },
          { from: "x2", to: "o1", type: "inhibit", label: "n−1 not viable" },
        ],
        caption:
          "Which step failed decides the gamete census: MI nondisjunction (homologues fail) → ALL four gametes abnormal (2 trisomy + 2 monosomy); MII nondisjunction (sister chromatids fail) → only TWO abnormal (1 trisomy + 1 monosomy) beside two normals. Down's 95% is meiotic nondisjunction, most commonly meiosis I, climbing with maternal age.",
      },
    },
    {
      id: "down-syndrome-associations",
      title: "Down syndrome — the 6 As and the gene-dose consequences",
      context: "Trisomy 21 in the child and across the lifetime",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Three copies of chromosome 21 — most common viable chromosomal disorder",
            sublabel: "Input — also the most common cause of genetic intellectual disability.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Congenital findings: flat facies, epicanthal folds, single palmar crease, incurved 5th finger, gap between 1st 2 toes",
            sublabel: "Clinical — the recognizable habitus; Brushfield spots at the iris periphery.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Organ disease: duodenal atresia, Hirschsprung disease, AVSD, ↑ risk of umbilical hernia",
            sublabel: "Clinical — gut, heart, and abdominal wall in one package.",
            variant: "target",
          },
          {
            id: "o1",
            label: "The 6 As: Atlantoaxial instability · Advanced maternal age · Atresia (duodenal) · AVSD · Alzheimer disease (early onset) · AML (<5y)/ALL (>5y)",
            sublabel: "Output — chromosome 21 codes for amyloid precursor protein → early-onset Alzheimer; ↑ risk of AML/ALL.",
            variant: "output",
          },
          {
            id: "x1",
            label: "1st-trimester ultrasound: ↑ nuchal translucency and hypoplastic nasal bone; markers hi up: ↑hCG, ↑inhibin",
            sublabel: "Clinical — the screening signature (PAPP-A ↓).",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "habitus → organs" },
          { from: "s2", to: "o1", label: "lifelong associations" },
          { from: "x1", to: "trigger", label: "detected prenatally" },
        ],
        caption:
          "Down syndrome is a whole-body, whole-lifetime gene-dose story: the habitus at birth, the organs (AVSD, duodenal atresia, Hirschsprung), the atlantoaxial instability, and the adult consequences — early Alzheimer (amyloid precursor protein ON chromosome 21) and AML/ALL. 'Drinking age (21)' pins the number; the 6 As organize the associations.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Three trisomies, three age-mnemonics, one lethality split",
      body: [
        "The incidence order is Down (21) > Edwards (18) > Patau (13), and the source pins each to an age: drinking age (21), election age (18), puberty at age 13. Only Down is a long-term survivor — the most common viable chromosomal disorder and the most common cause of genetic intellectual disability — while Edwards and Patau both carry death usually by age 1, and autosomal monosomies are incompatible with life at all.",
        "The clinical discriminators are photographic: Down's flat facies with epicanthal folds, single palmar crease, and Brushfield spots; Edwards' PRINCE package (prominent occiput, rocker-bottom feet, clenched fists with overlapping fingers, low-set ears, micrognathia) with VSD, omphalocele, and myelomeningocele; Patau's midline failure (cleft lip/palate, holoprosencephaly — a defect in fusion of the prechordal mesoderm) with microphthalmia, microcephaly, polydactyly, cutis aplasia, and polycystic kidney disease.",
      ],
    },
    {
      kind: "visual",
      visualId: "trisomy-clinical-signs",
      title: "The photo-signs — palm, scalp, and fist",
      caption:
        "The source's trisomy photographs rebuilt as schematic pattern-preserving panels: the open palm with a single deep transverse crease (arrow-marked) — Single palmar crease, Down syndrome, with the incurved 5th finger and the gap between the 1st 2 toes noted; the infant scalp vertex with a focal raw oval defect — Cutis aplasia, Patau syndrome; and the clenched fist with overlapping fingers — Edwards syndrome, beside its rocker-bottom feet. Each sign is drawn as an original KYP schematic preserving the diagnostic pattern without reproducing the clinical photographs.",
      notice:
        "Match the sign to the number at sight: single palmar crease + Brushfield spots → 21; clenched overlapping fingers + rocker-bottom feet → 18; cutis aplasia + polydactyly + cleft midline → 13. Two of the three share rocker-bottom feet — Edwards and Patau — so the DECIDING sign is the hand: overlapped fingers (18) vs polydactyly (13).",
    },
    {
      kind: "visual",
      visualId: "nondisjunction-mI-mII",
      title: "Nondisjunction — where the extra chromosome came from",
      caption:
        "The source's two-column meiosis figure rebuilt: LEFT — Nondisjunction in meiosis I: the homologous pair fails to separate, both homologues go to one daughter cell; after a normal meiosis II the gametes are 2× n+1 (Trisomy) and 2× n−1 (Monosomy) — every gamete affected. RIGHT — Nondisjunction in meiosis II: meiosis I is normal; in one intermediate cell the sister chromatids fail to separate, giving gametes 1× normal (n), 1× monosomy (n−1), 1× normal (n), 1× trisomy (n+1) — only half affected. Labels: Meiosis I, Meiosis II, Nondisjunction, Gametes, Trisomy, Monosomy, Normal.",
      notice:
        "The census is the answer key: ALL FOUR gametes abnormal → the failure was in MEIOSIS I (homologues); HALF abnormal (2 normal + 1 trisomy + 1 monosomy) → MEIOSIS II (sister chromatids). Down syndrome is 95% meiotic nondisjunction, most commonly meiosis I — and the maternal-age curve (1:1500 under 20 → 1:25 over 45) is the MI oocyte aging story.",
    },
    {
      kind: "table",
      title: "The two screening tables — first trimester and quad",
      intro: "Marker directions by trisomy, exactly as the source prints them (↑ up, ↓ down, — not assessed).",
      columns: ["Screen", "Trisomy", "Marker directions"],
      rows: [
        ["1st trimester (PAPP-A, β-hCG)", "21 (Down)", "β-hCG ↑ · PAPP-A ↓"],
        ["1st trimester", "18 (Edwards)", "β-hCG ↓ · PAPP-A ↓"],
        ["1st trimester", "13 (Patau)", "β-hCG ↓ · PAPP-A ↓"],
        ["2nd trimester (quadruple)", "21 (Down)", "hCG ↑ · Inhibin A ↑ · Estriol ↓ · AFP ↓"],
        ["2nd trimester (quadruple)", "18 (Edwards)", "hCG ↓ · Inhibin A — or ↓ · Estriol ↓ · AFP ↓"],
        ["2nd trimester (quadruple)", "13 (Patau)", "hCG — · Inhibin A — · Estriol — · AFP —"],
      ],
      caption:
        "Down runs the markers hi: the source's own line is 'Markers are hi up: ↑hCG, ↑inhibin' — with PAPP-A and estriol and AFP down. In Edwards syndrome, EVERY prenatal screening marker decreases. Patau blanks the quad screen. First-trimester ultrasound adds ↑ nuchal translucency and hypoplastic nasal bone for Down.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the photo-sign stem — single palmar crease/Brushfield (21), clenched overlapping fingers/rocker-bottom (18), cutis aplasia/polydactyly/holoprosencephaly (13); (2) the marker stem — which trisomy gives ↑hCG + ↑inhibin A + ↓estriol + ↓AFP (21), or 'every marker decreases' (18); (3) the nondisjunction census — all four gametes abnormal (MI) vs half (MII); (4) the genetics-of-Down stem — 95% meiotic nondisjunction (most commonly MI, ↑ with advanced maternal age), 4% unbalanced Robertsonian 14;21, 1% postfertilization mitotic error; (5) the association stem — early-onset Alzheimer (amyloid precursor protein on 21), AML <5y/ALL >5y, atlantoaxial instability, AVSD, duodenal atresia.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why Down runs the markers hi while Edwards drops them all",
      body: "Placental biology is the screening test: in Down syndrome the trophoblast is hyperactive — it overproduces hCG and inhibin A while under-producing PAPP-A (first trimester) and, with a small/fetal-liver-limited fetus, less estriol and AFP. In Edwards syndrome the placenta is failing globally, so every marker it secretes falls together — the source's line 'every prenatal screening marker decreases' is a placental-insufficiency statement. Patau rarely reaches a marker signature at all (the quad screen dashes), which is why first-trimester ultrasound findings and the photo-signs carry that diagnosis instead.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "From screening cascade to the first week of life",
      body: [
        "The prenatal arc: noninvasive prenatal testing screens in the first and second trimesters; first-trimester ultrasound commonly shows ↑ nuchal translucency and hypoplastic nasal bone in Down syndrome; the marker tables then triage risk toward diagnostic testing. The newborn arc completes the story: a Down infant gets an echocardiogram for the AVSD, a duodenal-atresia workup (the double-bubble), and the umbilical-hernia watch; an Edwards or Patau infant shifts from workup to comfort-focused care, with death usually by age 1.",
        "The Down child's lifelong surveillance is the 6 As made clinical: atlantoaxial instability screening before anesthesia and sports, duodenal atresia repair, AVSD repair, early-onset Alzheimer surveillance in adulthood, and hematologic vigilance — AML before age 5, ALL after. The recurrence-risk conversation splits by mechanism: the 95% nondisjunction cases carry a maternal-age-related risk, while the 4% Robertsonian cases demand parental karyotyping because a balanced carrier parent can recur at much higher rates.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A newborn has hypotonia, a flat facies with prominent epicanthal folds, a single palmar crease, and whitish spots at the periphery of the iris on examination.",
        discriminator: "Brushfield spots + single palmar crease",
        concept: "Down syndrome (trisomy 21)",
        answer: "Drinking age (21) — most common viable chromosomal disorder and most common cause of genetic intellectual disability; 95% meiotic nondisjunction (most commonly meiosis I)",
      },
      {
        stem: "A growth-restricted newborn has a prominent occiput, rocker-bottom feet, micrognathia, low-set ears, and clenched fists with overlapping fingers; echocardiography shows a VSD.",
        discriminator: "Clenched overlapping fingers + rocker-bottom feet",
        concept: "Edwards syndrome (trisomy 18)",
        answer: "Election age (18) — PRINCE Edward; 2nd most common autosomal trisomy resulting in live birth; every prenatal screening marker decreases; death usually by age 1",
      },
      {
        stem: "A newborn has microcephaly, cleft lip and palate, holoprosencephaly, polydactyly, and a focal scalp defect with absent skin.",
        discriminator: "Cutis aplasia + polydactyly + midline defects",
        concept: "Patau syndrome (trisomy 13)",
        answer: "Puberty at age 13 — defect in fusion of prechordal mesoderm → midline defects; polycystic kidney disease and congenital heart (pump) disease; death usually by age 1",
      },
      {
        stem: "A pregnant patient's quad screen shows ↑hCG, ↑inhibin A, ↓estriol, and ↓AFP; first-trimester ultrasound had shown ↑ nuchal translucency and a hypoplastic nasal bone.",
        discriminator: "Markers hi up with ↓estriol/↓AFP",
        concept: "Down syndrome screening signature",
        answer: "Trisomy 21 — the source's line: 'Markers are hi up: ↑hCG, ↑inhibin'; PAPP-A is also ↓ in the first trimester (unlike Edwards, where EVERY marker decreases)",
      },
    ],
    traps: [
      {
        a: "Edwards syndrome",
        b: "Patau syndrome",
        whyConfused: "Both have rocker-bottom feet, congenital heart disease, omphalocele, and death by age 1.",
        keyDifference: "The HAND decides: Edwards = clenched fists with OVERLAPPING fingers (PRINCE Edward); Patau = POLYDACTYLY plus midline failure (cleft lip/palate, holoprosencephaly) and cutis aplasia.",
        clue: "Extra fingers or a scalp defect → 13; overlapped fingers or a prominent occiput → 18.",
      },
      {
        a: "Meiosis I nondisjunction",
        b: "Meiosis II nondisjunction",
        whyConfused: "Both produce n+1 and n−1 gametes.",
        keyDifference: "MI failure (homologues) makes ALL FOUR gametes abnormal — 2 trisomy + 2 monosomy. MII failure (sister chromatids) leaves TWO NORMAL gametes beside one trisomy and one monosomy.",
        clue: "Gamete census: 0 normal → MI; 2 normal → MII. Down is most commonly MI.",
      },
      {
        a: "Nondisjunction Down (95%)",
        b: "Robertsonian Down (4%)",
        whyConfused: "Both present as trisomy 21.",
        keyDifference: "Nondisjunction: 95%, most commonly meiosis I, risk tracks maternal age (1:1500 <20 → 1:25 >45). Robertsonian: 4%, typically t(14;21), requires PARENTAL karyotyping because a balanced carrier parent changes recurrence risk.",
        clue: "Recurrence-risk or parental-translocation question → think the 4% Robertsonian branch.",
      },
      {
        a: "PAPP-A ↓ in Down",
        b: "Every marker ↓ in Edwards",
        whyConfused: "Both screens show falling markers.",
        keyDifference: "Down runs hCG and inhibin A UP while PAPP-A/estriol/AFP fall. Edwards drops EVERY prenatal screening marker — nothing rises.",
        clue: "Any ↑ marker (hCG/inhibin) → 21; all arrows down → 18.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'hypotonic newborn with congenital heart disease' stem offering Down, Zellweger, and hypothyroidism",
        differentiator: "The habitus and the iris",
        correctPath: "Flat facies + epicanthal folds + single palmar crease + Brushfield spots → Down (AVSD); Zellweger adds hepatomegaly, seizures, and peroxisomal facies; congenital hypothyroidism lacks the chromosomal habitus.",
      },
      {
        lookAlike: "An 'abnormal quad screen' stem offering 21, 18, 13, and neural-tube defect",
        differentiator: "Which marker moved which way",
        correctPath: "hCG ↑ + inhibin ↑ + estriol ↓ + AFP ↓ → 21; everything ↓ → 18; dashes → 13; isolated ↑AFP with normal hCG → neural-tube defect (AFP is the open-defect marker).",
      },
    ],
    miniCase: {
      vignette:
        "A 36-year-old woman (G1P0) at 16 weeks' gestation has a quadruple screen showing ↑hCG, ↑inhibin A, ↓estriol, and ↓AFP. First-trimester ultrasound at 12 weeks had shown increased nuchal translucency and a hypoplastic nasal bone. Cell-free fetal DNA screening is positive for trisomy 21, and amniocentesis results confirm the diagnosis. At term, a boy is delivered with hypotonia, a flat facies with prominent epicanthal folds, a single transverse palmar crease, an incurved 5th finger, and a widened gap between the first 2 toes. An echocardiogram is ordered on day 2 of life.",
      question: "Which of the following is the most likely finding on the newborn's echocardiogram?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Atrioventricular septal defect",
          why: "Correct. The vignette is trisomy 21 end to end — the quad-screen signature (↑hCG, ↑inhibin A, ↓estriol, ↓AFP), the ultrasound (↑nuchal translucency, hypoplastic nasal bone), and the habitus (flat facies, epicanthal folds, single palmar crease). Congenital heart disease in Down syndrome is classically the AVSD — one of the 6 As (Atrioventricular septal defect).",
        },
        {
          label: "B",
          text: "Ventricular septal defect",
          why: "VSD is the congenital heart disease the source attaches to EDWARDS syndrome (trisomy 18) — whose clenched overlapping fingers, rocker-bottom feet, and every-marker-down screen are absent here.",
        },
        {
          label: "C",
          text: "Conotruncal defects with thymic aplasia",
          why: "That is the DiGeorge 22q11 picture (also on this chapter's chromosome map as 22) — it pairs with hypocalcemia and palatal defects, not with the Down habitus or this screen pattern.",
        },
        {
          label: "D",
          text: "Supravalvular aortic stenosis",
          why: "That is WILLIAMS syndrome's cardiovascular lesion (7q microdeletion including elastin) — accompanied by elfin facies, hypercalcemia, and extreme friendliness, none of which is this newborn.",
        },
        {
          label: "E",
          text: "Ebstein anomaly",
          why: "Ebstein (apically displaced tricuspid) is associated with lithium exposure and Ebstein–like physiology in prenatal-carbimazole questions — not with trisomy 21 or this screening signature.",
        },
      ],
      reasoning:
        "Two locks turn with one key. The SCREEN: hCG and inhibin A up with estriol and AFP down is Down's 'markers are hi up' quad signature (Edwards drops everything). The HABITUS: hypotonia, flat facies, epicanthal folds, single palmar crease, incurved 5th finger, sandal-gap toes. Trisomy 21's congenital heart disease is classically the atrioventricular septal defect — the A among the 6 As.",
    },
  },
  mnemonics: [
    {
      code: "“Drinking age (21) · Election age (18) · Puberty at age 13”",
      meaning: "The source's own age-hooks: Down = 21, Edwards = 18, Patau = 13.",
      memorizes: "The three viable autosomal trisomies and their chromosome numbers",
      whenToUse: "Any trisomy-number question.",
      clinical: "Incidence Down > Edwards > Patau; only 21 is a long-term survivor.",
    },
    {
      code: "“PRINCE Edward: Prominent occiput, Rocker-bottom feet, Intellectual disability, Nondisjunction, Clenched fists with overlapping fingers, low-set Ears”",
      meaning: "The source's own Edwards package, letter by letter.",
      memorizes: "Trisomy 18 findings",
      whenToUse: "The growth-restricted newborn with the overlapped-fist photograph.",
      clinical: "Plus micrognathia, VSD, omphalocele, myelomeningocele; death usually by age 1; every screening marker decreases.",
    },
    {
      code: "“The 6 As of Down syndrome”",
      meaning: "Atlantoaxial instability · Advanced maternal age · Atresia (duodenal) · Atrioventricular septal defect · Alzheimer disease (early onset) · AML (<5y)/ALL (>5y).",
      memorizes: "Down syndrome associations",
      whenToUse: "Down association stems — anesthesia screening, duodenal atresia, AVSD, adult decline, leukemia.",
      clinical: "Chromosome 21 codes for amyloid precursor protein → early-onset Alzheimer; ↑ risk of AML/ALL.",
    },
  ],
  rapidReview: {
    s30: [
      "Incidence of trisomies: Down (21) > Edwards (18) > Patau (13); autosomal monosomies incompatible with life.",
      "Down: flat facies, epicanthal folds, single palmar crease, incurved 5th finger, gap between 1st 2 toes, Brushfield spots.",
      "Down organs: duodenal atresia, Hirschsprung, AVSD, umbilical hernia risk.",
      "Down genetics: 95% meiotic nondisjunction (most commonly MI; maternal age 1:1500 <20 → 1:25 >45); 4% Robertsonian t(14;21); 1% mitotic error.",
      "6 As: Atlantoaxial, Advanced maternal age, Atresia, AVSD, Alzheimer (APP on 21), AML/ALL.",
      "Edwards (PRINCE): prominent occiput, rocker-bottom feet, clenched overlapping fingers, low-set ears, micrognathia, VSD, omphalocele; death by age 1.",
      "Patau: midline defects (cleft lip/palate, holoprosencephaly — prechordal mesoderm fusion defect), polydactyly, cutis aplasia, microphthalmia, PKD; death by age 1.",
      "Down screen: ↑hCG, ↑inhibin A, ↓estriol, ↓AFP, PAPP-A ↓, ↑nuchal translucency, hypoplastic nasal bone; Edwards: every marker ↓.",
    ],
    m3: [
      "MI nondisjunction → all 4 gametes abnormal (2 trisomy + 2 monosomy); MII → 2 normal + 1 trisomy + 1 monosomy.",
      "First-trimester screen pairs β-hCG with PAPP-A; the quad adds inhibin A, estriol, and AFP.",
      "Rocker-bottom feet is shared by 18 and 13 — the hand (overlapping fingers vs polydactyly) separates them.",
      "Down's Alzheimer is a gene-dose consequence: APP lives on chromosome 21.",
      "AML before age 5, ALL after age 5 in Down syndrome.",
      "Omphalocele appears in both Edwards and Patau — another shared-feature trap.",
    ],
    m10: [
      "The maternal-age curve is the MI-oocyte story: nondisjunction risk accumulates in the oocyte arrested in prophase I for decades.",
      "The 4% Robertsonian Down cases are the ones that change counseling — karyotype the parents.",
      "'Most common cause of genetic intellectual disability' = Down (fragile X is the most common INHERITED cause).",
      "Single palmar crease appears in ~5% of normal newborns — it is a sign in context, not a diagnosis alone.",
      "The quad screen's ↓estriol reflects fetal adrenal+liver output; ↓AFP reflects liver immaturity in Down.",
      "NIPT (cfDNA) screens; amniocentesis diagnoses — the cascade the page's first sentence describes.",
    ],
  },
  recall: [
    {
      q: "State the incidence order of the autosomal trisomies and the fate of autosomal monosomies.",
      a: "Down (21) > Edwards (18) > Patau (13); autosomal monosomies are incompatible with life.",
    },
    {
      q: "Give Down syndrome's genetic breakdown (95/4/1).",
      a: "95% meiotic nondisjunction (most commonly during meiosis I; incidence ↑ with advanced maternal age from 1:1500 in females <20 to 1:25 in females >45); 4% unbalanced Robertsonian translocation, most typically between chromosomes 14 and 21; 1% postfertilization mitotic error.",
    },
    {
      q: "List the 6 As of Down syndrome.",
      a: "Atlantoaxial instability, Advanced maternal age, Atresia (duodenal), Atrioventricular septal defect, Alzheimer disease (early onset), AML (<5 years of age)/ALL (>5 years of age).",
    },
    {
      q: "Contrast the gamete outcomes of meiosis I vs meiosis II nondisjunction.",
      a: "Meiosis I (homologues fail to separate): all four gametes abnormal — 2 trisomy (n+1) + 2 monosomy (n−1). Meiosis II (sister chromatids fail): 2 normal (n) + 1 trisomy (n+1) + 1 monosomy (n−1).",
    },
    {
      q: "Give the quad-screen pattern for Down and for Edwards.",
      a: "Down: hCG ↑, inhibin A ↑, estriol ↓, AFP ↓ (first trimester adds PAPP-A ↓, ↑ nuchal translucency, hypoplastic nasal bone). Edwards: every prenatal screening marker decreases (hCG ↓, inhibin A — or ↓, estriol ↓, AFP ↓); Patau: dashes.",
    },
    {
      q: "What causes Patau's midline defects, and name three of them.",
      a: "Defect in fusion of the prechordal mesoderm → midline defects: holoprosencephaly, cleft lip/palate, and (with the other findings) microphthalmia, microcephaly, polydactyly, cutis aplasia.",
    },
  ],
  related: [
    {
      title: "Structural Chromosomal Disorders",
      note: "The 4% of Down from unbalanced Robertsonian t(14;21) is that note's centerpiece — the gamete-outcome fork.",
      topicId: "chromosomal-disorders",
    },
    {
      title: "Modes of Inheritance",
      note: "Aneuploidy and nondisjunction are defined as genetic terms there — this note is their clinical expression.",
      topicId: "modes-of-inheritance",
    },
    {
      title: "Karyotyping",
      note: "The 14;21 Robertsonian carrier and the trisomy karyotype (47,XX,+21) are read off this technique's karyogram.",
      topicId: "karyotyping",
    },
  ],
  crossLinks: [
    {
      subject: "Pediatrics",
      connection: "The trisomy newborn exams — AVSD surveillance in Down, comfort-focused care in Edwards/Patau — are pediatric territory.",
    },
    {
      subject: "Obstetrics",
      connection: "Nuchal translucency, PAPP-A/β-hCG, and the quad screen are the prenatal-testing cascade.",
    },
    {
      subject: "Neurology/Psychiatry",
      connection: "Early-onset Alzheimer disease in Down (APP on chromosome 21) is the gene-dose bridge to dementia.",
    },
  ],
};
