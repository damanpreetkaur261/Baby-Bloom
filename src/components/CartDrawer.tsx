import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" /> Your Cart
              </h2>
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-rose-500 transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-stone-500 text-center space-y-4">
                  <ShoppingCart className="w-12 h-12 text-stone-300" />
                  <p>Your cart is currently empty.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-full font-medium transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-medium text-stone-800 text-sm leading-tight leading-snug">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border border-stone-200 rounded-full bg-stone-50">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-rose-500"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium text-stone-800">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-rose-500"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-rose-500">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-stone-200 p-6 bg-stone-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-stone-600">Subtotal</span>
                  <span className="text-xl font-bold text-stone-900">${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-medium transition-colors"
                >
                  Proceed to Checkout
                </button>
                <p className="text-xs text-stone-500 text-center mt-4">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
