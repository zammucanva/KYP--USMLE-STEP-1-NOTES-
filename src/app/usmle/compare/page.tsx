import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Columns2, Info } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge, Callout, CardPrimitive } from "@/components/kyp/ui";
import { usmleNotes } from "@/lib/kyp/usmle/notes";

/**
 * /usmle/compare — same-site comparison launcher.
 *
 * The KYP site blocks iframe embedding site-wide (X-Frame-Options:
 * DENY is part of its security posture and is deliberately NOT
 * changed for this pilot), so the side-by-side comparison is done
 * with two labeled browser tabs: an EXISTING KYP page on the left,
 * the same topic's USMLE note — inside the same site — on the right.
 */

export const metadata: Metadata = {
  title: "USMLE 2026 vs existing KYP · Know Your Pill",
  description:
    "Compare an existing Know Your Pill page with a USMLE 2026 topic page — same site, same design system, same shell.",
};

/** Existing KYP pages that make good comparison anchors. */
const KYP_REFERENCE_PAGES = [
  {
    id: "sertraline",
    label: "Sertraline",
    description: "The canonical drug course page — hero, left rail, mechanisms, checkpoints.",
    href: "/drugs/sertraline",
  },
  {
    id: "mdd",
    label: "Major Depressive Disorder",
    description: "The disease module page — the closest structural sibling of a USMLE topic.",
    href: "/diseases/major-depressive-disorder",
  },
  {
    id: "learn",
    label: "Learning Hub",
    description: "The /learn dashboard — hub conventions the USMLE hub follows.",
    href: "/learn",
  },
  {
    id: "medicine",
    label: "Medicine Hub",
    description: "The /medicine listing page — the card-grid pattern the USMLE hub follows.",
    href: "/medicine",
  },
];

interface ComparePageProps {
  searchParams: Promise<{ ref?: string; topic?: string }>;
}

export default async function UsMLEComparePage({ searchParams }: ComparePageProps) {
  const { ref = "sertraline", topic = "diabetes-mellitus" } = await searchParams;

  const refPage =
    KYP_REFERENCE_PAGES.find((p) => p.id === ref) ?? KYP_REFERENCE_PAGES[0];
  const topicNote = usmleNotes.find((n) => n.id === topic) ?? usmleNotes[9];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        <Section spacing="relaxed" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <Container className="relative">
              <p className="text-overline text-brand mb-6">Same website check</p>
              <h1 className="max-w-3xl text-display text-foreground leading-[1.05]">
                Existing KYP page vs USMLE 2026 — side by side.
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                Open both links in two tabs (or two windows side by side). The question this
                page exists to answer: <em>does the USMLE section look like the same KYP
                website?</em> Same navbar, same typography, same cards, same theme system,
                same footer. The answer should be immediate.
              </p>
              <div className="mt-6 max-w-2xl">
                <Callout variant="info" title="Why two tabs instead of one embedded view">
                  The KYP site sets <code>X-Frame-Options: DENY</code> on every page as part
                  of its security posture. That protection is part of the existing site and is
                  not modified for this pilot — so the comparison runs in two tabs instead of
                  an embedded split view.
                </Callout>
              </div>
          </Container>
        </Section>

        <Section spacing="tight" className="border-t border-border/30">
          <Container>
            <div className="flex items-center justify-center gap-2 text-overline text-muted-foreground">
              <Columns2 className="h-4 w-4 text-brand" aria-hidden />
              The comparison pair
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {/* LEFT — existing KYP page */}
              <CardPrimitive variant="flat">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" size="md">LEFT · Existing KYP</Badge>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                    {refPage.label}
                  </h2>
                  <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                    {refPage.description}
                  </p>
                  <Link
                    href={refPage.href}
                    className="kyp-focus-ring mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
                  >
                    Open the KYP page
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Pick another anchor:{" "}
                    {KYP_REFERENCE_PAGES.filter((p) => p.id !== refPage.id).map((p, i, arr) => (
                      <span key={p.id}>
                        <Link href={`/usmle/compare?ref=${p.id}&topic=${topicNote.id}`} className="font-medium text-brand hover:text-brand-ink">
                          {p.label}
                        </Link>
                        {i < arr.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </CardPrimitive>

              {/* RIGHT — USMLE topic inside KYP */}
              <CardPrimitive variant="featured">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="brand" size="md">RIGHT · USMLE 2026 in KYP</Badge>
                    <ArrowUpRight className="h-4 w-4 text-brand" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                    {topicNote.title}
                  </h2>
                  <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                    The same shell — navbar, breadcrumb, hero, cards, mechanism system, footer —
                    carrying new USMLE 2026 content.
                  </p>
                  <Link
                    href={`/usmle/${topicNote.id}`}
                    className="kyp-focus-ring mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
                  >
                    Open the USMLE page
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Pick another topic:{" "}
                    {usmleNotes
                      .filter((n) => n.id !== topicNote.id)
                      .slice(0, 9)
                      .map((n, i, arr) => (
                        <span key={n.id}>
                          <Link
                            href={`/usmle/compare?ref=${refPage.id}&topic=${n.id}`}
                            className="font-medium text-brand hover:text-brand-ink"
                          >
                            {n.title}
                          </Link>
                          {i < arr.length - 1 ? " · " : ""}
                        </span>
                      ))}
                  </p>
                </div>
              </CardPrimitive>
            </div>
          </Container>
        </Section>

        <Section spacing="tight" className="border-t border-border/30 bg-muted/20">
          <Container width="narrow">
            <SectionHeader
              eyebrow="Checklist"
              title="What should match"
              align="center"
              tone="brand"
            />
            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[
                "Same fixed navbar with the KYP logo",
                "Same serif display type on both heroes",
                "Same card borders, radius, and hover lift",
                "Same teal brand accents and section eyebrows",
                "Same light/dark theme behavior (toggle in navbar)",
                "Same footer and floating search",
                "Mechanisms render in the shared KYP mechanism system",
                "Same responsive behavior on mobile",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-card p-3.5"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span className="text-body-sm text-foreground/85">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-center text-caption text-muted-foreground">
              <Info className="h-3.5 w-3.5" aria-hidden />
              The USMLE content can be deeper and richer — but the UI must remain recognizably KYP.
            </p>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
