/* Pharmacology — PH-batch 16: Cholinomimetic agents (book 239, pdf 261,
 * FULL page). Original KYP diagram — the source page carries NO figure
 * at all (pdfimages census: ZERO raster images; pure text + table art,
 * VLM-confirmed in two passes saved to staging-ph16/vlm-census.txt,
 * including a documented 200-dpi adjudication of the pilocarpine row).
 * Drawn here with original KYP glyphs: the root CHOLINOMIMETIC AGENTS
 * chip carrying the printed warning (COPD, asthma, peptic ulcer) and
 * forking into two lanes — LEFT, the DIRECT AGONISTS lane (the drug IS
 * the key): four drug cards (bethanechol → bladder, carbachol → pupil,
 * methacholine → airway, pilocarpine → eye + glands) each with its
 * printed action, application chip, 'resistant to AChE' flag where the
 * page prints it, and First Aid's own in-cell mnemonics attributed;
 * RIGHT, the INDIRECT AGONISTS lane (jam the shredder): the
 * anticholinesterases ⊣ AChE → ↑ ACh flow row, the reversible clinic
 * chips (Alzheimer trio / neostigmine / pyridostigmine / physostigmine)
 * with applications and the BBB charge-rule band, the IRREVERSIBLE
 * organophosphate band (fenthion, parathion, malathion — insecticides,
 * farmers) with the three effect layers (DUMBBELSS muscarinic ·
 * succinylcholine-like nicotinic NM blockade · CNS), and the antidote
 * fork — atropine (competitive, crosses BBB) beside pralidoxime with
 * its dephosphorylation reactivation hook ('if given early',
 * coadminister, poor BBB). Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export function CholinomimeticMap() {
  const w = 1102;
  const h = 1004;
  // The four direct agonist cards (the printed DRUG/ACTION/APPLICATIONS
  // rows, in printed order) — action/app text quoted from book 239.
  const directCards = [
    {
      drug: "Bethanechol",
      resistant: true,
      action: [
        "Activates bladder smooth muscle; resistant to AChE. Acts on",
        "muscarinic receptors; no nicotinic activity.",
      ],
      mnemonic: "FA: “Bethany, call me to activate your bladder.”",
      app: "APPLICATIONS: Urinary retention.",
    },
    {
      drug: "Carbachol",
      resistant: true,
      action: ["Carbon copy of acetylcholine (but resistant to AChE)."],
      mnemonic: "FA: “Car-” = carbon copy of acetylcholine.",
      app: "APPLICATIONS: Constricts pupil. Used for intraoperative miosis induction.",
    },
    {
      drug: "Methacholine",
      resistant: false,
      action: ["Stimulates muscarinic receptors in airway when inhaled."],
      mnemonic: "inhaled muscarinic agonism = deliberate bronchoconstriction",
      app: "APPLICATIONS: Challenge test for diagnosis of asthma.",
    },
    {
      drug: "Pilocarpine",
      resistant: true,
      action: [
        "Contracts ciliary muscle of eye (open-angle glaucoma), pupillary",
        "sphincter (closed-angle glaucoma); resistant to AChE.",
      ],
      mnemonic: "FA: “You cry, drool, and sweat on your ‘pilow.’”",
      app: "APPLICATIONS: Potent stimulator of sweat, tears, and saliva. Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).",
    },
  ];
  // The four reversible anticholinesterase rows (printed order).
  const reversibleRows = [
    {
      name: "Donepezil, rivastigmine, galantamine",
      bbb: "↑ ACh",
      app: "1st line for Alzheimer disease (Dona Riva forgot the gala).",
    },
    {
      name: "Neostigmine",
      bbb: "no BBB — positive charge",
      app: "Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of NMJ blockade (postoperative).",
    },
    {
      name: "Pyridostigmine",
      bbb: "does not penetrate CNS",
      app: "Myasthenia gravis (long acting); with glycopyrrolate or hyoscyamine to control adverse effects.",
    },
    {
      name: "Physostigmine",
      bbb: "freely crosses BBB — not charged",
      app: "Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.",
    },
  ];
  // The three printed effect layers of anticholinesterase poisoning.
  const effectChips = [
    {
      label: "MUSCARINIC EFFECTS",
      text: "Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation — DUMBBELSS.",
    },
    {
      label: "NICOTINIC EFFECTS",
      text: "Neuromuscular blockade (mechanism similar to succinylcholine).",
    },
    {
      label: "CNS EFFECTS",
      text: "Respiratory depression, lethargy, seizures, coma.",
    },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Cholinomimetic Agents — the direct-vs-indirect fork map: direct agonists binding the muscarinic lock themselves (bethanechol activates bladder smooth muscle for urinary retention, carbachol the carbon copy of acetylcholine constricts the pupil for intraoperative miosis, methacholine stimulates airway muscarinic receptors for the asthma challenge test, pilocarpine contracts the ciliary muscle and pupillary sphincter for glaucoma and xerostomia) vs indirect anticholinesterases inhibiting AChE to raise ACh (donepezil, rivastigmine, galantamine for Alzheimer; neostigmine, pyridostigmine for myasthenia, ileus, retention, and blockade reversal; physostigmine the anticholinergic-toxicity antidote), the irreversible organophosphate fork with DUMBBELSS muscarinic, succinylcholine-like neuromuscular, and CNS effects, and the atropine-plus-pralidoxime antidote fork with the dephosphorylation reactivation hook (original KYP diagram of book 239)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Cholinomimetic agents — turn the lock or jam the shredder (original KYP diagram)</text>
        <rect x="800" y="25" width="262" height="18" className="fill-brand-soft" />
        <text x="931" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">direct receptor keys · indirect AChE blockers</text>
      </g>

      {/* ===== ZONE A — THE FORK ROOT + THE PRINTED WARNING ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="84" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FORK — one page, two strategies for mimicking acetylcholine (book 239)</text>
        <rect x="56" y="100" width="300" height="44" rx="10" className="fill-card stroke-brand" />
        <text x="206" y="118" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">CHOLINOMIMETIC AGENTS</text>
        <text x="206" y="134" textAnchor="middle" fontSize="3.8" className="fill-muted-foreground">the drug turns the lock — or jams the shredder</text>
        <text x="372" y="116" fontSize="3.8" className="fill-muted-foreground">AChE is the synapse&apos;s shredder: it destroys ACh the instant</text>
        <text x="372" y="128" fontSize="3.8" className="fill-muted-foreground">the job is done. Direct drugs bind the receptor and survive it;</text>
        <text x="372" y="140" fontSize="3.8" className="fill-muted-foreground">indirect drugs block it so endogenous ACh accumulates (↑ ACh).</text>
        <rect x="716" y="94" width="336" height="54" rx="10" className="fill-emergency-soft/30 stroke-emergency" strokeDasharray="4 2.5" />
        <text x="728" y="110" fontSize="4.2" fontWeight="800" className="fill-emergency">THE PRINTED WARNING — the whole class</text>
        <text x="728" y="124" fontSize="3.8" fontWeight="700" className="fill-foreground">“Watch for exacerbation of COPD, asthma, and peptic ulcers</text>
        <text x="728" y="136" fontSize="3.8" fontWeight="700" className="fill-foreground">in susceptible patients.” — muscarinic agonism bronchoconstricts</text>
        <text x="728" y="146" fontSize="3.8" fontWeight="700" className="fill-foreground">and drives acid secretion, in BOTH lanes.</text>
        {/* fork arrows down into the two lanes */}
        <path d="M 206 144 V 156 H 292 V 166" fill="none" className="stroke-brand" strokeWidth="1.6" />
        <path d="M 287 166 L 292 156 L 297 166 Z" className="fill-brand" />
        <path d="M 206 144 V 156 H 813 V 166" fill="none" className="stroke-warning" strokeWidth="1.6" />
        <path d="M 808 166 L 813 156 L 818 166 Z" className="fill-warning" />
        <text x="240" y="163" fontSize="3.6" fontWeight="800" className="fill-brand">DIRECT — turn the lock</text>
        <text x="824" y="163" fontSize="3.6" fontWeight="800" className="fill-warning">INDIRECT — jam the shredder</text>
      </g>

      {/* ===== LEFT LANE — DIRECT AGONISTS ===== */}
      <g>
        <rect x="36" y="168" width="512" height="728" rx="14" className="fill-secondary/40 stroke-brand" />
        <text x="52" y="190" fontSize="5" fontWeight="800" className="fill-brand">DIRECT AGONISTS — the drug itself binds the receptor (the muscarinic lock)</text>
        {directCards.map((c, i) => {
          const y = 204 + i * 172;
          return (
            <g key={c.drug}>
              <rect x="52" y={y} width="460" height="160" rx="10" className="fill-card stroke-border" />
              <rect x="64" y={y + 12} width="118" height="20" rx="5" className="fill-brand" />
              <text x="123" y={y + 25.5} textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">{c.drug}</text>
              {c.resistant ? (
                <g>
                  <rect x="192" y={y + 12} width="118" height="20" rx="5" className="fill-warning-soft stroke-warning" />
                  <text x="251" y={y + 25.5} textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-warning">resistant to AChE</text>
                </g>
              ) : (
                <g>
                  <rect x="192" y={y + 12} width="118" height="20" rx="5" className="fill-secondary stroke-border" />
                  <text x="251" y={y + 25.5} textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">(AChE flag not printed)</text>
                </g>
              )}
              <rect x="320" y={y + 12} width="180" height="20" rx="5" className="fill-brand-soft/40 stroke-brand" />
              <text x="410" y={y + 25.5} textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-brand">turns the MUSCARINIC lock</text>
              {c.action.map((line, j) => (
                <text key={j} x="64" y={y + 52 + j * 11} fontSize="3.9" fontWeight="700" className="fill-foreground">{line}</text>
              ))}
              <text x="64" y={y + 52 + c.action.length * 11 + 6} fontSize="3.7" fontStyle="italic" className="fill-muted-foreground">{c.mnemonic}</text>
              <rect x="64" y={y + 108} width="436" height="42" rx="6" className="fill-brand-soft/40 stroke-brand" />
              {c.app.length > 88 ? (
                <g>
                  <text x="76" y={y + 123} fontSize="3.8" fontWeight="700" className="fill-foreground">{c.app.slice(0, 86)}</text>
                  <text x="76" y={y + 136} fontSize="3.8" fontWeight="700" className="fill-foreground">{c.app.slice(86).trim()}</text>
                </g>
              ) : (
                <text x="76" y={y + 130} fontSize="3.8" fontWeight="700" className="fill-foreground">{c.app}</text>
              )}
            </g>
          );
        })}
        <text x="52" y="884" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">ONE DRUG, ONE ORGAN — bladder · pupil · airway · glands</text>
        <text x="52" y="893" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">mnemonics in quotes are First Aid&apos;s own, printed in the table cells (book 239)</text>
      </g>

      {/* ===== RIGHT LANE — INDIRECT AGONISTS ===== */}
      <g>
        <rect x="560" y="168" width="506" height="728" rx="14" className="fill-secondary/40 stroke-warning" />
        <text x="576" y="190" fontSize="5" fontWeight="800" className="fill-warning">INDIRECT AGONISTS (anticholinesterases) — inhibit AChE → ↑ ACh</text>

        {/* the shredder row: anticholinesterases ⊣ AChE → ↑ ACh */}
        <rect x="576" y="202" width="196" height="44" rx="8" className="fill-warning-soft stroke-warning" />
        <text x="674" y="218" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-warning">ANTICHOLINESTERASES</text>
        <text x="674" y="232" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-foreground">reversible clinic + irreversible poison</text>
        <line x1="772" y1="224" x2="806" y2="224" className="stroke-foreground" strokeWidth="1.6" />
        <line x1="806" y1="214" x2="806" y2="234" className="stroke-foreground" strokeWidth="2.2" />
        <rect x="812" y="202" width="122" height="44" rx="8" className="fill-card stroke-foreground" />
        <text x="873" y="219" textAnchor="middle" fontSize="5.2" fontWeight="800" className="fill-foreground">AChE</text>
        <text x="873" y="233" textAnchor="middle" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the synapse&apos;s off-switch</text>
        <line x1="934" y1="224" x2="958" y2="224" className="stroke-foreground" strokeWidth="1.6" />
        <path d="M 954 224 L 964 219 L 964 229 Z" className="fill-foreground" />
        <rect x="968" y="202" width="86" height="44" rx="8" className="fill-brand-soft stroke-brand" />
        <text x="1011" y="220" textAnchor="middle" fontSize="5" fontWeight="800" className="fill-brand">↑ ACh</text>
        <text x="1011" y="234" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">every synapse</text>
        <text x="576" y="258" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">no receptor selectivity — the body&apos;s OWN acetylcholine floods muscarinic + nicotinic + central targets</text>

        {/* reversible sub-lane */}
        <rect x="576" y="268" width="478" height="184" rx="10" className="fill-card stroke-warning" />
        <text x="588" y="286" fontSize="4.4" fontWeight="800" className="fill-warning">REVERSIBLE — the clinic&apos;s four agents</text>
        {reversibleRows.map((r, i) => {
          const y = 296 + i * 38;
          return (
            <g key={r.name}>
              <rect x="588" y={y} width="176" height="32" rx="5" className="fill-warning-soft/50 stroke-warning" />
              <text x="596" y={y + 13} fontSize="3.9" fontWeight="800" className="fill-foreground">{r.name}</text>
              <text x="596" y={y + 24} fontSize="3.4" fontWeight="700" className="fill-muted-foreground">{r.bbb}</text>
              <text x="774" y={y + 13} fontSize="3.6" fontWeight="700" className="fill-foreground">{r.app.slice(0, 92)}</text>
              <text x="774" y={y + 24} fontSize="3.6" fontWeight="700" className="fill-foreground">{r.app.slice(92).trim()}</text>
            </g>
          );
        })}

        {/* BBB charge rule band */}
        <rect x="576" y="458" width="478" height="34" rx="8" className="fill-secondary/60 stroke-border" />
        <text x="588" y="473" fontSize="4" fontWeight="800" className="fill-foreground">CHARGED STAYS OUT, UNCHARGED CROSSES IN</text>
        <text x="588" y="485" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">neostigmine (+ charge) and pyridostigmine stay peripheral; uncharged physostigmine reaches the CNS</text>

        {/* irreversible sub-lane */}
        <rect x="576" y="500" width="478" height="200" rx="10" className="fill-card stroke-emergency" strokeDasharray="5 3" />
        <text x="588" y="518" fontSize="4.4" fontWeight="800" className="fill-emergency">IRREVERSIBLE — the organophosphates</text>
        <text x="588" y="532" fontSize="3.7" fontWeight="700" className="fill-foreground">fenthion · parathion · malathion — commonly used as insecticides; poisoning usually seen in</text>
        <text x="588" y="543" fontSize="3.7" fontWeight="700" className="fill-foreground">farmers; they irreversibly inhibit AChE → the full cholinergic excess, in three printed layers:</text>
        {effectChips.map((e, i) => {
          const y = 552 + i * 46;
          return (
            <g key={e.label}>
              <rect x="588" y={y} width="140" height="38" rx="5" className={i === 0 ? "fill-emergency-soft/40 stroke-emergency" : "fill-emergency-soft/40 stroke-emergency"} />
              <text x="658" y={y + 16} textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">{e.label}</text>
              <text x="658" y={y + 28} textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">{["DUMBBELSS", "succinylcholine-like", "depression → coma"][i]}</text>
              <text x="740" y={y + 16} fontSize="3.6" fontWeight="700" className="fill-foreground">{e.text.slice(0, 76)}</text>
              <text x="740" y={y + 27} fontSize="3.6" fontWeight="700" className="fill-foreground">{e.text.slice(76).trim()}</text>
            </g>
          );
        })}

        {/* antidote fork band */}
        <rect x="576" y="710" width="478" height="176" rx="10" className="fill-success-soft/30 stroke-success" />
        <text x="588" y="728" fontSize="4.4" fontWeight="800" className="fill-success">THE ANTIDOTE FORK — two antidotes, coadministered, early</text>
        <rect x="588" y="738" width="222" height="106" rx="8" className="fill-card stroke-success" />
        <rect x="598" y="748" width="72" height="17" rx="4" className="fill-success" />
        <text x="634" y="760" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-card">ATROPINE</text>
        <text x="598" y="777" fontSize="3.6" fontWeight="700" className="fill-foreground">A competitive inhibitor — reverses the</text>
        <text x="598" y="788" fontSize="3.6" fontWeight="700" className="fill-foreground">muscarinic DUMBBELSS. Can cross BBB</text>
        <text x="598" y="799" fontSize="3.6" fontWeight="700" className="fill-foreground">to relieve CNS symptoms. No nicotinic</text>
        <text x="598" y="810" fontSize="3.6" fontWeight="700" className="fill-foreground">coverage — the weakness persists.</text>
        <text x="598" y="830" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">MUSCARINIC GETS ATROPINE</text>
        <rect x="820" y="738" width="222" height="106" rx="8" className="fill-card stroke-success" />
        <rect x="830" y="748" width="86" height="17" rx="4" className="fill-success" />
        <text x="873" y="760" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-card">PRALIDOXIME</text>
        <text x="830" y="777" fontSize="3.6" fontWeight="700" className="fill-foreground">Regenerates AChE via dephosphorylation</text>
        <text x="830" y="788" fontSize="3.6" fontWeight="700" className="fill-foreground">— IF GIVEN EARLY. Reverses the nicotinic</text>
        <text x="830" y="799" fontSize="3.6" fontWeight="700" className="fill-foreground">NM blockade. Must be coadministered with</text>
        <text x="830" y="810" fontSize="3.6" fontWeight="700" className="fill-foreground">atropine (transient worsening); poor BBB.</text>
        <text x="830" y="830" fontSize="3.4" fontWeight="800" className="fill-muted-foreground">NICOTINIC GETS PRALIDOXIME</text>
        {/* the reactivation hooks up into the effect layers */}
        <path d="M 660 736 V 704" fill="none" className="stroke-success" strokeWidth="1.5" strokeDasharray="4 2.5" />
        <path d="M 655 708 L 660 700 L 665 708 Z" className="fill-success" />
        <text x="620" y="706" fontSize="3.2" fontWeight="800" className="fill-success">↩ competitive at M</text>
        <path d="M 930 736 V 704" fill="none" className="stroke-success" strokeWidth="1.5" strokeDasharray="4 2.5" />
        <path d="M 925 708 L 930 700 L 935 708 Z" className="fill-success" />
        <text x="890" y="706" fontSize="3.2" fontWeight="800" className="fill-success">↩ dephosphorylates AChE — if given early</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="916" width="1054" height="72" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="936" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 261 / book 239 (Pharmacology — Autonomic Drugs: Cholinomimetic agents)</text>
        <text x="42" y="950" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images on the page — one printed DRUG/ACTION/APPLICATIONS table under two spanning subheaders (Direct agonists · Indirect</text>
        <text x="42" y="961" fontSize="4" className="fill-muted-foreground">agonists) plus the Anticholinesterase poisoning block; VLM-confirmed in two passes (staging-ph16/vlm-census.txt), including a 200-dpi adjudication placing</text>
        <text x="42" y="972" fontSize="4" className="fill-muted-foreground">“Potent stimulator of sweat, tears, and saliva” in the APPLICATIONS cell. Verbatim table text is carried in the note&apos;s three table blocks; quoted mnemonics</text>
        <text x="42" y="983" fontSize="4" className="fill-muted-foreground">are First Aid&apos;s own. Edrophonium and echothiophate do not print on this page. This diagram is an ORIGINAL KYP design — nothing is reproduced.</text>
      </g>
    </svg>
  );
}
