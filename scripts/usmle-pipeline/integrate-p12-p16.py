#!/usr/bin/env python3
"""P12-P16 integration: move staging manifests+inventories into content/,
flip pathology.json topic statuses (pending -> complete + textbookVisuals),
align note difficulty with chapter census (P13/P16 -> 3), update
pendingTopicCount. Registration in index.ts/registry.tsx is done separately."""
import json, re, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
CONTENT = ROOT / "content" / "usmle"

TOPICS = [
    ("p12", "neoplasia-nomenclature"),
    ("p13", "cancer-hallmarks"),
    ("p14", "cancer-immunotherapy-epidemiology"),
    ("p15", "metastasis-patterns"),
    ("p16", "oncogenes-tumor-suppressors"),
]
# chapter-census difficulty overrides (subagents shipped 2; census says 3)
DIFF_OVERRIDE = {"cancer-hallmarks": 3, "oncogenes-tumor-suppressors": 3}

# 1. move staging -> content
for pid, slug in TOPICS:
    stage = CACHE / f"staging-{pid}"
    src_m = stage / "manifests" / f"{slug}.json"
    src_i = stage / "visual-inventory" / f"{slug}.json"
    dst_m = CONTENT / "manifests" / f"{slug}.json"
    dst_i = CONTENT / "visual-inventory" / f"{slug}.json"
    assert src_m.exists(), f"missing {src_m}"
    assert src_i.exists(), f"missing {src_i}"
    shutil.copy(src_m, dst_m)
    shutil.copy(src_i, dst_i)
    print(f"moved {slug}: manifest + inventory -> content/")

# 2. difficulty alignment in note files
for slug, diff in DIFF_OVERRIDE.items():
    note = ROOT / "src/lib/kyp/usmle/notes" / f"{slug}.ts"
    t = note.read_text(encoding="utf8")
    t2 = re.sub(r"(\n  difficulty: )2(,)", rf"\g<1>{diff}\g<2>", t, count=1)
    assert t2 != t, f"difficulty not patched in {slug}.ts"
    note.write_text(t2, encoding="utf8")
    print(f"difficulty 2 -> {diff} in {slug}.ts")

# 3. chapter flip
chap_path = CONTENT / "chapters" / "pathology.json"
chap = json.loads(chap_path.read_text(encoding="utf8"))
flipped = 0
for pid, slug in TOPICS:
    inv = json.loads((CONTENT / "visual-inventory" / f"{slug}.json").read_text(encoding="utf8"))
    for t in chap["topics"]:
        if t["topicId"] == slug:
            assert t["status"] == "pending", f"{slug} status is {t['status']}"
            t["status"] = "complete"
            t["textbookVisuals"] = inv["inventory"]
            flipped += 1
            break
    else:
        raise SystemExit(f"topic {slug} not found in chapter json")
assert flipped == 5, f"flipped {flipped}"
chap["pendingTopicCount"] = sum(1 for t in chap["topics"] if t["status"] == "pending")
chap_path.write_text(json.dumps(chap, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter flipped: 5 topics complete, pendingTopicCount={chap['pendingTopicCount']}")
print("DONE")
