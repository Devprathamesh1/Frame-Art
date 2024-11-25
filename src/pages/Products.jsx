import { frames } from '../data/frames';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="font-dancing text-5xl text-gray-900 mb-4">Our Frame Collection</h2>
        <p className="font-playfair text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium photo frames
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {frames.map(frame => (
          <ProductCard key={frame.id} frame={frame} />
        ))}
      </div>
    </div>
  );
}