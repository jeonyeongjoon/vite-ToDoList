import { create } from 'zustand';

interface ToDoItem {
  key: number;
  text: string;
  check: boolean;
}

interface ToDoState {
  todos: ToDoItem[];
  addTodos: (text: string) => void;
  checkTodos: (key: number) => void;
  deleteTodos: (key: number) => void;
  allDeleteTodos: () => void;
  modifyTodos: (text: string, key: number) => void;
}

interface FilterState {
  filter: boolean;
  selectFilter: () => void;
}

export const useStore = create<ToDoState>((set) => ({
  todos: [],
  addTodos: (text) => {
    set((state) => ({
      ...state,
      todos: [...state.todos, { key: Date.now(), text, check: false }],
    }));
  },
  checkTodos: (key) => {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.key === key ? { ...todo, check: !todo.check } : todo
      ),
    }));
  },
  deleteTodos: (key) => {
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.key !== key),
    }));
  },
  allDeleteTodos: () => {
    set((state) => ({
      ...state,
      todos: (state.todos = []),
    }));
  },
  modifyTodos: (text, key) => {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.key === key ? { ...todo, text: text } : todo
      ),
    }));
  },
}));

export const useFilterStore = create<FilterState>((set) => ({
  filter: false,
  selectFilter: () => {
    set((state) => ({
      ...state,
      filter: !state.filter,
    }));
  },
}));
