import { Users, Award, Clock, Globe, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import madhu from '../assets/madhu.png';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '@/constants';


const About = () => {
  const stats = [
    { number: '20+', label: 'Projects Completed', icon: Award },
    { number: '10+', label: 'Expert Team Members', icon: Users },
    { number: '24/7', label: 'Continuous Global Support', icon: Globe },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Star }
  ];

  const team = [
    {
      name: 'V.M. Sai',
      role: 'Founder & Lead DBA',
      image: madhu,
      description: 'Certified Database Expert',
      linkedin: '#',
      twitter: '#'
    },
    // {
    //   name: 'Sai Sandeep Naskuri',
    //   role: 'Senior PostgreSQL Architect',
    //   image: sai,
    //   description: 'Database scaling specialist with deep knowledge of distributed systems',
    //   linkedin: '#',
    //   twitter: '#'
    // },
    // {
    //   name: 'Galaba Bala Chandra Sekhar',
    //   role: 'Database Security Expert',
    //   image: chandu,
    //   description: 'Security certification specialist focused on compliance and hardening',
    //   linkedin: '#',
    //   twitter: '#'
    // },
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO at TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      content: 'Fixmydb transformed our database infrastructure completely. Their expertise helped us reduce query times by 80% and improve overall system reliability.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Lead Developer at DataFlow',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
      content: 'The team at Fixmydb is incredibly knowledgeable and responsive. They migrated our entire database to the cloud with zero downtime.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Database Administrator',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      content: 'Their 24/7 support has been a game-changer for our operations. Professional, reliable, and always available when we need them.',
      rating: 5
    },
    {
      name: 'Jennifer Lee',
      role: 'VP Engineering at ScaleUp',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      content: 'Working with FixMyDB was the best decision we made for our data infrastructure. They delivered beyond our expectations.',
      rating: 5
    }
  ];

  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#whatourclientsay') {
      setTimeout(() => {
        const el = document.getElementById('whatourclientsay');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // longer delay to ensure render
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>About Us | FixMyDB </title>
        <meta name="description" content="Learn about FixMyDB, our mission, values, and expert team dedicated to delivering secure, high-performance database solutions for businesses worldwide." />
        <meta name="keywords" content="About FixMyDB, database experts, database consulting, uptime guarantee, data integrity, trusted database partner" />
        <link rel="canonical" href="https://fixmydb.com/about" />
        <meta property="og:title" content="About Us | FixMyDB " />
        <meta property="og:description" content="Meet the FixMyDB team and discover our commitment to secure, reliable, and innovative database solutions." />
        <meta property="og:url" content="https://fixmydb.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <div className="min-h-screen ">
          {/* Hero Section */}
          <section className="py-20 mt-10 bg-gradient-to-br from-gray-50 via-orange-50 to-fixmy-orange-100">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                  About {COMPANY_NAME}
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At {COMPANY_NAME}, we believe that every business deserves a robust, secure, and high-performing database infrastructure.
                    Our mission is to eliminate the complexity and frustration that comes with database management, allowing you to focus on what matters most - growing your business.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We combine cutting-edge technology with deep expertise to deliver solutions that not only solve today's challenges
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

              <div className="flex justify-center w-full">
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full">
                  {team.map((member, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-2 mx-auto"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center pt-6 pb-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                        />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                        <p className="text-fixmy-orange-600 font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                        <div className="flex space-x-3 justify-center">
                          <a href={member.linkedin} className="text-gray-400 hover:text-fixmy-orange-600 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href={member.twitter} className="text-gray-400 hover:text-fixmy-orange-600 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="py-20 bg-gray-50" id="whatourclientsay">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up">
              Hear from the businesses we've helped transform their database infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-fixmy-orange-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

          {/* Values Section */}
          <section className="py-20 bg-white">
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
      </main>
    </>
  );
};

export default About;
