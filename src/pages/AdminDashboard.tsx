import React, { useState } from 'react';
import { Users, BookOpen, BarChart } from 'lucide-react';
import StudentManagement from '../components/admin/StudentManagement';
import SkillManagement from '../components/admin/SkillManagement';
import ProgressTracking from '../components/admin/ProgressTracking';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'skills' | 'progress'>('students');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setActiveTab('students')}
          className={`flex items-center px-4 py-2 rounded ${
            activeTab === 'students' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          <Users size={18} className="mr-2" />
          Students
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center px-4 py-2 rounded ${
            activeTab === 'skills' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          <BookOpen size={18} className="mr-2" />
          Skills
        </button>
        <button
          onClick={() => setActiveTab('progress')}
          className={`flex items-center px-4 py-2 rounded ${
            activeTab === 'progress' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          <BarChart size={18} className="mr-2" />
          Progress
        </button>
      </div>
      {activeTab === 'students' && <StudentManagement />}
      {activeTab === 'skills' && <SkillManagement />}
      {activeTab === 'progress' && <ProgressTracking />}
    </div>
  );
};

export default AdminDashboard;