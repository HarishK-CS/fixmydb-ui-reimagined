import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Shield, Award, Users, Zap, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, SUPPORT_EMAIL, PHONE, ADDRESS, WHATSAPP, WEBSITE, SUPPORT_HOURS, SUPPORT_EMAIL_2 } from '../constants';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import whatsappLogo from '../assets/whatsapp.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Start empty, will set default below
    database: '',
    message: '',
    contactPreference: {
      phone: false,
      email: false,
      whatsapp: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ database?: string; contactPreference?: string }>({});
  const { toast } = useToast();

  // Set default country code on mount
  useEffect(() => {
    setFormData((prev) => ({ ...prev, phone: '+91' }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validation
    const newErrors: { database?: string; contactPreference?: string } = {};
    if (!formData.database) {
      newErrors.database = 'Please select a database.';
    }
    const hasContactPref = Object.values(formData.contactPreference).some(Boolean);
    if (!hasContactPref) {
      newErrors.contactPreference = 'Please select at least one preferred contact option.';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Log submitted data
    console.log('Submitted Contact Form Data:', formData);

    try {
      const result = await emailjs.send(
        'service_fixmydb',
        'template_contact',
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
        'pk_fixmydb_public'
      );
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '+91',
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
        phone: '+91',
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
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="py-20 mt-10 bg-fixmy-orange-50 relative overflow-hidden">
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
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
              <Card className="border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden min-h-[600px] flex flex-col justify-center">
                <div className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 p-1">
                  <CardHeader className="bg-white rounded-t-lg m-1">
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Mail className="w-6 h-6 text-fixmy-orange-600 mr-3" />
                      Get a Free Consultation
                    </CardTitle>
                    <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                  </CardHeader>
                </div>
                <CardContent className="p-8 py-10">
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
                        Mobile No. <span className="text-gray-400">(Optional)</span>
                      </label>
                      <ReactPhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={phone => setFormData({ ...formData, phone })}
                        inputProps={{
                          name: 'phone',
                          required: false,
                          autoFocus: false,
                          className: 'flex-1 h-12 border-2 border-gray-200 focus:border-fixmy-orange-500 transition-colors rounded-lg',
                          id: 'phone',
                          placeholder: 'Enter phone number',
                        }}
                        enableSearch
                        inputStyle={{ width: '100%' }}
                        specialLabel=""
                      />
                    </div>

                    <div>
                      <label htmlFor="database" className="block text-sm font-semibold text-gray-700 mb-2">
                        Select Database *
                      </label>
                      <Select value={formData.database} onValueChange={(value) => setFormData({ ...formData, database: value })}>
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
                      {errors.database && <p className="text-red-500 text-xs mt-1">{errors.database}</p>}
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
                        Select your preferred contact Option *
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
                      {errors.contactPreference && <p className="text-red-500 text-xs mt-1">{errors.contactPreference}</p>}
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


              <h2 className="text-3xl font-bold mb-3 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We're here to help you optimize your database infrastructure. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-1">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    details: [SUPPORT_EMAIL, SUPPORT_EMAIL_2],
                    color: 'from-fixmy-orange-500 to-fixmy-orange-600'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    details: [PHONE],
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
                    details: [
                      '24/7 Support Available',
                      {
                        type: 'whatsapp',
                        label: 'Emergency Response Team',
                        value: PHONE
                      }
                    ],
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
                        typeof detail === 'string' ? (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ) : detail.type === 'whatsapp' ? (
                          <>
                            <span key={idx + '-label'} className="text-gray-600 font-semibold flex items-center gap-2">
                              {detail.label}
                            </span>
                            <span key={idx + '-wa'} className="flex items-center gap-2 mt-1">
                              <span className="text-gray-600">via </span>
                              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                              <span className="text-fixmy-orange-700 font-medium">
                                <a href={`https://wa.me/${detail.value.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline">{detail.value}</a>
                              </span>

                            </span>
                          </>
                        ) : null
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Stats Card (no Lottie) */}
              <div className="mt-8 p-8 bg-gradient-to-br from-fixmy-orange-50 to-orange-100 rounded-2xl shadow-lg">
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

    </div>
  );
};

export default Contact;
