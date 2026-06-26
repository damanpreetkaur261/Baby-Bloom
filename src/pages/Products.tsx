import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { allProducts } from '../data';
import { useCart } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useCart();
  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Products</h1>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium baby essentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {allProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col"
            >
              <div className="h-72 overflow-hidden bg-stone-100 relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">{product.name}</h2>
                <p className="text-rose-500 font-bold text-xl mb-4">${product.price}</p>
                <p className="text-stone-600 mb-6 flex-grow">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, j) => (
                      <li key={j} className="text-stone-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-4 mt-auto bg-stone-900 hover:bg-rose-500 text-white rounded-full font-medium transition-colors flex justify-center items-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
