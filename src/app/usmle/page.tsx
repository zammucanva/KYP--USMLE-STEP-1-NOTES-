import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Layers } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { SectionHeader } from "@/components/kyp/ui/section-header";
import { Badge, CardPrimitive } from "@/components/kyp/ui";
import { usmleNotes, usmleSubjects } from "@/lib/kyp/usmle/notes";

/**
 * /usmle — the USMLE 2026 section hub.
 *
 * Same hub pattern as /medicine and /learn: hero + subject-grouped
 * card grid, every element from the KYP design system.
 */

export const metadata: Metadata = {
  title: "USMLE 2026 · Know Your Pill",
  description:
    "USMLE Step 1 2026 high-yield notes inside Know Your Pill — mechanisms rendered by the universal KYP mechanism system, with original KYP visuals, clinical pictures, vignette patterns, traps, mnemonics, and a rapid-review ladder.",
  keywords: [
    "USMLE",
    "Step 1",
    "USMLE 2026",
    "First Aid",
    "high-yield notes",
    "mechanisms",
    "Know Your Pill",
  ],
  openGraph: {
    title: "USMLE 2026 · Know Your Pill",
    description:
      "USMLE Step 1 2026 high-yield notes — now a section of Know Your Pill.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

const difficultyStars: Record<number, string> = {
  1: "★",
  2: "★★",
  3: "★★★",
};

export default function UsMLEHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-30" aria-hidden />
          <Container className="relative">
              <p className="text-overline text-brand mb-6">USMLE 2026 · Step 1 Pilot</p>
              <h1 className="max-w-3xl text-display text-foreground leading-[1.05]">
                The 2026 high-yield corpus, built the KYP way.
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                {usmleNotes.length} high-yield topics spanning biochemistry, pharmacology, pathology, cardiology,
                neurology, renal, immunology, and endocrine — each one a complete KYP note:
                mechanism flows, original visuals, clinical pictures, vignette patterns,
                mnemonics, and a rapid-review ladder. Authored from First Aid 2026, presented
                inside the KYP design system you already know.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/usmle/diabetes-mellitus"
                  className="kyp-focus-ring inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
                >
                  Start with Diabetes Mellitus
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/usmle/compare"
                  className="kyp-focus-ring inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-brand/40 hover:-translate-y-0.5"
                >
                  Compare with an existing KYP page
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <Badge variant="brand" size="sm">{usmleNotes.length} topics</Badge>
                <Badge variant="neural" size="sm">{usmleSubjects.length} subjects</Badge>
                <Badge variant="outline" size="sm">First Aid 2026 sourced</Badge>
              </div>
          </Container>
        </Section>

        {/* ===== TOPIC GRID (grouped by subject) ===== */}
        {usmleSubjects.map((subject) => (
          <Section key={subject} spacing="tight" className="border-t border-border/30">
            <Container>
              <SectionHeader
                eyebrow={subject}
                title={`${usmleNotes.filter((n) => n.subject === subject).length} ${
                  usmleNotes.filter((n) => n.subject === subject).length === 1 ? "topic" : "topics"
                }`}
                align="between"
                tone="brand"
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {usmleNotes
                  .filter((n) => n.subject === subject)
                  .map((note) => (
                    <CardPrimitive
                      key={note.id}
                      variant="flat"
                      interactive
                      href={`/usmle/${note.id}`}
                    >
                      <div className="flex h-full flex-col p-5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-overline text-brand">{note.subject}</span>
                          <span className="flex items-center gap-1 text-[0.7rem] text-muted-foreground">
                            <Clock className="h-3 w-3" aria-hidden /> {note.readTime} min
                          </span>
                        </div>
                        <h3 className="mt-3 font-serif text-xl font-semibold text-foreground leading-tight">
                          {note.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-body-sm text-muted-foreground leading-relaxed">
                          {note.subtitle}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                          <span className="flex items-center gap-1 text-[0.7rem] text-muted-foreground">
                            <Layers className="h-3 w-3" aria-hidden />
                            {difficultyStars[note.difficulty]} · {note.pilotCategory}
                          </span>
                          <span className="text-xs font-semibold text-brand">Read →</span>
                        </div>
                      </div>
                    </CardPrimitive>
                  ))}
              </div>
            </Container>
          </Section>
        ))}

        {/* ===== ABOUT THE PILOT ===== */}
        <Section spacing="tight" className="border-t border-border/30 bg-muted/20">
          <Container width="narrow">
              <SectionHeader
                eyebrow="About the Pilot"
                title="What makes these notes KYP."
                align="center"
                tone="neural"
              />
              <div className="mt-8 space-y-4 text-body text-foreground/80 leading-relaxed">
                <p>
                  Every topic follows the same KYP course anatomy you know from the medication
                  library: a core idea, mechanism flows rendered by the universal KYP mechanism
                  system, a deep-dive with original theme-aware visuals, the clinical picture,
                  pharmacology cards, an exam-strategy section, and a memory layer — mnemonics,
                  a timed rapid-review ladder, and an active-recall deck.
                </p>
                <p>
                  Content is authored from First Aid for the USMLE Step 1 2026 with source page
                  references on every note. All visuals are original KYP creations — no source
                  artwork is reproduced — and every diagram adapts to light and dark mode.
                </p>
              </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
