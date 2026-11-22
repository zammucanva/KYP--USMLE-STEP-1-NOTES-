/* Pharmacology — PH-batch 25: Drug reactions — neurologic (book 250,
 * pdf 272 — FULL page carrying FOUR tables). Census (pdfimages): ZERO
 * raster images; the page's visual assets are the four color-coded
 * DRUG REACTION / CAUSAL AGENTS / NOTES tables themselves (teal
 * reaction names, red mnemonic letters inside both the causal-agent
 * and notes cells — including the red capital P inside "rifamPin"),
 * VLM-read at 120dpi (staging-ph25/vlm-census.txt — VLM available
 * this session; one pass + deterministic raw-span adjudication), no
 * margin notes. This is an ORIGINAL KYP ADAPTATION: the nigrostriatal
 * dopamine fork (the shared culprits antipsychotics + metoclopramide
 * blocking D2, splitting into the acute down-state = Parkinson-like
 * syndrome and the chronic up-regulation overshoot = tardive
 * dyskinesia); the seizure-threshold and peripheral-axon panels; the
 * seven-row neurologic table strip in PRINTED order; and the
 * organ-system sweep strips (renal/genitourinary's four-row nephron-
 * and-bladder descent with the 5 P's and mesna, respiratory's
 * bradykinin-cough vs six-drug-fibrosis rows, and multiorgan's
 * receptor-block vs enzyme-block pair). First Aid's own red mnemonic
 * lines are carried ATTRIBUTED ("Cis, it's very painful peripherally"
 * · "Crime and debt Always grow head tension" · "With seizures, I bit
 * my tongue" · "These horrible drugs iirritate Precious eyes" (the
 * source's own double-i print) · "Remember the 5 P's" · "My nose
 * cannot breathe bad air" · "Sorry pals, can't go mingle"); the
 * ALL-CAPS hooks are KYP originals. Nothing is reproduced from the
 * book; purely presentational (no props, no hooks, no images). */

export function DrugReactionNeurologicMap() {
  const w = 1102;
  const h = 1344;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug reactions neurologic — the nigrostriatal dopamine fork (Parkinson-like syndrome vs tardive dyskinesia from the same D2 blockers), the seizure-threshold and peripheral-axon panels, the seven-row neurologic table strip in printed order, and the organ-system sweep: renal/genitourinary, respiratory, and multiorgan tables (original KYP diagram of book 250)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug reactions — neurologic, renal/GU, respiratory, multiorgan (original KYP diagram)</text>
        <rect x="760" y="25" width="302" height="18" className="fill-brand-soft" />
        <text x="911" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">four tables · fifteen rows · route by pathway</text>
      </g>

      {/* ===== ZONE A — THE DOPAMINE FORK ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="272" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DOPAMINE FORK — one receptor blockade, two movement disorders (the twin rows of book 250)</text>

        {/* the shared culprits + the nigrostriatal axis */}
        <rect x="52" y="104" width="200" height="64" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="152" y="124" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-emergency">THE SHARED CULPRITS</text>
        <text x="152" y="138" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Antipsychotics</text>
        <text x="152" y="150" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">Metoclopramide</text>
        <text x="152" y="162" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">D2 receptor antagonists (identical in both rows)</text>
        <line x1="252" y1="136" x2="300" y2="136" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 296 132 L 306 136 L 296 140 Z" className="fill-foreground" />
        <text x="278" y="129" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">D2 block</text>

        <rect x="308" y="104" width="240" height="64" rx="10" className="fill-card stroke-border" />
        <text x="428" y="124" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-foreground">NIGROSTRIATAL DOPAMINE AXIS</text>
        <text x="428" y="138" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">substantia nigra → striatum (D2)</text>
        <text x="428" y="150" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">blockade = the striatum behaves as if</text>
        <text x="428" y="160" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">dopamine were absent — then it adapts</text>

        {/* fork arrows */}
        <line x1="548" y1="136" x2="596" y2="120" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 592 114 L 602 119 L 593 125 Z" className="fill-foreground" />
        <line x1="548" y1="136" x2="596" y2="152" className="stroke-foreground" strokeWidth="1.3" />
        <path d="M 593 145 L 602 153 L 591 158 Z" className="fill-foreground" />
        <text x="560" y="112" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACUTE — early</text>
        <text x="560" y="172" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">CHRONIC — months to years</text>

        {/* the down-state card */}
        <rect x="604" y="100" width="448" height="80" rx="10" className="fill-card stroke-brand" />
        <rect x="616" y="110" width="126" height="16" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="679" y="121.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-brand">PARKINSON-LIKE SYNDROME</text>
        <text x="616" y="142" fontSize="4" fontWeight="800" className="fill-foreground">D2 BLOCKED — the DOWN-STATE: nigrostriatal signaling silenced.</text>
        <text x="616" y="154" fontSize="3.9" fontWeight="700" className="fill-foreground">Bradykinesia, rest tremor — printed note: “Cogwheel rigidity of arm.”</text>
        <text x="616" y="166" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Tracks the dose; resolves when the drug stops. NOTES cell: a one-sign gloss.</text>

        {/* the overshoot card */}
        <rect x="604" y="188" width="448" height="80" rx="10" className="fill-card stroke-emergency" />
        <rect x="616" y="198" width="126" height="16" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="679" y="209.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-emergency">TARDIVE DYSKINESIA</text>
        <text x="616" y="230" fontSize="4" fontWeight="800" className="fill-foreground">D2 UP-REGULATED — the OVERSHOOT: chronic blockade forces postsynaptic</text>
        <text x="616" y="242" fontSize="4" fontWeight="800" className="fill-foreground">receptor supersensitivity → involuntary choreiform orofacial movements.</text>
        <text x="616" y="254" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Can persist after withdrawal. The printed NOTES cell is EMPTY — chronicity is the story.</text>

        {/* the fork rule band */}
        <rect x="52" y="282" width="1000" height="44" rx="8" className="fill-brand-soft/30 stroke-brand" />
        <text x="552" y="300" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-foreground">RIGID EARLY, WRITHING LATE — the same drugs, opposite movement disorders; TIME and receptor direction are the only discriminators</text>
        <text x="552" y="314" textAnchor="middle" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the causal-agent cells print IDENTICALLY in both rows: “Antipsychotics, metoclopramide” — so the stem's timeline, never the drug name, selects the row</text>
      </g>

      {/* ===== ZONE B — THE NEUROLOGIC TABLE STRIP (7 PRINTED ROWS) ===== */}
      <g>
        <rect x="36" y="352" width="1030" height="308" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="374" fontSize="5.4" fontWeight="800" className="fill-foreground">TABLE 1 — “DRUG REACTIONS—NEUROLOGIC”: the seven printed rows, in printed order (teal = DRUG REACTION · black = CAUSAL AGENTS · red = First Aid's own NOTES mnemonic)</text>

        {/* row 1 — cinchonism */}
        <rect x="52" y="384" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="399.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Cinchonism</text>
        <text x="244" y="399.5" fontSize="4" fontWeight="700" className="fill-foreground">Quinidine, quinine</text>
        <text x="600" y="399.5" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">Can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment</text>
        <line x1="52" y1="412" x2="1050" y2="412" className="stroke-border" strokeWidth="1" />

        {/* row 2 — Parkinson-like syndrome */}
        <rect x="52" y="416" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="431.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Parkinson-like syndrome</text>
        <text x="244" y="431.5" fontSize="4" fontWeight="700" className="fill-foreground">Antipsychotics, metoclopramide</text>
        <text x="600" y="431.5" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">Cogwheel rigidity of arm — the acute down-state (Zone A)</text>
        <line x1="52" y1="444" x2="1050" y2="444" className="stroke-border" strokeWidth="1" />

        {/* row 3 — peripheral neuropathy */}
        <rect x="52" y="448" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="463.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Peripheral neuropathy</text>
        <text x="244" y="463.5" fontSize="4" fontWeight="700" className="fill-foreground">Platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin</text>
        <text x="796" y="463.5" fontSize="4" fontWeight="800" className="fill-emergency">“Cis, it’s very painful peripherally”</text>
        <line x1="52" y1="476" x2="1050" y2="476" className="stroke-border" strokeWidth="1" />

        {/* row 4 — IIH */}
        <rect x="52" y="480" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="495.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Idiopathic intracranial hypertension</text>
        <text x="244" y="495.5" fontSize="4" fontWeight="700" className="fill-foreground">Corticosteroids, danazol, vitamin A, growth hormones, tetracyclines</text>
        <text x="736" y="495.5" fontSize="4" fontWeight="800" className="fill-emergency">“Crime and debt Always grow head tension”</text>
        <line x1="52" y1="508" x2="1050" y2="508" className="stroke-border" strokeWidth="1" />

        {/* row 5 — seizures */}
        <rect x="52" y="512" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="527.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Seizures</text>
        <text x="244" y="527.5" fontSize="4" fontWeight="700" className="fill-foreground">Isoniazid, bupropion, imipenem/cilastatin, tramadol</text>
        <text x="660" y="527.5" fontSize="4" fontWeight="800" className="fill-emergency">“With seizures, I bit my tongue”</text>
        <line x1="52" y1="540" x2="1050" y2="540" className="stroke-border" strokeWidth="1" />

        {/* row 6 — tardive dyskinesia */}
        <rect x="52" y="544" width="180" height="24" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="559.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Tardive dyskinesia</text>
        <text x="244" y="559.5" fontSize="4" fontWeight="700" className="fill-foreground">Antipsychotics, metoclopramide — identical to the row above</text>
        <text x="640" y="559.5" fontSize="3.9" fontWeight="700" className="fill-muted-foreground">NOTES cell prints EMPTY — chronic D2 up-regulation is the whole story (Zone A)</text>
        <line x1="52" y1="572" x2="1050" y2="572" className="stroke-border" strokeWidth="1" />

        {/* row 7 — visual disturbances (the eight-drug row) */}
        <rect x="52" y="576" width="180" height="72" rx="5" className="fill-brand-soft/40 stroke-brand" />
        <text x="60" y="591.5" fontSize="4.2" fontWeight="800" className="fill-foreground">Visual disturbances</text>
        <text x="244" y="591.5" fontSize="3.8" fontWeight="700" className="fill-foreground">Topiramate (blurred vision/diplopia, haloes), hydroxychloroquine (↓ visual acuity, visual field defects),</text>
        <text x="244" y="602.5" fontSize="3.8" fontWeight="700" className="fill-foreground">digoxin (yellow-tinged vision), isoniazid (optic neuritis), ivabradine (luminous phenomena),</text>
        <text x="244" y="613.5" fontSize="3.8" fontWeight="700" className="fill-foreground">PDE-5 inhibitors (blue-tinged vision), ethambutol (color vision changes), vigabatrin (tunnel vision)</text>
        <text x="940" y="591.5" fontSize="3.9" fontWeight="800" className="fill-emergency">“These horrible drugs</text>
        <text x="940" y="602.5" fontSize="3.9" fontWeight="800" className="fill-emergency">iirritate Precious eyes”</text>
        <text x="940" y="613.5" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">(the print carries the double i —</text>
        <text x="940" y="622.5" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">one each for Isoniazid, Ivabradine)</text>
      </g>

      {/* ===== ZONE C — THE SEIZURE THRESHOLD + THE PERIPHERAL AXON ===== */}
      <g>
        <rect x="36" y="670" width="1030" height="216" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="692" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SEIZURE THRESHOLD AND THE PERIPHERAL AXON — the two pathway panels behind rows 3 and 5</text>

        {/* left — the seizure threshold gauge */}
        <rect x="52" y="702" width="496" height="132" rx="10" className="fill-card stroke-border" />
        <text x="64" y="720" fontSize="4.4" fontWeight="800" className="fill-foreground">THE SEIZURE THRESHOLD — four printed drugs pry it open</text>
        <rect x="64" y="728" width="300" height="16" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <rect x="64" y="728" width="180" height="16" rx="8" className="fill-warning stroke-warning" />
        <text x="370" y="739.5" fontSize="3.6" fontWeight="800" className="fill-foreground">threshold ↓ — easier to fire</text>
        <text x="64" y="758" fontSize="3.9" fontWeight="700" className="fill-foreground">Isoniazid (pyridoxine depletion → ↓ GABA) · Bupropion · Imipenem/cilastatin · Tramadol</text>
        <text x="64" y="770" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“With seizures, I bit my tongue” — INH is the one that also strips the axon (below)</text>
        <rect x="64" y="782" width="472" height="40" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="300" y="798" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">INH, THE TRIPLE NEURO TOXIN — isoniazid prints in THREE neurologic rows:</text>
        <text x="300" y="812" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">peripheral neuropathy · seizures · visual disturbances (optic neuritis) — pyridoxine (B6) is the thread</text>

        {/* right — the peripheral axon */}
        <rect x="560" y="702" width="492" height="132" rx="10" className="fill-card stroke-border" />
        <text x="572" y="720" fontSize="4.4" fontWeight="800" className="fill-foreground">THE PERIPHERAL AXON — five printed drugs strip the longest nerves first</text>
        <rect x="572" y="730" width="468" height="14" rx="7" className="fill-brand-soft/40 stroke-brand" />
        <text x="806" y="740.5" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">cell body → axon (microtubule-dependent transport) → the distal symmetric stocking-glove end</text>
        <text x="572" y="762" fontSize="3.9" fontWeight="700" className="fill-foreground">Platinum agents (eg, cisplatin) · Isoniazid · Vincristine (microtubule poison) · Paclitaxel (microtubule poison) · Phenytoin</text>
        <text x="572" y="774" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">“Cis, it’s very painful peripherally” — cisplatin also double-dips into the renal table (Zone D)</text>
        <rect x="572" y="786" width="468" height="36" rx="6" className="fill-brand-soft/30 stroke-brand" />
        <text x="806" y="800" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">THE DOUBLE-DIPPERS — drugs on more than one row of this page:</text>
        <text x="806" y="813" textAnchor="middle" fontSize="3.7" fontWeight="800" className="fill-foreground">isoniazid ×3 · cisplatin ×3 (neuropathy, Fanconi, nephrotoxicity) · antipsychotics ×3 (both movement rows + antimuscarinic)</text>
      </g>

      {/* ===== ZONE D — THE ORGAN-SYSTEM SWEEP ===== */}
      <g>
        <rect x="36" y="896" width="1030" height="322" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="918" fontSize="5.4" fontWeight="800" className="fill-foreground">THE ORGAN-SYSTEM SWEEP — tables 2-4: the reaction names the organ, the drug names the mechanism</text>

        {/* renal/genitourinary — full-width four-row strip */}
        <rect x="52" y="928" width="1000" height="130" rx="10" className="fill-card stroke-border" />
        <text x="64" y="944" fontSize="4.4" fontWeight="800" className="fill-brand">TABLE 2 — “DRUG REACTIONS—RENAL/GENITOURINARY”: the nephron-and-bladder descent</text>
        <text x="64" y="960" fontSize="4" fontWeight="800" className="fill-foreground">Fanconi syndrome (proximal tubule)</text>
        <text x="360" y="960" fontSize="3.9" fontWeight="700" className="fill-foreground">Cisplatin, ifosfamide, expired tetracyclines, tenofovir</text>
        <line x1="52" y1="968" x2="1052" y2="968" className="stroke-border" strokeWidth="1" />
        <text x="64" y="982" fontSize="4" fontWeight="800" className="fill-foreground">Hemorrhagic cystitis (bladder)</text>
        <text x="360" y="982" fontSize="3.9" fontWeight="700" className="fill-foreground">Cyclophosphamide, ifosfamide</text>
        <text x="716" y="982" fontSize="3.9" fontWeight="800" className="fill-foreground">Prevent by coadministering with mesna</text>
        <line x1="52" y1="990" x2="1052" y2="990" className="stroke-border" strokeWidth="1" />
        <text x="64" y="1004" fontSize="4" fontWeight="800" className="fill-foreground">Interstitial nephritis (interstitium)</text>
        <text x="360" y="1004" fontSize="3.9" fontWeight="700" className="fill-foreground">Diuretics (Pee), NSAIDs (Pain-free), Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs</text>
        <text x="964" y="1004" fontSize="3.9" fontWeight="800" className="fill-emergency">“Remember the 5 P’s”</text>
        <line x1="52" y1="1012" x2="1052" y2="1012" className="stroke-border" strokeWidth="1" />
        <text x="64" y="1026" fontSize="4" fontWeight="800" className="fill-foreground">Nephrotoxicity (the nephron at large)</text>
        <text x="360" y="1026" fontSize="3.9" fontWeight="700" className="fill-foreground">Cisplatin, aminoglycosides, amphotericin, vancomycin</text>
        <text x="716" y="1026" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the capital red P prints inside “rifamPin” — First Aid's in-cell 5-P mnemonic</text>

        {/* respiratory — left half */}
        <rect x="52" y="1066" width="492" height="138" rx="10" className="fill-card stroke-border" />
        <text x="64" y="1082" fontSize="4.4" fontWeight="800" className="fill-brand">TABLE 3 — “DRUG REACTIONS—RESPIRATORY”</text>
        <rect x="64" y="1090" width="220" height="22" rx="5" className="fill-warning-soft/40 stroke-warning" />
        <text x="174" y="1104.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Dry cough — bradykinin accumulation</text>
        <text x="64" y="1126" fontSize="3.9" fontWeight="700" className="fill-foreground">ACE inhibitors (ACE = kininase II; ↓ bradykinin degradation)</text>
        <rect x="64" y="1136" width="220" height="22" rx="5" className="fill-warning-soft/40 stroke-warning" />
        <text x="174" y="1150.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Pulmonary fibrosis — alveolar scarring</text>
        <text x="64" y="1172" fontSize="3.8" fontWeight="700" className="fill-foreground">Methotrexate, nitrofurantoin, carmustine, bleomycin,</text>
        <text x="64" y="1183" fontSize="3.8" fontWeight="700" className="fill-foreground">busulfan, amiodarone — the cell ends “…bleomycin,</text>
        <text x="64" y="1194" fontSize="3.8" fontWeight="700" className="fill-foreground">busulfan, amiodarone”</text>
        <text x="300" y="1172" fontSize="3.9" fontWeight="800" className="fill-emergency">“My nose cannot breathe</text>
        <text x="300" y="1183" fontSize="3.9" fontWeight="800" className="fill-emergency">bad air”</text>

        {/* multiorgan — right half */}
        <rect x="560" y="1066" width="492" height="138" rx="10" className="fill-card stroke-border" />
        <text x="572" y="1082" fontSize="4.4" fontWeight="800" className="fill-brand">TABLE 4 — “DRUG REACTIONS—MULTIORGAN”: receptor block vs enzyme block</text>
        <text x="572" y="1104" fontSize="4" fontWeight="800" className="fill-foreground">Antimuscarinic — MUSCARINIC RECEPTOR BLOCK</text>
        <text x="572" y="1116" fontSize="3.9" fontWeight="700" className="fill-foreground">Atropine, TCAs, H1-blockers, antipsychotics (the antipsychotics' 3rd row)</text>
        <text x="572" y="1138" fontSize="4" fontWeight="800" className="fill-foreground">Disulfiram-like reaction — ALDEHYDE DEHYDROGENASE BLOCK</text>
        <text x="572" y="1150" fontSize="3.8" fontWeight="700" className="fill-foreground">1st-generation sulfonylureas, procarbazine, certain</text>
        <text x="572" y="1161" fontSize="3.8" fontWeight="700" className="fill-foreground">cephalosporins, griseofulvin, metronidazole</text>
        <text x="572" y="1180" fontSize="3.9" fontWeight="800" className="fill-emergency">“Sorry pals, can’t go mingle”</text>
        <text x="572" y="1194" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">flushing, nausea, vomiting after alcohol — acetaldehyde accumulates</text>
      </g>

      {/* ===== THE FOUR-MOVE PROTOCOL BAND ===== */}
      <g>
        <rect x="36" y="1224" width="1030" height="60" rx="14" className="fill-brand-soft/30 stroke-brand" />
        <text x="52" y="1240" fontSize="5" fontWeight="800" className="fill-foreground">ROUTE EVERY REACTION TO THE PATHWAY IT DISRUPTS — the KYP four-move reading protocol</text>
        <rect x="52" y="1246" width="238" height="30" rx="6" className="fill-card stroke-border" />
        <text x="171" y="1259" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">MOVE 1 — NAME THE SIGN</text>
        <text x="171" y="1269" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">movement · seizure · numbness · colored vision</text>
        <line x1="290" y1="1261" x2="310" y2="1261" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 306 1257 L 316 1261 L 306 1265 Z" className="fill-foreground" />
        <rect x="318" y="1246" width="238" height="30" rx="6" className="fill-card stroke-border" />
        <text x="437" y="1259" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">MOVE 2 — NAME THE PATHWAY</text>
        <text x="437" y="1269" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">dopamine · threshold/GABA · axon · bradykinin…</text>
        <line x1="556" y1="1261" x2="576" y2="1261" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 572 1257 L 582 1261 L 572 1265 Z" className="fill-foreground" />
        <rect x="584" y="1246" width="238" height="30" rx="6" className="fill-card stroke-border" />
        <text x="703" y="1259" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">MOVE 3 — NAME THE ROW</text>
        <text x="703" y="1269" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">the fifteen printed rows are the answer key</text>
        <line x1="822" y1="1261" x2="842" y2="1261" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 838 1257 L 848 1261 L 838 1265 Z" className="fill-foreground" />
        <rect x="850" y="1246" width="200" height="30" rx="6" className="fill-card stroke-border" />
        <text x="950" y="1259" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">MOVE 4 — NAME THE DRUG</text>
        <text x="950" y="1269" textAnchor="middle" fontSize="3.5" fontWeight="700" className="fill-muted-foreground">then check its other appearances</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1292" width="1054" height="44" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1306" fontSize="4.2" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 272 / book 250 · census (pdfimages): ZERO rasters; VLM-read at 120dpi (staging-ph25/vlm-census.txt), no margin notes</text>
        <text x="42" y="1317" fontSize="3.9" className="fill-muted-foreground">Empty NOTES cells print in: tardive dyskinesia, Fanconi syndrome, nephrotoxicity, dry cough, antimuscarinic. Quirks carried verbatim: “iirritate” (double red i — Isoniazid + Ivabradine) · rifamPin (capital red P inside the word) · U+2019 apostrophes · “growth hormones” plural.</text>
        <text x="42" y="1328" fontSize="3.9" className="fill-muted-foreground">First Aid's red mnemonic lines are carried attributed; the ALL-CAPS hooks (RIGID EARLY WRITHING LATE · INH THE TRIPLE NEURO TOXIN · THE DOUBLE-DIPPERS · RECEPTOR BLOCK ENZYME BLOCK) are KYP originals. All four tables verbatim in the note.</text>
      </g>
    </svg>
  );
}
