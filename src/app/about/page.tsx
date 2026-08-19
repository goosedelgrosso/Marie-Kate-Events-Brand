import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ClosingCta, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Lexi Marie and Maddy Kate, the two best friends behind Marie Kate Events.",
};

const story = [
  {
    heading: "How we got here",
    body: [
      "We met in seventh grade and have been side by side ever since. We spent four years on the mountain bike team together, and at sixteen, we found our way into the wedding industry as caterers. Soon after we became hostesses, then coordinators, and eventually vendors in our own right, with Maddy making signage and Lexi taking on rentals. Between the two of us, we have done over a hundred weddings.",
      "As we grew up and started experiencing more of life's biggest moments, we realized how much we loved creating them. What started as a part-time job became a passion, and eventually, the idea for Marie-Kate.",
    ],
  },
  {
    heading: "What we actually do for you",
    body: [
      "What's the honest version? We take the weight off your shoulders. We handle the timelines, the emails, the moving pieces, and the little things you may never even know went wrong.",
      "Our goal is simple: for you to be fully present on your wedding day, not worrying about what comes next, but enjoying every moment of it.",
    ],
  },
];

/** The founders' own words. No job titles by choice, so none are rendered. */
const each = [
  {
    name: "Lexi Marie",
    body: [
      "Hi I'm Lexi! I've been planning parties, get-togethers, and special moments for friends for literally as long as I can remember. If there was an excuse to celebrate, I was planning it. That lifelong obsession naturally morphed into a full-blown career, starting behind the scenes as a caterer and hostess when I was 16. Now, after spending the last year as a wedding coordinator, I know weddings inside and out. I want your day to be fun, stress free, and absolutely perfect! I'm your hype woman, your steady anchor, and the friend who's got every single detail covered so you can just focus on marrying your person and partying the night away!",
    ],
    photo: "Film photo: Lexi, candid portrait",
    image: "/photos/founder-lexi.jpg",
  },
  {
    name: "Maddy Kate",
    body: [
      "I've always loved bringing people together and being part of the moments that matter most. After five years in the events industry, I've found that I especially love the little details that make a wedding feel personal and true to the couple.",
      "Before wedding planning, I was a D1 track & field athlete, which taught me a lot about discipline, staying organized, and keeping my cool when things don't go according to plan. Outside of work and track, I'm usually looking for a new place to explore, spending time outside, or finding an excuse to get together with the people I love.",
    ],
    photo: "Film photo: Maddy, candid portrait",
    image: "/photos/founder-maddy.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        script="hello there"
        title="Meet Lexi + Maddy"
        intro="Two best friends who have always loved a good event."
      />

      <section className="px-6 pb-24 sm:px-10">
        <Reveal className="mx-auto max-w-[1200px]">
          <Photo
            src="/photos/about-hero.jpg"
            alt="Lexi and Maddy, the founders of Marie Kate Events, standing side by side"
            ratio="16/9"
            position="center top"
            sizes="(min-width: 1200px) 1200px, 100vw"
            priority
          />
        </Reveal>
      </section>

      <section className="px-6 pb-28 sm:px-10 sm:pb-40">
        <div className="mx-auto max-w-2xl">
          {story.map((block, i) => (
            <Reveal key={block.heading} delay={i * 60} className="mb-16">
              <SectionLabel>{block.heading}</SectionLabel>
              {block.body.map((p) => (
                <p
                  key={p}
                  className="text-espresso-soft mt-6 text-base leading-[1.9] sm:text-lg"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">The Two of Us</SectionLabel>
          </Reveal>

          <div className="mt-20 grid gap-14 sm:grid-cols-2 sm:gap-20">
            {each.map((person, i) => (
              <Reveal key={person.name} delay={i * 100}>
                {person.image ? (
                  <Photo
                    src={person.image}
                    alt={person.name}
                    ratio="4/5"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <PlaceholderImage
                    label={person.photo}
                    ratio="4/5"
                    tone={i === 0 ? "ivory" : "sage"}
                    quiet
                  />
                )}
                <h3 className="font-display mt-8 text-3xl">{person.name}</h3>
                {person.body.map((para) => (
                  <p
                    key={para}
                    className="text-espresso-soft mt-5 text-base leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Say Hello"
        headline="We would love to hear your story."
        body="Tell us about the two of you and what you are dreaming up."
        cta="Inquire"
      />
    </>
  );
}
