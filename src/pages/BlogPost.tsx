import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import blogPostsData from './BlogPostsData';

const BlogPost = () => {
  const { slug } = useParams();
  const [liked, setLiked] = useState(false);

  // Use content from BlogPostsData (now all posts have content)
  const blogPosts = blogPostsData;
  const post = blogPosts.find(p => p.slug === slug);

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
    <>
      <Helmet>
        <title>{post.title} | FixMyDB Blog</title>
        <meta name="description" content={post.content ? post.content.replace(/<[^>]+>/g, '').slice(0, 160) + (post.content.replace(/<[^>]+>/g, '').length > 160 ? '...' : '') : post.excerpt} />
        <meta name="keywords" content={`FixMyDB blog, database, ${post.category}, ${post.title}`} />
        <link rel="canonical" href={`https://fixmydb.com/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | FixMyDB Blog`} />
        <meta property="og:description" content={post.content ? post.content.replace(/<[^>]+>/g, '').slice(0, 160) + (post.content.replace(/<[^>]+>/g, '').length > 160 ? '...' : '') : post.excerpt} />
        <meta property="og:url" content={`https://fixmydb.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
      </Helmet>
      <main>
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
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map((relatedPost) => (
                    <Card
                      key={relatedPost.slug}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group hover:scale-[1.02]"
                      onClick={() => window.location.href = `/blog/${relatedPost.slug}`}
                      tabIndex={0}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = `/blog/${relatedPost.slug}`; }}
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
      </main>
    </>
  );
};

export default BlogPost;
