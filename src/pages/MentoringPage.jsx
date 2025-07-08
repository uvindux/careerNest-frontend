import React from 'react';
import Card from '../components/ui/Card';

const MentoringPage = () => {
  const scheduledSessions = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true }
  ];

  const mentors = [
    {
      id: 1,
      name: "John Dou",
      title: "Software Engineer at MindGeek International",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Chris Ann",
      title: "Project Manager at sevenLabs",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Mitchell Harris",
      title: "ML developer at TensorFlow",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="space-y-8">
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

      {/* Choose A Mentor & Get Started */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose A Mentor & Get Started</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} hover className="text-center overflow-hidden">
              <div className="h-48 bg-gray-200 mb-4 rounded-md overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{mentor.name}</h3>
                <p className="text-gray-600 text-sm">{mentor.title}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Explore More */}
        <div className="text-center">
          <button className="text-careernest-primary font-medium hover:text-careernest-secondary transition-colors flex items-center mx-auto">
            Explore More 
            <i className="fas fa-chevron-down ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentoringPage;

