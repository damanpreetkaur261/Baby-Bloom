import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Leaf, HeartHandshake, Truck, HeadphonesIcon } from 'lucide-react';
import { featuredProducts, testimonials } from '../data';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

import heroImage from '../assets/images/hero_nursery_1781762447601.jpg';
import catBabyCare from '../assets/images/cat_baby_care_1781762462433.jpg';
import catFeeding from '../assets/images/cat_feeding_1781762477089.jpg';
import catNursery from '../assets/images/cat_nursery_1781762490565.jpg';
import catToys from '../assets/images/cat_toys_1781762503479.jpg';

const categories = [
  { name: 'Baby Care', desc: "Gentle and safe products for your baby's daily care routine.", img: catBabyCare },
  { name: 'Feeding Essentials', desc: 'Bottles, bibs, feeding sets, and accessories designed for happy mealtimes.', img: catFeeding },
  { name: 'Nursery Collection', desc: 'Everything you need to create a cozy and comforting nursery.', img: catNursery },
  { name: 'Toys & Learning', desc: 'Fun, educational, and developmental toys for growing minds.', img: catToys }
];

const features = [
  { text: 'Certified Safe Materials', icon: ShieldCheck },
  { text: 'Eco-Friendly Products', icon: Leaf },
  { text: 'Parent-Approved Quality', icon: HeartHandshake },
  { text: 'Fast & Reliable Shipping', icon: Truck },
  { text: 'Exceptional Customer Support', icon: HeadphonesIcon },
];

export default function Home() {
  const { addToCart } = useCart();
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Baby Bloom",
    "description": "Premium baby products, newborn essentials, baby clothing, and eco-friendly nursery items.",
    "url": "https://babybloom-52.netlify.app/",
    "telephone": "+18001234567",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Baby Lane",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    }
  };

  return (
    <div className="bg-stone-50">
      <SEO 
        title="Baby Bloom | Premium Baby Products & Newborn Essentials"
        description="Discover premium, safe, and eco-friendly baby products at Baby Bloom. Shop newborn essentials, feeding gear, nursery decor, and educational toys."
        canonical="/"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroImage} 
            alt="Beautiful Baby Nursery Background" 
            className="w-full h-full object-cover opacity-80"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white font-bold mb-6 drop-shadow-md"
          >
            Nurturing Little Moments,<br className="hidden md:block"/> One Product at a Time
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-100 mb-10 drop-shadow max-w-2xl mx-auto"
          >
            Premium baby essentials designed with comfort, safety, and love for every stage of your baby's journey.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-colors text-lg inline-flex justify-center items-center">
              Shop Now
            </Link>
            <Link to="/products" className="bg-white hover:bg-stone-100 text-stone-800 px-8 py-3 rounded-full font-medium transition-colors text-lg inline-flex justify-center items-center">
              Explore Collections <ArrowRight className="ml-2 w-5 h-5"/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Featured Categories</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl shadow-sm">
                <img src={cat.img} alt={`Category: ${cat.name}`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-serif font-bold text-xl">{cat.name}</h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-rose-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-12">Why Choose Baby Bloom</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-rose-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="font-medium text-stone-800 text-sm md:text-base">{feature.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Featured Products</h2>
          <Link to="/products" className="text-rose-500 hover:text-rose-600 font-medium hidden sm:flex items-center">
            View All <ArrowRight className="ml-1 w-4 h-4"/>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="h-64 overflow-hidden bg-stone-100">
                <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium text-stone-800 mb-2 truncate">{product.name}</h3>
                <p className="text-rose-500 font-bold mb-4">${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-2 border border-stone-200 rounded-full text-stone-600 font-medium hover:bg-rose-500 hover:text-white hover:border-transparent transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10 sm:hidden">
           <Link to="/products" className="text-rose-500 hover:text-rose-600 font-medium inline-flex items-center">
            View All Products <ArrowRight className="ml-1 w-4 h-4"/>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Customer Testimonials</h2>
             <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm relative"
              >
                <div className="text-rose-200 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="font-bold text-stone-800 font-serif">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
