
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PHONE, SUPPORT_EMAIL } from '@/constants';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get Started Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your database infrastructure? Contact our experts for a free consultation 
            and discover how we can optimize your data systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="animate-slide-in-left hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="hover-glow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="hover-glow"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="hover-glow"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="hover-glow"
                    placeholder="Tell us about your database challenges and requirements..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-db-blue-600 to-db-green-500 hover:from-db-blue-700 hover:to-db-green-600 text-white py-3 text-lg hover-glow"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="animate-slide-in-right space-y-8">
            <Card className="hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-db-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-db-blue-600">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-gray-600">{SUPPORT_EMAIL}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-db-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-db-green-600">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <div className="text-gray-600">{PHONE}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600">🕒</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Support Hours</div>
                      <div className="text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow bg-gradient-to-r from-db-blue-600 to-db-green-500 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Database Assessment</h3>
                <p className="mb-4">
                  Get a comprehensive analysis of your current database setup with actionable recommendations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Performance bottleneck identification</li>
                  <li>• Security vulnerability assessment</li>
                  <li>• Optimization recommendations</li>
                  <li>• Cost-saving opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
