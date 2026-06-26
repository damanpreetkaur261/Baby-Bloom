import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { blogArticles } from '../data';
import SEO from '../components/SEO';

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Baby Bloom Parenting Hub",
    "description": "Practical tips, expert advice, and resources to support you on your parenting journey.",
    "url": "https://babybloom-52.netlify.app/blog",
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "datePublished": article.date,
      "description": article.excerpt,
      "image": article.image
    }))
  };

  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <SEO 
        title="Parenting Hub Blog | Baby Bloom"
        description="Practical tips, expert advice, and resources to support you on your parenting journey. Read our latest articles on baby care, feeding, and more."
        canonical="/blog"
        schema={schema}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Parenting Hub</h1>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Practical tips, expert advice, and resources to support you on your parenting journey.
          </p>
        </motion.div>

        <div className="space-y-12">
          {blogArticles.map((article, i) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col md:flex-row group cursor-pointer"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={`Blog post: ${article.title}`} 
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <p className="text-rose-500 font-medium text-sm mb-3 uppercase tracking-wider">{article.date}</p>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-rose-500 transition-colors">
                  {article.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-rose-500 font-medium group-hover:text-rose-600">
                  Read Article <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="py-3 px-8 bg-white border border-stone-200 text-stone-600 font-medium rounded-full hover:bg-stone-100 transition-colors">
             Load More Articles
           </button>
        </div>
      </div>
    </div>
  );
}
