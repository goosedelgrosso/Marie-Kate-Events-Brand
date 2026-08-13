export type GallerySection = {
  title: string;
  /** Photo placeholder labels. Replace with real images when they exist. */
  frames: string[];
};

export type PortfolioEntry = {
  slug: string;
  /** Concept name for styled shoots, couple names once real weddings exist. */
  title: string;
  meta: string;
  /** Marks styled shoot concepts that have not been shot yet. */
  concept: boolean;
  teaser: string;
  vision: string;
  cover: string;
  sections: GallerySection[];
};

/**
 * PLACEHOLDER PORTFOLIO. These are the four styled shoot concepts from the
 * brand brief. None of them have been shot yet. No real weddings are
 * represented here, and none should be added until they actually happen.
 */
export const portfolio: PortfolioEntry[] = [
  {
    slug: "the-garden-party",
    title: "The Garden Party",
    meta: "Styled shoot concept",
    concept: true,
    teaser: "Long tables under trees, loose garden florals, late afternoon light.",
    vision:
      "A wedding that feels like an afternoon in someone's grandmother's garden, if that garden happened to be set for eighty people. Loose, unfussy florals in cream and butter yellow. Mismatched glassware. Linen that moves. The whole thing built around the hour when the light goes gold and nobody wants to leave the table.",
    cover: "Film photo: long table under trees, garden florals, gold light",
    sections: [
      {
        title: "The Ceremony",
        frames: [
          "Film photo: ceremony aisle lined with potted greenery",
          "Film photo: vows, hands held, soft focus",
          "Film photo: guests seated on wooden chairs from behind",
        ],
      },
      {
        title: "The Details",
        frames: [
          "Film photo: invitation suite on linen with pressed flowers",
          "Film photo: place card and butter yellow taper candle",
          "Film photo: loose garden bouquet on a stone ledge",
        ],
      },
      {
        title: "The Reception",
        frames: [
          "Film photo: long table set for eighty, overhead",
          "Film photo: champagne pour, mismatched glassware",
          "Film photo: cake with fresh garden florals",
        ],
      },
      {
        title: "The Moments",
        frames: [
          "Film photo: first dance under string lights",
          "Film photo: candid laughter at the table",
          "Film photo: sparkler exit, grainy and warm",
        ],
      },
    ],
  },
  {
    slug: "the-mountain-wedding",
    title: "The Mountain Wedding",
    meta: "Styled shoot concept",
    concept: true,
    teaser: "Sage, stone, and a canyon that does most of the decorating for you.",
    vision:
      "When the setting is this good, the design gets out of the way. Muted sage and warm stone, textural greenery, wool and wood. A ceremony that lets the canyon be the backdrop and a reception that pulls everyone in close once the temperature drops.",
    cover: "Film photo: canyon ceremony, mountains behind the couple",
    sections: [
      {
        title: "The Ceremony",
        frames: [
          "Film photo: aisle with the canyon behind",
          "Film photo: couple framed wide against the mountain",
          "Film photo: ring exchange, close and quiet",
        ],
      },
      {
        title: "The Details",
        frames: [
          "Film photo: sage and stone tablescape detail",
          "Film photo: wool blankets on guest chairs",
          "Film photo: handwritten vow book on a rock",
        ],
      },
      {
        title: "The Reception",
        frames: [
          "Film photo: tented reception at blue hour",
          "Film photo: toast under warm bistro lighting",
          "Film photo: dinner service, hands and plates",
        ],
      },
      {
        title: "The Moments",
        frames: [
          "Film photo: couple walking the ridge at sunset",
          "Film photo: guests wrapped in blankets, laughing",
          "Film photo: last dance, motion blur",
        ],
      },
    ],
  },
  {
    slug: "the-backyard-wedding",
    title: "The Backyard Wedding",
    meta: "Styled shoot concept",
    concept: true,
    teaser: "Small, personal, and held somewhere that already means something.",
    vision:
      "Proof that intimate does not mean casual. A backyard, forty of the people who matter most, and a level of care usually reserved for a ballroom. Bare bulbs strung overhead, a family table, food passed hand to hand.",
    cover: "Film photo: backyard reception, string lights at dusk",
    sections: [
      {
        title: "The Ceremony",
        frames: [
          "Film photo: ceremony under a backyard tree",
          "Film photo: guests standing close, no aisle",
          "Film photo: first kiss, candid reaction behind",
        ],
      },
      {
        title: "The Details",
        frames: [
          "Film photo: handwritten menu at each seat",
          "Film photo: garden flowers in a vintage vase",
          "Film photo: worn wooden table with linen runner",
        ],
      },
      {
        title: "The Reception",
        frames: [
          "Film photo: family style dinner, dishes passed",
          "Film photo: string lights overhead at dusk",
          "Film photo: toast given from the head of the table",
        ],
      },
      {
        title: "The Moments",
        frames: [
          "Film photo: dancing on the grass, shoes off",
          "Film photo: grandparents watching from the porch",
          "Film photo: couple slipping away at the end of the night",
        ],
      },
    ],
  },
  {
    slug: "the-black-tie-affair",
    title: "The Black-Tie Affair",
    meta: "Styled shoot concept",
    concept: true,
    teaser: "Espresso, ivory, candlelight, and nothing left to chance.",
    vision:
      "Formal without being cold. Deep espresso and ivory, tall tapers, heavy silver, florals kept tight and architectural. A reception built for a long dinner and a later night, where every place setting looks considered because it was.",
    cover: "Film photo: candlelit ballroom table, tall tapers",
    sections: [
      {
        title: "The Ceremony",
        frames: [
          "Film photo: ceremony aisle lined in candlelight",
          "Film photo: processional, wide and formal",
          "Film photo: vows exchanged, tight crop",
        ],
      },
      {
        title: "The Details",
        frames: [
          "Film photo: letterpress invitation with wax seal",
          "Film photo: silver flatware and ivory napkin",
          "Film photo: architectural florals, tight and low",
        ],
      },
      {
        title: "The Reception",
        frames: [
          "Film photo: candlelit table, overhead",
          "Film photo: champagne tower detail",
          "Film photo: band and dance floor, wide",
        ],
      },
      {
        title: "The Moments",
        frames: [
          "Film photo: first dance in an empty ballroom",
          "Film photo: guests in black tie, candid",
          "Film photo: late night, jackets off, dancing",
        ],
      },
    ],
  },
];

export const featured = portfolio[1];
