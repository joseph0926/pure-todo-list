import { Todo } from '@/types/todo';

let todos: Todo[] = [];

export const getTodos = () => todos;

export const onAdd = (task: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    task,
    completed: false,
    createdAt: Date.now(),
  };

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

export enum FilterStatus {
  All = '전체',
  Active = '완료 전',
  Completed = '완료',
}

let filterStatus: FilterStatus = FilterStatus.All;

export const setFilterStatus = (status: FilterStatus) => {
  filterStatus = status;
};

export const getFilteredTodos = (): Todo[] => {
  let filteredTodos = todos;
  switch (filterStatus) {
    case FilterStatus.Active:
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    case FilterStatus.Completed:
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    case FilterStatus.All:
    default:
      filteredTodos = todos;
      break;
  }

  return filteredTodos.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.createdAt - b.createdAt;
    }
    return a.completed ? 1 : -1;
  });
};

export const clearCompletedTodos = () => {
  todos = todos.filter((todo) => !todo.completed);
};
