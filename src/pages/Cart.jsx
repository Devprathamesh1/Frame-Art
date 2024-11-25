import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="font-dancing text-4xl text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="font-playfair text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link
            to="/products"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-playfair text-lg hover:bg-purple-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="font-dancing text-4xl text-gray-900 mb-8">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-grow">
                <h3 className="font-playfair text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-100 rounded-l hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-50">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-100 rounded-r hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-playfair font-semibold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-playfair hover:bg-purple-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}