import { create } from 'zustand';

interface ToDoItem {
  itemId: number;
  text: string;
  check: boolean;
}

interface ToDoState {
  todos: ToDoItem[];
  addTodo: (text: string) => void;
  toggleTodo: (itemId: number) => void;
  deleteTodo: (key: number) => void;
  allDeleteTodos: () => void;
  modifyTodo: (text: string, key: number) => void;
}

interface FilterState {
  togglefilter: boolean;
  selectToggleFilter: () => void;
}

export const useStore = create<ToDoState>((set) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => ({
      ...state,
      todos: [...state.todos, { itemId: Date.now(), text, check: false }],
    }));
  },
  toggleTodo: (itemId) => {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.itemId === itemId ? { ...todo, check: !todo.check } : todo
      ),
    }));
  },
  deleteTodo: (itemId) => {
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.itemId !== itemId),
    }));
  },
  allDeleteTodos: () => {
    set((state) => ({
      ...state,
      todos: (state.todos = []),
    }));
  },
  modifyTodo: (text, itemId) => {
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.itemId === itemId ? { ...todo, text: text } : todo
      ),
    }));
  },
}));

export const useFilterStore = create<FilterState>((set) => ({
  togglefilter: false,
  selectToggleFilter: () => {
    set((state) => ({
      ...state,
      filter: !state.togglefilter,
    }));
  },
}));
