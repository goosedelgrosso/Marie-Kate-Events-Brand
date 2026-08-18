import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  ClosingCta,
  PlaceholderNote,
  SectionLabel,
} from "@/components/ui";
import { addOns, services } from "@/content/services";
import { experience } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service planning, partial planning, wedding day coordination, and events other than weddings, plus a la carte add-ons.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services"
        intro="Four ways to work together, from the first idea to the last dance. If none of them fit exactly, tell us. We build around what you actually need."
      />

      {/* Quick index ------------------------------------------------------ */}
      <section className="px-6 pb-20 sm:px-10">
        <Reveal className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="label link-rule text-espresso-soft"
            >
              {s.name}
            </a>
          ))}
        </Reveal>
      </section>

      {/* The four tiers --------------------------------------------------- */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 ${
            i % 2 === 1 ? "bg-white" : ""
          }`}
        >
          <div className="mx-auto max-w-[1300px]">
            <div
              className={`grid items-start gap-14 lg:grid-cols-2 lg:gap-24 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <PlaceholderImage
                  label={service.photo}
                  ratio="4/5"
                  tone={
                    (["ivory", "taupe", "sage", "espresso"] as const)[i % 4]
                  }
                />
              </Reveal>

              <Reveal delay={100}>
                <p className="label text-taupe flex items-center gap-3">
                  {service.number}
                  <span className="bg-taupe/60 h-px w-6" />
                </p>
                <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">
                  {service.name}
                </h2>
                <p className="font-display mt-5 text-xl italic sm:text-2xl">
                  {service.short}
                </p>
                <p className="text-espresso-soft mt-7 text-base leading-[1.9]">
                  {service.intro}
                </p>

                {service.includes && (
                  <>
                    <div className="bg-taupe/50 mt-10 h-px w-full" />
                    <p className="label text-espresso-soft mt-8">
                      What is included
                    </p>
                    <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="text-espresso-soft flex items-start gap-3 text-sm"
                        >
                          <span className="bg-sage mt-2.5 h-px w-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {service.groups?.map((group) => (
                  <div key={group.title}>
                    <div className="bg-taupe/50 mt-10 h-px w-full" />
                    <p className="label text-espresso-soft mt-8">
                      {group.title}
                    </p>
                    <ul className="mt-5 grid gap-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-espresso-soft flex items-start gap-3 text-sm"
                        >
                          <span className="bg-sage mt-2.5 h-px w-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <ButtonLink href="/inquire" className="mt-12">
                  Inquire about this &rarr;
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* A la carte -------------------------------------------------------- */}
      <section className="bg-espresso text-ivory px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1300px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-4">
              <span className="bg-ivory/40 h-px w-10" />
              <span className="label text-ivory/70">A La Carte</span>
              <span className="bg-ivory/40 h-px w-10" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl">
              Add anything you need
            </h2>
            <p className="text-ivory/70 max-w-xl">
              Weddings are rarely one day anymore. Add a welcome party, a
              farewell brunch, or design help for a single piece of the
              celebration.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((group, i) => (
              <Reveal key={group.title} delay={i * 80}>
                <div className="bg-ivory/25 mb-6 h-px w-full" />
                <h3 className="font-display text-2xl">{group.title}</h3>
                <ul className="mt-5 grid gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-ivory/70 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process recap ----------------------------------------------------- */}
      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1300px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">How It Works</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl">
              The Marie Kate Experience
            </h2>
          </Reveal>

          <ol className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 80}>
                <div className="bg-taupe/50 mb-7 h-px w-full" />
                <p className="label text-taupe flex items-center gap-3">
                  {step.number}
                  <span className="bg-taupe/60 h-px w-6" />
                </p>
                <h3 className="font-display mt-3 text-2xl">{step.title}</h3>
                <p className="text-espresso-soft mt-4 text-sm leading-relaxed">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing note ------------------------------------------------------ */}
      <section className="bg-white px-6 py-20 sm:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl italic sm:text-3xl">
            Every wedding is priced to what it actually takes. Send us an
            inquiry and we will follow up with a full pricing guide.
          </p>
          <PlaceholderNote className="mt-8">
            Open question: whether pricing appears on this page or only after an
            inquiry
          </PlaceholderNote>
        </Reveal>
      </section>

      <ClosingCta
        headline="Let's make your wedding feel like you."
        body="Tell us which service you are considering and we will take it from there."
        cta="Inquire"
      />
    </>
  );
}
