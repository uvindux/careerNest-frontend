import React from 'react';
import { Link } from 'react-router-dom';
import button from '../components/ui/button.jsx';
import Card from '../components/ui/card.jsx';

const LandingPage = () => {
  const internshipCards = [
    {
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    }
  ];

  const services = [
    {
      icon: "fas fa-file-alt",
      title: "BUILD A STANDOUT CV",
      description: "Craft a Professional CV Effortlessly With Our User-Friendly CV Builder, Designed to Highlight Your Strengths."
    },
    {
      icon: "fas fa-chart-line",
      title: "CHART YOUR CAREER PATH",
      description: "Discover Your Journey With A Personalized Roadmap That Guides You Through Every Step of Your Career Development."
    },
    {
      icon: "fas fa-handshake",
      title: "EXPERT MENTORSHIP",
      description: "Connect With Industry Professionals Who Provide Personalized Guidance and Support for Your Career Growth."
    },
    {
      icon: "fas fa-search",
      title: "FIND YOUR INTERNSHIP",
      description: "Discover Opportunities Tailored to Your Skills and Interests Through Our Comprehensive Internship Database."
    },
    {
      icon: "fas fa-compass",
      title: "NAVIGATE YOUR FUTURE",
      description: "Get Expert Career Coaching and Mentorship to Help You Make Informed Decisions About Your Professional Journey."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "LEARN FROM EXPERTS",
      description: "Access Exclusive Workshops, Webinars, and Resources Led by Industry Leaders to Enhance Your Skills."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mesh-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="bg-careernest-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
              Welcome to CareerNest
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Launch Your Career with<br />
            Real Internships
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with top companies, find the perfect internship, and 
            get personalized guidance from industry mentors — all in one place.
          </p>
          
          <button size="lg" className="text-lg px-8 py-4">
            GET STARTED
          </button>
        </div>
      </section>

      {/* Find Your Internship Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Internship with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with top companies, find the perfect internship, and 
              get personalized guidance from industry mentors — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {internshipCards.map((card, index) => (
              <Card.Card key={index} hover className="overflow-hidden">
                <div className="h-48 bg-gray-200 mb-4 rounded-md overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Card.CardTitle className="mb-3">{card.title}</Card.CardTitle>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-careernest-primary text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span><i className="fas fa-map-marker-alt mr-1"></i>{card.location}</span>
                  <span className="text-careernest-primary font-medium cursor-pointer hover:underline">
                    Apply Now
                  </span>
                </div>
              </Card.Card>
            ))}
          </div>

          <div className="text-center">
            <button variant="secondary">
              FIND YOUR INTERNSHIP
            </button>
          </div>
        </div>
      </section>

      {/* Building Bridges Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Bridges Between Talent and Industry
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with top companies, find the perfect internship, and 
                get personalized guidance from industry mentors — all in one place.
              </p>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-700">
                  We're dedicated to bridging the gap between students and the 
                  professional world. Our platform connects ambitious internship 
                  seekers with trusted companies and experienced mentors, 
                  empowering the next generation to gain valuable experience and 
                  career guidance.
                </p>
                
                <p className="text-gray-700">
                  We're dedicated to bridging the gap between students and the 
                  professional world. Our platform connects ambitious internship 
                  seekers with trusted companies and experienced mentors, 
                  empowering the next generation to gain valuable experience and 
                  career guidance.
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="bg-careernest-primary text-white px-4 py-2 rounded-md font-bold">
                  +100
                </div>
                <div className="bg-careernest-secondary text-white px-4 py-2 rounded-md font-bold">
                  +050
                </div>
                <div className="bg-careernest-accent text-white px-4 py-2 rounded-md font-bold">
                  +025
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-careernest-light rounded-lg p-8">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services to Kickstart Your Career
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with top companies, find the perfect internship, and 
              get personalized guidance from industry mentors — all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card.Card key={index} hover className="text-center">
                <div className="w-16 h-16 bg-careernest-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <Card.CardTitle className="mb-3 text-careernest-primary">
                  {service.title}
                </Card.CardTitle>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Card.Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Story Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Craft Your Professional Story with Ease
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Intuitive CV Generator helps you create a polished, eye-catching resume tailored 
                to your career skills and experiences.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-careernest-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Smart Templates</p>
                    <p className="text-gray-600 text-sm">Choose from a variety of modern, recruiter-approved designs that highlight your strengths.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-careernest-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Easy-to-Use Interface</p>
                    <p className="text-gray-600 text-sm">Our user-friendly editor provides that makes building your resume quick and effortless.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-careernest-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Customizable & Downloadable</p>
                    <p className="text-gray-600 text-sm">Edit anytime, tailor for each application, and download in multiple formats (PDF, DOCX).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-careernest-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Powerful, Optimized for Applicant Tracking Systems</p>
                    <p className="text-gray-600 text-sm">Our CVs are optimized by both humans and machines.</p>
                  </div>
                </div>
              </div>

              <button variant="primary">
                GENERATE CV
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-careernest-light rounded-lg p-8">
                <img 
                  src="/api/placeholder/400/500" 
                  alt="CV Generator"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-careernest-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-star text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold">CareerNest</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building bridges between talent and industry.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/internships" className="hover:text-white">Find Internships</Link></li>
                <li><Link to="/mentoring" className="hover:text-white">Mentoring</Link></li>
                <li><Link to="/cv-builder" className="hover:text-white">CV Builder</Link></li>
                <li><Link to="/career-guidance" className="hover:text-white">Career Guidance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CareerNest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

