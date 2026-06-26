import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Lightbulb, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    { title: 'Safety First', desc: 'Every product undergoes strict quality checks.', icon: ShieldCheck },
    { title: 'Sustainability', desc: 'We prioritize eco-friendly materials and responsible sourcing.', icon: Leaf },
    { title: 'Innovation', desc: 'We continuously improve our product offerings based on parent feedback.', icon: Lightbulb },
    { title: 'Care & Community', desc: 'We believe in supporting families throughout their parenting journey.', icon: Users },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Baby Bloom",
    "description": "Learn about Baby Bloom's mission to provide parents with safe, high-quality, and thoughtfully designed baby products.",
    "url": "https://babybloom-52.netlify.app/about"
  };

  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <SEO 
        title="About Us | Baby Bloom"
        description="Learn about Baby Bloom's mission to provide parents with safe, high-quality, and thoughtfully designed baby products."
        canonical="/about"
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full mb-10"></div>
          <p className="text-lg text-stone-600 leading-relaxed mb-6 text-left md:text-center">
            Baby Bloom was founded with a simple mission: to provide parents with safe, high-quality, and thoughtfully designed baby products that make everyday parenting easier and more joyful.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed text-left md:text-center">
            As parents ourselves, we understand the importance of choosing products that combine comfort, safety, and practicality. That's why every item in our collection is carefully selected and tested to meet the highest standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 text-rose-500">Our Mission</h2>
            <p className="text-stone-600 leading-relaxed">
              To support families by offering premium baby essentials that promote healthy growth, comfort, and happiness.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 text-blue-500">Our Vision</h2>
            <p className="text-stone-600 leading-relaxed">
              To become a trusted destination for parents seeking reliable, sustainable, and innovative baby products worldwide.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 mb-4 shadow-sm">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{val.title}</h3>
                <p className="text-stone-600 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white p-12 rounded-3xl shadow-sm border border-stone-100"
        >
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Our Team</h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A passionate group of parents, designers, and childcare experts committed to creating the best experience for families.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
