import { create } from 'zustand';

interface ToDoItem {
  key: number;
  text: string;
}

interface ToDoState {
  ToDo: ToDoItem[];
  setCreateToDo: (text: string) => void;
  setRemoveTodo: (key: number) => void;
}

export const useStore = create<ToDoState>((set) => ({
  ToDo: [],
  setCreateToDo: (text) => {
    set((state) => ({
      ...state,
      ToDo: [...state.ToDo, { key: Date.now(), text }],
    }));
  },
  setRemoveTodo: (key) => {
    set((state) => ({
      ...state,
      ToDo: state.ToDo.filter((todo) => todo.key !== key),
    }));
  },
}));
