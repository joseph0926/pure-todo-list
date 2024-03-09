import { App } from '@/components/App';
import {
  getTodos,
  onAdd as onAddTodo,
  onDelete as onDeleteTodo,
  toggleComplete as toggleCompleteTodo,
} from '@/features/todo';

const render = () => {
  const root = document.getElementById('root');
  if (!root) {return;}

  root.innerHTML = '';

  const todos = getTodos();
  const appElement = App(todos, onAdd, onDelete, toggleComplete);

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

document.addEventListener('DOMContentLoaded', render);
