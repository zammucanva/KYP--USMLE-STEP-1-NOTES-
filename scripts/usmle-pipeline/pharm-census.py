#!/usr/bin/env python3
"""Pharmacology chapter census — extract FA subsection-bar headings (colored
bold spans) + candidate headings from pdf 249-276 (book 227-254), following
the immunology census method (PyMuPDF span styles)."""
import json
from collections import defaultdict

import fitz  # PyMuPDF

DOC = fitz.open("/home/z/my-project/kyp-usmle-notes/upload/usmle part1.pdf")
OUT = {}

for p in range(249, 277):
    page = DOC[p - 1]
    d = page.get_text("dict")
    items = []
    for block in d["blocks"]:
        if block.get("type") != 0:
            continue
        for line in block["lines"]:
            for span in line["spans"]:
                t = span["text"].strip()
                if not t:
                    continue
                color = span["color"]
                size = round(span["size"], 1)
                font = span["font"]
                items.append({
                    "t": t[:80],
                    "color": f"{color:06x}",
                    "size": size,
                    "font": font.split("+")[-1],
                    "y": round(line["bbox"][1], 0),
                })
    # subsection bars: white text on colored bar -> color ffffffff, bold, ~10pt
    # or the known heading colors; collect distinctive styles
    bars = [i for i in items if i["size"] >= 9.5 and "Bold" in i["font"]]
    OUT[p] = {"bars": bars[:14], "all_count": len(items)}

print(json.dumps(OUT, indent=1)[:200], "...")
# Print a compact per-page view of the bold bars (the FA subsection bars)
for p in range(249, 277):
    bars = OUT[p]["bars"]
    print(f"--- p{p} (book {p-22}) ---")
    for b in bars:
        print(f"   y{int(b['y']):4d} {b['size']:5.1f} {b['font'][:20]:20s} #{b['color']} {b['t'][:70]}")
