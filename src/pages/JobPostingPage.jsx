import React, { useState } from 'react';

// Simple Button component since we don't have the external one
const Button = ({ children, type = "button", variant = "primary", onClick, ...props }) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === "primary" 
    ? "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500";

  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Input component since we don't have the external one
const Input = ({ label, type = "text", name, value, onChange, required, placeholder, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        {...props}
      />
    </div>
  );
};

// X icon component to replace FontAwesome
const XIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const JobPostingPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '', // Fixed: removed incorrect default value
    company: '', // Added company field
    location: '', // Changed from address to location for clarity
    jobType: 'Full-time', // Added job type field
    salary: '', // Added salary field
    description: '', // Fixed: removed incorrect default value
    requirements: '', // Added requirements field
    skills: [] // Fixed: removed duplicate skills
  });

  const [newSkill, setNewSkill] = useState('');
  const [companyImage, setCompanyImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.skills.length === 0) {
      alert('Please add at least one skill requirement');
      return;
    }

    console.log('Job posting:', formData);
    alert('Job posted successfully!');
    
    // Reset form
    setFormData({
      jobTitle: '',
      company: '',
      location: '',
      jobType: 'Full-time',
      salary: '',
      description: '',
      requirements: '',
      skills: []
    });
    setNewSkill('');
    setCompanyImage(null);
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Check file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only JPEG, JPG, PNG, and WEBP files are allowed');
        return;
      }

      setCompanyImage(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Job Posting</h1>
          <p className="text-gray-600">Create a job listing and inspire the next generation of talent.</p>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Job Title"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Senior Software Engineer"
              required
            />
            <Input
              label="Company Name"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. TechCorp Inc."
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Colombo, Sri Lanka or Remote"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Salary Range"
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. $50,000 - $70,000 or Negotiable"
            />
            <div></div> {/* Empty div for grid alignment */}
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
              placeholder="Describe the role, responsibilities, and what makes this position exciting..."
              required
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requirements & Qualifications<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
              placeholder="List the required experience, education, and qualifications..."
              required
            />
          </div>

          {/* Skills Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills<span className="text-red-500 ml-1">*</span>
            </label>
            
            {/* Skills Display */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 p-4 border border-gray-300 rounded-md min-h-[60px] bg-gray-50">
                {formData.skills.length === 0 ? (
                  <span className="text-gray-400 text-sm">No skills added yet. Add skills below.</span>
                ) : (
                  formData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-white hover:text-gray-200 ml-2 focus:outline-none"
                        aria-label={`Remove ${skill}`}
                      >
                        <XIcon />
                      </button>
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Add Skill Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a skill and press Enter or click Add"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <Button
                type="button"
                onClick={addSkill}
                variant="primary"
                disabled={!newSkill.trim()}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Company Image */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Company Logo
            </label>
            <div className="space-y-2">
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
              />
              <p className="text-xs text-gray-500">
                Optional. Maximum file size: 5MB. Allowed formats: JPEG, JPG, PNG, WEBP
              </p>
              {companyImage && (
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <span>Selected: {companyImage.name}</span>
                  <button
                    type="button"
                    onClick={() => setCompanyImage(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button type="button" onClick={handleSubmit} variant="primary">
              Post Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingPage;