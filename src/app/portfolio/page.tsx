import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowLink, ClosingCta } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Celebrations designed by Marie Kate Events.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="The celebrations" />

      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <p className="script text-taupe text-5xl sm:text-6xl">coming soon</p>
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
