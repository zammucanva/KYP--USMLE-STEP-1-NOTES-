/**
 * Pilot topic manifests — deterministic seed (Phase I-B verification).
 *
 * Evidence quotes below were extracted verbatim from the supplied First Aid
 * 2026 PDFs via findLines (see worklog). verify-evidence.ts re-checks every
 * quote against the PDF text layer — a wrong quote fails the pipeline.
 *
 * The 10 pilot topics: all 16 pipeline stages pass, all 15 QA gates pass,
 * productionStatus = pilot-complete (approved pilot QA, worklog
 * usmle-pilot-3). Chapter-by-chapter Phase I-C topics will be authored the
 * same way, one at a time.
 */

import type { TopicManifest, SourceEvidence, DualPageRef } from "../../src/lib/kyp/usmle/pipeline/schemas";

export const UPDATED = "2026-10-07";

function ev(claim: string, part: 1 | 2, pdfPages: number[], bookPages: string, quote: string): SourceEvidence {
  return {
    claim,
    pages: { part, pdfPages, bookPages } as DualPageRef,
    quote,
    verified: "pass",
    verifiedHow: "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
  };
}

const ALL_GATES_PASS = {
  sourceVerified: "pass", contentComplete: "pass", miniCaseConsistent: "pass",
  kypExtensionsTraceable: "pass", mnemonicQuality: "pass", visualsPaint: "pass",
  visualCoverage: "pass", mechanismRender: "pass", lightMode: "pass", darkMode: "pass",
  mobile: "pass", desktop: "pass", consoleClean: "pass", captionsReadable: "pass",
  trackerSynced: "pass",
} as const;

const ALL_STAGES_PASS = {
  sourceLocated: "pass", chapterMapped: "pass", subsectionMapped: "pass", topicScoped: "pass",
  evidencePinned: "pass", noteAuthored: "pass", visualsAuthored: "pass", mechanismAuthored: "pass",
  clinicalAuthored: "pass", pivotsAuthored: "pass", trapsAuthored: "pass", mnemonicAuthored: "pass",
  rapidReviewAuthored: "pass", relatedAuthored: "pass", qaPassed: "pass", trackerSynced: "pass",
} as const;

/** The KYP-authored exam-strategy layer present in every pilot note. */
function attackLayerExtension(): { id: string; summary: string; origin: "outside-first-aid"; rationale: string; location: string } {
  return {
    id: "usmle-attack-layer",
    summary:
      "KYP-authored exam-strategy synthesis (vignette patterns, classic confusions, look-alike pivots, mini-case with answer autopsy) built on top of the cited First Aid pages — the facts are source-verified, the strategic framing itself is original KYP pedagogy.",
    origin: "outside-first-aid",
    rationale: "First Aid supplies the facts; the pattern/trap/pivot attack structure is a KYP design that does not exist in the source.",
    location: "usmle section (patterns, traps, pivots, miniCase)",
  };
}

const PILOT_CORRECTION =
  "Pilot note sourceRef cites PDF page numbers as \u201cpp.\u201d — the precise dual mapping (pdf + printed book page) is carried in this manifest; updating the approved notes' display strings awaits user decision.";

function manifest(spec: {
  topicId: string;
  title: string;
  chapterId: string;
  chapterTitle: string;
  subsection: string;
  part: 1 | 2;
  pdfPages: number[];
  bookPages: string;
  evidence: SourceEvidence[];
  visualIds: string[];
  mechanismIds: string[];
  kypExtensions: { id: string; summary: string; origin: "outside-first-aid"; rationale: string; location: string }[];
  crossChapterSources?: (DualPageRef & { chapterId: string })[];
  mnemonicStatus?: "authored" | "none-needed";
}): TopicManifest {
  return {
    topicId: spec.topicId,
    title: spec.title,
    chapterId: spec.chapterId,
    chapterTitle: spec.chapterTitle,
    subsection: spec.subsection,
    part: spec.part,
    sourcePages: { part: spec.part, pdfPages: spec.pdfPages, bookPages: spec.bookPages },
    ...(spec.crossChapterSources ? { crossChapterSources: spec.crossChapterSources } : {}),
    sourceEvidence: spec.evidence,
    visualIds: spec.visualIds,
    mechanismIds: spec.mechanismIds,
    kypExtensions: spec.kypExtensions,
    mnemonicStatus: spec.mnemonicStatus ?? "authored",
    qa: { ...ALL_GATES_PASS },
    stages: { ...ALL_STAGES_PASS },
    productionStatus: "pilot-complete",
    pendingCorrections: [PILOT_CORRECTION],
    updatedAt: UPDATED,
  };
}

export const PILOT_MANIFESTS: TopicManifest[] = [
  manifest({
    topicId: "glycolysis-regulation",
    title: "Glycolysis Regulation",
    chapterId: "biochemistry",
    chapterTitle: "Biochemistry",
    subsection: "Metabolism — Glycolysis & Pyruvate Metabolism",
    part: 1,
    pdfPages: [93, 94, 95, 96, 97, 106],
    bookPages: "71–75, 84",
    evidence: [
      ev("Phosphofructokinase-1 is the rate-limiting enzyme of glycolysis", 1, [93], "71", "Phosphofructokinase-1 (PFK-1)"),
      ev("PFK-1 is activated by AMP and fructose-2,6-bisphosphate", 1, [96], "74", "AMP ⊕, fructose-2,6-bisphosphate ⊕"),
      ev("Glucokinase (liver) phosphorylates glucose; hexokinase works at low glucose", 1, [95], "73", "Phosphorylation of glucose to yield glucose-6-phosphate is catalyzed by glucokinase in the liver and"),
      ev("At high glucose concentrations glucokinase stores glucose in the liver", 1, [95], "73", "At high glucose concentrations, glucokinase helps to store glucose"),
      ev("FBPase-2 and PFK-2 are the same bifunctional enzyme", 1, [96], "74", "Fructose bisphosphatase-2 (FBPase-2) and phosphofructokinase-2 (PFK-2) are the same"),
      ev("Pyruvate dehydrogenase requires five cofactors (B1, B2, B3, B5, lipoic acid)", 1, [97], "75", "Pyruvate dehydrogenase (B1, B2, B3, B5,"),
    ],
    visualIds: ["glycolysis-regulation-map", "hexokinase-vs-glucokinase", "pyruvate-hub"],
    mechanismIds: ["fed-state", "fasting-state"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "sympathomimetics",
    title: "Sympathomimetics",
    chapterId: "pharmacology",
    chapterTitle: "Pharmacology",
    subsection: "Autonomic Pharmacology — Sympathomimetics",
    part: 1,
    pdfPages: [262, 263, 264, 265],
    bookPages: "240–243",
    evidence: [
      ev("Sympathomimetics are classified as direct and indirect acting", 1, [263], "241", "Direct sympathomimetics"),
      ev("Epinephrine has β > α receptor activity", 1, [264], "242", "Epinephrine (β > α)"),
      ev("Norepinephrine has α > β receptor activity", 1, [264], "242", "Norepinephrine (α > β)"),
      ev("Isoproterenol has β1 ≈ β2 activity with little α effect", 1, [264], "242", "Isoproterenol (β1 ≈ β2)"),
      ev("After α-blockade, phenylephrine response is suppressed but not reversed (vs epinephrine reversal)", 1, [264], "242", "Phenylephrine response is suppressed but not reversed"),
    ],
    visualIds: ["sympath-receptor-grid", "epi-reversal"],
    mechanismIds: ["norepinephrine-hemodynamics", "isoproterenol-hemodynamics", "epi-reversal"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "atherosclerosis",
    title: "Atherosclerosis",
    chapterId: "cardiovascular",
    chapterTitle: "Cardiovascular",
    subsection: "Vascular Pathology — Atherosclerosis",
    part: 1,
    pdfPages: [324, 325, 326],
    bookPages: "302–304",
    evidence: [
      ev("Atherogenesis progresses from lipid accumulation to foam cells, fatty streaks, and smooth muscle migration", 1, [325], "303", "foam cell formation → fatty streaks → smooth muscle cell migration"),
      ev("Tendinous xanthoma is a hyperlipidemia physical-exam sign", 1, [325], "303", "Tendinous xanthoma"),
      ev("Cholesterol emboli arise from microembolization of plaque material (post-angiography)", 1, [326], "304", "Microembolization of cholesterol displaced from atherosclerotic plaques"),
    ],
    visualIds: ["atherogenesis-timeline"],
    mechanismIds: ["atherogenesis"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "urinary-casts",
    title: "Urinary Casts",
    chapterId: "renal",
    chapterTitle: "Renal",
    subsection: "Renal Pathology — Glomerular, Tubulointerstitial & AKI",
    part: 2,
    pdfPages: [204, 205, 206, 211, 212, 213],
    bookPages: "612–614, 619–621",
    evidence: [
      ev("The casts-in-urine table maps cast morphology to nephron compartment and disease", 2, [204], "612", "Casts in urine"),
      ev("Fatty casts (oval fat bodies) show the Maltese cross pattern", 2, [204], "612", "Fatty casts (“oval fat"),
      ev("Acute tubular necrosis produces muddy brown granular casts", 2, [204], "612", "Acute tubular necrosis (ATN). Can be “muddy brown” in appearance."),
      ev("WBC casts indicate tubulointerstitial inflammation: acute pyelonephritis, transplant rejection", 2, [204], "612", "Tubulointerstitial inflammation, acute pyelonephritis, transplant rejection."),
    ],
    visualIds: ["urinary-cast-gallery"],
    mechanismIds: ["cast-formation", "atn-mechanism"],
    kypExtensions: [
      attackLayerExtension(),
      {
        id: "cast-compartment-diagnosis-framework",
        summary: "The “cast → compartment → diagnosis” organizational framework: each cast is taught as a compartment-localizing sign that branches the differential.",
        origin: "outside-first-aid",
        rationale: "The source lists casts and diseases side by side; the compartment-first diagnostic reasoning structure is KYP's synthesis.",
        location: "blocks: table 'Cast → compartment → diagnosis'",
      },
    ],
  }),
  manifest({
    topicId: "av-conduction-blocks",
    title: "AV Conduction Blocks",
    chapterId: "cardiovascular",
    chapterTitle: "Cardiovascular",
    subsection: "Cardiac Pathology — Arrhythmias & Conduction Blocks",
    part: 1,
    pdfPages: [333, 334, 335, 349],
    bookPages: "311–313, 327",
    evidence: [
      ev("First-degree AV block is defined by prolonged PR interval", 1, [334], "312", "First-degree AV"),
      ev("Second-degree AV block Mobitz type I (Wenckebach) shows progressive PR lengthening", 1, [334], "312", "Mobitz type I"),
      ev("Third-degree (complete) AV block shows atrioventricular dissociation", 1, [334], "312", "Third-degree"),
    ],
    visualIds: ["av-block-ecg"],
    mechanismIds: ["mobitz1-mechanism", "mobitz2-mechanism", "third-degree-mechanism"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "stroke-syndromes",
    title: "Stroke Syndromes",
    chapterId: "neurology",
    chapterTitle: "Neurology & Special Senses",
    subsection: "Clinical Neurology — Ischemic Stroke, Hemorrhage & Aphasia",
    part: 2,
    pdfPages: [105, 117, 118, 119, 120, 121, 122, 306, 307, 308],
    bookPages: "513, 525–530, 714–716",
    crossChapterSources: [
      { part: 2, pdfPages: [306, 307, 308], bookPages: "714–716", chapterId: "rapid-review" },
    ],
    evidence: [
      ev("The middle cerebral artery supplies the lateral cortical surface", 2, [105], "513", "Middle cerebral artery (supplies lateral surface)"),
      ev("In MCA stroke the eyes look toward the lesion, away from the hemiplegic side", 2, [116], "524", "Eyes look toward brain lesion (ie, away from side of hemiplegia). Seen in MCA stroke."),
      ev("Broca aphasia: inferior frontal gyrus, nonfluent speech with intact comprehension", 2, [121], "529", "Broca area in inferior frontal gyrus of frontal lobe. Nonfluent speech with intact language"),
      ev("Subarachnoid hemorrhage appears in the rapid-review pathophysiology table", 2, [308], "716", "Subarachnoid hemorrhage"),
    ],
    visualIds: ["stroke-territory-map"],
    mechanismIds: ["ischemic-stroke-mechanism", "lateral-medullary"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "acid-base-physiology",
    title: "Acid-Base Physiology",
    chapterId: "renal",
    chapterTitle: "Renal",
    subsection: "Renal Physiology — Acid-Base Balance",
    part: 2,
    pdfPages: [196, 200, 201, 202, 203, 219],
    bookPages: "604, 608–611, 627",
    evidence: [
      ev("Winters formula predicts the respiratory compensation for metabolic acidosis", 2, [201], "609", "Winters formula. If measured Pco2 > predicted Pco2"),
      ev("GOLDMARK is the mnemonic for elevated anion gap metabolic acidosis causes", 2, [202], "610", "GOLDMARK:"),
      ev("The acidosis workup branches on the anion gap", 2, [202], "610", "Check anion gap"),
      ev("Renal tubular acidoses are classified into types with distinct mechanisms", 2, [202], "610", "Renal tubular acidosis"),
    ],
    visualIds: ["acid-base-map", "acid-base-algorithm"],
    mechanismIds: ["metabolic-acidosis-mechanism", "respiratory-compensation", "rta-mechanism"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "hypersensitivity-types",
    title: "Hypersensitivity Types",
    chapterId: "immunology",
    chapterTitle: "Immunology",
    subsection: "Immunology — Hypersensitivity Reactions & Transfusion",
    part: 1,
    pdfPages: [131, 132, 133, 134],
    bookPages: "109–112",
    evidence: [
      ev("Hypersensitivity is classified into four types: anaphylactic/atopic (I), antibody-mediated (II), immune complex (III), delayed (IV)", 1, [132], "110", "Hypersensitivity types Four types: Anaphylactic and atopic (type I), antibody-mediated (type II), immune complex (type"),
      ev("Type I mnemonic: First and Fast (anaphylaxis)", 1, [132], "110", "First (type) and Fast (anaphylaxis)."),
      ev("Transfusion reactions are classified by immunologic mechanism", 1, [132], "110", "Transfusion reactions"),
    ],
    visualIds: ["hypersensitivity-mechanisms"],
    mechanismIds: ["type1", "type2", "type3", "type4"],
    kypExtensions: [attackLayerExtension()],
  }),
  manifest({
    topicId: "cranial-nerves",
    title: "Cranial Nerves",
    chapterId: "neurology",
    chapterTitle: "Neurology & Special Senses",
    subsection: "Neuroanatomy — Cranial Nerves & Brainstem",
    part: 2,
    pdfPages: [108, 109, 110, 111, 112, 147, 148, 149, 150],
    bookPages: "516–520, 555–558",
    evidence: [
      ev("Cranial nerve nuclei are mapped by brainstem level", 2, [108], "516", "Cranial nerve nuclei"),
      ev("Cranial nerves and vessels pass together through skull-base foramina", 2, [110], "518", "Cranial nerves and vessel pathways"),
      ev("The cavernous sinus carries CN III–V2 and the internal carotid artery", 2, [149], "557", "through cavernous sinus. Cavernous portion of internal carotid artery is also here."),
      ev("MLF lesion causes internuclear ophthalmoplegia: ipsilateral adduction failure with contralateral nystagmus", 2, [150], "558", "Lesion in MLF = internuclear ophthalmoplegia INO = Ipsilateral adduction failure, Nystagmus"),
    ],
    visualIds: ["cranial-nerve-map"],
    mechanismIds: ["cn3-palsy-mechanism", "ino-mechanism"],
    kypExtensions: [
      attackLayerExtension(),
      {
        id: "lesion-localization-ladder",
        summary: "The “lesion localization ladder — same muscle, four lesions” synthesis: one clinical finding traced up through nerve → nucleus → tract lesion levels.",
        origin: "outside-first-aid",
        rationale: "Source presents palsies lesion-by-lesion; the four-step ladder for the SAME muscle is a KYP reasoning scaffold.",
        location: "blocks: table 'Lesion localization ladder — same muscle, four lesions'",
      },
    ],
  }),
  manifest({
    topicId: "diabetes-mellitus",
    title: "Diabetes Mellitus",
    chapterId: "endocrine",
    chapterTitle: "Endocrine",
    subsection: "Endocrine — Diabetes Mellitus: Pathology & Pharmacology",
    part: 1,
    pdfPages: [101, 371, 372, 373, 374, 380, 381],
    bookPages: "79, 349–352, 358–359",
    crossChapterSources: [
      { part: 1, pdfPages: [101], bookPages: "79", chapterId: "biochemistry" },
    ],
    evidence: [
      ev("The sorbitol pathway (aldose reductase) causes osmotic damage in cataracts, retinopathy, neuropathy", 1, [101], "79", "intracellular sorbitol accumulation, causing osmotic damage (eg, cataracts, retinopathy, and"),
      ev("Type 1 vs type 2 diabetes are contrasted across defect, age, genetics, presentation", 1, [373], "351", "Type 1 vs type 2 diabetes mellitus"),
      ev("Diabetic ketoacidosis is the type 1 emergency", 1, [373], "351", "Diabetic ketoacidosis"),
      ev("Hyperosmolar hyperglycemic state is the type 2 emergency", 1, [373], "351", "Hyperosmolar hyperglycemic state"),
      ev("Metformin is first-line oral therapy in type 2 DM", 1, [380], "358", "Type 2 DM—oral agents (metformin is first line), non-insulin injectables, insulin replacement;"),
    ],
    visualIds: ["diabetes-complications-web"],
    mechanismIds: ["dka-mechanism", "hhs-mechanism", "sorbitol-mechanism"],
    kypExtensions: [attackLayerExtension()],
  }),
];
