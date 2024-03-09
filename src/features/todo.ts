import { Todo } from '@/types/todo';

let todos: Todo[] = [];

export const getTodos = () => todos;

export const onAdd = (task: string) => {
  const newTodo: Todo = { id: Date.now(), task, completed: false };
  todos = [...todos, newTodo];
};

export const onDelete = (id: number) => {
  todos = todos.filter((todo) => todo.id !== id);
};

export const toggleComplete = (id: number) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
};
