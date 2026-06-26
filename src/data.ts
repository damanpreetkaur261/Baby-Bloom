import prodBlanket from './assets/images/prod_blanket_1781762545211.jpg';
import prodFeeding from './assets/images/prod_feeding_1781762563962.jpg';
import prodToy from './assets/images/prod_toy_1781762576775.jpg';
import prodBath from './assets/images/prod_bath_1781762589563.jpg';
import prodNightLight from './assets/images/prod_night_light_1781764187391.jpg';
import prodBunnyToy from './assets/images/prod_bunny_toy_1781764204084.jpg';

import blogEssentials from './assets/images/blog_essentials_1781764343220.jpg';
import blogNursery from './assets/images/blog_nursery_1781764361496.jpg';
import blogOrganic from './assets/images/blog_organic_1781764378577.jpg';
import blogFeeding from './assets/images/blog_feeding_1781764395379.jpg';
import blogToys from './assets/images/blog_toys_1781764409653.jpg';

export const featuredProducts = [
  {
    id: '1',
    name: "Organic Cotton Baby Blanket",
    price: 29.99,
    description: "Ultra-soft organic cotton blanket designed to keep babies warm and comfortable.",
    features: ["100% Organic Cotton", "Breathable Fabric", "Machine Washable", "Suitable for Newborns"],
    image: prodBlanket
  },
  {
    id: '2',
    name: "Silicone Feeding Set",
    price: 24.99,
    description: "Complete feeding set made from food-grade silicone.",
    features: ["BPA-Free", "Microwave Safe", "Easy to Clean", "Includes Bowl, Spoon & Bib"],
    image: prodFeeding
  },
  {
    id: '3',
    name: "Wooden Stacking Toy",
    price: 19.99,
    description: "Educational toy that helps develop motor skills and hand-eye coordination.",
    features: ["Natural Wood", "Non-Toxic Paint", "Montessori Inspired", "Durable Construction"],
    image: prodToy
  },
  {
    id: '4',
    name: "Baby Bath Care Kit",
    price: 34.99,
    description: "Complete bath-time solution for gentle baby care.",
    features: ["Baby Shampoo", "Baby Wash", "Soft Towel", "Bath Sponge"],
    image: prodBath
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: '5',
    name: "Nursery Night Light",
    price: 22.99,
    description: "Soft-glow LED night light for peaceful sleep.",
    features: ["Adjustable Brightness", "Rechargeable Battery", "Child-Safe Materials", "Portable Design"],
    image: prodNightLight
  },
  {
    id: '6',
    name: "Plush Bunny Toy",
    price: 17.99,
    description: "Adorable plush companion made from premium soft materials.",
    features: ["Hypoallergenic Fabric", "Machine Washable", "Safe for All Ages", "Extra Soft Texture"],
    image: prodBunnyToy
  }
];

export const blogArticles = [
  {
    id: '1',
    title: "10 Essential Items Every New Parent Needs",
    date: "March 12, 2026",
    excerpt: "Starting parenthood can feel overwhelming. Discover the must-have baby essentials that make daily life easier and more organized.",
    image: blogEssentials
  },
  {
    id: '2',
    title: "How to Create a Safe Nursery for Your Baby",
    date: "February 25, 2026",
    excerpt: "Learn practical tips for designing a secure, comfortable, and nurturing nursery environment.",
    image: blogNursery
  },
  {
    id: '3',
    title: "Benefits of Organic Baby Products",
    date: "January 30, 2026",
    excerpt: "Explore why more parents are choosing organic products for their babies and how they can support healthier development.",
    image: blogOrganic
  },
  {
    id: '4',
    title: "Baby Feeding Tips for First-Time Parents",
    date: "January 10, 2026",
    excerpt: "A beginner-friendly guide to introducing feeding routines and selecting the right feeding accessories.",
    image: blogFeeding
  },
  {
    id: '5',
    title: "Choosing Educational Toys for Early Development",
    date: "December 18, 2025",
    excerpt: "Find out how age-appropriate toys can encourage creativity, problem-solving, and cognitive growth.",
    image: blogToys
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    quote: "Baby Bloom products are beautifully made and incredibly soft. My baby loves them!"
  },
  {
    name: "Emily R.",
    quote: "The feeding set has made mealtime so much easier. Highly recommended."
  },
  {
    name: "Jason & Mia",
    quote: "Excellent quality and fast shipping. We will definitely shop again."
  }
];
