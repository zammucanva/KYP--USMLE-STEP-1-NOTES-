import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 2 pp. 108–112, 147–150 (cranial nerve nuclei; foramina; CN table; palsies; cavernous sinus; INO)

export const cranialNerves: KypUsMLENote = {
  id: "cranial-nerves",
  title: "Cranial Nerves",
  subtitle: "Twelve nerves, three columns (sensory, motor, both), four brainstem levels, and one chemical formula — LR6 SO4 R3 — that resolves every eye-movement question on the exam.",
  subject: "Neuroanatomy",
  system: "Section III · Neurology and Special Senses — Anatomy & Physiology",
  pilotCategory: "Neuroanatomy",
  difficulty: 2,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 2 pp. 516–520, 555–558 (cranial nerve nuclei; foramina; CN table; palsies; cavernous sinus; INO)",
  tags: [
    "LR6 SO4 R3",
    "cavernous sinus",
    "nucleus ambiguus",
    "CN III palsy",
    "Horner",
    "MLF",
  ],
  core: {
    what: "The twelve cranial nerves serve the head and neck: pure sensory (I, II, VIII), pure motor (III, IV, VI, XI, XII), and mixed (V, VII, IX, X). Their nuclei live in the brainstem tegmentum — midbrain (III, IV), pons (V, VI, VII, VIII), medulla (IX, X, XI, XII), with XI also having a spinal root.",
    why: "Cranial nerve findings are the fastest localization tool in neurology: the nerve, the nucleus, the tract, or the muscle — each lesion site has a signature. Eye movements, facial palsies, and the gag reflex are the raw material of dozens of exam questions.",
    keyIdea: "Sulcus limitans divides every brainstem level: MEDIAL nuclei = MOTOR (basal plate), LATERAL nuclei = SENSORY (alar plate). Add the chemical formula LR6 SO4 R3 (Lateral Rectus = VI, Superior Oblique = IV, Rest = III), and the cavernous sinus contents (I, TOMATO: Internal carotid, Trigeminal V1/V2, Abducens, Trochlear, Oculomotor) — and you can localize nearly any CN lesion presented.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "cranial-nerve-map",
      title: "Brainstem levels and the twelve nerves",
      caption: "Schematic brainstem with CN III/IV at midbrain, V–VIII at pons, IX–XII at medulla, and the sulcus limitans rule (medial motor / lateral sensory).",
      notice: "CN IV is the only nerve that CROSSES the midline (contralateral function). CN I bypasses the thalamus (only CN without thalamic relay). CN XI descends to spinal cord level (its spinal root ascends through the foramen magnum to join).",
    },
    {
      kind: "table",
      title: "The cranial nerve table — nerve, function, type",
      columns: [
        "CN",
        "Nerve",
        "Function",
        "Type",
      ],
      rows: [
        [
          "I",
          "Olfactory",
          "Smell (only CN without thalamic relay to cortex)",
          "Sensory",
        ],
        [
          "II",
          "Optic",
          "Sight",
          "Sensory",
        ],
        [
          "III",
          "Oculomotor",
          "Eye movement (SR, IR, MR, IO); pupillary constriction (sphincter pupillae); accommodation (ciliary muscle); eyelid opening (levator palpebrae)",
          "Motor",
        ],
        [
          "IV",
          "Trochlear",
          "Eye movement (SO). Crosses midline — only CN with contralateral function",
          "Motor",
        ],
        [
          "V",
          "Trigeminal",
          "Mastication; facial sensation (V1 ophthalmic, V2 maxillary, V3 mandibular); somatosensation anterior 2/3 tongue; dampens loud noise (tensor tympani)",
          "Both",
        ],
        [
          "VI",
          "Abducens",
          "Eye movement (LR)",
          "Motor",
        ],
        [
          "VII",
          "Facial",
          "Facial movement; eye closing (orbicularis oculi); auditory volume modulation (stapedius); taste anterior 2/3 (chorda tympani); lacrimation; submandibular/sublingual salivation",
          "Both",
        ],
        [
          "VIII",
          "Vestibulocochlear",
          "Hearing, balance",
          "Sensory",
        ],
        [
          "IX",
          "Glossopharyngeal",
          "Taste/sensation posterior 1/3 tongue; swallowing; parotid salivation; carotid body/sinus chemo- and baroreceptors; pharynx elevation (stylopharyngeus)",
          "Both",
        ],
        [
          "X",
          "Vagus",
          "Taste from supraglottic region; swallowing; palate elevation; midline uvula; talking; cough reflex; parasympathetics to thoracoabdominal viscera; aortic arch chemo-/baroreceptors",
          "Both",
        ],
        [
          "XI",
          "Accessory",
          "Head turning, shoulder shrugging (SCM, trapezius)",
          "Motor",
        ],
        [
          "XII",
          "Hypoglossal",
          "Tongue movement",
          "Motor",
        ],
      ],
      caption: "Mnemonic: 'Some Say Marry Money But My Brother Says Big Brains Matter' — the S/M/B sequence for all twelve nerves.",
    },
    {
      kind: "table",
      title: "Foramina — which hole carries which nerve (and vessel)",
      columns: [
        "Foramen",
        "Contents",
      ],
      rows: [
        [
          "Cribriform plate (ethmoid)",
          "CN I (olfactory) — anterior cranial fossa",
        ],
        [
          "Optic canal (sphenoid)",
          "CN II + ophthalmic artery — middle cranial fossa",
        ],
        [
          "Superior orbital fissure",
          "CN III, IV, VI, V1 (ophthalmic)",
        ],
        [
          "Foramen rotundum (sphenoid)",
          "CN V2 (maxillary)",
        ],
        [
          "Foramen ovale (sphenoid)",
          "CN V3 (mandibular)",
        ],
        [
          "Foramen spinosum",
          "Middle meningeal artery",
        ],
        [
          "Internal auditory meatus (temporal)",
          "CN VII, VIII",
        ],
        [
          "Jugular foramen",
          "CN IX, X, XI + jugular vein (posterior fossa)",
        ],
        [
          "Hypoglossal canal",
          "CN XII",
        ],
        [
          "Foramen magnum",
          "Spinal root of CN XI + vertebral arteries + brainstem/spinal cord",
        ],
      ],
    },
    {
      kind: "table",
      title: "Cranial nerve reflexes — afferent drives, efferent executes",
      columns: [
        "Reflex",
        "Afferent",
        "Efferent",
      ],
      rows: [
        [
          "Pupillary",
          "II",
          "III",
        ],
        [
          "Accommodation",
          "II",
          "III",
        ],
        [
          "Corneal",
          "V1 (nasociliary branch)",
          "Bilateral VII (orbicularis oculi)",
        ],
        [
          "Lacrimation",
          "V1 (reflex tears — emotional tears are VII alone)",
          "VII",
        ],
        [
          "Vestibulo-ocular",
          "VIII",
          "III, VI",
        ],
        [
          "Jaw jerk",
          "V3 (masseter muscle spindle)",
          "V3 (masseter motor)",
        ],
        [
          "Gag",
          "IX",
          "X",
        ],
        [
          "Cough",
          "X",
          "X (also phrenic and spinal nerves)",
        ],
      ],
    },
    {
      kind: "table",
      title: "The vagal (and friends) nuclei of the medulla",
      columns: [
        "Nucleus",
        "Function",
        "Serves",
      ],
      rows: [
        [
          "Nucleus tractus solitarius (NTS)",
          "Visceral sensory — taste, baroreceptors, gut distention; may play a role in vomiting",
          "CN VII, IX, X",
        ],
        [
          "Nucleus ambiguus",
          "Motor to pharynx, larynx, upper esophagus (swallowing, palate elevation) + parasympathetic fibers to heart",
          "CN IX, X",
        ],
        [
          "Dorsal motor nucleus",
          "Autonomic (parasympathetic) to lungs, upper GI, and heart (minor)",
          "CN X",
        ],
      ],
      caption: "Nucleus ambiguus damage (PICA/Wallenberg) produces dysphagia, hoarseness, and diminished gag; the NTS explains why taste and baroreception travel with VII, IX, X.",
    },
    {
      kind: "list",
      title: "CN palsies — how each eye-movement nerve fails",
      items: [
        {
          lead: "CN III (see the mechanism canvas)",
          text: "Motor (central) fibers → ptosis, down-and-out gaze; parasympathetic (peripheral) fibers → blown pupil. Causes: ischemia (pupil-sparing, diabetes), uncal herniation (coma), PCom aneurysm (sudden headache), cavernous sinus thrombosis (proptosis + IV, V1/V2, VI involvement), midbrain stroke (contralateral hemiplegia).",
        },
        {
          lead: "CN IV (trochlear) palsy",
          text: "Vertical diplopia — 'can't see the floor' (difficulty going down stairs, reading). Pupil is HIGHER in the affected eye (hypertropia); compensatory head tilt to the CONTRALATERAL/unaffected side to offset impaired intorsion.",
        },
        {
          lead: "CN VI (abducens) palsy",
          text: "Affected eye cannot abduct and rests displaced medially in primary gaze (impaired abduction) — often the first sign of ↑ ICP (long intracranial course) or cavernous sinus pathology.",
        },
        {
          lead: "Cavernous sinus syndrome",
          text: "I, TOMATO: Internal carotid artery, Trigeminal (ophthalmic V1 + maxillary V2), Abducens (often FIRST — free-floating in the sinus), Trochlear, Oculomotor. Variable ophthalmoplegia, ↓ corneal sensation, Horner syndrome, occasional ↓ maxillary sensation. Causes: pituitary tumor mass effect, carotid-cavernous fistula, thrombosis (infection spreads valvelessly from the face).",
        },
        {
          lead: "Horner syndrome (sympathetic chain, not a CN)",
          text: "Ptosis (superior tarsal muscle), miosis, anhidrosis ± absence of flushing. First neuron: pontine hemorrhage, lateral medullary syndrome, cord lesion above T1 (Brown-Séquard, syringomyelia). Second: Pancoast tumor compressing stellate ganglion. Third: carotid dissection (painful; anhidrosis usually absent because sweat fibers ride the external carotid).",
        },
      ],
    },
    {
      kind: "list",
      title: "Mastication & the muscle anchors",
      items: [
        {
          lead: "Jaw closing",
          text: "Masseter, temporalis, medial pterygoid — 'My Teeth Munch' (3 muscles close).",
        },
        {
          lead: "Jaw opening/protrusion",
          text: "Lateral pterygoids lower (open) and protrude the jaw.",
        },
        {
          lead: "Innervation",
          text: "All of the above by the mandibular division — CN V3.",
        },
        {
          lead: "Clinical",
          text: "V3 lesion → jaw deviates TOWARD the lesion (weak pterygoid on the affected side); UMN corticobulbar lesion → jaw deviates AWAY from the cortical lesion.",
        },
      ],
    },
  ],
  clinical: [
    {
      kind: "table",
      title: "Lesion localization ladder — same muscle, four lesions",
      columns: [
        "Lesion site",
        "Signature",
        "Classic cause",
      ],
      rows: [
        [
          "UMN (cortex/corticobulbar)",
          "Contralateral LOWER face weakness only (forehead bilaterally innervated)",
          "Stroke — 'central' facial palsy",
        ],
        [
          "CN VII nucleus/nerve (LMN)",
          "IPSILATERAL entire hemiface (forehead included)",
          "Bell palsy, Lyme, Ramsay Hunt, parotid tumor, stroke (facial colliculus)",
        ],
        [
          "Neuromuscular junction",
          "Fatigable, bilateral, fluctuating",
          "Myasthenia gravis",
        ],
        [
          "Muscle",
          "Bilateral facial + limb myopathy",
          "Myotonic dystrophy, facioscapulohumeral dystrophy",
        ],
      ],
    },
    {
      kind: "table",
      title: "Tongue and uvula — the midline rules",
      columns: [
        "Finding",
        "Lesion",
        "Direction rule",
      ],
      rows: [
        [
          "Tongue deviation on protrusion",
          "CN XII (LMN)",
          "Deviates TOWARD the lesion (ipsilateral) — 'lick your lesion'",
        ],
        [
          "Uvula deviation (palate elevates asymmetrically)",
          "CN X (LMN)",
          "Uvula deviates AWAY from the lesion",
        ],
        [
          "Jaw deviation on opening",
          "CN V3 motor (LMN)",
          "Jaw deviates TOWARD the lesion",
        ],
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Diabetic patient with new ptosis and diplopia; the affected eye is deviated down and out, but the pupil is normal and reactive.",
        discriminator: "Pupil-SPARING down-and-out palsy",
        concept: "Interior motor fibers ischemic (vasa nervorum on the outside); peripheral parasympathetic spared",
        answer: "Ischemic CN III palsy (diabetic microvascular) — imaging to exclude compression if severe/painful",
      },
      {
        stem: "Sudden severe headache with a dilated unreactive pupil and down-and-out eye.",
        discriminator: "Pupil-INVOLVING CN III palsy",
        concept: "Peripheral parasympathetic fibers compressed first",
        answer: "PCom aneurysm — emergent CTA/DSA",
      },
      {
        stem: "Young woman with optic neuritis history; on left gaze the right eye fails to adduct while the left eye abducts with nystagmus; convergence intact.",
        discriminator: "Adduction failure + abducting nystagmus + intact convergence",
        concept: "MLF lesion disconnecting VI from contralateral III",
        answer: "Internuclear ophthalmoplegia — think multiple sclerosis",
      },
      {
        stem: "Patient with facial pain and a temporal headache; exam shows diplopia with impaired corneal sensation and proptosis.",
        discriminator: "Ophthalmoplegia + V1/V2 sensory loss + proptosis",
        concept: "I, TOMATO — all contents of the cavernous sinus",
        answer: "Cavernous sinus syndrome (thrombosis/fistula/pituitary mass)",
      },
    ],
    traps: [
      {
        a: "CN IV palsy",
        b: "CN III palsy (superior rectus weakness)",
        whyConfused: "Both produce vertical diplopia.",
        keyDifference: "IV = superior OBLIQUE (intorsion + depression) — pupil HIGHER in affected eye, head tilt AWAY, trouble going DOWN stairs. III = the rest of the elevators/depressors — ptosis, down-and-out, pupil signs.",
        clue: "Tilt test and 'down stairs' language point to IV.",
      },
      {
        a: "LMN facial palsy (Bell)",
        b: "UMN (central) facial weakness",
        whyConfused: "Both are 'facial droop.'",
        keyDifference: "LMN = entire ipsilateral hemiface INCLUDING forehead. UMN = contralateral LOWER face only (forehead has bilateral corticobulbar input).",
        clue: "Test the forehead — raise eyebrows. Spared brow = central lesion; gone brow = peripheral.",
      },
      {
        a: "Gag reflex afferent (IX)",
        b: "Efferent (X)",
        whyConfused: "Both nerves are tested together at the posterior pharynx.",
        keyDifference: "Sensation posterior 1/3 tongue/pharynx = IX (afferent); palate elevation/uvula + laryngeal motor = X (efferent).",
        clue: "Absent gag with intact sensation → X problem; no sensation at all → IX afferent limb.",
      },
    ],
    pivots: [
      {
        lookAlike: "Horizontal diplopia — VI palsy vs INO",
        differentiator: "VI = ipsilateral ABDUCTION failure at the muscle; INO = ipsilateral ADDUCTION failure with contralateral abducting nystagmus",
        correctPath: "Ask which eye fails which direction: can't look OUT = VI; can't look IN (with opposite nystagmus) = MLF/INO.",
      },
      {
        lookAlike: "Ptosis with vs without blown pupil",
        differentiator: "Parasympathetic (peripheral) fibers involved?",
        correctPath: "Pupil-sparing → ischemic/diabetic workup; pupil-involving + headache/herniation context → emergent imaging for compression.",
      },
    ],
    miniCase: {
      vignette: "A 58-year-old woman with long-standing type 2 diabetes reports two days of drooping of the right eyelid and double vision. On examination, the right eye is deviated downward and outward, the right pupil reacts briskly to light, and the eyelid can be lifted with effort. There is no headache, and neurologic examination is otherwise normal. A CT angiogram shows no aneurysm.",
      question: "Which of the following best explains the pupillary sparing in this patient?",
      options: [
        {
          correct: true,
          label: "A",
          text: "The parasympathetic fibers run in the periphery of the nerve and are spared in ischemic injury",
          why: "Correct. Motor fibers sit in the interior (middle) of CN III and depend on diffusion from surface vessels; microvascular ischemia (diabetes) hits them first. Parasympathetic fibers on the periphery remain functional — pupil reactive.",
        },
        {
          label: "B",
          text: "The parasympathetic fibers run in the center of the nerve and receive direct blood supply",
          why: "Reverses the anatomy — the center is exactly what diffusion-dependent ischemia damages first.",
        },
        {
          label: "C",
          text: "The pupil is innervated by CN II, which is unaffected",
          why: "Confuses the sensory limb (II, afferent) with the motor limb (III, efferent) of the light reflex — II being normal doesn't explain a reactive pupil when III is palsied.",
        },
        {
          label: "D",
          text: "This is a congenital miosis variant unmasked by the palsy",
          why: "Unnecessary and inconsistent with the brisk light reaction — the anatomy of the nerve itself explains the finding.",
        },
      ],
      reasoning: "Motor = middle, parasympathetic = peripheral. Ischemia spares the periphery (pupil-sparing); compression (aneurysm, herniation) destroys the periphery first (blown pupil).",
    },
  },
  mnemonics: [
    {
      code: "LR₆SO₄R₃ — 'the chemical formula'",
      meaning: "Lateral Rectus = CN VI, Superior Oblique = CN IV, the Rest = CN III.",
      memorizes: "Extraocular muscle innervation",
      whenToUse: "Every eye movement question.",
      clinical: "CN III innervates SR, IR, MR, IO (plus parasympathetics and lid).",
    },
    {
      code: "“Obliques go Opposite; IOU: IO tested looking Up”",
      meaning: "Left SO/IO are tested with the patient looking RIGHT (and vice versa); the inferior oblique elevates the eye when gaze is up-and-opposite.",
      memorizes: "Testing positions for the oblique muscles",
      whenToUse: "Localizing vertical diplopia.",
      clinical: "CN IV failure = can't look down-and-in (down stairs, reading).",
    },
    {
      code: "“Some Say Marry Money But My Brother Says Big Brains Matter”",
      meaning: "Sensory, Sensory, Motor, Motor, Motor, Both, Motor, Sensory, Both, Both, Motor, Motor — the type sequence for CN I–XII.",
      memorizes: "CN functional types",
      whenToUse: "Rapid classification of any CN.",
      clinical: "Only V, VII, IX, X are mixed; only I, II, VIII are purely sensory.",
    },
    {
      code: "I, TOMATO — cavernous sinus",
      meaning: "Internal carotid, Trigeminal (ophthalmic + maxillary), Abducens, Trochlear, Oculomotor.",
      memorizes: "Cavernous sinus contents",
      whenToUse: "Proptosis + ophthalmoplegia + V1/V2 sensory questions.",
      clinical: "CN VI is affected earliest (it floats free in the sinus).",
    },
    {
      code: "INO = Ipsilateral adduction failure, Nystagmus Opposite",
      meaning: "Names the MLF syndrome's two findings in one line.",
      memorizes: "Internuclear ophthalmoplegia findings",
      whenToUse: "Conjugate gaze disorder questions — MLF in MS.",
      clinical: "Convergence is intact — that distinguishes INO from a CN III palsy.",
    },
  ],
  rapidReview: {
    s30: [
      "LR6 SO4 R3; CN IV is the only crossed nerve; CN I has no thalamic relay.",
      "Midbrain III/IV; pons V/VI/VII/VIII; medulla IX/X/XI/XII; spinal root of XI.",
      "Medial nuclei = motor (basal plate); lateral = sensory (alar plate); divided by sulcus limitans.",
      "Pupil-sparing CN III = ischemia (diabetes); blown pupil = compression (PCom aneurysm, uncal herniation).",
      "INO: ipsilateral adduction failure + abducting nystagmus, convergence intact — MLF in MS.",
    ],
    m3: [
      "Foramina: I cribriform plate; II + ophthalmic artery optic canal; III/IV/VI/V1 superior orbital fissure; V2 rotundum; V3 ovale; VII/VIII internal auditory meatus; IX/X/XI + jugular vein jugular foramen; XII hypoglossal canal; XI spinal root + vertebrals foramen magnum.",
      "Reflex arcs: pupillary II/III; corneal V1/VII; gag IX/X; jaw jerk V3/V3; lacrimation V1/VII; cough X/X; vestibulo-ocular VIII/III+VI; accommodation II/III.",
      "Vagal nuclei: NTS (visceral sensory — VII, IX, X), nucleus ambiguus (motor pharynx/larynx + heart parasympathetic — IX, X), dorsal motor nucleus (parasympathetics — X).",
      "Mastication: masseter/temporalis/medial pterygoid close; lateral pterygoid opens/protrudes; all V3; jaw deviates toward LMN lesion.",
      "CN IV palsy: pupil higher in affected eye, head tilt AWAY, can't see the floor (down stairs, reading).",
      "Cavernous sinus (I, TOMATO): VI affected first; causes — pituitary mass, carotid-cavernous fistula, thrombosis.",
    ],
    m10: [
      "CN III palsy cause list: ischemia (pupil-sparing), uncal herniation (coma), PCom aneurysm (sudden headache), cavernous sinus thrombosis (proptosis + IV, V1/V2, VI), midbrain stroke (Weber — contralateral hemiplegia).",
      "Facial nerve branches and functions: stapedius (volume modulation — hyperacusis if damaged), chorda tympani (taste anterior 2/3 + submandibular/sublingual), lacrimation via greater petrosal — 'submandibular and sublingual are innervated by CN seven.'",
      "Taste map: anterior 2/3 = VII (chorda tympani); posterior 1/3 = IX; supraglottic = X.",
      "Salivation: submandibular/sublingual VII; parotid IX (via lesser petrosal).",
      "Horner syndrome lesion ladder: 1st neuron (brainstem/cord above T1), 2nd (stellate ganglion — Pancoast), 3rd (carotid dissection — anhidrosis usually absent).",
      "UMN vs LMN facial palsy: forehead sparing distinguishes cortical from peripheral; Bell palsy is the commonest LMN cause (often post-viral, majority recover).",
      "Blowout fracture (orbital floor/maxilla): diplopia on UPWARD gaze (inferior rectus entrapped) + enophthalmos ± infraorbital nerve injury; children get 'white-eyed' trapdoor fractures with oculocardiac reflex risk.",
    ],
  },
  recall: [
    {
      q: "Which two cranial nerves are purely sensory, besides II?",
      a: "I (olfactory) and VIII (vestibulocochlear) — with II (optic), the three sensory-only nerves.",
    },
    {
      q: "The only cranial nerve that crosses the midline?",
      a: "CN IV (trochlear) — contralateral superior oblique function.",
    },
    {
      q: "Which nerve exits the brainstem dorsally?",
      a: "CN IV (trochlear) — the only one.",
    },
    {
      q: "Nuclei serving taste sensation across three nerves?",
      a: "Nucleus tractus solitarius (VII anterior 2/3, IX posterior 1/3, X supraglottic).",
    },
    {
      q: "Contents of the cavernous sinus?",
      a: "I, TOMATO — Internal carotid artery, Trigeminal V1/V2, Abducens (VI), Trochlear (IV), Oculomotor (III).",
    },
    {
      q: "Why does a diabetic CN III palsy spare the pupil?",
      a: "Microvascular ischemia damages the interior motor fibers (diffusion-dependent) while the peripherally-located parasympathetic fibers survive.",
    },
    {
      q: "Findings of a right MLF lesion on attempted left gaze?",
      a: "Right eye fails to adduct (ipsilateral adduction failure); left eye abducts with nystagmus; convergence normal — right INO.",
    },
  ],
  related: [
    {
      title: "Stroke Syndromes",
      note: "Every brainstem stroke is built from CN nuclei: nucleus ambiguus (PICA), facial nucleus (AICA), CN III (Weber/PCA), hypoglossal (ASA).",
      topicId: "stroke-syndromes",
    },
    {
      title: "Hypersensitivity Types",
      note: "Bell palsy differential includes Lyme (type III-immune-complex-adjacent) and Ramsay Hunt (VZV reactivation) — the immunology of the face.",
      topicId: "hypersensitivity-types",
    },
    {
      title: "Vertigo & vestibular system",
      note: "CN VIII physiology: peripheral (BPPV, vestibular neuritis, Ménière) vs central (stroke) — the direction of nystagmus and the head-impulse test separate them.",
    },
    {
      title: "Facial lesions & parotid surgery",
      note: "The facial nerve's course through the parotid makes it the surgical risk nerve of the face; branches to know: temporal, zygomatic, buccal, mandibular, cervical.",
    },
  ],
  crossLinks: [
    {
      subject: "Anatomy",
      connection: "Foramina of the skull base are the gateways of the nerves — skull-base fractures and tumors present as CN syndromes.",
    },
    {
      subject: "Ophthalmology",
      connection: "Visual field pathways meet eye movement here — the afferent (II) and efferent (III/IV/VI) limbs share the orbit.",
    },
    {
      subject: "Infectious disease",
      connection: "Lyme, VZV (Ramsay Hunt), and meningitis all present through cranial nerves — the 'neurology of infection.'",
    },
    {
      subject: "Pharmacology",
      connection: "Cholinergic/anticholinergic drugs act on pupil size (muscarinic sphincter vs dilator) — the same receptor pharmacology as the autonomic system.",
    },
  ],
  mechanisms: [
    {
      id: "cn3-palsy-mechanism",
      title: "CN III palsy — motor in the middle, parasympathetic on the periphery",
      context: "The anatomical rule that decides the cause",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "CN III damage by ischemia OR compression",
            sublabel: "The nerve's blood supply runs on its OUTSIDE; the parasympathetic fibers travel in the PERIPHERY of the nerve; motor fibers run in the interior (middle).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Ischemic insult (eg, diabetes microvascular disease)",
            sublabel: "Pathology — Oxygen/nutrients must diffuse inward from the surface vasculature — interior MOTOR fibers suffer first.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Result: PUPIL-SPARING (down-and-out, ptosis) palsy",
            sublabel: "clinical — Motor fibers (central) affected: ptosis, 'down-and-out' gaze. Parasympathetic fibers (peripheral) spared: pupil reactive.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Compressive insult (PCom aneurysm, uncal herniation)",
            sublabel: "Pathology — External pressure injures the peripheral parasympathetic fibers first.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Result: PUPIL-INvolving (blown pupil) palsy",
            sublabel: "clinical — Diminished/absent pupillary light reflex, mydriasis — 'blown pupil' — often with down-and-out gaze from motor involvement; sudden-onset headache with a PCom aneurysm means rupture risk.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Pupil-sparing = think ischemia/diabetes",
            sublabel: "Clinical: Motor = middle; check glucose and vascular risk.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Pupil-involving = think compression",
            sublabel: "Clinical: PCom aneurysm (sudden headache) or uncal herniation (coma) — emergency imaging.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Also: midbrain stroke (Weber)",
            sublabel: "Clinical: Contralateral hemiplegia with ipsilateral CN III palsy from cerebral peduncle involvement.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "ischemic route" },
          { from: "s1", to: "s2", label: "interior motor fibers die first" },
          { from: "trigger", to: "s3", label: "compressive route" },
          { from: "s3", to: "s4", label: "peripheral PANS fibers crushed first" },
          { from: "s2", to: "o1", label: "pupil reactive" },
          { from: "s4", to: "o2", label: "blown pupil = emergency" },
          { from: "trigger", to: "o3", label: "adjacent midbrain lesion" },
        ],
        caption:
          "Motor in the middle, parasympathetic on the periphery — the pupil decides the emergency: pupil-sparing points to ischemia, pupil-involving points to compression until imaging proves otherwise.",
      },
    },
    {
      id: "ino-mechanism",
      title: "Internuclear ophthalmoplegia — the MLF disconnect",
      context: "Conjugate horizontal gaze",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Lesion of the medial longitudinal fasciculus (MLF)",
            sublabel: "The MLF is a highly myelinated tract interconnecting the CN VI nucleus (abducens) of the looking-side with the CONTRALATERAL CN III nucleus (medial rectus).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Voluntary gaze, e.g. to the left",
            sublabel: "Organ — Left CN VI nucleus fires: left lateral rectus contracts; simultaneously signals cross the right MLF to the right CN III nucleus → right medial rectus contracts.",
            variant: "process",
          },
          {
            id: "s2",
            label: "MLF lesion interrupts the crossing signal",
            sublabel: "Pathology — The abducting eye moves, but the contralateral adducting eye fails to follow.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Abducting eye shows nystagmus",
            sublabel: "clinical — CN VI 'overfires' to drive the contralateral III through the damaged MLF.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Ipsilateral adduction failure + contralateral (abducting) nystagmus",
            sublabel: "Clinical: INO = Ipsilateral adduction failure, Nystagmus Opposite. Convergence is normal (bilateral medial rectus drive from the near pathway).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Classic cause: multiple sclerosis",
            sublabel: "Clinical: 'MLF in MS' — also seen with stroke; may be unilateral or bilateral.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "attempted lateral gaze" },
          { from: "s1", to: "s2", label: "the signal must cross the MLF" },
          { from: "s2", to: "s3", label: "CN VI overfires" },
          { from: "s3", to: "o1", label: "the INO pair of signs" },
          { from: "trigger", to: "o2", label: "demyelination loves the MLF" },
        ],
        caption:
          "INO = Ipsilateral adduction failure, Nystagmus Opposite — convergence is spared because the near-response pathway bypasses the MLF.",
      },
    },
  ],
};
