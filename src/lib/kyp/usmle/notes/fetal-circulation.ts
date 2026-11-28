import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv3 (pdf 308 / book 286).
// Source: First Aid 2026, Part 1 pdf 308 (book 286) — Fetal circulation.

export const fetalCirculation: KypUsMLENote = {
  id: "fetal-circulation",
  title: "Fetal Circulation",
  subtitle: "Three shunts route blood around the lungs and liver in parallel — then one breath and one placental separation flip pressures and prostaglandins, closing every door the fetus opened.",
  subject: "Cardiovascular · Embryology",
  system: "Section III · Cardiovascular — Embryology",
  pilotCategory: "Embryology",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 286 (fetal circulation)",
  tags: [
    "ductus venosus",
    "foramen ovale",
    "ductus arteriosus",
    "ligamentum arteriosum",
    "PDA closure",
    "prostaglandins",
    "indomethacin",
  ],
  core: {
    what: "The three fetal shunts — (1) umbilical vein → ductus venosus → IVC (bypassing hepatic circulation); (2) most of the highly oxygenated blood from IVC → foramen ovale → LA; (3) deoxygenated blood from SVC → RA → RV → main pulmonary artery → ductus arteriosus → descending aorta (shunt driven by ↑ fetal pulmonary artery resistance) — plus the fetal-postnatal derivatives table (ductus arteriosus → ligamentum arteriosum near the left recurrent laryngeal nerve; ductus venosus → ligamentum venosum; foramen ovale → fossa ovalis; allantois/urachus → median umbilical ligament; umbilical arteries → medial umbilical ligaments; umbilical vein → ligamentum teres hepatis, contained in the falciform ligament).",
    why: "The shunt-to-derivative mapping is a pure recall grid the exam loves, and the birth-transition paragraph supplies the physiology behind every 'neonate with a murmur' and every PDA pharmacology question (NSAIDs close it, prostaglandins keep it open).",
    keyIdea: "At birth, the infant takes a breath → ↓ resistance in pulmonary vasculature → ↑ LA pressure vs RA pressure → foramen ovale closes (now fossa ovalis); ↑ O2 (from respiration) and ↓ prostaglandins (from placental separation) → ductus arteriosus closes. Pharmacology hangs off the prostaglandin arm: NSAIDs (indomethacin, ibuprofen) or acetaminophen close the PDA → ligamentum arteriosum ('Endomethacin ends the PDA'), while prostaglandins E1/E2 KEEP it open (kEEp has the E's).",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "fetal-circulation-map",
      title: "The shunt map and the derivative grid",
      caption: "The three shunts drawn on the printed O2-gradient legend (high → very low), with the birth-transition cascade and the fetal-postnatal derivatives table rebuilt beside it.",
      notice: "The O2 legend (high/moderate/low/very low) is the printed figure's color key: the BEST blood goes to the brain via the foramen ovale; the WORST goes to the placenta via the umbilical arteries — the circulation is a priority system, not a mixer.",
    },
    {
      kind: "table",
      title: "Fetal-postnatal derivatives — the printed grid verbatim",
      columns: ["Fetal structure", "Postnatal derivative", "Note (printed)"],
      rows: [
        ["Ductus arteriosus", "Ligamentum arteriosum", "Near the left recurrent laryngeal nerve"],
        ["Ductus venosus", "Ligamentum venosum", "—"],
        ["Foramen ovale", "Fossa ovalis", "—"],
        ["Allantois → urachus", "Median umbilical ligament", "Urachus is part of allantois between bladder and umbilicus"],
        ["Umbilical arteries", "Medial umbilical ligaments", "—"],
        ["Umbilical vein", "Ligamentum teres hepatis (round ligament)", "Contained in falciform ligament"],
      ],
      caption: "All six printed rows carried whole — the note column rides on the ductus arteriosus, urachus, and umbilical-vein rows exactly as printed.",
    },
    {
      kind: "steps",
      title: "The birth transition — the printed cascade",
      steps: [
        { label: "First breath", detail: "the infant takes a breath → ↓ resistance in pulmonary vasculature." },
        { label: "Pressure flip", detail: "↑ LA pressure vs RA pressure → foramen ovale closes (now called fossa ovalis)." },
        { label: "Oxygen arm", detail: "↑ in O2 (from respiration) drives ductus arteriosus closure." },
        { label: "Prostaglandin arm", detail: "↓ in prostaglandins (from placental separation) → closure of the ductus arteriosus." },
        { label: "Pharmacology", detail: "NSAIDs (indomethacin, ibuprofen) or acetaminophen close the PDA → ligamentum arteriosum; prostaglandins E1/E2 keep it open." },
      ],
    },
    {
      kind: "table",
      title: "The three shunts — printed chains, verbatim",
      columns: ["#", "Shunt chain (printed)", "Purpose"],
      rows: [
        ["1", "Umbilical vein → ductus venosus → IVC", "Bypasses hepatic circulation"],
        ["2", "Most of the highly oxygenated blood: IVC → foramen ovale → LA", "Sends the best blood to the head/heart via the LA"],
        ["3", "Deoxygenated SVC blood: SVC → RA → RV → main pulmonary artery → ductus arteriosus → descending aorta", "Shunt is due to ↑ fetal pulmonary artery resistance — blood skips the high-resistance lungs"],
      ],
      caption: "The printed '3 important shunts' block carried verbatim; the resistance sentence in row 3 is the physiology hook that inverts at birth.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The print's own drug hooks",
      body: "“Endomethacin” ENDS the PDA (NSAIDs: indomethacin, ibuprofen — or acetaminophen — close the ductus → ligamentum arteriosum) and prostaglandins E1/E2 kEEp it open (kEEp has the E's — E1, E2). The ligamentum arteriosum sits NEAR THE LEFT RECURRENT LARYNGEAL NERVE — the same nerve Ortner syndrome hoarseness comes from (LA enlargement, book 287).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The O2 legend is the answer key",
      body: "The printed figure grades blood high / moderate / low / very low O2: umbilical VEIN carries the highest O2 (from placenta), the IVC stream via foramen ovale supplies the LA, SVC-deoxygenated blood exits via ductus arteriosus to the descending aorta, and umbilical ARTERIES carry the very lowest back to the placenta. 'Which fetal vessel has the highest O2?' → umbilical vein. 'Lowest?' → umbilical arteries.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Stems that run through this page",
      items: [
        {
          lead: "Continuous machinelike murmur in a premature infant",
          text: "PDA — the ductus arteriosus stayed open; close it with NSAIDs (indomethacin/ibuprofen) or acetaminophen ('Endomethacin ends the PDA').",
        },
        {
          lead: "Which drug keeps the ductus open while awaiting surgery (TGA prostaglandin drip)?",
          text: "Prostaglandin E1 (alprostadil) — PGE1/E2 kEEp the PDA open to maintain a mixing shunt.",
        },
        {
          lead: "Hoarseness in a patient with a small aortic arch anomaly",
          text: "The ligamentum arteriosum's neighbor — the left recurrent laryngeal nerve (printed note row).",
        },
        {
          lead: "Median umbilical ligament on CT — what was it?",
          text: "The urachus (allantois remnant between bladder and umbilicus).",
        },
        {
          lead: "Falciform ligament contains which remnant?",
          text: "Ligamentum teres hepatis (round ligament) — the umbilical vein.",
        },
        {
          lead: "Gravid uterus carries increased cardiac output — which fetal shunt lets blood skip the liver?",
          text: "Ductus venosus (umbilical vein → ductus venosus → IVC, bypassing hepatic circulation).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A premature neonate has a continuous 'machinelike' murmur and widening pulse pressure.",
        discriminator: "PDA + the closure pharmacology block",
        concept: "The ductus arteriosus remained patent after the prostaglandin drop",
        answer: "PDA — close with indomethacin/ibuprofen (or acetaminophen); PGE1 keeps it open if needed",
      },
      {
        stem: "Which fetal structure becomes the fossa ovalis?",
        discriminator: "Derivatives grid row 3",
        concept: "Foramen ovale closes with the LA>RA pressure flip",
        answer: "Foramen ovale → fossa ovalis",
      },
      {
        stem: "Newborn with cyanotic TGA needs a mixing shunt maintained before surgery.",
        discriminator: "Keep-open pharmacology",
        concept: "Prostaglandins E1/E2 maintain ductal patency",
        answer: "PGE1 infusion — kEEp the PDA open",
      },
      {
        stem: "Anatomy question: structure contained WITHIN the falciform ligament.",
        discriminator: "Umbilical-vein row note",
        concept: "Ligamentum teres hepatis = umbilical vein remnant",
        answer: "Ligamentum teres (round ligament) inside the falciform ligament",
      },
    ],
    traps: [
      {
        a: "Medial umbilical ligaments (umbilical ARTERIES)",
        b: "Median umbilical ligament (urachus/allantois)",
        whyConfused: "'Medial' vs 'median' differ by two letters.",
        keyDifference: "MEDIAN = midline single = urachus (allantois duct between bladder and umbilicus); MEDIAL = paired = umbilical ARTERIES.",
        clue: "median = midline (bladder-umbilicus); medial = the two side straps.",
      },
      {
        a: "Ductus arteriosus → ligamentum arteriosum",
        b: "Ductus venosus → ligamentum venosum",
        whyConfused: "Both 'ductus X → ligamentum X' pairs look interchangeable.",
        keyDifference: "arteriosus = the aorta-pulmonary shunt (near the left recurrent laryngeal nerve); venosus = the portal-IVC liver shunt (→ ligamentum venosum).",
        clue: "arterio = arteries; veno = veins — the derivatives follow the names.",
      },
      {
        a: "NSAIDs close the PDA",
        b: "Prostaglandins keep it open",
        whyConfused: "Both act on the same ductus in opposite directions.",
        keyDifference: "Birth removes placental prostaglandins (↓ PGE) → closure; exogenous PGE1/E2 kEEp it open; NSAIDs (indomethacin) inhibit prostaglandin synthesis → close it ('Endomethacin ends the PDA').",
        clue: "Prostaglandins are the ductus's oxygen — remove them (birth, NSAIDs) and it closes; add them (PGE1 drip) and it stays.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any neonatal shunt-patency question",
        differentiator: "Do you want the ductus OPEN or CLOSED?",
        correctPath: "Keep open (TGA, transposition mixing, prostaglandin-dependent lesions) → PGE1; close (premature PDA with pulmonary over-circulation) → NSAIDs/acetaminophen. The prostaglandin axis decides.",
      },
      {
        lookAlike: "Any derivative-grid question",
        differentiator: "Artery/vein/ductus/urachus — name the fetal structure first",
        correctPath: "arteriosus → ligamentum arteriosum (laryngeal nerve note); venosus → ligamentum venosum; ovale → fossa ovalis; urachus → median ligament; umbilical arteries → medial ligaments; umbilical vein → ligamentum teres in falciform.",
      },
    ],
    miniCase: {
      vignette: "A 28-week-gestation infant born at 2 days of life has a wide pulse pressure, bounding pulses, and a continuous murmur loudest at the left infraclavicular area. Echocardiography confirms a large patent ductus arteriosus with left-to-right flow.",
      question: "Which pharmacologic intervention exploits the physiology that normally closes this vessel at birth?",
      options: [
        {
          label: "A",
          text: "Indomethacin — inhibits prostaglandin synthesis, mimicking the placental-separation prostaglandin drop",
          why: "Correct — birth closes the ductus because prostaglandins fall (placental separation) while O2 rises; NSAIDs reproduce the prostaglandin fall ('Endomethacin ends the PDA').",
          correct: true,
        },
        {
          label: "B",
          text: "Prostaglandin E1 infusion",
          why: "Backward — PGE1 kEEps the ductus OPEN (used to maintain mixing in ductal-dependent cyanotic lesions, the opposite of the goal here).",
        },
        {
          label: "C",
          text: "Acetazolamide — carbonic anhydrase inhibition",
          why: "Not part of the printed closure armamentarium; the print names NSAIDs (indomethacin, ibuprofen) and acetaminophen.",
        },
        {
          label: "D",
          text: "Oxygen therapy alone is definitive",
          why: "↑ O2 helps closure (the printed birth arm) but the pharmacologic answer pairs the prostaglandin axis with NSAIDs; oxygen alone is not the tested intervention.",
        },
        {
          label: "E",
          text: "Prostaglandin synthesis inhibitors are contraindicated in prematurity",
          why: "Inverted — prematurity is exactly the setting where pharmacologic PDA closure is attempted (the printed NSAID block); renal-function monitoring is the practical caveat, not a contraindication.",
        },
      ],
      reasoning: "PDA in a premature infant = the ductus never saw the prostaglandin drop. Indomethacin recreates the birth signal by inhibiting prostaglandin synthesis — the printed NSAID block plus the 'Endomethacin' hook.",
    },
  },
  mnemonics: [
    {
      code: "“Endomethacin ENDS the PDA”",
      meaning: "The print's own hook: indomethacin (NSAID) ends ductal patency by cutting prostaglandin synthesis → ligamentum arteriosum.",
      memorizes: "PDA-closure pharmacology",
      whenToUse: "Any premature-infant PDA question.",
      clinical: "Ibuprofen and acetaminophen also work (printed).",
    },
    {
      code: "“PGE kEEps it open”",
      meaning: "Prostaglandins E1/E2 kEEp the ductus arteriosus patent — 'kEEp' carries the two E's.",
      memorizes: "Keep-open pharmacology (PGE1 drips in ductal-dependent lesions)",
      whenToUse: "Any TGA/ductal-dependent lesion management question.",
      clinical: "KYP reading of the printed kEEp spelling.",
    },
    {
      code: "“MEDIan = urachus; MEDIal = arteries”",
      meaning: "Median umbilical ligament = urachus (allantois, midline bladder-to-umbilicus); medial umbilical ligaments (paired) = umbilical arteries.",
      memorizes: "The derivative grid's two confusable rows",
      whenToUse: "Any anterior abdominal-wall ligament question.",
      clinical: "KYP original — the print lists both rows.",
    },
  ],
  rapidReview: {
    s30: [
      "Shunt 1: umbilical vein → ductus venosus → IVC (bypasses hepatic circulation).",
      "Shunt 2: highly oxygenated IVC blood → foramen ovale → LA.",
      "Shunt 3: SVC deoxygenated blood → RA → RV → pulmonary artery → ductus arteriosus → descending aorta (↑ fetal PA resistance drives the shunt).",
      "Birth: breath → ↓ pulmonary vascular resistance → ↑ LA vs RA pressure → foramen ovale closes (fossa ovalis); ↑ O2 + ↓ prostaglandins → ductus closes.",
      "NSAIDs (indomethacin, ibuprofen)/acetaminophen close PDA → ligamentum arteriosum; PGE1/E2 keep open.",
      "Derivatives: arteriosus → ligamentum arteriosum (near left recurrent laryngeal nerve); venosus → ligamentum venosum; urachus → median umbilical ligament; umbilical arteries → medial ligaments; umbilical vein → ligamentum teres in falciform.",
    ],
    m3: [
      "Ligamentum arteriosum's laryngeal-nerve note links to Ortner syndrome (LA enlargement hoarseness, book 287).",
      "The umbilical vein carries the HIGHEST O2 fetal blood; umbilical arteries the lowest (printed O2 legend).",
      "Shunt 3 exists because fetal lungs are high-resistance — the first breath collapses that resistance.",
      "The foramen-ovale closure is a PRESSURE story (LA > RA); the ductus closure is an OXYGEN + PROSTAGLANDIN story.",
      "Falciform ligament = ligamentum teres hepatis container (the umbilical-vein row's printed note).",
    ],
    m10: [
      "The printed birth cascade verbatim: infant takes a breath → ↓ resistance in pulmonary vasculature → ↑ LA pressure vs RA pressure → foramen ovale closes (now called fossa ovalis); ↑ in O2 (from respiration) and ↓ in prostaglandins (from placental separation) → closure of ductus arteriosus.",
      "The printed NSAID block verbatim: NSAIDs (eg, indomethacin, ibuprofen) or acetaminophen help close the PDA → ligamentum arteriosum (remnant of ductus arteriosus); 'Endomethacin' ends the PDA; prostaglandins E1 and E2 kEEp PDA open.",
      "Derivative grid verbatim: ductus arteriosus → ligamentum arteriosum (near the left recurrent laryngeal nerve) · ductus venosus → ligamentum venosum · foramen ovale → fossa ovalis · allantois → urachus → median umbilical ligament (urachus is part of allantois between bladder and umbilicus) · umbilical arteries → medial umbilical ligaments · umbilical vein → ligamentum teres hepatis (round ligament), contained in falciform ligament.",
      "The three shunt chains verbatim: umbilical vein → ductus venosus → IVC (bypassing hepatic circulation); most of the highly oxygenated blood from IVC → foramen ovale → LA; deoxygenated blood from SVC → RA → RV → main pulmonary artery → ductus arteriosus → descending aorta (shunt due to ↑ fetal pulmonary artery resistance).",
      "Bridge forward: the PDA murmur lives on the murmurs page (continuous machinelike, loudest at S2, left infraclavicular — book 295); the closure physiology taught here is why premature infants keep it open.",
    ],
  },
  recall: [
    {
      q: "The three fetal shunts in order?",
      a: "Ductus venosus (umbilical vein → IVC), foramen ovale (IVC → LA), ductus arteriosus (PA → descending aorta).",
    },
    {
      q: "What closes the foramen ovale at birth?",
      a: "First breath → ↓ pulmonary resistance → LA pressure rises above RA → septum primum seals against secundum (→ fossa ovalis).",
    },
    {
      q: "What closes the ductus arteriosus at birth?",
      a: "↑ O2 from respiration and ↓ prostaglandins from placental separation.",
    },
    {
      q: "Which drugs close the PDA, and which keep it open?",
      a: "NSAIDs (indomethacin, ibuprofen)/acetaminophen close it; prostaglandins E1/E2 keep it open.",
    },
    {
      q: "Ductus arteriosus remnant and its anatomic neighbor?",
      a: "Ligamentum arteriosum — near the left recurrent laryngeal nerve.",
    },
    {
      q: "Umbilical vein remnant and where it lives?",
      a: "Ligamentum teres hepatis (round ligament), contained in the falciform ligament.",
    },
    {
      q: "Median vs medial umbilical ligaments?",
      a: "Median = urachus (allantois remnant); medial (paired) = umbilical arteries.",
    },
  ],
  related: [
    {
      title: "Heart Morphogenesis",
      note: "The foramen ovale is built by the septation choreography (primum/secundum) — one page builds it, this page closes it.",
      topicId: "heart-morphogenesis",
    },
    {
      title: "Heart murmurs",
      note: "The PDA's continuous machinelike murmur is the auscultatory expression of shunt 3 persisting after birth.",
      topicId: "heart-murmurs",
    },
    {
      title: "Congenital shunts — left-to-right (acyanotic)",
      note: "PDA is the classic postnatal left-to-right shunt — the fetal bypass that did not close.",
      topicId: "congenital-shunts-left-to-right",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "NSAIDs vs prostaglandins on the ductus — the same prostaglandin axis that closes the PDA drives uterine contraction and mucosal protection.",
    },
    {
      subject: "Anatomy",
      connection: "The ligamentum-arteriosum/left-recurrent-laryngeal relationship explains arch-anomaly hoarseness.",
    },
    {
      subject: "Pediatrics",
      connection: "Neonatal shunt management (keep open vs close) is applied prostaglandin physiology.",
    },
  ],
  mechanisms: [
    {
      id: "birth-transition-cascade",
      title: "The birth transition — one breath, two closures",
      context: "First minutes after delivery",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The infant takes a breath",
            sublabel: "Alveoli open — pulmonary vascular resistance FALLS (the fetal lungs were high-resistance by design).",
            variant: "input",
          },
          {
            id: "s1",
            label: "LA pressure rises above RA",
            sublabel: "Pulmonary venous return fills the LA — the pressure flip.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Foramen ovale closes → fossa ovalis",
            sublabel: "Septum primum pushed against secundum — the functional closure (anatomic fusion follows in infancy).",
            variant: "process",
          },
          {
            id: "s3",
            label: "O2 rises, prostaglandins fall",
            sublabel: "Respiration raises O2; placental separation removes the prostaglandin source — the ductus's two keep-open signals both vanish.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Ductus arteriosus closes → ligamentum arteriosum",
            sublabel: "Functional closure within hours; NSAIDs can reproduce it (prostaglandin inhibition).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Persistence = PDA",
            sublabel: "Prematurity (low O2, high prostaglandins) keeps the shunt — the continuous machinelike murmur.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "One breath flips two doors: the pressure flip closes the atrial shunt, the oxygen-plus-prostaglandin flip closes the arterial shunt — pharmacology simply borrows each signal.",
      },
    },
  ],
};
