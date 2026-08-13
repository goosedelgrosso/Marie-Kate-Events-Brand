import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { ArrowLink, ClosingCta, PlaceholderNote } from "@/components/ui";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Styled shoot concepts and celebrations designed by Marie Kate Events.",
};

const tones = ["ivory", "sage", "taupe", "espresso"] as const;

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="The celebrations we are dreaming up"
        intro="Four concepts we are building out as styled shoots, each one a different kind of wedding day."
      />

      <section className="px-6 pb-10 sm:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <PlaceholderNote>
            These are styled shoot concepts, not weddings that have happened yet
          </PlaceholderNote>
        </Reveal>
      </section>

      <div className="pb-16">
        {portfolio.map((entry, i) => (
          <section key={entry.slug} className="px-6 py-14 sm:px-10 sm:py-20">
            <Reveal className="mx-auto max-w-[1300px]">
              <Link href={`/portfolio/${entry.slug}`} className="group block">
                <div className="relative">
                  <PlaceholderImage
                    label={entry.cover}
                    ratio="21/9"
                    tone={tones[i % 4]}
                    className="hidden sm:block"
                    quiet
                  />
                  <PlaceholderImage
                    label={entry.cover}
                    ratio="4/5"
                    tone={tones[i % 4]}
                    className="sm:hidden"
                    quiet
                  />
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                  <p className="label text-taupe">{entry.meta}</p>
                  <h2 className="font-display text-4xl sm:text-6xl">
                    {entry.title}
                  </h2>
                  <p className="text-espresso-soft max-w-xl text-base">
                    {entry.teaser}
                  </p>
                  <span className="label link-rule mt-3 inline-block">
                    View the Gallery <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </section>
        ))}
      </div>

      <section className="bg-white px-6 py-24 sm:px-10 sm:py-32">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl italic sm:text-4xl">
            Real weddings will live here as they happen.
          </h2>
          <p className="text-espresso-soft">
            We would love yours to be one of the first.
          </p>
          <ArrowLink href="/inquire">Start the Conversation</ArrowLink>
        </Reveal>
      </section>

      <ClosingCta
        headline="Let's make your wedding feel like you."
        cta="Inquire"
      />
    </>
  );
}
