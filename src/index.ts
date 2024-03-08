import { App } from '@/components/App';
import { Todo } from '@/types/todo';

let todos: Todo[] = [{ id: 1, task: 'Learn TypeScript', completed: false }];

const onAdd = (task: string) => {
  const newTodo: Todo = { id: Date.now(), task, completed: false };
  todos = [...todos, newTodo];
  render();
};

const onDelete = (id: number) => {
  todos = todos.filter((todo) => todo.id !== id);
  render();
};

const render = () => {
  const root = document.getElementById('root');
  if (!root) {return;}

  root.innerHTML = '';

  const appElement = App(todos, onAdd, onDelete);
  root.appendChild(appElement);
};

document.addEventListener('DOMContentLoaded', render);
