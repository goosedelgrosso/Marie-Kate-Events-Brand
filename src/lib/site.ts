/**
 * Business details. Several of these are still open questions with the
 * founders (see BRAND-BRIEF.md section 17), so they render as visible
 * placeholders until confirmed.
 */
export const site = {
  name: "Marie Kate Events",
  tagline: "Thoughtful celebrations, beautifully brought to life.",
  url: "https://mariekateevents.com",
  instagram: "@mariekate.events",
  instagramUrl: "https://instagram.com/mariekate.events",
  // PLACEHOLDER: confirm business email with founders
  email: "hello@mariekateevents.com",
  // PLACEHOLDER: confirm service area (Utah only, or willing to travel)
  location: "Utah",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
  { label: "Inquire", href: "/inquire" },
] as const;
