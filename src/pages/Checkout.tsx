import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState<any[]>([]);
  const [purchasedTotal, setPurchasedTotal] = useState(0);
  const [purchasedAddress, setPurchasedAddress] = useState<any>({});

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiration: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setPurchasedItems([...cart]);
      setPurchasedTotal(totalPrice);
      setPurchasedAddress({ ...formData });
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-stone-50 py-16 md:py-24 min-h-[70vh] flex flex-col items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 max-w-2xl w-full"
        >
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Payment Successful!</h2>
            <p className="text-stone-600 leading-relaxed">
              Thank you, {purchasedAddress.firstName}! Your order has been received and is being processed. 
              We've sent a confirmation email to {purchasedAddress.email}.
            </p>
          </div>

          <div className="border-t border-b border-stone-100 py-6 mb-8">
            <h3 className="font-bold text-stone-900 mb-4 text-lg">Order Details</h3>
            <div className="space-y-4 mb-6">
              {purchasedItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div className="flex gap-4">
                    <span className="font-medium text-stone-800">{item.quantity}x</span>
                    <span className="text-stone-600">{item.name}</span>
                  </div>
                  <span className="font-medium text-stone-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>${purchasedTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Taxes</span>
                <span>${(purchasedTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-stone-900 text-base pt-4 mt-2 border-t border-stone-100">
                <span>Total</span>
                <span className="text-rose-500">${(purchasedTotal + purchasedTotal * 0.08).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mb-10 text-sm border-b border-stone-100 pb-8">
            <h3 className="font-bold text-stone-900 mb-2">Shipping Address</h3>
            <p className="text-stone-600">
              {purchasedAddress.firstName} {purchasedAddress.lastName}<br />
              {purchasedAddress.address}<br />
              {purchasedAddress.city}, {purchasedAddress.zipCode}
            </p>
          </div>

          <button 
            onClick={() => navigate('/products')}
            className="w-full py-4 bg-stone-900 hover:bg-rose-500 text-white rounded-full font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-stone-50 py-16 md:py-24 min-h-[70vh] flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-16 h-16 text-stone-300 mb-6" />
        <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Your cart is empty</h2>
        <button 
          onClick={() => navigate('/products')}
          className="py-3 px-8 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium transition-colors"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Checkout</h1>
          <div className="w-16 h-1 bg-rose-300 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <form id="checkout-form" onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-8">
              
              {/* Shipping Information */}
              <div>
                <h2 className="text-xl font-bold text-stone-900 mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">First Name</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Last Name</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Street Address</label>
                    <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">City</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">ZIP Code</label>
                    <input required type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-stone-100"></div>

              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                  Payment Details <CreditCard className="ml-3 w-5 h-5 text-stone-400" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Card Number</label>
                    <input required type="text" name="cardNumber" placeholder="0000 0000 0000 0000" maxLength={19} value={formData.cardNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Expiration Date</label>
                    <input required type="text" name="expiration" placeholder="MM/YY" maxLength={5} value={formData.expiration} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">CVC</label>
                    <input required type="text" name="cvc" placeholder="123" maxLength={4} value={formData.cvc} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors bg-stone-50" />
                  </div>
                </div>
              </div>

            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 sticky top-24">
              <h2 className="text-lg font-bold text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="font-medium text-stone-800 text-sm">{item.name}</h3>
                      <p className="text-stone-500 text-xs mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-stone-800 text-sm pt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-6 space-y-3 mb-6">
                <div className="flex justify-between text-stone-600 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-600 text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-stone-600 text-sm">
                  <span>Taxes</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-stone-100 pt-3 flex justify-between items-center">
                  <span className="font-bold text-stone-900">Total</span>
                  <span className="text-xl font-bold text-rose-500">
                    ${(totalPrice + totalPrice * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                disabled={isProcessing}
                className="w-full py-4 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white rounded-xl font-medium transition-colors flex justify-center items-center"
              >
                {isProcessing ? 'Processing...' : `Pay $${(totalPrice + totalPrice * 0.08).toFixed(2)}`}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
