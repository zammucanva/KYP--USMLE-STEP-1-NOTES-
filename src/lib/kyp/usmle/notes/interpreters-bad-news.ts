import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic interpreters-bad-news. Source: FULL pdf
// page 295 / book 273 (Part 1), the THIRD page under the COMMUNICATION SKILLS
// banner (pdf 293 = the subsection opener, book 271 — patient-centered
// interviewing; pdf 294 = book 272 — cultural formulation, trauma-informed
// care, motivational interviewing, inclusive history taking; pdf 296 = book
// 274 — challenging scenarios: separate topics). The topic owns the WHOLE
// page, which carries TWO side-head blocks: (1) "Use of interpreters" — SIX
// printed paragraphs: the professionally-trained-interpreter default with the
// conversational-fluency exception, the telephone/video-call fallback, the
// family-member preference recorded in the chart, the do-not-assume
// (name/skin tone/accent) language-ask rule, the direct-speech rule (eye
// contact, no third-person "tell him"), the pace rule (extra time, one
// question at a time), the positioning rule (spoken-language interpreter
// next to or slightly behind the PATIENT; sign-language interpreter next to
// or slightly behind the PHYSICIAN), and the emergency any-tools override
// (friends, family, sketches, interpreter apps); (2) "Delivering bad news" —
// SPIKES, First Aid's OWN acronym, printed in BOLD RED as the block's
// lead-in, with six station labels (Setting, Perception, Invitation,
// Knowledge, Emotions, Strategy) each printing an enlarged RED initial
// letter + bold navy remainder, and each station's body carried VERBATIM in
// the note's second table block. CENSUS (pdfimages): ZERO raster images —
// pure text, no figures, the indd footer slug. VLM AVAILABLE this session
// (glm-4.6v at 120dpi, ONE full-page pass, staging-pubh23/vlm-census.txt),
// confirming: the "▶ PUBLIC HEALTH SCIENCES—COmmUNICATION SkILLS" banner
// prints ONCE (in the running header only — page 295 is NOT the subsection
// opener; the opener pdf 293 prints it twice: running header + in-body
// ribbon); both block headings are bold navy side-heads; "SPIKES" is bold
// RED plain text to the right of the "Delivering bad news" heading (not
// boxed); the six station labels carry enlarged red initial letters; no
// margin notes or mnemonics beyond SPIKES itself, no asterisk footnotes, no
// images, no boxes or shading; NO line-wrap hyphenation anywhere
// (whole-word wraps only — VLM-checked). PRINTED-TEXT QUIRKS carried +
// documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) small-caps extraction artifact "COmmUNICATION SkILLS"
// in the banner (the print uses small caps; the text layer drops the 'm'
// and 'k' to lowercase — carried as extracted); (3) the typographic quotes
// around “tell him.” are as printed; (4) the indd footer slug
// "FAS1_2026_06-PubHealth.indd 273" + timestamp "12/16/25 12:46 PM".
// ADJUDICATIONS (documented in the manifest too): (A) the batch brief's
// block descriptions matched the print EXACTLY — both blocks, every
// sentence, both interpreter positions, all six SPIKES stations — no
// corrections needed (unlike the pubh1 compare-label swap); (B) the banner
// count is pinned by the raw text layer + the VLM pass: ONE instance on
// this page (the running header), because pdf 295 is the third page of the
// subsection, not its opener — documented so the note does not repeat the
// "prints twice" claim that governs the subsection opener (pdf 293).
// PROVENANCE SPLIT: verbatim = the two block headings, all six interpreter
// paragraphs, SPIKES + the six station labels and their bodies (all carried
// in the two table blocks); FA-own = the SPIKES acronym itself and the
// red-initial station-label device (attributed everywhere it appears);
// KYP-original = the fallback-ladder organization, the positioning-mirror
// framing, the ask/eye/one/extra conduct grammar, the station-router exam
// layer, and the three KYP mnemonics ("PRO, PHONE, FAMILY — CHARTED",
// "SPOKEN to the PATIENT, SIGNED to the PHYSICIAN", "ASK · EYE · ONE ·
// EXTRA") — every teaching generalization beyond the printed page is
// flagged as KYP context. DrugCards: none — the page prints communication
// protocols, not drugs (documented as folded-by-absence in the manifest).
// The next page (pdf 296, book 274) opens the two-page challenging patient
// and ethical scenarios table — the response-principles continuation, a
// separate topic.

export const interpretersBadNews: KypUsMLENote = {
  id: "interpreters-bad-news",
  title: "Interpreters and Delivering Bad News: SPIKES",
  subtitle:
    "One page, two protocols for the hardest conversations in medicine. The first block governs the visit that crosses a language barrier: a patient who speaks little English gets a professionally trained medical interpreter unless the physician is conversationally fluent in the patient's preferred language — never a guess from name, skin tone, or accent, because the first move is to ask what language is preferred. If no interpreter is available in person, interpretation services may be provided by telephone or video call; if the patient prefers a family member, that preference is recorded in the chart. The physician then runs the encounter as a two-person conversation — eye contact with the patient, speaking to them directly, no third-person statements such as “tell him,” extra time, one question at a time — with the interpreter physically staged by rule: next to or slightly behind the patient for spoken language, next to or slightly behind the physician for sign language, and in emergencies any tool available (friends, family, sketches, interpreter apps) even though that is not standard procedure. The second block is First Aid's own six-station protocol for delivering bad news — SPIKES, printed in bold red: Setting, Perception, Invitation, Knowledge, Emotions, Strategy. Set the stage before the news, learn what the patient already understands, ask permission and how much detail they want, share the information in small pieces without jargon, acknowledge the emotions before planning, and only then — if the patient feels ready — hand them control of the strategy.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Communication Skills",
  pilotCategory:
    "Public Health Sciences — Communication Skills: the interpreter protocol (professionally trained medical interpreters with the conversational-fluency exception, telephone/video fallback, family-member preference charted, the never-assume language-ask rule, direct address without third-person statements, extra time and one question at a time, spoken-vs-sign interpreter positioning, emergency any-tools override) and First Aid's own SPIKES bad-news protocol (all six stations with their printed moves, the acronym attributed as FA's own).",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 273–273 (Communication Skills: Use of interpreters; Delivering bad news)",
  tags: [
    "use of interpreters",
    "medical interpreters",
    "interpreter positioning",
    "sign language interpretation",
    "deaf and hard of hearing",
    "limited English proficiency",
    "telephone interpretation",
    "video interpretation",
    "family member interpreter",
    "delivering bad news",
    "SPIKES",
    "Setting",
    "Perception",
    "Invitation",
    "Knowledge",
    "Emotions",
    "Strategy",
    "empathy",
    "patient-centered communication",
    "communication skills",
    "health equity",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Use of interpreters”: visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient’s preferred language; if an interpreter is unavailable in person, interpretation services may be provided by telephone or video call; if the patient prefers to utilize a family member, this should be recorded in the chart. Do not assume that a patient is a poor English speaker because of name, skin tone, or accent — ask the patient what language is preferred. The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as “tell him.” Allow extra time for the interview, and ask one question at a time. For in-person spoken language interpretation, the interpreter should ideally be next to or slightly behind the patient; for sign language interpretation, the interpreter should be next to or slightly behind the physician. In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise. BLOCK 2 — “Delivering bad news: SPIKES” (First Aid’s own acronym): Setting — offer in advance for the patient to bring support; eliminate distractions, ensure privacy, and sit down with the patient to talk. Perception — determine the patient’s understanding and expectations of the situation. Invitation — obtain the patient’s permission to disclose the news and what level of detail is desired. Knowledge — share the information in small pieces without medical jargon, allowing time to process; assess the patient’s understanding. Emotions — acknowledge the patient’s emotions, and provide opportunity to express them; listen and offer empathetic responses. Strategy — if the patient feels ready, discuss treatment options and goals of care; offer an agenda for the next appointment; giving control to the patient may be empowering; ask how they feel a problem might be solved and what they would like to do about the plan of action.",
    why:
      "This page exists because both of medicine's highest-stakes conversations fail in predictable ways when they are improvised. Across a language barrier, the failure modes are guessing the patient's language from appearance (the print's own prohibition: name, skin tone, or accent), handing the encounter to an untrained relative, and talking past the patient in the third person — each one trades accuracy and patienthood for convenience, which is why the print installs a professional interpreter as the default, documents any family-member substitution, and keeps the physician speaking directly to the patient with the interpreter staged by rule. The positioning rule is the print's quiet clinical engineering: the spoken-language interpreter sits with the PATIENT because the patient is the person whose words need carrying; the sign-language interpreter sits with the PHYSICIAN because the patient must watch the physician's face while the interpreter's hands carry the words from the physician's side of the sightline (the sightline logic is KYP context; the positions are printed). SPIKES then protects the other hard conversation — bad news — by forcing an order on it: the Setting is prepared before a word is said; Perception and Invitation come before Knowledge so the physician calibrates and obtains permission rather than ambushing; Knowledge arrives in small pieces without jargon and is checked; Emotions are cleared before Strategy, because a patient in shock cannot weigh treatment options; and Strategy explicitly returns control to the patient, which the print itself calls empowering.",
    keyIdea:
      "Two checklists, one habit: PROTECT THE RELATIONSHIP, THEN PROTECT THE ORDER. THE INTERPRETER VISIT — (1) ASK, never assume: the language is asked about, not inferred from name, skin tone, or accent. (2) THE LADDER: professionally trained medical interpreter in person → telephone or video call if unavailable → family member if the PATIENT prefers (recorded in the chart); the physician interprets personally only if CONVERSATIONALLY FLUENT in the patient's preferred language. (3) THE CONDUCT: eye contact, speak directly to the patient, no third-person “tell him”; extra time; ONE question at a time. (4) THE POSITIONS: spoken-language interpreter next to or slightly BEHIND THE PATIENT; sign-language interpreter next to or slightly BEHIND THE PHYSICIAN. (5) THE OVERRIDE: emergencies use any tools available — friends, family, sketches, interpreter apps — even though that is not standard procedure otherwise. THE BAD-NEWS VISIT — SPIKES, in order, no skips: Setting (support offered in advance, distractions eliminated, privacy, sit down) → Perception (what does the patient understand and expect?) → Invitation (permission to disclose; how much detail?) → Knowledge (small pieces, no jargon, time to process, check understanding) → Emotions (acknowledge, allow expression, listen, empathize) → Strategy (only if the patient feels ready: options, goals of care, an agenda for the next appointment, control handed back). If a vignette shows a doctor ASKING permission or CALIBRATING understanding, it is Invitation or Perception — not Knowledge; if it shows plans being discussed while the patient is crying, Emotions was skipped.",
  },
  mechanisms: [
    {
      id: "interpreter-visit-flow",
      title:
        "The visit across the language barrier: how the interpreter ladder, the conduct rules, and the positioning mirror keep the encounter doctor–patient",
      context:
        "The printed “Use of interpreters” block (book 273): six paragraphs, one protocol",
      flow: {
        nodes: [
          {
            id: "visit",
            label: "THE TRIGGER — a patient who speaks little English",
            sublabel:
              "Input — the printed opening condition: “Visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient’s preferred language.” The entire protocol hangs off this one sentence: the default (a professional), the exception (the physician’s own conversational fluency), and the person whose preference governs (the patient’s).",
            variant: "input",
          },
          {
            id: "ask",
            label: "STATION 0 — IDENTIFY THE LANGUAGE: ask, never assume",
            sublabel:
              "Process — “Do not assume that a patient is a poor English speaker because of name, skin tone, or accent. Ask the patient what language is preferred.” The printed rule runs BEFORE the ladder: the need for an interpreter is established by asking, not by profiling — a Spanish surname can belong to a monolingual English speaker and an English name to a monolingual Spanish speaker (the asymmetry is KYP context; the prohibition is printed).",
            variant: "process",
          },
          {
            id: "ladder",
            label: "STATION 1 — THE LADDER: professional → telephone/video → family member (charted)",
            sublabel:
              "Process — “If an interpreter is unavailable in person, interpretation services may be provided by telephone or video call. If the patient prefers to utilize a family member, this should be recorded in the chart.” The KYP reading: a three-rung fallback with a paper trail — the in-person professional is the gold standard, remote services preserve the professional when the person cannot come, and the family member is a PATIENT-CHOSEN substitution that is documented, not a default (KYP framing of the printed sequence).",
            variant: "process",
          },
          {
            id: "conduct",
            label: "STATION 2 — THE CONDUCT: direct address, one question, extra time",
            sublabel:
              "Process — “The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as ‘tell him.’ Allow extra time for the interview, and ask one question at a time.” The interpreter is a channel, not a participant: the conversation stays two-person (physician ↔ patient), slowed and chunked so meaning survives the translation hop (the framing is KYP; every rule is printed).",
            variant: "process",
          },
          {
            id: "position",
            label: "STATION 3 — THE POSITIONS: the spoken/sign mirror",
            sublabel:
              "Process — “For in-person spoken language interpretation, the interpreter should ideally be next to or slightly behind the patient. For sign language interpretation, the interpreter should be next to or slightly behind the physician.” The mirror is the exam's favorite line on the page: SPOKEN interprets from the patient's side, SIGN from the physician's — because the deaf or hard-of-hearing patient watches the physician's face while receiving the physician's words from the interpreter's hands (sightline logic: KYP context; the positions themselves are printed verbatim).",
            variant: "process",
          },
          {
            id: "emergency",
            label: "STATION 4 — THE OVERRIDE: emergencies use any tools",
            sublabel:
              "Process — “In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise.” The emergency clause deliberately relaxes the ladder: friends, family, sketches, and interpreter apps are all legitimate WHEN minutes matter, and illegitimate as routine (the “even though” is the print's own boundary-drawing).",
            variant: "process",
          },
          {
            id: "yield",
            label: "THE YIELD — a visit that stays doctor–patient",
            sublabel:
              "Output — with the language asked, a professional engaged (or the substitution charted), the speech direct, the pace chunked, and the interpreter staged by rule, the encounter keeps what a language barrier threatens to take: accuracy of the history, informed participation, and the patient's place as the person the physician is actually talking to (KYP synthesis of the printed rules).",
            variant: "output",
          },
        ],
        edges: [
          { from: "visit", to: "ask", label: "before anything is assumed →" },
          { from: "ask", to: "ladder", label: "preferred language known →" },
          { from: "ladder", to: "conduct", label: "interpreter engaged →" },
          { from: "conduct", to: "position", label: "in person: stage the room →" },
          { from: "visit", to: "emergency", label: "emergency? bypass the ladder →" },
          { from: "ask", to: "yield", label: "asked, not assumed" },
          { from: "ladder", to: "yield", label: "professional or charted choice" },
          { from: "conduct", to: "yield", label: "direct, chunked speech" },
          { from: "position", to: "yield", label: "spoken: patient side · sign: physician side" },
          { from: "emergency", to: "yield", label: "any tool when minutes matter" },
        ],
      },
    },
    {
      id: "spikes-flow",
      title:
        "SPIKES: why the six stations are ordered — stage, calibrate, permit, disclose, clear the emotion, return control",
      context:
        "The printed “Delivering bad news: SPIKES” block (book 273) — First Aid's own acronym, printed bold red, six stations with their printed moves",
      flow: {
        nodes: [
          {
            id: "news",
            label: "THE NEWS — information the patient will receive as bad",
            sublabel:
              "Input — the block opens on a task, not a definition: news must be delivered — a new serious diagnosis, a progression, a poor prognosis — and the protocol exists because the unscripted version fails (dumping jargon, skipping permission, planning over tears are the failure modes; KYP framing). First Aid's own answer is the acronym SPIKES, printed in bold red with red-initial station labels — carried here attributed.",
            variant: "input",
          },
          {
            id: "setting",
            label: "S — SETTING: prepare the stage before a word is said",
            sublabel:
              "Process — “Offer in advance for the patient to bring support. Eliminate distractions, ensure privacy, and sit down with the patient to talk.” The printed moves are all environmental: the patient is never alone unless they choose to be, the room is private and quiet, and the physician sits — eye level, unhurried (the posture reading is KYP context; every move is printed).",
            variant: "process",
          },
          {
            id: "perception",
            label: "P — PERCEPTION: determine understanding and expectations first",
            sublabel:
              "Process — “Determine the patient’s understanding and expectations of the situation.” Before disclosing, the physician finds out what the patient already knows and expects — the calibration that decides how much correcting the Knowledge station must do, and the printed move that exam stems describe as asking the patient what they understand about their illness.",
            variant: "process",
          },
          {
            id: "invitation",
            label: "I — INVITATION: permission and the level of detail",
            sublabel:
              "Process — “Obtain the patient’s permission to disclose the news and what level of detail is desired.” Autonomy comes before information: the patient decides whether to receive the news now and in how much depth — the printed counterweight to well-meant ambush disclosure (KYP framing of the printed rule).",
            variant: "process",
          },
          {
            id: "knowledge",
            label: "K — KNOWLEDGE: small pieces, no jargon, time to process, check",
            sublabel:
              "Process — “Share the information in small pieces without medical jargon, allowing time to process. Assess the patient’s understanding.” The disclosure itself is chunked and plain-language, paced with pauses, and closed with a comprehension check — the same assess-understanding move that returns in consent and capacity contexts (the consent bridge is KYP; the printed moves are verbatim).",
            variant: "process",
          },
          {
            id: "emotions",
            label: "E — EMOTIONS: acknowledge, allow, listen, empathize — before any plan",
            sublabel:
              "Process — “Acknowledge the patient’s emotions, and provide opportunity to express them. Listen and offer empathetic responses.” The station that blocks the most common exam error: moving to treatment while the patient is still absorbing the news. Emotion is handled where it arises — named, given room, received with empathy (the ordering logic is KYP context; the moves are printed).",
            variant: "process",
          },
          {
            id: "strategy",
            label: "S — STRATEGY: if the patient feels ready, hand control back",
            sublabel:
              "Process — “If the patient feels ready, discuss treatment options and goals of care. Offer an agenda for the next appointment. Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.” Strategy is explicitly gated on readiness, and its printed closing moves are questions that put the patient in charge — the print itself says the giving of control “may be empowering.”",
            variant: "process",
          },
          {
            id: "order",
            label: "THE ORDER — the KYP reading of why the stations cannot swap",
            sublabel:
              "Output — stage before speech (Setting), calibrate before content (Perception), permission before disclosure (Invitation), chunk before check (Knowledge), emotion before plan (Emotions), control before close (Strategy). Any vignette that shows a physician skipping a station — planning over tears, disclosing without permission, jargon-dumping in a hallway — is pointing at the station that was skipped (KYP synthesis; the stations and their moves are the print's own).",
            variant: "output",
          },
        ],
        edges: [
          { from: "news", to: "setting", label: "first: prepare the room →" },
          { from: "setting", to: "perception", label: "stage set →" },
          { from: "perception", to: "invitation", label: "understanding known →" },
          { from: "invitation", to: "knowledge", label: "permission + detail level →" },
          { from: "knowledge", to: "emotions", label: "news given, in pieces →" },
          { from: "emotions", to: "strategy", label: "emotion cleared, if ready →" },
          { from: "strategy", to: "order", label: "control returned" },
          { from: "news", to: "order", label: "the six stations, unskippable (KYP)" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bad-news-map",
      title:
        "The interpreter protocol and the SPIKES six-station rail (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 273's two blocks. ZONE A — the interpreter protocol: the fallback ladder (professionally trained medical interpreter in person → telephone or video call → family member if the patient prefers, recorded in the chart → emergencies: any tools available — friends, family, sketches, interpreter apps), the language-ask rule card (“Do not assume… because of name, skin tone, or accent. Ask the patient what language is preferred.”), the direct-speech rule card with the conduct chips (eye contact, speak directly — no third-person “tell him”; extra time; one question at a time), and the two positioning diagrams (spoken-language interpretation: the interpreter next to or slightly behind the PATIENT; sign-language interpretation: the interpreter next to or slightly behind the PHYSICIAN). ZONE B — the SPIKES rail (attributed to First Aid, which prints the acronym in bold red with red-initial station labels): six station cards S-P-I-K-E-S, each with its printed key moves, plus the KYP order strip (stage → calibrate → permit → disclose in pieces → clear the emotion → return control).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 295 — the page's assets are pure text in a side-head layout (two bold navy block headings; “SPIKES” in bold red; enlarged red initial letters on the six station labels — VLM-read at 120dpi, staging-pubh23/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the ladder, the rule cards, the positioning diagrams (physician/patient/interpreter figures with sightline arrows), and the six-station rail are KYP's artwork and layout; every printed rule, position, and station move is preserved from the print, and both blocks are additionally carried VERBATIM in the note's two table blocks. SPIKES is First Aid's own acronym — attributed in the rail's header, not claimed as KYP's.",
    },
    {
      kind: "table",
      title:
        "Book 273 — the printed “Use of interpreters” block, carried verbatim (six printed paragraphs; the left column's rule names are KYP labels)",
      intro:
        "The page's first block in a side-head layout: the heading “Use of interpreters” (bold navy) with six paragraphs of body text. Every sentence below is the print's own; the short rule names in the left column are KYP labels added for retrieval — flagged as such. Printed quirks documented: the typographic quotes around “tell him.” are as printed; no line-wrap hyphenation occurs anywhere in this block (whole-word wraps only, VLM-checked).",
      columns: ["PRINTED RULE (KYP label)", "THE PRINTED TEXT — verbatim"],
      rows: [
        [
          "WHO INTERPRETS — the professional default, the fluency exception, the family-member substitution",
          "Visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient’s preferred language. If an interpreter is unavailable in person, interpretation services may be provided by telephone or video call. If the patient prefers to utilize a family member, this should be recorded in the chart.",
        ],
        [
          "THE LANGUAGE-ASK RULE — never assume",
          "Do not assume that a patient is a poor English speaker because of name, skin tone, or accent. Ask the patient what language is preferred.",
        ],
        [
          "THE DIRECT-SPEECH RULE — no third person",
          "The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as “tell him.”",
        ],
        [
          "THE PACE RULE — extra time, one question at a time",
          "Allow extra time for the interview, and ask one question at a time.",
        ],
        [
          "THE POSITIONING RULE — the spoken/sign mirror",
          "For in-person spoken language interpretation, the interpreter should ideally be next to or slightly behind the patient. For sign language interpretation, the interpreter should be next to or slightly behind the physician.",
        ],
        [
          "THE EMERGENCY OVERRIDE — any tools available",
          "In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise.",
        ],
      ],
      caption:
        "Verbatim carry, documented: all six paragraphs in printed order (VLM-confirmed — none missing or extra). The opening sentence carries three rules at once: the professional-interpreter DEFAULT, the conversational-fluency EXCEPTION (the physician's own fluency, not “some Spanish”), and the trigger condition (a patient who speaks little English). The family-member sentence is permissive and documented — “If the patient prefers” — it is the patient's choice, and it is recorded in the chart. The positioning paragraph is the printed source of the spoken-vs-sign mirror: spoken → patient's side; sign → physician's side. The emergency sentence's own boundary: “even though they do not comprise standard procedure otherwise.”",
    },
    {
      kind: "table",
      title:
        "Book 273 — the printed “Delivering bad news” block: SPIKES, carried verbatim (First Aid's own acronym, attributed)",
      intro:
        "The page's second block: the heading “Delivering bad news” (bold navy) with “SPIKES” printed in BOLD RED beside it, followed by six stations — each label printing an enlarged RED initial letter with a bold navy remainder (the print's own acronym device, VLM-confirmed). SPIKES is First Aid's own mnemonic — carried VERBATIM and ATTRIBUTED everywhere it appears in this note. Each station's body below is the print's own, in printed order.",
      columns: [
        "STATION — SPIKES (First Aid's own)",
        "THE PRINTED MOVES — verbatim",
      ],
      rows: [
        [
          "S — Setting",
          "Offer in advance for the patient to bring support. Eliminate distractions, ensure privacy, and sit down with the patient to talk.",
        ],
        [
          "P — Perception",
          "Determine the patient’s understanding and expectations of the situation.",
        ],
        [
          "I — Invitation",
          "Obtain the patient’s permission to disclose the news and what level of detail is desired.",
        ],
        [
          "K — Knowledge",
          "Share the information in small pieces without medical jargon, allowing time to process. Assess the patient’s understanding.",
        ],
        [
          "E — Emotions",
          "Acknowledge the patient’s emotions, and provide opportunity to express them. Listen and offer empathetic responses.",
        ],
        [
          "S — Strategy",
          "If the patient feels ready, discuss treatment options and goals of care. Offer an agenda for the next appointment. Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.",
        ],
      ],
      caption:
        "Verbatim carry, documented: all six stations in printed order, every move preserved (VLM-confirmed). The print's own structure notes: Setting's moves are all environmental (support offered in advance, distractions, privacy, sitting down); Perception and Invitation both precede Knowledge — calibration and permission come before disclosure; Knowledge carries its own comprehension check (“Assess the patient’s understanding.”); Emotions precede Strategy; and Strategy is explicitly gated (“If the patient feels ready”) and ends by handing the plan to the patient (“Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.”). The acronym SPIKES itself and the red-initial label device are First Aid's own, not KYP's.",
    },
    {
      kind: "list",
      title:
        "The decoder — both protocols compressed to their exam-decision core (KYP's reading of the page)",
      intro:
        "Each printed rule and station reduced to the decision it forces in a vignette. This is the layer to recall when a stem shows an interpreter being arranged, a room being staged, or a physician choosing the next sentence in a bad-news conversation.",
      items: [
        {
          lead: "INTERPRETER RULE 1 — THE DEFAULT IS PROFESSIONAL, THE EXCEPTION IS FLUENCY",
          text: "A patient who speaks little English gets a professionally trained medical interpreter; the only physician-qualified exception is conversational fluency in the patient's preferred language. The exam's version of the trap: “the physician took two semesters of Spanish” — that is not conversational fluency, so the interpreter is still required (the fluency bar is the print's own word “conversationally”).",
        },
        {
          lead: "INTERPRETER RULE 2 — THE LADDER AND THE PAPER TRAIL",
          text: "In person first; if unavailable in person, interpretation services may be provided by telephone or video call; if the patient prefers to utilize a family member, this should be recorded in the chart. Three rungs, one chart note — remote services preserve the professional; the family member is the patient's documented choice, not the default.",
        },
        {
          lead: "INTERPRETER RULE 3 — ASK, NEVER PROFILE",
          text: "Do not assume that a patient is a poor English speaker because of name, skin tone, or accent — ask the patient what language is preferred. Any stem that has the physician inferring language from appearance is already wrong, whatever the options say.",
        },
        {
          lead: "INTERPRETER RULE 4 — THE CONVERSATION STAYS TWO-PERSON",
          text: "Eye contact with the patient, speaking to them directly, no third-person statements such as “tell him,” extra time for the interview, and one question at a time. The interpreter is infrastructure; the relationship is physician–patient (KYP framing of the printed conduct rules).",
        },
        {
          lead: "INTERPRETER RULE 5 — THE POSITIONING MIRROR (the exam's favorite)",
          text: "Spoken-language interpretation, in person: the interpreter ideally next to or slightly behind the PATIENT. Sign-language interpretation: the interpreter next to or slightly behind the PHYSICIAN. Mirror rule, opposite anchors — and the deaf or hard-of-hearing patient keeps watching the physician while the interpreter signs from the physician's side (sightline logic: KYP context; the positions are printed verbatim).",
        },
        {
          lead: "INTERPRETER RULE 6 — EMERGENCIES OPEN THE TOOLBOX",
          text: "In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise. The override is real but bounded — it exists for minutes-matter situations, not for routine convenience.",
        },
        {
          lead: "SPIKES — SIX STATIONS, ORDERED AND GATED",
          text: "Setting (support in advance, no distractions, privacy, sit down) → Perception (understanding and expectations) → Invitation (permission + level of detail) → Knowledge (small pieces, no jargon, time, check) → Emotions (acknowledge, allow, listen, empathize) → Strategy (if the patient feels ready: options, goals of care, next-appointment agenda, control returned). First Aid's own acronym — the bold-red print makes it the page's flagship mnemonic (attributed).",
        },
        {
          lead: "THE TWO CROSS-PROTOCOL HABITS (KYP)",
          text: "Both blocks teach the same two moves: ASK before assuming (language preference; understanding and expectations; permission and detail level) and SLOW DOWN (one question at a time; small pieces without jargon; time to process). The interpreter block applies them to the language barrier; SPIKES applies them to the emotional barrier (KYP synthesis across the printed blocks).",
        },
      ],
    },
    {
      kind: "steps",
      title:
        "Running the interpreter visit, start to finish — the printed rules in execution order",
      intro:
        "The six printed paragraphs rearranged into the sequence an actual encounter follows — every step's content is the print's own; the sequencing is KYP's.",
      steps: [
        {
          label: "STEP 1 — ESTABLISH THE LANGUAGE BY ASKING",
          detail:
            "Before arranging anything, ask the patient what language is preferred — never assume from name, skin tone, or accent. The answer defines both the need (“speaks little English”) and the tool (the right interpreter).",
        },
        {
          label: "STEP 2 — ENGAGE THE LADDER",
          detail:
            "Arrange a professionally trained medical interpreter in the patient's preferred language — unless you are conversationally fluent in it yourself. If no interpreter is available in person, arrange interpretation services by telephone or video call. If the patient prefers to utilize a family member, honor the preference and record it in the chart.",
        },
        {
          label: "STEP 3 — STAGE THE ROOM",
          detail:
            "Position the interpreter by rule: next to or slightly behind the patient for in-person spoken language interpretation; next to or slightly behind the physician for sign language interpretation. The physician and the patient face each other.",
        },
        {
          label: "STEP 4 — RUN THE ENCOUNTER IN DIRECT SPEECH",
          detail:
            "Make eye contact with the patient and speak to them directly — you, not the interpreter, are the speaker; no third-person statements such as “tell him.” Allow extra time for the interview, and ask one question at a time.",
        },
        {
          label: "STEP 5 — IF IT BECOMES AN EMERGENCY, OPEN THE TOOLBOX",
          detail:
            "In cases of emergency, facilitate communication by any tools available — friends, family, sketches, interpreter apps — even though they do not comprise standard procedure otherwise. Document the circumstances and restore the standard protocol once the emergency resolves (the restore step is KYP practice context).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The positioning mirror — spoken-language vs sign-language interpretation, in the print's own words",
      intro:
        "The single most-tested sentence pair on the page: where the interpreter stands depends on which language is being interpreted, and the two answers are mirror images. Everything in the “why” row is KYP context — the print gives the positions without the sightline reasoning.",
      columns: [
        "Spoken-language interpretation (in person)",
        "Sign-language interpretation",
      ],
      rows: [
        {
          label: "Where the interpreter should ideally be",
          a: "“Next to or slightly behind the patient”",
          b: "“Next to or slightly behind the physician”",
        },
        {
          label: "The printed sentence",
          a: "“For in-person spoken language interpretation, the interpreter should ideally be next to or slightly behind the patient.”",
          b: "“For sign language interpretation, the interpreter should be next to or slightly behind the physician.”",
        },
        {
          label: "Why (KYP context, not printed)",
          a: "The patient is the one whose words need carrying: the interpreter voices the patient's language from the patient's side, so the physician keeps talking to the patient and the patient's answers return through the interpreter without the physician's gaze ever leaving the patient.",
          b: "The deaf or hard-of-hearing patient must keep their eyes on the physician's face (expression, lip movement, eye contact) while receiving the physician's words in sign — so the interpreter's hands work from the physician's side, inside the patient's sightline.",
        },
        {
          label: "The exam tell",
          a: "A stem arranging an in-person Spanish, Mandarin, or Vietnamese interpreter → the interpreter sits with the PATIENT.",
          b: "A stem arranging an ASL interpreter → the interpreter sits with the PHYSICIAN. Swap the two and the answer is wrong — the mirror is the point.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one ordering trap",
      body:
        "SHAPE 1 — POSITIONING: “Where should the interpreter be positioned?” → spoken language: next to or slightly behind the patient; sign language: next to or slightly behind the physician. SHAPE 2 — THE ASSUME/ASK RULE: a physician notices a surname, an accent, or a skin tone and plans around it → the correct move is to ask the patient what language is preferred; assuming from name, skin tone, or accent is the printed prohibition. SHAPE 3 — THE LADDER: in-person professional interpreter → telephone or video call → family member if the patient prefers, recorded in the chart; a physician who “took two semesters” of the language is not conversationally fluent. SHAPE 4 — SPIKES STATION ID: the stem describes one move and asks which station it belongs to — asking what the patient understands = Perception; asking permission and how much detail = Invitation; small pieces without jargon + checking understanding = Knowledge; acknowledging tears and allowing expression = Emotions; discussing options and offering a next-appointment agenda = Strategy. THE ORDERING TRAP: a physician who launches into treatment options while the patient is visibly upset has skipped Emotions — Strategy is gated on the patient feeling ready; and a disclosure made without asking permission first skipped Invitation.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own mnemonic — SPIKES, printed in bold red, carried attributed",
      body:
        "The page prints ONE mnemonic of its own: SPIKES — Setting, Perception, Invitation, Knowledge, Emotions, Strategy — printed in BOLD RED beside the “Delivering bad news” heading, with each station label carrying an enlarged RED initial letter (VLM-confirmed at 120dpi, staging-pubh23/vlm-census.txt). It is the source's hook, carried VERBATIM and ATTRIBUTED, not KYP's. The three KYP originals in the Memory section below are marked as such: “PRO, PHONE, FAMILY — CHARTED” (the interpreter fallback ladder), “SPOKEN to the PATIENT, SIGNED to the PHYSICIAN” (the positioning mirror), and “ASK · EYE · ONE · EXTRA” (the four conduct rules). No other mnemonic, margin note, or asterisk footnote prints anywhere on pdf 295 (pdfimages + VLM census).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — where the two protocols actually bite",
      intro:
        "First Aid prints the rules without the encounters; this block names the encounters each rule governs. The rules and their wording are the print's own; the encounter framing is KYP's, flagged as such.",
      items: [
        {
          lead: "THE LIMITED-ENGLISH VISIT — the whole ladder in one breath",
          text: "A patient who speaks little English arrives for a first visit: ask the preferred language (never assume from name, skin tone, or accent), engage the professionally trained medical interpreter in person — or by telephone or video call if unavailable — honor and chart a family-member preference if the patient makes one, then run the encounter in direct speech with extra time and one question at a time. The printed rules are the entire visit script.",
        },
        {
          lead: "THE DEAF OR HARD-OF-HEARING PATIENT — the sign-language mirror",
          text: "Sign language interpretation stages the interpreter next to or slightly behind the PHYSICIAN — the mirror image of spoken-language positioning — so the patient keeps watching the physician while receiving the signed words (sightline logic: KYP context). The patient-centered interviewing page (book 271) extends this: talk to the patient, ask before assisting, allow extra time for speech difficulties (cross-referenced topic).",
        },
        {
          lead: "THE FAMILY MEMBER AT THE BEDSIDE — preference, not default",
          text: "The print does not ban family interpreters — it subordinates them: “If the patient prefers to utilize a family member, this should be recorded in the chart.” The professionally trained interpreter remains the default; the family member is a documented patient choice (KYP framing of the printed sequence).",
        },
        {
          lead: "THE EMERGENCY — when any tool is the right tool",
          text: "In cases of emergency, facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise. The clause is the communication-skills twin of the emergency exceptions printed elsewhere in this subsection — standard procedure yields when minutes matter, and only then.",
        },
        {
          lead: "THE BAD-NEWS ENCOUNTER — SPIKES at the bedside",
          text: "A new cancer diagnosis, a progression, a poor prognosis: stage the setting (support offered in advance, privacy, sitting down), ask what the patient understands and expects, ask permission and how much detail, disclose in small pieces without jargon and check understanding, acknowledge and make room for emotion, and only if the patient feels ready, discuss options and goals of care, offer an agenda for the next appointment, and hand the plan back — the print's own words say giving control “may be empowering.”",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A hospital has in-person medical interpreters available. A physician is about to see a patient who speaks little English; the patient's chart lists a surname commonly associated with Spanish, and the physician's note begins arranging a Spanish interpreter on that basis before the visit.",
        discriminator:
          "The interpreter was chosen by inference from a name rather than by asking — the printed prohibition names all three proxies: name, skin tone, or accent",
        concept: "The language-ask rule",
        answer:
          "Ask the patient what language is preferred — “Do not assume that a patient is a poor English speaker because of name, skin tone, or accent.” The interpreter's language is established by the patient's stated preference, never by appearance or surname.",
      },
      {
        stem: "A clinic arranges in-person interpretation for a Mandarin-speaking patient with little English and asks the physician how the room should be set up; the physician will make eye contact with the patient and speak to them directly.",
        discriminator:
          "Spoken-language interpretation, in person — the positioning half of the printed mirror",
        concept: "Interpreter positioning for spoken language",
        answer:
          "The interpreter should ideally be next to or slightly behind the patient — the spoken-language position. (The sign-language mirror: next to or slightly behind the physician.) The physician maintains eye contact and direct speech throughout, with extra time and one question at a time.",
      },
      {
        stem: "During a visit using an in-person ASL interpreter, a deaf patient watches the physician's face while the physician speaks; the team asks where the interpreter should be positioned.",
        discriminator:
          "Sign language interpretation — the other half of the mirror; the patient must keep the physician in view while receiving the signed words",
        concept: "Interpreter positioning for sign language",
        answer:
          "The interpreter should be next to or slightly behind the physician — so the patient can watch the physician's face while the interpreter's hands carry the physician's words from within the patient's sightline (sightline logic: KYP context; the position is printed verbatim).",
      },
      {
        stem: "An oncologist schedules a visit to disclose a new cancer diagnosis: the patient is invited in advance to bring a support person, the door is closed, the physician sits down, and before disclosing anything the physician asks the patient what she already understands about her illness and what she expects — then asks whether she wants the details now and how much detail she would like.",
        discriminator:
          "The moves before the disclosure map station by station: room and support = Setting; asking understanding and expectations = Perception; asking permission and detail level = Invitation",
        concept: "SPIKES — the pre-disclosure stations",
        answer:
          "Setting → Perception → Invitation, in that order, before Knowledge: offer in advance for the patient to bring support; eliminate distractions, ensure privacy, and sit down (Setting); determine the patient's understanding and expectations (Perception); obtain permission to disclose the news and the desired level of detail (Invitation). Then share the information in small pieces without medical jargon (Knowledge).",
      },
    ],
    traps: [
      {
        a: "Spoken-language interpreter next to or slightly behind the PATIENT",
        b: "Sign-language interpreter next to or slightly behind the PHYSICIAN",
        whyConfused:
          "Both are interpreter-positioning rules printed in the same paragraph, one sentence apart, and both use the identical phrase “next to or slightly behind” — only the anchor changes",
        keyDifference:
          "The ANCHOR is the language: spoken interpretation stages the interpreter at the patient's side; sign interpretation stages the interpreter at the physician's side, inside the deaf patient's sightline to the physician's face",
        clue:
          "Spoken (Spanish, Mandarin, Vietnamese…) → patient side. Signed (ASL…) → physician side. Ask which language is being interpreted before choosing the anchor.",
      },
      {
        a: "Speaking directly to the patient — eye contact, second person",
        b: "Third-person statements such as “tell him”",
        whyConfused:
          "With an interpreter in the room the grammar of the encounter silently shifts — physicians start narrating to the interpreter about the patient, which feels efficient and is exactly what the print forbids",
        keyDifference:
          "The printed rule keeps the conversation two-person: “The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as ‘tell him.’” The interpreter is a channel, not the addressee",
        clue:
          "Any quoted “tell him/her that…” in a stem is the wrong-answer flag; the correct option has the physician addressing the patient directly.",
      },
      {
        a: "Professionally trained medical interpreter — the default for a patient who speaks little English",
        b: "Family member as interpreter — allowed when the patient prefers, recorded in the chart",
        whyConfused:
          "The print does not prohibit family members, so “never use family” options look too strong; but family members are not the default either, so “use the family member present” options look too casual",
        keyDifference:
          "The DEFAULT is the professional interpreter (in person, or by telephone/video call if unavailable); the family member is the PATIENT'S PREFERENCE, and that preference “should be recorded in the chart” — a documented substitution, not a first choice",
        clue:
          "Look for who chooses (the patient, not the family) and whether the chart documentation is mentioned — the correct family-member answer always includes recording it in the chart.",
      },
      {
        a: "Emotions — acknowledge the patient's emotions, provide opportunity to express them, listen and offer empathetic responses",
        b: "Strategy — discuss treatment options and goals of care, offer an agenda for the next appointment",
        whyConfused:
          "Both are SPIKES stations that follow the disclosure, and a distressed patient needs BOTH — the exam asks which comes first",
        keyDifference:
          "Strategy is gated by the print itself: “If the patient feels ready.” Emotions comes before Strategy because a patient absorbing bad news cannot yet weigh options — acknowledging, allowing expression, and empathizing clear the way for planning",
        clue:
          "A stem where the physician discusses treatment options while the patient is crying = skipped Emotions; the correct next move is to acknowledge the emotion, not to advance the plan.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “which SPIKES station is this?” stem",
        differentiator:
          "Route on the MOVE the physician is making, not the topic — the stations share vocabulary (understanding appears in both Perception and Knowledge)",
        correctPath:
          "Asking what the patient understands and expects = Perception (before disclosure). Asking permission and how much detail = Invitation. The disclosure itself, in small pieces without jargon, then checking understanding = Knowledge. Acknowledging and making room for emotion = Emotions. Options, goals of care, next-appointment agenda, handing back control = Strategy. Room, privacy, support person = Setting.",
      },
      {
        lookAlike: "An “interpreter unavailable” stem",
        differentiator:
          "The ladder has a fixed order: in-person professional → telephone or video call → family member (charted); emergencies override everything",
        correctPath:
          "No in-person interpreter → interpretation services may be provided by telephone or video call. Patient prefers a family member → proceed and record it in the chart. Emergency → facilitate communication by any tools available (friends, family, sketches, interpreter apps), even though that is not standard procedure otherwise. The physician interprets personally only if conversationally fluent in the patient's preferred language.",
      },
      {
        lookAlike: "A physician with “some” of the patient's language",
        differentiator:
          "The exception is conversational FLUENCY in the patient's preferred language — coursework, medical vocabulary, or courtesy phrases do not qualify",
        correctPath:
          "Unless the physician is conversationally fluent, a patient who speaks little English should utilize a professionally trained medical interpreter — the fluency exception is narrow and self-assessed honestly (KYP reading of the printed bar).",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man presents for a first outpatient visit. He speaks little English; his preferred language is Mandarin, which he states when asked. The physician completed two semesters of college Mandarin several years ago. The patient's adult daughter, who is fluent in English, has accompanied him and offers to interpret. The clinic has in-person Mandarin medical interpreters available today. The physician prepares for the interview.",
      question:
        "Which of the following is the most appropriate approach for this interview?",
      options: [
        {
          label: "A",
          text:
            "Engage the professionally trained Mandarin interpreter, position the interpreter next to or slightly behind the patient, make eye contact with the patient, speak to him directly, allow extra time, and ask one question at a time",
          correct: true,
          why:
            "CORRECT — the printed protocol in full: visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent (two college semesters is not conversational fluency); for in-person spoken language interpretation the interpreter should ideally be next to or slightly behind the patient; the physician should make eye contact with the patient and speak to them directly, without third-person statements; allow extra time for the interview, and ask one question at a time.",
        },
        {
          label: "B",
          text:
            "Use the patient's daughter to interpret, since she is present, fluent, and free of charge, and proceed without further documentation",
          why:
            "TEMPTING but wrong — the family member is not the default: the professionally trained interpreter is (in person, available today). A family member may interpret “if the patient prefers,” and that preference “should be recorded in the chart” — this option neither establishes the patient's preference nor documents it, and it bypasses the available professional interpreter entirely.",
        },
        {
          label: "C",
          text:
            "Have the physician conduct the interview personally in Mandarin to build rapport, supplementing unfamiliar words with gestures",
          why:
            "TEMPTING but wrong — the physician's personal exception requires being “conversationally fluent in the patient's preferred language”; two semesters several years ago does not meet the printed bar, and gesturing through a medical history is an accuracy risk, not rapport.",
        },
        {
          label: "D",
          text:
            "Engage the interpreter but address the interpreter in the third person (“Tell him that I need to ask about his chest pain”) so the translation is accurate",
          why:
            "TEMPTING but wrong — the printed direct-speech rule forbids exactly this: “The physician should make eye contact with the patient and speak to them directly, without use of third-person statements such as ‘tell him.’” The interpreter is a channel; the conversation stays physician–patient.",
        },
        {
          label: "E",
          text:
            "Engage the interpreter and position the interpreter next to or slightly behind the physician, where the physician can supervise the translation",
          why:
            "TEMPTING but wrong — that is the SIGN-language position. For in-person SPOKEN language interpretation, the interpreter should ideally be next to or slightly behind the PATIENT; next to or slightly behind the physician is where a sign-language interpreter belongs — the two halves of the printed mirror, and this stem's is the spoken half.",
        },
      ],
      reasoning:
        "The vignette stacks four printed rules and tests whether they survive contact with convenient alternatives. The patient speaks little English and has stated his preferred language (the ask rule already satisfied — the stem shows it being done correctly). Rule 1, WHO: a professionally trained medical interpreter is the default; the physician's personal exception requires conversational fluency, which two college semesters do not supply (option C fails). Rule 2, THE FAMILY MEMBER: permitted only as the patient's recorded preference, not as the default convenience (option B fails on both the default and the missing chart documentation). Rule 3, CONDUCT: direct, two-person speech — no third-person narration to the interpreter (option D fails). Rule 4, POSITIONING: spoken-language interpretation stages the interpreter next to or slightly behind the patient (option E fails — it applies the sign-language half of the mirror to a spoken encounter). Option A is the printed protocol end to end.",
    },
  },
  mnemonics: [
    {
      code: "SPIKES",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in BOLD RED beside the “Delivering bad news” heading, with each station label carrying an enlarged red initial letter (carried verbatim, attributed): Setting — offer in advance for the patient to bring support; eliminate distractions, ensure privacy, sit down. Perception — determine the patient's understanding and expectations. Invitation — obtain permission to disclose and what level of detail is desired. Knowledge — share the information in small pieces without medical jargon, allowing time to process; assess understanding. Emotions — acknowledge the patient's emotions, provide opportunity to express them, listen and offer empathetic responses. Strategy — if the patient feels ready, discuss treatment options and goals of care; offer an agenda for the next appointment; giving control may be empowering.",
      memorizes:
        "The six-station bad-news protocol in its printed order — the page's flagship structure",
      whenToUse:
        "Any vignette about disclosing a serious diagnosis, a progression, or a poor prognosis — either “which station is this?” identification, or “what should the physician do FIRST/NEXT?” sequencing (Setting before the news; Perception and Invitation before Knowledge; Emotions before Strategy).",
      clinical:
        "The order is protective (KYP context): staged settings prevent hallway disclosures, Perception and Invitation prevent ambushes, chunked Knowledge prevents jargon overload, Emotions-before-Strategy prevents planning over tears, and Strategy's control-return prevents railroaded plans of action.",
    },
    {
      code: "PRO, PHONE, FAMILY — CHARTED",
      meaning:
        "A KYP ORIGINAL — the interpreter fallback ladder in printed order: PRO = a professionally trained medical interpreter, in person (the default for a patient who speaks little English, unless the physician is conversationally fluent in the patient's preferred language); PHONE = interpretation services by telephone or video call when no interpreter is available in person; FAMILY — CHARTED = a family member may interpret if the patient prefers, and the preference is recorded in the chart. Emergencies override the ladder entirely: any tools available (friends, family, sketches, interpreter apps).",
      memorizes:
        "Who interprets, in what order of preference, with the documentation requirement attached",
      whenToUse:
        "Any stem arranging interpretation for a patient with limited English — especially when options mix professional interpreters, remote services, family members, and physician self-interpretation; and any emergency stem where the standard ladder is unavailable.",
      clinical:
        "The ladder protects accuracy and patienthood (KYP context): professionals preserve nuance and confidentiality, remote services extend reach, and the charted family preference keeps the substitution transparent and patient-owned.",
    },
    {
      code: "SPOKEN to the PATIENT, SIGNED to the PHYSICIAN",
      meaning:
        "A KYP ORIGINAL — the positioning mirror in one line: for in-person SPOKEN language interpretation the interpreter should ideally be next to or slightly behind the PATIENT; for SIGN language interpretation the interpreter should be next to or slightly behind the PHYSICIAN. Same phrase, opposite anchors — the language being interpreted picks the anchor.",
      memorizes:
        "Which side of the encounter the interpreter stands on, for spoken vs sign language interpretation",
      whenToUse:
        "Any positioning question — and as a self-check before every interpreted encounter; if the stem names ASL, the interpreter goes to the physician's side; if it names a spoken language, to the patient's.",
      clinical:
        "The sightline logic behind the mirror (KYP context): spoken interpreters voice for the patient from the patient's side, while sign interpreters must sit inside the deaf patient's sightline to the physician's face — the patient watches the physician and receives the physician's words from the physician's side.",
    },
    {
      code: "ASK · EYE · ONE · EXTRA",
      meaning:
        "A KYP ORIGINAL — the four conduct rules of the interpreted visit: ASK the patient what language is preferred (never assume from name, skin tone, or accent); EYE contact with the patient and direct address — no third-person statements such as “tell him”; ONE question at a time; EXTRA time for the interview.",
      memorizes:
        "How the physician actually talks during an interpreted encounter — the four habits that keep it a two-person conversation",
      whenToUse:
        "Any stem describing the conduct of an interpreted interview; also the fastest scan for wrong-answer options (third-person “tell him” phrasing, rapid-fire questions, assumed language).",
      clinical:
        "These four habits generalize beyond interpretation (KYP context): asking instead of assuming, facing the person, chunking questions, and slowing down are the same moves the patient-centered interviewing techniques (book 271) teach for every encounter.",
    },
  ],
  rapidReview: {
    s30: [
      "Interpreter default — visits with a patient who speaks little English should utilize a professionally trained medical interpreter unless the physician is conversationally fluent in the patient's preferred language",
      "Interpreter ladder — if unavailable in person: interpretation services may be provided by telephone or video call; if the patient prefers a family member, record it in the chart",
      "Language-ask rule — do not assume a patient is a poor English speaker because of name, skin tone, or accent; ask the patient what language is preferred",
      "Direct-speech rule — make eye contact with the patient and speak to them directly, without third-person statements such as “tell him”; allow extra time; ask one question at a time",
      "Positioning mirror — spoken-language interpretation: interpreter next to or slightly behind the PATIENT; sign-language interpretation: interpreter next to or slightly behind the PHYSICIAN",
      "Emergency override — facilitate communication by any tools available (friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise",
      "SPIKES (First Aid's own, bold red) — Setting: support in advance, eliminate distractions, ensure privacy, sit down; Perception: determine understanding and expectations; Invitation: permission to disclose + level of detail; Knowledge: small pieces, no jargon, time to process, assess understanding; Emotions: acknowledge, opportunity to express, listen, empathize; Strategy: if the patient feels ready — treatment options, goals of care, next-appointment agenda, control handed back (empowering)",
    ],
    m3: [
      "SPIKES — Setting, Perception, Invitation, Knowledge, Emotions, Strategy (First Aid's own, printed bold red)",
      "PRO, PHONE, FAMILY — CHARTED — the interpreter ladder (KYP)",
      "SPOKEN to the PATIENT, SIGNED to the PHYSICIAN — the positioning mirror (KYP)",
      "ASK · EYE · ONE · EXTRA — the conduct rules of the interpreted visit (KYP)",
    ],
    m10: [
      "The positioning mirror's mechanics: both printed sentences use the identical phrase “next to or slightly behind” — only the anchor changes (patient for spoken, physician for sign); the sightline logic is KYP context, the positions are printed verbatim",
      "Strategy's printed gate: “If the patient feels ready” — and its printed close: “Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.”",
      "Knowledge carries its own comprehension check — “Assess the patient's understanding.” — the same move that anchors informed consent elsewhere (KYP bridge)",
      "The family-member rule is permissive and documented, not prohibitive: the print says “If the patient prefers… this should be recorded in the chart” — the professional interpreter remains the default",
      "The emergency override's own boundary is printed: any tools available “even though they do not comprise standard procedure otherwise” — the override exists for emergencies only",
    ],
  },
  recall: [
    {
      q: "Who should interpret for a patient who speaks little English, and what is the physician's personal exception?",
      a: "A professionally trained medical interpreter, unless the physician is conversationally fluent in the patient's preferred language.",
    },
    {
      q: "If no interpreter is available in person, what does the print allow — and what happens if the patient prefers a family member?",
      a: "Interpretation services may be provided by telephone or video call; if the patient prefers to utilize a family member, this should be recorded in the chart.",
    },
    {
      q: "A physician is about to arrange interpretation based on the patient's surname and accent. What rule is being broken, and what should be done instead?",
      a: "“Do not assume that a patient is a poor English speaker because of name, skin tone, or accent. Ask the patient what language is preferred.”",
    },
    {
      q: "How should the physician speak during an interpreted visit, and at what pace?",
      a: "Make eye contact with the patient and speak to them directly, without third-person statements such as “tell him”; allow extra time for the interview, and ask one question at a time.",
    },
    {
      q: "Where should the interpreter be positioned for in-person spoken language interpretation — and for sign language interpretation?",
      a: "Spoken language: next to or slightly behind the patient. Sign language: next to or slightly behind the physician.",
    },
    {
      q: "What does the print allow in cases of emergency, and what is the printed caveat?",
      a: "Facilitate communication by any tools available (eg, friends, family, sketches, interpreter apps) even though they do not comprise standard procedure otherwise.",
    },
    {
      q: "Name the six SPIKES stations in order, with one printed move for each.",
      a: "Setting (offer in advance for the patient to bring support; eliminate distractions, ensure privacy, sit down) → Perception (determine the patient's understanding and expectations) → Invitation (obtain permission to disclose the news and what level of detail is desired) → Knowledge (share the information in small pieces without medical jargon, allowing time to process; assess understanding) → Emotions (acknowledge the patient's emotions, provide opportunity to express them; listen and offer empathetic responses) → Strategy (if the patient feels ready: treatment options, goals of care, an agenda for the next appointment; giving control may be empowering).",
    },
    {
      q: "Which SPIKES station is gated on readiness, and how does the print say the plan of action should be settled?",
      a: "Strategy — “If the patient feels ready, discuss treatment options and goals of care. Offer an agenda for the next appointment. Giving control to the patient may be empowering. Ask how they feel a problem might be solved and what they would like to do about the plan of action.”",
    },
  ],
  related: [
    {
      title: "Patient-centered interviewing and rapport — the base protocol",
      note:
        "The Communication Skills subsection's opening page (book 271): introduction, agenda setting, reflection, validation, recapitulation, facilitation; the PEARLS rapport framework; and communicating with patients with disabilities — including deaf and hard-of-hearing patients, whose encounters the interpreter-positioning mirror governs. ASK · EYE · ONE · EXTRA is those techniques wearing an interpreter.",
      topicId: "patient-centered-interviewing",
    },
    {
      title: "Cultural formulation, trauma-informed care, and motivational interviewing",
      note:
        "The immediately preceding page (book 272): the cultural formulation interview, trauma-informed care (permission before discussion), motivational interviewing (readiness for change), and inclusive history taking — the ask-don't-assume grammar this page's language-ask rule applies to language specifically.",
      topicId: "cultural-competence-interviewing",
    },
    {
      title: "Challenging patient and ethical scenarios — the response table",
      note:
        "The immediately following pages (books 274–275): the situation → appropriate-response table, including a family asking about prognosis and a family requesting nondisclosure — bad-news territory where SPIKES supplies the moves and the interpreter protocol supplies the channel when language differs.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Surrogate decision-makers, confidentiality, and gifts",
      note:
        "The ethics pages (book 270): ventilator-withdrawal discussions and the surrogate hierarchy are exactly the conversations SPIKES stages; and the emergency exceptions printed there (implied consent when seconds count) parallel this page's emergency any-tools override of standard interpretation procedure.",
      topicId: "surrogates-confidentiality",
    },
  ],
  crossLinks: [
    {
      subject: "Ethics — informed consent and capacity",
      connection:
        "SPIKES' Invitation and Knowledge stations are consent's elements in conversation form: permission (voluntariness), level of detail (disclosure calibrated to the patient), and “Assess the patient's understanding” (the understanding criterion of valid consent) — a patient who cannot restate what they were told has not understood it, in bad news or in consent.",
    },
    {
      subject: "Psychiatry — grief and emotional response",
      connection:
        "The Emotions station (acknowledge, provide opportunity to express, listen, offer empathetic responses) is the practical entry to the grief material: normal grief after bad news is expected and deserves room, and distinguishing it from major depression starts with exactly the listening the station prescribes (KYP bridge to the psychiatry grief/depression boundary).",
    },
    {
      subject: "Emergency medicine — exceptions in emergencies",
      connection:
        "The emergency any-tools override (friends, family, sketches, interpreter apps) is the communication-skills instance of a general emergency principle: standard procedure bends when minutes matter — the same logic that grounds implied consent and emergency treatment without prior authorization, and it bends only as far as the emergency (KYP synthesis).",
    },
    {
      subject: "Otolaryngology and audiology — deaf and hard-of-hearing care",
      connection:
        "Sign-language interpretation with the interpreter next to or slightly behind the physician is part of the broader care of deaf and hard-of-hearing patients: the patient watches the physician, communication is arranged around the patient's sightline, and accommodations (ASL interpreters, written materials, assistive devices) are planned rather than improvised (KYP bridge to hearing-loss management).",
    },
  ],
};
