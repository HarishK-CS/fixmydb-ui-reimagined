
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <div className="w-8 h-8 bg-gradient-to-r from-db-blue-600 to-db-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-2xl font-bold gradient-text">FixMyDB</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-db-blue-600 relative ${
                  activeSection === item.href.substring(1) 
                    ? 'text-db-blue-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-db-blue-600 animate-scale-in" />
                )}
              </button>
            ))}
          </div>
          
          <div className="animate-slide-in-right">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-db-blue-600 to-db-green-500 hover:from-db-blue-700 hover:to-db-green-600 text-white hover-glow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
