import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 18). Source: pdf 244-245 /
// book 222-223 (Tumor markers, molecular diagnostics, and IHC — four
// pure-text sections: oncogenic microbes [8 rows], serum tumor
// markers [12 rows with NOTES], cancer testing [4 tests + liquid
// biopsy], and important IHC stains [10 rows]; plus the P-glycoprotein
// drug-resistance paragraph). Census (pdfimages + VLM): NO raster
// images on either page (pdfimages -list returned zero rows for both
// pdf 244 and pdf 245). The pages are pure text — four sections with
// no figures. The visual is an ORIGINAL KYP adaptation rendering the
// four sections as grid maps (no source figure to redraw). The tables
// are carried verbatim in this note's table blocks. No copyrighted
// photographs exist on either page; nothing reproduced. No margin
// mnemonics (VLM confirmed); the KYP memory layer stays original.

export const tumorMarkersMolecular: KypUsMLENote = {
  id: "tumor-markers-molecular",
  title: "Tumor Markers, Molecular Diagnostics & IHC",
  subtitle:
    "Four sections, four grids (book 222-223) — the ONCOGENIC MICROBES table (8 microbes → cancers: EBV → Burkitt/Hodgkin/nasopharyngeal/1° CNS lymphoma, HBV+HCV → hepatocellular carcinoma, HHV-8 → Kaposi sarcoma, HPV 16/18 → cervical/penile-anal/head and neck, H pylori → gastric adenocarcinoma + MALT lymphoma, HTLV-1 → adult T-cell leukemia/lymphoma, Clonorchis sinensis → cholangiocarcinoma, Schistosoma haematobium → squamous cell bladder cancer); the SERUM TUMOR MARKERS table (12 markers → associations with NOTES — ALP, AFP, hCG, CA 15-3/27-29, CA 19-9, CA 125, calcitonin, CEA, chromogranin, LDH, NSE, PSA — plus the caveat that markers do NOT diagnose or screen, only monitor recurrence/response, definitive dx via biopsy); the CANCER TESTING list (4 tests + liquid biopsy: tumor mutational burden, MSI testing, PD-L1 expression, HRD testing, liquid biopsy); and the IMPORTANT IHC STAINS table (10 stains → targets → tumors — chromogranin/synaptophysin, cytokeratin, desmin, GFAP, neurofilament, PSA, PECAM-1/CD31, S-100, TRAP, vimentin); plus P-glycoprotein (MDR1), the ATP-dependent efflux pump that pumps chemotherapy out of cancer cells.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete architecture of the four tumor-marker/IHC pages — all 8 oncogenic microbes (EBV, HBV, HCV, HHV-8, HPV, H pylori, HTLV-1, Clonorchis sinensis, Schistosoma haematobium) and their cancer types (Burkitt/Hodgkin/nasopharyngeal/1° CNS lymphoma, HCC, Kaposi sarcoma, cervical/penile-anal/head and neck, gastric adenocarcinoma + MALT, adult T-cell leukemia/lymphoma, cholangiocarcinoma, squamous cell bladder cancer); all 12 serum markers (ALP, AFP, hCG, CA 15-3/27-29, CA 19-9, CA 125, calcitonin, CEA, chromogranin, LDH, NSE, PSA) with their cancer associations and clinical NOTES; all 5 cancer tests (TMB, MSI, PD-L1, HRD, liquid biopsy) and the therapies they guide (immune-checkpoint inhibitors, Lynch syndrome workup, anti-PD-L1/PD1, PARP inhibitors, ctDNA/ctRNA/CTC profiling); all 10 IHC stains (chromogranin/synaptophysin, cytokeratin, desmin, GFAP, neurofilament, PSA, PECAM-1/CD31, S-100, TRAP, vimentin) and their lineage-to-tumor mapping; and the P-glycoprotein multidrug resistance mechanism.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 222–223 (Pathology — Neoplasia: Tumor Markers, Molecular Diagnostics & IHC — four sections: [1] oncogenic microbes [8 rows: EBV, HBV/HCV, HHV-8, HPV 16/18, H pylori, HTLV-1, Clonorchis sinensis, Schistosoma haematobium]; [2] serum tumor markers [12 markers with NOTES: ALP, AFP, hCG, CA 15-3/27-29, CA 19-9, CA 125, calcitonin, CEA, chromogranin, LDH, NSE, PSA]; [3] cancer testing [5 entries: TMB, MSI testing, PD-L1 expression, HRD testing, liquid biopsy]; [4] important IHC stains [10 rows]; plus the P-glycoprotein/MDR1 drug-resistance paragraph])",
  tags: [
    "tumor markers",
    "molecular diagnostics",
    "immunohistochemistry",
    "IHC",
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
    "HPV 16",
    "HPV 18",
    "cervical carcinoma",
    "penile carcinoma",
    "anal carcinoma",
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
    "serum tumor markers",
    "alkaline phosphatase",
    "PLAP",
    "alpha-fetoprotein",
    "AFP",
    "yolk sac tumor",
    "endodermal sinus tumor",
    "mixed germ cell tumor",
    "ataxia-telangiectasia",
    "neural tube defects",
    "hCG",
    "hydatidiform mole",
    "choriocarcinoma",
    "gestational trophoblastic disease",
    "testicular cancer",
    "CA 15-3",
    "CA 27-29",
    "breast cancer",
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
    "colorectal cancer",
    "chromogranin",
    "neuroendocrine tumors",
    "LDH",
    "testicular germ cell tumors",
    "ovarian dysgerminoma",
    "tumor burden",
    "neuron-specific enolase",
    "NSE",
    "small cell lung cancer",
    "carcinoid tumor",
    "neuroblastoma",
    "PSA",
    "prostate-specific antigen",
    "prostate cancer",
    "BPH",
    "prostatitis",
    "cancer testing",
    "tumor mutational burden",
    "TMB",
    "immune-checkpoint inhibitors",
    "microsatellite instability",
    "MSI",
    "mismatch repair",
    "Lynch syndrome",
    "PD-L1",
    "NSCLC",
    "urothelial carcinoma",
    "anti-PD-L1",
    "anti-PD1",
    "homologous recombination deficiency",
    "HRD",
    "PARP inhibitors",
    "liquid biopsy",
    "ctDNA",
    "ctRNA",
    "circulating tumor cells",
    "CTCs",
    "EGFR",
    "immunohistochemical stains",
    "synaptophysin",
    "cytokeratin",
    "epithelial cells",
    "squamous cell carcinoma",
    "desmin",
    "muscle",
    "rhabdomyosarcoma",
    "GFAP",
    "glia",
    "astrocytes",
    "Schwann cells",
    "oligodendrocytes",
    "astrocytoma",
    "glioblastoma",
    "neurofilament",
    "neurons",
    "neuronal tumors",
    "PECAM-1",
    "CD-31",
    "endothelial cells",
    "vascular tumors",
    "angiosarcoma",
    "S-100",
    "neural crest cells",
    "melanoma",
    "schwannoma",
    "Langerhans cell histiocytosis",
    "TRAP",
    "tartrate-resistant acid phosphatase",
    "hairy cell leukemia",
    "vimentin",
    "mesenchymal tissue",
    "fibroblasts",
    "macrophages",
    "sarcoma",
    "endometrial carcinoma",
    "renal cell carcinoma",
    "meningioma",
    "P-glycoprotein",
    "MDR1",
    "multidrug resistance protein 1",
    "ATP-dependent efflux pump",
    "chemotherapy resistance",
  ],
  core: {
    what:
      "Four sections on the tumor-marker/IHC pages. SECTION 1 — ONCOGENIC MICROBES (8 rows): EBV → Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients); HBV + HCV → hepatocellular carcinoma; HHV-8 → Kaposi sarcoma; HPV (usually types 16, 18) → cervical and penile/anal carcinoma, head and neck cancer; H pylori → gastric adenocarcinoma and MALT lymphoma; HTLV-1 → adult T-cell leukemia/lymphoma; liver fluke (Clonorchis sinensis) → cholangiocarcinoma; Schistosoma haematobium → squamous cell bladder cancer. SECTION 2 — SERUM TUMOR MARKERS (12 markers with NOTES): Alkaline phosphatase → metastases to bone or liver, Paget disease of bone, seminoma (PLAP) [NOTES: Exclude hepatic origin by checking LFTs and GGT]; α-fetoprotein (AFP) → HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects [NOTES: Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome]; hCG → hydatidiform moles and choriocarcinomas (gestational trophoblastic disease), testicular cancer, mixed germ cell tumor [NOTES: Produced by syncytiotrophoblasts of the placenta]; CA 15-3/CA 27-29 → breast cancer; CA 19-9 → pancreatic adenocarcinoma; CA 125 → epithelial ovarian cancer; calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B) [NOTES: Calci2nin]; CEA → colorectal and pancreatic cancers, minor associations: gastric, breast, and medullary thyroid carcinomas [NOTES: CarcinoEmbryonic Antigen. Very nonspecific]; chromogranin → neuroendocrine tumors; LDH → testicular germ cell tumors, ovarian dysgerminoma, other cancers [NOTES: Can be used as an indicator of tumor burden]; neuron-specific enolase → neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma); PSA → prostate cancer [NOTES: Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis]. SECTION 3 — CANCER TESTING (4 tests + liquid biopsy): tumor mutational burden → predicts response to immune-checkpoint inhibitors; microsatellite instability (MSI) testing → assesses mismatch repair deficits (hallmark of Lynch syndrome), guides prognosis and treatment for colorectal and endometrial cancers; PD-L1 expression patterns → may be targeted with anti-PD-L1 and anti-PD1 antibodies (NSCLC, urothelial); homologous recombination deficiency (HRD) testing → identifies breast/ovarian cancers that may respond to PARP inhibitors; liquid biopsy → noninvasive test using ctDNA, ctRNA, or CTCs for cancer profiling (eg, EGFR in lung), treatment monitoring, and post-treatment surveillance. SECTION 4 — IMPORTANT IHC STAINS (10 rows): chromogranin + synaptophysin → neuroendocrine cells → small cell lung carcinoma, carcinoid, neuroblastoma; cytokeratin → epithelial cells → epithelial tumors (eg, SCC); desmin → muscle → muscle tumors (eg, rhabdomyosarcoma); GFAP → neuroglia (astrocytes, Schwann cells, oligodendrocytes) → astrocytoma, glioblastoma; neurofilament → neurons → neuronal tumors (eg, neuroblastoma); PSA → prostatic epithelium → prostate cancer; PECAM-1/CD-31 → endothelial cells → vascular tumors (eg, angiosarcoma); S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis; TRAP → tartrate-resistant acid phosphatase → hairy cell leukemia; vimentin → mesenchymal tissue → mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma). PLUS — P-glycoprotein: ATP-dependent efflux pump (also called multidrug resistance protein 1 / MDR1), expressed in some cancer cells to pump out toxins including chemotherapeutic agents (one mechanism of ↓ responsiveness or resistance to chemotherapy over time).",
    why:
      "This is the diagnostic side of neoplasia — the lab tests that monitor, classify, and personalize cancer therapy. The page's logic rests on three axes. (1) THE MARKER AXIS — tumor markers are NOT for primary diagnosis or screening (the page's printed caveat: 'Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions.') — markers MONITOR recurrence and response, and definitive diagnosis requires biopsy. PSA's 'uncertain risk/benefit for screening' and ↑ in BPH/prostatitis, CEA's 'very nonspecific,' and AFP's physiologic elevation in pregnancy are all consequences of this caveat. (2) THE IHC AXIS — immunohistochemical stains determine the primary site of origin for metastatic tumors and characterize tumors that are difficult to classify, with prognostic and predictive value (the page's printed introduction to the IHC table). The stain names the lineage (cytokeratin = epithelial, desmin = muscle, GFAP = glia, S-100 = neural crest, vimentin = mesenchymal), and the lineage names the primary. (3) THE MOLECULAR TESTING AXIS — modern cancer therapy is guided by tumor mutational burden (immune-checkpoint inhibitor response), MSI (Lynch syndrome + immune-checkpoint response), PD-L1 expression (anti-PD-L1/PD1 response), HRD (PARP inhibitor response), and liquid biopsy (noninvasive profiling, monitoring, and surveillance via ctDNA/ctRNA/CTCs). The P-glycoprotein paragraph closes the page with the chemotherapy-resistance mechanism — the cancer cell's ATP-dependent efflux pump that exports toxins including chemotherapy, producing the multidrug-resistance phenotype.",
    keyIdea:
      "Read the four sections through three axes. MARKER-CANCER AXIS — 12 serum markers map to cancer types: AFP (HCC, yolk sac, mixed germ cell, ataxia-telangiectasia, neural tube defects), hCG (gestational trophoblastic disease, testicular, mixed germ cell), LDH (testicular germ cell, ovarian dysgerminoma, tumor burden indicator), CA 15-3/27-29 (breast), CA 19-9 (pancreatic), CA 125 (epithelial ovarian), calcitonin (medullary thyroid, MEN2A/2B), CEA (colorectal/pancreatic + minor gastric/breast/medullary thyroid — very nonspecific), chromogranin + NSE (neuroendocrine tumors), PSA (prostate — also ↑ in BPH/prostatitis), alkaline phosphatase (bone/liver mets, Paget, seminoma PLAP). IHC-TISSUE AXIS — 10 stains identify lineage: chromogranin + synaptophysin (neuroendocrine → small cell lung, carcinoid, neuroblastoma), cytokeratin (epithelial → SCC), desmin (muscle → rhabdomyosarcoma), GFAP (glia → astrocytoma/glioblastoma), neurofilament (neurons → neuroblastoma), PSA (prostatic epithelium), PECAM-1/CD31 (endothelium → angiosarcoma), S-100 (neural crest → melanoma/schwannoma/LCH), TRAP (hairy cell leukemia), vimentin (mesenchymal → sarcoma, but also many others). MOLECULAR TESTING AXIS — 5 tests guide therapy: TMB → immune-checkpoint inhibitors; MSI → Lynch + immune-checkpoint response; PD-L1 → anti-PD-L1/PD1; HRD → PARP inhibitors; liquid biopsy → ctDNA/ctRNA/CTC profiling. The marker caveat (markers MONITOR, biopsy DIAGNOSES) and the P-glycoprotein resistance mechanism close the page.",
  },
  mechanisms: [
    {
      id: "marker-cancer-axis",
      title: "The marker-cancer axis: 12 serum markers map to cancer types",
      context: "The serum tumor markers table (book 222-223)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A serum marker is elevated — which cancer (and what is the caveat)?",
            sublabel:
              "Input — the tumor markers table maps 12 markers to their cancer associations, with the printed caveat: markers should NOT be used as the 1° tool for cancer diagnosis or screening. They MONITOR tumor recurrence and response to therapy; definitive diagnosis is made via biopsy. Some markers are associated with non-neoplastic conditions.",
            variant: "input",
          },
          {
            id: "germ",
            label: "GERM CELL / TROPHOBLASTIC markers — AFP, hCG, LDH",
            sublabel:
              "AFP → HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects (normally made by fetus; transiently ↑ in pregnancy; high = neural tube/abdominal wall defects, low = Down syndrome). hCG → hydatidiform moles, choriocarcinomas (gestational trophoblastic disease), testicular cancer, mixed germ cell tumor (produced by syncytiotrophoblasts of the placenta). LDH → testicular germ cell tumors, ovarian dysgerminoma, other cancers (indicator of tumor burden).",
            variant: "process",
          },
          {
            id: "epithelial",
            label: "EPITHELIAL CANCER markers — CA 15-3/27-29, CA 19-9, CA 125, CEA, PSA",
            sublabel:
              "CA 15-3/CA 27-29 → breast cancer. CA 19-9 → pancreatic adenocarcinoma. CA 125 → epithelial ovarian cancer. CEA → colorectal and pancreatic cancers (minor: gastric, breast, medullary thyroid) — CarcinoEmbryonic Antigen, very nonspecific. PSA → prostate cancer (also ↑ in BPH/prostatitis; uncertain risk/benefit for screening; monitor recurrence/response).",
            variant: "process",
          },
          {
            id: "neuroendocrine",
            label: "NEUROENDOCRINE markers — calcitonin, chromogranin, NSE",
            sublabel:
              "Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B) — Calci2nin. Chromogranin → neuroendocrine tumors. Neuron-specific enolase → neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma).",
            variant: "process",
          },
          {
            id: "nonspecific",
            label: "NON-SPECIFIC marker — alkaline phosphatase",
            sublabel:
              "Alkaline phosphatase → metastases to bone or liver, Paget disease of bone, seminoma (PLAP). NOTES: Exclude hepatic origin by checking LFTs and GGT levels. ALP is the bone/liver metastasis indicator — not a single-cancer marker.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the marker, name the cancer, name the limitation",
            sublabel:
              "Output — the 12-marker table resolves any serum-marker question: name the marker, name the cancer association, and name the limitation (the biopsy-diagnoses / markers-monitor caveat). The CEA-is-nonspecific, PSA-is-also-BPH/prostatitis, and AFP-is-also-pregnancy rules are the highest-yield limitations.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "germ", label: "germ cell markers" },
          { from: "input", to: "epithelial", label: "epithelial cancer markers" },
          { from: "input", to: "neuroendocrine", label: "neuroendocrine markers" },
          { from: "input", to: "nonspecific", label: "non-specific marker" },
          { from: "germ", to: "output", label: "AFP / hCG / LDH" },
          { from: "epithelial", to: "output", label: "CA 15-3 / 19-9 / 125 / CEA / PSA" },
          { from: "neuroendocrine", to: "output", label: "calcitonin / chromogranin / NSE" },
          { from: "nonspecific", to: "output", label: "ALP (bone/liver mets)" },
        ],
      },
    },
    {
      id: "ihc-tissue-axis",
      title: "The IHC-tissue axis: 10 stains identify tissue of origin",
      context: "The important immunohistochemical stains table (book 223)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A metastatic tumor or hard-to-classify tumor — which IHC stain?",
            sublabel:
              "Input — the IHC table's printed introduction: 'Determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify. Can have prognostic and predictive value.' The stain names the lineage; the lineage names the primary.",
            variant: "input",
          },
          {
            id: "epithelial",
            label: "EPITHELIAL lineage — cytokeratin",
            sublabel:
              "Cytokeratin → epithelial cells → epithelial tumors (eg, squamous cell carcinoma). The cytokeratin stain identifies carcinomas (epithelial malignancies) and is the first-line stain for a metastatic adenocarcinoma or SCC of unknown primary.",
            variant: "process",
          },
          {
            id: "neuroendocrine",
            label: "NEUROENDOCRINE lineage — chromogranin + synaptophysin",
            sublabel:
              "Chromogranin and synaptophysin → neuroendocrine cells → small cell carcinoma of the lung, carcinoid tumor, neuroblastoma. The neuroendocrine marker pair (chromogranin + synaptophysin) identifies the neuroendocrine lineage.",
            variant: "process",
          },
          {
            id: "mesenchymal",
            label: "MESENCHYMAL lineage — desmin, vimentin",
            sublabel:
              "Desmin → muscle → muscle tumors (eg, rhabdomyosarcoma). Vimentin → mesenchymal tissue (fibroblasts, endothelial cells, macrophages) → mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma). Vimentin is the broad mesenchymal marker but is NOT specific (stains many non-mesenchymal tumors too).",
            variant: "process",
          },
          {
            id: "neural",
            label: "NEURAL / GLIAL / NEURAL CREST lineage — GFAP, neurofilament, S-100",
            sublabel:
              "GFAP → neuroglia (astrocytes, Schwann cells, oligodendrocytes) → astrocytoma, glioblastoma. Neurofilament → neurons → neuronal tumors (eg, neuroblastoma). S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis. The S-100 stain identifies the neural crest lineage (melanoma + schwannoma + LCH).",
            variant: "process",
          },
          {
            id: "organ",
            label: "ORGAN-SPECIFIC + VASCULAR + LEUKEMIC — PSA, PECAM-1/CD31, TRAP",
            sublabel:
              "PSA → prostatic epithelium → prostate cancer (organ-specific). PECAM-1/CD-31 → endothelial cells → vascular tumors (eg, angiosarcoma). TRAP → tartrate-resistant acid phosphatase → hairy cell leukemia (the leukemia-specific stain).",
            variant: "process",
          },
          {
            id: "output",
            label: "The stain names the lineage; the lineage names the primary",
            sublabel:
              "Output — the 10-stain IHC table resolves any metastatic-tumor-of-unknown-primary question: stain for lineage (cytokeratin = epithelial, desmin = muscle, GFAP = glia, S-100 = neural crest, vimentin = mesenchymal), then stain for organ (PSA = prostate, PECAM-1/CD31 = endothelium, TRAP = hairy cell). The stain names the lineage; the lineage names the primary.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "epithelial", label: "cytokeratin" },
          { from: "input", to: "neuroendocrine", label: "chromogranin + synaptophysin" },
          { from: "input", to: "mesenchymal", label: "desmin + vimentin" },
          { from: "input", to: "neural", label: "GFAP + neurofilament + S-100" },
          { from: "input", to: "organ", label: "PSA + PECAM-1/CD31 + TRAP" },
          { from: "epithelial", to: "output", label: "epithelial tumors" },
          { from: "neuroendocrine", to: "output", label: "NET (small cell, carcinoid, neuroblastoma)" },
          { from: "mesenchymal", to: "output", label: "muscle + sarcoma" },
          { from: "neural", to: "output", label: "astrocytoma/glioblastoma + melanoma + schwannoma + LCH" },
          { from: "organ", to: "output", label: "prostate + vascular + hairy cell" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "tumor-markers-ihc-map",
      title: "The tumor markers, molecular diagnostics, and IHC map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source pages (book 222-223): four grid panels — the oncogenic microbes grid (8 microbes → cancers: EBV → Burkitt/Hodgkin/nasopharyngeal/1° CNS lymphoma, HBV+HCV → HCC, HHV-8 → Kaposi sarcoma, HPV 16/18 → cervical/penile-anal/head and neck, H pylori → gastric adenocarcinoma + MALT lymphoma, HTLV-1 → adult T-cell leukemia/lymphoma, Clonorchis sinensis → cholangiocarcinoma, Schistosoma haematobium → squamous cell bladder cancer), the serum tumor markers grid (12 markers → associations with NOTES — ALP, AFP, hCG, CA 15-3/27-29, CA 19-9, CA 125, calcitonin, CEA, chromogranin, LDH, NSE, PSA), the cancer testing block (5 entries — TMB, MSI, PD-L1, HRD, liquid biopsy), and the IHC stains grid (10 stains → targets → tumors — chromogranin/synaptophysin, cytokeratin, desmin, GFAP, neurofilament, PSA, PECAM-1/CD31, S-100, TRAP, vimentin). The marker caveat (markers monitor, biopsy diagnoses) and the P-glycoprotein (MDR1) drug-resistance callout are highlighted.",
      notice:
        "Census (pdfimages + VLM): NO raster images on either page (pdfimages -list returned zero rows for both pdf 244 and pdf 245). The pages are pure text — four sections with no figures. The visual is an ORIGINAL KYP adaptation rendering the four sections as grid maps (no source figure to redraw). The tables are carried verbatim in this note's table blocks. No copyrighted photographs exist on either page; nothing reproduced. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 222 — oncogenic microbes (carried verbatim)",
      intro:
        "The 8 oncogenic microbes and the cancers they cause, as printed on the page.",
      columns: ["MICROBE", "CANCER"],
      rows: [
        ["EBV", "Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients)"],
        ["HBV, HCV", "Hepatocellular carcinoma"],
        ["HHV-8", "Kaposi sarcoma"],
        ["HPV (usually types 16, 18)", "Cervical and penile/anal carcinoma, head and neck cancer"],
        ["H pylori", "Gastric adenocarcinoma and MALT lymphoma"],
        ["HTLV-1", "Adult T-cell Leukemia/Lymphoma"],
        ["Liver fluke (Clonorchis sinensis)", "Cholangiocarcinoma"],
        ["Schistosoma haematobium", "Squamous cell bladder cancer"],
      ],
      caption:
        "8 oncogenic microbes, 2 columns. The viral causes (EBV, HBV, HCV, HHV-8, HPV, HTLV-1) and the two parasitic causes (Clonorchis sinensis → cholangiocarcinoma, Schistosoma haematobium → squamous cell bladder cancer) and the one bacterial cause (H pylori → gastric adenocarcinoma + MALT lymphoma). EBV has the longest cancer list (Burkitt, Hodgkin, nasopharyngeal, 1° CNS in immunocompromised).",
    },
    {
      kind: "table",
      title: "Book 222-223 — serum tumor markers (carried verbatim, with NOTES)",
      intro:
        "The 12 serum tumor markers, their cancer associations, and their clinical NOTES. The page's printed caveat: 'Tumor markers should not be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some can be associated with non-neoplastic conditions.'",
      columns: ["MARKER", "ASSOCIATIONS", "NOTES"],
      rows: [
        ["Alkaline phosphatase", "Metastases to bone or liver, Paget disease of bone, seminoma (PLAP)", "Exclude hepatic origin by checking LFTs and GGT levels."],
        ["α-fetoprotein (AFP)", "HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects", "Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome."],
        ["hCG", "Hydatidiform moles and Choriocarcinomas (Gestational trophoblastic disease), testicular cancer, mixed germ cell tumor", "Produced by syncytiotrophoblasts of the placenta."],
        ["CA 15-3/CA 27-29", "Breast cancer", ""],
        ["CA 19-9", "Pancreatic adenocarcinoma", ""],
        ["CA 125", "Epithelial ovarian cancer", ""],
        ["Calcitonin", "Medullary thyroid carcinoma (alone and in MEN2A, MEN2B)", "Calci2nin."],
        ["CEA", "Colorectal and pancreatic cancers. Minor associations: gastric, breast, and medullary thyroid carcinomas", "CarcinoEmbryonic Antigen. Very nonspecific."],
        ["Chromogranin", "Neuroendocrine tumors", ""],
        ["LDH", "Testicular germ cell tumors, ovarian dysgerminoma, other cancers", "Can be used as an indicator of tumor burden."],
        ["Neuron-specific enolase", "Neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma)", ""],
        ["PSA", "Prostate cancer", "Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis."],
      ],
      caption:
        "12 markers, 3 columns. The 4 markers with NOTES (AFP, hCG, calcitonin, CEA, LDH, PSA, ALP — actually 7 with notes; CA 15-3/27-29, CA 19-9, CA 125, chromogranin, NSE have no printed NOTES). The marker caveat: markers MONITOR recurrence/response; biopsy DIAGNOSES. CEA is 'very nonspecific.' PSA is also ↑ in BPH/prostatitis. AFP is normally made by the fetus (transiently elevated in pregnancy; high = neural tube defects, low = Down syndrome). LDH is an indicator of tumor burden. Calcitonin → MEN2A/MEN2B ('Calci2nin').",
    },
    {
      kind: "table",
      title: "Book 223 — cancer testing (carried verbatim, including liquid biopsy)",
      intro:
        "The 4 molecular tests and the liquid biopsy entry, as printed on the page.",
      columns: ["TEST", "DESCRIPTION"],
      rows: [
        ["Tumor mutational burden", "Total number of mutations present in cancer cells. May predict response to certain treatments (eg, immune-checkpoint inhibitors)."],
        ["Microsatellite instability testing", "Assesses deficits in the mismatch repair pathway (hallmark of Lynch syndrome). Used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma)."],
        ["PD-L1 expression patterns", "PD-L1 expressed to varying degrees in certain cancers (eg, NSCLC, urothelial carcinoma). May be targeted with anti-PD-L1 and anti-PD1 antibodies."],
        ["Homologous recombination deficiency testing", "Identifies cancer types with genetic abnormalities and genomic instability (eg, breast, ovarian) that may respond to certain treatments (eg, PARP inhibitors)."],
        ["Liquid biopsy", "Noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer). Aids in early metastatic detection and personalized therapy."],
      ],
      caption:
        "5 entries (4 tests + liquid biopsy). The therapy axis: TMB → immune-checkpoint inhibitors; MSI → Lynch syndrome workup + immune-checkpoint response; PD-L1 → anti-PD-L1/PD1 antibodies (NSCLC, urothelial); HRD → PARP inhibitors (breast, ovarian); liquid biopsy → ctDNA/ctRNA/CTC for profiling (EGFR in lung), monitoring, and surveillance (colorectal).",
    },
    {
      kind: "table",
      title: "Book 223 — important immunohistochemical stains (carried verbatim)",
      intro:
        "The 10 IHC stains, their tissue targets, and the tumors they identify, as printed on the page. The page's printed introduction: 'Determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify. Can have prognostic and predictive value.'",
      columns: ["STAIN", "TARGET", "TUMOR"],
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
        "10 stains, 3 columns. The stain names the lineage; the lineage names the primary. Cytokeratin = epithelial (SCC). Chromogranin + synaptophysin = neuroendocrine (small cell, carcinoid, neuroblastoma). Desmin = muscle (rhabdomyosarcoma). GFAP = glia (astrocytoma, glioblastoma). Neurofilament = neurons (neuroblastoma). PSA = prostatic epithelium. PECAM-1/CD31 = endothelium (angiosarcoma). S-100 = neural crest (melanoma, schwannoma, LCH). TRAP = hairy cell leukemia. Vimentin = mesenchymal (sarcoma, but also many others — endometrial, RCC, meningioma).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 35-year-old man from sub-Saharan Africa presents with a rapidly growing jaw mass; biopsy shows a 'starry-sky' pattern of intermediate-sized B lymphocytes with high proliferation rate and apoptosis.",
        discriminator:
          "EBV → Burkitt lymphoma (the c-myc translocation lymphoma in equatorial Africa)",
        concept: "The EBV / Burkitt lymphoma axis",
        answer:
          "The oncogenic microbes table's EBV row lists four cancers: Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, and 1° CNS lymphoma (in immunocompromised patients). The African-endemic Burkitt lymphoma (jaw mass, starry-sky histology) is the classic EBV-associated cancer. EBV also causes the other three cancers listed — the 4-cancer EBV list is the table's longest microbe-cancer association.",
      },
      {
        stem:
          "A 42-year-old woman with a family history of medullary thyroid carcinoma and pheochromocytoma presents with a thyroid nodule; serum calcitonin is markedly elevated; biopsy shows amyloid stroma and polygonal neuroendocrine cells.",
        discriminator:
          "Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B) — the 'Calci2nin' marker",
        concept: "The calcitonin / medullary thyroid carcinoma axis",
        answer:
          "The serum tumor markers table's calcitonin row: calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B). The family history of MTC + pheochromocytoma is the MEN2A pattern, and the elevated calcitonin is the medullary thyroid marker (parafollicular C-cell origin). The page's printed mnemonic 'Calci2nin' encodes the MEN2 association (the '2' in Calci2nin = MEN2A/MEN2B). CEA is also a MINOR association of medullary thyroid carcinoma per the CEA row, but calcitonin is the primary marker.",
      },
      {
        stem:
          "A 65-year-old man with a 3-cm pigmented lesion on his back undergoes excisional biopsy; the tumor cells stain positive for S-100 and HMB-45; the pathologist requests additional stains to confirm the neural crest lineage.",
        discriminator:
          "S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis",
        concept: "The S-100 / neural crest axis",
        answer:
          "The IHC stains table's S-100 row: S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis. The pigmented lesion and the S-100 positivity confirm the melanoma (the neural crest-derived tumor of melanocytes). S-100 also stains schwannoma (the Schwann cell tumor) and Langerhans cell histiocytosis (the Langerhans cell tumor), but the pigmented lesion points to melanoma. The S-100 stain is the table's neural crest lineage identifier.",
      },
    ],
    traps: [
      {
        a: "PSA is elevated → prostate cancer",
        b: "PSA is also ↑ in BPH and prostatitis",
        whyConfused: "Both involve an elevated PSA and the prostate",
        keyDifference:
          "The table's PSA NOTES explicitly state: 'Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis.' An elevated PSA is NOT specific for prostate cancer — BPH and prostatitis both elevate it. This is the page's printed marker-caveat example: markers MONITOR recurrence/response; they are NOT a primary screening tool, and definitive diagnosis is via biopsy.",
        clue:
          "PSA = also ↑ in BPH/prostatitis; uncertain risk/benefit for screening; the marker caveat (markers monitor, biopsy diagnoses)",
      },
      {
        a: "CEA → colorectal cancer",
        b: "CEA → 'very nonspecific' (colorectal, pancreatic, gastric, breast, medullary thyroid)",
        whyConfused: "Both interpret an elevated CEA",
        keyDifference:
          "The table's CEA NOTES explicitly state: 'CarcinoEmbryonic Antigen. Very nonspecific.' CEA's primary associations are colorectal and pancreatic cancers, but its MINOR associations are gastric, breast, and medullary thyroid carcinomas. An elevated CEA does NOT localize to colorectal cancer alone — the table prints 'very nonspecific.' CEA is the marker caveat's exemplar (markers monitor, do not diagnose).",
        clue:
          "CEA = very nonspecific (colorectal + pancreatic primary, gastric + breast + medullary thyroid minor); the marker caveat",
      },
      {
        a: "AFP is elevated → HCC or germ cell tumor",
        b: "AFP is normally made by fetus → transiently elevated in pregnancy",
        whyConfused: "Both interpret an elevated AFP",
        keyDifference:
          "The table's AFP NOTES explicitly state: 'Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome.' AFP is NOT tumor-specific — it is a fetal protein that is physiologically elevated in pregnancy (high = neural tube/abdominal wall defects, low = Down syndrome). The marker is also associated with ataxia-telangiectasia (non-neoplastic) and neural tube defects (non-neoplastic) — the page's printed caveat that 'some can be associated with non-neoplastic conditions.'",
        clue:
          "AFP = fetal protein; transiently ↑ in pregnancy (high = neural tube defects, low = Down syndrome); also ↑ in ataxia-telangiectasia",
      },
      {
        a: "Vimentin → mesenchymal tumors (sarcoma)",
        b: "Vimentin also stains endometrial carcinoma, RCC, meningioma",
        whyConfused: "Both interpret vimentin positivity",
        keyDifference:
          "The table's vimentin row explicitly states: 'Mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages) → Mesenchymal tumors (eg, sarcoma), BUT ALSO many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma).' Vimentin is NOT specific for mesenchymal tumors — it stains many non-mesenchymal tumors too (endometrial carcinoma, RCC, meningioma). This makes vimentin a broad mesenchymal-lineage marker but NOT a sarcoma-specific stain.",
        clue:
          "Vimentin = broad mesenchymal marker but also endometrial carcinoma, RCC, meningioma (NOT sarcoma-specific)",
      },
    ],
    pivots: [
      {
        lookAlike: "A serum marker is elevated — which cancer (and what is the limitation)?",
        differentiator:
          "Map the marker to the cancer via the marker-cancer axis: AFP → HCC, yolk sac tumor, mixed germ cell, ataxia-telangiectasia, neural tube defects; hCG → gestational trophoblastic disease, testicular, mixed germ cell; LDH → testicular germ cell, ovarian dysgerminoma, tumor burden; CA 15-3/27-29 → breast; CA 19-9 → pancreatic; CA 125 → epithelial ovarian; calcitonin → medullary thyroid (MEN2A/2B); CEA → colorectal/pancreatic + minor gastric/breast/medullary thyroid (very nonspecific); chromogranin + NSE → neuroendocrine; PSA → prostate (also ↑ in BPH/prostatitis); ALP → bone/liver mets, Paget, seminoma (PLAP). Then name the limitation (the marker-caveat: markers MONITOR, biopsy DIAGNOSES; CEA is nonspecific; PSA is also BPH/prostatitis; AFP is also pregnancy).",
        correctPath:
          "Name the marker, name the cancer, name the limitation — the 12-marker table resolves any serum-marker question, but always apply the marker caveat (markers monitor, biopsy diagnoses)",
      },
      {
        lookAlike: "A metastatic tumor of unknown primary — which IHC stain?",
        differentiator:
          "Stain for lineage via the IHC-tissue axis: cytokeratin → epithelial (SCC); chromogranin + synaptophysin → neuroendocrine (small cell lung, carcinoid, neuroblastoma); desmin → muscle (rhabdomyosarcoma); vimentin → mesenchymal (sarcoma, but also endometrial/RCC/meningioma); GFAP → glia (astrocytoma, glioblastoma); neurofilament → neurons (neuroblastoma); S-100 → neural crest (melanoma, schwannoma, LCH); PSA → prostatic epithelium (prostate cancer); PECAM-1/CD31 → endothelium (angiosarcoma); TRAP → hairy cell leukemia. The stain names the lineage; the lineage names the primary.",
        correctPath:
          "Stain for lineage, then stain for organ — the 10-stain IHC table resolves any metastatic-tumor-of-unknown-primary question; the stain names the lineage and the lineage names the primary",
      },
    ],
    miniCase: {
      vignette:
        "A 42-year-old woman presents with a 2-cm thyroid nodule. Her father died of medullary thyroid carcinoma, and her 30-year-old brother was recently diagnosed with pheochromocytoma. Laboratory studies show a markedly elevated serum calcitonin level. Fine-needle aspiration of the nodule shows polygonal cells with neuroendocrine granularity and amyloid stroma. The pathologist confirms medullary thyroid carcinoma (parafollicular C-cell origin).",
      question:
        "Name the serum marker, the cancer, the hereditary syndrome, and identify the OTHER serum marker on the same page that is also associated with this cancer.",
      options: [
        {
          label:
            "Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B). The family history of MTC + pheochromocytoma is the MEN2A pattern. The OTHER serum marker on the same page that is also associated with medullary thyroid carcinoma is CEA — listed as a MINOR association of medullary thyroid carcinoma in the CEA row (CEA's primary associations are colorectal and pancreatic cancers; minor associations are gastric, breast, and medullary thyroid carcinomas). Calcitonin is the PRIMARY marker; CEA is the MINOR marker.",
          text: "Calcitonin → MTC (MEN2A); CEA is the other (minor) marker.",
          correct: true,
          why:
            "Correct on all four layers. (1) THE SERUM MARKER: calcitonin — the table's printed row: 'Calcitonin / Medullary thyroid carcinoma (alone and in MEN2A, MEN2B) / NOTES: Calci2nin.' The 'Calci2nin' mnemonic encodes the MEN2 association. (2) THE CANCER: medullary thyroid carcinoma — the parafollicular C-cell tumor with amyloid stroma and neuroendocrine granularity on FNA. (3) THE HEREDITARY SYNDROME: MEN2A — the family history of MTC + pheochromocytoma is the classic MEN2A pattern (MTC + pheochromocytoma + parathyroid hyperplasia). The calcitonin row explicitly lists MEN2A and MEN2B as the syndromic contexts. (4) THE OTHER MARKER: CEA — the table's CEA row lists 'Minor associations: gastric, breast, and medullary thyroid carcinomas.' CEA's PRIMARY associations are colorectal and pancreatic cancers, but medullary thyroid carcinoma is one of its MINOR associations. So CEA is also a marker for MTC, but calcitonin is the primary/specific marker. The distractors fail at: chromogranin (a general neuroendocrine marker, not the specific MTC marker on the page), AFP (for HCC/yolk sac/germ cell, not MTC), hCG (for gestational trophoblastic disease/testicular, not MTC), and LDH (for testicular germ cell/dysgerminoma, not MTC).",
        },
        {
          label:
            "Chromogranin → medullary thyroid carcinoma. MTC is a neuroendocrine tumor, so chromogranin (the neuroendocrine marker on the same page) is the primary marker; calcitonin is a secondary marker.",
          text: "Chromogranin → MTC; calcitonin is secondary.",
          why:
            "Wrong specificity: while medullary thyroid carcinoma IS a neuroendocrine tumor (the polygonal cells with neuroendocrine granularity on FNA would indeed stain chromogranin), the page's printed table lists calcitonin — not chromogranin — as the marker for MTC. Chromogranin is the table's general neuroendocrine marker (neuroendocrine tumors), but calcitonin is the SPECIFIC marker for MTC (with the 'Calci2nin' mnemonic encoding the MEN2 association). Chromogranin is not listed as an MTC marker on the page; calcitonin is. The family history (MTC + pheochromocytoma) and the elevated calcitonin together pin the MEN2A diagnosis.",
        },
        {
          label:
            "AFP → medullary thyroid carcinoma. AFP is a fetal protein that can be elevated in thyroid cancers; the family history is incidental.",
          text: "AFP → MTC; the family history is incidental.",
          why:
            "Wrong marker for this cancer: AFP's printed associations are HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, and neural tube defects — NOT medullary thyroid carcinoma. AFP is normally made by the fetus (transiently elevated in pregnancy; high = neural tube/abdominal wall defects, low = Down syndrome), and it has no association with MTC. The family history of MTC + pheochromocytoma is the classic MEN2A pattern (not incidental) — the table's calcitonin row explicitly lists MEN2A and MEN2B. The 'Calci2nin' mnemonic encodes the MEN2 association.",
        },
        {
          label:
            "hCG → medullary thyroid carcinoma. hCG is elevated in some thyroid cancers; the elevated calcitonin is a paraneoplastic phenomenon.",
          text: "hCG → MTC; calcitonin is paraneoplastic.",
          why:
            "Wrong marker for this cancer: hCG's printed associations are hydatidiform moles and choriocarcinomas (gestational trophoblastic disease), testicular cancer, and mixed germ cell tumor (produced by syncytiotrophoblasts of the placenta) — NOT medullary thyroid carcinoma. The elevated calcitonin is NOT paraneoplastic; it is the PRIMARY marker for MTC (the parafollicular C cells produce calcitonin). The family history (MTC + pheochromocytoma) and the elevated calcitonin together pin the MEN2A diagnosis. The 'Calci2nin' mnemonic encodes the MEN2 association.",
        },
        {
          label:
            "LDH → medullary thyroid carcinoma. LDH is an indicator of tumor burden, so it is elevated in any cancer including MTC; the calcitonin is a nonspecific acute-phase reactant.",
          text: "LDH → MTC; calcitonin is nonspecific.",
          why:
            "Wrong marker and wrong characterization: LDH's printed associations are testicular germ cell tumors, ovarian dysgerminoma, and other cancers (it IS an indicator of tumor burden, but it is not the MTC marker). Calcitonin is NOT a nonspecific acute-phase reactant — it is the SPECIFIC marker for medullary thyroid carcinoma (parafollicular C-cell origin), with the 'Calci2nin' mnemonic encoding the MEN2A/MEN2B association. The family history (MTC + pheochromocytoma = MEN2A) and the elevated calcitonin together pin the diagnosis. LDH would not be the specific marker for MTC even if it were elevated as a tumor-burden indicator.",
        },
      ],
      reasoning:
        "The stem walks the calcitonin row end to end. (1) THE SERUM MARKER: calcitonin — the table's printed row 'Calcitonin / Medullary thyroid carcinoma (alone and in MEN2A, MEN2B) / NOTES: Calci2nin.' The 'Calci2nin' mnemonic encodes the MEN2 association. (2) THE CANCER: medullary thyroid carcinoma — the parafollicular C-cell tumor with amyloid stroma and neuroendocrine granularity on FNA. (3) THE HEREDITARY SYNDROME: MEN2A — the family history of MTC + pheochromocytoma is the classic MEN2A pattern (the calcitonin row lists both MEN2A and MEN2B). (4) THE OTHER MARKER: CEA — the table's CEA row lists 'Minor associations: gastric, breast, and medullary thyroid carcinomas.' CEA's primary associations are colorectal and pancreatic cancers, but medullary thyroid carcinoma is one of its minor associations. So CEA is also an MTC marker, but calcitonin is the primary/specific one. The distractors fail at: chromogranin (a general NET marker, not the specific MTC marker on the page), AFP (for HCC/yolk sac/germ cell, not MTC), hCG (for gestational trophoblastic disease/testicular, not MTC), and LDH (for testicular germ cell/dysgerminoma, not MTC).",
    },
  },
  mnemonics: [
    {
      code: "MARKERS MONITOR, BIOPSY DIAGNOSES",
      meaning:
        "The page's printed caveat — tumor markers should NOT be used as the 1° tool for cancer diagnosis or screening. They may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy. Some markers (CEA, PSA, AFP) are associated with non-neoplastic conditions. CEA is 'very nonspecific.' PSA is also ↑ in BPH/prostatitis. AFP is normally made by fetus (transiently elevated in pregnancy).",
      memorizes: "The tumor-marker caveat (markers monitor, biopsy diagnoses)",
      whenToUse: "Any tumor-marker question — apply the marker caveat before naming the cancer",
      clinical:
        "Markers MONITOR recurrence/response; biopsy DIAGNOSES. CEA is very nonspecific; PSA is also BPH/prostatitis; AFP is also pregnancy. The caveat is the highest-yield rule on the page.",
    },
    {
      code: "CALCI2NIN = MEN2",
      meaning:
        "The page's printed mnemonic for calcitonin is 'Calci2nin' — the '2' in Calci2nin encodes the MEN2 association (MEN2A and MEN2B). Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B). The '2' is the syndromic hook — calcitonin names the marker, the '2' names the syndrome (MEN2).",
      memorizes: "The calcitonin / MEN2 association (Calci2nin = MEN2)",
      whenToUse: "Any calcitonin or medullary thyroid carcinoma question",
      clinical:
        "Calcitonin → MTC; 'Calci2nin' → MEN2A/MEN2B. The parafollicular C-cell tumor with the MEN2 syndromic context.",
    },
    {
      code: "S-100 = NEURAL CREST 100",
      meaning:
        "S-100 stains neural crest cells and identifies the three neural crest-derived tumors: melanoma (the melanocyte tumor), schwannoma (the Schwann cell tumor), and Langerhans cell histiocytosis (the Langerhans cell tumor). The '100' encodes the breadth of neural crest lineage — melanoma + schwannoma + LCH — all stained by S-100.",
      memorizes: "The S-100 / neural crest lineage trio (melanoma, schwannoma, LCH)",
      whenToUse: "Any S-100 stain or metastatic-tumor-of-unknown-primary question",
      clinical:
        "S-100 → neural crest → melanoma, schwannoma, Langerhans cell histiocytosis. The stain names the lineage; the lineage names the primary.",
    },
    {
      code: "P-GP PUMPS POISON",
      meaning:
        "P-glycoprotein (also called multidrug resistance protein 1, MDR1) is an ATP-dependent efflux pump expressed in some cancer cells to pump out toxins — including chemotherapeutic agents. This is one mechanism of ↓ responsiveness or resistance to chemotherapy over time. The 'pumps poison' phrase encodes the efflux mechanism (ATP-dependent, toxin-exporting, chemotherapy-resistance phenotype).",
      memorizes: "The P-glycoprotein / MDR1 drug-resistance mechanism",
      whenToUse: "Any chemotherapy-resistance or MDR1 question",
      clinical:
        "P-glycoprotein (MDR1) = ATP-dependent efflux pump → exports chemotherapy → multidrug resistance. The cancer cell's toxin-export mechanism.",
    },
  ],
  rapidReview: {
    s30: [
      "EBV → Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (immunocompromised)",
      "HBV, HCV → hepatocellular carcinoma",
      "HHV-8 → Kaposi sarcoma",
      "HPV (usually types 16, 18) → cervical and penile/anal carcinoma, head and neck cancer",
      "H pylori → gastric adenocarcinoma and MALT lymphoma",
      "HTLV-1 → adult T-cell leukemia/lymphoma",
      "Liver fluke (Clonorchis sinensis) → cholangiocarcinoma",
      "Schistosoma haematobium → squamous cell bladder cancer",
      "Alkaline phosphatase → metastases to bone or liver, Paget disease of bone, seminoma (PLAP)",
      "AFP → HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects",
      "hCG → hydatidiform moles and choriocarcinomas (gestational trophoblastic disease), testicular cancer, mixed germ cell tumor",
      "CA 15-3/CA 27-29 → breast cancer; CA 19-9 → pancreatic adenocarcinoma; CA 125 → epithelial ovarian cancer",
      "Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B) — Calci2nin",
      "CEA → colorectal and pancreatic cancers (minor: gastric, breast, medullary thyroid) — very nonspecific",
      "Chromogranin → neuroendocrine tumors; NSE → neuroendocrine tumors (SCLC, carcinoid, neuroblastoma)",
      "LDH → testicular germ cell tumors, ovarian dysgerminoma, other cancers (indicator of tumor burden)",
      "PSA → prostate cancer (also ↑ in BPH/prostatitis; uncertain risk/benefit for screening)",
      "Tumor mutational burden → predicts response to immune-checkpoint inhibitors",
      "MSI testing → mismatch repair deficits (Lynch syndrome); colorectal and endometrial carcinoma",
      "PD-L1 expression → may be targeted with anti-PD-L1 and anti-PD1 antibodies (NSCLC, urothelial)",
      "HRD testing → identifies breast/ovarian cancers that may respond to PARP inhibitors",
      "Liquid biopsy → ctDNA, ctRNA, CTCs for cancer profiling (EGFR in lung), monitoring, surveillance",
      "Chromogranin + synaptophysin → neuroendocrine cells → small cell carcinoma of the lung, carcinoid, neuroblastoma",
      "Cytokeratin → epithelial cells → epithelial tumors (eg, SCC); Desmin → muscle → rhabdomyosarcoma",
      "GFAP → neuroglia (astrocytes, Schwann cells, oligodendrocytes) → astrocytoma, glioblastoma",
      "Neurofilament → neurons → neuronal tumors (eg, neuroblastoma)",
      "PSA (IHC) → prostatic epithelium → prostate cancer; PECAM-1/CD-31 → endothelial cells → angiosarcoma",
      "S-100 → neural crest cells → melanoma, schwannoma, Langerhans cell histiocytosis",
      "TRAP → tartrate-resistant acid phosphatase → hairy cell leukemia",
      "Vimentin → mesenchymal tissue → sarcoma, but also endometrial carcinoma, RCC, meningioma",
      "P-glycoprotein (MDR1) = ATP-dependent efflux pump → pumps out chemotherapy → multidrug resistance",
    ],
    m3: [
      "MARKERS MONITOR, BIOPSY DIAGNOSES — the marker caveat (markers are NOT the 1° tool for diagnosis or screening)",
      "CALCI2NIN = MEN2 — calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B)",
      "S-100 = NEURAL CREST 100 — melanoma, schwannoma, Langerhans cell histiocytosis",
      "P-GP PUMPS POISON — P-glycoprotein (MDR1) = ATP-dependent efflux pump → chemotherapy resistance",
      "EBV = 4 CANCERS — Burkitt, Hodgkin, nasopharyngeal, 1° CNS lymphoma (immunocompromised)",
    ],
    m10: [
      "The marker caveat (markers monitor recurrence/response, biopsy diagnoses) is the page's highest-yield rule — CEA is very nonspecific, PSA is also ↑ in BPH/prostatitis, AFP is normally made by fetus (transiently elevated in pregnancy)",
      "Calcitonin → medullary thyroid carcinoma (alone and in MEN2A, MEN2B); 'Calci2nin' encodes the MEN2 association; CEA is a MINOR association of MTC (the other marker on the page)",
      "EBV has the longest microbe-cancer list (4 cancers: Burkitt, Hodgkin, nasopharyngeal, 1° CNS lymphoma in immunocompromised); H pylori causes both gastric adenocarcinoma AND MALT lymphoma; Schistosoma haematobium causes SQUAMOUS cell bladder cancer (not the usual transitional cell)",
      "The cancer-testing therapy axis: TMB → immune-checkpoint inhibitors; MSI → Lynch + immune-checkpoint response; PD-L1 → anti-PD-L1/PD1 (NSCLC, urothelial); HRD → PARP inhibitors (breast, ovarian); liquid biopsy → ctDNA/ctRNA/CTC profiling (EGFR in lung), monitoring, surveillance",
      "Vimentin is NOT sarcoma-specific — it also stains endometrial carcinoma, RCC, and meningioma; cytokeratin identifies epithelial tumors; S-100 identifies neural crest; chromogranin + synaptophysin identify neuroendocrine; PECAM-1/CD31 identifies endothelium (angiosarcoma); TRAP identifies hairy cell leukemia; PSA identifies prostate",
    ],
  },
  recall: [
    {
      q: "The 8 oncogenic microbes and their cancer associations verbatim.",
      a: "EBV → Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma (in immunocompromised patients). HBV, HCV → Hepatocellular carcinoma. HHV-8 → Kaposi sarcoma. HPV (usually types 16, 18) → Cervical and penile/anal carcinoma, head and neck cancer. H pylori → Gastric adenocarcinoma and MALT lymphoma. HTLV-1 → Adult T-cell Leukemia/Lymphoma. Liver fluke (Clonorchis sinensis) → Cholangiocarcinoma. Schistosoma haematobium → Squamous cell bladder cancer.",
    },
    {
      q: "The AFP, hCG, and calcitonin serum-marker rows verbatim, including NOTES.",
      a: "α-fetoprotein (AFP) → HCC, endodermal sinus (yolk sac) tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects. NOTES: Normally made by fetus. Transiently elevated in pregnancy. High levels associated with neural tube and abdominal wall defects, low levels associated with Down syndrome. hCG → Hydatidiform moles and Choriocarcinomas (Gestational trophoblastic disease), testicular cancer, mixed germ cell tumor. NOTES: Produced by syncytiotrophoblasts of the placenta. Calcitonin → Medullary thyroid carcinoma (alone and in MEN2A, MEN2B). NOTES: Calci2nin.",
    },
    {
      q: "The CEA, LDH, NSE, and PSA serum-marker rows verbatim, including NOTES.",
      a: "CEA → Colorectal and pancreatic cancers. Minor associations: gastric, breast, and medullary thyroid carcinomas. NOTES: CarcinoEmbryonic Antigen. Very nonspecific. LDH → Testicular germ cell tumors, ovarian dysgerminoma, other cancers. NOTES: Can be used as an indicator of tumor burden. Neuron-specific enolase → Neuroendocrine tumors (eg, small cell lung cancer, carcinoid tumor, neuroblastoma). PSA → Prostate cancer. NOTES: Prostate-Specific Antigen—monitor recurrence/response; uncertain risk/benefit for screening. Also ↑ in BPH/prostatitis.",
    },
    {
      q: "The 5 cancer-testing entries verbatim (4 tests + liquid biopsy).",
      a: "Tumor mutational burden → Total number of mutations present in cancer cells. May predict response to certain treatments (eg, immune-checkpoint inhibitors). Microsatellite instability testing → Assesses deficits in the mismatch repair pathway (hallmark of Lynch syndrome). Used to assess prognosis and determine treatment for certain cancers (eg, colorectal adenocarcinoma, endometrial carcinoma). PD-L1 expression patterns → PD-L1 expressed to varying degrees in certain cancers (eg, NSCLC, urothelial carcinoma). May be targeted with anti-PD-L1 and anti-PD1 antibodies. Homologous recombination deficiency testing → Identifies cancer types with genetic abnormalities and genomic instability (eg, breast, ovarian) that may respond to certain treatments (eg, PARP inhibitors). Liquid biopsy → Noninvasive diagnostic test in body fluid (eg, blood, urine) using circulating tumor DNA (ctDNA), RNA (ctRNA), or circulating tumor cells (CTCs) for cancer profiling (eg, EGFR in lung cancer), treatment monitoring, and post-treatment surveillance (eg, colorectal cancer). Aids in early metastatic detection and personalized therapy.",
    },
    {
      q: "The 10 IHC stains verbatim — stain, target, tumor.",
      a: "Chromogranin and synaptophysin → Neuroendocrine cells → Small cell carcinoma of the lung, carcinoid tumor, neuroblastoma. Cytokeratin → Epithelial cells → Epithelial tumors (eg, squamous cell carcinoma). Desmin → Muscle → Muscle tumors (eg, rhabdomyosarcoma). GFAP → NeuroGlia (eg, astrocytes, Schwann cells, oligodendrocytes) → Astrocytoma, Glioblastoma. Neurofilament → Neurons → Neuronal tumors (eg, neuroblastoma). PSA → Prostatic epithelium → Prostate cancer. PECAM-1/CD-31 → Endothelial cells → Vascular tumors (eg, angiosarcoma). S-100 → Neural crest cells → Melanoma, schwannoma, Langerhans cell histiocytosis. TRAP → Tartrate-resistant acid phosphatase → Hairy cell leukemia. Vimentin → Mesenchymal tissue (eg, fibroblasts, endothelial cells, macrophages) → Mesenchymal tumors (eg, sarcoma), but also many other tumors (eg, endometrial carcinoma, renal cell carcinoma, meningioma).",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The tumor markers measure the OUTCOMES of cancer hallmarks: CEA and CA 19-9 reflect the sustaining-proliferative-signaling and resisting-cell-death phenotypes; PD-L1 expression reflects the evading-immune-destruction hallmark (the cancer cell's checkpoint-ligand shield); HRD and MSI reflect the genome-instability hallmark (the defective DNA-repair phenotypes that PARP inhibitors and immune-checkpoint inhibitors exploit); P-glycoprotein reflects the resisting-cell-death hallmark via the toxin-efflux mechanism. Each marker or test names a hallmark the cancer cell has acquired.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The IHC stains classify the nomenclature page's named malignancies by lineage: cytokeratin (carcinoma — the epithelial malignancy), desmin (rhabdomyosarcoma — the muscle sarcoma), vimentin (sarcoma — the mesenchymal malignancy), GFAP (astrocytoma/glioblastoma — the glial malignancy), S-100 (melanoma — the neural crest malignancy), PECAM-1/CD31 (angiosarcoma — the vascular malignancy), TRAP (hairy cell leukemia — the leukemic malignancy). The stain names the lineage; the lineage names the nomenclature category.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The cancer-testing entries tie to the oncogene/suppressor page's molecular lesions: MSI testing identifies mismatch repair deficits (MLH1, MSH2, MSH6, PMS2 loss — the Lynch syndrome genes); HRD testing identifies BRCA1/BRCA2-deficient breast/ovarian cancers (the homologous-recombination tumor suppressors); TMB and PD-L1 expression quantify the mutational load and immune-evasion phenotypes produced by oncogene/tumor-suppressor mutations. The molecular testing axis is the clinical readout of the oncogene/suppressor page's gene-level lesions.",
    },
    {
      title: "Chemical Carcinogens & Organ Cancers",
      topicId: "chemical-carcinogens",
      note: "The oncogenic microbes and the chemical carcinogens are the two environmental causes of cancer: the carcinogen page's 11 toxins (aflatoxins → HCC, alcohol → HCC, tobacco → 8 organs, asbestos → bronchogenic/mesothelioma, vinyl chloride → hepatic angiosarcoma) and this page's 8 oncogenic microbes (EBV → Burkitt, HBV/HCV → HCC, HHV-8 → Kaposi, HPV → cervical/anal/head and neck, H pylori → gastric/MALT, HTLV-1 → adult T-cell leukemia/lymphoma, Clonorchis → cholangiocarcinoma, Schistosoma → squamous bladder). The two pages together are the environmental/occupational/infectious causes of cancer — the marker-cancer axis measures the consequences.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (oncogenic viruses and parasites)",
      connection:
        "The oncogenic microbes table is the microbiology page's cancer-causing-bug roll call: EBV (the 4-cancer herpesvirus), HBV/HCV (the hepatocellular carcinoma viruses), HHV-8 (the Kaposi sarcoma herpesvirus), HPV 16/18 (the E6/E7 oncoprotein papillomavirus causing cervical/anal/head-and-neck), HTLV-1 (the adult T-cell leukemia/lymphoma retrovirus), H pylori (the gastric adenocarcinoma + MALT bacterium), Clonorchis sinensis (the cholangiocarcinoma liver fluke), and Schistosoma haematobium (the squamous cell bladder cancer fluke). Each microbe-cancer pair is a microbiology page teaching point with a distinct mechanism (EBV c-myc translocation, HPV E6/E7 inactivation of p53/Rb, HTLV-1 Tax activation of NF-κB).",
    },
    {
      subject: "Pharmacology (targeted and immune cancer therapy)",
      connection:
        "The cancer-testing entries name the pharmacology page's therapy targets: TMB → immune-checkpoint inhibitors (nivolumab, pembrolizumab — anti-PD1); PD-L1 expression → anti-PD-L1 (atezolizumab) and anti-PD1 antibodies; HRD → PARP inhibitors (olaparib, niraparib — for BRCA-mutated breast/ovarian); MSI-high tumors → immune-checkpoint inhibitors (the Lynch-syndrome-related hypermutated tumors respond). P-glycoprotein (MDR1) names the chemotherapy-resistance mechanism that pharmacology targets with efflux-pump inhibitors (a long-standing drug-development effort). The molecular testing axis is the pharmacology page's biomarker-driven therapy framework.",
    },
    {
      subject: "Pathology (cancer histology by lineage)",
      connection:
        "The IHC stains table is the pathology page's histology-by-lineage framework: cytokeratin (epithelial — carcinoma), desmin (muscle — rhabdomyosarcoma), vimentin (mesenchymal — sarcoma), GFAP (glia — astrocytoma/glioblastoma), neurofilament (neurons — neuroblastoma), S-100 (neural crest — melanoma/schwannoma/LCH), PECAM-1/CD31 (endothelium — angiosarcoma), TRAP (hairy cell leukemia), PSA (prostate). Each stain identifies a lineage and the lineage identifies the histology — the pathology page's tissue-of-origin framework made operational through immunohistochemistry.",
    },
    {
      subject: "Genetics (Lynch syndrome and BRCA testing)",
      connection:
        "The MSI and HRD testing entries are the genetics page's clinical biomarkers: MSI testing identifies mismatch repair (MMR) deficits — the hallmark of Lynch syndrome (MLH1, MSH2, MSH6, PMS2 loss) — and guides immunotherapy for colorectal and endometrial cancers. HRD testing identifies BRCA1/BRCA2-deficient breast/ovarian cancers (the homologous recombination repair genes) that respond to PARP inhibitors. The two tests together are the genetics page's hereditary cancer predisposition workup — Lynch (MMR) and hereditary breast/ovarian (BRCA) — made operational through molecular tumor profiling.",
    },
  ],
};
