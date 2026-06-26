import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert('Thank you for your message! Our team will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Get in Touch</h1>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our products, shipping, or parenting resources, our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex items-start">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Address</h3>
                <p className="text-stone-600">Baby Bloom Headquarters<br/>245 Blossom Avenue<br/>Austin, TX 78701<br/>United States</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex items-start">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Phone & Email</h3>
                <p className="text-stone-600 mb-1">+1 (800) 555-2026</p>
                <a href="mailto:hello@babybloom.com" className="text-rose-500 hover:underline">hello@babybloom.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex items-start">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Business Hours</h3>
                <p className="text-stone-600">Monday – Friday: 9:00 AM – 6:00 PM<br/>Saturday: 10:00 AM – 4:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100"
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-medium transition-colors flex justify-center items-center text-lg"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
