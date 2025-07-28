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
    name: 'Asanka Samarasinha',
    email: 'samarasinha001@gmail.com', // Fixed missing @ symbol
    mobile: '+94 771234567',
    address: 'Kamburupitiya, Southern Province, Sri Lanka', // Fixed typos
    aboutMe: '',
    skills: '',
    linkedinProfile: 'https://www.linkedin.com/in/asanka-sama...',
    university: 'University of Sri Jayawardenapura'
  });

  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/128x128/cccccc/666666?text=Profile');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile update:', formData);
    // Here you would typically send the data to your backend
    alert('Profile updated successfully!');
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

      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProfileImage = () => {
    setProfileImage('https://via.placeholder.com/128x128/cccccc/666666?text=Profile');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Update Profile</h1>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-gray-900">Student Profile Information</h2> {/* Fixed typo */}
            <p className="text-gray-600">Update your account's profile information and details.</p>
          </div>
        </div>

        <div className="space-y-8">
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
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                />
                <p className="text-xs text-gray-500">
                  Maximum file size: 5MB. Allowed formats: JPEG, JPG, PNG, WEBP
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
                About Me
              </label>
              <textarea
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
                placeholder="Tell us about yourself..."
              />
            </div>
            <Input
              label="LinkedIn Profile"
              type="url"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/your-profile"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
                placeholder="List your skills (e.g., JavaScript, React, Node.js...)"
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
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Button type="button" variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;