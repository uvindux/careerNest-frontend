import React, { useState } from 'react';
import { updateUserProfile } from '@/lib/api';

// Simple Button component since we don't have the external one
const Button = ({ children, type = "button", variant = "primary", onClick, disabled = false, ...props }) => {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === "primary" 
    ? "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 disabled:bg-purple-400 disabled:cursor-not-allowed"
    : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed";

  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple Input component since we don't have the external one
const Input = ({ label, type = "text", name, value, onChange, required, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        {...props}
      />
    </div>
  );
};

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    address: 'Kamburupitiya, Southern Province, Sri Lanka',
    mobileNumber: '+94 771234567',
    skills: [], // Changed to array to match backend
    description: '', // Renamed from aboutMe
    university: 'University of Sri Jayawardenapura',
    linkedin: 'https://www.linkedin.com/in/asanka-sama...', // Renamed from linkedinProfile
    company: '' // Added company field
  });

  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/128x128/cccccc/666666?text=Profile');
  const [selectedFile, setSelectedFile] = useState(null);
  const [skillInput, setSkillInput] = useState(''); // For managing skill input
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()]
      });
      setSkillInput('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields
      formDataToSend.append('address', formData.address);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('skills', JSON.stringify(formData.skills));
      formDataToSend.append('description', formData.description);
      formDataToSend.append('university', formData.university);
      formDataToSend.append('linkedin', formData.linkedin);
      formDataToSend.append('company', formData.company);
      
      // Append file if selected
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }

      const result = await updateUserProfile(formDataToSend);
      console.log('Profile updated successfully:', result);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(typeof error === 'string' ? error : 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
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

      // Check file type - updated to match backend validation
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only JPEG, PNG, and GIF files are allowed');
        return;
      }

      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfileImage = () => {
    setProfileImage('https://via.placeholder.com/128x128/cccccc/666666?text=Profile');
    setSelectedFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Update Profile</h1>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-gray-900">Student Profile Information</h2>
            <p className="text-gray-600">Update your account's profile information and details.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Mobile Number"
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <Input
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Profile Image */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Choose Profile Image
            </label>
            <div className="flex items-center space-x-6">
              <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                />
                <p className="text-xs text-gray-500">
                  Maximum file size: 5MB. Allowed formats: JPEG, PNG, GIF
                </p>
                <button 
                  type="button" 
                  className="text-sm text-red-500 hover:text-red-700 transition-colors"
                  onClick={removeProfileImage}
                >
                  Remove Profile Image
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
                placeholder="Tell us about yourself..."
              />
            </div>
            <Input
              label="LinkedIn Profile"
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/your-profile"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills
              </label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Type a skill and press Enter"
                  />
                  <Button type="button" variant="secondary" onClick={addSkill}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Input
              label="University"
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <Input
              label="Company (Optional)"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Current or previous company"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button 
              type="submit" 
              variant="primary" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfilePage;