import type { KypUsMLENote } from "../types";
import type { MechanismFlow } from "@/lib/kyp/data";

import { chromatinOrganization } from "./chromatin-organization";
import { nucleotidesSynthesis } from "./nucleotides-synthesis";
import { purineSalvageDisorders } from "./purine-salvage-disorders";
import { dnaReplication } from "./dna-replication";
import { dnaRepair } from "./dna-repair";
import { dnaMutations } from "./dna-mutations";
import { lacOperon } from "./lac-operon";
import { eukaryoticGeneOrganization } from "./eukaryotic-gene-organization";
import { rnaProcessing } from "./rna-processing";
import { translationProteinSynthesis } from "./translation-protein-synthesis";
import { cellCycle } from "./cell-cycle";
import { organellesCellTrafficking } from "./organelles-cell-trafficking";
import { cytoskeletonCilia } from "./cytoskeleton-cilia";
import { collagenElastin } from "./collagen-elastin";
import { connectiveTissueDiseases } from "./connective-tissue-diseases";
import { pcrCrispr } from "./pcr-crispr";
import { blottingProcedures } from "./blotting-procedures";
import { flowCytometryElisa } from "./flow-cytometry-elisa";
import { karyotyping } from "./karyotyping";
import { glycolysisRegulation } from "./glycolysis-regulation";
import { sympathomimetics } from "./sympathomimetics";
import { atherosclerosis } from "./atherosclerosis";
import { urinaryCasts } from "./urinary-casts";
import { avConductionBlocks } from "./av-conduction-blocks";
import { strokeSyndromes } from "./stroke-syndromes";
import { acidBasePhysiology } from "./acid-base-physiology";
import { hypersensitivityTypes } from "./hypersensitivity-types";
import { lymphoidStructures } from "./lymphoid-structures";
import { innateVsAdaptiveImmunity } from "./innate-vs-adaptive-immunity";
import { mhcComplex } from "./mhc-complex";
import { hlaSubtypes } from "./hla-subtypes";
import { nkBTCellFunctions } from "./nk-b-t-cell-functions";
import { tCellDevelopment } from "./t-cell-development";
import { cytotoxicRegulatoryTCells } from "./cytotoxic-regulatory-t-cells";
import { lymphocyteActivationTolerance } from "./lymphocyte-activation-tolerance";
import { antibodyStructure } from "./antibody-structure";
import { immunoglobulinIsotypes } from "./immunoglobulin-isotypes";
import { complementPathways } from "./complement-pathways";
import { complementDisorders } from "./complement-disorders";
import { cytokines } from "./cytokines";
import { respiratoryBurstIfn } from "./respiratory-burst-ifn";
import { cdMarkers } from "./cd-markers";
import { activePassiveImmunity } from "./active-passive-immunity";
import { autoantibodies } from "./autoantibodies";
import { bCellImmunodeficiencies } from "./b-cell-immunodeficiencies";
import { tCellPhagocyteImmunodeficiencies } from "./t-cell-phagocyte-immunodeficiencies";
import { immunodeficiencyInfectionPatterns } from "./immunodeficiency-infection-patterns";
import { transplantRejection } from "./transplant-rejection";
import { immunosuppressants } from "./immunosuppressants";
import { recombinantCytokines } from "./recombinant-cytokines";
import { bacterialStructures } from "./bacterial-structures";
import { stainsIdentification } from "./stains-identification";
import { specialCultureRequirements } from "./special-culture-requirements";
import { oxygenRequirements } from "./oxygen-requirements";
import { organismGroupsQuickReference } from "./organism-groups-quick-reference";
import { virulenceMechanisms } from "./virulence-mechanisms";
import { bacterialGenetics } from "./bacterial-genetics";
import { exotoxinsEndotoxins } from "./exotoxins-endotoxins";
import { gramPositiveCocci } from "./gram-positive-cocci";
import { gramPositiveBacilli } from "./gram-positive-bacilli";
import { mycobacteria } from "./mycobacteria";
import { gramNegativeBacilli } from "./gram-negative-bacilli";
import { entericPathogens } from "./enteric-pathogens";
import { spirochetesSyphilis } from "./spirochetes-syphilis";
import { intracellularBacteria } from "./intracellular-bacteria";
import { systemicMycoses } from "./systemic-mycoses";
import { opportunisticFungi } from "./opportunistic-fungi";
import { intestinalProtozoa } from "./intestinal-protozoa";
import { bloodTissueProtozoa } from "./blood-tissue-protozoa";
import { helminthsNematodes } from "./helminths-nematodes";
import { cestodesTrematodes } from "./cestodes-trematodes";
import { viralStructureGenetics } from "./viral-structure-genetics";
import { dnaViruses } from "./dna-viruses";
import { rnaViruses } from "./rna-viruses";
import { viralVaccinesDiagnostics } from "./viral-vaccines-diagnostics";
import { hepatitisViruses } from "./hepatitis-viruses";
import { hivAids } from "./hiv-aids";
import { normalFlora } from "./normal-flora";
import { bugsBySystemGiMeningitis } from "./bugs-by-system-gi-meningitis";
import { bugsBySystemRashStdTorch } from "./bugs-by-system-rash-std-torch";
import { antimicrobialOverview } from "./antimicrobial-overview";
import { cellWallInhibitors } from "./cell-wall-inhibitors";
import { proteinSynthesisInhibitors } from "./protein-synthesis-inhibitors";
import { dnaRnaFolateInhibitors } from "./dna-rna-folate-inhibitors";
import { antimycobacterials } from "./antimycobacterials";
import { antifungals } from "./antifungals";
import { antiparasiticAntiviral } from "./antiparasitic-antiviral";
import { hivTherapy } from "./hiv-therapy";
import { hcvTherapy } from "./hcv-therapy";
import { cellularAdaptations } from "./cellular-adaptations";
import { cellInjuryMechanisms } from "./cell-injury-mechanisms";
import { apoptosisPathways } from "./apoptosis-pathways";
import { necrosisTypes } from "./necrosis-types";
import { cranialNerves } from "./cranial-nerves";
import { diabetesMellitus } from "./diabetes-mellitus";
import { geneExpressionModifications } from "./gene-expression-modifications";
import { geneticTermsPopgen } from "./genetic-terms-popgen";
import { imprintingDisorders } from "./imprinting-disorders";
import { modesOfInheritance } from "./modes-of-inheritance";
import { cysticFibrosis } from "./cystic-fibrosis";
import { muscularDystrophies } from "./muscular-dystrophies";
import { trinucleotideRepeatDiseases } from "./trinucleotide-repeat-diseases";
import { autosomalTrisomies } from "./autosomal-trisomies";
import { chromosomalDisorders } from "./chromosomal-disorders";
import { nutritionFundamentals } from "./nutrition-fundamentals";
import { vitaminA } from "./vitamin-a";
import { bVitamins1 } from "./b-vitamins-1";
import { bVitamins2 } from "./b-vitamins-2";
import { vitaminD } from "./vitamin-d";
import { vitaminsEK } from "./vitamins-e-k";
import { vitaminCZincPem } from "./vitamin-c-zinc-pem";
import { ethanolMetabolism } from "./ethanol-metabolism";
import { enzymeTerminology } from "./enzyme-terminology";
import { metabolismOverview } from "./metabolism-overview";
import { tcaCyclePdh } from "./tca-cycle-pdh";
import { oxidativePhosphorylation } from "./oxidative-phosphorylation";
import { gluconeogenesis } from "./gluconeogenesis";
import { pentosePhosphatePathway } from "./pentose-phosphate-pathway";
import { fructoseGalactoseDisorders } from "./fructose-galactose-disorders";
import { sorbitolPathway } from "./sorbitol-pathway";
import { aminoAcids } from "./amino-acids";
import { ureaCycleDisorders } from "./urea-cycle-disorders";
import { aminoAcidopathies } from "./aminoacidopathies";
import { glycogenMetabolism } from "./glycogen-metabolism";
import { lysosomalStorageDiseases } from "./lysosomal-storage-diseases";
import { fattyAcidMetabolism } from "./fatty-acid-metabolism";
import { ketoneBodies } from "./ketone-bodies";
import { metabolicFuelUse } from "./metabolic-fuel-use";
import { lipidTransport } from "./lipid-transport";
import { familialDyslipidemias } from "./familial-dyslipidemias";

/** USMLE 2026 topics in reading order (M1+M2 Molecular first, then pilot corpus). */
export const usmleNotes: KypUsMLENote[] = [
  // Biochemistry — Molecular (Phase I-C M1 + M2, book order)
  chromatinOrganization,
  nucleotidesSynthesis,
  purineSalvageDisorders,
  dnaReplication,
  dnaRepair,
  dnaMutations,
  lacOperon,
  eukaryoticGeneOrganization,
  rnaProcessing,
  translationProteinSynthesis,
  // Biochemistry — Cellular (Phase I-C M3, book order)
  cellCycle,
  organellesCellTrafficking,
  cytoskeletonCilia,
  collagenElastin,
  connectiveTissueDiseases,
  // Biochemistry — Laboratory Techniques (Phase I-C M4/L1, book order)
  pcrCrispr,
  blottingProcedures,
  flowCytometryElisa,
  karyotyping,
  // Biochemistry — Genetics I (Phase I-C G1, book order)
  geneExpressionModifications,
  geneticTermsPopgen,
  imprintingDisorders,
  // Biochemistry — Genetics II (Phase I-C G2, book order)
  modesOfInheritance,
  cysticFibrosis,
  muscularDystrophies,
  trinucleotideRepeatDiseases,
  // Biochemistry — Genetics III (Phase I-C G3, book order)
  autosomalTrisomies,
  chromosomalDisorders,
  // Biochemistry — Nutrition (Phase I-C N, book order)
  nutritionFundamentals,
  vitaminA,
  bVitamins1,
  bVitamins2,
  vitaminD,
  vitaminsEK,
  vitaminCZincPem,
  ethanolMetabolism,
  // Biochemistry — Metabolism (Phase I-C E, book order)
  enzymeTerminology,
  metabolismOverview,
  tcaCyclePdh,
  oxidativePhosphorylation,
  gluconeogenesis,
  pentosePhosphatePathway,
  fructoseGalactoseDisorders,
  sorbitolPathway,
  aminoAcids,
  ureaCycleDisorders,
  aminoAcidopathies,
  glycogenMetabolism,
  lysosomalStorageDiseases,
  fattyAcidMetabolism,
  ketoneBodies,
  metabolicFuelUse,
  lipidTransport,
  familialDyslipidemias,
  // Pilot corpus
  glycolysisRegulation,
  sympathomimetics,
  atherosclerosis,
  urinaryCasts,
  avConductionBlocks,
  strokeSyndromes,
  acidBasePhysiology,
  hypersensitivityTypes,
  lymphoidStructures,
  innateVsAdaptiveImmunity,
  mhcComplex,
  hlaSubtypes,
  nkBTCellFunctions,
  tCellDevelopment,
  cytotoxicRegulatoryTCells,
  lymphocyteActivationTolerance,
  antibodyStructure,
  immunoglobulinIsotypes,
  complementPathways,
  complementDisorders,
  cytokines,
  respiratoryBurstIfn,
  cdMarkers,
  activePassiveImmunity,
  autoantibodies,
  bCellImmunodeficiencies,
  tCellPhagocyteImmunodeficiencies,
  immunodeficiencyInfectionPatterns,
  transplantRejection,
  immunosuppressants,
  recombinantCytokines,
  bacterialStructures,
  stainsIdentification,
  specialCultureRequirements,
  oxygenRequirements,
  organismGroupsQuickReference,
  virulenceMechanisms,
  bacterialGenetics,
  exotoxinsEndotoxins,
  gramPositiveCocci,
  gramPositiveBacilli,
  mycobacteria,
  gramNegativeBacilli,
  entericPathogens,
  spirochetesSyphilis,
  intracellularBacteria,
  systemicMycoses,
  opportunisticFungi,
  intestinalProtozoa,
  bloodTissueProtozoa,
  helminthsNematodes,
  cestodesTrematodes,
  viralStructureGenetics,
  dnaViruses,
  rnaViruses,
  viralVaccinesDiagnostics,
  hepatitisViruses,
  hivAids,
  normalFlora,
  bugsBySystemGiMeningitis,
  bugsBySystemRashStdTorch,
  antimicrobialOverview,
  cellWallInhibitors,
  proteinSynthesisInhibitors,
  dnaRnaFolateInhibitors,
  antimycobacterials,
  antifungals,
  antiparasiticAntiviral,
  hivTherapy,
  hcvTherapy,
  cellularAdaptations,
  cellInjuryMechanisms,
  apoptosisPathways,
  necrosisTypes,
  cranialNerves,
  diabetesMellitus,
];

export const usmleNotesById: Record<string, KypUsMLENote> = Object.fromEntries(
  usmleNotes.map((n) => [n.id, n])
);

export function getUsMLENote(slug: string): KypUsMLENote | undefined {
  return usmleNotesById[slug];
}

export function getAllUsMLESlugs(): string[] {
  return usmleNotes.map((n) => n.id);
}

export function getAdjacentUsMLENotes(slug: string): {
  prev?: KypUsMLENote;
  next?: KypUsMLENote;
} {
  const i = usmleNotes.findIndex((n) => n.id === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? usmleNotes[i - 1] : undefined,
    next: i < usmleNotes.length - 1 ? usmleNotes[i + 1] : undefined,
  };
}

/** Subjects in registry order — used to group the hub grid. */
export const usmleSubjects: string[] = Array.from(
  new Set(usmleNotes.map((n) => n.subject))
);

export type { MechanismFlow };
