#!/usr/bin/env python3
"""M4 element captures (TABLE NOTE — text-anchored crops per the E22/E35
pattern): the verbatim trait-directory table (x=257 y=3819, 1150x590) and the
mechanism-flow render (x=256 y=7270, 1152x563), from the 4 full-page captures."""
from PIL import Image
import os
import statistics

QA = "/home/z/kyp-usmle-notes/docs/qa/m4"
VISUALS = [
    ("trait-directory-table", {"x": 257, "y": 3819, "w": 1150, "h": 590}),
    ("mechanism-flow", {"x": 256, "y": 7270, "w": 1152, "h": 563}),
]
THEMES = ["light", "dark"]

for theme in THEMES:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    for name, r in VISUALS:
        box = (int(r["x"]), int(r["y"]), int(r["x"] + r["w"]), int(r["y"] + r["h"]))
        crop = im.crop(box)
        out = f"{QA}/element-{name}-{theme}.png"
        crop.save(out)
        gray = crop.convert("L")
        px = list(gray.getdata())
        sd = statistics.pstdev(px[::37])
        print(f"{os.path.basename(out)}: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
