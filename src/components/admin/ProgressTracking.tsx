import React from 'react';
import { BarChart2, PieChart } from 'lucide-react';

const ProgressTracking: React.FC = () => {
  // Mock data for demonstration
  const overallProgress = 75;
  const skillProgress = [
    { name: 'JavaScript', progress: 80 },
    { name: 'React', progress: 60 },
    { name: 'Node.js', progress: 70 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BarChart2 size={20} className="mr-2" />
            Overall Progress
          </h3>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${overallProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-blue-600">
                {overallProgress}%
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <PieChart size={20} className="mr-2" />
            Skill Progress
          </h3>
          <ul className="space-y-2">
            {skillProgress.map((skill, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{skill.name}</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-blue-700">{skill.progress}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Skill Acquisition Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Student Performance Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;