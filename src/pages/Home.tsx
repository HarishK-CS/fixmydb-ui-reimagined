import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { Database, Shield, Zap, Clock, Users, Award, Search, Calendar, ArrowRight } from 'lucide-react';
import blogPostsData from './BlogPostsData';
import style from '../global.module.css';
import Lottie from 'lottie-react';
import personMonitor from '../assets/person_monitor.json';
import mysqlLogo from '../assets/mysql.png';
import postgresLogo from '../assets/postgresql.png';
import mongodbLogo from '../assets/mongodb.png';
import oracleLogo from '../assets/oracle.png';
import redisLogo from '../assets/redis.png';

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

const BlogCard = ({ title, excerpt, date, image, author, readTime, category }) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-2 cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      {category && (
        <span className="absolute top-4 left-4 bg-fixmy-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          {category}
        </span>
      )}
    </div>
    <CardHeader>
      <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-fixmy-orange-600 transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600 text-sm leading-relaxed">
        {excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          {author && (<><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v1a1 1 0 001 1h12a1 1 0 001-1v-1c0-2-3-4-7-4z" /></svg><span>{author}</span></>)}
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        {readTime && <span className="text-sm text-fixmy-orange-600 font-medium">{readTime}</span>}
        <Button variant="ghost" className="text-fixmy-orange-600 hover:text-fixmy-orange-700 hover:bg-fixmy-orange-50 p-0">
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
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
    <>
      <Helmet>
        <title>FixMyDB | Reliable Database Solutions, Optimization & 24/7 Support</title>
        <meta name="description" content="FixMyDB offers expert database optimization, security, migration, and 24/7 support. Get a free database health assessment and discover why businesses trust us for tamper-proof data integrity and zero data loss." />
        <meta name="keywords" content="FixMyDB, database optimization, database support, database migration, database security, free assessment, uptime guarantee" />
        <link rel="canonical" href="https://fixmydb.com/" />
        <meta property="og:title" content="FixMyDB | Reliable Database Solutions, Optimization & 24/7 Support" />
        <meta property="og:description" content="Get expert database consulting, optimization, and support from FixMyDB. Free assessment, 99.9% uptime, and zero data loss guarantee." />
        <meta property="og:url" content="https://fixmydb.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FixMyDB",
          "url": "https://fixmydb.com",
          "logo": "https://www.fixmydb.com/logo.svg",
          "sameAs": [
            "https://www.linkedin.com/company/fixmydb-solutions"
          ]
        })}
        </script>
      </Helmet>
      <main>
        <div className="min-h-screen ">
          {/* Hero Section with Animated DB Shell on Right */}
          <section className="min-h-screen flex pt-24  items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
            <div className="container mx-auto  px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto min-h-[70vh]">
                {/* Left: Text Content */}
                <div className={`text-center lg:text-left ${style.animatefadeinup} space-y-8 flex flex-col justify-center h-full`}>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                      <span className="gradient-text">Reliable Database Solutions </span>
                      <br />
                      <span className="text-gray-800">That Never Let You Down.</span>
                    </h1>

                    {/* <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Transform your database infrastructure with our <strong>proven DBMS management solutions</strong>. 
            From optimization to migration, we ensure your data works as hard as you do—
            <span className="text-fixmy-orange-600 font-semibold"> backed by 12+ years of enterprise experience</span>.
          </p> */}
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center lg:justify-center gap-3">
                    {/* <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Client-Centric Approach to Every Project
                </span> */}
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Tamper-Proof Data Integrity
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Zero Data Loss Guarantee
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact" className="flex justify-center w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white px-8 py-4 text-lg hover-glow animate-pulse-glow relative shadow-lg mx-auto"
                      >
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce font-bold">
                          FREE
                        </span>
                        Claim Your Free Assessment
                      </Button>
                    </Link>
                    <Link to="/services" className="flex justify-center w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-2 border-fixmy-orange-600 text-fixmy-orange-600 hover:bg-fixmy-orange-50 hover:text-fixmy-orange-700 px-8 py-4 text-lg hover-glow mx-auto"
                      >
                        Explore Services
                      </Button>
                    </Link>
                  </div>

                  {/* Free Consultation Highlight */}
                  <div className="bg-gradient-to-r from-fixmy-orange-100 via-orange-200 to-fixmy-orange-300 border-l-8 border-fixmy-orange-600 rounded-r-2xl p-8 shadow-lg mt-20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-fixmy-orange-200 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-fixmy-orange-700 text-2xl">🎯</span>
                      </div>
                      <h3 className="text-2xl font-bold text-fixmy-orange-800 drop-shadow">FREE Database Health Assessment</h3>
                    </div>
                    {/* <p className="text-gray-800 mb-3 leading-relaxed font-medium">
                      Get a comprehensive analysis of your current database setup plus a custom optimization roadmap
                      <span className="font-bold text-fixmy-orange-700"> (Usually $500 - Yours FREE)</span>
                    </p> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-base mt-8">
                      <div className="flex items-center gap-2 text-fixmy-orange-800 font-semibold">
                        <span className="text-fixmy-orange-600">⏱️</span>
                        30-minute expert consultation
                      </div>
                      <div className="flex items-center gap-2 text-fixmy-orange-800 font-semibold">
                        <span className="text-fixmy-orange-600">📊</span>
                        Performance audit report
                      </div>
                      <div className="flex items-center gap-2 text-fixmy-orange-800 font-semibold">
                        <span className="text-fixmy-orange-600">🗺️</span>
                        Strategic improvement plan
                      </div>
                    </div>
                  </div>


                </div>

                {/* Right: Lottie Animation + DB Logos + Stats Grid */}
                <div className={`relative w-full max-w-lg mx-auto lg:mx-0 flex flex-col justify-center items-center h-full gap-8 ${style.animatefloat}`}>
                  <div className="w-full max-w-md mx-auto flex flex-col items-center relative">
                    {/* Lottie Animation */}
                    <div className="relative flex items-center justify-center w-90 h-[28rem] mx-auto">
                      <Lottie animationData={personMonitor} loop={true} className="w-90 h-[30rem] z-10" />
                      {/* Database Logos Around Lottie - Each with a unique animation, no circle or background */}
                      {/* Top Center (MySQL) - pulse */}
                      <img src={mysqlLogo} alt="MySQL" className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-14 animate-pulse" />
                      {/* Top Left (PostgreSQL) - wiggle */}
                      <img src={postgresLogo} alt="PostgreSQL" className="absolute top-14 left-8 w-12 h-12 animate-wiggle" />
                      {/* Top Right (MongoDB) - spin */}
                      <img src={mongodbLogo} alt="MongoDB" className="absolute top-14 right-8 w-12 h-12 animate-swing" />
                      {/* Left Center (Oracle) - swing */}
                      <img src={oracleLogo} alt="Oracle" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 animate-swing" />
                      {/* Right Center (Redis) - bounce-x */}
                      <img src={redisLogo} alt="Redis" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 animate-bounce-x" />
                    </div>
                    <style>{`
                  @keyframes wiggle { 0%,100%{transform:rotate(-8deg);} 50%{transform:rotate(8deg);} }
                  .animate-wiggle { animation: wiggle 1.8s ease-in-out infinite; }
                  @keyframes swing { 0%,100%{transform:translateY(0) rotate(-8deg);} 50%{transform:translateY(-10px) rotate(8deg);} }
                  .animate-swing { animation: swing 2.2s ease-in-out infinite; }
                  @keyframes spin-slow { 100% { transform: rotate(360deg); } }
                  .animate-spin-slow { animation: spin-slow 7s linear infinite; }
                  @keyframes bounce-x { 0%,100%{transform:translateX(0);} 50%{transform:translateX(18px);} }
                  .animate-bounce-x { animation: bounce-x 2.2s cubic-bezier(.68,-0.55,.27,1.55) infinite; }
                `}</style>
                  </div>

                  {/* Enhanced Stats Grid (remains below) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 w-full">
                    <div className="text-center animate-scale-in" style={{ animationDelay: `${100 / 1000}s` }}>
                      <div className="text-4xl font-bold text-fixmy-orange-600 mb-2">99.9%</div>
                      <div className="text-gray-600 font-medium">Uptime Guarantee</div>
                      <div className="text-xs text-gray-500 mt-1">SLA-backed promise</div>
                    </div>
                    <div className="text-center animate-scale-in" style={{ animationDelay: `${250 / 1000}s` }}>
                      <div className="text-4xl font-bold text-fixmy-orange-600 mb-2">24/7</div>
                      <div className="text-gray-600 font-medium">Expert Support</div>
                      <div className="text-xs text-gray-500 mt-1">Never wait for help</div>
                    </div>
                    <div className="text-center animate-scale-in" style={{ animationDelay: `${400 / 1000}s` }}>
                      <CounterCard end={50} suffix="+" label="Databases Optimized" delay={400} />
                      <div className="text-xs text-gray-500 mt-1">Consistently Delivering Excellence </div>
                    </div>
                    <div className="text-center animate-scale-in" style={{ animationDelay: `${550 / 1000}s` }}>
                      <div className="text-4xl font-bold text-fixmy-orange-600 mb-2">100%</div>
                      <div className="text-gray-600 font-medium">Client Satisfaction</div>
                      <div className="text-xs text-gray-500 mt-1">Tailored for Industry Diversity</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-fixmy-orange-500/10 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-green-500/20 rounded-full animate-bounce delay-300"></div>
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
                    key={post.slug}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s`, cursor: 'pointer' }}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${post.slug}`); }}
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
      </main>
    </>
  );
};

export default Home;
