import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 2 pp. 105, 117–122, 306–308 (ischemic brain disease; effects of strokes; hemorrhages; aphasia; aneurysms)

export const strokeSyndromes: KypUsMLENote = {
  id: "stroke-syndromes",
  title: "Stroke Syndromes",
  subtitle: "One artery map + one cross-sectional brainstem map explains every stroke syndrome on the exam — from MCA aphasia to Wallenberg's ipsilateral face, contralateral body.",
  subject: "Neurology · Neuroanatomy",
  system: "Section III · Neurology and Special Senses — Pathology",
  pilotCategory: "Neurology / neuroanatomy localization",
  difficulty: 3,
  readTime: 15,
  sourceRef: "First Aid 2026, Part 2 pp. 513, 525–530, 714–716 (ischemic brain disease; effects of strokes; hemorrhages; aphasia; aneurysms)",
  tags: [
    "MCA",
    "ACA",
    "PCA",
    "Wallenberg",
    "locked-in",
    "aphasia",
    "tPA",
  ],
  core: {
    what: "Stroke is focal neurologic injury from vascular cause — ischemic (thrombotic, embolic, hypoxic; liquefactive necrosis) or hemorrhagic — where the ARTERY TERRITORY predicts the exact deficit.",
    why: "Stroke localization is Step 1's purest reasoning test: given a deficit, name the artery; given an artery, predict the deficit. It also carries the time-critical therapy rule (tPA within 3–4.5 hours) and the imaging rule (noncontrast CT first to exclude hemorrhage).",
    keyIdea: "Learn THREE maps: (1) cortical — ACA = leg, MCA = face/arm + language or neglect, PCA = vision with macular sparing; (2) brainstem lateral vs medial — lateral (PICA/AICA) = ipsilateral face + contralateral body + cerebellar/Horner, medial (ASA) = corticospinal/medial lemniscus/hypoglossal; (3) hemorrhage shapes on CT — biconvex (epidural) vs crescent (subdural) vs diffuse SAH blood.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "stroke-territory-map",
      title: "Cortical territory map",
      caption: "Schematic lateral hemisphere with ACA (superior-medial, teal), MCA (lateral convexity, rose), and PCA (posterior occipital, plum) territories and their deficit signatures.",
      notice: "The central sulcus is the dividing line: MCA's face-and-arm cortex sits just in front of it; ACA's leg cortex wraps the medial surface above it. The bottom strip converts territory → syndrome in one line each.",
    },
    {
      kind: "table",
      title: "Effects of strokes — the full artery → lesion → symptom table",
      columns: [
        "Artery",
        "Area of lesion",
        "Symptoms",
        "Notes",
      ],
      rows: [
        [
          "Anterior cerebral artery (ACA)",
          "Motor and sensory cortices — LOWER LIMB",
          "Contralateral paralysis and sensory loss of the lower limb; urinary incontinence",
          "Leg > face/arm pattern",
        ],
        [
          "Middle cerebral artery (MCA)",
          "Motor/sensory cortex — upper limb and face; frontal (Broca); temporal (Wernicke)",
          "Contralateral paralysis and sensory loss of lower face and upper limb; aphasia if dominant (usually left) hemisphere; hemineglect if nondominant (usually right); Wernicke aphasia associated with contralateral superior quadrantanopia (temporal lobe involvement, Meyer loop)",
          "Most common thrombotic stroke site",
        ],
        [
          "Lenticulostriate arteries",
          "Striatum, internal capsule",
          "Contralateral paralysis WITHOUT cortical signs (no neglect, aphasia, visual field loss)",
          "Pure motor stroke (most common lacunar); microatheroma + hyaline arteriolosclerosis (lipohyalinosis) from unmanaged hypertension",
        ],
        [
          "Posterior cerebral artery (PCA)",
          "Occipital lobe",
          "Contralateral hemianopia with MACULAR SPARING; alexia without agraphia (dominant, extending to splenium of corpus callosum); prosopagnosia (nondominant); Weber syndrome (paramedian branches → ipsilateral CN III palsy + contralateral hemiplegia from cerebral peduncle)",
          "Occipital = visual deficits",
        ],
        [
          "Basilar artery",
          "Pons, medulla, lower midbrain",
          "Quadriplegia; loss of voluntary facial (except blinking), mouth, tongue movements; loss of HORIZONTAL but not vertical eye movements; consciousness PRESERVED if RAS spared",
          "Locked-in syndrome — 'locked in the basement'",
        ],
        [
          "Anterior inferior cerebellar artery (AICA)",
          "Lateral pons — facial nucleus, vestibular nuclei, spinothalamic, spinal trigeminal, sympathetic, middle/inferior cerebellar peduncles, inner ear (labyrinthine artery)",
          "LMN facial paralysis, ↓ lacrimation/salivation, ↓ taste anterior 2/3; vomiting, vertigo, nystagmus; contralateral body + ipsilateral face pain/temperature loss; ipsilateral Horner; ipsilateral ataxia; ipsilateral sensorineural deafness",
          "Lateral pontine syndrome — facial nucleus effects are SPECIFIC to AICA",
        ],
        [
          "Posterior inferior cerebellar artery (PICA)",
          "Lateral medulla — nucleus ambiguus, vestibular nuclei, spinothalamic, spinal trigeminal, sympathetic, inferior cerebellar peduncle",
          "Dysphagia, hoarseness, ↓ gag, hiccups; vomiting, vertigo, nystagmus; crossed pain/temperature loss; ipsilateral Horner; ipsilateral ataxia",
          "Lateral medullary (Wallenberg) syndrome — nucleus ambiguus effects SPECIFIC to PICA",
        ],
        [
          "Anterior spinal artery (ASA)",
          "Medial medulla — corticospinal tract, medial lemniscus, hypoglossal nerve",
          "Contralateral paralysis (upper + lower limb); ↓ contralateral proprioception; tongue deviates IPSILATERALLY",
          "Medial medullary syndrome — 'Ants love M&M's'; infarct of paramedian branches of ASA and/or vertebral arteries",
        ],
      ],
    },
    {
      kind: "compare",
      title: "TIA vs ischemic stroke",
      columns: [
        "Transient ischemic attack",
        "Ischemic stroke",
      ],
      rows: [
        {
          label: "Definition",
          a: "Brief, REVERSIBLE focal neurologic dysfunction WITHOUT acute infarction (MRI ⊝)",
          b: "Persistent deficit with infarction (liquefactive necrosis)",
        },
        {
          label: "Duration",
          a: "Majority resolve in <15 minutes",
          b: "Deficits persist; edema peaks days 2–3",
        },
        {
          label: "Mechanism",
          a: "Ischemia from embolus or small-vessel stenosis — e.g. amaurosis fugax (transient monocular vision loss) from retinal artery emboli in carotid disease",
          b: "Thrombotic / embolic / hypoxic",
        },
        {
          label: "Management",
          a: "Urgent risk-factor control (antiplatelets, carotid evaluation)",
          b: "tPA 3–4.5 h + thrombectomy if large-artery; secondary prevention (aspirin, clopidogrel, BP/glucose/lipid control, smoking cessation, treat AF and carotid stenosis)",
        },
      ],
    },
    {
      kind: "table",
      title: "Intracranial hemorrhage — four lesions, four shapes",
      columns: [
        "Type",
        "Source",
        "CT shape & behavior",
        "Clinical signature",
      ],
      rows: [
        [
          "Epidural hematoma",
          "Rupture of MIDDLE MENINGEAL ARTERY (branch of maxillary) at the pterion, often after skull fracture",
          "Biconvex (lentiform), hyperdense, does NOT cross suture lines",
          "Transient LOC → lucid interval → rapid deterioration (hematoma expands under arterial pressure); transtentorial herniation → CN III palsy",
        ],
        [
          "Subdural hematoma",
          "Rupture of BRIDGING VEINS",
          "Crescent-shaped, CROSSES suture lines; acute = hyperdense, chronic = hypodense; midline shift; acute-on-chronic appearances",
          "The elderly/alcoholic/cerebral-atrophy and shaken-baby hematoma; can be acute (high-energy) or chronic (mild trauma)",
        ],
        [
          "Subarachnoid hemorrhage",
          "Trauma, or rupture of saccular (berry) aneurysm / AVM",
          "Blood in the subarachnoid space",
          "'Worst headache of my life' / thunderclap; xanthochromic (yellow) CSF; vasospasm or rebleed days 3–10 (nimodipine may improve neurologic outcome); risk of communicating/noncommunicating hydrocephalus",
        ],
        [
          "Intraparenchymal hemorrhage",
          "Systemic hypertension (most common) — Charcot-Bouchard microaneurysms; also amyloid angiopathy (recurrent lobar hemorrhage in older adults), AVM, vasculitis, neoplasm, reperfusion after ischemic stroke",
          "Hematoma within tissue; hypertensive bleeds favor PUTAMEN/globus pallidus (lenticulostriate vessels), then internal capsule, thalamus, pons, cerebellum",
          "Progressive neurologic deficit, headache, depressed consciousness",
        ],
      ],
    },
    {
      kind: "table",
      title: "Aphasia — the language localization table",
      intro: "Aphasia is a HIGHER-ORDER language deficit from dominant (usually left) hemisphere disease — distinguish from dysarthria (a motor problem).",
      columns: [
        "Type",
        "Lesion",
        "Pattern",
      ],
      rows: [
        [
          "Broca (expressive)",
          "Inferior frontal gyrus, frontal lobe",
          "NONFLUENT speech with INTACT comprehension; patient frustrated, insight intact — 'broken boca'",
        ],
        [
          "Wernicke (receptive)",
          "Superior temporal gyrus, temporal lobe",
          "FLUENT 'word salad' with IMPAIRED comprehension; no insight",
        ],
        [
          "Conduction",
          "Arcuate fasciculus",
          "IMPAIRED REPETITION (the discriminator)",
        ],
        [
          "Global",
          "Broca + Wernicke areas",
          "Nonfluent + impaired comprehension",
        ],
      ],
    },
    {
      kind: "list",
      title: "Aneurysms — the vessel-wall neighbors",
      items: [
        {
          lead: "Saccular (berry) aneurysm",
          text: "At bifurcations of the circle of Willis; MOST COMMON at the ACom–ACA junction. Associated with ADPKD and Ehlers-Danlos; risk factors: advanced age, hypertension, tobacco. Usually silent until rupture → SAH. Mass effect: ACom → bitemporal hemianopia (optic chiasm compression); PCom → ipsilateral CN III palsy (mydriasis 'blown pupil,' ptosis, 'down and out' eye).",
        },
        {
          lead: "Charcot-Bouchard microaneurysm",
          text: "Small-vessel aneurysms from chronic hypertension (lenticulostriate arteries → basal ganglia/thalamus) causing hemorrhagic intraparenchymal stroke; NOT visible on angiography.",
        },
        {
          lead: "Spinal cord protection",
          text: "ASA supplies the anterior 2/3 of the cord (corticospinal + spinothalamic); posterior spinal arteries supply the dorsal columns — posterior column sparing in ASA occlusion.",
        },
      ],
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Syndrome quick-recognition ladder",
      items: [
        {
          lead: "Aged brain + fever + stroke",
          text: "Subacute endocarditis → embolic MCA stroke with mycotic aneurysm risk — get blood cultures BEFORE antibiotics.",
        },
        {
          lead: "Hiker with tick + ascending weakness",
          text: "Consider Lyme (neuroborreliosis) — facial palsy, meningoradiculitis — distinct from stroke but on the facial-palsy differential.",
        },
        {
          lead: "Postpartum seizure + headache",
          text: "Reversible cerebral vasoconstriction syndrome / posterior reversible encephalopathy / CVT — PCA-territory edema; stroke mimics matter for tPA eligibility.",
        },
        {
          lead: "Cortical vein thrombosis",
          text: "Young patient, prothrombotic state (OC pills, IBD), hemorrhagic infarct in non-arterial territory — 'stroke plus' pattern.",
        },
        {
          lead: "Thalamic pain (Déjerine-Roussy) syndrome",
          text: "VPL/anterior pulvinar lacunar or PCA infarct → contralateral sensory loss with allodynia, hyperalgesia, dysesthesia developing days to years post-stroke.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Cerebral edema — the deadly parallel process",
      steps: [
        {
          label: "Cytotoxic edema (early)",
          detail: "Intracellular — Na⁺/K⁺-ATPase failure → ↑ intracellular Na⁺ → osmotic water shift. Early ischemia, hyperammonemia, SIADH.",
        },
        {
          label: "Vasogenic edema (late)",
          detail: "Extracellular — BBB disruption → ↑ permeability. Late ischemia, trauma, hemorrhage, inflammation, tumors.",
        },
        {
          label: "↑ ICP → herniation risk",
          detail: "Fluid accumulation in parenchyma → ↑ ICP: headache, vomiting, papilledema, Cushing reflex (↑ BP + bradycardia), and herniation syndromes (transtentorial → CN III palsy; central → pinpoint pupils; tonsillar → respiratory arrest).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Elderly patient, sudden right face and arm weakness with slurred, effortful speech; comprehension and insight preserved.",
        discriminator: "Nonfluent speech with intact comprehension = expressive aphasia + face/arm distribution",
        concept: "Left MCA territory infarct (Broca area + precentral face/arm cortex)",
        answer: "Left middle cerebral artery stroke",
      },
      {
        stem: "Patient with vertigo, vomiting, hiccups, loss of pain/temperature on the LEFT face and RIGHT body, left Horner, and left-limb ataxia.",
        discriminator: "Crossed sensory findings + nucleus ambiguus signs (dysphagia/hoarseness/↓gag)",
        concept: "Lateral medulla — PICA territory",
        answer: "Lateral medullary (Wallenberg) syndrome",
      },
      {
        stem: "Deafness + ipsilateral facial paralysis (LMN) + crossed body/face sensory loss + ataxia.",
        discriminator: "Facial nucleus involvement + inner ear (labyrinthine artery)",
        concept: "Lateral PONTINE — AICA territory",
        answer: "Lateral pontine syndrome (AICA)",
      },
      {
        stem: "Young patient with thunderclap 'worst headache of life'; CT shows blood in the sulci; LP shows xanthochromia.",
        discriminator: "Sudden-onset severe headache + subarachnoid blood",
        concept: "Ruptured saccular aneurysm (ACom most common site)",
        answer: "Subarachnoid hemorrhage — nimodipine reduces vasospasm (day 3–10) morbidity",
      },
      {
        stem: "Man with vertebral/body-burst fracture after severe hyperextension injury; now bilateral loss of pain/temperature with preserved dorsal column function and bilateral motor weakness.",
        discriminator: "ASA supplies anterior 2/3 — dorsal columns spared",
        concept: "Anterior spinal artery syndrome",
        answer: "ASA occlusion — motor + spinothalamic loss, proprioception preserved",
      },
    ],
    traps: [
      {
        a: "Broca aphasia",
        b: "Dysarthria",
        whyConfused: "Both produce 'hard-to-understand speech.'",
        keyDifference: "Aphasia = LANGUAGE machinery (content/grammar affected, often with other dominant-hemisphere signs). Dysarthria = motor mechanics (content intact — write a sentence and it's perfect).",
        clue: "Can the patient write/understand normally? Yes → dysarthria; No (telegraphic writing, impaired comprehension) → aphasia.",
      },
      {
        a: "Watershed (hypoxic) stroke",
        b: "Embolic shower",
        whyConfused: "Both can be bilateral and follow systemic events (surgery, hypotension).",
        keyDifference: "Watershed infarcts localize to the BORDER ZONES (ACA/MCA and MCA/PCA junctions — proximal arm/thigh 'man-in-a-barrel' pattern) after global hypoperfusion. Emboli are random/focal and often multiple-territory (AF, endocarditis).",
        clue: "Intraoperative hypotension + bilateral border-zone deficits → watershed.",
      },
      {
        a: "Epidural hematoma",
        b: "Subdural hematoma",
        whyConfused: "Both post-traumatic with possible lucid intervals.",
        keyDifference: "Epidural = ARTERIAL (middle meningeal), biconvex, does not cross sutures, rapid course. Subdural = BRIDGING VEINS, crescent, crosses sutures, can be chronic/progressive (atrophy, elderly, alcohol).",
        clue: "CT shape + suture behavior + tempo.",
      },
      {
        a: "Wernicke aphasia",
        b: "Confusion/delirium",
        whyConfused: "Fluent nonsensical speech sounds 'confused.'",
        keyDifference: "Wernicke = fluent, grammatical, EMPTY content, no insight; delirium = fluctuating attention with multisystem/toxic context.",
        clue: "Effortless fluent output with zero information → Wernicke.",
      },
    ],
    pivots: [
      {
        lookAlike: "Two brainstem strokes — one with ipsilateral deafness/facial palsy, one with dysphagia/hoarseness",
        differentiator: "Facial nucleus + inner ear (AICA/lateral pontine) vs nucleus ambiguus (PICA/lateral medullary)",
        correctPath: "Deafness + LMN facial palsy → AICA; dysphagia + hoarseness + ↓ gag → PICA (Wallenberg).",
      },
      {
        lookAlike: "Homonymous hemianopia with vs without macular sparing",
        differentiator: "PCA (occipital cortex) lesion spares the macular representation (dual MCA/PCA supply); optic tract lesion does not spare",
        correctPath: "Hemianopia WITH macular sparing → PCA infarct; WITHOUT sparing → optic tract lesion; bitemporal → chiasm (ACom aneurysm).",
      },
    ],
    miniCase: {
      vignette: "A 58-year-old man with a 30-pack-year smoking history and untreated hypertension presents with sudden vertigo, vomiting, and hiccups. On exam he has loss of pain and temperature sensation on the left side of his face and the right side of his body, a left ptosis with miosis, and left-sided limb ataxia with dysmetria. Gag reflex is diminished. Noncontrast head CT is negative for hemorrhage; MRI shows an infarct in the lateral medulla.",
      question: "Occlusion of which of the following vessels is the most likely cause?",
      options: [
        {
          label: "A",
          text: "Anterior inferior cerebellar artery",
          why: "Tempting — AICA produces a nearly identical lateral pontine syndrome, but its specific additions are facial nerve nucleus signs (LMN facial paralysis, ↓ lacrimation/salivation, ↓ taste anterior 2/3) and ipsilateral sensorineural deafness, which this patient lacks.",
        },
        {
          correct: true,
          label: "B",
          text: "Posterior inferior cerebellar artery",
          why: "Correct. Nucleus ambiguus signs (dysphagia, hoarseness, diminished gag, hiccups) with crossed face/body sensory loss, ipsilateral Horner, and ataxia define lateral medullary (Wallenberg) syndrome — PICA territory.",
        },
        {
          label: "C",
          text: "Anterior spinal artery",
          why: "ASA occlusion = medial medullary syndrome: contralateral hemiparesis, contralateral proprioception loss, ipsilateral tongue deviation — a medial (not lateral) picture.",
        },
        {
          label: "D",
          text: "Basilar artery tip",
          why: "Basilar occlusion threatens the locked-in state — quadriplegia with preserved consciousness and vertical gaze — not a lateral medullary crossed sensory syndrome.",
        },
      ],
      reasoning: "Nucleus ambiguus (hiccups, ↓ gag) is PICA-specific. The crossed sensory findings (ipsilateral face, contralateral body) place the lesion in the LATERAL medulla; AICA would climb one level to the lateral pons and add the facial nucleus and inner ear.",
    },
  },
  mnemonics: [
    {
      code: "“A Copy Cat Named Willis”",
      meaning: "Atherosclerosis's favorite cerebral home — the circle of Willis sits at the END of the frequency list (after abdominal aorta, coronary, popliteal, carotid).",
      memorizes: "Atherosclerosis location hierarchy (cerebral chapter)",
      whenToUse: "Vascular risk factor + stroke questions.",
      clinical: "Carotid bifurcation atherosclerosis → embolic MCA strokes and amaurosis fugax.",
    },
    {
      code: "“Don't PICA lame horse that can't eat”",
      meaning: "PICA = lateral medullary syndrome; lame = hoarseness; can't eat = dysphagia.",
      memorizes: "Nucleus ambiguus findings specific to PICA",
      whenToUse: "Any lateral medullary (Wallenberg) question.",
      clinical: "Add vertigo/vomiting/nystagmus, crossed sensory loss, ipsilateral Horner, ipsilateral ataxia to complete the syndrome.",
    },
    {
      code: "“Ants love M&M's”",
      meaning: "ASA (Ants) → Medial Medullary syndrome.",
      memorizes: "ASA = medial medulla (corticospinal + medial lemniscus + hypoglossal)",
      whenToUse: "Medullary stroke with tongue deviation and contralateral weakness/proprioception loss.",
      clinical: "Tongue deviates TOWARD the lesion (ipsilateral XII nucleus).",
    },
    {
      code: "“Locked in the basement”",
      meaning: "Basilar → locked-in syndrome (basement = basilar).",
      memorizes: "Basilar occlusion consequence",
      whenToUse: "Conscious patient who can only blink and move eyes vertically.",
      clinical: "RAS spared → consciousness intact; treat the cause urgently.",
    },
    {
      code: "“Vulnerable hippos need pure water”",
      meaning: "Hippocampus (CA1), neocortex, Purkinje cells, WaterShed areas — most vulnerable to hypoxic injury.",
      memorizes: "Hypoxia-sensitive regions",
      whenToUse: "Post-cardiac-arrest, drowning, hypoperfusion injuries.",
      clinical: "Post-CA anterograde amnesia from CA1 damage; watershed strokes after intraoperative hypotension.",
    },
  ],
  rapidReview: {
    s30: [
      "ACA = leg; MCA = face/arm + aphasia (dominant) or neglect (nondominant); PCA = occipital → hemianopia with macular sparing.",
      "Lenticulostriate = pure motor lacunar stroke (hypertensive lipohyalinosis).",
      "PICA = lateral medulla (nucleus ambiguus, crossed sensory, Horner, ataxia). AICA = lateral pons (adds LMN facial palsy + deafness). ASA = medial medulla (tongue deviates ipsilaterally).",
      "Basilar = locked-in (vertical gaze preserved). PCA paramedian = Weber (ipsilateral CN III palsy + contralateral hemiplegia).",
      "Noncontrast CT FIRST (exclude hemorrhage); DWI MRI earliest ischemia detection (3–30 min). tPA window 3–4.5 h.",
    ],
    m3: [
      "Stroke histology timeline: 12–24 h red neurons → 24–72 h neutrophils → 3–5 d macrophages → 1–2 wk gliosis/vascular proliferation → >2 wk glial scar.",
      "Cytotoxic (early, intracellular, Na/K-ATPase failure) vs vasogenic (late, extracellular, BBB breakdown) edema.",
      "TIA: reversible, <15 min majority, no infarct on MRI; amaurosis fugax = carotid embolus to retinal artery.",
      "Epidural: middle meningeal artery, pterion, biconvex NOT crossing sutures, lucid interval. Subdural: bridging veins, crescent crossing sutures. SAH: 'worst headache,' xanthochromia, vasospasm day 3–10 (nimodipine). Intraparenchymal: hypertensive Charcot-Bouchard — putamen first.",
      "Aphasia: Broca (nonfluent, insight, frustrated); Wernicke (fluent word salad, no insight); conduction (arcuate fasciculus, impaired repetition); global (both).",
      "Berry aneurysm: ACom most common; ADPKD, Ehlers-Danlos associations; PCom → blown pupil CN III; ACom → bitemporal hemianopia.",
    ],
    m10: [
      "Full effects-of-strokes table (memorize the two clinical rows per artery: lesion structures + symptoms).",
      "Wernicke aphasia + contralateral superior quadrantanopia = temporal lobe (Meyer loop) involvement — the MCA-PCA junction lesson.",
      "PCA cortical signs: alexia without agraphia (dominant + splenium), prosopagnosia (nondominant), Weber syndrome (paramedian midbrain).",
      "Ischemic stroke subtypes with mechanisms: thrombotic (ruptured plaque, MCA common), embolic (AF, carotid stenosis, PFE paradoxical, endocarditis — multiple territories), hypoxic (watershed, CV surgery).",
      "Secondary prevention bundle: antiplatelets (aspirin, clopidogrel), BP/glucose/lipid optimization, smoking cessation, treat AF and carotid stenosis.",
      "Thalamic pain syndrome (VPL/pulvinar): contralateral sensory loss + allodynia/hyperalgesia days-to-years post-stroke.",
      "Diffuse axonal injury (trauma context): shearing of white matter tracts, punctate hemorrhages on MRI, coma/persistent vegetative state.",
    ],
  },
  recall: [
    {
      q: "Which artery produces contralateral lower-limb weakness with urinary incontinence?",
      a: "Anterior cerebral artery (ACA) — medial frontal/paracentral lobule.",
    },
    {
      q: "Which stroke territory produces aphasia, and when hemineglect instead?",
      a: "MCA — dominant (usually left) hemisphere → aphasia; nondominant (right) → hemineglect.",
    },
    {
      q: "Pathognomonic crossed findings of lateral medullary syndrome?",
      a: "Ipsilateral face + contralateral body pain/temperature loss (spinal trigeminal + lateral spinothalamic).",
    },
    {
      q: "Which artery lesion causes an ipsilateral LMN facial palsy with sensorineural deafness?",
      a: "AICA (lateral pontine) — facial nucleus + labyrinthine artery inner ear.",
    },
    {
      q: "Hemianopia with macular sparing localizes where?",
      a: "Occipital (PCA) cortex — the macular representation has dual MCA/PCA supply.",
    },
    {
      q: "Which aneurysm causes a 'blown pupil' with down-and-out gaze?",
      a: "PCom aneurysm compressing CN III (parasympathetic fibers on the periphery go first).",
    },
    {
      q: "First imaging study in suspected acute stroke, and why?",
      a: "Noncontrast head CT — to EXCLUDE HEMORRHAGE before tPA; detects ischemia only after 6–24 h.",
    },
    {
      q: "Most common site of hypertensive intraparenchymal hemorrhage?",
      a: "Putamen/globus pallidus of the basal ganglia (lenticulostriate vessels, Charcot-Bouchard microaneurysms).",
    },
  ],
  related: [
    {
      title: "Cranial Nerves",
      note: "Every brainstem stroke is a cranial nerve anatomy exam — CN III (Weber), facial nucleus (AICA), nucleus ambiguus (PICA), hypoglossal (ASA).",
      topicId: "cranial-nerves",
    },
    {
      title: "Atherosclerosis",
      note: "The thrombotic substrate: ruptured plaque at carotid bifurcation and MCA; risk-factor management is stroke prevention.",
      topicId: "atherosclerosis",
    },
    {
      title: "AV Conduction Blocks",
      note: "Cardioembolic stroke (AF) and its anticoagulation decisions live next door to the arrhythmia notes; MI → mural thrombus → embolism is the same highway.",
      topicId: "av-conduction-blocks",
    },
    {
      title: "Visual pathway lesions",
      note: "PCA stroke (hemianopia with macular sparing) sits at the downstream end of the optic radiations map — Meyer loop quadrantanopia (temporal), dorsal (parietal).",
    },
  ],
  crossLinks: [
    {
      subject: "Anatomy",
      connection: "Circle of Willis and vertebrobasilar branches are the road map for every syndrome in this note.",
    },
    {
      subject: "Pathology",
      connection: "Liquefactive necrosis, cytotoxic vs vasogenic edema, and the histology timeline of infarction.",
    },
    {
      subject: "Pharmacology",
      connection: "tPA (fibrinolytic) window and contraindications; nimodipine for SAH vasospasm; antiplatelet secondary prevention.",
    },
    {
      subject: "Psychiatry",
      connection: "Vascular dementia (multi-infarct) vs Alzheimer — stepwise vs gradual cognitive decline.",
    },
    {
      subject: "Nephrology",
      connection: "Chronic kidney disease accelerates cerebrovascular disease; dialysis patients have elevated stroke risk.",
    },
  ],
  mechanisms: [
    {
      id: "ischemic-stroke-mechanism",
      title: "Ischemic stroke — hypoxia to liquefactive necrosis",
      context: "Minutes to weeks",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Arterial occlusion or systemic hypoperfusion",
            sublabel: "Thrombotic — clot forms at the site (commonly MCA) over a ruptured atherosclerotic plaque. Embolic — from atrial fibrillation, carotid stenosis, DVT with PFO (paradoxical), infective endocarditis; can hit multiple territories. Hypoxic — systemic hypoperfusion/hypoxemia (eg, cardiovascular surgery) preferentially injures WATERSHED areas.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Irreversible neuronal injury begins after ~5 minutes of hypoxia",
            sublabel: "cellular — Most vulnerable: hippocampus (CA1), neocortex, cerebellar Purkinje cells, watershed areas — 'vulnerable hippos need pure water.'",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cytotoxic edema first (intracellular)",
            sublabel: "cellular — Na⁺/K⁺-ATPase failure → intracellular Na⁺ and water. Causes: early ischemia, hyperammonemia, SIADH.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Vasogenic edema follows (extracellular)",
            sublabel: "tissue — Blood-brain barrier disruption → extracellular fluid. Late ischemia, trauma, hemorrhage, inflammation, tumors.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Liquefactive necrosis → gliosis",
            sublabel: "Pathology — Histology timeline: 12–24 h red neurons (eosinophilic cytoplasm + pyknotic nuclei) → 24–72 h necrosis + neutrophils → 3–5 d macrophages (microglia) → 1–2 wk reactive gliosis + vascular proliferation → >2 wk glial scar.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Focal deficits follow the artery territory",
            sublabel: "Clinical: Localization = anatomy + vascular map.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Noncontrast CT first",
            sublabel: "Lab: Excludes hemorrhage before tPA; detects ischemia in 6–24 h. DWI MRI detects ischemia within 3–30 min.",
            variant: "output",
          },
          {
            id: "o3",
            label: "tPA window 3–4.5 h",
            sublabel: "Clinical: Treatment: tPA if within 3–4.5 h of onset and no hemorrhage risk; thrombectomy for large-artery occlusion.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "s4",
          },
          {
            from: "s4",
            to: "o1",
          },
          {
            from: "s4",
            to: "o2",
          },
          {
            from: "s4",
            to: "o3",
          },
        ],
        caption:
          "Blood flow below the penumbra threshold → glutamate excitotoxicity → cytotoxic edema → liquefactive necrosis — the ionic pump fails first, and the neuron dies by its own calcium.",
      },
    },
    {
      id: "lateral-medullary",
      title: "Lateral medullary (Wallenberg) syndrome — the PICA template",
      context: "Posterior inferior cerebellar artery",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Occlusion of PICA (or vertebral artery)",
            sublabel: "The lateral medulla infarcts — home of crossed sensory findings.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Nucleus ambiguus (CN IX, X)",
            sublabel: "Organ — Dysphagia, hoarseness, ↓ gag reflex, hiccups — SPECIFIC to PICA lesions.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Vestibular nuclei",
            sublabel: "Organ — Vomiting, vertigo, nystagmus.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Lateral spinothalamic + spinal trigeminal nucleus",
            sublabel: "Organ — Contralateral BODY pain/temperature loss + IPSILATERAL FACE pain/temperature loss — the classic CROSSED finding.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Sympathetic fibers + inferior cerebellar peduncle",
            sublabel: "Organ — Ipsilateral Horner syndrome + ipsilateral ataxia/dysmetria.",
            variant: "process",
          },
          {
            id: "o1",
            label: "“Don't pick a (PICA) lame (lateral medullary) horse (hoarseness) that can't eat (dysphagia)”",
            sublabel: "Clinical: The mnemonic encodes the nucleus ambiguus findings.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Crossed sensory loss is the fingerprint",
            sublabel: "Clinical: Ipsilateral face + contralateral body = brainstem lateral territory.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "s4",
          },
          {
            from: "s4",
            to: "o1",
          },
          {
            from: "s4",
            to: "o2",
          },
        ],
        caption:
          "One small PICA/vertebral occlusion, one crossed wall: ipsilateral face, contralateral body — the spinothalamic fibers have crossed, the trigeminal fibers have not.",
      },
    },
  ],
};
