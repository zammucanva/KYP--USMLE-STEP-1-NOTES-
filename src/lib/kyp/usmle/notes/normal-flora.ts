import type { KypUsMLENote } from "../types";

// Microbiology — SYSTEMS banner (M-batch 28). Source: pdf 196 / book 174
//  (Normal microbiota: dominant — the body-site flora directory with the
//  C-section neonate note; Bugs causing foodborne illness — the 8-organism
//  source map with the quick-quick rule). Page ownership: the Prions block
//  on the same page belongs to M25 (cross-documented in both manifests).
//  The page is pure text (0 rasters) — a TABLE NOTE (requiresVisual false,
//  the E22/E35 pattern). The banner typo 'MICROCIOLOGY—SYSTEMS' prints on
//  book 174. FA's printed gloss ("Food poisoning from reheated rice? Be
//  serious!" for B cereus) is quoted in the table block for verification
//  only.

export const normalFlora: KypUsMLENote = {
  id: "normal-flora",
  title: "Normal Flora & Colonization",
  subtitle:
    "The body-site flora directory and the foodborne source map. NORMAL MICROBIOTA (book 174): SKIN — S epidermidis, the commensal that follows skin everywhere (neonates delivered by C-section have microbiota enriched in skin commensals). NOSE — S epidermidis, colonized by S aureus. OROPHARYNX — viridans group streptococci. DENTAL PLAQUE — S mutans. COLON — B fragilis > E coli (the anaerobe outnumbers the facultative gram-negative rod). VAGINA — Lactobacillus, colonized by E coli and group B strep. THE FOODBORNE SOURCE MAP: S aureus and B cereus food poisoning STARTS QUICKLY AND ENDS QUICKLY (exotoxin-mediated — preformed toxin). B cereus — reheated rice. C botulinum — improperly canned foods (toxins), raw honey (spores). C perfringens — reheated meat. E coli O157:H7 — undercooked meat. L monocytogenes — deli meats, soft cheeses. Salmonella — poultry, meat, and eggs. S aureus — meats, mayonnaise, custard; preformed toxin. V parahaemolyticus and V vulnificus — raw/undercooked seafood, with V vulnificus predominantly causing wound infections from contact with contaminated water or shellfish.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Systems Microbiology",
  pilotCategory:
    "Systems microbiology — the flora directory on the site-colonization axis (which organism owns which surface, and which pathogens merely colonize it) and the foodborne source map on the toxin-timing axis (the quick-quick preformed-toxin pair against the incubated growers)",
  difficulty: 2,
  readTime: 8,
  sourceRef: "First Aid 2026, Part 1 pp. 174–174 (Normal microbiota: dominant; Bugs causing foodborne illness)",
  tags: [
    "normal flora",
    "normal microbiota",
    "colonization",
    "S epidermidis",
    "S aureus",
    "viridans group streptococci",
    "S mutans",
    "dental plaque",
    "B fragilis",
    "E coli",
    "Lactobacillus",
    "group B strep",
    "C-section",
    "skin commensals",
    "foodborne illness",
    "B cereus",
    "reheated rice",
    "C botulinum",
    "improperly canned foods",
    "raw honey",
    "C perfringens",
    "reheated meat",
    "E coli O157:H7",
    "undercooked meat",
    "L monocytogenes",
    "deli meats",
    "soft cheeses",
    "Salmonella",
    "poultry",
    "eggs",
    "S aureus food poisoning",
    "preformed toxin",
    "mayonnaise",
    "custard",
    "V parahaemolyticus",
    "V vulnificus",
    "raw seafood",
    "wound infections",
    "shellfish",
    "exotoxin-mediated",
  ],
  core: {
    what: "THE FLORA DIRECTORY (book 174). Six body sites, each with its dominant organism and its colonization risks. SKIN: S epidermidis — the commensal staphylococcus of skin, and the organism a C-section neonate's microbiota is enriched in (neonates delivered by C-section have microbiota enriched in skin commensals, having skipped the vaginal transit). NOSE: S epidermidis, with colonization by S AUREUS — the carrier state that precedes staphylococcal disease. OROPHARYNX: VIRIDANS GROUP STREPTOCOCCI — the oral streptococci that seed the mouth's surfaces (and, when they enter the blood, the dental-work bacteremia that infects damaged valves). DENTAL PLAQUE: S MUTANS — the plaque builder. COLON: B FRAGILIS > E COLI — the anaerobe outnumbering the facultative gram-negative rod by an order of magnitude in the normal colon. VAGINA: LACTOBACILLUS — the acid-producing keeper of the vaginal ecosystem — colonized by E COLI and GROUP B STREP, the two organisms whose peripartum presence drives neonatal sepsis workups. THE FOODBORNE SOURCE MAP (book 174): the printed rule — S AUREUS and B CEREUS food poisoning starts quickly and ends quickly (exotoxin-mediated; the toxin is preformed in the food before it is eaten). The directory: B CEREUS — reheated rice (fried rice; the emetic syndrome). C BOTULINUM — improperly canned foods (the toxins) and raw honey (the spores — the neonatal warning). C PERFRINGENS — reheated meat. E COLI O157:H7 — undercooked meat. L MONOCYTOGENES — deli meats, soft cheeses (the pregnancy warning). SALMONELLA — poultry, meat, and eggs. S AUREUS — meats, mayonnaise, custard; preformed toxin (the picnic foods). V PARAHAEMOLYTTICUS and V VULNIFICUS — raw/undercooked seafood, with V VULNIFICUS predominantly causing WOUND INFECTIONS from contact with contaminated water or shellfish.",
    why: "This half-page directory is small but load-bearing for three exam institutions. The first is THE SITE-OWNERSHIP LOGIC: every surface has one named commensal — skin and nose share S epidermidis, the oropharynx owns viridans streptococci, plaque is S mutans, the colon runs anaerobic (B fragilis over E coli), and the vagina is Lactobacillus's acid garden — and the colonization annotations (S aureus in the nose, E coli and group B strep in the vagina) name the organisms that convert from flora to pathogen in the right clinical moment (staphylococcal disease after carriage; neonatal GBS sepsis after peripartum colonization). The C-section note is the microbiome's first principle: the newborn's flora is seeded by the route of delivery. The second is THE QUICK-QUICK RULE: preformed exotoxins (S aureus, B cereus) produce vomiting within hours of the meal and resolve within a day — against the incubated growers (Salmonella, E coli O157:H7, Listeria, Campylobacter-class organisms) whose illnesses start a day or more later. The third is THE SOURCE-TO-ORGANISM MAP: reheated rice names B cereus, canned food and raw honey name C botulinum, reheated meat names C perfringens, undercooked meat names E coli O157:H7 (and Toxoplasma in pregnancy contexts), deli meats and soft cheeses name L monocytogenes, poultry and eggs name Salmonella, mayonnaise and custard name S aureus, and raw seafood names the vibrios — with V vulnificus doubling as the wound-infection organism of contaminated seawater.",
    keyIdea: "Own the surface, then name the food. FLORA: SKIN = S epidermidis (the C-section neonate's enrichment); NOSE = S epidermidis + S AUREUS colonization; OROPHARYNX = viridans streptococci; PLAQUE = S mutans; COLON = B fragilis > E coli (anaerobes dominate); VAGINA = Lactobacillus + E COLI and GROUP B STREP colonization. FOOD: the QUICK-QUICK pair — S AUREUS (meats, mayonnaise, custard — preformed toxin) and B CEREUS (reheated rice) — vomiting within hours, resolution within a day. The incubated set: C BOTULINUM (improperly canned foods = toxin; raw honey = spores), C PERFRINGENS (reheated meat), E COLI O157:H7 (undercooked meat), L MONOCYTOGENES (deli meats, soft cheeses — the pregnancy list), SALMONELLA (poultry, meat, eggs), V PARAHAEMOLYTICUS and V VULNIFICUS (raw/undercooked seafood) — with V VULNIFICUS the wound-infection organism of contaminated water and shellfish.",
  },
  mechanisms: [
    {
      id: "site-colonization-logic",
      title: "The site-ownership axis: one commensal per surface, and the colonizers that wait",
      context: "The flora directory with its colonization annotations",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A surface, a newborn's delivery, or a culture result — which organism belongs there?",
            sublabel: "Input — the site question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE SKIN-NOSE PAIR: S EPIDERMIDIS owns the skin (and the C-section neonate's microbiome — delivered without vaginal transit, enriched in skin commensals) and the nose's baseline — with S AUREUS as the nose's colonizer, the carriage state that precedes staphylococcal disease",
            sublabel: "Process — the commensal and its pathogenic colonizer share the surface.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE MOUTH-COLON PAIR: VIRIDANS GROUP STREPTOCOCCI own the oropharynx (the dental-work bacteremia that seeds damaged valves) and S MUTANS owns the plaque; the COLON runs anaerobic — B FRAGILIS > E COLI, the anaerobe dominating the facultative rod",
            sublabel: "Process — the mouth's streptococci and the colon's anaerobe dominance.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE VAGINA: LACTOBACILLUS keeps the ecosystem acidic — and the site is colonized by E COLI and GROUP B STREP, the two organisms whose peripartum presence drives the neonatal sepsis workup (the GBS screening pregnancy)",
            sublabel: "Process — the keeper and the colonizers.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the clinical reading: normal-culture interpretation (is this organism flora or pathogen at this site?), prosthetic and catheter infection predictions (S epidermidis on devices), endocarditis risk after dental work (viridans), and the peripartum GBS protocol",
            sublabel: "Output — the directory converts a culture into a decision.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "skin and nose" },
          { from: "s1", to: "s2", label: "mouth and colon" },
          { from: "s2", to: "s3", label: "the vagina" },
          { from: "s3", to: "o1", label: "flora vs pathogen" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "Normal microbiota — verbatim",
      intro:
        "The source's flora directory (book 174), verbatim, with the C-section note.",
      columns: ["Location", "Microorganism (verbatim)"],
      rows: [
        ["Skin", "S epidermidis."],
        ["Nose", "S epidermidis; colonized by S aureus."],
        ["Oropharynx", "Viridans group streptococci."],
        ["Dental plaque", "S mutans."],
        ["Colon", "B fragilis > E coli."],
        ["Vagina", "Lactobacillus; colonized by E coli and group B strep."],
        [
          "The delivery note (printed above the table)",
          "Neonates delivered by C-section have microbiota enriched in skin commensals.",
        ],
      ],
      caption:
        "The table reads with the site-colonization mechanism: each surface has one dominant commensal; the semicolon annotations (S aureus in the nose, E coli and group B strep in the vagina) mark the colonizers that convert to pathogens in the right clinical moment.",
    },
    {
      kind: "table",
      title: "Bugs causing foodborne illness — verbatim",
      intro:
        "The source's foodborne source map (book 174), verbatim, with the quick-quick rule.",
      columns: ["Microorganism", "Source of infection (verbatim)"],
      rows: [
        [
          "B cereus",
          "Reheated rice. “Food poisoning from reheated rice? Be serious!” (B cereus) [FA gloss, printed — verification-only.]",
        ],
        ["C botulinum", "Improperly canned foods (toxins), raw honey (spores)."],
        ["C perfringens", "Reheated meat."],
        ["E coli O157:H7", "Undercooked meat."],
        ["L monocytogenes", "Deli meats, soft cheeses."],
        ["Salmonella", "Poultry, meat, and eggs."],
        ["S aureus", "Meats, mayonnaise, custard; preformed toxin."],
        [
          "V parahaemolyticus and V vulnificus",
          "Raw/undercooked seafood. V vulnificus predominantly causes wound infections from contact with contaminated water or shellfish.",
        ],
        [
          "The timing rule (printed)",
          "S aureus and B cereus food poisoning starts quickly and ends quickly (exotoxin-mediated).",
        ],
      ],
      caption:
        "The table reads with the toxin-timing axis: the preformed-toxin pair (S aureus, B cereus) gives illness that starts and ends within hours of the meal; every other row requires incubation — the fastest discriminator in foodborne stems.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the directory implies",
      body: "THE CULTURE PROTOCOL: S epidermidis from a wound or device is flora until proven otherwise — but from a prosthetic joint, central line, or CSF shunt it is the pathogen (the biofilm organism). Viridans streptococci in blood after dental work suggest the damaged-valve endocarditis (M13's enteric contrast: the oral streptococci vs the gut's Enterococcus). THE PERIPARTUM PROTOCOL: group B strep colonization of the vagina drives the late-pregnancy screen and the intrapartum penicillin; E coli colonization pairs with it in the neonatal sepsis differential. THE DELIVERY PROTOCOL: C-section neonates start with skin-commensal microbiota (S epidermidis enrichment) rather than the vaginal flora — the microbiome's first question. THE FOODBORNE PROTOCOL: vomiting within 1-6 hours of a picnic, mayonnaise, custard, or reheated rice = the preformed-toxin pair (S aureus, B cereus) — starts quickly, ends quickly, no incubation needed. Canned-food bulging or raw honey = botulinum toxin or spores (the neonatal honey warning). Reheated meat = C perfringens. Undercooked meat = E coli O157:H7 (no antibiotics — the HUS risk of M13). Deli meats and soft cheeses in pregnancy = Listeria. Poultry and eggs = Salmonella. Raw oysters or seawater wounds = the vibrios — V vulnificus owns both the raw-seafood sepsis (especially with liver disease) and the wound infection.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Two hours after a church picnic, a family develops nausea and vomiting that resolves completely by the next morning; potato salad with mayonnaise was the shared dish.",
        discriminator: "Vomiting within hours + mayonnaise + full resolution",
        concept: "S aureus food poisoning — the preformed toxin",
        answer:
          "S aureus food poisoning (meats, mayonnaise, custard — preformed toxin) starts quickly and ends quickly: the exotoxin is already in the food, so symptoms begin within hours of the meal and resolve within a day. B cereus (reheated rice) follows the same timing rule — the two organisms the printed quick-quick line names.",
      },
      {
        stem: "A pregnant woman at 36 weeks screens positive for vaginal group B streptococcus colonization.",
        discriminator: "Peripartum GBS colonization",
        concept: "The vagina's colonizer — the neonatal sepsis driver",
        answer:
          "The vagina's normal flora is Lactobacillus, colonized by E coli and group B strep. Group B strep colonization drives the intrapartum penicillin prophylaxis that prevents neonatal GBS sepsis — the colonization annotation converting to protocol.",
      },
      {
        stem: "A cirrhotic fisherman develops sepsis and bullous skin lesions after a shellfish wound exposed to seawater.",
        discriminator: "Liver disease + seawater/shellfish wound + bullae",
        concept: "V vulnificus — the wound and raw-seafood organism",
        answer:
          "V parahaemolyticus and V vulnificus come from raw/undercooked seafood — and V vulnificus PREDOMINANTLY causes wound infections from contact with contaminated water or shellfish. In liver disease (iron overload), the same organism causes sepsis with bullous lesions — the vibrio that owns both rows.",
      },
    ],
    traps: [
      {
        a: "E coli is the dominant organism of the normal colon",
        b: "B FRAGILIS > E COLI — the anaerobe outnumbers the facultative gram-negative rod in the normal colon",
        whyConfused: "E coli is the famous colon organism.",
        keyDifference:
          "The printed inequality is the point: anaerobes dominate the colonic flora (B fragilis over E coli) — which is why anaerobic coverage (metronidazole-class, M35's antifungals neighbors and M33's spectrum logic) matters in colorectal surgery and intra-abdominal infection.",
        clue: "Any colon-flora or anaerobe-coverage question.",
      },
      {
        a: "All foodborne illnesses require an incubation period of a day or more",
        b: "S AUREUS and B CEREUS poisoning starts QUICKLY and ends QUICKLY — the toxin is PREFORMED in the food (exotoxin-mediated), so vomiting begins within hours",
        whyConfused: "Most foodborne pathogens must first replicate.",
        keyDifference:
          "The timing split is the fastest discriminator: hours + vomiting + resolution = preformed toxin (S aureus from mayonnaise/custard/meats; B cereus from reheated rice); a day or more + inflammatory diarrhea = the incubating growers (Salmonella from poultry/eggs, E coli O157:H7 from undercooked meat, C perfringens from reheated meat).",
        clue: "Any foodborne timing question.",
      },
      {
        a: "A C-section neonate has the same microbiota as a vaginally delivered one",
        b: "Neonates delivered by C-SECTION have microbiota enriched in SKIN COMMENSALS — they skip the vaginal transit that would seed Lactobacillus",
        whyConfused: "Flora feels innate rather than acquired.",
        keyDifference:
          "The newborn's microbiome is seeded by the delivery route: vaginal delivery seeds the vaginal flora (Lactobacillus); C-section seeds the skin's commensals (S epidermidis enrichment). The line is the microbiome chapter's anchor on this page.",
        clue: "Any neonatal-microbiome question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The two staphylococci of the flora directory",
        differentiator: "The commensal vs the colonizer",
        correctPath:
          "S EPIDERMIDIS: the skin's commensal and the nose's baseline — normal flora at both sites (but the prosthetic-device pathogen when it reaches plastic). S AUREUS: the nose's COLONIZER — not dominant flora, but the carriage state that precedes staphylococcal disease.",
      },
      {
        lookAlike: "The quick-quick pair vs the incubated growers (foodborne timing)",
        differentiator: "Preformed toxin vs in vivo replication",
        correctPath:
          "QUICK-QUICK (preformed exotoxin, hours): S AUREUS — meats, mayonnaise, custard; B CEREUS — reheated rice. INCUBATED (a day or more): C BOTULINUM — canned foods (toxin made in the food, but the presentation is neurologic, not emetic) and raw honey (spores); C PERFRINGENS — reheated meat; E COLI O157:H7 — undercooked meat; L MONOCYTOGENES — deli meats, soft cheeses; SALMONELLA — poultry, meat, eggs; the VIBRIOS — raw seafood.",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old woman develops nausea and repetitive vomiting 3 hours after eating leftover fried rice she reheated in a microwave; there is no fever, no blood in the stool, and no diarrhea. Her two dining companions who ate the same rice have similar symptoms. All three are completely asymptomatic by the following morning. The rice had been cooked 2 days earlier and left at room temperature before reheating.",
      question:
        "Which mechanism best explains this presentation?",
      options: [
        {
          label: "A",
          text: "A preformed exotoxin produced in the food before ingestion (B cereus, emetic syndrome)",
          correct: true,
          why: "Correct. B cereus food poisoning comes from reheated rice — the spores survive cooking, germinate during room-temperature storage, and the organism PREFORMS its emetic exotoxin in the food. The timing is the answer key: vomiting within hours, no fever, complete resolution within a day. The printed rule: S aureus and B cereus food poisoning starts quickly and ends quickly (exotoxin-mediated).",
        },
        {
          label: "B",
          text: "Invasive intestinal mucosal invasion with inflammation",
          why: "Invasion (Salmonella-class disease from poultry/eggs, or the dysentery organisms of M13) takes a day or more of replication and produces fever and inflammatory diarrhea — not afebrile vomiting that resolves overnight.",
        },
        {
          label: "C",
          text: "Toxin production in vivo after spore germination in the gut",
          why: "That is the C perfringens (reheated meat) and the diarrhegenic B cereus pattern — cramping diarrhea a day later, not vomiting within 3 hours. The emetic B cereus syndrome is preformed in the food.",
        },
        {
          label: "D",
          text: "Absorption of a neurotoxin causing autonomic blockade",
          why: "That is botulism (improperly canned foods; raw honey carries spores to neonates) — diplopia, dysphagia, descending weakness — not self-limited emesis.",
        },
        {
          label: "E",
          text: "Mucosal adherence with effacing lesions and shiga-like toxin",
          why: "That is E coli O157:H7 from undercooked meat — bloody diarrhea days later with the HUS risk of M13 — a disease of the colon, not the quick-quick emetic syndrome.",
        },
      ],
      reasoning:
        "The vignette stacks the quick-quick identifiers: reheated rice left at room temperature, vomiting beginning within 3 hours, afebrile illness with no diarrhea, multiple diners affected identically, and complete resolution by the next morning. The mechanism is the preformed exotoxin — B cereus, the reheated-rice organism. Each distractor borrows another foodborne mechanism (invasion, in-vivo toxin, neurotoxin, effacement-plus-shiga) whose timing or syndrome does not match.",
    },
  },
  mnemonics: [
    {
      code: "“Skin and nose share the epidermidis; the mouth owns its viridans; the colon runs anaerobic; the vagina keeps its acid.”",
      meaning:
        "KYP's key for the flora directory: SKIN and NOSE — S epidermidis (with S aureus the nose's colonizer); OROPHARYNX — viridans group streptococci (S mutans owning the plaque); COLON — B fragilis > E coli (the anaerobe dominates); VAGINA — Lactobacillus (colonized by E coli and group B strep — the peripartum screen). C-section neonates: skin-commensal enrichment.",
      memorizes: "The site-ownership map",
      whenToUse: "Any flora, culture-interpretation, or colonization question.",
      clinical: "The commensal is normal at its site; the colonizer is the pathogen-in-waiting.",
    },
    {
      code: "“The picnic pair is over before it starts: hours in, hours out.”",
      meaning:
        "KYP's key for the quick-quick rule: S AUREUS (meats, mayonnaise, custard) and B CEREUS (reheated rice) food poisoning STARTS QUICKLY AND ENDS QUICKLY — the exotoxin is preformed in the food, so there is no incubation to wait through: vomiting within hours, resolution within a day, no fever.",
      memorizes: "The preformed-toxin timing pair",
      whenToUse: "Any foodborne timing stem.",
      clinical: "Hours + emesis + resolution = preformed toxin; a day or more + diarrhea = the incubating growers.",
    },
    {
      code: "“Name the food, name the bug: rice, can, meat, deli, egg, mayo, oyster.”",
      meaning:
        "KYP's key for the source map: RICE = B cereus · CANNED FOOD (and raw honey) = C botulinum · REHEATED MEAT = C perfringens · UNDERCOOKED MEAT = E coli O157:H7 · DELI MEATS + SOFT CHEESES = Listeria (the pregnancy list) · POULTRY + EGGS = Salmonella · MAYO + CUSTARD = S aureus · RAW SEAFOOD = the vibrios — and V vulnificus also owns the seawater-shellfish WOUND infection.",
      memorizes: "The foodborne source directory",
      whenToUse: "Any food-exposure question.",
      clinical: "The exposure names the organism before the lab does.",
    },
  ],
  rapidReview: {
    s30: [
      "Skin = S epidermidis · Nose = S epidermidis + S aureus colonization · Oropharynx = viridans streptococci · Plaque = S mutans",
      "Colon = B fragilis > E coli (anaerobes dominate) · Vagina = Lactobacillus + E coli and group B strep colonization",
      "C-section neonates: microbiota enriched in skin commensals",
      "Quick-quick pair (preformed exotoxin, hours): S aureus (meats, mayonnaise, custard) · B cereus (reheated rice)",
      "V parahaemolyticus and V vulnificus: raw/undercooked seafood — V vulnificus also the wound infection of contaminated water/shellfish",
    ],
    m3: [
      "C botulinum: improperly canned foods (toxins) · raw honey (spores — the neonatal warning)",
      "C perfringens: reheated meat · E coli O157:H7: undercooked meat",
      "L monocytogenes: deli meats, soft cheeses (the pregnancy list)",
      "Salmonella: poultry, meat, and eggs",
      "Group B strep vaginal colonization = the intrapartum penicillin indication",
    ],
    m10: [
      "This is a TABLE NOTE (requiresVisual false — the E22/E35 pattern): both source tables carried verbatim in the note's table blocks",
      "Page ownership: book 174's Prions block belongs to M25; the microbiota and foodborne blocks belong here (cross-documented in both manifests)",
      "The banner typo on this page is 'MICROCIOLOGY—SYSTEMS' — the SYSTEMS banner, not VIROLOGY",
      "FA's printed gloss ('Food poisoning from reheated rice? Be serious!') is quoted in the table block for verification only",
      "The page is pure text — 0 rasters",
    ],
  },
  recall: [
    {
      q: "Recite the normal-flora directory with the colonization annotations.",
      a: "SKIN: S epidermidis. NOSE: S epidermidis; colonized by S aureus. OROPHARYNX: viridans group streptococci. DENTAL PLAQUE: S mutans. COLON: B fragilis > E coli. VAGINA: Lactobacillus; colonized by E coli and group B strep. Neonates delivered by C-section have microbiota enriched in skin commensals.",
    },
    {
      q: "Give the foodborne source map with the timing rule.",
      a: "QUICK-QUICK (exotoxin-mediated, starts and ends quickly): S aureus — meats, mayonnaise, custard (preformed toxin); B cereus — reheated rice. THE REST: C botulinum — improperly canned foods (toxins), raw honey (spores); C perfringens — reheated meat; E coli O157:H7 — undercooked meat; L monocytogenes — deli meats, soft cheeses; Salmonella — poultry, meat, and eggs; V parahaemolyticus and V vulnificus — raw/undercooked seafood (V vulnificus also wound infections from contaminated water or shellfish).",
    },
    {
      q: "Which flora facts drive clinical protocols?",
      a: "S epidermidis on prosthetic devices (the biofilm pathogen of lines, shunts, and joints); viridans streptococci after dental work (the damaged-valve endocarditis); anaerobe dominance in the colon (B fragilis > E coli — anaerobic coverage in colorectal and intra-abdominal disease); group B strep vaginal colonization (the intrapartum penicillin); E coli vaginal colonization (the neonatal sepsis partner); the C-section skin-commensal microbiome.",
    },
    {
      q: "Why do S aureus and B cereus food poisoning start and end quickly?",
      a: "Both are exotoxin-mediated with PREFORMED toxin: the organism grew in the food before it was eaten and made its toxin there (S aureus in meats, mayonnaise, custard; B cereus in reheated rice stored at room temperature). No in-vivo replication or incubation is needed — vomiting begins within hours and the illness resolves within a day.",
    },
    {
      q: "Which body site pairs with which commensal, and what clinical question does each pair answer?",
      a: "SKIN = S epidermidis (the device-infection organism when it reaches plastic — lines, shunts, prosthetic joints). NOSE = S epidermidis with S aureus colonization (the carriage state preceding staphylococcal disease). OROPHARYNX = viridans streptococci (the dental-work bacteremia that seeds damaged valves). DENTAL PLAQUE = S mutans (the caries builder). COLON = B fragilis > E coli (anaerobic dominance — coverage in colorectal and intra-abdominal infection). VAGINA = Lactobacillus with E coli and group B strep colonization (the peripartum GBS screen and the neonatal sepsis differential).",
    },
  ],
  related: [
    {
      title: "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
      topicId: "enteric-pathogens",
      note: "M13's enteric grid is the pathogen-side counterpart of this note's foodborne source map — the E coli O157:H7 row here (undercooked meat, no-antibiotic HUS logic) is M13's EHEC strain in its exposure context.",
    },
    {
      title: "Gram-Positive Cocci: Staphylococcus & Streptococcus",
      topicId: "gram-positive-cocci",
      note: "M9's staphylococcal split (S aureus the pathogen, S epidermidis the device commensal) and its viridans-streptococci row are the pathogen chapters behind this directory's flora entries.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "E38's deficiency matrix shows what happens when this note's flora meets a failing immune system — the colon's B fragilis and the skin's S epidermidis become the neutropenia and line-infection organisms.",
    },
  ],
  crossLinks: [
    {
      subject: "Obstetrics (Group B Streptococcus Screening)",
      connection:
        "The vagina's group B strep colonization is the indication for the late-pregnancy screen and intrapartum penicillin — the colonization annotation made protocol, and the neonatal sepsis differential's first row.",
    },
    {
      subject: "Gastroenterology (Foodborne Outbreak Investigation)",
      connection:
        "The timing-and-source map is the epidemiologist's first tool: hours-to-emesis points to preformed toxin (S aureus, B cereus); day-plus diarrhea points to the incubating growers — the incubation period names the cohort to interview.",
    },
    {
      subject: "Infectious Disease (Device-Associated Infection)",
      connection:
        "S epidermidis, the skin's commensal here, is the biofilm pathogen of catheters, CSF shunts, and prosthetic joints — normal flora becoming the device-infection organism.",
    },
    {
      subject: "Neonatology (Microbiome Establishment)",
      connection:
        "The C-section note — neonates delivered abdominally start with skin-commensal-enriched microbiota — is the clinical anchor of delivery-mode microbiome science and its immunologic consequences.",
    },
  ],
};
