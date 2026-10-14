#!/usr/bin/env python3
"""E16: find graph 2 via overlapping crops of the right column."""
from PIL import Image

src = "/home/z/my-project/upload/kyp-repo/.usmle-pipeline-cache/e16/p111-111.png"
img = Image.open(src)
W, H = img.size

# right column, three vertical bands + one wide
crops = {
    "r-col-mid":  (int(W*0.42), int(H*0.18), int(W*0.98), int(H*0.60)),
    "r-col-low":  (int(W*0.42), int(H*0.55), int(W*0.98), int(H*0.95)),
    "full-right": (int(W*0.40), int(H*0.15), int(W*0.99), int(H*0.98)),
}
for name, box in crops.items():
    c = img.crop(box)
    c = c.resize((int(c.width*1.5), int(c.height*1.5)), Image.LANCZOS)
    out = f"/home/z/my-project/upload/kyp-repo/.usmle-pipeline-cache/e16/crop-{name}.png"
    c.save(out)
    print("wrote", out, c.size)
