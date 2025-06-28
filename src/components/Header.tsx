
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              src="/lovable-uploads/246fa17d-693d-4291-8b0f-cc6dfc9159e8.png" 
              alt="FixMyDB Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold gradient-text">FixMyDB</span>
          </Link>
          
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
          
          <div className="animate-slide-in-right">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
