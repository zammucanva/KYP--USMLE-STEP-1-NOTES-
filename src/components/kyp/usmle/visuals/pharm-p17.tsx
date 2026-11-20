/* Pharmacology — PH-batch 17: Muscarinic antagonists & Atropine (book
 * 240, pdf 262, FULL page). Original KYP diagram — the source page
 * carries NO raster art at all (pdfimages census: ZERO images, pure
 * text + tables; VLM was available this session and adjudicated the
 * interleaved table structures in one 120dpi pass, saved to
 * .usmle-pipeline-cache/staging-ph17/vlm-census.txt). Drawn here with
 * original KYP glyphs: LEFT, atropine's six-organ end-organ SPINE
 * (Eye / Airway / Heart / Stomach / Gut / Bladder chips, each with its
 * printed action and the KYP DRY-WIDE-FAST-STILL verb tag) with the
 * printed DUMBBELSS note running vertically as the spanning banner it
 * is in print (one cell spanning all six rows); RIGHT, the seven
 * directory rows DOCKED by organ selectivity in printed row order
 * (Eye atropine/homatropine/tropicamide · CNS benztropine/
 * trihexyphenidyl "park my Benz" · GI+resp glycopyrrolate · GI
 * hyoscyamine/dicyclomine · Resp ipratropium/tiotropium with the
 * duration rule · GU the SOFT quartet "Make bladder SOFT" · CNS
 * scopolamine), each tagged with its CNS-entry status; BOTTOM, the
 * exam-trap band — the CNS tollbooth (charged quaternary amines stay
 * out vs tertiary amines crossing; a KYP synthesis, flagged as such),
 * the DUMBBELSS boundary rule (printed), and the bladder-thermostat
 * pair (oxybutynin → ⊝ M₃ detrusor on the micturition page; the
 * ↑-temperature-due-to-↓-sweating rule). Nothing is reproduced from
 * the book; purely presentational (no props, no hooks, no images). */

export function MuscarinicAntagonistMap() {
  const w = 1102;
  const h = 1254;
  const organs = [
    { name: "Eye", action: "↑ pupil dilation, cycloplegia", verb: "WIDE + STILL", drug: "atropine, homatropine, tropicamide" },
    { name: "Airway", action: "Bronchodilation, ↓ secretions", verb: "OPEN + DRY", drug: "glycopyrrolate · ipratropium, tiotropium" },
    { name: "Heart", action: "↑ heart rate", verb: "FAST", drug: "atropine — used to treat bradycardia" },
    { name: "Stomach", action: "↓ acid secretion", verb: "DRY", drug: "glycopyrrolate (oral: peptic ulcer)" },
    { name: "Gut", action: "↓ motility", verb: "STILL", drug: "hyoscyamine, dicyclomine (antispasmodics)" },
    { name: "Bladder", action: "↓ urgency in cystitis", verb: "STILL", drug: "the SOFT quartet — Make bladder SOFT" },
  ];
  const rows = [
    { badge: "EYE", drugs: "Atropine, homatropine, tropicamide", app1: "Produce mydriasis and cycloplegia", app2: "", cns: "↳ crosses into the CNS (tertiary) — the eye drops", ok: true },
    { badge: "CNS", drugs: "Benztropine, trihexyphenidyl", app1: "Parkinson disease (“park my Benz”) · Acute dystonia", app2: "", cns: "↳ crosses into the CNS — the CNS door", ok: true },
    { badge: "GI · RESP", drugs: "Glycopyrrolate", app1: "Parenteral: preoperative use to reduce airway secretions", app2: "Oral: reduces drooling, peptic ulcer", cns: "↳ no CNS entry (charged) — KYP synthesis", ok: false },
    { badge: "GI", drugs: "Hyoscyamine, dicyclomine", app1: "Antispasmodics for irritable bowel syndrome", app2: "", cns: "↳ peripheral gut door", ok: false },
    { badge: "RESP", drugs: "Ipratropium, tiotropium", app1: "COPD, asthma · Duration: tiotropium > ipratropium", app2: "", cns: "↳ no CNS entry (charged) — KYP synthesis", ok: false },
    { badge: "GU", drugs: "Solifenacin, Oxybutynin, Flavoxate, Tolterodine", app1: "Reduce bladder spasms and urge urinary incontinence", app2: "(overactive bladder) · Make bladder SOFT", cns: "↳ oxybutynin crosses (tertiary)", ok: true },
    { badge: "CNS", drugs: "Scopolamine", app1: "Motion sickness", app2: "", cns: "↳ crosses into the CNS — the CNS door", ok: true },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Muscarinic Antagonists & Atropine — the organ-system drug directory: atropine's six end-organ chips (eye, airway, heart, stomach, gut, bladder) with the printed DUMBBELSS note spanning all six rows, the seven drug rows docked by organ selectivity in printed order, and the exam-trap band (the CNS tollbooth: ipratropium, tiotropium, glycopyrrolate excluded from the CNS vs scopolamine and benztropine crossing; the DUMBBELSS boundary rule; the bladder door linking to micturition control) (original KYP diagram of book 240)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Muscarinic antagonists — one mechanism, seven doors</text>
        <rect x="812" y="25" width="250" height="18" className="fill-brand-soft" />
        <text x="937" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">the anticholinergic directory · book 240</text>
      </g>

      {/* ===== ZONE A — THE ATROPINE SPINE ===== */}
      <g>
        <rect x="36" y="70" width="404" height="600" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SPINE — atropine's end-organ pattern</text>

        {organs.map((o, i) => (
          <g key={`spine-${o.name}`}>
            <rect x="52" y={104 + i * 88} width="250" height="76" rx="10" className="fill-card stroke-brand" />
            <rect x="64" y={116 + i * 88} width="66" height="20" rx="5" className="fill-brand" />
            <text x="97" y={130 + i * 88} textAnchor="middle" fontSize="4.8" fontWeight="800" className="fill-card">{o.name}</text>
            <text x="286" y={130 + i * 88} textAnchor="end" fontSize="3.6" fontWeight="800" className="fill-muted-foreground">{o.verb}</text>
            <text x="64" y={152 + i * 88} fontSize="4.2" fontWeight="700" className="fill-foreground">{o.action}</text>
            <text x="64" y={168 + i * 88} fontSize="3.4" className="fill-muted-foreground">{o.drug}</text>
          </g>
        ))}

        {/* the spanning DUMBBELSS note — one cell spanning all six rows, as printed */}
        <rect x="314" y="104" width="112" height="516" rx="10" className="fill-warning-soft/40 stroke-warning" />
        <text transform="rotate(-90 344 608)" x="344" y="608" textAnchor="start" fontSize="5.2" fontWeight="800" className="fill-warning">NOTES — spans all six rows:</text>
        <text transform="rotate(-90 366 608)" x="366" y="608" textAnchor="start" fontSize="4.4" fontWeight="700" className="fill-foreground">“Blocks muscarinic effects (DUMBBELSS) of</text>
        <text transform="rotate(-90 384 608)" x="384" y="608" textAnchor="start" fontSize="4.4" fontWeight="700" className="fill-foreground">anticholinesterases, but not the nicotinic effects”</text>
        <text transform="rotate(-90 402 608)" x="402" y="608" textAnchor="start" fontSize="3.4" fontWeight="800" className="fill-warning">muscarinic (DUMBBELSS) — blocked · nicotinic — NOT blocked</text>
        <text x="52" y="638" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">verb tags = the KYP DRY-WIDE-FAST-STILL code (original)</text>
        <text x="52" y="652" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">↕ the NOTES cell is ONE printed cell spanning all six rows</text>
      </g>

      {/* ===== ZONE B — THE DIRECTORY ===== */}
      <g>
        <rect x="452" y="70" width="614" height="600" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="468" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE DIRECTORY — seven drug rows, printed row order, docked by organ</text>

        {rows.map((r, i) => {
          const y = 104 + i * 78;
          return (
            <g key={`dir-${r.badge}-${i}`}>
              <rect x="468" y={y} width="582" height="70" rx="10" className="fill-card stroke-border" />
              <rect x="468" y={y} width="76" height="70" rx="10" className={r.ok ? "fill-warning-soft/40 stroke-warning" : "fill-brand-soft/40 stroke-brand"} />
              <text x="506" y={y + 34} textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-foreground">{r.badge}</text>
              <text x="506" y={y + 48} textAnchor="middle" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">organ</text>
              <text x="556" y={y + 20} fontSize="4.4" fontWeight="800" className="fill-foreground">{r.drugs}</text>
              <text x="556" y={y + 38} fontSize="3.8" className="fill-foreground">{r.app1}</text>
              {r.app2 !== "" && <text x="556" y={y + 49} fontSize="3.8" className="fill-foreground">{r.app2}</text>}
              <text x="556" y={y + 64} fontSize="3.4" fontWeight="800" className={r.ok ? "fill-warning" : "fill-brand"}>{r.cns}</text>
            </g>
          );
        })}
      </g>

      {/* ===== ZONE C — EXAM-TRAP BAND ===== */}
      <g>
        <rect x="36" y="686" width="1030" height="252" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="708" fontSize="5.4" fontWeight="800" className="fill-foreground">EXAM TRAPS — the tollbooth, the boundary rule, and the bladder door</text>

        {/* trap 1 — the CNS tollbooth */}
        <rect x="52" y="722" width="326" height="202" rx="10" className="fill-card stroke-warning" />
        <text x="66" y="742" fontSize="4.8" fontWeight="800" className="fill-warning">THE CNS TOLLBOOTH (KYP synthesis)</text>
        <rect x="66" y="752" width="298" height="82" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="78" y="770" fontSize="4.2" fontWeight="800" className="fill-brand">STAYS OUT — charged (quaternary amines):</text>
        <text x="78" y="784" fontSize="4" fontWeight="700" className="fill-foreground">ipratropium · tiotropium · glycopyrrolate</text>
        <text x="78" y="798" fontSize="3.8" className="fill-foreground">peripheral doors only — airway, gut; NO</text>
        <text x="78" y="809" fontSize="3.8" className="fill-foreground">disorientation from these agents</text>
        <rect x="66" y="840" width="298" height="66" rx="8" className="fill-warning-soft/40 stroke-warning" />
        <text x="78" y="858" fontSize="4.2" fontWeight="800" className="fill-warning">CROSSES — uncharged (tertiary):</text>
        <text x="78" y="872" fontSize="4" fontWeight="700" className="fill-foreground">scopolamine · benztropine · trihexyphenidyl</text>
        <text x="78" y="886" fontSize="3.8" className="fill-foreground">+ atropine · tropicamide · oxybutynin — the CNS</text>
        <text x="78" y="897" fontSize="3.8" className="fill-foreground">applications + Mad-as-a-hatter toxicity</text>
        <text x="66" y="918" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">charge rule NOT printed on book 240 — KYP synthesis</text>

        {/* trap 2 — the DUMBBELSS boundary */}
        <rect x="394" y="722" width="322" height="202" rx="10" className="fill-card stroke-brand" />
        <text x="408" y="742" fontSize="4.8" fontWeight="800" className="fill-brand">THE DUMBBELSS BOUNDARY (printed)</text>
        <rect x="408" y="752" width="294" height="64" rx="8" className="fill-brand-soft/40 stroke-brand" />
        <text x="420" y="770" fontSize="4" fontWeight="800" className="fill-foreground">Atropine blocks muscarinic effects</text>
        <text x="420" y="782" fontSize="4" fontWeight="800" className="fill-foreground">(DUMBBELSS) of anticholinesterases,</text>
        <text x="420" y="794" fontSize="4" fontWeight="800" className="fill-foreground">but NOT the nicotinic effects.</text>
        <text x="420" y="810" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">— the spanning NOTES cell, verbatim</text>
        <text x="408" y="838" fontSize="4" fontWeight="700" className="fill-foreground">In anticholinesterase poisoning:</text>
        <text x="420" y="852" fontSize="3.8" className="fill-foreground">miosis · bronchorrhea · bradycardia · GI symptoms</text>
        <text x="420" y="863" fontSize="3.8" fontWeight="700" className="fill-foreground">→ REVERSE with atropine (muscarinic)</text>
        <text x="420" y="882" fontSize="3.8" className="fill-foreground">muscle fasciculations · weakness (NM junction)</text>
        <text x="420" y="893" fontSize="3.8" fontWeight="800" className="fill-warning">→ PERSIST (nicotinic) — atropine's limit</text>
        <text x="408" y="918" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">persisting fasciculations after adequate atropine</text>

        {/* trap 3 — the bladder door + the thermostat */}
        <rect x="732" y="722" width="318" height="202" rx="10" className="fill-card stroke-brand" />
        <text x="746" y="742" fontSize="4.8" fontWeight="800" className="fill-brand">THE BLADDER DOOR + THE THERMOSTAT</text>
        <text x="746" y="762" fontSize="4" fontWeight="700" className="fill-foreground">Oxybutynin prints TWICE in the book —</text>
        <text x="746" y="773" fontSize="4" fontWeight="700" className="fill-foreground">here: the GU row (overactive bladder,</text>
        <text x="746" y="784" fontSize="4" fontWeight="700" className="fill-foreground">“Make bladder SOFT”); and on the</text>
        <text x="746" y="795" fontSize="4" fontWeight="700" className="fill-foreground">micturition page (book 236) as the ⊝ M₃</text>
        <text x="746" y="806" fontSize="4" fontWeight="700" className="fill-foreground">detrusor example — the “o” of</text>
        <text x="746" y="817" fontSize="4" fontWeight="700" className="fill-foreground">“Baby one more time.”</text>
        <rect x="746" y="826" width="290" height="80" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="758" y="842" fontSize="4" fontWeight="800" className="fill-emergency">THE THERMOSTAT RULE</text>
        <text x="758" y="856" fontSize="3.8" fontWeight="700" className="fill-foreground">↑ body temperature (due to ↓ sweating)</text>
        <text x="758" y="867" fontSize="3.8" fontWeight="700" className="fill-foreground">the sweat gland is the ONE sympathetic</text>
        <text x="758" y="878" fontSize="3.8" fontWeight="700" className="fill-foreground">organ that listens muscarinically (book</text>
        <text x="758" y="889" fontSize="3.8" fontWeight="800" className="fill-emergency">235) — hyperthermia in infants.</text>
        <text x="746" y="918" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">dry hot skin = anticholinergic · wet skin = cholinergic</text>
      </g>

      {/* ===== ZONE D — THE PRINTED TOXIDROME ===== */}
      <g>
        <rect x="36" y="950" width="1030" height="178" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="972" fontSize="5.4" fontWeight="800" className="fill-foreground">THE PRINTED TOXIDROME — First Aid’s mnemonic cell, decoded against the printed adverse effects</text>
        {[
          { p: "Hot as a hare", d1: "↑ body temperature", d2: "(due to ↓ sweating)" },
          { p: "Fast as a fiddle", d1: "↑ HR", d2: "(tachycardia)" },
          { p: "Dry as a bone", d1: "dry mouth", d2: "(anhidrosis too)" },
          { p: "Red as a beet", d1: "dry, flushed", d2: "skin" },
          { p: "Blind as a bat", d1: "cycloplegia", d2: "(+ mydriasis)" },
          { p: "Mad as a hatter", d1: "disorientation", d2: "(the CNS door)" },
          { p: "Full as a flask", d1: "urinary retention", d2: "(± constipation)" },
        ].map((t, i) => (
          <g key={`tox-${t.p}`}>
            <rect x={52 + i * 140} y="984" width="128" height="66" rx="8" className="fill-card stroke-emergency" />
            <text x={116 + i * 140} y="1000" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-emergency">{t.p}</text>
            <text x={116 + i * 140} y="1014" textAnchor="middle" fontSize="3.4" fontWeight="700" className="fill-foreground">{t.d1}</text>
            <text x={116 + i * 140} y="1026" textAnchor="middle" fontSize="3.4" className="fill-muted-foreground">{t.d2}</text>
          </g>
        ))}
        <text x="52" y="1072" fontSize="4" fontWeight="700" className="fill-foreground">And the printed exposure line: Jimson weed (Datura) → gardener’s pupil (mydriasis)</text>
        <text x="52" y="1090" fontSize="3.8" fontWeight="700" className="fill-emergency">The three printed special-population traps: acute angle-closure glaucoma in older adults (due to mydriasis) · urinary retention in men with</text>
        <text x="52" y="1101" fontSize="3.8" fontWeight="700" className="fill-emergency">prostatic hyperplasia · hyperthermia in infants</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1140" width="1054" height="100" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1160" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 262 / book 240 (Pharmacology — Autonomic Drugs: Muscarinic antagonists · Atropine)</text>
        <text x="42" y="1174" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — pure text and tables; VLM (one 120dpi pass) adjudicated the interleaved text layer: the 7-row directory order, the</text>
        <text x="42" y="1185" fontSize="4" className="fill-muted-foreground">NOTES cell spanning all six atropine rows, and the “Hot as a hare” family as the in-table cell of the ADVERSE EFFECTS row (not a margin box). Printed phrases</text>
        <text x="42" y="1196" fontSize="4" className="fill-muted-foreground">carried attributed: “park my Benz” · “Make bladder SOFT” · “(DUMBBELSS)” · the toxidrome family above · Jimson weed (Datura) → gardener’s pupil (mydriasis).</text>
        <text x="42" y="1207" fontSize="4" className="fill-muted-foreground">The tollbooth panel is a KYP synthesis; the diagram is ORIGINAL KYP art.</text>
      </g>
    </svg>
  );
}
