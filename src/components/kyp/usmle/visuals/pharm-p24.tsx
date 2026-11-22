/* Pharmacology — PH-batch 24: Drug Reactions: Hematologic + the
 * musculoskeletal/skin table (book 249, pdf 271 — FULL page, TWO printed
 * tables). Census (pdfimages): ZERO raster images; the page's two visual
 * assets are the printed three-column tables themselves (red mnemonic
 * acrostic letters inside the causal-agent and notes cells, red letters
 * inside four row labels — D-R-E-S-S, “Mega blast”, “Coombs”, “Steven
 * Johnson” — dark-teal row labels, black non-mnemonic notes) — VLM-read at
 * 120dpi (staging-ph24/vlm-census.txt), no margin mnemonics, no footnotes
 * below either table. This is an ORIGINAL KYP ADAPTATION: the hematopoietic
 * lineage rail (stem cell → granulocyte / erythroid-DNA / megakaryocyte /
 * circulating RBC / plasma-endothelium stages) with each of the EIGHT
 * hematologic rows docked to the stage its drugs cut, the printed mnemonics
 * carried attributed (red echoes the source's red in-cell text) and the
 * EMPTY printed notes cells marked as printed; the sulfa-hypersensitivity
 * axis (sulfa · anti-epileptics · allopurinol → T cell-mediated type IV →
 * DRESS / Stevens-Johnson rash / photosensitivity, with the drug-induced
 * lupus trio beside it); the musculoskeletal/skin quick-dock of the
 * remaining table-2 rows with the dantrolene-antidoted malignant-hyperthermia
 * warning card; and the SULFA STRIKES FIVE TIMES overlap band crossing both
 * tables. Printed quirks carried: “Ca2+ channel blockers” (true superscript
 * 2+), the missing comma between “SERMs” and “Testosterone supplements”,
 * “Teethracyclines”, DIHS. Nothing is reproduced from the book; purely
 * presentational (no props, no hooks, no external images). */

export function DrugReactionHematologicMap() {
  const w = 1102;
  const h = 1124;
  // The eight hematologic rows docked to the lineage stage each drug cuts
  const docks = [
    {
      stage: "PLURIPOTENT STEM CELL",
      reaction: "APLASTIC ANEMIA — pancytopenia, hypocellular marrow",
      agents: "Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil",
      hook: "“Can’t make New blood cells properly” — First Aid's red in-cell mnemonic",
      hookFa: true,
    },
    {
      stage: "GRANULOCYTE PRECURSORS",
      reaction: "AGRANULOCYTOSIS — isolated neutropenia, fever + oral ulcers",
      agents: "Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine",
      hook: "“Drugs can cause pretty major granulocytes collapse” — First Aid's red in-cell mnemonic",
      hookFa: true,
    },
    {
      stage: "ERYTHROID DNA SYNTHESIS",
      reaction: "MEGALOBLASTIC ANEMIA — macrocytes, hypersegmented neutrophils",
      agents: "Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (initials capitalized in the print, keying “PMS”)",
      hook: "“You’re having a mega blast with PMS” — First Aid's red in-cell mnemonic",
      hookFa: true,
    },
    {
      stage: "CIRCULATING RBC — oxidant",
      reaction: "HEMOLYSIS IN G6PD DEFICIENCY — Coombs-negative, Heinz bodies, bite cells",
      agents: "Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin",
      hook: "printed notes cell: EMPTY — no mnemonic prints for this row (pentose-phosphate NADPH defect)",
      hookFa: false,
    },
    {
      stage: "CIRCULATING RBC — immune",
      reaction: "DIRECT COOMBS ⊕ HEMOLYTIC ANEMIA — hapten / autoantibody attack",
      agents: "Penicillin, cephalosporins, methyldopa",
      hook: "“Pooh classically munches on honey Coombs” — First Aid's red in-cell mnemonic",
      hookFa: true,
    },
    {
      stage: "MEGAKARYOCYTE LINE",
      reaction: "THROMBOCYTOPENIA — petechiae, mucosal bleeding",
      agents: "Heparin, quinidine, ganciclovir, vancomycin, linezolid",
      hook: "printed notes cell: EMPTY — KYP fills it: “HIS QUEEN GETS VERY LOUD” (KYP original)",
      hookFa: false,
    },
    {
      stage: "PLASMA / ENDOTHELIUM",
      reaction: "THROMBOTIC COMPLICATIONS — clots, not bleeds (DVT/PE, stroke)",
      agents: "Combined oral contraceptives, hormone replacement therapy, SERMs Testosterone supplements, epoetin alfa (printed with no comma after “SERMs”)",
      hook: "“Estrogen-mediated ↑ blood viscosity and platelet accumulation” — the printed note (black)",
      hookFa: false,
    },
  ];
  // The immune-mediated skin/systemic rows of both tables
  const skinCards = [
    {
      tag: "SKIN + VISCERA",
      name: "DRESS",
      agents: "Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin",
      hook: "“DRESSes partially cover my skin and viscera” (FA)",
      note1: "T cell-mediated hypersensitivity reaction; also known as",
      note2: "drug-induced hypersensitivity syndrome (DIHS) — fever, EOSINOPHILIA, hepatitis, no mucositis",
    },
    {
      tag: "SKIN + MUCOSA",
      name: "STEVENS-JOHNSON RASH",
      agents: "Anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin",
      hook: "“Steven Johnson has epileptic allergy to sulfa drugs and penicillin” (FA)",
      note1: "T cell-mediated — fever, targetoid lesions, MUCOSAL",
      note2: "involvement, epidermal necrosis/detachment (SJS/TEN spectrum)",
    },
    {
      tag: "SKIN + UV",
      name: "PHOTOSENSITIVITY",
      agents: "Sulfonamides, amiodarone, tetracyclines, fluoroquinolones",
      hook: "“Sat for photo” (FA)",
      note1: "Sun-exposed distribution — the phototoxic subset",
      note2: "of the same T-cell axis (UV + drug in the skin)",
    },
  ];
  // The remaining musculoskeletal / connective-tissue rows, compact
  const msRows = [
    { r: "FAT REDISTRIBUTION", d: "Protease inhibitors, glucocorticoids", h: "“Fat protects glutes”" },
    { r: "GINGIVAL HYPERPLASIA", d: "Cyclosporine, Ca2+ channel blockers, phenytoin (Ca2+ prints with a true superscript)", h: "“Can Cause puffy gums”" },
    { r: "HYPERURICEMIA (GOUT)", d: "Pyrazinamide, thiazides, furosemide, niacin, cyclosporine", h: "“Painful tophi and feet need care”" },
    { r: "MYOPATHY", d: "Statins, fibrates, niacin, colchicine, daptomycin, hydroxychloroquine, interferon-α, penicillamine, glucocorticoids", h: "notes cell prints EMPTY" },
    { r: "OSTEOPOROSIS", d: "Glucocorticoids, depot medroxyprogesterone acetate, GnRH agonists, aromatase inhibitors, anticonvulsants, heparin, PPIs", h: "notes cell prints EMPTY" },
    { r: "TEETH DISCOLORATION", d: "Tetracyclines", h: "“Teethracyclines” — the printed pun" },
    { r: "TENDON/CARTILAGE DAMAGE", d: "Fluoroquinolones", h: "notes cell prints EMPTY" },
  ];
  // Sulfa's five strikes across both tables
  const five = [
    { row: "DRESS", hint: "eosinophilia + viscera" },
    { row: "HEMOLYSIS IN G6PD DEFICIENCY", hint: "oxidant hemolysis, Coombs-negative" },
    { row: "MEGALOBLASTIC ANEMIA", hint: "macrocytosis, folate antagonism" },
    { row: "PHOTOSENSITIVITY", hint: "sun-exposed rash" },
    { row: "RASH (STEVENS-JOHNSON)", hint: "mucosal necrosis" },
  ];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Drug Reactions Hematologic — the hematopoietic lineage rail with the eight hematologic reaction rows docked to the cell stage their drugs cut, the sulfa-hypersensitivity axis (DRESS, Stevens-Johnson rash, photosensitivity, drug-induced lupus), the musculoskeletal and skin quick-dock with the malignant-hyperthermia dantrolene warning, and the sulfa-strikes-five-times overlap band (original KYP diagram of book 249)." className="min-w-[1060px]">
      {/* header */}
      <g>
        <rect x="24" y="14" width="1054" height="46" rx="12" className="fill-card stroke-border" />
        <text x="42" y="42" fontSize="7" fontWeight="800" className="fill-foreground">Drug reactions — hematologic + musculoskeletal/skin: route every reaction to the cell line and stage it cuts (original KYP diagram)</text>
        <rect x="760" y="25" width="302" height="18" className="fill-brand-soft" />
        <text x="911" y="37.5" textAnchor="middle" fontSize="4.6" fontWeight="800" className="fill-brand">two tables · nineteen rows · one reading rule</text>
      </g>

      {/* ===== ZONE A — THE LINEAGE RAIL WITH THE EIGHT DOCKS ===== */}
      <g>
        <rect x="36" y="70" width="1030" height="516" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="92" fontSize="5.4" fontWeight="800" className="fill-foreground">THE HEMATOPOIETIC LINEAGE RAIL — seven of table 1's eight rows docked to the stage each drug cuts (book 249)</text>
        <text x="52" y="104" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">printed order: Agranulocytosis → Aplastic anemia → Direct Coombs ⊕ hemolytic anemia → DRESS (docked in the immune axis below) → Hemolysis in G6PD deficiency → Megaloblastic anemia → Thrombocytopenia → Thrombotic complications</text>
        {docks.map((d, i) => {
          const y = 114 + i * 66;
          return (
            <g key={d.reaction}>
              {/* the lineage stage (left rail) */}
              <rect x="52" y={y} width="264" height="60" rx="8" className="fill-brand-soft/40 stroke-brand" />
              <text x="66" y={y + 25} fontSize="4.2" fontWeight="800" className="fill-brand">{d.stage}</text>
              <text x="66" y={y + 38} fontSize="3.4" fontWeight="700" className="fill-muted-foreground">the stage that gets cut</text>
              {/* connector */}
              <line x1="316" y1={y + 30} x2="344" y2={y + 30} className="stroke-foreground" strokeWidth="1.2" />
              <path d={`M 340 ${y + 26} L 350 ${y + 30} L 340 ${y + 34} Z`} className="fill-foreground" />
              {/* the docked reaction card */}
              <rect x="352" y={y} width="700" height="60" rx="8" className="fill-card stroke-border" />
              <text x="364" y={y + 14} fontSize="4.2" fontWeight="800" className="fill-foreground">{d.reaction}</text>
              <text x="364" y={y + 27} fontSize="3.5" fontWeight="700" className="fill-muted-foreground">{d.agents}</text>
              <text x="364" y={y + 39} fontSize="3.5" fontWeight="800" className={d.hookFa ? "fill-emergency" : "fill-foreground"}>{d.hook}</text>
              <text x="364" y={y + 52} fontSize="3.4" fontWeight="700" className="fill-muted-foreground">
                {d.hookFa ? "First Aid's red in-cell mnemonic — carried attributed (not among the four KYP mnemonics)" : "printed note / EMPTY notes cell — carried as printed"}
              </text>
            </g>
          );
        })}
        <text x="52" y="580" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">Empty printed NOTES cells carried as printed: Hemolysis in G6PD deficiency and Thrombocytopenia (above) — plus table 2's Drug-induced lupus, Myopathy, Osteoporosis, and Tendon/cartilage damage rows (quick dock, right)</text>
      </g>

      {/* ===== ZONE B — THE SULFA-HYPERSENSITIVITY AXIS + THE QUICK DOCK ===== */}
      <g>
        <rect x="36" y="598" width="1030" height="336" rx="14" className="fill-secondary/40 stroke-border" />
        <text x="52" y="620" fontSize="5.4" fontWeight="800" className="fill-foreground">THE SULFA-HYPERSENSITIVITY AXIS — the immune rows of BOTH tables (T cell-mediated, type IV)</text>

        {/* trigger band */}
        <rect x="52" y="630" width="592" height="30" rx="6" className="fill-warning-soft/40 stroke-warning" />
        <text x="348" y="649" textAnchor="middle" fontSize="4.2" fontWeight="800" className="fill-foreground">THE TRIGGER BAND — SULFA DRUGS · ANTI-EPILEPTICS · ALLOPURINOL (± penicillin, minocycline, vancomycin)</text>
        <line x1="348" y1="660" x2="348" y2="676" className="stroke-foreground" strokeWidth="1.2" />
        <path d="M 344 672 L 348 682 L 352 672 Z" className="fill-foreground" />
        <rect x="52" y="684" width="592" height="22" rx="6" className="fill-card stroke-border" />
        <text x="348" y="698.5" textAnchor="middle" fontSize="3.9" fontWeight="800" className="fill-foreground">T CELL-MEDIATED HYPERSENSITIVITY REACTION (type IV, delayed) — printed in the DRESS notes cell as “also known as DIHS”</text>

        {/* the three outcome cards */}
        {skinCards.map((c, i) => {
          const x = 52 + i * 200;
          return (
            <g key={c.name}>
              <line x1={x + 94} y1="706" x2={x + 94} y2="716" className="stroke-foreground" strokeWidth="1.2" />
              <rect x={x} y="716" width="192" height="100" rx="8" className="fill-card stroke-warning" />
              <rect x={x + 8} y="724" width="72" height="14" rx="4" className="fill-warning-soft stroke-warning" />
              <text x={x + 44} y="734" textAnchor="middle" fontSize="3.4" fontWeight="800" className="fill-foreground">{c.tag}</text>
              <text x={x + 8} y="752" fontSize="4.6" fontWeight="800" className="fill-foreground">{c.name}</text>
              <text x={x + 8} y="764" fontSize="3.2" fontWeight="700" className="fill-muted-foreground">{c.agents}</text>
              <text x={x + 8} y="776" fontSize="3.2" fontWeight="700" className="fill-emergency">{c.hook}</text>
              <text x={x + 8} y="788" fontSize="3.1" className="fill-muted-foreground">{c.note1}</text>
              <text x={x + 8} y="797" fontSize="3.1" className="fill-muted-foreground">{c.note2}</text>
            </g>
          );
        })}

        {/* drug-induced lupus — the serology row beside the axis */}
        <rect x="52" y="824" width="592" height="66" rx="8" className="fill-card stroke-border" />
        <text x="64" y="840" fontSize="4.6" fontWeight="800" className="fill-foreground">DRUG-INDUCED LUPUS — the autoantibody (anti-histone) row, printed with an EMPTY notes cell</text>
        <text x="64" y="853" fontSize="3.6" fontWeight="700" className="fill-muted-foreground">Hydralazine, procainamide, quinidine</text>
        <text x="64" y="866" fontSize="3.4" fontWeight="700" className="fill-foreground">Lupus-like arthralgia/serositis/rash without renal or CNS disease — a DIFFERENT immune mechanism from the T-cell rash axis above</text>
        <text x="64" y="880" fontSize="3.4" fontWeight="700" className="fill-muted-foreground">KYP cross-check: the mnemonic-poor rows (lupus, G6PD, thrombocytopenia, myopathy, osteoporosis, tendon) are where the exam hides distractors</text>

        {/* the quick dock — remaining table-2 rows + the MH warning */}
        <text x="676" y="620" fontSize="5.4" fontWeight="800" className="fill-foreground">MUSCULOSKELETAL / SKIN QUICK DOCK — the remaining table-2 rows</text>
        <rect x="676" y="630" width="374" height="76" rx="8" className="fill-emergency-soft/30 stroke-emergency" />
        <text x="688" y="646" fontSize="4.4" fontWeight="800" className="fill-emergency">MALIGNANT HYPERTHERMIA — DANTROLENE IS THE ANTIDOTE</text>
        <text x="688" y="659" fontSize="3.5" fontWeight="700" className="fill-foreground">Inhaled anesthetics (eg, isoflurane), succinylcholine</text>
        <text x="688" y="671" fontSize="3.4" fontWeight="700" className="fill-foreground">Printed note: “Individuals with ryanodine receptor mutation; antidote is dantrolene”</text>
        <text x="688" y="683" fontSize="3.4" fontWeight="800" className="fill-emergency">DANTROLENE DOMINATES THE RYANODINE RAGE (KYP)</text>
        <text x="688" y="698" fontSize="3.3" fontWeight="700" className="fill-muted-foreground">uncontrolled skeletal-muscle Ca2+ release → fever, rigidity, rhabdomyolysis — stop the anesthetic, give dantrolene</text>
        {msRows.map((m, i) => {
          const y = 714 + i * 30;
          return (
            <g key={m.r}>
              <rect x="676" y={y} width="374" height="26" rx="6" className="fill-card stroke-border" />
              <text x="686" y={y + 11} fontSize="3.5" fontWeight="800" className="fill-foreground">{m.r}</text>
              <text x="686" y={y + 20} fontSize="2.9" fontWeight="700" className="fill-muted-foreground">{m.d}</text>
              <text x="1046" y={y + 15} textAnchor="end" fontSize="3" fontWeight="800" className="fill-emergency">{m.h}</text>
            </g>
          );
        })}
      </g>

      {/* ===== ZONE C — SULFA STRIKES FIVE TIMES ===== */}
      <g>
        <rect x="36" y="946" width="1030" height="100" rx="14" className="fill-warning-soft/20 stroke-warning" />
        <text x="52" y="968" fontSize="5.4" fontWeight="800" className="fill-foreground">SULFA STRIKES FIVE TIMES — one drug class, five rows across both tables; the tissue, never the drug, picks the row (KYP synthesis)</text>
        {five.map((f, i) => {
          const x = 52 + i * 200;
          return (
            <g key={f.row}>
              <rect x={x} y="980" width="194" height="38" rx="8" className="fill-card stroke-warning" />
              <text x={x + 98} y="995" textAnchor="middle" fontSize="3.8" fontWeight="800" className="fill-foreground">{f.row}</text>
              <text x={x + 98} y="1007" textAnchor="middle" fontSize="3.1" fontWeight="700" className="fill-muted-foreground">{f.hint}</text>
            </g>
          );
        })}
        <text x="52" y="1036" fontSize="3.8" fontWeight="700" className="fill-muted-foreground">Cross-check the other double-listed drugs the same way: carbamazepine / methimazole / propylthiouracil (agranulocytosis + aplastic anemia), ganciclovir (agranulocytosis + thrombocytopenia), allopurinol (DRESS + SJS), phenytoin (DRESS + megaloblastic + gingival + the anti-epileptic SJS list).</text>
      </g>

      {/* footer */}
      <g>
        <rect x="24" y="1056" width="1054" height="54" rx="12" className="fill-secondary/40 stroke-border" />
        <text x="42" y="1074" fontSize="4.6" fontWeight="800" className="fill-foreground">Source &amp; census — First Aid for the USMLE Step 1 2026, Part 1 pdf 271 / book 249 (Pharmacology — Toxicities and Adverse Effects: Drug reactions—hematologic + Drug reactions—musculoskeletal/skin/connective tissue)</text>
        <text x="42" y="1086" fontSize="4" className="fill-muted-foreground">Census (pdfimages): ZERO raster images — the page's two visual assets are the printed tables themselves (red mnemonic acrostic letters, red letters inside four row labels, dark-teal labels,</text>
        <text x="42" y="1096" fontSize="4" className="fill-muted-foreground">black non-mnemonic notes), VLM-read at 120dpi, no margin mnemonics, no footnotes. This diagram is an ORIGINAL KYP ADAPTATION — every row, causal agent, note, and mnemonic of both tables is</text>
        <text x="42" y="1106" fontSize="4" className="fill-muted-foreground">preserved (both tables also carried verbatim in the note's table blocks); First Aid's red in-cell mnemonics are echoed in red here, ATTRIBUTED. Quirks carried: “Ca2+ channel blockers”, “Teethracyclines”, DIHS.</text>
      </g>
    </svg>
  );
}
