#!/usr/bin/env python3
"""M1 element captures — PIL crop of the registry visual from the
4 full-page captures, using text-anchored DOM doc-coordinates (rects measured
in-browser; identical y-offsets verified in light and dark: x=281, y=3750,
1102x877)."""
from PIL import Image
import os
import statistics

QA = "/home/z/kyp-usmle-notes/docs/qa/m1"
# doc-coords at viewport 1440 (light and dark verified identical)
VISUALS = [
    ("bacterial-cell-anatomy", {"x": 281, "y": 3750, "w": 1102, "h": 877}),
]
THEMES = ["light", "dark"]

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
