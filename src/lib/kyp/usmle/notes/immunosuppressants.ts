import type { KypUsMLENote } from "../types";

// Immunology — Immunosuppressants banner (E-batch 40).
// Source: First Aid 2026, Part 1 pdf 140-141 / book 118-119
// (Immununosuppressants: Cyclosporine, Tacrolimus, Sirolimus, Basiliximab,
//  Azathioprine, Mycophenolate mofetil, Glucocorticoids)

export const immunosuppressants: KypUsMLENote = {
  id: "immunosuppressants",
  title: "Immunosuppressants: The Transplant & Autoimmune Drug Map",
  subtitle:
    "Agents that block lymphocyte activation and proliferation — reducing acute transplant rejection by suppressing cellular immunity (used as prophylaxis), frequently combined for greater efficacy with less toxicity, and chronically raising the risk of infection and malignancy. The calcineurin inhibitors block the IL-2 transcription step: cyclosporine binds cyclophilin and tacrolimus binds FKBP, and either complex blocks calcineurin so NFAT never drives IL-2 transcription — both highly nephrotoxic, with cyclosporine adding gingival hyperplasia and hirsutism and tacrolimus adding diabetes and neurotoxicity instead. Sirolimus (rapamycin) binds FKBP too but blocks mTOR — preventing the RESPONSE to IL-2 (T-cell activation and B-cell differentiation) — and is the one that is NOT nephrotoxic (pancytopenia, insulin resistance, hyperlipidemia instead; kidney-transplant prophylaxis, synergistic with cyclosporine, and drug-eluting stents). Basiliximab is the monoclonal antibody against the IL-2 receptor itself (edema, hypertension, tremor). The antimetabolites starve nucleotide synthesis: azathioprine (a 6-mercaptopurine precursor; pancytopenia made worse by allopurinol's xanthine-oxidase blockade) and mycophenolate mofetil (reversibly inhibits IMP dehydrogenase — purines for B and T cells; GI upset, pancytopenia, the CMV association, and less nephro/neurotoxicity). Glucocorticoids inhibit NF-κB, suppressing B- and T-cell function by decreasing transcription of many cytokines and inducing T-cell apoptosis — with the Cushingoid toxicity panel and the abrupt-withdrawal adrenal insufficiency.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immunosuppressants",
  pilotCategory: "Immunosuppressants — calcineurin inhibitors (cyclosporine/cyclophilin, tacrolimus/FKBP), sirolimus/mTOR, basiliximab/IL-2R, antimetabolites (azathioprine/6-MP, mycophenolate/IMP dehydrogenase), glucocorticoids/NF-κB — mechanisms, indications, toxicities, combination logic",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 118–119 (Immununosuppressants)",
  tags: [
    "immunosuppressants",
    "cyclosporine",
    "cyclophilin",
    "calcineurin inhibitor",
    "tacrolimus",
    "FK506",
    "FKBP",
    "sirolimus",
    "rapamycin",
    "mTOR inhibitor",
    "basiliximab",
    "IL-2 receptor",
    "azathioprine",
    "6-mercaptopurine",
    "antimetabolite",
    "xanthine oxidase",
    "allopurinol interaction",
    "mycophenolate mofetil",
    "IMP dehydrogenase",
    "glucocorticoids",
    "NF-kappaB",
    "transplant rejection prophylaxis",
    "kidney transplant",
    "psoriasis",
    "rheumatoid arthritis",
    "nephrotoxicity",
    "gingival hyperplasia",
    "hirsutism",
    "hyperlipidemia",
    "neurotoxicity",
    "pancytopenia",
    "insulin resistance",
    "drug-eluting stents",
    "CMV infection",
    "Cushing syndrome",
    "adrenal insufficiency",
    "demargination",
    "artificial leukocytosis",
    "Crohn disease",
    "glomerulonephritis",
    "CLL",
    "non-Hodgkin lymphoma",
  ],
  core: {
    what: "Immunosuppressants are agents that block lymphocyte activation and proliferation; they reduce acute transplant rejection by suppressing cellular immunity (used as prophylaxis), are frequently combined to achieve greater efficacy with ↓ toxicity, and chronic suppression ↑ the risk of infection and malignancy. CYCLOSPORINE: calcineurin inhibitor binding cyclophilin — blocks T-cell activation by preventing IL-2 transcription; indications: psoriasis, rheumatoid arthritis; toxicity: nephrotoxicity, hypertension, hyperlipidemia, neurotoxicity, gingival hyperplasia, hirsutism. TACROLIMUS (FK506): calcineurin inhibitor binding FK506-binding protein (FKBP) — same IL-2 transcription blockade; indication: immunosuppression after solid organ transplant; toxicity similar to cyclosporine with ↑ risk of diabetes and neurotoxicity but NO gingival hyperplasia or hirsutism. Both calcineurin inhibitors are highly nephrotoxic, especially in higher doses or in patients with ↓ renal function. SIROLIMUS (rapamycin): mTOR inhibitor binding FKBP — blocks T-cell activation and B-cell differentiation by preventing the response to IL-2; indication: kidney transplant rejection prophylaxis specifically; toxicity: pancytopenia, insulin resistance, hyperlipidemia — NOT nephrotoxic; synergistic with cyclosporine and used in drug-eluting stents. BASILIXIMAB: monoclonal antibody blocking IL-2R; toxicity: edema, hypertension, tremor. AZATHIOPRINE: antimetabolite precursor of 6-mercaptopurine — inhibits lymphocyte proliferation by blocking nucleotide synthesis; indications: rheumatoid arthritis, Crohn disease, glomerulonephritis, other autoimmune conditions; toxicity: pancytopenia; 6-MP is degraded by xanthine oxidase, so toxicity ↑ by allopurinol. MYCOPHENOLATE MOFETIL: reversibly inhibits IMP dehydrogenase, preventing purine synthesis of B and T cells; indication: glucocorticoid-sparing agent in rheumatic disease; toxicity: GI upset, pancytopenia, hypertension — less nephrotoxic and neurotoxic, associated with invasive CMV infection. GLUCOCORTICOIDS: inhibit NF-κB — suppress both B- and T-cell function by ↓ transcription of many cytokines and induce T-cell apoptosis; indications: many autoimmune and inflammatory disorders, adrenal insufficiency, asthma, CLL, non-Hodgkin lymphoma; toxicity: Cushing syndrome, osteoporosis, hyperglycemia, diabetes, amenorrhea, adrenocortical atrophy, peptic ulcers, psychosis, cataracts, avascular necrosis (femoral head); demargination of WBCs causes artificial leukocytosis, and adrenal insufficiency may develop if the drug is stopped abruptly after chronic use.",
    why: "This is the pharmacology of E39's acute-rejection window: the drug table's mechanism column is E26's activation biology (signal 2, IL-2, NFAT) drawn as a target map, and every toxicity in the table is an exam stem waiting to happen. The calcineurin pair shares the mechanism (IL-2 transcription) and the nephrotoxicity but splits on the side effects — cyclosporine's gingival hyperplasia and hirsutism versus tacrolimus's diabetes and neurotoxicity — a made-for-exam discrimination. Sirolimus is the trap-master: it binds the SAME FKBP as tacrolimus but blocks mTOR instead of calcineurin (response to IL-2, not its transcription), which is why it can combine with cyclosporine (different step, synergistic) and why it is the non-nephrotoxic one with the stent application. The antimetabolites pair azathioprine (6-MP logic — and the allopurinol interaction that triples its pancytopenia risk) with mycophenolate (the IMP dehydrogenase step, the CMV association, the steroid-sparing role). Glucocorticoids close the roster with the broadest indications and the broadest toxicity panel — the Cushing phenotype, the artificial leukocytosis of demargination, and the abrupt-withdrawal adrenal insufficiency that follows chronic suppression of the HPA axis. The printed combination rule (greater efficacy with ↓ toxicity) is the clinical logic: drugs from different levels of the activation cascade are combined so each can be dosed lower.",
    keyIdea: "Place each drug on the activation cascade. SURFACE: basiliximab — monoclonal antibody blocking the IL-2 RECEPTOR (the E33 marker-drug; edema, hypertension, tremor). TRANSCRIPTION: cyclosporine (binds cyclophilin) and tacrolimus (binds FKBP) — either complex blocks CALCINEURIN, so NFAT is never dephosphorylated and IL-2 TRANSCRIPTION stops; both highly nephrotoxic; cyclosporine = gingival hyperplasia + hirsutism (psoriasis, RA); tacrolimus = diabetes + neurotoxicity without the gums/hair (solid organ transplant). RESPONSE-TO-IL-2: sirolimus — binds FKBP (yes, the same protein as tacrolimus) but blocks mTOR: no T-cell activation or B-cell differentiation despite whatever IL-2 exists; NOT nephrotoxic (pancytopenia, insulin resistance, hyperlipidemia); kidney prophylaxis, synergistic with cyclosporine, drug-eluting stents. PROLIFERATION: the antimetabolites — azathioprine → 6-MP blocks nucleotide synthesis (pancytopenia; allopurinol ↑ toxicity by blocking 6-MP's degradation by xanthine oxidase); mycophenolate reversibly inhibits IMP dehydrogenase, starving B- and T-cell purines (GI upset, pancytopenia; less nephro/neurotoxic; CMV association; the steroid-sparing agent). EVERYTHING AT ONCE: glucocorticoids — inhibit NF-κB, ↓ transcription of many cytokines, suppress B and T cells, induce T-cell apoptosis (autoimmune/inflammatory, asthma, CLL/NHL; Cushing panel, demargination leukocytosis, abrupt-withdrawal adrenal insufficiency). Combine across levels: efficacy up, toxicity down — and chronic suppression always risks infection and malignancy.",
  },
  mechanisms: [
    {
      id: "activation-cascade-blockade",
      title: "The activation cascade, blocked at four levels",
      context: "From the T-cell target map to the drug roster",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A transplant (or autoimmune disease) requires lymphocyte activation and proliferation to be stopped",
            sublabel: "Input — the cascade of E26 (signal → transcription → response → proliferation) becomes the target list.",
            variant: "input",
          },
          {
            id: "s1",
            label: "LEVEL 1 — RECEPTOR: basiliximab (monoclonal antibody) blocks the IL-2 receptor: IL-2 can be present, but the cell cannot hear it from the outside",
            sublabel: "Process — the surface blockade; E33's anti-CD25 drug; edema, hypertension, tremor.",
            variant: "process",
          },
          {
            id: "s2",
            label: "LEVEL 2 — TRANSCRIPTION: cyclosporine-cyclophilin and tacrolimus-FKBP complexes block calcineurin → NFAT stays phosphorylated (inactive) → IL-2 is never transcribed",
            sublabel: "Process — the most-used level; both drugs highly nephrotoxic; cyclosporine's gingival hyperplasia/hirsutism vs tacrolimus's diabetes/neurotoxicity.",
            variant: "process",
          },
          {
            id: "s3",
            label: "LEVEL 3 — RESPONSE: sirolimus-FKBP blocks mTOR → whatever IL-2 exists cannot drive T-cell activation or B-cell differentiation (proliferation genes silent)",
            sublabel: "Process — the same FKBP as tacrolimus but a different target, enabling synergy with calcineurin inhibitors; NOT nephrotoxic.",
            variant: "process",
          },
          {
            id: "o1",
            label: "LEVEL 4 — PROLIFERATION (and the global layer): azathioprine/6-MP and mycophenolate/IMP-dehydrogenase starve de novo purine synthesis so DNA replication fails; glucocorticoids inhibit NF-κB globally, suppressing both arms' cytokine transcription and inducing T-cell apoptosis — combinations across levels give efficacy with ↓ toxicity",
            sublabel: "Output — chronic suppression's price: infection and malignancy risk; the antimetabolites' price: pancytopenia; the steroids' price: Cushing syndrome and HPA-axis suppression.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "receptor" },
          { from: "s1", to: "s2", label: "transcription" },
          { from: "s2", to: "s3", label: "response" },
          { from: "s3", to: "o1", label: "proliferation" },
        ],
        caption:
          "The target map is E26's activation cascade read as a prescription pad. At the surface, basiliximab plugs the IL-2 receptor — the same CD25 target flow cytometry uses to identify Tregs — so the T cell is deaf to IL-2 before any transcription matters. At the transcription level, the two calcineurin inhibitors operate upstream: cyclosporine (with cyclophilin) and tacrolimus (with FKBP) each form a complex that inhibits calcineurin, the phosphatase that activates NFAT — so NFAT never enters the nucleus and IL-2 transcription stops; both are highly nephrotoxic (the shared limiting toxicity), and their side-effect profiles split (gingival hyperplasia and hirsutism for cyclosporine; diabetes and neurotoxicity for tacrolimus, without the gums and hair). At the response level, sirolimus binds the same FKBP as tacrolimus but inhibits mTOR instead — the response TO IL-2 (T-cell activation, B-cell differentiation) — which is precisely why it synergizes with cyclosporine (two different steps of the same pathway) and why it escapes the nephrotoxicity (pancytopenia, insulin resistance, and hyperlipidemia instead — and the mTOR-inhibitor chemistry that made it the drug-eluting-stent coating). At the proliferation level, the antimetabolites starve the building blocks: azathioprine becomes 6-mercaptopurine, blocking nucleotide synthesis (and being degraded by xanthine oxidase — hence the allopurinol-induced pancytopenia), while mycophenolate reversibly inhibits IMP dehydrogenase, the rate-limiting step of de novo purine synthesis in B and T cells (lymphocytes cannot salvage their way around it). Above all of them, the glucocorticoids act globally — inhibiting NF-κB, decreasing transcription of many cytokines across both arms, and inducing T-cell apoptosis — the broadest mechanism and the broadest toxicity panel. Combining drugs from different levels achieves the printed rule: greater efficacy with ↓ toxicity.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "immunosuppressant-target-map",
      title: "The T-helper-cell target map — four blockade levels, seven drugs",
      caption:
        "An original KYP redraw of the source's T-helper-cell diagram: the surface (TCR/CD3/CD4; basiliximab blocking IL-2R); the calcineurin pathway (cyclosporine-cyclophilin and tacrolimus-FKBP blocking calcineurin so NFAT cannot drive IL-2 transcription); the mTOR pathway (sirolimus-FKBP blocking the response to IL-2); the NF-κB pathway (glucocorticoids suppressing cytokine transcription and inducing apoptosis); and the de novo purine synthesis arm (azathioprine/6-MP and mycophenolate/IMP dehydrogenase starving purine nucleotides and DNA replication) — plus the printed-rules panel and the seven-drug roster with mechanisms, toxicities, and indications.",
      notice:
        "The printed diagram is pure vector (p140's rasters are 1×1 artifacts and a decorative strip); FA's printed mnemonics ('Sir Basil's kidney transplant'; 'Kidney sir-vives') are NOT reproduced — KYP originals replace them.",
    },
    {
      kind: "table",
      title: "The seven immunosuppressants — verbatim",
      intro: "The source's drug table (DRUG / MECHANISM / INDICATIONS / TOXICITY / NOTES), verbatim.",
      columns: ["Drug", "Mechanism · Indications · Toxicity · Notes (verbatim)"],
      rows: [
        ["Cyclosporine", "Calcineurin inhibitor; binds cyclophilin. Blocks T-cell activation by preventing IL-2 transcription. Indications: Psoriasis, rheumatoid arthritis. Toxicity: Nephrotoxicity, hypertension, hyperlipidemia, neurotoxicity, gingival hyperplasia, hirsutism. Notes: Both calcineurin inhibitors are highly nephrotoxic, especially in higher doses or in patients with ↓ renal function."],
        ["Tacrolimus (FK506)", "Calcineurin inhibitor; binds FK506 binding protein (FKBP). Blocks T-cell activation by preventing IL-2 transcription. Indications: Immunosuppression after solid organ transplant. Toxicity: Similar to cyclosporine, ↑ risk of diabetes and neurotoxicity; no gingival hyperplasia or hirsutism."],
        ["Sirolimus (Rapamycin)", "mTOR inhibitor; binds FKBP. Blocks T-cell activation and B-cell differentiation by preventing response to IL-2. Indications: Kidney transplant rejection prophylaxis specifically. Toxicity: “Pansirtopenia” (pancytopenia), insulin resistance, hyperlipidemia; not nephrotoxic. Notes: Synergistic with cyclosporine. Also used in drug-eluting stents."],
        ["Basiliximab", "Monoclonal antibody; blocks IL-2R. Toxicity: Edema, hypertension, tremor."],
        ["Azathioprine", "Antimetabolite precursor of 6-mercaptopurine. Inhibits lymphocyte proliferation by blocking nucleotide synthesis. Indications: Rheumatoid arthritis, Crohn disease, glomerulonephritis, other autoimmune conditions. Toxicity: Pancytopenia. Notes: 6-MP degraded by xanthine oxidase; toxicity ↑ by allopurinol. Pronounce “azathiopurine.”"],
        ["Mycophenolate mofetil", "Reversibly inhibits IMP dehydrogenase, preventing purine synthesis of B and T cells. Indications: Glucocorticoid-sparing agent in rheumatic disease. Toxicity: GI upset, pancytopenia, hypertension. Notes: Less nephrotoxic and neurotoxic. Associated with invasive CMV infection."],
        ["Glucocorticoids", "Inhibit NF-κB. Suppress both B- and T-cell function by ↓ transcription of many cytokines. Induce T cell apoptosis. Indications: Many autoimmune and inflammatory disorders, adrenal insufficiency, asthma, CLL, non-Hodgkin lymphoma. Toxicity: Cushing syndrome, osteoporosis, hyperglycemia, diabetes, amenorrhea, adrenocortical atrophy, peptic ulcers, psychosis, cataracts, avascular necrosis (femoral head). Notes: Demargination of WBCs causes artificial leukocytosis. Adrenal insufficiency may develop if drug is stopped abruptly after chronic use."],
      ],
      caption:
        "Read the mechanism column as the target map's levels (receptor, transcription, response, proliferation, global) and the toxicity column as the discriminator set: nephrotoxicity (the calcineurin pair), the gingival-hair versus diabetes-neuro split (cyclosporine vs tacrolimus), the non-nephrotoxic pancytopenia of sirolimus, the allopurinol-boosted pancytopenia of azathioprine, mycophenolate's CMV association, and the glucocorticoid panel with its withdrawal trap. The azathioprine note ('azathiopurine') is the source's own pronunciation cue, quoted verbatim.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The interaction and withdrawal traps",
      body: "AZATHIOPRINE + ALLOPURINOL: 6-mercaptopurine is degraded by xanthine oxidase; allopurinol blocks that degradation, so the antimetabolite accumulates and the pancytopenia can be severe — reduce the azathioprine dose drastically or avoid the combination (and never full-dose azathioprine with allopurinol). GLUCOCORTICOID WITHDRAWAL: chronic exogenous steroids suppress the HPA axis (adrenocortical atrophy) — stopping abruptly can precipitate adrenal insufficiency; always taper, and stress-dose steroids for intercurrent illness or surgery. GLUCOCORTICOID LEUKOCYTOSIS: demargination of neutrophils from the vessel wall produces an artificial leukocytosis — a steroid effect, not infection (read the CBC in context). MYCOPHENOLATE'S CMV: invasive CMV infection is the associated opportunistic risk (prophylaxis per transplant protocol). And the chronic rule for all of them: suppression of cellular immunity raises the risk of infection and malignancy — the price of the whole class.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 52-year-old kidney transplant recipient on cyclosporine presents for follow-up with gum overgrowth, increased facial hair, and a creatinine that has risen 40% from baseline; blood pressure and lipids are also up.",
        discriminator: "Transplant + gingival hyperplasia + hirsutism + rising creatinine",
        concept: "Cyclosporine toxicity — the calcineurin-inhibitor phenotype",
        answer:
          "Cyclosporine (calcineurin inhibitor binding cyclophilin, preventing IL-2 transcription) carries the signature toxicity set: nephrotoxicity (the class's limiting toxicity — here the rising creatinine), hypertension, hyperlipidemia, neurotoxicity, plus the discriminators gingival hyperplasia and hirsutism. Tacrolimus shares the mechanism and nephrotoxicity but swaps the gums-and-hair effects for diabetes and neurotoxicity. Management: dose adjustment, monitoring, and combination regimens that let each drug drop to less-toxic levels.",
      },
      {
        stem: "A patient with a heart transplant on azathioprine develops gout and is started on allopurinol; two weeks later she has fever, mouth ulcers, and a CBC showing pancytopenia.",
        discriminator: "Azathioprine + allopurinol → pancytopenia",
        concept: "The xanthine-oxidase interaction",
        answer:
          "Azathioprine is a precursor of 6-mercaptopurine, which is degraded by xanthine oxidase. Allopurinol inhibits xanthine oxidase, so 6-MP accumulates and its marrow toxicity is amplified — pancytopenia (fever, mucositis). Management: avoid the combination or reduce the azathioprine dose by 65-75% with close counts monitoring (and prefer alternative urate-lowering strategies or alternative immunosuppressants). This is the printed note's own warning, and one of the classic pharmacology interactions.",
      },
      {
        stem: "A 60-year-old with a drug-eluting coronary stent is found to have hyperlipidemia and new glucose intolerance; his medication list includes a rapamycin-derivative coating-related agent class; a transplant-reciprocal question asks which mTOR-inhibitor toxicity he is NOT at risk for.",
        discriminator: "mTOR inhibitor without nephrotoxicity",
        concept: "Sirolimus — the non-nephrotoxic blocker",
        answer:
          "Sirolimus (rapamycin) binds FKBP and inhibits mTOR, preventing the response to IL-2 — used for kidney transplant rejection prophylaxis and coating drug-eluting stents. Its toxicity profile is pancytopenia, insulin resistance (the glucose intolerance), and hyperlipidemia — and it is explicitly NOT nephrotoxic, which distinguishes it from both calcineurin inhibitors and lets it combine (synergistically) with cyclosporine. The exam's 'which toxicity is absent' question for this drug answers 'nephrotoxicity.'",
      },
    ],
    traps: [
      {
        a: "Sirolimus and tacrolimus block the same target because they bind the same protein",
        b: "Both bind FKBP, but sirolimus inhibits mTOR while tacrolimus inhibits calcineurin — different steps, which is why they can combine",
        whyConfused: "Shared binding protein implies shared mechanism.",
        keyDifference:
          "The FKBP complex is just the carrier: tacrolimus-FKBP blocks calcineurin (IL-2 transcription — upstream), while sirolimus-FKBP blocks mTOR (the response to IL-2 — downstream). Different steps of the same pathway means synergy with cyclosporine and a different toxicity profile — including sirolimus's escape from nephrotoxicity.",
        clue: "Any sirolimus-vs-tacrolimus or combination-therapy question.",
      },
      {
        a: "Tacrolimus causes gingival hyperplasia and hirsutism like cyclosporine",
        b: "Tacrolimus LACKS the gingival-hair effects; it adds diabetes and neurotoxicity instead",
        whyConfused: "Same mechanism (calcineurin/IL-2), so the toxicities feel shared.",
        keyDifference:
          "The shared toxicity is nephrotoxicity (both highly nephrotoxic — the printed note). The split: cyclosporine = gingival hyperplasia + hirsutism (plus hypertension, hyperlipidemia, neurotoxicity); tacrolimus = similar to cyclosporine with ↑ diabetes and neurotoxicity but NO gingival hyperplasia or hirsutism. The gums-and-hair pair belongs to cyclosporine alone.",
        clue: "Any toxicity-discrimination question between the calcineurin inhibitors.",
      },
      {
        a: "Glucocorticoid-associated leukocytosis means infection",
        b: "Demargination of WBCs causes an ARTIFICIAL leukocytosis — a drug effect, not infection",
        whyConfused: "A high WBC count reads as infection by reflex.",
        keyDifference:
          "Glucocorticoids demarginate neutrophils from the vessel wall, raising the measured count without new marrow output or infection — the printed note's 'artificial leukocytosis.' In a patient on steroids (who is also infection-prone from the immunosuppression), read the CBC with the drug effect in mind: check bands, clinically assess, and do not treat the number alone.",
        clue: "Any steroid-plus-leukocytosis question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Calcineurin inhibitors vs sirolimus (the transplantation backbone)",
        differentiator: "Transcription vs response to IL-2; nephrotoxic vs not",
        correctPath:
          "Cyclosporine (cyclophilin) and tacrolimus (FKBP) both block calcineurin → no IL-2 transcription; both highly nephrotoxic; cyclosporine = gingival hyperplasia + hirsutism (psoriasis, RA), tacrolimus = diabetes + neurotoxicity (solid organ transplant). Sirolimus (FKBP → mTOR) blocks the RESPONSE to IL-2 (T-cell activation, B-cell differentiation); NOT nephrotoxic (pancytopenia, insulin resistance, hyperlipidemia); kidney prophylaxis, synergistic with cyclosporine, drug-eluting stents. Upstream vs downstream — and the kidney pays only for the upstream pair.",
      },
      {
        lookAlike: "Azathioprine vs mycophenolate (the antimetabolite pair)",
        differentiator: "Which synthesis step, and which interaction",
        correctPath:
          "Azathioprine: a 6-MP precursor blocking nucleotide synthesis — RA, Crohn, glomerulonephritis; pancytopenia amplified by allopurinol (xanthine oxidase inhibition). Mycophenolate: reversible IMP dehydrogenase inhibition, starving B- and T-cell purine synthesis — the glucocorticoid-sparing agent in rheumatic disease; GI upset, pancytopenia, hypertension, the invasive-CMV association, and LESS nephro- and neurotoxicity. Both starve DNA replication; azathioprine carries the interaction, mycophenolate the CMV tag.",
      },
    ],
    miniCase: {
      vignette:
        "A 45-year-old woman three years after renal transplantation is admitted with five days of fever, painful oral ulcers, and a diffuse rash. Her transplant regimen is cyclosporine and azathioprine. Six weeks ago she was diagnosed with gout and started on allopurinol by an outside clinic; her azathioprine dose was not changed. Examination: temperature 38.6 °C, aphthous ulcers on the tongue and buccal mucosa, no lymphadenopathy. Laboratories: hemoglobin 8.9 g/dL, leukocytes 0.9 × 10⁹/L with an absolute neutrophil count of 0.4 × 10⁹/L, platelets 42 × 10⁹/L; creatinine stable at her baseline; blood and urine cultures are pending.",
      question:
        "Which drug interaction best explains her pancytopenia?",
      options: [
        {
          label: "A",
          text: "Allopurinol inhibiting xanthine oxidase, preventing the degradation of azathioprine's active metabolite 6-mercaptopurine",
          correct: true,
          why: "Correct — the printed note's own interaction. Azathioprine is a precursor of 6-mercaptopurine, which is degraded by xanthine oxidase. Allopurinol blocks xanthine oxidase, so 6-MP accumulates and its antiproliferative marrow toxicity is amplified: fever, mucositis, and pancytopenia (neutropenia, anemia, thrombocytopenia). Management: stop or drastically reduce the azathioprine, discontinue or substitute the allopurinol, support the counts, and choose an alternative urate-lowering or immunosuppressive strategy.",
        },
        {
          label: "B",
          text: "Cyclosporine nephrotoxicity causing renal clearance failure of azathioprine",
          why: "Cyclosporine is indeed highly nephrotoxic — but her creatinine is at baseline (no acute kidney injury), and azathioprine is not primarily renally cleared into toxicity; the marrow failure mechanism here is enzymatic (xanthine oxidase blockade), not renal. The stable creatinine is the stem's own exclusion.",
        },
        {
          label: "C",
          text: "Sirolimus-induced pancytopenia through mTOR inhibition",
          why: "Sirolimus does cause 'pansirtopenia' (pancytopenia) — but she is not taking sirolimus, and no interaction with allopurinol exists. The question's mechanism requires the xanthine-oxidase axis, which sirolimus does not touch.",
        },
        {
          label: "D",
          text: "Mycophenolate-associated invasive CMV infection",
          why: "Mycophenolate carries the CMV association — but she is on azathioprine, not mycophenolate, and CMV would present as a mononucleosis-like syndrome (fever, malaise, organ involvement) rather than the acute marrow aplasia with mucositis of antimetabolite toxicity. The pancytopenia plus the allopurinol history names the interaction.",
        },
        {
          label: "E",
          text: "Tacrolimus-induced diabetes and neurotoxicity masquerading as sepsis",
          why: "Tacrolimus is not on her regimen, and neither its hyperglycemia nor its neurotoxicity produces pancytopenia — the distractor tests whether the toxicity column's entries are being matched to the right drugs. The marrow is the azathioprine-allopurinol interaction's target.",
        },
      ],
      reasoning:
        "The vignette assembles the classic interaction: a transplant patient on azathioprine, gout treated with allopurinol, no azathioprine dose reduction, then fever-mucositis-pancytopenia (the antimetabolite marrow signature). The mechanism is the printed note: 6-MP is degraded by xanthine oxidase; allopurinol inhibits the enzyme; the antimetabolite accumulates and the marrow fails. The stable creatinine excludes the cyclosporine-nephrotoxicity distractor, and each remaining option pairs a real toxicity with the wrong drug or the wrong syndrome — testing the toxicity column's precise attribution.",
    },
  },
  mnemonics: [
    {
      code: "\u201cFour locks on one door: the receptor (basiliximab), the factory (calcineurin inhibitors), the reading of the message (sirolimus), and the bricks (antimetabolites) — and steroids burn the whole blueprint (NF-κB).\u201d",
      meaning:
        "KYP's key for the target map's levels: basiliximab locks the IL-2 RECEPTOR; cyclosporine and tacrolimus lock the IL-2 FACTORY (calcineurin → NFAT → transcription); sirolimus locks the READING of the IL-2 message (mTOR → response); the antimetabolites lock the BRICKS (purine synthesis → DNA); and glucocorticoids inhibit NF-κB — suppressing the whole blueprint of cytokine transcription and inducing T-cell apoptosis. Different locks combine for efficacy with less toxicity.",
      memorizes: "The four blockade levels and the global steroid layer",
      whenToUse: "Any mechanism, combination, or target-matching question.",
      clinical: "Combination regimens pair drugs from different levels (e.g., tacrolimus + mycophenolate + prednisone).",
    },
    {
      code: "\u201cThe calcineurin twins share the kidney and split the side effects: cyclosporine grows gums and hair; tacrolimus raises sugar and shakes nerves.\u201d",
      meaning:
        "KYP's key for the calcineurin pair: BOTH are highly nephrotoxic (the shared, dose-limiting toxicity), but cyclosporine's signature extras are gingival hyperplasia and hirsutism, while tacrolimus's are ↑ diabetes and neurotoxicity — explicitly WITHOUT the gingival hyperplasia or hirsutism. Same mechanism (IL-2 transcription), different side-effect faces.",
      memorizes: "Cyclosporine vs tacrolimus toxicities",
      whenToUse: "Any toxicity-discrimination stem between the two.",
      clinical: "Cyclosporine: psoriasis, RA. Tacrolimus: solid organ transplant. Both demand renal monitoring.",
    },
    {
      code: "\u201cAzathioprine rides allopurinol's roadblock: no xanthine oxidase, no 6-MP exit — the marrow pays the toll.\u201d",
      meaning:
        "KYP's key for the interaction: 6-MP (azathioprine's active metabolite) leaves the body via xanthine oxidase degradation. Allopurinol puts the roadblock up — 6-MP cannot exit, accumulates, and the antiproliferative effect lands on the marrow: pancytopenia with fever and mucositis. Reduce the azathioprine dose drastically or avoid the pair.",
      memorizes: "Azathioprine + allopurinol = amplified pancytopenia",
      whenToUse: "Any gout-therapy question in a transplant or autoimmune patient on azathioprine.",
      clinical: "Same logic as the 6-MP/leukemia protocols: allopurinol always demands an antimetabolite dose cut.",
    },
  ],
  rapidReview: {
    s30: [
      "Class mission: block lymphocyte activation and proliferation; reduce acute rejection (prophylaxis)",
      "Cyclosporine: calcineurin inhibitor (cyclophilin) — no IL-2 transcription; psoriasis, RA",
      "Tacrolimus: calcineurin inhibitor (FKBP) — solid organ transplant; ↑ diabetes + neurotoxicity",
      "Sirolimus: mTOR inhibitor (FKBP) — no response to IL-2; NOT nephrotoxic; kidney prophylaxis + stents",
      "Basiliximab: monoclonal antibody blocking IL-2R (edema, hypertension, tremor)",
    ],
    m3: [
      "Both calcineurin inhibitors highly nephrotoxic (higher doses, ↓ renal function)",
      "Cyclosporine: gingival hyperplasia + hirsutism + hypertension + hyperlipidemia",
      "Sirolimus: pancytopenia, insulin resistance, hyperlipidemia; synergistic with cyclosporine",
      "Azathioprine → 6-MP; blocks nucleotide synthesis; RA/Crohn/GN; pancytopenia",
      "Mycophenolate: IMP dehydrogenase inhibitor; steroid-sparing; GI, pancytopenia, CMV; less nephro/neuro",
    ],
    m10: [
      "Allopurinol ↑ azathioprine toxicity (xanthine oxidase degrades 6-MP)",
      "Glucocorticoids: inhibit NF-κB, ↓ many cytokines, induce T-cell apoptosis",
      "Glucocorticoid toxicity: Cushing, osteoporosis, hyperglycemia, psychosis, cataracts, AVN",
      "Demargination → artificial leukocytosis; abrupt stop → adrenal insufficiency",
      "Combination rule: greater efficacy with ↓ toxicity; chronic use → infection + malignancy risk",
    ],
  },
  recall: [
    {
      q: "Give the class definition and the two printed rules of combination and chronic use.",
      a: "Agents that block lymphocyte activation and proliferation. They reduce acute transplant rejection by suppressing cellular immunity (used as prophylaxis). Frequently combined to achieve greater efficacy with ↓ toxicity. Chronic suppression ↑ risk of infection and malignancy.",
    },
    {
      q: "Contrast cyclosporine and tacrolimus: mechanism, indications, toxicities.",
      a: "Both are calcineurin inhibitors blocking T-cell activation by preventing IL-2 transcription — cyclosporine binds cyclophilin (indications: psoriasis, rheumatoid arthritis; toxicity: nephrotoxicity, hypertension, hyperlipidemia, neurotoxicity, gingival hyperplasia, hirsutism); tacrolimus binds FK506-binding protein (FKBP) (indication: immunosuppression after solid organ transplant; toxicity: similar to cyclosporine with ↑ risk of diabetes and neurotoxicity, no gingival hyperplasia or hirsutism). Both are highly nephrotoxic, especially in higher doses or with ↓ renal function.",
    },
    {
      q: "How does sirolimus differ from tacrolimus despite binding the same protein?",
      a: "Sirolimus binds FKBP but inhibits mTOR (not calcineurin): it blocks T-cell activation and B-cell differentiation by preventing the RESPONSE to IL-2 rather than its transcription. It is not nephrotoxic (toxicity: pancytopenia, insulin resistance, hyperlipidemia), is used for kidney transplant rejection prophylaxis specifically, is synergistic with cyclosporine, and is also used in drug-eluting stents.",
    },
    {
      q: "Describe the antimetabolite pair's mechanisms and interaction traps.",
      a: "Azathioprine: antimetabolite precursor of 6-mercaptopurine — inhibits lymphocyte proliferation by blocking nucleotide synthesis; indications RA, Crohn disease, glomerulonephritis, other autoimmune conditions; toxicity pancytopenia; 6-MP is degraded by xanthine oxidase, so allopurinol increases toxicity. Mycophenolate mofetil: reversibly inhibits IMP dehydrogenase, preventing purine synthesis of B and T cells; the glucocorticoid-sparing agent in rheumatic disease; toxicity GI upset, pancytopenia, hypertension — less nephrotoxic and neurotoxic, associated with invasive CMV infection.",
    },
    {
      q: "Give glucocorticoids' mechanism, indications, and the two leukocyte-related notes.",
      a: "Mechanism: inhibit NF-κB; suppress both B- and T-cell function by ↓ transcription of many cytokines; induce T-cell apoptosis. Indications: many autoimmune and inflammatory disorders, adrenal insufficiency, asthma, CLL, non-Hodgkin lymphoma. Toxicity: Cushing syndrome, osteoporosis, hyperglycemia, diabetes, amenorrhea, adrenocortical atrophy, peptic ulcers, psychosis, cataracts, avascular necrosis (femoral head). Notes: demargination of WBCs causes artificial leukocytosis; adrenal insufficiency may develop if the drug is stopped abruptly after chronic use.",
    },
  ],
  related: [
    {
      title: "Transplant Rejection & Graft-Versus-Host Disease",
      topicId: "transplant-rejection",
      note: "The acute-rejection window these drugs exist for — the prevent/reverse row of E39's clock.",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "The activation cascade the drugs blockade: signal 2, IL-2, NFAT — E26 drawn as a prescription pad.",
    },
    {
      title: "Cell Surface Proteins: The CD Marker Map",
      topicId: "cd-markers",
      note: "Basiliximab is the anti-CD25 (IL-2Rα) entry of the marker-drug map; muromonab the anti-CD3.",
    },
    {
      title: "Important Cytokines",
      topicId: "cytokines",
      note: "IL-2 is the cytokine the calcineurin inhibitors silence at its transcription and sirolimus silences at its response.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antineoplastic & Antimetabolite Logic)",
      connection: "Azathioprine shares 6-MP pharmacology with the leukemia protocols — and the allopurinol interaction is identical in both settings (tumor lysis gout therapy meets transplant immunosuppression).",
    },
    {
      subject: "Cardiology (Interventional)",
      connection: "Sirolimus's mTOR inhibition coats drug-eluting stents — the same antiproliferative mechanism preventing restenosis (smooth muscle proliferation) that prevents lymphocyte proliferation.",
    },
    {
      subject: "Endocrinology",
      connection: "Glucocorticoid chronicity is iatrogenic Cushing syndrome — hyperglycemia, diabetes, osteoporosis, adrenal atrophy — with HPA-axis withdrawal as the trap; tacrolimus adds its own diabetes risk.",
    },
    {
      subject: "Rheumatology & Gastroenterology",
      connection: "Cyclosporine (psoriasis, RA), azathioprine (RA, Crohn, glomerulonephritis), and mycophenolate (the steroid-sparing agent) extend the class beyond transplantation into autoimmunity.",
    },
  ],
};
