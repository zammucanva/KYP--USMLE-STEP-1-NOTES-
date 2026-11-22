#!/usr/bin/env python3
"""M14 element captures — PIL crop of the registry visual from the
4 full-page captures (rect measured in-browser at 1440x900: x=281, y=6526, 1102x1326)."""
from PIL import Image
import os
import statistics

QA = "/home/z/my-project/kyp-usmle-notes/docs/qa/m14"
VISUALS = [
    ("spirochete-syphilis-map", {"x": 281, "y": 6526, "w": 1102, "h": 1344}),
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
