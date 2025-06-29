
import { COMPANY_NAME } from '@/constants';
import { useEffect, useRef } from 'react';

const features = [
  {
    title: "Advanced Performance Monitoring",
    description: "Real-time monitoring and alerting for your database infrastructure with detailed analytics and insights.",
    image: "📊"
  },
  {
    title: "Automated Scaling Solutions",
    description: "Smart auto-scaling that adapts to your workload demands, ensuring optimal performance and cost efficiency.",
    image: "📈"
  },
  {
    title: "Enterprise Security Standards",
    description: "Military-grade encryption and security protocols to protect your most sensitive data assets.",
    image: "🔐"
  },
  {
    title: "Multi-Platform Compatibility",
    description: "Support for all major database platforms including MySQL, PostgreSQL, MongoDB, Oracle, and more.",
    image: "🔧"
  }
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.feature-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 200);
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
    <section id="features" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose {COMPANY_NAME}?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on years of expertise and cutting-edge technology, our platform delivers
            unmatched reliability and performance for your database infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item animate-on-scroll flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg hover-glow group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-db-blue-600 to-db-green-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.image}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-db-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-white rounded-2xl shadow-xl animate-pulse-glow">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">Industry Leading</div>
              <div className="text-gray-600">Database Performance & Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
