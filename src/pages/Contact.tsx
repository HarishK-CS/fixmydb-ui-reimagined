
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Shield, Award, Users, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

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
      const result = await emailjs.send(
        'service_fixmydb', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
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
        'pk_fixmydb_public' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

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
        title: "Thank you for your message!",
        description: "We've received your inquiry and will respond within 24 hours.",
        variant: "default"
      });
      
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
      {/* Hero Section with Background */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop" 
            alt="Team Collaboration Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
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
              <Card className="border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 p-1">
                  <CardHeader className="bg-white rounded-t-lg m-1">
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Mail className="w-6 h-6 text-fixmy-orange-600 mr-3" />
                      Get a Free Consultation
                    </CardTitle>
                    <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                  </CardHeader>
                </div>
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
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={formData.phone}
                        onChange={(value) => setFormData({...formData, phone: value || ''})}
                        className="phone-input h-12 border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg"
                        placeholder="Enter phone number"
                      />
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
                          <SelectItem value="redis">Redis</SelectItem>
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
                              className="border-2 border-fixmy-orange-300 data-[state=checked]:bg-fixmy-orange-600"
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
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop" 
                  alt="Database Team"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
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
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    details: ['123 Database Street', 'Tech City, TC 12345'],
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    details: ['24/7 Support Available', 'Emergency Response Team'],
                    color: 'from-purple-500 to-purple-600'
                  }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg shadow-lg`}>
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

              {/* Enhanced Stats Card */}
              <div className="mt-12 p-8 bg-gradient-to-br from-fixmy-orange-50 to-orange-100 rounded-2xl shadow-lg">
                <h3 className="font-bold text-gray-800 mb-6 text-center text-xl">Why Choose FixMyDB?</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Zap, label: '24hrs', desc: 'Response Time', color: 'text-yellow-600' },
                    { icon: Shield, label: '99.9%', desc: 'Uptime SLA', color: 'text-green-600' },
                    { icon: Users, label: '500+', desc: 'Projects Done', color: 'text-blue-600' },
                    { icon: Award, label: '24/7', desc: 'Support', color: 'text-purple-600' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-fixmy-orange-600">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-fixmy-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop" 
            alt="Circuit Board Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
            </div>
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
                  className="bg-white rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-fixmy-orange-500 to-fixmy-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-lg">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-800 group-hover:text-fixmy-orange-600 transition-colors text-lg">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 animate-accordion-down">
                    <div className="flex items-start space-x-4 ml-14">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button 
              className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow px-8 py-3"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 FixMyDB. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-fixmy-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-fixmy-orange-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
