
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Shield, Zap, Clock, Users, Award, Search, Calendar, ArrowRight } from 'lucide-react';

// Counter hook for animated numbers
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

const CounterCard = ({ end, suffix, label, delay = 0 }: { end: number; suffix: string; label: string; delay?: number }) => {
  const [shouldStart, setShouldStart] = useState(false);
  const count = useCounter(shouldStart ? end : 0);

  useEffect(() => {
    const timer = setTimeout(() => setShouldStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="animate-scale-in" style={{ animationDelay: `${delay / 1000}s` }}>
      <div className="text-3xl font-bold text-fixmy-orange-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const BlogCard = ({ title, excerpt, date, image }: { title: string; excerpt: string; date: string; image: string }) => (
  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
    <CardHeader className="p-0">
      <div className="h-48 bg-gradient-to-r from-fixmy-orange-500 to-orange-600 rounded-t-lg flex items-center justify-center">
        <Database className="w-16 h-16 text-white" />
      </div>
    </CardHeader>
    <CardContent className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        {date}
      </div>
      <CardTitle className="mb-3 hover:text-fixmy-orange-600 transition-colors">{title}</CardTitle>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Button variant="ghost" className="p-0 h-auto text-fixmy-orange-600 hover:text-fixmy-orange-700">
        Read More <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </CardContent>
  </Card>
);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: "Database Performance Optimization: Best Practices",
      excerpt: "Learn the essential techniques to optimize your database performance and reduce query execution time by up to 80%.",
      date: "December 15, 2024",
      image: "/placeholder-blog-1.jpg"
    },
    {
      title: "MySQL vs PostgreSQL: Choosing the Right Database",
      excerpt: "Comprehensive comparison of MySQL and PostgreSQL to help you make the right choice for your next project.",
      date: "December 10, 2024",
      image: "/placeholder-blog-2.jpg"
    },
    {
      title: "Database Security: Protecting Your Data in 2024",
      excerpt: "Essential security measures every database administrator should implement to protect sensitive data.",
      date: "December 5, 2024",
      image: "/placeholder-blog-3.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <CounterCard end={99.9} suffix="%" label="Uptime Guarantee" delay={200} />
              <CounterCard end={24} suffix="/7" label="Expert Support" delay={400} />
              <CounterCard end={500} suffix="+" label="Databases Optimized" delay={600} />
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

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-fixmy-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest database trends, best practices, and expert insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 border-fixmy-orange-200 focus:border-fixmy-orange-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching "{searchQuery}"</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              className="border-fixmy-orange-600 text-fixmy-orange-600 hover:bg-fixmy-orange-50 hover-glow"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
