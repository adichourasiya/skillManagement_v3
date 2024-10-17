import React, { useState } from 'react';
import { Plus, Edit2, Archive } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningMaterialsLink: string;
}

const SkillManagement: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    {
      id: 1,
      name: 'JavaScript Basics',
      description: 'Fundamentals of JavaScript programming',
      category: 'Programming',
      difficulty: 'Beginner',
      learningMaterialsLink: 'https://example.com/js-basics',
    },
  ]);

  const [newSkill, setNewSkill] = useState<Omit<Skill, 'id'>>({
    name: '',
    description: '',
    category: '',
    difficulty: 'Beginner',
    learningMaterialsLink: '',
  });

  const addSkill = () => {
    if (newSkill.name && newSkill.description) {
      setSkills([...skills, { ...newSkill, id: Date.now() }]);
      setNewSkill({
        name: '',
        description: '',
        category: '',
        difficulty: 'Beginner',
        learningMaterialsLink: '',
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skill Management</h2>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={newSkill.category}
          onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={newSkill.description}
          onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
          className="border p-2 rounded col-span-2"
        />
        <select
          value={newSkill.difficulty}
          onChange={(e) => setNewSkill({ ...newSkill, difficulty: e.target.value as Skill['difficulty'] })}
          className="border p-2 rounded"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <input
          type="url"
          placeholder="Learning Materials Link"
          value={newSkill.learningMaterialsLink}
          onChange={(e) => setNewSkill({ ...newSkill, learningMaterialsLink: e.target.value })}
          className="border p-2 rounded"
        />
        <button onClick={addSkill} className="bg-green-500 text-white p-2 rounded flex items-center justify-center col-span-2">
          <Plus size={18} className="mr-1" /> Add Skill
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Difficulty</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(skill => (
            <tr key={skill.id} className="border-b">
              <td className="p-2">{skill.name}</td>
              <td className="p-2">{skill.category}</td>
              <td className="p-2">{skill.difficulty}</td>
              <td className="p-2">
                <button className="mr-2 text-blue-600" title="Edit">
                  <Edit2 size={18} />
                </button>
                <button className="text-gray-600" title="Archive">
                  <Archive size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillManagement;