import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Shield, Zap, Clock, Users, Award, Search, Calendar, ArrowRight } from 'lucide-react';
import blogPostsData from './BlogPostsData';
import style from '../global.module.css';

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let animationFrame;
    const updateCount = (timestamp) => {
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

const CounterCard = ({ end, suffix, label, delay = 0 }) => {
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

const BlogCard = ({ title, excerpt, date, image }) => (
  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
    <CardHeader className="p-0">
      <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${image})` }} />
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
  const navigate = useNavigate();

  // Use blog posts from BlogPostsData
  const blogPosts = blogPostsData.slice(0, 3); // Show only latest 3

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // No-op, as filtering is live, but prevents form submit reload
  };

  const handleViewAll = () => {
    navigate('/blog');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated DB Shell on Right */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className={`text-center md:text-left ${style.animatefadeinup}`}> 
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Database Solutions</span>
                <br />
                <span className="text-gray-800">That Just Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed">
                Transform your database infrastructure with our expert DBMS management solutions. 
                From optimization to migration, we ensure your data works as hard as you do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto md:mx-0">
                <div className="animate-scale-in" style={{ animationDelay: `${200 / 1000}s` }}>
                  <div className="text-3xl font-bold text-fixmy-orange-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: `${400 / 1000}s` }}>
                  <div className="text-3xl font-bold text-fixmy-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
                <CounterCard end={500} suffix="+" label="Databases Optimized" delay={600} />
              </div>
            </div>
            {/* Right: Animated DB Shell Visual */}
            <div className={`relative w-full mx-auto md:mx-0 ${style.animatefloat}`}> 
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e06325]/5 to-blue-500/5"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">MongoDB Shell</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className={`flex items-center gap-2 ${style.animatetypewriter}`}>
                      <span className="text-[#e06325]">{'>'}</span>
                      <span className="text-[#3d3e46]">db.users.find()</span>
                      <div className={`w-2 h-4 bg-[#e06325] ${style.animateblink}`}></div>
                    </div>
                    <div className="bg-gray-50 rounded p-3 animate-fade-in">
                      <div className="h-2 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                      <div className="h-2 bg-[#e06325]/20 rounded animate-pulse w-1/2"></div>
                    </div>
                    <div className={`flex items-center gap-2 text-green-600 ${style.animatefadeindelayed}`}>
                      <span>✓</span>
                      <span>Query optimized — 85% faster</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center group hover:scale-105 transition-transform">
                      <Database className="h-8 w-8 text-green-600 group-hover:animate-spin" />
                    </div>
                    <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group hover:scale-105 transition-transform">
                      <Shield className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#e06325]/10 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gradient-to-br from-white via-fixmy-orange-50 to-fixmy-orange-100 border-b border-fixmy-orange-100 overflow-hidden">
        {/* Removed DB logos background */}
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center gradient-text drop-shadow-lg">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/90 rounded-3xl p-10 shadow-2xl hover:shadow-fixmy-orange-200 transition-all border border-fixmy-orange-100 hover:-translate-y-3 relative z-10 backdrop-blur-md">
              <div className="flex justify-center mb-4"><Database className="w-14 h-14 text-fixmy-orange-600" /></div>
              <h3 className="text-2xl font-bold mb-3 text-center text-fixmy-orange-700">Database Optimization</h3>
              <ul className="text-gray-700 text-base mb-5 list-disc list-inside space-y-1">
                <li>Query Performance Tuning</li>
                <li>Index Optimization</li>
                <li>Schema Design</li>
                <li>Performance Monitoring</li>
              </ul>
              <p className="text-gray-500 text-center mb-6">Boost performance, reduce costs, and ensure reliability with our expert optimization services.</p>
            </div>
            <div className="bg-white/90 rounded-3xl p-10 shadow-2xl hover:shadow-fixmy-orange-200 transition-all border border-fixmy-orange-100 hover:-translate-y-3 relative z-10 backdrop-blur-md">
              <div className="flex justify-center mb-4"><Shield className="w-14 h-14 text-fixmy-orange-600" /></div>
              <h3 className="text-2xl font-bold mb-3 text-center text-fixmy-orange-700">Database Security</h3>
              <ul className="text-gray-700 text-base mb-5 list-disc list-inside space-y-1">
                <li>Security Assessment</li>
                <li>Compliance Auditing</li>
                <li>Access Control</li>
                <li>Encryption Implementation</li>
              </ul>
              <p className="text-gray-500 text-center mb-6">Protect your data with advanced security solutions and regular audits.</p>
            </div>
            <div className="bg-white/90 rounded-3xl p-10 shadow-2xl hover:shadow-fixmy-orange-200 transition-all border border-fixmy-orange-100 hover:-translate-y-3 relative z-10 backdrop-blur-md">
              <div className="flex justify-center mb-4"><Zap className="w-14 h-14 text-fixmy-orange-600" /></div>
              <h3 className="text-2xl font-bold mb-3 text-center text-fixmy-orange-700">Migration & Support</h3>
              <ul className="text-gray-700 text-base mb-5 list-disc list-inside space-y-1">
                <li>Cloud & On-Prem Migration</li>
                <li>Zero Downtime</li>
                <li>24/7 Support</li>
                <li>Disaster Recovery</li>
              </ul>
              <p className="text-gray-500 text-center mb-6">Seamless migration and 24/7 support for all your database needs.</p>
            </div>
          </div>
          <div className="text-center mt-14">
            <Button 
              variant="outline"
              size="lg"
              className="border-fixmy-orange-600 text-fixmy-orange-600 hover:bg-fixmy-orange-50 hover-glow text-xl px-10 py-4 font-semibold shadow-md"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
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
            <form onSubmit={handleSearch} className="max-w-md mx-auto relative flex">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch(e);
                }}
                className="pl-10 pr-4 py-3 rounded-full border-2 border-fixmy-orange-200 focus:border-fixmy-orange-500 transition-colors flex-1"
              />
              <Button
                type="submit"
                variant="outline"
                className="ml-2 border-fixmy-orange-600 text-fixmy-orange-600 hover:bg-fixmy-orange-50 px-6"
              >
                Search
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, cursor: 'pointer' }}
                onClick={() => navigate(`/blog/${post.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${post.id}`); }}
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
              onClick={handleViewAll}
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
