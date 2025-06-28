
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Database, Shield, Zap, Clock, Users, Award } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fixmy-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-fixmy-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
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
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white px-8 py-4 text-lg hover-glow animate-pulse-glow"
                >
                  Start Your Database Journey
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-fixmy-orange-600 text-fixmy-orange-600 hover:bg-fixmy-orange-50 px-8 py-4 text-lg hover-glow"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-fixmy-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-fixmy-orange-500 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Databases Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose FixMyDB?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive database management solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Database Optimization',
                description: 'Fine-tune your database performance for maximum efficiency and speed.',
                color: 'text-fixmy-orange-600'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'Comprehensive security audits and implementations to protect your data.',
                color: 'text-fixmy-orange-500'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimize queries and indexes for blazing fast database performance.',
                color: 'text-orange-600'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock monitoring and support for your critical systems.',
                color: 'text-fixmy-orange-600'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified database professionals with years of industry experience.',
                color: 'text-fixmy-orange-500'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of successful database implementations and optimizations.',
                color: 'text-orange-600'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
