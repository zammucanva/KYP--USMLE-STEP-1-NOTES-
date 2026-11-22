import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 26. Source: FULL pdf page 273 / book 251
// (Pharmacology — Toxicities and Adverse Effects — the topic owns the WHOLE
// page, which carries THREE blocks: "Drugs affecting pupil size" on top with
// its two-column mydriasis/miosis layout and the iris figure, "Cytochrome
// P-450 interactions (selected)" in the middle, and "Sulfa drugs" at the
// bottom). Census (pdfimages): ZERO raster images — the page is the side
// label + the three blue-label blocks (two-column pupil lists + TWO iris
// illustrations drawn as vector art, the three-column CYP table, the sulfa
// text block) + the indd footer slug. VLM AVAILABLE this session (glm-4.6v
// at 120dpi): ONE full-page pass (staging-ph26/vlm-census.txt) confirming
// the printed structure of all three blocks, the iris artwork (LEFT: dilated
// pupil, radial muscle fibers, dark iris; RIGHT: constricted pupil,
// concentric sphincter rings, lighter iris — one label under each), and the
// color furniture: blue sidebar block labels ("Drugs affecting pupil size",
// "Cytochrome P-450 interactions (selected)", "Sulfa drugs"), RED column
// headers (↑ pupil size (mydriasis) / ↓ pupil size (miosis); Inducers (+) /
// Substrates / Inhibitors (–)), red mnemonic letters within the CYP drug
// names (St, Ph, Ph, M, N, R, Gr, Ca, Chronic alcohol; The, OCPs, A, War;
// S, I, C, K, F, A, C, E, S, C, O, Am, R, grapefruit juice), red sulfa
// drug initials (S-S-P-F-A-C-T-S), and the sulfa mnemonic "Scary Sulfa
// Pharm FACTS" printing IN RED IN THE RIGHT MARGIN; NO images besides the
// two vector irises (plus two small gray multimedia/speaker ebook icons
// beside the iris captions — digital-resource markers, not content; no
// margin mnemonics other than the sulfa one). PRINTED-TEXT QUIRKS carried
// verbatim + documented: (1) meperidine is NOT a separate bullet in the
// mydriasis column — it prints JOINED BY COMMA to the indirect
// sympathomimetics entry ("Indirect sympathomimetics (eg, amphetamines,
// cocaine, LSD), meperidine"); the batch brief listed it as its own item —
// adjudicated to the print (text layer + layout + VLM all agree); (2) the
// batch brief's miosis list named only sympatholytics and opioids — the
// print carries a THIRD entry, "Parasympathomimetics (eg, pilocarpine),
// organophosphates", carried here (the topic owns the whole page); (3) the
// iris figure labels are DUPLICATED in the cache text layer (each caption
// is embedded twice — "Radial muscle contraction (α1 receptor mediated)"
// and "Sphincter muscle contraction (M3 receptor mediated)" each appear as
// interleaved duplicate spans; the print shows each caption ONCE, under its
// own iris — carried once, duplication documented); (4) the inducers
// mnemonic prints wrapping as "(phen-" / "phen)" — the printed form is
// "(phen-phen)"; the cache text layer merges it as "(phenphen)"; this note
// restores the printed hyphen, and the gen-script evidence quotes the cache
// lines as-is; (5) the VLM read the last sulfa drug as "Sulfonureas" —
// adjudicated to the text layer (raw + layout layers both print
// "Sulfonylureas."), carried as printed; (6) the two pupil column headers
// carry \x8f/\x90 control-char prefixes in the text layer (stripped by the
// manifest's norm()); (7) "SEC TION II" header-space artifact (known);
// subscripts as plain digits per the text layer (α2-agonists, α1, M3);
// (8) First Aid's own mnemonics — "St. John's funny funny (phen-phen) mom
// never refuses greasy carbs and chronic alcohol" · "The OCPs are
// anti-war" · "SICK FACES come when I am really drinking grapefruit juice"
// (all three printing INSIDE the CYP table, in a bottom row beneath the
// columns) · "Scary Sulfa Pharm FACTS" (red, right margin) — are carried
// ATTRIBUTED and are NOT counted among the four KYP originals. The KYP
// diagram (pupil-cyp-map), the exam layer, the memory layer, and the drug
// cards are original; the drug-card mechanism/adverse fields beyond the
// printed lists are KYP context, marked as such.

export const pupilSizeCyp450: KypUsMLENote = {
  id: "pupil-size-cyp450",
  title:
    "Drugs Affecting Pupil Size, CYP-450 Interactions, and the Sulfa Family",
  subtitle:
    "One First Aid page, three memorized clusters, one autonomic logic. The pupil is the body's most readable autonomic gauge: two muscles aim it — the radial dilator (α1, sympathetic) and the sphincter constrictor (M3, parasympathetic) — so every drug on the mydriasis list either DRIVES the radial pull (direct and indirect sympathomimetics: amphetamines, cocaine, LSD) or RELEASES the sphincter (the anticholinergics: atropine, TCAs, tropicamide, scopolamine, antihistamines — plus meperidine, the one opioid that dilates), and every drug on the miosis list either DRIVES the sphincter (parasympathomimetics like pilocarpine, organophosphates), RESTS the radial pull (sympatholytic α2-agonists), or pinpoints through the opioid receptor (all opioids — except meperidine). The same page then installs the pharmacokinetic interaction engine: cytochrome P-450, with NINE inducers (St. John's wort through chronic alcohol overuse — more enzyme, less drug, therapeutic failure) and FOURTEEN inhibitors (sodium valproate through grapefruit juice — less enzyme, more drug, toxicity) bracketing the four substrates whose levels swing (theophylline, OCPs, anti-epileptics, warfarin — 'The OCPs are anti-war'), and the alcohol two-direction quirk: chronic overuse induces, acute overuse inhibits. The bottom block closes with the cross-reactivity cluster — eight sulfa drugs across seven classes ('Scary Sulfa Pharm FACTS', First Aid's own red margin mnemonic) and the nine-reaction allergy list from fever and UTI symptoms to SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 251–251 (Pharmacology — Toxicities and Adverse Effects: Drugs affecting pupil size; Cytochrome P-450 interactions (selected); Sulfa drugs; …)",
  tags: [
    "pupil size",
    "mydriasis",
    "miosis",
    "iris",
    "radial muscle",
    "sphincter muscle",
    "anticholinergics",
    "atropine",
    "TCAs",
    "tropicamide",
    "scopolamine",
    "antihistamines",
    "sympathomimetics",
    "amphetamines",
    "cocaine",
    "meperidine",
    "opioids",
    "sympatholytics",
    "alpha-2 agonists",
    "pilocarpine",
    "organophosphates",
    "cytochrome P-450",
    "CYP inducers",
    "CYP inhibitors",
    "rifampin",
    "St. John's wort",
    "carbamazepine",
    "cimetidine",
    "ketoconazole",
    "erythromycin",
    "grapefruit juice",
    "theophylline",
    "oral contraceptive pills",
    "warfarin interactions",
    "sulfa drugs",
    "sulfonamides",
    "sulfasalazine",
    "probenecid",
    "furosemide",
    "acetazolamide",
    "celecoxib",
    "thiazides",
    "sulfonylureas",
    "Stevens-Johnson syndrome",
    "sulfa allergy",
  ],
  core: {
    what:
      "Three printed blocks, carried whole. (1) DRUGS AFFECTING PUPIL SIZE — two columns. ↑ pupil size (mydriasis): Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) · Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine · Direct sympathomimetics. ↓ pupil size (miosis): Sympatholytics (eg, α2-agonists) · Opioids (except meperidine) · Parasympathomimetics (eg, pilocarpine), organophosphates. The block's figure pairs two irises: the dilated pupil drawn with radial muscle fibers, labeled 'Radial muscle contraction (α1 receptor mediated)', and the constricted pupil drawn with concentric sphincter rings, labeled 'Sphincter muscle contraction (M3 receptor mediated)'. (2) CYTOCHROME P-450 INTERACTIONS (SELECTED) — three columns. Inducers (+): St. John's wort, Phenytoin, Phenobarbital, Modafinil, Nevirapine, Rifampin, Griseofulvin, Carbamazepine, Chronic alcohol overuse. Substrates: Theophylline, OCPs, Anti-epileptics, Warfarin. Inhibitors (–): Sodium valproate, Isoniazid, Cimetidine, Ketoconazole, Fluconazole, Acute alcohol overuse, Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides, Ciprofloxacin, Omeprazole, Amiodarone, Ritonavir, Grapefruit juice. The table prints its three mnemonics in a bottom row, in red: 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' (inducers), 'The OCPs are anti-war' (substrates), and 'SICK FACES come when I am really drinking grapefruit juice' (inhibitors). (3) SULFA DRUGS — 'Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. Patients with sulfa allergies may develop fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity.' — with First Aid's own margin mnemonic in red: 'Scary Sulfa Pharm FACTS' (the initials of the eight drugs in list order: S-S-P-F-A-C-T-S).",
    why:
      "This page is the exam's autonomic-collateral trilogy. The pupil block works because pupil size is a direct read-out of the sympathetic/parasympathetic balance on two iris muscles: anything that drives α1 (the sympathomimetics) or silences M3 (the anticholinergics) dilates; anything that drives M3 (the cholinomimetics and organophosphates), silences sympathetic outflow (the α2-agonist sympatholytics), or acts on the opioid system (every opioid except meperidine) constricts — so a single observed pupil converts into a whole drug-class answer, and the page's one deliberate exception (meperidine, printed on BOTH sides of the divide) is the kind of edge the exam quotes verbatim. The CYP-450 block works because it is the pharmacokinetic interaction engine in one table: the four named substrates (theophylline, OCPs, anti-epileptics, warfarin) are the drugs whose levels actually swing in stems, the nine inducers predict therapeutic FAILURE (more enzyme → less drug: subtherapeutic INR, OCP failure, breakthrough seizures), the fourteen inhibitors predict TOXICITY (less enzyme → more drug: supratherapeutic INR and bleeding, theophylline arrhythmias) — and alcohol prints in BOTH columns, chronic overuse inducing and acute overuse inhibiting, the single most quotable two-direction fact in pharmacokinetics. The sulfa block works because it converts 'sulfa allergy' from one antibiotic class into a FAMILY of eight drugs across seven classes — the antibiotic, the IBD agent (sulfasalazine), the uricosuric (probenecid), three diuretics (furosemide, acetazolamide, thiazides), the COX-2 inhibitor (celecoxib), and the hypoglycemics (sulfonylureas) — any of which can trigger any of the nine listed reactions, from fever and UTI symptoms to SJS and the three cytopenias.",
    keyIdea:
      "KYP protocol — read the page's three clusters through three direction rules. MOVE 1 — READ THE PUPIL THROUGH THE TWO PULLS: name the muscle. Dilation means the radial pull (α1) won — either driven directly (direct sympathomimetics; indirect ones — amphetamines, cocaine, LSD — flood the synapse with norepinephrine) — or left unopposed because the sphincter's M3 drive was blocked (anticholinergics: atropine, TCAs, tropicamide, scopolamine, antihistamines; and meperidine, the atropine-like opioid). Constriction means the sphincter pull (M3) won — driven by cholinomimetics (pilocarpine) or the organophosphate acetylcholine flood — or the radial pull was withdrawn (sympatholytic α2-agonists) or the opioid system pinpointed (all opioids EXCEPT meperidine). MOVE 2 — FILE EVERY CYP INTERACTION BY DIRECTION: an inducer is MORE ENZYME = LESS DRUG = therapeutic failure; an inhibitor is LESS ENZYME = MORE DRUG = toxicity. MOVE 3 — NAME THE SUBSTRATE AND PREDICT THE PRESENTATION: warfarin → the INR moves (down on an inducer, up on an inhibitor), theophylline → loss of control vs nausea/arrhythmia, OCPs → breakthrough bleeding/ovulation, anti-epileptics → seizures. MOVE 4 — TREAT SULFA AS A FAMILY, NOT A DRUG: the eight drugs share the sulfonamide moiety and the nine-reaction allergy list — so any new prescription in a sulfa-allergic patient gets checked against S-S-P-F-A-C-T-S. Two pulls, one enzyme dial, one family — the whole page in three rules.",
  },
  mechanisms: [
    {
      id: "pupil-autonomic-pull-map",
      title:
        "The iris two-pull system: radial muscle (α1) vs sphincter muscle (M3) — every pupil drug docks to one side",
      context: "The printed Drugs affecting pupil size block (book 251)",
      flow: {
        nodes: [
          {
            id: "agent",
            label:
              "THE AGENT'S AUTONOMIC DIRECTION — what the vignette's drug does to the balance",
            sublabel:
              "Input — the pupil is where sympathetic and parasympathetic tone meet a visible target: the iris. A drug changes pupil size only by moving one of two muscles, directly or indirectly — so the observed pupil (pinpoint vs blown) is a physical read-out of the drug's autonomic direction, which is why toxicology, autonomic pharmacology, and ophthalmology exams all converge on this block.",
            variant: "input",
          },
          {
            id: "dilate",
            label:
              "PULL 1 — THE RADIAL (DILATOR) MUSCLE WINS: ↑ pupil size (mydriasis)",
            sublabel:
              "Target — 'Radial muscle contraction (α1 receptor mediated)' (the printed figure label). Two roads to the same blown pupil: DRIVE α1 — direct sympathomimetics contract the radial muscle themselves, and indirect sympathomimetics (eg, amphetamines, cocaine, LSD) make the synapse's own norepinephrine do it; or RELEASE THE SPHINCTER — anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) block M3 so the sphincter relaxes and the radial tone is unopposed. Meperidine joins this column by its atropine-like action — the printed comma joins it to the indirect sympathomimetics entry ('…cocaine, LSD), meperidine').",
            variant: "target",
          },
          {
            id: "constrict",
            label:
              "PULL 2 — THE SPHINCTER (CONSTRICTOR) MUSCLE WINS: ↓ pupil size (miosis)",
            sublabel:
              "Target — 'Sphincter muscle contraction (M3 receptor mediated)' (the printed figure label). Three roads to the pinpoint pupil: DRIVE M3 — parasympathomimetics (eg, pilocarpine) stimulate the sphincter directly, and organophosphates flood the synapse with acetylcholine (irreversible AChE inhibition); WITHDRAW THE RADIAL PULL — sympatholytics (eg, α2-agonists) cut central sympathetic outflow so the radial muscle rests; or ACT ON THE OPIOID SYSTEM — opioids (except meperidine) pinpoint centrally.",
            variant: "target",
          },
          {
            id: "exception",
            label:
              "THE PRINTED EXCEPTION — meperidine, the opioid that dilates",
            sublabel:
              "Process — meperidine is the page's one deliberate edge case, printed on BOTH sides of the divide: joined into the mydriasis column (after the indirect sympathomimetics) and carved out of the miosis column ('Opioids (except meperidine)'). The exam reads this as: every opioid pinpoints the pupil — except the one with atropine-like activity.",
            variant: "process",
          },
          {
            id: "rule",
            label:
              "THE READING RULE: name which muscle is being driven or released",
            sublabel:
              "Output — a dilated pupil means α1 won (driven or unopposed); a constricted pupil means M3 won (driven) or α1 withdrew (sympatholysis) or the opioid system is engaged. The two-pull rule converts any pupil observation into a drug-class answer — and any drug name into a pupil prediction.",
            variant: "output",
          },
        ],
        edges: [
          { from: "agent", to: "dilate", label: "α1 driven or M3 blocked →" },
          { from: "agent", to: "constrict", label: "M3 driven, α1 withdrawn, or opioid →" },
          { from: "dilate", to: "exception", label: "the anticholinergic road explains meperidine" },
          { from: "constrict", to: "exception", label: "meperidine carved out of opioid miosis" },
          { from: "exception", to: "rule", label: "the exception proves the two-pull logic" },
        ],
      },
    },
    {
      id: "cyp450-induction-inhibition-map",
      title:
        "The enzyme-amplitude model: inducers turn the CYP-450 volume up, inhibitors mute it — and the substrate feels the difference",
      context:
        "The printed Cytochrome P-450 interactions (selected) table (book 251)",
      flow: {
        nodes: [
          {
            id: "enzyme",
            label:
              "THE CYP-450 FAMILY — the phase I workhorse and the four swinging substrates",
            sublabel:
              "Input — the hepatic and intestinal cytochrome P-450 monooxygenases clear most drugs, and the page names the four whose levels swing hard enough to build exam stems around: Theophylline, OCPs, Anti-epileptics, Warfarin ('The OCPs are anti-war' — First Aid's own mnemonic, printed in the table). Anything that changes the ENZYME amount or activity changes the SUBSTRATE level in the opposite direction.",
            variant: "input",
          },
          {
            id: "induce",
            label:
              "INDUCTION (+) — MORE ENZYME = LESS DRUG: therapeutic failure",
            sublabel:
              "Process — the nine printed inducers (St. John's wort, Phenytoin, Phenobarbital, Modafinil, Nevirapine, Rifampin, Griseofulvin, Carbamazepine, Chronic alcohol overuse — 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol') raise enzyme synthesis: substrate metabolism accelerates, levels FALL, and the presentations are failures — subtherapeutic INR on warfarin, breakthrough bleeding/ovulation on OCPs, seizures on lowered anti-epileptic levels, loss of theophylline control.",
            variant: "process",
          },
          {
            id: "inhibit",
            label:
              "INHIBITION (–) — LESS ENZYME = MORE DRUG: toxicity",
            sublabel:
              "Process — the fourteen printed inhibitors (Sodium valproate, Isoniazid, Cimetidine, Ketoconazole, Fluconazole, Acute alcohol overuse, Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides, Ciprofloxacin, Omeprazole, Amiodarone, Ritonavir, Grapefruit juice — 'SICK FACES come when I am really drinking grapefruit juice') cut enzyme activity: substrate metabolism slows, levels RISE, and the presentations are toxicities — supratherapeutic INR and bleeding on warfarin, nausea/arrhythmia on theophylline.",
            variant: "process",
          },
          {
            id: "alcohol",
            label:
              "THE ALCOHOL TWO-DIRECTION QUIRK — chronic induces, acute inhibits",
            sublabel:
              "Process — alcohol prints in BOTH columns: 'Chronic alcohol overuse' under Inducers (+) (the drinking liver makes MORE enzyme) and 'Acute alcohol overuse' under Inhibitors (–) (the acutely intoxicated liver has less capacity). The same agent, two directions, two different interaction phenotypes — the page's most quotable pharmacokinetic fact.",
            variant: "process",
          },
          {
            id: "rule",
            label:
              "THE READING RULE: direction first, then substrate, then presentation",
            sublabel:
              "Output — file every CYP interaction as induce-more-enzyme vs inhibit-less-enzyme BEFORE touching drug names: an inducer + warfarin/OCP/anti-epileptic/theophylline means the drug stops working; an inhibitor means the drug accumulates. Then name the substrate and predict the exact clinical consequence the stem will show.",
            variant: "output",
          },
        ],
        edges: [
          { from: "enzyme", to: "induce", label: "inducer raises enzyme synthesis →" },
          { from: "enzyme", to: "inhibit", label: "inhibitor blocks enzyme activity →" },
          { from: "induce", to: "alcohol", label: "chronic overuse lives here" },
          { from: "inhibit", to: "alcohol", label: "acute overuse lives here" },
          { from: "induce", to: "rule", label: "substrate falls → failure" },
          { from: "inhibit", to: "rule", label: "substrate rises → toxicity" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pupil-cyp-map",
      title:
        "The pupil–CYP–sulfa map: two iris pulls, one enzyme dial, one drug family (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 251's three blocks: the IRIS TWO-PULL panel (a dilated pupil drawn with radial muscle fibers docked by the mydriasis drug chips — anticholinergics, indirect sympathomimetics + meperidine, direct sympathomimetics — opposite a constricted pupil drawn with concentric sphincter rings docked by the miosis chips — sympatholytics, opioids except meperidine, parasympathomimetics + organophosphates — with the printed α1/M3 figure labels and the meperidine exception flagged on both sides); the CYP-450 ENZYME-AMPLITUDE panel (the four substrates in the middle, the nine inducers ramping enzyme up and substrate levels down = failure, the fourteen inhibitors blocking enzyme and stacking substrate up = toxicity, the chronic-vs-acute alcohol two-direction chip, and First Aid's own three table mnemonics carried attributed); and the SULFA FAMILY panel (the eight drugs with their S-S-P-F-A-C-T-S initials, the nine-reaction allergy cluster, and First Aid's own red margin mnemonic 'Scary Sulfa Pharm FACTS' carried attributed).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 273 — the page's visual assets are the two vector iris illustrations (the only figure on the page), the three-column color-coded CYP table (red column headers, red mnemonic letters), and the sulfa text block with its red drug initials and red margin mnemonic; VLM-read at 120dpi (staging-ph26/vlm-census.txt). This diagram is an ORIGINAL KYP ADAPTATION — every drug entry, figure label, and mnemonic is preserved from the print, but the two-pull iris pairing, the enzyme-amplitude chart, the reaction cluster, and the panel layout are KYP's. All three blocks are additionally carried verbatim in the note's table/list blocks. First Aid's own mnemonics ('St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' · 'The OCPs are anti-war' · 'SICK FACES come when I am really drinking grapefruit juice' · 'Scary Sulfa Pharm FACTS') are carried ATTRIBUTED; the four ALL-CAPS codes in the Memory section are KYP originals.",
    },
    {
      kind: "table",
      title:
        "Book 251 — the printed Drugs affecting pupil size block, carried verbatim (both columns, PRINTED order)",
      intro:
        "The page's top block: a two-column layout under red headers, with the iris figure beneath (dilated pupil + radial fibers on the mydriasis side, constricted pupil + concentric sphincter rings on the miosis side — labels carried below). Rows are POSITIONAL, not mechanistic pairs: the print places the entries side by side in column order.",
      columns: ["↑ pupil size (mydriasis)", "↓ pupil size (miosis)"],
      rows: [
        [
          "Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines)",
          "Sympatholytics (eg, α2-agonists)",
        ],
        [
          "Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine",
          "Opioids (except meperidine)",
        ],
        ["Direct sympathomimetics", "Parasympathomimetics (eg, pilocarpine), organophosphates"],
      ],
      caption:
        "Verbatim carries, documented: meperidine prints JOINED BY COMMA to the indirect sympathomimetics entry — it is NOT a separate bullet (text layer + layout + VLM all agree; the batch brief's separate-item description is corrected to the print) — and it is simultaneously carved out of the miosis column by the printed parenthetical '(except meperidine)', making it the page's only drug on both sides of the divide. The miosis column's third entry, 'Parasympathomimetics (eg, pilocarpine), organophosphates', also prints joined by comma across a line wrap ('Parasympathomimetics (eg, pilocarpine), / organophosphates'). The block's figure labels print once each beneath the irises: 'Radial muscle contraction (α1 receptor mediated)' (dilated pupil, radial fibers drawn) and 'Sphincter muscle contraction (M3 receptor mediated)' (constricted pupil, concentric rings drawn) — the cache text layer embeds each caption TWICE as interleaved duplicate spans (an extraction artifact; carried once here), and two small gray multimedia ebook icons sit beside the captions (digital-resource markers, not content). Column headers print in red; the block title prints as a blue sidebar label. Subscripts carry as plain digits per the text layer (α2-agonists, α1, M3).",
    },
    {
      kind: "compare",
      title:
        "The two pulls — the same muscle logic on both sides of the pupil table",
      intro:
        "KYP's re-reading of the printed columns by MUSCLE MECHANISM instead of position. Both columns are two muscles wide: whoever wins the iris, wins the pupil.",
      columns: [
        "DILATION — the radial (α1) pull wins",
        "CONSTRICTION — the sphincter (M3) pull wins",
      ],
      rows: [
        {
          label: "Drive the winner directly",
          a: "Direct sympathomimetics contract the radial muscle at α1; indirect sympathomimetics (eg, amphetamines, cocaine, LSD) push the synapse's own norepinephrine onto α1 — the radial fibers shorten, the pupil opens ('Radial muscle contraction (α1 receptor mediated)')",
          b: "Parasympathomimetics (eg, pilocarpine) stimulate the sphincter at M3, and organophosphates flood the synapse with acetylcholine (irreversible AChE inhibition) so the sphincter clamps — 'Sphincter muscle contraction (M3 receptor mediated)' — the pinpoint pupil of cholinergic excess",
        },
        {
          label: "Take the loser offline",
          a: "Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) block M3 on the sphincter — the constrictor relaxes, and resting radial tone dilates the pupil unopposed (the mydriasis of the anticholinergic toxidrome)",
          b: "Sympatholytics (eg, α2-agonists) cut central sympathetic outflow — the radial muscle rests and the pupil constricts (the same presynaptic α2 logic that lowers blood pressure, read out at the iris)",
        },
        {
          label: "The non-autonomic roads",
          a: "Meperidine — the opioid with atropine-like activity — dilates: printed joined to the indirect sympathomimetics entry, the page's only mydriatic opioid",
          b: "Opioids (except meperidine) pinpoint through the opioid system itself — the central miosis of opioid overdose (respiratory depression + pinpoint pupils = the exam's shortest toxicology stem), with meperidine carved out in the printed parenthetical",
        },
      ],
    },
    {
      kind: "list",
      title:
        "Book 251 — the printed Cytochrome P-450 interactions (selected) table, carried verbatim (all three columns, PRINTED order)",
      intro:
        "The page's middle block: a three-column table under red headers — Inducers (+) / Substrates / Inhibitors (–) — with the mnemonic-relevant letters printing red inside the drug names, and the three mnemonics printing in red in a bottom row inside the table (First Aid's own, carried attributed here).",
      items: [
        {
          lead: "Inducers (+)",
          text: "St. John's wort · Phenytoin · Phenobarbital · Modafinil · Nevirapine · Rifampin · Griseofulvin · Carbamazepine · Chronic alcohol overuse. — the table's own red mnemonic: 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' (the print wraps it as '(phen-' / 'phen)'; the cache text layer merges it as '(phenphen)' — the printed hyphen restored here). Inducers = MORE ENZYME = LESS DRUG: every one of the nine predicts therapeutic failure of the substrates.",
        },
        {
          lead: "Substrates",
          text: "Theophylline · OCPs · Anti-epileptics · Warfarin. — the table's own red mnemonic: 'The OCPs are anti-war' (The-ophylline, OCPs, Anti-epileptics, War-farin). These are the four drugs whose levels swing when the enzyme dial moves — the INR (warfarin), theophylline levels, contraceptive efficacy, and seizure control are the clinical gauges.",
        },
        {
          lead: "Inhibitors (–)",
          text: "Sodium valproate · Isoniazid · Cimetidine · Ketoconazole · Fluconazole · Acute alcohol overuse · Chloramphenicol · Erythromycin/clarithromycin · Sulfonamides · Ciprofloxacin · Omeprazole · Amiodarone · Ritonavir · Grapefruit juice. — the table's own red mnemonic: 'SICK FACES come when I am really drinking grapefruit juice' — SICK FACES covers the first nine (Sodium valproate, Isoniazid, Cimetidine, Ketoconazole, Fluconazole, Acute alcohol overuse, Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides) and the sentence tail carries the rest (Ciprofloxacin, Omeprazole, Amiodarone, Ritonavir, Grapefruit juice — the red capitals C/O/Am/R/grapefruit juice per the census). Inhibitors = LESS ENZYME = MORE DRUG: every one of the fourteen predicts substrate toxicity.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any CYP interaction question in four moves",
      intro:
        "The whole three-column table distilled into an ordered decision path — DIRECTION, SUBSTRATE, PRESENTATION, AGENT.",
      steps: [
        {
          label: "MOVE 1 — NAME THE DIRECTION: induce or inhibit?",
          detail:
            "Spot the new agent in the stem and file it: the nine inducers (St. John's wort, phenytoin, phenobarbital, modafinil, nevirapine, rifampin, griseofulvin, carbamazepine, CHRONIC alcohol overuse) vs the fourteen inhibitors (sodium valproate, isoniazid, cimetidine, ketoconazole, fluconazole, ACUTE alcohol overuse, chloramphenicol, erythromycin/clarithromycin, sulfonamides, ciprofloxacin, omeprazole, amiodarone, ritonavir, grapefruit juice). Beware the two disguised agents: the 'natural' supplement (St. John's wort — an inducer) and the food (grapefruit juice — an inhibitor).",
        },
        {
          label: "MOVE 2 — NAME THE SUBSTRATE: one of the four",
          detail:
            "The interaction only becomes a stem through its substrate: warfarin (the INR moves), theophylline (levels and toxicity), OCPs (efficacy fails), anti-epileptics (levels fall, seizures return). If the stem's patient is on one of these four, the CYP table is the answer key.",
        },
        {
          label: "MOVE 3 — PREDICT THE PRESENTATION: failure or toxicity",
          detail:
            "Inducer + substrate = LESS drug: subtherapeutic INR (thrombosis/embolism on warfarin), breakthrough bleeding or ovulation on OCPs, breakthrough seizures, loss of theophylline control. Inhibitor + substrate = MORE drug: supratherapeutic INR with bleeding or bruising, theophylline toxicity (nausea, vomiting, arrhythmias), anti-epileptic toxicity (ataxia, nystagmus, sedation).",
        },
        {
          label: "MOVE 4 — NAME THE AGENT AND ITS DIRECTION QUIRKS",
          detail:
            "Alcohol is the two-direction trap: chronic overuse INDUCES (the drinking liver builds enzyme), acute overuse INHIBITS (the acutely intoxicated liver has no capacity). Rifampin (TB therapy, leprosy) is the classic inducer to spot in a stem; cimetidine, the macrolides, the azoles, and grapefruit juice are the classic inhibitors — and sulfonamide antibiotics appear here as inhibitors AND in the bottom block as the allergy family: one drug, two rows, two exam questions.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The INR is the exam's favorite gauge — and the alcohol is its favorite trap",
      body:
        "The four printed substrates are ranked by testability: warfarin first (an inducer like rifampin, phenytoin, carbamazepine, or St. John's wort drops the INR toward thrombosis; an inhibitor like sulfonamides, cimetidine, fluconazole, or amiodarone pushes it toward bleeding), then theophylline (erythromycin/clarithromycin and ciprofloxacin classically spike its levels — nausea, vomiting, arrhythmias), then the OCPs (rifampin and other inducers cause contraceptive failure — the classic 'breakthrough bleeding on TB therapy' stem), then the anti-epileptics (an inducer added for a different seizure drug lowers levels; note the double role — phenytoin, phenobarbital, and carbamazepine are BOTH anti-epileptic substrates AND inducers of everything else, including each other). The alcohol rule is quoted verbatim from the table: chronic overuse sits under Inducers (+), acute overuse under Inhibitors (–) — the same agent in both columns, direction set by pattern of use. And grapefruit juice (intestinal CYP inhibition) is the one 'agent' that is a food — the exam's reminder that the interaction list includes breakfast.",
    },
    {
      kind: "list",
      title:
        "Book 251 — the printed Sulfa drugs block, carried verbatim (drug list + reaction sentence + margin mnemonic)",
      intro:
        "The page's bottom block: a text block under a blue sidebar label, the eight drug names printing with red initial capitals (S-S-P-F-A-C-T-S in list order), followed by the adverse-reaction sentence — and First Aid's own mnemonic printing in red in the right margin.",
      items: [
        {
          lead: "The eight sulfa drugs (printed order, initials S-S-P-F-A-C-T-S)",
          text: "Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. — one family across seven classes: the antibiotic, the IBD agent, the uricosuric, three diuretics (loop, carbonic anhydrase, thiazide), the COX-2 inhibitor, and the oral hypoglycemics.",
        },
        {
          lead: "The adverse-reaction sentence (verbatim)",
          text: "Patients with sulfa allergies may develop fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity. — nine reactions: the fever/UTI symptoms, the dermatologic emergencies (SJS, urticaria/hives, photosensitivity), the three cytopenias (hemolytic anemia, thrombocytopenia, agranulocytosis), and the kidney's allergic interstitial nephritis.",
        },
        {
          lead: "The margin mnemonic (First Aid's own, printed in red in the right margin)",
          text: "Scary Sulfa Pharm FACTS — the initials of the eight drugs in printed list order: Scary/Sulfa = Sulfonamide antibiotics + Sulfasalazine (the two S's), Pharm = Probenecid, FACTS = Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. Carried ATTRIBUTED (this is the source's own mnemonic, not a KYP code); it is the page's only margin printing.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "clinical",
      title:
        "Sulfa is a family, not a drug — the cross-reactivity check before every new prescription",
      body:
        "The clinical operation of the bottom block: a documented sulfa allergy does not end at 'avoid sulfamethoxazole' — it extends to the whole S-S-P-F-A-C-T-S list, because the reactions are directed at the shared sulfonamide moiety. The reactions to counsel on are the printed nine: fever, UTI symptoms, SJS (the severe cutaneous adverse reaction — stop the drug, hospitalize), hemolytic anemia, thrombocytopenia, agranulocytosis (the three cytopenias — check counts), acute interstitial nephritis (fever + rash + eosinophiluria + creatinine rise after a new drug), urticaria (hives), and photosensitivity (sun counseling). The class-crossing is what the exam tests: the diuretics (furosemide, acetazolamide, thiazides), celecoxib, and the sulfonylureas are not antibiotics — they are sulfa-family drugs, so the allergy history must reach them across their own indications (heart failure, glaucoma, hypertension/arthritis, diabetes).",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red text — the mnemonic layer printed on the page",
      body:
        "This page prints its mnemonics in TWO places (attributed here, verbatim — these are the source's hooks, not KYP's; the four ALL-CAPS codes in the Memory section are KYP originals): INSIDE THE CYP TABLE, in a red bottom row — 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' for the nine inducers (St. John's wort; (phen-phen) = Phenytoin + Phenobarbital; mom = Modafinil; never = Nevirapine; refuses = Rifampin; greasy = Griseofulvin; carbs = Carbamazepine; chronic alcohol = Chronic alcohol overuse — with 'funny funny' the sentence's own hook, printed as shown), 'The OCPs are anti-war' for the four substrates (The-ophylline, OCPs, Anti-epileptics, War-farin), and 'SICK FACES come when I am really drinking grapefruit juice' for the fourteen inhibitors; and IN THE RIGHT MARGIN, in red — 'Scary Sulfa Pharm FACTS' for the eight sulfa drugs. The mnemonic-relevant letters also print red inside the drug names themselves (St, Ph, Ph, M, N, R, Gr, Ca, Chronic alcohol; The, OCPs, A, War; S, I, C, K, F, A, C, E, S, C, O, Am, R, grapefruit juice), and the sulfa drug initials print red (S-S-P-F-A-C-T-S). No other mnemonics, images, or margin notes print anywhere on the page (VLM-confirmed).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Respiratory depression with PINPOINT pupils, ± track marks or a found pill bottle; sometimes naloxone given en route",
        discriminator: "Miosis + opioid context — the printed miosis column's second entry",
        concept: "Opioids constrict the pupil through the opioid system — with the one printed exception",
        answer: "Opioids (except meperidine) — miosis; read the two pulls: the opioid road, not the cholinergic road (no secretions, no bronchorrhea)",
      },
      {
        stem: "Delirium with DILATED pupils, dry flushed skin, urinary retention, tachycardia, hyperthermia — after TCAs, antihistamines, scopolamine, or atropine-containing exposure",
        discriminator: "Mydriasis + the dry/hot/flushed anticholinergic picture",
        concept: "M3 blockade releases the sphincter muscle — the radial pull dilates unopposed",
        answer: "Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) — the mydriasis column's first entry",
      },
      {
        stem: "A stable warfarin/OCP/theophylline/anti-epileptic patient starts rifampin (TB therapy), phenytoin, carbamazepine, or a St. John's wort supplement — then the drug STOPS working (INR falls, breakthrough bleeding on the OCP, seizure, asthma flare)",
        discriminator: "New agent from the inducers column + therapeutic failure of a substrate",
        concept: "Induction = MORE ENZYME = LESS DRUG",
        answer: "CYP-450 induction — the nine inducers (chronic alcohol overuse included); predict the failure, name the agent",
      },
      {
        stem: "The same substrates started on cimetidine, erythromycin/clarithromycin, ketoconazole/fluconazole, amiodarone, ritonavir, or grapefruit juice — then the drug accumulates (INR rises with bruising, theophylline nausea/arrhythmias)",
        discriminator: "New agent from the inhibitors column + substrate toxicity",
        concept: "Inhibition = LESS ENZYME = MORE DRUG",
        answer: "CYP-450 inhibition — the fourteen inhibitors (acute alcohol overuse included); predict the toxicity, name the agent",
      },
    ],
    traps: [
      {
        a: "Meperidine",
        b: "Every other opioid",
        whyConfused: "Both are opioids and both appear on the pupil page — but on OPPOSITE sides of the divide",
        keyDifference: "Meperidine dilates (atropine-like activity — printed joined to the indirect sympathomimetics entry); all other opioids pinpoint ('Opioids (except meperidine)')",
        clue: "An intoxicated patient with dilated pupils whose urine tox screen is positive for opioids — or any distractor assuming all opioids constrict",
      },
      {
        a: "Chronic alcohol overuse (inducer)",
        b: "Acute alcohol overuse (inhibitor)",
        whyConfused: "The SAME agent prints in BOTH CYP columns — direction set by the pattern of use",
        keyDifference: "Chronic: the liver has built MORE enzyme → substrates fail; acute: the intoxicated liver has LESS capacity → substrates accumulate",
        clue: "The stem's drinking history decides the direction — 'a daily drinker for years' vs 'found acutely intoxicated'",
      },
      {
        a: "Grapefruit juice (inhibitor)",
        b: "St. John's wort (inducer)",
        whyConfused: "The two non-drug agents on the CYP table — a food and a 'natural' supplement, both easy to dismiss",
        keyDifference: "Grapefruit juice inhibits intestinal CYP → substrate toxicity; St. John's wort induces → therapeutic failure (and it is the classic hidden cause of OCP failure)",
        clue: "The breakfast-juice or the supplement line buried in the medication history",
      },
      {
        a: "Sulfonamide antibiotics",
        b: "The non-antibiotic sulfa drugs (sulfasalazine, probenecid, furosemide, acetazolamide, celecoxib, thiazides, sulfonylureas)",
        whyConfused: "'Sulfa allergy' sounds like one antibiotic class — but the printed family spans seven classes",
        keyDifference: "All eight share the sulfonamide moiety and the nine-reaction list — the allergy crosses indications (heart failure, glaucoma, hypertension, arthritis, diabetes, gout, IBD)",
        clue: "A sulfa-allergic patient prescribed furosemide, celecoxib, or glyburide — or any question asking which drug list is safe",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any pupil observation (pinpoint vs dilated) or any drug asked to predict a pupil",
        differentiator:
          "Route through the two muscles: dilation = α1 radial pull won (direct/indirect sympathomimetics) or M3 sphincter was blocked (anticholinergics; meperidine); constriction = M3 sphincter driven (pilocarpine, organophosphates), α1 withdrawn (α2-agonist sympatholytics), or opioid-system miosis (all opioids except meperidine)",
        correctPath:
          "Name the muscle first, then the drug class — the two-pull rule converts the observation into the answer without memorizing the lists cold.",
      },
      {
        lookAlike:
          "A drug-interaction stem on warfarin, theophylline, OCPs, or anti-epileptics with a newly added agent",
        differentiator:
          "Direction first: inducer (more enzyme, less drug → failure) vs inhibitor (less enzyme, more drug → toxicity) — then the substrate names the gauge (INR, theophylline level, contraceptive efficacy, seizure control)",
        correctPath:
          "File the new agent as INDUCE or INHIBIT before reading the outcome — the direction rule predicts the stem's endpoint every time.",
      },
      {
        lookAlike:
          "A sulfa-allergic patient facing a new prescription — or a reaction-to-drug question listing fever, rash, cytopenias, or nephritis",
        differentiator:
          "Treat sulfa as a family: the eight S-S-P-F-A-C-T-S drugs (not just the antibiotic), and the nine printed reactions (fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria/hives, photosensitivity)",
        correctPath:
          "Check the new drug against the family list — class-crossing is the point of the block (diuretics, celecoxib, sulfonylureas all count).",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old woman with a mechanical mitral valve has been anticoagulated with warfarin for six years, her INR stable between 2.5 and 3.0 at every monthly check. She is prescribed trimethoprim-sulfamethoxazole for a first urinary tract infection. Five days later she returns with gum bleeding and large ecchymoses on both forearms; her INR is 9.4. She drinks one glass of wine with dinner and takes no supplements. Which mechanism best explains her supratherapeutic INR?",
      question:
        "Choose the option that correctly names the mechanism — and the direction it moves the warfarin.",
      options: [
        {
          label:
            "The sulfonamide inhibits hepatic cytochrome P-450, slowing warfarin metabolism — less enzyme, more drug, INR rises",
          text: "Two printed rows interacting: warfarin (substrate) + sulfonamides (inhibitor).",
          correct: true,
          why:
            "Correct on both rows. The CYP table prints warfarin among the four substrates and sulfonamides among the fourteen inhibitors — LESS ENZYME = MORE DRUG. Trimethoprim-sulfamethoxazole shuts down the oxidative clearance of warfarin's active enantiomers; the warfarin level climbs over days (exactly the five-day lag in the stem), and the INR follows it to 9.4 with the bleeding and bruising the stem shows. The page's bottom block adds the second exam question hiding in the same prescription: had she been sulfa-allergic, the same drug could have triggered any of the nine printed reactions — but this stem's gauge is the INR, and the inhibitors column answers it.",
        },
        {
          label:
            "The sulfonamide induces cytochrome P-450, accelerating warfarin metabolism — the INR change reflects enzyme induction",
          text: "The classic direction inversion.",
          why:
            "Wrong direction — and the stem's numbers prove it. Induction is MORE ENZYME = LESS DRUG: rifampin, phenytoin, phenobarbital, carbamazepine, St. John's wort, and CHRONIC alcohol overuse sit in the (+) column and produce SUBtherapeutic INRs — clot risk, valve thrombosis, embolic stroke — not gum bleeding at INR 9.4. Sulfonamides print in the (–) column. The distractor tempts because 'antibiotics interact with warfarin through the liver' is half-remembered; the table's signs, not the drug's class, set the direction.",
        },
        {
          label:
            "Sulfonamide allergy — an IgE-mediated mast-cell reaction to the sulfonamide moiety caused the bleeding through a hypersensitivity mechanism",
          text: "The wrong page of the same prescription.",
          why:
            "Wrong block, wrong mechanism. The sulfa block's printed reactions are fever, UTI symptoms, SJS, the three cytopenias (hemolytic anemia, thrombocytopenia, agranulocytosis), acute interstitial nephritis, urticaria (hives), and photosensitivity — an allergic diathesis, not a coagulopathy with an isolated INR of 9.4 and no rash, fever, or eosinophilia. The distractor borrows the page's third block, but the stem's gauge is the INR: a warfarin-level story, not a hypersensitivity story. (Thrombocytopenia CAN cause bleeding — but the INR of 9.4 names warfarin excess, and nothing in the stem suggests platelet failure.)",
        },
        {
          label:
            "The antibiotic sterilized her gut flora, eliminating bacterial vitamin K synthesis and starving the coagulation factors of their cofactor",
          text: "A true-sounding pharmacokinetic story that is not the printed mechanism.",
          why:
            "The gut-flora argument is the classic distractor: broad-spectrum antibiotics CAN reduce bacterial vitamin K production and nudge the INR upward — but it is a slow, modest effect and it is not what this page's table prints for sulfonamides, whose warfarin interaction is CYP INHIBITION (the printed inhibitors column). The stem's magnitude and timing (INR 9.4 in five days on a stable baseline) is the signature of enzyme blockade, and the exam expects the table's mechanism. Route through the page: substrate (warfarin) + new agent (sulfonamide) → inhibitors column → INR rises.",
        },
      ],
      reasoning:
        "The stem is a pure CYP-direction question wearing a coagulation costume: a stable warfarin patient (the printed substrates column), a new sulfonamide (the printed inhibitors column), and a five-day climb to an INR of 9.4 with bleeding. The reading order is the page's own: name the substrate (warfarin), name the new agent (trimethoprim-sulfamethoxazole — sulfonamides), file the direction (inhibit: LESS ENZYME = MORE DRUG), and predict the presentation (supratherapeutic INR, bruising, bleeding) — option A. Option B inverts the direction (induction produces subtherapeutic INRs and thrombosis — the (+) column's phenotype); option C borrows the page's third block, the sulfa allergy family, whose nine printed reactions are hypersensitivity phenomena that neither raise the INR nor match this stem; option D reaches for the gut-flora/vitamin-K story, a real but minor and non-printed mechanism that cannot account for an INR of 9.4 on a five-day timeline — and the exam's answer key is the printed table: sulfonamides inhibit the enzyme that clears warfarin.",
    },
  },
  mnemonics: [
    {
      code: "RADIAL OPENS, SPHINCTER CLOSES",
      meaning:
        "The iris has exactly two muscles and two receptors: the RADIAL dilator contracts through α1 to OPEN the pupil ('Radial muscle contraction (α1 receptor mediated)' — the printed figure label), and the SPHINCTER constrictor contracts through M3 to CLOSE it ('Sphincter muscle contraction (M3 receptor mediated)'). Mydriasis = the radial pull won (α1 driven by direct/indirect sympathomimetics) or the sphincter was released (M3 blocked by anticholinergics); miosis = the sphincter was driven (pilocarpine, the organophosphate acetylcholine flood) or the radial pull withdrawn (α2-agonist sympatholysis) or the opioid system engaged.",
      memorizes:
        "The mechanism behind every entry in both printed pupil columns — which muscle each drug moves, and in which direction",
      whenToUse:
        "Any pupil observation in a vignette (pinpoint vs dilated), any drug asked to predict a pupil, and any distractor pairing a drug with the wrong pupil direction",
      clinical:
        "The two-pull rule reads the comatose patient's pupils in seconds: bilateral pinpoint → opioid (or cholinergic — the secretions separate them); bilateral dilation → anticholinergic or sympathomimetic (the dry vs wet skin separates those); and meperidine is the opioid that breaks the pinpoint rule.",
    },
    {
      code: "EVERY OPIOID PINPOINTS — EXCEPT MEPERIDINE",
      meaning:
        "The page's one deliberate exception, printed twice: meperidine sits in the mydriasis column (joined by comma to 'Indirect sympathomimetics (eg, amphetamines, cocaine, LSD)') and is carved out of the miosis column ('Opioids (except meperidine)'). Its atropine-like activity dilates the pupil that every other opioid constricts.",
      memorizes:
        "The meperidine exception on both sides of the pupil divide — and by extension, the whole opioid row of the pupil table",
      whenToUse:
        "Any opioid question that shows pupils (especially dilated pupils with an opioid on board), and any distractor claiming 'all opioids cause miosis'",
      clinical:
        "A toxicology stem with dilated pupils and a positive opioid screen points to meperidine (or meperidine-like anticholinergic coingestants) — the exam's favorite single-word exception on this page.",
    },
    {
      code: "MORE ENZYME, LESS DRUG",
      meaning:
        "The CYP direction rule: an INDUCER (St. John's wort, phenytoin, phenobarbital, modafinil, nevirapine, rifampin, griseofulvin, carbamazepine, chronic alcohol overuse) means more enzyme → the substrate (theophylline, OCPs, anti-epileptics, warfarin) falls → THERAPEUTIC FAILURE; an INHIBITOR (SICK FACES + ciprofloxacin, omeprazole, amiodarone, ritonavir, grapefruit juice — plus acute alcohol overuse) means less enzyme → the substrate rises → TOXICITY. The alcohol clause: CHRONIC induces, ACUTE inhibits.",
      memorizes:
        "The direction of every one of the 23 printed CYP agents — which column means failure and which means toxicity, without memorizing each pair",
      whenToUse:
        "Any drug-interaction stem on warfarin, theophylline, OCPs, or anti-epileptics — read the new agent's direction first, then predict the INR/level/efficacy/seizure outcome",
      clinical:
        "The four gauges: INR (warfarin — up on inhibitors, down on inducers), theophylline level (toxicity on erythromycin/ciprofloxacin), contraceptive efficacy (failure on rifampin/St. John's wort), seizure control (loss on inducers; the anti-epileptics phenytoin/phenobarbital/carbamazepine are themselves inducers of everything else).",
    },
    {
      code: "SULFA IS A FAMILY, NOT A DRUG",
      meaning:
        "Eight drugs across seven classes share the sulfonamide moiety and the allergy: 1 antibiotic (sulfonamide antibiotics) + 1 IBD agent (sulfasalazine) + 1 uricosuric (probenecid) + 3 diuretics (furosemide the loop, acetazolamide the carbonic anhydrase inhibitor, thiazides) + 1 COX-2 inhibitor (celecoxib) + 1 oral hypoglycemic group (sulfonylureas) — the printed initials S-S-P-F-A-C-T-S, 'Scary Sulfa Pharm FACTS' in First Aid's own red margin. The reaction list is equally one family: fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), photosensitivity.",
      memorizes:
        "The eight-drug cross-reactivity cluster AND the nine-reaction allergy list — the whole bottom block in one code",
      whenToUse:
        "Any sulfa-allergic patient facing a new prescription (check the class-crossers: the diuretics, celecoxib, the sulfonylureas), and any reaction-to-drug stem featuring SJS, cytopenias, interstitial nephritis, or photosensitivity",
      clinical:
        "The history question that matters: 'sulfa allergy' must be asked before prescribing furosemide for heart failure, celecoxib for arthritis, a thiazide for hypertension, glyburide for diabetes, acetazolamide for glaucoma, probenecid for gout, or sulfasalazine for IBD — not just TMP-SMX for infections.",
    },
  ],
  rapidReview: {
    s30: [
      "↑ pupil size (mydriasis): Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) · Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine · Direct sympathomimetics",
      "↓ pupil size (miosis): Sympatholytics (eg, α2-agonists) · Opioids (except meperidine) · Parasympathomimetics (eg, pilocarpine), organophosphates",
      "The iris figure: dilated pupil ← Radial muscle contraction (α1 receptor mediated); constricted pupil ← Sphincter muscle contraction (M3 receptor mediated)",
      "CYP-450 inducers (+): St. John's wort · Phenytoin · Phenobarbital · Modafinil · Nevirapine · Rifampin · Griseofulvin · Carbamazepine · Chronic alcohol overuse",
      "CYP-450 substrates: Theophylline · OCPs · Anti-epileptics · Warfarin ('The OCPs are anti-war' — First Aid's own)",
      "CYP-450 inhibitors (–): Sodium valproate · Isoniazid · Cimetidine · Ketoconazole · Fluconazole · Acute alcohol overuse · Chloramphenicol · Erythromycin/clarithromycin · Sulfonamides · Ciprofloxacin · Omeprazole · Amiodarone · Ritonavir · Grapefruit juice ('SICK FACES come when I am really drinking grapefruit juice' — First Aid's own)",
      "Sulfa drugs: Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas — allergies: fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), photosensitivity ('Scary Sulfa Pharm FACTS' — First Aid's own red margin mnemonic)",
    ],
    m3: [
      "RADIAL OPENS, SPHINCTER CLOSES — α1 drives the radial dilator (mydriasis); M3 drives the sphincter constrictor (miosis); block the opponent's receptor and the same pupil results",
      "EVERY OPIOID PINPOINTS — EXCEPT MEPERIDINE — the atropine-like opioid, printed in the mydriasis column and carved out of 'Opioids (except meperidine)'",
      "MORE ENZYME, LESS DRUG — inducers (chronic alcohol) cause therapeutic failure; inhibitors (acute alcohol) cause toxicity; the four gauges are INR, theophylline, OCP efficacy, seizure control",
      "SULFA IS A FAMILY, NOT A DRUG — eight drugs (S-S-P-F-A-C-T-S), seven classes, nine reactions; the class-crossers (diuretics, celecoxib, sulfonylureas) are the exam's favorites",
    ],
    m10: [
      "The page carries THREE blocks under blue sidebar labels with RED column headers: the two-column pupil block with the iris figure (the only figure on the page — two vector irises, ZERO raster images per pdfimages), the three-column CYP table, and the sulfa text block",
      "Meperidine prints JOINED BY COMMA to the indirect-sympathomimetics entry ('Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine') — NOT a separate bullet; the batch brief's separate-item description is adjudicated to the print (text layer + layout + VLM agree), and it is simultaneously excluded from the miosis column by '(except meperidine)'",
      "The miosis column carries a THIRD entry the batch brief did not list — 'Parasympathomimetics (eg, pilocarpine), organophosphates' — carried here (the topic owns the whole page)",
      "The iris captions are embedded TWICE in the cache text layer as interleaved duplicate spans ('Radial muscle contraction (α1 receptor mediated)' × 2, 'Sphincter muscle contraction (M3 receptor mediated)' × 2); the print shows each once (VLM-confirmed) — carried once, duplication documented; two small gray multimedia ebook icons sit beside the captions (not content)",
      "The inducers mnemonic prints wrapping as '(phen-' / 'phen)' — the printed form '(phen-phen)'; the cache text layer merges it as '(phenphen)' (the printed hyphen is restored in this note; the gen-script evidence quotes the cache lines as-is). The VLM read the last sulfa drug as 'Sulfonureas' — adjudicated to the text layer's 'Sulfonylureas' (raw + layout layers agree). 'Scary Sulfa Pharm FACTS' prints IN RED IN THE RIGHT MARGIN (the page's only margin printing); the three CYP mnemonics print INSIDE the table in a red bottom row; the two pupil column headers carry \\x8f/\\x90 control-char prefixes in the text layer (stripped by norm()); 'SEC TION II' is the known header-space artifact; subscripts carry as plain digits (α2, α1, M3)",
    ],
  },
  recall: [
    {
      q: "The mydriasis column, verbatim — all three entries, in printed order.",
      a: "Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) · Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine · Direct sympathomimetics.",
    },
    {
      q: "The miosis column, verbatim — all three entries, in printed order.",
      a: "Sympatholytics (eg, α2-agonists) · Opioids (except meperidine) · Parasympathomimetics (eg, pilocarpine), organophosphates.",
    },
    {
      q: "Meperidine's double mention on the page — exactly where it prints on each side of the pupil divide.",
      a: "In the mydriasis column it prints JOINED BY COMMA to the indirect sympathomimetics entry ('Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine' — not a separate bullet); in the miosis column it is excluded by the parenthetical 'Opioids (except meperidine)' — the atropine-like opioid that dilates.",
    },
    {
      q: "The iris figure's two labels, verbatim — muscle, contraction, and receptor for each.",
      a: "Dilated pupil ← 'Radial muscle contraction (α1 receptor mediated)'; constricted pupil ← 'Sphincter muscle contraction (M3 receptor mediated)' — radial fibers drawn on the dilated iris, concentric sphincter rings on the constricted one.",
    },
    {
      q: "The nine CYP-450 inducers, verbatim — and First Aid's own mnemonic for them, attributed.",
      a: "St. John's wort · Phenytoin · Phenobarbital · Modafinil · Nevirapine · Rifampin · Griseofulvin · Carbamazepine · Chronic alcohol overuse — mnemonic (First Aid's own, printed in red inside the table): 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' (the print wraps it as '(phen-' / 'phen)').",
    },
    {
      q: "The four CYP-450 substrates, verbatim — and First Aid's own mnemonic, attributed.",
      a: "Theophylline · OCPs · Anti-epileptics · Warfarin — mnemonic (First Aid's own): 'The OCPs are anti-war' (The-ophylline, OCPs, Anti-epileptics, War-farin).",
    },
    {
      q: "The fourteen CYP-450 inhibitors, verbatim — and First Aid's own mnemonic, attributed.",
      a: "Sodium valproate · Isoniazid · Cimetidine · Ketoconazole · Fluconazole · Acute alcohol overuse · Chloramphenicol · Erythromycin/clarithromycin · Sulfonamides · Ciprofloxacin · Omeprazole · Amiodarone · Ritonavir · Grapefruit juice — mnemonic (First Aid's own): 'SICK FACES come when I am really drinking grapefruit juice' (SICK FACES = the first nine; the tail carries ciprofloxacin, omeprazole, amiodarone, ritonavir, grapefruit juice).",
    },
    {
      q: "The sulfa block, verbatim — the eight drugs and the nine-reaction sentence — plus First Aid's own margin mnemonic.",
      a: "Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. Patients with sulfa allergies may develop fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity. — 'Scary Sulfa Pharm FACTS' (First Aid's own, printed in red in the right margin; initials S-S-P-F-A-C-T-S in list order).",
    },
  ],
  related: [
    {
      title: "Muscarinic Antagonists",
      topicId: "muscarinic-antagonists",
      note:
        "The pharmacology behind the pupil block's first mydriasis entry: atropine, TCAs, tropicamide, scopolamine, and antihistamines all block M3 on the iris sphincter — the receptor-level mechanism this page prints only as a drug list, including why the same blockade produces the dry-hot-flushed toxidrome alongside the dilated pupil.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note:
        "The direct/indirect distinction the pupil block depends on: direct agents contract the radial muscle at α1 themselves, while the printed indirect ones (amphetamines, cocaine, LSD) work through norepinephrine release/reuptake blockade — the same synapse machinery this page reads out at the iris.",
    },
    {
      title: "Cholinomimetics",
      topicId: "cholinomimetics",
      note:
        "The miosis side's mechanism notes: pilocarpine drives the M3 sphincter directly, and organophosphates flood the synapse by irreversibly inhibiting acetylcholinesterase — the pupil table's cholinergic row is this note's pharmacology observed at the iris (and its overdose is the toxicity-treatments antidote row).",
    },
    {
      title: "Drug Metabolism",
      topicId: "drug-metabolism",
      note:
        "The enzyme system the CYP table presumes: phase I oxidation by the cytochrome P-450 superfamily — this page supplies the clinical interaction layer (inducers vs inhibitors vs the four swinging substrates) on top of that note's enzymology.",
    },
  ],
  crossLinks: [
    {
      subject: "Toxicology (the antidote table and the shared organophosphate)",
      connection:
        "The pupil block and the antidote table meet at two printed drugs: organophosphates — miosis here via irreversible AChE inhibition, and the 'AChE inhibitors, organophosphates → Atropine > pralidoxime' antidote row there (the cholinergic crisis's DUMBBELLS read-out includes the pinpoint pupil this page explains) — and atropine itself, the anticholinergic that dilates the pupil here and dries the secretions there. One patient, both pages: the farmworker's pinpoint pupils are this page's miosis entry and that page's antidote indication.",
    },
    {
      subject: "Immunology (hypersensitivity mechanisms behind the sulfa reactions)",
      connection:
        "The sulfa block's nine reactions are a hypersensitivity syllabus in one sentence: urticaria (hives) is the type I IgE-mast-cell reaction; SJS and acute interstitial nephritis are T cell-mediated (type IV) drug reactions; and the fever, cytopenias, and photosensitivity complete the drug-hypersensitivity spectrum — the immunology note supplies the mechanism classes this page prints as a list.",
    },
    {
      subject: "Hematology (drug-induced cytopenias)",
      connection:
        "Three of the nine sulfa reactions are hematologic — hemolytic anemia, thrombocytopenia, agranulocytosis — the same drug-induced cytopenia cluster the drug-reactions hematologic table catalogs across other culprit drugs; a sulfa exposure with falling counts routes to both pages.",
    },
    {
      subject: "Neurology / Ophthalmology (reading the pupils in the comatose patient)",
      connection:
        "The two-pull iris logic is the physiologic basis of the neuro exam's pupil readings: a single blown pupil raises uncal herniation compressing CN III (the parasympathetic fibers — the sphincter's drive withdrawn, mydriasis), bilateral pinpoint raises opioids, and the anticholinergic/sympathomimetic mydriases are the pharmacologic mimics the history must separate from the surgical ones.",
    },
  ],
};
