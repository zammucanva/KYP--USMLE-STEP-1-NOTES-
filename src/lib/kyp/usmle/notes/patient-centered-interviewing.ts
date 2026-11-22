import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 21. Source: FULL pdf page 293 / book 271
// (Part 1), the FIRST page of the COMMUNICATION SKILLS subsection of Public
// Health Sciences (pdf 292 / book 270 ends the Ethics content —
// surrogates-confidentiality; pdf 294 / book 272 opens Cultural formulation
// interview — cultural-competence-interviewing). The topic owns the WHOLE page,
// which carries THREE blocks, all pure text (term/definition tables + prose):
// (1) "Patient-centered interviewing techniques" — a two-column term|
// definition table with SIX rows in printed order: Introduction, Agenda
// setting, Reflection, Validation, Recapitulation, Facilitation — every
// definition carried verbatim in the note's first table block; (2)
// "Establishing rapport" — the PEARLS block: the acronym PEARLS prints in RED
// to the right of the block title and the six row terms print their INITIAL
// LETTERS in red (Partnership, Empathy, Apology, Respect, Legitimization,
// Support — VLM-confirmed at 120dpi) — First Aid's OWN acronym, carried
// VERBATIM and ATTRIBUTED everywhere it appears in this note (never counted
// among the KYP mnemonics); (3) "Communicating with patients with
// disabilities" — a header (which wraps across three lines in the print:
// "Communicating / with patients with / disabilities") followed by SEVEN
// unlabeled prose paragraphs: person-first vs identity-first language; talk
// directly to the patient / nonverbal patients / caregivers; ask if assistance
// is desired / independence; speech difficulties; cognitive impairment; deaf
// or hard of hearing; do not bring up a disability if irrelevant / do not
// skip relevant parts of the physical exam — all seven carried verbatim in
// the note's list block (the paragraph LABELS are KYP's; the print runs
// unlabeled prose). CENSUS (pdfimages): ZERO raster images on the page — the
// three text blocks + the indd footer slug; all three blocks are ORIGINAL KYP
// ADAPTATIONS (station strip / rapport wheel / grouped-by-need panel) in ONE
// registry visual (interviewing-map, InterviewingMap in
// visuals/pubhealth-p21.tsx). VLM AVAILABLE this session (glm-4.6v at 120dpi,
// ONE full-page pass, staging-pubh21/vlm-census.txt), confirming: the six
// technique rows in printed order (none missing or extra); the term/definition
// two-column layout with thin dotted/light rules and bold dark-teal terms;
// PEARLS printed in RED bold caps beside the "Establishing rapport" title and
// the P-E-A-R-L-S initial letters printed in red inside the six row terms (no
// other red on the page); the three-line wrap of the disabilities header; the
// banner printing TWICE (running header + in-body teal ribbon); NO margin
// mnemonics, NO asterisk footnotes, NO images, NO figures. PRINTED-TEXT
// QUIRKS carried + documented: (1) "SEC TION II" header-space extraction
// artifact (known, carried as-is); (2) small-caps extraction artifact
// "COmmUNICATION SkILLS" in BOTH banner instances (the print uses small caps;
// the text layer drops the 'mm' and the 'k' to lowercase — carried as
// extracted); (3) the Agenda setting definition prints "developing joint
// agenda between the physician and the patient" — NO article before "joint
// agenda" (VLM-confirmed as printed) — carried verbatim and documented;
// (4) curly quotes as printed — "a person with a disability" and "a disabled
// person" print inside curly double quotes, and "patient's perspectives"
// carries a curly apostrophe; (5) the "Communicating with patients with
// disabilities" header wraps across three lines; (6) the term/definition
// blocks print WITHOUT column headers (term | definition rows under each
// block title only) — the note's verbatim tables supply descriptive column
// headers and document them as KYP-supplied. ADJUDICATIONS (documented in the
// manifest too): (A) the batch brief's block descriptions matched the print
// exactly (six techniques, six PEARLS elements, seven disabilities
// paragraphs) — no correction needed; (B) PEARLS is the source's OWN acronym
// (red heading + red initial letters) — attributed, never marked KYP; (C) the
// brief's disabilities summary said "ask patients what terms they use" etc. —
// all confirmed in the print. PROVENANCE SPLIT: verbatim = the six technique
// definitions, the six PEARLS definitions, the seven disabilities paragraphs,
// the block titles, the PEARLS acronym; FA-own = the red PEARLS printing and
// the red initial letters; KYP-original = the 2+3+1 arc architecture ("TWO TO
// STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR"), the PEARLS
// emotion-response protocol reading (trigger → moves → rapport), the
// ASK-DON'T-ASSUME synthesis of the disabilities page (three asks vs three
// do-not-assumes), the grouped-by-need panel, the exam layer, and the three
// KYP mnemonics ("TWO TO STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR",
// "ASK, DON'T ASSUME", and "TIME · SIMPLE · ATTENTION") — every teaching
// generalization beyond the printed page is flagged as KYP context.
// DrugCards: none — the page prints communication techniques, not drugs
// (documented as folded-by-absence in the manifest). The next page (pdf 294)
// opens Cultural formulation interview — cultural-competence-interviewing, a
// separate topic.

export const patientCenteredInterviewing: KypUsMLENote = {
  id: "patient-centered-interviewing",
  title: "Patient-Centered Interviewing and Rapport",
  subtitle:
    "The Communication Skills subsection opens with the complete script for the side of medicine the exam tests with behavioral vignettes: how to open an interview, how to answer an emotion, and how to keep the encounter accessible. The six patient-centered interviewing techniques run in printed order — Introduction (introduce yourself, ask the patient their name and how they would like to be addressed, address them by the name and pronouns given, avoid gender assumptions, sit at eye level near the patient while facing them directly), Agenda setting (identify concerns and set goals by developing a joint agenda between the physician and the patient), Reflection (actively listen and synthesize what is offered, particularly the primary concern(s)), Validation (legitimize or affirm the patient's perspectives), Recapitulation (summarize what the patient has said so far to ensure correct interpretation), and Facilitation (encourage the patient to speak freely without guiding responses or leading questions, and allow them to ask questions throughout the encounter). When an emotion appears mid-interview, the page switches to its second block: PEARLS — First Aid's own acronym, printed in red — Partnership, Empathy, Apology, Respect, Legitimization, Support. And because the arc only works if the patient can access it, the third block adapts the encounter for patients with disabilities: person-first versus identity-first language (ask the patient what terms they use), talk directly to the patient and never assume nonverbal patients do not understand, ask if assistance is desired because most people value their independence, extra time plus write/rephrase/repeat for speech difficulties, concrete language and no assumed literacy for cognitive impairment, and preferred mode plus light touch or waving and an interpreter for patients who are deaf or hard of hearing — while never bringing up a disability that is not relevant and never skipping relevant parts of the physical exam.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Communication Skills",
  pilotCategory:
    "Public Health Sciences — communication decoding: the six patient-centered interviewing techniques in printed order, the PEARLS rapport framework (First Aid's own, printed in red with red initial letters), and the disabilities communication rules (person-first vs identity-first language, direct address, ask-don't-assume, and the three need-specific protocols), carried verbatim with an exam attack layer for best-response behavioral vignettes.",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 271–271 (Communication Skills: Patient-centered interviewing techniques; Establishing rapport; Communicating with patients with disabilities)",
  tags: [
    "patient-centered interviewing",
    "communication skills",
    "interview techniques",
    "introduction",
    "agenda setting",
    "reflection",
    "validation",
    "recapitulation",
    "facilitation",
    "establishing rapport",
    "PEARLS",
    "partnership",
    "empathy",
    "apology",
    "respect",
    "legitimization",
    "support",
    "patients with disabilities",
    "person-first language",
    "identity-first language",
    "nonverbal patients",
    "speech difficulties",
    "cognitive impairment",
    "deaf or hard of hearing",
    "interpreter",
    "behavioral science",
    "physician-patient communication",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Patient-centered interviewing techniques,” SIX term/definition rows in printed order: (1) Introduction — “Introduce yourself and ask the patient their name and how they would like to be addressed. Address the patient by the name and pronouns given. Avoid making gender assumptions. Sit at eye level, near the patient, while facing them directly.” (2) Agenda setting — “Identify concerns and set goals by developing joint agenda between the physician and the patient.” (3) Reflection — “Actively listen and synthesize information offered by the patient, particularly with respect to primary concern(s).” (4) Validation — “Legitimize or affirm the patient’s perspectives.” (5) Recapitulation — “Summarize what the patient has said so far to ensure correct interpretation.” (6) Facilitation — “Encourage the patient to speak freely without guiding responses or leading questions. Allow the patient to ask questions throughout the encounter.” BLOCK 2 — “Establishing rapport,” printed under the RED acronym PEARLS (First Aid's own) with the initial letters of the six row terms printed in red: Partnership — “Work together with patient to identify primary concerns and develop preferred solutions.” Empathy — “Acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way.” Apology — “Take personal responsibility when appropriate.” Respect — “Commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors.” Legitimization — “Assure patient that emotional responses are understandable or common.” Support — “Reassure patient that you will work together through difficult times and offer appropriate resources.” BLOCK 3 — “Communicating with patients with disabilities,” SEVEN unlabeled prose paragraphs: person-first (“a person with a disability”) vs identity-first (“a disabled person”) language, with “Ask patients what terms they use”; “Under most circumstances, talk directly to the patient. Do not assume that nonverbal patients do not understand. Accompanying caregivers can add information to any discussion as needed”; “Ask if assistance is desired rather than assuming the patient cannot do something alone. Most people, including people with disabilities, value their independence”; for speech difficulties — extra time, ask them to write down a few words or rephrase, repeat back; for cognitive impairment — concrete specific language, simple direct questions, eliminate background noise, “Do not assume the patient can read,” adjust to how the patient understands best (hand gestures, demonstrate a task); for deaf or hard of hearing — ask preferred mode of communication, light touch or waving for attention, for lipreaders eliminate background noise, face the patient, do not change your mode of speaking, consider an interpreter; and “do not bring up a disability if it is not relevant to a visit (eg, a patient in a wheelchair with an ear infection). Do not skip relevant parts of the physical exam even if the disability makes the exam challenging.”",
    why:
      "This page opens the Communication Skills subsection because every behavioral vignette on the exam is secretly one of three questions: which technique is the physician using, which PEARLS element does an emotional moment call for, and which adaptation does a patient with a disability require. The six techniques are not six arbitrary courtesies — they are one arc with three phases (KYP's reading of the printed order). Phase one STRUCTURES the encounter: the Introduction fixes who the patient is (their name, their pronouns, no gender assumptions, eye level, facing them directly — the physical grammar of attention), and Agenda setting fixes what the encounter is for (a joint agenda between the physician and the patient, not a physician-directed checklist). Phase two LISTENS: Reflection synthesizes what is offered (especially the primary concern(s)), Validation affirms the patient's perspectives, and Recapitulation checks the physician's interpretation by summarizing what has been said so far. Phase three keeps the door open: Facilitation invites free speech without leading questions and lets the patient ask questions throughout. The second block exists because listening techniques alone cannot answer an EMOTION — PEARLS names the six moves that can (work together, understand the why, own your fault, commend their effort, normalize the response, reassure and resource). The third block exists because the arc presupposes access the patient may not have — so the page makes every step askable: which terms, whether assistance is wanted, which communication mode — and it protects the encounter's completeness at both ends (do not bring up an irrelevant disability; do not skip relevant exam parts).",
    keyIdea:
      "Decode any “best physician response” in three moves. MOVE 1 — ROUTE THE SENTENCE THROUGH THE ARC: does it STRUCTURE (introduce yourself, ask name and preferred address, name and pronouns given, no gender assumptions, eye level facing the patient; set a joint agenda), LISTEN (reflect = actively listen and synthesize, particularly the primary concern(s); validate = legitimize or affirm perspectives; recapitulate = summarize so far to ensure correct interpretation), or OPEN THE DOOR (facilitate = free speech, no leading questions, questions allowed throughout)? MOVE 2 — WHEN THE STEM SHOWS AN EMOTION, SWITCH TO PEARLS (First Aid's own, printed in red): Partnership (work together on concerns and preferred solutions), Empathy (acknowledge the emotion AND demonstrate understanding of WHY), Apology (personal responsibility when appropriate), Respect (commend constructive behaviors — coming in, pushing through, positive attitude), Legitimization (responses are understandable or common), Support (work together through difficult times + offer appropriate resources). MOVE 3 — WHEN THE PATIENT HAS A DISABILITY, ASK, DON'T ASSUME: ask their terms (person-first vs identity-first), ask if assistance is desired (independence is valued), ask their preferred mode of communication; talk DIRECTLY to the patient (nonverbal ≠ non-understanding; caregivers add, never replace); then apply the need-specific protocol — SPEECH: extra time, write or rephrase, repeat back; COGNITIVE: concrete specific language, simple direct questions, quiet room, never assume literacy, adjust to their best channel (gestures, demonstrate); DEAF/HARD OF HEARING: preferred mode, light touch or waving, quiet room for lipreading, face the patient, do not change your mode of speaking, consider an interpreter. And the two boundary rules: never bring up a disability that is not relevant (wheelchair + ear infection), and never skip relevant parts of the physical exam.",
  },
  mechanisms: [
    {
      id: "interview-arc-map",
      title:
        "The six-station arc: how the printed techniques build one patient-centered interview in order",
      context:
        "The printed Patient-centered interviewing techniques block (book 271): six techniques in printed order, read as one encounter timeline",
      flow: {
        nodes: [
          {
            id: "opening",
            label: "THE ENCOUNTER OPENS — a patient with concerns, a physician with a task",
            sublabel:
              "Input — every interview begins asymmetric: the physician knows the system, the patient knows the experience. The six printed techniques are the sequence that rebalances it — the first two structure the encounter, the middle three do the listening, the last keeps the door open (KYP's 2+3+1 reading of the printed order).",
            variant: "input",
          },
          {
            id: "station1",
            label: "STATION 1 — INTRODUCTION: name the relationship",
            sublabel:
              "Process — “Introduce yourself and ask the patient their name and how they would like to be addressed. Address the patient by the name and pronouns given. Avoid making gender assumptions. Sit at eye level, near the patient, while facing them directly.” The move does three jobs at once: identity (the patient's own name and pronouns), safety (no assumptions), and body language (eye level, near, facing directly — the physical grammar of attention).",
            variant: "process",
          },
          {
            id: "station2",
            label: "STATION 2 — AGENDA SETTING: build the joint map",
            sublabel:
              "Process — “Identify concerns and set goals by developing joint agenda between the physician and the patient.” The agenda is JOINT (printed twice over: “joint agenda between the physician and the patient”) — the patient's concerns set the itinerary, not the physician's checklist (KYP: this is the printed definition of patient-centered).",
            variant: "process",
          },
          {
            id: "stations3to5",
            label: "STATIONS 3–5 — THE LISTENING CORE: reflect, validate, recapitulate",
            sublabel:
              "Process — Reflection: “Actively listen and synthesize information offered by the patient, particularly with respect to primary concern(s)” — the physician mirrors and organizes what was offered. Validation: “Legitimize or affirm the patient’s perspectives” — the perspectives are treated as real and reasonable. Recapitulation: “Summarize what the patient has said so far to ensure correct interpretation” — the physician plays the story back and lets the patient correct it. Together: hear it, honor it, check it.",
            variant: "process",
          },
          {
            id: "station6",
            label: "STATION 6 — FACILITATION: keep the door open",
            sublabel:
              "Process — “Encourage the patient to speak freely without guiding responses or leading questions. Allow the patient to ask questions throughout the encounter.” Two prohibitions and one permission: no guiding, no leading — and the patient's questions are welcome at ANY time, not just at the end (KYP: facilitation is what keeps the arc from collapsing back into physician-directed questioning).",
            variant: "process",
          },
          {
            id: "arcyield",
            label: "THE ARC'S YIELD — accurate data and a patient who stays",
            sublabel:
              "Output — run in order, the arc surfaces the primary concern(s) early (agenda), captures them accurately (reflection + recapitulation), keeps the patient's perspectives inside the record (validation), and lets questions surface before the door closes (facilitation). The exam's “best next response” is almost always the next station in this arc (KYP synthesis of the printed techniques).",
            variant: "output",
          },
        ],
        edges: [
          { from: "opening", to: "station1", label: "the first thirty seconds →" },
          { from: "station1", to: "station2", label: "who we are → what we're for" },
          { from: "station2", to: "stations3to5", label: "agenda set → listen to it" },
          { from: "stations3to5", to: "station6", label: "heard → keep them talking" },
          { from: "station1", to: "arcyield", label: "identity + attention" },
          { from: "station2", to: "arcyield", label: "concerns on the map" },
          { from: "stations3to5", to: "arcyield", label: "accurate, affirmed, checked" },
          { from: "station6", to: "arcyield", label: "questions answered in-encounter" },
        ],
      },
    },
    {
      id: "pearls-rapport-map",
      title:
        "PEARLS as an emotion-response protocol: what to do when the interview hits a feeling",
      context:
        "The printed Establishing rapport block (book 271): First Aid's own red acronym — Partnership, Empathy, Apology, Respect, Legitimization, Support",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "AN EMOTION SURFACES — rapport's moment of truth",
            sublabel:
              "Input — mid-interview the patient shows fear, grief, frustration, or anger (the printed trigger for the block: the heading is “Establishing rapport”). The six interviewing techniques structure and capture information; none of them answers a feeling. First Aid's own acronym PEARLS — printed in RED beside the block title, with the six initial letters printed in red — names the moves that do.",
            variant: "input",
          },
          {
            id: "p",
            label: "P — PARTNERSHIP: “we,” not “I will”",
            sublabel:
              "Process — “Work together with patient to identify primary concerns and develop preferred solutions.” The grammatical marker (KYP): partnership sentences are first-person PLURAL — “we'll figure this out together” — and the solutions are the patient's preferred ones, not the physician's defaults.",
            variant: "process",
          },
          {
            id: "e",
            label: "E — EMPATHY: name the emotion, and the WHY",
            sublabel:
              "Process — “Acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way.” Two printed components, both required: name the feeling AND show you understand its cause (“I can see this frightens you — it came on so suddenly”). Naming without the why is sympathy; the why is what the print asks for.",
            variant: "process",
          },
          {
            id: "ar",
            label: "A + R — APOLOGY and RESPECT: own your side, commend theirs",
            sublabel:
              "Process — Apology: “Take personal responsibility when appropriate” — the physician's own faults only (a wait, a miscommunication), never false apologies for the disease itself (KYP gloss). Respect: “Commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors” — praise the printed list of constructive behaviors, specifically and sincerely.",
            variant: "process",
          },
          {
            id: "l",
            label: "L — LEGITIMIZATION: normalize the response",
            sublabel:
              "Process — “Assure patient that emotional responses are understandable or common.” The printed verb is ASSURE: the physician tells the patient that feeling this way is expected (“anyone facing this would feel the same”). Distinct from Empathy: legitimization normalizes THE RESPONSE; empathy explains THE WHY (the exam's favorite distinction on this page).",
            variant: "process",
          },
          {
            id: "s",
            label: "S — SUPPORT: stay through it, and resource it",
            sublabel:
              "Process — “Reassure patient that you will work together through difficult times and offer appropriate resources.” Two printed components: presence (“work together through difficult times”) and concrete help (“appropriate resources” — support groups, counseling, social work). Support without resources is a promise; resources without presence is a referral.",
            variant: "process",
          },
          {
            id: "rapport",
            label: "RAPPORT ESTABLISHED — the printed heading's own outcome",
            sublabel:
              "Output — the patient has been worked WITH (P), understood (E), owned-for where the physician erred (A), commended (R), normalized (L), and resourced (S). The emotion has been answered inside the encounter rather than deflected, and the interview can return to its arc — with the patient more, not less, willing to disclose (KYP synthesis under the printed heading “Establishing rapport”).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "p", label: "move beside the patient →" },
          { from: "p", to: "e", label: "then name the feeling + why" },
          { from: "e", to: "ar", label: "then own your side / commend theirs" },
          { from: "ar", to: "l", label: "then normalize the response" },
          { from: "l", to: "s", label: "then stay + resource" },
          { from: "s", to: "rapport", label: "all six → rapport" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "interviewing-map",
      title:
        "The six-station interview arc, the PEARLS rapport wheel, and the disabilities communication panel (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 271's three blocks. TOP — the six interviewing techniques as a STATION STRIP in printed order (Introduction, Agenda setting, Reflection, Validation, Recapitulation, Facilitation), each station carrying its verbatim definition and connected left to right, with the KYP 2+3+1 annotation (two stations structure, three listen, one opens the door). MIDDLE — the PEARLS RAPPORT WHEEL, attributed to First Aid (the acronym prints in red with red initial letters in the source): a central PEARLS hub with six spokes — Partnership, Empathy, Apology, Respect, Legitimization, Support — each carrying its verbatim definition. BOTTOM — the DISABILITIES COMMUNICATION PANEL, grouped by need: the universal rules strip (ask their terms — person-first vs identity-first; talk directly to the patient, nonverbal ≠ non-understanding, caregivers add not replace; ask before assisting, independence is valued; never bring up an irrelevant disability; never skip relevant exam parts) plus three need-specific cards — Speech difficulties (extra time, write or rephrase, repeat back), Cognitive impairment (concrete specific language, simple direct questions, eliminate background noise, do not assume literacy, adjust to their best channel), Deaf or hard of hearing (ask preferred mode, light touch or waving, quiet room for lipreading, face the patient, do not change your mode of speaking, consider an interpreter).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 293 — the page's assets are three pure-text blocks (term/definition tables with bold dark-teal terms and thin dotted rules; the PEARLS heading and the six initial letters in RED; the disabilities prose under a three-line header — VLM-read at 120dpi, staging-pubh21/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION of all three blocks: the station strip, the wheel, and the grouped-by-need panel are KYP's layout; every printed label, definition, and paragraph is preserved from the print, and the full text of all three blocks is additionally carried verbatim in the note's two table blocks and list block. ATTRIBUTION: PEARLS is First Aid's own acronym — drawn as a wheel here, but attributed on the visual itself, never marked KYP.",
    },
    {
      kind: "table",
      title:
        "Book 271, block 1 — the printed Patient-centered interviewing techniques, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first block: a term/definition table with SIX rows in printed order — Introduction through Facilitation. The print supplies NO column headers (term on the left, definition on the right, under the block title); the two headers below are KYP-supplied and documented as such. Printed quirk carried: the Agenda setting definition prints “developing joint agenda” with NO article before “joint agenda” (VLM-confirmed as printed) — carried verbatim.",
      columns: ["TECHNIQUE", "PRINTED DEFINITION (verbatim)"],
      rows: [
        [
          "Introduction",
          "Introduce yourself and ask the patient their name and how they would like to be addressed. Address the patient by the name and pronouns given. Avoid making gender assumptions. Sit at eye level, near the patient, while facing them directly.",
        ],
        [
          "Agenda setting",
          "Identify concerns and set goals by developing joint agenda between the physician and the patient.",
        ],
        [
          "Reflection",
          "Actively listen and synthesize information offered by the patient, particularly with respect to primary concern(s).",
        ],
        [
          "Validation",
          "Legitimize or affirm the patient’s perspectives.",
        ],
        [
          "Recapitulation",
          "Summarize what the patient has said so far to ensure correct interpretation.",
        ],
        [
          "Facilitation",
          "Encourage the patient to speak freely without guiding responses or leading questions. Allow the patient to ask questions throughout the encounter.",
        ],
      ],
      caption:
        "Verbatim carry, documented: SIX rows in printed order (VLM-confirmed — none missing or extra). The term labels print in bold dark teal in the source; “primary concern(s)” prints with the parenthetical (s) as shown; the curly apostrophe in “patient’s perspectives” is as printed; the Agenda setting row's missing article (“developing joint agenda”) is the print's own and is carried, not corrected. The 2+3+1 grouping (structure / listen / open the door) shown in the visual and used throughout this note is KYP's reading of the printed order, not a printed heading.",
    },
    {
      kind: "table",
      title:
        "Book 271, block 2 — Establishing rapport: the printed PEARLS table, carried verbatim (First Aid's OWN acronym, ATTRIBUTED)",
      intro:
        "The page's second block: the block title “Establishing rapport” with the acronym PEARLS printed beside it in RED, then SIX term/definition rows whose initial letters print in red in the source (VLM-confirmed at 120dpi) — P-artnership, E-mpathy, A-pology, R-espect, L-egitimization, S-upport. PEARLS is First Aid's own mnemonic, carried here VERBATIM and ATTRIBUTED; the column headers are KYP-supplied (the print has none).",
      columns: ["PEARLS ELEMENT", "PRINTED DEFINITION (verbatim)"],
      rows: [
        [
          "Partnership",
          "Work together with patient to identify primary concerns and develop preferred solutions.",
        ],
        [
          "Empathy",
          "Acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way.",
        ],
        [
          "Apology",
          "Take personal responsibility when appropriate.",
        ],
        [
          "Respect",
          "Commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors.",
        ],
        [
          "Legitimization",
          "Assure patient that emotional responses are understandable or common.",
        ],
        [
          "Support",
          "Reassure patient that you will work together through difficult times and offer appropriate resources.",
        ],
      ],
      caption:
        "Verbatim carry, documented: SIX rows in printed order P-E-A-R-L-S. ATTRIBUTION: PEARLS is the source's own acronym — the heading prints in red bold caps beside “Establishing rapport” and the six row terms carry red initial letters (VLM, staging-pubh21/vlm-census.txt); it is reproduced as printed and attributed to First Aid everywhere it appears in this note, never counted among the KYP mnemonics. The emotion-response protocol framing (trigger → moves → rapport) is KYP's reading and is flagged as such.",
    },
    {
      kind: "list",
      title:
        "Book 271, block 3 — Communicating with patients with disabilities: the seven printed paragraphs, carried verbatim",
      intro:
        "The page's third block: a header (which wraps across three lines in the print — “Communicating / with patients with / disabilities”) followed by SEVEN unlabeled prose paragraphs, every one carried verbatim below. The paragraph LABELS (¶1–¶7 with topic tags) are KYP's — the print runs unlabeled prose; the labels exist so the exam layer can reference each rule.",
      items: [
        {
          lead: "¶1 — THE LANGUAGE RULE: person-first vs identity-first",
          text: "“Patients may identify with person-first (ie, “a person with a disability”) or identity-first (ie, “a disabled person”) language. Ask patients what terms they use.” — the page's own tie-breaker: neither phrasing is universally correct; the patient's terms govern.",
        },
        {
          lead: "¶2 — TALK TO THE PATIENT: direct address, and what nonverbal means",
          text: "“Under most circumstances, talk directly to the patient. Do not assume that nonverbal patients do not understand. Accompanying caregivers can add information to any discussion as needed.” — caregivers ADD, they never replace the patient as the conversation's addressee.",
        },
        {
          lead: "¶3 — ASK BEFORE ASSISTING: independence is the default",
          text: "“Ask if assistance is desired rather than assuming the patient cannot do something alone. Most people, including people with disabilities, value their independence.”",
        },
        {
          lead: "¶4 — SPEECH DIFFICULTIES: time, write, rephrase, repeat",
          text: "“For patients with speech difficulties, provide extra time for the interview. If their speech is difficult to understand, consider asking them to write down a few words or ask them to rephrase their sentence. Repeat what they said to ensure you understood it correctly.”",
        },
        {
          lead: "¶5 — COGNITIVE IMPAIRMENT: concrete, simple, quiet — and no assumed literacy",
          text: "“For patients with a cognitive impairment, use concrete, specific language. Ask simple, direct questions. Eliminate background noise and distractions. Do not assume the patient can read. Adjust to how the patient understands best (eg, use hand gestures or ask them to demonstrate a task).”",
        },
        {
          lead: "¶6 — DEAF OR HARD OF HEARING: ask the mode, get the attention, protect the channel",
          text: "“Ask patients who are deaf or hard of hearing their preferred mode of communication. Use light touch or waving to get their attention. For patients who prefer to speak and lipread, eliminate background noise, face the patient, and do not change your mode of speaking. Consider using an interpreter when necessary.”",
        },
        {
          lead: "¶7 — THE TWO DON'TS: relevance and completeness",
          text: "“As with other parts of a medical history, do not bring up a disability if it is not relevant to a visit (eg, a patient in a wheelchair with an ear infection). Do not skip relevant parts of the physical exam even if the disability makes the exam challenging.”",
        },
      ],
    },
    {
      kind: "steps",
      title: "Running the arc: the printed techniques as one encounter, in order",
      intro:
        "The six techniques mapped onto an actual encounter timeline — the printed order IS the working order (KYP's reading; the verbatim definitions anchor every step).",
      steps: [
        {
          label: "STEP 1 — OPEN WITH INTRODUCTION (the first thirty seconds)",
          detail:
            "Introduce yourself; ask the patient their name and how they would like to be addressed; address them by the name and pronouns given; avoid gender assumptions; sit at eye level, near the patient, facing them directly. The exam's tell: the physician asks HOW the patient wants to be addressed rather than choosing a title for them.",
        },
        {
          label: "STEP 2 — SET THE JOINT AGENDA (before any history-taking)",
          detail:
            "Identify concerns and set goals by developing joint agenda between the physician and the patient. The exam's tell: “What would you like to make sure we cover today?” — the concerns and goals come from BOTH parties, and the patient's primary concern(s) get a guaranteed slot.",
        },
        {
          label: "STEP 3 — REFLECT AS THE STORY UNFOLDS",
          detail:
            "Actively listen and synthesize the information offered, particularly with respect to the primary concern(s) — mirror and organize what the patient actually says, rather than steering toward a predetermined differential.",
        },
        {
          label: "STEP 4 — VALIDATE THE PERSPECTIVES",
          detail:
            "Legitimize or affirm the patient's perspectives — the patient's account of their experience is treated as real and reasonable, even when the physician's assessment differs.",
        },
        {
          label: "STEP 5 — RECAPITULATE BEFORE MOVING ON",
          detail:
            "Summarize what the patient has said so far to ensure correct interpretation — the play-back that lets the patient correct the record before it becomes the chart.",
        },
        {
          label: "STEP 6 — FACILITATE THROUGHOUT, AND NEVER LEAD",
          detail:
            "Encourage the patient to speak freely without guiding responses or leading questions, and allow the patient to ask questions throughout the encounter — not just at the door. The exam's tell: open-ended invitations (“Tell me more about that”) beat closed or leading ones (“Does it feel like a knife?”).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Person-first vs identity-first language — the printed pair and the printed tie-breaker",
      intro:
        "The disabilities block opens with the page's one true vocabulary choice, and resolves it in its second sentence. The two phrasings, side by side (the KYP glosses explain what each phrasing foregrounds; the printed rule is the last row).",
      columns: [
        "PERSON-FIRST — “a person with a disability”",
        "IDENTITY-FIRST — “a disabled person”",
      ],
      rows: [
        {
          label: "The printed phrasing",
          a: "“a person with a disability” — the person comes first, the condition follows",
          b: "“a disabled person” — the disability is carried as part of identity",
        },
        {
          label: "What it foregrounds (KYP gloss)",
          a: "The person before the diagnosis — the individual is not reducible to the condition",
          b: "The disability as an identity and a community, not an appendage — pride and belonging framing",
        },
        {
          label: "Who uses it (KYP context)",
          a: "Long the default in clinical and public-health style; many patients and guidelines prefer it",
          b: "Preferred by many in the Deaf and autistic communities and disability-rights writing — where the disability is embraced, not distanced",
        },
        {
          label: "THE PRINTED RULE (the tie-breaker)",
          a: "“Ask patients what terms they use.”",
          b: "“Ask patients what terms they use.” — the patient's own terms govern BOTH columns; never assume either preference",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one attribution trap",
      body:
        "SHAPE 1 — IDENTIFY THE TECHNIQUE: the vignette shows a physician's sentence and asks which technique it demonstrates — route it through the arc (asks name and preferred address, sits at eye level = Introduction; “what should we cover today?” = Agenda setting; mirrors the story and its primary concern = Reflection; affirms the perspective = Validation; plays the story back = Recapitulation; open-ended invitation with no leading = Facilitation). SHAPE 2 — WHICH PEARLS ELEMENT: an emotional moment, and the answer options are rapport moves — match the sentence to its letter: “we'll do this together / your preferred solutions” = Partnership; “I can see why — it came on so suddenly” = Empathy; “I'm sorry the referral slipped — that was my error” = Apology; “you pushed through a lot to get here today” = Respect; “anyone would feel this way” = Legitimization; “we'll get through this together, and here's the support group” = Support. SHAPE 3 — THE DISABILITIES VIGNETTE: the correct option almost always ASKS (terms, assistance, preferred communication mode) and addresses THE PATIENT directly, while the distractors assume (nonverbal = non-understanding, wheelchair = can't do it alone, deaf = needs shouting) or commit the two don'ts (bringing up an irrelevant disability, skipping exam parts). THE ATTRIBUTION TRAP: if the question asks for “the acronym for establishing rapport,” PEARLS is First Aid's own printed framework — but on the exam itself, just know all six elements cold, in order.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own PEARLS — printed in red, carried attributed",
      body:
        "The page prints ONE mnemonic of its own: PEARLS — the heading prints in RED bold caps beside “Establishing rapport,” and the six row terms print their INITIAL LETTERS in red (VLM-confirmed at 120dpi, staging-pubh21/vlm-census.txt) — Partnership (work together on primary concerns and preferred solutions), Empathy (acknowledge the emotions AND the why), Apology (personal responsibility when appropriate), Respect (commend the constructive behaviors), Legitimization (responses are understandable or common), Support (work together through difficult times + offer appropriate resources). It is the source's hook, carried VERBATIM and ATTRIBUTED, not KYP's. The three KYP originals in the Memory section below are marked as such: “TWO TO STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR” (the 2+3+1 architecture of the six techniques), “ASK, DON'T ASSUME” (the disabilities page's three asks against its three do-not-assumes), and “TIME · SIMPLE · ATTENTION” (the three need-specific protocols: speech gets time, cognitive gets simple, deaf gets attention).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The adapted interview — the disabilities protocols in practice, grouped by need",
      intro:
        "The third block is clinical craft: the same arc (introduce, set the agenda, listen, facilitate), adapted to the patient's access needs. One universal layer, three need-specific protocols, and two boundary rules — every rule below is the print's own, grouped by KYP.",
      items: [
        {
          lead: "THE UNIVERSAL LAYER — applies to every patient with a disability",
          text: "Language: patients may identify with person-first (“a person with a disability”) or identity-first (“a disabled person”) language — ask what terms they use. Address: talk directly to the patient; do not assume nonverbal patients do not understand; accompanying caregivers can add information as needed (add, never replace). Assistance: ask if assistance is desired rather than assuming the patient cannot do something alone — most people, including people with disabilities, value their independence.",
        },
        {
          lead: "SPEECH DIFFICULTIES — slow the channel down",
          text: "Provide extra time for the interview. If speech is difficult to understand, ask the patient to write down a few words or rephrase their sentence. Repeat what they said back, to ensure you understood it correctly. The protocol keeps the PATIENT as the historian instead of outsourcing the history to a companion.",
        },
        {
          lead: "COGNITIVE IMPAIRMENT — simplify the signal",
          text: "Use concrete, specific language; ask simple, direct questions; eliminate background noise and distractions; do not assume the patient can read; adjust to how the patient understands best — use hand gestures or ask them to demonstrate a task. The exam's favorite wrong answers here: abstract reassurance, complex multi-part questions, and written handouts handed to a patient whose literacy was never assessed.",
        },
        {
          lead: "DEAF OR HARD OF HEARING — protect the channel, then use it",
          text: "Ask the patient's preferred mode of communication. Get attention with light touch or waving — not shouting from behind. For patients who prefer to speak and lipread: eliminate background noise, face the patient, and do not change your mode of speaking (no exaggerated mouthing, no shouting that distorts lip shapes). Consider using an interpreter when necessary.",
        },
        {
          lead: "THE TWO BOUNDARY RULES — relevance and completeness",
          text: "Do not bring up a disability if it is not relevant to the visit (the printed example: a patient in a wheelchair with an ear infection — the wheelchair is not the visit). Do not skip relevant parts of the physical exam even if the disability makes the exam challenging — adapt the how, never cancel the what.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A physician enters a hospital room, introduces herself, asks the patient what name he would like to be called, pulls a chair to his bedside so they are at eye level, and turns to face him directly before beginning the interview.",
        discriminator:
          "The opening choreography — name and preferred address, pronouns taken not assumed, eye level, near, facing directly",
        concept: "The Introduction technique",
        answer:
          "Introduction — “Introduce yourself and ask the patient their name and how they would like to be addressed. Address the patient by the name and pronouns given. Avoid making gender assumptions. Sit at eye level, near the patient, while facing them directly.”",
      },
      {
        stem: "At the start of a clinic visit, a physician says: “Before we start, I'd like to hear what's on your mind today, and we can plan together what to cover.” The patient names two concerns and they agree to address the more painful one first.",
        discriminator:
          "A joint plan built from the patient's concerns before any history-taking — “joint agenda between the physician and the patient”",
        concept: "Agenda setting",
        answer:
          "Agenda setting — “Identify concerns and set goals by developing joint agenda between the physician and the patient.” The patient's primary concern(s) get a guaranteed slot on a shared itinerary.",
      },
      {
        stem: "A patient just told she she has multiple sclerosis begins to cry and says she is terrified of ending up in a wheelchair. The physician sits with her and says: “I can see how frightening this is — the symptoms came on so fast, and that uncertainty is terrifying for anyone. Many people feel exactly this way when they hear news like this. We are going to work through the decisions together, step by step, and I want to connect you with our MS support group today.”",
        discriminator:
          "An emotion answered with named PEARLS moves — understanding the why, normalizing the response, staying together, offering a resource",
        concept: "Establishing rapport — the PEARLS framework",
        answer:
          "Empathy (acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way) + Legitimization (emotional responses are understandable or common) + Partnership and Support (work together through difficult times and offer appropriate resources) — four of First Aid's six PEARLS elements in one response.",
      },
      {
        stem: "A nonverbal patient with cerebral palsy arrives with her mother for a wound check. The physician greets the patient by name, faces her, and directs every question to her, turning to the mother only to ask whether she has noticed anything to add. At the door, the physician asks the patient whether she would like help with her coat.",
        discriminator:
          "Direct address to a nonverbal patient (no assumed non-understanding), the caregiver used as an ADDITION, and assistance offered rather than imposed",
        concept: "Communicating with patients with disabilities",
        answer:
          "The printed rules: “Under most circumstances, talk directly to the patient. Do not assume that nonverbal patients do not understand. Accompanying caregivers can add information to any discussion as needed” — and “Ask if assistance is desired rather than assuming the patient cannot do something alone. Most people, including people with disabilities, value their independence.”",
      },
    ],
    traps: [
      {
        a: "Empathy (PEARLS) — acknowledge the emotions displayed AND demonstrate understanding of why",
        b: "Legitimization (PEARLS) — assure patient that emotional responses are understandable or common",
        whyConfused:
          "Both answer an emotion and both sound kind; both sit inside PEARLS one letter apart, and Validation (the techniques block — “legitimize or affirm the patient’s perspectives”) uses the same verb “legitimize” that names Legitimization, stacking a third look-alike",
        keyDifference:
          "Empathy names the feeling and explains its cause (the WHY); Legitimization normalizes the response (“anyone would feel this way” — understandable or common) without explaining it; Validation affirms a PERSPECTIVE (a view or account), not a feeling",
        clue:
          "“I can see why you'd feel that way — this came on so suddenly” = Empathy. “Anyone in your position would feel this” = Legitimization. “You're right to be worried about the side effects — let's go over them” = Validation.",
      },
      {
        a: "Reflection — actively listen and synthesize what is OFFERED, particularly the primary concern(s)",
        b: "Recapitulation — summarize what the patient HAS SAID so far to ensure correct interpretation",
        whyConfused:
          "Both are listening moves that repeat the patient's material back; both live in the middle of the arc and both end the physician's turn with the patient's own words",
        keyDifference:
          "Reflection happens DURING the telling — it mirrors and organizes the information as it is offered; Recapitulation happens AFTER a stretch of history — it compresses the whole story so far and explicitly checks the physician's interpretation against the patient's",
        clue:
          "Mirroring one detail as it emerges (“the chest pain started Tuesday?”) = Reflection. “So far: Tuesday onset, pressure-like, worse with stairs, and you stopped your medication last month — did I get that right?” = Recapitulation.",
      },
      {
        a: "Facilitation — encourage the patient to speak freely WITHOUT guiding responses or leading questions",
        b: "Directed/leading questioning — “Does the pain feel sharp? Is it worse after meals?”",
        whyConfused:
          "Both keep the patient talking, and both look like ordinary clinical questioning; a stem can contain lots of questions and still be poor facilitation",
        keyDifference:
          "Facilitation is defined by what it AVOIDS: guiding responses and leading questions — it uses open-ended invitations (“Tell me more about that”) and allows the patient to ask questions throughout the encounter; leading questions pre-load the answer and distort the history",
        clue:
          "If the physician's question could be answered with a yes/no that confirms the physician's hypothesis, it is leading, not facilitating.",
      },
      {
        a: "Talk directly to the patient; do not assume nonverbal patients do not understand; caregivers ADD information as needed",
        b: "Address the accompanying caregiver, since the companion speaks more easily",
        whyConfused:
          "The caregiver route is faster and feels polite; the patient may even appear unresponsive, and the companion may answer first",
        keyDifference:
          "The printed default is direct address to the PATIENT under most circumstances — the caregiver's role is additive (“can add information to any discussion as needed”), never substitutive; assuming non-understanding from nonverbal status is the exact assumption the print forbids",
        clue:
          "Any disabilities vignette where the physician turns to the companion “since the patient can't really communicate” is the wrong answer — unless the PATIENT has stated a preference.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “which technique is the physician using?” option list mixing all six techniques",
        differentiator:
          "Route the quoted sentence through the arc: does it structure, listen, or open the door?",
        correctPath:
          "Structure: Introduction (name, pronouns, eye level) or Agenda setting (joint plan). Listen: Reflection (synthesize what's offered, primary concern(s)), Validation (affirm perspectives), or Recapitulation (summarize so far, check interpretation). Open door: Facilitation (free speech, no leading, questions anytime). Match the sentence's JOB, not its warmth.",
      },
      {
        lookAlike: "An emotional moment with answer options drawn from BOTH blocks (techniques and PEARLS)",
        differentiator:
          "Emotion → PEARLS; information → the techniques. If the patient is FEELING something, the six interviewing techniques are the distractors",
        correctPath:
          "Read what the patient displays: an emotion (crying, anger, fear) routes to Partnership / Empathy / Apology / Respect / Legitimization / Support; new information or a story routes to Reflection / Validation / Recapitulation; a chance to invite more routes to Facilitation.",
      },
      {
        lookAlike: "A disabilities vignette where every option is a kind action",
        differentiator:
          "The correct action ASKS or ADAPTS; the wrong ones ASSUME or OMIT",
        correctPath:
          "Ask the terms (person-first vs identity-first — the patient's choice), ask if assistance is desired (independence is valued), ask the preferred communication mode (deaf/hard of hearing); talk directly to the patient (nonverbal ≠ non-understanding; caregivers add); adapt the channel (extra time/write/repeat for speech; concrete simple language, quiet room, no assumed literacy for cognitive; light touch or waving, face the patient, no changed mode of speaking, consider an interpreter for deaf) — and never bring up an irrelevant disability, never skip relevant exam parts.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old woman who uses a wheelchair is seen for follow-up of her multiple sclerosis. The physician introduces herself, asks the patient what name she goes by, and pulls a stool to her side so they are at eye level, facing her directly. Together they list her three concerns and agree to start with her fear of disease progression. Mid-interview, told that her MRI shows two new lesions, the patient becomes tearful and says, “I don't know how much longer I'll be able to work.” The physician is silent for a moment, then says: “I can see how frightening this is — a new lesion right when you're carrying so much at work. Anyone in your position would feel exactly this way. We are going to plan the next steps together, at whatever pace you want, and I'd like to connect you with our MS support group and the occupational-health liaison today.” Before leaving, the physician asks whether she would like a hand with her coat, and performs the full neurologic exam, including the parts made harder by her spasticity.",
      question:
        "Which combination of the printed rapport elements does the physician's response to the patient's tearfulness demonstrate?",
      options: [
        {
          label: "A",
          text: "Empathy, Legitimization, Partnership, and Support",
          correct: true,
          why: "CORRECT — “I can see how frightening this is — [why] you're carrying so much at work” is Empathy (acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way). “Anyone in your position would feel exactly this way” is Legitimization (emotional responses are understandable or common). “We are going to plan the next steps together, at whatever pace you want” is Partnership (work together with patient to identify primary concerns and develop preferred solutions). “Connect you with our MS support group and the occupational-health liaison” is Support (work together through difficult times and offer appropriate resources). Four PEARLS elements, in the printed definitions.",
        },
        {
          label: "B",
          text: "Validation, Reflection, and Recapitulation",
          why: "TEMPTING but wrong — these are three of the six interviewing TECHNIQUES from the same page, and all three are listening moves, so they attract any warm stem. But Validation legitimizes or affirms the patient's PERSPECTIVES (a view or account), Reflection synthesizes information OFFERED (the history), and Recapitulation summarizes what has been said SO FAR to check interpretation. The physician's response names and explains an EMOTION and offers resources — it does not mirror history or summarize the record.",
        },
        {
          label: "C",
          text: "Apology and Respect",
          why: "TEMPTING but wrong — they are the two UNUSED PEARLS elements, so a “which elements” question loves them as complements. Apology is taking personal responsibility when appropriate (the physician made no error here — nothing to own). Respect is commending the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors — nothing in the quoted response commends a behavior.",
        },
        {
          label: "D",
          text: "Agenda setting and Facilitation",
          why: "TEMPTING but wrong — the vignette's OPENING did contain agenda work (listing her three concerns together), and the encounter was unhurried. But the question asks about the response to the TEARFULNESS. Agenda setting identifies concerns and sets goals by developing a joint agenda; Facilitation encourages free speech without leading questions and allows questions throughout — neither describes naming an emotion, normalizing it, planning together, or offering resources.",
        },
        {
          label: "E",
          text: "Introduction",
          why: "TEMPTING but wrong — the vignette's first sentences are a textbook Introduction (name, preferred address, eye level, facing directly), which makes this option feel anchored in the stem. But Introduction happened BEFORE the emotion; the response under test is the tearfulness answer. Introduction opens encounters; it does not answer feelings — that is PEARLS' job.",
        },
      ],
      reasoning:
        "The question tests block-routing: when a stem shows an EMOTION, the correct options come from PEARLS (the Establishing rapport block), not from the six interviewing techniques. Read the quoted response letter by letter: the feeling is named AND its cause is shown (Empathy), the response is normalized as common (Legitimization), the plan is joint and paced to the patient's preference (Partnership), and concrete resources are offered (Support). Option B fails because techniques answer information, not emotion; option C names the two PEARLS moves that are genuinely absent (no physician error to own, no behavior commended); option D and E quote earlier arc moves (the joint agenda, the introduction choreography) rather than the emotional response itself. The vignette's bookends — asking before helping with the coat and completing the full neurologic exam despite challenging spasticity — are the disabilities block's two boundary rules in action (ask if assistance is desired; do not skip relevant parts of the physical exam).",
    },
  },
  mnemonics: [
    {
      code: "PEARLS",
      meaning:
        "FIRST AID'S OWN acronym, printed in RED beside the “Establishing rapport” title with the six row terms' initial letters in red (VLM-confirmed, staging-pubh21/vlm-census.txt; carried verbatim, attributed): Partnership — work together with patient to identify primary concerns and develop preferred solutions; Empathy — acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way; Apology — take personal responsibility when appropriate; Respect — commend the patient for coming in to discuss a problem, pushing through challenging circumstances, keeping a positive attitude, or other constructive behaviors; Legitimization — assure patient that emotional responses are understandable or common; Support — reassure patient that you will work together through difficult times and offer appropriate resources.",
      memorizes:
        "The six rapport moves — the printed answer key for every “best response to an emotional patient” question",
      whenToUse:
        "Any stem in which the patient displays an emotion (fear, grief, anger, tears) and the options are physician responses; also “which element is demonstrated / missing” questions — check each letter against the quoted sentence.",
      clinical:
        "PEARLS is the rapport half of every real encounter (KYP context): the six techniques gather the data, PEARLS keeps the relationship that the data depends on — and the two unused letters (Apology, Respect) are exactly where exam writers hide their distractors.",
    },
    {
      code: "TWO TO STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR",
      meaning:
        "A KYP ORIGINAL — the 2+3+1 architecture of the six printed techniques in printed order: TWO TO STRUCTURE the encounter (Introduction — name, pronouns, eye level; Agenda setting — the joint agenda), THREE TO LISTEN (Reflection — synthesize what's offered, primary concern(s); Validation — affirm the perspectives; Recapitulation — summarize so far, check interpretation), ONE TO OPEN THE DOOR (Facilitation — free speech, no leading questions, questions allowed throughout).",
      memorizes:
        "All six patient-centered interviewing techniques in printed order, grouped by their job in the arc",
      whenToUse:
        "Any “which technique is this?” question — classify the quoted sentence's JOB first (structure, listen, or open the door), then pick the member; also any ordering question (the printed order IS the encounter order).",
      clinical:
        "The grouping mirrors real encounters (KYP context): the first two moves happen before the history begins, the middle three carry the history, and the last runs under everything else — a physician who never facilitates can finish a “complete” encounter having heard only what they asked for.",
    },
    {
      code: "ASK, DON'T ASSUME",
      meaning:
        "A KYP ORIGINAL — the disabilities page's own recurring grammar: three ASKS (ask what terms they use — person-first vs identity-first; ask if assistance is desired — independence is valued; ask their preferred mode of communication — deaf/hard of hearing) against three DO-NOT-ASSUMES (do not assume nonverbal patients do not understand; do not assume the patient cannot do something alone; do not assume the patient can read).",
      memorizes:
        "The universal layer of the disabilities block — every access question is asked, never assumed",
      whenToUse:
        "Any disabilities vignette: scan the options for the one that ASKS or ADAPTS versus the ones that ASSUME (about understanding, ability, literacy, or mode) — the asker is right with near-total reliability.",
      clinical:
        "The rule generalizes beyond disability (KYP context): asking preserves autonomy and gathers better data in every adapted encounter — terms, assistance, and channel are patient-specific facts, not physician inferences.",
    },
    {
      code: "TIME · SIMPLE · ATTENTION",
      meaning:
        "A KYP ORIGINAL — the three need-specific protocols keyed to their channel: SPEECH gets TIME (extra time; write down a few words or rephrase; repeat back what they said), COGNITIVE gets SIMPLE (concrete specific language; simple direct questions; eliminate background noise; do not assume the patient can read; adjust to how they understand best — hand gestures, demonstrate a task), DEAF/HARD OF HEARING gets ATTENTION (light touch or waving to get attention; then the channel: ask preferred mode, eliminate background noise for lipreading, face the patient, do not change your mode of speaking, consider an interpreter).",
      memorizes:
        "The three disability-specific interview protocols and their core moves",
      whenToUse:
        "Any stem naming a communication barrier (slurred or dysarthric speech, dementia or cognitive impairment, deafness or hard of hearing) — route to the protocol and check the options against its printed moves.",
      clinical:
        "Each protocol protects a different channel (KYP context): time protects the patient's authorship of their history; simplicity protects comprehension; attention protects the link itself — and all three end with the same boundary rules (never raise an irrelevant disability; never skip relevant exam parts).",
    },
  ],
  rapidReview: {
    s30: [
      "Introduction — introduce yourself, ask name and how they would like to be addressed, use the name and pronouns given, avoid gender assumptions, sit at eye level, near, facing directly",
      "Agenda setting — identify concerns and set goals by developing joint agenda between the physician and the patient (printed without an article — as printed)",
      "Reflection — actively listen and synthesize information offered, particularly with respect to primary concern(s)",
      "Validation — legitimize or affirm the patient's perspectives",
      "Recapitulation — summarize what the patient has said so far to ensure correct interpretation",
      "Facilitation — encourage free speech without guiding responses or leading questions; allow the patient to ask questions throughout",
      "PEARLS (First Aid's own, printed in red) — Partnership, Empathy, Apology, Respect, Legitimization, Support",
      "Disabilities — ask their terms (person-first vs identity-first), talk directly to the patient (nonverbal ≠ non-understanding; caregivers add), ask before assisting (independence), never raise an irrelevant disability, never skip relevant exam parts",
    ],
    m3: [
      "PEARLS — Partnership, Empathy, Apology, Respect, Legitimization, Support (First Aid's own, printed in red)",
      "TWO TO STRUCTURE, THREE TO LISTEN, ONE TO OPEN THE DOOR — the six techniques' 2+3+1 arc (KYP)",
      "ASK, DON'T ASSUME — the disabilities page's three asks vs three do-not-assumes (KYP)",
      "TIME · SIMPLE · ATTENTION — speech gets time, cognitive gets simple, deaf gets attention (KYP)",
    ],
    m10: [
      "The three affirm-look-alikes: Validation affirms PERSPECTIVES (a view); Empathy names the EMOTION and its WHY; Legitimization normalizes the RESPONSE (understandable or common) — the exam's favorite distinction on this page",
      "Reflection vs Recapitulation: reflection mirrors information AS it is offered (primary concern(s)); recapitulation compresses the story SO FAR to check interpretation — during vs after",
      "The disabilities boundary rules: do not bring up a disability if it is not relevant to a visit (printed example: a patient in a wheelchair with an ear infection); do not skip relevant parts of the physical exam even if the disability makes the exam challenging",
      "PEARLS' two most-tested members in practice: Empathy requires BOTH halves (acknowledge the emotion AND demonstrate understanding of why); Support requires BOTH halves (work together through difficult times AND offer appropriate resources) — half-responses are the classic distractor",
    ],
  },
  recall: [
    {
      q: "Name the six patient-centered interviewing techniques in printed order.",
      a: "Introduction, Agenda setting, Reflection, Validation, Recapitulation, Facilitation.",
    },
    {
      q: "What four things does the Introduction technique instruct, and how should the physician be positioned?",
      a: "Introduce yourself and ask the patient their name and how they would like to be addressed; address the patient by the name and pronouns given; avoid making gender assumptions; and sit at eye level, near the patient, while facing them directly.",
    },
    {
      q: "What does Agenda setting require, and whose concerns set it?",
      a: "Identify concerns and set goals by developing joint agenda between the physician and the patient — the agenda is joint, built from both parties' concerns and goals (printed verbatim, including the missing article before “joint agenda”).",
    },
    {
      q: "Which technique summarizes what the patient has said so far, and why?",
      a: "Recapitulation — to ensure correct interpretation (the play-back that lets the patient correct the record).",
    },
    {
      q: "What is PEARLS, whose acronym is it, and what does each letter stand for?",
      a: "The rapport framework printed beside “Establishing rapport” — First Aid's OWN acronym (printed in red, with red initial letters): Partnership (work together on primary concerns and preferred solutions), Empathy (acknowledge the emotions and the why), Apology (take personal responsibility when appropriate), Respect (commend constructive behaviors), Legitimization (responses are understandable or common), Support (work together through difficult times + offer appropriate resources).",
    },
    {
      q: "Distinguish Empathy from Legitimization in one sentence each.",
      a: "Empathy: acknowledge the emotions displayed and demonstrate understanding of why the patient is feeling that way. Legitimization: assure the patient that emotional responses are understandable or common. Empathy explains the why; legitimization normalizes the response.",
    },
    {
      q: "A patient identifies as “a disabled person,” not “a person with a disability.” What is the printed rule?",
      a: "Patients may identify with person-first (“a person with a disability”) or identity-first (“a disabled person”) language — ask patients what terms they use; the patient's own terms govern.",
    },
    {
      q: "List the printed adaptations for interviewing a patient with speech difficulties.",
      a: "Provide extra time for the interview; if speech is difficult to understand, ask them to write down a few words or rephrase their sentence; repeat what they said to ensure you understood it correctly.",
    },
    {
      q: "List the printed adaptations for a patient with cognitive impairment.",
      a: "Use concrete, specific language; ask simple, direct questions; eliminate background noise and distractions; do not assume the patient can read; adjust to how the patient understands best (eg, use hand gestures or ask them to demonstrate a task).",
    },
    {
      q: "List the printed adaptations for a patient who is deaf or hard of hearing.",
      a: "Ask their preferred mode of communication; use light touch or waving to get their attention; for patients who prefer to speak and lipread — eliminate background noise, face the patient, and do not change your mode of speaking; consider using an interpreter when necessary.",
    },
    {
      q: "What are the two printed “do not” rules at the end of the disabilities block?",
      a: "Do not bring up a disability if it is not relevant to a visit (eg, a patient in a wheelchair with an ear infection); do not skip relevant parts of the physical exam even if the disability makes the exam challenging.",
    },
  ],
  related: [
    {
      title: "Cultural formulation, trauma-informed care, and motivational interviewing",
      note:
        "The very next page of the chapter (book 272) opens the Cultural formulation interview: the patient's perspective, perceptions, background, and culture-first planning — this page's arc (introduce, set the joint agenda, reflect, facilitate) run across cultures, and motivational interviewing's open questions and reflective listening are Facilitation and Reflection wearing different scrubs. (A sibling topic of this same batch — referenced by design.)",
      topicId: "cultural-competence-interviewing",
    },
    {
      title: "Interpreters and breaking bad news",
      note:
        "This page prints the interpreter rule in miniature (“Consider using an interpreter when necessary,” after asking the preferred mode of communication) and the rapport moves that bad-news delivery runs on — Empathy, Legitimization, and Support are exactly what a difficult disclosure moment calls for; the full interpreter-positioning and bad-news protocols extend this page.",
      topicId: "interpreters-bad-news",
    },
    {
      title: "Challenging scenarios",
      note:
        "The PEARLS grammar is the toolkit when the encounter goes wrong: Apology (personal responsibility when appropriate) and Respect (commend constructive behaviors) are the printed moves for repairing friction, and Facilitation's no-leading rule is the antidote to the coercive or directive patterns that challenging patients provoke.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Core ethical principles",
      note:
        "Patient-centered interviewing is autonomy operationalized: the joint agenda is shared decision-making, the name-and-pronouns rule is respect for persons, and the disabilities block (ask the terms, ask before assisting, talk to the patient) is autonomy applied where access is unequal — the ethics page supplies the principles this page scripts.",
      topicId: "core-ethical-principles",
    },
  ],
  crossLinks: [
    {
      subject: "Behavioral science and psychiatry — motivational interviewing and psychotherapeutic listening",
      connection:
        "The listening core printed here is the same grammar taught with behavior-change counseling: Facilitation's open-ended, non-leading invitations and Reflection's active listening are the questioning half of motivational interviewing's OARS, and Recapitulation is the summarizing half — the exam can (and does) test both languages with the same vignette.",
    },
    {
      subject: "Ethics — autonomy, informed consent, and capacity",
      connection:
        "Agenda setting (a joint agenda between the physician and the patient) is shared decision-making, and the whole arc presupposes the patient's authority over their own concerns and terms — the same autonomy that informed consent formalizes; a patient who cannot run this arc (capacity questions) is exactly when consent itself comes into question.",
    },
    {
      subject: "Neurology — dementia, delirium, and cognitive impairment",
      connection:
        "The cognitive-impairment protocol (concrete specific language, simple direct questions, eliminate background noise, do not assume the patient can read, adjust to how the patient understands best) is the communication corollary of the cognition workup: the same diseases that lower MMSE scores require this adapted interview to history-take and consent at all.",
    },
    {
      subject: "Otolaryngology and audiology — hearing loss",
      connection:
        "The deaf/hard-of-hearing protocol (ask the preferred mode, light touch or waving, eliminate background noise, face the patient, do not change your mode of speaking, consider an interpreter) is the communication half of hearing-loss management — conductive vs sensorineural workups decide the treatment, but this page decides whether the patient ever hears the plan.",
    },
  ],
};
