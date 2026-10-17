#!/usr/bin/env python3
"""E24 element capture — PIL crop of t-cell-selection-map from full-page captures."""
from PIL import Image
import statistics

QA = "/home/z/kyp-usmle-notes/docs/qa/e24"
BOX = (281, 3971, 281 + 1102, 3971 + 663)
for theme in ["light", "dark"]:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    crop = im.crop(BOX)
    out = f"{QA}/element-t-cell-selection-map-{theme}.png"
    crop.save(out)
    gray = crop.convert("L")
    px = list(gray.getdata())
    sd = statistics.pstdev(px[::37])
    print(f"element-t-cell-selection-map-{theme}.png: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
