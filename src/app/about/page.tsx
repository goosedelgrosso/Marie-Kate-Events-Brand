import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import { ClosingCta, PlaceholderNote, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Maddy and Lexi, the two best friends behind Marie Kate Events.",
};

/**
 * PLACEHOLDER COPY. Written as a starting point in the founders' voice, not as
 * finished copy. Maddy and Lexi should rewrite this in their own words. See
 * BRAND-BRIEF.md section 8 for what it needs to cover.
 */
const story = [
  {
    heading: "How we got here",
    body: [
      "We met the way most good friendships start, which is to say by accident and then all at once. Somewhere between late nights and a lot of shared calendars, we figured out that the thing we both loved most was pulling people together and making the room feel like something.",
      "Weddings were the natural place for that to land. Not the spectacle of them, the people. The grandmother who has been waiting for this day. The friend who flew in overnight. The ten minutes right before the ceremony when everything goes quiet.",
    ],
  },
  {
    heading: "What we actually do for you",
    body: [
      "The honest version is that we take the weight of it. We are the ones emailing the florist, rebuilding the timeline when the ceremony shifts twenty minutes, and quietly fixing the thing you never find out went wrong.",
      "What we want for you is simple. We want you to get to the end of your wedding day and realize you were fully in it the entire time.",
    ],
  },
];

const each = [
  {
    name: "Maddy",
    role: "Placeholder role",
    body: "A short, warm paragraph about who she is, what she is like to work with, and what she brings to a wedding. Not a resume. Something a bride reads and thinks, I want her there.",
    photo: "Film photo: Maddy, candid portrait",
  },
  {
    name: "Lexi",
    role: "Placeholder role",
    body: "The same for Lexi. Where their strengths differ is the interesting part, because it explains why hiring the two of them is different from hiring one planner.",
    photo: "Film photo: Lexi, candid portrait",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        script="hello there"
        title="Meet Maddy + Lexi"
        intro="Two best friends who cannot walk past a beautifully set table without stopping."
      />

      <section className="px-6 pb-24 sm:px-10">
        <Reveal className="mx-auto max-w-[1200px]">
          <PlaceholderImage
            label="Editorial film photo: Maddy and Lexi together, full width"
            ratio="16/9"
            tone="taupe"
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
          <PlaceholderNote>
            Placeholder copy, to be rewritten by the founders
          </PlaceholderNote>
        </div>
      </section>

      <section className="bg-white px-6 py-28 sm:px-10 sm:py-40">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <SectionLabel align="center">The Two of Us</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl">
              Better together, honestly
            </h2>
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

      <section className="px-6 py-28 sm:px-10 sm:py-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-3xl leading-snug italic sm:text-4xl">
            We are not selling timelines and vendor emails. We are selling the
            feeling of getting to be a guest at your own wedding.
          </p>
        </Reveal>
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
