import { TodoItem } from '@/components/todo/TodoItem';
import { getFilteredTodos } from '@/features/todo';

export const TodoList = (
  onDelete: (id: number) => void,
  toggleComplete: (id: number) => void,
) => {
  const filteredTodos = getFilteredTodos();

  const list = document.createElement('ul');
  list.classList.add('todo-list');

  filteredTodos.forEach((todo) => {
    const todoItem = TodoItem(todo, onDelete, toggleComplete);
    list.appendChild(todoItem);
  });

  return list;
};
