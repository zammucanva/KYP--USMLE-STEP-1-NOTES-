#!/usr/bin/env python3
"""Immunology (chapter 2) Phase I-C — full topic extraction (REBUILD).

Rebuilds the 24-topic inventory destroyed with un-pushed commit 4c22047:
- PyMuPDF heading extraction (pdf 115-142) + pdfimages census done this session.
- Every FA subsection on pdf 116-141 claimed by exactly one topic.
- Pilot (hypersensitivity-types) entry preserved byte-identical — it is
  completed work; the pilot owns BOTH 'Hypersensitivity types' and
  'Immunologic blood transfusion reactions' (pdf 131-134) per the documented
  boundary (worklog: 'transfusion-reactions removed — pilot owns it').
- pdf 115 = chapter opener; pdf 142 = blank NOTES page (not a learning unit,
  documented). 24 topics = pilot + E19-E41.
"""
import json
from pathlib import Path

ROOT = Path("/home/z/kyp-usmle-notes")  # repo root (script lives outside the repo)
CH = ROOT / "content/usmle/chapters/immunology.json"

def T(topic_id, title, fa, sub, pages, book, diff, vis, hints, mech, rationale):
    return {
        "topicId": topic_id,
        "title": title,
        "faSubsections": fa,
        "subsection": sub,
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "difficulty": diff,
        "requiresVisual": vis,
        "visualHints": hints,
        "mechanismHeavy": mech,
        "status": "pending",
        "productionRationale": rationale,
    }

topics = [
    # E19 — pdf 116-118 / book 94-96
    T("lymphoid-structures", "Lymphoid Structures: Lymph Node, Spleen & Thymus",
      ["Immune system organs", "Lymph node (follicle, medulla, paracortex)",
       "Lymphatic drainage associations", "Spleen (PALS, follicle, marginal zone)",
       "Thymus (thymoma, involution)"],
      "Immunology — Lymphoid Structures", [116, 117, 118], "94–96", 1, True,
      ["lymph-node-map", "lymphatic-drainage-map", "spleen-thymus-map"], False,
      "The architecture topic: where immune responses happen — B-cell follicle vs T-cell paracortex (and the dendritic-cell trafficking that connects them), white vs red pulp with the PALS/marginal-zone zones, and the thymus as the T-cell school with its tumor/involution pitfalls. The drainage-association map is the classic anatomy-exam crossover."),
    # E20 — pdf 119 / book 97
    T("innate-vs-adaptive-immunity", "Innate vs Adaptive Immunity",
      ["Innate vs adaptive immunity", "Innate immunity", "Adaptive immunity", "Immune privilege"],
      "Immunology — Cellular Components", [119], "97", 1, True,
      ["innate-vs-adaptive-arms"], False,
      "The first principles split: fast/germline-encoded/nonspecific vs slow/rearranged/specific with memory — with immune privilege (eye, testis, placenta, CNS) as the boundary condition the exam loves to probe."),
    # E21 — pdf 120 / book 98
    T("mhc-complex", "MHC I vs MHC II and Bare Lymphocyte Syndrome",
      ["Major histocompatibility complex I and II", "MHC I", "MHC II", "Bare lymphocyte syndrome"],
      "Immunology — Cellular Components", [120], "98", 2, True,
      ["mhc-structure-comparison"], True,
      "The antigen-display machinery: MHC I (all nucleated cells, platelets; endogenous peptides, CD8) vs MHC II (professional APCs; exogenous peptides, CD4), the classic comparison table, and bare lymphocyte syndrome as the transcription-failure phenotype."),
    # E22 — pdf 121 / book 99
    T("hla-subtypes", "HLA Subtypes Associated with Diseases",
      ["HLA subtypes associated with diseases"],
      "Immunology — Cellular Components", [121], "99", 2, False,
      [], False,
      "The association map: B27 (ankylosing spondylitis, IBD, psoriatic arthritis, reactive arthritis), DQ2/DQ8 (celiac), DQB1*0602 (narcolepsy), DR3/DR4 (T1DM), DR4 (RA), DR5 (Hashimoto/pernicious anemia), DRB1*15:01 (MS), B*58:01 (allopurinol hypersensitivity), DRB1*01:03 (IBD). Pure pattern-recognition currency — a table note, no custom visual needed."),
    # E23 — pdf 121 / book 99
    T("nk-b-t-cell-functions", "Major Functions of NK, B and T Cells",
      ["Major functions of natural killer cells", "Major functions of B and T cells"],
      "Immunology — Cellular Components", [121], "99", 2, True,
      ["nk-kill-model", "b-t-division-of-labor"], True,
      "The effector roster: NK cells as the MHC-I-missing-self killers (kill tumor/virus cells with ↓ MHC I; activate via IL-2/IL-15/IFN; perforin/granzymes), B cells as antibody factories + APCs, T cells as the cytokine/effector arm — the cell-function table the whole chapter builds on."),
    # E24 — pdf 122 / book 100
    T("t-cell-development", "T-Cell Development: Thymic Selection & Subset Lineages",
      ["Differentiation of T cells", "Positive selection", "Negative selection"],
      "Immunology — Cellular Components", [122], "100", 2, True,
      ["t-cell-selection-map"], True,
      "The thymic school: positive selection in cortex (MHC recognition → survival), negative selection in medulla (high self-affinity → apoptosis or Treg), AIRE deficiency → autoimmune polyendocrine syndrome, then the helper lineage table (Th1/Th2/Th17/Treg cytokines and functions)."),
    # E25 — pdf 122 / book 100
    T("cytotoxic-regulatory-t-cells", "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
      ["Macrophage-lymphocyte interaction", "Cytotoxic T cells", "Regulatory T cells"],
      "Immunology — Cellular Components", [122], "100", 2, True,
      ["ctl-kill-cycle", "treg-suppression-model"], True,
      "The CD8 kill (perforin/granzyme B apoptosis of virus-infected/neoplastic/graft cells via MHC I), the Th1-macrophage activation loop (IFN-γ + CD40L-CD40), and the Treg brake (CD3/CD4/CD25/FOXP3; IL-10/TGF-β; IPEX when FOXP3 fails)."),
    # E26 — pdf 123 / book 101
    T("lymphocyte-activation-tolerance", "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      ["T- and B-cell activation", "T-cell activation", "B-cell activation and class switching",
       "Peripheral tolerance", "Anergy"],
      "Immunology — Cellular Components", [123], "101", 2, True,
      ["activation-signal-model"], True,
      "Signal 1 + signal 2 (costimulation) as the decision gate — CD28-B7 for T cells, CD40L-CD40 + cytokines for B cells — and what happens without signal 2: anergy or deletion; CTLA-4/PD-1 as the inhibitory checkpoints (and the drug targets they became)."),
    # E27 — pdf 124 / book 102
    T("antibody-structure", "Antibody Structure & Function",
      ["Antibody structure and function"],
      "Immunology — Immune Responses", [124], "102", 2, True,
      ["antibody-anatomy"], True,
      "The immunoglobulin anatomy: heavy/light chains, constant (isotype/complement-FcR binding) vs variable (antigen binding) regions, hinge flexibility, Fab vs Fc, and the papain vs pepsin cleavage map — the structural foundation for every isotype and engineering question."),
    # E28 — pdf 125 / book 103
    T("immunoglobulin-isotypes", "Immunoglobulin Isotypes & Antigen Memory",
      ["Immunoglobulin isotypes", "IgG", "IgA", "IgM", "IgD", "IgE",
       "Antigen type and memory", "Thymus-independent antigens", "Thymus-dependent antigens"],
      "Immunology — Immune Responses", [125], "103", 2, True,
      ["isotype-comparison-table"], False,
      "The isotype roster (IgG: placenta/complement/opsonin; IgA: secretions/dimer with J chain; IgM: pentamer/first/complement; IgD: receptor; IgE: parasites/mast-cell FcεRI) plus thymus-independent (repeated epitopes, no class switching/memory) vs thymus-dependent antigens."),
    # E29 — pdf 126 / book 104
    T("complement-pathways", "The Complement System",
      ["Complement", "Opsonins", "Inhibitors"],
      "Immunology — Immune Responses", [126], "104", 2, True,
      ["complement-cascade-map"], True,
      "The cascade: classical (IgG/IgM immune complexes, C1qrs), lectin (mannan-binding lectin), alternative (microbial surfaces, spontaneous C3 tickover) → C3 convertases → C3b opsonization → C5 convertase → MAC (C5b-9); the anaphylatoxins C3a/C4a/C5a; and the inhibitors (C1-INH, DAF/CD55, CD59) whose failure causes disease."),
    # E30 — pdf 127 / book 105
    T("complement-disorders", "Complement Disorders & Pathway Testing",
      ["Complement disorders", "Complement protein deficiencies (C1–C4)",
       "Terminal complement deficiencies (C5–C9)", "Complement regulatory protein deficiencies",
       "C1 inhibitor deficiency", "Paroxysmal nocturnal hemoglobinuria", "Complement pathway testing"],
      "Immunology — Immune Responses", [127], "105", 2, True,
      ["complement-deficiency-map"], True,
      "The deficiency patterns: early components (C1-C4) → immune-comcomplex disease + encapsulated bugs; terminal (C5-C9) → Neisseria; C1-INH → hereditary angioedema; DAF/CD59 loss → PNH. Plus the lab interpretation: classical pathway CH50 ↓ with immune-complex disease, alternative pathway AH50, and the combined testing logic."),
    # E31 — pdf 128 / book 106
    T("cytokines", "Important Cytokines",
      ["Important cytokines", "Secreted by macrophages", "Secreted by T cells",
       "From Th1 cells", "From Th2 cells"],
      "Immunology — Immune Responses", [128], "106", 2, True,
      ["cytokine-network-map"], False,
      "The signaling roster: macrophage IL-1 (fever, acute phase), IL-6 (acute phase, B-cell growth), TNF-α (cachexia, endothelial activation/sepsis), IL-8 (neutrophil chemotaxis), IL-12 (NK/Th1); T-cell IL-2 (T-cell growth — and the transplant-drug target), IL-3; Th1 IFN-γ; Th2 IL-4/5/10/13 — each tied to the drug or disease that makes it exam-currency."),
    # E32 — pdf 129 / book 107
    T("respiratory-burst-ifn", "Respiratory Burst & Type I Interferons",
      ["Respiratory burst", "Type I interferons"],
      "Immunology — Immune Responses", [129], "107", 2, True,
      ["respiratory-burst-enzymes"], True,
      "The NADPH oxidase enzyme complex (O2 → O2⁻) with myeloperoxidase (HOCl) and catalase-positive S. aureus as the CGD signature — plus the female-carrier lupus-like discoid rash story; and type I IFN (IFN-α/β) as the innate antiviral: induces PKR/2'5'-oligoadenylate synthetase/RNase L in virus-infected cells, blocks viral spread."),
    # E33 — pdf 130 / book 108
    T("cd-markers", "Cell Surface Proteins: The CD Marker Map",
      ["Cell surface proteins", "T cells", "Helper T cells", "Cytotoxic T cells",
       "Regulatory T cells", "B cells", "NK cells", "Macrophages", "Hematopoietic stem cells"],
      "Immunology — Immune Responses", [130], "108", 2, True,
      ["cd-marker-map"], False,
      "The identification codes: CD3 (all T), CD4/CD8 (helper/cytotoxic), CD25+FOXP3 (Treg), CD19/20 (B), CD56 (NK), CD14/CD40 (macrophage), CD34 (HSC) — plus the drug targets (anti-CD3, rituximab anti-CD20) and the flow-cytometry reading skill this map enables."),
    # E34 — pdf 130-131 / book 108-109
    T("active-passive-immunity", "Active vs Passive Immunity & Vaccination",
      ["Passive vs active immunity", "Passive", "Active", "Vaccination",
       "Live attenuated vaccine", "Killed or inactivated vaccine",
       "Subunit, recombinant, polysaccharide, and conjugate", "Toxoid", "mRNA"],
      "Immunology — Immune Responses", [130, 131], "108–109", 2, True,
      ["vaccine-type-spectrum"], False,
      "Acquired immunity routes: active (recovery, live/killed/subunit/conjugate/toxoid/mRNA vaccines — with the memory/booster logic of each) vs passive (IgG placenta, breast milk IgA, antitoxin/IVIG — immediate but waning), and the conjugate-vaccine trick that gives polysaccharides a T-cell face."),
    # E35 — pdf 135 / book 113
    T("autoantibodies", "Autoantibodies and Their Disease Associations",
      ["Autoantibodies"],
      "Immunology — Immune Responses", [135], "113", 2, False,
      [], False,
      "The serology directory: dsDNA/Sm (lupus), SS-A/SS-B (Sjögren), Scl-70/centromere (scleroderma/CREST), Jo-1 (myositis/polymyositis), anti-CCP (RA), anti-Jo1, anti-Mi-2, ANCA patterns, anti-histone (drug-induced lupus), anti-RNP (MCTD), anti-topoisomerase — organized by disease family for the two-step matching question. Table note, no custom visual needed."),
    # E36 — pdf 136 / book 114
    T("b-cell-immunodeficiencies", "B-Cell Immunodeficiencies",
      ["Immunodeficiencies", "B-cell disorders", "X-linked (Bruton) agammaglobulinemia",
       "Selective IgA deficiency", "Common variable immunodeficiency"],
      "Immunology — Immune Responses", [136], "114", 2, True,
      ["b-cell-deficiency-map"], True,
      "The antibody-failure family: Bruton (X-linked, BTK, no B cells, recurrent encapsulated/Giardia after 6 months), selective IgA (most common, asymptomatic/anaphylaxis to transfusion), CVID (↓ IgG/IgA, onset 20s-30s) — each mapped to the missing developmental step."),
    # E37 — pdf 136-137 / book 114-115
    T("t-cell-phagocyte-immunodeficiencies", "T-Cell & Phagocyte Immunodeficiencies",
      ["T-cell disorders", "Thymic aplasia (DiGeorge syndrome)", "Velocardiofacial syndrome",
       "IL-12 receptor deficiency", "Autosomal dominant hyper-IgE (Job) syndrome",
       "Chronic mucocutaneous candidiasis", "B- and T-cell disorders",
       "Severe combined immunodeficiency", "Ataxia-telangiectasia", "Hyper-IgM syndrome",
       "Wiskott-Aldrich syndrome", "Phagocyte dysfunction",
       "Leukocyte adhesion deficiency (type 1)", "Chédiak-Higashi syndrome",
       "Chronic granulomatous disease"],
      "Immunology — Immune Responses", [136, 137], "114–115", 3, True,
      ["immunodeficiency-spectrum-map"], True,
      "The cell-mediated failure spectrum: DiGeorge (22q11, thymic aplasia, T-cell lack), IL-12 receptor (mycobacteria), Job (STAT3, eczema/cold abscesses/candida), CMC (T-cell defect); combined — SCID (various, no T/B), ataxia-telangiectasia (ATM), hyper-IgM (CD40L, no class switching), Wiskott-Aldrich (WAS, thrombocytopenia+eczema+recurrent infections); phagocyte — LAD-1 (no rolling → no pus), Chédiak-Higashi (granule fusion), CGD (NADPH oxidase, catalase+ abscesses)."),
    # E38 — pdf 138 / book 116
    T("immunodeficiency-infection-patterns", "Infections in Immunodeficiency",
      ["Infections in immunodeficiency", "Bacteria", "Viruses", "Fungi/parasites"],
      "Immunology — Immune Responses", [138], "116", 2, True,
      ["bug-pattern-matrix"], False,
      "The back-conversion: given the organism pattern, name the immune defect — encapsulated bacteria (B-cell/complement/splenectomy), intracellular bacteria/fungi/parasites (T-cell/phagocyte), viruses (T-cell), Giardia/Cryptosporidium/Campylobacter (IgA/B-cell), Pseudomonas/Aspergillus (neutropenia/phagocyte), Staph aureus/catalase+ (CGD), Serratia/Pseudomonas without pus (LAD)."),
    # E39 — pdf 139 / book 117
    T("transplant-rejection", "Transplant Rejection",
      ["Transplant rejection", "Hyperacute", "Acute", "Chronic", "Graft-versus-host disease"],
      "Immunology — Immune Responses", [139], "117", 2, True,
      ["rejection-timeline-map"], True,
      "The rejection clock: hyperacute (minutes-hours, preformed anti-HLA/ABO antibodies, complement, thrombosis), acute (weeks-months, type IV cellular + type II humoral, reversible with immunosuppression), chronic (months-years, fibrosis/vascular intimal thickening, irreversible), GVHD (donor T cells vs host, GI/skin/liver — the bone-marrow and solid-organ risk profiles)."),
    # E40 — pdf 140-141 / book 118-119
    T("immunosuppressants", "Immunosuppressants",
      ["Immununosuppressants", "Cyclosporine", "Tacrolimus (FK506)", "Sirolimus (rapamycin)",
       "Basiliximab", "Azathioprine", "Mycophenolate mofetil", "Glucocorticoids"],
      "Immunology — Immunosuppressants", [140, 141], "118–119", 2, True,
      ["immunosuppressant-target-map"], True,
      "The transplant pharmacology: calcineururin inhibitors (cyclosporine/tacrolimus — inhibit IL-2 transcription, nephrotoxicity), mTOR (sirolimus — blocks IL-2 receptor signaling, hyperlipidemia/cytopenias), anti-IL-2R (basiliximab), antiproliferatives (azathioprine/mycophenolate), and glucocorticoids (lymphocyte apoptosis) — each mechanism tied to its signature toxicity."),
    # E41 — pdf 141 / book 119
    T("recombinant-cytokines", "Recombinant Cytokines & Clinical Uses",
      ["Recombinant cytokines and clinical uses", "Bone marrow stimulation",
       "Erythropoietin", "Colony stimulating factors", "Thrombopoietin",
       "Immunotherapy", "Interleukin-2", "Interferons"],
      "Immunology — Immunosuppressants", [141], "119", 1, False,
      [], False,
      "Cytokines as drugs: EPO (renal anemia), G-CSF (neutropenia, stem-cell mobilization), thrombopoietin agonists (ITP), IL-2 (renal cell melanoma), IFN-α (HBV/HCV, hairy cell), IFN-β (MS), IFN-γ (CGD) — each tied to the immunology it came from. Compact reference note, no custom visual needed."),
]

ch = json.loads(CH.read_text(encoding="utf8"))
pilot = [t for t in ch["topics"] if t["topicId"] == "hypersensitivity-types"]
assert len(pilot) == 1, "pilot entry missing!"
pilot = pilot[0]

ch["topics"] = [pilot] + topics
ch["extractionStatus"] = "extracted"
ch["extraction"] = {
    "extractedOn": "2026-10-16",
    "method": "PDF text-layer font-level heading extraction (PyMuPDF span styles: #004b6c MyriadPro-Bold 10pt = FA subsection bars; #165d7e semibold = minor headings) + pdfimages raster census + text-layer cross-verification. REBUILD of the extraction destroyed with un-pushed commit 4c22047 (7th environment wipe).",
    "frontMatter": "pdf 115 (book 93) = chapter title/opener page",
    "contentPages": "pdf 116–141 (book 94–119)",
    "backMatter": "pdf 142 (book 120) = blank NOTES page — not a learning unit (documented)",
    "faGroups": [
        {"group": "Lymphoid Structures", "pdfPages": [116, 118], "bookPages": "94–96", "topics": 1},
        {"group": "Cellular Components", "pdfPages": [119, 123], "bookPages": "97–101", "topics": 7},
        {"group": "Immune Responses", "pdfPages": [124, 139], "bookPages": "102–117", "topics": 14},
        {"group": "Immunosuppressants", "pdfPages": [140, 141], "bookPages": "118–119", "topics": 2},
    ],
}
ch["pendingTopicCount"] = None
ch["notes"] = ("Phase I-C full extraction (REBUILD of the inventory lost with un-pushed 4c22047). "
               "23 new topics (status pending) + 1 approved pilot note = 24. Topic granularity follows the "
               "approved pilot pattern (teachable units spanning 1–15 FA subsections; subsection coverage "
               "recorded per topic in faSubsections — every FA subsection on pdf 116–141 is claimed by exactly "
               "one topic). Documented boundary: the pilot note hypersensitivity-types owns BOTH 'Hypersensitivity "
               "types' AND 'Immunologic blood transfusion reactions' (pdf 131–134 / book 109–112) — no separate "
               "transfusion-reactions topic. pdf 142 is a blank NOTES page (not a learning unit). textbookVisuals[] "
               "is authored at production time per topic (visual-inventory contract §3.4); raster census: real "
               "artwork concentrates on pdf 116-118 (lymph node histology, drainage map, spleen/thymus), 120 (MHC "
               "structures), 122-125 (development/activation/antibody/isotypes), 139 (transplant), with 1x1 mask "
               "artifacts excluded. Production proceeds batch-by-batch per contract §9.2; no topic may silently disappear.")
ch["visualPlan"] = {
    "textbookVisualsIdentified": None,  # authored per-topic at production time
    "rightsPosture": "All First Aid 2026 artwork is COPYRIGHTED_NO_REPUBLISH — no republication; every figure is either an ORIGINAL_KYP_REDRAW, ORIGINAL_KYP_ADAPTATION (note-block), or a documented omission.",
    "method": "per-topic visual inventory authored at production time (gen_eN_json.py pattern)",
}

CH.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"immunology.json: extractionStatus=extracted, {len(ch['topics'])} topics "
      f"(1 pilot complete + {len(topics)} pending)")
for g in ch["extraction"]["faGroups"]:
    print(f"  {g['group']}: pdf {g['bookPages']} -> {g['topics']} topic(s)")
