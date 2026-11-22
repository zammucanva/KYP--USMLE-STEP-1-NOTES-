// pubh16-pubh20 batch VLM paint QA — reviews the 10 element crops (light + dark
// per topic) with the standard 5-question review. Results written to
// docs/qa/pubh16-pubh20-vlm-qa.txt.
import ZAI from "z-ai-web-dev-sdk";
import { readFileSync, writeFileSync } from "fs";

const BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa";
const TOPICS = [
  ["pubh16", "statistical-tests"],
  ["pubh17", "correlation-coefficient"],
  ["pubh18", "core-ethical-principles"],
  ["pubh19", "informed-consent"],
  ["pubh20", "surrogates-confidentiality"],
];

const QUESTION = `You are reviewing an element crop of an original educational SVG diagram rendered inside a study-notes web app (KYP USMLE notes). This crop shows ONE registry visual in either light or dark theme. Answer these 5 questions concisely:
1) Are all panels/blocks fully rendered (no clipped, cut-off, or missing blocks)?
2) Is there any text overlap, text spilling outside its container, or overlapping elements?
3) Do connectors/arrows render correctly? Any missing glyphs, tofu boxes, or broken characters?
4) Is all text readable (size and contrast)? Note anything near the legibility floor.
5) Final verdict: CLEAN, or list defects precisely with their location.`;

async function main() {
  const zai = await (ZAI as any).create();
  const out: string[] = [];
  let clean = 0;
  let total = 0;
  for (const [pid, slug] of TOPICS) {
    for (const theme of ["light-v2", "dark"]) {
      const file = `${BASE}/${pid}/element-crop-${theme}.png`;
      const b64 = readFileSync(file).toString("base64");
      const r = await zai.chat.completions.createVision({
        model: "glm-4.6v",
        messages: [{
          role: "user",
          content: [
            { type: "text", text: QUESTION },
            { type: "image_url", image_url: { url: `data:image/png;base64,${b64}` } },
          ],
        }],
        thinking: { type: "disabled" },
      });
      const answer = String(r.choices?.[0]?.message?.content);
      total += 1;
      const isClean = /CLEAN/i.test(answer) && !/defect|overlap|clipped|cut-off|missing|tofu|unreadable|broken/i.test(answer.replace(/Final verdict:?\s*CLEAN/i, ""));
      if (isClean) clean += 1;
      out.push(`=== ${pid} (${slug}) — ${theme === "light-v2" ? "light" : "dark"} — ${isClean ? "CLEAN" : "REVIEW"} ===`);
      out.push(answer.trim());
      out.push("");
    }
  }
  const report = out.join("\n");
  writeFileSync(`${BASE}/pubh16-pubh20-vlm-qa.txt`, report);
  console.log(report);
  console.log(`\nSUMMARY: ${clean}/${total} CLEAN`);
}
main();
