import React, { useState } from 'react';
import { Grid, BookOpen } from 'lucide-react';
import SkillDashboard from '../components/student/SkillDashboard';
import SkillDetails from '../components/student/SkillDetails';

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'details'>('dashboard');
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);

  const handleSkillSelect = (skillId: number) => {
    setSelectedSkillId(skillId);
    setActiveTab('details');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center px-4 py-2 rounded ${
            activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          <Grid size={18} className="mr-2" />
          Skill Dashboard
        </button>
        <button
          onClick={() => setActiveTab('details')}
          className={`flex items-center px-4 py-2 rounded ${
            activeTab === 'details' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          disabled={!selectedSkillId}
        >
          <BookOpen size={18} className="mr-2" />
          Skill Details
        </button>
      </div>
      {activeTab === 'dashboard' && <SkillDashboard onSkillSelect={handleSkillSelect} />}
      {activeTab === 'details' && selectedSkillId && <SkillDetails skillId={selectedSkillId} />}
    </div>
  );
};

export default StudentDashboard;