
import { PHONE, SUPPORT_EMAIL } from '@/constants';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" 
          alt="Circuit Board Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-fixmy-orange-500 to-fixmy-orange-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
              </div>
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
              <li><Link to="/blog" className="hover:text-fixmy-orange-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-fixmy-orange-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-fixmy-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-fixmy-orange-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-fixmy-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{SUPPORT_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-fixmy-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{PHONE}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-fixmy-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>24/7 Support Available</span>
              </div>
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
