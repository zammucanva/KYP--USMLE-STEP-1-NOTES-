#!/usr/bin/env python3
"""Pharmacology chapter inventory rebuild (the census lost with the prior
lineage). Builds content/usmle/chapters/pharmacology.json with 29 topics
(28 new + sympathomimetics narrowed to its true evidence pages 263-264),
following the pathology/microbiology census conventions. ALSO applies the
sympathomimetics scope correction: manifest sourcePages 262-265 -> 263-264,
note sourceRef sync, inventory sv1/sv2/sv6 (the p262 anticholinergic/atropine
and p265 alpha-blocker context records) removed — that content gets proper
topics in this census (muscarinic-antagonists on 262, sympatholytics on 265)."""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "content" / "usmle"

SUB_PK = "Pharmacology — Pharmacokinetics and Pharmacodynamics"
SUB_AUTO = "Pharmacology — Autonomic Drugs"
SUB_TOX = "Pharmacology — Toxicities and Adverse Effects"
SUB_MISC = "Pharmacology — Miscellaneous"

def sp(pdf, book):
    return {"part": 1, "pdfPages": pdf, "bookPages": book}

TOPICS = [
    # topicId, title, faSubsections, pdf, bookPages-str, diff, visualHints, mech, subsection, rationale
    ("enzyme-kinetics", "Enzyme Kinetics & Drug-Receptor Interactions", ["Enzyme kinetics"], [250], "228", 2, ["enzyme-kinetics-map"], True, SUB_PK,
     "Km/Vmax with competitive vs noncompetitive inhibition (the Lineweaver-Burk and Michaelis-Mencken figure labels) — the quantitative foundation every PK/PD and pharmacology exam question builds on."),
    ("pharmacokinetics-aging", "Pharmacokinetic Parameters & Age-Related Changes", ["Pharmacokinetics", "Age-related changes in pharmacokinetics"], [251], "229", 2, ["pk-parameters-map"], False, SUB_PK,
     "Bioavailability F with the AUC formula, volume of distribution Vd with the compartment table, clearance, half-life — plus the age-related changes (pediatric and geriatric PK). The parameter trio every dosing question turns on."),
    ("drug-metabolism", "Drug Metabolism: Phase I & Phase II", ["Drug metabolism"], [252], "230", 2, ["metabolism-phase-map"], True, SUB_PK,
     "Phase I (CYP450 oxidation/reduction/hydrolysis) vs phase II (conjugation) metabolism with the key inducers and inhibitors — shared page 252 with elimination-of-drugs, distinct subsections (the p196 shared-page convention)."),
    ("elimination-of-drugs", "Elimination of Drugs: Zero & First Order", ["Elimination of drugs"], [252], "230", 2, ["elimination-kinetics-map"], True, SUB_PK,
     "Zero-order (capacity-limited, constant amount: ethanol, aspirin, phenytoin at therapeutic doses) vs first-order (constant fraction) elimination, the PEA/amount-over-time figure and the steady-state/half-life rules. Shared page 252 with drug-metabolism, distinct subsections."),
    ("urine-ph-dosage", "Urine pH, Ion Trapping & Dosage Calculations", ["Urine pH and drug elimination", "Dosage calculations"], [253], "231", 2, ["urine-ph-trapping-map"], False, SUB_PK,
     "Weak acid/base ion trapping in urine (the aspirin overdose bicarbonate rule) + loading dose vs maintenance dose calculations with the Cp target equations."),
    ("efficacy-potency", "Efficacy vs Potency: Reading Dose-Response Curves", ["Efficacy vs potency"], [254], "232", 2, ["dose-response-map"], False, SUB_PK,
     "Efficacy (Emax, the ceiling) vs potency (EC50, the shift) on the dose-response curve — which the exam tests with partial agonists, competitive antagonists, and the EC50-shift questions."),
    ("receptor-binding-ti", "Receptor Binding, Agonist Types & Therapeutic Index", ["Receptor binding", "Therapeutic index"], [255], "233", 2, ["receptor-binding-map"], False, SUB_PK,
     "The A/B/C receptor-binding panels (full/partial agonists, antagonists, inverse agonists) with the Can/Cannot behaviors + the therapeutic index TD50/ED50 with the margin-of-safety reading."),
    ("drug-effect-modifications", "Drug Effect Modifications", ["Drug effect modifications"], [256], "234", 1, ["effect-modification-map"], False, SUB_AUTO,
     "Potentiation, additive/synergistic effects, tolerance, tachyphylaxis, and the placebo/nocebo framework. Shared page 256 with autonomic-receptors, distinct subsections."),
    ("autonomic-receptors", "Autonomic Receptors: The Organ Response Table", ["Autonomic receptors"], [256], "234", 2, ["autonomic-organ-map"], False, SUB_AUTO,
     "The organ-by-organ autonomic table (eye, heart, vasculature, GI, GU, sweat glands with the sympathetic-cholinergic exception) — THE master table of autonomic pharmacology. Shared page 256 with drug-effect-modifications."),
    ("acetylcholine-receptors", "Acetylcholine Receptors: Nicotinic & Muscarinic", ["Acetylcholine receptors"], [257], "235", 2, ["ach-receptor-map"], True, SUB_AUTO,
     "Nm (somatic muscle), Nn (all autonomic ganglia, adrenal medulla), M1-M3 muscarinic — the binding/activation hierarchy (nerve gas: irreversible; curare: Nn reversible) with the agonist/antagonist matrix. Shared page 257 with pain-transmission."),
    ("pain-transmission", "Pain Transmission & Analgesic Targets", ["Pain transmission"], [257], "235", 2, ["pain-transmission-map"], True, SUB_AUTO,
     "The pain fiber table (A-delta fast/sharp vs C slow/burning), the gate-control and descending modulation pathways, and where opioids/NSAIDs/TCAs act. Shared page 257 with acetylcholine-receptors."),
    ("micturition-control", "Micturition Control: The Bladder Pharmacology", ["Micturition control"], [258], "236", 2, ["micturition-map"], False, SUB_AUTO,
     "The detrusor/sphincter parasympathetic-sympathetic wiring with the Botox/anticholinergic/α-blocker intervention points for urge vs overflow incontinence. Shared page 258 with adrenergic-receptor-distribution."),
    ("adrenergic-receptor-distribution", "Tissue Distribution of Adrenergic Receptors", ["Tissue distribution of adrenergic receptors"], [258], "236", 2, ["adrenergic-distribution-map"], False, SUB_AUTO,
     "α1/α2/β1/β2/β3 receptor distribution by tissue (the B1 one-heart/B2 two-lungs rule) with the vaso, bronchi, and uterine targets. Shared page 258 with micturition-control."),
    ("g-protein-second-messengers", "G-Protein-Linked Second Messengers", ["G-protein–linked second messengers"], [259], "237", 3, ["g-protein-messenger-map"], True, SUB_AUTO,
     "The complete Gs/Gi/Gq table — adrenergic (α1 q, α2 i, β1/β2/β3 s), muscarinic (M1 q, M2 i, M3 q), dopaminergic, and the rest with their second messengers (cAMP, IP3/DAG/Ca2+) and major functions. The single highest-yield table in autonomic pharmacology."),
    ("autonomic-drugs-synapse", "Autonomic Drugs: Synapse Targets & Overview", ["Autonomic drugs"], [260], "238", 2, ["autonomic-synapse-map"], True, SUB_AUTO,
     "The NE-release modulation (α2 autoreceptor negative feedback), amphetamine/VMAT/NET mechanism, and the cholinergic vs noradrenergic synapse figure with every drug's entry point (ChAT, botulinum, AChE, MAO, COMT, reserpine, guanethidine)."),
    ("cholinomimetics", "Cholinomimetic Agents", ["Cholinomimetic agents"], [261], "239", 2, ["cholinomimetic-map"], False, SUB_AUTO,
     "Direct agonists (bethanechol, carbachol, methacholine, pilocarpine — with the source's own mnemonics) vs indirect anticholinesterases (edrophonium, pyridostigmine, echothiophate, the organophosphates + pralidoxime reactivation rule) with applications and the COPD/asthma/peptic-ulcer exacerbation warning."),
    ("muscarinic-antagonists", "Muscarinic Antagonists & Atropine", ["Muscarinic antagonists", "Atropine"], [262], "240", 2, ["muscarinic-antagonist-map"], False, SUB_AUTO,
     "The anticholinergic system reference table (atropine, benztropine, scopolamine, ipratropium, oxybutynin, the SOFT/BENZ mnemonic families) + the atropine block with DUMBBELSS and the temperature-regulation rule."),
    ("sympathomimetics", "Sympathomimetics", ["Sympathomimetics", "Physiologic effects of sympathomimetics"], [263, 264], "241–242", 2, ["sympath-receptor-grid", "epi-reversal"], True, SUB_AUTO,
     "The α1/α2/β1/β2/D1 receptor map with direct (epi, NE, isoproterenol, phenylephrine, dopamine, dobutamine), indirect (amphetamines, ephedrine), and mixed (cocaine, TCAs, MAOIs) sympathomimetics — hemodynamics, indications, and the epinephrine-reversal experiment. PRODUCED (initial build; scope corrected 2026-11-19 from 262-265 to its true evidence pages 263-264)."),
    ("sympatholytics-alpha-blockers", "Sympatholytics (α2-agonists) & α-Blockers", ["Sympatholytics (α2-agonists)", "α-blockers"], [265], "243", 2, ["sympatholytic-alpha-map"], False, SUB_AUTO,
     "The α2-agonists (clonidine, guanfacine, α-methyldopa with the pregnancy/Coombs rules, tizanidine) + the α-blockers (phenoxybenzamine irreversible for pheochromocytoma, phentolamine, the selective α1 blockers with the first-dose hypotension rule)."),
    ("beta-blockers", "β-Blockers", ["β-blockers"], [266], "244", 2, ["beta-blocker-map"], False, SUB_AUTO,
     "The full β-blocker table — the drug list with selectivity/ISA properties, and the nine applications (angina, glaucoma, heart failure with the mortality trio bisoprolol/carvedilol/metoprolol, hypertension, thyroid storm, HCM, migraine, MI) with actions and the contraindication traps."),
    ("phosphodiesterase-inhibitors", "Phosphodiesterase Inhibitors", ["Phosphodiesterase inhibitors"], [267], "245", 2, ["pde-inhibitor-map"], False, SUB_AUTO,
     "The PDE inhibitor table — nonspecific (theophylline, methylxanthines with cardiotoxicity/neurotoxicity), PDE-5 (sildenafil with the NO/cGMP mechanism and the nitrates contraindication), PDE-3 (milrinone), PDE-4 (roflumilast) with mechanisms, uses, and adverse effects."),
    ("seafood-plant-toxins", "Ingested Seafood & Plant Toxins", ["Ingested seafood toxins", "Plant toxins"], [268], "246", 1, ["seafood-plant-toxin-map"], False, SUB_TOX,
     "The seafood toxin table (ciguatera, scombroid with the MAOI interaction, shellfish/saxitoxin, pufferfish/tetrodotoxin) + the plant toxins (anticholinergic plants, ricin, cyanogenic with the bitter-almond rule, convulsions water hemlock)."),
    ("toxicity-treatments", "Specific Toxicity Treatments: The Antidote Table", ["Specific toxicity treatments"], [269], "247", 2, ["antidote-map"], False, SUB_TOX,
     "THE antidote table — acetaminophen (N-acetylcysteine), organophosphates (atropine + pralidoxime), methanol/ethylene glycol (fomepizole/dialysis), iron (deferoxamine), copper/arsenic/gold (dimercaprol), lead (EDTA/succimer), methemoglobinemia (methylene blue), cyanide (nitrite + thiosulfate), opioids, benzos, TCAs, warfarin, heparin — the highest-yield table in toxicology."),
    ("drug-reactions-endocrine", "Drug Reactions: Endocrine & Reproductive", ["Drug reactions—endocrine/reproductive"], [270], "248", 1, ["drug-reaction-endocrine-map"], False, SUB_TOX,
     "The endocrine/reproductive adverse-reaction table — from gynecomastia (spironolactone, cimetidine) to SIADH/hyponatremia (carbamazepine, SSRIs), adrenal insufficiency, hypothyroidism/hyperthyroidism, and the sexual-dysfunction families."),
    ("drug-reactions-hematologic", "Drug Reactions: Hematologic", ["Drug reactions—hematologic"], [271], "249", 1, ["drug-reaction-hematologic-map"], False, SUB_TOX,
     "The hematologic adverse-reaction table — aplastic anemia (chloramphenicol, carbamazepine), agranulocytosis (methimazole, clozapine), megaloblastic (methotrexate, phenytoin), hemolysis (G6PD drugs, penicillin, methyldopa), SLE-like, thrombocytopenia, and the gray-baby/serotonin-syndrome classics."),
    ("drug-reactions-neurologic", "Drug Reactions: Neurologic", ["Drug reactions—neurologic"], [272], "250", 1, ["drug-reaction-neurologic-map"], False, SUB_TOX,
     "The neurologic adverse-reaction table — seizures (bupropion, INH, the withdrawn drugs), tremor/other movement disorders (tardive dyskinesia, Parkinsonism), headache, peripheral neuropathy (INH, vincristine, metronidazole), and the cognitive effects."),
    ("pupil-size-cyp450", "Drugs Affecting Pupil Size & CYP-450 Interactions", ["Drugs affecting pupil size", "Cytochrome P-450 interactions (selected)"], [273], "251", 2, ["pupil-cyp-map"], False, SUB_TOX,
     "The mydriasis/miosis drug lists (the classic pin-point-opioids vs blown-out-atropine/amphetamine/CO pairing) + the CYP-450 table of selected inducers (the chronic alcohol/phenytoin/rifampin family) and inhibitors (the cimetidine/erythromycin/ketoconazole/GFJ family)."),
    ("drug-names", "Drug Names: Prefixes, Suffixes & Stem Families", ["Drug names", "Drug names (continued)"], [274, 275], "252–253", 1, ["drug-name-map"], False, SUB_MISC,
     "The drug-name tables across both pages — the -prazole PPIs, -sartan ARBs, -olol β-blockers, -afil PDE-5s, -statin/-vastatin, gli- antidiabetics, -caine anesthetics, -pril ACEs, the dofa-/gab- families, and the suffix-to-class decoding rules."),
    ("biologic-agents", "Biologic Agents", ["Biologic agents"], [276], "254", 1, ["biologic-agents-map"], False, SUB_MISC,
     "The biologic agents table — the -mab monoclonal antibody families (the -xi-/-zu- humanization codes), the -cept fusion proteins, recombinant cytokines and enzymes, with their targets and indications."),
]

def build():
    topics = []
    for tid, title, fa, pdf, book, diff, hints, mech, sub, rationale in TOPICS:
        topics.append({
            "topicId": tid, "title": title, "faSubsections": fa,
            "sourcePages": sp(pdf, book),
            "difficulty": diff, "requiresVisual": True, "visualHints": hints,
            "mechanismHeavy": mech, "subsection": sub,
            "status": "complete" if tid == "sympathomimetics" else "pending",
            "productionRationale": rationale,
        })
    # carry over the existing sympathomimetics textbookVisuals (minus the re-scoped sv records)
    symp_inv = json.loads((CONTENT / "visual-inventory" / "sympathomimetics.json").read_text())
    keep = [r for r in symp_inv["inventory"] if r["sourcePages"]["pdfPages"] == [263] or r["sourcePages"]["pdfPages"] == [264]]
    for t in topics:
        if t["topicId"] == "sympathomimetics":
            t["textbookVisuals"] = keep
    chapter = {
        "chapterId": "pharmacology", "chapterTitle": "Pharmacology", "number": 5,
        "part": 1, "section": "II",
        "pdfRanges": [{"part": 1, "from": 249, "to": 276}], "bookPages": "227–254",
        "extractionStatus": "extracted",
        "pendingTopicCount": sum(1 for t in topics if t["status"] == "pending"),
        "notes": ("Phase I inventory built from the banner + heading census (the PyMuPDF #004b6c MyriadPro-Bold 10pt "
                  "subsection-bar method). Banner structure: PHARMACOLOGY banner on pdf 249-276 (book 227-254) with "
                  "subsections PHARMACOKINETICS AND PHARMACODYNAMICS 250-255 (228-233), AUTONOMIC DRUGS 256-267 "
                  "(234-245), TOXICITIES AND ADVERSE EFFECTS 268-273 (246-251), MISCELLANEOUS 274-276 (252-254). "
                  "p249 = chapter opener (book 227, unclaimed — the p223 pathology convention). Shared pages with "
                  "distinct subsections (the p196 microbiology convention): p252 (Drug metabolism / Elimination of "
                  "drugs), p256 (Drug effect modifications / Autonomic receptors), p257 (Acetylcholine receptors / "
                  "Pain transmission), p258 (Micturition control / Tissue distribution of adrenergic receptors). "
                  "REBUILD 2026-11-19: the prior lineage's 43-topic inventory was lost with the expired-PAT lineage; "
                  "this census re-derived from source at 29 topics (28 new + sympathomimetics). SCOPE CORRECTION "
                  "documented: the initial-build sympathomimetics topic declared pdf 262-265 but its evidence sits on "
                  "263-264 — narrowed to 263-264 (book 241-242); the p262 anticholinergic/atropine content now owns "
                  "muscarinic-antagonists and the p265 alpha-blocker context owns sympatholytics-alpha-blockers. "
                  "Every content page 250-276 claimed by exactly one topic."),
        "extraction": {
            "extractedOn": "2026-11-19",
            "method": ("PyMuPDF span-style heading census (the immunology method: #004b6c MyriadPro-Bold 10pt = FA "
                       "subsection bars) + banner census + text-layer cross-verification + pdfimages raster census per page."),
            "frontMatter": "pdf 249 (book 227) = chapter title/opener page",
            "contentPages": "pdf 250-276 (book 228-254)",
            "backMatter": "none — pdf 277 opens Public Health (Epidemiology banner)",
            "faGroups": [
                {"group": "Pharmacokinetics and Pharmacodynamics", "pdfPages": [250, 255], "bookPages": "228–233", "topics": 7},
                {"group": "Autonomic Drugs", "pdfPages": [256, 267], "bookPages": "234–245", "topics": 14},
                {"group": "Toxicities and Adverse Effects", "pdfPages": [268, 273], "bookPages": "246–251", "topics": 6},
                {"group": "Miscellaneous", "pdfPages": [274, 276], "bookPages": "252–254", "topics": 2},
            ],
        },
        "visualPlan": {
            "textbookVisualsIdentified": None,
            "rightsPosture": ("All First Aid 2026 artwork is COPYRIGHTED_NO_REPUBLISH — no republication; every figure is "
                              "either an ORIGINAL_KYP_REDRAW, ORIGINAL_KYP_ADAPTATION (note-block), or a documented omission."),
            "method": "per-topic visual inventory authored at production time (gen_pN_json.py pattern)",
        },
        "topics": topics,
    }
    out = CONTENT / "chapters" / "pharmacology.json"
    out.write_text(json.dumps(chapter, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"pharmacology.json written: {len(topics)} topics, pending {chapter['pendingTopicCount']}")

    # sympathomimetics scope correction
    m = json.loads((CONTENT / "manifests" / "sympathomimetics.json").read_text())
    m["sourcePages"] = sp([263, 264], "241–242")
    # drop sourceEvidence? NO — evidence already only on 263/264; keep.
    m.setdefault("notes", "")
    m["notes"] = (m.get("notes") or "") + " Scope corrected 2026-11-19 during the pharmacology census rebuild: declared range narrowed from pdf 262-265 (book 240-243) to the true evidence pages 263-264 (book 241-242); the p262 anticholinergic/atropine and p265 alpha-blocker content now owns muscarinic-antagonists and sympatholytics-alpha-blockers."
    (CONTENT / "manifests" / "sympathomimetics.json").write_text(json.dumps(m, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print("manifest corrected")

    note_p = ROOT / "src/lib/kyp/usmle/notes/sympathomimetics.ts"
    t = note_p.read_text()
    t2 = t.replace('sourceRef: "First Aid 2026, Part 1 pp. 240–243 (sympathomimetics; physiologic effects; α-blockers)"',
                   'sourceRef: "First Aid 2026, Part 1 pp. 241–242 (sympathomimetics; physiologic effects of sympathomimetics)"')
    assert t2 != t, "note sourceRef not replaced"
    note_p.write_text(t2)
    print("note sourceRef corrected")

    inv = symp_inv
    inv["inventory"] = keep
    inv["coverageAudit"] = {"accountedFor": len(keep), "kypOriginals": len(keep), "unresolved": 0,
                            "complete": True, "notes": "Rescoped 2026-11-19: sv1/sv2 (p262 anticholinergic + atropine tables) and sv6 (p265 alpha-blocker context) moved out with the census rebuild — muscarinic-antagonists and sympatholytics-alpha-blockers now own that content; the remaining sv3/sv4/sv5 records match the corrected 263-264 scope."}
    (CONTENT / "visual-inventory" / "sympathomimetics.json").write_text(json.dumps(inv, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"inventory corrected: {len(keep)} records kept")
    print("DONE")

build()
