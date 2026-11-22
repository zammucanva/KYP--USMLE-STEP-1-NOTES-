import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic pubh22. Source: FULL pdf page 294 / book
// 272 (Part 1), the THIRD page of the PUBLIC HEALTH SCIENCES—COMMUNICATION
// SKILLS subsection (pdf 293/book 271 closes the patient-centered interviewing
// page with the disabilities communication rules; pdf 295/book 273 opens "Use
// of interpreters" — the interpreters/SPIKES topic). The topic owns the WHOLE
// page, which carries FOUR blue-headed text blocks in a table-style two-column
// layout (bold blue left-column heading | right-column text, thin rules
// between rows — VLM-read at 120dpi, staging-pubh22/vlm-census.txt):
// (1) "Cultural formulation interview" — FIVE moves, every one opening with the
// printed bold lead-in "Identify": the problem through the patient's
// perspective (own words, or how they would describe it to family and
// friends); cultural perceptions of factors leading to a problem (why they
// think they are experiencing their problem); how the patient's background
// influences the problem (what makes it better or worse; family, community,
// spirituality); how culture may impact current and future interventions
// (concerns or suggestions about the current plan of treatment; if they do not
// want to follow medical advice, investigate combining their plans with the
// standard medical regimen); possible barriers to care based on culture
// (anything that would prevent them from seeking care in a standard medical
// institution; probe explanations and what may increase the chance of
// maintaining a good patient-physician relationship). (2) "Trauma-informed
// care" — thorough behavioral health screenings for patients with histories of
// psychological trauma; regularly assess mood, substance use, social supports,
// and suicide risk; focus assessments on trauma-related symptoms interfering
// with social and occupational function; always be empathetic; do not ask
// invasive questions requiring the patient to describe trauma in detail; ask
// permission prior to discussion; before the physical exam reassure patients
// they may signal to end it immediately; offer additional staff for support;
// psychological counseling may be indicated; follow-up counseling offered (or
// advised); "Remember 4 R's: Realize, Recognize, Respond, Resist
// retraumatization." (3) "Motivational interviewing" — counseling technique to
// facilitate behavior modification by helping patients resolve ambivalence
// about change; useful for many conditions (eg, nicotine dependence, obesity);
// helpful when the patient has SOME desire to change but need not be committed;
// examine how behavior interferes with life or why they might want to change
// it; assess barriers (eg, food access, untreated trauma); assessing readiness
// for change guides physician-suggested goals; goals should be Specific,
// Measurable, Achievable, Relevant, and Time bound (SMART). (4) "Gender- and
// sexuality-inclusive history taking" — avoid assumptions about sexual
// orientation, gender identity, gender expression, and behavior (a patient who
// identifies as heterosexual may engage in same-sex sexual activity);
// gender-neutral terms ("partner" rather than "husband" or "wife") until the
// patient instructs otherwise; assigned sex at birth and gender identity may
// differ; do not bring up gender or sexuality if not relevant (eg, a
// gender-nonconforming patient seeking care for a hand laceration); consider
// stating your pronouns ("I'm Dr. Smith, and I use she/her pronouns") and
// asking how patients would like to be addressed; correct name and pronouns in
// the electronic medical record; reassure confidentiality; trust is built over
// time. CENSUS (pdfimages): ZERO raster images on the page — four pure-text
// blocks + the indd footer slug; every block is an ORIGINAL KYP ADAPTATION
// (the registry visual re-lays the page out as a staircase + panels + arc +
// checklist — the layout is KYP's, every printed prompt is preserved). VLM
// AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass,
// staging-pubh22/vlm-census.txt), confirming: the four headings and all
// sentences exactly as the text layer reads them (none missing or extra); the
// five "Identify" openers print in BOLD; the 4 R's sentence prints with "4 R's"
// in bold black and the R initials of Realize/Recognize/Respond/Resist in RED
// bold; the SMART sentence prints with the S/M/A/R/T initials in RED bold and
// "(SMART)" in bold black — First Aid's OWN mnemonics, carried VERBATIM and
// ATTRIBUTED everywhere they appear in this note; NO margin mnemonics, NO
// asterisk footnotes, NO images, NO figures, NO bullet glyphs (the moves print
// as sentence-clusters/indented paragraphs, not bulleted items); the
// Communication Skills banner prints ONCE (running header only — this is a
// continuation page, matching the raw layer). PRINTED-TEXT QUIRKS carried +
// documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) the small-caps banner artifact "COmmUNICATION SkILLS"
// (the print uses small caps; the text layer drops the 'm' and the 'k' to
// lowercase — carried as extracted); (3) the block D heading "Gender- and
// sexuality-inclusive history taking" wraps across lines in print, breaking
// after the compound's own hyphen ("Gender- and sexuality-" / "inclusive
// history" / "taking" per the VLM pass) — the raw text layer merges the
// hyphenated compound to "sexualityinclusive" (raw line reads "Gender- and
// sexualityinclusive history" / "taking"); the note's verbatim table carries
// the hyphenated print form "sexuality-inclusive" and the merge is documented
// (the gen script's evidence range preserves the RAW merged form — a quote
// must be a contiguous text-layer span); (4) the block A and block C headings
// wrap across two lines ("Cultural formulation" / "interview";
// "Motivational" / "interviewing"); (5) the printed example "I'm Dr. Smith,
// and I use she/her pronouns" wraps "she/" / "her" across lines in the raw
// layer (the slash survives; documented); (6) the curly-quoted apostrophes
// ("patient's", "4 R's") and the double-quoted examples ("partner",
// "husband", "wife") are as printed. ADJUDICATIONS (documented in the manifest
// too): (A) the task brief's block descriptions matched the print exactly
// (five Identify moves, the trauma rules with the 4 R's, the MI arc with
// SMART, the inclusive-history rules) — no correction needed; (B) the 4 R's
// and SMART ARE marked in print (VLM: red bold initials) — both are carried as
// FIRST AID'S OWN, attributed, and counted as two of the four mnemonics; the
// two KYP originals ("PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS" and
// "PERMISSION, SIGNAL, SUPPORT") are marked as KYP's; (C) the VLM pass
// describes the page furniture as a "four-row table-style layout" with thin
// rules — the page prints NO true table, so the four blocks are inventoried as
// four ORIGINAL_KYP_ADAPTATION text-block records, not VISUAL_TABLE
// reproductions of print artwork. PROVENANCE SPLIT: verbatim = the four block
// headings and every printed sentence (all carried in the note's verbatim
// table block); FA-own = the 4 R's mnemonic and the SMART mnemonic (both
// red-initialed in print, carried attributed); KYP-original = the
// staircase/five-moves arc grammar, the PERMISSION·SIGNAL·SUPPORT safety
// architecture, the ambivalence-to-SMART decoder, the inclusive-history
// checklist organization, the exam layer, and the two KYP mnemonics — every
// teaching generalization beyond the printed page is flagged as KYP context.
// DrugCards: none — the page prints interviewing technique, not drugs
// (documented as folded-by-absence in the manifest). The next page (pdf 295)
// opens "Use of interpreters" — the interpreter and SPIKES bad-news topic, a
// separate production.

export const culturalCompetenceInterviewing: KypUsMLENote = {
  id: "cultural-competence-interviewing",
  title: "Cultural Formulation, Trauma-Informed Care, and Motivational Interviewing",
  subtitle:
    "One page of First Aid's Communication Skills section hands the examinee four interviewing engines, each built to protect the patient-physician relationship while extracting better information. The cultural formulation interview runs five printed moves, every one opening with the same bold word — Identify: identify the problem through the patient's perspective (their own words, or how they would describe it to family and friends), identify cultural perceptions of the factors leading to the problem (why they think they are experiencing it), identify how their background influences it (what makes it better or worse; family, community, spirituality), identify how culture may impact current and future interventions (concerns about the plan; if they decline medical advice, investigate combining their plans with the standard regimen), and identify possible barriers to care based on culture (anything that would keep them from a standard medical institution — and what would keep the relationship alive). Trauma-informed care then sets the safety rails: thorough behavioral health screenings (mood, substance use, social supports, suicide risk), empathy always, permission before discussion, never invasive detail, a pre-exam promise that the patient may signal to end it immediately, staff for support, counseling offered — anchored by First Aid's own red-initialed mnemonic, the 4 R's: Realize, Recognize, Respond, Resist retraumatization. Motivational interviewing resolves ambivalence about change — useful for nicotine dependence or obesity, requiring some desire but not commitment — and ends in SMART goals: Specific, Measurable, Achievable, Relevant, Time bound. Gender- and sexuality-inclusive history taking closes the page with its own discipline: no assumptions (behavior is not orientation), “partner” not “husband” or “wife”, assigned sex at birth may differ from gender identity, pronouns stated and asked, the EMR kept correct, confidentiality reassured — because trust is built over time.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Communication Skills",
  pilotCategory:
    "Public Health Sciences — communication-skills protocols: the cultural formulation interview's five printed Identify moves, trauma-informed care's screening and safety rules with First Aid's red-initialed 4 R's, motivational interviewing's ambivalence-to-SMART-goals arc, and gender- and sexuality-inclusive history taking (no assumptions, gender-neutral terms, pronouns, EMR inclusivity, confidentiality, trust over time).",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 272–272 (Communication Skills: Cultural formulation interview; Trauma-informed care; Motivational interviewing; Gender- and sexuality-inclusive history taking)",
  tags: [
    "cultural formulation interview",
    "cultural competence",
    "trauma-informed care",
    "4 R's",
    "retraumatization",
    "behavioral health screening",
    "suicide risk",
    "motivational interviewing",
    "ambivalence",
    "readiness for change",
    "SMART goals",
    "nicotine dependence",
    "obesity",
    "gender-inclusive history taking",
    "sexuality-inclusive history taking",
    "gender identity",
    "sexual orientation",
    "pronouns",
    "patient-physician relationship",
    "communication skills",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Cultural formulation interview,” FIVE moves, each opening with the printed bold lead-in “Identify”: (1) “Identify the problem through the patient’s perspective. Ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends.” (2) “Identify cultural perceptions of factors leading to a problem. Ask the patient to explain why they think they are experiencing their problem.” (3) “Identify how the patient’s background influences their problem. Ask the patient about what makes their problem better or worse. Investigate roles of family, community, and spirituality.” (4) “Identify how culture may impact current and future interventions. Ask the patient if they have any concerns or suggestions about the current plan of treatment. If they do not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen.” (5) “Identify possible barriers to care based on culture. Ask the patient if there is anything that would prevent them from seeking care in a standard medical institution. Probe for explanations and what may increase the chance of maintaining a good patient-physician relationship.” BLOCK 2 — “Trauma-informed care”: “Patients with history of psychological trauma should receive thorough behavioral health screenings. Regularly assess mood, substance use, social supports, and suicide risk. Focus assessments on trauma-related symptoms that interfere with social and occupational function. Always be empathetic. Do not ask invasive questions requiring the patient to describe trauma in detail. Ask permission prior to discussion. Before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort. Offer the presence of additional staff for support. Psychological counseling may be indicated. Follow-up counseling is offered (or advised) as appropriate. Remember 4 R’s: Realize, Recognize, Respond, Resist retraumatization.” BLOCK 3 — “Motivational interviewing”: “Counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change. Useful for many conditions (eg, nicotine dependence, obesity). Helpful when patient has some desire to change, but it does not require that the patient be committed to making the change. May involve asking patients to examine how their behavior interferes with their life or why they might want to change it. Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult. Assessing a patient’s readiness for change is also important for guiding physician-suggested goals. These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).” BLOCK 4 — “Gender- and sexuality-inclusive history taking”: “Avoid making assumptions about sexual orientation, gender identity, gender expression, and behavior (eg, a patient who identifies as heterosexual may engage in same-sex sexual activity). Use gender-neutral terms … (eg, “partner” rather than “husband” or “wife”) … A patient’s assigned sex at birth and gender identity may differ. Do not bring up gender or sexuality if it is not relevant to the visit (eg, a gender-nonconforming patient seeking care for a hand laceration). Consider stating what pronouns you use when you introduce yourself (eg, “I’m Dr. Smith, and I use she/her pronouns”) … ensuring correct name and pronouns are in the electronic medical record … Reassure them about the confidentiality of their visits … Remember: trust is built over time, and listening to and learning from patients about how they would like to approach the topics discussed above is key.”",
    why:
      "The four blocks are not four unrelated etiquettes — they are four applications of one principle: the interview fails the moment the patient stops feeling safe, respected, or understood, so each block engineers a safeguard. The cultural formulation interview safeguards UNDERSTANDING: the clinician who knows only the biomedical story (what the disease is doing) is missing the patient's explanatory model (why the patient believes it is happening, what their family and community think it is, what makes it better or worse) — and a plan built on the wrong model gets declined. That is why move 4 does not say “persuade the patient to comply”; it says investigate COMBINING their plans with the standard medical regimen, and why move 5 ends not on barriers alone but on “what may increase the chance of maintaining a good patient-physician relationship” — the relationship is the deliverable. Trauma-informed care safeguards SAFETY: a trauma history makes ordinary clinical gestures (probing questions, physical touch) potential retraumatization, so the block screens systematically (mood, substance use, social supports, suicide risk), bans invasive detail, requires permission first, converts the physical exam into a procedure the patient can end with a signal, and offers staff support and counseling — the 4 R's (Realize, Recognize, Respond, Resist retraumatization) are First Aid's own compression of the posture. Motivational interviewing safeguards AUTONOMY: ambivalence, not ignorance, is the barrier to behavior change, so the technique resolves ambivalence (examine how the behavior interferes with life, why change might be worth it), prices the real-world barriers (food access, untreated trauma), matches goals to the patient's readiness, and lands on SMART goals — Specific, Measurable, Achievable, Relevant, Time bound. Inclusive history taking safeguards IDENTITY: assumptions about orientation, identity, expression, and behavior are all independent axes, so the block prescribes neutral terms, pronoun exchange, a correct EMR, and confidentiality — because trust is built over time, and the listening is the treatment (KYP synthesis of the page's four-posture architecture).",
    keyIdea:
      "Carry four decoders off this page. DECODER 1 — THE FIVE IDENTIFIES (cultural formulation): PROBLEM (through the patient's perspective — own words, family-and-friends wording) → PERCEPTION (why they think they are experiencing it — cultural perceptions of the cause) → BACKGROUND (what makes it better or worse; family, community, spirituality) → PLAN (concerns or suggestions about the current plan; if they decline advice, investigate COMBINING their plans with the standard regimen) → BARRIERS (anything preventing care in a standard medical institution; what maintains the patient-physician relationship). DECODER 2 — TRAUMA-INFORMED CARE: screen thoroughly (mood, substance use, social supports, suicide risk), focus on trauma-related symptoms that interfere with social and occupational function, stay empathetic, ask PERMISSION before discussion, never ask invasive questions requiring the patient to describe trauma in detail, promise the SIGNAL (before the exam: they may end it immediately), offer SUPPORT (additional staff; counseling offered or advised) — and the 4 R's: Realize, Recognize, Respond, Resist retraumatization (First Aid's own). DECODER 3 — MOTIVATIONAL INTERVIEWING: resolve AMBIVALENCE (some desire to change required; commitment not), EXAMINE the behavior's interference with life, ASSESS BARRIERS (eg, food access, untreated trauma), let READINESS guide physician-suggested goals, and make every goal SMART — Specific, Measurable, Achievable, Relevant, Time bound. DECODER 4 — INCLUSIVE HISTORY: no assumptions (orientation, identity, expression, and behavior are independent — a heterosexual-identifying patient may engage in same-sex activity), “partner” not “husband”/“wife” until the patient says otherwise, assigned sex at birth ≠ gender identity, do not raise gender/sexuality if irrelevant (the hand-laceration rule), state your pronouns and ask theirs, keep the EMR's name and pronouns correct, reassure confidentiality — trust is built over time.",
  },
  mechanisms: [
    {
      id: "cultural-formulation-flow",
      title:
        "The five Identify moves: how the cultural formulation interview converts the patient's explanatory model into a plan that survives contact with it",
      context:
        "The printed Cultural formulation interview block (book 272): five moves, each opening with the printed bold lead-in “Identify”",
      flow: {
        nodes: [
          {
            id: "entry",
            label: "THE ENTRY — the biomedical story is only half the history",
            sublabel:
              "Input — the clinician already knows what the disease is doing; what is missing is the patient's explanatory model: the problem as the PATIENT frames it, the cause as the PATIENT explains it, and the context (family, community, spirituality) that will decide whether any plan is followed. The five printed moves interrogate exactly that missing half, in order.",
            variant: "input",
          },
          {
            id: "move1",
            label: "MOVE 1 — IDENTIFY THE PROBLEM THROUGH THE PATIENT'S PERSPECTIVE",
            sublabel:
              "Process — “Ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends.” Two prompts, one target: the problem statement the patient actually uses. The family-and-friends wording matters because it previews the community narrative the plan will be judged against (KYP framing of why the print includes both prompts).",
            variant: "process",
          },
          {
            id: "move2",
            label: "MOVE 2 — IDENTIFY CULTURAL PERCEPTIONS OF FACTORS LEADING TO THE PROBLEM",
            sublabel:
              "Process — “Ask the patient to explain why they think they are experiencing their problem.” This is the perceived-cause question: the patient's own causal model (an imbalance, a stressor, a spiritual account — whatever they answer is data, not error to be corrected). Move 1 named the problem; move 2 asks why it is there.",
            variant: "process",
          },
          {
            id: "move3",
            label: "MOVE 3 — IDENTIFY HOW THE PATIENT'S BACKGROUND INFLUENCES THE PROBLEM",
            sublabel:
              "Process — “Ask the patient about what makes their problem better or worse. Investigate roles of family, community, and spirituality.” The context question: modifiers of the illness and the resources around it. Family, community, and spirituality are the printed axes — they are simultaneously the support system that will carry out any plan and the belief environment that will ratify or veto it (KYP context).",
            variant: "process",
          },
          {
            id: "move4",
            label: "MOVE 4 — IDENTIFY HOW CULTURE MAY IMPACT CURRENT AND FUTURE INTERVENTIONS",
            sublabel:
              "Process — “Ask the patient if they have any concerns or suggestions about the current plan of treatment. If they do not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen.” The negotiation move: the refusal is not the end of the interview, it is the start of the combining work — the print's own instruction is to look for a way to COMBINE plans with the standard regimen, not to override the patient.",
            variant: "process",
          },
          {
            id: "move5",
            label: "MOVE 5 — IDENTIFY POSSIBLE BARRIERS TO CARE BASED ON CULTURE",
            sublabel:
              "Process — “Ask the patient if there is anything that would prevent them from seeking care in a standard medical institution. Probe for explanations and what may increase the chance of maintaining a good patient-physician relationship.” The maintenance move: barriers named before they bite, and the closing probe is explicitly about what keeps the RELATIONSHIP alive — the page's own metric of success.",
            variant: "process",
          },
          {
            id: "output",
            label: "THE OUTPUT — a combined plan and a maintained relationship",
            sublabel:
              "Output — five moves, two deliverables: a plan the patient can follow because it visibly incorporates their model (move 4's combined regimen), and a patient-physician relationship strong enough to survive disagreement (move 5's closing probe). Every subsequent communication skill on the neighboring pages assumes this foundation (KYP synthesis of the block's architecture).",
            variant: "output",
          },
        ],
        edges: [
          { from: "entry", to: "move1", label: "whose words define the problem? →" },
          { from: "move1", to: "move2", label: "the problem named; now the cause" },
          { from: "move2", to: "move3", label: "the cause named; now the context" },
          { from: "move4", to: "move5", label: "barriers probed before they bite →" },
          { from: "move3", to: "move4", label: "context known; now the plan" },
          { from: "move5", to: "output", label: "relationship maintained →" },
          { from: "move4", to: "output", label: "combined regimen →" },
        ],
      },
    },
    {
      id: "ambivalence-to-smart-arc",
      title:
        "The motivational-interviewing arc: from an ambivalent patient to SMART goals — with trauma-informed safety and inclusive language as the rails it runs on",
      context:
        "The printed Motivational interviewing block (book 272), flanked by the Trauma-informed care and Gender- and sexuality-inclusive history taking blocks",
      flow: {
        nodes: [
          {
            id: "candidate",
            label: "THE CANDIDATE — some desire to change, commitment not required",
            sublabel:
              "Input — motivational interviewing is a “counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change,” “useful for many conditions (eg, nicotine dependence, obesity).” The candidacy rule is printed exactly: it is “helpful when patient has some desire to change, but it does not require that the patient be committed to making the change.” Ambivalence — wanting and not wanting at once — is the raw material (KYP framing: commitment is the OUTPUT of the arc, never its prerequisite).",
            variant: "input",
          },
          {
            id: "examine",
            label: "EXAMINE THE BEHAVIOR AGAINST THE PATIENT'S OWN LIFE",
            sublabel:
              "Process — “May involve asking patients to examine how their behavior interferes with their life or why they might want to change it.” The discrepancy move: the patient, not the physician, voices the argument for change — the two printed prompts (interference, reasons) are the levers. Untreated trauma sits one block earlier on the page as a barrier to assess, which is why the trauma-informed rules and this arc share a page (KYP context).",
            variant: "process",
          },
          {
            id: "barriers",
            label: "ASSESS THE BARRIERS — behavior change is not only motivation",
            sublabel:
              "Process — “Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult.” The printed examples are deliberate: food access is a structural barrier and untreated trauma is a psychological one — neither yields to exhortation, and both route the patient to different help (KYP framing of the printed pair).",
            variant: "process",
          },
          {
            id: "readiness",
            label: "READINESS FOR CHANGE → PHYSICIAN-SUGGESTED GOALS",
            sublabel:
              "Process — “Assessing a patient’s readiness for change is also important for guiding physician-suggested goals.” Goals are matched to readiness, not to the disease's urgency: the physician suggests, the patient's readiness sets the dial (the printed sentence is the page's only explicit readiness→goal linkage).",
            variant: "process",
          },
          {
            id: "smart",
            label: "SMART GOALS — Specific, Measurable, Achievable, Relevant, Time bound",
            sublabel:
              "Output — “These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).” First Aid's own mnemonic, the initials printed in red in the book: the goal must name exactly what (Specific), prove it happened (Measurable), fit the patient's reality (Achievable), connect to the patient's reasons (Relevant), and carry a deadline (Time bound).",
            variant: "output",
          },
          {
            id: "rails",
            label: "THE RAILS — safety and identity make the arc possible",
            sublabel:
              "Context — the two flanking blocks are the preconditions: trauma-informed care keeps the conversation safe (permission before discussion, the signal-to-end rule before exams, the 4 R's — Realize, Recognize, Respond, Resist retraumatization), and inclusive history taking keeps it respectful (no assumptions, “partner” not “husband” or “wife”, pronouns stated and asked, EMR correct, confidentiality reassured — “trust is built over time”). An ambivalent patient stays in the conversation only if both rails hold (KYP synthesis of the page's architecture).",
            variant: "output",
          },
        ],
        edges: [
          { from: "candidate", to: "examine", label: "ambivalence voiced →" },
          { from: "examine", to: "barriers", label: "why change is hard →" },
          { from: "barriers", to: "readiness", label: "how ready is the patient →" },
          { from: "readiness", to: "smart", label: "goals matched to readiness" },
          { from: "rails", to: "candidate", label: "safety + respect keep the patient in the room →" },
          { from: "smart", to: "rails", label: "the relationship carries the goals →" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cultural-interviewing-map",
      title:
        "The five cultural-formulation moves as a staircase, with the trauma-informed panel, the motivational-interviewing arc, and the inclusive-history checklist (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 272's four blocks. TOP — the cultural formulation interview as a DESCENDING STAIRCASE: five step cards in printed order, each carrying its printed “Identify” lead-in, its own printed prompts, and the move's exam-decoding name (PROBLEM → PERCEPTION → BACKGROUND → PLAN → BARRIERS). LEFT PANEL — trauma-informed care: the screening set (mood, substance use, social supports, suicide risk), the focus rule (trauma-related symptoms interfering with social and occupational function), the three safety rules (PERMISSION — ask before discussion, never invasive detail; SIGNAL — before the exam, the patient may end it immediately; SUPPORT — additional staff, counseling offered or advised), and First Aid's red-initialed 4 R's — Realize, Recognize, Respond, Resist retraumatization. RIGHT PANEL — the motivational-interviewing arc: resolve ambivalence (some desire required, commitment not) → examine how the behavior interferes with life → assess barriers (food access, untreated trauma) → readiness for change guides physician-suggested goals → SMART (Specific, Measurable, Achievable, Relevant, Time bound), with the printed examples (nicotine dependence, obesity). BOTTOM STRIP — the gender- and sexuality-inclusive history taking checklist: no assumptions (behavior ≠ orientation), “partner” not “husband”/“wife”, assigned sex at birth ≠ gender identity, only if relevant (the hand-laceration rule), pronouns stated and asked + EMR correct, confidentiality + trust built over time.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 294 — the page's assets are four blue-headed pure-text blocks in a two-column layout with thin rules (VLM-read at 120dpi, staging-pubh22/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the staircase, the two panels, the arc, and the checklist strip are KYP's layout; every printed label and prompt is preserved from the print (all five Identify moves, every trauma rule, the full MI arc, every inclusive-history rule), and the full page is additionally carried verbatim in the note's table block. MARKED IN PRINT, drawn attributed: the 4 R's initials (Realize, Recognize, Respond, Resist) and the SMART initials (Specific, Measurable, Achievable, Relevant, Time bound) print in RED bold in the book — they are First Aid's own, not KYP's. QUIRK drawn as adjudicated: the block D heading prints “Gender- and sexuality-inclusive history taking,” breaking after the compound's own hyphen; the raw text layer merges it to “sexualityinclusive” (documented; the hyphenated print form is carried).",
    },
    {
      kind: "table",
      title:
        "Book 272 — the printed page carried verbatim (every printed word, PRINTED block order)",
      intro:
        "The page's four blue-headed blocks in printed order — Cultural formulation interview, Trauma-informed care, Motivational interviewing, Gender- and sexuality-inclusive history taking — left-column heading and right-column text, carried word for word. Two of First Aid's own mnemonics print with RED bold initials — the 4 R's (Realize, Recognize, Respond, Resist retraumatization) and the SMART list (Specific, Measurable, Achievable, Relevant, Time bound) — carried here verbatim and attributed. Printed quirks carried: the block D heading prints “Gender- and sexuality-inclusive history taking” with the compound's own hyphen, which the raw text layer merges to “sexualityinclusive” (the hyphenated print form is carried here and the merge is documented); the “she/her” pronoun example wraps across lines in print (the slash survives); the block A and C headings wrap across two lines; the curly quotes and apostrophes are as printed.",
      columns: ["PRINTED HEADING (left column)", "PRINTED TEXT (right column, verbatim)"],
      rows: [
        [
          "Cultural formulation interview",
          "Identify the problem through the patient’s perspective. Ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends. Identify cultural perceptions of factors leading to a problem. Ask the patient to explain why they think they are experiencing their problem. Identify how the patient’s background influences their problem. Ask the patient about what makes their problem better or worse. Investigate roles of family, community, and spirituality. Identify how culture may impact current and future interventions. Ask the patient if they have any concerns or suggestions about the current plan of treatment. If they do not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen. Identify possible barriers to care based on culture. Ask the patient if there is anything that would prevent them from seeking care in a standard medical institution. Probe for explanations and what may increase the chance of maintaining a good patient-physician relationship.",
        ],
        [
          "Trauma-informed care",
          "Patients with history of psychological trauma should receive thorough behavioral health screenings. Regularly assess mood, substance use, social supports, and suicide risk. Focus assessments on trauma-related symptoms that interfere with social and occupational function. Always be empathetic. Do not ask invasive questions requiring the patient to describe trauma in detail. Ask permission prior to discussion. Before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort. Offer the presence of additional staff for support. Psychological counseling may be indicated. Follow-up counseling is offered (or advised) as appropriate. Remember 4 R’s: Realize, Recognize, Respond, Resist retraumatization.",
        ],
        [
          "Motivational interviewing",
          "Counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change. Useful for many conditions (eg, nicotine dependence, obesity). Helpful when patient has some desire to change, but it does not require that the patient be committed to making the change. May involve asking patients to examine how their behavior interferes with their life or why they might want to change it. Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult. Assessing a patient’s readiness for change is also important for guiding physician-suggested goals. These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).",
        ],
        [
          "Gender- and sexuality-inclusive history taking",
          "Avoid making assumptions about sexual orientation, gender identity, gender expression, and behavior (eg, a patient who identifies as heterosexual may engage in same-sex sexual activity). Use gender-neutral terms when referring to the patient or the patient’s family (eg, “partner” rather than “husband” or “wife”) upon first meeting the patient until the patient instructs otherwise or uses specific pronouns. A patient’s assigned sex at birth and gender identity may differ. Do not bring up gender or sexuality if it is not relevant to the visit (eg, a gender-nonconforming patient seeking care for a hand laceration). Consider stating what pronouns you use when you introduce yourself (eg, “I’m Dr. Smith, and I use she/her pronouns”) and asking patients how they would like to be addressed. Also consider ways of being inclusive (eg, ensuring correct name and pronouns are in the electronic medical record). Reassure them about the confidentiality of their visits and be sensitive to the fact that patients may not be open about their sexual orientation or gender identity to others in their life. Remember: trust is built over time, and listening to and learning from patients about how they would like to approach the topics discussed above is key.",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR blocks in printed order (VLM-confirmed — none missing or extra). First Aid prints two mnemonics of its own on this page, both with red bold initials (VLM-read at 120dpi, staging-pubh22/vlm-census.txt) — “Remember 4 R’s: Realize, Recognize, Respond, Resist retraumatization.” (the R initials in red) and the SMART list (the S/M/A/R/T initials in red) — reproduced here as printed and ATTRIBUTED to the source (they are First Aid's own hooks, not KYP's). Printed quirks carried: the five “Identify” lead-ins print in bold (as carried); the block D heading prints hyphenated (“sexuality-inclusive”) and wraps across lines, which the raw text layer merges to “sexualityinclusive” — the hyphenated print form is carried here and the merge is documented; “she/her pronouns” wraps across lines in print (the slash survives); the block A and block C headings wrap across two lines in the left column; the curly-quoted apostrophes (“patient’s”, “4 R’s”) and double-quoted examples (“partner”, “husband”, “wife”, “I’m Dr. Smith…”) are as printed; the em-dash-free “(eg, …)” parenthetical style is as printed throughout.",
    },
    {
      kind: "steps",
      title: "Running the cultural formulation interview — the five printed moves in order",
      intro:
        "The block's five moves are a fixed sequence, each opening with the printed bold word “Identify.” This is the layer to recall when a vignette hands you a patient whose explanatory model differs from the biomedical one — walk the staircase in order.",
      steps: [
        {
          label: "MOVE 1 — IDENTIFY THE PROBLEM THROUGH THE PATIENT'S PERSPECTIVE",
          detail:
            "Ask the patient to describe the problem in their own words, or how the patient would describe the problem to their family and friends. The target is the patient's own problem statement — including the wording they would use with family and friends, which previews the community narrative the plan will be judged against (KYP context).",
        },
        {
          label: "MOVE 2 — IDENTIFY CULTURAL PERCEPTIONS OF FACTORS LEADING TO A PROBLEM",
          detail:
            "Ask the patient to explain why they think they are experiencing their problem. Whatever causal account returns — imbalance, stress, spiritual explanation — is the patient's perceived cause: data to work with, not an error to correct.",
        },
        {
          label: "MOVE 3 — IDENTIFY HOW THE PATIENT'S BACKGROUND INFLUENCES THEIR PROBLEM",
          detail:
            "Ask about what makes the problem better or worse, and investigate the roles of family, community, and spirituality — the three printed context axes, at once the support system that will carry out any plan and the belief environment that will ratify or veto it.",
        },
        {
          label: "MOVE 4 — IDENTIFY HOW CULTURE MAY IMPACT CURRENT AND FUTURE INTERVENTIONS",
          detail:
            "Ask about concerns or suggestions regarding the current plan of treatment. The refusal branch is the exam's favorite: if they do not want to follow medical advice, investigate if there is a way to COMBINE their plans with the standard medical regimen — the printed instruction is to combine, never to override or abandon.",
        },
        {
          label: "MOVE 5 — IDENTIFY POSSIBLE BARRIERS TO CARE BASED ON CULTURE",
          detail:
            "Ask if anything would prevent them from seeking care in a standard medical institution; probe for explanations and for what may increase the chance of maintaining a good patient-physician relationship. The closing probe is the block's own definition of success — the relationship itself.",
        },
      ],
    },
    {
      kind: "list",
      title: "Trauma-informed care — the safety rules, decoded (KYP's reading of the block)",
      intro:
        "Every sentence of the printed block is a rule the exam can test verbatim. Grouped here by function: screen, focus, protect, refer — plus First Aid's own 4 R's, attributed.",
      items: [
        {
          lead: "SCREEN — thorough behavioral health screenings, four named targets",
          text: "Patients with history of psychological trauma should receive thorough behavioral health screenings. Regularly assess mood, substance use, social supports, and suicide risk — the four printed screening targets, and the set most likely to appear as an option list.",
        },
        {
          lead: "FOCUS — symptoms that interfere with function, not the trauma narrative",
          text: "Focus assessments on trauma-related symptoms that interfere with social and occupational function. The unit of assessment is functional interference — which is exactly why the block's next rule bans the detailed retelling: the symptom's impact matters, not the story of the event.",
        },
        {
          lead: "PROTECT 1 — EMPATHY ALWAYS; PERMISSION BEFORE DISCUSSION; NO INVASIVE DETAIL",
          text: "Always be empathetic. Do not ask invasive questions requiring the patient to describe trauma in detail. Ask permission prior to discussion. The paired rules are the exam's favorite contrast: permission first, detail never — an open door, not an excavation.",
        },
        {
          lead: "PROTECT 2 — THE EXAM SIGNAL RULE",
          text: "Before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort. The promise is made BEFORE the exam begins — preemptive control handed to the patient (the printed “if they experience too much physical or emotional discomfort” names both discomfort channels).",
        },
        {
          lead: "PROTECT 3 — SUPPORT AND REFERRAL",
          text: "Offer the presence of additional staff for support. Psychological counseling may be indicated. Follow-up counseling is offered (or advised) as appropriate — support in the room now, and a counseling pathway out of the room.",
        },
        {
          lead: "THE 4 R's — First Aid's own, printed with red initials",
          text: "Remember 4 R’s: Realize, Recognize, Respond, Resist retraumatization. First Aid's mnemonic for the trauma-informed posture (the R initials print in red in the book — carried attributed): realize the prevalence of trauma, recognize its signs, respond with the rules above, and actively resist retraumatizing the patient — the signal rule, the permission rule, and the no-detail rule are the resistance in practice.",
        },
      ],
    },
    {
      kind: "list",
      title: "Motivational interviewing — the decoder (KYP's reading of the block)",
      intro:
        "The block defines the technique, its candidacy, its moves, and its output. This is the layer to recall when a vignette shows a patient who wants to change but is not committed — or when the options are goal formats.",
      items: [
        {
          lead: "WHAT IT IS — ambivalence resolution, not persuasion",
          text: "A counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change. Useful for many conditions (eg, nicotine dependence, obesity) — the two printed examples are the classic exam pair.",
        },
        {
          lead: "WHO IT HELPS — some desire required, commitment not",
          text: "Helpful when patient has some desire to change, but it does not require that the patient be committed to making the change. The candidacy rule cuts both ways: no desire at all → the technique has nothing to work with (KYP context); full commitment → it is not needed.",
        },
        {
          lead: "THE MOVES — examine the behavior, assess the barriers",
          text: "May involve asking patients to examine how their behavior interferes with their life or why they might want to change it — the patient voices the argument for change. Then assess barriers (eg, food access, untreated trauma) that may make behavior change difficult — the printed pair spans structural (food access) and psychological (untreated trauma) barriers.",
        },
        {
          lead: "THE GOVERNOR — readiness for change",
          text: "Assessing a patient’s readiness for change is also important for guiding physician-suggested goals. Goals are suggested by the physician but sized by the patient's readiness — matching a goal to an unready patient is the classic vignette error.",
        },
        {
          lead: "THE OUTPUT — SMART goals (First Aid's own)",
          text: "These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART) — First Aid's mnemonic, the initials printed in red in the book (carried attributed). “Walk 30 minutes on 5 days a week for the next month” is SMART; “get more exercise” is not (KYP example of the printed criteria applied).",
        },
      ],
    },
    {
      kind: "table",
      title:
        "Gender- and sexuality-inclusive history taking — the checklist (each rule as printed, decoded)",
      intro:
        "The block's rules carried as a checklist: the printed rule on the left, what it means for the interview on the right. This is the layer to recall when the options are phrasings — the exam tests the exact wording of the inclusive move.",
      columns: ["THE PRINTED RULE", "WHAT IT MEANS IN THE ROOM"],
      rows: [
        [
          "Avoid making assumptions about sexual orientation, gender identity, gender expression, and behavior (eg, a patient who identifies as heterosexual may engage in same-sex sexual activity).",
          "Four independent axes — orientation, identity, expression, behavior — and none predicts the others. The printed example is the exam's favorite: identity as heterosexual does not exclude same-sex behavior.",
        ],
        [
          "Use gender-neutral terms when referring to the patient or the patient’s family (eg, “partner” rather than “husband” or “wife”) upon first meeting the patient until the patient instructs otherwise or uses specific pronouns.",
          "“Partner” is the default address at first meeting; the patient's own terms take over the moment they are used. The neutral term is not a permanent rule — it is a placeholder until instructed otherwise.",
        ],
        [
          "A patient’s assigned sex at birth and gender identity may differ.",
          "Two distinct data points, both worth knowing when relevant — neither substitutes for the other.",
        ],
        [
          "Do not bring up gender or sexuality if it is not relevant to the visit (eg, a gender-nonconforming patient seeking care for a hand laceration).",
          "Relevance gates the question: a hand laceration needs a hand history. Inclusivity means never raising identity topics without clinical cause — the same discipline the disabilities page prints for disabilities (KYP cross-reference to book 271).",
        ],
        [
          "Consider stating what pronouns you use when you introduce yourself (eg, “I’m Dr. Smith, and I use she/her pronouns”) and asking patients how they would like to be addressed.",
          "The pronoun exchange runs both directions: the physician models first, then asks. The printed example sentence is the template.",
        ],
        [
          "Also consider ways of being inclusive (eg, ensuring correct name and pronouns are in the electronic medical record).",
          "Inclusivity extends past the conversation into the chart: the EMR's name and pronoun fields must match the patient's reality — a systems-level rule, not only a bedside one.",
        ],
        [
          "Reassure them about the confidentiality of their visits and be sensitive to the fact that patients may not be open about their sexual orientation or gender identity to others in their life.",
          "Confidentiality is actively reassured, not assumed — because the patient's openness with the physician may exceed their openness with everyone else in their life.",
        ],
        [
          "Remember: trust is built over time, and listening to and learning from patients about how they would like to approach the topics discussed above is key.",
          "The block's closing sentence is its thesis: listening to and learning from the patient is the technique — trust accumulates across visits.",
        ],
      ],
      caption:
        "The left column is the print's own wording (carried in the verbatim table block with the full paragraph flow); the right column is KYP's decoding, flagged as such. Heading quirk: the print heading “Gender- and sexuality-inclusive history taking” carries the compound's own hyphen and wraps across lines in the left column; the raw text layer merges it to “sexualityinclusive” — the hyphenated print form is carried throughout this note.",
    },
    {
      kind: "compare",
      title:
        "Motivational interviewing vs directive advice — the see-saw the exam tests",
      intro:
        "The block's sentences draw a sharp line between resolving ambivalence and overriding it. Every distinguishing feature follows from who supplies the argument for change.",
      columns: [
        "Motivational interviewing — the patient supplies the argument",
        "Directive advice-giving — the physician supplies the argument",
      ],
      rows: [
        {
          label: "Target",
          a: "Ambivalence — “helping patients resolve ambivalence about change”; the patient already has “some desire to change,” and the technique works with it",
          b: "Noncompliance framed as ignorance — the assumption that telling the patient the facts harder will produce the change",
        },
        {
          label: "Who voices the reasons",
          a: "The patient: “asking patients to examine how their behavior interferes with their life or why they might want to change it”",
          b: "The physician: lists complications, risks, and instructions — the patient's own reasons never surface",
        },
        {
          label: "What gets assessed first",
          a: "Barriers: “Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult” — plus readiness for change, which sizes the goals",
          b: "Nothing — the same advice is repeated at the same intensity regardless of readiness or circumstance",
        },
        {
          label: "The output",
          a: "SMART goals — Specific, Measurable, Achievable, Relevant, Time bound — physician-suggested but readiness-guided",
          b: "A general exhortation (“stop smoking,” “lose weight”) with no measure, no deadline, and no fit to the patient's life",
        },
        {
          label: "The relationship",
          a: "Autonomy protected: “it does not require that the patient be committed” — the arc's job is to build the commitment",
          b: "Autonomy threatened: the uncommitted patient hears an order, and the ambivalence hardens into resistance (KYP context)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one wording trap",
      body:
        "SHAPE 1 — THE CULTURAL FORMULATION MOVE: the vignette shows a patient whose explanation of illness differs from the biomedical one; the question names the physician's next question and asks which move it is (own words → move 1; why they think they have it → move 2; family/community/spirituality → move 3; combining plans with the standard regimen → move 4; anything preventing care in a standard medical institution → move 5). SHAPE 2 — THE TRAUMA RULE: a patient with a trauma history faces a history or exam; the correct option is permission before discussion / no invasive detail / the pre-exam signal promise / offering additional staff — never “ask her to describe the trauma in detail so you can understand.” SHAPE 3 — THE GOAL FORMAT: options are goal statements; the SMART one wins — look for the measurable verb and the time bound (“30 minutes on 5 days a week for a month,” not “get more exercise”). SHAPE 4 — THE INCLUSIVE WORDING: options are phrasings; the gender-neutral one wins at first meeting (“partner,” pronouns stated and asked) — with the relevance gate as the twist (a hand laceration does not need a sexuality history). THE WORDING TRAP: “some desire to change” ≠ “committed to change” — motivational interviewing requires the first and explicitly not the second; and “combine their plans with the standard medical regimen” ≠ “tell the patient to stop the traditional remedy” — the print says combine.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own two mnemonics — printed with red initials, carried attributed",
      body:
        "The page prints TWO mnemonics of its own, both marked in print (VLM-confirmed at 120dpi, staging-pubh22/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “Remember 4 R’s: Realize, Recognize, Respond, Resist retraumatization.” — the trauma-informed care block's closer, the R initials in red bold: REALIZE the prevalence of trauma, RECOGNIZE its signs, RESPOND with the safety rules (screenings, empathy, permission, the signal, support), RESIST retraumatization. (2) “Specific, Measurable, Achievable, Relevant, and Time bound (SMART)” — the motivational-interviewing block's closer, the S/M/A/R/T initials in red bold: the goal format every physician-suggested goal must take. The two KYP originals in the Memory section below are marked as such: “PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS” (the five cultural-formulation moves in printed order) and “PERMISSION, SIGNAL, SUPPORT” (the three trauma-informed safety rules).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "The page's clinical anchors — where each technique earns its keep",
      intro:
        "First Aid seeds the page with clinical examples and named targets; these are the anchors the exam builds vignettes around.",
      items: [
        {
          lead: "THE MOTIVATIONAL-INTERVIEWING PAIR — nicotine dependence and obesity",
          text: "“Useful for many conditions (eg, nicotine dependence, obesity)” — the two printed use-cases are the classic ambivalence diseases: the patient who smokes and wants to stop “someday,” or wants to lose weight without giving up the foods that matter. The technique asks how the behavior interferes with life, assesses barriers, matches goals to readiness, and ends in SMART goals.",
        },
        {
          lead: "THE BARRIER PAIR — food access and untreated trauma",
          text: "“Assess barriers (eg, food access, untreated trauma) that may make behavior change difficult” — the printed pair spans the structural and the psychological: an obesity plan that ignores food access fails at the grocery store, and a change plan that ignores untreated trauma fails at the source. The second example also links the page's two blocks: the untreated trauma is exactly what trauma-informed care screens for.",
        },
        {
          lead: "THE TRAUMA SCREENING SET — mood, substance use, social supports, suicide risk",
          text: "“Regularly assess mood, substance use, social supports, and suicide risk” — four targets, regularly reassessed, for any patient with a history of psychological trauma; the assessments focus on trauma-related symptoms that interfere with social and occupational function, and the safety rules (permission, no invasive detail, the exam signal, staff support) govern every encounter.",
        },
        {
          lead: "THE INCLUSIVE-HISTORY EXAMPLES — partner, pronouns, the hand laceration",
          text: "The printed examples are the exam's templates: “partner” rather than “husband” or “wife” at first meeting; “I’m Dr. Smith, and I use she/her pronouns” as the pronoun-statement model; a gender-nonconforming patient seeking care for a hand laceration as the relevance gate — no sexuality history for a laceration; and the EMR's name and pronoun fields kept correct, with confidentiality reassured because “patients may not be open about their sexual orientation or gender identity to others in their life.”",
        },
        {
          lead: "THE REFUSAL SCENARIO — the combined regimen",
          text: "The cultural formulation interview's most testable branch: a patient does not want to follow medical advice (a traditional remedy, a culturally important practice). The printed instruction is to “investigate if there is a way to combine their plans with the standard medical regimen” — and then to probe what would increase the chance of maintaining a good patient-physician relationship. Combining, not overriding; the relationship, not the victory.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old man recently emigrated from Southeast Asia is started on an antihypertensive but stops taking it, telling the clinic that his illness is “an imbalance of hot and cold” that his family treats with specific foods. The physician asks him to describe the problem in his own words, then asks why he thinks he is experiencing it, then asks what makes it better or worse and about the roles of family, community, and spirituality in his care.",
        discriminator:
          "The five-move sequence verbatim: own words → perceived cause → background influences (family, community, spirituality)",
        concept: "The cultural formulation interview",
        answer:
          "Cultural formulation interview — the five printed Identify moves: the problem through the patient's perspective; cultural perceptions of factors leading to the problem; how the patient's background influences the problem; how culture may impact current and future interventions (if he does not want to follow medical advice, investigate combining his plans with the standard medical regimen); and possible barriers to care based on culture (anything preventing care in a standard medical institution, plus what maintains a good patient-physician relationship).",
      },
      {
        stem: "A 24-year-old woman with a history of childhood sexual abuse presents for a new-patient visit. Before taking the history, the physician explains they will not ask her to describe the trauma in detail, asks permission before raising the topic, and — before the physical exam — tells her she may raise her hand at any moment to end the exam immediately. The physician also offers to have a nurse remain in the room.",
        discriminator:
          "Permission before discussion, no invasive detail, the pre-exam signal promise, and additional staff for support — with mood, substance use, social supports, and suicide risk screened",
        concept: "Trauma-informed care",
        answer:
          "Trauma-informed care: thorough behavioral health screenings (regularly assess mood, substance use, social supports, and suicide risk); focus assessments on trauma-related symptoms that interfere with social and occupational function; always be empathetic; do not ask invasive questions requiring the patient to describe trauma in detail; ask permission prior to discussion; before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort; offer the presence of additional staff for support; psychological counseling may be indicated, with follow-up counseling offered (or advised) as appropriate — the 4 R's: Realize, Recognize, Respond, Resist retraumatization.",
      },
      {
        stem: "A 47-year-old man with a 30-pack-year smoking history says he “knows he should quit someday” but is not ready to set a quit date. The physician asks him how smoking interferes with his daily life and what might make him want to quit, checks whether cost and access are barriers, and together they agree he will track every cigarette he smokes each day for the next two weeks and review the log at the next visit.",
        discriminator:
          "Some desire to change without commitment; the patient examines his own behavior; a goal that is Specific, Measurable, Achievable, Relevant, and Time bound",
        concept: "Motivational interviewing and SMART goals",
        answer:
          "Motivational interviewing — a counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change (useful for many conditions, eg, nicotine dependence): helpful when the patient has some desire to change but does not require commitment; the physician asks the patient to examine how the behavior interferes with his life or why he might want to change it, assesses barriers (eg, food access, untreated trauma), and lets readiness for change guide physician-suggested goals — which should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).",
      },
      {
        stem: "A 31-year-old patient new to the clinic is addressed by a resident who asks, “And what does your husband do?” The patient answers that they are not married. At the next visit the resident introduces himself with his pronouns, asks how the patient would like to be addressed, uses the word “partner” until the patient offers their own terms, and confirms the EMR lists the patient's correct name and pronouns.",
        discriminator:
          "Gender-neutral terms at first meeting, the two-way pronoun exchange, and the correct EMR — with confidentiality reassured",
        concept: "Gender- and sexuality-inclusive history taking",
        answer:
          "Gender- and sexuality-inclusive history taking: avoid assumptions about sexual orientation, gender identity, gender expression, and behavior; use gender-neutral terms (“partner” rather than “husband” or “wife”) upon first meeting the patient until the patient instructs otherwise or uses specific pronouns; consider stating the pronouns you use when you introduce yourself and asking patients how they would like to be addressed; ensure correct name and pronouns are in the electronic medical record; reassure them about confidentiality — trust is built over time. (And do not bring up gender or sexuality if not relevant to the visit, eg, a gender-nonconforming patient seeking care for a hand laceration.)",
      },
    ],
    traps: [
      {
        a: "Ask permission prior to discussion; never ask invasive questions requiring the patient to describe trauma in detail",
        b: "Obtain a complete, detailed account of the trauma so the team understands the precipitant",
        whyConfused:
          "Both are phrased as “thorough” history-taking, and thoroughness is usually correct on communication items; the detailed account even sounds more diligent",
        keyDifference:
          "The print bans the detailed retelling outright: assessments FOCUS on trauma-related symptoms that interfere with social and occupational function, and the door is opened only with permission. The narrative itself is not the assessment target",
        clue:
          "“Describe the trauma in detail” as a correct option should trigger the ban; “ask permission prior to discussion” and “may signal to end it immediately” are the printed safety valves.",
      },
      {
        a: "Motivational interviewing — requires SOME desire to change; commitment not required",
        b: "Motivational interviewing — requires the patient be committed to making the change",
        whyConfused:
          "The technique is about change, so “the patient must want it” sounds right; both options name the same technique",
        keyDifference:
          "The printed candidacy rule: “Helpful when patient has some desire to change, but it does not require that the patient be committed to making the change.” Ambivalence is the raw material — resolving it is the technique's whole job",
        clue:
          "An option that demands commitment (or a pre-contemplative patient with NO desire) misstates the candidacy; “some desire, not committed” is the printed formula.",
      },
      {
        a: "If the patient does not want to follow medical advice, investigate combining their plans with the standard medical regimen",
        b: "If the patient does not want to follow medical advice, explain the risks until they accept the standard regimen",
        whyConfused:
          "Both keep the physician working within the standard of care; “educate until agreement” sounds like good communication",
        keyDifference:
          "The print's instruction is combination, not conversion: “investigate if there is a way to combine their plans with the standard medical regimen” — and the follow-up probe is about what maintains a good patient-physician relationship, not about winning the argument",
        clue:
          "Options that end in the patient capitulating, the physician documenting refusal only, or the family being recruited to pressure the patient are all off-page; “combine” is the printed verb.",
      },
      {
        a: "Use gender-neutral terms (“partner”) upon first meeting, until the patient instructs otherwise",
        b: "Ask every new patient their sexual orientation and gender identity at intake regardless of the visit's purpose",
        whyConfused:
          "Both sound inclusive; the second even sounds more proactive and “thorough”",
        keyDifference:
          "The print has a relevance gate: “Do not bring up gender or sexuality if it is not relevant to the visit (eg, a gender-nonconforming patient seeking care for a hand laceration).” Neutral terms prevent ASSUMPTIONS; they do not mandate an identity questionnaire at every encounter",
        clue:
          "A hand laceration, an ear infection, a sprained ankle — irrelevant visits; the inclusive move there is neutral terms and nothing more.",
      },
    ],
    pivots: [
      {
        lookAlike: "A communication-options item where several answers sound respectful",
        differentiator:
          "Match the option to the printed rule by its exact mechanism: whose words, whose permission, whose goal format",
        correctPath:
          "Patient's own words → cultural formulation move 1; permission + no detail + signal + staff → trauma-informed care; patient examines their own behavior and goals come out SMART → motivational interviewing; neutral terms + pronoun exchange + relevance gate → inclusive history taking.",
      },
      {
        lookAlike: "“Readiness for change” appearing in a goal-setting stem",
        differentiator:
          "Readiness SIZES the goal; SMART formats it — two different jobs in the same arc",
        correctPath:
          "Assessing a patient's readiness for change guides physician-suggested goals (a barely-ready patient gets a small first step); whatever the size, the goal must still be Specific, Measurable, Achievable, Relevant, and Time bound — readiness picks the dial setting, SMART builds the dial.",
      },
      {
        lookAlike: "A trauma-history patient who needs a physical exam",
        differentiator:
          "The signal rule is promised BEFORE the exam, not offered mid-exam",
        correctPath:
          "Before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort, and offer the presence of additional staff for support — pre-emptive control, both discomfort channels named, support in the room.",
      },
    ],
    miniCase: {
      vignette:
        "A 35-year-old woman with poorly controlled type 2 diabetes mellitus returns for a follow-up visit. She uses a traditional herbal preparation recommended by her mother, and she stopped her metformin two months ago. She says she believes her diabetes “came from a weakness passed down in the family that food can settle” and that the clinic medicines “push the problem deeper.” She has some interest in getting her sugars under control but is not ready to stop the herbal preparation. The physician asks her to describe the problem in her own words, asks why she thinks she is experiencing it, asks what makes it better or worse, and asks about the roles of family, community, and spirituality. The physician then explores whether there is a way to use her plan together with the standard regimen, and asks whether anything would prevent her from seeking care at the clinic in the future and what would help maintain their relationship.",
      question:
        "Which of the following best describes the interviewing approach the physician is using, and the printed rule that governs its final move?",
      options: [
        {
          label: "A",
          text:
            "Cultural formulation interview; if the patient does not want to follow medical advice, investigate if there is a way to combine their plans with the standard medical regimen, and probe what may increase the chance of maintaining a good patient-physician relationship",
          correct: true,
          why:
            "CORRECT — the five printed moves are all present in order: the problem through the patient's perspective (her own words), cultural perceptions of factors leading to the problem (why she thinks she is experiencing it), how her background influences the problem (what makes it better or worse; family, community, spirituality), how culture may impact current and future interventions (the combining rule for her herbal plan and the standard regimen), and possible barriers to care based on culture (anything preventing care in a standard medical institution, plus what maintains the relationship). The combining instruction and the relationship probe are printed verbatim in move 4 and move 5.",
        },
        {
          label: "B",
          text:
            "Motivational interviewing; the physician should require the patient to commit to stopping the herbal preparation before discussing glucose control",
          why:
            "TEMPTING but wrong — motivational interviewing is a real technique on this page (“helping patients resolve ambivalence about change”), and the patient's ambivalence about her regimen fits it. But the option inverts the printed candidacy rule: the technique is “helpful when patient has some desire to change, but it does not require that the patient be committed to making the change” — demanding commitment first is the opposite. And the stem's five questions are the cultural formulation's moves, not MI's examining-the-behavior prompts.",
        },
        {
          label: "C",
          text:
            "Trauma-informed care; ask the patient to describe her family's traditional practices in detail so the team can identify the harmful ingredients",
          why:
            "TEMPTING but wrong — it borrows trauma-informed care's language of detail-gathering, but the printed rule runs the other way: do not ask invasive questions requiring the patient to describe trauma in detail, and ask permission prior to discussion. Gathering a full account of herbal ingredients to argue against them is also not a printed move of any block on this page — the cultural formulation's move 4 asks about HER concerns and suggestions, then seeks to combine plans.",
        },
        {
          label: "D",
          text:
            "Gender- and sexuality-inclusive history taking; use the word “partner” and ask her pronouns before proceeding with the diabetes discussion",
          why:
            "WRONG block — inclusive history taking is on this page and is always good practice (gender-neutral terms upon first meeting, pronouns stated and asked), but it is not what the stem describes: the five questions in the vignette are the cultural formulation interview's moves verbatim. Note also the relevance gate the print attaches to the inclusive block: “Do not bring up gender or sexuality if it is not relevant to the visit” — a diabetes follow-up does not turn on it.",
        },
        {
          label: "E",
          text:
            "Directive counseling; explain the complications of uncontrolled diabetes until the patient accepts the standard metformin regimen",
          why:
            "TEMPTING but wrong — education-heavy counseling is the default reflex, and diabetic complications are real. But the printed page never makes physician-argument the tool: the cultural formulation's instruction for the patient who “does not want to follow medical advice” is to “investigate if there is a way to combine their plans with the standard medical regimen,” and the closing probe is about maintaining a good patient-physician relationship. Overriding her plan would sacrifice exactly what move 5 protects.",
        },
      ],
      reasoning:
        "The question tests block identification plus the printed rule. The five questions in the stem are the cultural formulation interview's five Identify moves in printed order — own words, perceived cause, background influences (family, community, spirituality), impact on interventions, and barriers to care — so the block is settled first. The option's second half then tests the two most quotable sentences of moves 4 and 5: “investigate if there is a way to combine their plans with the standard medical regimen” and “what may increase the chance of maintaining a good patient-physician relationship.” Option B fails on MI's printed candidacy rule (commitment is NOT required — some desire is); option C inverts trauma-informed care's no-detail rule; option D names a real block but the wrong one, and misses the relevance gate; option E is the directive reflex the page exists to replace — the print says combine, not compel.",
    },
  },
  mnemonics: [
    {
      code: "Remember 4 R's: Realize, Recognize, Respond, Resist retraumatization.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed at the end of the Trauma-informed care block with the R initials in RED bold (VLM-confirmed at 120dpi, staging-pubh22/vlm-census.txt; carried verbatim, attributed): REALIZE the widespread prevalence of psychological trauma; RECOGNIZE its signs and its interference with social and occupational function; RESPOND with the block's rules (thorough behavioral health screenings — mood, substance use, social supports, suicide risk; empathy; permission before discussion; the pre-exam signal promise; additional staff; counseling offered or advised); RESIST retraumatization — never ask invasive questions requiring the patient to describe trauma in detail.",
      memorizes:
        "The trauma-informed care posture and its four commitments in one sentence",
      whenToUse:
        "Any stem featuring a patient with a trauma history facing a history, a screening set, or a physical exam; and any option list mixing protective moves with invasive ones — the 4 R's mark the protective set as the printed answer.",
      clinical:
        "The four commitments map onto practice (KYP context): Realize/Recognize are the screening lens (the four named targets, regularly reassessed); Respond is the bedside rule set; Resist retraumatization is the exam-signal and no-detail rules doing their work.",
    },
    {
      code: "SMART — Specific, Measurable, Achievable, Relevant, Time bound",
      meaning:
        "FIRST AID'S OWN mnemonic, printed at the end of the Motivational interviewing block with the S/M/A/R/T initials in RED bold (VLM-confirmed; carried verbatim, attributed): “These goals should be Specific, Measurable, Achievable, Relevant, and Time bound (SMART).” A physician-suggested goal that misses any letter is not yet a goal — it is an intention.",
      memorizes:
        "The five-criterion format for every goal that comes out of readiness-guided counseling",
      whenToUse:
        "Any vignette that ends in a behavior-change goal (smoking cessation, weight loss, exercise, adherence) with an option list of goal statements — test each option against the five letters; the SMART option is the printed answer.",
      clinical:
        "“Track every cigarette daily for two weeks and review the log at the next visit” is SMART (specific act, countable, achievable for an uncommitted smoker, relevant to quitting, two-week deadline); “try to cut down soon” fails three letters at once (KYP example).",
    },
    {
      code: "PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS",
      meaning:
        "A KYP ORIGINAL — the five printed cultural-formulation moves in printed order, one word each: PROBLEM through the patient's perspective (own words; how they would describe it to family and friends); PERCEPTION of the factors leading to the problem (why they think they are experiencing it); BACKGROUND influences (what makes it better or worse; family, community, spirituality); PLAN impact — how culture affects current and future interventions (concerns and suggestions; if they decline advice, COMBINE their plans with the standard regimen); BARRIERS to care based on culture (anything preventing care in a standard medical institution; what maintains the patient-physician relationship).",
      memorizes:
        "The five Identify moves of the cultural formulation interview, their prompts, and their printed order",
      whenToUse:
        "Any vignette asking which cultural-formulation move a given question implements, or which question comes next in the sequence; also the fastest anchor for the two most testable moves — PLAN (the combining rule) and BARRIERS (the relationship probe).",
      clinical:
        "The ladder mirrors real visits (KYP context): elicit the illness narrative, elicit the causal model, map the context, negotiate the combined plan, and clear the barriers before they break follow-up — in that order.",
    },
    {
      code: "PERMISSION, SIGNAL, SUPPORT",
      meaning:
        "A KYP ORIGINAL — the three safety rules of trauma-informed care, one word each: PERMISSION (ask permission prior to discussion; never ask invasive questions requiring the patient to describe trauma in detail); SIGNAL (before the physical exam, reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort); SUPPORT (offer the presence of additional staff for support; psychological counseling may be indicated; follow-up counseling offered or advised as appropriate).",
      memorizes:
        "The three interactive rules that distinguish trauma-informed care from ordinary good interviewing (the screening set — mood, substance use, social supports, suicide risk — rides alongside them)",
      whenToUse:
        "Any stem where a patient with a trauma history faces questions or an examination; option lists almost always mix one of these three with an invasive alternative — the trio marks the printed answer.",
      clinical:
        "All three hand control to the patient (KYP context): permission governs the conversation, the signal governs the exam, and support governs the room — the practical content of “Resist retraumatization,” the fourth R.",
    },
  ],
  rapidReview: {
    s30: [
      "Cultural formulation interview, five moves: the problem through the patient's perspective (own words / family and friends) → cultural perceptions of the cause (why they think they are experiencing it) → background influences (better or worse; family, community, spirituality) → impact on interventions (concerns/suggestions; if they decline advice, COMBINE their plans with the standard regimen) → barriers to care (anything preventing care in a standard medical institution; what maintains the patient-physician relationship)",
      "Trauma-informed care: thorough behavioral health screenings — regularly assess mood, substance use, social supports, and suicide risk; focus on trauma-related symptoms interfering with social and occupational function; always be empathetic",
      "Trauma-informed care interaction rules: ask permission prior to discussion; do NOT ask invasive questions requiring the patient to describe trauma in detail; before the exam, reassure patients they may signal to end it immediately; offer additional staff for support; counseling may be indicated; follow-up counseling offered (or advised)",
      "4 R's (First Aid's own, red initials): Realize, Recognize, Respond, Resist retraumatization",
      "Motivational interviewing: counseling technique to facilitate behavior modification by helping patients resolve ambivalence about change; useful for many conditions (eg, nicotine dependence, obesity); helpful when the patient has SOME desire to change — commitment NOT required",
      "Motivational interviewing moves: examine how the behavior interferes with life or why they might want to change; assess barriers (eg, food access, untreated trauma); readiness for change guides physician-suggested goals",
      "SMART goals (First Aid's own, red initials): Specific, Measurable, Achievable, Relevant, Time bound",
      "Inclusive history taking: no assumptions (orientation, identity, expression, behavior are independent — a heterosexual-identifying patient may engage in same-sex activity); “partner” not “husband”/“wife” at first meeting; assigned sex at birth ≠ gender identity; do not bring up gender/sexuality if not relevant (hand-laceration rule); state your pronouns + ask theirs; correct name and pronouns in the EMR; reassure confidentiality; trust is built over time",
    ],
    m3: [
      "4 R's — Realize, Recognize, Respond, Resist retraumatization (First Aid's own)",
      "SMART — Specific, Measurable, Achievable, Relevant, Time bound (First Aid's own)",
      "PROBLEM, PERCEPTION, BACKGROUND, PLAN, BARRIERS — the five cultural-formulation moves in order (KYP)",
      "PERMISSION, SIGNAL, SUPPORT — the three trauma-informed safety rules (KYP)",
    ],
    m10: [
      "The combining rule: a patient who does not want to follow medical advice is not a refusal to document — investigate combining their plans with the standard medical regimen, then probe what increases the chance of maintaining a good patient-physician relationship (moves 4 and 5 of the cultural formulation)",
      "The candidacy formula: motivational interviewing needs SOME desire to change and does NOT require commitment — resolve the ambivalence, don't gate on it",
      "The relevance gate: inclusive language is neutral terms and pronoun exchange, NOT a mandatory identity history — “do not bring up gender or sexuality if it is not relevant to the visit” (the gender-nonconforming patient with a hand laceration)",
      "The four screening targets (mood, substance use, social supports, suicide risk) are REGULARLY reassessed in trauma histories, and the focus is symptoms that interfere with social and occupational function — never the narrative detail",
    ],
  },
  recall: [
    {
      q: "Name the five moves of the cultural formulation interview, in printed order.",
      a: "Identify the problem through the patient's perspective; identify cultural perceptions of factors leading to a problem; identify how the patient's background influences their problem; identify how culture may impact current and future interventions; identify possible barriers to care based on culture.",
    },
    {
      q: "In the cultural formulation interview, what does the physician investigate when the patient does not want to follow medical advice?",
      a: "Whether there is a way to combine their plans with the standard medical regimen — and (move 5) probe for explanations and what may increase the chance of maintaining a good patient-physician relationship.",
    },
    {
      q: "Which four things are regularly assessed in patients with a history of psychological trauma, and on what do the assessments focus?",
      a: "Thorough behavioral health screenings: mood, substance use, social supports, and suicide risk — with assessments focused on trauma-related symptoms that interfere with social and occupational function.",
    },
    {
      q: "What three interactive rules protect a patient with a trauma history during the history and physical exam?",
      a: "Ask permission prior to discussion (never ask invasive questions requiring the patient to describe trauma in detail); before the physical exam, reassure patients they may signal to end it immediately if they experience too much physical or emotional discomfort; offer the presence of additional staff for support — with psychological counseling possibly indicated and follow-up counseling offered (or advised) as appropriate.",
    },
    {
      q: "What are the 4 R's, and whose mnemonic are they?",
      a: "First Aid's own (printed with red initials at the end of the trauma-informed care block): Realize, Recognize, Respond, Resist retraumatization.",
    },
    {
      q: "For which patients is motivational interviewing helpful, and what does it explicitly NOT require?",
      a: "Helpful when the patient has some desire to change — it does not require that the patient be committed to making the change; useful for many conditions (eg, nicotine dependence, obesity), it facilitates behavior modification by helping patients resolve ambivalence about change.",
    },
    {
      q: "What makes a physician-suggested goal SMART?",
      a: "Specific, Measurable, Achievable, Relevant, and Time bound (First Aid's own mnemonic, printed with red initials) — and assessing the patient's readiness for change is what guides the goals in the first place.",
    },
    {
      q: "Give four printed rules of gender- and sexuality-inclusive history taking.",
      a: "Avoid assumptions about sexual orientation, gender identity, gender expression, and behavior (a patient who identifies as heterosexual may engage in same-sex sexual activity); use gender-neutral terms (“partner” rather than “husband” or “wife”) until the patient instructs otherwise; do not bring up gender or sexuality if not relevant to the visit (eg, a gender-nonconforming patient seeking care for a hand laceration); consider stating your pronouns and asking how the patient would like to be addressed — plus correct name and pronouns in the EMR, reassured confidentiality, and trust built over time.",
    },
  ],
  related: [
    {
      title: "Patient-centered interviewing and PEARLS — the page before",
      note:
        "Book 271 (pdf 293) prints the substrate this page builds on: introductions with name and pronouns at eye level, agenda setting, reflection, validation, and the PEARLS rapport responses — plus the disabilities communication rules whose relevance gate (“do not bring up a disability if it is not relevant”) is the same discipline as this page's hand-laceration rule. The cultural formulation's five moves are patient-centered interviewing aimed at culture.",
      topicId: "patient-centered-interviewing",
    },
    {
      title: "Interpreters and delivering bad news (SPIKES) — the page after",
      note:
        "Book 273 (pdf 295) continues Communication Skills with the use of professionally trained medical interpreters and the SPIKES protocol for delivering bad news — both downstream of this page's foundation: the cultural formulation's barriers move (anything preventing care in a standard medical institution) is exactly where interpreter needs surface, and trauma-informed permission rules govern how hard news is approached.",
      topicId: "interpreters-bad-news",
    },
    {
      title: "Challenging patient scenarios — where these techniques deploy",
      note:
        "The chapter's challenging-scenarios material (the angry, refusing, or ambivalent patient) is the caseload these four engines serve: the refusing patient routes to the cultural formulation's combining rule, the ambivalent patient to motivational interviewing, and every scenario to the relationship-maintenance probe that closes move 5.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Informed consent — autonomy's legal expression",
      note:
        "The informed-consent page prints the four-part consent process (disclosure, understanding, capacity, voluntariness) and its exceptions; this page is its conversational twin — permission prior to discussion, no invasive questions, and the signal-to-end rule are voluntariness and capacity-respect operating inside a trauma history, and motivational interviewing's readiness-guided goals keep consent conversations uncoerced.",
      topicId: "informed-consent",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry — trauma histories and behavioral health screening",
      connection:
        "The trauma-informed block is outpatient psychiatry at the bedside: mood, substance use, social supports, and suicide risk are the screening set for trauma-related disorders, and “focus assessments on trauma-related symptoms that interfere with social and occupational function” is the functional-impairment lens psychiatry applies to PTSD and related conditions — with “Resist retraumatization” as the clinical rationale for avoiding re-exposure in the interview.",
    },
    {
      subject: "Behavioral science — behavior modification and readiness for change",
      connection:
        "Motivational interviewing operationalizes behavior-change theory: resolving ambivalence, examining how a behavior interferes with life, assessing barriers (food access, untreated trauma), and matching physician-suggested goals to the patient's readiness — with nicotine dependence and obesity, the block's printed examples, as the canonical targets of behavior-modification counseling.",
    },
    {
      subject: "Medical ethics — confidentiality and the therapeutic relationship",
      connection:
        "The inclusive-history block's confidentiality reassurance (“patients may not be open about their sexual orientation or gender identity to others in their life”) and the cultural formulation's closing probe (“what may increase the chance of maintaining a good patient-physician relationship”) are the confidentiality and fidelity principles of medical ethics rendered as interviewing technique.",
    },
    {
      subject: "Clinical skills — the sensitive physical examination",
      connection:
        "The pre-exam signal rule (“reassure patients that they may signal to end it immediately if they experience too much physical or emotional discomfort”) plus the offer of additional staff generalize to every sensitive examination: chaperones, narrated consent before touch, and patient-controlled stopping are the same control transfer the trauma-informed block prescribes.",
    },
  ],
};
