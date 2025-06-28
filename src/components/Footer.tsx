
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/246fa17d-693d-4291-8b0f-cc6dfc9159e8.png" 
                alt="FixMyDB Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold">FixMyDB</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional database management solutions that scale with your business. 
              Reliable, secure, and optimized for performance.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-fixmy-orange-400 transition-colors">Database Optimization</Link></li>
              <li><Link to="/services" className="hover:text-fixmy-orange-400 transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-fixmy-orange-400 transition-colors">Security Auditing</Link></li>
              <li><Link to="/services" className="hover:text-fixmy-orange-400 transition-colors">24/7 Support</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-fixmy-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-fixmy-orange-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-fixmy-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-fixmy-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <div>📧 hello@fixmydb.com</div>
              <div>📞 +1 (555) 123-4567</div>
              <div>🕒 24/7 Support Available</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} FixMyDB. All rights reserved. Built with ❤️ for better databases.</p>
        </div>
      </div>
    </footer>
  );
};
