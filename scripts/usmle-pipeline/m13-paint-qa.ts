import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// M13 paint QA — the EntericPathogenMap registry visual (light + dark).
// Checks: label overlaps, clipped text, contrast, layout defects; plus
// independent content verification that it depicts the intended visual.

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
  const which = process.argv[2] ?? 'element-enteric-pathogen-map-light.png';
  const png = readFileSync(`/home/z/my-project/kyp-usmle-notes/docs/qa/m13/${which}`);
  const dataUrl = `data:image/png;base64,${png.toString('base64')}`;
  const zai = await ZAI.create();

  const prompt = `You are performing paint QA on a study-website SVG schematic (an original composition for a medical education site). Image: ${which}

The visual has three panels plus strips:
1. THE SALMONELLA-VS-SHIGELLA SPLIT — a comparison grid: a narrow ROW/AXIS label column on the left, then three organism columns (S typhi (ty-Vi) | Salmonella spp. except S typhi | Shigella) with a highlighted header row, and eleven axis rows below (RESERVOIRS, SPREAD, H2S PRODUCTION, FLAGELLA, VIRULENCE FACTORS, INFECTIOUS DOSE, EFFECT OF ANTIBIOTICS ON FECAL EXCRETION, IMMUNE RESPONSE, GI MANIFESTATIONS, VACCINE, UNIQUE PROPERTIES).
2. THE E. COLI STRAIN SET — an intro line, three small strain cards (EIEC / ETEC / EPEC), and a full-width EHEC capstone card below them.
3. THE ENTERIC ROSTER — four organism rows (Yersinia enterocolitica, Klebsiella, Campylobacter jejuni, Proteus mirabilis) with name + two text lines each.
4. An anchors strip (the MacConkey/EMB lactose rule) and a fine-print footer at the bottom.

Inspect carefully and report:
1. OVERLAPS: any text labels overlapping each other, colliding with panel borders, or overlapping graphics they should not touch (pay special attention to: the UNIQUE PROPERTIES row's multi-line cells; the row-label column vs the first organism column; the three strain cards' wrapped text vs card borders; the EHEC card's six text lines vs its bottom edge; roster text lines vs the next row's top border).
2. CLIPPING: any text or shapes cut off at edges or by container boundaries (check every wrapped line's last characters; the anchors strip; the footer).
3. CONTRAST/READABILITY: any text hard to read against its background.
4. ALIGNMENT: any boxes/arrows/labels visually misplaced or floating without context; any row whose cells drift out of their column.
5. CONTENT CHECK: confirm in your own words what the three panels depict (briefly), so we can verify this is the intended visual.
End with a verdict line: VERDICT: CLEAN or VERDICT: DEFECTS FOUND (then list them).`;

  const reply = await ask(zai, dataUrl, prompt);
  console.log(`===== ${which} =====`);
  console.log(reply);
}

main().catch((e) => {
  console.error('M13 paint QA failed:', (e as any)?.message || e);
  process.exit(1);
});
