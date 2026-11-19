#!/usr/bin/env python3
"""P17-P19 integration + PATHOLOGY CHAPTER CLOSE: move staging into content/,
register nothing (done separately), flip the 3 topic statuses, embed
textbookVisuals, set chapter extractionStatus=verified + completedAt,
pendingTopicCount=0."""
import json, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
CONTENT = ROOT / "content" / "usmle"

TOPICS = [
    ("p17", "chemical-carcinogens"),
    ("p18", "tumor-markers-molecular"),
    ("p19", "paraneoplastic-aging"),
]

for pid, slug in TOPICS:
    stage = CACHE / f"staging-{pid}"
    shutil.copy(stage / "manifests" / f"{slug}.json", CONTENT / "manifests" / f"{slug}.json")
    shutil.copy(stage / "visual-inventory" / f"{slug}.json", CONTENT / "visual-inventory" / f"{slug}.json")
    print(f"moved {slug}: manifest + inventory -> content/")

chap_path = CONTENT / "chapters" / "pathology.json"
chap = json.loads(chap_path.read_text(encoding="utf8"))
for pid, slug in TOPICS:
    inv = json.loads((CONTENT / "visual-inventory" / f"{slug}.json").read_text(encoding="utf8"))
    for t in chap["topics"]:
        if t["topicId"] == slug:
            assert t["status"] == "pending", f"{slug} status is {t['status']}"
            t["status"] = "complete"
            t["textbookVisuals"] = inv["inventory"]
            break
    else:
        raise SystemExit(f"topic {slug} not found")
chap["pendingTopicCount"] = sum(1 for t in chap["topics"] if t["status"] == "pending")
assert chap["pendingTopicCount"] == 0, f"pending {chap['pendingTopicCount']} remain"
chap["extractionStatus"] = "verified"
chap["completedAt"] = "2026-11-19"
chap_path.write_text(json.dumps(chap, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter flipped + CLOSED: 19/19 complete, extractionStatus=verified, completedAt=2026-11-19")
print("DONE")
