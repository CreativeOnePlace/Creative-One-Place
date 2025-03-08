
import { Package } from "@/types/packages";

export const packages: Package[] = [
  // Web Design Packages
  {
    id: "web-basic",
    title: "Basic Website",
    description: "Perfect for small businesses looking to establish an online presence",
    price: "$999",
    category: "web",
    features: [
      { title: "5 Pages Website", included: true },
      { title: "Mobile Responsive Design", included: true },
      { title: "Contact Form", included: true },
      { title: "Basic SEO Setup", included: true },
      { title: "Social Media Integration", included: true },
      { title: "Content Management System", included: false },
      { title: "E-commerce Functionality", included: false },
      { title: "Custom Animations", included: false }
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "web-business",
    title: "Business Website",
    description: "Comprehensive solution for growing businesses with advanced features",
    price: "$2,499",
    category: "web",
    popular: true,
    features: [
      { title: "10 Pages Website", included: true },
      { title: "Mobile Responsive Design", included: true },
      { title: "Contact Form", included: true },
      { title: "Advanced SEO Setup", included: true },
      { title: "Social Media Integration", included: true },
      { title: "Content Management System", included: true },
      { title: "Basic E-commerce (up to 20 products)", included: true },
      { title: "Custom Animations", included: true }
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "web-enterprise",
    title: "Enterprise Solution",
    description: "Premium website solution with all features for large businesses",
    price: "$4,999+",
    category: "web",
    features: [
      { title: "20+ Pages Website", included: true },
      { title: "Mobile Responsive Design", included: true },
      { title: "Advanced Forms & Integrations", included: true },
      { title: "Complete SEO Strategy", included: true },
      { title: "Social Media Integration", included: true },
      { title: "Advanced Content Management", included: true },
      { title: "Full E-commerce Functionality", included: true },
      { title: "Custom Animations & Interactions", included: true }
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },

  // Graphic Design Packages
  {
    id: "graphic-starter",
    title: "Brand Starter",
    description: "Essential branding elements for new businesses",
    price: "$599",
    category: "graphic",
    features: [
      { title: "Logo Design (3 concepts)", included: true },
      { title: "Business Card Design", included: true },
      { title: "Brand Color Palette", included: true },
      { title: "Typography Selection", included: true },
      { title: "Social Media Profile Images", included: true },
      { title: "Brand Guidelines", included: false },
      { title: "Marketing Materials", included: false },
      { title: "Packaging Design", included: false }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "graphic-professional",
    title: "Professional Brand",
    description: "Complete branding package for established businesses",
    price: "$1,499",
    category: "graphic",
    popular: true,
    features: [
      { title: "Logo Design (5 concepts)", included: true },
      { title: "Business Card & Stationery", included: true },
      { title: "Brand Color Palette", included: true },
      { title: "Typography Selection", included: true },
      { title: "Social Media Kit", included: true },
      { title: "Brand Guidelines", included: true },
      { title: "Marketing Materials (5 items)", included: true },
      { title: "Packaging Design", included: false }
    ],
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
  },
  {
    id: "graphic-premium",
    title: "Premium Brand Identity",
    description: "Comprehensive branding solution with all bells and whistles",
    price: "$2,999",
    category: "graphic",
    features: [
      { title: "Logo Design (unlimited concepts)", included: true },
      { title: "Complete Stationery Suite", included: true },
      { title: "Extended Color Palette", included: true },
      { title: "Typography System", included: true },
      { title: "Social Media Kit", included: true },
      { title: "Comprehensive Brand Guidelines", included: true },
      { title: "Marketing Materials (10+ items)", included: true },
      { title: "Packaging Design", included: true }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },

  // Social Media Packages
  {
    id: "social-basic",
    title: "Social Starter",
    description: "Basic social media management to get your brand noticed",
    price: "$499/month",
    category: "social",
    features: [
      { title: "3 Platforms Management", included: true },
      { title: "12 Posts Per Month", included: true },
      { title: "Basic Content Creation", included: true },
      { title: "Community Management", included: true },
      { title: "Monthly Performance Report", included: true },
      { title: "Paid Advertising", included: false },
      { title: "Influencer Outreach", included: false },
      { title: "Video Content", included: false }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    id: "social-growth",
    title: "Social Growth",
    description: "Comprehensive social media strategy for growing your audience",
    price: "$999/month",
    category: "social",
    popular: true,
    features: [
      { title: "5 Platforms Management", included: true },
      { title: "20 Posts Per Month", included: true },
      { title: "Custom Content Creation", included: true },
      { title: "Community Management", included: true },
      { title: "Bi-weekly Performance Reports", included: true },
      { title: "Basic Paid Advertising", included: true },
      { title: "Influencer Outreach", included: true },
      { title: "Basic Video Content", included: true }
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "social-enterprise",
    title: "Social Enterprise",
    description: "All-inclusive social media management for maximum impact",
    price: "$1,999/month",
    category: "social",
    features: [
      { title: "All Platforms Management", included: true },
      { title: "30+ Posts Per Month", included: true },
      { title: "Premium Content Creation", included: true },
      { title: "24/7 Community Management", included: true },
      { title: "Weekly Performance Reports", included: true },
      { title: "Advanced Paid Advertising", included: true },
      { title: "Strategic Influencer Partnerships", included: true },
      { title: "Professional Video Production", included: true }
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];
