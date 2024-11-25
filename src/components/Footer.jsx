export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gray-900">Frame Art</h3>
            <p className="text-gray-600 text-sm">Crafting beautiful moments with elegant frames since 1970</p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-purple-600">Home</a></li>
              <li><a href="/products" className="hover:text-purple-600">Products</a></li>
              <li><a href="/about" className="hover:text-purple-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/shipping" className="hover:text-purple-600">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-purple-600">Returns</a></li>
              <li><a href="/faq" className="hover:text-purple-600">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@frameart.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Frame Street</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Frame Art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}