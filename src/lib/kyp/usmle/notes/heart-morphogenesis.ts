import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv1 (pdf 306-307 / book 284-285).
// Source: First Aid 2026, Part 1 pdf 306-307 (book 284-285) — Heart morphogenesis.

export const heartMorphogenesis: KypUsMLENote = {
  id: "heart-morphogenesis",
  title: "Heart Morphogenesis",
  subtitle: "First functional organ, beating by week 4-5 — then looping, outflow spiraling, valves, and the septation sequence whose failures ARE the congenital lesion list.",
  subject: "Cardiovascular · Embryology",
  system: "Section III · Cardiovascular — Embryology",
  pilotCategory: "Embryology",
  difficulty: 2,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 1 pp. 284–285 (heart morphogenesis)",
  tags: [
    "cardiac looping",
    "neural crest",
    "endocardial cushions",
    "septum primum",
    "foramen ovale",
    "PFO",
    "Kartagener",
  ],
  core: {
    what: "The morphogenesis sequence: the heart is the first functional organ in vertebrate embryos (beats spontaneously by 4-5 weeks); CARDIAC LOOPING (week 4, primary heart tube establishes left-right polarity — dynein defects → dextrocardia/Kartagener); OUTFLOW TRACT formation (neural crest cells → truncal/bulbar ridges spiral and fuse → aorticopulmonary septum → ascending aorta + pulmonary trunk; failed migration → TGA, tetralogy of Fallot, persistent truncus arteriosus); VALVE development (aortic/pulmonary from outflow-tract endocardial cushions; mitral/tricuspid from fused AV-canal cushions); and ATRIAL SEPTATION (septum primum grows toward the cushions narrowing ostium primum → ostium secundum forms by cell death → septum secundum covers it leaving the foramen ovale → after birth primum closes against secundum as LA pressure rises; PFO = failure to fuse, 25% of population, paradoxical emboli).",
    why: "Every congenital heart lesion on the exam is this page read backwards — the conotruncal triad names neural crest, the AV-canal defects name endocardial cushions, the primum/secundum choreography names the ASD/PFO family, and the embryologic failure site predicts the anatomy.",
    keyIdea: "Match the defect to the embryologic structure that failed: neural crest migration → conotruncal abnormalities (TGA, ToF, truncus); endocardial cushion fusion → AV septal defects and valve position anomalies (Ebstein = displaced); septum primum/secundum → ASDs and the patent foramen ovale (25% of adults, paradoxical emboli). Left-right polarity (dynein) → dextrocardia in Kartagener syndrome.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "heart-morphogenesis-map",
      title: "The morphogenesis map — four stages plus septation",
      caption: "The printed four-row table (looping, outflow tract, valves, septation) with its figure annotations, rebuilt as a KYP stage map with the defect columns attached.",
      notice: "Follow the septation panel's numbered steps: primum grows → ostium secundum opens by cell death → secundum covers it → foramen ovale remains as a one-way valve → LA pressure seals it after birth. Each step's failure names a lesion.",
    },
    {
      kind: "table",
      title: "The printed morphogenesis table, verbatim",
      columns: ["Stage", "What happens (printed)", "Defects (printed)"],
      rows: [
        [
          "Cardiac looping",
          "Primary heart tube loops to establish left-right polarity; begins in week 4 of development",
          "Defect in left-right dynein (involved in left-right asymmetry) can lead to dextrocardia, as seen in Kartagener syndrome",
        ],
        [
          "Outflow tract formation",
          "Neural crest cell migrations → truncal and bulbar ridges that spiral and fuse to form aorticopulmonary septum → ascending aorta and pulmonary trunk",
          "Conotruncal abnormalities associated with failure of neural crest cells to migrate: Transposition of great arteries (TGA); Tetralogy of Fallot; Persistent truncus arteriosus",
        ],
        [
          "Valve development",
          "Aortic/pulmonary: derived from endocardial cushions of outflow tract. Mitral/tricuspid: derived from fused endocardial cushions of the AV canal",
          "Valvular anomalies may be stenotic, regurgitant, atretic (eg, tricuspid atresia), or displaced (eg, Ebstein anomaly)",
        ],
      ],
      caption: "The first three printed rows carried whole; the septation rows live in the step list below (the print presents septation as a 7-step sequence with a figure).",
    },
    {
      kind: "steps",
      title: "Atrial septation — the printed 7-step choreography (steps 5-7 + the two keys)",
      steps: [
        { label: "Septum primum grows", detail: "toward endocardial cushions, narrowing ostium primum." },
        { label: "Ostium secundum forms", detail: "in septum primum due to cell death (ostium primum regresses)." },
        { label: "Septum secundum develops", detail: "on the right side of septum primum, as ostium secundum maintains right-to-left shunt." },
        { label: "Septum secundum expands", detail: "and covers most of ostium secundum. The residual foramen is the foramen ovale." },
        { label: "The valve forms", detail: "remaining portion of septum primum forms the one-way valve of the foramen ovale." },
        { label: "Step 6 — closure at birth", detail: "septum primum closes against septum secundum, sealing the foramen ovale soon after birth because of ↑ LA pressure and ↓ RA pressure." },
        { label: "Step 7 — fusion", detail: "septum secundum and septum primum fuse during infancy/early childhood, forming the atrial septum." },
      ],
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Patent foramen ovale — the print's own warning block",
      body: "PFO = failure of septum primum and septum secundum to fuse after birth; seen in 25% of population. Most are asymptomatic and remain undetected. Can lead to paradoxical emboli (venous thromboemboli entering the systemic arterial circulation through right-to-left shunt) — as can occur in atrial septal defect (ASD). The 25% prevalence and the paradoxical-embolus mechanism are the two exam anchors.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "One structure, one lesion",
      body: "Neural crest (migrate) → conotruncal triad (TGA · ToF · truncus). Endocardial cushions (fuse) → AV canal defects + valve anomalies (stenotic, regurgitant, atretic, displaced). Dynein (left-right axis) → dextrocardia/Kartagener. Septum primum+secundum (fuse after birth) → PFO 25% + paradoxical emboli.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Presentations that run through this page",
      items: [
        {
          lead: "Situs inversus + chronic sinusitis + bronchiectasis + infertility",
          text: "Kartagener syndrome — dynein defect, dextrocardia; the looping row's printed association.",
        },
        {
          lead: "Cyanotic newborn with a single arterial trunk",
          text: "Persistent truncus arteriosus — neural crest failure to migrate (conotruncal).",
        },
        {
          lead: "Young adult with an unexplained stroke and a positive bubble study",
          text: "Paradoxical embolus through a PFO (25% of the population) — venous thrombus crossing right-to-left.",
        },
        {
          lead: "Displaced AV valve with atrialized right ventricle",
          text: "Ebstein anomaly — a 'displaced' valvular anomaly per the printed valve-development row.",
        },
        {
          lead: "Child with complete AV canal defect + intellectual disability",
          text: "Endocardial cushion defect — complete AVSD (common AV valve + ASD + VSD), strongly associated with Down syndrome (the continued page, book 285).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Cyanotic infant whose aorta and pulmonary trunk arise in parallel from a single truncal vessel.",
        discriminator: "Failed spiraling/fusion of truncal and bulbar ridges",
        concept: "Neural crest cells fail to migrate → aorticopulmonary septum malforms",
        answer: "Persistent truncus arteriosus (conotruncal abnormality)",
      },
      {
        stem: "Adult with recurrent cryptogenic strokes; echo bubble study shows right-to-left shunt.",
        discriminator: "25% population prevalence + paradoxical emboli mechanism",
        concept: "Failure of septum primum and secundum to fuse after birth",
        answer: "Patent foramen ovale",
      },
      {
        stem: "Infant with dextrocardia, situs inversus, and recurrent sinopulmonary infections.",
        discriminator: "Left-right polarity failure + dynein",
        concept: "Cardiac looping defect in week 4",
        answer: "Kartagener syndrome (primary ciliary dyskinesia)",
      },
      {
        stem: "Newborn with a stenotic, atretic, or displaced AV valve.",
        discriminator: "Valvular anomaly classes from the printed row",
        concept: "Mitral/tricuspid valves derive from fused endocardial cushions of the AV canal",
        answer: "Valvular anomaly (eg, tricuspid atresia, Ebstein anomaly)",
      },
    ],
    traps: [
      {
        a: "PFO (25%, often silent)",
        b: "ASD (a true septal defect)",
        whyConfused: "Both are atrial-level right-to-left shunt conduits.",
        keyDifference: "PFO = failure of FUSION of two normal septa after birth (the print's definition); ASD = a structural hole (secundum/primum defect). Both can carry paradoxical emboli — the print says so explicitly.",
        clue: "Normal septa that did not fuse = PFO; absent/deficient septal tissue = ASD.",
      },
      {
        a: "Conotruncal (neural crest) defects",
        b: "Cushion (AV canal) defects",
        whyConfused: "Both are 'structural heart malformations' in the same chapter.",
        keyDifference: "Neural crest = the OUTFLOW division (aorta vs pulmonary trunk — TGA/ToF/truncus); endocardial cushions = the AV canal SEPTA + VALVES (ASD+VSD+common AV valve).",
        clue: "Great-vessel relationship problems → neural crest; valve/septum problems at the AV junction → cushions.",
      },
      {
        a: "Ostium secundum (in septum primum, by cell death)",
        b: "Ostium primum (the original opening, narrowing)",
        whyConfused: "Names differ by one word.",
        keyDifference: "Ostium PRIMUM is the first opening that NARROWS as primum grows; ostium SECUNDUM opens IN septum primum by cell death and is what secundum covers — leaving the foramen ovale.",
        clue: "'Secundum' events happen after 'primum' events, in that order.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any congenital cyanotic heart lesion",
        differentiator: "Which embryologic structure failed?",
        correctPath: "Outflow vessel alignment → neural crest; AV junction valves/septa → cushions; left-right axis → dynein/looping; atrial-level shunt → primum/secundum choreography.",
      },
      {
        lookAlike: "Cryptogenic stroke workup",
        differentiator: "Right-to-left shunt possibilities: PFO vs ASD vs VSD",
        correctPath: "Bubble study + the 25% prevalence make PFO the statistical answer; ASD/VSD are structural holes on echo.",
      },
    ],
    miniCase: {
      vignette: "A 31-year-old woman presents with a first-ever ischemic stroke. Workup finds deep venous thrombosis in her left calf. Transthoracic echo with agitated saline shows bubbles crossing to the left atrium with Valsalva. She is neurologically intact after thrombolysis.",
      question: "What is the underlying anatomic explanation?",
      options: [
        {
          label: "A",
          text: "Failure of septum primum and septum secundum to fuse after birth",
          why: "Correct — a PFO (25% of the population) carrying a venous thromboembolus into the systemic arterial circulation (paradoxical embolism), exactly the printed warning.",
          correct: true,
        },
        {
          label: "B",
          text: "Failure of neural crest cells to migrate into the truncal and bulbar ridges",
          why: "That produces conotruncal abnormalities (TGA, ToF, truncus) — congenital cyanotic lesions, not an adult stroke conduit.",
        },
        {
          label: "C",
          text: "Defect in left-right dynein during cardiac looping",
          why: "That produces dextrocardia/situs inversus (Kartagener) — no shunt, no paradoxical embolism mechanism.",
        },
        {
          label: "D",
          text: "Incomplete fusion of endocardial cushions of the AV canal",
          why: "That is the AV septal defect family (complete AVSD with common AV valve + ASD + VSD; partial primum ASD + cleft mitral valve) — typically detected in childhood, often with Down syndrome.",
        },
        {
          label: "E",
          text: "Failure of the aorticopulmonary septum to spiral",
          why: "Same conotruncal family as B — a great-vessel alignment problem, incompatible with an asymptomatic 31-year life history ending in a paradoxical embolus.",
        },
      ],
      reasoning: "DVT + right-to-left atrial shunt on bubble study = paradoxical embolism. The printed PFO block supplies the whole chain: failure of primum-secundum fusion after birth, 25% prevalence, mostly asymptomatic, paradoxical emboli.",
    },
  },
  mnemonics: [
    {
      code: "“Neural crest builds the GREAT VESSELS — cushions build the DOORS”",
      meaning: "Neural crest migrations spiral the aorticopulmonary septum (great-vessel alignment: TGA/ToF/truncus); endocardial cushions form the AV-canal septa and the AV + semilunar valves (the doors: stenotic/regurgitant/atretic/displaced).",
      memorizes: "The defect-structure mapping of the printed table",
      whenToUse: "Every congenital-lesion-to-embryology matching question.",
      clinical: "KYP original — the print lists both without a linking rule.",
    },
    {
      code: "“Primum narrows, secundum covers, ovale waits”",
      meaning: "Septum primum grows (ostium primum narrows) → ostium secundum opens by cell death → septum secundum covers it → the residual foramen ovale waits as a one-way valve until LA pressure seals it after birth.",
      memorizes: "The septation sequence and PFO mechanism",
      whenToUse: "Any septation-step or PFO question.",
      clinical: "PFO = the two septa never fusing — 25% of us, mostly silent.",
    },
  ],
  rapidReview: {
    s30: [
      "First functional organ; beats spontaneously by week 4-5.",
      "Cardiac looping (week 4): left-right polarity; dynein defect → dextrocardia (Kartagener).",
      "Neural crest → truncal + bulbar ridges → aorticopulmonary septum → aorta + pulmonary trunk; failed migration → TGA, tetralogy of Fallot, persistent truncus arteriosus.",
      "Aortic/pulmonary valves from outflow-tract cushions; mitral/tricuspid from fused AV-canal cushions; anomalies: stenotic, regurgitant, atretic, displaced (Ebstein).",
      "Atrial septation: primum narrows ostium primum → ostium secundum (cell death) → secundum covers it → foramen ovale one-way valve → birth: ↑ LA / ↓ RA seals it → infancy fusion.",
      "PFO: failure to fuse after birth, 25% of population, mostly asymptomatic → paradoxical emboli (like ASD).",
    ],
    m3: [
      "Conotruncal = neural crest: the triad TGA + ToF + persistent truncus all share failed migration.",
      "Endocardial cushions contribute to BOTH atrial septation and the membranous interventricular septum (continued page, book 285).",
      "Foramen ovale's one-way valve = remaining portion of septum primum.",
      "The closure driver at birth is the LA > RA pressure flip (the same flip that closes the fetal circulation shunts, book 286).",
      "Valvular anomalies come in four printed flavors: stenotic, regurgitant, atretic (tricuspid atresia), displaced (Ebstein).",
    ],
    m10: [
      "Full septation chain (printed steps 5-7 + keys): septum primum grows toward cushions narrowing ostium primum; ostium secundum forms IN primum by cell death (primum regresses); secundum develops on the RIGHT side of primum while ostium secundum maintains the fetal right-to-left shunt; secundum expands covering most of ostium secundum — the residual foramen is the foramen ovale; remaining primum = the one-way valve; step 6: primum closes against secundum after birth (↑ LA pressure, ↓ RA pressure); step 7: the two fuse in infancy/early childhood forming the atrial septum.",
      "PFO block verbatim anchors: failure of fusion after birth; 25% of population; most asymptomatic and undetected; paradoxical emboli (venous thromboemboli entering systemic arterial circulation through right-to-left shunt), as can occur in ASD.",
      "Outflow tract chain verbatim: neural crest cell migrations → truncal and bulbar ridges that spiral and fuse → aorticopulmonary septum → ascending aorta + pulmonary trunk.",
      "Looping verbatim: primary heart tube loops week 4 establishing left-right polarity; left-right dynein defect → dextrocardia in Kartagener syndrome.",
      "Bridge forward: the cushion contribution to the membranous septum explains why VSDs are 'usually membranous' (book 285) — morphogenesis sets up the lesion geography used by the rest of the chapter.",
    ],
  },
  recall: [
    {
      q: "Which embryologic cell population forms the aorticopulmonary septum?",
      a: "Neural crest cells — migrating into truncal and bulbar ridges that spiral and fuse.",
    },
    {
      q: "The conotruncal abnormality triad?",
      a: "Transposition of great arteries, tetralogy of Fallot, persistent truncus arteriosus (failed neural crest migration).",
    },
    {
      q: "What do the endocardial cushions become?",
      a: "Aortic/pulmonary valves (outflow-tract cushions) and mitral/tricuspid valves + atrial septum + membranous IV septum (AV-canal cushions).",
    },
    {
      q: "Prevalence of PFO and its key risk?",
      a: "25% of the population; paradoxical emboli (venous clots crossing right-to-left).",
    },
    {
      q: "What seals the foramen ovale after birth, and why?",
      a: "Septum primum closes against septum secundum because LA pressure rises and RA pressure falls.",
    },
    {
      q: "Kartagener syndrome — which morphogenesis stage fails?",
      a: "Cardiac looping (left-right polarity; dynein defect) → dextrocardia.",
    },
  ],
  related: [
    {
      title: "Heart Embryology Structures",
      note: "The derivative table this page's structures feed into — every embryonic structure names its adult address.",
      topicId: "heart-embryology-structures",
    },
    {
      title: "Fetal Circulation",
      note: "The foramen ovale is one of the three fetal shunts; the birth-time pressure flip closes both it and the ductus arteriosus.",
      topicId: "fetal-circulation",
    },
    {
      title: "Heart Anatomy",
      note: "The finished product: the septa and valves built here are the chambers and orifices mapped there.",
      topicId: "heart-anatomy",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology",
      connection: "Congenital heart disease classes (cyanotic right-to-left vs acyanotic left-to-right) are the clinical expressions of this page's failure modes.",
    },
    {
      subject: "Pulmonary",
      connection: "Kartagener = primary ciliary dyskinesia — dynein is shared between embryonic polarity and airway cilia (bronchiectasis, situs inversus, infertility).",
    },
    {
      subject: "Genetics",
      connection: "Down syndrome's endocardial cushion defect (AVSD) ties this page to the trisomy-21 phenotype.",
    },
  ],
  mechanisms: [
    {
      id: "septation-pfo-cascade",
      title: "Septation → foramen ovale → PFO — the cascade in one line",
      context: "Atrial septum, weeks 5 → adulthood",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Septum primum grows toward the cushions",
            sublabel: "Ostium primum narrows — the first door starts closing.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Ostium secundum opens by cell death",
            sublabel: "A second window forms IN septum primum as ostium primum regresses.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Septum secundum covers it",
            sublabel: "Grows on the right side, covering most of ostium secundum — residual foramen = foramen ovale; fetal right-to-left shunt preserved.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Birth flips the pressures",
            sublabel: "↑ LA pressure / ↓ RA pressure — primum closes against secundum (step 6).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Fusion completes the atrial septum",
            sublabel: "Step 7 in infancy/early childhood — the normal endpoint.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Failure to fuse = PFO (25%)",
            sublabel: "Mostly asymptomatic; paradoxical emboli possible — venous clots cross right-to-left.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "Two septa, one window, one flap: primum narrows, secundum covers, the ovale waits — and only fusion in infancy closes the door permanently.",
      },
    },
    {
      id: "conotruncal-crest-cascade",
      title: "Neural crest failure → the conotruncal triad",
      context: "Outflow tract, weeks 5-7",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Neural crest cells migrate",
            sublabel: "Into the truncal and bulbar ridges of the outflow tract.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Ridges spiral and fuse",
            sublabel: "Forming the aorticopulmonary septum that divides the trunk into aorta + pulmonary trunk.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Normal: aligned great vessels",
            sublabel: "Ascending aorta and pulmonary trunk in their proper spiral relationship.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Failed migration: TGA",
            sublabel: "Vessels run in parallel — aorta from RV, PA from LV (no spiraling).",
            variant: "output",
          },
          {
            id: "o3",
            label: "Failed migration: ToF + truncus",
            sublabel: "Tetralogy of Fallot (malaligned outflow) and persistent truncus arteriosus (no division at all).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "o1" },
          { from: "s1", to: "o2" },
          { from: "s1", to: "o3" },
        ],
        caption:
          "One migrating cell population builds one spiral septum — its failure is the whole cyanotic conotruncal family.",
      },
    },
  ],
};
