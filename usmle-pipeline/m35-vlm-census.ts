import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m35-p214-214.png');
  const desc = `This is page 214 of First Aid for the USMLE Step 1 2026 (pdf page 214 = printed book page 192, Microbiology ANTIMICROBIALS section). The raw text layer shows: a 4-column drug table (DRUG | MECHANISM | ADVERSE EFFECTS | NOTES) for Antituberculous drugs with rows Rifamycins (rifampin/rifabutin/rifapentine), Isoniazid, Pyrazinamide, Ethambutol; and a MYCOBACTERIAL CELL schematic whose labels print in the text layer (DNA, mRNA SYNTHESIS (DNA-dependent RNA polymerase), RNA polymerase, ARABINOGALACTAN SYNTHESIS (arabinosyltransferase), MYCOLIC ACID SYNTHESIS, the drug labels Isoniazid/Ethambutol/INTRACELLULAR (Pyrazinamide)/Rifabutin/Rifampin/Rifapentine). pdfimages reports for this page exactly: one 1x1-pixel cmyk image whose smooth mask is 1621x1323 at 150ppi (729 bytes) — i.e. a solid color wash stretched page-wide behind the schematic.
Questions:
1) Is the MYCOBACTERIAL CELL schematic a line-art vector diagram (drawn outlines/shapes with text labels) or a photograph/raster reproduction?
2) What is the background treatment behind the cell schematic (plain paper, a light color wash/vignette, or a gradient)?
3) Does the page contain any photograph, micrograph, or scanned textbook image anywhere?
4) Are the four antituberculous drug rows laid out as a bordered table with columns DRUG/MECHANISM/ADVERSE EFFECTS/NOTES?
5) Any margin notes/mnemonics printed beside the table rows (e.g. about INH, pyridoxine, eyethambutol, acetylators)? Quote them verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
