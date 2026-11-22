#!/usr/bin/env python3
"""E23 element captures — PIL crop of the two registry visuals from the
4 full-page captures, using text-anchored DOM doc-coordinates (rects measured
in-browser; identical y-offsets verified in light and dark)."""
from PIL import Image
import os

QA = "/home/z/kyp-usmle-notes/docs/qa/e23"
# doc-coords at viewport 1440 (light and dark verified identical)
VISUALS = [
    ("nk-kill-model", {"x": 281, "y": 3904.94, "w": 1102, "h": 728.66}),
    ("b-t-division-of-labor", {"x": 281, "y": 5678.53, "w": 1102, "h": 697.17}),
]
THEMES = ["light", "dark"]

import statistics
for theme in THEMES:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    for name, r in VISUALS:
        box = (int(r["x"]), int(r["y"]), int(r["x"] + r["w"]), int(r["y"] + r["h"]))
        crop = im.crop(box)
        out = f"{QA}/element-{name}-{theme}.png"
        crop.save(out)
        # content check: stdev of grayscale (blank regions have ~0)
        gray = crop.convert("L")
        px = list(gray.getdata())
        sd = statistics.pstdev(px[::37])
        print(f"{os.path.basename(out)}: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
