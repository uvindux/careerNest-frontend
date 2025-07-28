import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const ServiceCard = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
      <i className={`${icon} text-purple-600 text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <i className="fas fa-check text-purple-600 mt-1 mr-3"></i>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ServicePage = () => {
  const services = [
    {
      icon: "fas fa-file-alt",
      title: "Resume Builder",
      description: "Create professional, ATS-friendly resumes that stand out to employers.",
      features: [
        "Multiple professional templates",
        "AI-powered content suggestions",
        "ATS optimization",
        "One-click formatting",
        "Export to multiple formats"
      ]
    },
    {
      icon: "fas fa-handshake",
      title: "Internship Matching",
      description: "Find the perfect internship opportunities matched to your skills and interests.",
      features: [
        "Personalized recommendations",
        "Direct company connections",
        "Application tracking",
        "Interview preparation",
        "Feedback system"
      ]
    },
    {
      icon: "fas fa-user-tie",
      title: "Career Mentorship",
      description: "Get guidance from industry professionals who've been there before.",
      features: [
        "1-on-1 mentoring sessions",
        "Career path planning",
        "Industry insights",
        "Skill development advice",
        "Network building"
      ]
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Skills Development",
      description: "Access courses and workshops to build your professional skillset.",
      features: [
        "Industry-specific training",
        "Soft skills workshops",
        "Technical certifications",
        "Project-based learning",
        "Progress tracking"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Engineering Intern",
      company: "Tech Corp",
      image: "/api/placeholder/100/100",
      text: "CareerNest helped me land my dream internship. The resume builder and mentorship program were game-changers!"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Associate",
      company: "Brand Solutions",
      image: "/api/placeholder/100/100",
      text: "The skills development courses gave me the edge I needed in my interviews. Highly recommend!"
    },
    {
      name: "Michael Lee",
      role: "Data Science Intern",
      company: "Analytics Pro",
      image: "/api/placeholder/100/100",
      text: "The mentorship program provided invaluable insights and helped me navigate my career path."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive career development solutions to help you succeed in your professional journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CareerNest?
            </h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support throughout your career journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
              <p className="text-gray-600">Get started with your career journey in minutes, not days.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">Access to industry professionals and career experts.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">Track record of successful placements and career transitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Choose the plan that's right for you and start your journey today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-purple-600 font-medium hover:bg-gray-50 transition-colors"
            >
              View Pricing
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
