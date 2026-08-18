"use client";

import { useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { SectionLabel, PlaceholderNote } from "./ui";
import { guideContents } from "@/content/site-copy";

/**
 * Free wedding guide lead magnet. The email capture is not wired to anything
 * yet. Connect it to whatever list the founders choose (Flodesk, ConvertKit,
 * Mailchimp) by posting `email` to that provider's form endpoint here.
 */
export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-ivory-deep px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal>
          <Photo
            src="/photos/free-guide.jpg"
            alt="The two founders of Marie Kate Events, each holding a laptop"
            ratio="1/1"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>Free Guide</SectionLabel>
          <h2 className="font-display mt-8 text-4xl leading-tight sm:text-5xl">
            Just engaged? We&rsquo;ve got you.
          </h2>
          <p className="text-espresso-soft mt-6 text-base">
            Download The Marie Kate Wedding Planning Guide, free. Everything we
            wish every couple had in front of them during the first month.
          </p>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {guideContents.map((item) => (
              <li
                key={item}
                className="text-espresso-soft flex items-start gap-3 text-sm"
              >
                <span className="bg-sage mt-2.5 h-px w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {done ? (
            <p className="font-display mt-10 text-2xl italic">
              Check your inbox. The guide is on its way.
            </p>
          ) : (
            <form
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label className="flex-1">
                <span className="label text-espresso-soft">Email address</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="field mt-2"
                />
              </label>
              <button
                type="submit"
                className="label border-espresso/40 hover:bg-espresso hover:text-ivory border px-8 py-4 whitespace-nowrap transition-colors duration-500"
              >
                Get the Free Guide &rarr;
              </button>
            </form>
          )}

          <PlaceholderNote className="mt-6">
            Demo only. Not connected to an email list yet.
          </PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
