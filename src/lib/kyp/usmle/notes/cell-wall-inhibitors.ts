import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 32). Source: pdf 206-208 / book
// 184-186 (Antimicrobial therapy — the drug directory continued: the three
// penicillin tiers [aminopenicillins, penicillinase-resistant, piperacillin],
// the cephalosporin card with its five generations, the β-lactamase-inhibitor
// card, the carbapenems/aztreonam/vancomycin cards). Census: p206 and p207 are
// PURE TEXT (0 rasters — directory cards only); p208 carries exactly ONE
// raster (188×188 cmyk jpeg, 150ppi ≈ 1.25 in²) — the CLINICAL PHOTOGRAPH of
// the vancomycin infusion reaction (diffuse red flushing of the torso),
// marked with the boxed "A" (the standalone line-78 "A" of the text layer);
// COPYRIGHTED → described-in-text only, never reproduced. The chapter banner
// typo 'MICROCIOLOGY—ANTIMICROCIALS' prints on all three pages. The source's
// own margin-note typo 'pseudomonaz' (book 185, the ceftazidime line) is
// carried verbatim in the note-block tables and documented; all KYP-original
// content prints 'Pseudomonas'. Hyphen-drops in the raw layer ('crossreactivity',
// 'penicillinbinding' ×2) are text-layer quirks, documented in the manifest.

export const cellWallInhibitors: KypUsMLENote = {
  id: "cell-wall-inhibitors",
  title: "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
  subtitle:
    "The antimicrobial drug directory, books 184-186 — the second page-set of the β-lactam cross-linking directory opened in M31. THE PENICILLIN TIERS: penicillinase-sensitive (the aminopenicillins amoxicillin/ampicillin — 'same as penicillin, wider spectrum, penicillinase sensitive; combine with clavulanic acid'), penicillinase-resistant (dicloxacillin/nafcillin/oxacillin — 'same as penicillin, narrow spectrum; penicillinase resistant because bulky R group blocks access of β-lactamase to β-lactam ring'), and antipseudomonal (piperacillin — 'same as penicillin, extended spectrum; use with β-lactamase inhibitors'). THE CEPHALOSPORIN GENERATIONS: 1st cefazolin/cephalexin (gram ⊕ cocci, Proteus mirabilis, E coli, Klebsiella pneumoniae; cefazolin prior to surgery against S aureus wound infections); 2nd cefaclor/cefoxitin/cefuroxime/cefotetan (adds H influenzae, Enterobacter aerogenes, Neisseria spp., Serratia marcescens); 3rd ceftriaxone/cefpodoxime/ceftazidime/cefixime (serious gram ⊝ infections resistant to other β-lactams; the BBB-crossing generation); 4th cefepime (gram ⊝ with ↑ activity against Pseudomonas and gram ⊕); 5th ceftaroline (broad gram ⊕ and gram ⊝; covers MRSA and Enterococcus faecalis — does not cover Pseudomonas). The 1st-4th fixed exclusion: Listeria, atypicals (Chlamydia, Mycoplasma), MRSA, enterococci. THE β-LACTAMASE INHIBITORS: clavulanic acid, avibactam, sulbactam, tazobactam. THE CARBAPENEMS: imipenem always with cilastatin (renal dehydropeptidase I inhibitor); meropenem ↓ seizure risk, stable to dehydropeptidase I; ertapenem NOT active against Pseudomonas. THE MONOBACTAM: aztreonam (PBP3, gram ⊝ rods only, no cross-allergenicity with penicillins). THE GLYCOPEPTIDE: vancomycin (binds the D-Ala-D-Ala portion of cell-wall precursors; gram ⊕ only; oral route for C difficile; the infusion reaction; resistance = D-Ala-D-Lac).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The β-lactam directory in full — the tier logic of the penicillins (enzyme exposure decides the tier), the five-generation cephalosporin ladder (gram ⊕ → gram ⊝ with one fixed exclusion until the 5th), the inhibitor pairings that rescue the sensitive tiers, the carbapenem trio's three clinical personalities, the monobactam's allergenicity escape, and the glycopeptide's separate door on the same wall.",
  difficulty: 2,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 184–186 (Antimicrobial therapy — the drug directory: the penicillin tiers, the cephalosporin card, the β-lactamase-inhibitor card, carbapenems, aztreonam, vancomycin)",
  tags: [
    "cell wall inhibitors",
    "β-lactams",
    "penicillins",
    "aminopenicillins",
    "amoxicillin",
    "ampicillin",
    "penicillinase-sensitive",
    "penicillinase-resistant",
    "dicloxacillin",
    "nafcillin",
    "oxacillin",
    "bulky R group",
    "piperacillin",
    "antipseudomonal",
    "cephalosporins",
    "cefazolin",
    "cephalexin",
    "cefaclor",
    "cefoxitin",
    "cefuroxime",
    "cefotetan",
    "ceftriaxone",
    "cefpodoxime",
    "ceftazidime",
    "cefixime",
    "cefepime",
    "ceftaroline",
    "five generations",
    "blood-brain barrier",
    "β-lactamase inhibitors",
    "clavulanic acid",
    "avibactam",
    "sulbactam",
    "tazobactam",
    "carbapenems",
    "imipenem",
    "cilastatin",
    "meropenem",
    "ertapenem",
    "carbapenemases",
    "aztreonam",
    "monobactam",
    "PBP3",
    "vancomycin",
    "glycopeptides",
    "D-Ala-D-Ala",
    "D-Ala-D-Lac",
    "MRSA",
    "vancomycin infusion reaction",
    "DRESS syndrome",
    "pseudomembranous colitis",
    "disulfiram-like reaction",
    "vitamin K deficiency",
    "cross-reactivity",
  ],
  core: {
    what: "THE DIRECTORY (books 184-186). Eight cards continue the antimicrobial drug directory opened on book 183. THREE PENICILLIN TIERS, routed by one variable — β-lactamase exposure: (1) the AMINOPENICILLINS (amoxicillin, ampicillin) — same as penicillin but wider spectrum, still penicillinase sensitive, so they pair with clavulanic acid; their extended spectrum is the H influenzae / H pylori / E coli / Enterococci / Listeria monocytogenes / Proteus mirabilis / Salmonella / Shigella set. (2) the PENICILLINASE-RESISTANT trio (dicloxacillin, nafcillin, oxacillin) — same as penicillin, narrow spectrum, enzyme-resistant because the bulky R group physically blocks β-lactamase from reaching the ring; clinical use is S aureus (except MRSA). (3) PIPERACILLIN, the antipseudomonal penicillin — extended spectrum (Pseudomonas spp., gram ⊝ rods, anaerobes), penicillinase sensitive, so it is given with β-lactamase inhibitors. THE CEPHALOSPORIN CARD: one mechanism line ('β-lactam drugs that inhibit cell wall synthesis but are less susceptible to penicillinases; bactericidal') and five generations of clinical use — 1st (cefazolin, cephalexin): gram ⊕ cocci + Proteus mirabilis, E coli, Klebsiella pneumoniae, with cefazolin used prior to surgery to prevent S aureus wound infections; 2nd (cefaclor, cefoxitin, cefuroxime, cefotetan): adds H influenzae, Enterobacter aerogenes, Neisseria spp., Serratia marcescens; 3rd (ceftriaxone, cefpodoxime, ceftazidime, cefixime): serious gram ⊝ infections resistant to other β-lactams — the generation that crosses the blood-brain barrier; 4th (cefepime): gram ⊝ organisms with ↑ activity against Pseudomonas and gram ⊕; 5th (ceftaroline): broad gram ⊕ and gram ⊝ — the only generation that covers MRSA and Enterococcus faecalis, while still not covering Pseudomonas. The fixed exclusion across 1st-4th: Listeria, the atypicals (Chlamydia, Mycoplasma), MRSA, and enterococci. Adverse effects: hypersensitivity, autoimmune hemolytic anemia, disulfiram-like reaction, vitamin K deficiency; low cross-reactivity even in penicillin-allergic patients; ↑ nephrotoxicity of aminoglycosides. Resistance: cephalosporinases (a type of β-lactamase) or PBP structural change. THE β-LACTAMASE-INHIBITOR CARD: clavulanic acid, avibactam, sulbactam, tazobactam — added to penicillins to protect them from the enzyme (amoxicillin-clavulanate, ceftazidime-avibactam, ampicillin-sulbactam, piperacillin-tazobactam). THE CARBAPENEM CARD: imipenem (broad-spectrum, β-lactamase-resistant; binds PBPs → cell-wall synthesis inhibition → cell death) always with cilastatin, the renal dehydropeptidase I inhibitor, because the tubule enzyme otherwise inactivates the drug; meropenem has ↓ seizure risk and is stable to dehydropeptidase I; ertapenem is not active against Pseudomonas; use is reserved for life-threatening infections or after other drugs failed. THE MONOBACTAM CARD: aztreonam — less susceptible to β-lactamases; prevents peptidoglycan cross-linking by binding PBP3; synergistic with aminoglycosides; no cross-allergenicity with penicillins; gram ⊝ rods only; for penicillin-allergic patients and those with renal insufficiency who cannot tolerate aminoglycosides; usually nontoxic. THE GLYCOPEPTIDE CARD: vancomycin — inhibits cell wall peptidoglycan formation by binding the D-Ala-D-Ala portion of cell wall precursors; bactericidal against most bacteria (bacteriostatic against C difficile); not susceptible to β-lactamases; gram ⊕ bugs only — serious multidrug-resistant organisms including MRSA, S epidermidis, sensitive Enterococcus species, and C difficile (oral route, not absorbed); adverse effects are nephrotoxicity, ototoxicity, thrombophlebitis, the diffuse-flushing infusion reaction (largely preventable by antihistamines and slower infusion), and DRESS; resistance (Enterococcus) modifies the terminal D-Ala-D-Ala to D-Ala-D-Lac.",
    why: "This page-set is where door ⑨ of the M31 map becomes a prescribing decision. The directory's logic is a three-question ladder that this note teaches as its spine: FIRST, what does the organism need (which tier's spectrum reaches it)? SECOND, what is the enzyme exposure at the site (does the drug need an inhibitor escort, a bulky R group, or neither)? THIRD, which door does the drug actually use (⑨ the PBP weld — all β-lactams; or ⑧ the precursor grab — vancomycin)? The penicillin tiers answer the second question with one physical idea — the bulky R group of nafcillin/oxacillin/dicloxacillin denies the enzyme physical access, which is a steric argument, not a biochemical one, and it is why the anti-staph penicillins keep working amid staphylococcal β-lactamase while MRSA escapes them by a different route entirely (the altered PBP target that no β-lactam can bind). The cephalosporin ladder answers the first question with a generational widening you can recite as a rule: each generation steps further down the gram ⊝ ladder while keeping gram ⊕, until the 5th generation breaks the one fixed exclusion (MRSA, E faecalis) — the exclusion list itself (Listeria, atypicals, MRSA, enterococci for 1st-4th) is the highest-yield single line on the page and the most tested. The inhibitor card answers the second question for the sensitive tiers — the four bodyguards (clavulanate, avibactam, sulbactam, tazobactam) exist so the aminopenicillins and piperacillin can be deployed inside enzyme-rich territory. And the carbapenem/monobactam/vancomycin cards complete the map's wall zone at both doors: ⑨ for the β-lactams (with aztreonam as the allergenicity escape at the same door) and ⑧ for vancomycin — whose separate door is exactly why its resistance mechanism (D-Ala-D-Lac) shares nothing with β-lactamase, and why VRE is not saved by any cephalosporinase escape.",
    keyIdea:
      "Route the wall drugs by TIER, LADDER, ESCORT, and DOOR. TIER (penicillins, by β-lactamase exposure): the aminopenicillins amoxicillin and ampicillin — wider spectrum (H influenzae, H pylori, E coli, enterococci, Listeria monocytogenes, Proteus mirabilis, Salmonella, Shigella), penicillinase sensitive → pair with clavulanate; the anti-staph penicillins dicloxacillin, nafcillin, oxacillin — narrow spectrum, S aureus except MRSA, enzyme-resistant by the bulky R group; piperacillin — antipseudomonal (Pseudomonas spp., gram ⊝ rods, anaerobes) → pair with tazobactam. LADDER (cephalosporins, five generations): 1st cefazolin, cephalexin — gram ⊕ cocci plus Proteus, E coli, Klebsiella; cefazolin for surgical prophylaxis; 2nd cefaclor, cefoxitin, cefuroxime, cefotetan — adds H influenzae, Enterobacter aerogenes, Neisseria, Serratia; 3rd ceftriaxone, cefpodoxime, ceftazidime, cefixime — serious gram ⊝, crosses the BBB (ceftriaxone: meningitis, gonorrhea, disseminated Lyme; ceftazidime: Pseudomonas); 4th cefepime — gram ⊝ with ↑ Pseudomonas activity; 5th ceftaroline — the only one covering MRSA and E faecalis, still no Pseudomonas. Fixed exclusion 1st-4th: Listeria, atypicals (Chlamydia, Mycoplasma), MRSA, enterococci. ESCORT (the β-lactamase inhibitors): clavulanic acid, avibactam, sulbactam, tazobactam — the bodyguard pairings amoxicillin-clavulanate, ceftazidime-avibactam, ampicillin-sulbactam, piperacillin-tazobactam. DOOR: ⑨ β-lactams (the PBP weld; aztreonam the no-cross-allergenicity escape at PBP3) vs ⑧ vancomycin (the D-Ala-D-Ala precursor grab; gram ⊕ only; oral route treats C difficile without absorption; infusion reaction prevented by slower infusion + antihistamines; resistance D-Ala-D-Ala → D-Ala-D-Lac). Carbapenems: imipenem ALWAYS with cilastatin (renal dehydropeptidase I would otherwise inactivate it in the tubules); meropenem ↓ seizures; ertapenem no Pseudomonas.",
  },
  mechanisms: [
    {
      id: "beta-lactam-door-logic",
      title: "One door, five families: the tier ladder of the β-lactam directory",
      context: "Reading any penicillin-tier or cephalosporin-generation question off books 184-186",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A β-lactam drug or a gram-stem organism appears in a stem",
            sublabel: "Input — any of the directory drugs on books 184-186.",
            variant: "input",
          },
          {
            id: "organism",
            label: "Which organism is the target — the named set the tier must reach?",
            sublabel: "Aminopenicillins: H flu, H pylori, E coli, enterococci, Listeria, Proteus, Salmonella, Shigella · anti-staph trio: S aureus · piperacillin: Pseudomonas.",
            variant: "process",
          },
          {
            id: "enzyme",
            label: "What is the β-lactamase exposure at the site?",
            sublabel: "Sensitive tiers travel with inhibitor bodyguards; the anti-staph trio carries the bulky R group — a steric shield.",
            variant: "process",
          },
          {
            id: "generation",
            label: "If a cephalosporin — which rung of the ladder?",
            sublabel: "1 ⊕ · 2 half-⊝ · 3 BBB · 4 pseudo · 5 MRSA. The fixed 1st-4th exclusion: Listeria, atypicals, MRSA, enterococci.",
            variant: "process",
          },
          {
            id: "effect",
            label: "The weld freezes at PBP — door ⑨",
            sublabel: "Cross-linking blocked, autolysins activated, osmotic lysis; aztreonam does the same at PBP3.",
            variant: "output",
          },
          {
            id: "consequence",
            label: "The clinical phenotype and its escape hatches",
            sublabel: "Enzyme cleaves the ring, or altered PBPs (MRSA's route) defeat every β-lactam at once — the directory answers by door.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "organism", label: "name the target set" },
          { from: "organism", to: "enzyme", label: "check the exposure tier" },
          { from: "enzyme", to: "generation", label: "if a cephalosporin, pick the rung" },
          { from: "generation", to: "effect", label: "the same door ⑨" },
          { from: "effect", to: "consequence", label: "express it clinically" },
        ],
      },
    },
    {
      id: "wall-two-doors",
      title: "⑧ vs ⑨: the glycopeptide grabs the precursor, the β-lactams mug the welder",
      context: "The two wall doors of the M31 map, completed by the vancomycin card (book 186)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A wall drug question — which door does the drug use?",
            sublabel: "Input — any cell-wall inhibitor from either family.",
            variant: "input",
          },
          {
            id: "door8",
            label: "⑧ THE PRECURSOR GRAB — vancomycin",
            sublabel: "Binds the D-Ala-D-Ala portion of cell-wall precursors, upstream of any PBP. Bacteriostatic against C difficile.",
            variant: "process",
          },
          {
            id: "door9",
            label: "⑨ THE PBP WELD — the β-lactams",
            sublabel: "Bind penicillin-binding proteins (transpeptidases) and freeze the cross-linking; aztreonam at PBP3, no cross-allergenicity.",
            variant: "process",
          },
          {
            id: "spectrum",
            label: "The door sets the spectrum",
            sublabel: "Vancomycin: gram ⊕ only (MRSA, S epidermidis, sensitive enterococci; oral route for C difficile, not absorbed) · β-lactams: tier-dependent.",
            variant: "process",
          },
          {
            id: "toxicity",
            label: "The door sets the toxicity",
            sublabel: "Vancomycin: nephrotoxicity, ototoxicity, thrombophlebitis, the rate-dependent infusion reaction (slower infusion + antihistamines), DRESS.",
            variant: "output",
          },
          {
            id: "resistance",
            label: "The door sets the escape route",
            sublabel: "⑧: the terminal tip swap D-Ala-D-Ala → D-Ala-D-Lac (Enterococcus) · ⑨: the enzyme cleaves the ring, or altered PBPs (MRSA).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "door8", label: "the glycopeptide route" },
          { from: "trigger", to: "door9", label: "the β-lactam route" },
          { from: "door8", to: "spectrum", label: "gram ⊕ only" },
          { from: "door9", to: "spectrum", label: "tier-dependent" },
          { from: "spectrum", to: "toxicity", label: "the door's adverse effects" },
          { from: "toxicity", to: "resistance", label: "the door's escape hatch" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "beta-lactam-family-map",
      title: "The β-lactam family map — the wall directory as one original chart",
      caption:
        "An original KYP synthesis of the drug directory (books 184-186): the DOOR ⑨ / DOOR ⑧ split (the β-lactams mug the PBP welder; vancomycin grabs the D-Ala-D-Ala precursor upstream), the PENICILLIN TIERS by β-lactamase exposure (the aminopenicillins under inhibitor escort, the anti-staph trio behind the bulky R group, piperacillin the antipseudomonal), the FIVE-GENERATION cephalosporin ladder with the fixed 1st-4th exclusion, the inhibitor-bodyguard pairings, the carbapenem trio's three personalities, aztreonam's allergenicity escape, and the vancomycin panel with the infusion-reaction photo described in text.",
      notice:
        "The one source photograph on these pages (the vancomycin infusion-reaction flushing photo, book 186, the boxed-A marker) is COPYRIGHTED and is described in text only — never reproduced. The source's own margin mnemonics (its letter-acronyms for the coverage sets) are omitted from this visual per the copyright boundary; the tier/generation facts themselves are carried as facts. The source's margin-note typo 'pseudomonaz' (book 185) is documented; the visual prints Pseudomonas. All roster orders follow the source's printed order.",
    },
    {
      kind: "table",
      title: "Book 184 — the three penicillin cards (carried verbatim)",
      intro:
        "The drug directory's penicillin tiers, as printed. Per the page-ownership convention the cards are carried verbatim — the card's field content plus the source's own margin notes (marked as source rows).",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 184)"],
      rows: [
        ["Penicillinase-sensitive penicillins — Drugs", "Amoxicillin, ampicillin; aminopenicillins."],
        ["— MECHANISM", "Same as penicillin. Wider spectrum; penicillinase sensitive. Also combine with clavulanic acid to protect against destruction by β-lactamase."],
        ["— CLINICAL USE", "Extended-spectrum penicillin—H influenzae, H pylori, E coli, Enterococci, Listeria monocytogenes, Proteus mirabilis, Salmonella, Shigella."],
        ["— ADVERSE EFFECTS", "Hypersensitivity reactions, rash, pseudomembranous colitis."],
        ["— MECHANISM OF RESISTANCE", "Penicillinase (a type of β-lactamase) cleaves β-lactam ring."],
        ["— Margin note (source)", "Aminopenicillins are amped-up penicillin. Amoxicillin has greater oral bioavailability than ampicillin."],
        ["— Coverage note (source)", "Coverage: ampicillin/amoxicillin HHEELPSS kill enterococci."],
        ["Penicillinase-resistant penicillins — Drugs", "Dicloxacillin, nafcillin, oxacillin."],
        ["— MECHANISM", "Same as penicillin. Narrow spectrum; penicillinase resistant because bulky R group blocks access of β-lactamase to β-lactam ring."],
        ["— CLINICAL USE", "S aureus (except MRSA)."],
        ["— ADVERSE EFFECTS", "Hypersensitivity reactions, interstitial nephritis."],
        ["— MECHANISM OF RESISTANCE", "MRSA has altered penicillin-binding protein target site."],
        ["— Margin note (source)", "“Use naf (nafcillin) for staph.”"],
        ["Piperacillin — Drugs", "Antipseudomonal penicillin."],
        ["— MECHANISM", "Same as penicillin. Extended spectrum. Penicillinase sensitive; use with β-lactamase inhibitors."],
        ["— CLINICAL USE", "Pseudomonas spp., gram ⊝ rods, anaerobes."],
        ["— ADVERSE EFFECTS", "Hypersensitivity reactions."],
      ],
      caption:
        "Three tiers, one routing variable — β-lactamase exposure. The aminopenicillins need the clavulanate escort; the anti-staph trio's bulky R group is the physical shield; piperacillin needs the inhibitor pairing to survive Pseudomonas-rich territory.",
    },
    {
      kind: "table",
      title: "Book 185 — the cephalosporin card and the β-lactamase-inhibitor card (carried verbatim)",
      intro:
        "The five-generation card and the bodyguard card, as printed — both columns verbatim, including the source's own margin-note typo 'pseudomonaz' on the ceftazidime line.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 185)"],
      rows: [
        ["Cephalosporins — MECHANISM", "β-lactam drugs that inhibit cell wall synthesis but are less susceptible to penicillinases. Bactericidal."],
        ["— CLINICAL USE · 1st generation", "1st generation (cefazolin, cephalexin)—gram ⊕ cocci, Proteus mirabilis, E coli, Klebsiella pneumoniae. Cefazolin used prior to surgery to prevent S aureus wound infections."],
        ["— CLINICAL USE · 2nd generation", "2nd generation (cefaclor, cefoxitin, cefuroxime, cefotetan)—gram ⊕ cocci, H influenzae, Enterobacter aerogenes, Neisseria spp., Serratia marcescens, Proteus mirabilis, E coli, Klebsiella pneumoniae."],
        ["— CLINICAL USE · 3rd generation", "3rd generation (ceftriaxone, cefpodoxime, ceftazidime, cefixime)—serious gram ⊝ infections resistant to other β-lactams."],
        ["— CLINICAL USE · 4th generation", "4th generation (cefepime)—gram ⊝ organisms, with ↑ activity against Pseudomonas and gram ⊕ organisms."],
        ["— CLINICAL USE · 5th generation", "5th generation (ceftaroline)—broad gram ⊕ and gram ⊝ organism coverage; unlike 1st-4th generation cephalosporins, ceftaroline covers MRSA, and Enterococcus faecalis—does not cover Pseudomonas."],
        ["— ADVERSE EFFECTS", "Hypersensitivity reactions, autoimmune hemolytic anemia, disulfiram-like reaction, vitamin K deficiency. Low rate of cross-reactivity even in penicillin-allergic patients. ↑ nephrotoxicity of aminoglycosides."],
        ["— MECHANISM OF RESISTANCE", "Inactivated by cephalosporinases (a type of β-lactamase). Structural change in penicillin-binding proteins (transpeptidases)."],
        ["— Exclusion note (source)", "Organisms typically not covered by 1st-4th generation cephalosporins are LAME: Listeria, Atypicals (Chlamydia, Mycoplasma), MRSA, and Enterococci."],
        ["— Generation notes (source)", "1st generation—⊕ PEcK. 2nd graders wear fake fox fur to tea parties. 2nd generation—⊕ HENS PEcK."],
        ["— 3rd-gen notes (source)", "Can cross blood-brain barrier. Ceftriaxone—meningitis, gonorrhea, disseminated Lyme disease. Ceftazidime for pseudomonaz."],
        ["β-lactamase inhibitors — Drugs", "Include Clavulanic acid, Avibactam, Sulbactam, Tazobactam. Often added to penicillin antibiotics to protect the antibiotic from destruction by β-lactamase."],
        ["— Pairings note (source)", "CAST (eg, amoxicillin-clavulanate, ceftazidime-avibactam, ampicillin-sulbactam, piperacillin-tazobactam)."],
      ],
      caption:
        "The generational widening in one card: gram ⊕ start (1st), the gram ⊝ door opening (2nd), the BBB-crossing serious-gram ⊝ generation (3rd), the Pseudomonas step-up (4th), and the exclusion break (5th: MRSA + E faecalis, still no Pseudomonas). The margin column carries the source's own mnemonics — including its 'pseudomonaz' typo on the ceftazidime line, preserved as printed.",
    },
    {
      kind: "table",
      title: "Book 186 — the carbapenems, aztreonam, and vancomycin cards (carried verbatim)",
      intro:
        "The directory's last three cards, as printed. Vancomycin's MECHANISM OF RESISTANCE content prints at the page end in the raw layer (after the footer) — the physical-order interleave is documented in the manifest; the card carries it here in field order. The boxed-A clinical photograph (the infusion-reaction flushing photo) is described in text only.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 186)"],
      rows: [
        ["Carbapenems — Drugs", "Imipenem, meropenem, ertapenem."],
        ["— MECHANISM", "Imipenem is a broad-spectrum, β-lactamase–resistant carbapenem. Binds penicillin-binding proteins → inhibition of cell wall synthesis → cell death. Always administered with cilastatin (inhibitor of renal dehydropeptidase I) to ↓ inactivation of drug in renal tubules."],
        ["— CLINICAL USE", "Gram ⊕ cocci, gram ⊝ rods, and anaerobes. Wide spectrum and significant adverse effects limit use to life-threatening infections or after other drugs have failed. Meropenem has a ↓ risk of seizures and is stable to dehydropeptidase I."],
        ["— ADVERSE EFFECTS", "GI distress, rash, and CNS toxicity (seizures) at high plasma levels."],
        ["— MECHANISM OF RESISTANCE", "Inactivated by carbapenemases produced by, eg, K pneumoniae, E coli, Klebsiella aerogenes."],
        ["— Margin notes (source)", "With imipenem, “the kill is lastin’ with cilastatin.” Unlike other carbapenems, ertapenem is not active against Pseudomonas."],
        ["Aztreonam — MECHANISM", "Less susceptible to β-lactamases. Prevents peptidoglycan cross-linking by binding to penicillin-binding protein 3. Synergistic with aminoglycosides. No cross-allergenicity with penicillins."],
        ["— CLINICAL USE", "Gram ⊝ rods only—no activity against gram ⊕ rods or anaerobes. For penicillin-allergic patients and those with renal insufficiency who cannot tolerate aminoglycosides."],
        ["— ADVERSE EFFECTS", "Usually nontoxic; occasional GI upset."],
        ["Vancomycin — MECHANISM", "Inhibits cell wall peptidoglycan formation by binding D-Ala-D-Ala portion of cell wall precursors. Bactericidal against most bacteria (bacteriostatic against C difficile). Not susceptible to β-lactamases."],
        ["— CLINICAL USE", "Gram ⊕ bugs only—for serious, multidrug-resistant organisms, including MRSA, S epidermidis, sensitive Enterococcus species, and C difficile (oral route)."],
        ["— ADVERSE EFFECTS", "Well tolerated in general but not trouble free: nephrotoxicity, ototoxicity, thrombophlebitis, diffuse flushing (vancomycin infusion reaction A —idiopathic reaction largely preventable by pretreatment with antihistamines and slower infusion rate), DRESS syndrome. [The boxed-A clinical photograph printed beside this field — the diffuse red flushing of the torso — is described in text here; it is a copyrighted patient photograph and is not reproduced.]"],
        ["— MECHANISM OF RESISTANCE", "Occurs in bacteria (eg, Enterococcus) via amino acid modification of D-Ala-D-Ala to D-Ala-D-Lac."],
        ["— Margin note (source)", "“If you Lack a D-Ala (dollar), you can’t ride the van (vancomycin).”"],
      ],
      caption:
        "The last wall cards: the carbapenem trio (imipenem needs cilastatin to survive the renal tubule; meropenem spares seizures; ertapenem skips Pseudomonas), the monobactam escape (aztreonam at PBP3 with no cross-allergenicity), and the glycopeptide's separate door (the D-Ala-D-Ala precursor grab, escaped by the D-Ala-D-Lac terminal swap).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these cards teach",
      body:
        "Rule 1 — THE EXCLUSION IS THE ANSWER: when a stem names Listeria, an atypical (Chlamydia or Mycoplasma), MRSA, or enterococci, the answer is never a 1st-4th generation cephalosporin; the only cephalosporin that covers MRSA and E faecalis is ceftaroline (5th) — and even it does not cover Pseudomonas. Rule 2 — THE TIER FOLLOWS THE ENZYME: staphylococcal β-lactamase territory wants nafcillin/oxacillin/dicloxacillin (the bulky R group), while the aminopenicillins and piperacillin travel with their inhibitor bodyguards. Rule 3 — THE DOOR SETS THE ESCAPE: altered PBPs defeat every β-lactam at once (MRSA), while the D-Ala-D-Lac swap defeats only vancomycin (VRE) — two doors, two independent escape hatches, which is why MRSA and VRE are different resistance stories despite living on the same wall.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 67-year-old man with a history of anaphylactic penicillin reaction develops hospital-acquired gram ⊝ rod bacteremia; the team needs an antipseudomonal β-lactam without penicillin cross-reactivity.",
        discriminator: "No cross-allergenicity with penicillins — the monobactam's unique property at the same PBP3 door",
        concept: "Aztreonam — the allergenicity escape of door ⑨",
        answer:
          "Aztreonam prevents peptidoglycan cross-linking by binding PBP3, is less susceptible to β-lactamases, is synergistic with aminoglycosides, and carries no cross-allergenicity with penicillins — the card's own indication: penicillin-allergic patients and those with renal insufficiency who cannot tolerate aminoglycosides. It covers gram ⊝ rods only (no gram ⊕ rods, no anaerobes).",
      },
      {
        stem: "A 19-year-old with bacterial meningitis is started on a third-generation cephalosporin; the team picks the anchor drug for Neisseria meningitidis coverage and CNS penetration.",
        discriminator: "3rd generation crosses the blood-brain barrier — the generation's own printed property",
        concept: "The 3rd-generation ladder rung — ceftriaxone",
        answer:
          "Ceftriaxone (with cefpodoxime, ceftazidime, cefixime) treats serious gram ⊝ infections resistant to other β-lactams and is the CNS generation: meningitis, gonorrhea, disseminated Lyme disease are its printed anchors. Ceftazidime is the same rung's Pseudomonas pick — the two 3rd-generation names are the ladder's highest-yield pair.",
      },
      {
        stem: "A patient on broad anaerobic and gram ⊝ rod coverage for a life-threatening mixed infection develops a seizure at high plasma levels; the carbapenem is switched to the seizure-sparing alternative.",
        discriminator: "Meropenem has a ↓ risk of seizures and is stable to dehydropeptidase I — no cilastatin needed",
        concept: "The carbapenem trio's three personalities",
        answer:
          "Imipenem (always with cilastatin — the renal dehydropeptidase I inhibitor) carries the CNS-toxicity risk at high plasma levels; meropenem lowers the seizure risk and is stable to the tubule enzyme; ertapenem is the one that is not active against Pseudomonas. Same family, three clinical personalities — the card's own trio distinctions.",
      },
    ],
    traps: [
      {
        a: "Cefazolin (1st generation)",
        b: "Ceftazidime (3rd generation)",
        whyConfused: "Near-identical names, both 'cef-' anchors of their generation",
        keyDifference: "Cefazolin is the 1st-generation surgical-prophylaxis drug (gram ⊕ cocci + the Proteus/E coli/Klebsiella set); ceftazidime is the 3rd-generation Pseudomonas pick that crosses the BBB",
        clue: "Surgical wound prophylaxis → cefazolin; Pseudomonas + CNS or the anti-pseudomonal 3rd-gen slot → ceftazidime (or cefepime, 4th)",
      },
      {
        a: "Nafcillin / oxacillin / dicloxacillin",
        b: "Amoxicillin / ampicillin",
        whyConfused: "All four are 'penicillins' with staphylococcal-adjacent names in the directory",
        keyDifference: "The anti-staph trio is penicillinase RESISTANT (bulky R group; S aureus except MRSA); the aminopenicillins are penicillinase SENSITIVE (wider spectrum; need clavulanate escort)",
        clue: "Pure staph coverage (MSSA) → the anti-staph trio; enterococci/Listeria/Salmonella/Shigella reach → the aminopenicillins (with their H influenzae/H pylori/E coli/Proteus set)",
      },
      {
        a: "Vancomycin covers MRSA",
        b: "Nafcillin covers MRSA",
        whyConfused: "Both are 'the staph drugs' of the wall directory",
        keyDifference: "MRSA has an altered penicillin-binding protein target site — no β-lactam binds it; vancomycin uses door ⑧ (the D-Ala-D-Ala precursor grab), which the altered PBP cannot defeat",
        clue: "MRSA → vancomycin (or ceftaroline); MSSA → nafcillin (the card's own line: S aureus except MRSA)",
      },
    ],
    pivots: [
      {
        lookAlike: "Ceftriaxone vs ceftazidime (both 3rd generation, both CNS-crossing)",
        differentiator: "Pseudomonas — ceftazidime covers it; ceftriaxone does not",
        correctPath: "Meningitis/gonorrhea/disseminated Lyme → ceftriaxone; documented Pseudomonas or the antipseudomonal 3rd-gen slot → ceftazidime (or step up to cefepime, 4th)",
      },
      {
        lookAlike: "Imipenem vs meropenem vs ertapenem (the carbapenem trio)",
        differentiator: "Seizure risk (imipenem highest), Pseudomonas activity (ertapenem none), dehydropeptidase stability (meropenem stable — no cilastatin)",
        correctPath: "CNS/serious mixed infection with seizure concern → meropenem; Pseudomonas needed → imipenem or meropenem, never ertapenem; reserved for life-threatening infections or after other drugs fail (the card's own limitation line)",
      },
    ],
    miniCase: {
      vignette:
        "A 54-year-old woman with MRSA bacteremia from an infected tunneled catheter is started on IV vancomycin. Thirty minutes into a rapid infusion she develops diffuse warmth and bright red flushing of the face, neck, and upper torso; there is no hypotension, no wheezing, and no urticaria. The symptoms begin to resolve when the infusion is slowed and an oral antihistamine is given. The team documents the event and continues the drug to complete the course.",
      question: "What best explains this reaction, and what is the appropriate management?",
      options: [
        {
          label: "IgE-mediated type I hypersensitivity to vancomycin",
          text: "A true allergy requiring permanent avoidance of vancomycin and allergy documentation.",
          why: "Wrong, and tempting because 'rash during an antibiotic infusion' pattern-matches to allergy. There is no urticaria, no wheeze, no hypotension; the reaction is rate-dependent and resolves with slower infusion — not an IgE mechanism.",
        },
        {
          label: "Vancomycin infusion reaction",
          text: "A rate-dependent infusion reaction: diffuse flushing from rapid vancomycin administration, largely preventable by slower infusion and antihistamine pretreatment.",
          correct: true,
          why: "Correct. This is the card's own printed line: 'diffuse flushing (vancomycin infusion reaction A — idiopathic reaction largely preventable by pretreatment with antihistamines and slower infusion rate)'. The clinical photograph printed beside the card (the boxed-A image) shows exactly this torso flushing. Management is to slow the rate, pretreat, and continue — it is not an allergy.",
        },
        {
          label: "DRESS syndrome",
          text: "A severe delayed cutaneous adverse reaction with eosinophilia and systemic involvement, typically starting days to weeks after exposure.",
          why: "Wrong. DRESS is on the same card's adverse-effect line, which makes it a classic distractor — but DRESS is a delayed-onset systemic reaction (rash, eosinophilia, organ involvement), not an acute rate-dependent flush at 30 minutes.",
        },
        {
          label: "β-lactam cross-reactivity",
          text: "An allergic reaction driven by structural cross-reactivity between vancomycin and penicillins.",
          why: "Wrong, and tempting in any 'allergy during antibiotic' stem. Vancomycin is a glycopeptide, not a β-lactam — it is not susceptible to β-lactamases and shares no cross-allergenicity with penicillins; the cross-reactivity line belongs to the cephalosporin card (low rate even in penicillin-allergic patients).",
        },
        {
          label: "Early red-man sepsis from the catheter",
          text: "Catheter-related bloodstream infection presenting with flushing and warmth due to bacteremia.",
          why: "Wrong. Her MRSA bacteremia is already known and being treated; the temporal lock to the infusion rate (onset during rapid infusion, resolution with slowing) is the discriminator. True bacteremic flushing does not resolve by slowing an infusion.",
        },
      ],
      reasoning:
        "The reaction is time-locked to the infusion rate, spares the IgE apparatus (no urticaria, wheeze, or hypotension), and resolves with slower infusion plus antihistamine — the printed definition of the vancomycin infusion reaction. The boxed-A clinical photograph on the source page (described in text here) shows the same diffuse torso flushing. The management printed on the card is exactly what the team did: pretreat with antihistamines, infuse more slowly, and continue the drug — because this is a rate phenomenon, not an allergy, and stopping vancomycin over it would cost the patient her MRSA coverage at door ⑧.",
    },
  },
  mnemonics: [
    {
      code: "PLAIN → AMPED → ARMORED → ESCORTED",
      meaning: "PLAIN penicillin (G/V, from the M31 card) needs no protection; AMPED up (the aminopenicillins amoxicillin/ampicillin — wider spectrum) but still enzyme-sensitive, so it travels with a bodyguard; ARMORED (dicloxacillin/nafcillin/oxacillin — the bulky R group physically blocks the enzyme); ESCORTED (piperacillin — the antipseudomonal that always brings an inhibitor, tazobactam).",
      memorizes: "The penicillin tiers and their β-lactamase-exposure posture",
      whenToUse: "Any question that pairs a penicillin with an organism set or asks which penicillin survives staphylococcal β-lactamase",
      clinical: "Surgical staph prophylaxis and MSSA bacteremia use the ARMORED tier; enterococci/Listeria/Salmonella reach and H pylori coverage use the AMPED tier (with clavulanate); Pseudomonas calls for the ESCORTED tier (piperacillin-tazobactam).",
    },
    {
      code: "1 ⊕ · 2 half-⊝ · 3 BBB · 4 pseudo · 5 MRSA",
      meaning: "1st generation starts gram ⊕ (plus the Proteus/E coli/Klebsiella urinary set); 2nd opens the gram ⊝ door halfway (adds H influenzae, Enterobacter, Neisseria, Serratia); 3rd is the BBB-crossing serious-gram ⊝ generation (ceftriaxone: meningitis/gonorrhea/Lyme; ceftazidime: Pseudomonas); 4th steps up Pseudomonas activity (cefepime); 5th finally breaks the exclusion (ceftaroline: MRSA + E faecalis — still no Pseudomonas).",
      memorizes: "The cephalosporin generational ladder and each rung's signature coverage",
      whenToUse: "Any stem naming a cephalosporin or asking which generation covers a named organism",
      clinical: "Place the drug on the rung first, then read the coverage off the rung — and remember the fixed exclusion of 1st-4th: Listeria, the atypicals (Chlamydia, Mycoplasma), MRSA, and enterococci are never covered until ceftaroline.",
    },
    {
      code: "THE TIP SWAP",
      meaning: "Vancomycin resistance (Enterococcus) is a single terminal modification: D-Ala-D-Ala → D-Ala-D-Lac. The lactate ending removes the hydrogen bond the glycopeptide needs to grab the precursor.",
      memorizes: "Vancomycin's resistance mechanism at door ⑧",
      whenToUse: "VRE questions, or any stem pairing vancomycin failure with a β-lactamase-negative isolate",
      clinical: "When the tip swaps, vancomycin cannot bind the precursor — linezolid or daptomycin take over; no dose adjustment rescues the binding. This is why VRE never needed a β-lactamase: it escaped at the other door.",
    },
    {
      code: "NEVER ALONE",
      meaning: "Imipenem never walks alone — it is always administered with cilastatin, the renal dehydropeptidase I inhibitor, because the tubule enzyme would otherwise inactivate the drug in the kidney.",
      memorizes: "The imipenem-cilastatin pairing and why it exists",
      whenToUse: "Any question about imipenem dosing, its combination product, or renal-tubule inactivation",
      clinical: "Meropenem is stable to the enzyme (no escort needed, lower seizure risk); ertapenem is stable too — but it is the carbapenem that skips Pseudomonas.",
    },
  ],
  rapidReview: {
    s30: [
      "Penicillin tiers: aminopenicillins amoxicillin/ampicillin (wider spectrum; H influenzae, H pylori, E coli, enterococci, Listeria monocytogenes, Proteus mirabilis, Salmonella, Shigella; penicillinase sensitive → clavulanate) · anti-staph dicloxacillin/nafcillin/oxacillin (narrow spectrum, S aureus except MRSA; penicillinase resistant via the bulky R group) · piperacillin (antipseudomonal: Pseudomonas spp., gram ⊝ rods, anaerobes; penicillinase sensitive → inhibitor pairing)",
      "Cephalosporin generations: 1st cefazolin/cephalexin (gram ⊕ cocci + Proteus/E coli/Klebsiella; cefazolin for surgical prophylaxis) · 2nd cefaclor/cefoxitin/cefuroxime/cefotetan (+ H influenzae, Enterobacter aerogenes, Neisseria, Serratia) · 3rd ceftriaxone/cefpodoxime/ceftazidime/cefixime (serious gram ⊝; crosses the BBB; ceftriaxone = meningitis/gonorrhea/Lyme, ceftazidime = Pseudomonas) · 4th cefepime (+ Pseudomonas activity) · 5th ceftaroline (MRSA + E faecalis; still no Pseudomonas)",
      "Fixed exclusion 1st-4th cephalosporins: Listeria, atypicals (Chlamydia, Mycoplasma), MRSA, enterococci — ceftaroline is the only cephalosporin that covers MRSA and E faecalis",
      "β-lactamase inhibitors: clavulanic acid, avibactam, sulbactam, tazobactam — the pairings amoxicillin-clavulanate, ceftazidime-avibactam, ampicillin-sulbactam, piperacillin-tazobactam",
      "Wall doors: ⑨ β-lactams bind PBPs (aztreonam at PBP3, no cross-allergenicity with penicillins) · ⑧ vancomycin binds the D-Ala-D-Ala portion of precursors (gram ⊕ only; oral route for C difficile; bacteriostatic against C difficile); carbapenems: imipenem + cilastatin (dehydropeptidase I), meropenem ↓ seizures, ertapenem no Pseudomonas",
    ],
    m3: [
      "Aminopenicillins: same as penicillin, wider spectrum, penicillinase sensitive — combine with clavulanic acid; adverse effects: hypersensitivity, rash, pseudomembranous colitis; resistance: penicillinase cleaves the ring",
      "Anti-staph penicillins: same as penicillin, narrow spectrum; penicillinase resistant because the bulky R group blocks β-lactamase access; clinical use S aureus (except MRSA); adverse: hypersensitivity, interstitial nephritis; resistance: MRSA's altered PBP",
      "Cephalosporin adverse effects: hypersensitivity, autoimmune hemolytic anemia, disulfiram-like reaction, vitamin K deficiency; low cross-reactivity even in penicillin-allergic patients; ↑ nephrotoxicity of aminoglycosides; resistance: cephalosporinases or PBP structural change",
      "Carbapenems: imipenem broad-spectrum β-lactamase-resistant, binds PBPs → wall synthesis inhibition → cell death, always with cilastatin; meropenem ↓ seizure risk, stable to dehydropeptidase I; ertapenem not active against Pseudomonas; adverse: GI distress, rash, CNS toxicity (seizures) at high plasma levels; resistance: carbapenemases (K pneumoniae, E coli, Klebsiella aerogenes)",
      "Vancomycin: binds the D-Ala-D-Ala portion of cell-wall precursors; bactericidal against most bacteria, bacteriostatic against C difficile; not susceptible to β-lactamases; gram ⊕ only (MRSA, S epidermidis, sensitive enterococci, C difficile oral route); adverse: nephrotoxicity, ototoxicity, thrombophlebitis, the infusion reaction (slower infusion + antihistamines), DRESS; resistance: D-Ala-D-Ala → D-Ala-D-Lac (Enterococcus)",
    ],
    m10: [
      "Census: p206 and p207 are PURE TEXT (0 rasters — directory cards only); p208 carries exactly one raster — the 188×188 cmyk clinical photograph of the vancomycin infusion reaction (the boxed-A marker, standalone 'A' at raw line 78); COPYRIGHTED → described-in-text, never reproduced",
      "The chapter banner typo MICROCIOLOGY—ANTIMICROCIALS prints on all three pages (raw line 7 on each); 'SEC TION II' prints split on p206/p208 (line 3) and after the banner block on p207 (line 5)",
      "The margin notes emit at page end in the raw layer: p206 lines 21-23/32-33 (the aminopenicillin margin + its coverage line) and line 87 ('Use naf…' — the anti-staph margin, after the footer); p207 lines 16-19 (the LAME block), 36-44 (the generation margins), 75-77 (the CAST pairings); p208 lines 41-44 (imipenem/ertapenem margins) and 84-85 (vancomycin's resistance content, AFTER the indd footer at line 82 — the page's physical-order interleave)",
      "The source's own margin typo 'pseudomonaz' prints on book 185 (raw line 44, the ceftazidime margin note); hyphen-drops in the raw layer: 'crossreactivity' (p207 line 58), 'penicillinbinding' (p207 line 64; p208 line 49)",
      "Vancomycin's MECHANISM OF RESISTANCE heading prints at raw line 80 with its content at 84-85 — the heading and its content are separated by the footer; the carbapenems mechanism line carries the C1-control-prefixed arrows ('\\x8e→') that the manifest normalizer strips",
    ],
  },
  recall: [
    {
      q: "Walk the penicillin tiers — each tier's drugs, spectrum, enzyme posture, and clinical use.",
      a: "AMINOPENICILLINS (amoxicillin, ampicillin): same as penicillin, wider spectrum, penicillinase sensitive — combine with clavulanic acid to protect against β-lactamase destruction; clinical use: the extended-spectrum set (H influenzae, H pylori, E coli, enterococci, Listeria monocytogenes, Proteus mirabilis, Salmonella, Shigella); adverse: hypersensitivity, rash, pseudomembranous colitis; resistance: penicillinase cleaves the ring. ANTI-STAPH PENICILLINS (dicloxacillin, nafcillin, oxacillin): same as penicillin, narrow spectrum; penicillinase resistant because the bulky R group blocks β-lactamase access to the ring; clinical use: S aureus (except MRSA); adverse: hypersensitivity, interstitial nephritis; resistance: MRSA's altered PBP target site. PIPERACILLIN (antipseudomonal penicillin): same as penicillin, extended spectrum; penicillinase sensitive — use with β-lactamase inhibitors; clinical use: Pseudomonas spp., gram ⊝ rods, anaerobes; adverse: hypersensitivity.",
    },
    {
      q: "Recite the cephalosporin generations — every printed drug set and each rung's coverage.",
      a: "1st (cefazolin, cephalexin): gram ⊕ cocci, Proteus mirabilis, E coli, Klebsiella pneumoniae — cefazolin used prior to surgery to prevent S aureus wound infections. 2nd (cefaclor, cefoxitin, cefuroxime, cefotetan): gram ⊕ cocci plus H influenzae, Enterobacter aerogenes, Neisseria spp., Serratia marcescens (and the same Proteus/E coli/Klebsiella set). 3rd (ceftriaxone, cefpodoxime, ceftazidime, cefixime): serious gram ⊝ infections resistant to other β-lactams — the generation that crosses the blood-brain barrier (ceftriaxone: meningitis, gonorrhea, disseminated Lyme; ceftazidime: Pseudomonas). 4th (cefepime): gram ⊝ organisms with ↑ activity against Pseudomonas and gram ⊕. 5th (ceftaroline): broad gram ⊕ and gram ⊝ — the only generation covering MRSA and Enterococcus faecalis, while not covering Pseudomonas. Adverse effects: hypersensitivity, autoimmune hemolytic anemia, disulfiram-like reaction, vitamin K deficiency; low cross-reactivity even in penicillin-allergic patients; ↑ nephrotoxicity of aminoglycosides. Resistance: cephalosporinases (a type of β-lactamase) or PBP structural change.",
    },
    {
      q: "State the fixed exclusion of the cephalosporin ladder and its one exception.",
      a: "1st-4th generation cephalosporins do not cover Listeria, the atypicals (Chlamydia, Mycoplasma), MRSA, or enterococci. The exception is the 5th generation: ceftaroline covers MRSA and Enterococcus faecalis (broad gram ⊕ and gram ⊝ coverage) — but it still does not cover Pseudomonas. So the exclusion has two layers: the MRSA/enterococci ban lifts at the 5th generation, while the Pseudomonas gap is filled by ceftazidime (3rd), cefepime (4th), or piperacillin-tazobactam — never by ceftriaxone or ertapenem.",
    },
    {
      q: "Carry the carbapenems, aztreonam, and vancomycin cards — mechanism through resistance.",
      a: "CARBAPENEMS (imipenem, meropenem, ertapenem): imipenem is a broad-spectrum, β-lactamase-resistant carbapenem; binds PBPs → inhibition of cell wall synthesis → cell death; always administered with cilastatin (renal dehydropeptidase I inhibitor) to ↓ tubular inactivation. Clinical use: gram ⊕ cocci, gram ⊝ rods, anaerobes — wide spectrum and significant adverse effects limit use to life-threatening infections or after other drugs have failed; meropenem has ↓ seizure risk and is stable to dehydropeptidase I. Adverse: GI distress, rash, CNS toxicity (seizures) at high plasma levels. Resistance: carbapenemases (K pneumoniae, E coli, Klebsiella aerogenes). AZTREONAM: less susceptible to β-lactamases; prevents peptidoglycan cross-linking by binding PBP3; synergistic with aminoglycosides; no cross-allergenicity with penicillins; gram ⊝ rods only (no gram ⊕ rods, no anaerobes) — for penicillin-allergic patients and those with renal insufficiency who cannot tolerate aminoglycosides; usually nontoxic. VANCOMYCIN: inhibits cell wall peptidoglycan formation by binding the D-Ala-D-Ala portion of cell wall precursors; bactericidal against most bacteria (bacteriostatic against C difficile); not susceptible to β-lactamases; gram ⊕ bugs only — serious multidrug-resistant organisms (MRSA, S epidermidis, sensitive enterococci) and C difficile (oral route); adverse: nephrotoxicity, ototoxicity, thrombophlebitis, diffuse flushing (the infusion reaction — preventable by antihistamines and slower infusion), DRESS; resistance: D-Ala-D-Ala → D-Ala-D-Lac (Enterococcus).",
    },
    {
      q: "Separate the two wall doors and explain why MRSA and VRE are different resistance stories.",
      a: "Door ⑨ — the β-lactams (penicillin tiers, cephalosporin generations, carbapenems, and aztreonam the monobactam) all bind penicillin-binding proteins (transpeptidases) and freeze the cross-linking weld; their escape hatches are enzymatic (β-lactamase/cephalosporinase/carbapenemase cleaving the ring) or structural (altered PBPs — MRSA's route, which defeats every β-lactam at once). Door ⑧ — vancomycin binds the D-Ala-D-Ala portion of the cell-wall precursors upstream of any PBP; its escape hatch is the terminal swap D-Ala-D-Ala → D-Ala-D-Lac (the VRE route). The doors are mechanistically independent: no β-lactamase helps against vancomycin, and the altered PBP that makes MRSA does nothing to vancomycin's grab — which is why MRSA keeps vancomycin while VRE sheds it, and why the two resistances are told as separate stories on the same wall.",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31 is this note's map: the nine numbered doors with the β-lactam cross-linking directory. M32 is the directory zoomed into its clinical pages — the tier logic, the generational ladder, and the two-doors split are M31's ⑧/⑨ panels in prescribing form.",
    },
    {
      title: "Protein Synthesis Inhibitors: 30S, 50S & Beyond",
      topicId: "protein-synthesis-inhibitors",
      note: "M33 continues the directory at doors ⑥⑦ — the 50S/30S rosters in clinical form. The aminoglycoside synergy line printed on the aztreonam card (synergistic with aminoglycosides) and the ↑ nephrotoxicity line on the cephalosporin card both point forward to it.",
    },
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "M1 drew the envelope this whole directory attacks: the peptidoglycan layer, the periplasm, and the membrane. Door ⑨'s weld and door ⑧'s precursor grab are both M1's wall anatomy in pharmacologic cross-section.",
    },
    {
      title: "Gram-Positive Cocci: Staphylococcus & Streptococcus",
      topicId: "gram-positive-cocci",
      note: "The anti-staph tier's whole logic lives here: MSSA versus MRSA is the altered-PBP boundary — the reason nafcillin stops at 'S aureus (except MRSA)' and the reason ceftaroline (5th) and vancomycin exist on the same pages.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (β-Lactam Allergy and Cross-Reactivity)",
      connection:
        "The cephalosporin card's own line — low rate of cross-reactivity even in penicillin-allergic patients — is the bridge to the Pharmacology chapter's allergy ladder, and aztreonam's no-cross-allergenicity line is its extreme case: the monobactam exists at door ⑨ precisely for the anaphylactic patient.",
    },
    {
      subject: "Biochemistry (Peptidoglycan Cross-Linking Chemistry)",
      connection:
        "Door ⑨ is a chemistry act: the D-Ala-D-Ala analog competing at the transpeptidase active site. The biochemistry chapter teaches the same reaction from the enzyme side — the bond, the water, and the cross-link — which is M1's wall chemistry and the D-Ala-D-Lac escape in molecular form.",
    },
    {
      subject: "Microbiology — Bacterial Genetics (M7)",
      connection:
        "MRSA's altered PBP and VRE's D-Ala-D-Lac swap are both resistance-gene stories: the altered PBP arrives by horizontal transfer (the mecA route M7 teaches), while the terminal swap is a cassette-encoded ligase change — two different genetic vehicles for two different doors.",
    },
    {
      subject: "Infectious Disease (Empiric Therapy Routing)",
      connection:
        "Every empiric-therapy question routes through this directory: surgical prophylaxis (cefazolin), meningitis (ceftriaxone), Pseudomonas (ceftazidime/cefepime/piperacillin-tazobactam), MRSA (vancomycin), and the penicillin-allergic gram ⊝ patient (aztreonam) — the dosing-side of the bugs-by-system matrices from M29-M30.",
    },
  ],
};
