import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ClosingCta, PlaceholderNote } from "@/components/ui";
import { posts } from "@/content/journal";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="px-6 pt-40 pb-14 sm:px-10 sm:pt-52">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="label text-taupe">{post.category}</span>
              <span className="bg-taupe/60 h-px w-5" />
              <span className="label text-espresso-soft">{post.readTime}</span>
            </div>
            <h1 className="font-display text-4xl leading-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="text-espresso-soft text-base sm:text-lg">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="px-6 sm:px-10">
          <Reveal className="mx-auto max-w-[1100px]">
            {post.image ? (
              <Photo src={post.image} alt={post.title} ratio="16/9" sizes="100vw" />
            ) : (
              <PlaceholderImage label={post.cover} ratio="16/9" tone="taupe" />
            )}
          </Reveal>
        </div>

        <div className="px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-2xl">
            {post.sections ? (
              <>
                {post.sections.map((section, i) => (
                  <Reveal
                    key={section.heading ?? `section-${i}`}
                    delay={i * 50}
                    className="mb-14"
                  >
                    {section.heading && (
                      <h2 className="font-display text-3xl leading-snug">
                        {section.heading}
                      </h2>
                    )}
                    {section.body?.map((p) => (
                      <p
                        key={p}
                        className="text-espresso-soft mt-5 text-base leading-[1.9] sm:text-lg"
                      >
                        {p}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="mt-6 grid gap-3">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="text-espresso-soft flex items-start gap-3 text-base"
                          >
                            <span className="bg-sage mt-3 h-px w-4 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="border-sage text-espresso-soft mt-8 border-l-2 pl-6 text-base leading-[1.9] italic">
                        {section.note}
                      </p>
                    )}
                  </Reveal>
                ))}
              </>
            ) : (
              <Reveal className="text-center">
                <p className="font-display text-3xl italic">
                  This one is still being written.
                </p>
                <p className="text-espresso-soft mt-5">
                  Get the free planning guide in the meantime, or send us a note
                  and we will answer your question directly.
                </p>
                <PlaceholderNote className="mt-8">
                  Draft post, no copy written yet
                </PlaceholderNote>
              </Reveal>
            )}

            <div className="border-taupe/40 mt-16 border-t pt-10 text-center">
              <Link href="/journal" className="label link-rule">
                Back to the Journal
              </Link>
            </div>
          </div>
        </div>
      </article>

      <ClosingCta
        eyebrow="Still Have Questions"
        headline="We are happy to answer them."
        body="Send us a note. We read every inquiry ourselves."
        cta="Inquire"
      />
    </>
  );
}
