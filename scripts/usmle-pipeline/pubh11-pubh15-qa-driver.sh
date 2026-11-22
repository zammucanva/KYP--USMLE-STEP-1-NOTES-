#!/bin/bash
# Per-topic browser QA driver for tight-disk windows: for each topic —
# wipe .next, start dev server fresh, run the 4-pass QA for ONE topic,
# kill server, wipe .next. Keeps peak disk at one topic's compile + pngs.
set -uo pipefail
cd /home/z/my-project/kyp-usmle-notes
for T in "$@"; do
  echo "=== QA CYCLE: $T ==="
  rm -rf .next
  (bun dev > /dev/null 2>&1 &)
  # wait for server
  for i in $(seq 1 30); do
    sleep 2
    code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/usmle/bias-and-study-errors" 2>/dev/null)
    [ "$code" = "200" ] && break
  done
  echo "  server up ($code) · df: $(df -h / | tail -1 | awk '{print $4" free"}')"
  python3 scripts/usmle-pipeline/pubh11-pubh15-browser-qa.py "$T" 2>&1 | grep -E "^==|theme=|BBOX|OVERLAP|OUTSIDE|saved"
  pkill -f "next dev" 2>/dev/null
  sleep 1
  rm -rf .next
  echo "  cycle done · df: $(df -h / | tail -1 | awk '{print $4" free"}')"
done
echo "ALL CYCLES DONE"
