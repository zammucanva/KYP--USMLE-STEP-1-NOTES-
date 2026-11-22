#!/usr/bin/env python3
from PIL import Image
import os, statistics
QA = "/home/z/my-project/kyp-usmle-notes/docs/qa/m18"
for theme in ["light", "dark"]:
    im = Image.open(f"{QA}/full-desktop-{theme}.png")
    box = (281, 4097, 281+1102, 4097+471)
    crop = im.crop(box)
    out = f"{QA}/element-intestinal-protozoa-panel-{theme}.png"
    crop.save(out)
    print(f"{out}: {crop.size[0]}x{crop.size[1]} stdev={statistics.pstdev(list(crop.convert('L').getdata())[::37]):.2f}")
print("DONE")
