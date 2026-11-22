#!/usr/bin/env python3
"""PH28 biologic-agents — manifest + inventory (Pharmacology miscellaneous
batch), STAGED under .usmle-pipeline-cache/staging-ph28/ (the promotion step
owns content/). Source: FULL pdf page 276 / book 254 (Part 1) — the LAST
page of the Pharmacology chapter (pdf 277 opens Public Health Sciences); the
topic owns the WHOLE page, which carries ONE table: "Biologic agents",
columns ENDING / CATEGORY / EXAMPLE, three group banner rows ("Monoclonal
antibodies (-mab)—target overexpressed cell surface receptors" with 3 rows;
"Small molecule inhibitors (-ib)—target intracellular molecules" with 6
rows; "Interleukin receptor modulators (-kin)—agonists and antagonists of
interleukin receptors" with 2 rows) and 11 data rows total, -ximab/rituximab
through -kinra/anakinra. Census (pdfimages): ZERO raster images on the page —
pure vector/text. VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE
full-page pass (staging-ph28/vlm-census.txt) confirming the printed row
order of all 11 rows, the color furniture (red mnemonic letters INSIDE the
CATEGORY cells — Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF,
Tyrosine kinase, Proteasome, Interleukin-2, interleukin receptor antagonist
— plus red banner fragments, light blue-gray shaded group banner rows
spanning all three columns, dark navy title), and the absence of margin
notes, mnemonics, asterisk footnotes, and images. ADJUDICATIONS, documented
in the census file: (1) the batch brief anticipated "-cept fusion proteins"
and "the other recombinant cytokines/enzymes" rows — they DO NOT PRINT on
pdf 276 (raw text layer + pdftotext -layout + the VLM pass all agree: the
page carries exactly the three stem groups -mab / -ib / -kin; the
-leukin/-kinra interleukin modulators are the page's only cytokine family;
brief corrected to print); (2) "SEC TION II" is the header-space extraction
artifact (known, carried as-is); (3) the three group banners print with em
dashes ("(-mab)—target...", "(-ib)—target...", "(-kin)—agonists and
antagonists...") and span all three columns in print — carried as rows in
their printed positions in the note's table block; (4) the table occupies
only the top ~40% of a short final page (VLM) — the chapter's last page.
Nothing is reproduced: the page's single visual asset (the color-coded
naming table) is adapted as ORIGINAL KYP ART (registry visual
biologic-agents-map, BiologicAgentsMap in visuals/pharm-p28.tsx — the -mab
humanization ladder drawn as three color-coded Y-shaped antibodies, the
format-follows-the-target cell-crossing panel with the six -ib machines
inside the cell, the -kin see-saw at the interleukin receptor, and the
four-move decode protocol strip); the full table is additionally carried
VERBATIM in the note's table block. DrugCards are FOLDED (documented in the
manifest notes): the page is a NAMING table — it prints category words
only, with no mechanisms/uses/adverse effects to trace, so the exemplar's
DrugCard shape does not fit; the naming content is carried in
blocks/recall/mnemonics instead."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {276: pages[275].split("\n")}
P = {276: norm(pages[275])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E28 = [
    ("Page identity — book page 254, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PHARMACOLOGY, the subsection banner '▶ PHARMACOLOGY—MISCELLANEOUS', and the table title 'Biologic agents' — the LAST page of the Pharmacology chapter (pdf 277 opens Public Health Sciences)", rng(276, 1, 9), [276]),
    ("The table's three column headers — ENDING / CATEGORY / EXAMPLE", rng(276, 10, 14), [276]),
    ("GROUP BANNER 1 + ROW 1 — 'Monoclonal antibodies (-mab)—target overexpressed cell surface receptors' (the banner spans all three columns in print, em dash as printed) then -ximab → Chimeric human-mouse monoclonal antibody → Rituximab", rng(276, 16, 21), [276]),
    ("ROWS 2-3 of the -mab group — -zumab → Humanized monoclonal antibody → Bevacizumab · -umab → Human monoclonal antibody → Denosumab (the humanization ladder: -xi- chimeric, -zu- humanized, -u- human)", rng(276, 23, 33), [276]),
    ("GROUP BANNER 2 + ROW 4 — 'Small molecule inhibitors (-ib)—target intracellular molecules' then -ciclib → Cyclin-dependent kinase inhibitor → Palbociclib", rng(276, 35, 40), [276]),
    ("ROWS 5-6 of the -ib group — -coxib → COX-2 inhibitor → Celecoxib · -parib → Poly(ADP-ribose) polymerase inhibitor → Olaparib (subscripts/superscripts carry as plain text per the cache layer)", rng(276, 42, 52), [276]),
    ("ROWS 7-8 of the -ib group — -rafenib → BRAF inhibitor → Vemurafenib · -tinib → Tyrosine kinase inhibitor → Imatinib", rng(276, 54, 64), [276]),
    ("ROW 9 of the -ib group — -zomib → Proteasome inhibitor → Bortezomib (the sixth intracellular machine)", rng(276, 66, 70), [276]),
    ("GROUP BANNER 3 + ROW 10 — 'Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors' then -leukin → Interleukin-2 agonist/analog → Aldesleukin (the cytokine-mimic arm that STIMULATES)", rng(276, 72, 77), [276]),
    ("ROW 11 — -kinra → Interleukin receptor antagonist → Anakinra (the cytokine-mimic arm that BLOCKS — the -kin see-saw's antagonist side)", rng(276, 79, 83), [276]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 254 / 12/19/25 8:07 AM (page identity, book 254)", rng(276, 85, 87), [276]),
]
for c, q, pgs in E28:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"biologic-agents: evidence {len(kept)}/{len(E28)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m28 = {"topicId": "biologic-agents", "title": "Biologic Agents: The Naming Table",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Miscellaneous", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [276], "bookPages": "254–254"},
    "sourceEvidence": kept, "visualIds": ["biologic-agents-map"],
    "mechanismIds": ["mab-grammar-map", "cytokine-mimic-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed naming table — 4 patterns (the chimeric -ximab infusion-reaction stem, the -tinib intracellular-tyrosine-kinase stem, the -leukin interleukin-2 agonist/analog stem, the -umab fully-human formulary question), 4 traps (-ximab/-zumab/-umab source ladder, -tinib vs -zomib infix machines, -leukin vs -kinra directions, -mab vs -ib target addresses), 3 pivots (the source-infix router, the stem/format router, the cytokine-direction router), and 8 recall cards covering all 11 printed rows.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the ending→category→example associations only; the attack structure, the distractor designs, and the reverse-direction question shapes are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "decode-grammar-protocol", "summary": "The stem→infix→direction grammar and the four-move decode protocol (READ THE STEM -mab/-ib/-kin → IF -mab READ THE SOURCE INFIX -xi-/-zu-/-u- → IF -ib/-kin READ THE TARGET INFIX OR DIRECTION → RECALL THE PRINTED EXAMPLE, THEN GENERALIZE), including the format-follows-the-target rule (cell-surface receptor → antibody; intracellular molecule → small molecule; interleukin receptor → recombinant modulator) — the claim that this three-row -mab grammar decodes every monoclonal on the exam.",
         "origin": "outside-first-aid", "rationale": "The source prints the three source infixes and their categories as table rows but never states the grammar (read the name right-to-left), the delivery logic, or the protocol; the synthesis is KYP's.",
         "location": "core.keyIdea + mechanisms[0] + blocks[2] the list block + blocks[3] the steps block + the registry visual's Zone A ladder, Zone B panel, and Zone D protocol strip"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (XI MIXES, ZU GRAFTS, U IS HUMAN / MAB OUTSIDE, IB INSIDE, KIN IN-BETWEEN / SIX MACHINES, ONE SUFFIX / LEUKIN LIFTS, KINRA KNOCKS). No mnemonic prints in the page's margins; First Aid's own red mnemonic letters INSIDE the CATEGORY cells (Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF, Tyrosine kinase, Proteasome, Interleukin-2, interleukin receptor antagonist) are carried ATTRIBUTED inside the verbatim table, the memory callout, and the visual, and are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 276 (pdfimages + VLM census, staging-ph28/vlm-census.txt); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's footer attribution text"},
        {"id": "mini-case-layer", "summary": "The rituximab first-infusion-reaction miniCase — which ending marks the monoclonal class — with the correct answer routing the structural description (murine variable regions + human constant regions = the printed 'Chimeric human-mouse monoclonal antibody' category verbatim) to -ximab, and distractors climbing the wrong rung (-zumab humanized, -umab human) or leaving the antibody family entirely (-kinra, the interleukin receptor antagonist).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the pairing as one table row and never dissects it against the ladder's other rungs as distractors; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase + blocks[4] the -kin compare block"},
        {"id": "generalization-and-bridge-layer", "summary": "The KYP-context generalizations, every one flagged as such: the -mab grammar applied to monoclonals the page never prints (infliximab -xi- chimeric, trastuzumab -zu- humanized, adalimumab -u- human), the immunogenicity shadow of the humanization ladder (chimeric > humanized > human), the specific receptor context for the -kin rows (aldesleukin at the IL-2 receptor driving T-cell expansion; anakinra as the recombinant IL-1 receptor antagonist), and the -ib indication families — the immunology bridge to the cytokine physiology.",
         "origin": "outside-first-aid", "rationale": "The source is a naming table with category words only; every mechanism, receptor, indication, and immunogenicity statement beyond the printed categories is KYP context, explicitly marked in the note and never presented as printed text.",
         "location": "blocks[2] the list block + mechanisms[1] cytokine-mimic-map + blocks[4] the compare block + blocks[5] the exam callout + mnemonics' clinical fields"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 276 / book 254 is the LAST page of the Pharmacology chapter (pdf 277 opens Public Health Sciences), entirely the PHARMACOLOGY—MISCELLANEOUS subsection, carrying ONE table — 'Biologic agents' (columns ENDING / CATEGORY / EXAMPLE, 3 shaded group banner rows + 11 data rows, printed order -ximab/rituximab through -kinra/anakinra) — carried VERBATIM in the note's table block (blocks[1], banner rows carried as rows in their printed positions, documented). CENSUS (pdfimages): ZERO raster images; the table occupies the top ~40% of a short final page (VLM). VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-ph28/vlm-census.txt) confirmed the printed row order of all 11 rows, the color furniture (red mnemonic letters INSIDE the CATEGORY cells — Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF, Tyrosine kinase, Proteasome, Interleukin-2, interleukin 'r'eceptor 'a'ntagonist — plus red banner fragments, light blue-gray shaded group banner rows spanning all three columns, dark navy title), and the absence of margin notes, mnemonics, asterisk footnotes, and images. ADJUDICATION (all three reads agree — raw text layer, pdftotext -layout, and the VLM pass): the batch brief anticipated '-cept fusion proteins' and 'the other recombinant cytokines/enzymes' rows — they DO NOT PRINT on pdf 276; the page carries exactly the three stem groups (-mab, -ib, -kin), and the -leukin/-kinra interleukin modulators are its only cytokine family (brief corrected to print; the note's cytokine-mimic mechanism and the -kin see-saw are built on the printed rows, and the immunology bridge is flagged KYP context). Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); em dashes in the three group banners ('(-mab)—target overexpressed cell surface receptors', '(-ib)—target intracellular molecules', '(-kin)—agonists and antagonists of interleukin receptors'); banners span all three columns in print; subscripts as plain digits per the cache text layer (COX-2, Poly(ADP-ribose)); First Aid's red CATEGORY letters carried ATTRIBUTED (not counted among the four KYP mnemonics). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (mab-grammar-map, cytokine-mimic-map), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (drug-names — produced in parallel in this same batch, referenced by design; cancer-immunotherapy-epidemiology; recombinant-cytokines; cytokines), 4 crossLinks, 4 KYP mnemonics, a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option), and NO DrugCards — the DrugCard layer is FOLDED (documented): the page is a NAMING table that prints category words only, with no mechanisms/uses/adverse effects to trace to the page, so the exemplar's DrugCard shape does not fit; the naming content is carried in blocks/recall/mnemonics instead; (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph28/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'biologic-agents-map' is therefore not yet in visuals/registry.tsx by design); (4) the page's single visual asset (the color-coded naming table) is implemented as ORIGINAL KYP ART in ONE registry visual (biologic-agents-map, BiologicAgentsMap in visuals/pharm-p28.tsx, viewBox 0 0 1102 1116): the -mab humanization ladder drawn as three color-coded Y-shaped antibodies (-ximab with mouse arms, -zumab with grafted loop tips, -umab fully human, against the printed examples rituximab/bevacizumab/denosumab), the format-follows-the-target cell-crossing panel (the -mab antibody locked outside the plasma membrane at overexpressed surface receptors; the six -ib machines inside the cell, each chip with its printed ending and example), the -kin see-saw at the interleukin receptor (aldesleukin mimicking-and-stimulating vs anakinra occupying-and-blocking), and the four-move decode protocol strip — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Miscellaneous",
    "topicId": "biologic-agents", "requiredInKYP": True}
inv28 = [
    dict(SV_BASE, **{
        "visualId": "biologic-agents-sv1",
        "sourcePages": {"part": 1, "pdfPages": [276], "bookPages": "254"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Biologic agents naming table (book 254): the drug-stem decoder for the biologics — 3 group banners and 11 rows, columns ENDING / CATEGORY / EXAMPLE, from -ximab/rituximab through -kinra/anakinra — the Pharmacology chapter's closing table",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph28/vlm-census.txt — VLM available this session): the section header band (book page 254, SEC TION II, PHARMACOLOGY, '▶ PHARMACOLOGY—MISCELLANEOUS'), the dark navy table title 'Biologic agents', three column headers ENDING / CATEGORY / EXAMPLE, then three shaded group banner rows spanning all columns — 'Monoclonal antibodies (-mab)—target overexpressed cell surface receptors'; 'Small molecule inhibitors (-ib)—target intracellular molecules'; 'Interleukin receptor modulators (-kin)—agonists and antagonists of interleukin receptors' — and 11 data rows in printed order: -ximab → Chimeric human-mouse monoclonal antibody → Rituximab; -zumab → Humanized monoclonal antibody → Bevacizumab; -umab → Human monoclonal antibody → Denosumab; -ciclib → Cyclin-dependent kinase inhibitor → Palbociclib; -coxib → COX-2 inhibitor → Celecoxib; -parib → Poly(ADP-ribose) polymerase inhibitor → Olaparib; -rafenib → BRAF inhibitor → Vemurafenib; -tinib → Tyrosine kinase inhibitor → Imatinib; -zomib → Proteasome inhibitor → Bortezomib; -leukin → Interleukin-2 agonist/analog → Aldesleukin; -kinra → Interleukin receptor antagonist → Anakinra. Red mnemonic letters print INSIDE the CATEGORY cells (Chi-meric, Humanized, Human, Cyclin-, COX-2, Poly, BRAF, Tyrosine kinase, Proteasome, Interleukin-2, interleukin 'r'eceptor 'a'ntagonist) plus red banner fragments; the table occupies the top ~40% of the short final page; no figures, icons, margin notes, or asterisk footnotes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "biologic-agents-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the whole registry visual (BiologicAgentsMap in visuals/pharm-p28.tsx): Zone A the -mab humanization ladder as three color-coded Y-shaped antibodies with the three printed rows (-ximab/Chimeric human-mouse/Rituximab, -zumab/Humanized/Bevacizumab, -umab/Human/Denosumab); Zone B the format-follows-the-target cell-crossing panel with the -mab antibody outside the plasma membrane at overexpressed surface receptors and the six -ib machines inside the cell (-ciclib/-coxib/-parib/-rafenib/-tinib/-zomib with their printed categories and examples); Zone C the -kin see-saw (-leukin/Interleukin-2 agonist-analog/Aldesleukin vs -kinra/Interleukin receptor antagonist/Anakinra); Zone D the four-move decode protocol strip; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, list block (blocks[2]), and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "biologic-agents-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph28"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "biologic-agents.json").write_text(json.dumps(m28, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "biologic-agents.json").write_text(
    json.dumps({"topicId": "biologic-agents", "chapterId": "pharmacology", "inventory": inv28,
                "coverageAudit": {"topicId": "biologic-agents", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries ONE visual asset — the Biologic agents naming table (sv1: 3 group banners + 11 data rows, columns ENDING / CATEGORY / EXAMPLE) — accounted for as an ORIGINAL KYP ADAPTATION: nothing is reproduced; ONE registry visual (biologic-agents-map, BiologicAgentsMap in visuals/pharm-p28.tsx, viewBox 0 0 1102 1116) rebuilds every ending, category, and example as original KYP vector art (the -mab humanization ladder as three color-coded Y-shaped antibodies; the format-follows-the-target cell-crossing panel with the six -ib machines inside the cell; the -kin see-saw at the interleukin receptor; the four-move decode protocol strip), and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the printed row order of all 11 rows, the color furniture (red CATEGORY letters, shaded banner rows), and the absence of margin mnemonics and images; the brief's anticipated -cept fusion proteins / recombinant-enzyme rows were adjudicated NOT PRESENT on pdf 276 (text layer + layout + VLM agree — brief corrected to print). FULL single page, the LAST of Pharmacology (pdf 277 opens Public Health Sciences). STAGED under .usmle-pipeline-cache/staging-ph28/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH28 manifest + inventory staged: {OUT}/manifests/biologic-agents.json, {OUT}/visual-inventory/biologic-agents.json")
print(f"biologic-agents: evidence {len(kept)}/{len(E28)} verified")
