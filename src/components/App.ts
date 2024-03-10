import { TodoList } from '@/components/todo/TodoList';
import { AddTodoForm } from '@/components/todo/AddTodoForm';
import { TodoFooter } from '@/components/todo/TodoFooter';

export const App = (
  onAdd: (task: string) => void,
  onDelete: (id: number) => void,
  toggleComplete: (id: number) => void,
  clearAllTodos: () => void,
  filterTodos: () => void,
) => {
  const app = document.createElement('div');
  app.classList.add('app');
  const todoList = TodoList(onDelete, toggleComplete);
  const addTodoForm = AddTodoForm(onAdd);
  const todoFooter = TodoFooter(clearAllTodos, filterTodos);

  app.appendChild(addTodoForm);
  app.appendChild(todoList);
  app.appendChild(todoFooter);

  return app;
};
