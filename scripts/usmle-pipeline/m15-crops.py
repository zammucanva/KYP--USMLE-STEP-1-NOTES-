#!/usr/bin/env python3
"""M15 element captures — rect measured at 1440x900: x=281, y=6379, 1102x1523."""
from PIL import Image
import os, statistics
QA = "/home/z/my-project/kyp-usmle-notes/docs/qa/m15"
VISUALS = [("vector-borne-rash-map", {"x": 281, "y": 6379, "w": 1102, "h": 1523})]
for theme in ["light", "dark"]:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    for name, r in VISUALS:
        box = (int(r["x"]), int(r["y"]), int(r["x"]+r["w"]), int(r["y"]+r["h"]))
        crop = im.crop(box)
        out = f"{QA}/element-{name}-{theme}.png"
        crop.save(out)
        gray = crop.convert("L")
        sd = statistics.pstdev(list(gray.getdata())[::37])
        print(f"{os.path.basename(out)}: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
