
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';

const services = [
  {
    title: "Database Optimization",
    description: "Boost your database performance with our advanced optimization techniques and monitoring solutions.",
    icon: "⚡",
    features: ["Query Optimization", "Index Tuning", "Performance Monitoring", "Resource Management"]
  },
  {
    title: "Database Migration",
    description: "Seamlessly migrate your databases across platforms with zero downtime and complete data integrity.",
    icon: "🔄",
    features: ["Zero Downtime Migration", "Cross-Platform Support", "Data Validation", "Rollback Protection"]
  },
  {
    title: "Cloud Database Solutions",
    description: "Leverage the power of cloud with our scalable database architectures and managed services.",
    icon: "☁️",
    features: ["Auto Scaling", "Backup & Recovery", "Multi-Region Support", "Cost Optimization"]
  },
  {
    title: "Database Security",
    description: "Protect your critical data with enterprise-grade security measures and compliance frameworks.",
    icon: "🔒",
    features: ["Data Encryption", "Access Control", "Security Auditing", "Compliance Support"]
  },
  {
    title: "Disaster Recovery",
    description: "Ensure business continuity with our comprehensive disaster recovery and backup solutions.",
    icon: "🛡️",
    features: ["Automated Backups", "Point-in-Time Recovery", "Cross-Region Replication", "Recovery Testing"]
  },
  {
    title: "24/7 Support",
    description: "Get round-the-clock expert support from our certified database administrators and engineers.",
    icon: "🚀",
    features: ["Expert Consultation", "Emergency Response", "Proactive Monitoring", "Knowledge Transfer"]
  }
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive database management solutions tailored to your business needs. 
            From optimization to migration, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card animate-on-scroll hover-glow group cursor-pointer transition-all duration-300 hover:scale-105 border-gray-200 hover:border-db-blue-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-db-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors">
                      <span className="w-2 h-2 bg-db-blue-500 rounded-full mr-3 group-hover:bg-db-green-500 transition-colors"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
