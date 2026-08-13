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
  photo: string;
};

export const services: Service[] = [
  {
    slug: "full-service-planning",
    number: "01",
    name: "Full-Service Planning",
    short:
      "From the first idea to the last dance, we're beside you through every detail.",
    intro:
      "This is the whole thing, start to finish. You bring the two of you and the life you want to celebrate, and we handle the rest. We help you find the venue, build the budget, choose the vendors, shape the design, and carry every conversation from the first phone call through the last song of the night. It is the option for couples who want a planner, a designer, and a sounding board all at once.",
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
    photo: "Film photo: planning notes, fabric swatches, ring box",
  },
  {
    slug: "partial-planning",
    number: "02",
    name: "Partial Planning",
    short: "You've got the vision. We'll help bring the pieces together.",
    intro:
      "Some couples already know exactly what they want. Maybe the venue is booked and a few vendors are locked in, and what you actually need is someone to pick up the rest and carry it across the finish line. Partial planning is built around wherever you are. We step in, look at what is done, and take on the pieces that are still open.",
    includes: [
      "Planning kickoff and a review of everything booked so far",
      "Vendor recommendations for the roles still unfilled",
      "Vendor communication from the point we step in",
      "Design support and refinement of your existing vision",
      "Budget review",
      "Timeline building",
      "Rehearsal coordination",
      "Full wedding day management, setup, and breakdown",
    ],
    photo: "Film photo: bride's shoes and invitation suite on linen",
  },
  {
    slug: "month-of-coordination",
    number: "03",
    name: "Month-of Coordination",
    short:
      "You've planned the celebration. We'll make sure it all comes together seamlessly.",
    intro:
      "You have done the planning yourself, and you have done it well. What is left is the handoff. We come in roughly six weeks out, learn everything you have built, and take the logistics off your plate so the last month before your wedding feels like anticipation instead of admin.",
    groups: [
      {
        title: "Six weeks out",
        items: [
          "Full handoff meeting where you walk us through everything",
          "Review of every vendor contract",
          "We become the point of contact for all of your vendors",
          "Detailed wedding day timeline built and shared with everyone",
          "Floor plan and layout finalized",
        ],
      },
      {
        title: "Wedding week",
        items: [
          "Final vendor confirmations",
          "Timeline distributed to your vendor team and wedding party",
          "Final walkthrough at the venue",
          "Rehearsal coordination",
          "Collection of all personal items, signage, and details",
        ],
      },
      {
        title: "Wedding day",
        items: [
          "On site from setup through breakdown",
          "Full vendor management",
          "Setup of all personal details and decor",
          "Timeline management for the entire day",
          "Wedding party and family cues",
          "Quiet problem solving before you ever hear about it",
          "Breakdown and return of personal items",
        ],
      },
    ],
    photo: "Film photo: tablescape detail, candles and menu cards",
  },
  {
    slug: "wedding-day-coordination",
    number: "04",
    name: "Wedding Day Coordination",
    short:
      "Your only job is to enjoy the day. We'll handle everything happening behind the scenes.",
    intro:
      "For the couple who has it handled and simply does not want to be the one running the day. We arrive about two weeks out, learn your plan, and then own the wedding day itself so that nobody in your family is answering vendor questions in their nice clothes.",
    groups: [
      {
        title: "What is included",
        items: [
          "Planning call two weeks before the wedding",
          "Wedding day timeline built from your plans",
          "Vendor confirmations in the final week",
          "Rehearsal coordination",
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
          "Rental ordering and management",
          "Ongoing planning support in the months before the wedding",
        ],
      },
    ],
    photo: "Film photo: candid dancing, movement and blur",
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
