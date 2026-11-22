import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64a = readFileSync('/tmp/pubh7-page-281.png').toString('base64');
  const b64b = readFileSync('/tmp/pubh7-page-282.png').toString('base64');
  const b64c = readFileSync('/tmp/pubh7-pp/km-figure-crop.png').toString('base64');

  // PASS 1 — pdf 281 / book 259, the BOTTOM portion (my topic's first block)
  const r1 = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 281 / printed book page 259, under the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". I own ONLY the BOTTOM portion of this page: from the "Kaplan-Meier curve" heading to the bottom of the page (the Likelihood ratio block above belongs to another topic). Describe my portion precisely and completely: (1) THE KAPLAN-MEIER TEXT BLOCK — quote the heading and EVERY sentence of the body text verbatim, in printed order (it starts "Used to estimate probability of survival over time..."). Note any special characters (curly quotes, en-dashes in "1 – (event probability)"). (2) THE FIGURE — this is the critical part. It is a Kaplan-Meier stepped-curve figure. Describe: (a) the Y-AXIS: what is its vertical axis label (read the rotated text), and which numbered tick labels print from top to bottom (1.0, 0.9 ... 0.2? are any missing, e.g. is 0.1 absent)? (b) the X-AXIS: what is its label and where does it sit? (c) THE TWO CURVES: what are the two curve names/labels (Drug? Control?) and WHERE does each label sit relative to its curve? Which curve starts higher and stays higher? Describe each curve\'s SHAPE: does each start at the top left and descend in discrete horizontal-then-vertical STEPS (a staircase), and roughly WHERE (early/middle/late on the time axis) does each curve take its steps down? Which curve drops soonest, which drops furthest by the end? (d) THE X, Y, Z MARKERS: there are single letters X, Y, Z printed in/near the figure — say exactly where each letter sits (on which curve or between the curves, early/middle/late on the time axis, upper or lower part of the plot) and what each seems to mark (a step-down/event point of the Drug curve, of the Control curve, or the separation between curves?). (e) the curve colors and line styles (solid black? colored? dashed?) and whether there are gridlines, tick marks on the time axis, or numbered ticks along the time axis (or is the time axis unlabeled numbers-wise?). (3) THE BOUNDARY — what prints immediately ABOVE the "Kaplan-Meier curve" heading (the last lines of the Likelihood ratio block, including any margin-note sentences about LR+ > 10 or pretest odds), and what prints at the very bottom of the page (the indd footer slug and timestamp)? (4) Any mnemonics, red text, margin notes, asterisk footnotes, or raster images in my portion. Preserve exact printed spellings.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64a}` } },
    ]}],
    thinking: { type: 'disabled' },
  });

  // PASS 2 — a 2x zoomed crop of the Kaplan-Meier figure itself
  const r2 = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is a 2x-zoomed crop of the Kaplan-Meier stepped-curve figure from First Aid USMLE 2026 book page 259 (bottom of the page). Read it like a proofreader: (a) the vertical Y-AXIS label (rotated text) — what does it say exactly? (b) list the Y tick labels top to bottom exactly as printed (e.g. 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2 — confirm which are present/absent); (c) the two curve labels — exact words and each one\'s position (which curve does each label belong to, and is the label placed at the left/middle/right, above/below/on the curve?); (d) THE STEPS: for EACH curve (the Drug curve and the Control curve), trace it left to right and describe each step: where does it run flat, where does it drop vertically, and how big is each drop (one tick? half a tick?); which curve drops first, which ends lower? Do both curves start together at the top-left (at 1.0)? Do they end at different heights at the right edge? (e) THE LETTERS X, Y, Z — exactly where is each letter printed (on a curve? at a step? between curves? near the bottom?) and what event does each appear to mark? (f) the X-AXIS label (exact word) and where it prints; are there any numbers or tick marks along the time axis? (g) line styles/colors of the two curves and any axis lines/gridlines.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64c}` } },
    ]}],
    thinking: { type: 'disabled' },
  });

  // PASS 3 — pdf 282 / book 260, the TOP portion (my topic's second block)
  const r3 = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 282 / printed book page 260, under the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". I own ONLY the TOP portion of this page: from the page top through the END of the "Hazard ratio" block (the "Evaluation of diagnostic tests" heading below belongs to another topic). Describe my portion precisely and completely: (1) THE HAZARD RATIO BLOCK — quote the heading and EVERY line verbatim in printed order: the definition sentence ("Measure of how often a particular event..."), then each bulleted line (HR = 1 / HR > 1 / HR < 1 with its exact em-dash or hyphen and wording), then the Kaplan-Meier line ("Kaplan-Meier curves: HR is derived from...") and its two bullets (a steeper curve / separation of curves). What bullet glyph is used (small square? triangle?), and is any of this text colored (is the heading navy? any red)? (2) THE BOUNDARY — what is the FIRST thing printed after the last Hazard ratio bullet (confirm the "Evaluation of diagnostic tests" heading is the next block and that it belongs to the page\'s lower portion)? Is there any figure or image inside the Hazard ratio block itself, or is it pure text? (3) THE HEADER — the banner lines at the very top of the page and the page number. (4) Any mnemonics, margin notes, asterisk footnotes, or raster images anywhere in the Hazard ratio block or the header region. Preserve exact printed spellings, punctuation, and any odd spacing.' },
      { type: 'image_url', image_url: { url: `data:image:image/png;base64,${b64b}`.replace('data:image:image/', 'data:image/') } },
    ]}],
    thinking: { type: 'disabled' },
  });

  console.log('===== PASS 1 — pdf 281 / book 259 BOTTOM (Kaplan-Meier curve block + figure) =====');
  console.log(String(r1.choices?.[0]?.message?.content));
  console.log('\n\n===== PASS 2 — KM FIGURE 2x CROP =====');
  console.log(String(r2.choices?.[0]?.message?.content));
  console.log('\n\n===== PASS 3 — pdf 282 / book 260 TOP (Hazard ratio block) =====');
  console.log(String(r3.choices?.[0]?.message?.content));
}
main();
