import { Todo } from '@/types/todo';
import { TodoItem } from '@/components/todo/TodoItem';

export const TodoList = (
  todos: Todo[],
  onDelete: (id: number) => void,
  toggleComplete: (id: number) => void,
) => {
  const list = document.createElement('ul');
  list.classList.add('todo-list');
  todos.forEach((todo) => {
    const todoItem = TodoItem(todo, onDelete, toggleComplete);
    list.appendChild(todoItem);
  });

  return list;
};
