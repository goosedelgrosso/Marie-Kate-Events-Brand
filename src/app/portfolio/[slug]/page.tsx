import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { ClosingCta, PlaceholderNote, SectionLabel } from "@/components/ui";
import { portfolio } from "@/content/portfolio";

export function generateStaticParams() {
  return portfolio.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = portfolio.find((e) => e.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.teaser };
}

const tones = ["ivory", "sage", "taupe", "espresso"] as const;

export default async function PortfolioEntryPage({
  params,
}: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const entry = portfolio.find((e) => e.slug === slug);
  if (!entry) notFound();

  const index = portfolio.findIndex((e) => e.slug === slug);
  const next = portfolio[(index + 1) % portfolio.length];

  return (
    <>
      {/* Masthead --------------------------------------------------------- */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden">
        <PlaceholderImage fill tone="espresso" label={entry.cover} quiet />
        <div className="from-espresso/80 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        <div className="text-ivory relative z-10 mx-auto w-full max-w-[1300px] px-6 pt-32 pb-16 text-center sm:px-10 sm:pb-24">
          <h1 className="font-display text-5xl uppercase sm:text-7xl">
            {entry.title}
          </h1>
          <p className="label text-ivory/80 mt-6">{entry.meta}</p>
        </div>
      </section>

      {/* The vision -------------------------------------------------------- */}
      <section className="px-6 py-24 sm:px-10 sm:py-36">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <SectionLabel align="center">The Vision</SectionLabel>
          <p className="font-display text-2xl leading-snug sm:text-3xl">
            {entry.vision}
          </p>
          {entry.concept && (
            <PlaceholderNote>
              Styled shoot concept, not yet photographed
            </PlaceholderNote>
          )}
        </Reveal>
      </section>

      {/* Galleries --------------------------------------------------------- */}
      {entry.sections.map((section, s) => (
        <section
          key={section.title}
          className={`px-6 py-20 sm:px-10 sm:py-28 ${s % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-[1300px]">
            <Reveal>
              <SectionLabel align="center">{section.title}</SectionLabel>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {section.frames.map((frame, f) => (
                <Reveal key={frame} delay={f * 90}>
                  <PlaceholderImage
                    label={frame}
                    ratio={f === 1 ? "3/4" : "4/5"}
                    tone={tones[(s + f) % 4]}
                    className={f === 1 ? "sm:mt-12" : ""}
                    quiet
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Next -------------------------------------------------------------- */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label text-taupe">Next</p>
          <Link href={`/portfolio/${next.slug}`}>
            <h2 className="font-display mt-4 text-4xl sm:text-6xl">
              {next.title}
            </h2>
          </Link>
          <div className="mt-8">
            <Link href="/portfolio" className="label link-rule">
              Back to all work
            </Link>
          </div>
        </Reveal>
      </section>

      <ClosingCta
        headline="Let's make your wedding feel like you."
        cta="Inquire"
      />
    </>
  );
}
