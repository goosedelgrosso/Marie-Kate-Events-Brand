"use client";

import { useState } from "react";
import { PlaceholderNote } from "./ui";

const services = [
  "Full-Service Planning",
  "Partial Planning",
  "Month-of Coordination",
  "Wedding Day Coordination",
  "A la carte add-ons",
  "Not sure yet",
];

const sources = [
  "Instagram",
  "A friend or family member",
  "Our venue",
  "Another vendor",
  "Google",
  "Somewhere else",
];

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="label text-espresso-soft">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

/**
 * Inquiry form. Submission is not wired to a backend yet.
 *
 * To make it live, pick one and replace the handler below:
 *   - Formspree: POST the FormData to https://formspree.io/f/<id>
 *   - Resend + a Next route handler at /api/inquire, sending to the
 *     founders' business email
 * Either way, keep the same fields so nothing here has to change.
 */
export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border-taupe/50 flex flex-col items-center gap-6 border px-8 py-24 text-center">
        <p className="script text-taupe text-5xl">thank you</p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Your inquiry is on its way.
        </h2>
        <p className="text-espresso-soft max-w-md">
          We read every one of these ourselves, and we will be back to you
          within a few days. In the meantime, congratulations. This is a good
          season.
        </p>
        <PlaceholderNote className="mt-4">
          Demo only. Nothing was actually sent.
        </PlaceholderNote>
      </div>
    );
  }

  return (
    <form
      className="grid gap-x-10 gap-y-9 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <Field label="Your name">
        <input name="name" required className="field" placeholder="First and last" />
      </Field>

      <Field label="Partner's name">
        <input
          name="partner"
          required
          className="field"
          placeholder="First and last"
        />
      </Field>

      <Field label="Email">
        <input
          name="email"
          type="email"
          required
          className="field"
          placeholder="you@email.com"
        />
      </Field>

      <Field label="Phone">
        <input
          name="phone"
          type="tel"
          className="field"
          placeholder="(000) 000-0000"
        />
      </Field>

      <Field label="Wedding date">
        <input
          name="date"
          type="date"
          className="field"
          aria-label="Wedding date"
        />
      </Field>

      <Field label="Venue">
        <input
          name="venue"
          className="field"
          placeholder="Booked, or where you are looking"
        />
      </Field>

      <Field label="Estimated guest count">
        <input name="guests" className="field" placeholder="A rough number is fine" />
      </Field>

      <Field label="Estimated budget">
        <input name="budget" className="field" placeholder="A range is fine" />
      </Field>

      <Field label="Which service are you interested in?">
        <select name="service" className="field" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="How did you find us?">
        <select name="source" className="field" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {sources.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your wedding!" full>
        <textarea
          name="message"
          rows={5}
          required
          className="field resize-none"
          placeholder="How you met, what you are picturing, what you are most excited about, what is stressing you out. All of it."
        />
      </Field>

      <div className="flex flex-col items-start gap-5 sm:col-span-2">
        <button
          type="submit"
          className="label border-espresso bg-espresso text-ivory hover:bg-espresso/0 hover:text-espresso border px-10 py-4 transition-colors duration-500"
        >
          Send Your Inquiry &rarr;
        </button>
        <PlaceholderNote>
          Demo form. Not connected to email yet.
        </PlaceholderNote>
      </div>
    </form>
  );
}
