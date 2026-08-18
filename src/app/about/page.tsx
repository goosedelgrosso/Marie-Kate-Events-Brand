import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ClosingCta, PlaceholderNote, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Lexi Marie and Maddy Kate, the two best friends behind Marie Kate Events.",
};

const story = [
  {
    heading: "How we got here",
    body: [
      "We met in seventh grade and have been side by side ever since. We spent four years on the mountain bike team together, and at sixteen, we found our way into the wedding industry as caterers. Soon after, we became hostesses and never really left.",
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

/** PLACEHOLDER BIOS AND ROLES. Awaiting the founders' own words. */
const each = [
  {
    name: "Lexi Marie",
    role: "Placeholder role",
    body: "A short, warm paragraph about who she is, what she is like to work with, and what she brings to a wedding. Not a resume. Something a bride reads and thinks, I want her there.",
    photo: "Film photo: Lexi, candid portrait",
  },
  {
    name: "Maddy Kate",
    role: "Placeholder role",
    body: "The same for Maddy. Where their strengths differ is the interesting part, because it explains why hiring the two of them is different from hiring one planner.",
    photo: "Film photo: Maddy, candid portrait",
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
            alt="The two founders of Marie Kate Events, sitting together"
            ratio="16/9"
            position="center 55%"
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
                <PlaceholderImage
                  label={person.photo}
                  ratio="4/5"
                  tone={i === 0 ? "ivory" : "sage"}
                  quiet
                />
                <h3 className="font-display mt-8 text-3xl">{person.name}</h3>
                <p className="label text-taupe mt-2">{person.role}</p>
                <p className="text-espresso-soft mt-5 text-base leading-relaxed">
                  {person.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <PlaceholderNote>
              Placeholder bios and roles, to be confirmed with the founders
            </PlaceholderNote>
          </Reveal>
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
