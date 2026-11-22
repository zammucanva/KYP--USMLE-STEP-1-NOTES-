#!/usr/bin/env python3
"""E16 figure crops at 200 DPI for VLM census (p111 book 89)."""
from PIL import Image

src = "/home/z/my-project/upload/kyp-repo/.usmle-pipeline-cache/e16/p111-111.png"
img = Image.open(src)
W, H = img.size
print("page size:", W, H)

# generous crops: graph1 left column upper; graph2 right column upper; table lower-left
crops = {
    "g1-exercise": (int(W*0.05), int(H*0.10), int(W*0.50), int(H*0.52)),
    "g2-starvation": (int(W*0.50), int(H*0.05), int(W*0.96), int(H*0.52)),
    "table-fasted": (int(W*0.04), int(H*0.50), int(W*0.52), int(H*0.97)),
}
for name, box in crops.items():
    c = img.crop(box)
    # upscale 1.6x for VLM legibility
    c = c.resize((int(c.width*1.6), int(c.height*1.6)), Image.LANCZOS)
    out = f"/home/z/my-project/upload/kyp-repo/.usmle-pipeline-cache/e16/crop-{name}.png"
    c.save(out)
    print("wrote", out, c.size)
