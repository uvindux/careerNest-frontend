import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <div className="relative w-32 h-32 mx-auto mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute inset-0 rounded-full bg-purple-600/10"></div>
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: "fas fa-handshake",
      title: "Trust & Integrity",
      description: "Building lasting relationships through honesty and transparency."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Continuously evolving and adapting to meet the changing needs of our users."
    },
    {
      icon: "fas fa-users",
      title: "Community",
      description: "Fostering a supportive environment for career growth and development."
    },
    {
      icon: "fas fa-star",
      title: "Excellence",
      description: "Striving for the highest standards in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About CareerNest
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Empowering the next generation of professionals through meaningful internships 
            and career guidance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At CareerNest, we're dedicated to bridging the gap between ambitious students 
                and industry-leading companies. Our platform serves as a launchpad for emerging 
                talent, providing them with the opportunities and guidance they need to build 
                successful careers.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every student deserves access to quality internships and 
                mentorship, regardless of their background or connections. Through our platform, 
                we're making career development more accessible, transparent, and effective.
              </p>
            </div>
            <div className="relative">
              <div className="bg-purple-100 rounded-lg p-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Our Mission"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-purple-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-100">Internships Posted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-purple-100">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join CareerNest today and take the first step towards your dream career.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
            >
              Get Started
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
