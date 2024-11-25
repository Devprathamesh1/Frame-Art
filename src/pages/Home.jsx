export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="font-dancing text-7xl mb-6">Beautiful Frames for Your Memories</h1>
              <p className="font-playfair text-xl mb-8 leading-relaxed">
                Transform your cherished moments into timeless pieces of art with our handcrafted frames
              </p>
              <a 
                href="/products" 
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-playfair text-lg hover:bg-purple-700 transition-colors"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Frame Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl h-[500px] border-[20px] border-purple-100 rounded-lg transform -rotate-2"></div>
          <div className="absolute w-full max-w-4xl h-[500px] border-[20px] border-purple-200 rounded-lg transform rotate-2"></div>
        </div>
        
        <div className="relative bg-white shadow-xl rounded-lg p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-purple-600"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-purple-600"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-purple-600"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-600"></div>
          
          <div className="text-center mb-12">
            <h2 className="font-dancing text-5xl text-gray-900 mb-6">Capture Your Story</h2>
            <p className="font-playfair text-gray-600 max-w-2xl mx-auto text-lg">
              Every frame tells a unique story. Let us help you tell yours with our exquisite collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                <h3 className="font-playfair text-xl font-semibold text-purple-600 mb-2">Custom Sizing</h3>
                <p className="text-gray-600">Perfect fit for every masterpiece, tailored to your specifications</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                <h3 className="font-playfair text-xl font-semibold text-purple-600 mb-2">Premium Materials</h3>
                <p className="text-gray-600">Crafted from the finest materials for lasting beauty</p>
              </div>
            </div>
            <div className="space-y-6 md:mt-12">
              <div className="bg-purple-50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                <h3 className="font-playfair text-xl font-semibold text-purple-600 mb-2">Elegant Designs</h3>
                <p className="text-gray-600">Timeless styles that complement any décor</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                <h3 className="font-playfair text-xl font-semibold text-purple-600 mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Meticulously crafted by skilled artisans</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-lg transition-colors duration-300 font-playfair"
            >
              View Our Collection
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl text-gray-900 mb-4">Featured Frames</h2>
            <p className="font-playfair text-gray-600 max-w-2xl mx-auto">
              Discover our most popular selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="absolute inset-0 border-8 border-purple-100 rounded transform rotate-3"></div>
                  <img 
                    src={`/images/frame${index}.jpg`}
                    alt={`Featured frame ${index}`}
                    className="relative z-10 w-full h-64 object-cover rounded"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {index === 1 ? "Classic Collection" : index === 2 ? "Modern Series" : "Vintage Edition"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {index === 1 ? "Timeless elegance for any space" : index === 2 ? "Contemporary designs for modern homes" : "Antique-inspired masterpieces"}
                </p>
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-playfair hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}