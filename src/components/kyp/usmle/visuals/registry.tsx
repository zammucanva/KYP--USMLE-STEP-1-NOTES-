"use client";

// Registry mapping visualId -> rendered original KYP visual component.
// Every visual is an original KYP creation (no source artwork is
// reproduced) and is theme-aware for light + dark mode.

import type { ComponentType } from "react";

import { AvBlockEcgGallery } from "./ecg";
import {
  AcidBaseAlgorithm,
  AcidBaseMap,
  AtherogenesisTimeline,
  DiabetesComplicationsWeb,
  GlycolysisRegulationMap,
  HexokinaseVsGlucokinase,
  PyruvateHub,
} from "./pathways";
import { CranialNerveMap, StrokeTerritoryMap, UrinaryCastGallery } from "./anatomy";
import {
  EpiReversalVisual,
  HypersensitivityMechanisms,
  SympathReceptorGrid,
} from "./pharm";
import {
  DnaRepairPathways,
  MutationTypesPanel,
  ReplicationForkMachinery,
} from "./dna";
import {
  ChromatinPackingHierarchy,
  HeterochromatinEuchromatinEm,
} from "./chromatin";
import {
  NucleotideDeNovoSalvageMap,
  NucleotideRingAtomSources,
  PurineMetabolismMap,
} from "./nucleotides";
import {
  AlternativeSplicingPaths,
  EukaryoticGeneAnatomy,
  LacOperonStates,
  MrnaMaturationAnatomy,
  SpliceosomeLariat,
} from "./gene-expression";
import {
  TranslationRibosomeStages,
  TrnaStructureCharging,
} from "./translation";
import {
  CellCycleCheckpointMap,
  CiliaAxonemeBasalBody,
  DextrocardiaCxr,
  MicrotubuleArchitecture,
  NaKAtpasePump,
  RerGolgiEm,
  SecretoryPathwayMap,
} from "./cellular";
import {
  CollagenSynthesisPipeline,
  BlueScleraeOi,
  EdsHyperextensibleSkin,
  ElastinStretchRelax,
  OiBoneFragility,
  PectusCarinatumMarfan,
} from "./connective-tissue";
import {
  CdCdQuadrantPlot,
  CrisprCas9Mechanism,
  ElisaDirectIndirect,
  FlowCytometryLaserPath,
  GBandedKaryotypeSchematic,
  PcrCycleSteps,
  SkyKaryotypeSchematic,
  SouthernBlotPedigree,
} from "./laboratory";
import {
  CafeAuLaitMosaicPattern,
  HwePunnettSquare,
  ImprintingChromosome15,
  InheritancePedigrees,
  CftrEnacDiagram,
  GowersSequence,
  DmdHistologyPattern,
  AnticipationExpansionPanel,
  TrisomyClinicalSigns,
  NondisjunctionMiMii,
  RobertsonianTranslocationOutcomes,
} from "./genetics";
import {
  BitotSpotsIllustration,
  RiboflavinDeficiencySigns,
  PellagraCasalNecklace,
  B12FolateOneCarbonMap,
  RicketsRadiographPattern,
  VitaminDActivationCascade,
  VitaminKCarboxylationCycle,
  AcrodermatitisEnteropathica,
  KwashiorkorIllustration,
  MarasmusIllustration,
  EthanolMetabolismMap,
  EthanolNadhConsequences,
} from "./nutrition";
import { WholeMetabolismMap, TcaCycleMap, PdhCofactorPanel, EtcOxphosMap, GluconeogenesisBypasses, HmpShuntMap, GlutathioneRedoxCycle, FructoseMetabolismMap, GalactoseLeloirMap, PolyolPathwayMap, AminoAcidDerivativesMap, CatecholamineSynthesisMap, UreaCycleMap, AlanineGlucoseShuttle, PhenylalaninePathwayMap, MethionineHomocysteineMap, OrganicAcidemiaMap, OchronosisScleraIllustration, GlycogenHormoneRegulation, GlycogenMetabolismMap, SphingolipidPathwayMap, CherryRedSpotIllustration, AngiokeratomaIllustration, GaucherCellsIllustration, NiemannPickFoamCells, FaSynthesisVsOxidation, KetoneBodyShuttle, AdipocyteFedFasted, ExerciseFuelSystems, StarvationEnergyStores, LipidTransportMap, HdlMaturationMap, LipidLadenEnterocytes } from "./metabolism";
import {
  LymphNodeMap,
  LymphaticDrainageMap,
  SpleenThymusMap,
  InnateVsAdaptiveArms,
  MhcStructureComparison,
  NkKillModel,
  BtDivisionOfLabor,
  TCellSelectionMap,
  CtlKillCycle,
  TregSuppressionModel,
  ActivationSignalModel,
  AntibodyAnatomy,
  IsotypeComparisonTable,
  ComplementCascadeMap,
  ComplementDeficiencyMap,
  CytokineNetworkMap,
  RespiratoryBurstEnzymes,
  CdMarkerMap,
  VaccineTypeSpectrum,
  BCellDeficiencyMap,
  ImmunodeficiencySpectrumMap,
  BugPatternMatrix,
  RejectionTimelineMap,
  ImmunosuppressantTargetMap,
} from "./immune";
import { BacterialCellAnatomy, GramStainDecisionMap, BugMediaMatchingMap, VirulenceResistanceMap, GeneTransferTriangle, ToxinComparisonMap, GramPosCocciTree, GramPosBacilliMap, TbSpectrumMap, GramNegBacilliMap, EntericPathogenMap, SpirocheteSyphilisMap, VectorBorneRashMap, SystemicMycosesMap, OpportunisticFungiPanel, IntestinalProtozoaPanel, BloodTissueProtozoaMap, NematodeRouteMap, CestodeTrematodeMap, ViralStructureMap } from "./micro";

export const VisualRegistry: Record<string, ComponentType> = {
  // Glycolysis regulation
  "glycolysis-regulation-map": GlycolysisRegulationMap,
  "hexokinase-vs-glucokinase": HexokinaseVsGlucokinase,
  "pyruvate-hub": PyruvateHub,
  // Sympathomimetics
  "sympath-receptor-grid": SympathReceptorGrid,
  "epi-reversal": EpiReversalVisual,
  // Atherosclerosis
  "atherogenesis-timeline": AtherogenesisTimeline,
  // Urinary casts
  "urinary-cast-gallery": UrinaryCastGallery,
  // AV conduction blocks
  "av-block-ecg": AvBlockEcgGallery,
  // Stroke syndromes
  "stroke-territory-map": StrokeTerritoryMap,
  // Acid-base physiology
  "acid-base-map": AcidBaseMap,
  "acid-base-algorithm": AcidBaseAlgorithm,
  // Hypersensitivity
  "hypersensitivity-mechanisms": HypersensitivityMechanisms,
  // Cranial nerves
  "cranial-nerve-map": CranialNerveMap,
  // Diabetes mellitus
  "diabetes-complications-web": DiabetesComplicationsWeb,
  // Biochemistry — Molecular (M1)
  "replication-fork-machinery": ReplicationForkMachinery,
  "dna-repair-pathways": DnaRepairPathways,
  "mutation-types-panel": MutationTypesPanel,
  "chromatin-packing-hierarchy": ChromatinPackingHierarchy,
  "heterochromatin-euchromatin-em": HeterochromatinEuchromatinEm,
  // Biochemistry — Molecular (M2: nucleotides, purine salvage, gene expression, translation)
  "nucleotide-ring-atom-sources": NucleotideRingAtomSources,
  "nucleotide-de-novo-salvage-map": NucleotideDeNovoSalvageMap,
  "purine-metabolism-map": PurineMetabolismMap,
  "lac-operon-states": LacOperonStates,
  "eukaryotic-gene-anatomy": EukaryoticGeneAnatomy,
  "mrna-maturation-anatomy": MrnaMaturationAnatomy,
  "alternative-splicing-paths": AlternativeSplicingPaths,
  "spliceosome-lariat": SpliceosomeLariat,
  "trna-structure-charging": TrnaStructureCharging,
  "translation-ribosome-stages": TranslationRibosomeStages,
  // Biochemistry — Cellular (M3)
  "cell-cycle-checkpoint-map": CellCycleCheckpointMap,
  "secretory-pathway-map": SecretoryPathwayMap,
  "rer-golgi-em": RerGolgiEm,
  "microtubule-architecture": MicrotubuleArchitecture,
  "cilia-axoneme-basal-body": CiliaAxonemeBasalBody,
  "dextrocardia-cxr": DextrocardiaCxr,
  "na-k-atpase-pump": NaKAtpasePump,
  // Biochemistry — ECM & connective tissue (M3)
  "collagen-synthesis-pipeline": CollagenSynthesisPipeline,
  "elastin-stretch-relax": ElastinStretchRelax,
  "blue-sclerae-oi": BlueScleraeOi,
  "oi-bone-fragility": OiBoneFragility,
  "eds-hyperextensible-skin": EdsHyperextensibleSkin,
  "pectus-carinatum-marfan": PectusCarinatumMarfan,
  // Biochemistry — Laboratory Techniques (M4/L1)
  "pcr-cycle-steps": PcrCycleSteps,
  "crispr-cas9-mechanism": CrisprCas9Mechanism,
  "southern-blot-pedigree": SouthernBlotPedigree,
  "flow-cytometry-laser-path": FlowCytometryLaserPath,
  "cd-cd-quadrant-plot": CdCdQuadrantPlot,
  "elisa-direct-indirect": ElisaDirectIndirect,
  "g-banded-karyotype-schematic": GBandedKaryotypeSchematic,
  "sky-karyotype-schematic": SkyKaryotypeSchematic,
  // Biochemistry — Genetics (G1)
  "hwe-punnett-square": HwePunnettSquare,
  "cafe-au-lait-mosaic-pattern": CafeAuLaitMosaicPattern,
  "imprinting-chromosome15": ImprintingChromosome15,
  // Biochemistry — Genetics (G2)
  "inheritance-pedigrees": InheritancePedigrees,
  "cftr-enac-diagram": CftrEnacDiagram,
  "gowers-sequence": GowersSequence,
  "dmd-histology-pattern": DmdHistologyPattern,
  "anticipation-expansion-panel": AnticipationExpansionPanel,
  // Biochemistry — Genetics (G3)
  "trisomy-clinical-signs": TrisomyClinicalSigns,
  "nondisjunction-mI-mII": NondisjunctionMiMii,
  "robertsonian-translocation-outcomes": RobertsonianTranslocationOutcomes,
  // Biochemistry — Nutrition (N)
  "bitot-spots-illustration": BitotSpotsIllustration,
  "riboflavin-deficiency-signs": RiboflavinDeficiencySigns,
  "pellagra-casal-necklace": PellagraCasalNecklace,
  "b12-folate-one-carbon-map": B12FolateOneCarbonMap,
  "rickets-radiograph-pattern": RicketsRadiographPattern,
  "vitamin-d-activation-cascade": VitaminDActivationCascade,
  "vitamin-k-carboxylation-cycle": VitaminKCarboxylationCycle,
  "acrodermatitis-enteropathica": AcrodermatitisEnteropathica,
  "kwashiorkor-illustration": KwashiorkorIllustration,
  "marasmus-illustration": MarasmusIllustration,
  "ethanol-metabolism-map": EthanolMetabolismMap,
  "ethanol-nadh-consequences": EthanolNadhConsequences,
  // Biochemistry — Metabolism (E2/E3)
  "whole-metabolism-map": WholeMetabolismMap,
  "tca-cycle-map": TcaCycleMap,
  "pdh-cofactor-panel": PdhCofactorPanel,
  "etc-oxphos-map": EtcOxphosMap,
  "gluconeogenesis-bypass-enzymes": GluconeogenesisBypasses,
  "hmp-shunt-map": HmpShuntMap,
  "glutathione-redox-cycle": GlutathioneRedoxCycle,
  "fructose-metabolism-map": FructoseMetabolismMap,
  "galactose-leloir-map": GalactoseLeloirMap,
  "polyol-pathway-map": PolyolPathwayMap,
  "amino-acid-derivatives-map": AminoAcidDerivativesMap,
  "catecholamine-synthesis-map": CatecholamineSynthesisMap,
  "urea-cycle-map": UreaCycleMap,
  "alanine-glucose-shuttle": AlanineGlucoseShuttle,
  "phenylalanine-pathway-map": PhenylalaninePathwayMap,
  "methionine-homocysteine-map": MethionineHomocysteineMap,
  "organic-acidemia-map": OrganicAcidemiaMap,
  "ochronosis-sclera-illustration": OchronosisScleraIllustration,
  // Biochemistry — Metabolism (E12: glycogen)
  "glycogen-hormone-regulation": GlycogenHormoneRegulation,
  "glycogen-metabolism-map": GlycogenMetabolismMap,
  // Biochemistry — Metabolism (E13: lysosomal storage diseases)
  "sphingolipid-pathway-map": SphingolipidPathwayMap,
  "cherry-red-spot-illustration": CherryRedSpotIllustration,
  "angiokeratoma-illustration": AngiokeratomaIllustration,
  "gaucher-cells-illustration": GaucherCellsIllustration,
  "niemann-pick-foam-cells": NiemannPickFoamCells,
  // Biochemistry — Metabolism (E14: fatty acids)
  "fa-synthesis-vs-oxidation": FaSynthesisVsOxidation,
  // Biochemistry — Metabolism (E15: ketone bodies, fed/fasted)
  "ketone-body-shuttle": KetoneBodyShuttle,
  "adipocyte-fed-fasted": AdipocyteFedFasted,
  // Biochemistry — Metabolism (E16: metabolic fuel use)
  "exercise-fuel-systems": ExerciseFuelSystems,
  "starvation-energy-stores": StarvationEnergyStores,
  // Biochemistry — Metabolism (E17: lipid transport)
  "lipid-transport-map": LipidTransportMap,
  "hdl-maturation-map": HdlMaturationMap,
  // Biochemistry — Metabolism (E18: familial dyslipidemias)
  "lipid-laden-enterocytes": LipidLadenEnterocytes,

  // Immunology — E19 lymphoid structures
  "lymph-node-map": LymphNodeMap,
  "lymphatic-drainage-map": LymphaticDrainageMap,
  "spleen-thymus-map": SpleenThymusMap,
  "innate-vs-adaptive-arms": InnateVsAdaptiveArms,
  "mhc-structure-comparison": MhcStructureComparison,
  "nk-kill-model": NkKillModel,
  "b-t-division-of-labor": BtDivisionOfLabor,
  "t-cell-selection-map": TCellSelectionMap,
  "ctl-kill-cycle": CtlKillCycle,
  "treg-suppression-model": TregSuppressionModel,
  "activation-signal-model": ActivationSignalModel,
  "antibody-anatomy": AntibodyAnatomy,
  "isotype-comparison-table": IsotypeComparisonTable,
  "complement-cascade-map": ComplementCascadeMap,
  "complement-deficiency-map": ComplementDeficiencyMap,
  "cytokine-network-map": CytokineNetworkMap,
  "respiratory-burst-enzymes": RespiratoryBurstEnzymes,
  "cd-marker-map": CdMarkerMap,
  "vaccine-type-spectrum": VaccineTypeSpectrum,
  "b-cell-deficiency-map": BCellDeficiencyMap,
  "immunodeficiency-spectrum-map": ImmunodeficiencySpectrumMap,
  "bug-pattern-matrix": BugPatternMatrix,
  "rejection-timeline-map": RejectionTimelineMap,
  "immunosuppressant-target-map": ImmunosuppressantTargetMap,
  // Microbiology (M batch)
  "bacterial-cell-anatomy": BacterialCellAnatomy,
  "gram-stain-decision-map": GramStainDecisionMap,
  "bug-media-matching-map": BugMediaMatchingMap,
  "virulence-resistance-map": VirulenceResistanceMap,
  "gene-transfer-triangle": GeneTransferTriangle,
  "toxin-comparison-map": ToxinComparisonMap,
  "gram-pos-cocci-tree": GramPosCocciTree,
  "gram-pos-bacilli-map": GramPosBacilliMap,
  "tb-spectrum-map": TbSpectrumMap,
  "gram-neg-bacilli-map": GramNegBacilliMap,
  "enteric-pathogen-map": EntericPathogenMap,
  "spirochete-syphilis-map": SpirocheteSyphilisMap,
  "vector-borne-rash-map": VectorBorneRashMap,
  "systemic-mycoses-map": SystemicMycosesMap,
  "opportunistic-fungi-panel": OpportunisticFungiPanel,
  "intestinal-protozoa-panel": IntestinalProtozoaPanel,
  "blood-tissue-protozoa-map": BloodTissueProtozoaMap,
  "nematode-route-map": NematodeRouteMap,
  "cestode-trematode-map": CestodeTrematodeMap,
  "viral-structure-map": ViralStructureMap,
};
