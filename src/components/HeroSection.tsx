
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-db-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-db-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Database Solutions</span>
            <br />
            <span className="text-gray-800">That Just Work</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your database infrastructure with our expert DBMS management solutions. 
            From optimization to migration, we ensure your data works as hard as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-db-blue-600 to-db-green-500 hover:from-db-blue-700 hover:to-db-green-600 text-white px-8 py-4 text-lg hover-glow animate-pulse-glow"
            >
              Start Your Database Journey
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              size="lg"
              className="border-db-blue-600 text-db-blue-600 hover:bg-db-blue-50 px-8 py-4 text-lg hover-glow"
            >
              Explore Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-db-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-db-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Databases Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
