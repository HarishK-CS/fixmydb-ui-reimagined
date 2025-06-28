import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Database Performance Optimization: 10 Best Practices',
      content: `
        <h2>Introduction</h2>
        <p>Database performance optimization is crucial for maintaining fast, responsive applications. Poor database performance can lead to slow page loads, timeouts, and frustrated users. In this comprehensive guide, we'll explore the top 10 best practices that can dramatically improve your database performance.</p>
        
        <h2>1. Index Optimization</h2>
        <p>Proper indexing is the foundation of database performance. Without the right indexes, your queries will perform full table scans, which become exponentially slower as your data grows.</p>
        <ul>
          <li>Create indexes on frequently queried columns</li>
          <li>Use composite indexes for multi-column queries</li>
          <li>Avoid over-indexing as it can slow down writes</li>
          <li>Regularly analyze and update your indexing strategy</li>
        </ul>
        
        <h2>2. Query Optimization</h2>
        <p>Writing efficient queries is essential for good performance. Here are key strategies:</p>
        <ul>
          <li>Use EXPLAIN to analyze query execution plans</li>
          <li>Avoid SELECT * and only fetch needed columns</li>
          <li>Use WHERE clauses to filter data early</li>
          <li>Consider query rewriting for better performance</li>
        </ul>
        
        <h2>3. Connection Pooling</h2>
        <p>Database connections are expensive resources. Connection pooling helps manage these efficiently by reusing existing connections instead of creating new ones for each request.</p>
        
        <h2>4. Caching Strategies</h2>
        <p>Implement caching at multiple levels to reduce database load:</p>
        <ul>
          <li>Application-level caching with Redis or Memcached</li>
          <li>Query result caching</li>
          <li>Database-level caching</li>
        </ul>
        
        <h2>5. Database Maintenance</h2>
        <p>Regular maintenance tasks are crucial for optimal performance:</p>
        <ul>
          <li>Update table statistics regularly</li>
          <li>Rebuild fragmented indexes</li>
          <li>Clean up unused data and logs</li>
          <li>Monitor and optimize storage</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Database optimization is an ongoing process that requires regular monitoring and adjustment. By implementing these best practices, you can ensure your database performs efficiently as your application scales.</p>
      `,
      author: 'John Smith',
      date: '2024-01-15',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'MongoDB vs PostgreSQL: Choosing the Right Database',
      content: `
        <h2>The Great Database Debate</h2>
        <p>Choosing between MongoDB and PostgreSQL is one of the most common decisions developers face when starting a new project. Both are excellent databases, but they serve different purposes and excel in different scenarios.</p>
        
        <h2>MongoDB: The Document Database</h2>
        <p>MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents. This makes it ideal for:</p>
        <ul>
          <li>Rapid prototyping and development</li>
          <li>Applications with evolving schemas</li>
          <li>Real-time analytics</li>
          <li>Content management systems</li>
        </ul>
        
        <h2>PostgreSQL: The Relational Powerhouse</h2>
        <p>PostgreSQL is an advanced relational database that offers:</p>
        <ul>
          <li>ACID compliance and strong consistency</li>
          <li>Complex queries and joins</li>
          <li>Advanced data types and extensions</li>
          <li>Mature ecosystem and tooling</li>
        </ul>
        
        <h2>Performance Comparison</h2>
        <p>Performance depends heavily on your use case:</p>
        <ul>
          <li><strong>Read-heavy workloads:</strong> MongoDB often performs better</li>
          <li><strong>Complex queries:</strong> PostgreSQL excels with its query optimizer</li>
          <li><strong>Transactions:</strong> PostgreSQL provides stronger ACID guarantees</li>
          <li><strong>Scaling:</strong> MongoDB has native sharding capabilities</li>
        </ul>
        
        <h2>Making the Right Choice</h2>
        <p>Consider these factors when choosing:</p>
        <ul>
          <li>Data structure and relationships</li>
          <li>Scaling requirements</li>
          <li>Team expertise</li>
          <li>Ecosystem and tooling needs</li>
        </ul>
      `,
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'Database Comparison',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Mastering Database Backups: Strategies for Zero Data Loss',
      content: `
        <h2>Why Backups Matter</h2>
        <p>Backups are your last line of defense against data loss. Learn the best strategies for full, incremental, and differential backups, and how to automate them for peace of mind.</p>
        <ul>
          <li>Full vs Incremental vs Differential</li>
          <li>Automated backup scheduling</li>
          <li>Testing your backups</li>
          <li>Cloud backup solutions</li>
        </ul>
        <h2>Conclusion</h2>
        <p>With the right backup strategy, you can recover from any disaster quickly and confidently.</p>
      `,
      author: 'Priya Patel',
      date: '2024-01-10',
      category: 'Backup & Recovery',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Scaling Databases: Sharding vs Replication',
      content: `
        <h2>Scaling Approaches</h2>
        <p>As your data grows, scaling becomes essential. This post explores sharding and replication, their pros and cons, and when to use each.</p>
        <ul>
          <li>Horizontal vs Vertical scaling</li>
          <li>Sharding architectures</li>
          <li>Replication strategies</li>
          <li>Consistency and availability</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Choosing the right scaling approach depends on your workload and business needs.</p>
      `,
      author: 'David Lee',
      date: '2024-01-08',
      category: 'Scaling',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Database Security Essentials: Protecting Your Data',
      content: `
        <h2>Security Fundamentals</h2>
        <p>Protecting your database is critical. This article covers encryption, access controls, and monitoring for threats.</p>
        <ul>
          <li>Data encryption at rest and in transit</li>
          <li>User roles and permissions</li>
          <li>Audit logging</li>
          <li>Vulnerability scanning</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Implementing these security measures will help safeguard your data from breaches and attacks.</p>
      `,
      author: 'Amit Sharma',
      date: '2024-01-05',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'NoSQL vs SQL: When to Choose Which?',
      content: `
        <h2>Choosing the Right Database Model</h2>
        <p>SQL and NoSQL databases each have their strengths. This post helps you decide which is best for your project.</p>
        <ul>
          <li>Relational vs non-relational data</li>
          <li>Scalability and flexibility</li>
          <li>Use cases for each</li>
          <li>Migration considerations</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Understand your data and requirements to make the best choice between SQL and NoSQL.</p>
      `,
      author: 'Emily Chen',
      date: '2024-01-02',
      category: 'Database Comparison',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=400&fit=crop',
      readTime: '11 min read'
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-fixmy-orange-600 hover:bg-fixmy-orange-700">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-6 left-6">
          <Badge className="bg-fixmy-orange-600 mb-2">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{post.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-fixmy-orange-600 hover:text-fixmy-orange-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLiked(!liked)}
              className={liked ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Comment
            </Button>
          </div>

          {/* Article Content */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group hover:scale-[1.02]"
                  onClick={() => window.location.href = `/blog/${relatedPost.id}`}
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = `/blog/${relatedPost.id}`; }}
                  role="button"
                  aria-label={`Read blog post: ${relatedPost.title}`}
                >
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="bg-fixmy-orange-600 mb-2">{relatedPost.category}</Badge>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-fixmy-orange-600 transition-colors">{relatedPost.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
