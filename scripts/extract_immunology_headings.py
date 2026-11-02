#!/usr/bin/env python3
"""Immunology (chapter 2, part 1 pdf 115-142) — FA subsection heading extraction.

Same method as the biochemistry Phase I-C extraction precedent:
PyMuPDF span styles. FA subsection bars = #004b6c MyriadPro-Bold ~10pt;
minor headings = #165d7e semibold. Prints every heading with pdf/book page
and bbox width (bar-style headings are full-width), for deliberate topic
curation — nothing is written by this script.
"""
import fitz

PDF = "/home/z/kyp-usmle-notes/upload/usmle part1.pdf"
doc = fitz.open(PDF)

# color ints as RRGGBB
BAR = 0x004B6C        # FA subsection bars
MINOR = 0x165D7E      # minor headings

for pno in range(115, 143):  # pdf 115-142 (1-based)
    page = doc[pno - 1]
    d = page.get_text("dict")
    for block in d["blocks"]:
        if block.get("type") != 0:
            continue
        for line in block["lines"]:
            for span in line["spans"]:
                col = span["color"]
                size = round(span["size"], 1)
                txt = span["text"].strip()
                if not txt:
                    continue
                if col == BAR and size >= 9:
                    print(f"pdf {pno} (book {pno-22})  BAR   [{size}pt] {txt[:80]}")
                elif col == MINOR and size >= 8.5 and size <= 11:
                    print(f"pdf {pno} (book {pno-22})  minor [{size}pt] {txt[:80]}")
doc.close()
