
import { COMPANY_NAME } from '@/constants';
import { useEffect, useRef } from 'react';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.about-item');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('visible');
              }, index * 300);
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-item animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">About {COMPANY_NAME}</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At {COMPANY_NAME}, we're passionate about transforming how businesses manage their database infrastructure.
                With over a decade of combined experience in database administration and optimization, our team of
                certified experts delivers solutions that scale with your business.
              </p>
              <p>
                Founded on the principle that every organization deserves reliable, high-performance database
                systems, we've helped hundreds of companies across various industries achieve their data goals.
                From startups to enterprise organizations, we provide tailored solutions that drive results.
              </p>
              <p className="font-semibold text-gray-800">
                Our mission is simple: Make database management effortless, reliable, and cost-effective for everyone.
              </p>
            </div>
          </div>

          <div className="about-item animate-on-scroll">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-db-blue-50 to-transparent rounded-xl hover-glow">
                <div className="text-3xl font-bold text-db-blue-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-db-green-50 to-transparent rounded-xl hover-glow">
                <div className="text-3xl font-bold text-db-green-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-transparent rounded-xl hover-glow">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-transparent rounded-xl hover-glow">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-db-blue-600 to-db-green-500 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• MySQL Optimization</div>
                <div>• PostgreSQL Management</div>
                <div>• MongoDB Solutions</div>
                <div>• Oracle Database</div>
                <div>• Cloud Migration</div>
                <div>• Performance Tuning</div>
                <div>• Disaster Recovery</div>
                <div>• Security Auditing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
