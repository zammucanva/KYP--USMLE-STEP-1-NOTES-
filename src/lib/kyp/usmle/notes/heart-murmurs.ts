import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv12 (pdf 317 / book 295).
// Source: First Aid 2026, Part 1 pdf 317 (book 295) — Heart murmurs.

export const heartMurmurs: KypUsMLENote = {
  id: "heart-murmurs",
  title: "Heart Murmurs",
  subtitle: "Seven lesions, one strip: where the murmur sits between S1 and S2 (or straddles both) tells you the valve and the direction of flow. Timing is the diagnosis.",
  subject: "Cardiovascular · Physiology",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "Murmur auscultation",
  difficulty: 3,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 295 (heart murmurs)",
  tags: [
    "aortic stenosis",
    "mitral regurgitation",
    "midsystolic click",
    "VSD",
    "aortic regurgitation",
    "opening snap",
    "PDA",
    "SAD",
    "BEAR",
  ],
  core: {
    what: "The seven-lesion murmur catalog with printed phonocardiogram timing — the systolic family (aortic stenosis crescendo-decrescendo; mitral/tricuspid regurgitation holosystolic; mitral valve prolapse late crescendo with midsystolic click; ventricular septal defect holosystolic harsh), the diastolic family (aortic regurgitation early decrescendo; mitral stenosis delayed rumble after an opening snap), and the one continuous murmur (patent ductus arteriosus, machinelike) — each with sound, location, clinical associations, and the mechanism note the book attaches to it.",
    why: "Murmur TIMING questions are among the highest-frequency Step 1 items, and every distractor in them comes from misplacing a murmur between S1 and S2. The page also hands over two classic mnemonics — SAD (aortic stenosis progression) and BEAR (aortic regurgitation causes) — plus the FA-own PDA memory hook.",
    keyIdea: "Sort by timing first: systolic between S1 and S2 (crescendo-decrescendo at the base → AS; holosystolic at the apex/LSB → MR-TR-VSD; late crescendo after a click → MVP), diastolic after S2 (early decrescendo at the base/LSB → AR; delayed rumble after an opening snap at the apex → MS), continuous machine noise through both (→ PDA, loudest at S2). Then layer the associations: AS = SAD (Syncope, Angina, Dyspnea on exertion) with pulsus parvus et tardus; AR = BEAR with wide pulse pressure and pistol-shot femorals; MS = late rheumatic sequelae with LA dilation; PDA = 'you need a patent for that machine.'",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "heart-murmurs-map",
      title: "The murmur gallery — seven lesions with printed timing",
      caption: "Systolic, diastolic, and continuous corridors: each lesion's phonocardiogram timing (crescendo-decrescendo, holosystolic, click-crescendo, early decrescendo, post-OS rumble, continuous machine) beside its associations.",
      notice: "Watch the two diastolic outliers — AR starts IMMEDIATELY at S2 (decrescendo), MS waits for the opening snap then rumbles mid-to-late — and the MVP corridor, where the murmur only exists AFTER the click and peaks just before S2.",
    },
    {
      kind: "table",
      title: "The systolic family — printed descriptions verbatim",
      columns: [
        "Lesion",
        "Murmur character (printed)",
        "Location / radiation",
        "Clinical associations (printed)",
      ],
      rows: [
        [
          "Aortic stenosis",
          "Crescendo-decrescendo ejection murmur, loudest at heart base, radiates to carotids; soft S2 +/– ejection click; 'Pulsus parvus et tardus' — weak pulses with delayed peak",
          "Heart base → carotids",
          "Age-related calcification (>60 years old); early-onset calcification of bicuspid aortic valve (~50-60 years old). Can lead to Syncope, Angina, Dyspnea on exertion (SAD). Mechanism: LV pressure > aortic pressure during systole",
        ],
        [
          "Mitral / tricuspid regurgitation",
          "Holosystolic, high-pitched 'blowing' murmur",
          "MR: loudest at apex, radiates toward axilla; TR: loudest at tricuspid area",
          "MR: often due to ischemic heart disease (post-MI), MVP, LV dilatation, rheumatic fever (RF). TR: often due to RV dilatation; may be 2° to permanent pacemaker placement. MR or TR: infective endocarditis",
        ],
        [
          "Mitral valve prolapse",
          "Late crescendo murmur with midsystolic click (MC) that occurs after carotid pulse; best heard over apex; loudest just before S2",
          "Apex",
          "Usually benign, but can predispose to infective endocarditis. Can be caused by RF, chordae rupture, mitral annular disjunction, or myxomatous degeneration (1° or 2° to connective tissue disease). Mechanism: MC due to sudden tensing of chordae tendineae as mitral leaflets prolapse into LA (chordae cause crescendo with click)",
        ],
        [
          "Ventricular septal defect",
          "Holosystolic, harsh-sounding murmur; loudest at tricuspid area",
          "Tricuspid area",
          "Congenital. Mechanism note: larger VSDs have lower intensity murmur than smaller VSDs",
        ],
      ],
      caption: "All four systolic rows carried with the print's own wording — the mechanism notes (LV > aortic pressure; chordae tensing; VSD size paradox) are the book's margin column, transplanted whole.",
    },
    {
      kind: "table",
      title: "The diastolic + continuous family — printed descriptions verbatim",
      columns: [
        "Lesion",
        "Murmur character (printed)",
        "Location / timing detail",
        "Clinical associations (printed)",
      ],
      rows: [
        [
          "Aortic regurgitation",
          "Early diastolic, decrescendo, high-pitched 'blowing' murmur",
          "Best heard at base (aortic root dilation) or left sternal border (valvular disease)",
          "Causes include BEAR: Bicuspid aortic valve, Endocarditis, Aortic root dilation, RF. Wide pulse pressure, pistol shot femoral pulse, pulsing nail bed. Severe/chronic: hyperdynamic pulse and head bobbing; can progress to left HF",
        ],
        [
          "Mitral stenosis",
          "Follows opening snap (OS); delayed rumbling mid-to-late murmur (↓ interval between S2 and OS correlates with ↑ severity)",
          "Apex; the S2-OS gap is the severity gauge",
          "Late and highly specific sequelae of RF. Chronic MS → LA dilation and pulmonary congestion, atrial fibrillation, Ortner syndrome, hemoptysis, right HF. Mechanism: OS due to abrupt halt in leaflet motion in diastole after rapid opening due to fusion at leaflet tips; LA >> LV pressure during diastole",
        ],
        [
          "Patent ductus arteriosus",
          "Continuous machinelike murmur, loudest at S2",
          "Best heard at left infraclavicular area",
          "Often due to congenital rubella or prematurity. FA-own memory hook: 'You need a patent for that machine.'",
        ],
      ],
      caption: "The AR opening-snap absence vs MS opening-snap presence is the page's sharpest diastolic fork — AR is immediate decrescendo; MS waits for the OS.",
    },
    {
      kind: "compare",
      title: "The holosystolic cousins — same timing, different valves",
      intro: "MR, TR, and VSD all fill systole completely — the discriminator is location and patient, not timing.",
      columns: ["MR / TR", "VSD"],
      rows: [
        {
          label: "Sound",
          a: "High-pitched 'blowing'",
          b: "Harsh-sounding",
        },
        {
          label: "Best heard",
          a: "MR at apex → axilla; TR at tricuspid area",
          b: "Tricuspid area",
        },
        {
          label: "Patient",
          a: "MR post-MI/MVP/LV dilation/RF; TR from RV dilatation (eg, 2° to pacemaker)",
          b: "Congenital — often a child or young adult",
        },
        {
          label: "Size/intensity rule",
          a: "Intensity tracks the leak's severity",
          b: "LARGER VSDs are SOFTER — low-pressure shunt",
        },
      ],
    },
    {
      kind: "text",
      title: "The two mnemonics the page prints — and what they unlock",
      body: [
        "SAD belongs to aortic stenosis: Syncope, Angina, Dyspnea on exertion — the printed progression warning that the stenotic triad marks decompensation. Its companion signs are the soft S2 (the valve barely closes), the ejection click, and pulsus parvus et tardus (weak, delayed carotid upstrokes). The two printed etiologies bracket age: degenerative calcification >60, bicuspid valve calcification ~50-60.",
        "BEAR belongs to aortic regurgitation: Bicuspid aortic valve, Endocarditis, Aortic root dilation, RF. The hemodynamic signature is a WIDE PULSE PRESSURE — the diastolic leak dumps aortic pressure while systolic pressure surges — printed as pistol-shot femoral pulses and pulsing nail beds (Quincke), with head bobbing and hyperdynamic pulses when severe and chronic, progressing to left HF.",
        "The page's third memory hook is FA-own and PDA-specific: 'You need a patent for that machine' — the continuous machinelike murmur needs a PATENT ductus. Its printed associations are congenital rubella and prematurity, and its timing (continuous, loudest at S2, left infraclavicular) is unique on this page — nothing else runs through S2.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The severity gauges the page hands you",
      body: "MS: the S2-to-OS interval SHORTENS as stenosis worsens (higher LA pressure snaps the valve open sooner) — '↓ interval between S2 and OS correlates with ↑ severity.' AS: parvus-et-tardus pulses and the SAD triad track progression. AR: the peripheral signs (pistol shots, nail-bed pulsing, head bobbing) mark chronic severe disease. VSD: the SIZE PARADOX — larger defects murmur SOFTER (low-velocity shunt), so a quiet chest in a cyanotic infant is not reassuring.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "Clicks and snaps are valve-structure events",
      body: "Midsystolic CLICK = chordae suddenly tensing as mitral leaflets prolapse into the LA (MVP). Opening SNAP = abrupt halt of leaflet motion in early diastole after rapid opening against fused tips (MS), with LA >> LV pressure driving it. Both are the book's own mechanism notes — if a question stem mentions a click or snap, the answer is MVP or MS respectively, and the murmur follows the sound.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Presentations that run through this catalog",
      items: [
        {
          lead: "Syncope, angina, and dyspnea on exertion in a 70-year-old with delayed carotid upstrokes",
          text: "Aortic stenosis — the SAD triad plus pulsus parvus et tardus; crescendo-decrescendo at the base radiating to carotids.",
        },
        {
          lead: "Post-MI patient with a new holosystolic blowing murmur at the apex radiating to the axilla",
          text: "Mitral regurgitation — the printed MR association list leads with ischemic heart disease (post-MI); papillary muscle dysfunction or rupture.",
        },
        {
          lead: "Wide pulse pressure with bounding femoral pulses and head bobbing",
          text: "Chronic severe aortic regurgitation — BEAR causes, early diastolic decrescendo at the base or left sternal border.",
        },
        {
          lead: "Immigrant patient with atrial fibrillation, hemoptysis, and a hoarse voice",
          text: "Chronic mitral stenosis — late RF sequelae; LA dilation (AF), pulmonary congestion (hemoptysis), Ortner syndrome (hoarseness from LA pressing the recurrent laryngeal nerve).",
        },
        {
          lead: "Premature infant with a continuous hum at the left infraclavicular area, loudest at S2",
          text: "Patent ductus arteriosus — the machinelike continuous murmur; prematurity is a printed association.",
        },
        {
          lead: "Pacemaker placed for AV block, now with a holosystolic murmur at the tricuspid area",
          text: "Tricuspid regurgitation — the print's own TR etiology: RV dilatation, may be 2° to permanent pacemaker placement (lead irritation).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, with weak delayed pulses.",
        discriminator: "Ejection murmur at the base + parvus et tardus",
        concept: "LV must generate suprasystemic pressure through a narrowed orifice (LV pressure > aortic pressure during systole)",
        answer: "Aortic stenosis — SAD triad is the progression warning",
      },
      {
        stem: "A late-systolic murmur at the apex that begins after a mid-systolic click occurring later than the carotid pulse.",
        discriminator: "Click AFTER the carotid upstroke, then crescendo to S2",
        concept: "Chordae tensing as leaflets prolapse — the click is the murmur's gate",
        answer: "Mitral valve prolapse — usually benign, IE risk",
      },
      {
        stem: "An early diastolic decrescendo blowing murmur in a patient with a wide pulse pressure and pulsing nail beds.",
        discriminator: "Immediate post-S2 decrescendo + peripheral arterial signs",
        concept: "Diastolic run-off from the aorta through an incompetent valve",
        answer: "Aortic regurgitation — causes BEAR",
      },
      {
        stem: "A continuous 'machinelike' murmur loudest at S2 at the left infraclavicular area in a premature infant.",
        discriminator: "Continuous through S2 + prematurity",
        concept: "Aorta-to-pulmonary-artery shunt flows in BOTH systole and diastole",
        answer: "Patent ductus arteriosus — congenital rubella or prematurity",
      },
    ],
    traps: [
      {
        a: "Aortic stenosis murmur",
        b: "Aortic sclerosis murmur",
        whyConfused: "Both are systolic ejection murmurs at the aortic area in older adults.",
        keyDifference: "Sclerosis is the 'benign cousin' — no SAD triad, no parvus et tardus, normal S2. Stenosis carries soft S2, ± ejection click, SAD progression, and delayed pulses.",
        clue: "Check the carotid upstroke and S2 — delayed/soft means true stenosis.",
      },
      {
        a: "Mitral stenosis (OS then rumble)",
        b: "Aortic regurgitation (immediate decrescendo)",
        whyConfused: "Both are diastolic murmurs.",
        keyDifference: "MS waits for the opening snap and rumbles mid-to-late at the apex (RF sequelae, LA >> LV gradient). AR starts immediately after S2, decrescendo, at the base or LSB (BEAR, wide pulse pressure).",
        clue: "Snap-then-rumble = MS; instant blow = AR. The S2-OS gap INVERSELY tracks MS severity.",
      },
      {
        a: "Larger VSD (softer murmur)",
        b: "Smaller VSD (louder murmur)",
        whyConfused: "Intuition says bigger defect = louder murmur.",
        keyDifference: "The print's own paradox: larger VSDs have LOWER intensity murmurs than smaller ones — a big low-resistance shunt flows quietly; a small tight shunt jets loudly.",
        clue: "Loud harsh holosystolic at the tricuspid area can be a SMALL defect — do not equate loudness with lesion size.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any murmur vignette",
        differentiator: "Timing relative to S1/S2 → location → one printed association",
        correctPath: "Crescendo-decrescendo at base = AS; holosystolic apex→axilla = MR; holosystolic harsh at tricuspid = VSD; late crescendo after click = MVP; early diastolic decrescendo = AR; post-OS rumble = MS; continuous machinelike = PDA. Three bins — systolic, diastolic, continuous — then localize.",
      },
      {
        lookAlike: "Elderly systolic murmur — AS vs sclerosis",
        differentiator: "SAD triad + pulse character",
        correctPath: "Syncope/angina/dyspnea or parvus-et-tardus → stenosis (needs echo, possibly valve replacement); asymptomatic murmur with normal pulses → sclerosis (benign).",
      },
    ],
    miniCase: {
      vignette: "A 68-year-old woman reports one episode of exertional syncope. Blood pressure is 148/72; her carotid upstrokes are weak and delayed; a crescendo-decrescendo murmur is loudest at the right second intercostal space and radiates to both carotids; S2 is soft.",
      question: "Which finding best explains the mechanism of her murmur, and what symptom triad marks its progression?",
      options: [
        {
          label: "A",
          text: "LV pressure exceeding aortic pressure during systole; Syncope, Angina, Dyspnea on exertion (SAD)",
          why: "Correct — the printed AS mechanism is the suprasystemic systolic LV pressure, and SAD is the printed progression triad she is starting to exhibit (syncope).",
          correct: true,
        },
        {
          label: "B",
          text: "LA >> LV pressure during diastole; Ortner syndrome, hemoptysis, right HF",
          why: "Those are the mitral stenosis mechanism and sequelae — MS is a diastolic rumble after an opening snap, not an ejection murmur radiating to the carotids.",
        },
        {
          label: "C",
          text: "Reverse flow across the aortic valve in diastole; wide pulse pressure with pistol-shot femorals",
          why: "That is aortic regurgitation (BEAR) — her wide-ish pulse pressure tempts, but the systolic ejection murmur with soft S2 and delayed upstrokes is stenosis physiology.",
        },
        {
          label: "D",
          text: "Sudden tensing of chordae tendineae with prolapse into the LA; infective endocarditis predisposition",
          why: "That is MVP's mechanism — the midsystolic click and late crescendo, not a base-radiating ejection murmur.",
        },
        {
          label: "E",
          text: "A low-pressure left-to-right shunt; larger defects murmur louder",
          why: "VSD territory, and the direction is inverted — the print says larger VSDs murmur SOFTER; and a shunt murmur would be holosystolic at the tricuspid area, not carotid-radiating.",
        },
      ],
      reasoning: "Base crescendo-decrescendo + carotid radiation + soft S2 + parvus et tardus + exertional syncope = aortic stenosis at the SAD stage. The mechanism line the page prints — LV pressure > aortic pressure during systole — is the answer anchor.",
    },
  },
  mnemonics: [
    {
      code: "“SAD — Syncope, Angina, Dyspnea on exertion”",
      meaning: "The printed progression triad of aortic stenosis: each symptom marks decompensation of the stenotic valve.",
      memorizes: "AS clinical progression (the page's own mnemonic)",
      whenToUse: "Any AS severity/progression question; syncope in an elderly patient with an ejection murmur.",
      clinical: "SAD + parvus et tardus + soft S2 = decompensated AS heading toward valve replacement.",
    },
    {
      code: "“BEAR — Bicuspid, Endocarditis, Aortic root dilation, RF”",
      meaning: "The printed causes of aortic regurgitation: a bear that leaks — wide pulse pressure, pistol-shot femorals, pulsing nail beds.",
      memorizes: "AR etiologies (the page's own mnemonic)",
      whenToUse: "Any early-diastolic decrescendo murmur question.",
      clinical: "AR with wide pulse pressure → think bicuspid valve or root dilation before anything else.",
    },
    {
      code: "“You need a patent for that machine”",
      meaning: "The FA-own hook for PDA: the continuous MACHINELIKE murmur requires a PATENT ductus arteriosus.",
      memorizes: "PDA murmur identity (continuous, loudest at S2, left infraclavicular)",
      whenToUse: "Any continuous murmur question; premature infant or congenital-rubella vignette.",
      clinical: "Continuous hum that never stops for S2 = the ductus is still open.",
    },
    {
      code: "“Click then crescendo — the prolapse gate”",
      meaning: "In MVP the murmur cannot start until the midsystolic click (chordae tensing) opens the gate; it crescendos to just before S2.",
      memorizes: "MVP timing and its mechanism note",
      whenToUse: "Any 'click' stem — the answer is MVP and the murmur follows the click.",
      clinical: "Click after the carotid pulse, apex, loudest just before S2 — benign but IE-predisposing.",
    },
  ],
  rapidReview: {
    s30: [
      "AS: crescendo-decrescendo at base → carotids; soft S2 ± ejection click; pulsus parvus et tardus; SAD (Syncope, Angina, Dyspnea).",
      "MR/TR: holosystolic blowing — MR apex→axilla, TR tricuspid area; MR post-MI/MVP/LV dilation/RF; TR RV dilatation ± pacemaker.",
      "MVP: late crescendo AFTER midsystolic click, apex, loudest just before S2; usually benign, IE risk.",
      "VSD: holosystolic harsh at tricuspid area; congenital; LARGER defects murmur SOFTER.",
      "AR: early diastolic decrescendo blowing at base or LSB; BEAR causes; wide pulse pressure, pistol-shot femorals, head bobbing.",
      "MS: opening snap then delayed mid-to-late rumble at apex; ↓ S2-OS interval = worse; late RF sequelae (LA dilation, AF, Ortner, hemoptysis).",
      "PDA: continuous machinelike, loudest at S2, left infraclavicular; congenital rubella or prematurity.",
    ],
    m3: [
      "AS mechanism: LV pressure > aortic pressure during systole; two etiologies bracket age — degenerative calcification >60 y, bicuspid calcification ~50-60 y.",
      "MVP causes: RF, chordae rupture, mitral annular disjunction, myxomatous degeneration (1° or 2° to connective tissue disease).",
      "MS mechanism: OS = abrupt halt of leaflet motion after rapid opening against fused tips; LA >> LV pressure in diastole.",
      "TR can be 2° to permanent pacemaker placement — RV dilatation from lead irritation.",
      "AR severe/chronic: hyperdynamic pulses, head bobbing, can progress to left HF.",
    ],
    m10: [
      "Diastolic fork: AR = immediate post-S2 decrescendo (base or LSB); MS = OS then mid-to-late rumble (apex) — the S2-OS interval INVERSELY tracks severity.",
      "The holosystolic trio: MR (blowing, apex→axilla), TR (tricuspid area), VSD (harsh, tricuspid area) — location + patient separates them.",
      "PDA is the page's ONLY continuous murmur — runs through S2 (loudest there), left infraclavicular; associations congenital rubella + prematurity.",
      "VSD size paradox: larger VSD → lower-intensity murmur (low-velocity shunt); loudness is not lesion size.",
      "Cross-reference to the auscultation map: AS softens with hand grip (↓ gradient), AR/MR/VSD amplify with hand grip (↑ reverse flow), MVP click moves with preload — maneuvers discriminate every murmur on this page.",
    ],
  },
  recall: [
    {
      q: "The SAD triad marks progression of which murmur?",
      a: "Aortic stenosis — Syncope, Angina, Dyspnea on exertion.",
    },
    {
      q: "BEAR stands for?",
      a: "Bicuspid aortic valve, Endocarditis, Aortic root dilation, RF — the causes of aortic regurgitation.",
    },
    {
      q: "What does a shortened S2-to-OS interval mean in mitral stenosis?",
      a: "Worse (more severe) stenosis — higher LA pressure opens the stenotic valve sooner after S2.",
    },
    {
      q: "Which murmur is continuous and machinelike, and where is it loudest?",
      a: "Patent ductus arteriosus — continuous, loudest at S2, best heard at the left infraclavicular area.",
    },
    {
      q: "Why do larger VSDs murmur softer than smaller ones?",
      a: "A larger low-resistance shunt carries lower flow velocity — the printed size paradox ('larger VSDs have lower intensity murmur').",
    },
    {
      q: "Mechanism of the midsystolic click in MVP?",
      a: "Sudden tensing of chordae tendineae as the mitral leaflets prolapse into the LA — the chordae 'cause crescendo with click.'",
    },
    {
      q: "Which murmur radiates to the carotids and what pulses accompany severe disease?",
      a: "Aortic stenosis — pulsus parvus et tardus (weak pulses with delayed peak).",
    },
    {
      q: "Two printed associations of PDA?",
      a: "Congenital rubella and prematurity.",
    },
  ],
  related: [
    {
      title: "Auscultation Areas and Maneuvers",
      note: "The map this catalog hangs on — every murmur here names an area and a maneuver response on the previous page.",
      topicId: "auscultation-areas-maneuvers",
    },
    {
      title: "Cardiac Action Potentials",
      note: "The mechanical events these murmurs encode ride the electrical phases — the plateau's calcium influx is what makes every ventricular systole (and every systolic murmur) possible.",
      topicId: "cardiac-action-potentials",
    },
    {
      title: "Atherosclerosis",
      note: "Degenerative calcific aortic stenosis (>60 years) and the sclerosis-vs-stenosis fork share the calcific-intimal biology of the arterial disease chapter.",
      topicId: "atherosclerosis",
    },
    {
      title: "Rheumatic fever",
      note: "Mitral stenosis is the print's 'late and highly specific sequelae of RF' — the ARF→MS arc is the classic Board bridge between immune-mediated pharyngitis and the stenotic valve.",
    },
  ],
  crossLinks: [
    {
      subject: "Physiology",
      connection: "Murmur intensity is flow × orifice physics — the same pressure-gradient arithmetic that drives the maneuvers table (hand grip, Valsalva).",
    },
    {
      subject: "Pathology",
      connection: "Valve pathology classes (calcific degeneration, myxomatous prolapse, rheumatic fusion, congenital defect) map 1:1 onto this page's seven lesions.",
    },
    {
      subject: "Microbiology / Immunology",
      connection: "Infective endocarditis (MR/TR, and AR via BEAR) and rheumatic fever (MS, MR, MVP, AR) — two immune/infectious axes generating the same murmur families.",
    },
    {
      subject: "Pediatrics",
      connection: "Congenital lesions (VSD, PDA, bicuspid valve) anchor the neonatal/pediatric murmur questions — prematurity and congenital rubella are printed associations.",
    },
  ],
  mechanisms: [
    {
      id: "ms-os-mechanism",
      title: "Mitral stenosis — why the opening snap exists and what its timing means",
      context: "Rheumatic mitral valve, diastole",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Leaflet tips fused by rheumatic scarring",
            sublabel: "The late and highly specific sequelae of RF — the valve opens abnormally.",
            variant: "input",
          },
          {
            id: "s1",
            label: "LA pressure climbs above LV",
            sublabel: "Hemodynamics — LA >> LV pressure during diastole forces the valve open.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Rapid opening halts abruptly → OS",
            sublabel: "Organ — The opening SNAP is the abrupt halt in leaflet motion in early diastole after rapid opening.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Blood squeezes through the narrow orifice → rumble",
            sublabel: "Organ — Delayed rumbling mid-to-late murmur follows the OS.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Severity gauge: the S2-OS interval",
            sublabel: "Clinical: ↓ interval between S2 and OS correlates with ↑ severity (higher LA pressure opens the valve sooner).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Downstream sequelae",
            sublabel: "Clinical: LA dilation and pulmonary congestion, atrial fibrillation, Ortner syndrome, hemoptysis, right HF.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "s1", to: "o2" },
        ],
        caption:
          "The snap is the sound of a scarred valve forced open by a pressure-starved atrium — and how FAST it snaps after S2 is the printed severity gauge.",
      },
    },
    {
      id: "ar-runoff-mechanism",
      title: "Aortic regurgitation — the diastolic runoff that widens the pulse pressure",
      context: "Incompetent aortic valve, diastole",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "BEAR lesions make the valve leak",
            sublabel: "Bicuspid aortic valve, Endocarditis, Aortic root dilation, RF — the valve cannot close completely.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Diastolic runoff aorta → LV",
            sublabel: "Hemodynamics — Aortic pressure falls fast in diastole as blood leaks back; diastolic BP drops.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Early diastolic decrescendo murmur",
            sublabel: "Organ — High initial gradient decays: early diastolic, decrescendo, high-pitched 'blowing' at base or LSB.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Systolic stroke volume overfills",
            sublabel: "Hemodynamics — The regurgitant volume returns in systole → widened PULSE PRESSURE.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Peripheral signs",
            sublabel: "Clinical: pistol shot femoral pulse, pulsing nail bed; hyperdynamic pulse and head bobbing when severe and chronic.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Progression to left HF",
            sublabel: "Clinical: chronic volume overload enlarges the LV — can progress to left HF.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s1", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "AR is a two-pressure story: diastolic runoff lowers the floor, systolic overfilling raises the ceiling — the wide pulse pressure IS the murmur heard in the periphery.",
      },
    },
  ],
};
