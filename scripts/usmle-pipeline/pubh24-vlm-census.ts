import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
import { appendFileSync } from 'fs';

/* PUBH24 challenging-scenarios — VLM census (Public Health batch), TWO passes:
 * pdf 296 / book 274 (the "Challenging patient and ethical scenarios" table,
 * part 1) and pdf 297 / book 275 ("... (continued)", part 2). Output:
 * .usmle-pipeline-cache/staging-pubh24/vlm-census.txt */

const PROMPT_296 = `This is First Aid USMLE 2026 Part 1, pdf page 296 / printed book page 274, in the banner "PUBLIC HEALTH SCIENCES—COMMUNICATION SKILLS". The page opens with the heading "Challenging patient and ethical scenarios", a short lead-in paragraph, and then a two-column table with column headers SITUATION and APPROPRIATE RESPONSE. Describe the page precisely and completely: (1) THE LEAD-IN — quote the whole lead-in paragraph verbatim (it begins "Appropriate responses are patient-centered, open-ended, and empathetic..." and includes three quoted example phrases in parentheses — report the exact quoted phrases and the exact list of ethical principles and points of view at the end); (2) THE TABLE — list EVERY row in PRINTED order. I count THIRTEEN situations on this page: (a) patient does not follow the medical plan; (b) patient desires an unnecessary procedure; (c) patient has difficulty taking medications; (d) family members ask for information about patient's prognosis; (e) a patient's family member asks you not to disclose the results of a test if the prognosis is poor because the patient will be "unable to handle it"; (f) a 17-year-old is pregnant and requests an abortion; (g) a 15-year-old is pregnant and wants to raise the child, the patient's parents want you to tell the patient to give the child up for adoption; (h) a terminally ill patient requests physician-assisted dying; (i) patient is suicidal; (j) patient states that you are attractive and asks if you would go on a date; (k) a woman who had a mastectomy says she now feels "ugly"; (l) patient is angry about the long time spent in the waiting room; (m) patient is upset with treatment received from another physician. For EACH row quote the SITUATION cell and the FULL APPROPRIATE RESPONSE cell verbatim (including "Do not..." sentences); confirm the count is exactly thirteen and none missing or extra; (3) COLOR FURNITURE — the heading color, the SITUATION / APPROPRIATE RESPONSE column-header styling, whether the SITUATION column prints in bold or a color (which?), row separator style (dotted hairlines? zebra shading?), and ANY red or otherwise colored text anywhere on the page (which words?); (4) any margin notes, mnemonics, asterisk footnotes, images, icons, or figures anywhere on the page; (5) the header/banner lines at the top (page number, section header, subsection banner — does the banner print twice?) and the footer slug with timestamp. Preserve exact printed spellings and state any words hyphenated or wrapped across lines.`;

const PROMPT_297 = `This is First Aid USMLE 2026 Part 1, pdf page 297 / printed book page 275, in the banner "PUBLIC HEALTH SCIENCES—COMMUNICATION SKILLS". The page continues the two-column SITUATION / APPROPRIATE RESPONSE table titled "Challenging patient and ethical scenarios (continued)". Describe the page precisely and completely: (1) THE TABLE — list EVERY row in PRINTED order. I count TWELVE situations on this page: (a) an invasive test is performed on the wrong patient; (b) a patient requires a treatment not covered by insurance; (c) a 7-year-old boy loses a sister to cancer and now feels responsible; (d) patient is victim of intimate partner violence; (e) patient wants to try alternative or holistic medicine; (f) physician colleague presents to work impaired; (g) patient's family insists on maintaining life support after brain death has occurred, citing patient's movements when touched; (h) a pharmaceutical company offers you a sponsorship in exchange for advertising its new drug; (i) patient requests a nonemergent procedure that is against your personal or religious beliefs; (j) mother and 15-year-old daughter are unresponsive and bleeding heavily, but father refuses transfusion because they are Jehovah's Witnesses; (k) a dependent patient presents with injuries inconsistent with caretaker's story; (l) a pediatrician recommends standard vaccinations for a patient, but the child's parent refuses. For EACH row quote the SITUATION cell and the FULL APPROPRIATE RESPONSE cell verbatim (including the AMA Code of Ethics exceptions sentence in the sponsorship row, the "Transfuse daughter, but do not transfuse mother" opening, and the abuse-reporting law sentence); confirm the count is exactly twelve and none missing or extra; (2) COLOR FURNITURE — the continuation-title color, the SITUATION / APPROPRIATE RESPONSE column-header styling, whether the SITUATION column prints in bold or a color (which?), row separator style, and ANY red or otherwise colored text anywhere on the page (which words?); (3) any margin notes, mnemonics, asterisk footnotes, images, icons, or figures anywhere on the page; (4) the header/banner lines at the top (running header order: PUBLIC HEALTH SCIENCES, the banner, SECTION II, page number 275) and the footer slug with timestamp; (5) does the table END on this page (closing rule at the bottom, no third page continuation)? Preserve exact printed spellings and state any words hyphenated or wrapped across lines.`;

async function one(zai: any, png: string, prompt: string, label: string) {
  const b64 = readFileSync(png).toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: prompt },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  const out = String(r.choices?.[0]?.message?.content);
  appendFileSync('.usmle-pipeline-cache/staging-pubh24/vlm-census.txt',
    `\n\n===== ${label} =====\n\n${out}\n`);
  console.log(`${label} done — ${out.length} chars`);
}

async function main() {
  const zai = await (ZAI as any).create();
  appendFileSync('.usmle-pipeline-cache/staging-pubh24/vlm-census.txt',
    'PUBH24 challenging-scenarios — VLM census (glm-4.6v at 120dpi, TWO full-page passes: pdf 296 / book 274 and pdf 297 / book 275)\n');
  await one(zai, '/tmp/pubh24-page-296.png', PROMPT_296, 'PASS 1 — pdf 296 / book 274 (table part 1, 13 expected rows)');
  await one(zai, '/tmp/pubh24-page-297.png', PROMPT_297, 'PASS 2 — pdf 297 / book 275 (table part 2, 12 expected rows)');
}
main();
