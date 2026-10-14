import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 324–326 (hyperlipidemia signs; atherosclerosis; cholesterol emboli; arteriolosclerosis; aneurysm)

export const atherosclerosis: KypUsMLENote = {
  id: "atherosclerosis",
  title: "Atherosclerosis",
  subtitle: "From endothelial injury to ruptured plaque: how a chronic inflammatory disease of the tunica intima becomes MI, stroke, and the blue toe syndrome.",
  subject: "Pathology",
  system: "Section III · Cardiovascular — Pathology",
  pilotCategory: "Pathology",
  difficulty: 2,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 1 pp. 302–304 (hyperlipidemia signs; atherosclerosis; cholesterol emboli; arteriolosclerosis; aneurysm)",
  tags: [
    "foam cells",
    "fatty streak",
    "PDGF",
    "complicated plaque",
    "xanthoma",
    "blue toe",
  ],
  core: {
    what: "Atherosclerosis is a very common form of arteriosclerosis affecting elastic and large/medium muscular arteries, caused by cholesterol (lipid) plaque deposition in the tunica intima with inflammation, producing arterial narrowing.",
    why: "It is the pathology behind the world's leading causes of death — MI (the most common cause of death in diabetes), stroke, peripheral vascular disease, and most aneurysms. Statins lower LDL and slow plaque progression and reduce rupture risk — the single most testable therapeutic linkage.",
    keyIdea: "Atherosclerosis is INFLAMMATION-driven, not passive lipid sludge: endothelial dysfunction → LDL accumulation in the intima → macrophages become foam cells → fatty streak → smooth muscle migration/proliferation (PDGF, FGF) with ECM deposition → fibrous plaque with a cap → complicated atheroma with calcification, ulceration, hemorrhage, and thrombosis.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "atherogenesis-timeline",
      title: "From normal artery to complicated plaque",
      caption: "Five schematic cross-sections: endothelial injury → foam cells/fatty streak → fibrous plaque (SMC + ECM cap) → complicated atheroma with calcification and rupture.",
      notice: "Watch the lumen shrink as the plaque grows — but remember: IT IS NOT STENOSIS THAT KILLS. Plaque rupture with thrombosis (stage 05) causes most acute events; a 60% stable stenosis can be silent for years.",
    },
    {
      kind: "list",
      title: "Where plaques live — the order the exam expects",
      intro: "Atherosclerosis has a favorite-places list — learn it in order of frequency.",
      items: [
        {
          lead: "1st — Abdominal aorta",
          text: "The most affected site — and the home of abdominal aortic aneurysms.",
        },
        {
          lead: "2nd — Coronary arteries",
          text: "MI, stable/unstable angina.",
        },
        {
          lead: "3rd — Popliteal artery",
          text: "Claudication of the calf.",
        },
        {
          lead: "4th — Carotid artery",
          text: "TIA/stroke, amaurosis fugax; bruit on exam.",
        },
        {
          lead: "5th — Circle of Willis",
          text: "Intracranial — one cause of subarachnoid-space-adjacent pathology; 'A Copy Cat Named Willis.'",
        },
      ],
    },
    {
      kind: "table",
      title: "Risk factors — modifiable vs non-modifiable",
      columns: [
        "Category",
        "Factors",
      ],
      rows: [
        [
          "Modifiable",
          "Hypertension, tobacco smoking, dyslipidemia (↑LDL, ↓HDL), diabetes",
        ],
        [
          "Non-modifiable",
          "Age, male sex, postmenopausal status, family history",
        ],
      ],
      caption: "Symptoms are angina and claudication — but the disease can be entirely asymptomatic for decades.",
    },
    {
      kind: "table",
      title: "Hyperlipidemia signs on physical exam",
      intro: "Three lipid deposits you can SEE — each maps to a lipid disorder and a prognosis.",
      columns: [
        "Sign",
        "What it is",
        "Association",
      ],
      rows: [
        [
          "Xanthoma / xanthelasma",
          "Plaques or nodules of lipid-laden histiocytes in skin, especially eyelids (xanthelasma)",
          "Hyperlipidemia; eyelid lesions carry cardiovascular risk association",
        ],
        [
          "Tendinous xanthoma",
          "Lipid deposit in TENDON — especially Achilles and finger extensors",
          "Familial hypercholesterolemia (tendinous = FH until proven otherwise)",
        ],
        [
          "Corneal arcus",
          "Lipid deposit in cornea",
          "Common in older adults (arcus senilis); appearing EARLIER in life suggests hypercholesterolemia",
        ],
      ],
    },
    {
      kind: "text",
      title: "Distinguish it from its siblings — arteriolosclerosis",
      body: [
        "'Arteriosclerosis' is the parent term for three diseases: atherosclerosis (large/elastic and medium muscular arteries, intimal lipid plaques), arteriolosclerosis (small arteries and ARTERIOLES), and Monckeberg medial calcific sclerosis (media of muscular arteries, clinically benign).",
        "Arteriolosclerosis has two subtypes with two different mechanisms. HYALINE: vessel wall thickening from plasma protein leaking into the subendothelium — seen in hypertension and diabetes mellitus (also the 'hyaline arteriolosclerosis' of diabetic nephropathy). HYPERPLASTIC: 'onion-skinning' — proliferating smooth muscle cells in concentric layers — the histology of severe (often malignant) hypertension.",
      ],
    },
    {
      kind: "steps",
      title: "Cholesterol emboli syndrome — the post-angiography complication",
      steps: [
        {
          label: "Trigger: invasive vascular procedure",
          detail: "Angiography, angioplasty, or endovascular grafting displaces plaque material from the aorta or other large arteries.",
        },
        {
          label: "Microembolization to small arteries",
          detail: "Cholesterol crystals lodge in arterioles — pulses remain PALPABLE because larger arteries are unaffected (key contrast with macroembolism/acute limb ischemia).",
        },
        {
          label: "Inflammatory response + end-organ damage",
          detail: "Livedo reticularis, digital ischemia (blue toe syndrome), acute renal failure, cerebrovascular accident, gut ischemia.",
        },
      ],
    },
    {
      kind: "table",
      title: "Downstream aneurysm disease (the complication that grows silently)",
      columns: [
        "Feature",
        "Abdominal aortic aneurysm",
        "Thoracic aortic aneurysm",
      ],
      rows: [
        [
          "Association",
          "Transmural (all 3 layers) inflammation and extracellular matrix degradation",
          "Cystic medial degeneration",
        ],
        [
          "Risk factors",
          "Tobacco smoking (STRONGEST), ↑age, male sex, family history",
          "Hypertension, bicuspid aortic valve, connective tissue disease (Marfan), 3° syphilis (obliterative endarteritis of vasa vasorum)",
        ],
        [
          "Presentation",
          "Palpable pulsatile abdominal mass; rupture triad = pulsatile mass + acute abdominal/back pain + resistant hypotension; most often infrarenal",
          "Aortic root dilatation → aortic regurgitation; chest/back pain",
        ],
      ],
      caption: "Hypertension context: BP persistently ≥130/80; 90% is primary (essential, ↑CO or ↑TPR); the remainder secondary to renal/renovascular disease (fibromuscular dysplasia 'string of beads' — young adult women; atherosclerotic renal artery stenosis), 1° hyperaldosteronism, or OSA.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Complications — the full downstream map",
      intro: "Every complication of atherosclerosis is ischemia, structural failure, or embolism in a specific vascular bed.",
      items: [
        {
          lead: "Ischemia/infarction",
          text: "Angina, MI, mesenteric ischemia, intermittent claudication, chronic limb-threatening ischemia.",
        },
        {
          lead: "Aneurysm",
          text: "Primarily abdominal aortic — wall degradation at plaque sites.",
        },
        {
          lead: "Peripheral vascular disease",
          text: "Claudication → rest pain → tissue loss (Leriche syndrome: buttock claudication, impotence, absent femoral pulses).",
        },
        {
          lead: "Thrombosis",
          text: "Plaque rupture exposes thrombogenic lipid core → occlusive thrombus (the MI mechanism).",
        },
        {
          lead: "Embolism",
          text: "Cholesterol microemboli (blue toe, livedo, renal failure) or thrombus macroemboli (acute limb ischemia).",
        },
        {
          lead: "Renovascular hypertension",
          text: "Renal artery stenosis → RAAS activation → secondary hypertension (the loop feeds itself).",
        },
        {
          lead: "Subclavian steal syndrome",
          text: "Proximal subclavian stenosis — arm exercise 'steals' blood retrograde down the vertebral artery → posterior circulation symptoms.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Patient days after coronary angiography develops livedo reticularis, a cool blue toe, and a rising creatinine — distal pulses are normal.",
        discriminator: "Palpable pulses + recent vascular procedure + small-vessel territory",
        concept: "Cholesterol crystal microembolization from disrupted plaque",
        answer: "Cholesterol emboli syndrome",
      },
      {
        stem: "Middle-aged man with Achilles tendon nodules and corneal arcus; LDL markedly elevated since childhood; father had MI at 38.",
        discriminator: "TENDINOUS xanthomas + premature family history",
        concept: "Familial hypercholesterolemia (LDL receptor defect, autosomal dominant)",
        answer: "Tendinous xanthoma → screen for familial hypercholesterolemia",
      },
      {
        stem: "A 68-year-old smoker with a pulsatile abdominal mass, sudden severe abdominal/back pain, and hypotension unresponsive to fluids.",
        discriminator: "The rupture triad",
        concept: "AAA rupture — most often infrarenal; tobacco is the strongest risk factor",
        answer: "Emergent surgical management",
      },
    ],
    traps: [
      {
        a: "Atherosclerosis",
        b: "Arteriolosclerosis",
        whyConfused: "Names overlap; both are 'arteriosclerosis.'",
        keyDifference: "Atherosclerosis = elastic + large/medium muscular arteries, INTIMAL lipid plaques. Arteriolosclerosis = small arteries/arterioles — hyaline (HTN, diabetes) or hyperplastic 'onion-skin' (severe HTN).",
        clue: "Vessel SIZE in the stem: aorta/coronary/carotid → atherosclerosis; kidney/retina/brain arterioles → arteriolosclerosis.",
      },
      {
        a: "Hyaline arteriolosclerosis",
        b: "Hyperplastic arteriolosclerosis",
        whyConfused: "Both in hypertensive patients; both in arterioles.",
        keyDifference: "Hyaline = plasma protein deposition (diabetes, ordinary HTN). Hyperplastic = SMC proliferation in 'onion-skin' laminates — severe/malignant hypertension, may accompany fibrinoid necrosis and hyperplastic arteriolosclerosis with RBC fragments.",
        clue: "'Onion skin' or malignant hypertension → hyperplastic; 'protein deposition, diabetes' → hyaline.",
      },
      {
        a: "Cholesterol emboli syndrome",
        b: "Acute limb ischemia from thromboembolism",
        whyConfused: "Both produce ischemic distal findings after vascular events.",
        keyDifference: "Cholesterol emboli: pulses PALPABLE (microvascular), livedo, blue toe, renal failure, post-procedure days. Thromboembolism: pulses ABSENT, cold pale limb, sudden pain.",
        clue: "Look for the pulse line and the procedure timeline.",
      },
    ],
    pivots: [
      {
        lookAlike: "Blue toe with normal pulses vs blue toe with absent pulses",
        differentiator: "Palpable pulses + livedo + recent catheterization = microemboli; absent pulses = macrovessel occlusion",
        correctPath: "Normal pulses → cholesterol emboli syndrome (supportive care, statin); absent pulses → embolism/thrombosis (embolectomy, anticoagulation).",
      },
      {
        lookAlike: "Xanthelasma vs tendinous xanthoma",
        differentiator: "Skin/eyelid plaques vs TENDON deposits",
        correctPath: "Tendon (Achilles, finger extensors) → familialial hypercholesterolemia workup; eyelid xanthelasma → still dyslipidemia risk marker but broader.",
      },
    ],
    miniCase: {
      vignette: "A 71-year-old man with hypertension, type 2 diabetes, and a 50-pack-year smoking history undergoes cardiac catheterization for unstable angina. Three days later he has mottled discoloration over the lower back and legs (livedo reticularis), a painful dusky right great toe, and blood pressure 148/86. Serum creatinine has risen from 1.1 to 2.4 mg/dL. Distal pulses in the right foot are 2+ and symmetric. Eosinophilia is noted on the CBC.",
      question: "Which of the following best explains this patient's findings?",
      options: [
        {
          label: "A",
          text: "Acute thromboembolism from a left ventricular thrombus",
          why: "Would cause an acutely cold, pulseLESS limb — this patient's pulses are normal and the process spans multiple small-vessel territories.",
        },
        {
          correct: true,
          label: "B",
          text: "Cholesterol crystal embolization from aortic plaque disruption",
          why: "Correct. Post-catheterization livedo reticularis + blue toe + acute kidney injury + eosinophilia with palpable pulses is the cholesterol emboli syndrome fingerprint.",
        },
        {
          label: "C",
          text: "Contrast-induced acute kidney injury alone",
          why: "Explains the creatinine (usually peaks 24–72 h) but not the skin findings and eosinophilia; contrast nephropathy does not cause livedo or a blue toe.",
        },
        {
          label: "D",
          text: "Vasculitis of medium-sized arteries",
          why: "Tempting with eosinophilia and multisystem findings, but the temporal relationship to catheterization and the palpable pulses point to embolized plaque material, not primary vessel wall inflammation.",
        },
      ],
      reasoning: "The timing (days after an intravascular procedure) + distribution (skin, kidney, digits — end-arteries) + preserved pulses + eosinophilia is the classic cholesterol emboli constellation. Larger vessels conduct flow normally; the damage is microvascular.",
    },
  },
  mnemonics: [
    {
      code: "“A Copy Cat Named Willis”",
      meaning: "Abdominal aorta > Coronary > Popliteal > Carotid > Circle of Willis — the descending frequency of atherosclerotic involvement.",
      memorizes: "Atherosclerosis location hierarchy",
      whenToUse: "Any 'most common site' question; AAA and stroke physiology.",
      clinical: "The abdominal aorta tops the list — which is why infrarenal AAA is the classic aneurysm of smokers.",
    },
    {
      code: "“PAD LOVES the aorta”",
      meaning: "Plaque development needs LDl, Oxidized lipid, Vessel injury, Endothelial dysfunction, Smoking — the drivers of the cascade.",
      memorizes: "The trigger constellation for plaque initiation",
      whenToUse: "Mechanism-order questions on plaque formation.",
      clinical: "Every element of the acronym is a modifiable (or treatable) risk factor except age/genetics.",
    },
  ],
  rapidReview: {
    s30: [
      "Atherosclerosis = intimal lipid plaque + inflammation of elastic and large/medium muscular arteries.",
      "Progression: endothelial dysfunction → LDL in intima → foam cells → fatty streak → SMC migration (PDGF, FGF) + ECM → fibrous plaque → complicated atheroma (calcification, rupture, thrombosis).",
      "Locations: abdominal aorta > coronary > popliteal > carotid > circle of Willis.",
      "Statins ↓LDL → ↓progression + ↓rupture risk.",
      "Cholesterol emboli: post-procedure, livedo, blue toe, renal failure, eosinophilia, pulses PRESERVED.",
    ],
    m3: [
      "Risk factors: modifiable (HTN, smoking, ↑LDL/↓HDL, diabetes); non-modifiable (age, male, postmenopausal, family history).",
      "Hyaline arteriolosclerosis = HTN + diabetes (protein deposition); hyperplastic = severe HTN ('onion skinning').",
      "AAA: transmural inflammation + ECM degradation; tobacco strongest risk; rupture triad = pulsatile mass + ab/back pain + resistant hypotension; infrarenal most common.",
      "Thoracic aneurysm: cystic medial degeneration; HTN, bicuspid valve, Marfan, 3° syphilis; root dilatation → AR.",
      "Xanthelasma (eyelids) vs tendinous xanthoma (Achilles/finger extensors → familialial hypercholesterolemia) vs corneal arcus (senilis vs early = hypercholesterolemia).",
      "Subclavian steal: proximal stenosis + arm exercise → retrograde vertebral flow → posterior circulation symptoms.",
    ],
    m10: [
      "Complications list: ischemia, infarction, aneurysm, PVD, thrombosis, embolism, renovascular HTN, coarctation of the aorta (association), subclavian steal syndrome.",
      "Hypertension definitions: persistent ≥130/80; 90% primary; secondary — renal/renovascular (FMD 'string of beads' in young women; atherosclerotic RAS), 1° hyperaldosteronism, OSA. Hypertensive urgency ≥180/120 WITHOUT end-organ damage; emergency WITH (encephalopathy, stroke, retinal hemorrhages, papilledema, MI, HF, dissection, kidney injury, MAHA, eclampsia; fibrinoid necrosis).",
      "HTN predisposes to: CAD, concentric LVH (angiotensin II + endothelin mediated), HF, AF, aortic dissection/aneurysm, stroke, CKD (hypertensive nephropathy), retinopathy.",
      "Stable vs vulnerable plaque: thin fibrous cap + large lipid core + macrophage-rich = rupture-prone; thick cap, calcified, fibrous = stable stenosis.",
      "Coarctation differential: upper-extremity HTN with brachiofemoral delay, rib notching (collateral intercostals), associated bicuspid valve and Turner syndrome.",
    ],
  },
  recall: [
    {
      q: "Which layer of the artery wall hosts the atherosclerotic plaque?",
      a: "Tunica intima.",
    },
    {
      q: "Name the growth factors driving smooth muscle migration into the intima.",
      a: "PDGF and FGF.",
    },
    {
      q: "Most frequently affected artery in atherosclerosis?",
      a: "Abdominal aorta (then coronary, popliteal, carotid, circle of Willis).",
    },
    {
      q: "Post-catheterization livedo + blue toe + AKI with normal pulses — diagnosis?",
      a: "Cholesterol emboli syndrome (microembolization from disrupted plaque).",
    },
    {
      q: "Which xanthoma signals familialial hypercholesterolemia?",
      a: "Tendinous xanthoma (Achilles, finger extensor tendons).",
    },
    {
      q: "Histology of severe (malignant) hypertension in arterioles?",
      a: "Hyperplastic arteriolosclerosis — 'onion-skin' SMC proliferation ± fibrinoid necrosis.",
    },
    {
      q: "Rupture triad of AAA?",
      a: "Pulsatile abdominal mass + acute abdominal/back pain + resistant hypotension.",
    },
  ],
  related: [
    {
      title: "Diabetes Mellitus",
      note: "Diabetes accelerates atherosclerosis — MI is the most common cause of death in diabetic patients; large-vessel disease is a glycation complication.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Stroke Syndromes",
      note: "Carotid and cerebral artery atherosclerosis is the substrate for thrombotic stroke and TIA — the territory map is the clinical map of the plaque.",
      topicId: "stroke-syndromes",
    },
    {
      title: "Acid-Base Physiology",
      note: "Shock from MI or rupture drives lactic (anion-gap) acidosis — the chemistry meets the pathology at the bedside.",
      topicId: "acid-base-physiology",
    },
    {
      title: "Familial hypercholesterolemia",
      note: "LDL receptor defect: tendinous xanthomas, premature CAD; statins ± PCSK9 inhibitors/LDL apheresis.",
    },
    {
      title: "Hypertension & hyaline arteriolosclerosis",
      note: "The same risk factor damages two scales of vessel: aorta (atherosclerosis) and renal/retinal arterioles (hyaline arteriolosclerosis → nephrosclerosis).",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry",
      connection: "LDL metabolism, cholesterol synthesis (HMG-CoA reductase — statin target), and the role of oxidized LDL in foam-cell formation.",
    },
    {
      subject: "Immunology",
      connection: "Monocyte/macrophage recruitment via endothelial adhesion molecules (VCAM-1) — atherosclerosis as chronic sterile inflammation.",
    },
    {
      subject: "Pharmacology",
      connection: "Statins (HMG-CoA reductase inhibition) reduce plaque progression and rupture risk; risk-factor modification is pathway interception.",
    },
    {
      subject: "Renal",
      connection: "Renovascular hypertension from renal artery stenosis: atherosclerosis (older) vs fibromuscular dysplasia (young women, 'string of beads').",
    },
  ],
  mechanisms: [
    {
      id: "atherogenesis",
      title: "Plaque formation — the inflammation cascade",
      context: "Years to decades of exposure",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Endothelial cell dysfunction/injury",
            sublabel: "Hypertension, tobacco smoking, dyslipidemia (↑LDL, ↓HDL), diabetes — the modifiable risk factors — plus age, male sex, postmenopausal status, family history.",
            variant: "input",
          },
          {
            id: "s1",
            label: "LDL enters the injured intima and is retained/oxidized",
            sublabel: "Molecular — Permeability of the dysfunctional endothelium lets LDL lodge in the subendothelial space.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Monocytes adhere, migrate in, and become macrophages → foam cells",
            sublabel: "cellular — Macrophages ingest lipid and transform into foam cells — the histologic signature of the early lesion.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Fatty streak forms",
            sublabel: "Pathology — An accumulation of foam cells — visible even in teenagers; reversible in principle.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Smooth muscle migration and proliferation",
            sublabel: "tissue — PDGF and FGF drive medial SMCs into the intima; they proliferate and deposit extracellular matrix forming a fibrous cap over the lipid core.",
            variant: "process",
          },
          {
            id: "s5",
            label: "Complicated atheroma",
            sublabel: "Pathology — Calcification (calcium content correlates with risk of complications), hemorrhage, ulceration/rupture → thrombosis or embolism.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Ischemia and infarction",
            sublabel: "Clinical: Stable narrowing → demand ischemia (angina, claudication); plaque rupture → thrombotic occlusion (MI, stroke).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Aneurysm formation",
            sublabel: "Pathology: Wall weakening at the lesion site — abdominal aorta is the classic location.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Embolism — cholesterol emboli syndrome",
            sublabel: "Clinical: Microembolization of plaque contents after vascular procedures → livedo reticularis, blue toe, renal failure.",
            variant: "output",
          },
          {
            id: "o4",
            label: "Statins break the chain",
            sublabel: "Effect: ↓LDL → ↓plaque progression, ↓risk of rupture — the therapy targets the beginning of the cascade.",
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
            to: "s5",
          },
          {
            from: "s5",
            to: "o1",
          },
          {
            from: "s5",
            to: "o2",
          },
          {
            from: "s5",
            to: "o3",
          },
          {
            from: "s5",
            to: "o4",
          },
        ],
        caption:
          "Endothelial injury → LDL entry → oxidation → macrophage foam cells → smooth-muscle caps: every plaque is chronic inflammation staged inside the intima — which is why the risk factors are injury factors.",
      },
    },
  ],
};
