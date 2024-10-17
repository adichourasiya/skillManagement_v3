export interface User {
  id: number;
  name: string;
  role: 'admin' | 'student';
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningMaterialsLink: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

export interface SkillAssignment {
  id: number;
  skillId: number;
  studentId: number;
  currentScore: number;
  targetDate: string;
}