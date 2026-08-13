export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  cover: string;
  /** True until the founders write and approve the real post. */
  draft: boolean;
  sections?: { heading: string; body: string[] }[];
};

/**
 * PLACEHOLDER JOURNAL. Titles come from the starter list in the brand brief.
 * The one written post below is a structural sample so the founders can see
 * the layout. Every word of it should be replaced with their own.
 */
export const posts: JournalPost[] = [
  {
    slug: "10-things-to-do-after-getting-engaged",
    title: "10 Things to Do After Getting Engaged",
    category: "Just Engaged",
    readTime: "6 min read",
    excerpt:
      "Before the spreadsheets and the venue tours, there are a few things worth doing first. Here is where we tell every newly engaged couple to start.",
    cover: "Film photo: ring on hand, soft window light",
    draft: true,
    sections: [
      {
        heading: "Sample post layout",
        body: [
          "This page exists to show the structure of a journal post. The headings, the pacing, the way images break up the text, and where the call to action lands at the bottom.",
          "The real writing should come from Maddy and Lexi. It sounds better in their voice, and Google rewards writing that actually answers what someone typed into the search bar.",
        ],
      },
      {
        heading: "1. Take a week before you tell the internet",
        body: [
          "Placeholder body copy. A short, warm paragraph that reads like advice from a friend rather than a listicle. Two or three sentences is usually enough before moving to the next point.",
        ],
      },
      {
        heading: "2. Talk about the guest list before the venue",
        body: [
          "Placeholder body copy. This is the point where a planner's perspective is genuinely useful, because most couples do it in the opposite order and end up locked into a room that does not fit their people.",
        ],
      },
    ],
  },
  {
    slug: "wedding-planner-vs-wedding-coordinator",
    title: "Wedding Planner vs. Wedding Coordinator: What's the Difference?",
    category: "Planning 101",
    readTime: "5 min read",
    excerpt:
      "The two get used interchangeably, and they are not the same job. Here is what each one actually does, and how to know which one you need.",
    cover: "Film photo: timeline and pen on a linen tablecloth",
    draft: true,
  },
  {
    slug: "utah-wedding-planning-timeline",
    title: "Our Ultimate Utah Wedding Planning Timeline",
    category: "Planning 101",
    readTime: "9 min read",
    excerpt:
      "Twelve months, broken down month by month, so you always know what should be happening and what can wait.",
    cover: "Film photo: calendar, coffee, and a stack of samples",
    draft: true,
  },
];

/** Remaining starter ideas from the brief, shown as what is coming next. */
export const upcoming = [
  "How Much Does a Wedding Planner Cost in Utah?",
  "The Ultimate Wedding Vendor Checklist",
  "How to Create a Wedding Budget",
  "Our Favorite Utah Wedding Venues",
  "What to Do 30 Days Before Your Wedding",
];
