import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 14).
// Source: First Aid 2026, Part 1 pdf 166-168 / book 144-146
//  (V. cholerae + V. vulnificus, H. pylori — the curved-rod entries whose
//   tree gates M12 drew, living on book 144 by page ownership; the
//   Spirochetes section; Lyme disease; Leptospira interrogans; Syphilis
//   primary/secondary/tertiary/congenital; and the diagnosing-syphilis
//   test-selection tree on book 146 — the shared page whose Chlamydiae
//   section below it is M15's).

export const spirochetesSyphilis: KypUsMLENote = {
  id: "spirochetes-syphilis",
  title: "Spirochetes: Treponema, Borrelia, Leptospira",
  subtitle:
    "The spirochete block organized by THE STAGING MAPS. THE TRIO: spiral-shaped bacteria with axial filaments — Leptospira (hook-shaped ends; water contaminated with animal urine; leptospirosis with flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion; Weil disease = the severe icterohemorrhagic form with jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia; surfers and the tropics), Treponema (visualized by DARK-FIELD or DFA microscopy; the syphilis organism), and Borrelia (the ONLY spirochete visualized with aniline dyes — Wright or Giemsa — on light microscopy due to size; the Lyme organism). The JARISCH-HERXHEIMER REACTION (flulike symptoms — fever, chills, headache, myalgia — after antibiotics are started, from the host response to sudden release of bacterial antigens; usually during treatment of spirochetal infections) is the trio's shared treatment event. LYME (Borrelia burgdorferi): the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia); natural reservoir the mouse (deer essential to the tick life cycle but do NOT harbor Borrelia); northeastern US. Stage 1 early localized — erythema migrans (bulls-eye configuration pathognomonic but not always present) + flulike symptoms; stage 2 early disseminated — secondary lesions, carditis, AV block, facial nerve (Bell) palsy, migratory myalgias/transient arthritis; stage 3 late disseminated — encephalopathy, chronic arthritis, peripheral neuropathy; treatment doxycycline (1st line), amoxicillin (pregnancy, children <8y), ceftriaxone if IV required. THE SYPHILIS CLOCK (Treponema pallidum; treatment penicillin G): PRIMARY — localized, painless chancre, treponemes by fluorescent or dark-field microscopy of chancre fluid, VDRL ⊕ in ~80%; SECONDARY — disseminated SYSTEMIC disease: constitutional symptoms, maculopapular rash including palms and soles, condylomata lata, lymphadenopathy, patchy hair loss, dark-field confirmable; VDRL/RPR (nonspecific) then confirm with a specific test (eg, FTA-ABS); latent syphilis (⊕ serology without symptoms) may follow; TERTIARY — gummas (chronic granulomas), aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, general paresis), Argyll Robertson pupil (constricts with accommodation, not reactive to light); signs broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension; CONGENITAL — rhagades, snuffles, saddle nose, notched (Hutchinson) teeth, mulberry molars, short maxilla, saber shins, CN VIII deafness; placental transmission typically after the first trimester — treat early in pregnancy to prevent. THE SEROLOGY TREE: serologic testing splits nontreponemal (nonspecific — RPR, VDRL: antibody reacting with beef cardiolipin; quantitative, inexpensive, widely available; sensitive but NOT specific) from treponemal (specific — FTA-ABS, TP-PA); direct testing = darkfield microscopy + PCR. After treatment: nontreponemal tests and direct testing REVERT TO NEGATIVE; treponemal tests REMAIN POSITIVE. False-positive VDRL: pregnancy, viral infection (EBV, hepatitis), drugs (chlorpromazine, procainamide), rheumatic fever (rare), lupus (anticardiolipin antibody) and leprosy. THE CURVED-ROD ROSTER (book 144, page ownership — the M12 tree's curved-rod leaves completed): V. cholerae (comma-shaped, oxidase ⊕, alkaline media; rice-water diarrhea via enterotoxin that PERMANENTLY ACTIVATES Gs → ↑ cAMP; acid-labile, high ID50 unless ↓ gastric acidity; contaminated water or raw shellfish; oral rehydration solution), V. vulnificus (marine; cellulitis → necrotizing fasciitis in high serum iron — cirrhosis, hemochromatosis; surgical debridement), H. pylori (triple ⊕ catalase/oxidase/urease; urea breath test, fecal antigen; antrum; gastritis and peptic ulcers especially duodenal; risk for gastric adenocarcinoma and MALT lymphoma; triple therapy amoxicillin + clarithromycin + PPI, bismuth quadruple if macrolide resistance).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — the spirochete trio on the visualization axis (Borrelia aniline dyes vs Treponema dark-field/DFA); the Lyme and syphilis staging maps with the congenital branch; the nontreponemal-vs-treponemal serology tree with its after-treatment behavior and false-positive list; Jarisch-Herxheimer; and the curved-rod roster of book 144 (cholera's Gs enterotoxin, H. pylori's urease niche, V. vulnificus's iron virulence) by page ownership",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 144–146 (Vibrio cholerae; Vibrio vulnificus; Helicobacter pylori; Spirochetes; Lyme disease; Leptospira interrogans; Syphilis; Diagnosing syphilis)",
  tags: [
    "spirochetes",
    "axial filaments",
    "Leptospira",
    "leptospirosis",
    "Weil disease",
    "Treponema pallidum",
    "dark-field microscopy",
    "DFA",
    "Borrelia",
    "Borrelia burgdorferi",
    "Wright stain",
    "Giemsa stain",
    "Jarisch-Herxheimer reaction",
    "Lyme disease",
    "Ixodes deer tick",
    "erythema migrans",
    "bulls-eye rash",
    "facial nerve palsy",
    "AV block",
    "doxycycline",
    "syphilis",
    "primary syphilis",
    "chancre",
    "secondary syphilis",
    "maculopapular rash",
    "palms and soles",
    "condylomata lata",
    "latent syphilis",
    "tertiary syphilis",
    "gummas",
    "aortitis",
    "vasa vasorum",
    "neurosyphilis",
    "tabes dorsalis",
    "general paresis",
    "Argyll Robertson pupil",
    "Romberg",
    "Charcot joint",
    "congenital syphilis",
    "rhagades",
    "snuffles",
    "saddle nose",
    "Hutchinson teeth",
    "mulberry molars",
    "saber shins",
    "CN VIII deafness",
    "penicillin G",
    "VDRL",
    "RPR",
    "FTA-ABS",
    "TP-PA",
    "nontreponemal",
    "treponemal",
    "beef cardiolipin",
    "false-positive VDRL",
    "anticardiolipin",
    "Vibrio cholerae",
    "rice-water diarrhea",
    "Gs",
    "cholera toxin",
    "acid labile",
    "oral rehydration solution",
    "Vibrio vulnificus",
    "necrotizing fasciitis",
    "hemochromatosis",
    "Helicobacter pylori",
    "urease",
    "urea breath test",
    "antrum",
    "peptic ulcer disease",
    "MALT lymphoma",
    "triple therapy",
    "bismuth quadruple therapy",
  ],
  core: {
    what: "THE TRIO ON THE VISUALIZATION AXIS. Spiral-shaped bacteria with axial filaments: Leptospira, Treponema, and Borrelia. Only Borrelia can be visualized using aniline dyes (Wright or Giemsa stain) in light microscopy due to size; Treponema is visualized by dark-field microscopy or direct fluorescent antibody (DFA) microscopy. Leptospira interrogans — the spirochete with hook-shaped ends found in water contaminated with animal urine — causes leptospirosis (flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion [erythema without exudate]; prevalent among surfers and in the tropics, eg, Hawaii) and Weil disease (icterohemorrhagic leptospirosis), the severe form with jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, and anemia. Borrelia burgdorferi — Lyme disease: transmitted by the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia); the natural reservoir is the MOUSE, while deer are essential to the tick life cycle but do not harbor Borrelia; common in the northeastern United States. Stage 1 early localized: erythema migrans (the typical bulls-eye configuration is pathognomonic but not always present) with flulike symptoms; stage 2 early disseminated: secondary lesions, carditis, AV block, facial nerve (Bell) palsy, migratory myalgias/transient arthritis; stage 3 late disseminated: encephalopathy, chronic arthritis, peripheral neuropathy. Treatment: doxycycline (1st line); amoxicillin (pregnant patients, children <8 years old); ceftriaxone if IV therapy required. Treponema pallidum — syphilis (treatment penicillin G): primary = localized disease with a PAINLESS CHANCRE (fluorescent or dark-field microscopy of chancre fluid; VDRL ⊕ in ~80%); secondary = disseminated SYSTEMIC disease — constitutional symptoms, maculopapular rash including palms and soles, condylomata lata (smooth, painless, wartlike white lesions on genitals), lymphadenopathy, patchy hair loss, confirmable by dark-field; serology VDRL/RPR (nonspecific) then confirm with a specific test (eg, FTA-ABS); latent syphilis (⊕ serology without symptoms) may follow; tertiary = gummas (chronic granulomas), aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, general paresis), Argyll Robertson pupil (constricts with accommodation but not reactive to light) with broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension; congenital = facial abnormalities (rhagades — linear scars at the angle of the mouth; snuffles — nasal discharge; saddle nose; notched [Hutchinson] teeth; mulberry molars; short maxilla), saber shins, CN VIII deafness — placental transmission typically after the first trimester, prevented by treating the patient early in pregnancy. THE SEROLOGY TREE: nontreponemal (nonspecific) tests — RPR and VDRL — detect antibody that reacts with beef cardiolipin; quantitative, inexpensive, widely available; sensitive but NOT specific; nontreponemal tests and direct testing revert to negative after treatment, while treponemal tests (FTA-ABS, TP-PA) remain positive. Direct testing: darkfield microscopy and PCR. False-positive VDRL with pregnancy, viral infection (eg, EBV, hepatitis), drugs (eg, chlorpromazine, procainamide), rheumatic fever (rare), lupus (anticardiolipin antibody) and leprosy. THE CURVED-ROD ROSTER (book 144): V. cholerae — gram ⊝, flagellated, comma shaped, oxidase ⊕, grows in alkaline media; endemic to developing countries; profuse rice-water diarrhea via enterotoxin that permanently activates Gs → ↑ cAMP; sensitive to stomach acid (acid labile), requiring a large inoculum (high ID50) unless the host has ↓ gastric acidity; transmitted via contaminated water or uncooked food (eg, raw shellfish); treat promptly with oral rehydration solution. V. vulnificus — gram ⊝ bacillus of marine environments; severe wound infections or septicemia from contaminated sea water; cellulitis that can progress to necrotizing fasciitis in high-risk patients, especially with high serum iron (cirrhosis, hemochromatosis); serious wound infection requires surgical debridement. H. pylori — curved, flagellated (motile) gram ⊝ rod that is TRIPLE ⊕ (catalase ⊕, oxidase ⊕, urease ⊕); the urea breath test or fecal antigen test diagnoses it; urease produces ammonia creating an alkaline environment that lets it survive in acidic mucosa; colonizes mainly the antrum; causes gastritis and peptic ulcers (especially duodenal); a risk factor for peptic ulcer disease, gastric adenocarcinoma, and MALT lymphoma; triple therapy (amoxicillin [metronidazole if penicillin allergy] + clarithromycin + proton pump inhibitor) or bismuth-based quadruple therapy if macrolide resistance is a concern. The JARISCH-HERXHEIMER REACTION — flulike symptoms (fever, chills, headache, myalgia) after antibiotics are started, due to the host response to sudden release of bacterial antigens — usually occurs during treatment of spirochetal infections.",
    why: "This block carries four exam institutions. The first is THE VISUALIZATION AXIS: the only spirochete you will ever SEE on a routine light microscope is Borrelia (aniline dyes — Wright or Giemsa — work because of its size); Treponema requires dark-field or DFA — which is also the chancre-fluid technique. The second is THE STAGING LOGIC: Lyme and syphilis are both staged diseases, and the stage names the therapy question — early localized (erythema migrans; doxycycline) vs early disseminated (carditis with AV block, Bell palsy) vs late disseminated (chronic arthritis, encephalopathy); primary chancre (VDRL ⊕ ~80%) vs secondary systemic (the palms-and-soles rash, condylomata lata, patchy hair loss — VDRL/RPR then confirm with FTA-ABS) vs latent (⊕ serology without symptoms) vs tertiary (gummas, aortitis, neurosyphilis with the Argyll Robertson pupil). The congenital branch is a vertical-transmission lane with its own phenotype set (rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, saber shins, CN VIII deafness) and its own prevention rule (treat early in pregnancy; placental transmission typically after the first trimester). The third is THE SEROLOGY TREE: screen with the cheap quantitative nonspecific test (RPR/VDRL — beef cardiolipin; sensitive not specific), confirm with the specific test (FTA-ABS/TP-PA); know what reverts to negative after treatment (nontreponemal + direct) and what remains positive (treponemal) — and the false-positive VDRL list (pregnancy, viral infection, drugs, rheumatic fever, lupus + leprosy) that turns a positive screen into a lupus clue. The fourth is the CURVED-ROD ROSTER: the M12 tree's curved-rod lane (alkaline Vibrio, urease H. pylori) whose entries live on this page — cholera's permanently-activating Gs enterotoxin (rice-water; acid-labile with high ID50 unless ↓ gastric acidity), vulnificus's iron-dependent necrotizing fasciitis of marine wounds, and H. pylori's urease-built alkaline niche of the antrum (PUD especially duodenal, gastric adenocarcinoma, MALT lymphoma).",
    keyIdea: "Run the trio, the clocks, and the tree. TRIO: hook-ended Leptospira from animal-urine water (Weil = jaundice + azotemia); Treponema by dark-field/DFA (syphilis, penicillin G); Borrelia by aniline dyes on light microscopy (Lyme via the Ixodes tick — mouse reservoir, deer don't harbor Borrelia; stage 1 bulls-eye erythema migrans + flulike → stage 2 carditis/AV block/Bell palsy/migratory arthritis → stage 3 encephalopathy/chronic arthritis/peripheral neuropathy; doxycycline, amoxicillin in pregnancy/<8y, ceftriaxone IV). SYPHILIS CLOCK: painless chancre (VDRL ⊕ ~80%) → secondary SYSTEMIC (palms-and-soles maculopapular rash, condylomata lata, patchy hair loss; VDRL/RPR + FTA-ABS confirm; latent = ⊕ serology without symptoms) → tertiary (gummas, aortitis, neurosyphilis — tabes dorsalis, general paresis, Argyll Robertson; broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension); congenital branch (rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, saber shins, CN VIII deafness — treat early in pregnancy; transmission typically after the first trimester). SEROLOGY TREE: RPR/VDRL (beef cardiolipin; quantitative, sensitive not specific; revert to negative after treatment) vs FTA-ABS/TP-PA (specific; remain positive); direct = darkfield + PCR; false-positive VDRL = pregnancy, viral infection, drugs, rheumatic fever (rare), lupus + leprosy. Jarisch-Herxheimer = flulike symptoms after antibiotics start (sudden antigen release). ROSTER: rice-water + ↓ gastric acidity = cholera (Gs → ↑ cAMP; ORS); seawater cellulitis → necrotizing fasciitis in cirrhosis/hemochromatosis = vulnificus (surgical debridement); triple-⊕ curved rod of the antrum with duodenal ulcers + MALT = H. pylori (urease → alkaline ammonia niche; triple therapy).",
  },
  mechanisms: [
    {
      id: "syphilis-clock-logic",
      title: "The syphilis clock: staging, serology, and the congenital branch",
      context: "From the printed staging sections to the exam's stage-and-test logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Treponema pallidum — the spirochete visualized by dark-field or DFA microscopy; treatment penicillin G",
            sublabel: "Input — the organism whose disease runs on a clock.",
            variant: "input",
          },
          {
            id: "s1",
            label: "PRIMARY (localized): the painless chancre — fluorescent or dark-field microscopy of chancre fluid; VDRL ⊕ in ~80% of patients",
            sublabel: "Process — the localized stage: the lesion and its test.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SECONDARY (disseminated = SYSTEMIC): constitutional symptoms, maculopapular rash including palms and soles, condylomata lata, lymphadenopathy, patchy hair loss — dark-field confirmable; VDRL/RPR (nonspecific), confirm with a specific test (eg, FTA-ABS); latent syphilis (⊕ serology without symptoms) may follow",
            sublabel: "Process — the systemic stage and the two-step serology rule.",
            variant: "process",
          },
          {
            id: "s3",
            label: "TERTIARY: gummas (chronic granulomas), aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, general paresis) with the Argyll Robertson pupil; broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension. CONGENITAL BRANCH: rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, short maxilla, saber shins, CN VIII deafness — placental transmission typically after the first trimester; prevented by treating early in pregnancy",
            sublabel: "Process — the late stage and the vertical-transmission lane.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the SEROLOGY TREE resolves every test question: screen with RPR/VDRL (beef cardiolipin; quantitative, inexpensive, widely available; sensitive but NOT specific), confirm with FTA-ABS/TP-PA; after treatment nontreponemal tests and direct testing (darkfield, PCR) revert to negative while treponemal tests remain positive; false-positive VDRL with pregnancy, viral infection (EBV, hepatitis), drugs (chlorpromazine, procainamide), rheumatic fever (rare), lupus (anticardiolipin antibody) and leprosy",
            sublabel: "Output — the test-selection tree and its after-treatment behavior.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "primary" },
          { from: "s1", to: "s2", label: "secondary (systemic)" },
          { from: "s2", to: "s3", label: "tertiary + congenital" },
          { from: "s3", to: "o1", label: "the serology tree" },
        ],
        caption:
          "The clock and the tree are one system. The chancre is the localized stage — painless, and the fluid answers to fluorescent or dark-field microscopy; VDRL is already positive in ~80%. The secondary stage is the systemic one: the maculopapular rash that includes palms and soles, condylomata lata, lymphadenopathy, and patchy hair loss, with the two-step serology rule (nonspecific VDRL/RPR first, confirm with the specific FTA-ABS) and the latent phase (positive serology without symptoms) that may follow. The tertiary stage names the organ damage: gummas as chronic granulomas, aortitis from vasa vasorum destruction, and neurosyphilis with tabes dorsalis, general paresis, and the Argyll Robertson pupil (accommodates but does not react to light) — plus the exam signs broad-based ataxia, positive Romberg, Charcot joint, and stroke without hypertension. The congenital branch is the same organism on a vertical clock: placental transmission typically after the first trimester, prevented by treating the patient early in pregnancy, and presenting with the facial phenotype set (rhagades, snuffles, saddle nose, notched Hutchinson teeth, mulberry molars, short maxilla), saber shins, and CN VIII deafness. The serology tree then converts the whole clock into test logic: RPR/VDRL detect nonspecific antibody reacting with beef cardiolipin — quantitative, inexpensive, widely available, sensitive but not specific — and revert to negative after treatment, while FTA-ABS/TP-PA antibodies remain positive; darkfield microscopy and PCR are the direct tests; and the false-positive list (pregnancy, viral infection, drugs, rheumatic fever, lupus with anticardiolipin antibody, leprosy) is the reason a positive screen is a clue, not a diagnosis.",
      },
    },
    {
      id: "spirochete-trio-logic",
      title: "The trio: visualization, reservoirs, and the shared treatment event",
      context: "The three spirochetes plus the curved-rod roster of book 144 (page ownership)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A spiral-shaped bacterium with axial filaments must be placed before therapy and testing can be chosen",
            sublabel: "Input — the identification problem the trio resolves.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE VISUALIZATION AXIS: only Borrelia can be visualized using aniline dyes (Wright or Giemsa stain) in light microscopy due to size; Treponema is visualized by dark-field microscopy or DFA microscopy — the chancre-fluid technique",
            sublabel: "Process — which spirochete you can actually see, and how.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE RESERVOIR AXIS: Leptospira — water contaminated with animal urine (leptospirosis: flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion; Weil disease — the severe form with jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia; surfers, the tropics); Borrelia — the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia), natural reservoir the mouse, deer essential to the tick life cycle but not harboring Borrelia, northeastern US, with stages 1/2/3 (erythema migrans bulls-eye; carditis + AV block + Bell palsy + migratory myalgias/transient arthritis; encephalopathy + chronic arthritis + peripheral neuropathy) treated with doxycycline (amoxicillin in pregnancy/children <8y; ceftriaxone if IV); Treponema — human-only sexual and perinatal (the syphilis clock)",
            sublabel: "Process — where the patient met each spirochete, and each disease's stage map.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE SHARED TREATMENT EVENT: the Jarisch-Herxheimer reaction — flulike symptoms (fever, chills, headache, myalgia) after antibiotics are started, due to the host response to sudden release of bacterial antigens; usually occurs during treatment of spirochetal infections",
            sublabel: "Process — the reaction that crosses the whole trio.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the curved-rod roster completes the page (book 144, page ownership — the M12 tree's leaves): V. cholerae (enterotoxin permanently activates Gs → ↑ cAMP → rice-water diarrhea; acid labile with high ID50 unless ↓ gastric acidity; contaminated water/raw shellfish; oral rehydration), V. vulnificus (marine cellulitis → necrotizing fasciitis in high serum iron — cirrhosis, hemochromatosis; surgical debridement), H. pylori (triple ⊕; urease → ammonia → alkaline niche in acidic mucosa; antrum; gastritis, PUD especially duodenal, gastric adenocarcinoma, MALT lymphoma; triple therapy, bismuth quadruple for macrolide resistance)",
            sublabel: "Output — the non-spirochete entries that share this page, per the chapter inventory.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "visualization" },
          { from: "s1", to: "s2", label: "reservoirs" },
          { from: "s2", to: "s3", label: "Jarisch-Herxheimer" },
          { from: "s3", to: "o1", label: "the book-144 roster" },
        ],
        caption:
          "The trio resolves by two axes. The visualization axis: Borrelia is the only spirochete that shows on a routine light microscope (aniline dyes — Wright or Giemsa — work because of its size); Treponema needs dark-field or DFA, which is the same technique applied to chancre fluid in primary syphilis. The reservoir axis: Leptospira lives in water contaminated with animal urine (the surfer and the tropics; Weil disease as its severe icterohemorrhagic form); Borrelia rides the Ixodes deer tick — which also carries Anaplasma spp. and Babesia — with the mouse as the natural reservoir (deer keep the tick cycle alive but never harbor Borrelia) and the northeastern US as the geography; Treponema is human-only, spreading sexually and perinatally. Every spirochete course can open with the Jarisch-Herxheimer reaction — flulike symptoms after the first antibiotics, from the sudden release of bacterial antigens. And because the chapter inventory assigns book 144 to this topic, the output carries the curved-rod roster that completes the M12 tree's leaves: cholera's permanently Gs-activating enterotoxin (rice-water diarrhea; acid-labile, high ID50 unless the host has reduced gastric acidity — the reason achlorhydria and contaminated water are the epidemiology), vulnificus's iron-driven marine wound infections, and H. pylori's urease-built alkaline niche of the antrum with its PUD-gastric-adenocarcinoma-MALT trajectory and its triple/quadruple therapy ladder.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "spirochete-syphilis-map",
      title: "The spirochete trio + the Lyme map + the syphilis clock + the serology tree",
      caption:
        "An original KYP redraw of the source's spirochete trio (visualization and reservoir axes with the Jarisch-Herxheimer card), the Lyme three-stage map with its vector/reservoir panel, the syphilis clock (primary → secondary → latent → tertiary with the congenital branch), the diagnosing-syphilis test-selection tree (serologic: nontreponemal RPR/VDRL + treponemal FTA-ABS/TP-PA; direct: darkfield + PCR) with the false-positive VDRL list, and the curved-rod roster of book 144.",
      notice:
        "The printed images (the comma/curved-rod/spirochete micrographs, the Ixodes tick, the erythema migrans bulls-eye, the chancre dark-field, the maculopapular rash with palms and soles, condylomata lata, gummas, the congenital face with the rhagades/snuffles arrows, Hutchinson teeth) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (Little Twirling Bacteria; A Key Lyme pie to the FACE; the triple-therapy letter gloss) are NOT reproduced in the visual — verification only, carried verbatim in the table block below.",
    },
    {
      kind: "table",
      title: "The spirochete pages — verbatim",
      intro: "The source's entries (books 144-146), verbatim (FA's printed mnemonics marked as such).",
      columns: ["Organism / Section", "Content (verbatim)"],
      rows: [
        ["Vibrio cholerae (+ V. vulnificus)", "Gram ⊝, flagellated, comma shaped A (printed micrograph — the comma-shaped organism; described-in-text only), oxidase ⊕, grows in alkaline media. Endemic to developing countries. Produces profuse rice-water diarrhea via enterotoxin that permanently activates Gs, ↑ cAMP. Sensitive to stomach acid (acid labile); requires large inoculum (high ID50) unless host has ↓ gastric acidity. Transmitted via ingestion of contaminated water or uncooked food (eg, raw shellfish). Treat promptly with oral rehydration solution. V. vulnificus—gram ⊝ bacillus, usually found in marine environments. Causes severe wound infections or septicemia due to exposure to contaminated sea water. Presents as cellulitis that can progress to necrotizing fasciitis in high-risk patients, especially those with high serum iron (eg, cirrhosis, hemochromatosis). Serious wound infection requires surgical debridement."],
        ["Helicobacter pylori", "Curved, flagellated (motile) gram ⊝ rod A (printed micrograph — the curved rod; described-in-text only) that is triple ⊕: catalase ⊕, oxidase ⊕, and urease ⊕ (can use urea breath test or fecal antigen test for diagnosis). Urease produces ammonia, creating an alkaline environment, which helps H pylori survive in acidic mucosa. Colonizes mainly antrum of stomach; causes gastritis and peptic ulcers (especially duodenal). Risk factor for peptic ulcer disease, gastric adenocarcinoma, and MALT lymphoma. Most common initial treatment is triple therapy: amoxicillin (metronidazole if penicillin allergy) + clarithromycin + proton pump inhibitor; antibiotics cure Pylori (FA's printed letter gloss). Bismuth-based quadruple therapy if concerned about macrolide resistance."],
        ["Spirochetes (the section)", "Spiral-shaped bacteria A (printed micrograph — the spiral with axial filaments; described-in-text only) with axial filaments. Includes Leptospira, Treponema, and Borrelia. Only Borrelia can be visualized using aniline dyes (Wright or Giemsa stain) in light microscopy due to size. Treponema is visualized by dark-field microscopy or direct fluorescent antibody (DFA) microscopy. Little Twirling Bacteria. (FA mnemonic, printed.)"],
        ["Jarisch-Herxheimer reaction (side box)", "Flulike symptoms (fever, chills, headache, myalgia) after antibiotics are started due to host response to sudden release of bacterial antigens. Usually occurs during treatment of spirochetal infections."],
        ["Lyme disease", "Caused by Borrelia burgdorferi, which is transmitted by the Ixodes deer tick A (printed photo — the tick; described-in-text only; also vector for Anaplasma spp. and protozoa Babesia). Natural reservoir is the mouse; deer are essential to tick life cycle but do not harbor Borrelia. Common in northeastern United States. Stage 1—early localized: erythema migrans (typical “bulls-eye” configuration B [printed photo — the bulls-eye rash; described-in-text only] is pathognomonic but not always present), flulike symptoms. Stage 2—early disseminated: secondary lesions, carditis, AV block, facial nerve (Bell) palsy, migratory myalgias/transient arthritis. Stage 3—late disseminated: encephalopathy, chronic arthritis, peripheral neuropathy. A Key Lyme pie to the FACE (FA mnemonic, printed): Facial nerve palsy (typically bilateral), Arthritis, Cardiac block, Erythema migrans. Treatment: doxycycline (1st line); amoxicillin (pregnant patients, children <8 years old); ceftriaxone if IV therapy required."],
        ["Leptospira interrogans", "Spirochete with hook-shaped ends found in water contaminated with animal urine. Leptospirosis—flulike symptoms, myalgias (classically of calves), jaundice, photophobia with conjunctival suffusion (erythema without exudate). Prevalent among surfers and in the tropics (eg, Hawaii). Weil disease (icterohemorrhagic leptospirosis)—severe form with jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, and anemia."],
        ["Syphilis (the clock, verbatim)", "Caused by spirochete Treponema pallidum. Treatment: penicillin G. PRIMARY: Localized disease presenting with painless chancre. Use fluorescent or dark-field microscopy to visualize treponemes in fluid from chancre A (printed dark-field micrograph — described-in-text only). VDRL ⊕ in ~80% of patients. SECONDARY: Disseminated disease with constitutional symptoms, maculopapular rash B (printed photo — the rash; described-in-text only) (including palms C1 and soles C2 [printed photos — palms and soles; described-in-text only]), condylomata lata D (printed photo — described-in-text only) (smooth, painless, wartlike white lesions on genitals), lymphadenopathy, patchy hair loss; also confirmable with dark-field microscopy. Serologic testing: VDRL/RPR (nonspecific), confirm diagnosis with specific test (eg, FTA-ABS). Secondary syphilis = systemic. Latent syphilis (⊕ serology without symptoms) may follow. TERTIARY: Gummas E (printed photo — described-in-text only) (chronic granulomas), aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, “general paresis”), Argyll Robertson pupil (constricts with accommodation but is not reactive to light). Signs: broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension. CONGENITAL: Presents with facial abnormalities such as rhagades (linear scars at angle of mouth, black arrow in F [printed photo — the congenital face; described-in-text only]), snuffles (nasal discharge, red arrow in F), saddle nose, notched (Hutchinson) teeth G (printed photo — described-in-text only), mulberry molars, and short maxilla; saber shins; CN VIII deafness. To prevent, treat patient early in pregnancy, as placental transmission typically occurs after first trimester."],
        ["Diagnosing syphilis (the tree, verbatim)", "False-Positive results on VDRL with: Pregnancy; Viral infection (eg, EBV, hepatitis); Drugs (eg, chlorpromazine, procainamide); Rheumatic fever (rare); Lupus (anticardiolipin antibody) and Leprosy. VDRL and RPR detects nonspecific antibody that reacts with beef cardiolipin. Quantitative, inexpensive, and widely available test for syphilis (sensitive but not specific). Nontreponemal tests (VDRL, RPR) and direct testing revert to negative after treatment. Antibodies detected by treponemal tests (FTA-ABS, TP-PA) will remain positive. THE TREE: Serologic testing → Nontreponemal (nonspecific): RPR, VDRL · Treponemal (specific): FTA-ABS, TP-PA; Direct testing → Darkfield microscopy, PCR."],
      ],
      caption:
        "The table reads with the visual: the trio rows place the organisms on the visualization and reservoir axes, the clock rows stage the diseases, the tree row carries the test-selection logic verbatim, and the roster rows complete book 144 per page ownership. The printed photos' pointers (the A/B/C1/C2/D/E/F/G markers) are carried verbatim; the photographs themselves are described-in-text only. The syphilis-testing tree's cells interleave in the text layer with M15's Chlamydiae section on the shared page 168 — resolved by the VLM census: the tree (Serologic [Nontreponemal: RPR, VDRL | Treponemal: FTA-ABS, TP-PA] + Direct: Darkfield, PCR) sits above the Chlamydiae block, and M14 owns the syphilis-testing section (dump lines 10-65) while the Chlamydiae section (lines 34-105 interleaved) is M15's.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the clocks imply",
      body: "THE SYPHILIS PROTOCOL: primary = painless chancre (dark-field or fluorescent microscopy of the fluid; VDRL ⊕ ~80%); secondary = systemic (palms-and-soles maculopapular rash, condylomata lata, lymphadenopathy, patchy hair loss) — screen VDRL/RPR, confirm FTA-ABS/TP-PA; latent = ⊕ serology without symptoms; tertiary = gummas + aortitis (vasa vasorum) + neurosyphilis (tabes dorsalis, general paresis, Argyll Robertson pupil; broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension). Treatment is penicillin G throughout; expect a possible Jarisch-Herxheimer reaction when antibiotics start (flulike symptoms from sudden antigen release). CONGENITAL PREVENTION: treat the patient early in pregnancy — placental transmission typically occurs after the first trimester; the phenotype set is rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, short maxilla, saber shins, CN VIII deafness. THE LYME PROTOCOL: the Ixodes deer tick (which also carries Anaplasma spp. and Babesia) in the northeastern US, mouse reservoir (deer don't harbor Borrelia); stage 1 erythema migrans (bulls-eye, pathognomonic but not always present) + flulike; stage 2 carditis with AV block, Bell palsy, migratory myalgias/transient arthritis; stage 3 encephalopathy, chronic arthritis, peripheral neuropathy; doxycycline 1st line (amoxicillin for pregnancy/children <8y; ceftriaxone if IV). THE LEPTOSPIRA PROTOCOL: animal-urine-contaminated water (surfers, the tropics — eg, Hawaii); flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion; Weil disease = jaundice + azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia. THE CURVED-ROD PROTOCOLS (book 144): rice-water diarrhea with ↓ gastric acidity = cholera — ORS promptly (Gs permanently activated → ↑ cAMP; acid-labile, high ID50); seawater cellulitis → necrotizing fasciitis in cirrhosis/hemochromatosis = V. vulnificus — surgical debridement; the triple-⊕ antrum rod with duodenal ulcers (urea breath test, fecal antigen) = H. pylori — triple therapy (amoxicillin [metronidazole if penicillin-allergic] + clarithromycin + PPI), bismuth quadruple if macrolide resistance.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 28-year-old man presents with 2 weeks of a diffuse rash involving the trunk, arms, palms, and soles, plus low-grade fever, malaise, and patchy hair loss; he reports a painless genital ulcer 6 weeks ago that resolved without treatment. Dark-field microscopy of a skin lesion is positive for spirochetes.",
        discriminator: "Rash including palms and soles + preceding painless chancre + condylomata-level systemic symptoms",
        concept: "Secondary syphilis — the systemic stage",
        answer:
          "Secondary syphilis: disseminated disease with constitutional symptoms, maculopapular rash including palms and soles, condylomata lata, lymphadenopathy, and patchy hair loss — confirmable by dark-field microscopy. Serology: VDRL/RPR (nonspecific) then confirm with a specific test (FTA-ABS). Secondary syphilis = systemic; latent syphilis (⊕ serology without symptoms) may follow. Treatment: penicillin G (watch for Jarisch-Herxheimer).",
      },
      {
        stem: "A 19-year-old surfer returns from Hawaii with 5 days of fever, severe calf myalgias, jaundice, and photophobia; examination shows conjunctival suffusion (erythema without exudate); labs reveal creatinine 3.1 mg/dL, bilirubin 6 mg/dL, and hemoglobin 9 g/dL with a normal smear.",
        discriminator: "Surfing/tropics + calf myalgias + jaundice + azotemia + conjunctival suffusion",
        concept: "Weil disease (icterohemorrhagic leptospirosis)",
        answer:
          "Leptospira interrogans: the spirochete with hook-shaped ends found in water contaminated with animal urine. Leptospirosis = flulike symptoms, myalgias (classically of calves), jaundice, photophobia with conjunctival suffusion; Weil disease is the severe form — jaundice and azotemia from liver and kidney dysfunction, fever, hemorrhage, and anemia. Prevalent among surfers and in the tropics (eg, Hawaii).",
      },
      {
        stem: "A 58-year-old man with cirrhosis develops severe left-leg pain, swelling, and rapidly spreading bullae 24 hours after wading in brackish sea water while fishing; the skin shows cellulitis with crepitus and hemorrhagic bullae; surgical exploration finds necrotizing fasciitis.",
        discriminator: "Cirrhosis (high serum iron) + sea water exposure + cellulitis progressing to necrotizing fasciitis",
        concept: "Vibrio vulnificus — the marine wound infection of iron-overload states",
        answer:
          "V. vulnificus: a gram ⊝ bacillus usually found in marine environments, causing severe wound infections or septicemia from contaminated sea water. Presents as cellulitis that can progress to necrotizing fasciitis in high-risk patients — especially those with high serum iron (eg, cirrhosis, hemochromatosis). Serious wound infection requires surgical debridement. (Distinguish from cholera — the other book-144 vibrio — which is a secretory diarrheal illness, not a wound infection.)",
      },
    ],
    traps: [
      {
        a: "A positive FTA-ABS years after treated syphilis means persistent infection",
        b: "Treponemal tests (FTA-ABS, TP-PA) REMAIN POSITIVE for life after treatment; it is the nontreponemal tests (VDRL, RPR) and direct testing (darkfield, PCR) that revert to negative",
        whyConfused: "Both tests are 'syphilis tests,' so their behaviors get merged.",
        keyDifference:
          "The after-treatment axis is the follow-up logic: RPR/VDRL titers (quantitative, against beef cardiolipin) are what you follow to confirm cure — they revert to negative. FTA-ABS/TP-PA staying positive is expected, not failure. Conversely, at diagnosis the nonspecific screen can be falsely positive (pregnancy, viral infection [EBV, hepatitis], drugs [chlorpromazine, procainamide], rheumatic fever [rare], lupus [anticardiolipin antibody] and leprosy) — which is exactly why the screen is confirmed by the specific test.",
        clue: "Any syphilis test-selection or post-treatment monitoring question.",
      },
      {
        a: "Cholera spreads person to person, so contact prophylaxis is indicated",
        b: "V. cholerae is ACID LABELE with a high ID50 — it requires a large inoculum unless the host has ↓ gastric acidity, and it spreads via contaminated water or uncooked food (eg, raw shellfish), not by person-to-person contact",
        whyConfused: "Most diarrheal pathogens feel transmissible by contact.",
        keyDifference:
          "The epidemiology is the physiology: the enterotoxin permanently activates Gs → ↑ cAMP → profuse rice-water diarrhea, but the organism is killed by stomach acid — so the inoculum must be large (high ID50) in normal gastric acidity, and achlorhydria (or PPIs, or gastrectomy) is the risk state that lowers the required dose. Transmission is ingestion of contaminated water or uncooked food; the treatment is prompt oral rehydration solution. (V. vulnificus — the other book-144 vibrio — is instead a marine wound/sepsis organism of high-iron states.)",
        clue: "Any cholera-transmission or risk-factor question.",
      },
      {
        a: "A treponemal test is the right initial screen because it is more specific",
        b: "The SCREEN is the nontreponemal test (RPR/VDRL — cheap, quantitative, sensitive); the treponemal test (FTA-ABS/TP-PA) is the CONFIRMATORY step — and a positive screen in lupus or pregnancy is a false positive, not syphilis",
        whyConfused: "Specific feels like it should be the better first test.",
        keyDifference:
          "VDRL/RPR detect nonspecific antibody that reacts with beef cardiolipin — quantitative, inexpensive, widely available, sensitive but not specific; the false-positive list (pregnancy, EBV/hepatitis, chlorpromazine/procainamide, rheumatic fever [rare], lupus with anticardiolipin antibody, leprosy) is the reason the algorithm exists: screen nonspecific, confirm specific. The treponemal tests then stay positive for life (they are not the follow-up tool).",
        clue: "Any test-algorithm question in a pregnant patient or a patient with lupus.",
      },
    ],
    pivots: [
      {
        lookAlike: "Nontreponemal vs treponemal (the screen/confirm pair)",
        differentiator: "Beef cardiolipin + reverts-to-negative vs specific + remains-positive",
        correctPath:
          "NONTREPONEMAL (nonspecific): RPR, VDRL — antibody reacting with beef cardiolipin; quantitative, inexpensive, widely available; sensitive but not specific; revert to negative after treatment (the follow-up titer). False positives: pregnancy, viral infection, drugs, rheumatic fever (rare), lupus + leprosy. TREPONEMAL (specific): FTA-ABS, TP-PA — the confirmatory tests; remain positive for life. DIRECT: darkfield microscopy, PCR — also revert to negative after treatment.",
      },
      {
        lookAlike: "Lyme vs syphilis (the two staged spirochetes)",
        differentiator: "Ixodes/mouse/northeastern geography vs human-only sexual/perinatal; bulls-eye vs chancre-to-gummas",
        correctPath:
          "LYME (Borrelia — seen with aniline dyes on light microscopy): Ixodes deer tick (also carries Anaplasma spp. and Babesia), mouse reservoir (deer don't harbor Borrelia), northeastern US; stage 1 erythema migrans (bulls-eye; pathognomonic but not always present) + flulike; stage 2 carditis/AV block, Bell palsy, migratory myalgias/transient arthritis; stage 3 encephalopathy, chronic arthritis, peripheral neuropathy; doxycycline (amoxicillin in pregnancy/<8y; ceftriaxone IV). SYPHILIS (Treponema — dark-field/DFA): human-only; primary painless chancre (VDRL ⊕ ~80%) → secondary systemic (palms-and-soles rash, condylomata lata, patchy hair loss) → latent (⊕ serology without symptoms) → tertiary (gummas, aortitis, neurosyphilis with Argyll Robertson); congenital via placenta typically after the first trimester; penicillin G throughout.",
      },
    ],
    miniCase: {
      vignette:
        "A 26-year-old woman at 16 weeks' gestation is found to have a positive RPR (titer 1:4) at routine prenatal screening. She is asymptomatic and has no rash, ulcers, or lymphadenopathy; she reports two prior miscarriages. She has a 6-year history of systemic lupus erythematosus treated with hydroxychloroquine; her most recent antinuclear antibody is positive at 1:640 and an anticardiolipin panel from last year was positive. She has never had a genital lesion, and her partner of 4 years is asymptomatic. A rapid plasma reagin test repeated at the reference laboratory is again weakly positive.",
      question:
        "Which of the following is the most appropriate next step in management?",
      options: [
        {
          label: "A",
          text: "Perform a treponemal-specific test (eg, FTA-ABS) to confirm the screen",
          correct: true,
          why: "Correct. The RPR/VDRL is a nonspecific screen — antibody reacting with beef cardiolipin — and this patient has two classic false-positive causes on the list (pregnancy and lupus with anticardiolipin antibody). The algorithm is: screen nonspecific (quantitative, inexpensive, sensitive but not specific), then confirm with a specific treponemal test (FTA-ABS or TP-PA) before treating. Treponemal tests remain positive for life, so they confirm exposure, not activity; activity is followed with the reverting nontreponemal titers.",
        },
        {
          label: "B",
          text: "Treat immediately with a single dose of intramuscular penicillin G without further testing",
          why: "Treating without confirmation exposes a lupus patient to unnecessary therapy — and if this is a false-positive RPR (pregnancy + anticardiolipin antibody), the treatment does nothing for the actual problem. Penicillin G is the right drug for confirmed syphilis at any stage, including in pregnancy (it prevents the congenital form when given early — placental transmission typically occurs after the first trimester), but the diagnosis must be confirmed first.",
        },
        {
          label: "C",
          text: "Perform dark-field microscopy of the cervix",
          why: "Dark-field microscopy is a DIRECT test for lesion fluid (the chancre of primary syphilis or the secondary lesions) — this patient has no lesion to sample, and cervical fluid is not a dark-field specimen. Direct testing (darkfield, PCR) is the third branch of the tree, used when a lesion exists.",
        },
        {
          label: "D",
          text: "Repeat the RPR in 4 weeks and treat only if the titer rises",
          why: "Following titers is the POST-TREATMENT monitoring strategy (nontreponemal titers revert to negative after cure) — it is not a diagnostic strategy for an unconfirmed positive screen. The false-positive causes (pregnancy, viral infection, drugs, rheumatic fever, lupus + leprosy) do not produce rising syphilis titers in any pattern that substitutes for a specific confirmatory test.",
        },
        {
          label: "E",
          text: "Order CSF-VDRL to exclude neurosyphilis before treating",
          why: "Neurosyphilis workups belong to patients with neurologic signs (tabes dorsalis, general paresis, the Argyll Robertson pupil — broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension) or late/uncertain-stage disease. An asymptomatic screen-positive pregnant patient needs a confirmatory serum test first — jumping to a lumbar puncture is both premature and unsupported by the tree.",
        },
      ],
      reasoning:
        "The stem stacks the false-positive VDRL list into one patient: pregnancy and lupus with anticardiolipin antibody (the printed list also includes viral infection, drugs, rheumatic fever [rare], and leprosy). The RPR/VDRL detects nonspecific antibody reacting with beef cardiolipin — quantitative, inexpensive, sensitive but NOT specific — so a weakly positive screen in this context is a clue, not a diagnosis. The tree's answer: confirm with a treponemal-specific test (FTA-ABS/TP-PA), which remains positive for life after any prior exposure. Each distractor misplaces a branch of the tree: treating without confirming (B), sampling a lesion that does not exist with dark-field (C), using the follow-up-titer logic as a diagnostic tool (D), or jumping to the neurosyphilis lane without neurologic signs (E). If the FTA-ABS confirms syphilis, penicillin G treats it — and treating early in pregnancy is what prevents the congenital phenotype set (rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, saber shins, CN VIII deafness), since placental transmission typically occurs after the first trimester.",
      },
    },
  mnemonics: [
    {
      code: "“Borrelia is the only spirochete that shows itself; the other two need the dark room.”",
      meaning:
        "KYP's key for the visualization axis: only Borrelia can be visualized with aniline dyes (Wright or Giemsa stain) in light microscopy due to size; Treponema needs dark-field or direct fluorescent antibody microscopy (the chancre-fluid technique of primary syphilis). FA's printed 'Little Twirling Bacteria' is verification-only and stays in the table block.",
      memorizes: "The spirochete visualization axis",
      whenToUse: "Any stain-selection or microscopy-question about spirochetes.",
      clinical: "Dark-field on chancre fluid in primary; aniline dyes for Borrelia in suspected Lyme (though serology drives Lyme diagnosis in practice).",
    },
    {
      code: "“The clocks run in order: the chancre tests the fluid, the rash tests the blood, the gumma tests the aorta, and the pregnancy tests the trimester.”",
      meaning:
        "KYP's key for the two staging maps: syphilis — primary (painless chancre; dark-field/fluorescent fluid; VDRL ⊕ ~80%), secondary (systemic: palms-and-soles maculopapular rash, condylomata lata, lymphadenopathy, patchy hair loss; VDRL/RPR then FTA-ABS), latent (⊕ serology without symptoms), tertiary (gummas, aortitis from vasa vasorum, neurosyphilis with tabes dorsalis, general paresis, Argyll Robertson); congenital — placental transmission typically after the FIRST trimester, prevented by treating early in pregnancy. Lyme — stage 1 erythema migrans (bulls-eye; pathognomonic but not always present), stage 2 carditis/AV block + Bell palsy + migratory arthritis, stage 3 encephalopathy/chronic arthritis/peripheral neuropathy. FA's 'A Key Lyme pie to the FACE' is verification-only and stays in the table block.",
      memorizes: "The Lyme and syphilis stage maps",
      whenToUse: "Any staged-disease or congenital-transmission question.",
      clinical: "Stage names the therapy window — and the trimester names the congenital risk.",
    },
    {
      code: "“Screen cheap, confirm specific, follow what reverts: the cardiolipin tests go home, the treponemal tests stay forever.”",
      meaning:
        "KYP's key for the serology tree: RPR/VDRL (beef cardiolipin; quantitative, inexpensive, sensitive not specific) are the screen and the follow-up — they revert to negative after treatment; FTA-ABS/TP-PA are the confirmatory tests that remain positive for life; darkfield and PCR are the direct tests (also reverting after treatment). False-positive screens: pregnancy, viral infection (EBV, hepatitis), drugs (chlorpromazine, procainamide), rheumatic fever (rare), lupus (anticardiolipin) + leprosy.",
      memorizes: "The nontreponemal-vs-treponemal algorithm and its after-treatment behavior",
      whenToUse: "Any syphilis test-selection, monitoring, or false-positive question.",
      clinical: "A positive screen in a pregnant lupus patient is a lupus clue until the specific test says otherwise.",
    },
  ],
  rapidReview: {
    s30: [
      "Trio: Leptospira (hooked ends, animal-urine water) · Treponema (dark-field/DFA) · Borrelia (aniline dyes — the only one on light microscopy)",
      "Jarisch-Herxheimer: flulike symptoms after antibiotics start — sudden release of bacterial antigens (spirochetal infections)",
      "Lyme: Ixodes tick (also Anaplasma + Babesia); MOUSE reservoir (deer don't harbor Borrelia); northeastern US",
      "Lyme stages: 1 erythema migrans (bulls-eye) · 2 carditis/AV block + Bell palsy · 3 encephalopathy, chronic arthritis, peripheral neuropathy",
      "Syphilis: primary painless chancre (VDRL ⊕ ~80%) · secondary SYSTEMIC (palms + soles) · tertiary gummas + aortitis + neurosyphilis",
    ],
    m3: [
      "Lyme treatment: doxycycline (1st line); amoxicillin (pregnancy, children <8y); ceftriaxone if IV. Syphilis treatment: penicillin G (all stages)",
      "Tertiary syphilis: gummas (chronic granulomas), aortitis (vasa vasorum), tabes dorsalis, general paresis, Argyll Robertson pupil; ⊕ Romberg, Charcot joint, stroke without hypertension",
      "Congenital syphilis: rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, short maxilla; saber shins; CN VIII deafness — treat early in pregnancy (transmission typically after 1st trimester)",
      "Weil disease: jaundice + azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia (the severe leptospirosis); surfers, tropics (eg, Hawaii)",
      "Leptospirosis: flulike symptoms, myalgias classically of calves, photophobia with conjunctival suffusion (erythema without exudate)",
    ],
    m10: [
      "Serology tree: Nontreponemal RPR/VDRL (beef cardiolipin; sensitive not specific; revert to negative after treatment) vs Treponemal FTA-ABS/TP-PA (specific; remain positive); Direct: darkfield + PCR (revert after treatment)",
      "False-positive VDRL: Pregnancy · Viral infection (EBV, hepatitis) · Drugs (chlorpromazine, procainamide) · Rheumatic fever (rare) · Lupus (anticardiolipin) + Leprosy",
      "V. cholerae: comma-shaped, oxidase ⊕, alkaline media; Gs permanently activated → ↑ cAMP → rice-water; acid-labile, high ID50 unless ↓ gastric acidity; ORS",
      "V. vulnificus: marine cellulitis → necrotizing fasciitis in high serum iron (cirrhosis, hemochromatosis); surgical debridement",
      "H. pylori: triple ⊕ (catalase/oxidase/urease); urea breath test/fecal antigen; antrum; gastritis + PUD (especially duodenal) + gastric adeno + MALT; triple therapy, bismuth quadruple for macrolide resistance",
    ],
  },
  recall: [
    {
      q: "Name the three spirochetes and how each is visualized.",
      a: "Leptospira, Treponema, and Borrelia — spiral-shaped bacteria with axial filaments. Only Borrelia can be visualized using aniline dyes (Wright or Giemsa stain) in light microscopy due to size; Treponema is visualized by dark-field microscopy or direct fluorescent antibody (DFA) microscopy. Leptospira: the spirochete with hook-shaped ends from water contaminated with animal urine — leptospirosis (flulike symptoms, myalgias classically of calves, jaundice, photophobia with conjunctival suffusion) and Weil disease (jaundice + azotemia from liver and kidney dysfunction, fever, hemorrhage, anemia); prevalent among surfers and in the tropics (eg, Hawaii).",
    },
    {
      q: "Walk the syphilis clock with its congenital branch and the serology tree.",
      a: "PRIMARY: localized, painless chancre; fluorescent or dark-field microscopy of chancre fluid; VDRL ⊕ in ~80%. SECONDARY: disseminated SYSTEMIC — constitutional symptoms, maculopapular rash including palms and soles, condylomata lata, lymphadenopathy, patchy hair loss; dark-field confirmable; VDRL/RPR (nonspecific) then confirm with FTA-ABS; latent syphilis (⊕ serology without symptoms) may follow. TERTIARY: gummas, aortitis (vasa vasorum destruction), neurosyphilis (tabes dorsalis, general paresis), Argyll Robertson pupil (accommodates, not reactive to light); broad-based ataxia, ⊕ Romberg, Charcot joint, stroke without hypertension. CONGENITAL: rhagades, snuffles, saddle nose, Hutchinson teeth, mulberry molars, short maxilla; saber shins; CN VIII deafness — placental transmission typically after the first trimester; prevented by treating early in pregnancy. SEROLOGY TREE: Nontreponemal (nonspecific) RPR/VDRL — beef cardiolipin, quantitative, inexpensive, sensitive not specific, revert to negative after treatment; Treponemal (specific) FTA-ABS/TP-PA — remain positive; Direct: darkfield + PCR. False-positive VDRL: pregnancy, viral infection (EBV, hepatitis), drugs (chlorpromazine, procainamide), rheumatic fever (rare), lupus (anticardiolipin) + leprosy. Treatment: penicillin G.",
    },
    {
      q: "Walk the Lyme map: vector, reservoir, geography, stages, treatment.",
      a: "Borrelia burgdorferi, transmitted by the Ixodes deer tick (also the vector for Anaplasma spp. and the protozoa Babesia). Natural reservoir is the MOUSE; deer are essential to the tick life cycle but do NOT harbor Borrelia. Common in the northeastern United States. Stage 1 early localized — erythema migrans (typical bulls-eye configuration is pathognomonic but not always present) + flulike symptoms. Stage 2 early disseminated — secondary lesions, carditis, AV block, facial nerve (Bell) palsy, migratory myalgias/transient arthritis. Stage 3 late disseminated — encephalopathy, chronic arthritis, peripheral neuropathy. Treatment: doxycycline (1st line); amoxicillin (pregnant patients, children <8 years old); ceftriaxone if IV therapy required.",
    },
    {
      q: "What is the Jarisch-Herxheimer reaction, and when does it occur?",
      a: "Flulike symptoms (fever, chills, headache, myalgia) after antibiotics are started, due to the host response to sudden release of bacterial antigens. Usually occurs during treatment of spirochetal infections.",
    },
    {
      q: "Give the curved-rod roster of book 144 with each mechanism.",
      a: "V. cholerae: gram ⊝ flagellated comma-shaped rod, oxidase ⊕, grows in alkaline media; endemic to developing countries; enterotoxin PERMANENTLY ACTIVATES Gs → ↑ cAMP → profuse rice-water diarrhea; acid labile with high ID50 unless ↓ gastric acidity; transmitted via contaminated water or uncooked food (eg, raw shellfish); treat promptly with oral rehydration solution. V. vulnificus: gram ⊝ bacillus of marine environments; severe wound infections or septicemia from contaminated sea water; cellulitis progressing to necrotizing fasciitis in high-risk patients — especially high serum iron (cirrhosis, hemochromatosis); serious wound infection requires surgical debridement. H. pylori: curved flagellated gram ⊝ rod, TRIPLE ⊕ (catalase, oxidase, urease); urea breath test or fecal antigen; urease produces ammonia creating an alkaline environment for survival in acidic mucosa; colonizes the antrum; gastritis and peptic ulcers (especially duodenal); risk factor for peptic ulcer disease, gastric adenocarcinoma, and MALT lymphoma; triple therapy (amoxicillin [metronidazole if penicillin allergy] + clarithromycin + PPI) or bismuth-based quadruple therapy if macrolide resistance.",
    },
  ],
  related: [
    {
      title: "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
      topicId: "enteric-pathogens",
      note: "M13's roster carried Campylobacter (the 42°C curved rod); this note completes the M12 tree's curved-rod lane with the other two leaves — alkaline Vibrio and urease-positive H. pylori — whose organism entries live here on book 144 by page ownership.",
    },
    {
      title: "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
      topicId: "gram-negative-bacilli",
      note: "M12's tree drew the curved-rod lane (42°C Campylobacter / alkaline Vibrio / urease H pylori) as gates; this note supplies those leaves' full entries — the cholera Gs mechanism, the vulnificus iron story, and the H. pylori antrum trajectory.",
    },
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's AB-toxin axis: cholera's enterotoxin (permanent Gs activation → ↑ cAMP) is the Gs-ADP-ribosylation family's archetype — the same mechanism class as ETEC's heat-labile toxin, wired here to its organism entry.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column: penicillin G across every syphilis stage (including pregnancy, where early treatment prevents the congenital form); doxycycline first-line for Lyme with amoxicillin in pregnancy/children <8y and ceftriaxone for IV disease; H. pylori's triple therapy (amoxicillin + clarithromycin + PPI) with the bismuth quadruple ladder for macrolide resistance; and the Jarisch-Herxheimer reaction that can accompany the first dose.",
    },
    {
      subject: "Cardiology (Aortitis)",
      connection: "Tertiary syphilis is the microbiology anchor for aortic disease questions: aortitis from vasa vasorum destruction — the mechanism behind aortic root aneurysm and aortic regurgitation in tertiary syphilis, cross-linking to the aorta chapter.",
    },
    {
      subject: "Neurology (Neurosyphilis)",
      connection: "Tabes dorsalis (dorsal column degeneration with broad-based ataxia and positive Romberg), general paresis, and the Argyll Robertson pupil (accommodates but does not react to light) are the neurology anchors; Charcot joint and stroke without hypertension complete the late-stage sign set.",
    },
    {
      subject: "Dermatology (Rash geography)",
      connection: "The two rash anchors: erythema migrans (the Lyme bulls-eye, pathognomonic but not always present) and the secondary-syphilis maculopapular rash that includes palms and soles — with condylomata lata as the genital counterpart and patchy hair loss as the systemic tell.",
    },
  ],
};
