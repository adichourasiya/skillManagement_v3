import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  role: 'admin' | 'student';
}

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useStore;