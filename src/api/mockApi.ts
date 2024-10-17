import { User } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loginUser = async (email: string, password: string): Promise<User> => {
  await delay(1000); // Simulate network delay

  // Mock authentication logic
  if (email === 'admin@example.com' && password === 'admin') {
    return { id: 1, name: 'Admin User', role: 'admin' };
  } else if (email === 'student@example.com' && password === 'student') {
    return { id: 2, name: 'Student User', role: 'student' };
  } else {
    throw new Error('Invalid credentials');
  }
};

// Add more mock API functions as needed for skills, students, etc.