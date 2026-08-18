export type Service = {
  slug: string;
  number: string;
  name: string;
  short: string;
  /** Longer positioning paragraph for the services page. */
  intro: string;
  /** Optional grouped detail, used where the timing needs to be explicit. */
  groups?: { title: string; items: string[] }[];
  includes?: string[];
  /** Placeholder label, used until `image` exists. */
  photo: string;
  /** Real photo under /public. Frames without one still render a placeholder. */
  image?: string;
};

export const services: Service[] = [
  {
    slug: "full-service-planning",
    number: "01",
    name: "Full-Service Planning",
    short:
      "From the first idea to the last dance, we're beside you through every detail.",
    intro:
      "This is the whole thing, start to finish. You bring the two of you and the life you want to celebrate, and we handle the rest. We help you find the venue, build the budget, choose the vendors, shape the design, and carry every conversation from the first phone call through the last song of the night.",
    includes: [
      "Initial consultation",
      "Budget development and tracking",
      "Venue sourcing and site visits",
      "Vendor recommendations and bookings",
      "All vendor communication",
      "Contract management",
      "Design direction and concept",
      "Color palette and styling",
      "Floor plan and layout",
      "Rental selection and coordination",
      "Full wedding timeline",
      "Guest experience planning",
      "Stationery guidance",
      "Rehearsal coordination",
      "Wedding day management",
      "Setup and breakdown",
    ],
    photo: "Studio photo: Lexi and Maddy planning on the floor, laptop and Marie Kate stationery",
    image: "/photos/full-service.jpg",
  },
  {
    slug: "partial-planning",
    number: "02",
    name: "Partial Planning",
    short: "You've got the vision. We'll help bring the pieces together.",
    intro:
      "Some couples already know exactly what they want. Maybe the venue is booked and a few vendors are locked in, and what you actually need is someone to pick up the rest and carry it across the finish line. Our partial planning package gives you three months of hands-on planning and coordination with us, where we step in alongside you to bring all the remaining details together and make sure everything is ready for the big day.",
    includes: [
      "Planning kickoff and a review of everything booked so far",
      "Vendor recommendations for the roles still unfilled",
      "Vendor communication from the point we step in",
      "Floor plan and layout",
      "Timeline building",
      "Rehearsal coordination",
      "Full wedding day management, setup, and breakdown",
    ],
    photo: "Film photo: from a wedding day",
  },
  {
    slug: "wedding-day-coordination",
    number: "03",
    name: "Wedding Day Coordination",
    short:
      "Your only job is to enjoy the day. We'll handle everything happening behind the scenes.",
    intro:
      "For the couple who has it handled and simply does not want to be the one running the day. We step in the week of, learn your plan, connect with your vendors, and take over the details so you can simply enjoy your wedding day.",
    groups: [
      {
        title: "What is included",
        items: [
          "Go over your timeline",
          "Vendor confirmations in the final week",
          "Day of rehearsal coordination",
          "On site the entire wedding day",
          "Setup of your personal details and decor",
          "Vendor and timeline management all day",
          "Breakdown and return of personal items",
        ],
      },
      {
        title: "What is not included",
        items: [
          "Vendor sourcing, recommendations, or bookings",
          "Budget development",
          "Design direction or styling concepts",
          "Ongoing planning support in the months before the wedding",
        ],
      },
    ],
    photo: "Studio photo: Lexi and Maddy holding bridal magazines in front of their faces",
    image: "/photos/day-of.jpg",
  },
  {
    slug: "other-than-weddings",
    number: "04",
    name: "Other Than Weddings",
    short:
      "Need help other than a wedding? We've got you! We love celebrating all of life's special moments.",
    // AI-DRAFTED INTRO. Written at the founders' request, pending their approval.
    intro:
      "Not every celebration is a wedding. Bridal showers, bachelorette parties, baby showers, birthdays, engagement parties, and everything in between get the same care we bring to a wedding day. We take on the planning, the details, and the run of the day itself, so you get to actually enjoy the party you are throwing.",
    photo: "Film photo: the group on the Bach trip",
  },
];

export type AddOnGroup = { title: string; items: string[] };

export const addOns: AddOnGroup[] = [
  {
    title: "Wedding weekend",
    items: ["Rehearsal dinner", "Welcome party", "Farewell brunch"],
  },
  {
    title: "Celebrations",
    items: [
      "Bridal showers",
      "Baby showers",
      "Birthday parties",
      "Engagement parties",
      "Bachelorette parties",
    ],
  },
  {
    title: "Design",
    items: [
      "Tablescape design",
      "Signage",
      "Place cards",
      "Menus",
      "Welcome displays",
      "Custom details",
    ],
  },
  {
    title: "Coordination",
    items: [
      "Setup",
      "Breakdown",
      "Vendor management",
      "Personal assistant",
      "Guest management",
    ],
  },
];
