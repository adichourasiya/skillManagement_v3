import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const [role, setRole] = useState<'admin' | 'student'>('student');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(role === 'admin' ? '/admin' : '/student');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'admin' | 'student')}
            className="w-full p-2 border rounded"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" required className="w-full p-2 border rounded" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center"
        >
          <LogIn size={18} className="mr-2" />
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;