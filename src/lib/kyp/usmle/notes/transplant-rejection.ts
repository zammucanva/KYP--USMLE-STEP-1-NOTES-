import type { KypUsMLENote } from "../types";

// Immunology — Immunosuppressants banner (E-batch 39).
// Source: First Aid 2026, Part 1 pdf 139 / book 117
// (Transplant rejection)

export const transplantRejection: KypUsMLENote = {
  id: "transplant-rejection",
  title: "Transplant Rejection & Graft-Versus-Host Disease",
  subtitle:
    "The four rejection syndromes on one clock. HYPERACUTE (within minutes): pre-existing recipient antibodies react to donor antigen — a type II hypersensitivity reaction activating complement — producing widespread thrombosis of graft vessels with ischemia and fibrinoid necrosis; the graft must be removed. ACUTE (weeks to months): cellular rejection with CD8+ and/or CD4+ T cells activated against donor MHCs (type IV), or humoral rejection resembling hyperacute except the antibodies develop after transplant (C4d deposition); features are vasculitis of graft vessels with a dense interstitial lymphocytic infiltrate, preventable or reversible with immunosuppressants. CHRONIC (months to years): CD4+ T cells respond to recipient APCs presenting donor peptides including allogeneic MHC, with both cellular and humoral components (types II and IV); recipient T cells secrete cytokines driving vascular smooth muscle proliferation, parenchymal atrophy, and interstitial fibrosis — dominated by arteriosclerosis, with the organ-specific faces of chronic allograft nephropathy, bronchiolitis obliterans, accelerated atherosclerosis of the heart, and vanishing bile duct syndrome. GRAFT-VERSUS-HOST DISEASE (varies): the direction reversal — grafted immunocompetent T cells proliferate in the immunocompromised host and reject host cells bearing 'foreign' proteins, causing severe organ dysfunction (type IV, risk rising with HLA mismatch); features are maculopapular rash, jaundice, diarrhea, and hepatosplenomegaly, usually after bone marrow and liver transplants (lymphocyte-rich), potentially beneficial in leukemia (the graft-versus-tumor effect), and prevented in the immunocompromised by irradiating blood products before transfusion.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immunosuppressants",
  pilotCategory: "Immunosuppressants — rejection timeline (hyperacute type II preformed antibody, acute cellular type IV + humoral C4d, chronic mixed II+IV arteriosclerosis with organ examples, GVHD the direction-reversed type IV with graft-versus-tumor)",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 117 (Transplant rejection)",
  tags: [
    "transplant rejection",
    "hyperacute rejection",
    "acute rejection",
    "chronic rejection",
    "graft-versus-host disease",
    "GVHD",
    "type II hypersensitivity",
    "type IV hypersensitivity",
    "pre-formed antibodies",
    "donor antigen",
    "complement activation",
    "thrombosis",
    "fibrinoid necrosis",
    "ischemia",
    "CD8+ T cells",
    "CD4+ T cells",
    "donor MHC",
    "C4d deposition",
    "vasculitis",
    "interstitial lymphocytic infiltrate",
    "immunosuppressants",
    "allogeneic MHC",
    "cytokines",
    "vascular smooth muscle proliferation",
    "parenchymal atrophy",
    "interstitial fibrosis",
    "arteriosclerosis",
    "chronic allograft nephropathy",
    "bronchiolitis obliterans",
    "accelerated atherosclerosis",
    "vanishing bile duct syndrome",
    "maculopapular rash",
    "jaundice",
    "diarrhea",
    "hepatosplenomegaly",
    "bone marrow transplant",
    "liver transplant",
    "graft-versus-tumor effect",
    "irradiated blood products",
    "HLA mismatch",
  ],
  core: {
    what: "Transplant rejection has four syndromes. HYPERACUTE — onset within minutes; pathogenesis: pre-existing recipient antibodies react to donor antigen (a type II hypersensitivity reaction), activating complement; features: widespread thrombosis of graft vessels with ischemia and fibrinoid necrosis — the graft must be removed. ACUTE — onset weeks to months; pathogenesis: cellular (CD8+ T cells and/or CD4+ T cells activated against donor MHCs — a type IV hypersensitivity reaction) or humoral (similar to hyperacute except the antibodies develop after transplant, associated with C4d deposition); features: vasculitis of graft vessels with a dense interstitial lymphocytic infiltrate — prevent or reverse with immunosuppressants. CHRONIC — onset months to years; pathogenesis: CD4+ T cells respond to recipient APCs presenting donor peptides, including allogeneic MHC, with both cellular and humoral components (type II and IV hypersensitivity reactions); features: recipient T cells react and secrete cytokines → proliferation of vascular smooth muscle, parenchymal atrophy, and interstitial fibrosis, dominated by arteriosclerosis — with organ-specific examples of chronic allograft nephropathy, bronchiolitis obliterans, accelerated atherosclerosis (heart), and vanishing bile duct syndrome. GRAFT-VERSUS-HOST DISEASE — onset varies; pathogenesis: grafted immunocompetent T cells proliferate in the immunocompromised host and reject host cells with 'foreign' proteins → severe organ dysfunction; HLA mismatches increase the risk; a type IV hypersensitivity reaction; features: maculopapular rash, jaundice, diarrhea, and hepatosplenomegaly, usually in bone marrow and liver transplants (rich in lymphocytes); potentially beneficial in bone marrow transplant for leukemia (the graft-versus-tumor effect); and for immunocompromised patients, blood products are irradiated prior to transfusion to prevent GVHD.",
    why: "This table converts the chapter's machinery into clinical medicine: the timeline position predicts the mechanism, the mechanism names the hypersensitivity type, and the type names the therapy. Hyperacute's minutes mean the antibody pre-existed — from prior transfusion, pregnancy, or a previous graft — so no immunosuppression can rescue it (complement is already lysing the endothelium; the graft comes out). Acute's weeks-to-months mean the recipient's adaptive response is NEW: donor MHC-activated CD8+/CD4+ T cells (type IV) or newly-formed antibody (humoral, C4d-marked) — and because the response is new and cellular, it is the window immunosuppressants prevent and reverse (E40's drug class exists for this row). Chronic's months-to-years mean remodeling: cytokine-driven vascular smooth muscle proliferation and fibrosis — mixed type II and IV — whose organ-specific names (bronchiolitis obliterans in lung, vanishing bile duct in liver, accelerated atherosclerosis in heart, chronic allograft nephropathy in kidney) are the exam's favorite transplant-organ matching. GVHD inverts the direction — the graft's immunocompetent T cells attack the immunocompromised HOST — which is why it follows lymphocyte-rich transplants (marrow, liver), why HLA matching matters so much there, why irradiated blood products protect the immunocompromised, and why leukemia patients can benefit from the same attack aimed at their tumor (graft-versus-tumor).",
    keyIdea: "Read the clock, then the direction. MINUTES (hyperacute): pre-existing antibody, type II, complement — thrombosed vessels, fibrinoid necrosis, graft out. WEEKS-MONTHS (acute): new adaptive response — cellular (CD8+/CD4+ vs donor MHC, type IV) or humoral (post-transplant antibody, C4d) — vasculitis plus dense interstitial lymphocytic infiltrate; PREVENT/REVERSE with immunosuppressants. MONTHS-YEARS (chronic): CD4+ T cells vs recipient APCs presenting donor peptides (allogeneic MHC) — mixed type II + IV — cytokines drive vascular smooth muscle proliferation, parenchymal atrophy, interstitial fibrosis, arteriosclerosis; the organ faces: nephropathy (kidney), bronchiolitis obliterans (lung), accelerated atherosclerosis (heart), vanishing bile ducts (liver). OFF THE CLOCK, REVERSED (GVHD): grafted T cells reject the HOST (type IV; HLA mismatch ↑ risk) — rash, jaundice, diarrhea, hepatosplenomegaly; marrow and liver transplants (lymphocyte-rich); graft-versus-tumor can be GOOD in leukemia; irradiate blood products for the immunocompromised. Rejection = host attacks graft; GVHD = graft attacks host.",
  },
  mechanisms: [
    {
      id: "rejection-clock",
      title: "The rejection clock — why the timing predicts the mechanism",
      context: "Hyperacute, acute, and chronic rejection as one timeline",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A graft is implanted and its donor antigens meet the recipient's immune system",
            sublabel: "Input — what the recipient ALREADY has versus what it must BUILD decides the clock.",
            variant: "input",
          },
          {
            id: "s1",
            label: "MINUTES — HYPERACUTE: pre-existing antibodies (prior transfusion, pregnancy, earlier graft) bind donor antigen immediately: type II hypersensitivity with complement activation → endothelial injury → widespread thrombosis, ischemia, fibrinoid necrosis",
            sublabel: "Process — the response was manufactured before the operation; nothing new needs to be made, so nothing can be stopped in time.",
            variant: "process",
          },
          {
            id: "s2",
            label: "WEEKS-MONTHS — ACUTE: the recipient's adaptive response is new. Cellular: CD8+/CD4+ T cells activate against donor MHCs (type IV) → vasculitis with dense interstitial lymphocytic infiltrate. Humoral: antibodies form after transplant (C4d deposition)",
            sublabel: "Process — new T cells and new antibody take weeks to build — which is exactly why immunosuppressants (blocking activation and proliferation) can prevent and reverse this phase.",
            variant: "process",
          },
          {
            id: "s3",
            label: "MONTHS-YEARS — CHRONIC: CD4+ T cells respond to recipient APCs presenting donor peptides (allogeneic MHC); cytokines (both cellular and humoral, types II + IV) drive vascular smooth muscle proliferation, parenchymal atrophy, interstitial fibrosis — arteriosclerosis dominates",
            sublabel: "Process — chronic alloantigen exposure becomes vascular remodeling: the organ-specific faces are nephropathy (kidney), bronchiolitis obliterans (lung), accelerated atherosclerosis (heart), vanishing bile ducts (liver).",
            variant: "process",
          },
          {
            id: "o1",
            label: "The therapeutic map: hyperacute = remove the graft; acute = prevent/reverse with immunosuppressants; chronic = the fibrotic endgame with limited reversibility (and GVHD, off the clock, reversed in direction, sometimes beneficial as graft-versus-tumor)",
            sublabel: "Output — clock position → mechanism → hypersensitivity type → therapy is the complete exam chain.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "minutes" },
          { from: "s1", to: "s2", label: "weeks-months" },
          { from: "s2", to: "s3", label: "months-years" },
          { from: "s3", to: "o1", label: "therapy" },
        ],
        caption:
          "The timeline is not decoration — it IS the differential. Minutes after reperfusion means the antibody pre-existed: the recipient was sensitized by a prior transfusion, pregnancy, or transplant, and the donor endothelium is being lysed by complement right now (type II): thrombosed vessels, ischemia, fibrinoid necrosis — the graft comes out, because no drug removes pre-formed antibody fast enough. Weeks to months means the response is being BUILT: donor MHC activates recipient CD8+ and CD4+ T cells (the cellular arm — type IV), or the recipient generates NEW antibody against the graft (the humoral arm — like hyperacute in mechanism but post-transplant in timing, and marked by C4d deposition in the graft's vessels). This is the phase immunosuppression targets — calcineurin inhibitors block the T-cell activation, antiproliferatives block the expansion — which is why the printed feature is 'prevent/reverse with immunosuppressants.' Months to years means the war has become remodeling: chronic CD4+ activation against donor peptides presented by recipient APCs (including allogeneic MHC picked up and displayed), with both cellular and humoral components, secreting cytokines that drive vascular smooth muscle proliferation, parenchymal atrophy, and interstitial fibrosis — the arteriosclerosis that dominates the histology and names the organ syndromes: chronic allograft nephropathy, bronchiolitis obliterans, accelerated atherosclerosis, vanishing bile duct syndrome. The biopsy figures the table carries (glomerular thrombosis in hyperacute, the interstitial infiltrate in acute, arteriosclerosis in chronic) are the histologic clock faces.",
      },
    },
    {
      id: "gvhd-direction-inversion",
      title: "GVHD — the direction reversal, and when it is a gift",
      context: "Graft-versus-host disease and graft-versus-tumor",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Immunocompetent T cells are transferred WITH the graft into an immunocompromised host",
            sublabel: "Input — requires grafted T cells that can act, and a host that cannot resist them.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The grafted T cells proliferate in the host and recognize host tissues as 'foreign' — attacking them (a type IV hypersensitivity reaction in reverse)",
            sublabel: "Process — the rejection arrow flips: graft attacks host instead of host attacking graft; HLA mismatches increase the risk.",
            variant: "process",
          },
          {
            id: "s2",
            label: "The target organs declare the syndrome: skin (maculopapular rash), liver (jaundice), gut (diarrhea), and hematopoietic/reticuloendothelial organs (hepatosplenomegaly)",
            sublabel: "Process — usually after bone marrow and liver transplants, which carry the most lymphocytes.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Management and the exception: irradiate blood products for the immunocompromised (prevention); treat established GVHD with immunosuppression — and in leukemia, harness the same attack as the graft-versus-TUMOR effect (potentially beneficial)",
            sublabel: "Output — the one rejection syndrome that can be therapeutic when aimed at malignant cells.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "T cells grafted" },
          { from: "s1", to: "s2", label: "host attacked" },
          { from: "s2", to: "o1", label: "organs + therapy" },
        ],
        caption:
          "GVHD is rejection with the arrow reversed. Every other entry on the table is the HOST's immunity rejecting the GRAFT; GVHD is the GRAFT's immunocompetent T cells rejecting the HOST — which is why the prerequisites are grafted immune cells and a host too immunocompromised to eliminate them. The classic settings are the lymphocyte-rich transplants (bone marrow first, liver next), and the risk climbs with HLA mismatch (each mismatched host antigen is a target the grafted T cells can see). The clinical tetrad follows the targets — skin (maculopapular rash), liver (jaundice), GI tract (diarrhea), and the reticuloendothelial organs (hepatosplenomegaly) — and the pathology is type IV (cell-mediated) with the direction flipped. Prevention exploits the prerequisite: irradiating cellular blood products for immunocompromised recipients disables the donor lymphocytes' ability to proliferate (DNA damage without killing the cells the patient needs). And the twist the exam loves: in leukemia, the same anti-host reactivity can be aimed at the leukemic cells — the graft-versus-tumor effect — so mild GVHD after a marrow transplant for leukemia can correlate with lower relapse; donor lymphocyte infusions deliberately re-induce it when leukemia returns.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "rejection-timeline-map",
      title: "The four-station clock — timeline, direction, and hypersensitivity map",
      caption:
        "An original KYP timeline map: the minutes → weeks-months → months-years timeline with GVHD off the clock; three rejection cards (hyperacute, acute, chronic) with pathogenesis, features, and clinical meaning; the GVHD panel with the direction reversal, clinical tetrad, transplant settings, graft-versus-tumor benefit, and the irradiated-blood-products rule; and the bottom strip mapping the two organizing axes — direction (host→graft vs graft→host) and hypersensitivity type (II, IV, II+IV) — plus descriptions of the three copyrighted biopsy micrographs (glomerular thrombosis, interstitial lymphocytic infiltrate, graft arteriosclerosis).",
      notice:
        "The printed table is pure vector; its three histopathology micrographs (A: thrombosis within the glomerulus; B: dense interstitial lymphocytic infiltrate; C: arteriosclerosis) are COPYRIGHTED and are described in the visual and note, never reproduced.",
    },
    {
      kind: "table",
      title: "Transplant rejection — verbatim",
      intro: "The source's four-row rejection table (TYPE / ONSET / PATHOGENESIS / FEATURES), verbatim.",
      columns: ["Type", "Onset · Pathogenesis · Features (verbatim)"],
      rows: [
        ["Hyperacute", "Within minutes. Pre-existing recipient antibodies react to donor antigen (type II hypersensitivity reaction), activate complement. Widespread thrombosis of graft vessels (arrows within glomerulus A) → ischemia and fibrinoid necrosis. Graft must be removed."],
        ["Acute", "Weeks to months. Cellular: CD8+ T cells and/or CD4+ T cells activated against donor MHCs (type IV hypersensitivity reaction). Humoral: similar to hyperacute, except antibodies develop after transplant (associated with C4d deposition). Vasculitis of graft vessels with dense interstitial lymphocytic infiltrate B. Prevent/reverse with immunosuppressants."],
        ["Chronic", "Months to years. CD4+ T cells respond to recipient APCs presenting donor peptides, including allogeneic MHC. Both cellular and humoral components (type II and IV hypersensitivity reactions). Recipient T cells react and secrete cytokines → proliferation of vascular smooth muscle, parenchymal atrophy, interstitial fibrosis. Dominated by arteriosclerosis C. Organ-specific examples: Chronic allograft nephropathy · Bronchiolitis obliterans · Accelerated atherosclerosis (heart) · Vanishing bile duct syndrome."],
        ["Graft-versus-host disease", "Varies. Grafted immunocompetent T cells proliferate in the immunocompromised host and reject host cells with “foreign” proteins → severe organ dysfunction. HLA mismatches ↑ the risk for GVHD. Type IV hypersensitivity reaction. Maculopapular rash, jaundice, diarrhea, hepatosplenomegaly. Usually in bone marrow and liver transplants (rich in lymphocytes). Potentially beneficial in bone marrow transplant for leukemia (graft-versus-tumor effect). For patients who are immunocompromised, irradiate blood products prior to transfusion to prevent GVHD."],
      ],
      caption:
        "Read each row left to right as onset → mechanism → morphology → therapy. The hypersensitivity mapping is the compressed version: hyperacute = II (preformed antibody), acute cellular = IV (T cells vs donor MHC), acute humoral = II (new antibody, C4d), chronic = II + IV (both), GVHD = IV (reversed direction). The A/B/C tokens in the features column are the printed figure pointers to the biopsy micrographs described in the visual.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The three biopsy pictures, described (the printed micrographs)",
      body: "The table's three histologic figures map to its three timeline stations. Figure A (hyperacute): the glomerulus packed with thrombosed vessels — preformed antibody and complement lysing the graft endothelium within minutes, the vessels clotting in response, the parenchyma infarcting to fibrinoid necrosis; this is why the graft must come out. Figure B (acute): the dense interstitial lymphocytic infiltrate with vasculitis — the recipient's newly-built CD8+/CD4+ T cells swarming the graft parenchyma and its vessels; this is the picture immunosuppression prevents and reverses (and the picture C4d staining confirms when the process is humoral). Figure C (chronic): graft arteriosclerosis — the thickened, narrowed vessels of chronic cytokine-driven remodeling, with smooth muscle proliferation in the intima, parenchymal atrophy, and interstitial fibrosis; this is the face of bronchiolitis obliterans in the lung, vanishing bile ducts in the liver, and chronic allograft nephropathy in the kidney. (The copyrighted micrographs are described here and in the visual — never reproduced.)",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A kidney transplant recipient with a history of multiple transfusions becomes anuric during the operation; the graft turns flaccid and dusky within 30 minutes of reperfusion; biopsy shows neutrophils in glomerular capillaries with fibrinoid necrosis and widespread vessel thrombosis.",
        discriminator: "Minutes after reperfusion + thrombosis + prior sensitization",
        concept: "Hyperacute rejection — pre-existing antibody (type II)",
        answer:
          "Pre-existing recipient antibodies (from the transfusions) react with donor antigen immediately upon reperfusion — a type II hypersensitivity reaction activating complement: endothelial injury, widespread thrombosis of graft vessels, ischemia, and fibrinoid necrosis within minutes. No immunosuppressive rescue exists — the antibody was already there — so the graft must be removed. Prevention is pre-transplant crossmatching (recipient serum vs donor lymphocytes) and ABO matching.",
      },
      {
        stem: "Six weeks after a heart transplant, a patient develops fever and reduced graft function; biopsy shows a dense interstitial lymphocytic infiltrate with vasculitis of graft vessels; the episode resolves completely with high-dose corticosteroids.",
        discriminator: "Weeks-months + lymphocytic infiltrate + immunosuppression-responsive",
        concept: "Acute cellular rejection — CD8+/CD4+ T cells vs donor MHC (type IV)",
        answer:
          "Acute cellular rejection: the recipient's newly-generated CD8+ and/or CD4+ T cells activated against donor MHCs (a type IV hypersensitivity reaction) produce vasculitis of the graft vessels with a dense interstitial lymphocytic infiltrate. Because the response is newly built and cellular, immunosuppressants prevent and reverse it — the steroid response in this stem is the signature. The humoral variant (post-transplant antibody with C4d deposition) parallels hyperacute in mechanism but not timing.",
      },
      {
        stem: "Eighteen months after a lung transplant, a patient has progressive dyspnea with airflow obstruction unresponsive to bronchodilators; biopsy shows bronchiolar fibrosis and luminal obliteration; the process is gradual and not reversible.",
        discriminator: "Months-years + an organ-specific fibrotic syndrome",
        concept: "Chronic rejection — bronchiolitis obliterans",
        answer:
          "Chronic rejection is the fibrotic endgame: CD4+ T cells responding to recipient APCs presenting donor peptides (allogeneic MHC), with both cellular and humoral components, secrete cytokines that drive vascular smooth muscle proliferation, parenchymal atrophy, and interstitial fibrosis — arteriosclerosis dominating the histology. Each organ names its own syndrome: bronchiolitis obliterans in the lung (this stem), chronic allograft nephropathy in the kidney, accelerated atherosclerosis in the heart, vanishing bile duct syndrome in the liver. Prevention is minimizing alloantigenic exposure; reversal is limited once fibrosis is established.",
      },
    ],
    traps: [
      {
        a: "Acute rejection can be humoral as well as cellular",
        b: "True — the humoral arm (post-transplant antibody, C4d+) is the hyperacute mechanism on the acute clock",
        whyConfused: "'Acute = cellular' is taught as the shorthand.",
        keyDifference:
          "The full printed row: acute rejection has BOTH arms — cellular (CD8+/CD4+ vs donor MHC, type IV) AND humoral (similar to hyperacute except the antibodies develop AFTER transplant, marked by C4d deposition in graft vessels). The clock position (weeks-months) tells you the response is new, not which arm; C4d staining tells you it is humoral.",
        clue: "Any C4d-deposition or acute-rejection-subtype question.",
      },
      {
        a: "GVHD is the host rejecting the graft",
        b: "GVHD is the GRAFT's T cells rejecting the HOST",
        whyConfused: "It sits in the rejection table, so the default direction is assumed.",
        keyDifference:
          "Every other row is host-versus-graft. GVHD reverses the arrow: grafted immunocompetent T cells proliferate in the immunocompromised host and attack host tissues bearing 'foreign' proteins (type IV, reversed). That is why it follows lymphocyte-rich grafts (marrow, liver), rises with HLA mismatch, produces the host-tissue tetrad (rash, jaundice, diarrhea, hepatosplenomegaly), and is prevented by irradiating blood products for the immunocompromised — and why it can be deliberately harnessed against leukemia (graft-versus-tumor).",
        clue: "Any GVHD direction, setting, or prevention question.",
      },
      {
        a: "Chronic rejection is just slow acute rejection",
        b: "Chronic rejection is a distinct mixed process — II AND IV — dominated by vascular remodeling",
        whyConfused: "Both follow transplantation and both involve alloreactivity.",
        keyDifference:
          "Chronic rejection is cytokine-driven remodeling: CD4+ T cells responding to donor peptides (including allogeneic MHC) presented by recipient APCs, with BOTH cellular and humoral components, secreting cytokines that make vascular smooth muscle proliferate, parenchyma atrophy, and interstitium fibrose — the arteriosclerosis that dominates. It is poorly reversible (unlike acute) and organ-named (bronchiolitis obliterans, vanishing bile duct, and company).",
        clue: "Any months-to-years transplant-dysfunction stem.",
      },
    ],
    pivots: [
      {
        lookAlike: "Hyperacute vs acute humoral rejection (the two antibody syndromes)",
        differentiator: "When the antibody was made",
        correctPath:
          "Hyperacute: the antibody PRE-EXISTED (prior transfusion, pregnancy, transplant) — minutes, complement, thrombosis, fibrinoid necrosis, graft removed; prevention is crossmatching. Acute humoral: the antibody DEVELOPS after transplant — weeks to months, C4d deposition in graft vessels, vasculitis; treatable with the anti-humoral arm of immunosuppression (plasma exchange, rituximab, IVIG — KYP bridge). Same mechanism (type II), different clocks, different outcomes.",
      },
      {
        lookAlike: "Rejection vs GVHD (the direction question)",
        differentiator: "Who attacks whom",
        correctPath:
          "Rejection (all three timeline stations): the HOST's immune system attacks the GRAFT — timing from minutes to years, therapy from graft removal (hyperacute) to immunosuppression (acute) to fibrosis management (chronic). GVHD: the GRAFT's T cells attack the HOST — marrow and liver transplants, HLA-mismatch-driven, the rash-jaundice-diarrhea-hepatosplenomegaly tetrad, prevented by irradiated blood products, and harnessed as graft-versus-tumor in leukemia. One arrow, two directions, entirely different management.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old woman with acute myeloid leukemia in second complete remission undergoes an allogeneic hematopoietic stem cell transplant from a matched unrelated donor (one HLA-DQ mismatch). Engraftment occurs on day 15. On day 28 she develops a pruritic maculopapular rash over her palms, soles, and trunk; total bilirubin rises from 0.6 to 4.8 mg/dL with elevated alkaline phosphatase; she has four large-volume watery stools per day; and examination reveals tender hepatosplenomegaly. Skin biopsy shows apoptotic keratinocytes with satellite lymphocytes at the basal layer. Immunosuppression had been tapered early for transaminitis workup.",
      question:
        "Which mechanism best explains this patient's syndrome?",
      options: [
        {
          label: "A",
          text: "Donor (grafted) immunocompetent T cells proliferating in the immunocompromised host and attacking host tissues bearing foreign proteins",
          correct: true,
          why: "Correct — acute graft-versus-host disease. The prerequisites assemble: an allogeneic (one HLA-DQ mismatch) marrow transplant delivering immunocompetent donor T cells into an immunocompromised (conditioned) host with a recently tapered immunosuppressive prophylaxis. The target-organ tetrad is classic — maculopapular rash (skin), jaundice (liver/bile ducts), diarrhea (gut), hepatosplenomegaly — and the basal-layer apoptotic keratinocytes with satellite lymphocytes are the pathognomonic skin histology of type IV cellular attack, reversed in direction: the graft rejects the host.",
        },
        {
          label: "B",
          text: "Pre-existing host antibodies reacting to donor antigens with complement activation",
          why: "This is hyperacute rejection — host-versus-GRAFT, minutes after reperfusion, in solid-organ transplantation. The direction is wrong (host attacks graft, not graft attacks host), the timing is wrong (day 28, not minutes), and the syndrome is the host-tissue tetrad, not graft failure.",
        },
        {
          label: "C",
          text: "Host CD8+ and CD4+ T cells activated against donor MHC in the graft parenchyma",
          why: "This is acute cellular rejection — again host-versus-graft, the solid-organ syndrome with vasculitis and interstitial lymphocytic infiltrate of the transplanted organ. In a marrow transplant the 'graft' is hematopoietic and the patient's immune system has been ablated; the clinical picture is the host's SKIN, LIVER, and GUT under attack by DONOR cells.",
        },
        {
          label: "D",
          text: "Cytokine-driven vascular smooth muscle proliferation and interstitial fibrosis of the transplanted organ",
          why: "Chronic rejection's remodeling — months to years, host-versus-graft, the arteriosclerosis of a solid organ with the organ-named syndromes. The day-28 timing, the host-tissue targets, and the apoptotic-keratinocyte histology all point at GVHD instead.",
        },
        {
          label: "E",
          text: "Leukemia relapse with leukemic infiltration of skin and liver",
          why: "Relapse is the great alternative after transplant, but the histology decides: leukemic infiltrates would show blasts, not apoptotic basal keratinocytes with satellite lymphocytes — the interface dermatitis of GVHD. The distribution (palms and soles first) and the constellation with diarrhea also favor GVHD; a bonus consideration is that once GVHD is controlled, the same donor-T-cell activity provides the graft-versus-leukemia effect protecting her remission.",
        },
      ],
      reasoning:
        "The vignette assembles GVHD's prerequisite stack — allogeneic marrow transplant (donor T cells delivered), one HLA mismatch (a visible target), a conditioned/immunocompromised host (cannot reject the graft), and lapsed prophylaxis (nothing restraining the donor cells) — then delivers the target-organ tetrad (rash, jaundice, diarrhea, hepatosplenomegaly) with the pathognomonic skin histology (apoptotic keratinocytes with satellite necrosis). The mechanism is the printed row: grafted immunocompetent T cells proliferate in the immunocompromised host and reject host cells with 'foreign' proteins — type IV, direction reversed. Distractors rotate through the other three rows and the relapse mimic; the graft-versus-tumor point is the therapeutic twist worth remembering.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe clock is the differential: minutes means the antibody was already there; months means the T cells are new; years means the vessels are remodeling.\u201d",
      meaning:
        "KYP's key for the rejection timeline: WITHIN MINUTES = hyperacute (pre-existing antibody, type II, complement — thrombosis, fibrinoid necrosis, graft out). WEEKS TO MONTHS = acute (new CD8+/CD4+ response to donor MHC, type IV — or new antibody, C4d — prevent/reverse with immunosuppressants). MONTHS TO YEARS = chronic (CD4+ vs donor peptides on recipient APCs, II + IV — cytokines, arteriosclerosis, organ-named fibrosis).",
      memorizes: "The three timeline stations and their mechanisms",
      whenToUse: "Any rejection-timing or mechanism question.",
      clinical: "Crossmatch prevents the minutes station; immunosuppression manages the months station; the years station is managed, not reversed.",
    },
    {
      code: "\u201cGVHD flips the arrow: the graft's T cells reject the host — rash, jaundice, diarrhea, big liver-spleen; marrow and liver grafts carry the guns.\u201d",
      meaning:
        "KYP's key for graft-versus-host disease: the direction reverses (graft attacks host), the histology is type IV (cell-mediated) aimed at host tissues, the tetrad is maculopapular rash + jaundice + diarrhea + hepatosplenomegaly, the settings are the lymphocyte-rich transplants (bone marrow first, liver second), and HLA mismatch raises the risk. Prevent with irradiated blood products in the immunocompromised; exploit as graft-versus-tumor in leukemia.",
      memorizes: "GVHD direction, tetrad, settings, prevention, and the therapeutic twist",
      whenToUse: "Any GVHD or post-transplant-rash question.",
      clinical: "Donor lymphocyte infusion deliberately re-induces the graft-versus-tumor effect at leukemia relapse.",
    },
    {
      code: "\u201cChronic rejection names its organ: the kidney fades, the lung's airways close, the heart's coronaries harden, the liver's ducts vanish.\u201d",
      meaning:
        "KYP's key for the organ-named chronic syndromes: chronic allograft nephropathy (kidney), bronchiolitis obliterans (lung — airflow obstruction unresponsive to bronchodilators), accelerated atherosclerosis (heart — the transplant coronaries), vanishing bile duct syndrome (liver — cholestasis with duct loss). All are the same arteriosclerosis-and-fibrosis process; the organ names the face.",
      memorizes: "The four organ-specific chronic rejection syndromes",
      whenToUse: "Any organ-specific late transplant-dysfunction stem.",
      clinical: "Each syndrome is monitored by organ-specific function testing (creatinine, spirometry, coronary surveillance, bilirubin/ALP).",
    },
  ],
  rapidReview: {
    s30: [
      "Hyperacute: minutes — pre-existing antibody, type II + complement; thrombosis, fibrinoid necrosis; graft removed",
      "Acute: weeks-months — cellular CD8+/CD4+ vs donor MHC (IV) or humoral post-transplant antibody (C4d)",
      "Acute features: vasculitis + dense interstitial lymphocytic infiltrate — prevent/reverse with immunosuppressants",
      "Chronic: months-years — CD4+ vs recipient APCs presenting donor peptides; II AND IV; arteriosclerosis dominates",
      "Chronic organ names: allograft nephropathy · bronchiolitis obliterans · accelerated atherosclerosis · vanishing bile duct",
    ],
    m3: [
      "Hyperacute = type II; acute cellular = type IV; chronic = II + IV; GVHD = IV (reversed)",
      "Acute humoral: antibody develops AFTER transplant, C4d deposition",
      "GVHD: grafted T cells attack the immunocompromised host; HLA mismatch ↑ risk",
      "GVHD tetrad: maculopapular rash, jaundice, diarrhea, hepatosplenomegaly",
      "GVHD settings: bone marrow and liver transplants (lymphocyte-rich)",
    ],
    m10: [
      "Hyperacute prevention: crossmatching + ABO matching (the antibody pre-exists)",
      "Chronic histology: vascular smooth muscle proliferation, parenchymal atrophy, interstitial fibrosis",
      "Graft-versus-TUMOR effect: GVHD's attack harnessed against leukemia (potentially beneficial)",
      "Irradiate blood products for immunocompromised patients — prevents transfusion GVHD",
      "Biopsy clock faces: A glomerular thrombosis (hyperacute) · B interstitial infiltrate (acute) · C arteriosclerosis (chronic)",
    ],
  },
  recall: [
    {
      q: "Give hyperacute rejection's onset, mechanism, and outcome.",
      a: "Onset: within minutes. Pathogenesis: pre-existing recipient antibodies react to donor antigen (type II hypersensitivity reaction), activating complement. Features: widespread thrombosis of graft vessels → ischemia and fibrinoid necrosis. Graft must be removed.",
    },
    {
      q: "Describe acute rejection's two arms and its histology.",
      a: "Onset weeks to months. Cellular: CD8+ T cells and/or CD4+ T cells activated against donor MHCs (type IV hypersensitivity). Humoral: similar to hyperacute except the antibodies develop after transplant (associated with C4d deposition). Features: vasculitis of graft vessels with dense interstitial lymphocytic infiltrate. Prevent/reverse with immunosuppressants.",
    },
    {
      q: "What drives chronic rejection, and what are the organ-specific syndromes?",
      a: "Onset months to years. CD4+ T cells respond to recipient APCs presenting donor peptides, including allogeneic MHC; both cellular and humoral components (type II and IV). Recipient T cells secrete cytokines → vascular smooth muscle proliferation, parenchymal atrophy, interstitial fibrosis — dominated by arteriosclerosis. Organ-specific examples: chronic allograft nephropathy, bronchiolitis obliterans, accelerated atherosclerosis (heart), vanishing bile duct syndrome.",
    },
    {
      q: "What is graft-versus-host disease, and in which transplants does it occur?",
      a: "Grafted immunocompetent T cells proliferate in the immunocompromised host and reject host cells with 'foreign' proteins → severe organ dysfunction (type IV hypersensitivity; HLA mismatches increase the risk). Features: maculopapular rash, jaundice, diarrhea, hepatosplenomegaly. Usually in bone marrow and liver transplants (rich in lymphocytes). Potentially beneficial in bone marrow transplant for leukemia (graft-versus-tumor effect).",
    },
    {
      q: "How is GVHD prevented in transfusion, and why does the maneuver work?",
      a: "For immunocompromised patients, blood products are irradiated prior to transfusion — the radiation disables the donor lymphocytes' ability to proliferate (damaging their DNA), removing the prerequisite for GVHD (competent grafted T cells) without harming the red cells or platelets the patient needs.",
    },
  ],
  related: [
    {
      title: "Hypersensitivity Reactions",
      topicId: "hypersensitivity-types",
      note: "The rejection table's types column — II (antibody), IV (cell-mediated), and the II+IV mix — is the hypersensitivity chapter applied.",
    },
    {
      title: "Immunosuppressants",
      topicId: "immunosuppressants",
      note: "The drug class built for acute rejection's prevent/reverse window — and GVHD's treatment.",
    },
    {
      title: "Major Functions of NK, B and T Cells",
      topicId: "nk-b-t-cell-functions",
      note: "Acute and chronic cellular organ rejection are T-cell functions on the E23 roster; GVHD is the same machinery in reverse.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "Hyperacute rejection is complement in action on a graft — the same cascade E29-E30 map, aimed at endothelium.",
    },
  ],
  crossLinks: [
    {
      subject: "Nephrology (Kidney Transplant)",
      connection: "The rejection clock is nephrology's transplant curriculum — creatinine trends, biopsy timing, and the C4d stain that splits cellular from humoral acute rejection.",
    },
    {
      subject: "Pulmonology (Lung Transplant)",
      connection: "Bronchiolitis obliterans is chronic rejection's lung face — progressive airflow obstruction unresponsive to bronchodilators, monitored by FEV1 surveillance.",
    },
    {
      subject: "Hematology (Stem Cell Transplant)",
      connection: "GVHD and graft-versus-tumor are the double-edged sword of allogeneic marrow transplantation — the same donor T cells that attack host tissues also clear leukemia.",
    },
    {
      subject: "Cardiology (Heart Transplant)",
      connection: "Accelerated atherosclerosis is chronic rejection's cardiac face — transplant coronary disease drives long-term surveillance and retransplant decisions.",
    },
  ],
};
