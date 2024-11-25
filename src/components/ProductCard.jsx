import { useCart } from '../context/CartContext';

export default function ProductCard({ frame }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative">
        <img 
          src={frame.image} 
          alt={frame.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="font-playfair text-purple-600 font-semibold">${frame.price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-gray-900">{frame.name}</h3>
        <p className="mt-2 text-gray-600">{frame.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            {frame.sizes.map(size => (
              <span key={size} className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                {size}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {frame.colors.map(color => (
              <span key={color} className="px-2 py-1 text-sm bg-purple-50 rounded-full text-purple-600">
                {color}
              </span>
            ))}
          </div>
        </div>
        <button 
          onClick={() => addToCart(frame)}
          className="mt-6 w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-playfair hover:bg-purple-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}