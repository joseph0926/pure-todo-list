import { App } from '@/components/App';
import {
  onAdd as onAddTodo,
  onDelete as onDeleteTodo,
  toggleComplete as toggleCompleteTodo,
} from '@/features/todo';
import { clearCompletedTodos } from './features/todo';
import { Todo } from './types/todo';

export let todos: Todo[] = [];

const render = () => {
  const root = document.getElementById('root');
  if (!root) {
    return;
  }

  root.innerHTML = '';

  const appElement = App(
    onAdd,
    onDelete,
    toggleComplete,
    clearAllTodos,
    filterTodos,
  );

  root.appendChild(appElement);
};

const onAdd = (task: string) => {
  onAddTodo(task);
  render();
};

const onDelete = (id: number) => {
  onDeleteTodo(id);
  render();
};

const toggleComplete = (id: number) => {
  toggleCompleteTodo(id);
  render();
};

const clearAllTodos = () => {
  clearCompletedTodos();
  render();
};

const filterTodos = () => {
  render();
};

document.addEventListener('DOMContentLoaded', render);
