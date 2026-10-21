import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// M14 spirochetes-syphilis — VLM census of pdf 166-168 (book 144-146) at 200 DPI.
// Resolves: p166's Spirochetes/Lyme layout, p167's syphilis photo placements,
// and p168's diagnosing-syphilis test-table geometry + the M14/M15 shared-page
// boundary (M14 = syphilis testing; M15 = Chlamydiae).

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
  const p166 = `data:image/png;base64,${readFileSync('/tmp/m14page-166.png').toString('base64')}`;
  const p167 = `data:image/png;base64,${readFileSync('/tmp/m14page-167.png').toString('base64')}`;
  const p168 = `data:image/png;base64,${readFileSync('/tmp/m14page-168.png').toString('base64')}`;

  console.log('===== PDF PAGE 166 (book 144) =====');
  console.log(await ask(zai, p166, `This is page 144 of First Aid for the USMLE Step 1 2026, Microbiology — Clinical Bacteriology. Describe the page layout PRECISELY for a text-layer alignment audit:
1. The entries on this page and their order: Vibrio cholerae (+ V. vulnificus), Helicobacter pylori, Spirochetes (the general section), Lyme disease. For each: full verbatim text.
2. Where are the photographs and their marker letters (A after Vibrio cholerae; A after Helicobacter pylori; A after Spirochetes; A and B in the Lyme disease section)? Describe each image's content (eg, comma-shaped organism, curved rod, spiral with axial filaments, tick, bulls-eye rash).
3. The Spirochetes section layout: which text is in the left column vs right column? Where do the 'Little Twirling Bacteria' mnemonic box and the Jarisch-Herxheimer reaction box sit?
4. The Lyme disease block: verbatim text of the stages 1/2/3, the FACE mnemonic box, and the treatment lines.
Be exhaustive.`));

  console.log('===== PDF PAGE 167 (book 145) =====');
  console.log(await ask(zai, p167, `This is page 145 of First Aid for the USMLE Step 1 2026, Microbiology. Describe the page layout PRECISELY:
1. The Leptospira interrogans entry: full verbatim text (leptospirosis, Weil disease).
2. The Syphilis section: verbatim text of the Treponema pallidum line, then Primary / Secondary / Tertiary / Congenital syphilis entries — each with full text.
3. Where are the photographs and their markers? The dump shows bottom-of-page markers A, B, C1, C2, D, E, F, G. The inline text references are: 'fluid from chancre A' (primary), 'maculopapular rash B (including palms C and soles)', 'condylomata lata D', 'Gummas E', 'rhagades (linear scars at angle of mouth, black arrow in F), snuffles (nasal discharge, red arrow in F)', 'notched (Hutchinson) teeth G'. Match each marker letter to its photograph content and its section.
4. Any banners/footers.
Be exhaustive.`));

  console.log('===== PDF PAGE 168 (book 146) =====');
  console.log(await ask(zai, p168, `This is page 146 of First Aid for the USMLE Step 1 2026, Microbiology. The page has TWO sections side by side or stacked: 'Diagnosing syphilis' (a test-selection table) and 'Chlamydiae'. Describe the layout PRECISELY:
1. THE DIAGNOSING SYPHILIS block: (a) the False-Positive results on VDRL list (verbatim); (b) the VDRL/RPR description paragraph (verbatim); (c) THE TABLE — its exact structure: which columns/rows/cells exist and what is in each cell. The text layer suggests: 'Direct testing' and 'Serologic testing' headers; under Serologic: 'Nontreponemal (nonspecific)' containing RPR and VDRL; 'Treponemal (specific)' containing FTA-ABS and TP-PA; under Direct testing: Darkfield microscopy and PCR. Describe the table geometry: are Direct testing and Serologic testing two columns of a 2-column table? Where does each cell text sit?
2. THE CHLAMYDIAE block: verbatim text of both columns (the life-cycle text and the cell-wall/treatment text), the serotypes table (Types A, B, C / Types D-K / Types L1, L2, L3), and the photo with marker A (what does it show and where is it)?
3. Where exactly is the boundary between the syphilis-testing content and the Chlamydiae content on the page (left/right columns or top/bottom)?
Be exhaustive.`));
}

main().catch((e) => {
  console.error('M14 VLM census failed:', (e as any)?.message || e);
  process.exit(1);
});
