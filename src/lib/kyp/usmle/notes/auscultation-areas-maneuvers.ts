import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv11 (pdf 316 / book 294).
// Source: First Aid 2026, Part 1 pdf 316 (book 294) — Auscultation of the heart.

export const auscultationAreasManeuvers: KypUsMLENote = {
  id: "auscultation-areas-maneuvers",
  title: "Auscultation Areas and Maneuvers",
  subtitle: "Five places to listen, five ways to move the patient — every murmur is a valve plus a hemodynamic state. Localize first (APT M), then manipulate preload and afterload to unmask it.",
  subject: "Cardiovascular · Physiology",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "Physical diagnosis",
  difficulty: 3,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 294 (auscultation areas and maneuvers)",
  tags: [
    "APT M",
    "auscultation areas",
    "Valsalva",
    "hand grip",
    "squatting",
    "preload",
    "afterload",
  ],
  core: {
    what: "The five auscultation areas — Aortic (2nd right intercostal space), Pulmonic (2nd left intercostal space), Tricuspid (4th left sternal border), Mitral (apex, 5th intercostal space midclavicular line) — mapped with the murmurs heard best at each ('Where to listen: APT M'), plus the five maneuvers (standing/Valsalva, passive leg raise, squatting, hand grip, inspiration) that change preload and afterload and therefore change every murmur's intensity.",
    why: "Step 1 does not ask you to hear murmurs — it asks you to PREDICT them: which area, which direction a maneuver moves the murmur, and why. The maneuver table is a pure preload/afterload physics problem, which makes it one of the most reliably testable physical-diagnosis topics.",
    keyIdea: "Two-step algorithm: (1) LOCALIZE — the area names the valve (aortic/pulmonic = outflow valves at the base; tricuspid/mitral = AV valves, with the apex = mitral; left sternal border catches HCM, AR, PR). (2) MANIPULATE — standing and Valsalva ↓ preload, so they AMPLIFY the volume-sensitive left-sided murmurs (MVP clicks earlier, HCM louder) while quieting almost everything else; squatting and passive leg raise reverse the picture; hand grip ↑↑ afterload and amplifies regurgitant left-sided murmurs (AR, MR, VSD) while quieting AS; inspiration loads the right heart, so right-sided murmurs loudest on inspiration.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "auscultation-areas-map",
      title: "The auscultation map — areas, murmurs, maneuvers",
      caption: "The chest-wall map (APT M areas with the murmurs listed at each) beside the five-row maneuvers table (hemodynamic change → murmurs that increase → murmurs that decrease).",
      notice: "Trace the two columns of the printed maneuvers table against one axis — LV volume. Every 'increase' entry on standing/Valsalva is a murmur that SHRINKS when the ventricle fills less (MVP, HCM), and every 'decrease' is a flow-dependent murmur; hand grip is the exception that kills AS by raising afterload, not by touching preload.",
    },
    {
      kind: "table",
      title: "Where to listen — the printed area-to-murmur map",
      columns: [
        "Area",
        "Systolic murmurs heard there",
        "Diastolic murmurs heard there",
      ],
      rows: [
        [
          "A — Aortic area (2nd right ICS)",
          "Aortic stenosis; flow murmur (eg, physiologic murmur); aortic valve sclerosis",
          "—",
        ],
        [
          "P — Pulmonic area (2nd left ICS)",
          "Systolic ejection murmur: pulmonic stenosis, atrial septal defect, flow murmur",
          "—",
        ],
        [
          "T — Tricuspid area (4th left LSB)",
          "Holosystolic murmur: tricuspid regurgitation, ventricular septal defect",
          "Tricuspid stenosis",
        ],
        [
          "M — Mitral area / apex (5th ICS, MCL)",
          "Mitral regurgitation; mitral valve prolapse",
          "Mitral stenosis",
        ],
        [
          "Left sternal border",
          "Hypertrophic cardiomyopathy",
          "Aortic regurgitation; pulmonic regurgitation",
        ],
      ],
      caption: "The printed page organizes the chest wall into six labeled zones (the four APT M areas plus mitral regurgitation and the left sternal border list); this table is the KYP re-arrangement of exactly those lists — nothing added.",
    },
    {
      kind: "table",
      title: "The maneuvers table — hemodynamics → murmur direction",
      columns: [
        "Maneuver",
        "Cardiovascular change",
        "Murmurs that INCREASE",
        "Murmurs that DECREASE",
      ],
      rows: [
        [
          "Standing, Valsalva (strain phase)",
          "↓ preload (↓ LV volume)",
          "MVP (↓ LV volume) with EARLIER midsystolic click; HCM (↓ LV volume)",
          "Most murmurs (↓ flow through stenotic or regurgitant valve)",
        ],
        [
          "Passive leg raise",
          "↑ preload (↑ LV volume)",
          "Most murmurs (↑ flow through stenotic or regurgitant valve); MVP (↑ LV volume) with LATER midsystolic click; HCM (↑ LV volume)",
          "— (reverse of standing/Valsalva)",
        ],
        [
          "Squatting",
          "↑ preload, ↑ afterload (↑ LV volume)",
          "MVP (↑ LV volume) with later midsystolic click; HCM (↑ LV volume)",
          "— (reverse of standing/Valsalva)",
        ],
        [
          "Hand grip",
          "↑↑ afterload → ↑ reverse flow across aortic valve (↑ LV volume)",
          "Most other left-sided murmurs (AR, MR, VSD)",
          "AS (↓ transaortic valve pressure gradient); HCM (↑ LV volume)",
        ],
        [
          "Inspiration",
          "↑ venous return to right heart, ↓ venous return to left heart",
          "Most right-sided murmurs (increase with inspiration)",
          "Most left-sided murmurs (increase with expiration)",
        ],
      ],
      caption: "The printed table's five rows carried in full; the fourth column for passive leg raise and squatting is the print's own reversal logic — its rows carry 'MVP (↑ LV volume) with later midsystolic click' and 'HCM (↑ LV volume)' in the increase column.",
    },
    {
      kind: "text",
      title: "Why the physics works — one dial, two directions",
      body: [
        "Only two dials exist on this page: LV volume (preload, with afterload riding along) and which side of the circulation the blood is loading. Stenotic and regurgitant murmurs are FLOW lesions — less volume, less flow, quieter murmur. That is why standing and Valsalva (↓ preload) quiet 'most murmurs.'",
        "The two left-sided exceptions share one mechanism: their obstruction lives INSIDE the ventricle and worsens when the chamber is smaller. Mitral valve prolapse — less volume, leaflets coapt earlier and the midsystolic click moves EARLIER with the murmur lengthening; hypertrophic cardiomyopathy — less volume, the narrowed outflow tract obstructs MORE, so the murmur grows. Both reverse with squatting and passive leg raise (bigger chamber, later click, softer HCM).",
        "Hand grip is the afterload specialist: squeezing the isometric hand raises systemic resistance, which pushes more blood backward across incompetent left-sided valves (AR, MR, VSD all louder) — but the same raised afterload LOWERS the pressure gradient across a stenotic aortic valve, so AS quiets. Inspiration is the sidedness test: it transiently loads the right heart (right-sided murmurs louder) and unloads the left (left-sided murmurs louder on expiration).",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The exam's favorite maneuver pairs",
      body: "MVP: click earlier with standing/Valsalva, later with squatting — the classic 'click timing' stem. HCM: louder standing/Valsalva, softer squatting — the classic 'which maneuver decreases' stem. AS vs HCM at the left sternal border: hand grip softens AS (smaller gradient) but HCM stays loud or louder. AS vs AR: hand grip quiets AS and amplifies AR — the fastest discriminator the page offers.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Presentations that run through this page",
      items: [
        {
          lead: "Healthy teen, soft systolic murmur at the left sternal edge, innocent-appearing",
          text: "Flow murmur (eg, physiologic murmur) — the printed aortic/pulmonic 'flow murmur' entries; normal exercise response, no workup.",
        },
        {
          lead: "Elderly patient with a systolic murmur at the aortic area but normal pulses",
          text: "Aortic valve sclerosis — the printed aortic-area entry that is NOT true stenosis (no SAD triad, no parvus-et-tardus).",
        },
        {
          lead: "Clicking murmur that changes with posture",
          text: "Mitral valve prolapse — the midsystolic click is the giveaway; timing shifts EARLIER with ↓ LV volume (standing/Valsalva) and LATER with ↑ LV volume (squatting).",
        },
        {
          lead: "New diastolic blowing murmur at the left sternal border after ascending aorta dissection",
          text: "Aortic regurgitation — left sternal border diastolic is AR territory; hand grip makes it louder.",
        },
        {
          lead: "Murmur that gets louder when the patient inhales deeply",
          text: "Right-sided murmur (eg, tricuspid regurgitation at the tricuspid area) — inspiration ↑ venous return to the right heart.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A murmur softens when the patient stands and disappears during Valsalva strain.",
        discriminator: "↓ preload quiets a flow-dependent murmur",
        concept: "Most stenotic and regurgitant murmurs track LV volume",
        answer: "The rule behavior of 'most murmurs' — the exceptions (MVP, HCM) get LOUDER",
      },
      {
        stem: "Standing makes a midsystolic click arrive sooner and the murmur that follows longer.",
        discriminator: "Earlier midsystolic click with ↓ LV volume",
        concept: "Smaller ventricle → chordae tense earlier as leaflets prolapse",
        answer: "Mitral valve prolapse",
      },
      {
        stem: "A young athlete's systolic murmur at the left sternal border grows louder with Valsalva and softer with squatting.",
        discriminator: "Obstruction that worsens with a smaller chamber",
        concept: "Dynamic LV outflow obstruction tracks preload inversely",
        answer: "Hypertrophic cardiomyopathy",
      },
      {
        stem: "Isometric hand grip makes an early diastolic blowing murmur louder but softens a systolic ejection murmur at the aortic area.",
        discriminator: "↑↑ afterload: regurgitation louder, stenosis quieter",
        concept: "Afterload raises reverse flow across an incompetent valve but drops the transaortic gradient",
        answer: "AR amplified, AS decreased — hand grip separates the two",
      },
    ],
    traps: [
      {
        a: "MVP (standing → click earlier)",
        b: "HCM (standing → murmur louder)",
        whyConfused: "Both get WORSE with ↓ preload — both appear in the same increase column of the printed table.",
        keyDifference: "MVP's signature is the midsystolic CLICK moving earlier (and a later click with squatting); HCM is a harsh outflow murmur at the left sternal border with no click.",
        clue: "Click = MVP; left-sternal-border harsh murmur with no click = HCM.",
      },
      {
        a: "Hand grip → AS softer",
        b: "Hand grip → HCM louder",
        whyConfused: "Both are left ventricular outflow tract murmurs at the base/border.",
        keyDifference: "AS is a FIXED-orifice gradient lesion (hand grip shrinks the transaortic gradient); HCM is DYNAMIC obstruction (hand grip ↑ LV volume → less obstruction, but the printed table still lists HCM under hand grip's decrease column via ↑ LV volume).",
        clue: "Fixed gradient + afterload = quieter; dynamic chamber-size obstruction = follow the LV volume.",
      },
      {
        a: "Inspiration ↑ right-sided murmurs",
        b: "Expiration ↑ left-sided murmurs",
        whyConfused: "Both are 'breathing changes murmur loudness' statements.",
        keyDifference: "Inspiration loads the RIGHT heart (↑ venous return) and unloads the left — the printed table rows say exactly this.",
        clue: "Louder on inspiration → right-sided; louder on expiration → left-sided.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'maneuver changes the murmur' vignette",
        differentiator: "What did the maneuver do to LV volume (preload) and afterload?",
        correctPath: "Standing/Valsalva = ↓ volume; squatting/PLR = ↑ volume; hand grip = ↑↑ afterload; inspiration = right-sided loading. Then ask whether the murmur is flow-dependent (most) or chamber-size-dependent (MVP, HCM).",
      },
      {
        lookAlike: "Systolic murmur at the left sternal border — HCM vs AS",
        differentiator: "Response to preload and to hand grip",
        correctPath: "Louder standing/Valsalva, softer squatting = HCM; softer hand grip with parvus-et-tardus pulses = AS. The maneuvers are the differential's decision tree.",
      },
    ],
    miniCase: {
      vignette: "A 21-year-old track athlete is evaluated for a murmur found at pre-participation screening. Standing from squatting makes the murmur distinctly louder; squatting down again softens it; there is no midsystolic click, and the murmur is loudest along the left sternal border.",
      question: "Which maneuver would be EXPECTED to decrease this murmur's intensity, and why?",
      options: [
        {
          label: "A",
          text: "Standing — decreases it by reducing LV volume",
          why: "Backward: standing ↓ LV volume, which INCREASES this murmur (as the vignette already demonstrated).",
        },
        {
          label: "B",
          text: "Passive leg raise — decreases it by increasing LV volume",
          why: "Tempting because PLR is a real maneuver — but the direction is wrong: ↑ LV volume DECREASES this murmur, so PLR would soften it, not the mechanism stated.",
          correct: true,
        },
        {
          label: "C",
          text: "Hand grip — decreases it by increasing afterload",
          why: "Hand grip ↑ afterload → ↑ LV volume → would soften HCM — the effect is real, but the question asks which EXPECTED change matches the printed mechanism; PLR is the cleaner preload answer, and hand grip's printed decrease column lists AS, not this murmur.",
        },
        {
          label: "D",
          text: "Inspiration — decreases it by shifting venous return",
          why: "Inspiration loads the RIGHT heart; it is the sidedness test for tricuspid/pulmonic murmurs, not the LV-volume dial this murmur rides on.",
        },
        {
          label: "E",
          text: "Amyl nitrite inhalation — decreases it by dilating arterioles",
          why: "Not on the printed page — a classic exam distractor outside this table's scope; the tested table covers the five printed maneuvers only.",
        },
      ],
      reasoning: "Louder standing (↓ LV volume), softer squatting (↑ LV volume), no click, left sternal border = hypertrophic cardiomyopathy's dynamic obstruction. Any maneuver that ENLARGES the ventricle (passive leg raise, squatting) decreases it — the printed table's decrease logic, reversed from 'most murmurs.'",
    },
  },
  mnemonics: [
    {
      code: "“APT M — All People Take Medicine”",
      meaning: "Aortic, Pulmonic, Tricuspid, Mitral — the four named areas, top-of-heart outflow valves (A, P) to bottom-of-heart AV valves (T, M).",
      memorizes: "Where to listen: APT M (the page's own mnemonic)",
      whenToUse: "Every 'which area is this murmur heard best' question.",
      clinical: "Aortic = 2nd right ICS; pulmonic = 2nd left ICS; tricuspid = 4th left LSB; mitral = apex.",
    },
    {
      code: "“Stand up, click sooner; squat down, click later”",
      meaning: "↓ LV volume (standing/Valsalva) tenses the prolapsing chordae EARLIER (midsystolic click moves earlier); ↑ LV volume (squatting, PLR) delays the click.",
      memorizes: "MVP click-timing direction under preload changes",
      whenToUse: "Any vignette tracking a click or prolapse murmur with posture.",
      clinical: "The printed MVP rows: earlier midsystolic click with ↓ LV volume, later with ↑ LV volume.",
    },
    {
      code: "“Hand grip helps the LEAKS, hurts the SQUEEZE”",
      meaning: "↑↑ afterload ↑ reverse flow across incompetent valves (AR, MR, VSD louder) but ↓ the transaortic pressure gradient (AS softer).",
      memorizes: "Hand grip row: increase column (most other left-sided murmurs — AR, MR, VSD) vs decrease column (AS)",
      whenToUse: "Any AS-vs-AR or regurgitation-amplification question.",
      clinical: "Hand grip is the fastest bedside separator of aortic stenosis from aortic regurgitation.",
    },
  ],
  rapidReview: {
    s30: [
      "Where to listen: APT M — Aortic (2nd R ICS), Pulmonic (2nd L ICS), Tricuspid (4th L LSB), Mitral (apex).",
      "Standing/Valsalva ↓ preload → MVP and HCM LOUDER (click earlier), most other murmurs softer.",
      "Squatting/passive leg raise ↑ preload → MVP (later click) and HCM softer, most other murmurs louder.",
      "Hand grip ↑↑ afterload → AR/MR/VSD louder, AS softer (↓ gradient).",
      "Inspiration ↑ right-sided murmurs; expiration ↑ left-sided murmurs.",
      "Left sternal border diastolic = AR or pulmonic regurgitation; left sternal border systolic = HCM.",
    ],
    m3: [
      "MVP murmur: late crescendo with midsystolic click after the carotid pulse, best at apex, loudest just before S2 (book 295 cross-reference).",
      "HCM vs AS: both left-sided outflow murmurs; HCM worsens with ↓ preload, AS (fixed orifice) worsens with ↑ flow states — the preload dial separates them.",
      "Aortic valve sclerosis = aortic-area systolic murmur WITHOUT the SAD triad or parvus-et-tardus — the elderly 'not-quite-stenosis' entry.",
      "Flow murmurs (physiologic) appear in both the aortic and pulmonic area lists — benign, no workup.",
      "The maneuvers table is pure preload/afterload physics: every row reduces to 'what happened to LV volume.'",
    ],
    m10: [
      "Full printed maneuvers table — Standing/Valsalva: ↓ preload (↓ LV volume); ↑ MVP (earlier click) + HCM, ↓ most murmurs. Passive leg raise: ↑ preload; ↑ most murmurs + MVP (later click) + HCM decrease. Squatting: ↑ preload + ↑ afterload; ↑ MVP/HCM volume effects. Hand grip: ↑↑ afterload → ↑ reverse flow across aortic valve; ↑ AR/MR/VSD, ↓ AS (↓ gradient) and HCM (↑ LV volume). Inspiration: ↑ venous return right heart / ↓ left; ↑ right-sided, ↓ left-sided (left louder on expiration).",
      "Tricuspid area carries holosystolic TR and VSD plus diastolic tricuspid stenosis; the apex carries systolic MR/MVP plus diastolic mitral stenosis — AV valves take holosystolic (regurg) and rumbling diastolic (stenosis) lesions at their own areas.",
      "Exam algorithm: localize by area (APT M + LSB) → decide lesion family (systolic ejection / holosystolic / diastolic decrescendo / continuous / click-crescendo) → then pick the maneuver that isolates it from the differential.",
      "The 'most murmurs' rule has exactly two printed exceptions on the preload axis (MVP, HCM) and one printed exception on the afterload axis (AS under hand grip) — memorize the exceptions, the rest follows.",
      "Right-sided vs left-sided: the inspiration row is the printed sidedness test — right-sided murmurs increase with inspiration, left-sided with expiration.",
    ],
  },
  recall: [
    {
      q: "Name the four APT M areas with their rib spaces.",
      a: "Aortic 2nd right ICS; Pulmonic 2nd left ICS; Tricuspid 4th left sternal border; Mitral (apex) 5th ICS midclavicular line.",
    },
    {
      q: "What happens to an HCM murmur with standing? With squatting?",
      a: "Louder with standing/Valsalva (↓ LV volume worsens outflow obstruction); softer with squatting (↑ LV volume).",
    },
    {
      q: "How does the midsystolic click of MVP move with preload changes?",
      a: "Earlier with ↓ LV volume (standing/Valsalva); later with ↑ LV volume (squatting, passive leg raise).",
    },
    {
      q: "Why does hand grip soften aortic stenosis?",
      a: "↑↑ afterload lowers the transaortic valve pressure gradient — less forward flow across the stenotic orifice.",
    },
    {
      q: "Which murmurs get louder with hand grip?",
      a: "Most other left-sided murmurs — AR, MR, and VSD (more reverse flow across incompetent valves).",
    },
    {
      q: "Sidedness test on auscultation?",
      a: "Right-sided murmurs increase with inspiration (↑ venous return to right heart); left-sided murmurs increase with expiration.",
    },
    {
      q: "Which murmur family lives at the left sternal border in diastole?",
      a: "Aortic regurgitation and pulmonic regurgitation (with HCM in systole at the same border).",
    },
  ],
  related: [
    {
      title: "Heart murmurs",
      note: "The next page is the lesion-by-lesion catalog this map points into — every murmur named in an area list gets its timing, sound, and associations there.",
      topicId: "heart-murmurs",
    },
    {
      title: "Splitting of S2",
      note: "The physiologic splitting mechanics (inspiration widening A2–P2) are the same inspiration physiology the maneuvers table uses for sidedness.",
      topicId: "splitting-s2",
    },
    {
      title: "Atherosclerosis",
      note: "Aortic valve sclerosis — the degenerative aortic-area murmur entry — is the calcific endpoint of the same intimal injury biology that builds plaques.",
      topicId: "atherosclerosis",
    },
    {
      title: "AV conduction blocks",
      note: "Both topics live on the cardiac physical-exam strip: what the stethoscope hears, what the ECG shows — and β-blocker/CCB therapy touches both hemodynamics and PR intervals.",
      topicId: "av-conduction-blocks",
    },
  ],
  crossLinks: [
    {
      subject: "Physiology",
      connection: "Every maneuver row is Starling physics: preload sets LV volume, afterload sets the ejection gradient — the murmur is the audible readout.",
    },
    {
      subject: "Pathology",
      connection: "The area lists are the auscultatory fingerprints of the structural lesions (stenosis, regurgitation, septal defect, prolapse) detailed on the murmurs page.",
    },
    {
      subject: "Pharmacology",
      connection: "Vasodilators and inotropes move the same preload/afterload dials the maneuvers move — drug effect and maneuver effect predict each other.",
    },
  ],
  mechanisms: [
    {
      id: "maneuver-preload-axis",
      title: "The preload axis — why ↓ LV volume amplifies only MVP and HCM",
      context: "Standing / Valsalva (strain phase)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Standing or Valsalva strain ↓ preload",
            sublabel: "The printed cardiovascular change: ↓ preload (↓ LV volume) — venous return falls, the ventricle fills less.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Flow lesions quiet down",
            sublabel: "Molecular→Organ — Less volume → less flow through any stenotic or regurgitant valve → 'most murmurs' softer.",
            variant: "process",
          },
          {
            id: "s2",
            label: "MVP: chordae tense earlier",
            sublabel: "Organ — A smaller ventricle brings leaflet coaptation (and the midsystolic click) EARLIER in systole — click earlier, murmur longer.",
            variant: "process",
          },
          {
            id: "s3",
            label: "HCM: outflow tract narrows further",
            sublabel: "Organ — Dynamic obstruction worsens as the chamber shrinks — the murmur GROWS at the left sternal border.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Two printed exceptions to the 'most murmurs' rule",
            sublabel: "Clinical: MVP (earlier midsystolic click) and HCM (↓ LV volume) INCREASE on standing/Valsalva.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Reversal with squatting / passive leg raise",
            sublabel: "Clinical: ↑ preload (↑ LV volume) restores the big-ventricle geometry — click later, HCM softer.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "One dial (LV volume) explains the whole preload column: flow lesions follow volume, but MVP's click timing and HCM's dynamic obstruction move AGAINST it — the two exceptions the exam keeps testing.",
      },
    },
    {
      id: "handgrip-afterload-axis",
      title: "The afterload axis — hand grip separates AS from AR",
      context: "Isometric hand grip",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Isometric squeeze ↑↑ systemic afterload",
            sublabel: "The printed change: ↑↑ afterload → ↑ reverse flow across aortic valve (↑ LV volume).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Incompetent valves leak more",
            sublabel: "Organ — Higher distal pressure drives more regurgitant flow: AR, MR, VSD all LOUDER.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Stenotic gradient collapses",
            sublabel: "Organ — The same pressure rise SHRINKS the transaortic valve pressure gradient — AS softer.",
            variant: "inhibit",
          },
          {
            id: "s3",
            label: "HCM gains LV volume",
            sublabel: "Organ — Afterload backs volume up into the ventricle (↑ LV volume) → dynamic obstruction eases.",
            variant: "inhibit",
          },
          {
            id: "o1",
            label: "Increase column: AR, MR, VSD",
            sublabel: "Clinical: 'Most other left-sided murmurs (AR, MR, VSD)' — the regurgitant family.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Decrease column: AS, HCM",
            sublabel: "Clinical: AS (↓ gradient) + HCM (↑ LV volume) — the printed decrease entries.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "o2" },
          { from: "s3", to: "o2" },
        ],
        caption:
          "Hand grip raises the pressure behind the left-sided valves: leaks amplify, the fixed stenotic gradient and the dynamic HCM obstruction both soften — the printed increase/decrease columns, mechanized.",
      },
    },
  ],
};
