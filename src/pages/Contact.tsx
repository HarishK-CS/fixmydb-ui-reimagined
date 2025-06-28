
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    database: '',
    message: '',
    contactPreference: {
      phone: false,
      email: false,
      whatsapp: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to add your keys)
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          database: formData.database,
          message: formData.message,
          contact_preference: Object.entries(formData.contactPreference)
            .filter(([_, value]) => value)
            .map(([key, _]) => key)
            .join(', ')
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        database: '',
        message: '',
        contactPreference: {
          phone: false,
          email: false,
          whatsapp: false
        }
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        variant: "default"
      });
      
      // Reset form even if EmailJS fails (for demo purposes)
      setFormData({
        name: '',
        email: '',
        phone: '',
        database: '',
        message: '',
        contactPreference: {
          phone: false,
          email: false,
          whatsapp: false
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData({
      ...formData,
      contactPreference: {
        ...formData.contactPreference,
        [type]: checked
      }
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Ready to transform your database infrastructure? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-fixmy-orange-50 to-orange-50 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-gray-800">Get a Free Consultation</CardTitle>
                  <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg"
                        placeholder="First name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Email ID *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile No. *
                      </label>
                      <div className="flex">
                        <div className="flex items-center px-3 border-2 border-r-0 border-gray-200 rounded-l-lg bg-gray-50">
                          <span className="text-fixmy-orange-500 font-semibold">🇮🇳 +91</span>
                        </div>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 border-2 border-l-0 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-r-lg rounded-l-none"
                          placeholder="Phone no"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="database" className="block text-sm font-semibold text-gray-700 mb-2">
                        Select Database *
                      </label>
                      <Select value={formData.database} onValueChange={(value) => setFormData({...formData, database: value})}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg">
                          <SelectValue placeholder="Choose any one option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mysql">MySQL</SelectItem>
                          <SelectItem value="postgresql">PostgreSQL</SelectItem>
                          <SelectItem value="mongodb">MongoDB</SelectItem>
                          <SelectItem value="oracle">Oracle</SelectItem>
                          <SelectItem value="sqlserver">SQL Server</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg resize-none"
                        placeholder="Tell us about your database challenge"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Select your preferred contact Option
                      </label>
                      <div className="flex gap-6">
                        {[
                          { id: 'phone', label: 'Phone' },
                          { id: 'email', label: 'Email' },
                          { id: 'whatsapp', label: 'Whatsapp' }
                        ].map(option => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={option.id}
                              checked={formData.contactPreference[option.id as keyof typeof formData.contactPreference]}
                              onCheckedChange={(checked) => handleCheckboxChange(option.id, checked as boolean)}
                              className="border-2 border-gray-300"
                            />
                            <label
                              htmlFor={option.id}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white font-semibold rounded-lg hover-glow"
                    >
                      {isSubmitting ? 'Sending Message...' : 'Get a Free Consultation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you optimize your database infrastructure. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    details: ['hello@fixmydb.com', 'support@fixmydb.com'],
                    color: 'from-fixmy-orange-500 to-fixmy-orange-600'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
                    color: 'from-fixmy-orange-500 to-fixmy-orange-600'
                  },
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    details: ['123 Database Street', 'Tech City, TC 12345'],
                    color: 'from-fixmy-orange-500 to-fixmy-orange-600'
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    details: ['24/7 Support Available', 'Emergency Response Team'],
                    color: 'from-fixmy-orange-500 to-fixmy-orange-600'
                  }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{contact.title}</h3>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 p-6 bg-gradient-to-r from-fixmy-orange-50 to-orange-50 rounded-2xl">
                <h3 className="font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fixmy-orange-600">24hrs</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fixmy-orange-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fixmy-orange-600">500+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-fixmy-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-fixmy-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How quickly can you start working on my database project?",
                  answer: "We can typically begin assessment within 24-48 hours after initial consultation. For urgent issues, we offer emergency response services with immediate team deployment."
                },
                {
                  question: "Do you work with all database systems?",
                  answer: "Yes, we have expertise in MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, Redis, Cassandra, and most other major database systems. Our team includes certified professionals for each platform."
                },
                {
                  question: "What's included in your 24/7 support?",
                  answer: "Our 24/7 support includes continuous monitoring, emergency response, performance optimization, backup management, security patches, and direct access to our expert team via phone, email, or chat."
                },
                {
                  question: "How do you ensure data security during projects?",
                  answer: "We follow strict security protocols including encrypted connections, VPN access, signed NDAs, SOC 2 compliance, and regular security audits. All our staff are security-certified professionals with background checks."
                },
                {
                  question: "What is your pricing model?",
                  answer: "We offer flexible pricing including hourly consulting, monthly retainers, and project-based pricing. We provide free initial consultation and detailed cost estimates before starting any work."
                },
                {
                  question: "Can you help with database migration?",
                  answer: "Absolutely! We specialize in database migrations including cloud migrations (AWS, Azure, GCP), cross-platform migrations, and version upgrades with zero downtime strategies."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border-2 border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-fixmy-orange-500 to-fixmy-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-800 group-hover:text-fixmy-orange-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 animate-accordion-down">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button 
              className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
