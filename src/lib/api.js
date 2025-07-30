import axios from 'axios';

const API_BASE_URL = 'http://carrernest-nodejs-alb-1673428613.ap-south-1.elb.amazonaws.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          localStorage.removeItem('authToken');
          // You might want to redirect to login page here
          break;
        case 403:
          // Handle forbidden
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const updateUserProfile = async (formData) => {
  try {
    const response = await api.put('/update/userupdate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file upload
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;
