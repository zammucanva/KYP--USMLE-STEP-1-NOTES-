// ph25 light re-adjudication — VLM reads the fresh 1440x2400-viewport crop
import ZAI from "z-ai-web-dev-sdk";
import { readFileSync } from "fs";

const b64 = readFileSync("/home/z/my-project/kyp-usmle-notes/docs/qa/ph25/element-crop-light-v3.png").toString("base64");
const zai = await (ZAI as any).create();
const r = await zai.chat.completions.createVision({
  model: "glm-4.6v",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: `This is a FRESH re-capture (taller viewport) of a light-theme element crop that a previous review claimed was clipped at the bottom edge ("the final ROUTE protocol block and the footer/source lines cut off mid-text"). Adjudicate precisely:
1) Is the bottom-most block (a four-move protocol band reading ROUTE EVERY REACTION TO THE PATHWAY or similar) FULLY visible including its last text line?
2) Are the footer/source-citation lines at the very bottom of the diagram complete (not cut mid-line)?
3) Quote the exact final (last) text line you can read at the very bottom of the image.
4) Verdict: was the earlier "bottom clipping" claim a REAL SVG defect, or a CROP/CAPTURE ARTIFACT of the earlier screenshot?`,
        },
        { type: "image_url", image_url: { url: `data:image/png;base64,${b64}` } },
      ],
    },
  ],
  thinking: { type: "disabled" },
});
console.log(String(r.choices?.[0]?.message?.content));
