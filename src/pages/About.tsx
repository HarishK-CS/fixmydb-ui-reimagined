
import { Users, Award, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '5+', label: 'Years of Experience', icon: Clock },
    { number: '25+', label: 'Countries Served', icon: Globe }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Chief Database Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Expert in database design and optimization with 15+ years of experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'Cloud Migration Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Specialized in seamless cloud migrations and infrastructure optimization'
    },
    {
      name: 'Mike Chen',
      role: 'Security Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Database security specialist with advanced certifications in cybersecurity'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Performance Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Performance tuning expert with a track record of 10x speed improvements'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
              About FixMyDB
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up">
              We are passionate database experts dedicated to transforming how businesses manage their data infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At FixMyDB, we believe that every business deserves a robust, secure, and high-performing database infrastructure. 
                Our mission is to eliminate the complexity and frustration that comes with database management, allowing you to focus on what matters most - growing your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge technology with deep expertise to deliver solutions that not only solve today's challenges 
                but also prepare your infrastructure for tomorrow's opportunities.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Our Impact</h2>
            <p className="text-xl animate-fade-in-up">Numbers that speak to our commitment and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Our diverse team of database experts brings together years of experience and cutting-edge knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-fixmy-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">Our Values</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in every project, ensuring the highest quality deliverables.',
                color: 'from-fixmy-orange-500 to-fixmy-orange-600'
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of the curve with cutting-edge technologies and methodologies.',
                color: 'from-fixmy-orange-600 to-orange-600'
              },
              {
                title: 'Partnership',
                description: 'We work closely with our clients as trusted partners, not just service providers.',
                color: 'from-orange-500 to-fixmy-orange-500'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-white text-2xl font-bold">{value.title[0]}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Let's discuss how we can help transform your database infrastructure
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-white text-fixmy-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-glow"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
