import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ slug, title, excerpt, content, date, image, author, readTime, category }) => {
    const navigate = useNavigate();
    // Show a preview of the content (first 180 chars, fallback to excerpt)
    const preview = content
        ? content.replace(/<[^>]+>/g, '').slice(0, 180) + (content.replace(/<[^>]+>/g, '').length > 180 ? '...' : '')
        : excerpt;
    return (
        <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-2 cursor-pointer"
            onClick={() => navigate(`/blog/${slug}`)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/blog/${slug}`); }}
            role="button"
            aria-label={`Read blog post: ${title}`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {category && (
                    <Badge className="absolute top-4 left-4 bg-fixmy-orange-600">
                        {category}
                    </Badge>
                )}
            </div>
            <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-fixmy-orange-600 transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                    {preview}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-fixmy-orange-600 font-medium">
                        {readTime}
                    </span>
                    <Button variant="ghost" className="text-fixmy-orange-600 hover:text-fixmy-orange-700 hover:bg-fixmy-orange-50 p-0">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
