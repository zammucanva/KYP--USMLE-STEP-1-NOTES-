// PH21-PH25 batch VLM paint QA — reviews the 10 element crops (light + dark
// per topic) with the standard 5-question review. Results written to
// docs/qa/ph21-ph25-vlm-qa.txt.
import ZAI from "z-ai-web-dev-sdk";
import { readFileSync, writeFileSync } from "fs";

const BASE = "/home/z/my-project/kyp-usmle-notes/docs/qa";
const TOPICS = [
  ["ph21", "seafood-plant-toxins"],
  ["ph22", "toxicity-treatments"],
  ["ph23", "drug-reactions-endocrine"],
  ["ph24", "drug-reactions-hematologic"],
  ["ph25", "drug-reactions-neurologic"],
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
  for (const [pid, slug] of TOPICS) {
    for (const theme of ["light-v2", "dark"]) {
      const file = `${BASE}/${pid}/element-crop-${theme}.png`;
      const b64 = readFileSync(file).toString("base64");
      const r = await zai.chat.completions.createVision({
        model: "glm-4.6v",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: QUESTION },
              { type: "image_url", image_url: { url: `data:image/png;base64,${b64}` } },
            ],
          },
        ],
        thinking: { type: "disabled" },
      });
      const content = String(r.choices?.[0]?.message?.content);
      out.push(`===== ${pid} ${theme.toUpperCase()} (${slug}) =====\n${content}\n`);
      console.log(`done ${pid} ${theme}`);
    }
  }
  writeFileSync(`${BASE}/ph21-ph25-vlm-qa.txt`, out.join("\n"));
  console.log("saved:", `${BASE}/ph21-ph25-vlm-qa.txt`);
}
main();
