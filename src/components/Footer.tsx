import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Pin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-white mb-4 block">
              Baby Bloom
            </Link>
            <p className="text-sm text-stone-400 max-w-xs">
              Premium baby essentials designed with comfort, safety, and love for every stage of your baby's journey.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-rose-400 transition-colors">Shop All</Link></li>
              <li><Link to="/blog" className="hover:text-rose-400 transition-colors">Our Blog</Link></li>
              <li><Link to="/contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="cursor-pointer hover:text-rose-400 transition-colors">Shipping & Returns</span></li>
              <li><span className="cursor-pointer hover:text-rose-400 transition-colors">FAQ</span></li>
              <li><span className="cursor-pointer hover:text-rose-400 transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-rose-400 transition-colors">Terms of Service</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Pin className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
            <p className="text-sm text-stone-400">Join our community for parenting tips and exclusive offers.</p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Baby Bloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
