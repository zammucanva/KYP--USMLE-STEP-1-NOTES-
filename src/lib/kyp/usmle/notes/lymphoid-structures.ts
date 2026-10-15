import type { KypUsMLENote } from "../types";

// Immunology — Lymphoid Structures (E-batch 19, book order: first Immunology topic after the pilot).
// Source: First Aid 2026, Part 1 pdf 116–118 / book 94–96
// (immune system organs; lymph node; lymphatic drainage associations; spleen; thymus)

export const lymphoidStructures: KypUsMLENote = {
  id: "lymphoid-structures",
  title: "Lymphoid Structures: Lymph Node, Spleen & Thymus",
  subtitle:
    "The architecture of immunity — 1° organs (bone marrow makes B cells, thymus makes T cells) and 2° organs (spleen, lymph nodes, tonsils, adenoids, appendix, Peyer patches) where immune cells meet antigen. The lymph node zoned from outside in: B-cell follicles in the outer cortex (1° dense and quiescent, 2° active with pale germinal centers), the T-cell paracortex with its high endothelial venules (underdeveloped in DiGeorge, hyperplastic in EBV), and the macrophage-lined medullary sinuses draining to the efferent lymphatic. The spleen filtering blood through white pulp (PALS T cells around the central artery, B-cell follicles, the marginal zone where APCs capture blood-borne antigen) and red pulp — and what its loss means: no IgM response, no C3b opsonization, encapsulated organisms, Howell-Jolly bodies. The thymus as the T-cell school (cortex immature, medulla mature with Hassall corpuscles) that is sail-shaped in the neonate, involutes after puberty, and hides myasthenia-gravis-associated thymomas.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Lymphoid Structures",
  pilotCategory: "Lymphoid Structures — lymph node zonation, lymphatic drainage map, spleen white/red pulp, postsplenectomy risk, thymus development and tumors",
  difficulty: 1,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 94–96 (immune system organs; lymph node; lymphatic drainage associations; spleen; thymus)",
  tags: [
    "lymph node",
    "paracortex",
    "high endothelial venules",
    "germinal center",
    "mantle zone",
    "DiGeorge syndrome",
    "paracortical hyperplasia",
    "EBV",
    "lymphatic drainage",
    "Virchow node",
    "Sister Mary Joseph node",
    "thoracic duct",
    "chylothorax",
    "spleen",
    "white pulp",
    "PALS",
    "marginal zone",
    "Howell-Jolly bodies",
    "postsplenectomy",
    "encapsulated organisms",
    "thymus",
    "Hassall corpuscles",
    "thymoma",
    "myasthenia gravis",
    "thymic involution",
  ],
  core: {
    what: "Immune system organs divide into 1° organs — bone marrow (immune cell production, B-cell maturation) and thymus (T-cell maturation) — and 2° organs — spleen, lymph nodes, tonsils, adenoids, appendix, and Peyer patches — which allow immune cells to interact with antigen. The lymph node is a 2° lymphoid organ with many afferents and 1 or more efferents, encapsulated with trabeculae; its functions are nonspecific filtration by macrophages, circulation of B and T cells, and immune response activation. Its zones run outer to inner: follicles in the outer cortex (B-cell localization and proliferation; 1° follicles dense and quiescent, 2° follicles active with pale central germinal centers), the paracortex between follicles and medulla (T cells; high endothelial venules through which T and B cells enter from blood; underdeveloped in DiGeorge syndrome, enlarged in extreme cellular immune responses such as EBV), and the medulla (medullary cords of lymphocytes and plasma cells; medullary sinuses with reticular cells and macrophages communicating with efferent lymphatics). The spleen sits in the LUQ, anterolateral to the left kidney, deep to ribs 9–11, commonly injured in blunt abdominal trauma; its white pulp arranges T cells in the periarteriolar lymphoid sheath, B cells in follicles, and macrophages plus specialized B cells in the marginal zone where APCs capture blood-borne antigens, while red pulp holds the sinusoid-filtered RBCs. The thymus lies in the anterosuperior mediastinum — site of T-cell differentiation and maturation, epithelium from the third pharyngeal pouch (endoderm), lymphocytes of mesodermal origin, dense immature-T-cell cortex, pale mature-T-cell medulla with Hassall corpuscles.",
    why: "This page is the anatomy that every later immunology mechanism runs on. Lymphocyte traffic — where T and B cells enter the node (HEV), where they lodge (paracortex vs follicle), where plasma cells exit (medulla → efferent) — explains why DiGeorge presents with a T-cell-empty paracortex and why EBV blows the paracortex up into lymphadenopathy. The drainage map converts a palpable node into a regional differential: a left supraclavicular Virchow node points to the abdomen and pelvis (classic: gastric cancer), a periumbilical Sister Mary Joseph node to gastric cancer, unilateral hilar nodes to pulmonary TB, bilateral hilar nodes to sarcoidosis. Splenic architecture explains the postsplenectomy patient: without the spleen there is no IgM response to blood-borne polysaccharide, no complement activation, no C3b opsonization — hence the encapsulated-organism sepsis risk and the vaccine schedule (pneumococci, meningococci, Hib), and the blood findings (Howell-Jolly bodies, target cells, thrombocytosis, lymphocytosis) that prove the organ is gone. The thymus explains both the congenital immunodeficiencies (absent thymic shadow in SCID and DiGeorge) and the adult associations (thymoma with myasthenia gravis, SVC syndrome, pure red cell aplasia, Good syndrome).",
    keyIdea: "Read every lymphoid organ as a zoning problem. Lymph node: outer cortex = B cells, paracortex = T cells (HEV entry), medulla = macrophages + plasma cells outflow — and the clinical pairs hang on the zones (DiGeorge → paracortex underdeveloped; EBV/viral → paracortical hyperplasia → lymphadenopathy). Spleen: white pulp = PALS (T) around the central artery + follicle (B) + marginal zone (APC capture of blood-borne antigen), red pulp = RBC filtration — asplenia is the loss of the IgM→complement→C3b opsonization axis against encapsulated bacteria. Thymus: cortex immature, medulla mature (Hassall corpuscles), third pouch endoderm — 'T cells = Thymus, B cells = Bone marrow' — and it FADES with age (Fatty replacement, Atrophy, Decline in naïve T cells, Elderly immunosenescence, Size/cellularity/function down). The drainage map is the anatomy-exam crossover: right lymphatic duct takes the right side above the diaphragm; the thoracic duct takes everything else — and its rupture causes chylothorax.",
  },
  mechanisms: [
    {
      id: "lymph-node-response-pipeline",
      title: "From afferent lymph to efferent antibody — the node as a response pipeline",
      context: "Lymph node zonation in an immune response",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Antigen arrives in afferent lymph (many afferents enter the convex side of an encapsulated, trabeculated node)",
            sublabel: "Input — the node is a filter on the lymphatic highway.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Medullary sinuses: reticular cells and macrophages perform nonspecific filtration; medullary cords hold lymphocytes and plasma cells",
            sublabel: "Process — the macrophage gate.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Paracortex: T cells encounter processed antigen; T and B cells continuously enter from blood through high endothelial venules (HEVs)",
            sublabel: "Process — the T-cell meeting room.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Outer cortex follicles: B cells localize and proliferate — 2° follicles activate with pale central germinal centers ringed by mantle zones (1° follicles stay dense and quiescent)",
            sublabel: "Process — the B-cell schoolroom.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Plasma cells and effector cells leave through medullary sinuses → efferent lymphatic (1 or more, at the hilum with artery and vein)",
            sublabel: "Output — immunity ships out the same door the lymph leaves.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "afferent lymph" },
          { from: "s1", to: "s2", label: "filtered antigen" },
          { from: "s2", to: "s3", label: "T-cell help" },
          { from: "s3", to: "o1", label: "plasma cells" },
        ],
        caption:
          "The node is a one-way pipeline: many afferents in, one (or a few) efferents out. Antigen is filtered by medullary macrophages, presented to T cells in the paracortex (which is why the HEV — the T- and B-cell entry port from blood — sits there), and B cells respond in outer-cortex follicles whose germinal centers are the visible signature of activation. The two clinical zonations follow directly: no thymus (DiGeorge) leaves the paracortex underdeveloped, while an extreme cellular immune response (EBV and other viral infections) drives paracortical hyperplasia — the lymphadenopathy every student has felt in mononucleosis.",
      },
    },
    {
      id: "postsplenectomy-opsonization-collapse",
      title: "Asplenia — the opsonization axis collapses",
      context: "Splenic dysfunction (postsplenectomy, sickle cell autosplenectomy)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Splenic dysfunction: surgical splenectomy or sickle cell autosplenectomy",
            sublabel: "Input — the blood-filtering organ is gone.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Loss of the splenic IgM response to blood-borne polysaccharide antigens",
            sublabel: "Process — no first-response antibody.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Less complement activation → less C3b opsonization of encapsulated bacteria",
            sublabel: "Process — the opsonin coat is missing.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Susceptibility to encapsulated organisms: pneumococci > meningococci > Haemophilus influenzae type b — vaccinate before or at splenectomy",
            sublabel: "Process — OPSI (overwhelming postsplenectomy infection) risk.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Postsplenectomy blood findings: Howell-Jolly bodies (nuclear remnants), target cells, thrombocytosis, lymphocytosis (loss of sequestration and removal)",
            sublabel: "Output — the smear proves the spleen is absent.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no white pulp" },
          { from: "s1", to: "s2", label: "↓IgM" },
          { from: "s2", to: "s3", label: "↓C3b" },
          { from: "s3", to: "o1", label: "chronic adaptations" },
        ],
        caption:
          "The spleen is the only lymphoid organ built to filter BLOOD rather than lymph — its marginal zone APCs sample blood-borne antigens and mount the IgM-first response to encapsulated bacteria. Remove it and the chain breaks at its first link: less IgM, less complement activation, less C3b opsonization, and encapsulated organisms run unchecked. The postsplenectomy smear is the hematologic echo: without red-pulp macrophage policing, erythrocytes keep their nuclear remnants (Howell-Jolly bodies) and target morphology, and without splenic sequestration, platelets and lymphocytes accumulate. The same cascade explains sickle cell autosplenectomy by age 2–4 — the same vaccines, the same risk.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "lymph-node-map",
      title: "The lymph node — zonation schematic",
      caption:
        "An original KYP schematic of the lymph node: capsule and trabeculae; many afferent lymphatics entering the convex side and the efferent lymphatic leaving the hilum beside the artery and vein; the outer cortex with a dense quiescent 1° follicle and an active 2° follicle (pale germinal center, dark mantle zone); the T-cell paracortex with its high endothelial venules; and the medulla of cords and macrophage-lined sinuses.",
      notice:
        "The source presents a histology micrograph plus a labeled schematic (pdf 116 / book 94); KYP redraws the schematic and conveys the histology schematically — nothing is reproduced. The two clinical callouts (DiGeorge → underdeveloped paracortex; EBV → paracortical hyperplasia) are the exam payload of the zonation.",
    },
    {
      kind: "visual",
      visualId: "lymphatic-drainage-map",
      title: "Lymphatic drainage — the two ducts and the node clusters",
      caption:
        "An original KYP body map of the lymph node clusters (filled dots = palpable, hollow = nonpalpable) beside the two great ducts: the right lymphatic duct (right side above the diaphragm → right subclavian–internal jugular junction) and the thoracic duct (below the diaphragm plus left thorax and upper limb → left subclavian–internal jugular junction; rupture → chylothorax), with the highest-yield cluster associations highlighted.",
      notice:
        "The source presents a body map with leader lines tied to the 16-cluster table (pdf 117 / book 95); KYP redraws the map with the same cluster set and reproduces the full table verbatim as the note's next block — the map and the table are two views of one dataset.",
    },
    {
      kind: "table",
      title: "Lymphatic drainage associations — verbatim",
      intro: "The source's 16-cluster table, verbatim: cluster, area drained, and associated pathology. Two pathology cells are merged in print and are marked here with the span note.",
      columns: ["Lymph node cluster", "Area of body drained", "Associated pathology"],
      rows: [
        ["Submandibular, submental", "Oral cavity, anterior tongue, lower lip", "Malignancy of and metastasis to the oral cavity"],
        ["Deep cervical", "Head, neck, oropharynx", "Upper respiratory tract infection; Infectious mononucleosis; Kawasaki disease; Malignancy of head, neck, oropharynx"],
        ["Supraclavicular", "Right: right hemithorax; Left (Virchow node): left hemithorax, abdomen, pelvis", "Malignancies of thorax, abdomen, pelvis"],
        ["Mediastinal", "Trachea, esophagus", "Pulmonary TB (unilateral hilar); Sarcoidosis (bilateral hilar)"],
        ["Hilar", "Lungs", "Lung cancer; Granulomatous disease"],
        ["Axillary", "Upper limb, breast, skin above umbilicus", "Mastitis; Metastasis (especially breast cancer)"],
        ["Epitrochlear", "Hand, forearm", "Secondary syphilis"],
        ["Celiac", "Liver, stomach, spleen, pancreas, upper duodenum", "Mesenteric lymphadenitis; Inflammatory bowel disease; Celiac disease — merged cell spanning the celiac, superior mesenteric, and inferior mesenteric rows in print"],
        ["Superior mesenteric", "Lower duodenum, jejunum, ileum, colon to splenic flexure", "(same merged pathology cell as celiac)"],
        ["Inferior mesenteric", "Colon from splenic flexure to upper rectum", "(same merged pathology cell as celiac)"],
        ["Periumbilical (Sister Mary Joseph node)", "Abdomen, pelvis", "Gastric cancer"],
        ["Para-aortic", "Pair of testes, ovaries, kidneys, fallopian tubes, fundus of uterus", "Metastasis"],
        ["External iliac", "Body of uterus, cervix, superior bladder", "Sexually transmitted infections; Medial foot/leg cellulitis (superficial inguinal) — merged cell spanning the external iliac, internal iliac, and superficial inguinal rows in print"],
        ["Internal iliac", "Cervix, proximal vagina, corpus cavernosum, prostate, inferior bladder, lower rectum to anal canal (above pectinate line)", "(same merged pathology cell as external iliac)"],
        ["Superficial inguinal", "Distal vagina, vulva, scrotum, urethra, anal canal (below pectinate line), skin below umbilicus (except popliteal area)", "(same merged pathology cell as external iliac)"],
        ["Popliteal (\"pop-lateral\")", "Dorsolateral foot, posterior calf", "Lateral foot/leg cellulitis"],
      ],
      caption:
        "Row assignments follow the printed 2026 table exactly (verified against a high-resolution render: mediastinal carries the TB/sarcoid line, hilar carries lung cancer and granulomatous disease — a change from older editions' layout). The pectinate line is the great divider of the pelvis: internal iliac drains above it (cervix, proximal vagina, prostate), superficial inguinal drains below it (distal vagina, vulva, scrotum, anal canal below the line) plus the skin below the umbilicus. Popliteal 'pop-lateral': dorsolateral foot drains popliteal; medial foot drains superficial inguinal.",
    },
    {
      kind: "visual",
      visualId: "spleen-thymus-map",
      title: "Spleen and thymus — the blood filter and the T-cell school",
      caption:
        "An original KYP two-panel schematic. Spleen: LUQ, ribs 9–11; white pulp with the central artery wrapped by the T-cell PALS, the B-cell follicle with its germinal center, and the marginal zone where APCs capture blood-borne antigens; red pulp cords and sinusoids; the asplenia cascade (↓IgM → ↓complement → ↓C3b → encapsulated organisms, vaccinate pneumococci > meningococci > Hib) and the postsplenectomy smear findings. Thymus: anterosuperior mediastinum, bilobed; cortex dense with immature T cells, medulla pale with mature T cells and Hassall corpuscles; sail-shaped neonatal CXR; absent shadow in SCID/DiGeorge; thymoma associations; the FADES involution.",
      notice:
        "The source presents a spleen cross-section diagram and a neonatal chest radiograph (pdf 118 / book 96); KYP redraws the diagram and conveys the sail-shaped CXR finding as a labeled schematic — the radiograph is never reproduced.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A young adult presents with fever, pharyngitis, lymphocytosis, and tender posterior cervical lymphadenopathy; a biopsy of an enlarged node would show expansion of the region between the follicles and the medulla.",
        discriminator: "Tender lymphadenopathy + node zone on biopsy",
        concept: "Paracortical hyperplasia (EBV / extreme cellular immune response)",
        answer:
          "The paracortex contains T cells and high endothelial venules through which T and B cells enter from blood; an extreme cellular immune response — classically EBV and other viral infections — enlarges it (paracortical hyperplasia) and presents as lymphadenopathy. Contrast the follicular hyperplasia of rheumatoid arthritis and the medullary prominence in early antibody responses.",
      },
      {
        stem: "An adult has a hard, painless, enlarged left supraclavicular node; imaging finds a gastric mass.",
        discriminator: "Left supraclavicular node (Virchow) + abdominal malignancy",
        concept: "Lymphatic drainage associations",
        answer:
          "The left supraclavicular (Virchow) node drains the left hemithorax, abdomen, and pelvis via the thoracic duct — an abdominal or pelvic malignancy (classic: gastric cancer) reaches it directly. The periumbilical Sister Mary Joseph node carries the same gastric-cancer association through the abdominal/pelvic drainage.",
      },
      {
        stem: "A child status post splenectomy for hereditary spherocytosis is seen for pre-discharge counseling; the smear shows basophilic nuclear inclusions in some erythrocytes.",
        discriminator: "Howell-Jolly bodies + surgical history",
        concept: "Postsplenectomy findings and the encapsulated-organism risk",
        answer:
          "Without the spleen, red-pulp macrophages no longer pitted nuclear remnants from erythrocytes: Howell-Jolly bodies, target cells, thrombocytosis (loss of sequestration and removal), and lymphocytosis appear. Functionally, ↓IgM → ↓complement activation → ↓C3b opsonization → susceptibility to encapsulated organisms; vaccinate against pneumococci, meningococci, and Hib (most to least common) and counsel on fever-as-an-emergency.",
      },
      {
        stem: "A woman in her 40s with fluctuating ptosis and diplopia has a mediastinal mass on chest CT.",
        discriminator: "Myasthenia gravis + anterosuperior mediastinal mass",
        concept: "Thymoma associations",
        answer:
          "A thymoma is a neoplasm of the thymus and is associated with myasthenia gravis, superior vena cava syndrome, pure red cell aplasia, and Good syndrome (thymoma with immunodeficiency). The same anterosuperior mediastinum holds the normal thymus — dense immature-T-cell cortex, pale mature-T-cell medulla with Hassall corpuscles, epithelium from the third pharyngeal pouch.",
      },
    ],
    traps: [
      {
        a: "B cells lodge in the paracortex and T cells in follicles",
        b: "Outer cortex = B-cell follicles; paracortex = T cells",
        whyConfused: "Both zones look 'lymphocyte-rich' on a schematic.",
        keyDifference:
          "Zonation is fixed: follicles (outer cortex) are B-cell localization/proliferation territory (1° quiescent, 2° active with germinal centers); the paracortex between follicles and medulla holds T cells and the high endothelial venules where T and B cells enter from blood. DiGeorge (no thymus) underdevelops the paracortex; EBV hyperplasia enlarges it.",
        clue: "Any 'which zone' or 'which zone is missing in DiGeorge' question.",
      },
      {
        a: "Howell-Jolly bodies after splenectomy are a platelet problem",
        b: "They are erythrocyte nuclear remnants the red pulp failed to pith",
        whyConfused: "Thrombocytosis is also a postsplenectomy finding — two blood findings, two cell lines.",
        keyDifference:
          "Howell-Jolly bodies are nuclear remnants in RBCs (red-pulp macrophage function lost); thrombocytosis and lymphocytosis are sequestration/removal losses (platelets and lymphocytes that the spleen normally pools). Four findings, one missing organ.",
        clue: "Any smear-after-splenectomy question.",
      },
      {
        a: "The right lymphatic duct drains the right lung and right lower limb",
        b: "Right side ABOVE the diaphragm only — everything else is thoracic duct",
        whyConfused: "Two ducts, four quadrants of the body.",
        keyDifference:
          "The right lymphatic duct takes only the right side of the body above the diaphragm, into the junction of the right subclavian and internal jugular veins. The thoracic duct takes everything below the diaphragm plus the left thorax and upper limb, into the left subclavian–internal jugular junction — and its rupture causes chylothorax.",
        clue: "Any duct-territory or chylothorax-mechanism question.",
      },
      {
        a: "Popliteal nodes drain the medial foot",
        b: "Popliteal is pop-LATERAL — dorsolateral foot and posterior calf",
        whyConfused: "Foot drainage splits medial vs lateral across two node clusters.",
        keyDifference:
          "The dorsolateral foot and posterior calf drain to the popliteal nodes ('pop-lateral'); the medial foot and leg drain up to the superficial inguinal nodes. This is why cellulitis of the lateral foot gives popliteal adenopathy while medial-leg cellulitis gives inguinal findings.",
        clue: "Any foot-cellulitis-which-node question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The enlarged node: zonal biopsy patterns",
        differentiator: "Which zone expanded names the response",
        correctPath:
          "Paracortex (between follicles and medulla) → T-cell response: EBV and other viruses, paracortical hyperplasia. Follicles (outer cortex, germinal centers) → B-cell activation: rheumatoid arthritis and other immune-complex states. Medulla (cords/sinuses) → macrophage-plasma cell traffic in early responses. Whole-node effacement → consider lymphoma; the zoning exam question is about the first three.",
      },
      {
        lookAlike: "The mediastinal mass in an adult vs a neonate",
        differentiator: "Age + cell type",
        correctPath:
          "Neonate: a sail-shaped upper mediastinal density is the NORMAL thymus on CXR — it involutes by age 3 and must not be called a mass. Adult: anterosuperior mediastinal mass with myasthenia gravis, SVC syndrome, pure red cell aplasia, or Good syndrome = thymoma; absent thymic shadow in an immunodeficiency workup points to SCID or DiGeorge.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man presents with three weeks of early satiety, weight loss, and a firm, painless mass in his left supraclavicular fossa. He has smoked a pack daily for 40 years. On examination the mass is fixed and non-tender; the abdomen is soft with mild epigastric tenderness. CT of the chest, abdomen, and pelvis shows asymmetric wall thickening of the stomach, several enlarged para-aortic nodes, and the supraclavicular mass. An excisional biopsy of the supraclavicular node is planned, and the pathologist asks which lymphatic route carried the tumor there.",
      question:
        "Which structure directly explains the spread of this gastric tumor to the left supraclavicular node, and what is the standard name of this finding?",
      options: [
        {
          label: "A",
          text: "The thoracic duct, which drains the abdomen (including the stomach) and crosses to the left subclavian–internal jugular junction near the left supraclavicular nodes — a Virchow node",
          correct: true,
          why: "Correct — gastric malignancy drains via the thoracic duct to the junction of the left subclavian and internal jugular veins, seeding the left supraclavicular (Virchow) node. The para-aortic chain (testes, ovaries, kidneys, uterine fundus) is the other abdominal route on the CT, but the supraclavicular signature belongs to the thoracic duct.",
        },
        {
          label: "B",
          text: "The right lymphatic duct, which drains the right hemithorax into the right supraclavicular nodes",
          why: "The right lymphatic duct only drains the right side of the body ABOVE the diaphragm — it cannot carry a gastric tumor to the left side.",
        },
        {
          label: "C",
          text: "Retrograde spread through the periumbilical (Sister Mary Joseph) venous plexus",
          why: "The Sister Mary Joseph node is a periumbilical nodal metastasis of gastric cancer, but it is a node-cluster phenomenon of the abdominal wall drainage, not the supraclavicular route.",
        },
        {
          label: "D",
          text: "The celiac nodal chain directly anastomosing with the supraclavicular chain",
          why: "The celiac nodes drain the liver, stomach, spleen, pancreas, and upper duodenum, but they do not directly reach the supraclavicular fossa — the thoracic duct is the connecting highway.",
        },
        {
          label: "E",
          text: "Hematogenous spread through the portal vein to the systemic circulation",
          why: "Portal-systemic spread explains liver and lung metastases, not a solitary left supraclavicular node — the classic route to Virchow node is lymphatic via the thoracic duct.",
        },
      ],
      reasoning:
        "The question tests the one drainage rule that ties an abdomen examination finding to a neck mass: everything below the diaphragm drains through the thoracic duct, which empties at the junction of the LEFT subclavian and internal jugular veins. A left supraclavicular node in any adult with abdominal symptoms is Virchow node until proven otherwise — gastric cancer is the classic primary (and the source's own periumbilical Sister Mary Joseph node shares the gastric-cancer association). The right lymphatic duct is deliberately placed as a distractor because it is the other half of the two-duct rule: right side above the diaphragm only.",
    },
  },
  mnemonics: [
    {
      code: "\u201cT cells = Thymus. B cells = Bone marrow.\u201d",
      meaning:
        "The source's own printed pairing: the two 1° organs name their lymphocyte lineages — the thymus maturation-matures T cells, the bone marrow produces immune cells and matures B cells.",
      memorizes: "Which 1° organ makes which lymphocyte",
      whenToUse: "Any 1°-vs-2°-organ or lymphocyte-origin question.",
      clinical: "Absent thymic shadow (SCID, DiGeorge) means no T-cell maturation; bone marrow failure hits all lines.",
    },
    {
      code: "\u201cThymus FADES.\u201d",
      meaning:
        "The source's own mnemonic for thymic involution: Fatty replacement of tissue due to age-related Atrophy (accelerated after puberty); Decline in naïve T cells (↓IL-7, thymopoietin); Elderly immunosenescence (↓ vaccine response); Size, cellularity, function all decline — partly reversible when cortisol falls.",
      memorizes: "What thymic involution does",
      whenToUse: "Any thymic-involution or elderly-immune-response question.",
      clinical: "Explains weaker vaccine responses in the elderly and the fatty mediastinal remnant seen on adult imaging.",
    },
    {
      code: "\u201cPop-lateral drains lateral; medial goes to the groin.\u201d",
      meaning:
        "KYP's key for the foot drainage split: the dorsolateral foot and posterior calf drain to the POPLITEAL nodes ('pop-lateral'), while the medial foot and leg drain up to the superficial inguinal nodes.",
      memorizes: "Popliteal vs superficial inguinal foot territories",
      whenToUse: "Any foot/leg cellulitis or node-cluster question.",
      clinical: "Lateral foot cellulitis → popliteal adenopathy; medial foot/leg cellulitis → superficial inguinal (the source lists it explicitly).",
    },
  ],
  rapidReview: {
    s30: [
      "1° organs: bone marrow (B cells), thymus (T cells); 2° organs: spleen, nodes, tonsils, adenoids, appendix, Peyer patches",
      "Lymph node zones: outer cortex = B-cell follicles; paracortex = T cells + HEVs; medulla = cords + macrophage-lined sinuses",
      "DiGeorge → underdeveloped paracortex; EBV/viral → paracortical hyperplasia → lymphadenopathy",
      "Right lymphatic duct: right side above diaphragm; thoracic duct: everything else (rupture → chylothorax)",
    ],
    m3: [
      "Virchow node (left supraclavicular) = thoracic duct drainage of abdomen/pelvis — gastric cancer classic",
      "Sister Mary Joseph node (periumbilical) = gastric cancer; unilateral hilar = pulmonary TB; bilateral hilar = sarcoidosis",
      "Spleen: PALS = T cells around central artery; follicle = B cells; marginal zone = macrophages + specialized B cells (APC antigen capture)",
      "Asplenia: ↓IgM → ↓complement activation → ↓C3b → encapsulated organisms; vaccinate pneumococci > meningococci > Hib",
    ],
    m10: [
      "Postsplenectomy smear: Howell-Jolly bodies, target cells, thrombocytosis, lymphocytosis",
      "Thymus: cortex immature T cells, medulla mature + Hassall corpuscles; 3rd pharyngeal pouch (endoderm) epithelium",
      "Thymoma: myasthenia gravis, SVC syndrome, pure red cell aplasia, Good syndrome",
      "Thymus FADES: Fatty replacement, Atrophy, Decline in naïve T cells, Elderly immunosenescence, Size/cellularity/function ↓",
    ],
  },
  recall: [
    {
      q: "Name the 1° and 2° immune system organs and the single function the 2° organs share.",
      a: "1°: bone marrow (immune cell production, B-cell maturation) and thymus (T-cell maturation). 2°: spleen, lymph nodes, tonsils, adenoids, appendix, Peyer patches — all allow immune cells to interact with antigen.",
    },
    {
      q: "Give the three lymph node zones, the lymphocyte that lives in each, and the clinical pair attached to the paracortex.",
      a: "Outer cortex follicles = B-cell localization and proliferation (1° dense/quiescent, 2° active with pale germinal centers and mantle zones). Paracortex (between follicles and medulla) = T cells + high endothelial venules (T- and B-cell entry from blood). Medulla = medullary cords (lymphocytes, plasma cells) and sinuses (reticular cells, macrophages) communicating with efferent lymphatics. Paracortex: underdeveloped in DiGeorge; paracortical hyperplasia in EBV/viral infection (lymphadenopathy).",
    },
    {
      q: "Which vessel do T and B cells use to enter a lymph node from the blood, and in which zone does it sit?",
      a: "High endothelial venules (postcapillary), located in the paracortex.",
    },
    {
      q: "State the drainage territories of the right lymphatic duct and the thoracic duct, including their venous terminations and the classic injury of the latter.",
      a: "Right lymphatic duct: right side of the body above the diaphragm → junction of the right subclavian and internal jugular veins. Thoracic duct: below the diaphragm + left thorax and upper limb → junction of the left subclavian and internal jugular veins; rupture can cause chylothorax.",
    },
    {
      q: "Which three lymph node clusters carry a gastric-cancer association, and which two carry the hilar-infiltration pattern?",
      a: "Gastric cancer: left supraclavicular (Virchow node, via the thoracic duct from abdomen/pelvis) and periumbilical (Sister Mary Joseph node). Hilar: pulmonary TB gives unilateral hilar adenopathy; sarcoidosis gives bilateral hilar adenopathy (lung cancer and granulomatous disease also involve the hilar/mediastinal region).",
    },
    {
      q: "Map the spleen's white pulp: which cells form the periarteriolar lymphoid sheath, the follicle, and the marginal zone, and what happens in the marginal zone?",
      a: "PALS = T cells surrounding the central artery; follicle = B cells (with germinal center and mantle zone when active); marginal zone = macrophages and specialized B cells, the site where antigen-presenting cells capture blood-borne antigens for recognition by lymphocytes — located between red pulp and white pulp.",
    },
    {
      q: "Walk through the postsplenectomy cascade and the four blood findings.",
      a: "Splenic dysfunction (postsplenectomy, sickle cell autosplenectomy) → ↓IgM response → ↓complement activation → ↓C3b opsonization → susceptibility to encapsulated organisms (vaccinate: pneumococci, meningococci, Hib — most to least common). Blood: Howell-Jolly bodies (nuclear remnants), target cells, thrombocytosis, lymphocytosis (loss of sequestration and removal).",
    },
    {
      q: "Describe the thymus: location, embryologic origins, histology, the neonatal finding, and the four thymoma associations.",
      a: "Anterosuperior mediastinum; site of T-cell differentiation and maturation; epithelium from the third pharyngeal pouch (endoderm), lymphocytes of mesodermal origin; cortex dense with immature T cells, medulla pale with mature T cells and Hassall corpuscles (epithelial reticular cells). Normal neonatal thymus is sail-shaped on CXR, involutes by age 3. Thymoma: myasthenia gravis, SVC syndrome, pure red cell aplasia, Good syndrome.",
    },
  ],
  related: [
    {
      title: "Hypersensitivity Types & Transfusion Reactions",
      topicId: "hypersensitivity-types",
      note: "The lymph node and spleen are where the hypersensitivity mechanisms of the pilot note play out — immune-complex deposition in the follicles, T-cell arms in the paracortex.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The thymus introduced here is where positive and negative selection happen (next Immunology topic in book order).",
    },
    {
      title: "Innate vs Adaptive Immunity",
      topicId: "innate-vs-adaptive-immunity",
      note: "The macrophage filtration of the medullary sinuses is the innate layer of the node; the follicle and paracortex are the adaptive layer.",
    },
    {
      title: "Cystic Fibrosis & CFTR",
      topicId: "cystic-fibrosis",
      note: "The spleen-and-encapsulated-organism axis is a useful contrast: CF loses pancreatic enzymes and mucociliary clearance; asplenia loses the IgM–C3b opsonization axis.",
    },
  ],
  crossLinks: [
    {
      subject: "Anatomy & Surgery (Vascular)",
      connection: "Thoracic duct anatomy at the left subclavian–internal jugular junction explains chylothorax after thoracic surgery and the Virchow node's territory.",
    },
    {
      subject: "Hematology",
      connection: "Howell-Jolly bodies, target cells, thrombocytosis, and lymphocytosis are the postsplenectomy smear quartet — also seen in sickle cell autosplenectomy.",
    },
    {
      subject: "Endocrine (Reproductive)",
      connection: "The pectinate-line rule: internal iliac drains cervix/proximal vagina/prostate; superficial inguinal drains the vulva/scrotum/distal anus — the drainage map is the staging map.",
    },
    {
      subject: "Neurology & Psychiatry (Myasthenia)",
      connection: "A mediastinal mass with fluctuating weakness: thymoma is associated with myasthenia gravis, SVC syndrome, pure red cell aplasia, and Good syndrome.",
    },
  ],
};
