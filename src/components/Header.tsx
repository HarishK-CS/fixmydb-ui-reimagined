
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 animate-slide-in-left">
            <img 
              src={logo} 
              alt="FixMyDB Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold gradient-text">FixMyDB</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-fixmy-orange-600 relative ${
                  location.pathname === item.href 
                    ? 'text-fixmy-orange-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-fixmy-orange-600 animate-scale-in" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block animate-slide-in-right">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-fixmy-orange-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`text-base font-medium transition-all duration-300 hover:text-fixmy-orange-600 py-2 px-3 rounded-lg hover:bg-fixmy-orange-50 ${
                    location.pathname === item.href 
                      ? 'text-fixmy-orange-600 bg-fixmy-orange-50' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
