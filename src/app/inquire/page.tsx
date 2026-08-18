import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { SectionLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Tell us about your love story, your plans, and the celebration you are dreaming about.",
};

export default function InquirePage() {
  return (
    <>
      <PageHero
        eyebrow="Inquire"
        script="hello"
        title="Let's make something beautiful."
        intro="Tell us a little about your love story, your plans, and the celebration you're dreaming about. We'd love to hear all about it."
      />

      <section className="px-6 pb-28 sm:px-10 sm:pb-40">
        <div className="mx-auto grid max-w-[1300px] items-start gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
          <Reveal>
            <InquiryForm />
          </Reveal>

          <Reveal delay={140} className="lg:sticky lg:top-32">
            <PlaceholderImage
              label="Film photo: Lexi and Maddy laughing, at Studios"
              ratio="4/5"
              tone="taupe"
            />

            <div className="mt-10">
              <SectionLabel>What Happens Next</SectionLabel>
              <ol className="mt-7 grid gap-6">
                {[
                  "We read your inquiry and reply within a few days.",
                  "We hop on a call to hear about the two of you and answer everything.",
                  "We send a proposal built around what you actually need.",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="label text-taupe pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-espresso-soft text-sm leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="bg-taupe/50 my-9 h-px w-full" />

              <p className="text-espresso-soft text-sm">
                Prefer email? Write to us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="link-rule text-espresso"
                >
                  {site.email}
                </a>
                .
              </p>
              <p className="text-espresso-soft mt-3 text-sm">
                Find us on Instagram at{" "}
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-rule text-espresso"
                >
                  {site.instagram}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
