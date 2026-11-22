#!/usr/bin/env python3
"""Microbiology Phase I-C — heading census across pdf 143-222 (part 1).

Walks the chapter, extracts per-page candidate headings (the FA microbiology
layout: mixed-case section headings above the tables/prose), groups them by
the banner ranges, and writes a durable heading map for inventory building.

Banner structure (with the source's own printed typos, documented):
  BASIC BACTERIOLOGY  pdf 144-152
  CLINICAL BACTERIOLOGY pdf 154-170
  MYCOLOGY            pdf 171-172
  PARASITOLOGY        pdf 174-180 (banner printed 'MICROCIOLOGY' on 178-180)
  VIROLOGY            pdf 181-195
  SYSTEMS             pdf 196-204
  ANTIMICROBIALS      pdf 205-222 (banner printed 'ANTIMICROCIALS')
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()

NOISE = {
    "MICROBIOLOGY", "SEC TION II", "SECTION II", "MICROCIOLOGY",
    "MICROBIOLOGY—BASIC BACTERIOLOGY", "MICROBIOLOGY—CLINICAL BACTERIOLOGY",
    "MICROBIOLOGY—MYCOLOGY", "MICROBIOLOGY—PARASITOLOGY",
    "MICROCIOLOGY—PARASITOLOGY", "MICROCIOLOGY—VIROLOGY",
    "MICROCIOLOGY—SYSTEMS", "MICROCIOLOGY—ANTIMICROCIALS",
}
NOISE_PAT = re.compile(r"^(▶|\uf07d|Microbiology$|FAS1_)", re.I)
PAGE_NUM = re.compile(r"^\d{1,3}$")
# A heading: 2-50 chars, starts uppercase, no terminal period, not a table-cell fragment
HEADING_OK = re.compile(r"^[A-Z][A-Za-z0-9,’'()/&\u2013-]*( [A-Za-z0-9,’'()/&\u2013-]+)*$")
TABLE_HEADER_MARKERS = ("BUG", "MEDIA USED", "DRUG", "MECHANISM", "TOXICITY", "DISEASE",
                        "ORGANISM", "LOCATION", "TRANSMISSION", "TREATMENT", "SYMPTOMS",
                        "FINDINGS", "VIRUS", "BACTERIA", "DIAGNOSIS", "NOTES", "AGENT")

census = {}
for p in range(143, 223):
    page = pages[p - 1]
    lines = [l.strip() for l in page.split("\n") if l.strip()]
    heads = []
    for l in lines:
        t = l.replace("\uf07d", "").strip()
        if not t or t in NOISE or NOISE_PAT.match(l) or PAGE_NUM.match(t):
            continue
        if t.upper() in TABLE_HEADER_MARKERS:
            continue
        if len(t) < 2 or len(t) > 52:
            continue
        if not HEADING_OK.match(t):
            continue
        if t.endswith("."):
            continue
        # mixed-case heading or ALL-CAPS short heading
        words = t.split()
        is_title = all(w[0].isupper() or w[0] == "(" for w in words)
        is_caps = t.isupper() and len(t) <= 30
        if (is_title or is_caps) and len(words) <= 6:
            heads.append(t)
    # dedupe preserving order, drop consecutive repeats
    dedup = []
    for h in heads:
        if not dedup or dedup[-1] != h:
            dedup.append(h)
    census[p] = dedup

out = CACHE / "micro-heading-census.json"
out.write_text(json.dumps(census, indent=1, ensure_ascii=False), encoding="utf8")
print(f"wrote {out} ({sum(len(v) for v in census.values())} candidate headings)")

# Print the census for review
for p in range(143, 223):
    if census[p]:
        print(f"p{p}:", " | ".join(census[p]))
