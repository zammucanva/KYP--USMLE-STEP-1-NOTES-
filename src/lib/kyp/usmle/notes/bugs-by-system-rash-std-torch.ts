import type { KypUsMLENote } from "../types";

// Microbiology — SYSTEMS banner (M-batch 30). Source: pdf 199-204 / books
//  177-182 (Red rashes of childhood; Urinary tract infections; Common
//  vaginal infections; Sexually transmitted infections; TORCH infections;
//  Pelvic inflammatory disease; Healthcare-associated infections; Bugs
//  affecting unvaccinated children). Rasters: 20 clinical photos across
//  books 177-181 (the rash set A-E; the vaginal set A-D; the STD set A-F;
//  the TORCH set A-C; the PID set A-B) — all COPYRIGHTED, described-in-text
//  only. The SYSTEMS banner typo 'MICROCIOLOGY—SYSTEMS' prints on books
//  177-181. FA's printed mnemonics (SCARLET; do cry; the ruby earrings
//  line; the CMV expansion) are quoted in the table block for verification
//  only.

export const bugsBySystemRashStdTorch: KypUsMLENote = {
  id: "bugs-by-system-rash-std-torch",
  title: "Bugs by System: Rash, STDs, TORCH & Nosocomial",
  subtitle:
    "The second systems page-set. RED RASHES OF CHILDHOOD (book 177): coxsackievirus type A (hand-foot-mouth — oval vesicles on palms and soles; vesicles and ulcers in the oral mucosa = herpangina); HHV-6 (roseola — rose-colored macules after several days of high fever, febrile seizures, infants); measles (confluent rash beginning at head and moving down, preceded by cough, coryza, conjunctivitis, and Koplik spots); parvovirus B19 (erythema infectiosum — slapped cheek); rubella (pink macules and papules head-down, DISCRETE, postauricular lymphadenopathy); S pyogenes (scarlet fever — the SCARLET expansion); VZV (chickenpox — trunk-first vesicles of different stages). URINARY TRACT INFECTIONS (book 178): cystitis (dysuria, frequency, urgency, suprapubic pain, WBCs without casts) vs pyelonephritis (fever, chills, flank pain, CVA tenderness, hematuria, WBC CASTS); 10× females; the species ladder (E coli, S saprophyticus, Klebsiella, Serratia, Enterococcus, Proteus, Pseudomonas) with the leukocyte-esterase/nitrite markers. VAGINAL INFECTIONS: the three-way comparison (BV — clue cells, pH >4.5, whiff test; Trichomonas — strawberry cervix, motile pear-shaped, pH >4.5, treat partners; Candida — pseudohyphae, pH NORMAL). STD DIRECTORY (book 179): the 13-row directory with the PAIN AXIS (painful — chancroid, herpes; painless — syphilis chancre, LGV, granuloma inguinale) and PID (book 181). TORCH (book 180): ToRCHHeS vertical transmission with the calcification key (Toxoplasma intracranial vs CMV periventricular) and the blueberry muffin rash. HEALTHCARE-ASSOCIATED INFECTIONS (book 181): the 8-row risk-factor routing. And the capstone — BUGS AFFECTING UNVACCINATED CHILDREN (book 182).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Systems Microbiology",
  pilotCategory:
    "Systems microbiology II — the childhood rash directory on the topography axis, the urinary and vaginal syndromes on the pH and cast axes, the STD directory on the pain axis, the TORCH maternal-fetal map on the calcification axis, the nosocomial risk-factor routing, and the unvaccinated-child capstone",
  difficulty: 2,
  readTime: 15,
  sourceRef:
    "First Aid 2026, Part 1 pp. 177–182 (Red rashes of childhood; Urinary tract infections; Common vaginal infections; Sexually transmitted infections; TORCH infections; Pelvic inflammatory disease; Healthcare-associated infections; Bugs affecting unvaccinated children)",
  tags: [
    "red rashes of childhood",
    "coxsackievirus",
    "hand-foot-mouth disease",
    "herpangina",
    "HHV-6",
    "roseola",
    "exanthem subitum",
    "febrile seizures",
    "measles",
    "rubeola",
    "Koplik spots",
    "confluent rash",
    "parvovirus B19",
    "erythema infectiosum",
    "fifth disease",
    "slapped cheek rash",
    "rubella",
    "postauricular lymphadenopathy",
    "scarlet fever",
    "erythrogenic toxin",
    "strawberry tongue",
    "circumoral pallor",
    "chickenpox",
    "varicella-zoster",
    "lesions of different stages",
    "cystitis",
    "pyelonephritis",
    "WBC casts",
    "dysuria",
    "costovertebral angle tenderness",
    "E coli",
    "MacConkey agar",
    "S saprophyticus",
    "Klebsiella pneumoniae",
    "Serratia marcescens",
    "Proteus mirabilis",
    "struvite stones",
    "urease",
    "Pseudomonas aeruginosa",
    "leukocyte esterase",
    "nitrite test",
    "bacterial vaginosis",
    "clue cells",
    "KOH whiff test",
    "trichomonas vaginitis",
    "strawberry cervix",
    "candida vulvovaginitis",
    "pseudohyphae",
    "chancroid",
    "Haemophilus ducreyi",
    "chlamydia",
    "Chlamydia trachomatis D-K",
    "condylomata acuminata",
    "HPV-6",
    "HPV-11",
    "koilocytes",
    "herpes genitalis",
    "HSV-2",
    "gonorrhea",
    "Neisseria gonorrhoeae",
    "granuloma inguinale",
    "Donovan bodies",
    "lymphogranuloma venereum",
    "buboes",
    "primary syphilis",
    "chancre",
    "secondary syphilis",
    "condylomata lata",
    "tertiary syphilis",
    "Argyll Robertson pupil",
    "trichomoniasis",
    "PID",
    "pelvic inflammatory disease",
    "cervical motion tenderness",
    "Fitz-Hugh-Curtis syndrome",
    "violin string adhesions",
    "tubo-ovarian abscess",
    "TORCH",
    "ToRCHHeS",
    "Toxoplasma gondii",
    "chorioretinitis",
    "hydrocephalus",
    "intracranial calcifications",
    "blueberry muffin rash",
    "cytomegalovirus",
    "periventricular calcifications",
    "congenital rubella",
    "cataracts",
    "PDA",
    "hydrops fetalis",
    "saber shins",
    "notched teeth",
    "saddle nose",
    "CN VIII deafness",
    "healthcare-associated infections",
    "C difficile",
    "aspiration pneumonia",
    "MRSA",
    "S epidermidis",
    "Acinetobacter",
    "Legionella",
    "water aerosols",
    "PEcK",
    "unvaccinated children",
    "epiglottitis",
    "pertussis",
    "whooping cough",
    "diphtheria",
    "pseudomembranes",
    "tetanus",
    "opisthotonus",
    "poliovirus",
  ],
  core: {
    what: "THE RASH DIRECTORY (book 177). Seven childhood exanthems, each with a morphology-and-distribution signature: COXSACKIEVIRUS TYPE A — hand-foot-mouth disease, oval-shaped vesicles on the palms and soles with vesicles and ulcers in the oral mucosa (herpangina); HHV-6 — roseola (exanthem subitum), rose-colored macules that appear on the body after several days of high fever (the fever breaks, then the rash flowers), with febrile seizures and an infant predominance; MEASLES VIRUS — rubeola, a confluent rash beginning at the head and moving down, preceded by cough, coryza, conjunctivitis, and blue-white Koplik spots on the buccal mucosa; PARVOVIRUS B19 — erythema infectiosum (fifth disease), the slapped-cheek facial rash; RUBELLA VIRUS — pink macules and papules that begin at the head and move down but REMAIN DISCRETE, with a fine desquamating truncal rash and postauricular lymphadenopathy; STREPTOCOCCUS PYOGENES — scarlet fever, the sandpaperlike rash from neck to trunk and extremities with sore throat, circumoral pallor, lymphadenopathy, erythrogenic toxin, and strawberry tongue; VARICELLA-ZOSTER VIRUS — chickenpox, a vesicular rash that begins on the TRUNK and spreads to face and extremities with lesions of DIFFERENT STAGES. THE URINARY SYNDROMES (book 178). CYSTITIS — dysuria, frequency, urgency, suprapubic pain, and WBCs (but not WBC casts) in urine; ascending microbes from urethra to bladder. PYELONEPHRITIS — the ascension reaches the kidney: fever, chills, flank pain, costovertebral angle tenderness, hematuria, and WBC CASTS. Ten times more common in females (shorter urethras colonized by fecal microbiota); risk factors — obstruction (kidney stones, enlarged prostate), kidney surgery, catheterization, congenital GU malformation (vesicoureteral reflux), diabetes, pregnancy. THE SPECIES LADDER: E COLI (the leading cause; strong pink lactose-fermentation on MacConkey agar), S SAPROPHYTICUS (2nd, particularly in young sexually active females), KLEBSIELLA PNEUMONIAE (3rd; large mucoid capsule, viscous colonies), SERRATIA MARCESCENS (red pigment; healthcare-associated, drug resistant), ENTEROCOCCUS (healthcare-associated, drug resistant), PROTEUS MIRABILIS (motility causes swarming on agar; struvite stones; urease), PSEUDOMONAS AERUGINOSA (blue-green pigment, fruity odor; healthcare-associated, drug resistant). THE MARKERS: leukocyte esterase = WBC activity; nitrite = reduction of urinary nitrates by gram ⊝ species (eg, E coli). THE VAGINAL TRIAD (book 178). BACTERIAL VAGINOSIS — no inflammation, thin white discharge with fishy odor, clue cells (bacteria-coated epithelial cells), pH >4.5, ⊕ KOH whiff test → metronidazole or clindamycin. TRICHOMONAS VAGINITIS — inflammation (strawberry cervix), frothy yellow-green foul-smelling discharge, motile pear-shaped trichomonads, pH >4.5 → metronidazole AND treat sexual partner(s). CANDIDA VULVOVAGINITIS — inflammation, thick white cottage-cheese discharge, pseudohyphae, pH NORMAL (4.0–4.5) → azoles. THE STD DIRECTORY (book 179) — see the pain axis below, with PID (book 181) as the ascending complication: cervical motion tenderness, adnexal tenderness, purulent cervical discharge; top bugs C trachomatis (subacute, often undiagnosed — the most common bacterial STI in the US) and N gonorrhoeae (acute); salpingitis risks ectopic pregnancy, infertility, chronic pelvic pain, adhesions, and Fitz-Hugh–Curtis syndrome (perihepatitis with violin-string adhesions). TORCH (book 180): ToRCHHeS — the microbes that pass from mother to fetus, transplacentally in most cases or via vaginal delivery (especially HSV-2); the nonspecific neonatal set — hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction; the six agents with their maternal and neonatal columns (below). THE NOSOCOMIAL ROUTING (book 181): eight risk factors, eight organism sets — antibiotics/PPIs → C difficile; aspiration → polymicrobial gram ⊝ anaerobes; wounds and drains → S aureus (MRSA) with gram ⊝ anaerobes; intravascular catheters → S aureus and S epidermidis (long term); mechanical ventilation → late-onset Pseudomonas, Klebsiella, Acinetobacter, S aureus; blood products and shared equipment → HBV, HCV; urinary catheterization → Proteus, E coli, Klebsiella (PEcK); water aerosols → Legionella with its GI and neurologic signs. THE UNVACCINATED CAPSTONE (book 182): the presentation-to-pathogen table for the unimmunized child — rubella and measles by their lymphadenopathy and prodrome patterns, H influenzae type b meningitis (which colonizes the nasopharynx), poliovirus myalgia and paralysis, C tetani spasms and spastic paralysis, H influenzae type b epiglottitis (also capable in the FULLY immunized), Bordetella pertussis whooping cough with posttussive vomiting, and C diphtheriae grayish pseudomembranes.",
    why: "This page-set completes the systems matrices with the four axes an exam stem turns on. The first is THE TOPOGRAPHY AXIS of the childhood rashes: what the lesion looks like (vesicle, macule, papule, sandpaper), where it starts (palms and soles, trunk, head), and in what order (fever first versus rash first, discrete versus confluent) names the organism in one move — coxsackie's palms-and-soles vesicles against VZV's trunk-first crops of different stages, measles' confluent descent with its Koplik prodrome against rubella's discrete descent with postauricular nodes, HHV-6's fever-then-rose order against parvo's slapped cheek. The second is THE PAIN AXIS of the genital ulcer — the single most-tested STD discriminator: painful ulcers (chancroid — 'it's so painful, you do cry'; herpes — vesicles with bilateral TENDER inguinal lymphadenopathy) against painless ones (the syphilitic chancre, LGV's ulcers-then-painful-buboes, granuloma inguinale's beefy red ulcer that bleeds on contact) — with the discharge syndromes (gonorrhea's creamy purulence, chlamydia's silence) and the PID ascent as the complication layer. The third is THE VERTICAL-TRANSMISSION AXIS of TORCH: the maternal acquisition column predicts the neonatal syndrome, and the calcification location separates the two intracranial players (Toxoplasma's diffuse intracranial calcifications with hydrocephalus and chorioretinitis against CMV's periventricular calcifications with hearing loss). The fourth is THE EXPOSURE-ROUTING AXIS of the healthcare-associated table: the device or the exposure names the organism set — the line, the catheter, the ventilator, the wound, the water source.",
    keyIdea:
      "Read the surface, the pain, and the exposure. RASH — palms/soles vesicles = coxsackie A (herpangina); trunk-first crops of different stages = VZV; head-down CONFLUENT + Koplik + cough/coryza/conjunctivitis = measles; head-down DISCRETE + postauricular LAD = rubella; fever first, then rose macules + febrile seizures = HHV-6; slapped cheek = parvovirus B19; sandpaper + strawberry tongue + circumoral pallor = scarlet fever (erythrogenic toxin). URINE — WBCs without casts + dysuria/frequency/urgency/suprapubic pain = cystitis; + fever/chills/flank pain/CVA tenderness/hematuria + WBC CASTS = pyelonephritis; E coli #1 (pink MacConkey), S saprophyticus #2 (young sexually active), Klebsiella #3 (mucoid); esterase = WBCs, nitrite = gram ⊝. VAGINAL — BV: no inflammation, thin white fishy, clue cells, pH >4.5, whiff ⊕; Trich: strawberry cervix, frothy yellow-green, motile pear-shaped, pH >4.5, treat partners; Candida: cottage cheese, pseudohyphae, pH NORMAL, azoles. GENITAL ULCER — PAINFUL: chancroid (do cry) + HSV-2 (tender bilateral LAD); PAINLESS: syphilis chancre, LGV (painless ulcers → painful buboes), granuloma inguinale (beefy red, bleeds, Donovan bodies). PID: cervical motion + adnexal tenderness + purulent discharge; chlamydia subacute, gonococcus acute; Fitz-Hugh–Curtis = violin strings. TORCH — Toxo: cat/undercooked meat, chorioretinitis + hydrocephalus + INTRACRANIAL calcifications; Rubella: droplets, cataracts + deafness + PDA; CMV: sexual/transplant, hearing loss + PERIVENTRICULAR calcifications; HIV: recurrent infections, chronic diarrhea; HSV-2: vaginal delivery, meningoencephalitis + vesicles; Syphilis: stillbirth, hydrops, notched teeth, saddle nose, saber shins, CN VIII deafness. The nonspecific set: hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction. NOSOCOMIAL — antibiotics/PPIs = C difficile; aspiration = anaerobes (RLL or recumbent RUL/RML); wounds = S aureus + anaerobes; lines = S aureus, S epi (long term); ventilator = Pseudomonas, Klebsiella, Acinetobacter (late); blood products = HBV/HCV; urinary catheter = PEcK; water aerosols = Legionella (pneumonia + GI + neuro).",
  },
  mechanisms: [
    {
      id: "rash-topography-logic",
      title: "The rash topography: morphology + starting point + order names the virus",
      context: "Seven childhood exanthems on one axis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A child presents with fever and a rash — what does the lesion look like, where did it start, and in what order relative to the fever?",
            sublabel: "Input — the three questions of every exanthem stem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE VESICULAR BRANCH: oval vesicles on the PALMS AND SOLES with oral ulcers (herpangina) = COXSACKIEVIRUS TYPE A (hand-foot-mouth); vesicles starting on the TRUNK and spreading to face and extremities with lesions of DIFFERENT STAGES = VARICELLA-ZOSTER (chickenpox); painful genital vesicles with bilateral TENDER inguinal nodes = HSV-2 (the M23 latency map)",
            sublabel: "Process — the vesicle's location names the virus.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE HEAD-DOWN BRANCH: CONFLUENT rash with the prodrome of cough, coryza, conjunctivitis, and blue-white Koplik spots on the buccal mucosa = MEASLES; DISCRETE pink macules and papules with POSTAURICULAR lymphadenopathy and a fine desquamating truncal finish = RUBELLA",
            sublabel: "Process — both descend head-to-toe; confluence and the prodrome split them.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE ORDER AND MORPHOLOGY KEYS: several days of HIGH FEVER FIRST, then rose-colored macules once the fever breaks (with febrile seizures, in infants) = HHV-6 ROSEOLA; the facial SLAPPED CHEEK = PARVOVIRUS B19 (erythema infectiosum, fifth disease); SANDPAPER texture from neck to trunk and extremities with sore throat, circumoral pallor, lymphadenopathy, erythrogenic toxin, and strawberry tongue = S PYOGENES SCARLET FEVER — the bacterial one",
            sublabel: "Process — fever-first order and cheek/sandpaper morphology close the directory.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the unvaccinated-child capstone (book 182): the same rashes return by lymph-node pattern (rubella = postauricular, posterior cervical, and suboccipital; measles = the Koplik prodrome), and the vaccine-preventable set fills in — H influenzae type b (nasopharyngeal colonization → meningitis; epiglottitis EVEN in the fully immunized child), poliovirus (myalgia and paralysis), C tetani (muscle spasms, spastic paralysis, lockjaw, opisthotonus), Bordetella pertussis (low-grade fevers and coryza → whooping cough → posttussive vomiting → gradual recovery), C diphtheriae (grayish pseudomembranes that may obstruct airways)",
            sublabel: "Output — the directory becomes the differential for the unimmunized presentation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "vesicular?" },
          { from: "s1", to: "s2", label: "maculopapular head-down" },
          { from: "s2", to: "s3", label: "order + special morphology" },
          { from: "s3", to: "o1", label: "the unvaccinated capstone" },
        ],
      },
    },
    {
      id: "ulcer-pain-axis",
      title: "The pain axis: pain (and its absence) routes the genital ulcer and the discharge",
      context: "The STD directory and the PID ascent",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A sexually active patient presents with a genital lesion or discharge — is the lesion painful?",
            sublabel: "Input — the first branch of every STD stem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE PAINFUL PAIR: CHANCROID — painful genital ulcer(s) with exudate and inguinal adenopathy, Haemophilus ducreyi (FA's printed gloss: 'it's so painful, you do cry' — verification-only); HERPES GENITALIS — painful penile, vulvar, or cervical vesicles and ulcers with bilateral TENDER inguinal lymphadenopathy and possible systemic symptoms (fever, headache, myalgia), HSV-2 more than HSV-1",
            sublabel: "Process — pain plus vesicles or exudate names the pair.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE PAINLESS TRIO: PRIMARY SYPHILIS — the painless chancre with regional lymphadenopathy (Treponema pallidum); LYMPHOGRANULOMA VENEREUM — infection of lymphatics with painless genital ulcers but PAINFUL lymphadenopathy (buboes), C trachomatis L1-L3; GRANULOMA INGUINALE (donovanosis) — the painless, beefy red ulcer that bleeds readily on contact, Klebsiella (Calymmatobacterium) granulomatis with cytoplasmic Donovan bodies on microscopy, uncommon in the US",
            sublabel: "Process — painless splits on the bubo and the bleeding beefy base.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE DISCHARGE SYNDROMES AND THE ASCENT: GONORRHEA — urethritis, cervicitis, PID, prostatitis, epididymitis, arthritis, and the creamy purulent discharge (N gonorrhoeae); CHLAMYDIA — urethritis, cervicitis, epididymitis, conjunctivitis, reactive arthritis, PID (C trachomatis D–K), the most common bacterial STI in the US; CONDYLOMATA ACUMINATA — genital warts with koilocytes (HPV-6 and -11); HEPATITIS B — jaundice (HBV); TRICHOMONIASIS — vaginitis, strawberry cervix, motile in wet prep (T vaginalis). THE ASCENT (book 181): PID — cervical motion tenderness, adnexal tenderness, purulent cervical discharge, with salpingitis, endometritis, hydrosalpinx, and tubo-ovarian abscess; chlamydia runs SUBACUTE and often undiagnosed, gonococcus runs ACUTE; salpingitis risks ectopic pregnancy, infertility, chronic pelvic pain, adhesions; perihepatitis = Fitz-Hugh–Curtis syndrome with violin-string adhesions of peritoneum to liver",
            sublabel: "Process — the discharge names the organism; the ascent names the complication.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the management layer: trichomoniasis requires treating sexual partner(s) (metronidazole); the vaginal triad's pH and microscopy (BV — clue cells, pH >4.5, ⊕ whiff; Candida — pseudohyphae, pH normal) complete the women's-health column; the syphilis stages chain forward (2° — fever, diffuse lymphadenopathy, generalized rash, condylomata lata; 3° — gummas, tabes dorsalis, general paresis, aortitis, Argyll Robertson pupil)",
            sublabel: "Output — the directory converts the lesion into a regimen and a partner plan.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "painful" },
          { from: "trigger", to: "s2", label: "painless" },
          { from: "s1", to: "s3", label: "the discharge syndromes" },
          { from: "s2", to: "s3", label: "the ascent to PID" },
          { from: "s3", to: "o1", label: "management + staging" },
        ],
      },
    },
    {
      id: "torch-vertical-transmission",
      title: "The vertical transmission map: maternal acquisition predicts the neonatal syndrome",
      context: "ToRCHHeS and the calcification key",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A pregnant patient is exposed or presents — which agent, which route, and what does the fetus risk?",
            sublabel: "Input — the TORCH stem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE ROUTE AND THE SHARED SET: transmission is TRANSPLACENTAL in most cases or via VAGINAL DELIVERY (especially HSV-2); the nonspecific signs common to many ToRCHHeS infections — hepatosplenomegaly, jaundice, thrombocytopenia, and growth restriction; the other important neonatal agents — S agalactiae (GBS), E coli, and Listeria monocytogenes (all causes of neonatal meningitis — the M29 ladder), and parvovirus B19 (hydrops fetalis)",
            sublabel: "Process — the route and the shared signs frame every case.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE SIX AGENTS: TOXOPLASMA GONDII (cat feces or undercooked meat; usually asymptomatic mother; the classic triad of chorioretinitis, hydrocephalus, and INTRACRANIAL calcifications, ± blueberry muffin rash); RUBELLA (respiratory droplets; maternal rash, lymphadenopathy, polyarthritis, polyarthralgia; eye-cataracts, ear-deafness, heart-PDA ± blueberry muffin rash); CMV (sexual contact, organ transplants; usually asymptomatic or mononucleosis-like; hearing loss, seizures, petechial rash, blueberry muffin rash, chorioretinitis, PERIVENTRICULAR calcifications); HIV (sexual contact, needlestick; variable by CD4+ count; recurrent infections, chronic diarrhea); HSV-2 (skin or mucous membrane contact; usually asymptomatic or herpetic lesions; meningoencephalitis and vesicular lesions); SYPHILIS (sexual contact; the chancre of 1° and the disseminated rash of 2° are the two stages likely to infect the fetus; stillbirth and hydrops fetalis, and if the child survives — notched teeth, saddle nose, rhinitis, short maxilla, saber shins, CN VIII deafness)",
            sublabel: "Process — each agent pairs its maternal column with a neonatal signature.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the two calcifications split the intracranial players: Toxoplasma calcifies the BRAIN PARENCHYMA (diffuse intracranial, with hydrocephalus and chorioretinitis) while CMV calcifies the VENTRICLE WALL (periventricular, with hearing loss); rubella calcifies nothing — its triad is eye (cataracts), ear (deafness), heart (PDA); the blueberry muffin rash is shared by Toxoplasma, Rubella, and CMV rows",
            sublabel: "Output — the calcification location is the tiebreaker of every congenital-infection stem.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "route + shared set" },
          { from: "s1", to: "s2", label: "the six agents" },
          { from: "s2", to: "o1", label: "the calcification key" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "systems-bug-matrix-2",
      title: "The systems bug matrix II — rashes, urinary, vaginal, STDs, TORCH, nosocomial",
      caption:
        "An original KYP redraw of the source's page-set (books 177-181): the red-rashes-of-childhood directory with the topography key, the UTI syndromes with the species ladder and diagnostic markers, the three-way vaginal comparison, the STD directory with the pain axis and the PID layer, the TORCH maternal-fetal map with the calcification key, and the healthcare-associated risk-factor routing.",
      notice:
        "All 20 printed clinical photos (the rash set A-E book 177; the vaginal set A-D book 178; the STD set A-F book 179; the TORCH set A-C book 180; the PID set A-B book 181) are raster, COPYRIGHTED, described-in-text only. FA's printed mnemonics (the SCARLET expansion; the do-cry gloss; the ruby-earrings line; the CMV expansion) stay in the note's table block — verification-only, not redrawn.",
    },
    {
      kind: "table",
      title: "The systems page-set — verbatim",
      intro: "The source's eight blocks (books 177-182), verbatim.",
      columns: ["Block", "Content (verbatim; FA's printed mnemonics marked)"],
      rows: [
        [
          "Red rashes of childhood (book 177)",
          "AGENT | ASSOCIATED SYNDROME/DISEASE | CLINICAL PRESENTATION: Coxsackievirus type A | Hand-foot-mouth disease | Oval-shaped vesicles on palms and soles; vesicles and ulcers in oral mucosa (herpangina). Human herpesvirus 6 | Roseola (exanthem subitum) | Asymptomatic rose-colored macules appear on body after several days of high fever; can present with febrile seizures; usually affects infants. Measles virus | Measles (rubeola) | Confluent rash beginning at head and moving down; preceded by cough, coryza, conjunctivitis, and blue-white (Koplik) spots on buccal mucosa. Parvovirus B19 | Erythema infectiosum (fifth disease) | 'Slapped cheek' rash on face. Rubella virus | Rubella | Pink macules and papules begin at head and move down, remain discrete → fine desquamating truncal rash; postauricular lymphadenopathy. Streptococcus pyogenes | Scarlet fever | Sore throat, Circumoral pallor, group A strep, Rash (sandpaperlike, from neck to trunk and extremities), Lymphadenopathy, Erythrogenic toxin, strawberry Tongue (SCARLET) [FA's printed mnemonic — verification-only]. Varicella-zoster virus | Chickenpox | Vesicular rash begins on trunk, spreads to face and extremities with lesions of different stages.",
        ],
        [
          "Urinary tract infections (book 178)",
          "Cystitis presents with dysuria, frequency, urgency, suprapubic pain, and WBCs (but not WBC casts) in urine. Primarily caused by ascension of microbes from urethra to bladder. Ascension to kidney results in pyelonephritis, which presents with fever, chills, flank pain, costovertebral angle tenderness, hematuria, and WBC casts. Ten times more common in females (shorter urethras colonized by fecal microbiota). Risk factors: obstruction (eg, kidney stones, enlarged prostate), kidney surgery, catheterization, congenital GU malformation (eg, vesicoureteral reflux), diabetes, pregnancy. SPECIES | FEATURES | COMMENTS: Escherichia coli | Leading cause of UTI. Colonies show strong pink lactose-fermentation on MacConkey agar. Staphylococcus saprophyticus | 2nd leading cause of UTI, particularly in young, sexually active females. Klebsiella pneumoniae | 3rd leading cause of UTI. Large mucoid capsule and viscous colonies. Serratia marcescens | Some strains produce a red pigment; often healthcare-associated and drug resistant. Enterococcus | Often healthcare-associated and drug resistant. Proteus mirabilis | Motility causes 'swarming' on agar; associated with struvite stones. Produces urease. Pseudomonas aeruginosa | Blue-green pigment and fruity odor; usually healthcare-associated and drug resistant. Diagnostic markers: Leukocyte esterase = evidence of WBC activity. Nitrite test = reduction of urinary nitrates by gram ⊝ bacterial species (eg, E coli).",
        ],
        [
          "Common vaginal infections (book 178)",
          "Bacterial vaginosis | Trichomonas vaginitis | Candida vulvovaginitis. SIGNS AND SYMPTOMS: No inflammation; Thin, white discharge with fishy odor | Inflammation ('strawberry cervix'); Frothy, yellow-green, foul-smelling discharge | Inflammation; Thick, white, 'cottage cheese' discharge. LAB FINDINGS: Clue cells (bacteria-coated epithelial cells); pH >4.5; ⊕ KOH whiff test | Motile pear-shaped trichomonads; pH >4.5 | Pseudohyphae; pH normal (4.0–4.5). TREATMENT: Metronidazole or clindamycin | Metronidazole; Treat sexual partner(s) | Azoles.",
        ],
        [
          "Sexually transmitted infections (book 179)",
          "DISEASE | CLINICAL FEATURES | PATHOGEN: AIDS | Opportunistic infections, Kaposi sarcoma, lymphoma | HIV. Chancroid | Painful genital ulcer(s) with exudate, inguinal adenopathy | Haemophilus ducreyi (it's so painful, you 'do cry') [FA's printed gloss — verification-only]. Chlamydia | Urethritis, cervicitis, epididymitis, conjunctivitis, reactive arthritis, PID | Chlamydia trachomatis (D–K). Condylomata acuminata | Genital warts, koilocytes | HPV-6 and -11. Herpes genitalis | Painful penile, vulvar, or cervical vesicles and ulcers with bilateral tender inguinal lymphadenopathy; can cause systemic symptoms such as fever, headache, myalgia | HSV-2, less commonly HSV-1. Gonorrhea | Urethritis, cervicitis, PID, prostatitis, epididymitis, arthritis, creamy purulent discharge | Neisseria gonorrhoeae. Granuloma inguinale (Donovanosis) | Painless, beefy red ulcer that bleeds readily on contact; uncommon in US | Klebsiella (Calymmatobacterium) granulomatis; cytoplasmic Donovan bodies (bipolar staining) seen on microscopy. Hepatitis B | Jaundice | HBV. Lymphogranuloma venereum | Infection of lymphatics; painless genital ulcers, painful lymphadenopathy (ie, buboes) | C trachomatis (L1-L3). Primary syphilis | Painless chancre, regional lymphadenopathy | Treponema pallidum. Secondary syphilis | Fever, diffuse lymphadenopathy, generalized rash, condylomata lata | Treponema pallidum. Tertiary syphilis | Gummas, tabes dorsalis, general paresis, aortitis, Argyll Robertson pupil | Treponema pallidum. Trichomoniasis | Vaginitis, strawberry cervix, motile in wet prep | Trichomonas vaginalis.",
        ],
        [
          "TORCH infections (book 180)",
          "Microbes that may pass from mother to fetus. Transmission is transplacental in most cases, or via vaginal delivery (especially HSV-2). Nonspecific signs common to many ToRCHHeS infections include hepatosplenomegaly, jaundice, thrombocytopenia, and growth restriction. Other important infectious agents include Streptococcus agalactiae (group B streptococci), E coli, and Listeria monocytogenes — all causes of meningitis in neonates. Parvovirus B19 causes hydrops fetalis. AGENT | MATERNAL ACQUISITION | MATERNAL MANIFESTATIONS | NEONATAL MANIFESTATIONS: Toxoplasma gondii | Cat feces or ingestion of undercooked meat | Usually asymptomatic; lymphadenopathy (rarely) | Classic triad: chorioretinitis, hydrocephalus, and intracranial calcifications, +/− 'blueberry muffin' rash. Rubella | Respiratory droplets | Rash, lymphadenopathy, polyarthritis, polyarthralgia | Classic triad: abnormalities of eye (cataracts) and ear (deafness) and congenital heart disease (PDA); +/– 'blueberry muffin' rash. 'I (eye) ♥ ruby (rubella) earrings' [FA's printed mnemonic — verification-only]. Cytomegalovirus | Sexual contact, organ transplants | Usually asymptomatic; mononucleosis-like illness | Hearing loss, seizures, petechial rash, 'blueberry muffin' rash, chorioretinitis, periventricular calcifications. CMV = Chorioretinitis, Microcephaly, periVentricular calcifications [FA's printed mnemonic — verification-only]. HIV | Sexual contact, needlestick | Variable presentation depending on CD4+ cell count | Recurrent infections, chronic diarrhea. Herpes simplex virus-2 | Skin or mucous membrane contact | Usually asymptomatic; herpetic (vesicular) lesions | Meningoencephalitis, herpetic (vesicular) lesions. Syphilis | Sexual contact | Chancre (1°) and disseminated rash (2°) are the two stages likely to result in fetal infection | Often results in stillbirth, hydrops fetalis; if child survives, presents with facial abnormalities (eg, notched teeth, saddle nose, rhinitis, short maxilla), saber shins, CN VIII deafness.",
        ],
        [
          "Pelvic inflammatory disease (book 181)",
          "Ascending infection causing inflammation of the female gynecologic tract. PID may include salpingitis, endometritis, hydrosalpinx, and tubo-ovarian abscess. Signs include cervical motion tenderness, adnexal tenderness, purulent cervical discharge (the printed photo A — described-in-text only). Top bugs — Chlamydia trachomatis (subacute, often undiagnosed), Neisseria gonorrhoeae (acute). C trachomatis — most common bacterial STI in the United States. Salpingitis is a risk factor for ectopic pregnancy, infertility, chronic pelvic pain, and adhesions. Can lead to perihepatitis (Fitz-Hugh–Curtis syndrome) — infection and inflammation of liver capsule and 'violin string' adhesions of peritoneum to liver (the printed photo B — described-in-text only).",
        ],
        [
          "Healthcare-associated infections (book 181)",
          "RISK FACTOR | PATHOGEN | UNIQUE SIGNS/SYMPTOMS: Antibiotic use, PPIs | C difficile | Watery diarrhea, leukocytosis. Aspiration (2° to altered mental status, old age) | Polymicrobial, gram ⊝ bacteria, often anaerobes | Right lower lobe infiltrate or right upper/middle lobe (patient recumbent); purulent malodorous sputum. Decubitus ulcers, surgical wounds, drains | S aureus (including MRSA), gram ⊝ anaerobes (Bacteroides, Prevotella, Fusobacterium) | Erythema, tenderness, induration, drainage from surgical wound sites. Intravascular catheters | S aureus (including MRSA), S epidermidis (long term) | Erythema, induration, tenderness, drainage from access sites. Mechanical ventilation, endotracheal intubation | Late onset: P aeruginosa, Klebsiella, Acinetobacter, S aureus | New infiltrate on CXR, ↑ sputum production; sweet odor (Pseudomonas). Exposure to blood products, shared medical equipment, needlesticks | HBV, HCV | —. Urinary catheterization | Proteus spp, E coli, Klebsiella (PEcK) | Dysuria, leukocytosis, flank pain or costovertebral angle tenderness. Water aerosols | Legionella | Signs of pneumonia, GI symptoms (diarrhea, nausea, vomiting), neurologic abnormalities.",
        ],
        [
          "Bugs affecting unvaccinated children (book 182)",
          "CLINICAL PRESENTATION | FINDINGS/LACS | PATHOGEN (by system — Dermatologic/Rash: Rubella virus — beginning at head and moving down with postauricular, posterior cervical, and suboccipital lymphadenopathy; Measles virus — beginning at head and moving down; preceded by cough, coryza, conjunctivitis, and Koplik spots. Neurologic/Meningitis: H influenzae type b — microbe colonizes nasopharynx; Poliovirus — can also lead to myalgia and paralysis. Tetanus: C tetani — muscle spasms and spastic paralysis (eg, lockjaw, opisthotonus). Respiratory: H influenzae type b — epiglottitis; fever with dysphagia, drooling, inspiratory stridor, and difficulty breathing due to edema (also capable of causing epiglottitis in fully immunized children); Bordetella pertussis — pertussis; low-grade fevers, coryza → whooping cough, posttussive vomiting → gradual recovery; Corynebacterium diphtheriae — pharyngitis; grayish pseudomembranes (may obstruct airways)).",
        ],
      ],
      caption:
        "The blocks read with the three mechanisms: the rash topography (morphology + starting point + order), the pain axis of the genital ulcer with the PID ascent, and the TORCH vertical-transmission map with the calcification key — with the nosocomial exposure routing and the unvaccinated-child capstone as the two lookup tables.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the page-set implies",
      body: "THE RASH PROTOCOL: palms-and-soles vesicles with oral ulcers → coxsackie A (hand-foot-mouth); trunk-first vesicles of different stages → VZV; head-down confluent with Koplik prodrome → measles; head-down discrete with postauricular nodes → rubella; fever-that-breaks-then-rose-macules in an infant → HHV-6 (watch for febrile seizures); slapped cheek → parvovirus B19; sandpaper with strawberry tongue and circumoral pallor → scarlet fever (group A strep, erythrogenic toxin). THE URINE PROTOCOL: dysuria + frequency + urgency + suprapubic pain + WBCs without casts → cystitis (E coli first; S saprophyticus in the young sexually active woman); add fever, chills, flank pain, CVA tenderness, hematuria, and WBC CASTS → pyelonephritis; esterase confirms WBCs, nitrite confirms gram ⊝ (E coli); Proteus → struvite stones with urease; Pseudomonas → blue-green, fruity, device-associated. THE VAGINAL PROTOCOL: thin white fishy + clue cells + pH >4.5 + ⊕ whiff → BV (metronidazole or clindamycin); frothy yellow-green + strawberry cervix + motile pear-shaped + pH >4.5 → trichomonas (metronidazole AND treat partners); cottage cheese + pseudohyphae + NORMAL pH → candida (azoles). THE ULCER PROTOCOL: painful → chancroid or herpes (vesicles, tender bilateral nodes); painless → syphilis (chancre), LGV (painless ulcers then painful buboes), granuloma inguinale (beefy red, bleeds on contact, Donovan bodies). The PID layer: cervical motion tenderness + adnexal tenderness + purulent discharge; chlamydia subacute, gonococcus acute; Fitz-Hugh–Curtis = the violin-string perihepatitis. THE TORCH PROTOCOL: the nonspecific set (hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction) opens the workup; the calcification location closes it — intracranial + hydrocephalus + chorioretinitis → Toxoplasma (cat feces, undercooked meat); periventricular + hearing loss → CMV; no calcification + cataracts + deafness + PDA → rubella; stillbirth + saber shins + notched teeth + CN VIII deafness → syphilis; vesicles + meningoencephalitis after vaginal delivery → HSV-2; and parvovirus B19 stands apart with hydrops fetalis. THE NOSOCOMIAL PROTOCOL: the exposure names the organism — antibiotics/PPIs → C difficile; aspiration → anaerobes (RLL upright, RUL/RML recumbent); wounds and drains → S aureus/MRSA + Bacteroides, Prevotella, Fusobacterium; lines → S aureus (S epidermidis when long term); ventilator late-onset → Pseudomonas, Klebsiella, Acinetobacter; blood products → HBV/HCV; urinary catheter → PEcK; water aerosols → Legionella (pneumonia + GI + neuro, the hygiene sign).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 14-month-old infant has had 39.5°C fever for 4 days and appears remarkably well between febrile spikes; today the fever has broken and a rose-colored macular rash has appeared on the trunk.",
        discriminator: "High fever FIRST, then rose macules once the fever breaks",
        concept: "Roseola (exanthem subitum) — HHV-6",
        answer:
          "Human herpesvirus 6 characteristically produces several days of high fever in an infant — often with febrile seizures — followed by rose-colored macules that appear once the fever resolves. The well-appearing child during the febrile phase and the fever-then-rash ORDER separate it from measles (confluent, head-down, with the Koplik prodrome) and rubella (discrete, head-down, with postauricular nodes).",
      },
      {
        stem: "A 19-year-old woman returns from a weekend trip with 2 days of dysuria, urinary frequency, urgency, and suprapubic pain; urinalysis shows WBCs without casts; she is afebrile with no flank findings.",
        discriminator: "WBCs WITHOUT casts + no systemic signs",
        concept: "Cystitis — E coli first, S saprophyticus in the young sexually active woman",
        answer:
          "Cystitis is dysuria, frequency, urgency, and suprapubic pain with WBCs (but not WBC casts) in the urine, from ascension of microbes from urethra to bladder. WBC CASTS, fever, chills, flank pain, CVA tenderness, and hematuria mark pyelonephritis — the ascension has reached the kidney. UTIs are ten times more common in females (shorter urethras colonized by fecal microbiota); E coli is the leading cause (strong pink lactose-fermentation on MacConkey), with S saprophyticus the classic second cause in the young, sexually active female.",
      },
      {
        stem: "A 24-year-old man has a painless penile ulcer with firm regional inguinal lymphadenopathy; a different patient has a beefy red, painless genital ulcer that bleeds readily on contact.",
        discriminator: "Painless ulcer — the chancre vs the beefy red base",
        concept: "Primary syphilis vs granuloma inguinale (donovanosis)",
        answer:
          "Both are on the PAINLESS side of the pain axis. The painless chancre with regional lymphadenopathy is PRIMARY SYPHILIS (Treponema pallidum). The painless, beefy red ulcer that bleeds readily on contact — uncommon in the US — is GRANULOMA INGUINALE (Klebsiella [Calymmatobacterium] granulomatis), with cytoplasmic Donovan bodies (bipolar staining) on microscopy. The painful pair is chancroid (H ducreyi — exudate, inguinal adenopathy) and herpes genitalis (HSV-2 vesicles with bilateral TENDER nodes); LGV twists the axis — painless ulcers, then PAINFUL buboes.",
      },
      {
        stem: "A newborn has hydrocephalus, chorioretinitis, and diffuse intracranial calcifications on CT; the mother cleaned a cat litter box and ate undercooked meat during pregnancy.",
        discriminator: "INTRACRANIAL (diffuse) calcifications + hydrocephalus + chorioretinitis",
        concept: "Congenital toxoplasmosis",
        answer:
          "Toxoplasma gondii is acquired from cat feces or ingestion of undercooked meat; the usually-asymptomatic mother transmits it transplacentally, and the neonatal classic triad is chorioretinitis, hydrocephalus, and INTRACRANIAL calcifications (± the blueberry muffin rash). The calcification location is the tiebreaker: CMV calcifies the VENTRICLE WALL (periventricular) with hearing loss; rubella has no calcifications — its triad is cataracts, deafness, and PDA.",
      },
    ],
    traps: [
      {
        a: "The rubella and measles rashes are interchangeable head-down exanthems",
        b: "Measles is CONFLUENT and preceded by cough, coryza, conjunctivitis, and Koplik spots; rubella remains DISCRETE with postauricular lymphadenopathy and a fine desquamating truncal finish",
        whyConfused: "Both begin at the head and move down.",
        keyDifference:
          "Confluence and the prodrome: measles merges its lesions on a sick-appearing child with the 3-C prodrome and blue-white Koplik spots on the buccal mucosa; rubella keeps discrete pink macules and papules on a well-appearing child with tender postauricular (and, in the unvaccinated table, posterior cervical and suboccipital) nodes.",
        clue: "Any childhood-rash stem naming lymphadenopathy or Koplik spots.",
      },
      {
        a: "Painless genital ulcer means syphilis",
        b: "Three organisms sit on the painless side — the syphilitic chancre, LGV (painless ulcers then PAINFUL buboes), and granuloma inguinale (beefy red, bleeds readily on contact, Donovan bodies)",
        whyConfused: "Syphilis is taught as the painless-ulcer prototype.",
        keyDifference:
          "The pain axis is only the first branch: the chancre is a clean painless ulcer with regional lymphadenopathy; LGV is an infection of lymphatics whose ULCERS are painless but whose BUBOES are painful (C trachomatis L1-L3); granuloma inguinale is the beefy red, bleeding, Donovan-body ulcer uncommon in the US. Pain narrows to the chancroid-herpes pair.",
        clue: "Any genital-ulcer stem with a pain qualifier.",
      },
      {
        a: "Inflamed vaginitis with discharge means the pH is elevated",
        b: "Candida keeps the pH NORMAL (4.0–4.5) — pH >4.5 belongs to BV (clue cells, ⊕ whiff) and trichomonas (motile pear-shaped trichomonads)",
        whyConfused: "Inflammation is assumed to alkalinize.",
        keyDifference:
          "The three-way split runs on microscopy and pH together: BV — no inflammation, thin white fishy discharge, clue cells, pH >4.5; trichomonas — inflammation with the strawberry cervix, frothy yellow-green discharge, motile pear-shaped organisms, pH >4.5, and partners must be treated; candida — inflammation with cottage-cheese discharge and pseudohyphae at a NORMAL pH, treated with azoles.",
        clue: "Any vaginal-discharge stem reporting pH or microscopy.",
      },
      {
        a: "A fully immunized child cannot get H influenzae type b epiglottitis",
        b: "H influenzae type b is also capable of causing epiglottitis in fully immunized children",
        whyConfused: "Vaccination is assumed to eliminate the disease.",
        keyDifference:
          "The conjugate vaccine dropped H influenzae meningitis and epiglottitis dramatically (the M29 vaccine note — today's cases are usually in unimmunized children), but the source's own line for the unvaccinated-children table keeps epiglottitis possible even in the fully immunized: fever with dysphagia, drooling, inspiratory stridor, and difficulty breathing due to edema.",
        clue: "A drooling, stridorous child with a complete vaccine record.",
      },
      {
        a: "All TORCH infections calcify the brain the same way",
        b: "Toxoplasma = INTRACRANIAL (diffuse parenchymal) calcifications with hydrocephalus and chorioretinitis; CMV = PERIVENTRICULAR calcifications with hearing loss; rubella = no calcifications (the eye-ear-heart triad)",
        whyConfused: "Congenital infection workups all mention intracranial findings.",
        keyDifference:
          "The calcification LOCATION is the tiebreaker of every congenital-infection stem: parenchymal/diffuse points to Toxoplasma (cat feces, undercooked meat), the ventricle wall points to CMV (the sexual-contact/transplant acquisition with a mononucleosis-like maternal illness), and the cataracts-deafness-PDA triad with a normal CT points to rubella. The blueberry muffin rash is shared by all three and does not discriminate.",
        clue: "Any neonatal CT finding described by location.",
      },
    ],
    pivots: [
      {
        lookAlike: "The head-down pair (measles vs rubella)",
        differentiator: "Confluence, the prodrome, and the nodes",
        correctPath:
          "MEASLES: confluent descent, preceded by cough, coryza, conjunctivitis, and blue-white Koplik spots. RUBELLA: discrete pink macules and papules descending, with postauricular lymphadenopathy and a fine desquamating truncal finish. The unvaccinated-children table adds rubella's posterior cervical and suboccipital nodes.",
      },
      {
        lookAlike: "The genital-ulcer pair by pain (painful vs painless)",
        differentiator: "Pain, vesicles, and the lymph node quality",
        correctPath:
          "PAINFUL: chancroid (H ducreyi — exudate, inguinal adenopathy) and herpes genitalis (HSV-2 — vesicles and ulcers with bilateral TENDER inguinal lymphadenopathy, possible fever, headache, myalgia). PAINLESS: primary syphilis (chancre with regional lymphadenopathy), LGV (painless ulcers, then PAINFUL buboes — C trachomatis L1-L3), and granuloma inguinale (beefy red, bleeds readily on contact, Donovan bodies, uncommon in the US).",
      },
      {
        lookAlike: "The two calcifying TORCH agents (Toxoplasma vs CMV)",
        differentiator: "The calcification location and the companion findings",
        correctPath:
          "TOXOPLASMA: INTRACRANIAL calcifications with hydrocephalus and chorioretinitis; acquisition from cat feces or undercooked meat. CMV: PERIVENTRICULAR calcifications with hearing loss (and seizures, petechial rash, chorioretinitis); acquisition from sexual contact or organ transplant, with the usually-asymptomatic or mononucleosis-like mother. Rubella calcifies nothing — cataracts, deafness, PDA.",
      },
    ],
    miniCase: {
      vignette:
        "A term male newborn is small for gestational age. On examination he has hepatosplenomegaly, jaundice, and a purplish “blueberry muffin” rash on the trunk; fundoscopy shows chorioretinitis, and the head circumference is above the 97th percentile with bulging fontanelles. Non-contrast head CT shows diffuse intracranial calcifications and enlarging ventricles. The mother's pregnancy was notable for frequent gardening, cleaning an outdoor cat litter box, and eating rare lamb during the second trimester; she recalls only a brief episode of tender neck swelling.",
      question:
        "Which agent caused the congenital infection, and which finding would have pointed instead to CMV?",
      options: [
        {
          label: "A",
          text: "Toxoplasma gondii — CMV would show periventricular calcifications with sensorineural hearing loss",
          correct: true,
          why: "Correct. Cat feces or undercooked meat acquisition, the usually-asymptomatic mother (lymphadenopathy rarely), and the classic neonatal triad — chorioretinitis, hydrocephalus, and DIFFUSE INTRACRANIAL calcifications — with the shared nonspecific signs (hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction) and the blueberry muffin rash. CMV's calcifications sit at the VENTRICLE WALL (periventricular) and pair with hearing loss, seizures, and a petechial rash.",
        },
        {
          label: "B",
          text: "Cytomegalovirus — Toxoplasma would show periventricular calcifications",
          why: "The calcification locations are swapped. CMV — acquired from sexual contact or organ transplant with a usually-asymptomatic or mononucleosis-like maternal illness — calcifies PERIVENTRICULARLY and deafens; Toxoplasma — cat feces or undercooked meat — calcifies the parenchyma diffusely and enlarges the ventricles (hydrocephalus).",
        },
        {
          label: "C",
          text: "Rubella — the eye-ear-heart triad with intracranial calcifications",
          why: "Rubella's classic triad is cataracts, deafness, and congenital heart disease (PDA) — it does not produce the intracranial calcifications or hydrocephalus in this vignette. The maternal acquisition would be respiratory droplets, with maternal rash, lymphadenopathy, polyarthritis, and polyarthralgia rather than the cat and undercooked-meat exposures.",
        },
        {
          label: "D",
          text: "Herpes simplex virus-2 — vesicular lesions with intracranial calcifications",
          why: "HSV-2 is transmitted via vaginal delivery (the route exception among the ToRCHHeS agents) and produces neonatal meningoencephalitis with herpetic vesicular lesions — not hydrocephalus with diffuse intracranial calcifications. The mother would typically be asymptomatic or have herpetic lesions, and the exposure history would be genital rather than feline or dietary.",
        },
        {
          label: "E",
          text: "Parvovirus B19 — hydrops fetalis with intracranial calcifications",
          why: "Parvovirus B19 does cause fetal infection and is named in the source — but its signature is HYDROPS FETALIS, not the calcification triad. This newborn's chorioretinitis, hydrocephalus, and diffuse intracranial calcifications with the cat and undercooked-meat exposure point squarely at Toxoplasma.",
        },
      ],
      reasoning:
        "The vignette stacks the congenital-toxoplasmosis identifiers: the maternal cat-litter and rare-lamb exposures (the two acquisition routes printed on the maternal-acquisition column), the tender neck swelling (the rarely-lymphadenopathy line), the nonspecific neonatal set (hepatosplenomegaly, jaundice, growth restriction), the blueberry muffin rash shared by the Toxoplasma-Rubella-CMV rows, and the classic triad — chorioretinitis, hydrocephalus, and DIFFUSE INTRACRANIAL calcifications. The calcification location is the tiebreaker the question asks for: periventricular belongs to CMV (with hearing loss). Each distractor misreads either the calcification map (CMV), the triad (rubella's eye-ear-heart), the route (HSV-2's vaginal delivery), or the fetal syndrome (parvovirus's hydrops).",
    },
  },
  mnemonics: [
    {
      code: "\u201cFever first, flowers after.\u201d",
      meaning:
        "KYP's key for roseola's order: HHV-6 runs several days of HIGH FEVER in an infant — the child looks surprisingly well, and febrile seizures are the risk — and only once the fever breaks do the rose-colored macules flower across the body. The order is the discriminator against every rash-with-fever virus that puts the rash first.",
      memorizes: "The roseola (exanthem subitum) sequence",
      whenToUse: "Any infant fever-then-rash stem.",
      clinical: "A well-appearing febrile infant who develops a macular rash as the fever resolves.",
    },
    {
      code: "\u201cThe painful pair cries and blisters; the painless trio chancre, bubo, and beef.\u201d",
      meaning:
        "KYP's key for the genital-ulcer pain axis: PAINFUL — chancroid (H ducreyi, exudate with inguinal adenopathy, the 'do cry' organism) and herpes (HSV-2 vesicles with bilateral TENDER nodes). PAINLESS — the syphilitic chancre, LGV (painless ulcers that hand off to PAINFUL buboes), and granuloma inguinale (the beefy red ulcer that bleeds on contact, carrying Donovan bodies).",
      memorizes: "The STD directory's pain axis",
      whenToUse: "Any genital-lesion stem.",
      clinical: "Pain is the first branch; the vesicle, the bubo, and the bleeding beefy base close the differential.",
    },
    {
      code: "\u201cToxo takes the whole brain; CMV camps the ventricle wall.\u201d",
      meaning:
        "KYP's key for the TORCH calcifications: Toxoplasma scatters INTRACRANIAL (diffuse parenchymal) calcifications and brings hydrocephalus with chorioretinitis; CMV lines the VENTRICLE WALL with periventricular calcifications and takes the hearing. Rubella calcifies neither — its triad is the eye (cataracts), the ear (deafness), and the heart (PDA).",
      memorizes: "The congenital-infection calcification key",
      whenToUse: "Any neonatal CT or congenital-infection stem.",
      clinical: "Read the calcification's location before reaching for the organism.",
    },
  ],
  rapidReview: {
    s30: [
      "Childhood rashes: coxsackie A = palms/soles vesicles + herpangina · HHV-6 = fever first, then rose macules + febrile seizures · measles = confluent head-down + Koplik · parvo B19 = slapped cheek · rubella = discrete head-down + postauricular LAD · scarlet = sandpaper + strawberry tongue · VZV = trunk-first, different stages",
      "Genital ulcers: PAINFUL = chancroid + HSV-2 · PAINLESS = syphilitic chancre, LGV (painful buboes), granuloma inguinale (beefy red, Donovan bodies)",
      "Vaginal triad: BV = clue cells, pH >4.5, ⊕ whiff · trich = strawberry cervix, motile pear-shaped, pH >4.5, treat partners · candida = pseudohyphae, pH NORMAL",
      "TORCH triads: Toxo = chorioretinitis + hydrocephalus + INTRACRANIAL calcifications · Rubella = cataracts + deafness + PDA · CMV = hearing loss + PERIVENTRICULAR calcifications · syphilis = stillbirth, hydrops, saber shins, notched teeth, CN VIII",
      "PID: cervical motion + adnexal tenderness + purulent discharge; chlamydia subacute (most common bacterial STI), gonococcus acute; Fitz-Hugh–Curtis = violin strings",
    ],
    m3: [
      "UTI: cystitis = dysuria/frequency/urgency/suprapubic pain + WBCs without casts; pyelo = + fever/chills/flank/CVA + WBC CASTS; E coli #1 (pink MacConkey), S saprophyticus #2 (young sexually active), Klebsiella #3 (mucoid); Proteus = swarming + struvite + urease; Pseudomonas = blue-green + fruity",
      "Markers: leukocyte esterase = WBC activity; nitrite = gram ⊝ nitrate reduction (E coli)",
      "STD directory: chlamydia D–K = urethritis/cervicitis/epididymitis/conjunctivitis/reactive arthritis/PID · gonorrhea = creamy purulent · condylomata acuminata = HPV-6/11 + koilocytes · hepatitis B = jaundice · trichomoniasis = strawberry cervix + motile wet prep",
      "TORCH route: transplacental in most, vaginal delivery for HSV-2; nonspecific set = hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction; other neonatal meningitis agents = GBS, E coli, Listeria; parvovirus B19 = hydrops fetalis",
      "Blueberry muffin rash: shared by Toxoplasma, Rubella, and CMV — it does not discriminate; the calcification location does",
    ],
    m10: [
      "Nosocomial routing: antibiotics/PPIs = C difficile · aspiration = polymicrobial gram ⊝ anaerobes (RLL upright; RUL/RML recumbent) · wounds/drains = S aureus (MRSA) + Bacteroides/Prevotella/Fusobacterium · lines = S aureus, S epidermidis long-term · ventilator late = Pseudomonas, Klebsiella, Acinetobacter · blood products = HBV/HCV · urinary catheter = PEcK (Proteus, E coli, Klebsiella) · water aerosols = Legionella (pneumonia + GI + neuro)",
      "Unvaccinated children: rubella = postauricular + posterior cervical + suboccipital nodes · measles = Koplik prodrome · H flu b = meningitis (nasopharynx) + epiglottitis (even in the fully immunized) · polio = myalgia + paralysis · tetanus = spasms + opisthotonus · pertussis = coryza → whoop → posttussive vomiting → recovery · diphtheria = gray pseudomembranes",
      "FA's printed mnemonics (SCARLET; do cry; ruby earrings; CMV = Chorioretinitis, Microcephaly, periVentricular) stay in the table block — verification-only",
      "All 20 clinical photos across books 177-181 are raster — COPYRIGHTED, described-in-text only (rash A-E, vaginal A-D, STD A-F, TORCH A-C, PID A-B)",
      "The SYSTEMS banner typo 'MICROCIOLOGY—SYSTEMS' prints on books 177-181",
    ],
  },
  recall: [
    {
      q: "Walk the seven childhood rashes with each agent's presentation.",
      a: "COXSACKIEVIRUS TYPE A — hand-foot-mouth disease; oval-shaped vesicles on palms and soles; vesicles and ulcers in oral mucosa (herpangina). HHV-6 — roseola (exanthem subitum); rose-colored macules after several days of high fever; febrile seizures; infants. MEASLES VIRUS — measles (rubeola); confluent rash beginning at head and moving down; preceded by cough, coryza, conjunctivitis, and blue-white (Koplik) spots on buccal mucosa. PARVOVIRUS B19 — erythema infectiosum (fifth disease); slapped-cheek rash on face. RUBELLA VIRUS — pink macules and papules begin at head and move down, remain discrete → fine desquamating truncal rash; postauricular lymphadenopathy. STREPTOCOCCUS PYOGENES — scarlet fever; sore throat, circumoral pallor, group A strep, sandpaperlike rash (neck to trunk and extremities), lymphadenopathy, erythrogenic toxin, strawberry tongue. VARICELLA-ZOSTER VIRUS — chickenpox; vesicular rash begins on trunk, spreads to face and extremities with lesions of different stages.",
    },
    {
      q: "Separate cystitis from pyelonephritis, then give the UTI species ladder and the two urine markers.",
      a: "CYSTITIS: dysuria, frequency, urgency, suprapubic pain, and WBCs (but not WBC casts) in urine — ascension from urethra to bladder. PYELONEPHRITIS: fever, chills, flank pain, costovertebral angle tenderness, hematuria, and WBC CASTS — the ascension has reached the kidney. Ten times more common in females (shorter urethras colonized by fecal microbiota); risk factors — obstruction (kidney stones, enlarged prostate), kidney surgery, catheterization, congenital GU malformation (vesicoureteral reflux), diabetes, pregnancy. LADDER: E coli (leading cause; strong pink lactose-fermentation on MacConkey), S saprophyticus (2nd; young, sexually active females), Klebsiella pneumoniae (3rd; large mucoid capsule, viscous colonies), Serratia marcescens (red pigment; healthcare-associated, drug resistant), Enterococcus (healthcare-associated, drug resistant), Proteus mirabilis (swarming motility; struvite stones; urease), Pseudomonas aeruginosa (blue-green pigment, fruity odor; healthcare-associated, drug resistant). MARKERS: leukocyte esterase = WBC activity; nitrite = reduction of urinary nitrates by gram ⊝ species (eg, E coli).",
    },
    {
      q: "Give the vaginal triad's signs, lab findings, and treatments; then route the genital ulcer by pain.",
      a: "BACTERIAL VAGINOSIS: no inflammation; thin, white discharge with fishy odor; clue cells (bacteria-coated epithelial cells), pH >4.5, ⊕ KOH whiff test; metronidazole or clindamycin. TRICHOMONAS VAGINITIS: inflammation (strawberry cervix); frothy, yellow-green, foul-smelling discharge; motile pear-shaped trichomonads, pH >4.5; metronidazole AND treat sexual partner(s). CANDIDA VULVOVAGINITIS: inflammation; thick, white cottage-cheese discharge; pseudohyphae, pH NORMAL (4.0–4.5); azoles. ULCER BY PAIN: PAINFUL — chancroid (painful ulcer[s] with exudate and inguinal adenopathy; H ducreyi) and herpes genitalis (painful vesicles and ulcers with bilateral tender inguinal lymphadenopathy ± fever, headache, myalgia; HSV-2 more than HSV-1). PAINLESS — primary syphilis (painless chancre, regional lymphadenopathy; T pallidum), LGV (infection of lymphatics; painless genital ulcers then painful lymphadenopathy [buboes]; C trachomatis L1-L3), granuloma inguinale (painless, beefy red ulcer that bleeds readily on contact; Donovan bodies; uncommon in the US).",
    },
    {
      q: "Walk the TORCH map: route, the nonspecific neonatal set, and all six agents with maternal and neonatal columns.",
      a: "ROUTE: transplacental in most cases, or via vaginal delivery (especially HSV-2). NONSPECIFIC SET: hepatosplenomegaly, jaundice, thrombocytopenia, growth restriction. AGENTS: Toxoplasma gondii — cat feces or undercooked meat; usually asymptomatic mother (lymphadenopathy rarely); chorioretinitis, hydrocephalus, and intracranial calcifications ± blueberry muffin rash. Rubella — respiratory droplets; rash, lymphadenopathy, polyarthritis, polyarthralgia; cataracts, deafness, and PDA ± blueberry muffin rash. CMV — sexual contact, organ transplants; usually asymptomatic or mononucleosis-like; hearing loss, seizures, petechial rash, blueberry muffin rash, chorioretinitis, periventricular calcifications. HIV — sexual contact, needlestick; variable by CD4+ count; recurrent infections, chronic diarrhea. HSV-2 — skin or mucous membrane contact; usually asymptomatic or herpetic lesions; meningoencephalitis and vesicular lesions. Syphilis — sexual contact; the 1° chancre and 2° rash are the two fetal-risk stages; stillbirth, hydrops fetalis, or (if the child survives) notched teeth, saddle nose, rhinitis, short maxilla, saber shins, CN VIII deafness. Also: GBS, E coli, and Listeria cause neonatal meningitis; parvovirus B19 causes hydrops fetalis.",
    },
    {
      q: "Route the healthcare-associated infections by exposure, and give the unvaccinated-children capstone.",
      a: "HAI ROUTING: antibiotic use/PPIs → C difficile (watery diarrhea, leukocytosis); aspiration (altered mental status, old age) → polymicrobial gram ⊝ anaerobes (right lower lobe infiltrate, or right upper/middle lobe if recumbent; purulent malodorous sputum); decubitus ulcers, surgical wounds, drains → S aureus (including MRSA) + gram ⊝ anaerobes (Bacteroides, Prevotella, Fusobacterium) — erythema, tenderness, induration, drainage; intravascular catheters → S aureus (including MRSA), S epidermidis (long term); mechanical ventilation/endotracheal intubation → late onset P aeruginosa, Klebsiella, Acinetobacter, S aureus (new infiltrate, ↑ sputum, sweet odor); blood products/shared equipment/needlesticks → HBV, HCV; urinary catheterization → Proteus, E coli, Klebsiella (PEcK); water aerosols → Legionella (pneumonia signs + GI symptoms + neurologic abnormalities). UNVACCINATED CHILDREN: rash head-down with postauricular/posterior cervical/suboccipital nodes → rubella; head-down with cough, coryza, conjunctivitis, Koplik spots → measles; nasopharyngeal colonization → H influenzae type b (meningitis); myalgia and paralysis → poliovirus; muscle spasms, spastic paralysis (lockjaw, opisthotonus) → C tetani; epiglottitis (fever, dysphagia, drooling, inspiratory stridor — even in the fully immunized) → H influenzae type b; low-grade fevers, coryza → whooping cough, posttussive vomiting → gradual recovery → Bordetella pertussis; grayish pseudomembranes that may obstruct airways → C diphtheriae.",
    },
  ],
  related: [
    {
      title: "Spirochetes: Treponema, Borrelia, Leptospira",
      topicId: "spirochetes-syphilis",
      note: "M14's syphilis tree is the stage-deep version of this note's three syphilis rows — the chancre, the disseminated rash with condylomata lata, and the tertiary set (gummas, tabes dorsalis, general paresis, aortitis, Argyll Robertson pupil) all live there in full mechanism form.",
    },
    {
      title: "HIV & AIDS: Virology Through Opportunists",
      topicId: "hiv-aids",
      note: "M27's CD4 ladder and diagnosis algorithm sit behind this note's AIDS row and the HIV-TORCH row — the vertical-transmission column there (viral load for babies) completes what this directory lists.",
    },
    {
      title: "RNA Viruses: Families & Disease Map",
      topicId: "rna-viruses",
      note: "M24's pediatric clinical set (measles with Koplik-SSPE-vitamin A, rubella's TORCH triad, RSV-palivizumab) is the family-map version of this note's rash directory — the paramyxovirus and rubivirus rows cross-reference here.",
    },
    {
      title: "Gram-Negative Bacilli: Enterics & Zoonotics",
      topicId: "gram-negative-bacilli",
      note: "M12's lab-algorithm tree is the identification machinery behind this note's UTI ladder — the MacConkey lactose reaction that names E coli, Klebsiella's mucoid capsule, and Proteus's swarming urease all route through it.",
    },
  ],
  crossLinks: [
    {
      subject: "Dermatology (Rash Morphology)",
      connection:
        "The rash topography is the dermatology chapter's infection core — vesicle versus macule versus papule, distribution (palms and soles, trunk-first, head-down), and evolution order (fever-then-rose, discrete versus confluent) as the primary descriptors.",
    },
    {
      subject: "Obstetrics & Neonatology (Vertical Transmission)",
      connection:
        "The TORCH map is the maternal-fetal medicine core — the transplacental-versus-vaginal-delivery routes, the nonspecific neonatal set that opens the workup, and the calcification-location tiebreaker that closes it.",
    },
    {
      subject: "Urology & Nephrology (UTI Syndromes)",
      connection:
        "The cystitis-pyelonephritis split is the urinary-tract infection backbone — WBC casts as the kidney's line in the sand, the female-anatomy multiplier, and the obstruction-catheterization-reflux risk set.",
    },
    {
      subject: "Infection Control & Public Health (HAI Prevention)",
      connection:
        "The healthcare-associated routing table is the infection-control core — device-associated infection sets (line, catheter, ventilator), the antibiotic-PPI selection pressure behind C difficile, and the water-aerosol source of Legionella.",
    },
  ],
};
