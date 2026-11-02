#!/usr/bin/env python3
"""Smoke-test fixture generator for verify-source.ts.

Creates two synthetic PDFs with the exact contract page counts (433/436),
real text on the pinned sanity pages, and footer book-page numbers at the
expected offsets. Output goes to /tmp ONLY — these are synthetic junk files
for exercising the validator's logic, never real source material, and never
placed inside any git repository.
"""
import sys

try:
    from reportlab.lib.pagesizes import letter
    from reportlab.pdfgen import canvas
except ImportError:
    print("reportlab not available", file=sys.stderr)
    sys.exit(1)

def make_part(path: str, pages: int, pinned: dict[int, str], footers: dict[int, str]) -> None:
    c = canvas.Canvas(path, pagesize=letter)
    for p in range(1, pages + 1):
        body = pinned.get(p, f"Synthetic filler page {p} for validator smoke test. " * 3)
        c.setFont("Helvetica", 10)
        y = 720
        for line in body.split("\n"):
            c.drawString(72, y, line[:95])
            y -= 14
        footer = footers.get(p)
        if footer:
            c.setFont("Helvetica", 9)
            c.drawCentredString(306, 36, footer)
        c.showPage()
    c.save()
    print(f"wrote {path} ({pages} pages)")

if __name__ == "__main__":
    # Part 1: pdf 114 -> book 92 (offset -22); pinned sanity pages 49/111/114
    make_part(
        "/tmp/synth-part1.pdf",
        433,
        {
            49: "Chapter 1 Biochemistry synthetic start page.\nLipid transport and metabolic pathways overview.\nHigh-yield general principles section opener for smoke testing.",
            111: "Metabolic fuel use; fasting and starvation.\nFuel switch: creatine phosphate, anaerobic glycolysis, aerobic respiration.\nProtein fat carbohydrate stores over weeks of starvation synthetic text.",
            114: "Abetalipoproteinemia and familial dyslipidemias.\nMicrosomal transfer protein MTP mutation, apo B48 apo B100 absence.\nChylomicrons VLDL LDL absent, acanthocytosis, retinitis pigmentosa.\nEruptive xanthomas, tendon xanthomas, corneal arcus, pancreatitis risk.\nType I II III IV hyperlipoproteinemia synthetic summary for testing.",
        },
        {114: "01-Biochem    92"},
    )
    # Part 2: pdf 4 -> book 412 (offset +408); pinned sanity pages 4/187/269
    make_part(
        "/tmp/synth-part2.pdf",
        436,
        {
            4: "Hematology and oncology continuation synthetic page.\nAnemia classifications, leukemias, lymphomas overview text for testing.",
            187: "Renal physiology synthetic page for validator smoke testing.\nNephron segments, acid-base handling, glomerular filtration regulation.\nCountercurrent multiplier, ADH aldosterone action, distal tubule synthetic text.",
            269: "Respiratory physiology synthetic page.\nLung volumes, dead space, V/Q mismatch, oxygen-hemoglobin curve text.",
        },
        {4: "10-HemaOncol    412"},
    )
