#!/usr/bin/env python3
"""Pathology chapter inventory build (Phase I — the master directive's Task 27
production opening). Banner census established: PATHOLOGY banner prints on
pdf 224-248 (book 202-226) with four subsections — CeLLULAR INjURY 224-230
(the source's own mixed-case banner typos, documented per the Micro
convention), INfLAMMATION 231-236, NeOPLASIA 237-246, AGInG 247-248 (p248
is the near-empty NOTES page — 7 nonempty lines, banner + footer only —
claimed by the aging topic as its continuation page). p223 = chapter opener
(book 201, 'HIGH-YIELD PRINCIPLES IN' contents page — unclaimed, the
Micro p143 convention). Heading census walked every page; 19 topics scoped,
every content page 224-248 claimed by exactly one topic."""
import json
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CH = ROOT / "content/usmle/chapters/pathology.json"

SUB = "Pathology — {}"
def T(topicId, title, fa, pages, book, diff, vis, hints, mech, why):
    return {
        "topicId": topicId, "title": title, "faSubsections": fa,
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "difficulty": diff, "requiresVisual": vis, "visualHints": hints,
        "mechanismHeavy": mech, "subsection": SUB.format(fa[0].split(" — ")[0]),
        "status": "pending", "productionRationale": why,
    }

topics = [
    T("cellular-adaptations", "Cellular Adaptations: Hypertrophy Through Dysplasia",
      ["Cellular adaptations"], [224], "202–202", 2, True, ["adaptations-comparison-map"], True,
      "The adaptation ladder (hypertrophy, hyperplasia, atrophy, metaplasia, dysplasia) with the physiologic-vs-pathologic splits — the vocabulary every later injury and neoplasia topic builds on."),
    T("cell-injury-mechanisms", "Cell Injury: Reversible, Irreversible & Ferroptosis",
      ["Cellular injury"], [225], "203–203", 2, True, ["injury-timeline-map"], True,
      "The reversible-to-irreversible timeline (membrane blebbing, chromatin, ribosomes, rupture) and ferroptosis — the mechanism core of the injury section."),
    T("apoptosis-pathways", "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      ["Cellular injury"], [226], "204–204", 2, True, ["apoptosis-pathway-map"], True,
      "The intrinsic (cytochrome C) and extrinsic (Fas, granzyme B/perforin) caspase cascades with the executioner layer and the misfolded-protein arm — the programmed-death mechanism map."),
    T("necrosis-types", "Necrosis: The Five Morphologic Patterns",
      ["Cellular injury"], [227], "205–205", 2, True, ["necrosis-type-map"], False,
      "Coagulative, liquefactive, caseous, fat, and fibrinoid necrosis with their mechanism lines and gross/histologic signatures (the page carries the HISTOLOGY banner content)."),
    T("tissue-injury-infarcts", "Tissue Hypoxia Susceptibility, Infarcts & Free Radicals",
      ["Cellular injury"], [228], "206–206", 2, True, ["infarct-type-map"], True,
      "The organ-by-organ hypoxia susceptibility table (brain, heart, kidney, liver, colon), red vs pale infarcts, and free-radical injury — the hemodynamic-territory content of the injury section."),
    T("calcification-radiation-injury", "Calcification & Radiation Injury",
      ["Cellular injury"], [229], "207–207", 1, True, ["calcification-split-map"], False,
      "Dystrophic vs metastatic calcification with psammoma bodies, and ionizing-radiation injury — the deposition-and-exposure pair."),
    T("amyloidosis", "Amyloidosis: The Deposition Diseases",
      ["Cellular injury"], [230], "208–208", 2, True, ["amyloid-deposition-map"], False,
      "The amyloid table (primary, secondary, transthyretin, dialysis-related, Alzheimer, atrial, islet, medullary thyroid) with Congo red — the deposition-disease directory."),
    T("acute-inflammation", "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
      ["Inflammation"], [231, 232], "209–210", 2, True, ["acute-phase-reactant-map"], True,
      "The cardinal signs, the systemic acute-phase reaction (fever, leukocytosis, ferritin, fibrinogen, haptoglobin, hepcidin, procalcitonin), ESR determinants, and the acute-vs-chronic split."),
    T("leukocyte-trafficking", "Leukocyte Extravasation & Cytokines",
      ["Inflammation"], [233], "211–211", 2, True, ["extravasation-cascade-map"], True,
      "The extravasation cascade (margination, rolling via Sialyl LewisX, adhesion, transmigration) with the cytokine mediators — the mechanism engine of the inflammation section."),
    T("wound-healing", "Wound Healing: Mediators & Phases",
      ["Inflammation"], [234], "212–212", 2, True, ["wound-healing-phases-map"], True,
      "The tissue mediators (angiogenesis factors, PDGF, metalloproteinases) and the three healing phases (inflammatory, proliferative, remodeling) with the diabetes/steroid delay rule."),
    T("granulomatous-inflammation", "Granulomatous Inflammation & Scar Types",
      ["Inflammation"], [235, 236], "213–214", 2, True, ["granuloma-cell-map"], True,
      "The granuloma cell cast (lymphocyte, fibroblast, epithelioid, giant cell) with infectious vs noninfectious causes, and hypertrophic scar vs keloid — the chronic-inflammation close."),
    T("neoplasia-nomenclature", "Neoplasia Nomenclature & Progression",
      ["Neoplasia"], [237, 238], "215–216", 2, True, ["nomenclature-progression-map"], False,
      "The benign-vs-malignant nomenclature tables (epithelial, mesenchymal, blood) and the dysplasia-to-invasive-carcinoma-to-metastasis progression — the vocabulary layer of the neoplasia section."),
    T("cancer-hallmarks", "Hallmarks of Cancer",
      ["Neoplasia"], [239], "217–217", 3, True, ["hallmarks-of-cancer-map"], True,
      "The hallmark table (growth-signal self-sufficiency, anti-growth insensitivity, evasion of apoptosis, limitless replication, sustained angiogenesis, Warburg effect, immune evasion, invasion, metastasis) — the mechanism map of malignancy."),
    T("cancer-immunotherapy-epidemiology", "Cancer Immunotherapy & Epidemiology",
      ["Neoplasia"], [240], "218–218", 2, True, ["immunotherapy-target-map"], True,
      "The checkpoint-inhibitor directory (ipilimumab, atezolizumab, durvalumab, avelumab, cemiplimab, nivolumab, pembrolizumab) and cancer epidemiology (incidence vs mortality) — the translational layer."),
    T("metastasis-patterns", "Metastasis: Organ Patterns & Routes",
      ["Neoplasia"], [241], "219–219", 2, True, ["metastasis-route-map"], True,
      "The organ-by-organ metastasis map (bone, liver, lung, brain) with the primary-tumor sources and route logic — the anatomic layer of spread."),
    T("oncogenes-tumor-suppressors", "Oncogenes & Tumor Suppressors",
      ["Neoplasia"], [242], "220–220", 3, True, ["oncogene-tumor-suppressor-map"], True,
      "The gene table (receptor tyrosine kinases, transcription factors, antiapoptotic molecules, tumor suppressors) with their cancers — the molecular layer of neoplasia."),
    T("chemical-carcinogens", "Chemical Carcinogens & Organ Cancers",
      ["Neoplasia"], [243], "221–221", 1, True, ["carcinogen-organ-map"], False,
      "The carcinogen table (aflatoxins, alkylating agents, aromatic amines, arsenic, and the rest) with source, target organ, and associated cancer — the exposure layer."),
    T("tumor-markers-molecular", "Tumor Markers, Molecular Diagnostics & IHC",
      ["Neoplasia"], [244, 245], "222–223", 2, True, ["tumor-marker-map"], False,
      "The tumor-marker directory (AFP through chromogranin), the molecular diagnostics layer (TMB, MSI, HRD, liquid biopsy), and the immunohistochemistry panel (cytokeratin, desmin, neurofilament, PSA) — the diagnostic layer."),
    T("paraneoplastic-aging", "Paraneoplastic Syndromes & Aging",
      ["Neoplasia", "Aging"], [246, 247, 248], "224–226", 2, True, ["paraneoplastic-syndrome-map"], True,
      "The paraneoplastic syndromes (dermatomyositis, acanthosis nigricans, Leser-Trélat, hypertrophic osteoarthropathy, hypercalcemia, Cushing, SIADH) and the system-by-system aging changes with lipofuscin — the chapter close (p248 is the near-empty NOTES page, claimed as continuation)."),
]

ch = {
    "chapterId": "pathology",
    "chapterTitle": "Pathology",
    "number": 4,
    "part": 1,
    "section": "Section I · High-Yield General Principles",
    "pdfRanges": [{"part": 1, "from": 223, "to": 248}],
    "extractionStatus": "extracted",
    "pendingTopicCount": len(topics),
    "topics": topics,
    "notes": "Phase I inventory built from the banner + heading census. Banner structure (with the source's own printed banner typos, documented per the Micro convention): PATHOLOGY banner on pdf 224-248; subsections CeLLULAR INjURY 224-230 (book 202-208), INfLAMMATION 231-236 (209-214), NeOPLASIA 237-246 (215-224), AGInG 247-248 (225-226; p248 = the near-empty NOTES page, 7 nonempty lines, claimed by paraneoplastic-aging as continuation). p223 = chapter opener (book 201, unclaimed — the Micro p143 convention). p232 and p238 print no banner (continuation pages, assigned to their owners). 19 topics; every content page 224-248 claimed by exactly one topic.",
}
CH.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
done = sum(1 for t in topics if t["status"] == "complete")
print(f"pathology: {done}/{len(topics)} complete · inventory written")
