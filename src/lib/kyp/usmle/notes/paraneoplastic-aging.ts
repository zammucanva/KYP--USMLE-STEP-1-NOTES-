import type { KypUsMLENote } from "../types";

// Pathology — Neoplasia + Aging banner (P-batch 19, the FINAL Pathology
// topic — chapter complete at 19/19). Source: pdf 246–248 / book 224–226
// (Paraneoplastic syndromes [book 224] + Normal aging [book 225] +
// NOTES [book 226]). Census (pdfimages + VLM): ONE copyrighted
// photograph on pdf 247 (book 225) — image 0, 175x126 cmyk jpeg at 150
// dpi, the Lipofuscin "wear and tear" pigment photograph lettered A
// beside the "Lipofuscin A" text — described in text, never reproduced
// (the M32 convention). The pages are otherwise pure text — the
// paraneoplastic syndromes table (4 categories, 16 entries) on book
// 224, the normal aging organ-system changes (11 systems) + Lipofuscin
// on book 225, and a mostly-blank NOTES page on book 226. The visual
// is an ORIGINAL KYP adaptation rendering the paraneoplastic table and
// the aging organ-system grid as panel maps (no source figure to
// redraw). The tables are carried verbatim in this note's table
// blocks. No margin mnemonics (VLM confirmed); the KYP memory layer
// stays original.

export const paraneoplasticAging: KypUsMLENote = {
  id: "paraneoplastic-aging",
  title: "Paraneoplastic Syndromes & Aging",
  subtitle:
    "The 4-category 16-entry paraneoplastic syndromes table (book 224) and the 11-system normal-aging organ-system grid + Lipofuscin (book 225) — the final Pathology topic (19/19, chapter complete): MUSCULOSKELETAL AND CUTANEOUS (Dermatomyositis → ovarian adenocarcinoma, Acanthosis nigricans → gastric adenocarcinoma, Sign of Leser-Trélat → GI adenocarcinomas, Hypertrophic osteoarthropathy → lung adenocarcinoma); ENDOCRINE (Hypercalcemia via PTHrP → SCa2+mous cell lung/head/neck + renal/bladder/breast/ovarian, Hypercalcemia via calcitriol → lymphoma, Cushing syndrome via ACTH → SCLC, Hyponatremia via SIADH/ADH → SCLC); HEMATOLOGIC (Polycythemia via EPO → pheochromocytoma/RCC/HCC/hemangioblastoma/leiomyoma, Pure red cell aplasia → thymoma, Good syndrome hypogammaglobulinemia → thymoma, Trousseau syndrome migratory thrombophlebitis → adenocarcinomas/pancreatic, Nonbacterial thrombotic endocarditis → pancreatic); NEUROMUSCULAR (Anti-NMDA receptor encephalitis → ovarian teratoma, Opsoclonus-myoclonus 'dancing eyes dancing feet' → neuroblastoma/SCLC, Paraneoplastic cerebellar degeneration anti-Hu/anti-Yo/anti-Tr → SCLC/gynecologic-breast/Hodgkin, Paraneoplastic encephalomyelitis anti-Hu → SCLC, Lambert-Eaton presynaptic Ca2+ channels → SCLC, Myasthenia gravis postsynaptic ACh receptors → thymoma). Then 11 aging organ systems (cardiovascular ↓ arterial compliance, GI ↓ LES tone, hematopoietic ↓ bone marrow mass, immune thymic involution → ↓ naïve T cells, musculoskeletal sarcopenia + osteopenia, nervous ↓ brain volume, special senses presbyopia/presbycusis, skin atrophy + wrinkles + solar elastosis, renal ↓ GFR, reproductive testicular atrophy + menopause, respiratory ↑ lung compliance + ↓ FEV1) + Lipofuscin (yellow-brown 'wear and tear' pigment A, lipid peroxidation product, deposits in heart/colon/liver/kidney/eye).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia + Aging",
  pilotCategory:
    "The paraneoplastic + aging page's complete architecture — the 4-category 16-entry paraneoplastic syndromes table (musculoskeletal/cutaneous [4: dermatomyositis, acanthosis nigricans, Sign of Leser-Trélat, hypertrophic osteoarthropathy], endocrine [4: PTHrP-hypercalcemia, calcitriol-hypercalcemia, ACTH-Cushing, ADH-SIADH], hematologic [5: polycythemia, pure red cell aplasia, Good syndrome, Trousseau syndrome, nonbacterial thrombotic endocarditis], neuromuscular [6: anti-NMDA, opsoclonus-myoclonus, cerebellar degeneration, encephalomyelitis, Lambert-Eaton, myasthenia gravis]); the 11 aging organ systems (cardiovascular, GI, hematopoietic, immune, musculoskeletal, nervous, special senses, skin, renal, reproductive, respiratory); and the Lipofuscin 'wear and tear' pigment (yellow-brown, lipid peroxidation, deposits in heart/colon/liver/kidney/eye). The SCLC axis (5 paraneoplastic syndromes) and the thymoma axis (3 paraneoplastic syndromes) are the two highest-yield tumor associations.",
  difficulty: 2,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 224–226 (Pathology — Neoplasia + Aging: Paraneoplastic syndromes table [4 categories, 16 entries] on book 224; Normal aging definition + 11 organ-system changes + Lipofuscin 'wear and tear' pigment A on book 225; mostly-blank NOTES page on book 226)",
  tags: [
    "paraneoplastic syndromes",
    "cancer-associated syndromes",
    "dermatomyositis",
    "Gottron papules",
    "heliotrope rash",
    "ovarian adenocarcinoma",
    "acanthosis nigricans",
    "gastric adenocarcinoma",
    "Sign of Leser-Trélat",
    "seborrheic keratoses",
    "GI adenocarcinomas",
    "hypertrophic osteoarthropathy",
    "clubbing",
    "periostosis",
    "lung adenocarcinoma",
    "hypercalcemia",
    "PTHrP",
    "squamous cell carcinoma",
    "calcitriol",
    "1,25-(OH)2 vitamin D3",
    "lymphoma",
    "Cushing syndrome",
    "ACTH",
    "small cell lung cancer",
    "SCLC",
    "hyponatremia",
    "SIADH",
    "ADH",
    "polycythemia",
    "erythropoietin",
    "EPO",
    "pheochromocytoma",
    "renal cell carcinoma",
    "HCC",
    "hemangioblastoma",
    "leiomyoma",
    "pure red cell aplasia",
    "thymoma",
    "Good syndrome",
    "hypogammaglobulinemia",
    "Trousseau syndrome",
    "migratory thrombophlebitis",
    "pancreatic adenocarcinoma",
    "nonbacterial thrombotic endocarditis",
    "NBTE",
    "marantic endocarditis",
    "sterile platelet thrombi",
    "anti-NMDA receptor encephalitis",
    "ovarian teratoma",
    "opsoclonus-myoclonus ataxia syndrome",
    "dancing eyes dancing feet",
    "neuroblastoma",
    "paraneoplastic cerebellar degeneration",
    "Purkinje cells",
    "anti-Hu",
    "anti-Yo",
    "anti-Tr",
    "Hodgkin lymphoma",
    "paraneoplastic encephalomyelitis",
    "Lambert-Eaton myasthenic syndrome",
    "LEMS",
    "presynaptic Ca2+ channels",
    "P/Q-type",
    "myasthenia gravis",
    "postsynaptic ACh receptors",
    "normal aging",
    "telomere shortening",
    "DNA methylation",
    "mitochondrial dysfunction",
    "cardiovascular aging",
    "arterial compliance",
    "aortic valve calcification",
    "mitral valve calcification",
    "gastrointestinal aging",
    "LES tone",
    "colonic motility",
    "hematopoietic aging",
    "bone marrow mass",
    "immune aging",
    "thymic involution",
    "naïve T cells",
    "memory B cells",
    "musculoskeletal aging",
    "sarcopenia",
    "osteopenia",
    "nervous system aging",
    "brain volume",
    "special senses aging",
    "presbyopia",
    "presbycusis",
    "skin aging",
    "intrinsic aging",
    "extrinsic aging",
    "photoaging",
    "solar elastosis",
    "senile purpura",
    "xerosis cutis",
    "renal aging",
    "GFR",
    "reproductive aging",
    "testicular atrophy",
    "prostate enlargement",
    "menopause",
    "vulvovaginal atrophy",
    "respiratory aging",
    "lung compliance",
    "elastic recoil",
    "FEV1",
    "FVC",
    "residual volume",
    "A-a gradient",
    "V/Q mismatch",
    "Lipofuscin",
    "wear and tear pigment",
    "lipid peroxidation",
    "polyunsaturated lipids",
  ],
  core: {
    what:
      "The PARANEOPLASTIC SYNDROMES table (book 224) — 4 categories, 16 entries. MUSCULOSKELETAL AND CUTANEOUS (4): Dermatomyositis (progressive proximal muscle weakness, Gottron papules, heliotrope rash → adenocarcinomas, especially ovarian); Acanthosis nigricans (hyperpigmented velvety plaques in axilla and neck → gastric adenocarcinoma and other visceral malignancies); Sign of Leser-Trélat (sudden onset of multiple seborrheic keratoses → GI adenocarcinomas and other visceral malignancies); Hypertrophic osteoarthropathy (abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones → adenocarcinoma of the lung). ENDOCRINE (4): Hypercalcemia via PTHrP → SCa2+mous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas; Hypercalcemia via ↑ 1,25-(OH)2 vitamin D3 (calcitriol) → lymphoma; Cushing syndrome via ↑ ACTH → small cell lung cancer; Hyponatremia (SIADH) via ↑ ADH → small cell lung cancer. HEMATOLOGIC (5): Polycythemia via ↑ erythropoietin (paraneoplastic rise to high hematocrit levels) → pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma; Pure red cell aplasia (anemia with low reticulocytes) → thymoma; Good syndrome (hypogammaglobulinemia) → thymoma; Trousseau syndrome (migratory superficial thrombophlebitis) → adenocarcinomas, especially pancreatic; Nonbacterial thrombotic endocarditis (deposition of sterile platelet thrombi on heart valves) → adenocarcinomas, especially pancreatic. NEUROMUSCULAR (6): Anti-NMDA receptor encephalitis (psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction) → ovarian teratoma; Opsoclonus-myoclonus ataxia syndrome ('dancing eyes, dancing feet') → neuroblastoma (children), small cell lung cancer (adults); Paraneoplastic cerebellar degeneration (antibodies against antigens in Purkinje cells) → small cell lung cancer (anti-Hu), gynecologic and breast cancers (anti-Yo), and Hodgkin lymphoma (anti-Tr); Paraneoplastic encephalomyelitis (anti-Hu in neurons) → small cell lung cancer; Lambert-Eaton myasthenic syndrome (antibodies against presynaptic [P/Q-type] Ca2+ channels at NMJ) → small cell lung cancer; Myasthenia gravis (antibodies against postsynaptic ACh receptors at NMJ) → thymoma. Then the NORMAL AGING organ-system changes (book 225) — definition: time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease, associated with genetic (telomere shortening), epigenetic (DNA methylation), and metabolic (mitochondrial dysfunction) alterations — across 11 organ systems: cardiovascular, GI, hematopoietic, immune, musculoskeletal, nervous, special senses, skin, renal, reproductive, respiratory. And LIPOFUSCIN — the yellow-brown 'wear and tear' pigment A associated with normal aging, composed of polymers of lipids and phospholipids complexed with protein, derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes, deposited in heart, colon, liver, kidney, eye, and other organs.",
    why:
      "This is the closing page of the Pathology chapter — the paraneoplastic syndromes (book 224) are the systemic manifestations of cancer NOT caused by direct tumor invasion or metastasis, mediated by tumor-secreted hormones (PTHrP, ACTH, ADH, EPO, calcitriol), antibodies (anti-NMDA, anti-Hu, anti-Yo, anti-Tr, anti-P/Q-type Ca2+ channel, anti-ACh receptor), or cytokines; the normal aging changes (book 225) are the time-dependent decline in organ function whose mechanisms overlap with cancer biology (telomere shortening, DNA methylation, mitochondrial dysfunction — the same processes that drive carcinogenesis also drive senescence). The two halves are linked by the shared theme of 'systemic consequences of cellular processes' — the tumor's products cause distant symptoms, and the cell's accumulated damage causes organ decline. The SCLC axis dominates the paraneoplastic table (5 entries: Cushing, SIADH, cerebellar degeneration, encephalomyelitis, Lambert-Eaton) because small cell lung cancer is a neuroendocrine tumor that retains hormone-secretion capacity; the thymoma axis is second (3 entries: pure red cell aplasia, Good syndrome, myasthenia gravis) because the thymus is the central lymphoid organ for T-cell tolerance. The two thymoma-associated antibody syndromes (LEMS presynaptic vs MG postsynaptic) are the classic NMJ pair. The two pancreatic-adenocarcinoma hematologic syndromes (Trousseau + NBTE) are the hypercoagulability pair. And the two cutaneous sign syndromes (acanthosis nigricans + Sign of Leser-Trélat) are the visceral-malignancy sign pair — both signal gastric or other GI adenocarcinomas through hyperpigmented/keratotic skin lesions.",
    keyIdea:
      "Read the paraneoplastic table through three axes. TUMOR AXIS — SCLC is the most common paraneoplastic tumor (5 syndromes: Cushing via ACTH, SIADH via ADH, cerebellar degeneration via anti-Hu, encephalomyelitis via anti-Hu, Lambert-Eaton via anti-P/Q-type Ca2+ channels); thymoma is second (3 syndromes: pure red cell aplasia, Good syndrome hypogammaglobulinemia, myasthenia gravis via anti-ACh receptor); renal cell carcinoma + hemangioblastoma + pheochromocytoma + HCC + leiomyoma cause polycythemia via EPO; ovarian adenocarcinoma causes dermatomyositis; ovarian teratoma causes anti-NMDA encephalitis; pancreatic adenocarcinoma causes Trousseau + NBTE; neuroblastoma causes opsoclonus-myoclonus in children. MEDIATOR AXIS — hormones (PTHrP, ACTH, ADH, EPO, calcitriol), antibodies (anti-NMDA, anti-Hu, anti-Yo, anti-Tr, anti-P/Q-type Ca2+ channel, anti-ACh receptor), and cytokines (the hypercoagulability drivers of Trousseau + NBTE). CATEGORY AXIS — musculoskeletal/cutaneous (4), endocrine (4), hematologic (5), neuromuscular (6). Then read the aging organ-system grid through the thymic involution rule (immune aging: thymic involution → ↓ naïve T cells, memory B/T preserved, ↓ response to novel antigens/vaccines) and the lung compliance rule (respiratory aging: ↑ lung compliance + ↓ chest wall compliance + ↓ FEV1/↓ FVC/↑ RV with TLC unchanged + ↑ A-a gradient + ↓ ventilatory response to hypoxia/hypercapnia). Lipofuscin closes the page as the 'wear and tear' marker — the yellow-brown lipid-peroxidation pigment deposited in heart, colon, liver, kidney, eye.",
  },
  mechanisms: [
    {
      id: "paraneoplastic-axis",
      title: "The paraneoplastic axis: tumor-secreted mediators and distant symptoms",
      context: "The paraneoplastic syndromes table (book 224) — 4 categories, 16 entries",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A systemic symptom in a cancer patient — is it paraneoplastic?",
            sublabel:
              "Input — the paraneoplastic syndromes are manifestations NOT caused by direct tumor invasion or metastasis but by tumor-secreted mediators (hormones, antibodies, cytokines). The first discriminator is the mediator type: hormone (PTHrP, ACTH, ADH, EPO, calcitriol), antibody (anti-NMDA, anti-Hu, anti-Yo, anti-Tr, anti-P/Q-type Ca2+ channel, anti-ACh receptor), or cytokine (hypercoagulability).",
            variant: "input",
          },
          {
            id: "sclc",
            label: "SCLC axis — 5 syndromes (Cushing, SIADH, cerebellar degeneration, encephalomyelitis, Lambert-Eaton)",
            sublabel:
              "Small cell lung cancer is the most common paraneoplastic tumor. Cushing syndrome via ↑ ACTH; SIADH via ↑ ADH; paraneoplastic cerebellar degeneration via anti-Hu; paraneoplastic encephalomyelitis via anti-Hu; Lambert-Eaton myasthenic syndrome via antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ. SCLC is a neuroendocrine tumor that retains hormone- and antibody-producing capacity.",
            variant: "target",
          },
          {
            id: "thymoma",
            label: "Thymoma axis — 3 syndromes (pure red cell aplasia, Good syndrome, myasthenia gravis)",
            sublabel:
              "Thymoma is the second most common paraneoplastic tumor. Pure red cell aplasia (anemia with low reticulocytes); Good syndrome (hypogammaglobulinemia); myasthenia gravis (antibodies against postsynaptic ACh receptors at NMJ). The thymus is the central lymphoid organ for T-cell tolerance — thymoma disrupts T-cell selection and B-cell help, producing both autoimmune (MG) and cytopenic (PRCA, Good) syndromes.",
            variant: "target",
          },
          {
            id: "hormone",
            label: "Hormone axis — PTHrP (hypercalcemia, SCC), ACTH (Cushing, SCLC), ADH (SIADH, SCLC), EPO (polycythemia, RCC/hemangioblastoma), calcitriol (hypercalcemia, lymphoma)",
            sublabel:
              "Endocrine paraneoplastic syndromes are mediated by tumor-secreted hormones. PTHrP → hypercalcemia in SCa2+mous cell carcinomas of lung, head, and neck + renal, bladder, breast, ovarian. Calcitriol (1,25-(OH)2 vitamin D3) → hypercalcemia in lymphoma. ACTH → Cushing in SCLC. ADH → SIADH in SCLC. EPO → polycythemia in pheochromocytoma, RCC, HCC, hemangioblastoma, leiomyoma.",
            variant: "process",
          },
          {
            id: "antibody",
            label: "Antibody axis — anti-NMDA (ovarian teratoma), anti-Hu/anti-Yo/anti-Tr (cerebellar degeneration), anti-P/Q-type Ca2+ (LEMS, SCLC), anti-AChR (MG, thymoma)",
            sublabel:
              "Neuromuscular paraneoplastic syndromes are mediated by antibodies against neural antigens. Anti-NMDA receptor → encephalitis (ovarian teratoma). Anti-Hu → cerebellar degeneration + encephalomyelitis (SCLC). Anti-Yo → cerebellar degeneration (gynecologic, breast). Anti-Tr → cerebellar degeneration (Hodgkin lymphoma). Anti-P/Q-type presynaptic Ca2+ channel → Lambert-Eaton (SCLC). Anti-ACh receptor (postsynaptic) → myasthenia gravis (thymoma).",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the syndrome, name the mediator, name the tumor",
            sublabel:
              "Output — the paraneoplastic table resolves any systemic-symptom-in-a-cancer-patient question through the syndrome → mediator → tumor chain. The SCLC axis (5 syndromes) and the thymoma axis (3 syndromes) are the highest-yield tumor associations. The LEMS-vs-MG NMJ pair (presynaptic vs postsynaptic) and the Trousseau-vs-NBTE hypercoagulability pair (both pancreatic) are the highest-yield discriminators.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "sclc", label: "SCLC: 5 syndromes" },
          { from: "input", to: "thymoma", label: "thymoma: 3 syndromes" },
          { from: "input", to: "hormone", label: "hormone mediators" },
          { from: "input", to: "antibody", label: "antibody mediators" },
          { from: "sclc", to: "output", label: "ACTH/ADH/anti-Hu/anti-Ca2+" },
          { from: "thymoma", to: "output", label: "PRCA/Good/MG" },
          { from: "hormone", to: "output", label: "PTHrP/ACTH/ADH/EPO/calcitriol" },
          { from: "antibody", to: "output", label: "anti-NMDA/anti-Hu/anti-Yo/anti-Tr/anti-Ca2+/anti-AChR" },
        ],
      },
    },
    {
      id: "aging-system-axis",
      title: "The aging-system axis: 11 organ systems + Lipofuscin 'wear and tear' pigment",
      context: "The normal aging organ-system changes (book 225) — definition + 11 systems + Lipofuscin",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Normal aging — time-dependent decline in organ function",
            sublabel:
              "Input — definition: time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease. Associated with genetic (telomere shortening), epigenetic (DNA methylation), and metabolic (mitochondrial dysfunction) alterations. The 11 organ systems each show characteristic aging changes; Lipofuscin is the 'wear and tear' pigment marker.",
            variant: "input",
          },
          {
            id: "immune",
            label: "Immune aging — thymic involution → ↓ naïve T cells (and indirectly naïve B cells); memory B and T preserved",
            sublabel:
              "The predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved. Net effect = diminished response to novel antigens (eg, pathogens, vaccines). This is why older adults have weaker vaccine responses and more severe infections.",
            variant: "process",
          },
          {
            id: "cardio",
            label: "Cardiovascular + respiratory — ↓ arterial compliance (↑ stiffness), ↓ LV cavity, ↑ LA, valve calcification; lung: ↑ compliance (↓ elastic recoil), ↓ FEV1/FVC, ↑ RV, ↑ A-a gradient",
            sublabel:
              "Cardiovascular: ↓ arterial compliance (↑ stiffness), ↑ aortic diameter, ↓ LV cavity size + sigmoid-shaped interventricular septum (myocardial hypertrophy), ↑ LA cavity size, aortic and mitral valve calcification, ↓ maximum heart rate. Respiratory: ↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance (↑ stiffness), ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC unchanged); ↑ A-a gradient, ↑ V/Q mismatch; blunted ventilatory response to hypoxia/hypercapnia.",
            variant: "process",
          },
          {
            id: "msk",
            label: "Musculoskeletal + skin — sarcopenia + osteopenia + joint cartilage thinning; skin atrophy + wrinkles + solar elastosis",
            sublabel:
              "Musculoskeletal: ↓ skeletal muscle mass (sarcopenia), ↓ bone mass (osteopenia), joint cartilage thinning. Skin: atrophy with flattening of dermal-epidermal junction; ↓ dermal collagen and ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis). Intrinsic aging = ↓ dermal fibroblast biosynthesis. Extrinsic aging (photoaging) = UVA-driven collagen/elastin degradation → solar elastosis.",
            variant: "process",
          },
          {
            id: "repro",
            label: "Reproductive + special senses — testicular atrophy + prostate enlargement + menopause (↓ estrogen); presbyopia + presbycusis + ↓ smell/taste",
            sublabel:
              "Reproductive (males): testicular atrophy (↓ spermatogenesis), prostate enlargement, slower erection/ejaculation, longer refractory period. Reproductive (females): vulvovaginal atrophy; vaginal shortening, thinning, dryness, ↑ pH; due to ↓ estrogen from exhaustion of ovarian follicles (menopause). Special senses: impaired accommodation (presbyopia), ↓ hearing (presbycusis), ↓ smell and taste.",
            variant: "process",
          },
          {
            id: "lipofuscin",
            label: "Lipofuscin — the yellow-brown 'wear and tear' pigment A (lipid peroxidation product, deposited in heart/colon/liver/kidney/eye)",
            sublabel:
              "Lipofuscin is the yellow-brown 'wear and tear' pigment A associated with normal aging. Composed of polymers of lipids and phospholipids complexed with protein. May be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes. Autopsy of older adults reveals deposits in heart, colon, liver, kidney, eye, and other organs. The copyrighted photograph (book 225, lettered A) is described in text, never reproduced.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "immune", label: "thymic involution" },
          { from: "input", to: "cardio", label: "cardiopulmonary" },
          { from: "input", to: "msk", label: "musculoskeletal + skin" },
          { from: "input", to: "repro", label: "reproductive + senses" },
          { from: "input", to: "lipofuscin", label: "wear-and-tear marker" },
          { from: "immune", to: "lipofuscin", label: "↓ novel-antigen response + pigment deposits" },
          { from: "cardio", to: "lipofuscin", label: "stiffness + atrophy + deposits" },
          { from: "msk", to: "lipofuscin", label: "sarcopenia + wrinkles + deposits" },
          { from: "repro", to: "lipofuscin", label: "menopause + presbycusis + deposits" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "paraneoplastic-aging-map",
      title: "The paraneoplastic + aging map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source pages (book 224–226): two panel grids — the paraneoplastic syndromes grid (4 categories × 16 entries: musculoskeletal/cutaneous [dermatomyositis → ovarian, acanthosis nigricans → gastric, Sign of Leser-Trélat → GI, hypertrophic osteoarthropathy → lung], endocrine [PTHrP-hypercalcemia → SCC, calcitriol-hypercalcemia → lymphoma, ACTH-Cushing → SCLC, ADH-SIADH → SCLC], hematologic [EPO-polycythemia → pheochromocytoma/RCC/HCC/hemangioblastoma/leiomyoma, pure red cell aplasia → thymoma, Good syndrome → thymoma, Trousseau → pancreatic, NBTE → pancreatic], neuromuscular [anti-NMDA → ovarian teratoma, opsoclonus-myoclonus → neuroblastoma/SCLC, cerebellar degeneration anti-Hu/anti-Yo/anti-Tr → SCLC/gynecologic-breast/Hodgkin, encephalomyelitis anti-Hu → SCLC, Lambert-Eaton presynaptic → SCLC, myasthenia gravis postsynaptic → thymoma]) and the 11-system aging organ-system grid (cardiovascular, GI, hematopoietic, immune, musculoskeletal, nervous, special senses, skin, renal, reproductive, respiratory) + Lipofuscin panel. SCLC is highlighted as the most common paraneoplastic tumor (5 syndromes); thymoma is highlighted as the second (3 syndromes). The Lipofuscin panel describes (never reproduces) the copyrighted photograph A from book 225.",
      notice:
        "Census (pdfimages + VLM): ONE copyrighted photograph on pdf 247 (book 225) — image 0, 175x126 cmyk jpeg at 150 dpi, the Lipofuscin 'wear and tear' pigment photograph lettered A beside the 'Lipofuscin A' text — described in text, never reproduced (the M32 convention). The pages are pure text otherwise — the paraneoplastic syndromes table (4 categories, 16 entries) on book 224, the normal aging organ-system changes (10 systems) + Lipofuscin on book 225, and a mostly-blank NOTES page on book 226. The visual is an ORIGINAL KYP adaptation rendering the paraneoplastic table and the aging organ-system grid as panel maps (no source figure to redraw). The tables are carried verbatim in this note's table blocks. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 224 — paraneoplastic syndromes (carried verbatim, 4 categories × 16 entries)",
      intro:
        "The MANIFESTATION | DESCRIPTION/MECHANISM | MOST COMMONLY ASSOCIATED TUMOR(S) table as printed. 4 categories: musculoskeletal and cutaneous (4), endocrine (4), hematologic (5), neuromuscular (6).",
      columns: ["MANIFESTATION", "DESCRIPTION/MECHANISM", "MOST COMMONLY ASSOCIATED TUMOR(S)"],
      rows: [
        ["— Musculoskeletal and cutaneous —", "", ""],
        ["Dermatomyositis", "Progressive proximal muscle weakness, Gottron papules, heliotrope rash", "Adenocarcinomas, especially ovarian"],
        ["Acanthosis nigricans", "Hyperpigmented velvety plaques in axilla and neck", "Gastric adenocarcinoma and other visceral malignancies"],
        ["Sign of Leser-Trélat", "Sudden onset of multiple seborrheic keratoses", "GI adenocarcinomas and other visceral malignancies"],
        ["Hypertrophic osteoarthropathy", "Abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones", "Adenocarcinoma of the lung"],
        ["— Endocrine —", "", ""],
        ["Hypercalcemia", "PTHrP", "SCa2+mous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas"],
        ["Hypercalcemia", "↑ 1,25-(OH)2 vitamin D3 (calcitriol)", "Lymphoma"],
        ["Cushing syndrome", "↑ ACTH", "Small cell lung cancer"],
        ["Hyponatremia (SIADH)", "↑ ADH", "Small cell lung cancer"],
        ["— Hematologic —", "", ""],
        ["Polycythemia", "↑ Erythropoietin; Paraneoplastic rise to High hematocrit levels", "Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma"],
        ["Pure red cell aplasia", "Anemia with low reticulocytes", "Thymoma"],
        ["Good syndrome", "Hypogammaglobulinemia", "Thymoma"],
        ["Trousseau syndrome", "Migratory superficial thrombophlebitis", "Adenocarcinomas, especially pancreatic (same as NBTE)"],
        ["Nonbacterial thrombotic endocarditis", "Deposition of sterile platelet thrombi on heart valves", "Adenocarcinomas, especially pancreatic"],
        ["— Neuromuscular —", "", ""],
        ["Anti-NMDA receptor encephalitis", "Psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction", "Ovarian teratoma"],
        ["Opsoclonus-myoclonus ataxia syndrome", "\"Dancing eyes, dancing feet\"", "Neuroblastoma (children), small cell lung cancer (adults)"],
        ["Paraneoplastic cerebellar degeneration", "Antibodies against antigens in Purkinje cells", "Small cell lung cancer (anti-Hu), gynecologic and breast cancers (anti-Yo), and Hodgkin lymphoma (anti-Tr)"],
        ["Paraneoplastic encephalomyelitis", "Anti-Hu in neurons", "Small cell lung cancer"],
        ["Lambert-Eaton myasthenic syndrome", "Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ", "Small cell lung cancer"],
        ["Myasthenia gravis", "Antibodies against postsynaptic ACh receptors at NMJ", "Thymoma"],
      ],
      caption:
        "4 categories, 16 entries. SCLC is the most common paraneoplastic tumor (5 syndromes: Cushing via ACTH, SIADH via ADH, cerebellar degeneration via anti-Hu, encephalomyelitis via anti-Hu, Lambert-Eaton via anti-P/Q-type Ca2+ channels). Thymoma is second (3 syndromes: pure red cell aplasia, Good syndrome hypogammaglobulinemia, myasthenia gravis via anti-ACh receptor). The LEMS-vs-MG NMJ pair (presynaptic Ca2+ channels vs postsynaptic ACh receptors) and the Trousseau-vs-NBTE hypercoagulability pair (both pancreatic adenocarcinoma) are the highest-yield discriminators. The two cutaneous sign syndromes (acanthosis nigricans + Sign of Leser-Trélat) both signal visceral malignancy (gastric and GI adenocarcinomas, respectively).",
    },
    {
      kind: "table",
      title: "Book 225 — normal aging organ-system changes (carried verbatim, 11 systems)",
      intro:
        "Definition: time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease. Associated with genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations. The 11 organ systems and their aging changes, as printed.",
      columns: ["ORGAN SYSTEM", "AGING CHANGES (VERBATIM)"],
      rows: [
        ["Cardiovascular", "↓ arterial compliance (↑ stiffness), ↑ aortic diameter, ↓ left ventricular cavity size and sigmoid-shaped interventricular septum (due to myocardial hypertrophy), ↑ left atrial cavity size, aortic and mitral valve calcification, ↓ maximum heart rate"],
        ["Gastrointestinal", "↓ LES tone, ↓ gastric mucosal protection, ↓ colonic motility"],
        ["Hematopoietic", "↓ bone marrow mass, ↑ bone marrow fat; less vigorous response to stressors (eg, blood loss)"],
        ["Immune", "Predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved. Net effect = diminished response to novel antigens (eg, pathogens, vaccines)"],
        ["Musculoskeletal", "↓ skeletal muscle mass (sarcopenia), ↓ bone mass (osteopenia), joint cartilage thinning"],
        ["Nervous", "↓ brain volume (neuronal loss), ↓ cerebral blood flow; function is preserved despite mild cognitive decline"],
        ["Special senses", "Impaired accommodation (presbyopia), ↓ hearing (presbycusis), ↓ smell and taste"],
        ["Skin", "Atrophy with flattening of dermal-epidermal junction; ↓ dermal collagen and ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis). Intrinsic aging (chronological aging) — ↓ biosynthetic capacity of dermal fibroblasts. Extrinsic aging (photoaging) — degradation of dermal collagen and elastin from sun exposure (UVA); degradation products accumulate in dermis (solar elastosis)."],
        ["Renal", "↓ GFR (↓ nephrons), ↓ RBF, ↓ hormonal function. Voiding dysfunction (eg, urinary incontinence)"],
        ["Reproductive", "Males — testicular atrophy (↓ spermatogenesis), prostate enlargement, slower erection/ejaculation, longer refractory period. Less pronounced ↓ in libido as compared to females. Females — vulvovaginal atrophy; vaginal shortening, thinning, dryness, ↑ pH. Due to ↓ estrogen from exhaustion of ovarian follicles (menopause)."],
        ["Respiratory", "↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance (↑ stiffness), ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC is unchanged); ↑ A-a gradient, ↑ V/Q mismatch. Ventilatory response to hypoxia/hypercapnia is blunted. Less vigorous cough, slower mucociliary clearance."],
      ],
      caption:
        "11 organ systems. The thymic involution rule (immune aging: thymic involution → ↓ naïve T cells + indirectly ↓ naïve B cells, memory B/T preserved, ↓ response to novel antigens/vaccines) is the highest-yield immune-aging fact. The lung compliance rule (respiratory aging: ↑ lung compliance + ↓ chest wall compliance + ↓ FEV1/↓ FVC/↑ RV with TLC unchanged + ↑ A-a gradient + ↓ ventilatory response to hypoxia/hypercapnia) is the highest-yield respiratory-aging fact. The skin aging intrinsic-vs-extrinsic pair (intrinsic = ↓ fibroblast biosynthesis; extrinsic = UVA-driven collagen/elastin degradation → solar elastosis) is the highest-yield skin-aging fact. Menopause is due to ↓ estrogen from exhaustion of ovarian follicles.",
    },
    {
      kind: "table",
      title: "Book 225 — Lipofuscin 'wear and tear' pigment A (carried verbatim)",
      intro:
        "Lipofuscin is the yellow-brown 'wear and tear' pigment A associated with normal aging. The copyrighted photograph (book 225, lettered A) is described in text, never reproduced (the M32 convention).",
      columns: ["FEATURE", "DETAIL (VERBATIM)"],
      rows: [
        ["Appearance", "A yellow-brown, \"wear and tear\" pigment A associated with normal aging"],
        ["Composition", "Composed of polymers of lipids and phospholipids complexed with protein"],
        ["Origin (proposed)", "May be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes"],
        ["Deposits at autopsy", "Autopsy of older adult will reveal deposits in heart, colon, liver, kidney, eye, and other organs"],
        ["Photograph A", "Copyrighted cmyk jpeg (175×126 at 150 dpi) on pdf 247 (book 225), lettered A beside the 'Lipofuscin A' text — described in text, never reproduced (the M32 convention)"],
      ],
      caption:
        "Lipofuscin is the yellow-brown 'wear and tear' pigment of normal aging. Composition: polymers of lipids + phospholipids complexed with protein. Proposed origin: lipid peroxidation of polyunsaturated lipids of subcellular membranes. Deposits at autopsy in heart, colon, liver, kidney, eye. The photograph (lettered A) is described in text only — never reproduced.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 60-year-old man with a 40-pack-year smoking history presents with proximal muscle weakness, dry mouth, and absent deep tendon reflexes that STRENGTHEN with repeated muscle contraction; CT shows a central hilar lung mass.",
        discriminator:
          "Lambert-Eaton myasthenic syndrome — antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at NMJ, reflexes strengthen with repeated contraction (the SCLC paraneoplastic signature)",
        concept: "The Lambert-Eaton / SCLC axis (presynaptic Ca2+ channel antibodies)",
        answer:
          "The paraneoplastic table's Lambert-Eaton row: antibodies against presynaptic (P/Q-type) Ca2+ channels at the NMJ → small cell lung cancer. The presynaptic location distinguishes LEMS from myasthenia gravis (which is POSTsynaptic, antibodies against ACh receptors). The clinical signature is reflexes that STRENGTHEN with repeated contraction (vs MG, where repeated use worsens weakness). The 40-pack-year history and central hilar lung mass name SCLC — the most common paraneoplastic tumor overall (5 of 16 syndromes).",
      },
      {
        stem:
          "A 35-year-old woman presents with psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, and language dysfunction; pelvic ultrasound shows a complex ovarian mass.",
        discriminator:
          "Anti-NMDA receptor encephalitis — psychiatric + neurologic symptoms → ovarian teratoma (the classic young-woman paraneoplastic encephalitis)",
        concept: "The anti-NMDA / ovarian teratoma axis",
        answer:
          "The paraneoplastic table's anti-NMDA receptor encephalitis row: psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction → ovarian teratoma. The complex ovarian mass in a young woman with the psychiatric-neurologic symptom cluster is the classic anti-NMDA encephalitis presentation. The antibody targets the NMDA receptor (the glutamate receptor) — distinct from the NMJ antibodies (LEMS presynaptic Ca2+ vs MG postsynaptic AChR) and from the cerebellar antibodies (anti-Hu/anti-Yo/anti-Tr).",
      },
      {
        stem:
          "A 70-year-old man with unintentional weight loss and migratory superficial thrombophlebitis in multiple limbs develops a new mitral murmur; blood cultures are persistently negative.",
        discriminator:
          "Trousseau syndrome + nonbacterial thrombotic endocarditis — the pancreatic-adenocarcinoma hypercoagulability pair",
        concept: "The Trousseau + NBTE / pancreatic adenocarcinoma axis",
        answer:
          "The paraneoplastic table's two pancreatic-adenocarcinoma hematologic syndromes: Trousseau syndrome (migratory superficial thrombophlebitis → adenocarcinomas, especially pancreatic) and nonbacterial thrombotic endocarditis (deposition of sterile platelet thrombi on heart valves → adenocarcinomas, especially pancreatic). The migratory thrombophlebitis and the culture-negative mitral murmur are the two clinical signatures. The weight loss + the hypercoagulability signs name pancreatic adenocarcinoma — the tumor most associated with both Trousseau and NBTE.",
      },
    ],
    traps: [
      {
        a: "Lambert-Eaton myasthenic syndrome (presynaptic)",
        b: "Myasthenia gravis (postsynaptic)",
        whyConfused: "Both are NMJ paraneoplastic syndromes with weakness",
        keyDifference:
          "LEMS = antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at the NMJ → small cell lung cancer; weakness IMPROVES with repeated use (and autonomic symptoms like dry mouth are prominent). MG = antibodies against POSTSYNAPTIC ACh receptors at the NMJ → thymoma; weakness WORSENS with repeated use (and diplopia/ptosis are prominent). The presynaptic-vs-postsynaptic location and the SCLC-vs-thymoma tumor are the two discriminators.",
        clue:
          "Presynaptic Ca2+ channel + SCLC + reflexes strengthen with use = LEMS; postsynaptic ACh receptor + thymoma + weakness worsens with use = MG",
      },
      {
        a: "Trousseau syndrome (migratory thrombophlebitis)",
        b: "Nonbacterial thrombotic endocarditis (sterile valve thrombi)",
        whyConfused: "Both are paraneoplastic hypercoagulability syndromes of pancreatic adenocarcinoma",
        keyDifference:
          "Trousseau = MIGRATORY SUPERFICIAL THROMBOPHLEBITIS (clots in the veins, moving from limb to limb). NBTE = DEPOSITION OF STERILE PLATELET THROMBI ON HEART VALVES (clots on the valves, culture-negative murmur). Both are caused by pancreatic adenocarcinoma's mucin-driven hypercoagulability — NBTE is also called 'marantic endocarditis.'",
        clue:
          "Migratory limb thrombophlebitis = Trousseau; culture-negative mitral/aortic valve vegetations = NBTE; both → pancreatic adenocarcinoma",
      },
      {
        a: "Paraneoplastic cerebellar degeneration (anti-Hu, SCLC)",
        b: "Paraneoplastic cerebellar degeneration (anti-Yo, gynecologic/breast)",
        whyConfused: "Both cause cerebellar degeneration via antibodies against Purkinje-cell antigens",
        keyDifference:
          "Anti-Hu → SCLC; anti-Yo → gynecologic and breast cancers; anti-Tr → Hodgkin lymphoma. The SAME syndrome (antibodies against antigens in Purkinje cells → cerebellar degeneration) is caused by three different tumors via three different antibodies. The antibody names the tumor: anti-Hu = SCLC, anti-Yo = gynecologic/breast, anti-Tr = Hodgkin lymphoma.",
        clue:
          "Anti-Hu = SCLC, anti-Yo = gynecologic/breast, anti-Tr = Hodgkin lymphoma — the antibody names the tumor for cerebellar degeneration",
      },
      {
        a: "Acanthosis nigricans (paraneoplastic, gastric)",
        b: "Acanthosis nigricans (insulin resistance, obesity)",
        whyConfused: "Both produce hyperpigmented velvety plaques in the axilla and neck",
        keyDifference:
          "The PARANEOPLASTIC acanthosis nigricans is sudden-onset and severe, associated with gastric adenocarcinoma and other visceral malignancies. The INSULIN-RESISTANCE acanthosis nigricans is gradual and chronic, associated with obesity, type 2 diabetes, and metabolic syndrome. The clinical context (sudden + severe + weight loss = paraneoplastic; gradual + obesity + insulin resistance = metabolic) names the cause. The Sign of Leser-Trélat (sudden onset of multiple seborrheic keratoses) is the related paraneoplastic cutaneous sign — also GI adenocarcinomas.",
        clue:
          "Sudden-onset severe acanthosis nigricans = paraneoplastic gastric adenocarcinoma; gradual obesity-associated = insulin resistance; Sign of Leser-Trélat (sudden seborrheic keratoses) is the paired paraneoplastic cutaneous sign",
      },
    ],
    pivots: [
      {
        lookAlike: "A systemic symptom in a cancer patient — is the symptom paraneoplastic or metastatic?",
        differentiator:
          "Paraneoplastic symptoms are NOT caused by direct tumor invasion or metastasis — they are mediated by tumor-secreted hormones (PTHrP, ACTH, ADH, EPO, calcitriol), antibodies (anti-NMDA, anti-Hu, anti-Yo, anti-Tr, anti-P/Q-type Ca2+ channel, anti-AChR), or cytokines (hypercoagulability). Metastatic symptoms track the tumor's anatomic spread (liver, bone, brain, lung). The syndrome names the mediator: hormone excess → endocrine; antibody against neural antigen → neuromuscular; hypercoagulability → hematologic.",
        correctPath:
          "Name the syndrome, name the mediator (hormone/antibody/cytokine), name the tumor — the paraneoplastic table's syndrome → mediator → tumor chain",
      },
      {
        lookAlike: "A weak cancer patient — Lambert-Eaton vs myasthenia gravis",
        differentiator:
          "LEMS = antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at NMJ → SCLC; weakness IMPROVES with repeated use, autonomic symptoms (dry mouth) prominent, diplopia less prominent. MG = antibodies against POSTSYNAPTIC ACh receptors at NMJ → thymoma; weakness WORSENS with repeated use, diplopia/ptosis prominent, autonomic symptoms less prominent. The presynaptic/postsynaptic location and the SCLC/thymoma tumor are the two discriminators.",
        correctPath:
          "Presynaptic Ca2+ + SCLC + improves with use = LEMS; postsynaptic AChR + thymoma + worsens with use = MG",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with a 50-pack-year smoking history presents with 3 months of progressive proximal and distal muscle weakness, dry mouth, constipation, and impotence. On examination, deep tendon reflexes are 1+ in all four limbs but STRENGTHEN to 2+ after the patient clenches his fists for 30 seconds. Initial strength on rising from a chair is poor but improves over the first 5 repetitions. Cranial nerves are intact (no ptosis, no diplopia). CT of the chest shows a 4-cm central left hilar mass with mediastinal adenopathy; biopsy reveals small blue cells with scant cytoplasm, granular chromatin, and nuclear molding.",
      question:
        "Name the paraneoplastic syndrome, the antibody mediator, the anatomic site of action at the NMJ, the most commonly associated tumor, and identify one other paraneoplastic syndrome caused by the same tumor.",
      options: [
        {
          label:
            "Lambert-Eaton myasthenic syndrome (LEMS) — antibodies against presynaptic (P/Q-type) Ca2+ channels at the NMJ → small cell lung cancer. The clinical signature is weakness + autonomic dysfunction (dry mouth, constipation, impotence) that IMPROVES with repeated use (and the reflexes that strengthen with use). The small blue cells with scant cytoplasm, granular chromatin, and nuclear molding on biopsy confirm SCLC. The OTHER paraneoplastic syndromes caused by SCLC on the table: Cushing syndrome (via ACTH), SIADH (via ADH), paraneoplastic cerebellar degeneration (via anti-Hu), and paraneoplastic encephalomyelitis (via anti-Hu) — SCLC is the most common paraneoplastic tumor with 5 of the table's 16 entries.",
          text: "LEMS — presynaptic Ca2+ channels → SCLC; SCLC also causes Cushing, SIADH, cerebellar degeneration, and encephalomyelitis.",
          correct: true,
          why:
            "Correct on all four layers. (1) THE SYNDROME: Lambert-Eaton myasthenic syndrome (LEMS) — the table's printed row: 'Lambert-Eaton myasthenic syndrome / Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ / Small cell lung cancer.' (2) THE ANTIBODY: antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at the NMJ — the presynaptic location is the discriminator from myasthenia gravis (which is POSTsynaptic). (3) THE ANATOMIC SITE: the presynaptic motor nerve terminal — where voltage-gated Ca2+ entry triggers acetylcholine release. The clinical signature of presynaptic failure is weakness + autonomic dysfunction (dry mouth, constipation, impotence from presynaptic autonomic failure) + reflexes that STRENGTHEN with repeated use (the Ca2+ accumulation overcomes the antibody blockade). (4) THE TUMOR: small cell lung cancer — the biopsy shows the SCLC histology (small blue cells with scant cytoplasm, granular chromatin, nuclear molding) and the central hilar location fits SCLC's typical origin. THE OTHER SCLC PARANEOPLASTIC SYNDROMES on the table: Cushing syndrome (via ↑ ACTH), SIADH (via ↑ ADH), paraneoplastic cerebellar degeneration (via anti-Hu), and paraneoplastic encephalomyelitis (via anti-Hu) — SCLC has 5 of the table's 16 entries, making it the most common paraneoplastic tumor.",
        },
        {
          label:
            "Myasthenia gravis — antibodies against POSTsynaptic ACh receptors at the NMJ → thymoma. The weakness worsens with use; the patient has ptosis and diplopia.",
          text: "Myasthenia gravis — postsynaptic ACh receptors → thymoma.",
          why:
            "Wrong syndrome: the stem's clinical signature is weakness that IMPROVES with repeated use and reflexes that STRENGTHEN with use — the LEMS pattern, not the MG pattern. Myasthenia gravis features weakness that WORSENS with repeated use, prominent cranial nerve involvement (ptosis, diplopia), and minimal autonomic symptoms. The stem explicitly states 'no ptosis, no diplopia' (cranial nerves intact), ruling against MG. The biopsy shows SCLC (small blue cells with scant cytoplasm, granular chromatin, nuclear molding) — the table's tumor for LEMS, not the table's tumor for MG (which is thymoma). The presynaptic/postsynaptic anatomic distinction and the SCLC/thymoma tumor distinction are the two MG-vs-LEMS discriminators, and the stem points to LEMS on both.",
        },
        {
          label:
            "Paraneoplastic cerebellar degeneration — antibodies against antigens in Purkinje cells → small cell lung cancer (anti-Hu). The ataxia is the dominant symptom.",
          text: "Cerebellar degeneration (anti-Hu) → SCLC.",
          why:
            "Wrong syndrome: the stem's clinical signature is proximal and distal MUSCLE WEAKNESS with autonomic dysfunction and reflex changes — not cerebellar ataxia. Paraneoplastic cerebellar degeneration presents with ataxia, dysmetria, dysdiadochokinesia, and nystagmus (the cerebellar signs), mediated by antibodies against Purkinje-cell antigens. The stem's weakness that improves with use, autonomic symptoms (dry mouth, constipation, impotence), and reflex potentiation with use are NMJ signs (LEMS), not cerebellar signs. The SCLC tumor association is correct (SCLC causes BOTH LEMS and cerebellar degeneration via anti-Hu), but the syndrome is LEMS, not cerebellar degeneration.",
        },
        {
          label:
            "Cushing syndrome — ↑ ACTH from the tumor → small cell lung cancer. The weakness is from cortisol myopathy and the autonomic symptoms are unrelated.",
          text: "Cushing syndrome (ACTH) → SCLC.",
          why:
            "Wrong syndrome: the stem's clinical signature is NMJ-pattern weakness (improves with use) with autonomic dysfunction and reflex potentiation — not the proximal myopathy of cortisol excess. Cushing syndrome from SCLC presents with the classic Cushingoid features (moon facies, truncal obesity, purple striae, hyperglycemia, hypertension) plus the myopathy, not with autonomic failure or reflex potentiation. The stem's 'reflexes strengthen with use' is the LEMS signature, mediated by presynaptic Ca2+ channel antibodies — not the cortisol myopathy signature. The SCLC tumor association is correct (SCLC causes BOTH LEMS and Cushing via ACTH), but the syndrome is LEMS, not Cushing.",
        },
        {
          label:
            "Paraneoplastic encephalomyelitis — anti-Hu in neurons → small cell lung cancer. The weakness and autonomic symptoms are from CNS involvement.",
          text: "Encephalomyelitis (anti-Hu) → SCLC.",
          why:
            "Wrong syndrome: the stem's clinical signature is NMJ-pattern weakness (improves with use, reflexes strengthen with use) — not encephalomyelitis. Paraneoplastic encephalomyelitis presents with cognitive/behavioral change, limbic encephalitis (memory loss, seizures), and brainstem signs (mediated by anti-Hu in neurons throughout the CNS). The stem's weakness that improves with use, autonomic symptoms, and reflex potentiation are peripheral NMJ signs (LEMS), not central CNS signs. The SCLC tumor association is correct (SCLC causes BOTH LEMS and encephalomyelitis via anti-Hu), but the syndrome is LEMS, not encephalomyelitis. The improvement with use is the LEMS-specific signature that distinguishes it from MG and from CNS paraneoplastic syndromes.",
        },
      ],
      reasoning:
        "The stem walks the Lambert-Eaton row end to end. (1) THE SYNDROME: Lambert-Eaton myasthenic syndrome — the table's printed row 'Lambert-Eaton myasthenic syndrome / Antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ / Small cell lung cancer.' (2) THE CLINICAL SIGNATURE: weakness that IMPROVES with repeated use + autonomic dysfunction (dry mouth, constipation, impotence) + reflexes that STRENGTHEN with use — the LEMS pattern (presynaptic Ca2+ accumulation overcomes the antibody blockade with repeated stimulation). (3) THE BIOPSY: small blue cells with scant cytoplasm, granular chromatin, nuclear molding — SCLC histology. (4) THE OTHER SCLC SYNDROMES: Cushing (ACTH), SIADH (ADH), cerebellar degeneration (anti-Hu), encephalomyelitis (anti-Hu) — SCLC is the most common paraneoplastic tumor with 5 of 16 entries. The distractors fail at: MG (postsynaptic AChR + thymoma, weakness worsens with use — wrong presynaptic/postsynaptic + wrong tumor + wrong use-response), cerebellar degeneration (ataxia, not weakness — wrong syndrome class), Cushing (cortisol myopathy + Cushingoid features, not NMJ-pattern weakness + autonomic — wrong mediator class), encephalomyelitis (CNS cognitive/brainstem signs, not peripheral NMJ signs — wrong anatomic site).",
    },
  },
  mnemonics: [
    {
      code: "SCLC = FIVE PARANEOPLASTIC SYNDROMES",
      meaning:
        "Small cell lung cancer is the most common paraneoplastic tumor with 5 of the table's 16 entries: CUSHING (via ↑ ACTH), SIADH (via ↑ ADH), PARANEOPLASTIC CEREBELLAR DEGENERATION (via anti-Hu), PARANEOPLASTIC ENCEPHALOMYELITIS (via anti-Hu), and LAMBERT-EATON MYASTHENIC SYNDROME (via antibodies against presynaptic P/Q-type Ca2+ channels). SCLC is a neuroendocrine tumor that retains hormone- and antibody-producing capacity.",
      memorizes: "The 5 SCLC paraneoplastic syndromes",
      whenToUse: "Any SCLC paraneoplastic question — list the 5 syndromes",
      clinical:
        "Cushing + SIADH + cerebellar degeneration + encephalomyelitis + Lambert-Eaton = the SCLC paraneoplastic pentad (the most common paraneoplastic tumor by entry count).",
    },
    {
      code: "THYMOMA = THREE PARANEOPLASTIC SYNDROMES",
      meaning:
        "Thymoma is the second most common paraneoplastic tumor with 3 of the table's 16 entries: PURE RED CELL APLASIA (anemia with low reticulocytes), GOOD SYNDROME (hypogammaglobulinemia), and MYASTHENIA GRAVIS (antibodies against postsynaptic ACh receptors at the NMJ). The thymus is the central lymphoid organ for T-cell tolerance — thymoma disrupts T-cell selection and B-cell help, producing both autoimmune (MG) and cytopenic (PRCA, Good) syndromes.",
      memorizes: "The 3 thymoma paraneoplastic syndromes",
      whenToUse: "Any thymoma paraneoplastic question — list the 3 syndromes",
      clinical:
        "Pure red cell aplasia + Good syndrome hypogammaglobulinemia + myasthenia gravis = the thymoma paraneoplastic triad (the second most common paraneoplastic tumor by entry count).",
    },
    {
      code: "LEMS PRESYNAPTIC, MG POSTSYNAPTIC — USE MAKES LEMS BETTER, MG WORSE",
      meaning:
        "LAMBERT-EATON = antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at NMJ → SCLC; use IMPROVES the weakness (Ca2+ accumulates and overcomes the blockade). MYASTHENIA GRAVIS = antibodies against POSTSYNAPTIC ACh receptors at NMJ → thymoma; use WORSENS the weakness (the few remaining receptors fatigue). The presynaptic/postsynaptic location and the improves-with-use/worsens-with-use response are the two discriminators.",
      memorizes: "The LEMS vs MG NMJ pair (presynaptic/postsynaptic + use response)",
      whenToUse: "Any NMJ paraneoplastic question — distinguish LEMS from MG",
      clinical:
        "LEMS presynaptic + SCLC + improves with use + autonomic dry mouth; MG postsynaptic + thymoma + worsens with use + ptosis/diplopia.",
    },
    {
      code: "TROUSSEAU + NBTE = PANCREATIC HYPERCOAGULABILITY PAIR",
      meaning:
        "Trousseau syndrome (migratory superficial thrombophlebitis) and nonbacterial thrombotic endocarditis (sterile platelet thrombi on heart valves) are the two paraneoplastic hypercoagulability syndromes caused by adenocarcinomas, especially PANCREATIC. Both reflect the mucin-driven hypercoagulability of pancreatic cancer. NBTE is also called 'marantic endocarditis.' The pair share the tumor and the mediator (mucin → tissue factor → thrombosis) but differ in the anatomic site (veins vs valves).",
      memorizes: "The Trousseau + NBTE pancreatic-adenocarcinoma hypercoagulability pair",
      whenToUse: "Any migratory thrombophlebitis or culture-negative endocarditis question",
      clinical:
        "Migratory superficial thrombophlebitis = Trousseau; culture-negative mitral/aortic valve vegetations = NBTE; both → pancreatic adenocarcinoma.",
    },
  ],
  rapidReview: {
    s30: [
      "Dermatomyositis — progressive proximal muscle weakness, Gottron papules, heliotrope rash → adenocarcinomas, especially ovarian",
      "Acanthosis nigricans — hyperpigmented velvety plaques in axilla and neck → gastric adenocarcinoma and other visceral malignancies",
      "Sign of Leser-Trélat — sudden onset of multiple seborrheic keratoses → GI adenocarcinomas and other visceral malignancies",
      "Hypertrophic osteoarthropathy — abnormal proliferation of skin and bone at distal extremities → clubbing, periostosis → adenocarcinoma of the lung",
      "Hypercalcemia via PTHrP → SCa2+mous cell carcinomas of lung, head, and neck; renal, bladder, breast, ovarian",
      "Hypercalcemia via ↑ 1,25-(OH)2 vitamin D3 (calcitriol) → lymphoma",
      "Cushing syndrome via ↑ ACTH → small cell lung cancer",
      "Hyponatremia (SIADH) via ↑ ADH → small cell lung cancer",
      "Polycythemia via ↑ erythropoietin → pheochromocytoma, RCC, HCC, hemangioblastoma, leiomyoma",
      "Pure red cell aplasia (anemia with low reticulocytes) → thymoma",
      "Good syndrome (hypogammaglobulinemia) → thymoma",
      "Trousseau syndrome (migratory superficial thrombophlebitis) → adenocarcinomas, especially pancreatic",
      "Nonbacterial thrombotic endocarditis (sterile platelet thrombi on heart valves) → adenocarcinomas, especially pancreatic",
      "Anti-NMDA receptor encephalitis → ovarian teratoma",
      "Opsoclonus-myoclonus ataxia syndrome ('dancing eyes, dancing feet') → neuroblastoma (children), SCLC (adults)",
      "Paraneoplastic cerebellar degeneration (antibodies against Purkinje cells) → SCLC (anti-Hu), gynecologic/breast (anti-Yo), Hodgkin lymphoma (anti-Tr)",
      "Paraneoplastic encephalomyelitis (anti-Hu in neurons) → small cell lung cancer",
      "Lambert-Eaton myasthenic syndrome (antibodies against presynaptic P/Q-type Ca2+ channels at NMJ) → small cell lung cancer",
      "Myasthenia gravis (antibodies against postsynaptic ACh receptors at NMJ) → thymoma",
      "Lipofuscin — yellow-brown 'wear and tear' pigment A; lipid peroxidation product; deposits in heart, colon, liver, kidney, eye",
      "Aging immune — thymic involution → ↓ naïve T cells (and indirectly naïve B cells); memory B and T preserved; ↓ response to novel antigens (pathogens, vaccines)",
      "Aging respiratory — ↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance; ↓ FEV1, ↓ FVC, ↑ RV (TLC unchanged); ↑ A-a gradient, ↑ V/Q mismatch; blunted hypoxia/hypercapnia response",
      "Aging skin — atrophy + ↓ dermal collagen + ↓ elastin (wrinkles, senile purpura); intrinsic = ↓ fibroblast biosynthesis; extrinsic (photoaging) = UVA-driven collagen/elastin degradation → solar elastosis",
      "Aging reproductive — males: testicular atrophy + prostate enlargement + slower erection/ejaculation; females: vulvovaginal atrophy + menopause (↓ estrogen from ovarian follicle exhaustion)",
    ],
    m3: [
      "SCLC = FIVE PARANEOPLASTIC SYNDROMES — Cushing (ACTH), SIADH (ADH), cerebellar degeneration (anti-Hu), encephalomyelitis (anti-Hu), Lambert-Eaton (anti-presynaptic Ca2+) — the most common paraneoplastic tumor by entry count",
      "THYMOMA = THREE PARANEOPLASTIC SYNDROMES — pure red cell aplasia, Good syndrome (hypogammaglobulinemia), myasthenia gravis (anti-postsynaptic AChR) — the second most common paraneoplastic tumor",
      "LEMS PRESYNAPTIC, MG POSTSYNAPTIC — USE MAKES LEMS BETTER, MG WORSE — LEMS = presynaptic P/Q-type Ca2+ channel + SCLC + improves with use + dry mouth; MG = postsynaptic AChR + thymoma + worsens with use + ptosis/diplopia",
      "TROUSSEAU + NBTE = PANCREATIC HYPERCOAGULABILITY PAIR — Trousseau = migratory superficial thrombophlebitis; NBTE = sterile platelet thrombi on heart valves; both → adenocarcinomas, especially pancreatic",
      "Anti-Hu (SCLC), anti-Yo (gynecologic/breast), anti-Tr (Hodgkin) — three antibodies, three tumors, one syndrome (cerebellar degeneration via Purkinje-cell antigens)",
      "Aging immune — thymic involution → ↓ naïve T cells (and indirectly naïve B cells); memory B/T preserved; ↓ response to novel antigens (pathogens, vaccines)",
    ],
    m10: [
      "The paraneoplastic table's 4 categories: musculoskeletal/cutaneous (4 — dermatomyositis, acanthosis nigricans, Sign of Leser-Trélat, hypertrophic osteoarthropathy), endocrine (4 — PTHrP-hypercalcemia, calcitriol-hypercalcemia, ACTH-Cushing, ADH-SIADH), hematologic (5 — polycythemia, pure red cell aplasia, Good syndrome, Trousseau syndrome, NBTE), neuromuscular (6 — anti-NMDA, opsoclonus-myoclonus, cerebellar degeneration, encephalomyelitis, Lambert-Eaton, myasthenia gravis) — 16 entries total",
      "The SCLC paraneoplastic pentad: Cushing (ACTH), SIADH (ADH), cerebellar degeneration (anti-Hu), encephalomyelitis (anti-Hu), Lambert-Eaton (anti-presynaptic P/Q-type Ca2+ channels) — 5 of 16 entries; SCLC is the most common paraneoplastic tumor because it is a neuroendocrine tumor that retains hormone- and antibody-producing capacity",
      "The thymoma paraneoplastic triad: pure red cell aplasia, Good syndrome (hypogammaglobulinemia), myasthenia gravis (anti-postsynaptic AChR) — 3 of 16 entries; thymoma disrupts T-cell tolerance and B-cell help, producing both autoimmune (MG) and cytopenic (PRCA, Good) syndromes",
      "The Lipofuscin 'wear and tear' pigment A — yellow-brown, composed of polymers of lipids and phospholipids complexed with protein, derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes, deposited in heart, colon, liver, kidney, eye at autopsy of older adults; the copyrighted photograph on book 225 (lettered A) is described in text, never reproduced (the M32 convention)",
      "Aging's three mechanistic axes — genetic (telomere shortening), epigenetic (DNA methylation), metabolic (mitochondrial dysfunction); the same processes that drive carcinogenesis also drive senescence, which is why the paraneoplastic syndromes and aging share a page",
    ],
  },
  recall: [
    {
      q: "The four musculoskeletal/cutaneous paraneoplastic syndromes and their tumors, verbatim.",
      a: "DERMATOMYOSITIS — progressive proximal muscle weakness, Gottron papules, heliotrope rash → ADENOCARCINOMAS, ESPECIALLY OVARIAN. ACANTHOSIS NIGRICANS — hyperpigmented velvety plaques in axilla and neck → GASTRIC ADENOCARCINOMA AND OTHER VISCERAL MALIGNANCIES. SIGN OF LESER-TRÉLAT — sudden onset of multiple seborrheic keratoses → GI ADENOCARCINOMAS AND OTHER VISCERAL MALIGNANCIES. HYPERTROPHIC OSTEOARTHROPATHY — abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones → ADENOCARCINOMA OF THE LUNG.",
    },
    {
      q: "The five SCLC paraneoplastic syndromes and their mediators, verbatim.",
      a: "CUSHING SYNDROME — ↑ ACTH → SMALL CELL LUNG CANCER. HYPONATREMIA (SIADH) — ↑ ADH → SMALL CELL LUNG CANCER. PARANEOPLASTIC CEREBELLAR DEGENERATION — antibodies against antigens in Purkinje cells (anti-Hu) → SMALL CELL LUNG CANCER. PARANEOPLASTIC ENCEPHALOMYELITIS — anti-Hu in neurons → SMALL CELL LUNG CANCER. LAMBERT-EATON MYASTHENIC SYNDROME — antibodies against presynaptic (P/Q-type) Ca2+ channels at NMJ → SMALL CELL LUNG CANCER. (5 of the table's 16 entries — SCLC is the most common paraneoplastic tumor.)",
    },
    {
      q: "The three thymoma paraneoplastic syndromes and their mechanisms, verbatim.",
      a: "PURE RED CELL APLASIA — anemia with low reticulocytes → THYMOMA. GOOD SYNDROME — hypogammaglobulinemia → THYMOMA. MYASTHENIA GRAVIS — antibodies against postsynaptic ACh receptors at NMJ → THYMOMA. (3 of the table's 16 entries — thymoma is the second most common paraneoplastic tumor.)",
    },
    {
      q: "The LEMS vs MG NMJ pair — anatomic site, antibody, tumor, and use-response — verbatim.",
      a: "LAMBERT-EATON MYASTHENIC SYNDROME — antibodies against PRESYNAPTIC (P/Q-type) Ca2+ channels at NMJ → SMALL CELL LUNG CANCER; use IMPROVES the weakness (and autonomic symptoms like dry mouth are prominent). MYASTHENIA GRAVIS — antibodies against POSTSYNAPTIC ACh receptors at NMJ → THYMOMA; use WORSENS the weakness (and diplopia/ptosis are prominent).",
    },
    {
      q: "The Lipofuscin 'wear and tear' pigment block and the aging-immune rule, verbatim.",
      a: "LIPOFUSCIN — a yellow-brown, 'wear and tear' pigment A associated with normal aging. Composed of polymers of lipids and phospholipids complexed with protein. May be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes. Autopsy of older adult will reveal deposits in heart, colon, liver, kidney, eye, and other organs. AGING IMMUNE — predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved. Net effect = diminished response to novel antigens (eg, pathogens, vaccines).",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The paraneoplastic syndromes are the systemic manifestations of hallmark 1 (DNA mutations → tumor-secreted mediators): the tumor's mutated genome produces hormones (PTHrP, ACTH, ADH, EPO, calcitriol) and antibodies (anti-NMDA, anti-Hu, anti-Yo, anti-Tr, anti-Ca2+, anti-AChR) that cause distant symptoms without metastasis. Aging's three axes (telomere shortening, DNA methylation, mitochondrial dysfunction) overlap with the cancer hallmarks — the same processes that drive carcinogenesis also drive senescence, which is why the paraneoplastic syndromes and aging share a page.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The paraneoplastic table's tumors are the nomenclature page's named malignancies: small cell lung cancer (the neuroendocrine carcinoma), adenocarcinoma (the glandular carcinoma — ovarian, gastric, GI, lung, pancreatic), thymoma (the thymic epithelial tumor), renal cell carcinoma (the renal tubular carcinoma), hepatocellular carcinoma (the hepatocyte carcinoma), hemangioblastoma (the vascular tumor), leiomyoma (the smooth-muscle benign tumor), pheochromocytoma (the adrenal medulla neuroendocrine tumor), neuroblastoma (the neural crest pediatric tumor), ovarian teratoma (the germ cell tumor), Hodgkin lymphoma (the Reed-Sternberg lymphoma). The nomenclature page names the tissue of origin; this page names the paraneoplastic syndrome each tumor causes.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The paraneoplastic mediators are the products of the oncogenes and tumor suppressors: PTHrP overexpression (metastatic breast cancer + SCC hypercalcemia), ACTH overexpression (SCLC Cushing), ADH overexpression (SCLC SIADH), EPO overexpression (RCC + hemangioblastoma polycythemia — VHL-driven), calcitriol overexpression (lymphoma hypercalcemia). The oncogene page names the mutation; this page names the paraneoplastic hormone the mutation produces.",
    },
    {
      title: "Chemical Carcinogens & Organ Cancers",
      topicId: "chemical-carcinogens",
      note: "The chemical carcinogen table names the toxins that cause the tumors that produce the paraneoplastic syndromes: tobacco smoke causes SCLC (the most common paraneoplastic tumor — 5 syndromes) and the SCCs of lung/head/neck (PTHrP hypercalcemia); tobacco also causes pancreatic adenocarcinoma (Trousseau + NBTE) and renal cell carcinoma (polycythemia via EPO). The carcinogen → tumor → paraneoplastic syndrome chain links this page to the chemical-carcinogen page.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrine (paraneoplastic hormone excess)",
      connection:
        "The paraneoplastic endocrine syndromes are the endocrine-system page's ectopic-hormone axis: PTHrP → hypercalcemia (SCC of lung/head/neck, renal, bladder, breast, ovarian), calcitriol → hypercalcemia (lymphoma), ACTH → Cushing (SCLC), ADH → SIADH (SCLC), EPO → polycythemia (pheochromocytoma, RCC, HCC, hemangioblastoma, leiomyoma). Each is mediated by tumor secretion of a hormone normally produced by another gland — PTHrP mimics PTH, calcitriol is the active vitamin D, ACTH drives the adrenal cortex, ADH drives renal water retention, EPO drives the bone marrow.",
    },
    {
      subject: "Neurology (paraneoplastic neuromuscular syndromes)",
      connection:
        "The paraneoplastic neuromuscular syndromes are the neurology page's antibody-mediated disorders: anti-NMDA receptor encephalitis (ovarian teratoma), opsoclonus-myoclonus ataxia syndrome 'dancing eyes dancing feet' (neuroblastoma in children, SCLC in adults), paraneoplastic cerebellar degeneration (anti-Hu/anti-Yo/anti-Tr — SCLC/gynecologic-breast/Hodgkin), paraneoplastic encephalomyelitis (anti-Hu — SCLC), Lambert-Eaton myasthenic syndrome (presynaptic P/Q-type Ca2+ channel — SCLC), myasthenia gravis (postsynaptic ACh receptor — thymoma). The antibody target names the NMJ anatomic site and the tumor.",
    },
    {
      subject: "Hematology (paraneoplastic cytopenias and hypercoagulability)",
      connection:
        "The paraneoplastic hematologic syndromes are the hematology page's cancer-associated blood disorders: polycythemia (↑ EPO — pheochromocytoma, RCC, HCC, hemangioblastoma, leiomyoma), pure red cell aplasia (thymoma), Good syndrome hypogammaglobulinemia (thymoma), Trousseau syndrome migratory thrombophlebitis (pancreatic), nonbacterial thrombotic endocarditis (pancreatic). The two thymoma cytopenias (PRCA + Good) reflect thymic T-cell tolerance disruption; the two pancreatic hypercoagulability syndromes (Trousseau + NBTE) reflect mucin-driven tissue-factor activation.",
    },
    {
      subject: "Geriatrics (normal aging organ-system changes)",
      connection:
        "The aging organ-system grid is the geriatrics page's physiologic-decline framework: cardiovascular (↓ arterial compliance, valve calcification), respiratory (↑ lung compliance, ↓ elastic recoil, ↑ A-a gradient), immune (thymic involution → ↓ vaccine response), musculoskeletal (sarcopenia, osteopenia), skin (wrinkles, solar elastosis), reproductive (testicular atrophy, menopause), special senses (presbyopia, presbycusis). The thymic involution rule (↓ naïve T cells) explains the geriatric vaccine-response decline; the lung compliance rule (↑ compliance, ↓ elastic recoil) explains the geriatric respiratory vulnerability.",
    },
  ],
};
