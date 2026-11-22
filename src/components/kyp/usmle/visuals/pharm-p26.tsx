/* Pharmacology — PH-batch 26: Drugs affecting pupil size + Cytochrome P-450
 * interactions (selected) + Sulfa drugs (book 251, pdf 273 — FULL page,
 * THREE blocks). Census (pdfimages): ZERO raster images — the page's visual
 * assets are the two VECTOR iris illustrations (the only figure on the
 * page: a dilated pupil with radial muscle fibers labeled "Radial muscle
 * contraction (α1 receptor mediated)" and a constricted pupil with
 * concentric sphincter rings labeled "Sphincter muscle contraction (M3
 * receptor mediated)"), the three-column color-coded CYP table (red column
 * headers Inducers (+) / Substrates / Inhibitors (–), red mnemonic letters
 * inside the drug names, three red mnemonics printing INSIDE the table in a
 * bottom row), and the sulfa text block (red drug initials S-S-P-F-A-C-T-S;
 * "Scary Sulfa Pharm FACTS" printing in red in the right margin) —
 * VLM-read at 120dpi (staging-ph26/vlm-census.txt). This is an ORIGINAL
 * KYP ADAPTATION: Zone A rebuilds the pupil block as the two-pull iris
 * panel (the dilated iris docked by the mydriasis drug chips, the
 * constricted iris docked by the miosis chips, the printed α1/M3 figure
 * labels, and the meperidine exception flagged on both sides); Zone B
 * rebuilds the CYP table as the enzyme-amplitude model (the four
 * substrates in the middle, the nine inducers ramping enzyme up = LESS
 * drug = failure, the fourteen inhibitors blocking enzyme = MORE drug =
 * toxicity, the chronic-vs-acute alcohol two-direction chip, and First
 * Aid's own three table mnemonics carried attributed in red bands); Zone C
 * rebuilds the sulfa block as the family panel (the eight drugs with their
 * S-S-P-F-A-C-T-S initials, the nine-reaction allergy cluster, and First
 * Aid's own red margin mnemonic carried attributed). The two-pull
 * classification, the amplitude model, the family panel, and the panel
 * layout are KYP's; every drug entry, figure label, and mnemonic is
 * preserved from the print, and all three blocks are ALSO carried verbatim
 * in the note's blocks. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export function PupilCypMap() {
  const w = 1102;
  const h = 1300;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drugs affecting pupil size, CYP-450 interactions, and sulfa drugs — the iris two-pull panel (a dilated pupil drawn with radial muscle fibers, alpha-1 receptor mediated, docked by the mydriasis drug chips: anticholinergics including atropine, TCAs, tropicamide, scopolamine, antihistamines; indirect sympathomimetics including amphetamines, cocaine, LSD plus meperidine; direct sympathomimetics — opposite a constricted pupil drawn with concentric sphincter rings, M3 receptor mediated, docked by the miosis chips: sympatholytic alpha-2 agonists, opioids except meperidine, parasympathomimetics with pilocarpine and organophosphates — with the meperidine exception flagged on both sides), the CYP-450 enzyme-amplitude panel (the four substrates theophylline, OCPs, anti-epileptics, warfarin in the middle; the nine inducers from St. John's wort to chronic alcohol overuse meaning more enzyme, less drug, therapeutic failure; the fourteen inhibitors from sodium valproate to grapefruit juice meaning less enzyme, more drug, toxicity; the chronic-versus-acute alcohol two-direction chip; and First Aid's own three table mnemonics carried attributed), and the sulfa family panel (the eight sulfa drugs with initials S-S-P-F-A-C-T-S, the nine-reaction allergy cluster from fever and UTI to SJS, cytopenias, interstitial nephritis, urticaria and photosensitivity, and First Aid's own red margin mnemonic Scary Sulfa Pharm FACTS) — an original KYP diagram of book 251." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drugs affecting pupil size, CYP-450 interactions &amp; sulfa drugs — the iris, the enzyme, and the family (original KYP diagram)</text>
        <rect x="742" y="25" width="320" height="18" className="fill-brand-soft" />
        <text x="902" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">2 pulls · 1 enzyme dial · 1 drug family · 3 blocks</text>
      </g>

      {/* ===== ZONE A — THE IRIS TWO-PULL PANEL ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="406" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE IRIS TWO-PULL SYSTEM — every pupil drug docks to one side (KYP reading of the printed block)</text>
        <text x="52" y="103" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">the pupil is the read-out of the sympathetic (α1, radial dilator) vs parasympathetic (M3, sphincter constrictor) balance — name the muscle, and the drug class follows</text>

        {/* MYDRIASIS half */}
        <rect x="52" y="112" width="492" height="26" rx="5" className="fill-emergency" />
        <text x="298" y="128.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">↑ PUPIL SIZE (MYDRIASIS) — the radial pull wins</text>
        {/* dilated iris — radial fibers */}
        <circle cx="150" cy="215" r="48" className="fill-card stroke-border" />
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          return (
            <line key={`spoke-${i}`} x1={150 + 27 * Math.cos(a)} y1={215 + 27 * Math.sin(a)} x2={150 + 44 * Math.cos(a)} y2={215 + 44 * Math.sin(a)} className="stroke-emergency" strokeWidth="1" />
          );
        })}
        <circle cx="150" cy="215" r="24" className="fill-foreground" />
        <text x="150" y="288" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Radial muscle contraction</text>
        <text x="150" y="298" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(α1 receptor mediated)</text>
        <text x="150" y="312" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">the printed figure label —</text>
        <text x="150" y="321" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">dilated pupil, radial fibers</text>
        {/* mydriasis chips */}
        {[
          ["ANTICHOLINERGICS", "eg, atropine, TCAs, tropicamide, scopolamine, antihistamines", "block M3 → the sphincter releases → unopposed radial dilation"],
          ["INDIRECT SYMPATHOMIMETICS", "eg, amphetamines, cocaine, LSD — + meperidine", "flood the synapse with NE → α1 driven; meperidine joins this entry (comma)"],
          ["DIRECT SYMPATHOMIMETICS", "contract the radial muscle at α1 themselves", "the printed third entry of the mydriasis column"],
        ].map(([head, drugs, mech], i) => (
          <g key={`myd-${i}`}>
            <rect x="252" y={138 + i * 66} width="290" height="58" rx="6" className="fill-card stroke-emergency" />
            <text x="262" y={150 + i * 66} fontSize="3.4" fontWeight="800" className="fill-emergency">{head as string}</text>
            <text x="262" y={160 + i * 66} fontSize="3.2" fontWeight="700" className="fill-foreground">{drugs as string}</text>
            <text x="262" y={170 + i * 66} fontSize="3" fontWeight="700" className="fill-muted-foreground">{(mech as string).slice(0, 46)}</text>
            <text x="262" y={179 + i * 66} fontSize="3" fontWeight="700" className="fill-muted-foreground">{(mech as string).slice(46, 92)}</text>
          </g>
        ))}

        {/* MIOSIS half */}
        <rect x="556" y="112" width="492" height="26" rx="5" className="fill-brand" />
        <text x="802" y="128.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-card">↓ PUPIL SIZE (MIOSIS) — the sphincter pull wins</text>
        {/* constricted iris — concentric sphincter rings */}
        <circle cx="654" cy="215" r="48" className="fill-card stroke-border" />
        {[40, 32, 24, 16].map((r, i) => (
          <circle key={`ring-${i}`} cx="654" cy="215" r={r} className="stroke-brand" strokeWidth="1" fill="none" />
        ))}
        <circle cx="654" cy="215" r="8" className="fill-foreground" />
        <text x="654" y="288" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">Sphincter muscle contraction</text>
        <text x="654" y="298" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">(M3 receptor mediated)</text>
        <text x="654" y="312" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">the printed figure label —</text>
        <text x="654" y="321" textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">constricted pupil, concentric rings</text>
        {/* miosis chips */}
        {[
          ["SYMPATHOLYTICS", "eg, α2-agonists", "cut sympathetic outflow → the radial pull withdraws → miosis"],
          ["OPIOIDS", "except meperidine", "pinpoint centrally — respiratory depression + miosis = the opioid stem"],
          ["PARASYMPATHOMIMETICS", "eg, pilocarpine — + organophosphates", "drive M3 → sphincter clamps; organophosphates flood the ACh synapse"],
        ].map(([head, drugs, mech], i) => (
          <g key={`mio-${i}`}>
            <rect x="756" y={138 + i * 66} width="290" height="58" rx="6" className="fill-card stroke-brand" />
            <text x="766" y={150 + i * 66} fontSize="3.4" fontWeight="800" className="fill-brand">{head as string}</text>
            <text x="766" y={160 + i * 66} fontSize="3.2" fontWeight="700" className="fill-foreground">{drugs as string}</text>
            <text x="766" y={170 + i * 66} fontSize="3" fontWeight="700" className="fill-muted-foreground">{(mech as string).slice(0, 46)}</text>
            <text x="766" y={179 + i * 66} fontSize="3" fontWeight="700" className="fill-muted-foreground">{(mech as string).slice(46, 92)}</text>
          </g>
        ))}

        {/* the meperidine exception band */}
        <rect x="52" y="336" width="996" height="28" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="550" y="353.5" textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">THE PRINTED EXCEPTION — meperidine: the one opioid that DILATES (atropine-like), printed on BOTH sides — joined by comma to the indirect-sympathomimetics entry, and carved out by “Opioids (except meperidine)”</text>
        {/* two-pull rule strip */}
        <rect x="52" y="372" width="996" height="42" rx="6" className="fill-card stroke-border" />
        <text x="64" y="387" fontSize="3.6" fontWeight="800" className="fill-foreground">THE READING RULE: dilation = α1 won (driven or unopposed) · constriction = M3 driven, α1 withdrawn, or the opioid system engaged</text>
        <text x="64" y="398" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Drive the winner directly (sympathomimetics / cholinomimetics) or take the loser offline (anticholinergics block M3 / sympatholytics cut α1) — two muscles, four roads, every drug on the page.</text>
        <text x="64" y="408" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Printed quirks carried: meperidine is NOT a separate bullet; the miosis column’s third entry is “Parasympathomimetics (eg, pilocarpine), organophosphates”; each iris caption prints once (the text layer embeds it twice).</text>
      </g>

      {/* ===== ZONE B — THE CYP-450 ENZYME-AMPLITUDE PANEL ===== */}
      <g>
        <rect x="36" y="486" width="1030" height="424" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="508" fontSize="5.4" fontWeight="800" className="fill-foreground">CYTOCHROME P-450 INTERACTIONS (SELECTED) — the enzyme-amplitude model (KYP reading of the printed table)</text>
        <text x="52" y="519" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">inducers turn the enzyme volume UP (substrate falls → failure) · inhibitors mute it (substrate rises → toxicity) — the four middle substrates are the gauges the exam reads</text>

        {/* inducers column */}
        <rect x="52" y="528" width="368" height="24" rx="5" className="fill-emergency" />
        <text x="236" y="544" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">INDUCERS (+) — 9 printed</text>
        {[
          ["St. John’s wort", "the “natural” inducer"], ["Phenytoin", "anti-epileptic + inducer"], ["Phenobarbital", "anti-epileptic + inducer"],
          ["Modafinil", "the wake-promoter"], ["Nevirapine", "the NNRTI"], ["Rifampin", "the TB classic"],
          ["Griseofulvin", "the antifungal"], ["Carbamazepine", "anti-epileptic + inducer"], ["Chronic alcohol overuse", "the drinking liver builds enzyme"],
        ].map(([drug, note], i) => (
          <g key={`ind-${i}`}>
            <rect x={52 + (i % 3) * 124} y={558 + Math.floor(i / 3) * 46} width="118" height="40" rx="5" className="fill-card stroke-emergency" />
            <text x={58 + (i % 3) * 124} y={571 + Math.floor(i / 3) * 46} fontSize="3.2" fontWeight="800" className="fill-emergency">{drug as string}</text>
            <text x={58 + (i % 3) * 124} y={581 + Math.floor(i / 3) * 46} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{(note as string).slice(0, 20)}</text>
            <text x={58 + (i % 3) * 124} y={590 + Math.floor(i / 3) * 46} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">{(note as string).slice(20, 40)}</text>
          </g>
        ))}
        <rect x="52" y="702" width="368" height="44" rx="6" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="236" y="718" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">MORE ENZYME = LESS DRUG → THERAPEUTIC FAILURE</text>
        <text x="236" y="730" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">subtherapeutic INR · OCP failure (breakthrough bleeding) · breakthrough seizures · loss of theophylline control</text>

        {/* substrates column */}
        <rect x="440" y="528" width="222" height="24" rx="5" className="fill-foreground" />
        <text x="551" y="544" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">SUBSTRATES — the 4 gauges</text>
        {[
          ["Theophylline", "levels swing → toxicity arrhythmias"],
          ["OCPs", "efficacy fails on inducers"],
          ["Anti-epileptics", "levels fall → seizures return"],
          ["Warfarin", "the INR — the exam’s favorite gauge"],
        ].map(([drug, note], i) => (
          <g key={`sub-${i}`}>
            <rect x="440" y={560 + i * 48} width="222" height="42" rx="6" className="fill-card stroke-border" />
            <text x="551" y={575 + i * 48} textAnchor="middle" fontSize="4" fontWeight="800" className="fill-foreground">{drug as string}</text>
            <text x="551" y={586 + i * 48} textAnchor="middle" fontSize="3" fontWeight="700" className="fill-muted-foreground">{note as string}</text>
          </g>
        ))}
        <rect x="440" y="758" width="222" height="30" rx="6" className="fill-brand-soft stroke-brand" />
        <text x="551" y="777" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">phenytoin · phenobarbital · carbamazepine are BOTH substrates AND inducers</text>

        {/* inhibitors column */}
        <rect x="682" y="528" width="366" height="24" rx="5" className="fill-brand" />
        <text x="865" y="544" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-card">INHIBITORS (–) — 14 printed</text>
        {[
          ["Sodium valproate", "S"], ["Isoniazid", "I"], ["Cimetidine", "C"], ["Ketoconazole", "K"],
          ["Fluconazole", "F"], ["Acute alcohol overuse", "A"], ["Chloramphenicol", "C"], ["Erythromycin/clarithromycin", "E"],
          ["Sulfonamides", "S"], ["Ciprofloxacin", "C"], ["Omeprazole", "O"], ["Amiodarone", "Am"],
          ["Ritonavir", "R"], ["Grapefruit juice", "the food"],
        ].map(([drug, letter], i) => (
          <g key={`inh-${i}`}>
            <rect x={682 + (i % 3) * 124} y={558 + Math.floor(i / 3) * 32} width="118" height="27" rx="5" className="fill-card stroke-brand" />
            <text x={689 + (i % 3) * 124} y={570 + Math.floor(i / 3) * 32} fontSize="3" fontWeight="800" className="fill-brand">{(letter as string)}</text>
            <text x={726 + (i % 3) * 124} y={570 + Math.floor(i / 3) * 32} textAnchor="middle" fontSize="3" fontWeight="700" className="fill-foreground">{(drug as string).slice(0, 1) + (drug as string).slice(1, 19)}</text>
          </g>
        ))}
        <rect x="682" y="702" width="366" height="44" rx="6" className="fill-brand-soft/30 stroke-brand" />
        <text x="865" y="718" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">LESS ENZYME = MORE DRUG → TOXICITY</text>
        <text x="865" y="730" textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">supratherapeutic INR + bleeding · theophylline toxicity (nausea, arrhythmias) · anti-epileptic toxicity (ataxia, nystagmus)</text>

        {/* alcohol two-direction chip */}
        <rect x="52" y="758" width="368" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="236" y="777" textAnchor="middle" fontSize="3.6" fontWeight="800" className="fill-foreground">ALCOHOL, BOTH DIRECTIONS: chronic overuse → INDUCER (+) · acute overuse → INHIBITOR (–)</text>

        {/* First Aid's own mnemonics — attributed, red bands */}
        <rect x="52" y="796" width="996" height="66" rx="8" className="fill-card stroke-emergency" />
        <text x="64" y="810" fontSize="3.6" fontWeight="800" className="fill-emergency">FIRST AID’S OWN MNEMONICS — printed in red inside the table, in a bottom row beneath the columns (carried attributed, verbatim)</text>
        <text x="64" y="823" fontSize="3.4" fontWeight="800" className="fill-foreground">Inducers: “St. John’s funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol”</text>
        <text x="64" y="833" fontSize="3" fontWeight="700" className="fill-muted-foreground">(the print wraps as “(phen-” / “phen)” — St. John’s wort · (phen-phen) = phenytoin + phenobarbital · mom = modafinil · never = nevirapine · refuses = rifampin · greasy = griseofulvin · carbs = carbamazepine · chronic alcohol = chronic alcohol overuse)</text>
        <text x="64" y="845" fontSize="3.4" fontWeight="800" className="fill-foreground">Substrates: “The OCPs are anti-war” (The-ophylline · OCPs · Anti-epileptics · War-farin)</text>
        <text x="64" y="857" fontSize="3.4" fontWeight="800" className="fill-foreground">Inhibitors: “SICK FACES come when I am really drinking grapefruit juice”</text>
        <text x="64" y="866" fontSize="3" fontWeight="700" className="fill-muted-foreground">(SICK FACES = the first nine: Sodium valproate · Isoniazid · Cimetidine · Ketoconazole · Fluconazole · Acute alcohol · Chloramphenicol · Erythromycin · Sulfonamides; the tail carries ciprofloxacin, omeprazole, amiodarone, ritonavir, grapefruit juice)</text>
      </g>

      {/* ===== ZONE C — THE SULFA FAMILY PANEL ===== */}
      <g>
        <rect x="36" y="920" width="1030" height="250" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="942" fontSize="5.4" fontWeight="800" className="fill-foreground">SULFA DRUGS — one family across seven classes, one nine-reaction allergy list (KYP reading of the printed block)</text>

        {/* the eight drugs with initials */}
        {[
          ["S", "Sulfonamide antibiotics"], ["S", "Sulfasalazine"], ["P", "Probenecid"], ["F", "Furosemide"],
          ["A", "Acetazolamide"], ["C", "Celecoxib"], ["T", "Thiazides"], ["S", "Sulfonylureas"],
        ].map(([letter, drug], i) => (
          <g key={`sulfa-${i}`}>
            <rect x={52 + (i % 4) * 148} y={954 + Math.floor(i / 4) * 50} width="142" height="44" rx="6" className="fill-card stroke-border" />
            <text x={60 + (i % 4) * 148} y={972 + Math.floor(i / 4) * 50} fontSize="7" fontWeight="800" className="fill-emergency">{letter as string}</text>
            <text x={76 + (i % 4) * 148} y={972 + Math.floor(i / 4) * 50} fontSize="3.2" fontWeight="800" className="fill-foreground">{(drug as string).slice(0, 18)}</text>
            <text x={76 + (i % 4) * 148} y={982 + Math.floor(i / 4) * 50} fontSize="2.8" fontWeight="700" className="fill-muted-foreground">
              {["the antibiotic", "the IBD agent", "the uricosuric", "the loop diuretic", "the CA inhibitor", "the COX-2 inhibitor", "the thiazide diuretic", "the hypoglycemics"][i]}
            </text>
          </g>
        ))}
        <text x="64" y="1064" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Printed order, red initial capitals S-S-P-F-A-C-T-S: 1 antibiotic + 1 IBD agent + 1 uricosuric + 3 diuretics + 1 COX-2 inhibitor + 1 oral hypoglycemic group = 8 drugs.</text>

        {/* the nine-reaction cluster */}
        <rect x="656" y="954" width="392" height="120" rx="8" className="fill-card stroke-border" />
        <text x="668" y="970" fontSize="4" fontWeight="800" className="fill-foreground">THE NINE-REACTION ALLERGY LIST (printed sentence, verbatim)</text>
        <text x="668" y="981" fontSize="3" fontWeight="700" className="fill-muted-foreground">“Patients with sulfa allergies may develop…”</text>
        {[
          ["fever · UTI", "the symptomatic pair"],
          ["SJS · urticaria (hives) · photosensitivity", "the dermatologic three"],
          ["hemolytic anemia · thrombocytopenia · agranulocytosis", "the three cytopenias"],
          ["acute interstitial nephritis", "the kidney — fever + rash + eosinophiluria + ↑ creatinine"],
        ].map(([reactions, note], i) => (
          <g key={`rxn-${i}`}>
            <rect x="668" y={988 + i * 21} width="370" height="18" rx="4" className="fill-emergency-soft/20 stroke-emergency" />
            <text x="676" y={1000 + i * 21} fontSize="3.1" fontWeight="800" className="fill-foreground">{reactions as string}</text>
            <text x="1030" y={1000 + i * 21} textAnchor="end" fontSize="2.7" fontWeight="700" className="fill-muted-foreground">{note as string}</text>
          </g>
        ))}

        {/* First Aid's own margin mnemonic — attributed */}
        <rect x="52" y="1082" width="996" height="30" rx="6" className="fill-emergency" />
        <text x="550" y="1101" textAnchor="middle" fontSize="4.4" fontWeight="800" className="fill-card">“Scary Sulfa Pharm FACTS” — First Aid’s own mnemonic, printed in red in the right margin (initials S-S-P-F-A-C-T-S in list order)</text>
        <text x="52" y="1128" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Sulfa is a family, not a drug: the allergy crosses indications — furosemide for heart failure, acetazolamide for glaucoma, thiazides for hypertension, celecoxib for arthritis, sulfonylureas for diabetes, probenecid for gout, sulfasalazine for IBD — check the family before every new prescription.</text>
        <text x="52" y="1140" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">Printed quirk carried: the last drug prints “Sulfonylureas” (the text layer’s spelling — the VLM’s “Sulfonureas” read is adjudicated to the text layer; raw + layout agree).</text>
      </g>

      {/* ===== ZONE D — THE THREE-RULE PROTOCOL STRIP ===== */}
      <g>
        <rect x="36" y="1180" width="1030" height="52" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="1196" fontSize="4.6" fontWeight="800" className="fill-foreground">THE WHOLE PAGE IN THREE RULES (the KYP protocol)</text>
        {[
          ["RULE 1 — THE TWO PULLS", "dilation = α1 won (driven or M3 blocked) · constriction = M3 driven, α1 withdrawn, or opioid — except meperidine", 52, 316],
          ["RULE 2 — THE DIRECTION", "induce = more enzyme = less drug = failure · inhibit = less enzyme = more drug = toxicity", 380, 316],
          ["RULE 3 — THE FAMILY", "sulfa = 8 drugs (S-S-P-F-A-C-T-S), 7 classes, 9 reactions — check every new prescription", 708, 316],
        ].map(([label, sub, x, bw], i) => (
          <g key={`rule-${i}`}>
            <rect x={x as number} y={1204} width={bw as number} height={20} rx={5} className="fill-card stroke-brand" />
            <text x={(x as number) + (bw as number) / 2} y={1211} textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">{label as string}</text>
            <text x={(x as number) + (bw as number) / 2} y={1220} textAnchor="middle" fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{sub as string}</text>
          </g>
        ))}
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1242" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1260" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 273 / book 251 (Pharmacology — Toxicities and Adverse Effects: Drugs affecting pupil size; Cytochrome P-450 interactions (selected); Sulfa drugs)</text>
        <text x="42" y="1272" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page’s assets are the two vector iris illustrations (the only figure), the three-column color-coded CYP table (red headers + red mnemonic letters),</text>
        <text x="42" y="1282" fontSize="4" className="fill-muted-foreground">and the sulfa block (red drug initials + the red margin mnemonic “Scary Sulfa Pharm FACTS”) — VLM-read at 120dpi (staging-ph26/vlm-census.txt). This diagram is an ORIGINAL KYP ADAPTATION:</text>
        <text x="42" y="1292" fontSize="4" className="fill-muted-foreground">the two-pull panel, the enzyme-amplitude model, and the family panel are KYP’s; every drug entry, figure label, and mnemonic is preserved from the print, and all three blocks are also carried verbatim in the note’s blocks.</text>
      </g>
    </svg>
  );
}
