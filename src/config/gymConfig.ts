import {
  GymInfo,
  Review,
  GalleryImage
} from '../types';

export const GYM_CONFIG: GymInfo = {
  name: "NIWARA GYM",
  brandSub: "LUXURY FITNESS CLUB",
  tagline: "FORGE YOUR LEGACY.",
  taglineSecondary: "Pune's elite fitness destination at Navi Peth. Scientific coaching, world-class equipment, and a high-performance community.",
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
    email: "contact@niwaragym.com",
    instagram: "https://instagram.com/niwaragym",
    facebook: "https://facebook.com/niwaragym",
    youtube: "https://youtube.com/@niwaragym"
  },
  googleRating: {
    score: 4.8,
    totalReviews: 550,
    breakdown: {
      fiveStar: 498,
      fourStar: 42
    }
  },
  timing: {
    weekdays: "05:30 AM – 10:30 PM",
    sunday: "07:00 AM – 12:00 PM",
    holidays: "Open on major holidays"
  },
  mapUrl: "https://maps.google.com/?q=Niwara+Gym+Navi+Peth+Pune",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3553215682187!2d73.84752000000002!3d18.5128038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0612f000001%3A0x897914e6be01955d!2sNavi%20Peth%2C%20Sadashiv%20Peth%2C%20Pune%2C%20Maharashtra%20411030!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Niwara+Gym+Navi+Peth+Pune+411030"
};

export const SERVICES_LIST = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Biomechanical isolate plate-loaded machines and heavy dumbbell racks.",
    iconName: "Dumbbell",
    accentColor: "from-lime-400 to-emerald-500",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Scientific fat loss, metabolic conditioning, and body recomposition.",
    iconName: "Flame",
    accentColor: "from-cyan-400 to-blue-500",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "1-on-1 certified coaching for rapid execution, form correction & results.",
    iconName: "UserCheck",
    accentColor: "from-purple-400 to-indigo-500",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional",
    title: "Functional Training",
    description: "Turf sprint track, sleds, battle ropes & crossfit conditioning rig.",
    iconName: "Zap",
    accentColor: "from-amber-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio",
    title: "Cardio Deck",
    description: "Commercial treadmills, stairmasters & assault bikes with heart-rate metrics.",
    iconName: "Activity",
    accentColor: "from-emerald-400 to-teal-500",
    image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "steam-bath",
    title: "Steam Bath",
    description: "Infrared steam & recovery lounge for deep muscle relaxation post-workout.",
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
    src: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=1200&q=80",
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
