import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PlaceholderImage from "@/components/PlaceholderImage";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { PlaceholderNote, SectionLabel } from "@/components/ui";
import LeadMagnet from "@/components/LeadMagnet";
import { posts, upcoming } from "@/content/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Wedding planning advice, timelines, and honest answers from Marie Kate Events.",
};

const tones = ["ivory", "sage", "taupe"] as const;

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Everything we tell our couples"
        intro="The advice we find ourselves repeating, written down so you can have it whether or not you ever hire us."
      />

      <section className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal as="article" key={post.slug} delay={i * 90}>
                <Link href={`/journal/${post.slug}`} className="block">
                  {post.image ? (
                    <Photo
                      src={post.image}
                      alt={post.title}
                      ratio="4/3"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <PlaceholderImage
                      label={post.cover}
                      ratio="4/3"
                      tone={tones[i % 3]}
                      quiet
                    />
                  )}
                  <div className="mt-6 flex items-center gap-3">
                    <span className="label text-taupe">{post.category}</span>
                    <span className="bg-taupe/60 h-px w-5" />
                    <span className="label text-espresso-soft">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display mt-4 text-2xl leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-espresso-soft mt-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.draft && (
                    <PlaceholderNote className="mt-4">
                      Draft, not yet written
                    </PlaceholderNote>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel align="center">Coming Next</SectionLabel>
          </Reveal>
          <ul className="mt-12 grid gap-5">
            {upcoming.map((title, i) => (
              <Reveal as="li" key={title} delay={i * 60}>
                <div className="border-taupe/40 flex items-baseline gap-5 border-b pb-5">
                  <span className="label text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-espresso-soft text-xl">
                    {title}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <LeadMagnet />
    </>
  );
}
