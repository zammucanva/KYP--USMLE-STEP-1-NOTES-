import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 13).
// Source: First Aid 2026, Part 1 pdf 164-165 / book 142-143
//  (the Salmonella-vs-Shigella three-column comparison and its intro line;
//   Yersinia enterocolitica; the lactose-fermenting/MacConkey-EMB box;
//   Escherichia coli with the four-strain table; Klebsiella; Campylobacter
//   jejuni; Proteus mirabilis).

export const entericPathogens: KypUsMLENote = {
  id: "enteric-pathogens",
  title: "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
  subtitle:
    "The enteric block organized by THE COMPARISON AXES. Both Salmonella and Shigella are gram ⊝ rods, non-lactose fermenters, oxidase ⊝, and invade the GI tract via M cells of Peyer patches — then the table splits them three ways: S TYPHI (ty-Vi; humans only; HEMATOGENOUS spread; H2S ⊕; flagella ⊕; endotoxin + Vi capsule; HIGH acid-labile ID50; antibiotics PROLONG fecal excretion; primarily monocytes; constipation then diarrhea; oral live-attenuated and IM Vi-polysaccharide vaccines; typhoid fever with the salmon-colored truncal macular rash, pulse-temperature dissociation, later GI ulceration and hemorrhage, and the gallbladder-carrier state; ceftriaxone or fluoroquinolone) vs SALMONELLA SPP. EXCEPT S TYPHI (humans and animals; hematogenous spread rare; H2S ⊕; flagella ⊕; endotoxin; high ID50; antibiotics prolong excretion; PMNs in disseminated disease; diarrhea possibly bloody; no vaccine; poultry, eggs, pets, turtles; supportive care — antibiotics not indicated in immunocompetent individuals) vs SHIGELLA (humans only; cell to cell with NO hematogenous spread; H2S ⊝; no flagella; endotoxin + SHIGA TOXIN (enterotoxin); LOW acid-stable ID50 — very small inoculum; antibiotics SHORTEN fecal excretion; primarily PMN infiltration; crampy abdominal pain → tenesmus, bloody mucoid stools (bacillary dysentery); no vaccine; severity order S dysenteriae > S flexneri > S boydii > S sonnei; M-cell invasion key to pathogenicity). The E. COLI STRAIN SET runs on the same axes: gram ⊝, indole ⊕ rod with fimbriae (P pili) for cystitis and pyelonephritis, K capsule for pneumonia and neonatal meningitis, LPS endotoxin for septic shock — then EIEC (invades mucosa, necrosis and inflammation; dysentery like Shigella), ETEC (heat-labile + heat-stable enterotoxins, no inflammation or invasion; watery traveler's diarrhea), EPEC (no toxin; adheres to apical surface, flattens villi, prevents absorption; pediatric diarrhea), and EHEC (O157:H7; undercooked meat, raw leafy vegetables; does not ferment sorbitol; Shiga toxin → hemolytic-uremic syndrome — anemia, thrombocytopenia, acute kidney injury from microthrombi on damaged endothelium → mechanical hemolysis with schistocytes, platelet consumption, ↓ renal blood flow; dysentery from toxin alone). THE ROSTER closes the pages: Yersinia enterocolitica (bipolar-stained pleomorphic rod/coccobacillus; pet feces, contaminated milk, pork; bloody diarrhea, pseudoappendicitis from mesenteric adenitis/terminal ileitis, reactive arthritis), Klebsiella (lobar pneumonia with currant-jelly sputum in heavy alcohol use; very mucoid colonies from abundant polysaccharide capsules; healthcare-associated UTIs; MDR), Campylobacter jejuni (comma/S-shaped with polar flagella, oxidase ⊕, grows at 42°C; the major cause of bloody diarrhea especially in children; fecal-oral by person-to-person, undercooked poultry/meat, unpasteurized milk, animal contact; antecedent to Guillain-Barré syndrome and reactive arthritis), Proteus mirabilis (urease ⊕ facultative anaerobe with swarming motility; UTIs; urea hydrolysis → ↑ pH → struvite staghorn calculi).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — the enteric comparison table read as an identification engine (reservoir, spread, H2S, flagella, virulence factors, infectious dose, antibiotic effect on fecal excretion, immune response, GI manifestations, vaccine, unique properties); the E. coli four-strain set on the invasion-vs-toxigenic axis; the HUS cascade as the block's mechanism capstone; the lactose-fermenter MacConkey/EMB rule; Yersinia/Klebsiella/Campylobacter/Proteus as the environment roster",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 142–143 (Salmonella vs Shigella; Yersinia enterocolitica; lactose-fermenting enteric bacteria; Escherichia coli strains; Klebsiella; Campylobacter jejuni; Proteus mirabilis)",
  tags: [
    "enteric pathogens",
    "Salmonella",
    "Salmonella typhi",
    "typhoid fever",
    "ty-Vi",
    "Vi capsule",
    "salmon-colored rash",
    "pulse-temperature dissociation",
    "nontyphoidal Salmonella",
    "Shigella",
    "Shiga toxin",
    "bacillary dysentery",
    "tenesmus",
    "4 F's",
    "M cells",
    "Peyer patches",
    "ID50",
    "acid-labile",
    "acid-stable",
    "fecal excretion",
    "Escherichia coli",
    "E coli strains",
    "EIEC",
    "ETEC",
    "traveler's diarrhea",
    "EPEC",
    "EHEC",
    "O157:H7",
    "Shiga toxin HUS",
    "hemolytic-uremic syndrome",
    "schistocytes",
    "sorbitol fermentation",
    "indole",
    "P pili",
    "fimbriae",
    "K capsule",
    "neonatal meningitis",
    "septic shock",
    "Yersinia enterocolitica",
    "bipolar staining",
    "pseudoappendicitis",
    "mesenteric adenitis",
    "terminal ileitis",
    "reactive arthritis",
    "lactose fermenters",
    "MacConkey agar",
    "pink colonies",
    "EMB agar",
    "green sheen",
    "Citrobacter",
    "Enterobacter",
    "Klebsiella",
    "currant jelly sputum",
    "lobar pneumonia",
    "mucoid colonies",
    "Campylobacter jejuni",
    "42 degrees",
    "Guillain-Barre syndrome",
    "Proteus mirabilis",
    "urease",
    "struvite stones",
    "staghorn calculi",
    "swarming motility",
  ],
  core: {
    what: "THE THREE-WAY ENTERIC SPLIT. Both Salmonella and Shigella are gram ⊝ rods, non-lactose fermenters, oxidase ⊝, invading the GI tract via M cells of Peyer patches — the shared opening that makes the table necessary. S TYPHI (ty-Vi): humans-only reservoir, HEMATOGENOUS spread, H2S ⊕, flagellated (it swims), endotoxin + Vi capsule, HIGH acid-labile infectious dose (inactivated by gastric acids), antibiotics PROLONG fecal excretion, primarily monocytes on immune response, constipation followed by diarrhea, the oral live-attenuated S typhi and IM Vi capsular polysaccharide vaccines, and as unique properties: typhoid fever (salmon-colored truncal macular rash, abdominal pain, fever with pulse-temperature dissociation; later GI ulceration and hemorrhage), the carrier state with gallbladder colonization, treated with ceftriaxone or fluoroquinolone. SALMONELLA SPP. EXCEPT S TYPHI: humans-and-animals reservoir, hematogenous spread rare, H2S ⊕, flagellated, endotoxin, high ID50, antibiotics prolong excretion, PMNs in disseminated disease, diarrhea possibly bloody, no vaccine — unique properties: poultry, eggs, pets, and turtles as common sources, and supportive treatment (antibiotics not indicated in immunocompetent individuals). SHIGELLA: humans only, cell to cell with NO hematogenous spread, H2S ⊝, no flagella, endotoxin + SHIGA TOXIN (enterotoxin), LOW acid-stable ID50 (very small inoculum; resistant to gastric acids), antibiotics SHORTEN fecal excretion, primarily PMN infiltration, crampy abdominal pain → tenesmus with bloody mucoid stools (bacillary dysentery), no vaccine — unique properties: the severity order S dysenteriae > S flexneri > S boydii > S sonnei (in order of decreasing toxin), and M-cell invasion as the key to pathogenicity. THE E. COLI SET (gram ⊝, indole ⊕): virulence factors fimbriae (P pili) → cystitis and pyelonephritis, K capsule → pneumonia and neonatal meningitis, LPS endotoxin → septic shock; the four strains — EIEC invades the intestinal mucosa (necrosis and inflammation; dysentery similar to Shigella), ETEC produces heat-labile and heat-stable enterotoxins with no inflammation or invasion (watery traveler's diarrhea), EPEC produces no toxin but adheres to the apical surface, flattens villi, prevents absorption (diarrhea usually in children), EHEC (O157:H7, undercooked meat and raw leafy vegetables) does not ferment sorbitol and its Shiga toxin causes hemolytic-uremic syndrome — the triad of anemia, thrombocytopenia, and acute kidney injury due to microthrombi forming on damaged endothelium → mechanical hemolysis (schistocytes on smear), platelet consumption, ↓ renal blood flow; dysentery from toxin alone. THE ROSTER: Yersinia enterocolitica (gram ⊝ pleomorphic rod/coccobacillus with bipolar staining; pet feces [cats, dogs], contaminated milk, pork; acute bloody diarrhea, pseudoappendicitis [right lower abdominal pain from mesenteric adenitis and/or terminal ileitis], reactive arthritis in adults); Klebsiella (gram ⊝ rod; lobar pneumonia more common with heavy alcohol use or impaired host defenses; very mucoid colonies from abundant polysaccharide capsules; dark red currant-jelly sputum; healthcare-associated UTIs; multidrug resistance); Campylobacter jejuni (gram ⊝ comma or S shaped with polar flagella, oxidase ⊕, grows at 42°C; major cause of bloody diarrhea especially in children; fecal-oral via person-to-person contact, undercooked poultry or meat, unpasteurized milk, animal contact [dogs, cats, pigs]; common antecedent to Guillain-Barré syndrome and reactive arthritis); Proteus mirabilis (gram ⊝, urease ⊕, facultative anaerobe; long flagellae with swarming motility; common cause of UTIs; urease hydrolyzes urea → CO2 + ammonia → net increase in pH → struvite stones; renal-calyx blockage → staghorn calculi). THE LACTOSE RULE: fermentation of lactose → pink colonies on MacConkey agar (Citrobacter, E coli, Enterobacter, Klebsiella, Serratia); on EMB agar lactose fermenters grow purple/black colonies, with E coli growing colonies with a green sheen.",
    why: "This block carries three exam institutions. The first is THE TABLE ITSELF: any enteric stem resolves through its axes — reservoir (humans only vs humans and animals), spread (hematogenous vs cell-to-cell), H2S, flagella, virulence factors (endotoxin vs endotoxin + Shiga toxin), ID50 (high acid-labile vs low acid-stable — the public-health axis: low-dose organisms spread by person-to-person contact), the antibiotic effect on fecal excretion (prolongs for both Salmonellas, shortens for Shigella), the immune response (monocytes vs PMNs), the GI manifestation (constipation in typhoid vs tenesmus in dysentery), the vaccine column (only S typhi has one — oral live-attenuated and IM Vi polysaccharide), and the unique properties (the typhoid rash, the food sources, the severity order). The second is the INVASION-VS-TOXIN AXIS: EIEC borrows Shigella's invasion, ETEC borrows cholera's enterotoxin-only watery mechanism, EPEC adheres without either, and EHEC borrows Shigella's Shiga toxin — then adds the kidney: the HUS triad (anemia, thrombocytopenia, AKI) with schistocytes is this block's most-tested mechanism. The third is the EXPOSURE ROSTER: the puppy or undercooked chicken that precedes Guillain-Barré (Campylobacter), the cat/dog/pork exposure that mimics appendicitis (Yersinia), the alcohol user's currant-jelly lobar pneumonia (Klebsiella), and the struvite staghorn calculus (Proteus urease).",
    keyIdea: "Read the table down, then read the exposure. TYPHOIDAL: humans only + hematogenous + monocytes + constipation → the salmon-colored truncal rash, pulse-temperature dissociation, gallbladder carriers, ceftriaxone/fluoroquinolone, and the only vaccine column in the table (oral live-attenuated S typhi; IM Vi capsular polysaccharide). NONTYPHOIDAL: animals (poultry, eggs, pets, turtles) + PMNs in disseminated disease + diarrhea possibly bloody → supportive care, antibiotics NOT indicated in immunocompetent individuals (and they prolong excretion for both Salmonellas). SHIGELLA: humans only + cell-to-cell (no hematogenous) + low acid-stable dose + PMN infiltration + tenesmus with bloody mucoid stools → antibiotics SHORTEN excretion; severity S dysenteriae > S flexneri > S boydii > S sonnei. E. COLI: indole ⊕; P pili (cystitis/pyelonephritis), K capsule (pneumonia/neonatal meningitis), LPS (septic shock); EIEC = invasive dysentery, ETEC = watery traveler's diarrhea, EPEC = pediatric flattening of villi, EHEC = O157:H7, sorbitol-negative, Shiga toxin → HUS (schistocytes + thrombocytopenia + AKI) with dysentery from toxin alone. ROSTER: bipolar-stained pseudoappendicitis after pet feces/pork = Yersinia; currant-jelly lobar pneumonia in heavy alcohol use = Klebsiella; 42°C comma rod after a puppy, preceding Guillain-Barré = Campylobacter; urease-driven staghorn calculi = Proteus.",
  },
  mechanisms: [
    {
      id: "enteric-axis-logic",
      title: "The comparison table as an identification engine",
      context: "From the printed three-column table to the exam's axis-reading logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A gram ⊝ rod, non-lactose fermenting, oxidase ⊝, invading via M cells of Peyer patches — the shared opening of both Salmonella and Shigella",
            sublabel: "Input — the organisms the table must separate.",
            variant: "input",
          },
          {
            id: "s1",
            label: "AXIS 1-4, the fast four: RESERVOIR (humans only vs humans and animals) · SPREAD (hematogenous vs rare-hematogenous vs cell to cell) · H2S (⊕ ⊕ ⊝) · FLAGELLA (⊕ ⊕ ⊝)",
            sublabel: "Process — the morphology-and-epidemiology split that names the genus first.",
            variant: "process",
          },
          {
            id: "s2",
            label: "AXIS 5-7: VIRULENCE (endotoxin + Vi capsule vs endotoxin vs endotoxin + Shiga toxin) · ID50 (high acid-labile vs high vs low acid-stable — the dose axis that predicts person-to-person spread) · ANTIBIOTIC EFFECT ON FECAL EXCRETION (prolongs · prolongs · shortens)",
            sublabel: "Process — the toxin/dose/therapy axes, exactly as the printed rows wire them.",
            variant: "process",
          },
          {
            id: "s3",
            label: "AXIS 8-10: IMMUNE RESPONSE (primarily monocytes vs PMNs in disseminated disease vs primarily PMN infiltration) · GI MANIFESTATIONS (constipation then diarrhea vs diarrhea possibly bloody vs crampy pain → tenesmus, bloody mucoid stools — bacillary dysentery) · VACCINE (oral live-attenuated S typhi + IM Vi polysaccharide vs none vs none)",
            sublabel: "Process — the host-response and prevention columns.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the unique-properties row resolves the vignette: typhoid fever (salmon-colored truncal macular rash, pulse-temperature dissociation, later GI ulceration and hemorrhage; gallbladder carrier state; ceftriaxone or fluoroquinolone) · the animal-source set (poultry, eggs, pets, turtles; supportive care) · the Shigella set (severity order S dysenteriae > S flexneri > S boydii > S sonnei; M-cell invasion key to pathogenicity)",
            sublabel: "Output — each column's signature disease set and management.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the fast four axes" },
          { from: "s1", to: "s2", label: "toxin · dose · excretion" },
          { from: "s2", to: "s3", label: "host response · prevention" },
          { from: "s3", to: "o1", label: "the unique row" },
        ],
        caption:
          "The printed table is this chapter's lab algorithm: it runs eleven axes across three organisms, and every axis is a possible exam question. The fastest discriminators are the first four (reservoir, spread, H2S, flagella): they separate the genera before any toxin is discussed. The dose axis is the public-health column — Shigella's low acid-stable ID50 (very small inoculum, resistant to gastric acids) is why it spreads person-to-person on fingers, flies, food, and feces, while the high acid-labile dose of S typhi and the animal reservoir of nontyphoidal salmonella name their own exposures. The antibiotic-effect axis is therapy read as epidemiology: antibiotics prolong fecal excretion for both Salmonellas (a reason to withhold them in immunocompetent nontyphoidal disease) and shorten it for Shigella (a reason to give them). The vaccine column belongs to S typhi alone — the oral live-attenuated vaccine and the IM Vi capsular polysaccharide vaccine — and the unique row carries the diseases: typhoid fever with its salmon-colored truncal macular rash, abdominal pain, fever with pulse-temperature dissociation, later GI ulceration and hemorrhage, and the carrier state with gallbladder colonization (treated with ceftriaxone or fluoroquinolone); the animal-source set with supportive treatment; and the Shigella set with its severity order (less toxin produced: S dysenteriae, S flexneri, S boydii, S sonnei) and M-cell invasion as the key to pathogenicity.",
      },
    },
    {
      id: "shiga-toxin-hus-cascade",
      title: "The Shiga-toxin cascade: from endothelium to the HUS triad",
      context: "EHEC's mechanism as the block's capstone — and its mirror in Shigella's virulence cell",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A child with bloody diarrhea after undercooked meat or raw leafy vegetables — O157:H7, the most common US serotype, does not ferment sorbitol (vs other E coli)",
            sublabel: "Input — the exposure and the lab identity of EHEC.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Shiga toxin damages endothelium → MICROTHROMBI form on the damaged endothelium",
            sublabel: "Process — the toxin's vascular target.",
            variant: "process",
          },
          {
            id: "s2",
            label: "The triad as three downstream consequences: MECHANICAL HEMOLYSIS → anemia with schistocytes on peripheral blood smear · PLATELET CONSUMPTION → thrombocytopenia · ↓ RENAL BLOOD FLOW → acute kidney injury",
            sublabel: "Process — anemia, thrombocytopenia, and acute kidney injury, each with its mechanism named.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — hemolytic-uremic syndrome: dysentery (toxin alone causes necrosis and inflammation — no invasion), then pallor, oliguria, and the smear's schistocytes. Shigella carries the same toxin in its VIRULENCE FACTORS cell (endotoxin; Shiga toxin [enterotoxin]) — the table's and the strain set's shared weapon.",
            sublabel: "Output — the syndrome the exam builds its pediatric nephrology stems on.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "Shiga toxin → endothelium" },
          { from: "s1", to: "s2", label: "microthrombi" },
          { from: "s2", to: "o1", label: "the HUS triad" },
        ],
        caption:
          "EHEC is the strain that turns Shigella's toxin into a multi-organ syndrome. The organism arrives from undercooked meat or raw leafy vegetables as O157:H7 (most common US serotype; does not ferment sorbitol — the lab identity, vs other E coli which do). Shiga toxin then damages endothelium, and microthrombi form on the damaged endothelium — the single step that generates all three findings: red blood cells are sheared passing the microthrombi (mechanical hemolysis with schistocytes on the peripheral blood smear → anemia), platelets are consumed into the growing thrombi (→ thrombocytopenia), and renal blood flow falls through the narrowed, thrombus-laden microvasculature (→ acute kidney injury). The presentation column reads 'dysentery (toxin alone causes necrosis and inflammation)' — EHEC causes dysentery without invading, which is the distinction that separates it from EIEC (which invades like Shigella) on any identification question. The same Shiga toxin appears in Shigella's virulence-factors cell — which is why the severity order of Shigella species runs by toxin produced (S dysenteriae most, S sonnei least) — and it is why the hemolytic-uremic syndrome anchors this block's cross-links to nephrology (microangiopathic hemolytic anemia) and to pediatrics.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "enteric-pathogen-map",
      title: "The Salmonella-vs-Shigella split + the E. coli strain set + the enteric roster",
      caption:
        "An original KYP redraw of the source's three-column Salmonella-vs-Shigella comparison (eleven axes: reservoirs, spread, H2S production, flagella, virulence factors, infectious dose, effect of antibiotics on fecal excretion, immune response, GI manifestations, vaccine, unique properties), the four-strain E. coli set with the HUS cascade as the EHEC capstone, and the four-organism roster (Yersinia enterocolitica, Klebsiella, Campylobacter jejuni, Proteus mirabilis).",
      notice:
        "The printed photos on p165 (Klebsiella's very mucoid colonies; Campylobacter's comma/S shape with polar flagella) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (salmon swim; 'tyVi' pronunciation gloss; shortens Shigella; 4 F's; McCowkey CEEKS milk; ABCDE's of Klebsiella; the hot campfire; the strain-letter glosses) are NOT reproduced in the visual — verification only, carried verbatim in the table block below.",
    },
    {
      kind: "table",
      title: "The enteric pages — verbatim",
      intro: "The source's entries (books 142-143), verbatim (FA's printed mnemonics marked as such).",
      columns: ["Organism / Table", "Content (verbatim)"],
      rows: [
        ["Salmonella vs Shigella — the genus line", "Both Salmonella and Shigella are gram ⊝ rods, non-lactose fermenters, oxidase ⊝, and can invade the GI tract via M cells of Peyer patches."],
        ["S typhi (ty-Vi)", "RESERVOIRS: Humans only. SPREAD: Hematogenous spread. H2S PRODUCTION: Yes. FLAGELLA: Yes (salmon swim — FA mnemonic, printed). VIRULENCE FACTORS: Endotoxin; Vi capsule (pronounce “tyVi” — FA gloss, printed). INFECTIOUS DOSE (ID50): High—large inoculum required; acid-labile (inactivated by gastric acids). EFFECT OF ANTIBIOTICS ON FECAL EXCRETION: Prolongs duration. IMMUNE RESPONSE: Primarily monocytes. GI MANIFESTATIONS: Constipation, followed by diarrhea. VACCINE: Oral vaccine contains live attenuated S typhi; IM vaccine contains Vi capsular polysaccharide. UNIQUE PROPERTIES: Causes typhoid fever (salmon-colored truncal macular rash, abdominal pain, fever [pulse-temperature dissociation]; later GI ulceration and hemorrhage); treat with ceftriaxone or fluoroquinolone. Carrier state with gallbladder colonization."],
        ["Salmonella spp. except S typhi", "RESERVOIRS: Humans and animals. SPREAD: Hematogenous spread is rare. H2S PRODUCTION: Yes. FLAGELLA: Yes (salmon swim — FA mnemonic, printed). VIRULENCE FACTORS: Endotoxin. INFECTIOUS DOSE (ID50): High. EFFECT OF ANTIBIOTICS ON FECAL EXCRETION: Prolongs duration. IMMUNE RESPONSE: PMNs in disseminated disease. GI MANIFESTATIONS: Diarrhea (possibly bloody). VACCINE: No vaccine. UNIQUE PROPERTIES: Poultry, eggs, pets, and turtles are common sources. Treatment is supportive; antibiotics are not indicated in immunocompetent individuals."],
        ["Shigella", "RESERVOIRS: Humans only. SPREAD: Cell to cell; no hematogenous spread. H2S PRODUCTION: No. FLAGELLA: No. VIRULENCE FACTORS: Endotoxin; Shiga toxin (enterotoxin). INFECTIOUS DOSE (ID50): Low—very small inoculum required; acid stable (resistant to gastric acids). EFFECT OF ANTIBIOTICS ON FECAL EXCRETION: Shortens duration (shortens Shigella — FA mnemonic, printed). IMMUNE RESPONSE: Primarily PMN infiltration. GI MANIFESTATIONS: Crampy abdominal pain → tenesmus, bloody mucoid stools (bacillary dysentery). VACCINE: No vaccine. UNIQUE PROPERTIES: 4 F's: fingers, flies, food, feces (FA mnemonic, printed). In order of decreasing severity (less toxin produced): S dysenteriae, S flexneri, S boydii, S sonnei. Invasion of M cells is key to pathogenicity; infectious dose is low."],
        ["Yersinia enterocolitica", "Gram ⊝ pleomorphic rod/coccobacillus with bipolar staining. Usually transmitted from pet feces (eg, cats, dogs), contaminated milk, or pork. Can cause acute bloody diarrhea, pseudoappendicitis (right lower abdominal pain due to mesenteric adenitis and/or terminal ileitis), reactive arthritis in adults."],
        ["Lactose-fermenting enteric bacteria", "Fermentation of lactose → pink colonies on MacConkey agar. Examples include Citrobacter, E coli, Enterobacter, Klebsiella, Serratia. McCowkey CEEKS milk. (FA mnemonic, printed.) EMB agar—lactose fermenters grow as purple/black colonies. E coli grows colonies with a green sheen."],
        ["Escherichia coli — the genus line", "Gram ⊝, indole ⊕ rod. E coli virulence factors: fimbriae (ie, P pili)—cystitis and pyelonephritis; K capsule—pneumonia, neonatal meningitis; LPS endotoxin—septic shock."],
        ["Enteroinvasive E coli (EIEC)", "TOXIN AND MECHANISM: Microbe invades intestinal mucosa and causes necrosis and inflammation. PRESENTATION: EIEC is Invasive; dysentery. Clinical manifestations similar to Shigella. (FA's letter gloss, printed.)"],
        ["Enterotoxigenic E coli (ETEC)", "TOXIN AND MECHANISM: Produces heat-labile and heat-stable enteroToxins. No inflammation or invasion. PRESENTATION: ETEC; Traveler's diarrhea (watery). (FA's letter glosses, printed.)"],
        ["Enteropathogenic E coli (EPEC)", "TOXIN AND MECHANISM: No toxin produced. Adheres to apical surface, flattens villi, prevents absorption. PRESENTATION: Diarrhea, usually in children (think EPEC and Pediatrics — FA gloss, printed)."],
        ["Enterohemorrhagic E coli (EHEC)", "TOXIN AND MECHANISM: O157:H7 is most common serotype in US. Often transmitted via undercooked meat, raw leafy vegetables. Shiga toxin causes hemolytic-uremic syndrome—triad of anemia, thrombocytopenia, and acute kidney injury due to microthrombi forming on damaged endothelium → mechanical hemolysis (with schistocytes on peripheral blood smear), platelet consumption → thrombocytopenia, and ↓ renal blood flow. PRESENTATION: Dysentery (toxin alone causes necrosis and inflammation). Does not ferment sorbitol (vs other E coli). EHEC associated with hemorrhage, hamburgers, hemolytic-uremic syndrome. (FA mnemonic, printed.)"],
        ["Klebsiella", "Gram ⊝ rod; intestinal microbiota that causes lobar pneumonia; more common in patients with heavy alcohol use or with impaired host defenses. Very mucoid colonies A (printed photo — mucoid colonies from abundant polysaccharide capsules; described-in-text only) caused by abundant polysaccharide capsules. Dark red “currant jelly” sputum (blood/mucus). Also cause of healthcare-associated UTIs. Associated with evolution of multidrug resistance (MDR). ABCDE's of Klebsiella (FA mnemonic, printed): Aspiration pneumonia, aBscess in lungs and liver, “Currant jelly” sputum, Diabetes mellitus, EtOH overuse."],
        ["Campylobacter jejuni", "Gram ⊝, comma or S shaped (with polar flagella) A (printed photo — the comma/S morphology with polar flagella; described-in-text only), oxidase ⊕, grows at 42°C (“Campylobacter likes the hot campfire” — FA mnemonic, printed). Major cause of bloody diarrhea, especially in children. Fecal-oral transmission through personto-person contact or via ingestion of undercooked contaminated poultry or meat, unpasteurized milk. Contact with infected animals (dogs, cats, pigs) is also a risk factor. Common antecedent to Guillain-Barré syndrome and reactive arthritis."],
        ["Proteus mirabilis", "Gram ⊝, urease ⊕, facultative anaerobe, long flagellae with “swarming” motility. Common cause of UTIs. Urease (virulence factor) hydrolyzes urea to carbon dioxide and ammonia → net increase in pH → promotes formation of struvite stones. Significant blockage of renal calyces results in branched stones called staghorn calculi."],
      ],
      caption:
        "The table reads with the visual: the comparison rows resolve the genus, the strain rows resolve the E. coli set on the invasion-vs-toxin axis, and the roster rows carry the exposure histories. The printed photos' pointers (the A markers) are carried verbatim; the photographs themselves are described-in-text only. Column assignments of the interleaved EHEC row were resolved by two independent VLM reads (200-DPI census + zoom): 'Does not ferment sorbitol' belongs to the PRESENTATION column, between the dysentery sentence and the EHEC mnemonic line.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the axes imply",
      body: "THE TYPHOID PROTOCOL: humans-only reservoir, hematogenous spread, primarily monocytes, constipation then diarrhea, fever with pulse-temperature dissociation and the salmon-colored truncal macular rash; later GI ulceration and hemorrhage; the carrier state lives in the gallbladder. Treat with ceftriaxone or fluoroquinolone; vaccinate with the oral live-attenuated S typhi or the IM Vi capsular polysaccharide vaccine — the table's only vaccine column. THE NONTYPHOIDAL PROTOCOL: poultry, eggs, pets, turtles; diarrhea possibly bloody; PMNs in disseminated disease; treatment is SUPPORTIVE — antibiotics are not indicated in immunocompetent individuals (and for both Salmonellas antibiotics prolong fecal excretion). THE SHIGELLA PROTOCOL: humans only, cell-to-cell spread with no hematogenous route, low acid-stable dose (person-to-person on fingers, flies, food, feces), PMN infiltration, tenesmus with bloody mucoid stools (bacillary dysentery); antibiotics SHORTEN fecal excretion — the one rod where the antibiotic effect flips. THE EHEC PROTOCOL: undercooked meat or raw leafy vegetables; O157:H7, sorbitol-negative; dysentery from toxin alone; watch for the HUS triad (schistocytes, thrombocytopenia, AKI). THE ROSTER PROTOCOLS: pseudoappendicitis after pet feces, contaminated milk, or pork = Yersinia enterocolitica (reactive arthritis may follow); heavy alcohol use with currant-jelly lobar pneumonia and very mucoid colonies = Klebsiella (also healthcare-associated UTIs, MDR); the comma/S-shaped oxidase-⊕ rod growing at 42°C after a puppy or undercooked poultry, preceding Guillain-Barré = Campylobacter jejuni; the urease-positive swarmer with staghorn struvite calculi = Proteus mirabilis. THE PLATE RULE: lactose fermentation → pink colonies on MacConkey (Citrobacter, E coli, Enterobacter, Klebsiella, Serratia); EMB — purple/black colonies, with E coli showing the green sheen.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old woman returns from a 3-week trip to South Asia with 10 days of steadily rising fever, dull abdominal pain, and — despite the 39.4 °C temperature — a pulse of 68/min. She has been constipated for a week. Examination shows faint salmon-colored macules across the trunk; blood cultures grow a motile, H2S-positive gram ⊝ rod.",
        discriminator: "Constipation with fever + pulse-temperature dissociation + truncal salmon-colored macular rash",
        concept: "Typhoid fever — S typhi",
        answer:
          "S typhi (ty-Vi): the humans-only, hematogenous-spread salmonella with the Vi capsule and high acid-labile infectious dose. Primarily monocytes on immune response; constipation followed by diarrhea; later GI ulceration and hemorrhage; the carrier state colonizes the gallbladder. Treat with ceftriaxone or a fluoroquinolone; vaccines: oral live-attenuated S typhi and IM Vi capsular polysaccharide (the table's only vaccine column).",
      },
      {
        stem: "A 5-year-old develops crampy abdominal pain and bloody diarrhea 4 days after a cookout; the burgers were eaten pink. Five days later she is pale with tea-colored urine: hemoglobin 7.8 g/dL, platelets 24,000/μL, creatinine 2.7 mg/dL, and schistocytes on the peripheral blood smear. Stool studies grow a gram ⊝ rod that does not ferment sorbitol.",
        discriminator: "Undercooked beef + bloody diarrhea then schistocytes + thrombocytopenia + AKI + sorbitol-negative",
        concept: "EHEC (O157:H7) with hemolytic-uremic syndrome",
        answer:
          "EHEC: O157:H7 (most common US serotype), transmitted via undercooked meat and raw leafy vegetables; does not ferment sorbitol (vs other E coli). Shiga toxin damages endothelium → microthrombi → mechanical hemolysis (schistocytes, anemia), platelet consumption (thrombocytopenia), and ↓ renal blood flow (acute kidney injury) — the hemolytic-uremic syndrome triad. The presentation is dysentery from toxin alone (no invasion), which is what separates it from EIEC and from Shigella on identification questions.",
      },
      {
        stem: "An 8-year-old boy is brought in for 2 days of right lower-quadrant pain, low-grade fever, and bloody diarrhea; the surgical service consults for possible appendicitis, but the CT shows mesenteric adenitis and terminal ileitis. The family adopted a kitten from a shelter 2 weeks ago; the child also drinks unpasteurized milk.",
        discriminator: "Right lower-quadrant pain + mesenteric adenitis/terminal ileitis (pseudoappendicitis) + new pet + unpasteurized milk",
        concept: "Yersinia enterocolitica — the pseudoappendicitis rod",
        answer:
          "Yersinia enterocolitica: gram ⊝ pleomorphic rod/coccobacillus with bipolar staining, transmitted from pet feces (cats, dogs), contaminated milk, or pork. Acute bloody diarrhea with pseudoappendicitis (right lower abdominal pain due to mesenteric adenitis and/or terminal ileitis); reactive arthritis in adults. The exposure history (kitten, unpasteurized milk) plus the ileitis pattern is the map — no vaccine, treat supportively in most cases and beware the surgical mimic.",
      },
    ],
    traps: [
      {
        a: "Bloody diarrhea warrants antibiotics in every immunocompetent patient",
        b: "For NONTYPHOIDAL Salmonella, treatment is supportive — antibiotics are not indicated in immunocompetent individuals, and for BOTH Salmonellas antibiotics PROLONG fecal excretion",
        whyConfused: "Invasive-sounding diarrhea feels like it needs antimicrobial therapy.",
        keyDifference:
          "The antibiotic-effect axis is therapy read as epidemiology: prolongs for S typhi and nontyphoidal Salmonella (a reason to withhold in immunocompetent nontyphoidal disease), shortens for Shigella (the one rod where antibiotics shorten the carrier state). The EHEC column carries no therapy line on these pages — its management is supportive with HUS surveillance, which is what the pediatric nephrology cross-link is built on.",
        clue: "Any therapy-selection question in an enteric stem.",
      },
      {
        a: "EHEC and Shigella dysentery are indistinguishable, so the lab axis is moot",
        b: "Both cause bloody mucoid stools — but EHEC is dysentery from TOXIN ALONE (no invasion; sorbitol-negative, O157:H7) while Shigella INVADES M cells (low acid-stable dose, primarily PMN infiltration)",
        whyConfused: "Both carry Shiga-family toxins and both present with tenesmus and blood.",
        keyDifference:
          "EHEC's presentation column reads 'dysentery (toxin alone causes necrosis and inflammation)' — no mucosal invasion; its lab identity is sorbitol non-fermentation on the plate. Shigella's table row reads 'invasion of M cells is key to pathogenicity' with the LOW acid-stable ID50 (very small inoculum, resistant to gastric acids) — the person-to-person axis (fingers, flies, food, feces). The HUS complication belongs to EHEC's column (and to S dysenteriae, the most toxigenic Shigella).",
        clue: "Any dysentery-organism identification question.",
      },
      {
        a: "Pink colonies on MacConkey mean the non-lactose fermenters",
        b: "Pink colonies on MacConkey = LACTOSE FERMENTERS (Citrobacter, E coli, Enterobacter, Klebsiella, Serratia); the non-lactose fermenters (Salmonella, Shigella) stay colorless",
        whyConfused: "MacConkey is 'the stool plate,' so both stool-cause groups get associated with it.",
        keyDifference:
          "The plate rule: fermentation of lactose → pink colonies on MacConkey; on EMB, lactose fermenters grow purple/black colonies and E coli adds the green sheen. Salmonella and Shigella are gram ⊝ rods, NON-lactose fermenters, oxidase ⊝ — the shared opening line of the comparison table — so on MacConkey they are the colorless colonies, while the pink ones are the CEKS set. This is also the H2S-on-TSI page's mirror: the same non-lactose set that the M12 tree split by oxidase and H2S.",
        clue: "Any plate-reading or MacConkey/EMB question.",
      },
    ],
    pivots: [
      {
        lookAlike: "S typhi vs nontyphoidal Salmonella (the typhoidal split)",
        differentiator: "Hematogenous spread + monocytes + the rash vs animal sources + supportive care",
        correctPath:
          "S TYPHI: humans only, HEMATOGENOUS spread, H2S ⊕, Vi capsule, primarily monocytes, constipation then diarrhea, the salmon-colored truncal macular rash with pulse-temperature dissociation, later GI ulceration/hemorrhage, gallbladder carrier state; ceftriaxone or fluoroquinolone; oral live-attenuated + IM Vi-polysaccharide vaccines. NONTYPHOIDAL: humans and animals (poultry, eggs, pets, turtles), hematogenous spread rare, PMNs in disseminated disease, diarrhea possibly bloody, no vaccine; treatment supportive — antibiotics not indicated in immunocompetent individuals (and prolong excretion for both).",
      },
      {
        lookAlike: "EHEC vs Shigella (the Shiga-toxin pair)",
        differentiator: "Toxin-only dysentery + sorbitol-negative + HUS vs M-cell invasion + low acid-stable dose",
        correctPath:
          "EHEC: O157:H7 from undercooked meat/raw leafy vegetables; does not ferment sorbitol; dysentery from toxin alone; Shiga toxin → the HUS triad (anemia with schistocytes, thrombocytopenia, AKI from microthrombi on damaged endothelium). SHIGELLA: invades M cells of Peyer patches (pathogenicity key); endotoxin + Shiga toxin (enterotoxin); LOW acid-stable ID50 (person-to-person spread); primarily PMN infiltration; tenesmus with bloody mucoid stools (bacillary dysentery); severity order S dysenteriae > S flexneri > S boydii > S sonnei; antibiotics SHORTEN fecal excretion.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old girl is brought to the emergency department with 3 days of crampy abdominal pain and bloody diarrhea. Four days before the illness she attended a family cookout where the hamburgers were visibly pink in the center; she also ate unwashed lettuce from the garden. She has no fever, and no sick contacts. On examination she is pale; blood pressure is 108/64, pulse 116. Laboratory studies: hemoglobin 8.1 g/dL, platelet count 21,000/μL, creatinine 2.4 mg/dL (baseline 0.5), LDH 780 U/L, haptoglobin < 8 mg/dL; the peripheral blood smear shows fragmented red cells. Stool studies are pending; a sorbitol-MacConkey plate from the state laboratory grows colorless colonies at 24 hours where the rest of the plate is pink.",
        question:
          "Which of the following best characterizes the organism responsible for this patient's hematologic and renal findings?",
        options: [
          {
            label: "A",
            text: "A sorbitol-nonfermenting, Shiga-toxin-producing gram ⊝ rod that causes dysentery without mucosal invasion",
            correct: true,
            why: "Correct. This is EHEC (O157:H7): the most common US serotype, transmitted via undercooked meat and raw leafy vegetables; it does not ferment sorbitol (the colorless colonies on the sorbitol-MacConkey plate vs the pink lactose fermenters around it). Its Shiga toxin damages endothelium → microthrombi → the HUS triad (mechanical hemolysis with schistocytes → anemia; platelet consumption → thrombocytopenia; ↓ renal blood flow → AKI). The presentation column reads 'dysentery (toxin alone causes necrosis and inflammation)' — dysentery without invasion.",
          },
          {
            label: "B",
            text: "A low-infectious-dose, acid-stable organism that invades M cells and shortens its fecal excretion when antibiotics are given",
            why: "That is SHIGELLA's column — M-cell invasion as the key to pathogenicity, low acid-stable ID50 (person-to-person spread on fingers, flies, food, feces), primarily PMN infiltration, and the antibiotic-effect row that SHORTENS excretion. The distractor borrows the other Shiga-toxin organism; it does not explain the sorbitol-negative plate or the toxin-only dysentery.",
          },
          {
            label: "C",
            text: "A flagellated, H2S-positive rod with hematogenous spread, a truncal macular rash, and a gallbladder carrier state",
            why: "That is S TYPHI (ty-Vi): hematogenous spread, primarily monocytes, constipation then diarrhea, the salmon-colored truncal macular rash, and the carrier state with gallbladder colonization. The distractor imports the typhoid column — wrong rash, wrong spread, and wrong complication (typhoid does not cause schistocytes or thrombocytopenia).",
          },
          {
            label: "D",
            text: "An oxidase-positive, comma-shaped rod growing at 42°C, a common antecedent of Guillain-Barré syndrome",
            why: "That is CAMPYLOBACTER JEJUNI's card — oxidase ⊕, comma/S shaped with polar flagella, the 42°C growth condition, and the Guillain-Barré/reactive-arthritis antecedents. It causes bloody diarrhea especially in children, but it is not sorbitol-selective and its signature is the post-infectious neuropathy, not microangiopathic hemolysis.",
          },
          {
            label: "E",
            text: "A heat-labile and heat-stable enterotoxin producer that causes watery diarrhea without inflammation or invasion",
            why: "That is ETEC's column — enterotoxins with no inflammation or invasion, the watery traveler's diarrhea. The distractor swaps the toxin class: ETEC's toxins are secretory, not endothelial, and it would not produce dysentery, schistocytes, or renal failure.",
          },
        ],
        reasoning:
          "The vignette stacks EHEC's identifiers: the pink-center hamburger and unwashed lettuce (undercooked meat, raw leafy vegetables), the afebrile bloody diarrhea that becomes pallor with tea-colored urine, the microangiopathic picture (schistocytes, low haptoglobin, thrombocytopenia, rising creatinine — the hemolytic-uremic syndrome triad with each mechanism named: mechanical hemolysis, platelet consumption, ↓ renal blood flow), and the colorless colonies on a sorbitol plate surrounded by pink lactose fermenters. Each distractor imports another organism's column — Shigella's invasion and excretion-shortening, S typhi's rash and carrier state, Campylobacter's Guillain-Barré antecedent, ETEC's watery mechanism — none of which produces a Shiga-toxin HUS with a sorbitol-negative plate.",
      },
    },
  mnemonics: [
    {
      code: "“Read the table down: reservoir, spread, dose, immune cell, stool — the unique row tells you what to do.”",
      meaning:
        "KYP's key for the comparison table: the first four axes name the genus (humans-only vs animal reservoir; hematogenous vs cell-to-cell spread; H2S; flagella), the dose axis predicts the transmission story (Shigella's low acid-stable inoculum = person-to-person; the Salmonellas' high doses name their food/water exposures), the immune-response axis separates monocytes (typhoid) from PMN infiltration (dysentery), the stool axis separates constipation (typhoid) from tenesmus (Shigella), and the unique row carries the therapy: ceftriaxone/fluoroquinolone for typhoid, supportive care for nontyphoidal, excretion-shortening antibiotics for Shigella.",
      memorizes: "The eleven-axis enteric comparison",
      whenToUse: "Any Salmonella/Shigella identification or therapy question.",
      clinical: "The dose axis is the public-health column — low ID50 organisms (Shigella, and EHEC's close cousins) spread person-to-person; high-dose organisms need a food or animal vehicle.",
    },
    {
      code: "“Typhoid travels the blood (monocytes, rose spots, constipation); nontyphoidal keeps the animals and loses the rash; Shigella stays in the gut cell-to-cell.”",
      meaning:
        "KYP's key for the typhoidal split: S typhi goes HEMATOGENOUS (primarily monocytes; the salmon-colored truncal macular rash with pulse-temperature dissociation; later GI ulceration and hemorrhage; the gallbladder carrier state; oral live-attenuated + IM Vi-polysaccharide vaccines; ceftriaxone or fluoroquinolone). Nontyphoidal salmonella keeps the animal reservoir (poultry, eggs, pets, turtles) with PMNs only in disseminated disease, and treatment is supportive in immunocompetent individuals. Shigella never leaves the gut wall (cell-to-cell, no hematogenous spread) — it invades M cells with a low acid-stable dose and presents as bacillary dysentery (tenesmus, bloody mucoid stools) with primarily PMN infiltration.",
      memorizes: "The typhoidal-vs-nontyphoidal-vs-dysentery split",
      whenToUse: "Any fever-and-diarrhea or rash-with-constipation stem.",
      clinical: "Ask three questions: does it spread through the blood, which animal or person carried it, and does the stool show tenesmus?",
    },
    {
      code: "“The E. coli set borrows its neighbors: Invasive borrows Shigella, Toxigenic borrows cholera's watery trick, Pathogenic glues and flattens, and Hemorrhagic borrows Shigella's toxin — then adds the kidney.”",
      meaning:
        "KYP's key for the four-strain set: EIEC invades the mucosa (necrosis and inflammation) and presents like Shigella; ETEC secretes heat-labile + heat-stable enterotoxins with no inflammation or invasion — watery traveler's diarrhea; EPEC makes no toxin, adheres to the apical surface, flattens villi, and prevents absorption — pediatric diarrhea; EHEC (O157:H7, sorbitol-negative) brings Shiga toxin from undercooked meat and raw leafy vegetables, causing dysentery from toxin alone and the hemolytic-uremic syndrome triad (anemia with schistocytes, thrombocytopenia, AKI from microthrombi on damaged endothelium).",
      memorizes: "The diarrheagenic E. coli strains on the invasion-vs-toxin axis",
      whenToUse: "Any pediatric or travel diarrhea stem with a food history.",
      clinical: "The strain name predicts the complication: only the Hemorrhagic strain adds the kidney.",
    },
  ],
  rapidReview: {
    s30: [
      "Salmonella and Shigella: gram ⊝ rods, non-lactose fermenters, oxidase ⊝, invade via M cells of Peyer patches",
      "S typhi: humans only · hematogenous · H2S ⊕ · flagella ⊕ · Vi capsule · high acid-labile ID50 · monocytes · constipation",
      "Nontyphoidal: humans and animals (poultry, eggs, pets, turtles) · PMNs in disseminated disease · supportive care",
      "Shigella: cell-to-cell, no hematogenous · H2S ⊝ · no flagella · Shiga toxin · LOW acid-stable dose · PMNs · tenesmus (bacillary dysentery)",
      "Antibiotics on fecal excretion: PROLONG for both Salmonellas · SHORTEN for Shigella",
    ],
    m3: [
      "Typhoid: salmon-colored truncal macular rash, pulse-temperature dissociation; later GI ulceration/hemorrhage; gallbladder carrier state; ceftriaxone or fluoroquinolone; oral live-attenuated + IM Vi-polysaccharide vaccines",
      "Shigella severity order (less toxin): S dysenteriae > S flexneri > S boydii > S sonnei; M-cell invasion key to pathogenicity",
      "E coli virulence factors: fimbriae (P pili) → cystitis/pyelonephritis · K capsule → pneumonia/neonatal meningitis · LPS → septic shock (indole ⊕)",
      "EIEC invasive (dysentery like Shigella) · ETEC enterotoxins (watery traveler's diarrhea) · EPEC adheres, flattens villi (children)",
      "EHEC: O157:H7 · undercooked meat, raw leafy vegetables · does not ferment sorbitol · Shiga toxin → HUS",
    ],
    m10: [
      "HUS triad mechanisms: microthrombi on damaged endothelium → mechanical hemolysis (schistocytes) + platelet consumption (thrombocytopenia) + ↓ renal blood flow (AKI)",
      "Yersinia enterocolitica: bipolar-stained pleomorphic rod; pet feces, contaminated milk, pork; pseudoappendicitis (mesenteric adenitis/terminal ileitis); reactive arthritis in adults",
      "Klebsiella: lobar pneumonia in heavy alcohol use/impaired defenses; very mucoid colonies (polysaccharide capsules); currant-jelly sputum; healthcare-associated UTIs; MDR",
      "Campylobacter jejuni: comma/S shaped, polar flagella, oxidase ⊕, 42°C; bloody diarrhea in children; puppy/undercooked poultry/unpasteurized milk; antecedent to Guillain-Barré and reactive arthritis",
      "Proteus mirabilis: urease ⊕ swarmer; UTIs; urea → CO2 + ammonia → ↑ pH → struvite stones → staghorn calculi",
    ],
  },
  recall: [
    {
      q: "Walk the eleven axes for all three columns of the Salmonella-vs-Shigella table.",
      a: "RESERVOIRS: humans only / humans and animals / humans only. SPREAD: hematogenous / hematogenous rare / cell to cell, no hematogenous. H2S: yes / yes / no. FLAGELLA: yes / yes / no. VIRULENCE: endotoxin + Vi capsule / endotoxin / endotoxin + Shiga toxin (enterotoxin). ID50: high, acid-labile (inactivated by gastric acids) / high / low, acid-stable (resistant to gastric acids). ANTIBIOTIC EFFECT ON FECAL EXCRETION: prolongs / prolongs / shortens. IMMUNE RESPONSE: primarily monocytes / PMNs in disseminated disease / primarily PMN infiltration. GI MANIFESTATIONS: constipation then diarrhea / diarrhea (possibly bloody) / crampy pain → tenesmus, bloody mucoid stools (bacillary dysentery). VACCINE: oral live-attenuated S typhi + IM Vi capsular polysaccharide / none / none. UNIQUE: typhoid fever (salmon-colored truncal macular rash, pulse-temperature dissociation; later GI ulceration and hemorrhage; gallbladder carrier state; ceftriaxone or fluoroquinolone) / poultry, eggs, pets, turtles; supportive care (antibiotics not indicated in immunocompetent) / severity S dysenteriae > S flexneri > S boydii > S sonnei; M-cell invasion key to pathogenicity.",
    },
    {
      q: "Give the four E. coli strains on the toxin-and-mechanism / presentation axes, and the HUS cascade.",
      a: "EIEC: invades intestinal mucosa, necrosis and inflammation → dysentery similar to Shigella. ETEC: heat-labile + heat-stable enterotoxins, no inflammation or invasion → watery traveler's diarrhea. EPEC: no toxin; adheres to apical surface, flattens villi, prevents absorption → diarrhea usually in children. EHEC: O157:H7 (most common US serotype), undercooked meat/raw leafy vegetables; does not ferment sorbitol; Shiga toxin → hemolytic-uremic syndrome — triad of anemia (microthrombi → mechanical hemolysis with schistocytes), thrombocytopenia (platelet consumption), and acute kidney injury (↓ renal blood flow); dysentery from toxin alone. The genus line: gram ⊝ indole ⊕ rod; fimbriae (P pili) → cystitis/pyelonephritis; K capsule → pneumonia/neonatal meningitis; LPS endotoxin → septic shock.",
    },
    {
      q: "What does each plate show, and which organisms are pink on MacConkey?",
      a: "Lactose fermentation → PINK colonies on MacConkey agar: Citrobacter, E coli, Enterobacter, Klebsiella, Serratia. On EMB agar, lactose fermenters grow purple/black colonies, and E coli grows colonies with a green sheen. Salmonella and Shigella are non-lactose fermenters (colorless on MacConkey); EHEC is the sorbitol-nonfermenting E coli (colorless on sorbitol-MacConkey while other E coli ferment).",
    },
    {
      q: "Name the four roster organisms with one signature and one disease each.",
      a: "Yersinia enterocolitica — gram ⊝ pleomorphic rod/coccobacillus with bipolar staining from pet feces (cats, dogs), contaminated milk, or pork → acute bloody diarrhea, pseudoappendicitis (mesenteric adenitis and/or terminal ileitis), reactive arthritis in adults. Klebsiella — very mucoid colonies from abundant polysaccharide capsules → lobar pneumonia with dark red currant-jelly sputum in heavy alcohol use; healthcare-associated UTIs; MDR. Campylobacter jejuni — comma/S shaped with polar flagella, oxidase ⊕, grows at 42°C → major cause of bloody diarrhea in children; antecedent to Guillain-Barré syndrome and reactive arthritis. Proteus mirabilis — urease ⊕ facultative anaerobe with swarming motility → UTIs and struvite staghorn calculi (urea → CO2 + ammonia → net ↑ pH).",
    },
    {
      q: "Which enteric organisms shorten or prolong fecal excretion with antibiotics, and who gets a vaccine?",
      a: "PROLONG: both S typhi and nontyphoidal Salmonella (a reason antibiotics are withheld in immunocompetent nontyphoidal disease — treatment is supportive). SHORTEN: Shigella. VACCINE: only S typhi — the oral vaccine contains live attenuated S typhi; the IM vaccine contains Vi capsular polysaccharide. Shigella and nontyphoidal salmonella have no vaccine.",
    },
  ],
  related: [
    {
      title: "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
      topicId: "gram-negative-bacilli",
      note: "M12's tree pre-loaded this chapter: its bacilli lane splits non-lactose fermenters by H2S on TSI (Salmonella/Proteus ⊕ vs Shigella/Yersinia ⊝) — the same non-lactose set this note resolves at the species and strain level.",
    },
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's toxin axis runs through the block: Shiga toxin as the AB-toxin family's endothelial member (EHEC's HUS and Shigella's virulence cell), endotoxin as the LPS column shared by every rod in the table, and ETEC's heat-labile/heat-stable pair as the enterotoxin class.",
    },
    {
      title: "Anaerobes, Aerobes & Oxygen Tolerance",
      topicId: "oxygen-requirements",
      note: "M4's trait directory returns at the species level: Proteus mirabilis as the urease/struvite entry (the staghorn-calculus organism) and the facultative-anaerobe flag that M4 pinned, now with its disease map.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column of the table: ceftriaxone or fluoroquinolone for typhoid; supportive care for nontyphoidal salmonella in immunocompetent individuals (antibiotics prolong fecal excretion); the excretion-shortening exception for Shigella — the axis that decides when antibiotics are a public-health tool rather than a therapy.",
    },
    {
      subject: "Immunology (Vaccines)",
      connection: "The vaccine column is the live-vs-subunit distinction in action: the ORAL live-attenuated S typhi vaccine vs the IM Vi CAPSULAR POLYSACCHARIDE vaccine — the same conjugate/polysaccharide logic M12's Hib row used, applied to the one enteric organism with a vaccine.",
    },
    {
      subject: "Nephrology (Hemolytic-Uremic Syndrome)",
      connection: "EHEC's Shiga toxin is nephrology's microbiology anchor: microthrombi on damaged endothelium → mechanical hemolysis (schistocytes), platelet consumption (thrombocytopenia), and ↓ renal blood flow (acute kidney injury) — the triad every renal-failure-after-diarrhea stem is built on.",
    },
    {
      subject: "Rheumatology (Reactive Arthritis)",
      connection: "The post-infectious arthritis axis: Campylobacter jejuni and Yersinia enterocolitica are both common antecedents of reactive arthritis in adults (with Campylobacter also the common antecedent of Guillain-Barré syndrome) — the roster's immune cross-link.",
    },
  ],
};
