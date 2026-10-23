#!/usr/bin/env python3
"""One-off repair: insert the missing function head + svg open before the
orphaned M31 JSX block (starts at the '{/* header */}' line following
SystemsBugMatrix2's close)."""
from pathlib import Path

MICRO = Path("src/components/kyp/usmle/visuals/micro.tsx")
lines = MICRO.read_text(encoding="utf8").split("\n")

# locate the orphan boundary: the last component close before our block
# our block is the '{/* header */}' line that directly follows a blank line
# which follows the file's previous end (SystemsBugMatrix2 "}").
idx = None
for i, l in enumerate(lines):
    if l.strip() == "{/* header */}" and i > 4300 and i < 4360:
        idx = i
        break
assert idx is not None, "boundary not found"
assert lines[idx - 1].strip() == "", f"expected blank before block, got {lines[idx-1]!r}"

head = '''// ---------------------------------------------------------------------------
// M31 — Antimicrobial therapy: the mechanisms-of-action target map (an
// original KYP redraw of the source chart, pdf 205 / book 183). The bacterial
// cell with its nine numbered target sites; the seven satellite zone panels
// with the full printed drug rosters; the β-lactam cross-linking directory.
// The 4 tiny marker rasters and the 9 standalone dash glyphs of the printed
// chart are redrawn as vector marks (COPYRIGHTED chart — original redraw,
// never reproduced).
// ---------------------------------------------------------------------------

export function AntimicrobialTargetMap() {
  const w = 980;
  const h = 1052;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label="Antimicrobial therapy — the mechanisms-of-action target map, an original KYP redraw of the source chart (book 183). LEFT — THE BACTERIAL CELL: a CELL WALL band of peptidoglycan carrying the two wall stages (8 synthesis, 9 cross-linking — the source's split rim labels Cell wal l / Cell m embrane redrawn clean); a CELL MEMBRANE band carrying zone 2 with its gram keys (Daptomycin gram positive, Polymyxins gram negative); the cytoplasm with BACTERIAL CELL and the numbered target sites: zone 1 the folate cascade PABA to DHF to THF with the two blocked steps (Sulfonamides blocking PABA to DHF, Trimethoprim blocking DHF to THF — the one-carbon factory bacteria build and we eat); zone 3 DNA and zone 5 DNA gyrase side by side; zone 4 RNA polymerase emitting mRNA; and the two 70S ribosome pairs (50S cap plus 30S base) fed by the mRNA thread, carrying zones 6 and 7. RIGHT COLUMN A — the zone panels: 1 FOLIC ACID SYNTHESIS AND REDUCTION (DNA methylation) with Sulfonamides (Sulfamethoxazole, Sulfadiazine) blocking the sulfa step and Trimethoprim blocking the folate-reduction step; 2 MEMBRANE INTEGRITY with Daptomycin (gram positive) and Polymyxins (gram negative); 3 DNA INTEGRITY (via free radicals) with Metronidazole; 4 mRNA SYNTHESIS (RNA polymerase) with Rifampin; 5 GYRASE (DNA gyrase) with the Fluoroquinolones (Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin). RIGHT COLUMN B — the protein synthesis rosters: 6 the 50S SUBUNIT (Chloramphenicol, Clindamycin, Linezolid; the Macrolides Azithromycin, Clarithromycin, Erythromycin; the Streptogramins Quinupristin plus Dalfopristin) and 7 the 30S SUBUNIT (the Aminoglycosides Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin; Glycylcycline Tigecycline; the Tetracyclines Tetracycline, Doxycycline, Minocycline), each panel with its printed-order rule. BOTTOM — CELL WALL SYNTHESIS: 8 PEPTIDOGLYCAN SYNTHESIS with the Glycopeptides (Vancomycin, Bacitracin) and 9 PEPTIDOGLYCAN CROSS-LINKING, the beta-lactam directory: penicillinase-sensitive (Penicillin G, V; Ampicillin; Amoxicillin), penicillinase-resistant (Oxacillin, Nafcillin, Dicloxacillin), Antipseudomonal (Piperacillin; Cephalosporins I-V with the five generation examples), Carbapenems (Imipenem, Meropenem, Ertapenem), Monobactams (Aztreonam). The KYP synthesis strip reads the map by its six layers; the footer carries the source attribution, the raster/dash redraw note, the banner-typo note, and the drug-card cross-reference to M32." className="min-w-[940px]">
      {/* header */}'''

lines[idx : idx + 1] = head.split("\n")
MICRO.write_text("\n".join(lines), encoding="utf8")
print("head inserted; new total lines:", len(lines))
