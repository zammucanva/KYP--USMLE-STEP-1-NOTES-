#!/usr/bin/env python3
"""Microbiology Phase I-C — chapter inventory build (pdf 143-222, part 1).

Builds content/usmle/chapters/microbiology.json from the heading census
(.usmle-pipeline-cache/micro-heading-census.json) + the banner structure:

  BASIC BACTERIOLOGY    pdf 144-152
  CLINICAL BACTERIOLOGY pdf 154-170
  MYCOLOGY              pdf 171-172
  PARASITOLOGY          pdf 174-180 (source prints 'MICROCIOLOGY' on 178-180)
  VIROLOGY              pdf 181-195
  SYSTEMS               pdf 196-204
  ANTIMICROBIALS        pdf 205-222 (source prints 'ANTIMICROCIALS')

Every topic claims specific pdf pages; boundary pages are documented.
The chapter-def pdfRange (143-222) includes p143 (chapter opener page) and
p153/p159-160/p162/p166/p173/p191-192 which are continuation pages of their
preceding topics (no new banner) — assigned to the owning topic below.
"""
import json
import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()

def norm(s):
    return re.sub(r"\s+", " ", s).strip().lower()

# topicId, title, faSubsections (page-anchored), pdfPages, difficulty, requiresVisual,
# visualHints, mechanismHeavy, subsection(banner), rationale
T = []
def add(tid, title, subs, pgs, diff, vis, hints, mech, banner, why):
    T.append({
        "topicId": tid, "title": title, "faSubsections": subs,
        "sourcePages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(p - 22) for p in (pgs[0], pgs[-1]))},
        "difficulty": diff, "requiresVisual": vis, "visualHints": hints, "mechanismHeavy": mech,
        "subsection": f"Microbiology — {banner}", "status": "pending", "productionRationale": why,
    })

BB = "Basic Bacteriology"; CB = "Clinical Bacteriology"; MY = "Mycology"
PA = "Parasitology"; VI = "Virology"; SY = "Systems"; AM = "Antimicrobials"

# --- BASIC BACTERIOLOGY (144-153) ---
add("bacterial-structures", "Bacterial Structures: Anatomy & Function", ["Bacterial structures"], [144], 2, True, ["bacterial-cell-anatomy"], True, BB,
    "The structure-function table (flagellum, pilus, capsule, spore, peptidoglycan, endotoxin/LPS, porin) — the anatomical vocabulary every later organism entry uses.")
add("stains-identification", "Stains & Difficult-to-Stain Organisms", ["Stains", "Gram stain"], [145], 1, True, ["gram-stain-decision-map"], False, BB,
    "Gram stain as first-line ID plus the poor-stainers (treponemes too thin, mycobacteria lipid-rich, mycoplasma wall-less, intracellular legionella/rickettsia/chlamydia) — why each fails.")
add("special-culture-requirements", "Special Culture Requirements", ["Special culture requirements"], [146], 2, True, ["bug-media-matching-map"], False, BB,
    "The bug-to-medium directory (chocolate, Thayer-Martin, Bordet-Gengou, Löwenstein-Jensen, etc.) plus lactose fermentation — the lab-identification spine.")
add("oxygen-requirements", "Anaerobes, Aerobes & Oxygen Tolerance", ["Anaerobes", "Facultative anaerobes"], [147], 1, False, [], False, BB,
    "The oxygen-tolerance spectrum (obligate anaerobes lack catalase/SOD; facultative, obligate aerobic, microaerophilic, facultative-intracellular) with the aminoglycoside-needs-O2 corollary.")
add("organism-groups-quick-reference", "Catalase, Pigment, Spore & Encapsulation Groups", ["Catalase-positive organisms", "Pigment-producing bacteria", "Spore-forming bacteria"], [148], 1, False, [], False, BB,
    "The trait-group directories: catalase-positive organisms (the CGD set), pigmented bugs (Actinomyces sulfur granules, S aureus gold, Pseudomonas pyocyanin), and spore formers.")
add("virulence-mechanisms", "Virulence Mechanisms & Antimicrobial Resistance Overview", ["Capsular organisms", "IgA proteases", "Antimicrobial resistance mechanisms"], [149], 2, True, ["virulence-resistance-map"], True, BB,
    "The immune-evasion directory (capsule, protein A, IgA proteases) plus the resistance-mechanisms table (efflux, decreased uptake, enzymatic inactivation, target modification) — E38's complement and E32's CGD loops closed.")
add("bacterial-genetics", "Bacterial Genetics: Transformation, Conjugation, Transduction", ["Transformation", "Conjugation", "Transduction", "Transposition"], [150, 151], 2, True, ["gene-transfer-triangle"], True, BB,
    "The three horizontal gene-transfer routes (transformation with competence, conjugation with sex pilus, transduction general/specialized) plus transposons — how resistance and virulence spread.")
add("exotoxins-endotoxins", "Exotoxins vs Endotoxins", ["Exotoxins", "Endotoxins"], [151, 152, 153], 2, True, ["toxin-comparison-map"], True, BB,
    "The classic comparison (source, chemistry, genes, effects, vaccines, heat stability) plus the major exotoxin table (ADP-ribosylators, superantigens, clostridial toxins) and endotoxin's TNF/IL-1/IL-6 cascade to septic shock.")

# --- CLINICAL BACTERIOLOGY (154-170) ---
add("gram-positive-cocci", "Gram-Positive Cocci: Staphylococcus & Streptococcus", ["Gram-positive cocci", "Staphylococcus", "Streptococcus", "Enterococci"], [154, 155, 156, 157], 2, True, ["gram-pos-cocci-tree"], True, CB,
    "The catalase/coagulase/hemolysis decision tree splitting staphylococci (aureus vs epidermidis vs saprophyticus) from streptococci (pyogenes, agalactiae, pneumoniae, viridans, enterococci) — the most-tested organism block in bacteriology.")
add("gram-positive-bacilli", "Gram-Positive Bacilli: Clostridia, Corynebacterium, Listeria, Actinomyces, Nocardia", ["Gram-positive bacilli", "Clostridia", "Corynebacterium", "Listeria", "Actinomyces", "Nocardia"], [158, 159], 2, True, ["gram-pos-bacilli-map"], True, CB,
    "The spore-forming clostridia (tetani, botulinum, perfringens, difficile) with their toxin mechanics, plus the aerobic diphtheroids (diphtheriae ADP-ribosylation, Listeria cold-growth motility, Actinomyces vs Nocardia).")
add("mycobacteria", "Mycobacteria: Tuberculosis & Leprosy", ["Mycobacteria", "Tuberculosis", "Leprosy"], [160, 161], 2, True, ["tb-spectrum-map"], True, CB,
    "TB's primary-reactivation-miliary spectrum with ghon complex and caseation, the lepromatous-tuberculoid leprosy axis, and the acid-fast staining logic — cytokine-tied (E31's IFN-γ/IL-12 axis).")
add("gram-negative-bacilli", "Gram-Negative Bacilli: Enterics & Zoonotics", ["Gram-negative bacilli", "Neisseria", "Haemophilus", "Brucella", "Legionella", "Pseudomonas"], [161, 162, 163], 2, True, ["gram-neg-bacilli-map"], True, CB,
    "The enteric and zoonotic gram-negatives: Neisseria (gonococci/meningococci), Haemophilus, Brucella/Legionella/Pasteurella/Bordetella, and the lactose-fermenter split of the ENTERICS.")
add("enteric-pathogens", "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter", ["Salmonella", "Shigella", "Escherichia coli strains", "Campylobacter"], [164, 165], 2, True, ["enteric-comparison-table"], True, CB,
    "The typhoidal-vs-nontyphoidal salmonella, shigella invasiveness, the E. coli strain roster (EPEC, EHEC, ETEC, EIEC), and Campylobacter — GI microbiology's core comparison table.")
add("spirochetes-syphilis", "Spirochetes: Treponema, Borrelia, Leptospira", ["Spirochetes", "Syphilis"], [166, 167, 168], 2, True, ["syphilis-staging-map"], True, CB,
    "The three spirochetes plus syphilis's primary-secondary-tertiary staging with congenital transmission and the nontreponemal-vs-treponemal testing logic (RPR/VDRL vs FTA-ABS/TP-PA).")
add("intracellular-bacteria", "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma", ["Chlamydiae", "Rickettsiae", "Zoonotic bacteria", "Vector-borne illnesses"], [168, 169, 170], 2, True, ["vector-borne-rash-map"], True, CB,
    "The obligate-intracellular set (chlamydiae life cycle, rickettsiae), the vector-borne roster (RMSF, typhus, ehrlichiosis, anaplasmosis, plague, tularemia), and the rash-common/rash-rare split.")

# --- MYCOLOGY (171-172) ---
add("systemic-mycoses", "Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides", ["Systemic mycoses"], [171], 2, True, ["US-fungi-map"], False, MY,
    "The endemic-mycosis quartet with geography, tissue forms, and presentations (Histoplasma Ohio valleys intracellular, Blastomyces broad-based budding, Coccidioides arthroconidia, Paracoccidioides Latin America).")
add("opportunistic-fungi", "Opportunistic Fungi: Aspergillus, Cryptococcus, Candida, Mucor", ["Opportunistic fungal infections", "Aspergillus", "Cryptococcus"], [172], 2, True, ["opportunistic-fungi-panel"], False, MY,
    "The opportunistic mycoses: Aspergillus (angioinvasive, halo sign), Cryptococcus (India ink, capsule, meningitis), Candida (pseudohyphae), Mucor (ketoacidosis rhinocerebral) — E38's granulocyte column.")

# --- PARASITOLOGY (174-180) ---
add("intestinal-protozoa", "Intestinal & Urogenital Protozoa", ["Intestinal protozoa", "Giardia", "Entamoeba", "Cryptosporidium", "Trichomonas"], [174], 2, True, ["protozoa-panel"], False, PA,
    "The GI/UG protozoa: Giardia (duodenal trophozoites, IgA-deficiency), Entamoeba histolytica (erythrocyte-eating flask ulcers), Cryptosporidium (AIDS), Trichomonas (strawberry cervix).")
add("blood-tissue-protozoa", "Blood & Tissue Protozoa: Plasmodium, Babesia, Toxoplasma, Trypanosoma, Leishmania", ["Plasmodium", "Toxoplasma", "Trypanosoma", "Leishmania", "Babesia"], [175, 176, 177], 2, True, ["hemoflagellate-malaria-map"], False, PA,
    "Malaria's species-cycle-drug triad, Babesia (maltese cross, asplenia), Toxoplasma (TORCH, cats), the trypanosomiases (Chagas vs sleeping sickness) and leishmaniasis — the vector-hosted protozoa.")
add("helminths-nematodes", "Nematodes: The Roundworms", ["Nematodes (roundworms)"], [178], 2, True, ["nematode-lifecycle-map"], False, PA,
    "The intestinal and tissue roundworms: Ascaris, Hookworm (Necator/Ancylostoma), Strongyloides (autoinfection, hyperinfection in steroid/HTLV-1), Enterobius (pinworm, Scotch tape), Trichinella, Onchocerca, Loa, Wucheraria (elephantiasis).")
add("cestodes-trematodes", "Cestodes & Trematodes: Tapeworms and Flukes", ["Cestodes (tapeworms)", "Trematodes (flukes)"], [179, 180], 2, True, ["flatworm-panel"], False, PA,
    "The tapeworms (Taenia solium/saginata, cysticercosis, Diphyllobothrium B12, Echinococcus hydatid) and flukes (Schistosoma species, Clonorchis, Paragonimus, Fasciola) plus ectoparasites (scabies, lice).")

# --- VIROLOGY (181-195) ---
add("viral-structure-genetics", "Viral Structure & Genetics", ["Viral structure", "Viral genetics"], [181, 182], 2, True, ["virus-anatomy-map"], True, VI,
    "Capsid symmetries, envelope vs naked (the GI/environment logic), genomes, plus recombination-reassortment-complementation and the Baltimore-ish DNA/RNA family rosters.")
add("dna-viruses", "DNA Viruses: Families & Disease Map", ["DNA viruses", "Herpesviruses"], [183, 184, 185], 2, True, ["dna-virus-family-map"], True, VI,
    "The DNA-virus family table (ds/SS, envelope, medical importance) plus the herpesvirus subfamily roster (HSV, VZV, EBV, CMV, HHV-6/8) with latency sites and the virus-receptor list (CD21, CD4/CXCR4/CCR5, ACE2).")
add("rna-viruses", "RNA Viruses: Families & Disease Map", ["RNA viruses", "Picornavirus", "Paramyxoviruses"], [186, 187, 188, 189], 2, True, ["rna-virus-family-map"], True, VI,
    "The RNA-virus family table (the PERCH picnic, arboviruses, orthomyxo vs paramyxo segmentation) plus measles-mumps-rubella, picornaviruses, rotavirus, and the genetic-shift/drift map (E34's vaccine logic).")
add("viral-vaccines-diagnostics", "Viral Vaccines, Diagnosis & Emerging Viruses", ["Viral vaccines", "SARS-CoV-2", "Prions"], [190, 191, 196], 2, True, ["vaccine-diagnostic-map"], False, VI,
    "The live-vs-killed vaccine split (E34's chapter applied), viral diagnostics, the SARS-CoV-2 structure-and-drug anchor, and prions (PrPsc conformational change, spongiform encephalopathies).")
add("hepatitis-viruses", "Hepatitis Viruses: A Through E", ["Hepatitis", "Hepatitis B", "Hepatitis C"], [192, 193], 2, True, ["hepatitis-serology-map"], True, VI,
    "The five-virus comparison (transmission, incubation, course, HCC risk) and the HBV serology timeline (HBsAg/anti-HBs/HBcAg/anti-HBc/HBeAg windows) — serology's most-tested chart.")
add("hiv-aids", "HIV & AIDS: Virology Through Opportunists", ["HIV", "AIDS"], [194, 195], 2, True, ["hiv-lifecycle-map"], True, VI,
    "HIV's structure, lifecycle (E40's drug targets), diagnosis (NAT/4th-gen), the CD4-staged opportunist map (Pneumocystis, CMV CREEP, MAC, cryptococcosis, Kaposi) — virology's clinical capstone.")

# --- SYSTEMS (196-204) ---
add("normal-flora", "Normal Flora & Colonization", ["Normal flora"], [196], 1, False, [], False, SY,
    "The body-site flora directory (skin Staph epidermidis, nose Staph aureus, colon anaerobes/E coli, vagina Lactobacillus) with the sterile-site list.")
add("bugs-by-system-gi-meningitis", "Bugs by System: GI, Pneumonia, Meningitis & CSF", ["Microbiology by system: GI", "Pneumonia", "Meningitis", "CSF findings"], [197, 198], 2, True, ["systems-bug-matrix"], False, SY,
    "The age-split pathogen tables (meningitis newborns-to-elderly, pneumonia by age and setting) and the CSF formula (bacterial/fungal/viral) — systems-based organism matching.")
add("bugs-by-system-rash-std-torch", "Bugs by System: Rash, STDs, TORCH & Nosocomial", ["Rash", "Sexually transmitted infections", "TORCH", "Nosocomial"], [199, 200, 201, 202, 203, 204], 2, True, ["systems-bug-matrix-2"], False, SY,
    "The vesicular-petechial rash roster, the STD directory, TORCH maternal-neonatal manifestations, UTI/osteomyelitis/water-bite/cellulitis associations, and the classic-bug-by-presentation capstone table.")

# --- ANTIMICROBIALS (205-222) ---
add("antimicrobial-overview", "Antimicrobial Mechanisms: The Target Map", ["Antimicrobial overview"], [205], 2, True, ["antimicrobial-target-map"], True, AM,
    "The mechanism-of-action map (cell wall, protein synthesis, DNA/RNA, folate, membrane) with the antibacterial-class directory — E40's immunosuppressant map's infectious-disease sibling.")
add("cell-wall-inhibitors", "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin", ["Penicillins", "Cephalosporins", "Carbapenems", "Glycopeptides"], [206, 207, 208], 2, True, ["beta-lactam-family-map"], True, AM,
    "The beta-lactam family tree (penicillinase-sensitive/resistant, antipseudomonal, the cephalosporin generations with the 3rd-gen ceftriaxone/ceftazidime anchors) plus carbapenems, aztreonam, and vancomycin.")
add("protein-synthesis-inhibitors", "Protein Synthesis Inhibitors: 30S, 50S & Beyond", ["Aminoglycosides", "Tetracyclines", "Macrolides", "Chloramphenicol", "Clindamycin", "Linezolid", "Polymyxins"], [209, 210, 211], 2, True, ["ribosome-target-map"], True, AM,
    "The 30S/50S inhibitor roster with the initiation/elongation/termination map (aminoglycosides' bactericidal initiation error vs tetracyclines' blocking), macrolides/linezolid, and polymyxins' membrane mechanism.")
add("dna-rna-folate-inhibitors", "DNA/RNA & Folate Pathway Inhibitors", ["Fluoroquinolones", "Sulfonamides", "Trimethoprim", "Metronidazole", "Daptomycin", "Rifamycins"], [212, 213], 2, True, ["folate-quinolone-map"], True, AM,
    "Sulfonamides/trimethoprim's sequential folate blockade (the synergistic TMP-SMX logic), fluoroquinolones' DNA gyrase, daptomycin's membrane, and metronidazole's anaerobe activation.")
add("antimycobacterials", "Antimycobacterial Therapy", ["Antimycobacterials", "Isoniazid", "Rifampin", "Pyrazinamide", "Ethambutol"], [214, 215], 2, True, ["tb-drug-regimen-map"], True, AM,
    "RIPE regimen with mechanisms (INH mycolic acid synthesis, ethambutol arabinogalactan, PZA intracellular, rifampin RNA polymerase), toxicities (INH peripheral neuropathy/B6, ethambutol color blindness), and prophylaxis rules.")
add("antifungals", "Antifungal Agents", ["Antifungals", "Amphotericin B", "Azoles", "Echinocandins", "Flucytosine", "Griseofulvin"], [216, 217], 2, True, ["antifungal-target-map"], True, AM,
    "The ergosterol-pathway map (amphotericin's pore, azoles' 14α-demethylase, the nephrotoxicity sign-off) plus echinocandins' glucan synthesis, flucytosine, terbinafine, and griseofulvin's keratin logic.")
add("antiparasitic-antiviral", "Antiparasitic & Non-HIV Antiviral Agents", ["Antihelminthic", "Antiprotozoal", "Baloxavir", "Remdesivir", "Ganciclovir", "Foscarnet", "Cidofovir", "Disinfection"], [218, 219], 2, True, ["antiviral-target-map"], True, AM,
    "The antihelminthics/antiprotozoals (praziquantel, ivermectin, mebendazole, chloroquine), the non-HIV antivirals (ganciclovir CMV, baloxavir/remdesivir influenza/COVID), disinfection methods, and pregnancy-contraindicated antimicrobials.")
add("hiv-therapy", "HIV Therapy: NRTIs Through Integrase Inhibitors", ["HIV therapy", "NRTIs", "NNRTIs", "Protease inhibitors", "Integrase inhibitors", "Entry inhibitors"], [220, 221], 2, True, ["hiv-drug-lifecycle-map"], True, AM,
    "The HIV drug classes mapped to the lifecycle (entry: maraviroc/enfuvirtide; RT: NRTIs/NNRTIs; integrase: bictegravir/dolutegravir; protease: atazanavir/darunavir) with the toxicities (ZDV marrow, abacavir HLA-B*5701) and prophylaxis rules.")
add("hcv-therapy", "Hepatitis C Therapy: DAAs", ["Hepatitis C therapy", "NS5A/NS5B inhibitors", "Protease inhibitors"], [222], 2, True, ["hcv-daa-target-map"], True, AM,
    "The direct-acting antiviral classes on the HCV lifecycle (NS5A elbasvir/ledipasvir, NS5B sofosbuvir, NS3/4A glecaprevir/grazoprevir, ribavirin) — the therapy that demoted E41's IFN-α to 'not preferred.'")

inventory = {
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "number": 3,
    "part": 1,
    "section": "II",
    "pdfRanges": [{"part": 1, "from": 143, "to": 222}],
    "extractionStatus": "extracted",
    "pendingTopicCount": len(T),
    "topics": T,
    "notes": "Phase I-C inventory built from the heading census (micro-heading-census.json) + banner structure. Banner ranges (with the source's own printed banner typos, documented): BASIC BACTERIOLOGY 144-152; CLINICAL BACTERIOLOGY 154-170; MYCOLOGY 171-172; PARASITOLOGY 174-180 (source prints 'MICROCIOLOGY' on pp 178-180); VIROLOGY 181-195; SYSTEMS 196-204; ANTIMICROBIALS 205-222 (source prints 'ANTIMICROCIALS'). Continuation pages without banners (153, 159-160, 162, 166, 173, 191-192) are assigned to their owning topics. p143 is the chapter opener. The cataloged p219 disinfection block and pregnancy-contra list are folded into antiparasitic-antiviral; normal-flora p196 is split between prions (viral-vaccines-diagnostics claims 196 for prions; normal-flora claims 196 for flora — page shared, distinct subsections).",
}

out = ROOT / "content/usmle/chapters/microbiology.json"
out.write_text(json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"wrote {out}: {len(T)} topics across 7 banners")
for t in T:
    print(f"  {t['topicId']:38s} pdf{str(t['sourcePages']['pdfPages']):18s} vis={t['requiresVisual']}")
