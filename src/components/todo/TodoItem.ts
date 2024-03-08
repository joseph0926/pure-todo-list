import { Todo } from '@/types/todo';

export const TodoItem = (todo: Todo, onDelete: (id: number) => void) => {
  const item = document.createElement('li');
  item.textContent = todo.task;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => onDelete(todo.id);
  item.appendChild(deleteButton);

  return item;
};
