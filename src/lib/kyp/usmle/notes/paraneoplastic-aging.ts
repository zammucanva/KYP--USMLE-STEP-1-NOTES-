import type { KypUsMLENote } from "../types";

// Pathology — Neoplasia banner (P19, the Pathology chapter FINALE, 19/19)
// + the AGInG banner. Source: pdf 246-248 / book 224-226 (Paraneoplastic
// syndromes — the four-band table [Musculoskeletal and cutaneous /
// Endocrine / Hematologic / Neuromuscular] with 19 manifestation rows;
// Normal aging — the definition with the three alteration families
// [genetic telomere shortening, epigenetic DNA methylation, metabolic
// mitochondrial dysfunction] and the 11-system decline table with the
// intrinsic-vs-extrinsic skin fork; Lipofuscin — the yellow-brown
// "wear and tear" pigment block). Census (pdfimages + VLM): p246 ZERO
// rasters (pure table). p247 ONE 175x126 8bpc image lettered A beside
// the Lipofuscin block — a COPYRIGHTED histology micrograph (pale
// pink/lavender tissue background, scattered yellow-brown granular
// pigment deposits within cells, two black arrows pointing to the
// granule clusters, the letter A in a small dark box at the image's
// top-left, ~1.9 x 1.4 in directly below the bold Lipofuscin label) —
// described-in-text ONLY, never reproduced (the M32 house convention).
// p248 = the near-empty NOTES page (banner + "▶ NOTES" + footer, 7
// nonempty lines) — the documented continuation quirk claimed by this
// topic per the chapter inventory. TEXT-LAYER INTERLEAVE QUIRKS
// (documented): on p246 the fused fragment "SCa2+mous cell carcinomas"
// is the small-caps rendering of "Squamous cell carcinomas" (the
// source highlights "Ca2+" in red inside "Hypercalcemia" and
// "Squamous"); the polycythemia tumor list ("Pheochromocytoma, renal
// cell carcinoma, HCC, hemangioblastoma, leiomyoma") prints at raw
// lines 140-141 AFTER the myasthenia gravis row, with the merged
// "Thymoma" and "Small cell lung cancer" tumor-cell fragments at raw
// 147/149 AFTER the footer — the column merges (SCLC spanning Cushing
// + SIADH + LEMS/encephalomyelitis; Thymoma spanning pure red cell
// aplasia/Good syndrome/myasthenia gravis) scramble the linear text
// order. The source's OWN margin mnemonic prints beside the
// polycythemia row — "Paraneoplastic rise to High hematocrit levels"
// (red capitals P-r-H-h-l mapping Pheochromocytoma, renal cell
// carcinoma, HCC, hemangioblastoma, leiomyoma) — carried verbatim; and
// the opsoclonus row carries the source's own "Dancing eyes, dancing
// feet." VLM confirmed the four bands and that the "Hypercalcemia"
// manifestation cell spans TWO mechanism rows (PTHrP + calcitriol) at
// the musculoskeletal/endocrine boundary. NO other margin notes or
// mnemonics (VLM confirmed); the KYP memory layer is original.

export const paraneoplasticAging: KypUsMLENote = {
  id: "paraneoplastic-aging",
  title: "Paraneoplastic Syndromes & Aging",
  subtitle:
    "Tumors that secrete the body's own signals, antibodies that crossfire the nervous system, and the system-by-system slow decline of normal aging (book 224-226) — PARANEOPLASTIC SYNDROMES: the four-band table. MUSCULOSKELETAL AND CUTANEOUS — Dermatomyositis (progressive proximal muscle weakness, Gottron papules, heliotrope rash; adenocarcinomas especially ovarian), Acanthosis nigricans (hyperpigmented velvety plaques in axilla and neck; gastric adenocarcinoma and other visceral malignancies), Sign of Leser-Trélat (sudden onset of multiple seborrheic keratoses; GI adenocarcinomas), Hypertrophic osteoarthropathy (clubbing, arthralgia, joint effusions, periostosis of tubular bones; adenocarcinoma of the lung). ENDOCRINE — Hypercalcemia spanning TWO mechanisms: PTHrP (squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas) and ↑ 1,25-(OH)2 vitamin D3/calcitriol (lymphoma); Cushing syndrome (↑ ACTH) and Hyponatremia/SIADH (↑ ADH), both small cell lung cancer. HEMATOLOGIC — Polycythemia (↑ erythropoietin; pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma — the source's own 'Paraneoplastic rise to High hematocrit levels'), Pure red cell aplasia (thymoma), Good syndrome (hypogammaglobulinemia; thymoma), Trousseau syndrome (migratory superficial thrombophlebitis) and Nonbacterial thrombotic endocarditis (sterile platelet thrombi on heart valves), both adenocarcinomas especially pancreatic. NEUROMUSCULAR — Anti-NMDA receptor encephalitis (ovarian teratoma), Opsoclonus-myoclonus ataxia syndrome ('Dancing eyes, dancing feet'; neuroblastoma in children, small cell lung cancer in adults), Paraneoplastic cerebellar degeneration (anti-Purkinje cell antibodies; SCLC anti-Hu, gynecologic/breast anti-Yo, Hodgkin anti-Tr), Paraneoplastic encephalomyelitis (anti-Hu in neurons; SCLC), Lambert-Eaton myasthenic syndrome (presynaptic P/Q-type Ca2+ channels; SCLC), Myasthenia gravis (postsynaptic ACh receptors; thymoma). NORMAL AGING — time-dependent progressive decline in organ function; genetic (telomere shortening), epigenetic (DNA methylation), metabolic (mitochondrial dysfunction) alterations; the 11-system decline table. LIPOFUSCIN — the yellow-brown 'wear and tear' pigment of aging, lipid-peroxidation polymers complexed with protein, depositing in heart, colon, liver, kidney, and eye.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The chapter finale's complete two-banner span: the paraneoplastic syndromes table across all four bands and all 19 rows (the ectopic-hormone axes PTHrP/calcitriol/ACTH/ADH/EPO, the antibody-mediated neuromuscular syndromes, the hypercoagulable and cutaneous entries, with the source's own 'Paraneoplastic rise to High hematocrit levels' and 'Dancing eyes, dancing feet' mnemonics carried verbatim), plus the Aging banner — the normal-aging definition with its three alteration families, the 11-system decline table verbatim with the intrinsic-versus-extrinsic skin fork, and the Lipofuscin block with its lettered micrograph described in text.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 224–226 (Pathology — Neoplasia and Aging: Paraneoplastic syndromes [the four-band manifestation/description-mechanism/tumor table with the merged SCLC and thymoma tumor cells]; Normal aging [the definition and the 11-system decline table with the intrinsic-vs-extrinsic skin fork]; Lipofuscin [the wear-and-tear pigment block with the lettered micrograph, described in text]; p226 is the printed NOTES continuation page)",
  tags: [
    "paraneoplastic syndromes",
    "neoplasia",
    "dermatomyositis",
    "Gottron papules",
    "heliotrope rash",
    "acanthosis nigricans",
    "Sign of Leser-Trélat",
    "seborrheic keratoses",
    "hypertrophic osteoarthropathy",
    "clubbing",
    "periostosis",
    "hypercalcemia",
    "PTHrP",
    "squamous cell carcinoma",
    "calcitriol",
    "1,25-dihydroxy vitamin D3",
    "lymphoma",
    "Cushing syndrome",
    "ectopic ACTH",
    "hyponatremia",
    "SIADH",
    "ectopic ADH",
    "small cell lung cancer",
    "polycythemia",
    "erythropoietin",
    "pheochromocytoma",
    "renal cell carcinoma",
    "hemangioblastoma",
    "leiomyoma",
    "pure red cell aplasia",
    "Good syndrome",
    "hypogammaglobulinemia",
    "thymoma",
    "Trousseau syndrome",
    "migratory thrombophlebitis",
    "nonbacterial thrombotic endocarditis",
    "pancreatic adenocarcinoma",
    "anti-NMDA receptor encephalitis",
    "ovarian teratoma",
    "opsoclonus-myoclonus",
    "dancing eyes dancing feet",
    "neuroblastoma",
    "paraneoplastic cerebellar degeneration",
    "anti-Hu",
    "anti-Yo",
    "anti-Tr",
    "Purkinje cells",
    "paraneoplastic encephalomyelitis",
    "Lambert-Eaton myasthenic syndrome",
    "P/Q-type calcium channels",
    "myasthenia gravis",
    "acetylcholine receptor",
    "normal aging",
    "telomere shortening",
    "DNA methylation",
    "mitochondrial dysfunction",
    "sarcopenia",
    "osteopenia",
    "presbyopia",
    "presbycusis",
    "thymic involution",
    "solar elastosis",
    "photoaging",
    "lipofuscin",
    "wear and tear pigment",
  ],
  core: {
    what:
      "PARANEOPLASTIC SYNDROMES — remote effects of tumor products, grouped by the source into four bands. MUSCULOSKELETAL AND CUTANEOUS: Dermatomyositis — progressive proximal muscle weakness, Gottron papules, heliotrope rash (adenocarcinomas, especially ovarian). Acanthosis nigricans — hyperpigmented velvety plaques in axilla and neck (gastric adenocarcinoma and other visceral malignancies). Sign of Leser-Trélat — sudden onset of multiple seborrheic keratoses (GI adenocarcinomas and other visceral malignancies). Hypertrophic osteoarthropathy — abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones (adenocarcinoma of the lung). ENDOCRINE: Hypercalcemia via PTHrP (squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas) and via ↑ 1,25-(OH)2 vitamin D3/calcitriol (lymphoma); Cushing syndrome via ↑ ACTH and Hyponatremia (SIADH) via ↑ ADH (both small cell lung cancer). HEMATOLOGIC: Polycythemia via ↑ erythropoietin (pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma); Pure red cell aplasia — anemia with low reticulocytes (thymoma); Good syndrome — hypogammaglobulinemia (thymoma); Trousseau syndrome — migratory superficial thrombophlebitis; Nonbacterial thrombotic endocarditis — deposition of sterile platelet thrombi on heart valves (both adenocarcinomas, especially pancreatic). NEUROMUSCULAR: Anti-NMDA receptor encephalitis — psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction (ovarian teratoma); Opsoclonus-myoclonus ataxia syndrome — 'Dancing eyes, dancing feet' (neuroblastoma in children, small cell lung cancer in adults); Paraneoplastic cerebellar degeneration — antibodies against antigens in Purkinje cells (small cell lung cancer [anti-Hu], gynecologic and breast cancers [anti-Yo], and Hodgkin lymphoma [anti-Tr]); Paraneoplastic encephalomyelitis — anti-Hu in neurons (small cell lung cancer); Lambert-Eaton myasthenic syndrome — antibodies against presynaptic (P/Q-type) Ca2+ channels at the NMJ (small cell lung cancer); Myasthenia gravis — antibodies against postsynaptic ACh receptors at the NMJ (thymoma). NORMAL AGING — a time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease; associated with genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations; the system-by-system decline table (below, verbatim). LIPOFUSCIN — a yellow-brown, 'wear and tear' pigment associated with normal aging; composed of polymers of lipids and phospholipids complexed with protein; possibly derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes; autopsy of an older adult reveals deposits in heart, colon, liver, kidney, eye, and other organs.",
    why:
      "This is the Pathology chapter's closing spread, and it closes on the two farthest reaches of neoplasia and time. The paraneoplastic table is the exam's favorite kind of machine — a tumor acting at a distance — and the source organizes it into four engine types. The first engine is ECTOPIC HORMONE PRODUCTION: malignant cells retaining a single differentiated function and overdriving it — squamous carcinomas making PTHrP and lymphomas making calcitriol (two independent roads to hypercalcemia), small cell lung cancer making both ACTH (Cushing) and ADH (SIADH hyponatremia), and five tumors making erythropoietin (the pheochromocytoma–RCC–HCC–hemangioblastoma–leiomyoma set behind the source's own red-letter mnemonic, 'Paraneoplastic rise to High hematocrit levels'). The second engine is AUTOIMMUNE CROSSFIRE: the tumor expressing neuronal antigens, the immune system answering, and the nervous system paying — anti-NMDA receptor encephalitis from ovarian teratoma, the 'Dancing eyes, dancing feet' of opsoclonus-myoclonus (neuroblastoma in children, SCLC in adults), the anti-Purkinje cerebellar degeneration with its anti-Hu (SCLC), anti-Yo (gynecologic/breast), anti-Tr (Hodgkin) antibody map, anti-Hu encephalomyelitis, and the NMJ pair where the presynaptic P/Q-type Ca2+ channel attack (Lambert-Eaton, SCLC) faces the postsynaptic ACh receptor attack (myasthenia gravis, thymoma). The third engine is TUMOR BIOLOGY WITHOUT IMMUNITY: the hypercoagulable Trousseau syndrome and the sterile-platelet-thrombus nonbacterial thrombotic endocarditis, both flags of pancreatic and other adenocarcinomas; and the cutaneous/cutaneo-skeletal markers (dermatomyositis, acanthosis nigricans, Leser-Trélat, hypertrophic osteoarthropathy) that announce an occult malignancy from the skin inward. Two tumors tower over the table and must be memorized as hotspots: SMALL CELL LUNG CANCER (Cushing, SIADH, LEMS, encephalomyelitis, cerebellar degeneration, adult opsoclonus — the neuroendocrine tumor that secretes everything and expresses everything) and THYMOMA (pure red cell aplasia, Good syndrome, myasthenia gravis — the organ of T-cell education gone wrong three ways). Then the AGInG banner turns from tumor to time: aging is defined as a time-dependent progressive decline in organ function driven by three alteration families — genetic (telomere shortening), epigenetic (DNA methylation), and metabolic (mitochondrial dysfunction) — and the table walks all eleven systems, with the immune row's thymic involution (naïve T cells falling, memory cells preserved) and the skin's intrinsic-versus-extrinsic fork (fibroblast biosynthetic decline against UVA-driven solar elastosis) as the discriminators, and lipofuscin — the yellow-brown wear-and-tear pigment of lipid peroxidation — as the histologic signature of the whole process.",
    keyIdea:
      "Read every paraneoplastic question through the four-band table and every 'old patient' question through the eleven-system decline table. THE HORMONE HIJACK: PTHrP → squamous (lung/head/neck, renal, bladder, breast, ovarian); calcitriol → lymphoma; ACTH → Cushing and ADH → SIADH, both SCLC; EPO → polycythemia (pheochromocytoma, RCC, HCC, hemangioblastoma, leiomyoma — the source's 'Paraneoplastic rise to High hematocrit levels'). THE AUTOIMMUNE CROSSFIRE: anti-NMDA ← ovarian teratoma; opsoclonus-myoclonus ('Dancing eyes, dancing feet') ← neuroblastoma (children)/SCLC (adults); cerebellar degeneration ← anti-Hu (SCLC)/anti-Yo (gynecologic, breast)/anti-Tr (Hodgkin); encephalomyelitis ← anti-Hu (SCLC); LEMS ← presynaptic P/Q-type Ca2+ channels (SCLC); MG ← postsynaptic ACh receptors (thymoma) — PRESYNAPTIC CALCIUM vs POSTSYNAPTIC RECEPTOR, improves with use vs fatigues with use. THE NON-IMMUNE ENTRIES: Trousseau + NBTE ← adenocarcinomas especially pancreatic; dermatomyositis ← adenocarcinomas especially ovarian; acanthosis nigricans ← gastric; Leser-Trélat ← GI adenocarcinomas; hypertrophic osteoarthropathy ← lung adenocarcinoma. THE TWO HOTSPOTS: SCLC takes the endocrine-plus-neurologic set; THYMOMA TAKES THREE (pure red cell aplasia, Good syndrome, myasthenia gravis). AGING: three clocks (telomere, methylation, mitochondria), eleven systems in decline with the named exceptions (↑ aortic diameter, ↑ bone marrow fat, ↑ lung compliance with unchanged TLC, ↑ RV, ↑ A-a gradient), memory cells preserved while naïve T cells fall, function preserved despite mild decline — and lipofuscin, the yellow-brown wear-and-tear pigment, in heart, colon, liver, kidney, and eye.",
  },
  mechanisms: [
    {
      id: "ectopic-hormone-map",
      title: "The ectopic-hormone map: five signals the tumor steals",
      context: "The Endocrine and Hematologic bands of the paraneoplastic table (book 224)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A differentiated tumor cell keeps one endocrine function",
            sublabel: "Input — neoplastic cells retain lineage machinery: peptide-hormone secretion (squamous, SCLC), vitamin D activation (lymphoma), or oxygen-sensing erythropoietin output (RCC, hemangioblastoma, pheochromocytoma, HCC, leiomyoma).",
            variant: "input",
          },
          {
            id: "calcium-axis",
            label: "THE CALCIUM AXIS — PTHrP and calcitriol",
            sublabel: "Hypercalcemia by two roads: squamous cell carcinomas of lung, head, and neck (plus renal, bladder, breast, ovarian carcinomas) secrete PTHrP; lymphoma ectopically activates vitamin D → ↑ 1,25-(OH)2 vitamin D3 (calcitriol) — the two-row span of the printed table.",
            variant: "process",
          },
          {
            id: "sclc-axis",
            label: "THE SCLC AXIS — ACTH and ADH from the same tumor",
            sublabel: "Small cell lung cancer (a neuroendocrine tumor of Kulchitsky/amined precursor lineage) secretes ↑ ACTH → Cushing syndrome and ↑ ADH → Hyponatremia (SIADH) — the merged tumor cell spanning both endocrine rows.",
            variant: "process",
          },
          {
            id: "epo-axis",
            label: "THE EPO AXIS — five tumors, one red cell overdrive",
            sublabel: "Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, and leiomyoma secrete erythropoietin → polycythemia — the source's own mnemonic: 'Paraneoplastic rise to High hematocrit levels'.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the hormone, name the tumor",
            sublabel: "Output — hypercalcemia routes by mechanism (PTHrP → squamous family; calcitriol → lymphoma); Cushing + SIADH together → SCLC; isolated high hematocrit → the five-tumor EPO set; each hormone is a remote-effects fingerprint requiring the primary workup.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "calcium-axis", label: "bone/resorption mimicry" },
          { from: "trigger", to: "sclc-axis", label: "neuroendocrine secretion" },
          { from: "trigger", to: "epo-axis", label: "oxygen-sense mimicry" },
          { from: "calcium-axis", to: "output", label: "Ca2+ fingerprint" },
          { from: "sclc-axis", to: "output", label: "ACTH + ADH fingerprint" },
          { from: "epo-axis", to: "output", label: "hematocrit fingerprint" },
        ],
      },
    },
    {
      id: "autoimmune-crossfire-map",
      title: "The autoimmune crossfire: tumor antigens, neuronal targets",
      context: "The Neuromuscular band of the paraneoplastic table (book 224)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The tumor expresses a neural antigen",
            sublabel: "Input — ovarian teratoma carries neural tissue (NMDA receptor), neuroblastoma and SCLC express onconeural antigens, thymoma disrupts self-tolerance at the T-cell school.",
            variant: "input",
          },
          {
            id: "brain",
            label: "THE CENTRAL TARGETS — NMDA, Purkinje, Hu",
            sublabel: "Anti-NMDA receptor encephalitis (ovarian teratoma): psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction. Paraneoplastic cerebellar degeneration: antibodies against antigens in Purkinje cells — anti-Hu (SCLC), anti-Yo (gynecologic and breast cancers), anti-Tr (Hodgkin lymphoma). Paraneoplastic encephalomyelitis: anti-Hu in neurons (SCLC).",
            variant: "process",
          },
          {
            id: "eyes",
            label: "THE MOVEMENT DISORDER — opsoclonus-myoclonus",
            sublabel: "'Dancing eyes, dancing feet' — neuroblastoma in children, small cell lung cancer in adults.",
            variant: "process",
          },
          {
            id: "nmj",
            label: "THE NMJ FORK — presynaptic Ca2+ vs postsynaptic AChR",
            sublabel: "Lambert-Eaton myasthenic syndrome: antibodies against presynaptic (P/Q-type) Ca2+ channels at the NMJ (SCLC) — impaired transmitter release that FACILITATES with repeated use. Myasthenia gravis: antibodies against postsynaptic ACh receptors at the NMJ (thymoma) — receptor loss that FATIGUES with repeated use.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the antibody, then hunt the tumor",
            sublabel: "Output — psychosis + seizures in a young woman → anti-NMDA → ovarian teratoma; subacute pancerebellar decline → anti-Hu/anti-Yo/anti-Tr → SCLC/gynecologic-breast/Hodgkin; proximal weakness that improves with use → P/Q-type Ca2+ channels → SCLC; fatiguing ocular-bulbar weakness → ACh receptors → thymoma.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "brain", label: "onconeural antigen" },
          { from: "trigger", to: "eyes", label: "movement circuit autoimmunity" },
          { from: "trigger", to: "nmj", label: "synapse autoimmunity" },
          { from: "brain", to: "output", label: "syndrome → primary" },
          { from: "eyes", to: "output", label: "age splits the tumor" },
          { from: "nmj", to: "output", label: "pre vs post is the whole discrimination" },
        ],
      },
    },
    {
      id: "system-decline-map",
      title: "The system-decline map: normal aging across eleven systems",
      context: "The Normal aging table + the Lipofuscin block (book 225)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Three clocks run down together",
            sublabel: "Input — normal aging is a time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease, driven by genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations.",
            variant: "input",
          },
          {
            id: "structure",
            label: "THE STRUCTURAL SYSTEMS DECLINE",
            sublabel: "Cardiovascular: ↓ arterial compliance, ↑ aortic diameter, ↓ LV cavity size with sigmoid-shaped septum, ↑ LA size, valve calcification, ↓ max HR. Musculoskeletal: sarcopenia, osteopenia, cartilage thinning. Nervous: ↓ brain volume, ↓ cerebral blood flow — function preserved despite mild decline. Renal: ↓ GFR (↓ nephrons), ↓ RBF. Skin: flattened dermal-epidermal junction, ↓ collagen/↓ elastin, ↓ sweat and sebaceous glands.",
            variant: "process",
          },
          {
            id: "reserve",
            label: "THE RESERVE SYSTEMS DECLINE",
            sublabel: "Hematopoietic: ↓ marrow mass, ↑ marrow fat, less vigorous stress response. Immune: thymic involution → ↓ naïve T cells (indirectly ↓ naïve B cells), memory B and T cells preserved — a diminished response to novel antigens (pathogens, vaccines). Respiratory: ↑ lung compliance with ↓ elastic recoil, ↓ chest wall compliance, ↓ FEV1/↓ FVC/↑ RV with TLC unchanged, ↑ A-a gradient, blunted hypoxia/hypercapnia response. Special senses: presbyopia, presbycusis, ↓ smell and taste. Reproductive: gonadal atrophy with the menopausal estrogen fall.",
            variant: "process",
          },
          {
            id: "output",
            label: "Old is not sick — and lipofuscin is the receipt",
            sublabel: "Output — decline ≠ disease: treat the numbers against age norms (a modestly ↓ GFR in an 80-year-old may be normal aging, not CKD). The histologic receipt is LIPOFUSCIN — a yellow-brown 'wear and tear' pigment of lipids and phospholipids complexed with protein, from lipid peroxidation of subcellular membranes, deposited in heart, colon, liver, kidney, and eye at autopsy.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "structure", label: "three clocks → structural wear" },
          { from: "trigger", to: "reserve", label: "three clocks → lost reserve" },
          { from: "structure", to: "output", label: "function preserved despite decline" },
          { from: "reserve", to: "output", label: "novel-antigen and stress responses blunt" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "paraneoplastic-syndrome-map",
      title: "The paraneoplastic syndrome and aging map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the chapter finale (book 224-226): the paraneoplastic table as its four family bands (MUSCULOSKELETAL & CUTANEOUS / ENDOCRINE / HEMATOLOGIC / NEUROMUSCULAR), every row carrying manifestation → mechanism → tumor chips, with the five ectopic-hormone rows (PTHrP, calcitriol, ACTH, ADH, EPO) tagged as hormone drivers and the hypercalcemia cell shown spanning its two mechanism rows; the tumor hotspots (SCLC's endocrine-plus-neurologic set, the thymoma trio, the teratoma/neuroblastoma pair) as callout cards; the aging half as the eleven-system decline grid with its verbatim arrows, the intrinsic-versus-extrinsic skin fork, and the Lipofuscin card with photograph A described in text; the footer documents the p248 NOTES-page continuation quirk.",
      notice:
        "Census (pdfimages + VLM): p246 carries ZERO raster images (pure table text). p247 carries ONE 175x126 8bpc image lettered A beside the Lipofuscin block — a COPYRIGHTED histology micrograph (pale pink/lavender tissue background; scattered yellow-brown granular pigment deposits within cells; two black arrows pointing to the dark-brown granule clusters; the letter A in a small dark box at the image's top-left; ~1.9 x 1.4 in directly below the bold Lipofuscin label) — described in text in this note and in the registry visual, NEVER reproduced (the M32 convention). Text-layer interleave quirks documented: the fused small-caps fragment 'SCa2+mous cell carcinomas' (= 'Squamous cell carcinomas' with the source's red Ca2+ highlighting), the polycythemia tumor list printing at raw lines 140-141 after the myasthenia gravis row, and the merged 'Small cell lung cancer' and 'Thymoma' tumor-cell fragments printing after the page footer. p248 is the printed NOTES page (banner + '▶ NOTES' + footer only) claimed by this topic as continuation. No margin mnemonics beyond the source's own 'Paraneoplastic rise to High hematocrit levels' and 'Dancing eyes, dancing feet' (both carried verbatim); the KYP memory layer is original.",
    },
    {
      kind: "table",
      title: "Book 224 — the paraneoplastic syndromes table (carried verbatim, all four bands)",
      intro: "The four-band remote-effects table, as printed — manifestation, description/mechanism, most commonly associated tumor(s).",
      columns: ["BAND · MANIFESTATION", "DeSCrIPTIOn/meCHAnISm (verbatim)", "mOST COmmOnLY ASSOCIATeD TUmOr(S) (verbatim)"],
      rows: [
        [
          "MUSCULOSKELETAL AND CUTANEOUS — Dermatomyositis",
          "Progressive proximal muscle weakness, Gottron papules, heliotrope rash",
          "Adenocarcinomas, especially ovarian",
        ],
        [
          "MUSCULOSKELETAL AND CUTANEOUS — Acanthosis nigricans",
          "Hyperpigmented velvety plaques in axilla and neck",
          "Gastric adenocarcinoma and other visceral malignancies",
        ],
        [
          "MUSCULOSKELETAL AND CUTANEOUS — Sign of Leser-Trélat",
          "Sudden onset of multiple seborrheic keratoses",
          "GI adenocarcinomas and other visceral malignancies",
        ],
        [
          "MUSCULOSKELETAL AND CUTANEOUS — Hypertrophic osteoarthropathy",
          "Abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones",
          "Adenocarcinoma of the lung",
        ],
        [
          "ENDOCRINE — Hypercalcemia (the manifestation cell spans two mechanism rows: the PTHrP row prints at the musculoskeletal/endocrine boundary in the raw text layer)",
          "PTHrP — [printed as the fused small-caps fragment “SCa2+mous cell carcinomas” = Squamous] Squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas",
          "Squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas",
        ],
        [
          "ENDOCRINE — Hypercalcemia (second mechanism row)",
          "↑ 1,25-(OH)2 vitamin D3 (calcitriol)",
          "Lymphoma",
        ],
        [
          "ENDOCRINE — Cushing syndrome",
          "↑ ACTH",
          "Small cell lung cancer (the merged tumor cell spans the Cushing and SIADH rows)",
        ],
        [
          "ENDOCRINE — Hyponatremia (SIADH)",
          "↑ ADH",
          "Small cell lung cancer",
        ],
        [
          "HEMATOLOGIC — Polycythemia",
          "↑ Erythropoietin — with the source's own printed mnemonic: “Paraneoplastic rise to High hematocrit levels” (red capitals P-r-H-h-l mapping the tumor list)",
          "Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma (this list prints at raw lines 140-141, after the myasthenia gravis row)",
        ],
        [
          "HEMATOLOGIC — Pure red cell aplasia",
          "Anemia with low reticulocytes",
          "Thymoma (the merged tumor cell spans pure red cell aplasia, Good syndrome, and myasthenia gravis)",
        ],
        [
          "HEMATOLOGIC — Good syndrome",
          "Hypogammaglobulinemia",
          "Thymoma",
        ],
        [
          "HEMATOLOGIC — Trousseau syndrome",
          "Migratory superficial thrombophlebitis",
          "Adenocarcinomas, especially pancreatic (the merged tumor cell spans the Trousseau and endocarditis rows)",
        ],
        [
          "HEMATOLOGIC — Nonbacterial thrombotic endocarditis",
          "Deposition of sterile platelet thrombi on heart valves",
          "Adenocarcinomas, especially pancreatic",
        ],
        [
          "NEUROMUSCULAR — Anti-NMDA receptor encephalitis",
          "Psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction",
          "Ovarian teratoma",
        ],
        [
          "NEUROMUSCULAR — Opsoclonus-myoclonus ataxia syndrome",
          "“Dancing eyes, dancing feet” (the source's own mnemonic, carried verbatim)",
          "Neuroblastoma (children), small cell lung cancer (adults)",
        ],
        [
          "NEUROMUSCULAR — Paraneoplastic cerebellar degeneration",
          "Antibodies against antigens in Purkinje cells",
          "Small cell lung cancer (anti-Hu), gynecologic and breast cancers (anti-Yo), and Hodgkin lymphoma (anti-Tr)",
        ],
        [
          "NEUROMUSCULAR — Paraneoplastic encephalomyelitis",
          "Anti-Hu in neurons",
          "Small cell lung cancer (the merged tumor cell spans encephalomyelitis and Lambert-Eaton)",
        ],
        [
          "NEUROMUSCULAR — Lambert-Eaton myasthenic syndrome",
          "Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ",
          "Small cell lung cancer",
        ],
        [
          "NEUROMUSCULAR — Myasthenia gravis",
          "Antibodies against postsynaptic ACh receptors at NMJ",
          "Thymoma",
        ],
      ],
      caption:
        "Four bands, four engines: the ectopic-hormone rows (PTHrP, calcitriol, ACTH, ADH, EPO — hypercalcemia spanning the squamous and lymphoma mechanisms), the autoimmune-crossfire neuromuscular rows (anti-NMDA, opsoclonus, the anti-Hu/anti-Yo/anti-Tr cerebellar map, the presynaptic-Ca2+/postsynaptic-AChR NMJ pair), the hypercoagulable pair (Trousseau + NBTE, adenocarcinomas especially pancreatic), and the cutaneous markers (dermatomyositis, acanthosis nigricans, Leser-Trélat, hypertrophic osteoarthropathy). Two hotspots own the table: SMALL CELL LUNG CANCER (Cushing, SIADH, LEMS, encephalomyelitis, cerebellar degeneration, adult opsoclonus) and THYMOMA (pure red cell aplasia, Good syndrome, myasthenia gravis).",
    },
    {
      kind: "table",
      title: "Book 225 — Normal aging and Lipofuscin (carried verbatim, all eleven systems)",
      intro: "The aging definition, the system-by-system decline table, and the wear-and-tear pigment block, as printed.",
      columns: ["SYSTEM", "VERBATIM — book 225"],
      rows: [
        [
          "THE DEFINITION",
          "Time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease. Associated with genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations.",
        ],
        [
          "Cardiovascular",
          "↓ arterial compliance (↑ stiffness), ↑ aortic diameter, ↓ left ventricular cavity size and sigmoid-shaped interventricular septum (due to myocardial hypertrophy), ↑ left atrial cavity size, aortic and mitral valve calcification, ↓ maximum heart rate.",
        ],
        [
          "Gastrointestinal",
          "↓ LES tone, ↓ gastric mucosal protection, ↓ colonic motility.",
        ],
        [
          "Hematopoietic",
          "↓ bone marrow mass, ↑ bone marrow fat; less vigorous response to stressors (eg, blood loss).",
        ],
        [
          "Immune",
          "Predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved. Net effect = diminished response to novel antigens (eg, pathogens, vaccines).",
        ],
        [
          "Musculoskeletal",
          "↓ skeletal muscle mass (sarcopenia), ↓ bone mass (osteopenia), joint cartilage thinning.",
        ],
        [
          "Nervous",
          "↓ brain volume (neuronal loss), ↓ cerebral blood flow; function is preserved despite mild cognitive decline.",
        ],
        [
          "Special senses",
          "Impaired accommodation (presbyopia), ↓ hearing (presbycusis), ↓ smell and taste.",
        ],
        [
          "Skin",
          "Atrophy with flattening of dermal-epidermal junction; ↓ dermal collagen and ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis). ▘ Intrinsic aging (chronological aging)—↓ biosynthetic capacity of dermal fibroblasts. ▘ Extrinsic aging (photoaging)—degradation of dermal collagen and elastin from sun exposure (UVA); degradation products accumulate in dermis (solar elastosis).",
        ],
        [
          "Renal",
          "↓ GFR (↓ nephrons), ↓ RBF, ↓ hormonal function. Voiding dysfunction (eg, urinary incontinence).",
        ],
        [
          "Reproductive",
          "Males—testicular atrophy (↓ spermatogenesis), prostate enlargement, slower erection/ejaculation, longer refractory period. Less pronounced ↓ in libido as compared to females. Females—vulvovaginal atrophy; vaginal shortening, thinning, dryness, ↑ pH. Due to ↓ estrogen from exhaustion of ovarian follicles (menopause).",
        ],
        [
          "Respiratory",
          "↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance (↑ stiffness), ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC is unchanged); ↑ A-a gradient, ↑ V/Q mismatch. Ventilatory response to hypoxia/hypercapnia is blunted. Less vigorous cough, slower mucociliary clearance.",
        ],
        [
          "LIPOFUSCIN (with photograph A described in text — copyrighted, never reproduced)",
          "A yellow-brown, “wear and tear” pigment A associated with normal aging. Composed of polymers of lipids and phospholipids complexed with protein. May be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes. Autopsy of older adult will reveal deposits in heart, colon, liver, kidney, eye, and other organs. [Photograph A, described in text: a histology micrograph (the 175x126 lettered raster beside the Lipofuscin block) — a pale pink/lavender tissue background with scattered yellow-brown granular pigment deposits within cells, two black arrows pointing to the dark-brown granule clusters, the letter A in a small dark box at the image's top-left, printed directly below the bold Lipofuscin label.]",
        ],
      ],
      caption:
        "Eleven systems, one direction: the structural systems wear (arteries stiffen, the septum sigmoid-bends, muscle and bone thin, the brain shrinks while function holds), the reserve systems blunt (marrow fat replaces marrow, the involuted thymus starves the naïve-T supply while memory cells survive, the lung gains compliance as it loses recoil with TLC unchanged), and the named exceptions travel upward (aortic diameter, marrow fat, RV, A-a gradient, vaginal pH). The skin fork separates the clock (intrinsic — fibroblast biosynthetic decline) from the sun (extrinsic — UVA collagen degradation, solar elastosis), and lipofuscin — lipid-peroxidation polymers complexed with protein — is the wear-and-tear receipt found in heart, colon, liver, kidney, and eye.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 63-year-old woman with a 40-pack-year history presents with confusion; serum sodium is 118 mEq/L with low serum osmolality, urine osmolality 450 mOsm/kg, and a normal volume status; chest CT shows a central lung mass with hilar adenopathy.",
        discriminator: "Small cell lung cancer secreting ADH — Hyponatremia (SIADH) with ↑ ADH; euvolemic hyponatremia, inappropriately concentrated urine",
        concept: "The SCLC ectopic-hormone axis",
        answer:
          "The euvolemic hypo-osmolar hyponatremia with urine that stays concentrated is SIADH, and the central (hilar) mass in a smoker names small cell lung cancer — the tumor whose merged cell in the printed table owns both the hyponatremia/SIADH (↑ ADH) row and the Cushing (↑ ACTH) row. The paraneoplastic table is the fingerprint: SCLC takes Cushing, SIADH, Lambert-Eaton, encephalomyelitis, cerebellar degeneration (anti-Hu), and adult opsoclonus.",
      },
      {
        stem: "A 19-year-old woman is admitted for acute psychosis with seizures, orofacial dyskinesias, and autonomic instability; MRI is unremarkable and CSF shows mild lymphocytic pleocytosis; pelvic ultrasound is ordered.",
        discriminator: "Anti-NMDA receptor encephalitis — psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction; ovarian teratoma",
        concept: "The autoimmune-crossfire band",
        answer:
          "The psychiatric-first presentation with dyskinesias and autonomic instability in a young woman is anti-NMDA receptor encephalitis, and the tumor to hunt is the ovarian teratoma (its neural tissue carries the NMDA receptor antigen) — the paraneoplastic table's first neuromuscular row. Pelvic ultrasound/oophorectomy plus immunotherapy is the management path.",
      },
      {
        stem: "A 58-year-old man has a headaches-and-flushing workup that incidentally shows hematocrit 61% with normal oxygen saturation and a normal erythropoietin-suppression pattern; abdominal imaging reveals a right renal mass.",
        discriminator: "Polycythemia via ↑ erythropoietin — the five-tumor set: pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma",
        concept: "The EPO axis and the source's own mnemonic",
        answer:
          "Erythrocytosis with normal oxygenation points to paraneoplastic erythropoietin — the source's own mnemonic row: 'Paraneoplastic rise to High hematocrit levels' (the red capitals P-r-H-h-l mapping Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma). The renal mass (and the flushing/headaches suggesting pheochromocytoma) fits the EPO-producing set; the hypertension workup and the renal lesion are two rows of the same table.",
      },
      {
        stem: "A 3-year-old with an abdominal mass develops rapid, chaotic eye movements with myoclonic jerks and ataxia; urinary catecholamines are elevated.",
        discriminator: "Opsoclonus-myoclonus ataxia syndrome — 'Dancing eyes, dancing feet'; neuroblastoma (children), small cell lung cancer (adults)",
        concept: "The movement-disorder row and its age split",
        answer:
          "The chaotic multidirectional eye movements with myoclonus and ataxia are opsoclonus — 'Dancing eyes, dancing feet' — and the age splits the tumor: neuroblastoma in children (the abdominal mass with elevated urinary catecholamines), small cell lung cancer in adults. The opsoclonus may precede the tumor diagnosis and often heralds a better neuroblastoma prognosis.",
      },
      {
        stem: "An 82-year-old asymptomatic woman has an eGFR of 52 mL/min/1.73 m2, presbyopia corrected with reading glasses, and a normal neurologic examination; she takes no medications and has no proteinuria.",
        discriminator: "Normal aging — ↓ GFR (↓ nephrons), presbyopia (impaired accommodation); decline in organ function without disease",
        concept: "The system-decline map's 'old is not sick' rule",
        answer:
          "The aging table's rule: aging is a time-dependent progressive decline in organ function — ↓ GFR (↓ nephrons) with ↓ RBF, impaired accommodation (presbyopia), ↓ hearing (presbycusis) — with function preserved despite the decline. A modestly reduced eGFR without proteinuria or structural disease in an 82-year-old is the renal row of normal aging, not automatically CKD; treat against age norms, and remember the thymic-involution row (naïve T cells fall, memory cells survive) before attributing every decline to pathology.",
      },
    ],
    traps: [
      {
        a: "Lambert-Eaton myasthenic syndrome",
        b: "Myasthenia gravis",
        whyConfused: "Both are antibody-mediated NMJ syndromes causing proximal weakness, and both are paraneoplastic (LEMS — SCLC; MG — thymoma)",
        keyDifference: "LEMS attacks PRESYNAPTIC (P/Q-type) Ca2+ channels at the NMJ — acetylcholine release is impaired, so weakness IMPROVES with repeated use (facilitation), with autonomic features like dry mouth; MG attacks POSTSYNAPTIC ACh receptors — receptor availability falls, so weakness FATIGUES with repeated use (ptosis and diplopia worse at day's end), improved by cholinesterase inhibitors",
        clue: "Improves with use + dry mouth + a smoker's central mass → LEMS (SCLC); worsens through the day + ptosis/diplopia + a mediastinal mass → MG (thymoma)",
      },
      {
        a: "PTHrP-driven hypercalcemia (squamous carcinomas)",
        b: "Calcitriol-driven hypercalcemia (lymphoma)",
        whyConfused: "Both are the SAME manifestation — hypercalcemia — printed as one spanning cell over two mechanism rows",
        keyDifference: "PTHrP comes from squamous cell carcinomas of lung, head, and neck (plus renal, bladder, breast, and ovarian carcinomas) — the PTH-mimic peptide route with suppressed PTH; ↑ 1,25-(OH)2 vitamin D3 (calcitriol) comes from lymphoma — the ectopic vitamin-D-activation route (the same enzyme logic as granulomatous 1α-hydroxylase, P11)",
        clue: "A squamous/head-neck or renal/bladder/breast/ovarian primary → PTHrP; a lymphoma (or granulomatous disease) with high 1,25-(OH)2 D → calcitriol",
      },
      {
        a: "Nonbacterial thrombotic endocarditis",
        b: "Infective endocarditis",
        whyConfused: "Both deposit material on heart valves and can embolize",
        keyDifference: "NBTE is the deposition of STERILE platelet thrombi on heart valves — associated with adenocarcinomas, especially pancreatic (and with Trousseau syndrome, its migratory superficial thrombophlebitis sibling) — no vegetation organisms, no fever or positive cultures; infective endocarditis is seeded microbial vegetation with fever, positive blood cultures, and immunologic phenomena",
        clue: "Migratory thrombophlebitis or sterile valve thrombi in a cancer patient (classically pancreatic adenocarcinoma with a Trousseau sign of malignancy) → NBTE; fever + new murmur + positive cultures → infective endocarditis",
      },
      {
        a: "The thymoma trio",
        b: "The SCLC set",
        whyConfused: "Both tumors own multiple rows of the paraneoplastic table and both can present with a mediastinal/hilar mass",
        keyDifference: "THYMOMA takes exactly three — pure red cell aplasia (anemia with low reticulocytes), Good syndrome (hypogammaglobulinemia), and myasthenia gravis (postsynaptic ACh receptors); SMALL CELL LUNG CANCER takes the secretion set (Cushing ↑ ACTH, SIADH ↑ ADH) plus the neurologic set (LEMS, encephalomyelitis anti-Hu, cerebellar degeneration anti-Hu, adult opsoclonus)",
        clue: "Anemia with low reticulocytes, recurrent sinopulmonary infections, or fatiguing weakness → thymoma; Cushing, SIADH, or facilitating weakness in a smoker → SCLC",
      },
      {
        a: "The aging table's declines",
        b: "Disease in an older adult",
        whyConfused: "Both present as 'abnormal' numbers or findings in an older patient",
        keyDifference: "Normal aging is a time-dependent progressive decline with FUNCTION PRESERVED despite mild decline — ↓ GFR (↓ nephrons), ↓ brain volume with preserved cognition, ↓ FEV1/↓ FVC/↑ RV with TLC unchanged, thymic involution with memory cells preserved — whereas disease exceeds age-expected decline and impairs function",
        clue: "Modest, isolated, function-preserving changes in an older adult (presbyopia, presbycusis, a lower eGFR without proteinuria) → the aging table; disproportionate or progressive impairment → work up disease",
      },
    ],
    pivots: [
      {
        lookAlike: "A cancer patient with a remote syndrome — which paraneoplastic engine?",
        differentiator: "Route by the syndrome's mechanism: an excess of a normal signal (Ca2+, cortisol, ADH, hematocrit) → the ectopic-hormone axis (PTHrP/calcitriol, ACTH, ADH, EPO); a neurologic/psychiatric deficit with antibodies → the autoimmune crossfire (anti-NMDA, anti-Hu/anti-Yo/anti-Tr, P/Q-type Ca2+ channels, ACh receptors); thrombosis on valves or veins → the hypercoagulable pair (Trousseau/NBTE); a skin or periosteal marker → the cutaneous band (dermatomyositis, acanthosis nigricans, Leser-Trélat, hypertrophic osteoarthropathy)",
        correctPath: "Name the engine first, then the tumor: hypercalcemia + squamous → PTHrP; Cushing/SIADH/LEMS/anti-Hu → SCLC; psychosis + teratoma → anti-NMDA; pure red cell aplasia/Good/MG → thymoma; thrombophlebitis/NBTE → adenocarcinomas especially pancreatic",
      },
      {
        lookAlike: "Proximal muscle weakness in a cancer patient — dermatomyositis, Lambert-Eaton, myasthenia gravis, or Cushing myopathy?",
        differentiator: "Look for the band's signature: Dermatomyositis — Gottron papules, heliotrope rash, progressive proximal weakness (adenocarcinomas especially ovarian); LEMS — weakness that IMPROVES with repeated use, autonomic dry mouth, presynaptic (P/Q-type) Ca2+ channel antibodies (SCLC); MG — OCULAR-BULBAR fatiguable weakness that WORSENS with use, postsynaptic ACh receptor antibodies (thymoma); ectopic-ACTH Cushing — proximal weakness with hypertension, hypokalemia, hyperglycemia, striae (SCLC)",
        correctPath: "Rash + proximal weakness → dermatomyositis (tumor: adenocarcinomas especially ovarian); facilitation on exam → LEMS (SCLC); fatiguing ptosis/diplopia → MG (thymoma); hypercortisol features → ectopic ACTH (SCLC)",
      },
      {
        lookAlike: "An older adult 'failing' — normal aging or disease?",
        differentiator: "Apply the aging table row by row and ask whether function is preserved: ↓ GFR with ↑ susceptibility but no proteinuria, ↓ brain volume with preserved function, thymic involution with memory cells preserved, sarcopenia/osteopenia, presbyopia/presbycusis — the aging pattern is diffuse, slow, and function-sparing; disease is focal, disproportionate, or progressive",
        correctPath: "Age-consistent decline across matching systems (renal, special senses, musculoskeletal) → normal aging (the three clocks: telomere shortening, DNA methylation, mitochondrial dysfunction); disproportionate organ failure, especially with lipofuscin-independent findings → diagnose and treat the disease, not the birthday",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old man with a 50-pack-year smoking history presents with 3 months of 20-lb weight loss and a new cough. On examination he is alert but mildly confused; blood pressure is normal with no edema or dehydration. Laboratory studies: sodium 116 mEq/L, serum osmolality 238 mOsm/kg, urine osmolality 480 mOsm/kg, urine sodium 45 mEq/L, normal thyroid-stimulating hormone, normal morning cortisol, potassium 4.0 mEq/L, glucose 105 mg/dL. Chest CT shows a 4-cm central left hilar mass with mediastinal adenopathy. On neurologic examination, he also has difficulty rising from a chair; hip-flexor strength improves over the first several seconds of sustained effort, and he reports a persistently dry mouth. Skin examination shows no rash.",
      question:
        "Explain the hyponatremia and the proximal weakness with a single tumor, name the mechanisms verbatim from the paraneoplastic table, and choose the pair that accounts for BOTH findings.",
      options: [
        {
          label: "Small cell lung cancer secreting ADH (Hyponatremia/SIADH — ↑ ADH) plus antibodies against presynaptic (P/Q-type) Ca2+ channels at the NMJ (Lambert-Eaton myasthenic syndrome)",
          text: "One neuroendocrine tumor, two remote engines: a hormone and an antibody.",
          correct: true,
          why: "Correct on all layers. (1) THE HYPONATREMIA: low serum osmolality with inappropriately concentrated urine (480 mOsm/kg) and urinary sodium excretion in a euvolemic patient = SIADH — the table's 'Hyponatremia (SIADH)' row, mechanism '↑ ADH', tumor 'Small cell lung cancer'; the central hilar mass in a heavy smoker is SCLC. (2) THE WEAKNESS: proximal hip weakness that IMPROVES over the first seconds of sustained effort is facilitation — the Lambert-Eaton signature, mechanism 'Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ', tumor 'Small cell lung cancer'; the dry mouth is the autonomic co-traveler. (3) THE UNIFYING TUMOR: SCLC is the table's great owner — its merged cell spans Cushing (↑ ACTH), SIADH (↑ ADH), encephalomyelitis (anti-Hu), cerebellar degeneration (anti-Hu), adult opsoclonus, and LEMS. The normal cortisol and potassium, and the absence of a rash, exclude the mimics below.",
        },
        {
          label: "Small cell lung cancer secreting ACTH — ectopic Cushing syndrome explains both the weakness (proximal myopathy) and the hyponatremia",
          text: "One hormone, both findings — cortisol myopathy and cortisol-driven salt loss.",
          why: "Wrong hormone for the sodium: ectopic ACTH from SCLC does cause proximal weakness, but it arrives with HYPERtension, hypokalemic metabolic alkalosis, hyperglycemia, and striae — the stem's normal potassium (4.0), normal glucose (105), and normal blood pressure exclude it, and Cushing does not concentrate the urine against a low serum osmolality. The sodium picture is ADH's, not ACTH's; and the weakness that FACILITATES with use is a channelopathy, not a steroid myopathy (which is painless and non-fatiguing in pattern but never improves with repetition).",
        },
        {
          label: "Dermatomyositis as the paraneoplastic syndrome — progressive proximal muscle weakness from an ovarian-associated adenocarcinoma syndrome, with hyponatremia from malnutrition",
          text: "The classic weakness-malignancy syndrome; the sodium is a red herring of wasting.",
          why: "Wrong syndrome and wrong tumor: dermatomyositis is the table's 'Progressive proximal muscle weakness, Gottron papules, heliotrope rash' row — but the skin examination shows NO rash (the Gottron/heliotropic findings are its signature), its tumor is 'Adenocarcinomas, especially ovarian' (not a central lung mass), and its weakness is steadily progressive, not facilitating. The malnutrition story also fails: SIADH is a euvolemic hypo-osmolar state with an INAPPROPRIATELY concentrated urine — starvation/malnutrition would push urine osmolality down, not to 480 mOsm/kg.",
        },
        {
          label: "Myasthenia gravis from a thymoma — antibodies against postsynaptic ACh receptors causing the weakness, with hyponatremia from adrenal insufficiency due to metastases",
          text: "The other NMJ paraneoplastic syndrome; the sodium is the adrenal glands failing.",
          why: "Wrong NMJ side and wrong salt mechanism: myasthenia gravis is 'Antibodies against postsynaptic ACh receptors at NMJ' with tumor 'Thymoma' — its weakness FATIGUES with repeated use (worsens), the opposite of the stem's facilitation, and MG has no primary autonomic dry mouth. Adrenal insufficiency does cause hyponatremia, but with HYPERkalemia and a LOW urine sodium (salt-wasting with volume depletion), not the normal potassium, euvolemia, and high urine sodium/osmolality of SIADH; the normal morning cortisol in the stem closes that door.",
        },
        {
          label: "Polycythemia from tumor erythropoietin secretion causing hyperviscosity-related confusion, with weakness from hyperviscosity-induced fatigue",
          text: "The hematocrit is the missing measurement — this is the EPO axis.",
          why: "Wrong EPO row: the erythropoietin set ('Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma' — the source's 'Paraneoplastic rise to High hematocrit levels') presents with ELEVATED hematocrit and hyperviscosity, none of which the stem reports; SCLC is not in the EPO tumor list. The hyponatremia with concentrated urine is an ADH (water-retention) picture, not a viscosity picture, and the facilitating weakness with dry mouth is channel-mediated, not viscosity-mediated.",
        },
      ],
      reasoning:
        "The case walks the paraneoplastic table's two engines in one patient. (1) THE HORMONE ENGINE: euvolemic hyponatremia (Na 116) with low serum osmolality, inappropriately high urine osmolality (480), and high urine sodium = SIADH → the 'Hyponatremia (SIADH)' row → '↑ ADH' → 'Small cell lung cancer', and the central hilar mass in a 50-pack-year smoker names the primary. (2) THE ANTIBODY ENGINE: proximal weakness that IMPROVES with sustained effort (facilitation) plus dry mouth = Lambert-Eaton → 'Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ' → 'Small cell lung cancer'. (3) THE UNIFICATION: SCLC owns both rows — the tumor's merged cell in the printed table spans the endocrine (Cushing, SIADH) and neuromuscular (LEMS, encephalomyelitis, cerebellar degeneration) bands. (4) THE DISCRIMINATORS: ectopic ACTH excluded by normal potassium/glucose/BP (and it would not concentrate urine); dermatomyositis excluded by no rash, no facilitation, wrong tumor (adenocarcinomas especially ovarian); myasthenia gravis excluded by facilitation (MG fatigues) and by the SIADH-pattern sodium with normal potassium (adrenal insufficiency would cause hyperkalemia and salt-wasting); polycythemia excluded by the EPO set's tumors and its high-hematocrit signature. One tumor, two engines, both rows of book 224.",
    },
  },
  mnemonics: [
    {
      code: "THE FIVE-HORMONE HIJACK",
      meaning: "The ectopic-hormone rows of the table: PTHrP → hypercalcemia via squamous cell carcinomas of lung, head, and neck (plus renal, bladder, breast, ovarian); CALCITRIOL (↑ 1,25-(OH)2 vitamin D3) → hypercalcemia via lymphoma; ACTH → Cushing via small cell lung cancer; ADH → Hyponatremia (SIADH) via small cell lung cancer; EPO → polycythemia via pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma (the source's own red-letter mnemonic 'Paraneoplastic rise to High hematocrit levels' rides this row).",
      memorizes: "The five ectopic-hormone axes and their tumors",
      whenToUse: "Any hypercalcemia-of-malignancy, ectopic Cushing, SIADH-of-malignancy, or paraneoplastic polycythemia question",
      clinical: "The tumor keeps one differentiated skill and overdrives it — find the hormone fingerprint and you have found the primary.",
    },
    {
      code: "PRESYNAPTIC CALCIUM, POSTSYNAPTIC RECEPTOR",
      meaning: "The NMJ fork: LAMBERT-EATON = antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at the NMJ (SCLC) — release fails, so weakness FACILITATES with repeated use, with autonomic dry mouth; MYASTHENIA GRAVIS = antibodies against POSTSYNAPTIC ACh receptors at the NMJ (thymoma) — receptors are lost, so weakness FATIGUES with repeated use (ptosis/diplopia worse at day's end).",
      memorizes: "The Lambert-Eaton vs myasthenia gravis discrimination",
      whenToUse: "Any proximal weakness question in a patient with a known or suspected malignancy",
      clinical: "The direction of the response to use — improves vs worsens — is the whole discrimination, and each side carries its own tumor: SCLC vs thymoma.",
    },
    {
      code: "THYMOMA TAKES THREE",
      meaning: "The thymoma rows of the table: PURE RED CELL APLASIA (anemia with low reticulocytes), GOOD SYNDROME (hypogammaglobulinemia), and MYASTHENIA GRAVIS (antibodies against postsynaptic ACh receptors) — the organ of T-cell education gone wrong in exactly three ways: red-cell precursors, B-cell globulin, and the NMJ receptor.",
      memorizes: "The three thymoma-associated paraneoplastic syndromes",
      whenToUse: "Any anterior mediastinal mass with anemia, recurrent infections, or fatiguable weakness",
      clinical: "A mediastinal mass plus any one of anemia-with-low-reticulocytes, hypogammaglobulinemia, or fatiguing ocular-bulbar weakness — think thymoma and look for the other two.",
    },
    {
      code: "THREE CLOCKS, ELEVEN SYSTEMS",
      meaning: "The aging half: THREE CLOCKS drive the decline — GENETIC (eg, telomere shortening), EPIGENETIC (eg, DNA methylation), METABOLIC (eg, mitochondrial dysfunction) — and ELEVEN SYSTEMS decline in their own directions (Cardiovascular, Gastrointestinal, Hematopoietic, Immune, Musculoskeletal, Nervous, Special senses, Skin, Renal, Reproductive, Respiratory), with the exceptions that rise (aortic diameter, marrow fat, lung compliance, RV, A-a gradient) and the preservations that matter (memory B and T cells; neurologic function despite mild decline; TLC unchanged).",
      memorizes: "The normal-aging definition and the eleven-system decline table",
      whenToUse: "Any 'is this normal aging or disease?' question in an older patient",
      clinical: "Old is not sick: match the finding to its system row (a modestly low eGFR, presbyopia, presbycusis, sarcopenia) before pathologizing it — and the histologic receipt of the three clocks is lipofuscin, the yellow-brown wear-and-tear pigment in heart, colon, liver, kidney, and eye.",
    },
  ],
  rapidReview: {
    s30: [
      "Paraneoplastic syndromes — four bands: Musculoskeletal and cutaneous / Endocrine / Hematologic / Neuromuscular",
      "Dermatomyositis: progressive proximal muscle weakness, Gottron papules, heliotrope rash — adenocarcinomas, especially ovarian",
      "Acanthosis nigricans: hyperpigmented velvety plaques in axilla and neck — gastric adenocarcinoma and other visceral malignancies; Sign of Leser-Trélat: sudden onset of multiple seborrheic keratoses — GI adenocarcinomas",
      "Hypertrophic osteoarthropathy: abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones — adenocarcinoma of the lung",
      "Hypercalcemia: PTHrP — squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas; ↑ 1,25-(OH)2 vitamin D3 (calcitriol) — lymphoma",
      "Cushing syndrome (↑ ACTH) and Hyponatremia (SIADH, ↑ ADH) — both small cell lung cancer",
      "Polycythemia: ↑ erythropoietin — pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma ('Paraneoplastic rise to High hematocrit levels')",
      "Pure red cell aplasia (anemia with low reticulocytes) and Good syndrome (hypogammaglobulinemia) — thymoma; Myasthenia gravis (postsynaptic ACh receptors) — thymoma: THYMOMA TAKES THREE",
      "Trousseau syndrome (migratory superficial thrombophlebitis) and Nonbacterial thrombotic endocarditis (sterile platelet thrombi on heart valves) — adenocarcinomas, especially pancreatic",
      "Anti-NMDA receptor encephalitis: psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction — ovarian teratoma",
      "Opsoclonus-myoclonus ataxia syndrome: 'Dancing eyes, dancing feet' — neuroblastoma (children), small cell lung cancer (adults)",
      "Paraneoplastic cerebellar degeneration: antibodies against antigens in Purkinje cells — SCLC (anti-Hu), gynecologic and breast cancers (anti-Yo), Hodgkin lymphoma (anti-Tr)",
      "Lambert-Eaton: antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ — SCLC (facilitation); Myasthenia gravis: antibodies against postsynaptic ACh receptors at NMJ — thymoma (fatigue)",
      "Normal aging: time-dependent progressive decline in organ function → ↑ susceptibility to disease; genetic (telomere shortening), epigenetic (DNA methylation), metabolic (mitochondrial dysfunction) alterations",
      "Aging — Cardiovascular: ↓ arterial compliance, ↑ aortic diameter, ↓ LV cavity size + sigmoid-shaped septum, ↑ LA size, aortic and mitral valve calcification, ↓ maximum heart rate",
      "Aging — Immune: thymic involution → ↓ naïve T cells (indirectly ↓ naïve B cells), memory B and T cells preserved → diminished response to novel antigens (pathogens, vaccines)",
      "Aging — Respiratory: ↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance, ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC unchanged); ↑ A-a gradient; blunted hypoxia/hypercapnia response",
      "Aging — Skin: flattened dermal-epidermal junction, ↓ collagen, ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis); INTRINSIC = ↓ fibroblast biosynthetic capacity; EXTRINSIC = UVA collagen/elastin degradation → solar elastosis",
      "Lipofuscin: yellow-brown 'wear and tear' pigment of normal aging — polymers of lipids and phospholipids complexed with protein, from lipid peroxidation of subcellular membranes; deposits in heart, colon, liver, kidney, eye",
    ],
    m3: [
      "THE FIVE-HORMONE HIJACK — PTHrP (squamous), calcitriol (lymphoma), ACTH (SCLC), ADH (SCLC), EPO (pheo/RCC/HCC/hemangioblastoma/leiomyoma)",
      "PRESYNAPTIC CALCIUM, POSTSYNAPTIC RECEPTOR — LEMS facilitates (SCLC); MG fatigues (thymoma)",
      "THYMOMA TAKES THREE — pure red cell aplasia, Good syndrome, myasthenia gravis",
      "THREE CLOCKS, ELEVEN SYSTEMS — telomere shortening, DNA methylation, mitochondrial dysfunction; the system-decline table with function preserved",
      "The source's own: 'Paraneoplastic rise to High hematocrit levels' (P-r-H-h-l = Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma) and 'Dancing eyes, dancing feet' (opsoclonus-myoclonus)",
    ],
    m10: [
      "SCLC owns six rows: Cushing (↑ ACTH), SIADH (↑ ADH), LEMS, encephalomyelitis (anti-Hu), cerebellar degeneration (anti-Hu), and adult opsoclonus — the neuroendocrine tumor that secretes and expresses everything",
      "The anti-Purkinje antibody map: anti-Hu = SCLC, anti-Yo = gynecologic and breast cancers, anti-Tr = Hodgkin lymphoma",
      "The cutaneous set: acanthosis nigricans (gastric), Leser-Trélat (GI adenocarcinomas), dermatomyositis (adenocarcinomas especially ovarian), hypertrophic osteoarthropathy (lung adenocarcinoma)",
      "The aging exceptions that RISE: aortic diameter, bone marrow fat, lung compliance, RV, A-a gradient, vaginal pH — everything else in the table declines (with memory B/T cells and neurologic function preserved, and TLC unchanged)",
      "Lipofuscin (yellow-brown wear-and-tear pigment, lipid-peroxidation polymers + protein) vs the aging table's functional declines — the pigment is the histologic receipt; photograph A beside the Lipofuscin block (described in text, copyrighted)",
    ],
  },
  recall: [
    {
      q: "The paraneoplastic syndromes table verbatim — part 1: the Musculoskeletal-and-cutaneous band and the Endocrine band (including both hypercalcemia mechanisms).",
      a: "Dermatomyositis — Progressive proximal muscle weakness, Gottron papules, heliotrope rash — Adenocarcinomas, especially ovarian. Acanthosis nigricans — Hyperpigmented velvety plaques in axilla and neck — Gastric adenocarcinoma and other visceral malignancies. Sign of Leser-Trélat — Sudden onset of multiple seborrheic keratoses — GI adenocarcinomas and other visceral malignancies. Hypertrophic osteoarthropathy — Abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones — Adenocarcinoma of the lung. Hypercalcemia — PTHrP — Squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas. Hypercalcemia — ↑ 1,25-(OH)2 vitamin D3 (calcitriol) — Lymphoma. Cushing syndrome — ↑ ACTH — Small cell lung cancer. Hyponatremia (SIADH) — ↑ ADH — Small cell lung cancer.",
    },
    {
      q: "The paraneoplastic syndromes table verbatim — part 2: the Hematologic band (with the source's own polycythemia mnemonic).",
      a: "Polycythemia — ↑ Erythropoietin (the source's printed mnemonic: “Paraneoplastic rise to High hematocrit levels”) — Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma. Pure red cell aplasia — Anemia with low reticulocytes — Thymoma. Good syndrome — Hypogammaglobulinemia — Thymoma. Trousseau syndrome — Migratory superficial thrombophlebitis — Adenocarcinomas, especially pancreatic. Nonbacterial thrombotic endocarditis — Deposition of sterile platelet thrombi on heart valves — Adenocarcinomas, especially pancreatic.",
    },
    {
      q: "The paraneoplastic syndromes table verbatim — part 3: the Neuromuscular band.",
      a: "Anti-NMDA receptor encephalitis — Psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction — Ovarian teratoma. Opsoclonus-myoclonus ataxia syndrome — “Dancing eyes, dancing feet” — Neuroblastoma (children), small cell lung cancer (adults). Paraneoplastic cerebellar degeneration — Antibodies against antigens in Purkinje cells — Small cell lung cancer (anti-Hu), gynecologic and breast cancers (anti-Yo), and Hodgkin lymphoma (anti-Tr). Paraneoplastic encephalomyelitis — Anti-Hu in neurons — Small cell lung cancer. Lambert-Eaton myasthenic syndrome — Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ — Small cell lung cancer. Myasthenia gravis — Antibodies against postsynaptic ACh receptors at NMJ — Thymoma.",
    },
    {
      q: "The normal-aging definition verbatim — with the three alteration families.",
      a: "Time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease. Associated with genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations.",
    },
    {
      q: "The aging table verbatim — the Cardiovascular, Immune, Respiratory, and Skin rows (the four highest-yield rows, including the intrinsic/extrinsic skin fork).",
      a: "Cardiovascular: ↓ arterial compliance (↑ stiffness), ↑ aortic diameter, ↓ left ventricular cavity size and sigmoid-shaped interventricular septum (due to myocardial hypertrophy), ↑ left atrial cavity size, aortic and mitral valve calcification, ↓ maximum heart rate. Immune: Predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved. Net effect = diminished response to novel antigens (eg, pathogens, vaccines). Respiratory: ↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance (↑ stiffness), ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC is unchanged); ↑ A-a gradient, ↑ V/Q mismatch. Ventilatory response to hypoxia/hypercapnia is blunted. Less vigorous cough, slower mucociliary clearance. Skin: Atrophy with flattening of dermal-epidermal junction; ↓ dermal collagen and ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis). Intrinsic aging (chronological aging)—↓ biosynthetic capacity of dermal fibroblasts. Extrinsic aging (photoaging)—degradation of dermal collagen and elastin from sun exposure (UVA); degradation products accumulate in dermis (solar elastosis).",
    },
    {
      q: "The Lipofuscin block verbatim — and the lettered photograph it carries.",
      a: "A yellow-brown, “wear and tear” pigment A associated with normal aging. Composed of polymers of lipids and phospholipids complexed with protein. May be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes. Autopsy of older adult will reveal deposits in heart, colon, liver, kidney, eye, and other organs. [Photograph A — the lettered micrograph beside the block, described in text per the M32 convention: a histology micrograph on a pale pink/lavender tissue background showing scattered yellow-brown granular pigment deposits within cells, two black arrows pointing to the dark-brown granule clusters, the letter A in a small dark box at the image's top-left corner, ~1.9 x 1.4 in directly below the bold Lipofuscin label. COPYRIGHTED — never reproduced.]",
    },
  ],
  related: [
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The molecular layer beneath this table: the gain-of-function and Knudson two-hit genetics that build the tumors which then secrete (SCLC's ACTH/ADH) or express antigens (teratoma's NMDA receptor) — the gene table names the primaries, the paraneoplastic table names their remote effects.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note: "The other way tumors act at a distance: metastasis is the anatomic spread (bone, liver, lung, brain rankings and routes) while the paraneoplastic syndromes are the humoral and autoimmune spread — a cancer's local, metastatic, and paraneoplastic effects are the three exam layers.",
    },
    {
      title: "Granulomatous Inflammation & Scar Types",
      topicId: "granulomatous-inflammation",
      note: "The other hypercalcemia mechanism lives here: activated macrophages carry 1α-hydroxylase → ↑ vitamin D activity in sarcoid granulomas, paralleling the lymphoma's calcitriol row — three roads to tumor/granuloma-mediated hypercalcemia (PTHrP, calcitriol, 1α-hydroxylase) that the exam loves to cross-compare.",
    },
    {
      title: "Autoantibodies & Immune Injury",
      topicId: "autoantibodies",
      note: "The neuromuscular band is an autoantibody map: anti-NMDA receptor (teratoma), anti-Hu/anti-Yo/anti-Tr (the cerebellar trio), P/Q-type Ca2+ channels (LEMS), and ACh receptors (MG) — the presynaptic-vs-postsynaptic NMJ discrimination is completed on that page.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology (hypercalcemia and hyponatremia differentials)",
      connection:
        "The Endocrine band completes the malignancy hypercalcemia differential — PTHrP (squamous family) and calcitriol (lymphoma) against primary hyperparathyroidism (unsuppressed PTH) and the granulomatous 1α-hydroxylase route — and SIADH's euvolemic hypo-osmolar pattern (inappropriately concentrated urine, normal potassium) must be separated from adrenal insufficiency's hypovolemic hyponatremia with hyperkalemia.",
    },
    {
      subject: "Neurology (the paraneoplastic neurologic syndromes)",
      connection:
        "The Neuromuscular band is a neurology consultation set: anti-NMDA receptor encephalitis (psychiatric disturbance, seizures, dyskinesias in a young woman with an ovarian teratoma), opsoclonus-myoclonus ('Dancing eyes, dancing feet' — neuroblastoma in children, SCLC in adults), cerebellar degeneration's anti-Hu/anti-Yo/anti-Tr antibody map, and the LEMS-vs-MG presynaptic/postsynaptic fork read through facilitation versus fatigue.",
    },
    {
      subject: "Immunology (thymic function and the thymoma trio)",
      connection:
        "The thymoma rows and the aging immune row meet at the thymus: the involuting thymus of normal aging starves naïve T-cell production while memory cells survive, whereas the thymoma disrupts tolerance and education three ways — pure red cell aplasia, Good syndrome's hypogammaglobulinemia, and myasthenia gravis's anti-ACh-receptor autoimmunity.",
    },
    {
      subject: "Geriatrics and physiology (aging versus disease)",
      connection:
        "The aging table is the geriatrics lens: every system row (↓ GFR with ↓ nephrons, ↓ maximum heart rate, ↑ lung compliance with unchanged TLC, presbyopia and presbycusis, sarcopenia and osteopenia, the menopausal estrogen fall from follicle exhaustion) defines the baseline against which disease is judged — with lipofuscin as the wear-and-tear histologic marker and the intrinsic-versus-extrinsic skin fork separating the clock from the sun.",
    },
  ],
};
