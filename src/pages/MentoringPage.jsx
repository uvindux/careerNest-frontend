import React from 'react';

// Simple Card component since we don't have the external one
const Card = ({ children, className = "", hover = false, ...props }) => {
  const baseClasses = "bg-white rounded-lg shadow-md";
  const hoverClasses = hover ? "hover:shadow-lg transition-shadow cursor-pointer" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Icon components to replace FontAwesome
const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MentoringPage = () => {
  const scheduledSessions = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true }
  ];

  const mentors = [
    {
      id: 1,
      name: "John Doe", // Fixed typo from "John Dou"
      title: "Software Engineer at MindGeek International",
      image: "https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=JD"
    },
    {
      id: 2,
      name: "Chris Ann",
      title: "Project Manager at SevenLabs", // Fixed capitalization
      image: "https://via.placeholder.com/200x200/7C3AED/FFFFFF?text=CA"
    },
    {
      id: 3,
      name: "Mitchell Harris",
      title: "ML Developer at TensorFlow", // Fixed capitalization
      image: "https://via.placeholder.com/200x200/059669/FFFFFF?text=MH"
    }
  ];

  const handleScheduleMore = () => {
    console.log('Navigate to schedule more sessions');
    // Here you would typically navigate to a scheduling page
  };

  const handleMentorClick = (mentorId) => {
    console.log('Selected mentor:', mentorId);
    // Here you would typically navigate to mentor details or booking page
  };

  const handleExploreMore = () => {
    console.log('Explore more mentors');
    // Here you would typically load more mentors or navigate to a full mentor list
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="space-y-8">
        {/* Scheduled Sessions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Scheduled Sessions</h2>
            <button 
              onClick={handleScheduleMore}
              className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Schedule more sessions"
            >
              <ChevronRightIcon />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {scheduledSessions.map((session) => (
              <Card 
                key={session.id} 
                className="h-48 flex items-center justify-center border-2 border-dashed border-purple-300 bg-purple-50"
              >
                <div className="text-center text-gray-500">
                  <div className="flex justify-center mb-4">
                    <CalendarIcon />
                  </div>
                  <p className="text-sm font-medium">No sessions scheduled</p>
                  <p className="text-xs mt-1">Click + to schedule a session</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Choose A Mentor & Get Started */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose A Mentor & Get Started</h2>
            <p className="text-gray-600">Connect with industry professionals to accelerate your career growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mentors.map((mentor) => (
              <Card 
                key={mentor.id} 
                hover 
                className="text-center overflow-hidden"
                onClick={() => handleMentorClick(mentor.id)}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={`${mentor.name} - Mentor`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{mentor.title}</p>
                  <button className="mt-3 px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    View Profile
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Explore More */}
          <div className="text-center">
            <button 
              onClick={handleExploreMore}
              className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center mx-auto focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-3 py-2"
            >
              Explore More Mentors
              <span className="ml-2">
                <ChevronDownIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringPage;