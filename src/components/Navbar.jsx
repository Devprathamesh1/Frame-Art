import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-dancing text-3xl text-purple-600">Frame Art</Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-playfair text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/products" className="font-playfair text-gray-700 hover:text-purple-600 transition-colors">Products</Link>
            <Link to="/cart" className="text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}