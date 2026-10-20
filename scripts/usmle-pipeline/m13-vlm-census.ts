import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// M13 enteric-pathogens — VLM census of pdf 164-165 (book 142-143) at 200 DPI.
// Resolves: (1) the 3-column Salmonella-vs-Shigella table geometry on p164,
// (2) the 4-row E. coli strain table column interleaving on p165,
// (3) image placements/markers on p165, (4) any layout details the text
// layer cannot give (cell boundaries, reading order per row).

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
  const zai = await ZAI.create();

  const p164 = readFileSync('/tmp/m13page-164.png');
  const p165 = readFileSync('/tmp/m13page-165.png');
  const u164 = `data:image/png;base64,${p164.toString('base64')}`;
  const u165 = `data:image/png;base64,${p165.toString('base64')}`;

  const q164 = `This is page 142 (pdf 164) of First Aid for the USMLE Step 1 2026, Microbiology — Clinical Bacteriology. Describe the page layout PRECISELY, for a text-layer alignment audit:
1. The main table "Salmonella vs Shigella": list its column headers left-to-right, then for EACH row (RESERVOIRS, SPREAD, H2S PRODUCTION, FLAGELLA, VIRULENCE FACTORS, INFECTIOUS DOSE, EFFECT OF ANTIBIOTICS ON FECAL EXCRETION, IMMUNE RESPONSE, GI MANIFESTATIONS, VACCINE, UNIQUE PROPERTIES) give the exact cell text of each column, left to right.
2. Are there any photographs/images on the page? If so, describe each (position, marker letter, content).
3. Any other content blocks on the page (Yersinia enterocolitica, Lactose-fermenting enteric bacteria, side boxes, mnemonics like "McCowkey CEEKS milk", footers, banners) — state what they contain and where they sit relative to the table.
Be exhaustive and verbatim where possible.`;

  const q165 = `This is page 143 (pdf 165) of First Aid for the USMLE Step 1 2026, Microbiology — Clinical Bacteriology. Describe the page layout PRECISELY, for a text-layer alignment audit:
1. The "Escherichia coli" intro paragraph (indole, virulence factors: fimbriae/P pili, K capsule, LPS endotoxin).
2. The 4-row strain table (columns: STRAIN | TOXIN AND MECHANISM | PRESENTATION): for EACH row (Enteroinvasive, Enterotoxigenic, Enteropathogenic, Enterohemorrhagic E coli) give the exact cell text of the TOXIN AND MECHANISM column and the PRESENTATION column, clearly separated.
3. The Klebsiella block: full text; where is the photograph and its marker letter?
4. The Campylobacter jejuni block: full text; where is the photograph and its marker letters?
5. The Proteus mirabilis block: full text.
6. Any side boxes/mnemonics (ABCDE's of Klebsiella) and banners/footers — state content and position.
Be exhaustive and verbatim where possible.`;

  console.log('===== PDF PAGE 164 (book 142) =====');
  console.log(await ask(zai, u164, q164));
  console.log('===== PDF PAGE 165 (book 143) =====');
  console.log(await ask(zai, u165, q165));
}

main().catch((e) => {
  console.error('M13 VLM census failed:', (e as any)?.message || e);
  process.exit(1);
});
