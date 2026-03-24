export interface PortfolioEvent {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  videos: string[];
  content: string;
}

export const quizEvents: PortfolioEvent[] = [
  {
    slug: "amq-2024",
    title: "AMQ 2024",
    description: "A grand quiz event featuring intense rounds of trivia and knowledge battles.",
    coverImage: "/images/AMQ 2024 -1.JPG",
    images: [
      "/images/AMQ 2024 -1.JPG",
      "/images/AMQ 2024 -2.JPG",
      "/images/AMQ 2024 -3.JPG",
      "/images/AMQ 2024 -4.JPG",
      "/images/AMQ 2024 -5.JPG",
      "/images/AMQ 2024 -6.JPG",
      "/images/AMQ 2024 -7.JPG",
      "/images/AMQ 2024 -8.JPG",
      "/images/AMQ 2024 -9.JPG",
      "/images/AMQ 2024 -10.JPG",
      "/images/AMQ 2024 -11.JPG",
      "/images/AMQ 2024 -12.JPG",
      "/images/AMQ 2024 -13.JPG",
      "/images/AMQ 2024 -14.JPG",
      "/images/AMQ 2024 -15.JPG",
      "/images/AMQ 2024 - 16.JPG",
      "/images/AMQ 2024 - 17.JPG",
      "/images/AMQ 2024 - 18.JPG",
      "/images/AMQ 2024 - 19.JPG",
      "/images/AMQ 2024 - 20.JPG",
      "/images/AMQ 2024 - 21.JPG",
      "/images/AMQ 2024 - 22.JPG",
      "/images/AMQ 2024 - 23.JPG",
      "/images/AMQ 2024 - 24.JPG",
      "/images/AMQ 2024 - 25.JPG",
      "/images/AMQ 2024 - 26.JPG",
    ],
    videos: [],
    content:
      "AMQ 2024 was an electrifying quiz competition that brought together the brightest minds. The event featured multiple rounds of challenging questions spanning science, history, pop culture, and more.",
  },
  {
    slug: "iit-bbs-2024",
    title: "IIT BBS 2024",
    description: "Quiz event hosted at IIT Bhubaneswar, showcasing top-tier quizzing talent.",
    coverImage: "/images/IIT BBS 2024 - 1.JPG",
    images: [
      "/images/IIT BBS 2024 - 1.JPG",
      "/images/IIT BBS 2024 - 2.JPG",
      "/images/IIT BBS 2024 - 3.JPG",
      "/images/IIT BBS 2024 - 4.JPG",
      "/images/IIT BBS 2024 - 5.JPG",
      "/images/IIT BBS 2024 - 6.JPG",
      "/images/IIT BBS 2024 - 7.JPG",
      "/images/IIT BBS 2024 - 8.JPG",
      "/images/IIT BBS 2024 - 9.JPG",
      "/images/IIT BBS 2024 - 10.JPG",
    ],
    videos: [],
    content:
      "A prestigious quiz event at IIT Bhubaneswar that challenged participants with thought-provoking questions across diverse domains. The event witnessed an incredible display of knowledge and quick thinking.",
  },
  {
    slug: "iit-bbs-2026",
    title: "IIT BBS 2026",
    description: "The latest edition of the IIT Bhubaneswar quiz, bigger and better than ever.",
    coverImage: "/images/IIT BBS 2026 - 1.jpg",
    images: [
      "/images/IIT BBS 2026 - 1.jpg",
      "/images/IIT BBS 2026 - 2.jpg",
      "/images/IIT BBS 2026 - 3.jpg",
    ],
    videos: [],
    content:
      "IIT BBS 2026 returned with even more excitement and energy. This edition featured new formats and tougher questions, pushing participants to their intellectual limits.",
  },
  {
    slug: "greycells-cognizant-2025",
    title: "Greycells Cognizant Nov 2025",
    description: "A corporate quiz event organized by Greycells in collaboration with Cognizant.",
    coverImage: "/images/Greycells Cognizant Nov 2025 1.jpg",
    
    images: [
      "/images/Greycells Cognizant Nov 2025 1.jpg",
      "/images/Greycells Cognizant Nov 2025 3.jpg",
      "/images/Greycells Cognizant Nov 2025 4.jpg",
    ],
    videos: ["/images/Greycells Cognizant Nov 2025_1.mp4"],
    content:
      "The Greycells Cognizant quiz brought the corporate world together for an evening of knowledge and fun. Teams competed fiercely in this professionally organized event that tested both individual brilliance and teamwork.",
  },
  {
    slug: "the-young-world",
    title: "The Young World",
    description: "A quiz competition designed to inspire and challenge young minds.",
    coverImage: "/images/The young world 1.jpg",
    images: [
      "/images/The young world 1.jpg",
      "/images/The young world 2.jpg",
      "/images/The young world 4.jpg",
    ],
    videos: ["/videos/The Hindu YoungWorld Quiz SBI Greycells 2025 Patna.mp4"],
    content:
      "The Young World quiz was specially crafted for young enthusiasts, featuring age-appropriate yet challenging questions. The event aimed to spark curiosity and a love for learning among the next generation.",
  },
];

export const musicEvents: PortfolioEvent[] = [
  {
    slug: "performance-1",
    title: "Live Performance 1",
    description: "An energetic live musical performance showcasing versatile talent.",
    coverImage: "/bivash.avif",
    images: [],
    videos: [
      "/videos/20251116_111502.mp4",
      "/videos/20251116_111540.mp4",
    ],
    content:
      "A captivating live performance that mesmerized the audience with soulful melodies and energetic rhythms.",
  },
  {
    slug: "performance-2",
    title: "Live Performance 2",
    description: "A soulful musical session that captivated the audience.",
    coverImage: "/bivash.avif",
    images: [],
    videos: [
      "/videos/20251116_111642.mp4",
      "/videos/20251116_111802.mp4",
    ],
    content:
      "An intimate musical session where raw talent met pure emotion, creating an unforgettable experience for everyone present.",
  },
  {
    slug: "performance-3",
    title: "Live Performance 3",
    description: "A dynamic musical event blending multiple genres.",
    coverImage: "/bivash.avif",
    images: [],
    videos: [
      "/videos/20251116_112337.mp4",
      "/videos/20251116_112433.mp4",
      "/videos/20251116_112832.mp4",
    ],
    content:
      "A dynamic performance that seamlessly blended multiple genres, showcasing incredible musical range and stage presence.",
  },
];
