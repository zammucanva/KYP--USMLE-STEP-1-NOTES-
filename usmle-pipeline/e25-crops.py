#!/usr/bin/env python3
"""E25 element captures — PIL crops of the two E25 visuals."""
from PIL import Image
import statistics

QA = "/home/z/kyp-usmle-notes/docs/qa/e25"
VISUALS = [
    ("ctl-kill-cycle", {"x": 281, "y": 3884, "w": 1102, "h": 630}),
    ("treg-suppression-model", {"x": 281, "y": 5578, "w": 1102, "h": 630}),
]
for theme in ["light", "dark"]:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    for name, r in VISUALS:
        box = (int(r["x"]), int(r["y"]), int(r["x"] + r["w"]), int(r["y"] + r["h"]))
        crop = im.crop(box)
        out = f"{QA}/element-{name}-{theme}.png"
        crop.save(out)
        gray = crop.convert("L")
        px = list(gray.getdata())
        sd = statistics.pstdev(px[::37])
        print(f"element-{name}-{theme}.png: {crop.size[0]}x{crop.size[1]} stdev={sd:.2f}")
print("DONE")
