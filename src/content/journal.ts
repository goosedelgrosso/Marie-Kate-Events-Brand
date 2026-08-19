export type JournalSection = {
  /** Optional so a section can be a lede with no heading above it. */
  heading?: string;
  body?: string[];
  /** Bulleted items, rendered after the body paragraphs. */
  list?: string[];
  /** Set-aside callout, e.g. the Utah tips in the timeline post. */
  note?: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  cover: string;
  /** Real photo under /public. Posts without one still render a placeholder. */
  image?: string;
  /** True until the founders write and approve the real post. */
  draft: boolean;
  sections?: JournalSection[];
};

/**
 * The first three posts, written by Maddy and Lexi. Source documents live in
 * ../../../assets. Copy is theirs, transcribed as written, with em dashes
 * converted to standard punctuation per the project style rule.
 */
export const posts: JournalPost[] = [
  {
    slug: "10-things-to-do-after-getting-engaged",
    title: "10 Things to Do After Getting Engaged",
    category: "Just Engaged",
    readTime: "4 min read",
    excerpt:
      "Before the Pinterest boards, venue tours, spreadsheets, and group texts begin, give yourselves a minute to actually enjoy it. Here is where we tell every newly engaged couple to start.",
    cover: "Film photo: the moment of getting engaged",
    image: "/photos/journal-engaged.jpg",
    draft: false,
    sections: [
      {
        body: [
          "Getting engaged is one of those moments you'll remember forever. Before the Pinterest boards, venue tours, spreadsheets, and group texts begin, give yourselves a minute to actually enjoy it.",
          "After working in the wedding and events industry for years, we've seen couples jump straight into planning before they've had a chance to slow down and think about what they actually want. So before you start booking anything, here are the first 10 things we recommend doing after getting engaged.",
        ],
      },
      {
        heading: "1. Take a day before you tell the internet",
        body: [
          "You don't have to post your engagement the second it happens. Take a day to celebrate just the two of you, call the people closest to you, and let the excitement sink in. Then when you're ready, share it with the world! You'll have plenty of time for the ring photos, the Instagram post, and answering “when's the wedding?” questions.",
        ],
      },
      {
        heading: "2. Talk about the guest list before the venue",
        body: [
          "This is one of the biggest things we tell couples to figure out early. Before you fall in love with a venue, talk honestly about who you want there. Are you picturing 50 of your favorite people, 150 guests, or a full room with everyone you know?",
          "Your guest count affects almost everything else: your venue, budget, catering, rentals, and overall feel of the day. It's much easier to choose a venue that fits your guest list than to fall in love with a space and then realize half of your people won't fit.",
        ],
      },
      {
        heading: "3. Have a real conversation about your budget",
        body: [
          "This might not be the most exciting conversation, but it is one of the most important. Talk about what you're comfortable spending, who is contributing, and what you actually want your money to go toward.",
          "Your wedding doesn't need to look like anyone else's. A clear budget gives you the freedom to spend intentionally instead of constantly feeling like you're trying to catch up with your Pinterest board.",
        ],
      },
      {
        heading: "4. Figure out what you want your wedding to feel like",
        body: [
          "Before choosing colors or making a mood board, ask yourselves a bigger question: How do we want our wedding to feel?",
          "Maybe you want it to feel romantic and timeless. Maybe it's colorful, fun, and full of personality. Maybe you want a backyard dinner party feeling with your closest people. There is no right answer.",
          "Once you know the feeling you're going for, the smaller decisions become so much easier.",
        ],
      },
      {
        heading: "5. Decide on a general date or season",
        body: [
          "You don't need to pick an exact date immediately. Start by deciding what season feels right and whether there are any dates or timeframes that are especially important to you.",
          "Keep in mind that your preferred season can affect venue availability, pricing, florals, photography, and even the overall look of your wedding. Having a general timeframe will make the rest of your planning much easier.",
        ],
      },
      {
        heading: "6. Don't book the first vendor you talk to",
        body: [
          "It's easy to get excited and start booking everything as soon as you're engaged. But take a breath.",
          "Do some research, talk to multiple vendors, look at full galleries and real weddings, and pay attention to how you feel when you communicate with them. Your vendors are going to be a huge part of your wedding experience, so you want people you genuinely trust and enjoy being around.",
        ],
      },
      {
        heading: "7. Start with the vendors that book up first",
        body: [
          "Not every vendor needs to be booked at the same time. Your venue, photographer, and planner or coordinator are usually some of the first vendors we recommend prioritizing, especially if you have a specific person or date in mind.",
          "Once those bigger pieces are in place, the rest of the wedding starts to come together much more naturally.",
        ],
      },
      {
        heading: "8. Make a Pinterest board, but don't let Pinterest plan your wedding",
        body: [
          "Yes, make the board. Save the dress. Screenshot the flowers. Pin the tablescape.",
          "But don't feel like you need to recreate someone else's wedding exactly. Use Pinterest to figure out what you're drawn to, then step away from it and make the ideas your own.",
          "The best weddings aren't always the ones that perfectly follow a trend. They're the ones where you can tell exactly who the couple is.",
        ],
      },
      {
        heading: "9. Enjoy being engaged before you become wedding planners",
        body: [
          "This one is easy to forget.",
          "You are allowed to have a season where your only job is being engaged. Go on a date. Celebrate with your families. Take pictures. Wear the ring. Talk about your future together without immediately turning the conversation into a seating chart.",
          "Wedding planning can become all-consuming if you let it. Give yourselves permission to enjoy this part, too.",
        ],
      },
      {
        heading: "10. Remember that the wedding is about more than the wedding",
        body: [
          "At the end of all the decisions, deposits, timelines, and details, you're still getting married.",
          "When you feel overwhelmed by whether the napkins are the right color or whether you should add one more centerpiece, zoom back out. Think about the people who will be standing beside you, the person you're marrying, and the life you're starting together.",
          "That's the part you'll remember.",
        ],
      },
      {
        heading: "One last thing from us",
        body: [
          "There is no perfect way to start planning a wedding. You don't have to have everything figured out right away, and you definitely don't need to make every decision at once.",
          "Start with the things that matter most to you two, take it one step at a time, and let the rest come together from there.",
          "You only get to be engaged once. Enjoy it before you plan it.",
        ],
      },
    ],
  },
  {
    slug: "wedding-planner-vs-wedding-coordinator",
    title: "Wedding Planner vs. Wedding Coordinator: What's the Difference?",
    category: "Planning 101",
    readTime: "3 min read",
    excerpt:
      "The two get used interchangeably, and they are not the same job. The biggest difference is when they step in and how involved they are along the way.",
    cover: "Film photo: Maddy laying on the ground",
    image: "/photos/journal-planner-vs-coordinator.jpg",
    draft: false,
    sections: [
      {
        body: [
          "If you've started planning a wedding, you've probably heard the words planner and coordinator thrown around like they mean the same thing. They don't.",
          "While both can be a huge help on your wedding day, the biggest difference is when they step in and how involved they are throughout the planning process. Knowing the difference early can save you time, money, and a whole lot of stress.",
        ],
      },
      {
        heading: "So, what does a wedding planner actually do?",
        body: [
          "Think of your wedding planner as the person helping you build the wedding from the ground up.",
          "A full-service planner can be involved from the very beginning, helping you create a budget, choose a venue, build your vendor team, develop the overall design, manage contracts and timelines, and make decisions throughout the planning process.",
          "They're there to help you answer the big questions and the tiny ones. From figuring out how much to budget for florals to making sure your photographer, caterer, florist, and venue are all working from the same timeline, your planner is keeping track of the moving pieces so you don't have to.",
          "A planner is for the couple who wants someone beside them throughout the entire planning process.",
        ],
      },
      {
        heading: "What does a wedding coordinator do?",
        body: [
          "A coordinator typically comes in later.",
          "You may have already chosen your venue, booked your vendors, designed your invitations, and made most of the decisions yourself. Your coordinator steps in toward the final weeks or months to take everything you've planned and make sure it actually happens the way you envisioned it.",
          "They'll review your vendor contracts, create or finalize your wedding-day timeline, communicate with vendors, organize the details, and manage the wedding day itself.",
          "On your wedding day, they're the person making sure the flowers arrive, the tables are set, the vendors know where to go, the timeline stays on track, and you aren't the one answering questions while you're trying to get married.",
          "A coordinator is for the couple who wants to plan their own wedding but doesn't want to manage it on the wedding day.",
        ],
      },
      {
        heading: "What about a month-of coordinator?",
        body: [
          "This is where things can get confusing.",
          "“Month-of” coordination doesn't necessarily mean your coordinator magically appears one month before your wedding. Most coordinators will want to meet with you earlier, review your plans, and get familiar with your vendors and vision before the wedding.",
          "The exact services vary from company to company, so always ask what is included and when they officially take over.",
        ],
      },
      {
        heading: "So which one do you need?",
        body: [
          "Start by asking yourself one question: Do I want someone to help me plan my wedding, or do I want someone to help me execute the wedding I've already planned?",
          "If you want help making decisions, finding vendors, managing your budget, creating a design, and keeping everything organized from the beginning, a planner may be the better fit.",
          "If you love planning and want to make the decisions yourself but don't want to be responsible for everything once wedding week arrives, a coordinator may be exactly what you need.",
          "And honestly? There's no wrong answer.",
        ],
      },
      {
        heading: "One thing we always tell couples",
        body: [
          "Don't choose a planner or coordinator based solely on the title. Ask what their services actually include.",
          "Every company structures their packages differently, and terms like “day-of,” “month-of,” “coordination,” and “planning” can mean different things depending on who you're working with.",
          "Before booking, ask questions like:",
        ],
        list: [
          "When do you officially start working with us?",
          "How involved will you be before the wedding?",
          "Will you communicate with our vendors?",
          "Do you create our wedding-day timeline?",
          "Will you be there for the rehearsal?",
          "What exactly do you handle on the wedding day?",
          "What is not included in our package?",
        ],
      },
      {
        body: [
          "The right person should make you feel like you have one less thing to worry about, not another vendor to manage.",
          "At the end of the day, whether you hire a planner, a coordinator, or decide to plan everything yourselves, the goal is the same: you should be able to enjoy your wedding instead of managing it.",
        ],
      },
    ],
  },
  {
    slug: "utah-wedding-planning-timeline",
    title: "Our Ultimate Utah Wedding Planning Timeline",
    category: "Planning 101",
    readTime: "7 min read",
    excerpt:
      "Twelve months, broken down month by month, so you know what deserves your attention now, what can wait, and when it is time to start making the smaller decisions.",
    cover: "Film photo: Maddy holding a paper reading \"you wouldn't be stressed\"",
    image: "/photos/journal-utah-timeline.jpg",
    draft: false,
    sections: [
      {
        body: [
          "Planning a wedding can feel overwhelming because suddenly there are hundreds of things you could be doing. The good news? You don't have to do them all at once.",
          "We've created this timeline based on a 12-month Utah wedding planning process, breaking everything down month by month so you know what deserves your attention now, what can wait, and when it's time to start making those smaller decisions.",
          "Of course, every wedding is different. Some couples get engaged two years out, some plan in six months, and some vendors book much earlier than others. Use this as your guide, not a rulebook.",
        ],
      },
      {
        heading: "12 Months Out: Start With the Big Picture",
        body: [
          "This is the exciting part. You're engaged, and everything is still wide open.",
          "Start by talking about your guest count, budget, wedding style, and general location. Once you have those pieces, you can start looking at venues.",
          "Focus on:",
        ],
        list: [
          "Setting your overall wedding budget",
          "Creating an estimated guest list",
          "Choosing a wedding season or general date",
          "Touring Utah wedding venues",
          "Booking your venue",
          "Deciding whether you want a planner or coordinator",
          "Creating a wedding email address",
          "Starting a wedding inspiration board",
        ],
        note: "Utah tip: Popular Utah venues and peak-season Saturdays can book well in advance, so if you have your heart set on a specific venue or date, don't wait too long to inquire.",
      },
      {
        heading: "11 Months Out: Build Your Vendor Team",
        body: [
          "Once your venue and date are secured, start building the team that will bring your wedding to life.",
          "This is a great time to research photographers, videographers, florists, DJs or bands, and other vendors you know you want.",
          "Focus on:",
        ],
        list: [
          "Booking your photographer",
          "Booking your videographer, if desired",
          "Booking your planner or coordinator",
          "Researching florists",
          "Researching entertainment",
          "Creating a rough wedding-day timeline",
          "Starting to think about your wedding party",
        ],
        note: "Don't feel like you need to book every vendor this month. Prioritize the vendors who are most important to you and tend to book up quickly.",
      },
      {
        heading: "10 Months Out: Start Thinking About the Details",
        body: [
          "Now that the biggest pieces are in place, you can start getting more specific about your vision.",
          "Start narrowing down your colors, overall design, and the way you want the day to feel. This is also a great time to start dress shopping if you're hoping to wear a gown that requires ordering and alterations.",
          "Focus on:",
        ],
        list: [
          "Wedding dress shopping",
          "Choosing your wedding party",
          "Finalizing your wedding aesthetic",
          "Booking your florist",
          "Booking entertainment",
          "Researching rentals",
          "Starting a wedding website",
          "Creating a more detailed guest list",
        ],
      },
      {
        heading: "9 Months Out: Attire and Guest Experience",
        body: [
          "This is when your wedding starts to feel a lot more real.",
          "If you haven't already, start thinking about your wedding party's attire and the guest experience from start to finish.",
          "Focus on:",
        ],
        list: [
          "Ordering your wedding dress",
          "Choosing bridesmaid attire",
          "Choosing groom and groomsmen attire",
          "Booking rentals",
          "Researching hair and makeup",
          "Thinking about transportation",
          "Starting your honeymoon planning",
          "Choosing save-the-date designs",
        ],
        note: "This is also a good time to start thinking about your ceremony. Who will officiate? What traditions matter to you? What do you want the ceremony to feel like?",
      },
      {
        heading: "8 Months Out: Save the Dates",
        body: [
          "Time to let your guests know!",
          "Your save-the-dates are usually sent around 6 to 8 months before the wedding, especially if you have guests traveling to Utah.",
          "Focus on:",
        ],
        list: [
          "Sending save-the-dates",
          "Booking hair and makeup",
          "Booking transportation",
          "Choosing your wedding cake or dessert",
          "Researching honeymoon accommodations and travel",
          "Ordering wedding party gifts",
          "Finalizing ceremony plans",
        ],
        note: "If you're having a destination wedding or getting married during a busy Utah weekend, sending save-the-dates a little earlier can be especially helpful.",
      },
      {
        heading: "7 Months Out: Invitations and Design",
        body: [
          "Now you can start getting into the details that make your wedding feel like your wedding.",
          "Start designing your invitation suite and thinking through signage, paper goods, and other visual details.",
          "Focus on:",
        ],
        list: [
          "Ordering invitations",
          "Finalizing your wedding stationery",
          "Choosing ceremony and reception signage",
          "Finalizing rental selections",
          "Planning your floral design",
          "Choosing your cake or dessert design",
          "Continuing honeymoon planning",
        ],
        note: "This is also a good time to make sure your wedding website has the information guests will need, especially accommodations, transportation, and local recommendations.",
      },
      {
        heading: "6 Months Out: The Halfway Point",
        body: [
          "You're officially halfway there.",
          "At this point, your major vendors should be booked and your overall vision should be coming together. Now is a good time to look at what's still missing rather than adding more and more to your list.",
          "Focus on:",
        ],
        list: [
          "Sending invitations if your timeline calls for it, or finalizing them",
          "Ordering wedding rings",
          "Finalizing attire",
          "Booking rehearsal dinner plans",
          "Booking honeymoon travel",
          "Choosing ceremony music",
          "Planning reception entertainment",
          "Reviewing your budget",
        ],
        note: "Utah tip: If you're getting married outdoors, start thinking realistically about weather. Utah weather can be unpredictable, so talk with your venue about backup plans for heat, rain, wind, or unexpected weather.",
      },
      {
        heading: "5 Months Out: Personalize It",
        body: [
          "This is where the fun little details start coming together.",
          "Think about the things your guests will remember and the details that make the wedding feel personal to you.",
          "Focus on:",
        ],
        list: [
          "Finalizing menu selections",
          "Choosing signature drinks, if desired",
          "Ordering signage",
          "Planning favors or guest gifts",
          "Choosing guest book details",
          "Finalizing ceremony readings",
          "Planning personal touches",
          "Scheduling engagement photos, if you haven't already",
        ],
        note: "This is also a great time to start making a list of everything that will need to physically arrive at the venue on wedding day.",
      },
      {
        heading: "4 Months Out: Start Getting Specific",
        body: [
          "Four months out is a good time to shift from big decisions to execution.",
          "Focus on:",
        ],
        list: [
          "Finalizing floral details",
          "Confirming rentals",
          "Finalizing the ceremony",
          "Planning your rehearsal",
          "Creating your shot list for photography",
          "Planning getting-ready details",
          "Finalizing transportation",
          "Ordering any remaining personal items",
          "Scheduling dress alterations",
        ],
        note: "If you're having a larger wedding, this is also a good time to start thinking about your seating chart structure, even though you won't know the final assignments yet.",
      },
      {
        heading: "3 Months Out: Invitations and Final Details",
        body: [
          "Now things start moving quickly.",
          "If your invitations haven't gone out yet, now is the time. Your guests need enough time to RSVP, make travel arrangements, and plan accordingly.",
          "Focus on:",
        ],
        list: [
          "Sending invitations",
          "Finalizing your menu",
          "Finalizing your cake or dessert",
          "Finalizing your ceremony details",
          "Confirming all vendors",
          "Creating your wedding-day timeline",
          "Finalizing signage",
          "Planning your rehearsal dinner",
          "Purchasing wedding-day accessories",
        ],
        note: "This is also a great time to schedule your hair and makeup trial.",
      },
      {
        heading: "2 Months Out: Confirm Everything",
        body: [
          "At this point, you should be moving from planning into confirming.",
          "Go through your vendor list and make sure everyone has the correct date, venue address, arrival time, contact information, and expectations.",
          "Focus on:",
        ],
        list: [
          "Tracking RSVPs",
          "Creating your seating chart",
          "Finalizing the wedding-day timeline",
          "Confirming vendor arrival times",
          "Finalizing your ceremony",
          "Finalizing floral and rental counts",
          "Finalizing transportation",
          "Completing dress alterations",
          "Writing vows",
          "Creating your family photo list",
        ],
        note: "This is when having a planner or coordinator can make a huge difference. You should be able to hand over the details and know someone else is keeping track of what needs to happen next.",
      },
      {
        heading: "1 Month Out: Finalize and Enjoy",
        body: [
          "You're almost there.",
          "At this point, the goal isn't to keep adding things. It's to finish what you've already planned.",
          "Focus on:",
        ],
        list: [
          "Final guest count",
          "Final seating chart",
          "Final vendor confirmations",
          "Final payments and tips",
          "Final timeline",
          "Final headcount for catering",
          "Final dress fitting",
          "Preparing wedding-day items",
          "Packing your honeymoon bags",
          "Confirming your marriage license plans",
          "Giving your coordinator or planner everything they need",
        ],
        note: "And please: stop trying to reinvent your wedding one month before it happens. Your wedding does not need one more Pinterest idea. It needs you to enjoy it.",
      },
      {
        heading: "Wedding Week: Let Someone Else Handle It",
        body: [
          "This is the week you've been working toward.",
          "Your job is no longer to manage vendors, answer timeline questions, or figure out where the candles are supposed to go.",
          "Before the wedding:",
        ],
        list: [
          "Drop off personal items at the venue",
          "Give your coordinator/planner the final details",
          "Attend the rehearsal",
          "Pick up your attire",
          "Prepare your emergency kit",
          "Confirm transportation",
          "Make sure rings and marriage license are accounted for",
          "Get some sleep",
        ],
        note: "Then let your vendors do what you hired them to do.",
      },
      {
        heading: "Your Wedding Day: Be Present",
        body: [
          "You have spent the last 12 months making decisions for this one day.",
          "Now you get to actually experience it.",
          "Eat breakfast. Drink water. Take a deep breath. Hug your people. Dance. Look around the room. Take it all in.",
          "And most importantly, do not spend your wedding day worrying about the timeline. That's what your planner or coordinator is for.",
        ],
      },
      {
        heading: "One last thing from us",
        body: [
          "There is no such thing as a perfectly followed wedding timeline. You may book your photographer 12 months out or 8 months out. You may have your dress chosen before your venue. You may decide on your napkins two weeks before the wedding.",
          "That's okay.",
          "The purpose of a timeline isn't to make wedding planning stressful. It's to make it feel manageable.",
          "You don't have to plan the whole wedding today. You just have to know what comes next.",
        ],
      },
    ],
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
