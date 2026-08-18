import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import {
  ArrowLink,
  ButtonLink,
  ClosingCta,
  PlaceholderNote,
  SectionLabel,
} from "@/components/ui";
import { services } from "@/content/services";
import { experience, testimonials } from "@/content/site-copy";
import { portfolio } from "@/content/portfolio";
import LeadMagnet from "@/components/LeadMagnet";

export default function Home() {
  return (
    <>
      {/* 2. Hero ---------------------------------------------------------- */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <PlaceholderImage
          fill
          tone="espresso"
          label="Hero film photo or video: couple walking away, movement, warm light"
          quiet
        />
        <div className="from-espresso/85 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

        <div className="text-ivory relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 pb-20 sm:px-10 sm:pb-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">
              Marie Kate Events
            </h1>
            <p className="font-display mt-6 text-2xl font-light italic sm:text-3xl">
              Thoughtful celebrations, beautifully brought to life.
            </p>
            <p className="label text-ivory/80 mt-10">
              Wedding Planning &bull; Design &bull; Coordination
            </p>
            <ButtonLink href="/inquire" variant="light" className="mt-10">
              Inquire with us &rarr;
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 3. Philosophy ---------------------------------------------------- */}
      <section className="px-6 py-28 sm:px-10 sm:py-44">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <SectionLabel align="center">Our Why</SectionLabel>
          <h2 className="font-display text-3xl leading-[1.18] sm:text-5xl">
            Your love story deserves more than a beautiful day. It deserves an
            experience that feels entirely like you.
          </h2>
          <p className="text-espresso-soft max-w-xl text-base sm:text-lg">
            At Marie Kate Events, we blend thoughtful planning, intentional
            design, and seamless coordination to create celebrations that feel
            effortless, personal, and unforgettable.
          </p>
        </Reveal>
      </section>

      {/* 4. Services ------------------------------------------------------ */}
      <section className="bg-white px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">Our Services</SectionLabel>
          </Reveal>

          <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <Link href="/services" className="group block">
                  {service.image ? (
                    <Photo
                      src={service.image}
                      alt={service.name}
                      ratio="4/5"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <PlaceholderImage
                      label={service.photo}
                      ratio="4/5"
                      tone={i % 2 === 0 ? "ivory" : "taupe"}
                      quiet
                    />
                  )}
                  <p className="label text-taupe mt-7">{service.number}</p>
                  <h3 className="font-display mt-3 text-2xl">{service.name}</h3>
                  <p className="text-espresso-soft mt-3 text-sm leading-relaxed">
                    {service.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <ArrowLink href="/services">Explore Services</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* 5. The Marie Kate Experience ------------------------------------- */}
      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">How It Works</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl">
              The Marie Kate Experience
            </h2>
          </Reveal>

          <ol className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 90}>
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

      {/* 7. Meet the girls ------------------------------------------------ */}
      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              src="/photos/meet-the-girls.jpg"
              alt="The two founders of Marie Kate Events, standing together"
              ratio="4/5"
            />
          </Reveal>
          <Reveal delay={120} className="lg:pr-10">
            <SectionLabel>Meet the Girls</SectionLabel>
            <h2 className="font-display mt-8 text-4xl leading-tight sm:text-5xl">
              Two best friends. One shared love for celebrations.
            </h2>
            <p className="text-espresso-soft mt-8 text-base leading-relaxed">
              Hi we&rsquo;re Lexi and Maddy! We have been in each others lives
              long enough to finish each others sentences, which turns out to be
              a useful skill on a wedding day. Between the two of us we can make
              your vision come to life and your day as stress free as possible.
            </p>
            <div className="mt-10">
              <ArrowLink href="/about">Meet Us</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Kind words ----------------------------------------------------- */}
      <section className="bg-white px-6 py-28 sm:px-10 sm:py-40">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <SectionLabel align="center">Kind Words</SectionLabel>
          <blockquote className="font-display text-3xl leading-snug italic sm:text-5xl">
            &ldquo;{testimonials[1].quote}&rdquo;
          </blockquote>
          <p className="label text-espresso-soft">{testimonials[1].author}</p>
          <PlaceholderNote>
            Placeholder testimonial, not from a real client
          </PlaceholderNote>
        </Reveal>
      </section>

      {/* 9. Portfolio ------------------------------------------------------ */}
      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">Portfolio</SectionLabel>
            <h2 className="font-display max-w-2xl text-4xl sm:text-5xl">
              A look at the celebrations we are dreaming up
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 80}>
                <Link href={`/portfolio/${entry.slug}`} className="block">
                  <PlaceholderImage
                    label={entry.cover}
                    ratio="3/4"
                    tone={
                      (["ivory", "sage", "taupe", "espresso"] as const)[i % 4]
                    }
                    quiet
                  />
                  <h3 className="font-display mt-6 text-xl">{entry.title}</h3>
                  <p className="label text-taupe mt-2">{entry.meta}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <ArrowLink href="/portfolio">View All</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* 10. Free wedding guide -------------------------------------------- */}
      <LeadMagnet />

      {/* 11. Closing CTA --------------------------------------------------- */}
      <ClosingCta
        headline="Let's make your wedding feel like you."
        body="Tell us about the two of you and the celebration you have in mind. We read every inquiry ourselves."
        cta="Inquire"
      />
    </>
  );
}
