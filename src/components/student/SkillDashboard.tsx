import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  currentScore: number;
  targetDate: string;
}

interface SkillDashboardProps {
  onSkillSelect: (skillId: number) => void;
}

const SkillDashboard: React.FC<SkillDashboardProps> = ({ onSkillSelect }) => {
  const [skills] = useState<Skill[]>([
    { id: 1, name: 'JavaScript Basics', category: 'Programming', difficulty: 'Beginner', currentScore: 75, targetDate: '2023-12-31' },
    { id: 2, name: 'React Fundamentals', category: 'Web Development', difficulty: 'Intermediate', currentScore: 50, targetDate: '2024-03-15' },
    { id: 3, name: 'Node.js Essentials', category: 'Backend', difficulty: 'Advanced', currentScore: 25, targetDate: '2024-06-30' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || skill.category === filterCategory) &&
    (filterDifficulty === '' || skill.difficulty === filterDifficulty)
  );

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 border rounded"
          />
          <Search size={18} className="absolute left-2 top-2.5 text-gray-400" />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Programming">Programming</option>
          <option value="Web Development">Web Development</option>
          <option value="Backend">Backend</option>
        </select>
        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Difficulties</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded">
          <Filter size={18} />
        </button>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{skill.category} • {skill.difficulty}</p>
            <div className="mb-2">
              <div className="text-sm font-medium text-gray-700">Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.currentScore}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600">{skill.currentScore}% complete</div>
            </div>
            <p className="text-sm text-gray-600 mb-2">Target: {skill.targetDate}</p>
            <button
              onClick={() => onSkillSelect(skill.id)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDashboard;