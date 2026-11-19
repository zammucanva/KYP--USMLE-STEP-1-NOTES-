import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 18). Source: pdf 244–245 / book
// 222–223 (Oncogenic microbes + Serum tumor markers on 222; Cancer testing +
// Important immunohistochemical stains + P-glycoprotein on 223 — the
// DIAGNOSTIC layer of neoplasia: the marker-use rule, the 8-row mICrOBe /
// ASSOCIATeD CAnCer table, the 12-row mArKer / ImPOrTAnT ASSOCIATIOnS /
// nOTeS table, the 5-row Cancer testing block, the 10-row STAIn / TArGeT /
// TUmOrS IDenTIfIeD table, and the P-glycoprotein/MDR1 paragraph). Census
// (pdfimages + VLM): ZERO raster images on both pages — pure tables and
// text blocks, so the registry visual is a pure ORIGINAL KYP ADAPTATION
// (the rule trio, the microbe roster as pathogen→cancer pairs, the serum
// dashboard grid, the modern-diagnostics panel, the IHC lineage map, and
// the P-glycoprotein efflux glyph). NO margin notes or mnemonics print on
// either page (VLM census confirmed); the KYP memory layer is original.
// The source prints its own quirks that are PRESERVED verbatim in the
// tables: HHV-8's cancer prints Kaposi ("Ka∞si") sarcoma — the source's
// own infinity-symbol joke on the doubled "o"; Calcitonin's note prints
// "Calci2nin." (the 2 of MEN2); CEA's note prints "CarcinoEmbryonic
// Antigen. Very nonspecific."; PSA's note prints "Prostate-Specific
// Antigen—monitor recurrence/response; uncertain risk/benefit for
// screening. Also ↑ in BPH/prostatitis."; and every table header uses the
// book's odd embedded-capitals styling (mICrOBe / ASSOCIATeD CAnCer /
// mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS / STAIn / TArGeT / TUmOrS
// IDenTIfIeD). In the raw text layer the page-244 footer line interleaves
// inside the PSA row (physical order) and the P-glycoprotein paragraph's
// "↓" prints as a control glyph — both documented in the staging manifest.

export const tumorMarkersMolecular: KypUsMLENote = {
  id: "tumor-markers-molecular",
  title: "Tumor Markers, Molecular Diagnostics & IHC",
  subtitle:
    "The diagnostic layer of neoplasia (book 222–223) — ONE RULE and FOUR PANELS, plus one resistance pump. THE RULE: tumor markers should not be used as the 1° tool for cancer diagnosis or screening — they may be used to monitor tumor recurrence and response to therapy, definitive diagnosis is made via biopsy, and some are associated with non-neoplastic conditions. PANEL 1 — the oncogenic-microbe roster (8 rows): EBV (Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma in immunocompromised patients); HBV and HCV (hepatocellular carcinoma); HHV-8 (Kaposi [“Ka∞si”] sarcoma); HPV usually types 16 and 18 (cervical and penile/anal carcinoma, head and neck cancer); H pylori (gastric adenocarcinoma and MALT lymphoma); HTLV-1 (adult T-cell leukemia/lymphoma); the liver fluke Clonorchis sinensis (cholangiocarcinoma); Schistosoma haematobium (squamous cell bladder cancer). PANEL 2 — the serum-marker dashboard (12 rows, NOTES column verbatim): alkaline phosphatase (metastases to bone or liver, Paget disease of bone, seminoma [PLAP] — exclude hepatic origin by checking LFTs and GGT levels); α-fetoprotein (HCC, endodermal sinus [yolk sac] tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects — normally made by fetus, transiently elevated in pregnancy: HIGH with neural tube and abdominal wall defects, LOW with Down syndrome); hCG (gestational trophoblastic disease, testicular cancer, mixed germ cell tumor — produced by syncytiotrophoblasts); CA 15-3/CA 27-29 (breast); CA 19-9 (pancreatic adenocarcinoma); CA 125 (epithelial ovarian); calcitonin (medullary thyroid carcinoma alone and in MEN2A, MEN2B — “Calci2nin.”); CEA (colorectal and pancreatic cancers — CarcinoEmbryonic Antigen, very nonspecific); chromogranin (neuroendocrine tumors); LDH (testicular germ cell tumors, ovarian dysgerminoma — an indicator of tumor burden); neuron-specific enolase (small cell lung cancer, carcinoid tumor, neuroblastoma); PSA (prostate cancer — monitor recurrence/response, uncertain risk/benefit for screening, also ↑ in BPH/prostatitis). PANEL 3 — the modern molecular panel (5 tests): tumor mutational burden (predicts response to immune-checkpoint inhibitors); microsatellite instability testing (mismatch repair — the hallmark of Lynch syndrome; prognosis and treatment in colorectal and endometrial carcinoma); PD-L1 expression patterns (NSCLC, urothelial carcinoma — targeted with anti-PD-L1 and anti-PD1 antibodies); homologous recombination deficiency testing (breast, ovarian — may respond to PARP inhibitors); liquid biopsy (ctDNA, ctRNA, CTCs in blood or urine — cancer profiling, treatment monitoring, post-treatment surveillance). PANEL 4 — the immunohistochemical lineage tracers (10 stains): chromogranin + synaptophysin (neuroendocrine), cytokeratin (epithelial), desmin (muscle), GFAP (neuroglia), neurofilament (neurons), PSA (prostatic epithelium), PECAM-1/CD-31 (endothelial), S-100 (neural crest), TRAP (hairy cell leukemia), vimentin (mesenchymal — but also many other tumors). Plus P-glycoprotein (MDR1), the ATP-dependent efflux pump that exports chemotherapeutic agents — one mechanism of ↓ responsiveness or resistance to chemotherapy over time.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete two-page diagnostic directory — the marker-use rule (not the 1° tool for diagnosis or screening; monitor recurrence and response; biopsy is definitive; non-neoplastic confounders), the 8-row oncogenic-microbe roster, the 12-row serum-marker dashboard with its verbatim NOTES column (the AFP pregnancy fork and the PSA BPH/prostatitis trap), the 5-test molecular panel (TMB, MSI-Lynch, PD-L1, HRD-PARP, liquid biopsy), the 10-stain immunohistochemical lineage map, and the P-glycoprotein/MDR1 resistance pump — with the source's own printed quirks (“Ka∞si”, “Calci2nin.”, the odd-cap table headers) carried verbatim.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 222–223 (Pathology — Neoplasia: Oncogenic microbes [the 8-row mICrOBe / ASSOCIATeD CAnCer table]; Serum tumor markers [the marker-use rule and the 12-row mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS table]; Cancer testing [tumor mutational burden, microsatellite instability testing, PD-L1 expression patterns, homologous recombination deficiency testing, liquid biopsy]; Important immunohistochemical stains [the 10-row STAIn / TArGeT / TUmOrS IDenTIfIeD table]; P-glycoprotein [MDR1])",
  tags: [
    "tumor marker",
    "serum tumor markers",
    "marker-use rule",
    "screening vs monitoring",
    "biopsy",
    "PSA",
    "prostate-specific antigen",
    "BPH",
    "prostatitis",
    "AFP",
    "alpha-fetoprotein",
    "neural tube defects",
    "Down syndrome",
    "hCG",
    "gestational trophoblastic disease",
    "hydatidiform mole",
    "choriocarcinoma",
    "syncytiotrophoblast",
    "testicular cancer",
    "yolk sac tumor",
    "endodermal sinus tumor",
    "mixed germ cell tumor",
    "CA 15-3",
    "CA 27-29",
    "breast cancer marker",
    "CA 19-9",
    "pancreatic adenocarcinoma",
    "CA 125",
    "epithelial ovarian cancer",
    "calcitonin",
    "medullary thyroid carcinoma",
    "MEN2A",
    "MEN2B",
    "CEA",
    "carcinoembryonic antigen",
    "chromogranin",
    "LDH",
    "tumor burden",
    "neuron-specific enolase",
    "alkaline phosphatase",
    "PLAP",
    "Paget disease of bone",
    "LFTs",
    "GGT",
    "oncogenic microbes",
    "EBV",
    "Burkitt lymphoma",
    "Hodgkin lymphoma",
    "nasopharyngeal carcinoma",
    "primary CNS lymphoma",
    "HBV",
    "HCV",
    "hepatocellular carcinoma",
    "HHV-8",
    "Kaposi sarcoma",
    "HPV",
    "types 16 and 18",
    "cervical carcinoma",
    "penile and anal carcinoma",
    "head and neck cancer",
    "H pylori",
    "gastric adenocarcinoma",
    "MALT lymphoma",
    "HTLV-1",
    "adult T-cell leukemia/lymphoma",
    "Clonorchis sinensis",
    "liver fluke",
    "cholangiocarcinoma",
    "Schistosoma haematobium",
    "squamous cell bladder cancer",
    "cancer testing",
    "tumor mutational burden",
    "immune-checkpoint inhibitors",
    "microsatellite instability",
    "mismatch repair",
    "Lynch syndrome",
    "PD-L1 expression",
    "NSCLC",
    "urothelial carcinoma",
    "anti-PD-L1",
    "anti-PD1",
    "homologous recombination deficiency",
    "PARP inhibitors",
    "liquid biopsy",
    "ctDNA",
    "ctRNA",
    "circulating tumor cells",
    "immunohistochemistry",
    "IHC stains",
    "cytokeratin",
    "epithelial cells",
    "squamous cell carcinoma",
    "desmin",
    "rhabdomyosarcoma",
    "GFAP",
    "neuroglia",
    "astrocytoma",
    "glioblastoma",
    "neurofilament",
    "neuroblastoma",
    "PECAM-1",
    "CD-31",
    "endothelial cells",
    "angiosarcoma",
    "S-100",
    "neural crest",
    "melanoma",
    "schwannoma",
    "Langerhans cell histiocytosis",
    "TRAP",
    "tartrate-resistant acid phosphatase",
    "hairy cell leukemia",
    "vimentin",
    "mesenchymal tumors",
    "P-glycoprotein",
    "MDR1",
    "multidrug resistance protein 1",
    "ATP-dependent efflux pump",
    "chemotherapy resistance",
  ],
  core: {
    what:
      "ONE RULE + FOUR PANELS + ONE PUMP. THE RULE (book 222, verbatim): Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions. PANEL 1 — ONCOGENIC MICROBES (mICrOBe / ASSOCIATeD CAnCer, all 8 rows): EBV — Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients); HBV, HCV — hepatocellular carcinoma; HHV-8 — Kaposi (“Ka∞si”) sarcoma; HPV (usually types 16, 18) — cervical and penile/anal carcinoma, head and neck cancer; H pylori — gastric adenocarcinoma and MALT lymphoma; HTLV-1 — Adult T-cell Leukemia/Lymphoma; Liver fluke (Clonorchis sinensis) — cholangiocarcinoma; Schistosoma haematobium — squamous cell bladder cancer. PANEL 2 — SERUM TUMOR MARKERS (mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS, all 12 rows with NOTES verbatim): Alkaline phosphatase — metastases to bone or liver, Paget disease of bone, seminoma (PLAP) — exclude hepatic origin by checking LFTs and GGT levels. α-fetoprotein — hepatocellular carcinoma, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects — normally made by fetus; transiently elevated in pregnancy; high levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome. hCG — hydatidiform moles and choriocarcinomas (gestational trophoblastic disease), testicular cancer, mixed germ cell tumor — produced by syncytiotrophoblasts of the placenta. CA 15-3/CA 27-29 — breast cancer. CA 19-9 — pancreatic adenocarcinoma. CA 125 — epithelial ovarian cancer. Calcitonin — medullary thyroid carcinoma (alone and in MEN2A, MEN2B) — “Calci2nin.” CEA — colorectal and pancreatic cancers (minor associations: gastric, breast, and medullary thyroid carcinomas) — CarcinoEmbryonic Antigen; very nonspecific. Chromogranin — neuroendocrine tumors. LDH — testicular germ cell tumors, ovarian dysgerminoma, other cancers — can be used as an indicator of tumor burden. Neuron-specific enolase — neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma). PSA — prostate cancer — Prostate-Specific Antigen; monitor recurrence/response; uncertain risk/benefit for screening; also ↑ in BPH/prostatitis. PANEL 3 — CANCER TESTING (5 rows): Tumor mutational burden — total number of mutations present in cancer cells; may predict response to certain treatments (eg, immune-checkpoint inhibitors). Microsatellite instability testing — assesses deficits in the mismatch repair pathway (hallmark of Lynch syndrome); used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma). PD-L1 expression patterns — PD-L1 expressed to varying degrees in certain cancers (eg, NSCLC, urothelial carcinoma); may be targeted with anti-PD-L1 and anti-PD1 antibodies. Homologous recombination deficiency testing — identifies cancer types with genetic abnormalities and genomic instability (eg, breast, ovarian) that may respond to certain treatments (eg, PARP inhibitors). Liquid biopsy — noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer); aids in early metastatic detection and personalized therapy. PANEL 4 — IMPORTANT IMMUNOHISTOCHEMICAL STAINS (STAIn / TArGeT / TUmOrS IDenTIfIeD, all 10 rows): Chromogranin and synaptophysin — neuroendocrine cells — small cell carcinoma of the lung, carcinoid tumor, neuroblastoma. Cytokeratin — epithelial cells — epithelial tumors (eg, squamous cell carcinoma). Desmin — muscle — muscle tumors (eg, rhabdomyosarcoma). GFAP — NeuroGlia (eg, astrocytes, Schwann cells, oligodendrocytes) — astrocytoma, glioblastoma. Neurofilament — neurons — neuronal tumors (eg, neuroblastoma). PSA — prostatic epithelium — prostate cancer. PECAM-1/CD-31 — endothelial cells — vascular tumors (eg, angiosarcoma). S-100 — neural crest cells — melanoma, schwannoma, Langerhans cell histiocytosis. TRAP — tartrate-resistant acid phosphatase — hairy cell leukemia. Vimentin — mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages) — mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma). The stains determine the primary site of origin for metastatic tumors and characterize tumors that are difficult to classify; they can have prognostic and predictive value. THE PUMP: P-glycoprotein — an ATP-dependent efflux pump, also called multidrug resistance protein 1 (MDR1); expressed in some cancer cells to pump out toxins, including chemotherapeutic agents (one mechanism of ↓ responsiveness or resistance to chemotherapy over time).",
    why:
      "This page pair is neoplasia's diagnostic control panel, and everything on it hangs on one division of labor: the serum tracks, the tissue names, and the genome guides. Tumor markers are not gatekeepers — the printed rule says so three ways: they are NOT the 1° tool for cancer diagnosis or screening (PSA's own note carries the caveat 'uncertain risk/benefit for screening'); they ARE used to monitor tumor recurrence and response to therapy (PSA: monitor recurrence/response; LDH: an indicator of tumor burden); and the definitive diagnosis is made via biopsy. Worse for the careless reader, some markers rise in non-neoplastic conditions — BPH and prostatitis elevate PSA, pregnancy transiently elevates AFP, and an elevated alkaline phosphatase could be metastases to bone, Paget disease of bone, seminoma (PLAP), or simply liver (exclude hepatic origin by checking LFTs and GGT levels). Around that rule the page arranges its rosters. The oncogenic-microbe table reads as eight residence rules — cancer grows where the microbe lives: EBV in B lymphocytes (Burkitt, Hodgkin, nasopharyngeal carcinoma, 1° CNS lymphoma in the immunocompromised), HBV/HCV in hepatocytes (HCC), HHV-8 in endothelium (Kaposi sarcoma — printed with the source's own 'Ka∞si' joke), HPV 16/18 in squamous epithelium (cervical, penile/anal, head and neck), H pylori in gastric mucosa (adenocarcinoma and MALT lymphoma), HTLV-1 in T cells (adult T-cell leukemia/lymphoma), Clonorchis sinensis in the bile ducts (cholangiocarcinoma), and Schistosoma haematobium in the bladder (squamous cell carcinoma). The serum dashboard pairs each marker with its tumors AND its note — AFP's pregnancy fork (high = neural tube and abdominal wall defects; low = Down syndrome), hCG's syncytiotrophoblast origin, calcitonin's 'Calci2nin.' (the 2 of MEN2), CEA's 'very nonspecific' warning, and the CA set (15-3/27-29 breast, 19-9 pancreatic, 125 epithelial ovarian). The cancer-testing block is the modern layer — tests that SELECT therapy rather than detect disease: TMB counts mutations to predict checkpoint-inhibitor response; MSI reads mismatch repair (Lynch) to set prognosis and treatment in colorectal and endometrial carcinoma; PD-L1 expression (NSCLC, urothelial) opens the anti-PD-L1/anti-PD1 door; HRD testing (breast, ovarian) opens the PARP-inhibitor door; and liquid biopsy reads ctDNA, ctRNA, or CTCs from blood or urine for profiling (EGFR in lung cancer), treatment monitoring, and post-treatment surveillance. The IHC table is an embryonic-lineage map dressed as a stain list — cytokeratin traces epithelium, desmin muscle, GFAP neuroglia, neurofilament neurons, S-100 the neural crest, PECAM-1/CD-31 endothelium, vimentin mesenchyme (with false friends: endometrial carcinoma, renal cell carcinoma, meningioma), chromogranin + synaptophysin the neuroendocrine program, PSA the prostatic epithelium, and TRAP hairy cell leukemia. And P-glycoprotein closes the page with the resistance lesson: an ATP-dependent efflux pump (MDR1) that exports chemotherapeutic agents, one mechanism of ↓ responsiveness or resistance to chemotherapy over time.",
    keyIdea:
      "Read every marker question through three frames. FRAME 1 — THE USE RULE (monitor, don't screen; biopsy defines): a marker value is never a diagnosis — it monitors tumor recurrence and response to therapy in KNOWN disease, its screening role is explicitly limited (PSA: 'uncertain risk/benefit for screening'), non-neoplastic confounders raise it (PSA in BPH/prostatitis, AFP in pregnancy, ALP in Paget disease of bone or hepatic origin — check LFTs and GGT), and definitive diagnosis is made via biopsy. FRAME 2 — THE ROSTERS (name the marker, name the microbe, name the test): the serum dashboard — ALP (metastases to bone/liver, Paget disease of bone, seminoma [PLAP]), AFP (HCC, yolk sac, mixed germ cell, ataxia-telangiectasia, neural tube defects; high in pregnancy = neural tube and abdominal wall defects, low = Down syndrome), hCG (gestational trophoblastic disease, testicular cancer; syncytiotrophoblasts), CA 15-3/CA 27-29 (breast), CA 19-9 (pancreatic adenocarcinoma), CA 125 (epithelial ovarian), calcitonin (medullary thyroid carcinoma, alone and in MEN2A/MEN2B — 'Calci2nin.'), CEA (colorectal and pancreatic; very nonspecific), chromogranin (neuroendocrine), LDH (testicular germ cell tumors, ovarian dysgerminoma; tumor burden), neuron-specific enolase (small cell lung cancer, carcinoid, neuroblastoma), PSA (prostate; ↑ in BPH/prostatitis); the microbe roster — EBV, HBV/HCV, HHV-8, HPV 16/18, H pylori, HTLV-1, Clonorchis sinensis, Schistosoma haematobium, each with the cancer of the tissue it lives in; and the molecular panel — TMB (checkpoint inhibitors), MSI (Lynch/mismatch repair; colorectal, endometrial), PD-L1 (NSCLC, urothelial; anti-PD-L1/anti-PD1), HRD (breast, ovarian; PARP inhibitors), liquid biopsy (ctDNA/ctRNA/CTCs; profiling, monitoring, surveillance). FRAME 3 — THE LINEAGE MAP (the stain names the origin): a tumor of unknown primary gets traced back through its embryonic lineage — cytokeratin → epithelial (eg, squamous cell carcinoma); chromogranin + synaptophysin → neuroendocrine (small cell lung, carcinoid, neuroblastoma); desmin → muscle (rhabdomyosarcoma); GFAP → neuroglia (astrocytoma, glioblastoma); neurofilament → neurons (neuroblastoma); S-100 → neural crest (melanoma, schwannoma, Langerhans cell histiocytosis); PECAM-1/CD-31 → endothelial (angiosarcoma); vimentin → mesenchymal (sarcoma — but also endometrial carcinoma, renal cell carcinoma, meningioma); PSA → prostatic epithelium (prostate cancer); TRAP → hairy cell leukemia. And when chemotherapy stops working, ask about P-glycoprotein (MDR1) — the ATP-dependent efflux pump exporting the drugs.",
  },
  mechanisms: [
    {
      id: "marker-use-rule-map",
      title: "The marker-use rule: monitor, don't screen — and biopsy defines",
      context: "The rule paragraph printed between the microbes table and the serum-marker table (book 222)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A serum tumor-marker value arrives on a lab report",
            sublabel:
              "Input — an elevated marker in a patient (PSA 7 in a man with urinary symptoms, AFP in a pregnant woman, ALP in a patient with bone pain). Before interpreting the number, run it through the three-question rule the source prints between its tables.",
            variant: "input",
          },
          {
            id: "not-screen",
            label: "QUESTION 1 — IS IT A DIAGNOSIS OR A SCREEN? (No)",
            sublabel:
              "Tumor markers should not be used as the 1° tool for cancer diagnosis or screening — the rule's first sentence. PSA's own note carries the same caution twice over: 'Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening.' No marker, however elevated, names a cancer.",
            variant: "process",
          },
          {
            id: "confounder",
            label: "QUESTION 2 — IS ANYTHING ELSE RAISING IT? (Confounders)",
            sublabel:
              "Some can be associated with non-neoplastic conditions — the rule's third sentence, made concrete by its own table: PSA is also ↑ in BPH/prostatitis; AFP is normally made by the fetus and transiently elevated in pregnancy (high levels = neural tube and abdominal wall defects; low levels = Down syndrome); alkaline phosphatase rises in Paget disease of bone and in hepatic origin (exclude it by checking LFTs and GGT levels); CEA is 'very nonspecific' with minor associations in gastric, breast, and medullary thyroid carcinomas.",
            variant: "process",
          },
          {
            id: "monitor",
            label: "QUESTION 3 — WHAT CAN IT LEGITIMATELY DO? (Monitor)",
            sublabel:
              "They may be used to monitor tumor recurrence and response to therapy — the rule's middle sentence, and the printed job description of the dashboard: PSA monitors recurrence/response; LDH can be used as an indicator of tumor burden; liquid biopsy (the modern extension) adds treatment monitoring and post-treatment surveillance to the same task.",
            variant: "process",
          },
          {
            id: "output",
            label: "THE ANSWER — BIOPSY DEFINES",
            sublabel:
              "Output — definitive diagnosis is made via biopsy. The serum tracks the disease; the tissue names it. On the modern panel, tissue also GUIDES therapy (TMB, MSI, PD-L1, HRD) and the liquid biopsy profiles and surveils — but the definition of the disease itself still comes from the needle.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "not-screen", label: "the 1°-tool veto" },
          { from: "not-screen", to: "confounder", label: "check the non-neoplastic causes" },
          { from: "confounder", to: "monitor", label: "the legitimate use" },
          { from: "monitor", to: "output", label: "tissue, not serum, names the disease" },
        ],
      },
    },
    {
      id: "stain-lineage-map",
      title: "The immunohistochemical lineage map: stains trace where a tumor came from",
      context: "The Important immunohistochemical stains block (book 223)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A metastatic tumor of unknown primary — or a tumor difficult to classify",
            sublabel:
              "Input — the block's printed purpose: determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify; the stains can have prognostic and predictive value. The biopsy exists; now the panel reads its lineage.",
            variant: "input",
          },
          {
            id: "lineage",
            label: "THE LINEAGE TRACERS — stain the embryonic lineage, name the tumor",
            sublabel:
              "Cytokeratin → epithelial cells → epithelial tumors (eg, squamous cell carcinoma); Desmin → muscle → muscle tumors (eg, rhabdomyosarcoma); GFAP → NeuroGlia (astrocytes, Schwann cells, oligodendrocytes) → astrocytoma, glioblastoma; Neurofilament → neurons → neuronal tumors (eg, neuroblastoma); S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis; PECAM-1/CD-31 → endothelial cells → vascular tumors (eg, angiosarcoma); Vimentin → mesenchymal tissue (fibroblasts, endothelial cells, macrophages) → mesenchymal tumors (eg, sarcoma) — but also many other tumors (endometrial carcinoma, renal cell carcinoma, meningioma).",
            variant: "process",
          },
          {
            id: "specialty",
            label: "THE SPECIALTY STAINS — the neuroendocrine pair and the organ-specific pair",
            sublabel:
              "Chromogranin and synaptophysin → neuroendocrine cells → small cell carcinoma of the lung, carcinoid tumor, neuroblastoma (the same neuroendocrine program the serum panel reads through chromogranin and neuron-specific enolase); PSA → prostatic epithelium → prostate cancer (the same protein the serum panel monitors); TRAP (tartrate-resistant acid phosphatase) → hairy cell leukemia — the one stain that names a hematologic diagnosis outright.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the primary — and read the prognosis",
            sublabel:
              "Output — the panel resolves the unknown primary (a cytokeratin-positive, S-100-negative scalp nodule in a man with a lung mass is carcinoma, not melanoma; a chromogranin/synaptophysin-positive lung tumor is small cell carcinoma) and can carry prognostic and predictive value. Cross the aisle to the molecular panel for therapy selection: MSI for Lynch-linked colorectal and endometrial carcinoma, PD-L1 for NSCLC and urothelial carcinoma, HRD for breast and ovarian (PARP inhibitors).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "lineage", label: "biopsy the metastasis" },
          { from: "lineage", to: "specialty", label: "narrow with organ + program stains" },
          { from: "specialty", to: "output", label: "site of origin + prognostic/predictive value" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "tumor-marker-map",
      title: "The tumor-marker and molecular-diagnostics map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source pages (book 222–223): the top rule trio (NOT THE 1° TOOL / MONITOR / BIOPSY DEFINES) with the non-neoplastic confounder strip (BPH/prostatitis → PSA, pregnancy → AFP, Paget disease of bone and hepatic origin → ALP); the oncogenic-microbe roster as eight pathogen→cancer pairs; the serum-marker dashboard as a 12-cell grid with the AFP pregnancy fork highlighted and the PSA trap flagged; the modern cancer-testing panel as five cards (TMB, MSI-Lynch, PD-L1, HRD-PARP, liquid biopsy); the immunohistochemical lineage map tracing stains to their embryonic lineages and tumors; and the P-glycoprotein efflux-pump glyph exporting chemotherapeutic agents.",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on pdf 244–245 — pure tables and text blocks, adapted here as an ORIGINAL KYP visual with all four tables carried verbatim in the note's table blocks (no source reproduction). NO margin notes or mnemonics print on either page (VLM census confirmed); the KYP memory layer is original. The source's own quirks — HHV-8's Kaposi (“Ka∞si”) sarcoma and Calcitonin's “Calci2nin.” — are preserved as printed.",
    },
    {
      kind: "text",
      title: "Book 222 — the marker-use rule (the paragraph that governs the whole dashboard)",
      body: [
        "Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions.",
        "Read the rule as three instructions printed in one breath. First, the VETO: no marker makes a diagnosis and no marker screens an asymptomatic population as a primary tool — the table's own PSA row repeats it ('uncertain risk/benefit for screening'). Second, the JOB: markers track known disease — tumor recurrence and response to therapy — which is why LDH reads as 'an indicator of tumor burden' and why the modern liquid biopsy extends the same job to treatment monitoring and post-treatment surveillance. Third, the WARNING: non-neoplastic conditions move the numbers too — BPH and prostatitis raise PSA, pregnancy raises AFP (with the high/low fork below), and Paget disease of bone or hepatic origin raises alkaline phosphatase (exclude the hepatic contribution by checking LFTs and GGT levels). The biopsy — not the serum — defines.",
      ],
    },
    {
      kind: "table",
      title: "Book 222 — the Oncogenic microbes table (carried verbatim, all 8 rows)",
      intro:
        "The microbe roster, as printed: mICrOBe / ASSOCIATeD CAnCer (the source's own odd-capitals headers, preserved).",
      columns: ["mICrOBe", "ASSOCIATeD CAnCer"],
      rows: [
        ["EBV", "Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients)"],
        ["HBV, HCV", "Hepatocellular carcinoma"],
        ["HHV-8", "Kaposi (“Ka∞si”) sarcoma"],
        ["HPV (usually types 16, 18)", "Cervical and penile/anal carcinoma, head and neck cancer"],
        ["H pylori", "Gastric adenocarcinoma and MALT lymphoma"],
        ["HTLV-1", "Adult T-cell Leukemia/Lymphoma"],
        ["Liver fluke (Clonorchis sinensis)", "Cholangiocarcinoma"],
        ["Schistosoma haematobium", "Squamous cell bladder cancer"],
      ],
      caption:
        "Read the roster as eight residence rules — cancer grows where the microbe lives. EBV lives in B lymphocytes (Burkitt and Hodgkin lymphoma, nasopharyngeal carcinoma, and 1° CNS lymphoma when the host is immunocompromised); HBV and HCV live in hepatocytes (hepatocellular carcinoma); HHV-8 lives in endothelial cells (Kaposi sarcoma — printed with the source's own “Ka∞si” infinity-symbol joke, carried verbatim); HPV (usually types 16 and 18) lives in squamous epithelium (cervical and penile/anal carcinoma, head and neck cancer); H pylori lives in the gastric mucosa (gastric adenocarcinoma AND MALT lymphoma — the only bacterium on the list); HTLV-1 lives in T cells (adult T-cell leukemia/lymphoma); the liver fluke Clonorchis sinensis lives in the bile ducts (cholangiocarcinoma); and Schistosoma haematobium lives in the bladder (squamous cell bladder cancer — squamous, not transitional, because the worm's eggs drive chronic squamous metaplasia).",
    },
    {
      kind: "table",
      title: "Book 222 — the Serum tumor markers table (carried verbatim, all 12 rows with NOTES)",
      intro:
        "The dashboard, as printed: mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS (the source's own odd-capitals headers and NOTES column preserved verbatim; the source leaves the CA 15-3/CA 27-29, CA 19-9, CA 125, chromogranin, and neuron-specific enolase NOTES cells blank — shown here as —).",
      columns: ["mArKer", "ImPOrTAnT ASSOCIATIOnS", "nOTeS"],
      rows: [
        ["Alkaline phosphatase", "Metastases to bone or liver, Paget disease of bone, seminoma (PLAP).", "Exclude hepatic origin by checking LFTs and GGT levels."],
        ["α-fetoprotein", "Hepatocellular carcinoma, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects.", "Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome."],
        ["hCG", "Hydatidiform moles and Choriocarcinomas (Gestational trophoblastic disease), testicular cancer, mixed germ cell tumor.", "Produced by syncytiotrophoblasts of the placenta."],
        ["CA 15-3/CA 27-29", "Breast cancer.", "—"],
        ["CA 19-9", "Pancreatic adenocarcinoma.", "—"],
        ["CA 125", "Epithelial ovarian cancer.", "—"],
        ["Calcitonin", "Medullary thyroid carcinoma (alone and in MEN2A, MEN2B).", "Calci2nin."],
        ["CEA", "Colorectal and pancreatic cancers. Minor associations: gastric, breast, and medullary thyroid carcinomas.", "CarcinoEmbryonic Antigen. Very nonspecific."],
        ["Chromogranin", "Neuroendocrine tumors.", "—"],
        ["LDH", "Testicular germ cell tumors, ovarian dysgerminoma, other cancers.", "Can be used as an indicator of tumor burden."],
        ["Neuron-specific enolase", "Neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma).", "—"],
        ["PSA", "Prostate cancer.", "Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis."],
      ],
      caption:
        "Every row obeys the rule printed above the table: not the 1° tool for diagnosis or screening; monitor recurrence and response; biopsy defines. Read the dashboard in bands: the GERM CELL TRIO of the gonads — AFP (yolk sac, mixed germ cell, plus hepatocellular carcinoma and ataxia-telangiectasia), hCG (gestational trophoblastic disease and testicular cancer, from syncytiotrophoblasts), and LDH (testicular germ cell tumors and ovarian dysgerminoma, the tumor-burden indicator); the CA set — 15-3/CA 27-29 breast, 19-9 pancreatic adenocarcinoma, 125 epithelial ovarian; the endocrine pair — calcitonin for medullary thyroid carcinoma alone and in MEN2A/MEN2B (the source's own “Calci2nin.” mnemonic, the 2 of MEN 2, carried verbatim) and CEA, the CarcinoEmbryonic Antigen of colorectal and pancreatic cancers that is 'very nonspecific' with minor associations in gastric, breast, and medullary thyroid carcinomas; the neuroendocrine pair — chromogranin and neuron-specific enolase (small cell lung cancer, carcinoid tumor, neuroblastoma); and the two confounder-prone ones — alkaline phosphatase (metastases to bone or liver, Paget disease of bone, seminoma's PLAP — exclude hepatic origin by checking LFTs and GGT levels) and PSA (prostate cancer; monitor recurrence/response, uncertain risk/benefit for screening, and also ↑ in BPH/prostatitis). The AFP row carries the pregnancy fork the exam loves: high levels with neural tube and abdominal wall defects, low levels with Down syndrome.",
    },
    {
      kind: "table",
      title: "Book 223 — the Cancer testing block (carried verbatim, all 5 rows)",
      intro:
        "The modern molecular panel, as printed under the header 'Cancer testing' (the source prints no column-header row for this block; its two columns are shown here as TeST / DeSCRIPTION, following the book's odd-capitals styling).",
      columns: ["TeST", "DeSCRIPTION"],
      rows: [
        ["Tumor mutational burden", "Total number of mutations present in cancer cells. May predict response to certain treatments (eg, immune-checkpoint inhibitors)."],
        ["Microsatellite instability testing", "Assesses deficits in the mismatch repair pathway (hallmark of Lynch syndrome). Used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma)."],
        ["PD-L1 expression patterns", "PD-L1 expressed to varying degrees in certain cancers (eg, NSCLC, urothelial carcinoma). May be targeted with anti-PD-L1 and anti-PD1 antibodies."],
        ["Homologous recombination deficiency testing", "Identifies cancer types with genetic abnormalities and genomic instability (eg, breast, ovarian) that may respond to certain treatments (eg, PARP inhibitors)."],
        ["Liquid biopsy", "Noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer). Aids in early metastatic detection and personalized therapy."],
      ],
      caption:
        "These five tests do not detect cancer — they SELECT and TRACK therapy, each opening a different treatment door. Tumor mutational burden counts total mutations: the more neoantigens, the better the immune-checkpoint inhibitors may work. Microsatellite instability testing reads the mismatch repair pathway — the hallmark of Lynch syndrome — and sets prognosis and treatment in colorectal adenocarcinoma and endometrial carcinoma. PD-L1 expression patterns (NSCLC, urothelial carcinoma) mark tumors that may be targeted with anti-PD-L1 and anti-PD1 antibodies. Homologous recombination deficiency testing finds the genomic instability of BRCA-type disease (breast, ovarian) that may respond to PARP inhibitors. And the liquid biopsy — ctDNA, ctRNA, or circulating tumor cells drawn from blood or urine — profiles cancer (eg, EGFR in lung cancer), monitors treatment, and surveils after therapy (eg, in colorectal cancer), aiding early metastatic detection and personalized therapy; it is the molecular heir of the serum markers' monitoring job on the page before.",
    },
    {
      kind: "table",
      title: "Book 223 — the Important immunohistochemical stains table (carried verbatim, all 10 rows)",
      intro:
        "The lineage map, as printed. The block's printed intro: 'Determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify. Can have prognostic and predictive value.' Columns: STAIn / TArGeT / TUmOrS IDenTIfIeD (the source's own odd-capitals headers, preserved).",
      columns: ["STAIn", "TArGeT", "TUmOrS IDenTIfIeD"],
      rows: [
        ["Chromogranin and synaptophysin", "Neuroendocrine cells", "Small cell carcinoma of the lung, carcinoid tumor, neuroblastoma"],
        ["Cytokeratin", "Epithelial cells", "Epithelial tumors (eg, squamous cell carcinoma)"],
        ["Desmin", "Muscle", "Muscle tumors (eg, rhabdomyosarcoma)"],
        ["GFAP", "NeuroGlia (eg, astrocytes, Schwann cells, oligodendrocytes)", "Astrocytoma, Glioblastoma"],
        ["Neurofilament", "Neurons", "Neuronal tumors (eg, neuroblastoma)"],
        ["PSA", "Prostatic epithelium", "Prostate cancer"],
        ["PECAM-1/CD-31", "Endothelial cells", "Vascular tumors (eg, angiosarcoma)"],
        ["S-100", "Neural crest cells", "Melanoma, schwannoma, Langerhans cell histiocytosis"],
        ["TRAP", "Tartrate-resistant acid phosphatase", "Hairy cell leukemia"],
        ["Vimentin", "Mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages)", "Mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma)"],
      ],
      caption:
        "Every stain is a lineage tracer. The epithelial line: cytokeratin → epithelial tumors (eg, squamous cell carcinoma). The muscle line: desmin → rhabdomyosarcoma. The neuro lines: GFAP → NeuroGlia (astrocytes, Schwann cells, oligodendrocytes) → astrocytoma and glioblastoma; neurofilament → neurons → neuronal tumors (eg, neuroblastoma); chromogranin + synaptophysin → neuroendocrine cells → small cell carcinoma of the lung, carcinoid tumor, neuroblastoma. The neural crest line: S-100 → melanoma, schwannoma, Langerhans cell histiocytosis. The vascular line: PECAM-1/CD-31 → angiosarcoma. The mesenchymal line: vimentin → sarcomas — BUT the source warns 'but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma),' so vimentin-positivity never excludes an epithelial tumor. The two organ-specific rows: PSA → prostatic epithelium → prostate cancer (the same protein the serum panel monitors), and TRAP (tartrate-resistant acid phosphatase) → hairy cell leukemia. Together the panel determines the primary site of origin for metastatic tumors and characterizes the difficult-to-classify ones, with prognostic and predictive value.",
    },
    {
      kind: "text",
      title: "Book 223 — P-glycoprotein (MDR1): the efflux pump of chemotherapy resistance",
      body: [
        "P-glycoprotein is an ATP-dependent efflux pump, also called multidrug resistance protein 1 (MDR1). Expressed in some cancer cells to pump out toxins, including chemotherapeutic agents, it is one mechanism of ↓ responsiveness or resistance to chemotherapy over time.",
        "The pump closes the two-page diagnostic story with its therapy-side moral: diagnosis may start with a marker and end with a biopsy, but treatment succeeds only if the drug stays inside the cell. Cancer cells that express P-glycoprotein spend ATP to export the very agents sent to kill them — so a tumor that responded yesterday can resist today without a single new mutation in its drug target. Resistance here is transport, not target.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 27-year-old pregnant woman at 16 weeks' gestation has a markedly elevated maternal serum α-fetoprotein; a targeted ultrasound shows a fetal lumbosacral defect with protruding neural tissue.",
        discriminator: "AFP is normally made by the fetus and transiently elevated in pregnancy — HIGH levels associate with neural tube and abdominal wall defects; LOW levels associate with Down syndrome",
        concept: "The AFP pregnancy fork",
        answer:
          "AFP (α-fetoprotein) — associations: hepatocellular carcinoma, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects; note: normally made by fetus, transiently elevated in pregnancy, high levels with neural tube and abdominal wall defects, low levels with Down syndrome. The open lumbosacral defect (spina bifida/aplasia) pumps fetal AFP into amniotic fluid and maternal serum. The mirror-image stem — LOW AFP with a thickened nuchal translucency — points to Down syndrome.",
      },
      {
        stem: "A 62-year-old man presents with nocturia, hesitancy, and a weak stream. Digital rectal examination shows a smooth, symmetrically enlarged, rubbery prostate without nodules. PSA is 7.2 ng/mL.",
        discriminator: "PSA is also ↑ in BPH/prostatitis; it monitors recurrence/response rather than diagnosing; definitive diagnosis is made via biopsy",
        concept: "The marker-use rule applied to the most-tested marker",
        answer:
          "The printed rule: tumor markers should not be used as the 1° tool for cancer diagnosis or screening; they may be used to monitor tumor recurrence and response to therapy; definitive diagnosis is made via biopsy. This patient's PSA is confounded by BPH (also prostatitis), and PSA's own note carries 'uncertain risk/benefit for screening' — so the value neither diagnoses cancer nor excludes it; if suspicion persists, biopsy decides.",
      },
      {
        stem: "A 48-year-old woman is diagnosed with endometrial carcinoma. Her family history includes a father treated for colorectal adenocarcinoma at age 51 and a paternal aunt with ovarian cancer. The pathology report recommends testing the tumor.",
        discriminator: "Microsatellite instability testing assesses deficits in the mismatch repair pathway — the hallmark of Lynch syndrome",
        concept: "The molecular panel: matching the test to the family",
        answer:
          "Microsatellite instability testing — it assesses deficits in the mismatch repair pathway (the hallmark of Lynch syndrome) and is used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma). The endometrial-plus-colorectal-plus-ovarian pedigree is the Lynch spectrum; the sister test for the therapy door is PD-L1 expression (anti-PD-L1/anti-PD1) and the BRCA-type door is homologous recombination deficiency testing (PARP inhibitors).",
      },
      {
        stem: "A 59-year-old man with a 40-pack-year smoking history has a centrally located lung mass and a supraclavicular lymph node biopsy showing small blue cells with scant cytoplasm; immunohistochemistry is strongly positive for chromogranin and synaptophysin.",
        discriminator: "Chromogranin and synaptophysin target neuroendocrine cells — small cell carcinoma of the lung, carcinoid tumor, neuroblastoma",
        concept: "The immunohistochemical lineage map, neuroendocrine line",
        answer:
          "Chromogranin and synaptophysin are the neuroendocrine pair of the IHC table; their tumors are small cell carcinoma of the lung, carcinoid tumor, and neuroblastoma. In a smoker with a central mass and small blue cells, the stains identify small cell carcinoma of the lung (neuroendocrine origin) — and the same program can be read from the serum side through chromogranin and neuron-specific enolase (both 'neuroendocrine tumors' rows of the marker table).",
      },
    ],
    traps: [
      {
        a: "PSA and chromogranin as SERUM tumor markers (book 222)",
        b: "PSA and chromogranin as IMMUNOHISTOCHEMICAL stains (book 223)",
        whyConfused: "The same two names appear on both pages — PSA in the serum-marker table and in the stains table; chromogranin likewise",
        keyDifference:
          "In SERUM, PSA is a monitoring marker (prostate cancer; uncertain risk/benefit for screening; ↑ in BPH/prostatitis) and chromogranin marks neuroendocrine tumors — both governed by the not-for-diagnosis rule. ON TISSUE, PSA stains prostatic epithelium to identify prostate cancer at a metastatic site, and chromogranin (with synaptophysin) stains neuroendocrine cells to identify small cell carcinoma of the lung, carcinoid tumor, and neuroblastoma — stains DETERMINE the primary site of origin; sera only track.",
        clue: "A question about a blood value and recurrence/response → serum marker; a question about a biopsy of unknown primary or a 'stains positive for…' stem → immunohistochemistry.",
      },
      {
        a: "HIGH maternal serum AFP",
        b: "LOW maternal serum AFP",
        whyConfused: "Both AFP directions appear in the same note of the same row and both point to fetal abnormality",
        keyDifference:
          "High levels are associated with neural tube and abdominal wall defects (open defects leak fetal AFP); low levels are associated with Down syndrome. The AFP note: 'Normally made by fetus. Transiently elevated in pregnancy.'",
        clue: "Open neural tube or gastroschisis/omphalocele → HIGH AFP; a trisomy 21 screen (thickened nuchal translucency, ± low hCG-adjacent panels) → LOW AFP.",
      },
      {
        a: "CA 15-3/CA 27-29 (breast)",
        b: "CA 19-9 (pancreatic adenocarcinoma) and CA 125 (epithelial ovarian cancer)",
        whyConfused: "Three CA-numbered markers in consecutive rows of the same table",
        keyDifference:
          "CA 15-3/CA 27-29 → breast cancer; CA 19-9 → pancreatic adenocarcinoma; CA 125 → epithelial ovarian cancer. The numbers never trade organs, and none of the three carries a printed NOTE — they are pure association rows.",
        clue: "Anchor the pairs: 15 and 27-29 for the breast; 19-9 for the pancreas; 125 for the ovary (the 'hundred-ovary' pair).",
      },
      {
        a: "Alkaline phosphatase from bone disease",
        b: "Alkaline phosphatase from liver",
        whyConfused: "The ALP row lists metastases to bone OR liver, Paget disease of bone, and seminoma (PLAP) — multiple organs, one enzyme",
        keyDifference:
          "The printed note resolves it: 'Exclude hepatic origin by checking LFTs and GGT levels.' Bone sources (metastases, Paget disease of bone) and the seminoma isozyme (PLAP — placental-like alkaline phosphatase) are distinguished from hepatic elevation by the liver panel.",
        clue: "An elevated ALP question that offers GGT or LFTs as the next step is testing the printed note, not the tumor list.",
      },
      {
        a: "Vimentin as a mesenchymal-only stain",
        b: "Vimentin as a broad stain",
        whyConfused: "The table lists vimentin's target as 'mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages),' so it reads like a sarcoma-only lineage tracer",
        keyDifference:
          "The tumors column carries its own warning: 'mesenchymal tumors (eg, sarcoma), BUT ALSO many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma).' Vimentin-positivity does not make a tumor a sarcoma, and vimentin-positivity does not exclude carcinoma — especially the three listed false friends.",
        clue: "An unknown-primary question that hinges on vimentin co-positivity with cytokeratin (endometrial carcinoma, renal cell carcinoma, meningioma) is testing the printed 'but also' clause.",
      },
    ],
    pivots: [
      {
        lookAlike: "An elevated tumor marker in a patient without a known cancer — what does the number mean, and what comes next?",
        differentiator:
          "Run the printed rule in order: (1) markers are NOT the 1° tool for cancer diagnosis or screening; (2) some are associated with NON-NEOPLASTIC conditions — PSA in BPH/prostatitis, AFP in pregnancy (with the high/low fork), ALP in Paget disease of bone or hepatic origin (check LFTs and GGT), CEA 'very nonspecific'; (3) the legitimate use is MONITORING recurrence and response to therapy in known disease.",
        correctPath:
          "Confounded or screening-context elevation → look for the non-neoplastic cause and the clinical picture, not the number; persistent suspicion → BIOPSY for definitive diagnosis. Never answer 'the marker confirms cancer' — the serum tracks, the tissue names.",
      },
      {
        lookAlike: "A metastatic tumor of unknown primary (or a tumor difficult to classify) — which immunohistochemical panel, and what does each stain trace?",
        differentiator:
          "The stains are lineage tracers: cytokeratin → epithelial; desmin → muscle; GFAP → neuroglia; neurofilament → neurons; S-100 → neural crest; PECAM-1/CD-31 → endothelial; vimentin → mesenchymal (with the 'but also' false friends); chromogranin + synaptophysin → neuroendocrine; PSA → prostatic epithelium; TRAP → hairy cell leukemia.",
        correctPath:
          "Stain the metastasis, read the lineage: an epithelial-looking tumor → cytokeratin (eg, squamous cell carcinoma); a spindle/round cell tumor → desmin (muscle) vs S-100 (crest) vs vimentin (mesenchyme) vs CD-31 (vascular); a small blue cell tumor → chromogranin/synaptophysin (small cell lung, carcinoid, neuroblastoma); a bony/hairy presentation → TRAP for hairy cell leukemia; an adenocarcinoma of unknown primary in a man → PSA stain for prostatic epithelium. The block's stated purpose: determine the primary site of origin; prognostic and predictive value.",
      },
      {
        lookAlike: "A newly diagnosed cancer and the question of which MOLECULAR test to order — matching the test to its purpose",
        differentiator:
          "The five tests sort by what they read and which door they open: tumor mutational burden → total mutation count → immune-checkpoint inhibitor response; microsatellite instability → mismatch repair deficits (Lynch) → prognosis and treatment in colorectal adenocarcinoma and endometrial carcinoma; PD-L1 expression → surface expression (NSCLC, urothelial carcinoma) → anti-PD-L1/anti-PD1 antibodies; homologous recombination deficiency → genomic instability (breast, ovarian) → PARP inhibitors; liquid biopsy → ctDNA/ctRNA/CTCs in blood or urine → cancer profiling (EGFR in lung cancer), treatment monitoring, post-treatment surveillance (colorectal cancer).",
        correctPath:
          "Match the stem's intent: a Lynch family or an immune-therapy question routes to MSI or TMB; a targeted-therapy question in lung or urothelial disease routes to PD-L1; a BRCA-pattern breast/ovarian question routes to HRD testing (PARP inhibitors); a noninvasive monitoring/surveillance request routes to liquid biopsy (ctDNA/ctRNA/CTCs).",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man presents with six months of nocturia, urinary hesitancy, and a weak stream. He has no weight loss and no bone pain. Digital rectal examination reveals a smooth, symmetrically enlarged, rubbery prostate with no palpable nodules or induration; the rest of the examination is unremarkable. Laboratory studies are notable for a PSA of 7.2 ng/mL (a value of 6.4 ng/mL was recorded at a health fair last year). His internist, his urologist, and a newly hired AI triage tool all offer different plans: one wants to 'confirm the cancer' from the number alone, one wants a multi-marker serum panel, one wants a 'liquid biopsy instead of a needle,' and one wants to stain his blood for PSA.",
      question:
        "Which of the following best describes the correct interpretation and use of this patient's PSA result, according to the printed rule and the PSA row of the marker table?",
      options: [
        {
          label:
            "PSA is not the 1° tool for cancer diagnosis or screening: it is used to monitor recurrence and response to therapy in known prostate cancer, its risk/benefit for screening is uncertain, and it is also elevated in BPH and prostatitis — this patient's exam fits BPH, so the value neither diagnoses nor excludes cancer; if clinical suspicion persists, definitive diagnosis is made via biopsy.",
          text: "The marker tracks; the tissue names.",
          correct: true,
          why:
            "Correct on every layer of the printed rule. (1) THE VETO: 'Tumor markers should not be used as the 1° tool for cancer diagnosis or screening.' (2) THE CONFOUNDER: PSA's own note — 'Also ↑ in BPH/prostatitis' — and this patient's smooth, symmetric, rubbery gland is textbook BPH, so the 7.2 ng/mL is confounded in both directions. (3) THE JOB: 'monitor recurrence/response' with 'uncertain risk/benefit for screening.' (4) THE DEFINITION: 'definitive diagnosis is made via biopsy' — the value neither establishes nor excludes malignancy; the needle does.",
        },
        {
          label:
            "The PSA of 7.2 ng/mL establishes the diagnosis of prostate cancer, and he should be referred directly for androgen-deprivation therapy without further testing.",
          text: "The number already told us it is cancer.",
          why:
            "Violates the rule's first sentence outright: tumor markers 'should not be used as the 1° tool for cancer diagnosis or screening.' No serum value — however elevated — diagnoses prostate cancer; definitive diagnosis is made via biopsy. And a serum PSA of 7.2 in a man with BPH examination findings is confounded, not diagnostic.",
        },
        {
          label:
            "Because BPH explains the elevation, malignancy is excluded and no further evaluation is ever indicated; PSA may be discarded from his care entirely.",
          text: "The confounder cancels the whole test.",
          why:
            "Overcorrects in the opposite direction: the note says PSA is 'also ↑ in BPH/prostatitis' — ALSO, not ONLY. BPH raises PSA, but a BPH-confounded value does not exclude prostate cancer; if clinical suspicion persists, definitive diagnosis is made via biopsy. And PSA remains the printed tool for monitoring recurrence/response to therapy in known disease.",
        },
        {
          label:
            "Serum hCG and α-fetoprotein should be measured immediately to complete the cancer screening panel, since all tumor markers screen together.",
          text: "If one marker screens, add the rest.",
          why:
            "Two errors at once: no tumor marker is the 1° tool for screening (the rule's first sentence), and hCG/AFP belong to a different disease set — hydatidiform moles and choriocarcinomas (gestational trophoblastic disease), testicular cancer, mixed germ cell tumor (hCG); hepatocellular carcinoma, endodermal sinus (yolk sac) tumor, ataxia-telangiectasia, neural tube defects (AFP). They monitor germ cell and trophoblastic disease; they do not screen a 62-year-old's prostate.",
        },
        {
          label:
            "A liquid biopsy for circulating tumor DNA should be ordered to make a definitive diagnosis without any tissue sampling.",
          text: "The modern test replaces the needle.",
          why:
            "Miszreads the liquid biopsy row: it is a 'noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance' — the molecular heir of the MONITORING job, aiding early metastatic detection and personalized therapy. It does not replace the biopsy: definitive diagnosis is made via biopsy.",
        },
        {
          label:
            "His blood sample should be sent for immunohistochemical PSA staining to confirm the prostatic origin of his enlargement.",
          text: "Stain the serum instead of the gland.",
          why:
            "Conflates the two PSAs of the two pages: the SERUM PSA (book 222's marker table — a monitored value, ↑ in BPH/prostatitis) and the TISSUE PSA stain (book 223's stains table — anti-PSA immunohistochemistry on BIOPSIED tissue, targeting prostatic epithelium to identify prostate cancer, eg at a metastatic site). Immunohistochemistry is performed on tissue, not on serum, and the stains exist to determine the primary site of origin for metastatic tumors — not to interpret a confounded screening value.",
        },
      ],
      reasoning:
        "The case walks the marker-use rule through the single most-tested marker on the page. (1) THE VETO: the printed paragraph — 'Tumor markers should not be used as the 1° tool for cancer diagnosis or screening' — kills any answer that treats the number as a diagnosis (option 2) or as a screening verdict in either direction (option 3). (2) THE CONFOUNDER: the PSA row's note — 'Also ↑ in BPH/prostatitis' — and the vignette's smooth, symmetric, rubbery gland make BPH the non-neoplastic condition the rule's third sentence warns about ('Some can be associated with non-neoplastic conditions'), so the value is uninterpretable as cancer evidence in both directions. (3) THE JOB: 'monitor recurrence/response; uncertain risk/benefit for screening' — PSA's legitimate role is tracking known disease (option 4's markers monitor germ cell and trophoblastic disease instead; option 5's liquid biopsy extends monitoring/surveillance, not diagnosis). (4) THE DEFINITION: 'definitive diagnosis is made via biopsy' — tissue, not serum (option 6's tissue-stain role belongs to biopsy material, aimed at determining primary site of origin for metastatic tumors). The distractors each fail on a different printed clause, which is exactly how the rule is tested.",
    },
  },
  mnemonics: [
    {
      code: "MARKERS MONITOR, BIOPSIES DEFINE",
      meaning:
        "The marker-use rule verbatim in three beats: MONITOR — 'they may be used to monitor tumor recurrence and response to therapy' (PSA: monitor recurrence/response; LDH: an indicator of tumor burden; liquid biopsy: treatment monitoring and post-treatment surveillance). BIOPSIES DEFINE — 'definitive diagnosis is made via biopsy.' And the implicit warning between them: markers are NOT the 1° tool for cancer diagnosis or screening, and some are associated with non-neoplastic conditions (PSA in BPH/prostatitis; AFP in pregnancy; ALP in Paget disease of bone or hepatic origin — check LFTs and GGT).",
      memorizes: "The marker-use rule paragraph (book 222)",
      whenToUse: "Any question asking what an elevated tumor marker means, what it can and cannot do, or what the next step is",
      clinical:
        "A rising PSA after prostatectomy is recurrence surveillance (the marker's real job); a PSA of 7 in a man whose gland feels like BPH is a confounded value awaiting the biopsy decision, never a diagnosis.",
    },
    {
      code: "CANCER GROWS WHERE THE MICROBE LIVES",
      meaning:
        "The 8-row oncogenic-microbe table as eight residence rules: EBV lives in B lymphocytes → Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients); HBV and HCV live in hepatocytes → hepatocellular carcinoma; HHV-8 lives in endothelial cells → Kaposi (“Ka∞si”) sarcoma; HPV (usually types 16, 18) lives in squamous epithelium → cervical and penile/anal carcinoma, head and neck cancer; H pylori lives in gastric mucosa → gastric adenocarcinoma AND MALT lymphoma; HTLV-1 lives in T cells → adult T-cell leukemia/lymphoma; Clonorchis sinensis (the liver fluke) lives in bile ducts → cholangiocarcinoma; Schistosoma haematobium lives in the bladder → squamous cell bladder cancer.",
      memorizes: "The 8-row mICrOBe / ASSOCIATeD CAnCer table (book 222)",
      whenToUse: "Any microbe-to-cancer matching question, and any cancer whose vignette includes a chronic infection",
      clinical:
        "The residence rule predicts the histology too: the bladder cancer of S haematobium is SQUAMOUS (chronic egg-driven metaplasia), and the gastric lymphoma of H pylori is MALT — the mucosa the bacterium colonizes.",
    },
    {
      code: "COUNT, MISMATCH, PAINT, REPAIR, DRAW",
      meaning:
        "The 5-row Cancer testing block in order. COUNT — tumor mutational burden: count the total number of mutations; may predict response to immune-checkpoint inhibitors. MISMATCH — microsatellite instability testing: mismatch repair deficits, the hallmark of Lynch syndrome; prognosis and treatment for colorectal adenocarcinoma and endometrial carcinoma. PAINT — PD-L1 expression patterns: PD-L1 painted on certain cancers (NSCLC, urothelial carcinoma); targeted with anti-PD-L1 and anti-PD1 antibodies. REPAIR — homologous recombination deficiency testing: genomic instability (breast, ovarian) that may respond to PARP inhibitors. DRAW — liquid biopsy: draw blood or urine and read ctDNA, ctRNA, or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer); aids early metastatic detection and personalized therapy.",
      memorizes: "The 5-row Cancer testing block (book 223)",
      whenToUse: "Any question pairing a newly diagnosed cancer with a molecular test or a targeted-therapy door",
      clinical:
        "Lynch pedigree (colorectal + endometrial) → MISMATCH; immunotherapy-eligibility stem → COUNT (TMB) or PAINT (PD-L1); BRCA-pattern breast/ovarian → REPAIR (PARP inhibitors); noninvasive monitoring or surveillance request → DRAW (liquid biopsy).",
    },
    {
      code: "TRACE THE LINEAGE",
      meaning:
        "The 10-row immunohistochemical stains table as an embryonic-lineage map: TRACE the epithelial line with cytokeratin → epithelial tumors (eg, squamous cell carcinoma); the muscle line with desmin → muscle tumors (eg, rhabdomyosarcoma); the glial line with GFAP → astrocytoma, glioblastoma (NeuroGlia: astrocytes, Schwann cells, oligodendrocytes); the neuronal line with neurofilament → neuronal tumors (eg, neuroblastoma); the neuroendocrine program with chromogranin + synaptophysin → small cell carcinoma of the lung, carcinoid tumor, neuroblastoma; the neural crest line with S-100 → melanoma, schwannoma, Langerhans cell histiocytosis; the vascular line with PECAM-1/CD-31 → vascular tumors (eg, angiosarcoma); the mesenchymal line with vimentin → mesenchymal tumors (eg, sarcoma) — BUT ALSO endometrial carcinoma, renal cell carcinoma, meningioma. The two organ-specific stains: PSA → prostatic epithelium → prostate cancer, and TRAP (tartrate-resistant acid phosphatase) → hairy cell leukemia.",
      memorizes: "The 10-row STAIn / TArGeT / TUmOrS IDenTIfIeD table (book 223)",
      whenToUse: "Any unknown-primary question, any 'biopsy stains positive for…' stem, any difficult-to-classify tumor",
      clinical:
        "The stain names the origin: a supraclavicular node positive for cytokeratin is carcinoma (find the primary); positive for S-100, think melanoma or schwannoma (or Langerhans cell histiocytosis); positive for chromogranin/synaptophysin, think small cell lung, carcinoid, or neuroblastoma; TRAP-positivity with pancytopenia and a dry tap is hairy cell leukemia.",
    },
  ],
  rapidReview: {
    s30: [
      "The rule verbatim: tumor markers should not be used as the 1° tool for cancer diagnosis or screening; they may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy; some can be associated with non-neoplastic conditions",
      "Oncogenic microbes: EBV → Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients); HBV, HCV → hepatocellular carcinoma; HHV-8 → Kaposi (“Ka∞si”) sarcoma",
      "Oncogenic microbes (continued): HPV (usually types 16, 18) → cervical and penile/anal carcinoma, head and neck cancer; H pylori → gastric adenocarcinoma and MALT lymphoma; HTLV-1 → adult T-cell leukemia/lymphoma",
      "Oncogenic microbes (continued): liver fluke (Clonorchis sinensis) → cholangiocarcinoma; Schistosoma haematobium → squamous cell bladder cancer",
      "Serum markers: alkaline phosphatase → metastases to bone or liver, Paget disease of bone, seminoma (PLAP) — exclude hepatic origin (LFTs, GGT); α-fetoprotein → HCC, yolk sac tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects; hCG → gestational trophoblastic disease, testicular cancer (syncytiotrophoblasts)",
      "Serum markers (continued): CA 15-3/CA 27-29 → breast; CA 19-9 → pancreatic adenocarcinoma; CA 125 → epithelial ovarian; calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B) — “Calci2nin.”; CEA → colorectal and pancreatic (very nonspecific; minor: gastric, breast, medullary thyroid)",
      "Serum markers (continued): chromogranin → neuroendocrine; LDH → testicular germ cell tumors, ovarian dysgerminoma (indicator of tumor burden); neuron-specific enolase → neuroendocrine (small cell lung cancer, carcinoid, neuroblastoma); PSA → prostate (monitor recurrence/response; uncertain risk/benefit for screening; also ↑ in BPH/prostatitis)",
      "AFP pregnancy fork: normally made by fetus, transiently elevated in pregnancy — HIGH levels with neural tube and abdominal wall defects, LOW levels with Down syndrome",
      "Cancer testing: tumor mutational burden (immune-checkpoint inhibitors); microsatellite instability (Lynch — mismatch repair; colorectal, endometrial); PD-L1 expression (NSCLC, urothelial; anti-PD-L1/anti-PD1); homologous recombination deficiency (breast, ovarian; PARP inhibitors); liquid biopsy (ctDNA/ctRNA/CTCs — profiling, monitoring, surveillance)",
      "IHC stains: chromogranin + synaptophysin → neuroendocrine; cytokeratin → epithelial; desmin → muscle; GFAP → neuroglia; neurofilament → neurons; PSA → prostatic epithelium; PECAM-1/CD-31 → endothelial; S-100 → neural crest; TRAP → hairy cell leukemia; vimentin → mesenchymal (but also endometrial carcinoma, renal cell carcinoma, meningioma)",
      "P-glycoprotein (MDR1): ATP-dependent efflux pump expressed in some cancer cells to pump out chemotherapeutic agents — one mechanism of ↓ responsiveness or resistance to chemotherapy over time",
    ],
    m3: [
      "MARKERS MONITOR, BIOPSIES DEFINE — the serum tracks recurrence/response; the tissue names the disease; confounders (BPH/prostatitis, pregnancy, Paget/hepatic) move the numbers",
      "CANCER GROWS WHERE THE MICROBE LIVES — EBV/B cells, HBV-HCV/hepatocytes, HHV-8/endothelium, HPV 16-18/squamous epithelium, H pylori/gastric mucosa, HTLV-1/T cells, Clonorchis/bile ducts, S haematobium/bladder",
      "COUNT, MISMATCH, PAINT, REPAIR, DRAW — TMB (checkpoint inhibitors), MSI (Lynch), PD-L1 (anti-PD-L1/anti-PD1), HRD (PARP inhibitors), liquid biopsy (ctDNA/ctRNA/CTCs)",
      "TRACE THE LINEAGE — cytokeratin epithelium, desmin muscle, GFAP glia, neurofilament neurons, S-100 neural crest, CD-31 endothelium, vimentin mesenchyme (with false friends), chromogranin/synaptophysin neuroendocrine, PSA prostate, TRAP hairy cell",
      "15 the breast, 19 the pancreas, 125 the ovary — the CA pairs never trade organs; and “Calci2nin.” is the source's own MEN-2 hook for calcitonin",
    ],
    m10: [
      "The source prints its own joke in the HHV-8 row: Kaposi (“Ka∞si”) sarcoma — an infinity symbol inside the quotes, carried verbatim",
      "Calcitonin's note is the source's own mnemonic: “Calci2nin.” — the 2 stands for the MEN 2 of medullary thyroid carcinoma (alone and in MEN2A, MEN2B)",
      "CEA expands to CarcinoEmbryonic Antigen and PSA to Prostate-Specific Antigen — both printed with their embedded capitals and both described as they behave: CEA 'very nonspecific', PSA 'uncertain risk/benefit for screening'",
      "AFP's fork is two-directional in pregnancy: high = neural tube and abdominal wall defects; low = Down syndrome — the same row also lists ataxia-telangiectasia",
      "hCG is 'produced by syncytiotrophoblasts of the placenta' — which is why hydatidiform moles and choriocarcinomas (gestational trophoblastic disease) light it up",
      "Two proteins hold dual citizenship across the two pages: PSA and chromogranin appear BOTH as serum markers (monitoring) and as immunohistochemical stains (identifying tissue of origin)",
      "Vimentin's warning clause — 'but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma)' — is the table's built-in false-friend alert",
      "P-glycoprotein = multidrug resistance protein 1 (MDR1), an ATP-dependent efflux pump — resistance by transport, not by target mutation",
    ],
  },
  recall: [
    {
      q: "The marker-use rule verbatim — all three sentences.",
      a: "Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions.",
    },
    {
      q: "The oncogenic microbes table verbatim — all 8 rows (microbe → associated cancer).",
      a: "EBV — Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients). HBV, HCV — Hepatocellular carcinoma. HHV-8 — Kaposi (“Ka∞si”) sarcoma. HPV (usually types 16, 18) — Cervical and penile/anal carcinoma, head and neck cancer. H pylori — Gastric adenocarcinoma and MALT lymphoma. HTLV-1 — Adult T-cell Leukemia/Lymphoma. Liver fluke (Clonorchis sinensis) — Cholangiocarcinoma. Schistosoma haematobium — Squamous cell bladder cancer.",
    },
    {
      q: "The serum tumor markers table verbatim, part 1 — alkaline phosphatase through calcitonin, with NOTES.",
      a: "Alkaline phosphatase — Metastases to bone or liver, Paget disease of bone, seminoma (PLAP). — Exclude hepatic origin by checking LFTs and GGT levels. α-fetoprotein — Hepatocellular carcinoma, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects. — Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome. hCG — Hydatidiform moles and Choriocarcinomas (Gestational trophoblastic disease), testicular cancer, mixed germ cell tumor. — Produced by syncytiotrophoblasts of the placenta. CA 15-3/CA 27-29 — Breast cancer. CA 19-9 — Pancreatic adenocarcinoma. CA 125 — Epithelial ovarian cancer. Calcitonin — Medullary thyroid carcinoma (alone and in MEN2A, MEN2B). — Calci2nin.",
    },
    {
      q: "The serum tumor markers table verbatim, part 2 — CEA through PSA, with NOTES.",
      a: "CEA — Colorectal and pancreatic cancers. Minor associations: gastric, breast, and medullary thyroid carcinomas. — CarcinoEmbryonic Antigen. Very nonspecific. Chromogranin — Neuroendocrine tumors. LDH — Testicular germ cell tumors, ovarian dysgerminoma, other cancers. — Can be used as an indicator of tumor burden. Neuron-specific enolase — Neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma). PSA — Prostate cancer. — Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis.",
    },
    {
      q: "The Cancer testing block verbatim — all 5 tests with their descriptions.",
      a: "Tumor mutational burden — Total number of mutations present in cancer cells. May predict response to certain treatments (eg, immune-checkpoint inhibitors). Microsatellite instability testing — Assesses deficits in the mismatch repair pathway (hallmark of Lynch syndrome). Used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma). PD-L1 expression patterns — PD-L1 expressed to varying degrees in certain cancers (eg, NSCLC, urothelial carcinoma). May be targeted with anti-PD-L1 and anti-PD1 antibodies. Homologous recombination deficiency testing — Identifies cancer types with genetic abnormalities and genomic instability (eg, breast, ovarian) that may respond to certain treatments (eg, PARP inhibitors). Liquid biopsy — Noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer). Aids in early metastatic detection and personalized therapy.",
    },
    {
      q: "The Important immunohistochemical stains table verbatim — the block's purpose sentence and all 10 rows (stain → target → tumors identified).",
      a: "Purpose: Determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify. Can have prognostic and predictive value. Chromogranin and synaptophysin — Neuroendocrine cells — Small cell carcinoma of the lung, carcinoid tumor, neuroblastoma. Cytokeratin — Epithelial cells — Epithelial tumors (eg, squamous cell carcinoma). Desmin — Muscle — Muscle tumors (eg, rhabdomyosarcoma). GFAP — NeuroGlia (eg, astrocytes, Schwann cells, oligodendrocytes) — Astrocytoma, Glioblastoma. Neurofilament — Neurons — Neuronal tumors (eg, neuroblastoma). PSA — Prostatic epithelium — Prostate cancer. PECAM-1/CD-31 — Endothelial cells — Vascular tumors (eg, angiosarcoma). S-100 — Neural crest cells — Melanoma, schwannoma, Langerhans cell histiocytosis. TRAP — Tartrate-resistant acid phosphatase — Hairy cell leukemia. Vimentin — Mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages) — Mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma).",
    },
    {
      q: "The P-glycoprotein paragraph verbatim.",
      a: "ATP-dependent efflux pump, also called multidrug resistance protein 1 (MDR1). Expressed in some cancer cells to pump out toxins, including chemotherapeutic agents (one mechanism of ↓ responsiveness or resistance to chemotherapy over time).",
    },
  ],
  related: [
    {
      title: "Oncogenes & Tumor Suppressor Genes",
      topicId: "oncogenes-tumor-suppressors",
      note:
        "The molecular layer beneath this page's diagnostics: microsatellite instability testing reads the mismatch repair pathway's loss, homologous recombination deficiency testing reads the BRCA1/BRCA2 repair failure, and tumor mutational burden counts the accumulated damage — this page asks HOW the genome is tested, that page asks WHICH gene broke.",
    },
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note:
        "The cancer-testing block is the clinical readout of the hallmarks: TMB and PD-L1 expression measure immune evasion (the neoantigen load and the checkpoint shield), and P-glycoprotein-mediated efflux is one way tumors resist therapy — the treatment-resistance face of the disease.",
    },
    {
      title: "DNA Repair Pathways",
      topicId: "dna-repair",
      note:
        "Microsatellite instability is the mismatch repair pathway's failure signature (the hallmark of Lynch syndrome) and homologous recombination deficiency is the double-strand-break repair failure — the two testing rows of book 223 are the assays for the two repair systems.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note:
        "The immunohistochemical panel exists FOR the metastasis: 'determine primary site of origin for metastatic tumors' — and the serum side flags spread (alkaline phosphatase for metastases to bone or liver) while the liquid biopsy aids early metastatic detection.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (oncogenic viruses and parasites)",
      connection:
        "The 8-row microbe roster doubles as a microbiology roll call: EBV, HBV/HCV, HHV-8, and HPV 16/18 (the viruses), H pylori (the bacterium), HTLV-1 (the retrovirus), and Clonorchis sinensis and Schistosoma haematobium (the helminths) — each microbe-cancer pair is testable from either chapter.",
    },
    {
      subject: "Immunology (immune checkpoint inhibition)",
      connection:
        "Two of the five cancer tests open immunology doors: tumor mutational burden may predict response to immune-checkpoint inhibitors (more mutations → more neoantigens), and PD-L1 expression patterns (NSCLC, urothelial carcinoma) mark tumors that may be targeted with anti-PD-L1 and anti-PD1 antibodies.",
    },
    {
      subject: "Pharmacology (chemotherapy resistance)",
      connection:
        "P-glycoprotein (MDR1) is the pharmacology of resistance: an ATP-dependent efflux pump that exports chemotherapeutic agents — one mechanism of ↓ responsiveness or resistance to chemotherapy over time, and the reason drug efflux inhibitors have been pursued as chemo-sensitizers.",
    },
    {
      subject: "Obstetrics (prenatal screening)",
      connection:
        "The AFP row is the obstetrics bridge: AFP is normally made by the fetus and transiently elevated in pregnancy — HIGH maternal levels with neural tube and abdominal wall defects, LOW levels with Down syndrome — the same analyte that marks hepatocellular carcinoma and yolk sac tumors doubles as the quad-screen's open-defect flag.",
    },
  ],
};
