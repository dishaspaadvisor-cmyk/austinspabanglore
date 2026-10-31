// Centralized configuration for the Austin Spa Banglore website
export const CONFIG = {
  // Business Information
  BUSINESS_NAME: "Austin Spa Banglore ",
  BUSINESS_TAGLINE: "Experience True Luxury & Wellness",
  BUSINESS_DESCRIPTION: "Premium Spa & Massage Therapy designed to relax your body, mind, and soul.",

  // Contact Information
  PHONE_NUMBER: "+91 8976846040",
  WHATSAPP_NUMBER: "918976846040",
  EMAIL: "austinspa.banglore@gmail.com ",
  ADDRESS: `
Second Floor, Bearing No. 37(Balaji Granites Building) Bannerghatta Road, Basavanapura Near NICE Road Junction, Electronic City Phase 1 Bangalore - 560083
`,

  // Default Messages
  DEFAULT_WHATSAPP_MESSAGE: "Hello, I want to book an appointment",

  // Business Hours
  BUSINESS_HOURS: {
    WEEKDAYS: "9:00 AM - 9:00 PM",
    WEEKENDS: "10:00 AM - 8:00 PM",
    DISPLAY: "9:00 AM - 9:00 PM (Mon-Sun)"
  },

  // Social Media
  SOCIAL_MEDIA: {
    WHATSAPP: "https://wa.me/918976846040",
    INSTAGRAM: "https://www.instagram.com/austinspabangalore/",
    FACEBOOK: "https://www.facebook.com/profile.php?id=61586556212644",
    TWITTER: "https://x.com/austinspab83",
    LINKEDIN: "https://www.linkedin.com/in/austin-spa-bangalore-6579103ab/"
  },

  // Services
  SERVICES: {
    DEEP_TISSUE: {
      name: "Deep Tissue Massage",
      duration: "60-90 mins",
      price: "Starting from ₹1,500"
    },
    HOT_STONE: {
      name: "Hot Stone Massage",
      duration: "75 mins",
      price: "Starting from ₹2,000"
    },
    FULL_BODY: {
      name: "Full Body Massage",
      duration: "60 mins",
      price: "Starting from ₹1,200"
    },
    HEAD_MASSAGE: {
      name: "Head Massage",
      duration: "30 mins",
      price: "Starting from ₹800"
    },
    FOOT_REFLEXOLOGY: {
      name: "Foot Reflexology",
      duration: "45 mins",
      price: "Starting from ₹1,000"
    },
    THAI_MASSAGE: {
      name: "Thai Massage",
      duration: "90 mins",
      price: "Starting from ₹1,800"
    }
  }
};

// Navigation routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  OFFERS: "/offers"
};

// API endpoints (if needed in future)
export const API_ENDPOINTS = {
  CONTACT_FORM: "/api/contact",
  BOOKING: "/api/booking",
  SERVICES: "/api/services"
};
