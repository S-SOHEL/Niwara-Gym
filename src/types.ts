export interface GymInfo {
  name: string;
  brandSub: string;
  tagline: string;
  taglineSecondary: string;
  address: {
    campus: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
    landmarks: string[];
  };
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    email: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  googleRating: {
    score: number;
    totalReviews: number;
    breakdown: {
      fiveStar: number;
      fourStar: number;
    };
  };
  timing: {
    weekdays: string;
    sunday: string;
    holidays: string;
  };
  mapUrl: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Strength' | 'Cardio' | 'Recovery' | 'Functional' | 'Personalized';
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs?: string;
  badge?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  months: number;
  price: number;
  originalPrice: number;
  discountPercentage?: number;
  popular?: boolean;
  tagline: string;
  features: string[];
  notIncluded?: string[];
  perMonthEquivalent?: number;
  whatsappMessage: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  specialties: string[];
  bio: string;
  image: string;
  transformationsCount: number;
  quote: string;
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  profession: string;
  beforeWeight: string;
  afterWeight: string;
  duration: string;
  goalCategory: 'Weight Loss' | 'Muscle Gain' | 'Female Fitness' | 'Body Recomp';
  beforeImage: string;
  afterImage: string;
  quote: string;
  trainerAssigned: string;
  keyAchieved: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
  highlightTag?: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  recommendedPlan: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Facilities' | 'Personal Training' | 'Timings' | 'General';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Interior' | 'Equipment' | 'CrossFit' | 'Events' | 'Vibe';
  src: string;
  alt: string;
}
