#!/usr/bin/env python3
"""M5 element captures (TABLE NOTE — text-anchored crops): the verbatim
trait-directory table (x=257 y=3758, 1150x416) and the mechanism-flow render
(x=256 y=7087, 1152x539), from the 4 full-page captures."""
from PIL import Image
import os
import statistics

QA = "/home/z/kyp-usmle-notes/docs/qa/m5"
VISUALS = [
    ("trait-directory-table", {"x": 257, "y": 3758, "w": 1150, "h": 416}),
    ("mechanism-flow", {"x": 256, "y": 7087, "w": 1152, "h": 539}),
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
