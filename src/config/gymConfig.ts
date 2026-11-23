import {
  GymInfo,
  GymSectionsConfig,
  ServiceItem,
  Review,
  GalleryImage
} from '../types';

export const GYM_CONFIG: GymInfo = {
  name: "NIWARA GYM",
  brandSub: "LUXURY FITNESS CLUB • DEMO PROJECT",
  tagline: "FORGE YOUR LEGACY.",
  taglineSecondary: "Pune's elite fitness destination at Navi Peth. Scientific coaching, world-class equipment, and a high-performance community.",
  isDemoProject: true,
  demoDisclaimer: "This website is an agency portfolio demo concept created by WebCraft. Not an official client-authorized website.",
  branding: {
    name: "NIWARA GYM",
    affiliation: "By V3 Fitness",
    affiliationVerified: false,
    tagline: "FORGE YOUR LEGACY.",
    taglineSecondary: "Pune's elite fitness destination at Navi Peth. Scientific coaching, world-class equipment, and a high-performance community.",
    headlinePrefix: "FORGE YOUR",
    headlineHighlight: "LEGACY.",
    badgeText: "DEMO PROJECT",
    demoTag: "Demo Project",
    classification: "Gym Demo Project"
  },
  sections: {
    hero: true,
    services: true,
    gallery: true,
    bmiCalculator: true,
    testimonials: true,
    contact: true
  },
  address: {
    campus: "Niwara Campus",
    street: "96, Navi Peth, Thosarpaga",
    area: "Navi Peth",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411030",
    fullAddress: "Niwara Campus, 96, Navi Peth, Thosarpaga, Pune, Maharashtra 411030",
    landmarks: ["Near SP College Grounds", "Tilak Road Crossing"]
  },
  contact: {
    phonePrimary: "+91 80101 55174",
    phoneSecondary: "+91 80101 55174",
    whatsappNumber: "918010155174",
    whatsappFormatted: "+91 80101 55174",
    email: "demo@niwaragym.netlify.app",
    instagram: "",
    facebook: "",
    youtube: "",
    enableEnquiries: true,
    phoneLabel: "WebCraft Agency Demo Desk (Not Official Reception)",
    phoneDisclosure: "WebCraft agency demo sales & enquiry line (Not official gym reception)"
  },
  timing: {
    weekdays: "05:30 AM – 10:30 PM",
    sunday: "07:00 AM – 12:00 PM",
    holidays: "Open on major holidays",
    scheduleLabel: "Sample Operating Hours",
    isVerified: false
  },
  seo: {
    title: "NIWARA GYM | Luxury Fitness Web Demo (WebCraft Portfolio)",
    description: "A luxury dark fitness web demo concept engineered by WebCraft as an agency portfolio demonstration for Niwara Gym Pune.",
    canonicalUrl: "https://niwaragym.netlify.app/",
    ogImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
  },
  googleRating: {
    score: 4.8,
    totalReviews: 550,
    breakdown: {
      fiveStar: 498,
      fourStar: 42
    },
    isVerified: false,
    displayLabel: "Concept Rating Showcase"
  },
  mapUrl: "https://maps.google.com/?q=Niwara+Gym+Navi+Peth+Pune",
  mapEmbedUrl: "https://maps.google.com/maps?q=Niwara+Campus,+96,+Navi+Peth,+Pune,+Maharashtra+411030&t=&z=16&ie=UTF8&iwloc=&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Niwara+Gym+Navi+Peth+Pune+411030",
  // Runtime production release is strictly undefined: no client authorization exists.
  // Synthetic test fixtures are isolated in src/test/productionTestFixtures.ts.
  productionRelease: undefined
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "strength",
    title: "Strength Training",
    sentence: "Biomechanical isolate plate-loaded machines and heavy dumbbell racks up to 50kg.",
    iconName: "Dumbbell",
    accentColor: "from-lime-400 to-emerald-500",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    sentence: "Scientific fat loss, metabolic conditioning, and sustainable body recomposition.",
    iconName: "Flame",
    accentColor: "from-cyan-400 to-blue-500",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    sentence: "1-on-1 certified coaching for rapid goal execution, posture correction & results.",
    iconName: "UserCheck",
    accentColor: "from-purple-400 to-indigo-500",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional",
    title: "Functional Training",
    sentence: "Turf sprint track, sleds, battle ropes & high-intensity crossfit rig.",
    iconName: "Zap",
    accentColor: "from-amber-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio",
    title: "Cardio Deck",
    sentence: "Commercial treadmills, stairmasters & assault bikes with heart-rate tracking.",
    iconName: "Activity",
    accentColor: "from-emerald-400 to-teal-500",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "steam-bath",
    title: "Steam Bath",
    sentence: "Infrared steam & recovery lounge for deep muscle relaxation post-workout.",
    iconName: "Sparkles",
    accentColor: "from-sky-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Pranav Kulkarni",
    role: "Software Engineer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Hands down the best gym in Navi Peth Pune! Modern machines, incredible glass vibe, and helpful coaches.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-2",
    author: "Tanvi Sutar",
    role: "Student @ SP College",
    rating: 5,
    date: "1 month ago",
    comment: "Super safe and empowering environment for women. Steam bath facility post leg-day is pure bliss!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-3",
    author: "Siddharth Jagtap",
    role: "Powerlifter",
    rating: 5,
    date: "3 weeks ago",
    comment: "Serious equipment! Isolate hammer strength rigs, dumbbells up to 50kg, and dedicated deadlift platforms.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-4",
    author: "Dr. Ananya Roy",
    role: "Resident Doctor",
    rating: 5,
    date: "2 months ago",
    comment: "The 5:30 AM early morning slot is perfect for my shifts. Clean air conditioning, great music and lighting.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    verified: true
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Strength Floor",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    alt: "Niwara Gym Main Strength Arena"
  },
  {
    id: "gal-2",
    title: "Dumbbell Zone",
    category: "Equipment",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    alt: "Dumbbell Racks"
  },
  {
    id: "gal-3",
    title: "Cardio Suite",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    alt: "Treadmill Deck"
  },
  {
    id: "gal-4",
    title: "Functional Turf",
    category: "CrossFit",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    alt: "Sled Sprint Track"
  },
  {
    id: "gal-5",
    title: "Coaching Zone",
    category: "Vibe",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    alt: "Coaching Floor"
  },
  {
    id: "gal-6",
    title: "Steam & Recovery",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    alt: "Recovery Lounge"
  }
];

export interface NavLinkItem {
  name: string;
  href: string;
  sectionKey?: keyof GymSectionsConfig;
}

export const getActiveNavLinks = (sections = GYM_CONFIG.sections): { name: string; href: string }[] => {
  const baseLinks: NavLinkItem[] = [
    { name: 'Home', href: '#home', sectionKey: 'hero' },
    { name: 'Services', href: '#services', sectionKey: 'services' },
    { name: 'Gallery', href: '#gallery', sectionKey: 'gallery' },
    { name: 'Calculator', href: '#bmi-calculator', sectionKey: 'bmiCalculator' },
    { name: 'Reviews', href: '#reviews', sectionKey: 'testimonials' },
    { name: 'Contact', href: '#contact', sectionKey: 'contact' },
  ];

  return baseLinks.filter((item) => {
    if (!item.sectionKey) return true;
    return sections?.[item.sectionKey] !== false;
  }).map(({ name, href }) => ({ name, href }));
};
