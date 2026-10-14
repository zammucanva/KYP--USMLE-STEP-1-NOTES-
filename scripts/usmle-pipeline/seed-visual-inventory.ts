/**
 * Pilot visual inventories — deterministic seed (Phase I-B verification).
 *
 * Provenance: source pages rendered with pdftoppm and enumerated by VLM
 * (.usmle-pipeline-cache/renders/<topic>/figures.json), raster detection
 * via pdfimages -list, then CURATED record-by-record against the actual
 * note content (block titles verified in the shipped notes).
 *
 * Curation taxonomy (contract §3.4):
 *   FA table            → KYP note table block        = ORIGINAL_KYP_ADAPTATION (note-block)
 *   FA diagram/pathway  → KYP registry visual         = ORIGINAL_KYP_REDRAW (registry-visual)
 *   FA ECG strips       → KYP schematic ECG engine    = ORIGINAL_KYP_REDRAW (registry-visual)
 *   FA photo/histology/gross/radiology with no KYP
 *   schematic equivalent → not republished             = SOURCE_REFERENCE + explicit
 *                                                          omissionReason (no silent omissions)
 * All source figures: rightsStatus = COPYRIGHTED_NO_REPUBLISH (no license
 * to republish First Aid artwork; internal reference only).
 */

import type {
  TopicVisualInventory, VisualInventoryRecord, VisualCoverageAudit, DualPageRef, VisualType,
} from "../../src/lib/kyp/usmle/pipeline/schemas";

const SOURCE_BOOK = "First Aid for the USMLE Step 1 2026";

type Rec = Omit<VisualInventoryRecord, "sourceBook" | "rightsStatus" | "qaStatus" | "topicId" | "chapterId" | "subsection" | "sourcePages"> & {
  part: 1 | 2;
  pdfPages: number[];
  bookPages: string;
};

function reg(
  n: number, type: VisualType, purpose: string, desc: string,
  part: 1 | 2, pdfPages: number[], bookPages: string,
  implType: "ORIGINAL_KYP_REDRAW" | "ORIGINAL_KYP_ADAPTATION", kypVisualId: string,
  extra?: { notes?: string }
): Rec {
  return {
    visualId: "", // filled by audit() with <topicId>-svN
    visualType: type, visualPurpose: purpose, sourceFigureDescription: desc,
    part, pdfPages, bookPages,
    requiredInKYP: true, implementationType: implType,
    kypVisualId, kypImplementation: "registry-visual", kypLocation: undefined,
    ...(extra ?? {}),
  };
}

function blk(
  n: number, type: VisualType, purpose: string, desc: string,
  part: 1 | 2, pdfPages: number[], bookPages: string, kypLocation: string,
  implType: "ORIGINAL_KYP_REDRAW" | "ORIGINAL_KYP_ADAPTATION" = "ORIGINAL_KYP_ADAPTATION"
): Rec {
  return {
    visualId: "",
    visualType: type, visualPurpose: purpose, sourceFigureDescription: desc,
    part, pdfPages, bookPages,
    requiredInKYP: true, implementationType: implType,
    kypVisualId: null, kypImplementation: "note-block", kypLocation,
  };
}

function omit(
  n: number, type: VisualType, purpose: string, desc: string,
  part: 1 | 2, pdfPages: number[], bookPages: string, reason: string
): Rec {
  return {
    visualId: "",
    visualType: type, visualPurpose: purpose, sourceFigureDescription: desc,
    part, pdfPages, bookPages,
    requiredInKYP: false, implementationType: "SOURCE_REFERENCE",
    kypVisualId: null, kypImplementation: undefined, kypLocation: undefined,
    omissionReason: reason,
  };
}

function isUnresolved(r: VisualInventoryRecord): boolean {
  if (["pending", "in-progress", "failed"].includes(r.qaStatus)) return true;
  if (r.requiredInKYP === true && r.implementationType === "SOURCE_REFERENCE") return true;
  return false;
}

function inventory(topicId: string, chapterId: string, subsection: string, records: Rec[], notes?: string): TopicVisualInventory {
  const inv: VisualInventoryRecord[] = records.map((r, i) => ({
    ...r,
    visualId: `${topicId}-sv${i + 1}`,
    sourceBook: SOURCE_BOOK,
    rightsStatus: "COPYRIGHTED_NO_REPUBLISH" as const,
    qaStatus: "passed" as const,
    topicId,
    chapterId,
    subsection,
    sourcePages: { part: r.part, pdfPages: r.pdfPages, bookPages: r.bookPages } as DualPageRef,
  }));
  const audit: VisualCoverageAudit = {
    topicId,
    textbookVisualCount: inv.length,
    accountedFor: inv.filter((r) => !isUnresolved(r)).length,
    sourceReproductions: inv.filter((r) => r.implementationType === "SOURCE_REPRODUCTION").length,
    kypRedraws: inv.filter((r) => r.implementationType === "ORIGINAL_KYP_REDRAW").length,
    kypOriginals: inv.filter((r) => r.implementationType === "ORIGINAL_KYP_ADAPTATION").length,
    unresolved: inv.filter(isUnresolved).length,
    omitted: inv.filter((r) => r.requiredInKYP === false).length,
    omissionReasons: inv.filter((r) => r.requiredInKYP === false).map((r) => `${r.visualId}: ${r.omissionReason}`),
    complete: true,
  };
  audit.complete = audit.accountedFor === audit.textbookVisualCount && audit.unresolved === 0;
  return { topicId, chapterId, inventory: inv, coverageAudit: audit, ...(notes ? { notes } : {}) };
}

/* ============================================================
   glycolysis-regulation — 12 figures on pdf 93–97, 106
   ============================================================ */

const glycolysis = inventory(
  "glycolysis-regulation", "biochemistry", "Metabolism — Glycolysis & Pyruvate Metabolism",
  [
    blk(1, "VISUAL_TABLE", "Enzyme-naming suffixes", "Enzyme terminology table defining suffixes (kinase, phosphorylase, dehydrogenase...)", 1, [93], "71", "blocks: table 'Enzyme names are functions — read the suffix'"),
    blk(2, "VISUAL_TABLE", "Metabolic control panel", "Rate-determining enzymes of metabolic processes with their activators and inhibitors", 1, [93], "71", "blocks: table 'Rate-determining enzymes — the whole metabolic control panel'"),
    omit(3, "SUMMARY_FIGURE", "Whole-metabolism integration map", "Summary of metabolic pathways showing glycolysis, gluconeogenesis, TCA, urea cycle, HMP shunt, lipid metabolism linked with numbered enzymes", 1, [94], "72", "Whole-body metabolic map — scope of the metabolism-integration topic (Phase I-C); the note absorbs the compartmentation aspect in its table 'Where pathways live — metabolic compartmentation'"),
    reg(4, "VISUAL_TABLE", "Hexokinase vs glucokinase contrast", "Hexokinase vs glucokinase comparison table (location, Km, Vmax, regulation)", 1, [95], "73", "ORIGINAL_KYP_ADAPTATION", "hexokinase-vs-glucokinase", { notes: "Also absorbed as the note's table 'Hexokinase vs glucokinase — same reaction, opposite philosophies'" }),
    omit(5, "VISUAL_TABLE", "Energy carrier reference", "Activated carriers table (ATP, NADH, FADH2, CoA...) with carried groups", 1, [95], "73", "General biochemistry reference table — core carriers covered in the note's net-equation text; full table belongs to the energy-carriers topic (Phase I-C)"),
    reg(6, "BIOCHEMICAL_PATHWAY", "Glycolysis pathway with regulation points", "Glycolysis regulation pathway diagram showing ATP investment/payoff phases and the three regulated enzymes with their ⊕/⊝ regulators", 1, [96], "74", "ORIGINAL_KYP_REDRAW", "glycolysis-regulation-map"),
    reg(7, "BIOCHEMICAL_PATHWAY", "The F-2,6-BP switch", "Regulation by fructose-2,6-bisphosphate diagram: PFK-2/FBPase-2 bifunctional enzyme interconverting glycolysis and gluconeogenesis directions", 1, [96], "74", "ORIGINAL_KYP_REDRAW", "glycolysis-regulation-map", { notes: "The switch panel of the KYP regulation map redraws this figure" }),
    reg(8, "BIOCHEMICAL_PATHWAY", "Pyruvate metabolic hub", "Pyruvate metabolism diagram showing conversion to alanine, lactate, oxaloacetate, and acetyl-CoA with enzymes and cofactors", 1, [97], "75", "ORIGINAL_KYP_REDRAW", "pyruvate-hub"),
    omit(9, "BIOCHEMICAL_PATHWAY", "TCA cycle", "TCA (Krebs) cycle circular pathway diagram with intermediates, enzymes, and regulation", 1, [97], "75", "TCA cycle is its own high-yield topic (Phase I-C TCA note); the PDH gateway is covered in the note's text sections"),
    omit(10, "BIOCHEMICAL_PATHWAY", "Glycogen regulation", "Glycogen regulation by insulin and glucagon/epinephrine signaling (receptors, cAMP, protein kinases)", 1, [106], "84", "Glycogen metabolism — separate FA topic (Phase I-C); cross-link candidate"),
    omit(11, "BIOCHEMICAL_PATHWAY", "Glycogen synthesis/breakdown", "Glycogen synthesis and glycogenolysis diagram with enzyme steps", 1, [106], "84", "Glycogen metabolism — separate FA topic (Phase I-C); cross-link candidate"),
    omit(12, "VISUAL_TABLE", "Glycogen storage diseases", "Glycogen storage disease table (types I–VI, McArdle)", 1, [106], "84", "GSD table — separate FA topic (Phase I-C); cross-link candidate"),
  ],
  "Source page 84 (pdf 106) is shared with the glycogen topics — figures retained here as cross-link references, to be inventoried by their own topics."
);

/* ============================================================
   sympathomimetics — 6 figures on pdf 262–265
   ============================================================ */

const sympathomimetics = inventory("sympathomimetics", "pharmacology", "Autonomic Pharmacology — Sympathomimetics", [
  omit(1, "VISUAL_TABLE", "Anticholinergic system reference", "Muscarinic antagonists table (atropine, benztropine...) by organ system", 1, [262], "240", "Anticholinergics — adjacent pharmacology topic sharing the page; atropine's AV-block use is covered by the av-conduction-blocks note"),
  omit(2, "VISUAL_TABLE", "Atropine actions", "Atropine organ-system actions with DUMBBELSS mnemonic layout", 1, [262], "240", "Anticholinergics — adjacent pharmacology topic sharing the page"),
  blk(3, "VISUAL_TABLE", "Sympathomimetic classification", "Sympathomimetics table categorizing direct and indirect drugs by receptor site, hemodynamic changes, and applications", 1, [263], "241", "blocks: tables 'The three intravenous catecholamines side by side' + 'Indirect-acting sympathomimetics' + 'Selected direct agonists — use-cases worth overlearning'"),
  blk(4, "PHYSIOLOGY_DIAGRAM", "Catecholamine hemodynamic traces", "Physiologic effects graphs: blood pressure, heart rate, peripheral resistance for norepinephrine, epinephrine, isoproterenol", 1, [264], "242", "blocks: table 'The three intravenous catecholamines side by side' (hemodynamic columns)", "ORIGINAL_KYP_ADAPTATION"),
  reg(5, "PHARMACOLOGY_DIAGRAM", "Epinephrine reversal experiment", "Comparison graphs showing the effect of α-blockade on blood pressure and heart rate for epinephrine vs phenylephrine", 1, [264], "242", "ORIGINAL_KYP_REDRAW", "epi-reversal"),
  blk(6, "VISUAL_TABLE", "α-blocker antidote context", "Sympatholytics (α-agonists) and α-blockers table with applications and adverse effects", 1, [265], "243", "blocks: table 'The antidote side of the map — α-blockers (context completes the system)'"),
]);

/* ============================================================
   atherosclerosis — 10 figures on pdf 324–326
   ============================================================ */

const atherosclerosis = inventory(
  "atherosclerosis", "cardiovascular", "Vascular Pathology — Atherosclerosis",
  [
    omit(1, "RADIOLOGY", "Coarctation imaging", "Angiogram showing coarctation of the aorta with narrowing near the ductus", 1, [324], "302", "Coarctation of the aorta — adjacent hypertension topic sharing the page spread; not atherosclerosis teaching scope"),
    omit(2, "ANATOMY_ILLUSTRATION", "Coarctation types", "Diagram of preductal, juxtaductal, and postductal coarctation locations", 1, [324], "302", "Coarctation of the aorta — adjacent hypertension topic sharing the page spread"),
    omit(3, "VISUAL_TABLE", "Congenital defect associations", "Table of congenital cardiac defect associations (fetal alcohol syndrome, Down syndrome...)", 1, [324], "302", "Congenital heart disease — adjacent topic sharing the page spread"),
    omit(4, "RADIOLOGY", "Renal artery stenosis imaging", "Angiogram of renal artery stenosis with 'string of beads' appearance", 1, [324], "302", "Secondary hypertension — adjacent topic sharing the page spread"),
    omit(5, "DERMATOLOGY_PHOTO", "Hyperlipidemia physical signs", "Four clinical photographs (A–D): xanthomas, xanthelasma, tendinous xanthoma, corneal arcus", 1, [325], "303", "Clinical-photograph recognition — signs carried diagnostically in the note's table 'Hyperlipidemia signs on physical exam'; photographic pattern-recognition cannot be republished and a distribution-site schematic is a Phase I-C candidate"),
    reg(6, "PATHOLOGY_ILLUSTRATION", "Atherogenesis stages", "Four-stage atherosclerosis progression from normal artery to fibrous plaque with histology insets", 1, [325], "303", "ORIGINAL_KYP_REDRAW", "atherogenesis-timeline"),
    omit(7, "HISTOLOGY", "Cholesterol emboli histology", "Histology image of cholesterol emboli syndrome showing cholesterol clefts in an arterial lumen", 1, [326], "304", "Cholesterol-cleft histology recognition — syndrome covered diagnostically in the note's table 'Cholesterol emboli syndrome — the post-angiography complication'; histology recognition deferred to the vascular-pathology pass (Phase I-C)"),
    omit(8, "HISTOLOGY", "Arteriolosclerosis comparison", "Histology images comparing hyaline and hyperplastic arteriolosclerosis", 1, [326], "304", "Arteriolosclerosis comparison histology — hyaline vs hyperplastic carried in the note's text section 'Distinguish it from its siblings — arteriolosclerosis'; onion-skin schematic is a Phase I-C candidate"),
    blk(9, "ANATOMY_ILLUSTRATION", "Aneurysm locations", "Diagram of thoracic and abdominal aorta highlighting common aneurysm locations", 1, [326], "304", "blocks: table 'Downstream aneurysm disease (the complication that grows silently)'"),
    omit(10, "RADIOLOGY", "AAA imaging", "CT scan of the abdomen showing an abdominal aortic aneurysm", 1, [326], "304", "AAA radiology recognition — aneurysm disease carried diagnostically in the note's table; imaging recognition deferred to the cardiovascular-imaging pass (Phase I-C)"),
  ],
  "Source page spread (pdf 324–326) is shared with hypertension/coarctation content — those figures are retained as references for their own topics."
);

/* ============================================================
   urinary-casts — 11 figures on pdf 204–206, 211–213
   ============================================================ */

const urinaryCasts = inventory("urinary-casts", "renal", "Renal Pathology — Glomerular, Tubulointerstitial & AKI", [
  reg(1, "HISTOLOGY", "Cast morphology atlas", "Microscopic images of urinary casts: RBC cast, granular cast, fatty cast (Maltese cross), hyaline cast", 2, [204], "612", "ORIGINAL_KYP_REDRAW", "urinary-cast-gallery", { notes: "KYP gallery renders schematic light-microscopy views of the six cast types (schematic-renderable morphology)" }),
  blk(2, "VISUAL_TABLE", "Glomerular nomenclature", "Nomenclature of glomerular disorders (focal, diffuse, proliferative, membranous...)", 2, [204], "612", "blocks: table 'Glomerular nomenclature decoder'"),
  blk(3, "PATHOLOGY_ILLUSTRATION", "Filtration barrier mechanisms", "Glomerular filtration barrier diagram showing mechanisms of nephritic, nephrotic, and mixed syndromes", 2, [205], "613", "blocks: table 'Nephritic vs nephrotic — the two syndromes casts distinguish' (mechanism columns)"),
  blk(4, "COMPARISON_FIGURE", "Nephritic vs nephrotic", "Comparison table of nephritic vs nephrotic vs mixed syndromes (etiology, presentation, examples)", 2, [205], "613", "blocks: table 'Nephritic vs nephrotic — the two syndromes casts distinguish'"),
  blk(5, "VISUAL_TABLE", "Nephritic subtypes", "Detailed table of nephritic syndrome subtypes (infection-related, IgA nephropathy, RPGN, diffuse proliferative) with microscopy and IF", 2, [206], "614", "blocks: table 'Nephritic glomerular diseases — the level below the syndrome'"),
  omit(6, "HISTOLOGY", "Acute pyelonephritis histology", "Histology showing neutrophilic infiltration in acute pyelonephritis", 2, [211], "619", "Pyelonephritis histology recognition — WBC-cast diagnosis is carried in the note's table 'The two renal infections — casts separate them'; tissue histology deferred to the renal-pathology pass (Phase I-C)"),
  omit(7, "HISTOLOGY", "Chronic pyelonephritis histology", "Histology showing thyroidization of the kidney in chronic pyelonephritis", 2, [211], "619", "Chronic pyelonephritis histology recognition — carried diagnostically in the note's infection table; tissue histology deferred (Phase I-C)"),
  blk(8, "DIAGNOSTIC_ALGORITHM", "AKI classification", "Table classifying acute kidney injury into prerenal azotemia, intrinsic renal failure, postrenal obstruction", 2, [212], "620", "blocks: table 'AKI ladder — place the cast in the algorithm'"),
  reg(9, "HISTOLOGY", "Muddy brown cast", "Image of a muddy brown granular cast characteristic of acute tubular necrosis", 2, [213], "621", "ORIGINAL_KYP_REDRAW", "urinary-cast-gallery"),
  omit(10, "HISTOLOGY", "ATN tubular histology", "Histology showing necrotic tubular cells sloughing into the lumen in ATN", 2, [213], "621", "ATN tubular histology recognition — muddy-brown cast morphology carried by the cast gallery; tissue histology deferred to the ATN topic (Phase I-C)"),
  omit(11, "GROSS_PATHOLOGY", "Papillary necrosis gross", "Gross pathology image of a necrotic renal papilla in renal papillary necrosis", 2, [213], "621", "Gross-pathology recognition — entity covered diagnostically in the note's table 'Adjacent high-yield: renal papillary necrosis & AIN'; photographic recognition deferred (Phase I-C)"),
]);

/* ============================================================
   av-conduction-blocks — 22 figures on pdf 333–335, 349
   ============================================================ */

const p311 = "Tachyarrhythmias/sinus-node disease — adjacent arrhythmia scope; this note covers AV conduction";
const avBlocks = inventory(
  "av-conduction-blocks", "cardiovascular", "Cardiac Pathology — Arrhythmias & Conduction Blocks",
  [
    omit(1, "VISUAL_TABLE", "Wide-complex tachycardias", "Table of wide complex tachycardias (VT, torsades, VF) and channelopathies with ECG thumbnails", 1, [333], "311", p311),
    omit(2, "ECG", "Ventricular tachycardia strip", "ECG strip showing ventricular tachycardia with wide QRS complexes", 1, [333], "311", p311),
    omit(3, "ECG", "Torsades de pointes strip", "ECG strip showing torsades de pointes with shifting sinusoidal waveforms", 1, [333], "311", p311),
    omit(4, "ECG", "Ventricular fibrillation strip", "ECG strip showing ventricular fibrillation with disorganized rhythm", 1, [333], "311", p311),
    omit(5, "ECG", "Sick sinus syndrome strip", "ECG strip showing sick sinus syndrome with bradycardia and sinus pauses", 1, [333], "311", p311),
    blk(6, "VISUAL_TABLE", "AV conduction block decision table", "Conduction blocks table (first-degree, Mobitz I/II, third-degree, bundle branch block) with ECG findings", 1, [334], "312", "blocks: table 'The decision table — block, findings, treatment'"),
    reg(7, "ECG", "First-degree AV block trace", "ECG strip showing first-degree AV block with prolonged PR interval", 1, [334], "312", "ORIGINAL_KYP_REDRAW", "av-block-ecg"),
    reg(8, "ECG", "Mobitz I trace", "ECG strip showing Mobitz type I (Wenckebach) with progressive PR lengthening", 1, [334], "312", "ORIGINAL_KYP_REDRAW", "av-block-ecg"),
    reg(9, "ECG", "Mobitz II trace", "ECG strip showing Mobitz type II with dropped beats", 1, [334], "312", "ORIGINAL_KYP_REDRAW", "av-block-ecg"),
    reg(10, "ECG", "Third-degree AV block trace", "ECG strip showing third-degree (complete) AV block with atrioventricular dissociation", 1, [334], "312", "ORIGINAL_KYP_REDRAW", "av-block-ecg"),
    omit(11, "ECG", "Bundle branch block traces", "ECG strips comparing left and right bundle branch block morphology", 1, [334], "312", "Bundle-branch morphology — adjacent; the note stays on AV-nodal conduction"),
    omit(12, "VISUAL_TABLE", "Premature beats", "Table of premature atrial and ventricular contractions with ECG findings", 1, [334], "312", "Ectopy (PAC/PVC) — adjacent arrhythmia scope"),
    omit(13, "ECG", "PAC strip", "ECG strip showing a premature atrial contraction", 1, [334], "312", "Ectopy (PAC/PVC) — adjacent arrhythmia scope"),
    omit(14, "ECG", "PVC strip", "ECG strip showing a premature ventricular contraction", 1, [334], "312", "Ectopy (PAC/PVC) — adjacent arrhythmia scope"),
    blk(15, "VISUAL_TABLE", "MI complication timeline", "Myocardial infarction complications table with timeframes and findings (arrhythmia, ventricular rupture...)", 1, [335], "313", "blocks: text 'Where blocks come from — the MI and channelopathy neighborhood' + clinical blocks"),
    omit(16, "ANATOMY_ILLUSTRATION", "Ventricular aneurysm vs pseudoaneurysm", "Anatomical diagrams comparing ventricular aneurysm and pseudoaneurysm of the heart", 1, [335], "313", "Mechanical MI complications — adjacent cardiology topic; only their arrhythmic/conduction consequences are in this note's scope"),
    omit(17, "GROSS_PATHOLOGY", "Papillary muscle rupture gross", "Gross pathology photo of mitral valve and papillary muscle rupture", 1, [335], "313", "Mechanical MI complications — adjacent cardiology topic"),
    omit(18, "GROSS_PATHOLOGY", "Ventricular rupture gross", "Gross pathology photo of a heart cross-section with ventricular rupture", 1, [335], "313", "Mechanical MI complications — adjacent cardiology topic"),
    omit(19, "VISUAL_TABLE", "Class IC antiarrhythmics", "Antiarrhythmic sodium channel blocker (class IC) table: mechanism, use, adverse effects", 1, [349], "327", "Class IC agents are not AV-node drugs — adjacent antiarrhythmics topic; the note's drugs table covers AV-node agents"),
    omit(20, "PHYSIOLOGY_DIAGRAM", "Class IC action potential", "Cardiac action potential graph showing class IC effect on phase 0 slope", 1, [349], "327", "Class IC agents are not AV-node drugs — adjacent antiarrhythmics topic"),
    blk(21, "VISUAL_TABLE", "β-blockers as AV-node agents", "Antiarrhythmic β-blocker (class II) table: mechanism, clinical use, adverse effects", 1, [349], "327", "blocks: table 'Drugs that touch the AV node (antiarrhythmic context)'"),
    omit(22, "PHYSIOLOGY_DIAGRAM", "β-blocker pacemaker potential", "Pacemaker action potential graph showing β-blocker effect on phase 4 depolarization at the AV node", 1, [349], "327", "Action-potential graphs — adjacent pharmacology figures; the β-blocker AV-node effect is absorbed in the note's drugs table"),
  ],
  "Source page 311–313 (pdf 333–335) mixes AV blocks with the wider arrhythmia family; out-of-scope figures are retained as references for the arrhythmias topic (Phase I-C)."
);

/* ============================================================
   stroke-syndromes — 21 figures on pdf 105, 117–122, 306–308
   ============================================================ */

const rr = "Book-wide rapid-review table — reference material, not stroke-topic visuals; relevant rows are pinned as source evidence instead";
const stroke = inventory(
  "stroke-syndromes", "neurology", "Clinical Neurology — Ischemic Stroke, Hemorrhage & Aphasia",
  [
    blk(1, "ANATOMY_ILLUSTRATION", "Cortical body map", "Motor and sensory homunculi on the cerebral cortex, color-coded by arterial territory", 2, [105], "513", "blocks: table 'Effects of strokes — the full artery → lesion → symptom table' (face/arm/leg distribution rows)"),
    reg(2, "ANATOMY_ILLUSTRATION", "Arterial territory map", "Cerebral arteries cortical distribution in lateral, medial, and inferior views, color-coded by artery (ACA/MCA/PCA)", 2, [105], "513", "ORIGINAL_KYP_REDRAW", "stroke-territory-map"),
    omit(3, "RADIOLOGY", "Watershed zone imaging", "Axial brain imaging showing watershed zones between arterial territories", 2, [105], "513", "Watershed concept carried in the note's territory table and edema/ladder content; imaging recognition deferred to the neuroimaging pass (Phase I-C)"),
    blk(4, "TIMELINE", "Ischemic neuropathology timeline", "Timeline table of histologic features of ischemic brain injury from 12–24 hours (red neurons) to >2 weeks (gliosis)", 2, [117], "525", "blocks: table 'TIA vs ischemic stroke' + red-neuron/gliosis time course in the ischemic mechanism content"),
    omit(5, "RADIOLOGY", "MCA infarct CT", "Axial CT scan of the head showing an ischemic stroke in the right MCA territory", 2, [117], "525", "CT recognition — imaging modality logic (CT first, MRI/DWI for early ischemia) is carried in the note's clinical content; radiographic recognition deferred to the neuroimaging pass (Phase I-C)"),
    omit(6, "RADIOLOGY", "Cerebral edema imaging", "Axial imaging showing vasogenic edema surrounding a lesion with arrows", 2, [117], "525", "Edema mechanism carried in the note's table 'Cerebral edema — the deadly parallel process'; imaging recognition deferred (Phase I-C)"),
    blk(7, "COMPARISON_FIGURE", "Stroke syndrome table", "Comprehensive table of stroke effects by artery (anterior/middle/posterior circulation): lesion area, symptoms", 2, [118], "526", "blocks: table 'Effects of strokes — the full artery → lesion → symptom table'"),
    blk(8, "COMPARISON_FIGURE", "Posterior circulation syndromes", "Continuation table covering PICA (lateral medullary) and anterior spinal artery territories", 2, [119], "527", "blocks: table 'Effects of strokes' (posterior circulation rows) + 'Syndrome quick-recognition ladder'"),
    omit(9, "RADIOLOGY", "Ischemic stroke MRI gallery", "Four axial MRI images (A–D) showing ischemic strokes in various locations", 2, [119], "527", "MRI recognition — modality logic carried in the note's clinical imaging content; radiographic recognition deferred (Phase I-C)"),
    omit(10, "PATHOLOGY_ILLUSTRATION", "Neonatal IVH diagram", "Coronal diagram of a neonatal brain showing intraventricular hemorrhage", 2, [119], "527", "Neonatal intraventricular hemorrhage — perinatal neurology scope, deferred to its own topic (Phase I-C)"),
    omit(11, "VISUAL_TABLE", "Extracranial birth hemorrhages", "Table of caput succedaneum, subgaleal hemorrhage, cephalohematoma", 2, [119], "527", "Perinatal extracranial hemorrhages — perinatal neurology scope (Phase I-C)"),
    blk(12, "COMPARISON_FIGURE", "Intracranial hemorrhage shapes", "Eight axial CT scans (A–H) illustrating epidural (biconvex), subdural (crescentic), subarachnoid, and other hemorrhages", 2, [120], "528", "blocks: table 'Intracranial hemorrhage — four lesions, four shapes' (shape discrimination absorbed; CT texture recognition deferred to the neuroimaging pass)"),
    omit(13, "RADIOLOGY", "Diffuse axonal injury MRI", "Axial MRI showing diffuse axonal injury with punctate hemorrhages in white matter tracts", 2, [121], "529", "DAI entity carried in the note's injury content; MRI recognition deferred to the trauma-neuroimaging pass (Phase I-C)"),
    blk(14, "COMPARISON_FIGURE", "Aphasia table", "Table comparing Broca, Wernicke, conduction, and global aphasias", 2, [121], "529", "blocks: table 'Aphasia — the language localization table'"),
    blk(15, "ANATOMY_ILLUSTRATION", "Language centers map", "Lateral brain view highlighting Broca area, Wernicke area, arcuate fasciculus, auditory cortex", 2, [121], "529", "blocks: table 'Aphasia — the language localization table' (localization rows)"),
    omit(16, "RADIOLOGY", "Berry aneurysm angiogram", "Angiogram showing a saccular (berry) aneurysm at a Circle of Willis bifurcation", 2, [122], "530", "Aneurysm vessel-wall neighbors carried in the note's table 'Aneurysms — the vessel-wall neighbors'; angiographic recognition deferred (Phase I-C)"),
    blk(17, "ANATOMY_ILLUSTRATION", "Circle of Willis aneurysm sites", "Circle of Willis diagram with numbered common aneurysm locations (ACom, MCA, basilar tip, PCom)", 2, [122], "530", "blocks: table 'Aneurysms — the vessel-wall neighbors' (site → neighbor rows)"),
    omit(18, "VISUAL_TABLE", "Fever vs heat stroke", "Comparison table for fever vs heat stroke", 2, [122], "530", "Heat stroke — environmental medicine topic; unrelated to ischemic stroke despite the shared name"),
    omit(19, "VISUAL_TABLE", "Rapid review rows (1)", "Pathophysiology rapid-review table rows (Klumpke palsy onward)", 2, [306], "714", rr),
    omit(20, "VISUAL_TABLE", "Rapid review rows (2)", "Pathophysiology rapid-review table rows (pemphigus onward)", 2, [307], "715", rr),
    omit(21, "VISUAL_TABLE", "Rapid review rows (3)", "Pathophysiology rapid-review table rows (subarachnoid hemorrhage onward)", 2, [308], "716", rr),
  ],
  "Source page spread mixes stroke with perinatal neurology and the book-wide rapid review; out-of-scope figures retained as references for their own topics."
);

/* ============================================================
   acid-base-physiology — 12 figures on pdf 196, 200–203, 219
   ============================================================ */

const acidBase = inventory("acid-base-physiology", "renal", "Renal Physiology — Acid-Base Balance", [
  omit(1, "ANATOMY_ILLUSTRATION", "Hereditary tubulopathy map", "Nephron diagram showing locations of Fanconi, Bartter, Gitelman, and Liddle syndromes", 2, [196], "604", "Hereditary tubulopathies — adjacent renal-genetics topic; the note anchors the RTA-2 (Fanconi) connection in its normal-gap table"),
  blk(2, "VISUAL_TABLE", "Tubular defect comparison", "Comparison table of renal tubular defects (Fanconi, Bartter, Gitelman, Liddle, AME) with effects and causes", 2, [196], "604", "blocks: table 'Normal anion gap metabolic acidosis' (RTA/tubulopathy rows)"),
  omit(3, "ANATOMY_ILLUSTRATION", "Nephron hormone map", "Nephron diagram of Angiotensin II, ANP, PTH, aldosterone, and ADH action sites", 2, [200], "608", "Endocrine nephron map — adjacent renal-physiology topic (Phase I-C)"),
  blk(4, "PHYSIOLOGY_DIAGRAM", "Potassium shifts", "Diagram of factors moving K+ into cells (alkalosis, insulin) and out (acidosis, digoxin)", 2, [200], "608", "blocks: text 'The electrolyte neighborhoods — potassium shifts'"),
  omit(5, "VISUAL_TABLE", "Electrolyte disturbances", "Table of electrolyte disturbances (Na, K, Ca, Mg, phosphate) with symptoms and ECG findings", 2, [201], "609", "Electrolyte symptom/ECG table — adjacent fluid-electrolytes topic (Phase I-C)"),
  blk(6, "VISUAL_TABLE", "Four primary disorders", "Acid-base physiology table comparing metabolic/respiratory acidosis/alkalosis by pH, PCO2, HCO3 and compensation", 2, [201], "609", "blocks: table 'The four primary disorders — directions and compensations'"),
  reg(7, "DIAGNOSTIC_ALGORITHM", "Acid-base diagnostic algorithm", "Flowchart for diagnosing acidosis/alkalosis from arterial pH through respiratory/metabolic branching to anion gap", 2, [202], "610", "ORIGINAL_KYP_REDRAW", "acid-base-algorithm"),
  reg(8, "PHYSIOLOGY_DIAGRAM", "Acid-base map", "Acid-base nomogram plotting plasma HCO3 vs pH with PCO2 isobars to distinguish mixed disorders", 2, [202], "610", "ORIGINAL_KYP_REDRAW", "acid-base-map"),
  blk(9, "VISUAL_TABLE", "RTA types", "Comparison table of renal tubular acidosis types 1, 2, and 4 (defect, urine pH, serum K, causes)", 2, [203], "611", "blocks: table 'Normal anion gap metabolic acidosis' (RTA section)"),
  blk(10, "PATHOLOGY_ILLUSTRATION", "RTA cellular mechanisms", "Cellular mechanism diagrams of RTA type 1 (α-intercalated cell), type 2 (PCT), type 4 (aldosterone resistance)", 2, [203], "611", "blocks: table 'Normal anion gap metabolic acidosis' + mechanisms (rta-mechanism flow)"),
  blk(11, "RENAL_DIAGRAM", "Thiazide site of action", "Nephron diagram highlighting the early DCT site of thiazide action", 2, [219], "627", "blocks: table 'Diuretic context — the pharmacology that creates the alkalosis' (thiazide rows)"),
  blk(12, "RENAL_DIAGRAM", "K-sparing site of action", "Nephron diagram highlighting the collecting-tubule site of potassium-sparing diuretics", 2, [219], "627", "blocks: table 'Diuretic context — the pharmacology that creates the alkalosis' (K-sparing rows)"),
]);

/* ============================================================
   hypersensitivity-types — 6 figures on pdf 131–134
   ============================================================ */

const hypersensitivity = inventory("hypersensitivity-types", "immunology", "Immunology — Hypersensitivity Reactions & Transfusion", [
  omit(1, "VISUAL_TABLE", "Vaccine types", "Vaccination table comparing live attenuated, killed, subunit, toxoid, and mRNA vaccines with illustrations", 1, [131], "109", "Immunization — adjacent immunology topic sharing the page; outside hypersensitivity classification scope"),
  reg(2, "IMMUNOLOGY_DIAGRAM", "Type I mechanism", "Type I hypersensitivity diagram: allergen crosslinking IgE on a mast cell leading to degranulation", 1, [132], "110", "ORIGINAL_KYP_REDRAW", "hypersensitivity-mechanisms", { notes: "Frame 1 of the KYP four-frame mechanism gallery" }),
  reg(3, "IMMUNOLOGY_DIAGRAM", "Type II mechanism", "Type II hypersensitivity diagram: antibody-dependent cellular cytotoxicity via NK cells and Fc receptors", 1, [132], "110", "ORIGINAL_KYP_REDRAW", "hypersensitivity-mechanisms", { notes: "Frame 2 of the gallery" }),
  reg(4, "IMMUNOLOGY_DIAGRAM", "Type III mechanism", "Type III hypersensitivity diagram: immune complex deposition, neutrophil recruitment, endothelial damage", 1, [133], "111", "ORIGINAL_KYP_REDRAW", "hypersensitivity-mechanisms", { notes: "Frame 3 of the gallery" }),
  reg(5, "IMMUNOLOGY_DIAGRAM", "Type IV mechanism", "Type IV delayed hypersensitivity diagram: antigen presentation to sensitized Th1 cell, macrophage activation", 1, [133], "111", "ORIGINAL_KYP_REDRAW", "hypersensitivity-mechanisms", { notes: "Frame 4 of the gallery" }),
  blk(6, "VISUAL_TABLE", "Transfusion reactions", "Immunologic blood transfusion reactions table by mechanism and clinical findings", 1, [134], "112", "blocks: table 'Transfusion reactions — hypersensitivity applied to the blood bank'"),
]);

/* ============================================================
   cranial-nerves — 19 figures on pdf 108–112, 147–150
   ============================================================ */

const cranial = inventory(
  "cranial-nerves", "neurology", "Neuroanatomy — Cranial Nerves & Brainstem",
  [
    blk(1, "VISUAL_TABLE", "Vagal nuclei", "Vagal nuclei table (nucleus, function, nerve)", 2, [108], "516", "blocks: table 'The vagal (and friends) nuclei of the medulla'"),
    reg(2, "ANATOMY_ILLUSTRATION", "Midbrain cross-section", "Midbrain cross section with superior colliculus, CN III nucleus, red nucleus, cerebral peduncles", 2, [108], "516", "ORIGINAL_KYP_REDRAW", "cranial-nerve-map", { notes: "KYP brainstem map renders schematic cross-sections at all three levels" }),
    reg(3, "ANATOMY_ILLUSTRATION", "Pons cross-section", "Pons cross section with fourth ventricle, CN V and VI nuclei, MLF, medial lemniscus", 2, [109], "517", "ORIGINAL_KYP_REDRAW", "cranial-nerve-map"),
    reg(4, "ANATOMY_ILLUSTRATION", "Medulla cross-section", "Medulla cross section with inferior olivary nucleus, nucleus ambiguus, pyramids, CN X/XII nuclei", 2, [109], "517", "ORIGINAL_KYP_REDRAW", "cranial-nerve-map"),
    blk(5, "ANATOMY_ILLUSTRATION", "Skull base foramina", "Cranial nerves and vessel pathways through skull-base foramina (cribriform plate, optic canal, etc.)", 2, [110], "518", "blocks: table 'Foramina — which hole carries which nerve (and vessel)'"),
    reg(6, "ANATOMY_ILLUSTRATION", "Nerve-artery brainstem map", "Brainstem diagram with cranial nerves I–XII emergence and arterial supply", 2, [110], "518", "ORIGINAL_KYP_REDRAW", "cranial-nerve-map"),
    blk(7, "VISUAL_TABLE", "Cranial nerve table", "Cranial nerves table: nerve, number, function, type (S/M/B), mnemonic", 2, [111], "519", "blocks: table 'The cranial nerve table — nerve, function, type'"),
    blk(8, "VISUAL_TABLE", "CN reflexes", "Cranial nerve reflexes table (reflex, afferent, efferent)", 2, [111], "519", "blocks: table 'Cranial nerve reflexes — afferent drives, efferent executes'"),
    blk(9, "ANATOMY_ILLUSTRATION", "Mastication muscles", "Mastication muscle illustration (temporalis, masseter, pterygoids) on the skull", 2, [112], "520", "blocks: table 'Mastication & the muscle anchors'"),
    omit(10, "ANATOMY_ILLUSTRATION", "Lumbar puncture anatomy", "Spinal cord sagittal view with vertebral levels, meninges, and LP needle path", 2, [112], "520", "Lumbar puncture anatomy — adjacent neuroprocedures topic (Phase I-C)"),
    omit(11, "SIGNAL_TRANSDUCTION", "Horner pathway", "Horner syndrome 3-neuron sympathetic pathway diagram (hypothalamus to eye)", 2, [147], "555", "Horner syndrome — its own high-yield topic (Phase I-C); the note's lesion ladder carries the anhidrosis context"),
    blk(12, "ANATOMY_ILLUSTRATION", "Extraocular muscle anatomy", "Ocular motility illustrations of extraocular muscle attachments (frontal and lateral views)", 2, [147], "555", "blocks: table 'CN palsies — how each eye-movement nerve fails'"),
    blk(13, "ANATOMY_ILLUSTRATION", "Gaze mechanics (LR6SO4R3)", "Ocular motility gaze-direction diagrams (LR6SO4R3) and blowout fracture CT", 2, [147], "555", "blocks: table 'CN palsies — how each eye-movement nerve fails' (LR6SO4R3 rows)"),
    blk(14, "SIGNAL_TRANSDUCTION", "CN III damage pathways", "CN III damage diagram distinguishing motor (central, pupil-sparing) from parasympathetic (peripheral, pupil-involving) components", 2, [148], "556", "blocks: table 'Lesion localization ladder — same muscle, four lesions' + mechanisms (cn3-palsy-mechanism flow)"),
    blk(15, "PATHOLOGY_ILLUSTRATION", "CN III/IV/VI palsy appearance", "Clinical illustrations of oculomotor, trochlear, and abducens palsies showing eye positions", 2, [148], "556", "blocks: table 'CN palsies — how each eye-movement nerve fails'"),
    omit(16, "ANATOMY_ILLUSTRATION", "Visual field defects", "Visual field defects diagram mapping lesions (optic nerve, chiasm, tract) to field loss patterns", 2, [149], "557", "Visual pathway — its own neuro-ophthalmology topic (Phase I-C)"),
    blk(17, "ANATOMY_ILLUSTRATION", "Cavernous sinus contents", "Cavernous sinus coronal cross-section with CN III, IV, V1, V2, VI, and internal carotid artery", 2, [149], "557", "blocks: cavernous sinus content in the note's clinical/lesion blocks (sourceRef pp. 147–150 coverage)"),
    blk(18, "SIGNAL_TRANSDUCTION", "INO/MLF pathway", "Internuclear ophthalmoplegia pathway diagram: MLF connection between CN VI and CN III nuclei", 2, [150], "558", "blocks: table 'Lesion localization ladder — same muscle, four lesions' + mechanisms (ino-mechanism flow)"),
    blk(19, "PATHOLOGY_ILLUSTRATION", "Right INO presentation", "Right INO clinical diagrams showing impaired adduction and abducting nystagmus on lateral gaze", 2, [150], "558", "blocks: table 'Lesion localization ladder — same muscle, four lesions' (INO row)"),
  ],
  "Source pages mix cranial-nerve anatomy with neuro-ophthalmology neighbors (Horner, visual fields, LP) — out-of-scope figures retained as references for their own topics."
);

/* ============================================================
   diabetes-mellitus — 13 figures on pdf 101, 371–374, 380–381
   ============================================================ */

const diabetes = inventory(
  "diabetes-mellitus", "endocrine", "Endocrine — Diabetes Mellitus: Pathology & Pharmacology",
  [
    reg(1, "BIOCHEMICAL_PATHWAY", "Sorbitol pathway", "Sorbitol pathway: glucose → sorbitol (aldose reductase) → fructose (sorbitol dehydrogenase), with tissue enzyme differences", 1, [101], "79", "ORIGINAL_KYP_ADAPTATION", "diabetes-complications-web", { notes: "The KYP complications web carries the osmotic-damage highway including the sorbitol route" }),
    omit(2, "VISUAL_TABLE", "Adjacent nutrition tables", "Lactase deficiency findings and amino acid classification tables on the same page", 1, [101], "79", "Adjacent GI/nutrition content on the shared source page — not diabetes scope (biochemistry chapter cross-reference)"),
    omit(3, "RADIOLOGY", "Hyperparathyroid bone film", "X-ray showing subperiosteal bone resorption in hyperparathyroidism", 1, [371], "349", "Hyperparathyroidism — adjacent endocrine topic sharing the page spread"),
    blk(4, "VISUAL_TABLE", "Diagnostic criteria", "Diabetes diagnostic criteria table (HbA1c, fasting glucose, 2-h OGTT, random glucose with cutoffs)", 1, [372], "350", "blocks: table 'Diagnosis — the four numbers'"),
    blk(5, "FLOWCHART", "DM pathophysiology flow", "Pathophysiology flowchart from available insulin to lipolysis, ketogenesis, and osmotic symptoms", 1, [372], "350", "mechanisms (dka-mechanism, hhs-mechanism) + blocks: table 'Acute presentations — the 3 P's and their mechanism'", "ORIGINAL_KYP_ADAPTATION"),
    blk(6, "COMPARISON_FIGURE", "Type 1 vs type 2", "Type 1 vs type 2 diabetes comparison table (defect, age, genetics, presentation, histology)", 1, [373], "351", "blocks: table 'Type 1 vs type 2 — the full discriminator table'"),
    blk(7, "COMPARISON_FIGURE", "DKA vs HHS", "Hyperglycemic emergencies comparison: DKA vs HHS (pathogenesis, signs, labs, treatment)", 1, [373], "351", "blocks: table 'DKA vs HHS — the emergency comparison'"),
    omit(8, "DERMATOLOGY_PHOTO", "Cushing syndrome photos", "Clinical photos of Cushing syndrome (moon facies, plethora, ecchymoses)", 1, [374], "352", "Cushing syndrome — adjacent endocrine topic sharing the page spread"),
    omit(9, "DIAGNOSTIC_ALGORITHM", "Cushing algorithm", "Diagnostic algorithm for Cushing syndrome (dexamethasone suppression, CRH)", 1, [374], "352", "Cushing syndrome — adjacent endocrine topic sharing the page spread"),
    blk(10, "PHARMACOLOGY_DIAGRAM", "Antidiabetic sites of action", "Anatomical diagram of antidiabetic drug action sites (metformin, SGLT2, GLP-1, pioglitazone...) on liver, pancreas, gut, kidney", 1, [380], "358", "drugs: DrugCard target/uses fields + pharmacology section (drug cards carry the organ-site logic)"),
    blk(11, "VISUAL_TABLE", "Insulin preparations", "Insulin preparations table by onset/duration (rapid, short, intermediate, long, very long acting)", 1, [380], "358", "drugs: 'Insulin preparations' drug card"),
    omit(12, "PHYSIOLOGY_DIAGRAM", "Insulin PK curves", "Pharmacokinetic graph of plasma insulin over time for lispro, regular, NPH, detemir, glargine, degludec", 1, [380], "358", "Insulin PK curves — onset/duration hierarchy carried in the insulin drug card text; a KYP onset-duration ladder visual is a Phase I-C candidate"),
    blk(13, "VISUAL_TABLE", "DM therapy landscape", "Diabetes mellitus therapy table: drugs, mechanisms, adverse effects, notes", 1, [381], "359", "drugs: drug cards (metformin, sulfonylureas, GLP-1/DPP-4, SGLT2, pioglitazone, acarbose, pramlintide)"),
  ],
  "Source page spread mixes diabetes with Cushing syndrome and biochemistry sorbitol content — cross-chapter figure retained via the manifest crossChapterSources."
);

export const PILOT_INVENTORIES: TopicVisualInventory[] = [
  glycolysis,
  sympathomimetics,
  atherosclerosis,
  urinaryCasts,
  avBlocks,
  stroke,
  acidBase,
  hypersensitivity,
  cranial,
  diabetes,
];
