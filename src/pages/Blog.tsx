import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import blogPostsData from './BlogPostsData';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const blogPosts = blogPostsData;

  const categories = ['All', 'Performance', 'Security', 'Cloud Migration', 'SQL', 'Backup', 'Database Comparison'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog | FixMyDB – Database Insights, Tutorials & Best Practices</title>
        <meta name="description" content="Read expert articles, tutorials, and best practices on database management, performance, security, and cloud migration from the FixMyDB team." />
        <meta name="keywords" content="FixMyDB blog, database tutorials, database best practices, database performance, database security, cloud migration" />
        <link rel="canonical" href="https://fixmydb.com/blog" />
        <meta property="og:title" content="Blog | FixMyDB" />
        <meta property="og:description" content="Expert articles and tutorials on database management, performance, security, and more from FixMyDB." />
        <meta property="og:url" content="https://fixmydb.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <div className="min-h-screen ">
          {/* Hero Section with Background Image */}
          <section className="py-20 bg-fixmy-orange-80 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10  ">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop"
                alt="Database Code Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                Database Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Expert insights, tutorials, and best practices for database management
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-fixmy-orange-500"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={selectedCategory === category
                        ? "bg-fixmy-orange-600 hover:bg-fixmy-orange-700"
                        : "border-fixmy-orange-200 text-fixmy-orange-600 hover:bg-fixmy-orange-50"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-20 bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop"
                alt="Code Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6 animate-fade-in">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
                Subscribe to our newsletter for the latest database insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-white text-gray-800 border-0"
                />
                <Button className="bg-white text-fixmy-orange-600 hover:bg-gray-100 h-12 px-8 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
