import React from 'react';
import Card from '../components/ui/Card';

const Dashboard = () => {
  const scheduledSessions = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true }
  ];

  const suggestedInternships = [
    {
      id: 1,
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Front End Developer (Intern)",
      description: "Our platform connects ambitious internship seekers with trusted companies and experienced mentors, empowering the next generation to gain valuable experience and career guidance.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      location: "10/100 Central Road, 10",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome,
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-gray-900">Asanka Samarasinha</span>
          <span className="bg-careernest-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Student
          </span>
        </div>
      </div>

      {/* Scheduled Sessions */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Scheduled Sessions</h2>
          <button className="w-10 h-10 bg-careernest-primary rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {scheduledSessions.map((session) => (
            <Card key={session.id} className="h-48 flex items-center justify-center border-2 border-dashed border-careernest-primary bg-gray-50">
              <div className="text-center text-gray-400">
                <i className="fas fa-calendar-star text-4xl mb-4"></i>
                <p className="text-sm">No sessions scheduled</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Suggest for you */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Suggest for you</h2>
          <button className="w-10 h-10 bg-careernest-primary rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {suggestedInternships.map((internship) => (
            <Card key={internship.id} hover className="overflow-hidden">
              <div className="h-48 bg-gray-200 mb-4 rounded-md overflow-hidden">
                <img 
                  src={internship.image} 
                  alt={internship.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <Card.Title className="mb-3">{internship.title}</Card.Title>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {internship.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-careernest-primary text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span><i className="fas fa-map-marker-alt mr-1"></i>{internship.location}</span>
                <span className="text-careernest-primary font-medium cursor-pointer hover:underline">
                  Apply Now
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

