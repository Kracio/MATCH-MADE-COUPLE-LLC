export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type IslandCard = {
  name: string;
  subtitle: string;
  href?: string;
  status?: string;
  image: ImageAsset;
};

export type ResourceCard = {
  label: string;
  href: string;
  image: ImageAsset;
};

export type Review = {
  quote: string;
  author: string;
  href: string;
};

export type Service = {
  title: string;
  kicker?: string;
  body: string;
};

const homeUrl = "https://matchmadecouple.com";

export const siteContent = {
  header: {
    logo: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2024/10/PROFILE-CIRCLE-MMC.png?fit=1280%2C1280&ssl=1",
      alt: "MATCH MADE COUPLE LLC logo",
    },
    title: "MATCH MADE COUPLE LLC",
    tagline: "MATCHING OUTFITS, UNMATCHED ADVENTURES",
    nav: [
      { label: "Home", href: "#main-content" },
      { label: "The Islands of Hawai’i", href: "#islands" },
      { label: "Resources", href: "#resources" },
      { label: "Work With Us", href: "#work-with-us" },
      { label: "Reviews", href: "#reviews" },
      { label: "Privacy Policy", href: "https://matchmadecouple.com/privacy-policy/" },
    ] satisfies NavItem[],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/matchmadeadventures/" },
      { label: "Facebook", href: "https://www.facebook.com/matchmadeadventures/" },
      { label: "Amazon", href: "https://www.amazon.com/shop/matchmadecouple" },
    ] satisfies SocialLink[],
  },
  intro: {
    eyebrow: "Hawaii travel and brand storytelling",
    image: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2026/03/INTRO-PHOTO-SQUARE-2.png?resize=1024%2C1024&ssl=1",
      alt: "Diego and Tamara smiling in Hawaii",
    },
    secondaryImage: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/11/NAPALI.jpg?resize=997%2C1024&ssl=1",
      alt: "Na Pali coast landscape in Hawaii",
    },
    heading: "We’re Diego and Tamara, the team behind Match Made Adventures!",
    paragraphs: [
      "We’ve explored Hawai‘i’s islands, tried over 1,000 adventures, and partnered with local brands to uncover the best experiences for travelers, couples, and adventure seekers.",
    ],
  },
  islands: {
    id: "islands",
    icon: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/HAWAIIAN-ISLANDS-80-x-80-px-1.png?resize=80%2C80&ssl=1",
      alt: "Hawaiian islands illustrated icon",
    },
    heading: "The Islands of Hawai’i",
    body: "Did you know Hawai‘i is made up of 137 islands? However, only 8 of them are open to visitors. These are divided into 4 major islands, each with its own personality, unique landscapes, and unforgettable adventures waiting to be discovered.",
    cards: [
      {
        name: "Kaua’i",
        subtitle: "The Garden Island",
        href: `${homeUrl}/kauai-hawaii/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/KAUAI-COVER-INSTA-1.png?resize=2380%2C2380&ssl=1",
          alt: "Kaua’i Hawaii island guide cover",
        },
      },
      {
        name: "Maui",
        subtitle: "The Valley Island",
        href: `${homeUrl}/maui-hawaii/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/MAUI-COVER-INSTA-1.png?resize=2380%2C2380&ssl=1",
          alt: "Maui Hawaii island guide cover",
        },
      },
      {
        name: "Big Island",
        subtitle: "The Land of Lava",
        href: `${homeUrl}/the-big-island-hawaii/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/BIG-ISLAND-COVER-INSTA.png?resize=2380%2C2380&ssl=1",
          alt: "Big Island Hawaii guide cover",
        },
      },
      {
        name: "O’ahu",
        subtitle: "The Gathering Place",
        status: "Coming soon!",
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/OAHU-COVER-INSTA.png?resize=2380%2C2380&ssl=1",
          alt: "O’ahu Hawaii guide cover",
        },
      },
    ] satisfies IslandCard[],
  },
  resources: {
    id: "resources",
    heading: "Don’t go to Hawaii without these first:",
    items: [
      {
        label: "Do and Don’ts in Hawaii",
        href: `${homeUrl}/do-and-donts-in-hawaii/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/Do-and-Donts-MMC-300x300.png?resize=300%2C300&ssl=1",
          alt: "Do and Don’ts in Hawaii resource cover",
        },
      },
      {
        label: "Your Hawaii Essentials",
        href: `${homeUrl}/what-to-bring-to-hawaii/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/Your-Hawaii-Essentials-MMC-300x300.png?resize=300%2C300&ssl=1",
          alt: "Your Hawaii Essentials resource cover",
        },
      },
      {
        label: "Hawaiian Unspoken Rules",
        href: `${homeUrl}/hawaiian-unspoken-rules/`,
        image: {
          src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/09/Hawaiian-Unspoken-Rules-MMC-300x300.png?resize=300%2C300&ssl=1",
          alt: "Hawaiian Unspoken Rules resource cover",
        },
      },
    ] satisfies ResourceCard[],
  },
  workWithUs: {
    id: "work-with-us",
    heading: "WORK WITH US!",
    body: "We specialize in creating authentic, high-performing visuals that help brands grow. Our content connects with new audiences, builds trust, and drives measurable results — transforming visibility and engagement into sustainable growth through strategic, experiential marketing.",
    href: `${homeUrl}/marketing-and-media-production/`,
    servicesHeading: "Videography and Photography Services",
    services: [
      {
        title: "UNDERWATER CONTENT",
        kicker: "Certified scuba and freedivers with 5+ years behind the lens.",
        body: "From marine life to underwater product shoots, we capture high-definition visuals that make people feel the ocean through our lens, as if they were right there with us.",
      },
      {
        title: "ELEVATED AERIAL VISUALS",
        body: "We create cinematic drone footage that brings your property or experience to life, letting your audience feel every breathtaking moment while converting viewers into loyal customers.",
      },
      {
        title: "ADVENTURE FOOTAGE",
        kicker: "10+ years of experience behind the lens.",
        body: "We capture the energy, emotion, and story of every adventure, filming it so immersively that your audience doesn’t just watch — they feel like they’re part of it.",
      },
      {
        title: "BRAND OR PRODUCT",
        body: "We craft high-performing visuals that highlight what makes your brand or product truly unique. From lifestyle and luxury, we make every detail shine on camera — stopping the scroll, engaging your audience, and driving real results.",
      },
    ] satisfies Service[],
  },
  reviews: {
    id: "reviews",
    heading: "Reviews",
    items: [
      {
        quote:
          "From the moment we began working together, your team at Match Made Couple brought purposeful storytelling, creativity, and a genuine travel-ambassador heart to our partnership. You didn’t just produce content, you immersed yourself in the essence of Go Blue: You elevated our brand narrative, capturing our Zodiac experiences not simply as tours, but as curated journeys where trust meets thrill, nature meets design, and guests connect deeply with the sea. We wholeheartedly recommend their expertise to brands and hosts who are looking for creators that can bridge high design + deep soul + authentic travel experience. Mahalo nui loa for your partnership, your craft, your aloha spirit and looking forward to working with you further!",
        author: "Go Blue Adventures",
        href: "https://www.goblueadventures.com/?gad_source=1&gad_campaignid=21351177538&gbraid=0AAAAA9zcAeQhdj7NlrLtVgvcY2vddUDDa&gclid=Cj0KCQiAiKzIBhCOARIsAKpKLAOCPAv2Vd7AvQOLRVERqrHepZfrAE0uAEOkYtu0LNr6F0WOKZZQZLkaAvK5EALw_wcB",
      },
      {
        quote:
          "I was blessed with the opportunity to meet Tamara and Diego a couple of years back. When they gave me the opportunity to work with them on improving my website, I was so excited, not just to see them again, but to have them, bring their energy and passion and put it into my business. I truly enjoy spending time with them and sharing ideas, but also I enjoy having them as friends.",
        author: "Volcano Inn",
        href: "https://volcanoinnhawaii.vacations/",
      },
      {
        quote:
          "We were absolutely thrilled with the final content. The creative concept, featuring the volcanic landscape, was exceptionally unique and powerful. It perfectly captured the adventurous spirit of our brand. Furthermore, we were very pleased to see how well our all-weather jackets were showcased. The fit and styling were impeccable. Overall, it was a fantastic experience. We sincerely hope to have the opportunity to collaborate with them multiple times in the future.",
        author: "CAMEL CROWN",
        href: "https://cameloutdoorus.com/",
      },
      {
        quote:
          "We had a really great experience working with Diego and Tamara from Match Made Couple! We loved the reel they created for our Evening Hula Show along with photos they’ve taken for our other events. They create high-quality and engaging content; they also are very responsive and easy to work with!",
        author: "SOUTH MAUI GARDENS",
        href: "https://www.southmauigardens.com/",
      },
      {
        quote:
          "Diego and Tamara did an incredible job bringing our ETA campaign vision to life. Their creativity and professionalism shone through every step of the process, from concept to final delivery. They delivered high-quality content that perfectly captured our brand’s message and connected beautifully with their audience. We really appreciated their timely communication and the genuine enthusiasm they brought to the collaboration. Highly recommend them for any future content projects, they’re a fantastic couple to work with!",
        author: "ETA Living",
        href: "https://www.etaliving.com/",
      },
      {
        quote:
          "Diego and Tamara were such a pleasure to have join us for a few of our adventures! Not only were they wonderful in person, but they also created engaging and creative content that perfectly captured the fun of each activity. We’d be thrilled to welcome them back anytime!",
        author: "UFO Parasail & Adventures",
        href: "https://ufoparasail.net/?gad_source=1&gad_campaignid=21108891534&gbraid=0AAAAADHKgOwztUTEaPYvZ1BCJwxlpPLbJ&gclid=Cj0KCQjwgpzIBhCOARIsABZm7vG6hRugFn_wCdWbvYbOTQS7ntyUY67Q9T8ktvOXTgpaxowyJIC5QEcaAj2EEALw_wcB",
      },
    ] satisfies Review[],
  },
  contact: {
    id: "contact-section",
    heading: "Let’s Work Together",
    body: "Send your message below along with the ideas for your collaboration, and we’ll be in touch soon with our Media Kit!",
    image: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2025/11/NAPALI.jpg?resize=997%2C1024&ssl=1",
      alt: "Na Pali coast landscape in Hawaii",
    },
    fields: {
      name: "YOUR NAME *",
      email: "YOUR EMAIL *",
      message: "YOUR MESSAGE *",
      submit: "SEND",
    },
  },
  footer: {
    logo: {
      src: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2024/10/PROFILE-CIRCLE-MMC.png?fit=1280%2C1280&ssl=1",
      alt: "MATCH MADE COUPLE LLC logo",
    },
    title: "MATCH MADE COUPLE LLC",
    tagline: "MATCHING OUTFITS, UNMATCHED ADVENTURES",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/matchmadeadventures/" },
      { label: "Facebook", href: "https://www.facebook.com/matchmadeadventures/" },
      { label: "Amazon", href: "https://www.amazon.com/shop/matchmadecouple" },
    ] satisfies SocialLink[],
    nav: [
      { label: "Home", href: homeUrl },
      { label: "THE ISLANDS OF HAWAI’I", href: `${homeUrl}/the-islands-of-hawaii/` },
      { label: "PRIVACY POLICY", href: `${homeUrl}/privacy-policy/` },
    ] satisfies NavItem[],
  },
} as const;
