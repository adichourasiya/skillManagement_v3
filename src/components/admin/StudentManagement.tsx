import React, { useState } from 'react';
import { Plus, Edit2, UserX, UserCheck } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: true },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', email: '' });

  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      setStudents([...students, { ...newStudent, id: Date.now(), active: true }]);
      setNewStudent({ name: '', email: '' });
    }
  };

  const toggleStudentStatus = (id: number) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, active: !student.active } : student
    ));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Student Management</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          className="border p-2 rounded"
        />
        <button onClick={addStudent} className="bg-green-500 text-white p-2 rounded flex items-center">
          <Plus size={18} className="mr-1" /> Add Student
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded ${student.active ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {student.active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="p-2">
                <button className="mr-2 text-blue-600" title="Edit">
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => toggleStudentStatus(student.id)}
                  className={`${student.active ? 'text-red-600' : 'text-green-600'}`}
                  title={student.active ? 'Deactivate' : 'Activate'}
                >
                  {student.active ? <UserX size={18} /> : <UserCheck size={18} />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;