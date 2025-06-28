
import { Database, Cloud, Shield, Wrench, BarChart3, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Fine-tune your database performance with our expert optimization services. We analyze query patterns, optimize indexes, and restructure data for maximum efficiency.',
      features: ['Query Performance Tuning', 'Index Optimization', 'Schema Design', 'Performance Monitoring'],
      color: 'from-fixmy-orange-500 to-fixmy-orange-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your databases to the cloud with zero downtime. We handle the entire process from planning to execution and post-migration support.',
      features: ['AWS/Azure/GCP Migration', 'Zero Downtime Migration', 'Data Validation', 'Performance Testing'],
      color: 'from-fixmy-orange-600 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'Comprehensive security assessments to protect your valuable data. We identify vulnerabilities and implement robust security measures.',
      features: ['Security Assessment', 'Compliance Auditing', 'Access Control', 'Encryption Implementation'],
      color: 'from-orange-500 to-fixmy-orange-500'
    },
    {
      icon: Wrench,
      title: 'Database Maintenance',
      description: 'Proactive maintenance services to keep your databases running smoothly. Regular health checks, updates, and preventive measures.',
      features: ['Regular Health Checks', 'Backup Management', 'Update Management', 'Preventive Maintenance'],
      color: 'from-fixmy-orange-600 to-fixmy-orange-700'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting for your database systems. Get insights into performance metrics and proactive issue resolution.',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alert Management', 'Performance Analytics'],
      color: 'from-orange-600 to-fixmy-orange-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support for your critical database systems. Our expert team is always available to help you resolve issues quickly.',
      features: ['24/7 Availability', 'Emergency Response', 'Expert Consultation', 'Remote Assistance'],
      color: 'from-fixmy-orange-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20  bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
        <div className="container mx-auto mt-10 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive database management solutions designed to optimize, secure, and scale your data infrastructure
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mr-4`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-fixmy-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white hover-glow w-full`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Database?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Let our experts help you optimize, secure, and scale your database infrastructure
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-white text-fixmy-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover-glow"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
