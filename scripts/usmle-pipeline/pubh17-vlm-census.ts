import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function pass(zai: any, prompt: string, img: string) {
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${img}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  return String(r.choices?.[0]?.message?.content);
}
async function main() {
  const zai = await (ZAI as any).create();
  // PASS 1 — full page at 120dpi
  const page = readFileSync('/tmp/pubh17-page-290.png').toString('base64');
  console.log('===== PASS 1 — FULL PAGE (120dpi) =====');
  console.log(await pass(zai,
    'This is First Aid USMLE 2026 Part 1, pdf page 290 / printed book page 268. The page SPLITS: the UPPER portion (my scope) is the "Pearson correlation coefficient" block — a heading, a text block, and a row of FIVE scatter plots — ending immediately BEFORE the in-body ribbon banner "▶ PUBLIC HEALTH SCIENCES—ETHICS"; everything below that banner (Core ethical principles, Autonomy, Beneficence, Nonmaleficence, Justice, Decision-making capacity) belongs to ANOTHER topic. Describe the UPPER portion precisely and completely: (1) THE HEADING AND TEXT — quote every line of the "Pearson correlation coefficient" heading and body VERBATIM in reading order, including "A measure of the linear correlation between two variables. r is always between −1 and +1. The closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables.", the Variance sentence, the Positive r value / Negative r value arrow lines, and the Coefficient of determination line ending "Correlation does not necessarily imply causation." — what color is the heading (navy?); is any body text bold, italic, or colored (which words — is "Correlation does not necessarily imply causation." emphasized)?; (2) THE FIVE SCATTER PANELS — the critical part: a row of five small scatter plots. For EACH panel LEFT TO RIGHT, give: the printed r label above the plot VERBATIM (exact spacing: "r = –0.8" with spaces? "r=0" with no spaces? is the minus a hyphen, en-dash, or minus sign?), the printed caption below the plot VERBATIM ("Strong negative correlation", "Weak negative correlation", "No correlation", "Weak positive correlation", "Strong positive correlation" — match each caption to its panel), and the DOT PATTERN: how many dots roughly, do they trend upward or downward left-to-right, are they TIGHT around an imaginary line or LOOSE/scattered, does any panel show a flat/random cloud with no trend? Do the panels have axes (x/y lines? arrows? labels?) or just dots in a frame?; (3) THE SPLIT BOUNDARY — confirm the ribbon banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" prints BELOW the five panels and ABOVE "Core ethical principles", and confirm nothing else (no text, rule, or figure) sits between the last caption and that banner; (4) HEADER BAND — the running header at the very top: quote it (page number 268, SECTION II, PUBLIC HEALTH SCIENCES, and does the running-header banner say "▶ PUBLIC HEALTH SCIENCES—ETHICS" or "—EPIDEMIOLOGY AND BIOSTATISTICS"?); (5) COLOR FURNITURE — any RED or colored text anywhere in the upper portion, margin notes, mnemonics, asterisk footnotes, images, icons; the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.',
    page));
  // PASS 2 — zoomed confirmation of the upper portion (300dpi crop)
  const upper = readFileSync('/tmp/pubh17-upper-290.png').toString('base64');
  console.log('\n===== PASS 2 — ZOOMED UPPER PORTION (300dpi crop through the ETHICS banner) =====');
  console.log(await pass(zai,
    'A zoomed 300dpi crop of the UPPER portion of First Aid USMLE 2026 book page 268 (top of page through the "▶ PUBLIC HEALTH SCIENCES—ETHICS" ribbon banner and the "Core ethical principles" heading just below it). Answer with precision: (A) PANEL ORDER — list the five scatter panels in strict LEFT-TO-RIGHT order, each as: position (1st-5th) + exact r label as printed + exact caption as printed. Confirm or deny the order: 1st "r = –0.8" / "Strong negative correlation"; 2nd "r = –0.4" / "Weak negative correlation"; 3rd "r = 0" (or "r=0") / "No correlation"; 4th "r = +0.4" / "Weak positive correlation"; 5th "r = +0.8" / "Strong positive correlation". (B) DOT FIELDS — for each panel describe the dot cloud: approximate dot count; direction of trend (downhill / uphill / none); tightness (hugging a straight line closely vs loosely scattered vs a shapeless cloud with no trend); is the strong-negative panel steeper/tighter than the weak-negative panel; does the r=0 panel show any visible trend at all; are the two positive panels mirror images of the two negative panels; do the dots appear as filled circles, open circles, or squares, and are any colored?; (C) PANEL FURNITURE — does each panel have drawn x/y axes (lines with arrows?), axis labels or tick numbers, a bounding frame/box, or bare dots on the page? Is anything else drawn in or around the panels (fit lines, gridlines)?; (D) THE r=0 LABEL — is it printed "r = 0" with visible spaces or "r=0" with no spaces? And do the negative labels print the minus as an en-dash (–) or a true minus sign (−)?; (E) BOUNDARY — quote the ribbon banner line below the gallery verbatim and confirm the very next heading below it; is there a thin rule or gap between the last caption and the banner?; (F) Any red, bold, or colored words in the heading, body text, labels, or captions of the upper portion?',
    upper));
}
main();
