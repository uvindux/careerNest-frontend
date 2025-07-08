import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const JobPostingPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: 'Asanka Samarasinha',
    address: '',
    description: 'asankasamarasinha@gmail.com',
    skills: ['NEXT JS', 'NEXT JS', 'NEXT JS']
  });

  const [newSkill, setNewSkill] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posting:', formData);
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Posting</h1>
        <p className="text-gray-600">Create a job listing and inspire the next generation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': '#7A08FA' }}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address<span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ '--tw-ring-color': '#7A08FA' }}
            placeholder="Type address here"
            required
          />
        </div>

        {/* Skills Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Skills<span className="text-red-500 ml-1">*</span>
          </label>
          
          {/* Skills Display */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 p-4 border border-gray-300 rounded-md min-h-[60px] bg-gray-50">
              {formData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-careernest-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-white hover:text-gray-200 ml-2"
                  >
                    <i className="fas fa-times text-xs"></i>
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Add Skill Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a skill and press Enter"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': '#7A08FA' }}
            />
            <Button
              type="button"
              onClick={addSkill}
              variant="primary"
            >
              Add
            </Button>
          </div>
        </div>

        {/* Company Image */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Choose Company Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <Button type="submit" variant="primary">
            Post Job
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingPage;

