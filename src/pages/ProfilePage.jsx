import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: 'Asanka Samarasinha',
    email: 'samarasinha001gmail.com',
    mobile: '+94 771234567',
    address: 'Kamburupitiya,South province,Sri Lanka',
    aboutMe: '',
    skills: '',
    linkedinProfile: 'https://www.linkedin.com/in/asanka-sama...',
    university: 'University of Sri Jayawardenapura'
  });

  const [profileImage, setProfileImage] = useState('/api/placeholder/128/128');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile update:', formData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Update Profile</h1>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-900">stdudent profile infomation</h2>
          <p className="text-gray-600">Update your account's profile information and details.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Mobile Number"
            type="tel"
            name="mobile"
            value={formData.mobile}
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
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <p className="text-xs text-gray-500">
                Maximum file size: 5MB. Allowed formats: JPEG, JPG, PNG, WEBP
              </p>
              <button 
                type="button" 
                className="text-sm text-red-500 hover:text-red-700"
                onClick={() => setProfileImage('/api/placeholder/128/128')}
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
              About me
            </label>
            <textarea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': '#7A08FA' }}
              placeholder="-"
            />
          </div>
          <Input
            label="LinkedIn Profile"
            type="url"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ '--tw-ring-color': '#7A08FA' }}
              placeholder="-"
            />
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

        {/* Save Button */}
        <div className="flex justify-end pt-6">
          <Button type="submit" variant="primary">
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;

