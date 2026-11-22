/* Pharmacology — PH-batch 21: Ingested seafood & plant toxins (book 246,
 * pdf 268 — FULL page, two tables). Census (pdfimages): ZERO raster
 * images; the page's visual assets are the two color-coded tables
 * (light-blue TOXIN column, teal toxin names with red first letters H/T/C
 * in the seafood table, red h/t/c letters in the intro sentence) —
 * VLM-read at 120dpi (staging-ph21/vlm-census.txt), no margin notes. This
 * is an ORIGINAL KYP ADAPTATION of both tables: the printed intro
 * sentence's three-action fork (histamine release / total block of Na+
 * channels / opening of Na+ channels — First Aid's own red h/t/c,
 * attributed) feeding the seafood table's three row cards in PRINTED
 * order (Histamine/scombroid → Tetrodotoxin → Ciguatoxin); the plant
 * table's five row cards in PRINTED order (Grayanotoxin → Aconitine
 * alkaloids → Cardiac glycosides → Coniine → Atropine/scopolamine), each
 * tagged with its molecular target; and the antidote column panel with
 * the AVOID CLASS IA/III warning and the MAOI–scombroid extension band
 * (clearly labeled as NOT printed on book 246). NOTE: no shellfish/
 * saxitoxin row and no ricin / cyanogenic / water-hemlock rows print on
 * this page (VLM-confirmed) — the eight printed rows govern. Printed
 * quirks carried: “Albuterol +/– epinephrine” (en dash), “mad honey” /
 * “jimsonweed” (curly quotes), Na+/K+-ATPase and K+/Mg²+ superscripts.
 * Nothing is reproduced from the book; purely presentational (no props,
 * no hooks, no external images). */

export function SeafoodPlantToxinMap() {
  const w = 1102;
  const h = 1300;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Ingested seafood and plant toxins — the printed intro sentence's three-action fork (histamine release, total block of Na+ channels, opening of Na+ channels), the seafood table's three rows in order (histamine scombroid, tetrodotoxin pufferfish, ciguatoxin reef fish), the plant table's five rows in order (grayanotoxin mad honey, aconitine, cardiac glycosides, coniine hemlock, atropine/scopolamine jimsonweed) each tagged with its molecular target, and the antidote column with the avoid-class-IA/III warning (original KYP diagram of book 246)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Ingested seafood &amp; plant toxins — eight toxins, four molecular targets (original KYP diagram)</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">name the target → the antidote follows</text>
      </g>

      {/* ===== ZONE A — THE PRINTED INTRO: THE THREE-ACTION FORK ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="212" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED INTRO — the whole page in one sentence: “Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization.”</text>
        <text x="52" y="104" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">First Aid prints the initial letters h / t / c in red — its own mnemonic for Histamine (scombroid), Tetrodotoxin (total block), Ciguatoxin (causes depolarization) — carried attributed</text>

        {/* lane 1 — histamine release */}
        <rect x="52" y="114" width="324" height="106" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="64" y="132" fontSize="4.6" fontWeight="800" className="fill-brand">HISTAMINE RELEASE (h)</text>
        <rect x="64" y="140" width="150" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="139" y="152.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Histamine — scombroid</text>
        <text x="64" y="174" fontSize="3.9" fontWeight="700" className="fill-foreground">Bacterial histidine decarboxylase converts</text>
        <text x="64" y="184" fontSize="3.9" fontWeight="700" className="fill-foreground">histidine to histamine in spoiled dark-meat fish</text>
        <text x="64" y="194" fontSize="3.9" fontWeight="700" className="fill-foreground">(tuna, mahi-mahi, mackerel, bonito)</text>
        <text x="64" y="210" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">PUFFER BLOCKS, REEF OPENS, SPOILED POURS — the pour</text>

        {/* lane 2 — total block */}
        <rect x="388" y="114" width="324" height="106" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="400" y="132" fontSize="4.6" fontWeight="800" className="fill-emergency">TOTAL BLOCK OF Na+ CHANNELS (t)</text>
        <rect x="400" y="140" width="150" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="475" y="152.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Tetrodotoxin</text>
        <text x="400" y="174" fontSize="3.9" fontWeight="700" className="fill-foreground">Binds fast voltage-gated Na+ channels in nerve</text>
        <text x="400" y="184" fontSize="3.9" fontWeight="700" className="fill-foreground">tissue, PREVENTING depolarization — the nerve</text>
        <text x="400" y="194" fontSize="3.9" fontWeight="700" className="fill-foreground">cannot fire: weakness, loss of reflexes</text>
        <text x="400" y="210" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">PUFFER BLOCKS — the block</text>

        {/* lane 3 — opening */}
        <rect x="724" y="114" width="324" height="106" rx="10" className="fill-warning-soft/30 stroke-warning" />
        <text x="736" y="132" fontSize="4.6" fontWeight="800" className="fill-warning">OPENING OF Na+ CHANNELS (c)</text>
        <rect x="736" y="140" width="150" height="18" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="811" y="152.5" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-emergency">Ciguatoxin</text>
        <text x="736" y="174" fontSize="3.9" fontWeight="700" className="fill-foreground">Opens Na+ channels, CAUSING depolarization —</text>
        <text x="736" y="184" fontSize="3.9" fontWeight="700" className="fill-foreground">the over-excited membrane: perioral numbness,</text>
        <text x="736" y="194" fontSize="3.9" fontWeight="700" className="fill-foreground">reversal of hot and cold sensations</text>
        <text x="736" y="210" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">REEF OPENS — the opening (grayanotoxin + aconitine join)</text>

        <text x="52" y="268" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">The plant table extends the same fork: two more Na+ openers (grayanotoxin, aconitine at site 2), the Na+/K+-ATPase (cardiac glycosides), and the two acetylcholine receptors (coniine's nicotinic vs atropine/scopolamine's muscarinic).</text>
      </g>

      {/* ===== ZONE B — THE SEAFOOD TABLE, PRINTED ROW ORDER ===== */}
      <g>
        <rect x="36" y="292" width="1030" height="316" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="314" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SEAFOOD TABLE — three rows, printed order: TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT</text>
        <text x="52" y="326" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order: Histamine (scombroid poisoning) → Tetrodotoxin → Ciguatoxin (no shellfish row prints on this page — VLM-confirmed)</text>

        {/* card 1 — Histamine (scombroid poisoning) */}
        <rect x="52" y="336" width="324" height="262" rx="10" className="fill-card stroke-brand" />
        <rect x="64" y="346" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="99" y="357.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 1</text>
        <text x="142" y="357.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Histamine (scombroid poisoning)</text>
        <text x="64" y="378" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="64" y="388" fontSize="3.9" fontWeight="700" className="fill-foreground">Spoiled dark-meat fish such as tuna,</text>
        <text x="64" y="398" fontSize="3.9" fontWeight="700" className="fill-foreground">mahi-mahi, mackerel, and bonito</text>
        <text x="64" y="416" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="64" y="426" fontSize="3.9" fontWeight="700" className="fill-foreground">Bacterial histidine decarboxylase converts</text>
        <text x="64" y="436" fontSize="3.9" fontWeight="700" className="fill-foreground">histidine to histamine</text>
        <rect x="64" y="444" width="300" height="26" rx="5" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="72" y="455" fontSize="3.6" fontWeight="800" className="fill-emergency">“Frequently misdiagnosed as fish allergy” —</text>
        <text x="72" y="464.5" fontSize="3.6" fontWeight="800" className="fill-emergency">printed INSIDE the ACTION cell</text>
        <text x="64" y="484" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS — mimics anaphylaxis</text>
        <text x="64" y="494" fontSize="3.9" fontWeight="700" className="fill-foreground">Oral burning sensation, facial flushing,</text>
        <text x="64" y="504" fontSize="3.9" fontWeight="700" className="fill-foreground">erythema, urticaria, itching; may progress to</text>
        <text x="64" y="514" fontSize="3.9" fontWeight="700" className="fill-foreground">bronchospasm, angioedema, hypotension</text>
        <text x="64" y="532" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT — the only seafood antidote lane</text>
        <text x="64" y="542" fontSize="3.9" fontWeight="700" className="fill-foreground">Antihistamines; Albuterol +/– epinephrine</text>
        <text x="64" y="552" fontSize="3.9" fontWeight="700" className="fill-foreground">(printed with the en dash “+/–”)</text>

        {/* card 2 — Tetrodotoxin */}
        <rect x="388" y="336" width="324" height="262" rx="10" className="fill-card stroke-emergency" />
        <rect x="400" y="346" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="435" y="357.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 2</text>
        <text x="478" y="357.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Tetrodotoxin</text>
        <text x="400" y="378" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="400" y="388" fontSize="3.9" fontWeight="700" className="fill-foreground">Pufferfish</text>
        <text x="400" y="406" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION — the block</text>
        <text x="400" y="416" fontSize="3.9" fontWeight="700" className="fill-foreground">Binds fast voltage-gated Na+ channels</text>
        <text x="400" y="426" fontSize="3.9" fontWeight="700" className="fill-foreground">in nerve tissue, preventing depolarization</text>
        <text x="400" y="444" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS — the silenced nerve</text>
        <text x="400" y="454" fontSize="3.9" fontWeight="700" className="fill-foreground">Nausea, diarrhea, paresthesias, weakness,</text>
        <text x="400" y="464" fontSize="3.9" fontWeight="700" className="fill-foreground">dizziness, loss of reflexes</text>
        <text x="400" y="482" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <rect x="400" y="490" width="130" height="18" rx="5" className="fill-secondary stroke-border" />
        <text x="465" y="502.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Supportive</text>
        <text x="400" y="528" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">SAME CHANNEL, OPPOSITE DIRECTION — the fork's</text>
        <text x="400" y="538" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">other arm (ciguatoxin) OPENS the channel</text>

        {/* card 3 — Ciguatoxin */}
        <rect x="724" y="336" width="324" height="262" rx="10" className="fill-card stroke-warning" />
        <rect x="736" y="346" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="771" y="357.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 3</text>
        <text x="814" y="357.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Ciguatoxin</text>
        <text x="736" y="378" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="736" y="388" fontSize="3.9" fontWeight="700" className="fill-foreground">Reef fish such as barracuda, snapper,</text>
        <text x="736" y="398" fontSize="3.9" fontWeight="700" className="fill-foreground">and moray eel</text>
        <text x="736" y="416" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION — the opening</text>
        <text x="736" y="426" fontSize="3.9" fontWeight="700" className="fill-foreground">Opens Na+ channels, causing depolarization</text>
        <text x="736" y="444" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS — the excited membrane</text>
        <text x="736" y="454" fontSize="3.9" fontWeight="700" className="fill-foreground">Nausea, vomiting, diarrhea, perioral numbness,</text>
        <text x="736" y="464" fontSize="3.9" fontWeight="700" className="fill-foreground">reversal of hot and cold sensations,</text>
        <text x="736" y="474" fontSize="3.9" fontWeight="700" className="fill-foreground">bradycardia, heart block, hypotension</text>
        <text x="736" y="492" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <rect x="736" y="500" width="130" height="18" rx="5" className="fill-secondary stroke-border" />
        <text x="801" y="512.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">Supportive</text>
        <text x="736" y="538" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">the hot/cold reversal is the pathognomonic chip</text>
      </g>

      {/* ===== ZONE C — THE PLANT TABLE, PRINTED ROW ORDER ===== */}
      <g>
        <rect x="36" y="618" width="1030" height="452" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="640" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PLANT TABLE — five rows, printed order (the header row repeats over this table)</text>
        <text x="52" y="652" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order: Grayanotoxin → Aconitine alkaloids → Cardiac glycosides → Coniine (hemlock) → Atropine/scopolamine (no ricin / cyanogenic / water-hemlock rows print — VLM-confirmed)</text>

        {/* card 1 — Grayanotoxin */}
        <rect x="52" y="662" width="324" height="196" rx="10" className="fill-card stroke-warning" />
        <rect x="64" y="672" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="99" y="683.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 1</text>
        <text x="142" y="683.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Grayanotoxin</text>
        <rect x="236" y="672" width="128" height="16" rx="4" className="fill-warning-soft stroke-warning" />
        <text x="300" y="683.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-warning">Na+ OPENER</text>
        <text x="64" y="704" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="64" y="714" fontSize="3.9" fontWeight="700" className="fill-foreground">Rhododendron nectar (“mad honey”)</text>
        <text x="64" y="732" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="64" y="742" fontSize="3.9" fontWeight="700" className="fill-foreground">Opens voltage-gated Na+ channels → prolonged</text>
        <text x="64" y="752" fontSize="3.9" fontWeight="700" className="fill-foreground">depolarization → ↑ vagal tone</text>
        <text x="64" y="770" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS</text>
        <text x="64" y="780" fontSize="3.9" fontWeight="700" className="fill-foreground">Nausea, vomiting, dizziness, bradycardia,</text>
        <text x="64" y="790" fontSize="3.9" fontWeight="700" className="fill-foreground">hypotension</text>
        <text x="64" y="808" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <text x="64" y="818" fontSize="3.9" fontWeight="700" className="fill-foreground">Supportive care (IV fluids, atropine if</text>
        <text x="64" y="828" fontSize="3.9" fontWeight="700" className="fill-foreground">severe bradycardia)</text>
        <text x="64" y="848" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MAD HONEY, MAD VAGUS</text>

        {/* card 2 — Aconitine alkaloids */}
        <rect x="388" y="662" width="324" height="196" rx="10" className="fill-card stroke-emergency" />
        <rect x="400" y="672" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="435" y="683.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 2</text>
        <text x="478" y="683.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Aconitine alkaloids</text>
        <rect x="592" y="672" width="112" height="16" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="648" y="683.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">Na+ SITE 2</text>
        <text x="400" y="704" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="400" y="714" fontSize="3.9" fontWeight="700" className="fill-foreground">Aconitum (monkshood, wolfsbane)</text>
        <text x="400" y="732" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="400" y="742" fontSize="3.9" fontWeight="700" className="fill-foreground">Activates Na+ channels (site 2) → delayed</text>
        <text x="400" y="752" fontSize="3.9" fontWeight="700" className="fill-foreground">inactivation → sustained Na+ influx →</text>
        <text x="400" y="762" fontSize="3.9" fontWeight="700" className="fill-foreground">ventricular arrhythmias</text>
        <text x="400" y="780" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS</text>
        <text x="400" y="790" fontSize="3.9" fontWeight="700" className="fill-foreground">Paresthesias, hypotension, ventricular</text>
        <text x="400" y="800" fontSize="3.9" fontWeight="700" className="fill-foreground">tachyarrhythmias, cardiac arrest</text>
        <text x="400" y="818" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <text x="400" y="828" fontSize="3.9" fontWeight="700" className="fill-foreground">Supportive, lidocaine or amiodarone for</text>
        <text x="400" y="838" fontSize="3.9" fontWeight="700" className="fill-foreground">arrhythmia; avoid class IA/III agents</text>
        <text x="400" y="848" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SITE 2 SUSTAINS THE STORM</text>

        {/* card 3 — Cardiac glycosides */}
        <rect x="724" y="662" width="324" height="196" rx="10" className="fill-card stroke-brand" />
        <rect x="736" y="672" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="771" y="683.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 3</text>
        <text x="814" y="683.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Cardiac glycosides</text>
        <rect x="916" y="672" width="120" height="16" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="976" y="683.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">Na+/K+-ATPase</text>
        <text x="736" y="704" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="736" y="714" fontSize="3.9" fontWeight="700" className="fill-foreground">Digitalis purpurea, Nerium oleander</text>
        <text x="736" y="732" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION — the digoxin mechanism</text>
        <text x="736" y="742" fontSize="3.9" fontWeight="700" className="fill-foreground">Inhibits Na+/K+-ATPase → ↑ intracellular Na+</text>
        <text x="736" y="752" fontSize="3.9" fontWeight="700" className="fill-foreground">→ ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal</text>
        <text x="736" y="762" fontSize="3.9" fontWeight="700" className="fill-foreground">tone, ectopy</text>
        <text x="736" y="780" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS</text>
        <text x="736" y="790" fontSize="3.9" fontWeight="700" className="fill-foreground">GI upset, visual disturbances (xanthopsia),</text>
        <text x="736" y="800" fontSize="3.9" fontWeight="700" className="fill-foreground">AV block, arrhythmias</text>
        <text x="736" y="818" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <text x="736" y="828" fontSize="3.9" fontWeight="700" className="fill-foreground">Digoxin-specific Fab, atropine for</text>
        <text x="736" y="838" fontSize="3.9" fontWeight="700" className="fill-foreground">bradycardia, correct K+/Mg²+</text>

        {/* card 4 — Coniine (hemlock) */}
        <rect x="52" y="866" width="500" height="192" rx="10" className="fill-card stroke-border" />
        <rect x="64" y="876" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="99" y="887.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 4</text>
        <text x="142" y="887.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Coniine (hemlock)</text>
        <rect x="292" y="876" width="150" height="16" rx="4" className="fill-emergency-soft stroke-emergency" />
        <text x="367" y="887.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-emergency">NICOTINIC ACh RECEPTOR</text>
        <text x="64" y="908" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="64" y="918" fontSize="3.9" fontWeight="700" className="fill-foreground">Conium maculatum (poison hemlock)</text>
        <text x="64" y="936" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="64" y="946" fontSize="3.9" fontWeight="700" className="fill-foreground">Nicotinic ACh receptor agonist/antagonist → depolarizing</text>
        <text x="64" y="956" fontSize="3.9" fontWeight="700" className="fill-foreground">blockade → flaccid paralysis</text>
        <text x="64" y="974" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS</text>
        <text x="64" y="984" fontSize="3.9" fontWeight="700" className="fill-foreground">Ascending paralysis, respiratory failure, salivation</text>
        <text x="64" y="1002" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <text x="64" y="1012" fontSize="3.9" fontWeight="700" className="fill-foreground">Supportive (respiratory support); activated charcoal early</text>
        <text x="64" y="1030" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">NICOTINIC PARALYZES — the wet, paralyzed patient</text>

        {/* card 5 — Atropine/scopolamine */}
        <rect x="562" y="866" width="486" height="192" rx="10" className="fill-card stroke-border" />
        <rect x="574" y="876" width="70" height="16" rx="4" className="fill-secondary stroke-border" />
        <text x="609" y="887.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">ROW 5</text>
        <text x="652" y="887.5" fontSize="4.4" fontWeight="800" className="fill-foreground">Atropine/scopolamine</text>
        <rect x="812" y="876" width="150" height="16" rx="4" className="fill-brand-soft stroke-brand" />
        <text x="887" y="887.5" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-brand">MUSCARINIC ACh RECEPTOR</text>
        <text x="574" y="908" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SOURCE</text>
        <text x="574" y="918" fontSize="3.9" fontWeight="700" className="fill-foreground">Atropa belladonna, Datura stramonium (“jimsonweed”)</text>
        <text x="574" y="936" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ACTION</text>
        <text x="574" y="946" fontSize="3.9" fontWeight="700" className="fill-foreground">Muscarinic ACh receptor antagonist</text>
        <text x="574" y="964" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">SYMPTOMS</text>
        <text x="574" y="974" fontSize="3.9" fontWeight="700" className="fill-foreground">Anticholinergic toxidrome: dry mouth, mydriasis,</text>
        <text x="574" y="984" fontSize="3.9" fontWeight="700" className="fill-foreground">hyperthermia, delirium</text>
        <text x="574" y="1002" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">TREATMENT</text>
        <text x="574" y="1012" fontSize="3.9" fontWeight="700" className="fill-foreground">Physostigmine (AChE inhibitor), cooling, fluids</text>
        <text x="574" y="1030" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">MUSCARINIC DRIES — the dry, dilated, delirious patient</text>
      </g>

      {/* ===== ZONE D — THE ANTIDOTE COLUMN + WARNING BANDS ===== */}
      <g>
        <rect x="36" y="1080" width="1030" height="160" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1102" fontSize="5.4" fontWeight="800" className="fill-foreground">THE TREATMENT COLUMN — the antidote follows the target</text>
        <rect x="52" y="1112" width="640" height="118" rx="10" className="fill-card stroke-border" />
        <text x="64" y="1130" fontSize="3.9" fontWeight="700" className="fill-foreground">Histamine (scombroid): Antihistamines; Albuterol +/– epinephrine — the only seafood antidote lane</text>
        <text x="64" y="1144" fontSize="3.9" fontWeight="700" className="fill-foreground">Grayanotoxin: IV fluids, atropine if severe bradycardia — the bradycardia is VAGAL, atropine is its mirror</text>
        <text x="64" y="1158" fontSize="3.9" fontWeight="700" className="fill-foreground">Cardiac glycosides: digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+ — plant digitalis IS digoxin</text>
        <text x="64" y="1172" fontSize="3.9" fontWeight="700" className="fill-foreground">Coniine: respiratory support + activated charcoal EARLY — a race against absorption, airway first</text>
        <text x="64" y="1186" fontSize="3.9" fontWeight="700" className="fill-foreground">Atropine/scopolamine: physostigmine (AChE inhibitor), cooling, fluids — raise ACh to outcompete the blockade</text>
        <text x="64" y="1202" fontSize="3.7" fontWeight="800" className="fill-muted-foreground">both seafood channel toxins (tetrodotoxin, ciguatoxin): supportive — no channel antidote prints</text>

        <rect x="702" y="1112" width="348" height="54" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <rect x="714" y="1120" width="324" height="20" rx="5" className="fill-emergency" />
        <text x="876" y="1133.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">ACONITINE — AVOID CLASS IA/III AGENTS</text>
        <text x="714" y="1152" fontSize="3.7" fontWeight="700" className="fill-foreground">Printed pair: “lidocaine or amiodarone for arrhythmia;</text>
        <text x="714" y="1161" fontSize="3.7" fontWeight="700" className="fill-foreground">avoid class IA/III agents” — carry both halves verbatim</text>

        <rect x="702" y="1174" width="348" height="56" rx="10" className="fill-warning-soft/30 stroke-warning" />
        <text x="714" y="1190" fontSize="3.8" fontWeight="800" className="fill-warning">KYP EXTENSION (not printed on book 246):</text>
        <text x="714" y="1200" fontSize="3.7" fontWeight="700" className="fill-foreground">MAOIs impair clearance of ingested amines —</text>
        <text x="714" y="1210" fontSize="3.7" fontWeight="700" className="fill-foreground">patients on MAO inhibitors can have exaggerated</text>
        <text x="714" y="1220" fontSize="3.7" fontWeight="700" className="fill-foreground">scombroid reactions from the same histamine load</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1250" width="1054" height="38" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1266" fontSize="4.4" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 268 / book 246 (Pharmacology — Toxicities and Adverse Effects: Ingested seafood toxins; Plant toxins)</text>
        <text x="42" y="1278" fontSize="3.9" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — both tables' color furniture (light-blue TOXIN column, red h/t/c letters, red H/T/C toxin initials) VLM-read at 120dpi, no margin notes. ORIGINAL KYP ADAPTATION —</text>
        <text x="42" y="1286" fontSize="3.9" className="fill-muted-foreground">both tables are also carried verbatim in the note's table blocks. Printed quirks carried: “Albuterol +/– epinephrine” (en dash), curly-quote “mad honey”/“jimsonweed”, Na+/K+-ATPase, K+/Mg²+. Printed order: Histamine → Tetrodotoxin → Ciguatoxin; Grayanotoxin → Aconitine → Glycosides → Coniine → Atropine/scopolamine.</text>
      </g>
    </svg>
  );
}
