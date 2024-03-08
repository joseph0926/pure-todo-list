import { Todo } from '@/types/todo';
import { TodoList } from '@/components/todo/TodoList';
import { AddTodoForm } from '@/components/todo/AddTodoForm';

export const App = (
  todos: Todo[],
  onAdd: (task: string) => void,
  onDelete: (id: number) => void
) => {
  const app = document.createElement('div');
  const todoList = TodoList(todos, onDelete);
  const addTodoForm = AddTodoForm(onAdd);

  app.appendChild(addTodoForm);
  app.appendChild(todoList);

  return app;
};
