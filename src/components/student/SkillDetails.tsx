import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, BookOpen, Award } from 'lucide-react';

interface SkillDetailsProps {
  skillId: number;
}

interface Skill {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  currentScore: number;
  targetDate: string;
  learningObjectives: string[];
  learningMaterialsLink: string;
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ skillId }) => {
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    // In a real application, this would be an API call
    const mockSkill: Skill = {
      id: skillId,
      name: 'JavaScript Basics',
      description: 'Learn the fundamentals of JavaScript programming language.',
      category: 'Programming',
      difficulty: 'Beginner',
      currentScore: 75,
      targetDate: '2023-12-31',
      learningObjectives: [
        'Understand variables and data types',
        'Learn about functions and scope',
        'Explore arrays and objects',
        'Understand control structures (if/else, loops)',
      ],
      learningMaterialsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    };
    setSkill(mockSkill);
  }, [skillId]);

  if (!skill) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{skill.name}</h2>
        <button className="text-blue-500 hover:text-blue-700">
          <ArrowLeft size={24} />
        </button>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {skill.category}
        </span>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {skill.difficulty}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{skill.description}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <BookOpen size={20} className="mr-2" />
          Learning Objectives
        </h3>
        <ul className="list-disc list-inside">
          {skill.learningObjectives.map((objective, index) => (
            <li key={index} className="text-gray-700">{objective}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Award size={20} className="mr-2" />
          Progress
        </h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${skill.currentScore}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-600">{skill.currentScore}% complete</div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Target Completion Date: {skill.targetDate}</p>
      <a
        href={skill.learningMaterialsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-700"
      >
        Access Learning Materials
        <ExternalLink size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default SkillDetails;