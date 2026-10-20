import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// M12 REPAIR verification — gram-neg-bacilli-map after the footer wrap
// (3 lines) and anchors-strip rebalance (4 -> 5 lines). The two defects
// were found by geometric audit (getBBox right edge > viewBox 980):
// footer right=1887.3, anchors line 1 right=980.6 — both real; both fixed.

async function ask(zai: any, dataUrl: string, prompt: string): Promise<string> {
  const messages: VisionMessage[] = [
    {
      role: 'user',
      content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: dataUrl } },
      ],
    },
  ];
  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages,
    thinking: { type: 'disabled' },
  });
  return response.choices?.[0]?.message?.content ?? JSON.stringify(response);
}

async function main() {
  const which = process.argv[2] ?? 'element-gram-neg-bacilli-map-light.png';
  const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m12/${which}`);
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();

  const prompt = `You are performing paint QA on a study-website SVG schematic (an original composition for a medical education site). Image: ${which}

The visual has: an ALGORITHM TREE panel (four morphology lanes with gates), a NEISSERIA SPLIT panel (seven comparison rows), an ENVIRONMENT ROSTER panel (eight organism rows), an ANCHORS STRIP of five centered summary lines near the bottom, and a three-line fine-print footer at the very bottom.

This is a RE-VERIFICATION after two repairs: (1) the footer was a single overlong line that ran past the right edge — it is now three wrapped lines; (2) the anchors strip's first line was rebalanced into five lines.

Inspect carefully and report:
1. OVERLAPS: any text labels overlapping each other or graphics they should not touch.
2. CLIPPING: any text cut off at the left or right margins — CHECK THE FIVE ANCHORS STRIP LINES AND THE THREE FOOTER LINES SPECIFICALLY: does every line end with a complete sentence/phrase well before the right edge?
3. CONTRAST/READABILITY: any text hard to read against its background.
4. ALIGNMENT: any misplaced or floating elements.
5. CONTENT CHECK: one sentence on what the visual depicts.
End with a verdict line: VERDICT: CLEAN or VERDICT: DEFECTS FOUND (then list them).`;

  const reply = await ask(zai, dataUrl, prompt);
  console.log(`===== ${which} (repair verification) =====`);
  console.log(reply);
}

main().catch((e) => {
  console.error('M12 repair QA failed:', (e as any)?.message || e);
  process.exit(1);
});
