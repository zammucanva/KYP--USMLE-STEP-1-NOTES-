/* Pharmacology — PH-batch 22: Specific toxicity treatments (book 247,
 * pdf 269 — FULL page, TWO tables: the 23-row antidote table + the 5-row
 * Drug reactions—cardiovascular table). Census (pdfimages): ZERO raster
 * images — the page's visual assets are the two color-coded tables
 * themselves (red mnemonic capitals CASE · VANCEN · PEDS · ABCDEF, red
 * in-cell mnemonics, blue titles and reaction names) — VLM-read at 120dpi
 * (staging-ph22/vlm-census.txt + the focused bottom-table crop pass,
 * vlm-census-bottom.txt), no margin mnemonics, no images. This is an
 * ORIGINAL KYP ADAPTATION: the 23 printed toxin→antidote pairs re-sorted
 * into four rescue-family routing lanes — BIND IT (chelation & capture),
 * BLOCK IT (receptor competition), REFILL IT (substrate repletion),
 * REBOOT IT (enzyme regeneration, metabolic blockade, detour) — with the
 * split rows (organophosphates = atropine + pralidoxime, the printed
 * "Atropine > pralidoxime"; methemoglobin = methylene blue + vitamin C)
 * shown in both of their lanes; the ABCDEF torsades band (Methadone +
 * antiArrhythmics, antiBiotics, anti"C"ychotics, antiDepressants,
 * antiEmetics, antiFungals → prolonged QT → early afterdepolarizations →
 * torsades, with First Aid's own "Memorize your ABCDEF" instruction
 * carried attributed); and the cardiovascular reactions panel (CASE
 * vasospasm, VANCEN flushing + the vancomycin infusion reaction,
 * dilated-cardiomyopathy trio with dexrazoxane prevention, dihydropyridine
 * edema). The four-family classification, the lanes, the bands, and the
 * panels are KYP's; every toxin, antidote, and causal agent is preserved
 * from the print. The antidote chips echo the source's red drug text via
 * the emergency token. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export function AntidoteMap() {
  const w = 1102;
  const h = 1284;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Specific toxicity treatments — the 23 printed toxin-antidote pairs re-sorted into four rescue-family routing lanes (bind it: chelation and capture; block it: receptor competition; refill it: substrate repletion; reboot it: enzyme regeneration, metabolic blockade, detour), the ABCDEF torsades de pointes band with methadone and the QT-to-early-afterdepolarizations chain, and the cardiovascular reactions panel (CASE vasospasm, VANCEN flushing with the vancomycin infusion reaction, dilated cardiomyopathy, dihydropyridine edema) — an original KYP diagram of book 247." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Specific toxicity treatments — the antidote table, classified by rescue mechanism (original KYP diagram)</text>
        <rect x="742" y="25" width="320" height="18" className="fill-brand-soft" />
        <text x="902" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">23 pairs · 4 rescue families · 1 page</text>
      </g>

      {/* ===== ZONE A — THE FOUR RESCUE FAMILY LANES ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="520" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE FOUR RESCUE FAMILIES — the printed pairs, re-sorted by how the antidote works (KYP classification)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">read any row through this rule: the mechanism of harm names the rescue family; the rescue family names the antidote</text>

        {/* FAMILY 1 — BIND IT */}
        <rect x="52" y="110" width="1000" height="104" rx="10" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="64" y="126" fontSize="4.6" fontWeight="800" className="fill-emergency">FAMILY 1 — BIND IT: chelation &amp; capture</text>
        <text x="64" y="136" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the antidote sequesters the toxin itself — chelators, antibodies, a decoy, charge neutralization, and O2 displacing carbon monoxide</text>
        {[
          ["Arsenic", "dimercaprol, succimer"], ["Mercury", "dimercaprol, succimer"], ["Lead", "P·E·D·S (PEDS)"], ["Copper", "“Penny”cillamine, trientine"], ["Iron (Fe)", "de-Fe trio"], ["Carbon monoxide", "100% O2, hyperbaric O2"],
        ].map(([toxin, antidote], i) => (
          <g key={`bind1-${i}`}>
            <rect x={52 + i * 164} y={144} width={158} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 164} y={159.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 164} y={165.5} fontSize="3.2" fontWeight="800" className="fill-emergency">→ {antidote}</text>
          </g>
        ))}
        {[
          ["Heparin", "protamine sulfate"], ["Cyanide", "hydroxocobalamin"], ["Dabigatran", "idarucizumab"], ["Digoxin", "antibody fragments"], ["Direct factor Xa inhib.", "andexanet alfa"],
        ].map(([toxin, antidote], i) => (
          <g key={`bind2-${i}`}>
            <rect x={52 + i * 164} y={174} width={158} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 164} y={189.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 164} y={195.5} fontSize="3.2" fontWeight="800" className="fill-emergency">→ {antidote}</text>
          </g>
        ))}

        {/* FAMILY 2 — BLOCK IT */}
        <rect x="52" y="222" width="1000" height="92" rx="10" className="fill-brand-soft/30 stroke-brand" />
        <text x="64" y="238" fontSize="4.6" fontWeight="800" className="fill-brand">FAMILY 2 — BLOCK IT: receptor competition</text>
        <text x="64" y="248" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">a competitor out-competes the toxin at its own receptor</text>
        {[
          ["Opioids", "naloxone"], ["Benzodiazepines", "flumazenil"], ["AChE inhib., organophosphates", "atropine (muscarinic)"], ["β-blockers", "atropine, glucagon, saline"],
        ].map(([toxin, antidote], i) => (
          <g key={`block-${i}`}>
            <rect x={52 + i * 251} y={256} width={245} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 251} y={271.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 251} y={277.5} fontSize="3.2" fontWeight="800" className="fill-brand">→ {antidote}</text>
          </g>
        ))}
        <text x="64" y="300" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">glucagon bypasses the blocked β receptor through its own Gs-coupled receptor — competition by detour around the block</text>

        {/* FAMILY 3 — REFILL IT */}
        <rect x="52" y="322" width="1000" height="92" rx="10" className="fill-success-soft/40 stroke-success" />
        <text x="64" y="338" fontSize="4.6" fontWeight="800" className="fill-success">FAMILY 3 — REFILL IT: substrate &amp; cofactor repletion</text>
        <text x="64" y="348" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">the toxin drained something the body needs; the antidote puts it back</text>
        {[
          ["Acetaminophen", "N-acetylcysteine (glutathione)"], ["Methotrexate", "leucovorin (folate)"], ["Warfarin", "vitamin K (delayed) + PCC/FFP (immediate)"], ["Methemoglobin", "vitamin C (reducing agent)"],
        ].map(([toxin, antidote], i) => (
          <g key={`refill-${i}`}>
            <rect x={52 + i * 251} y={356} width={245} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 251} y={371.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 251} y={377.5} fontSize="3.2" fontWeight="800" className="fill-success">→ {antidote}</text>
          </g>
        ))}
        <text x="64" y="400" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">K IS SLOW, FAB IS FAST — vitamin K re-arms factor synthesis (hours) while PCC/FFP replace the finished factors now</text>

        {/* FAMILY 4 — REBOOT IT */}
        <rect x="52" y="422" width="1000" height="108" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text x="64" y="438" fontSize="4.6" fontWeight="800" className="fill-warning">FAMILY 4 — REBOOT IT: regenerate, block the conversion, detour</text>
        <text x="64" y="448" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">pralidoxime regenerates the poisoned enzyme · fomepizole blocks the conversion · methylene blue reduces · nitrite + thiosulfate detour</text>
        {[
          ["AChE inhib., organophosphates", "pralidoxime (regenerates AChE)"], ["Methanol, ethylene glycol", "fomepizole > ethanol, dialysis"], ["Antimuscarinic, anticholinergic", "physostigmine (crosses BBB)"],
        ].map(([toxin, antidote], i) => (
          <g key={`reboot1-${i}`}>
            <rect x={52 + i * 334} y={456} width={328} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 334} y={471.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 334} y={477.5} fontSize="3.2" fontWeight="800" className="fill-warning">→ {antidote}</text>
          </g>
        ))}
        {[
          ["Methemoglobin", "methylene blue (Fe3+ → Fe2+)"], ["Cyanide", "nitrites + sodium thiosulfate (detour)"], ["Salicylates / TCAs", "NaHCO3 (urine / membrane)"],
        ].map(([toxin, antidote], i) => (
          <g key={`reboot2-${i}`}>
            <rect x={52 + i * 334} y={486} width={328} height={24} rx={5} className="fill-card stroke-border" />
            <text x={60 + i * 334} y={501.5} fontSize="3.4" fontWeight="700" className="fill-foreground">{toxin}</text>
            <text x={60 + i * 334} y={507.5} fontSize="3.2" fontWeight="800" className="fill-warning">→ {antidote}</text>
          </g>
        ))}

        {/* the split rows */}
        <rect x="52" y="538" width="1000" height="42" rx="6" className="fill-card stroke-border" />
        <text x="64" y="552" fontSize="3.6" fontWeight="800" className="fill-foreground">SPLIT ROWS — some printed rows live in two families at once, exactly as the print splits them:</text>
        <text x="64" y="562" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">“Atropine &gt; pralidoxime” (organophosphates: BLOCK + REBOOT) · cyanide (BIND + REBOOT) · methemoglobin (REBOOT + REFILL) · “control hyperthermia” is the anticholinergic row’s supportive half</text>
        <text x="64" y="572" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">“Fomepizole (the foe of methanol) &gt; ethanol, dialysis” — one cell, three strategies: block the enzyme, compete for it, remove the parent</text>
      </g>

      {/* ===== ZONE B — THE ABCDEF TORSADES BAND ===== */}
      <g>
        <rect x="36" y="600" width="1030" height="218" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="622" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DEEPEST CARDIOVASCULAR ROW — torsades de pointes and the agents that prolong the QT interval</text>

        {/* the QT chain */}
        {[
          ["METHADONE + THE ABCDEF AGENTS", "the culprits — M leads, the letters follow", "fill-card stroke-border", "fill-foreground", 52, 240],
          ["PROLONG QT INTERVAL", "prolonged repolarization, phase 3", "fill-warning-soft/40 stroke-warning", "fill-foreground", 316, 200],
          ["EARLY AFTERDEPOLARIZATIONS", "prolonged plateau re-opens Ca2+ channels", "fill-warning-soft/40 stroke-warning", "fill-foreground", 540, 240],
          ["TORSADES DE POINTES", "polymorphic VT, twisting axis", "fill-emergency stroke-emergency", "fill-card", 804, 244],
        ].map(([label, sub, bg, fg, x, bw], i) => (
          <g key={`qt-${i}`}>
            <rect x={x as number} y={634} width={bw as number} height={40} rx={8} className={bg as string} />
            <text x={(x as number) + (bw as number) / 2} y={650} textAnchor="middle" fontSize="4" fontWeight="800" className={fg as string}>{label as string}</text>
            <text x={(x as number) + (bw as number) / 2} y={660} textAnchor="middle" fontSize="3.2" fontWeight="700" className={(i === 3 ? "fill-card" : "fill-muted-foreground") as string}>{sub as string}</text>
            {i < 3 && (
              <g>
                <line x1={(x as number) + (bw as number) + 4} y1={654} x2={(x as number) + (bw as number) + 22} y2={654} className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${(x as number) + (bw as number) + 18} 650 L ${(x as number) + (bw as number) + 28} 654 L ${(x as number) + (bw as number) + 18} 658 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}

        {/* the M + ABCDEF chips */}
        {[
          ["M", "Methadone", "leads the list — outside the letters"],
          ["A", "antiArrhythmics", "class IA, III"],
          ["B", "antiBiotics", "eg, macrolides, fluoroquinolones"],
          ["C", "anti“C”ychotics", "eg, ziprasidone"],
          ["D", "antiDepressants", "eg, TCAs"],
          ["E", "antiEmetics", "eg, ondansetron"],
          ["F", "antiFungals", "eg, fluconazole"],
        ].map(([letter, klass, example], i) => (
          <g key={`abcdef-${i}`}>
            <rect x={52 + i * 143} y={690} width={137} height={52} rx={6} className="fill-card stroke-emergency" />
            <text x={64 + i * 143} y={706} fontSize="8" fontWeight="800" className="fill-emergency">{letter as string}</text>
            <text x={64 + i * 143} y={718} fontSize="3.4" fontWeight="800" className="fill-foreground">{klass as string}</text>
            <text x={64 + i * 143} y={727} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{example as string}</text>
          </g>
        ))}

        {/* First Aid's own instruction, attributed */}
        <rect x="52" y="750" width="1000" height="24" rx={6} className="fill-emergency" />
        <text x="552" y="765.5" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">(Memorize your ABCDEF) — First Aid’s own instruction, printed in red on book 247 (attributed)</text>
        <text x="52" y="790" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Every class on the row owes its place to one current (KYP context): IKr/hERG blockade in phase 3 → QT prolongation → early afterdepolarizations → triggered activity → torsades.</text>
        <text x="52" y="802" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">The capitals are First Aid’s red mnemonic letters; the printed spelling anti“C”ychotics (quotes around the red C) is carried as printed.</text>
      </g>

      {/* ===== ZONE C — THE CARDIOVASCULAR REACTIONS PANEL ===== */}
      <g>
        <rect x="36" y="828" width="1030" height="326" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="850" fontSize="5.4" fontWeight="800" className="fill-foreground">DRUG REACTIONS—CARDIOVASCULAR — the other four printed rows</text>
        <text x="52" y="861" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the reading rule: the adverse reaction IS the drug’s intended mechanism, pushed one tissue too far</text>

        {/* card 1 — coronary vasospasm / CASE */}
        <rect x="52" y="872" width="492" height="130" rx="10" className="fill-card stroke-border" />
        <text x="64" y="890" fontSize="4.6" fontWeight="800" className="fill-foreground">CORONARY VASOSPASM — “CASE”</text>
        <text x="64" y="904" fontSize="3.8" fontWeight="800" className="fill-emergency">Cocaine · Amphetamines · Sumatriptan · Ergot alkaloids</text>
        <text x="64" y="917" fontSize="3.6" fontWeight="700" className="fill-foreground">Each constricts vascular smooth muscle BY DESIGN — in a coronary</text>
        <text x="64" y="927" fontSize="3.6" fontWeight="700" className="fill-foreground">artery the same vasoconstriction becomes ischemic chest pain.</text>
        <text x="64" y="941" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">The capitals C-A-S-E are First Aid’s red mnemonic letters,</text>
        <text x="64" y="951" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">carried attributed; the printed order is as shown.</text>
        <text x="64" y="968" fontSize="3.4" fontWeight="800" className="fill-emergency">VASOCONSTRICTION, MISPLACED</text>

        {/* card 2 — cutaneous flushing / VANCEN */}
        <rect x="556" y="872" width="492" height="130" rx="10" className="fill-card stroke-border" />
        <text x="568" y="890" fontSize="4.6" fontWeight="800" className="fill-foreground">CUTANEOUS FLUSHING — “VANCEN [dancing]”</text>
        <text x="568" y="904" fontSize="3.8" fontWeight="800" className="fill-emergency">Vancomycin · Adenosine · Niacin · Ca2+ channel blockers · Echinocandins · Nitrates</text>
        <text x="568" y="917" fontSize="3.6" fontWeight="700" className="fill-foreground">“flushed from VANCEN [dancing]” — the printed parenthetical.</text>
        <text x="568" y="930" fontSize="3.6" fontWeight="700" className="fill-foreground">Vancomycin infusion reaction (formerly red man syndrome): histamine</text>
        <text x="568" y="940" fontSize="3.6" fontWeight="700" className="fill-foreground">release → widespread pruritic erythema; infusion rate–dependent —</text>
        <text x="568" y="950" fontSize="3.6" fontWeight="700" className="fill-foreground">manage with slower infusion rate, diphenhydramine.</text>
        <text x="568" y="968" fontSize="3.4" fontWeight="800" className="fill-emergency">VASODILATION / HISTAMINE, MISPLACED</text>

        {/* card 3 — dilated cardiomyopathy */}
        <rect x="52" y="1012" width="492" height="130" rx="10" className="fill-card stroke-border" />
        <text x="64" y="1030" fontSize="4.6" fontWeight="800" className="fill-foreground">DILATED CARDIOMYOPATHY</text>
        <text x="64" y="1044" fontSize="3.8" fontWeight="800" className="fill-emergency">Alcohol · anthracycline (doxorubicin, daunorubicin) · trastuzumab</text>
        <text x="64" y="1057" fontSize="3.6" fontWeight="700" className="fill-foreground">Direct myocyte injury → the dilated, poorly contracting</text>
        <text x="64" y="1067" fontSize="3.6" fontWeight="700" className="fill-foreground">ventricle. The printed cell: “prevent with dexrazoxane” —</text>
        <text x="64" y="1077" fontSize="3.6" fontWeight="700" className="fill-foreground">the do/da/de of doxorubicin / daunorubicin / dexrazoxane</text>
        <text x="64" y="1087" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">print as red capitals (First Aid’s own, attributed).</text>
        <text x="64" y="1108" fontSize="3.4" fontWeight="800" className="fill-emergency">MYOCYTE TOXICITY</text>

        {/* card 4 — peripheral edema */}
        <rect x="556" y="1012" width="492" height="130" rx="10" className="fill-card stroke-border" />
        <text x="568" y="1030" fontSize="4.6" fontWeight="800" className="fill-foreground">PERIPHERAL EDEMA</text>
        <text x="568" y="1044" fontSize="3.8" fontWeight="800" className="fill-emergency">Dihydropyridine Ca2+ channel blockers (eg, amlodipine)</text>
        <text x="568" y="1057" fontSize="3.6" fontWeight="700" className="fill-foreground">Precapillary arteriolar dilation without matching venodilation</text>
        <text x="568" y="1067" fontSize="3.6" fontWeight="700" className="fill-foreground">→ ↑ capillary hydrostatic pressure → dependent edema —</text>
        <text x="568" y="1077" fontSize="3.6" fontWeight="700" className="fill-foreground">the intended arteriolar dilation of the DHP class, misplaced</text>
        <text x="568" y="1087" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">into the dependent capillary beds.</text>
        <text x="568" y="1108" fontSize="3.4" fontWeight="800" className="fill-emergency">ARTERIOLAR DILATION, MISPLACED</text>
      </g>

      {/* ===== ZONE D — THE FOUR-MOVES PROTOCOL STRIP ===== */}
      <g>
        <rect x="36" y="1164" width="1030" height="52" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1180" fontSize="4.6" fontWeight="800" className="fill-foreground">READING ANY ANTIDOTE QUESTION IN FOUR MOVES (the KYP protocol)</text>
        {[
          ["MOVE 1 — NAME THE TOXIN", "the vignette names it: bottle, job, smell, rhythm", 52, 240],
          ["MOVE 2 — NAME THE HARM", "metal · receptor ± · enzyme · drained substrate", 302, 240],
          ["MOVE 3 — MATCH THE FAMILY", "BIND / BLOCK / REFILL / REBOOT", 552, 240],
          ["MOVE 4 — NAME THE ANTIDOTE", "and read its punctuation: “>” and (parentheses)", 802, 246],
        ].map(([label, sub, x, bw], i) => (
          <g key={`move-${i}`}>
            <rect x={x as number} y={1188} width={bw as number} height={20} rx={5} className="fill-card stroke-brand" />
            <text x={(x as number) + (bw as number) / 2} y={1195} textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">{label as string}</text>
            <text x={(x as number) + (bw as number) / 2} y={1204} textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">{sub as string}</text>
            {i < 3 && (
              <g>
                <line x1={(x as number) + (bw as number) + 3} y1={1198} x2={(x as number) + (bw as number) + 9} y2={1198} className="stroke-foreground" strokeWidth="1.2" />
                <path d={`M ${(x as number) + (bw as number) + 6} 1195 L ${(x as number) + (bw as number) + 12} 1198 L ${(x as number) + (bw as number) + 6} 1201 Z`} className="fill-foreground" />
              </g>
            )}
          </g>
        ))}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1226" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1244" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 269 / book 247 (Pharmacology — Toxicities and Adverse Effects: Specific toxicity treatments; Drug reactions—cardiovascular)</text>
        <text x="42" y="1256" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page’s assets are the two color-coded tables themselves (red mnemonic capitals, red in-cell mnemonics, blue titles), VLM-read at 120dpi,</text>
        <text x="42" y="1266" fontSize="4" className="fill-muted-foreground">no margin mnemonics. This diagram is an ORIGINAL KYP ADAPTATION — the four-family classification, the lanes, the ABCDEF band, and the reactions panel are KYP’s; every toxin,</text>
        <text x="42" y="1276" fontSize="4" className="fill-muted-foreground">antidote, and causal agent is preserved from the print, and both tables are also carried verbatim in the note’s table blocks. Printed order: 23 antidote rows, acetaminophen→warfarin.</text>
      </g>
    </svg>
  );
}
