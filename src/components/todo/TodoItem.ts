import { Todo } from '@/types/todo';

export const TodoItem = (
  todo: Todo,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void,
) => {
  const item = document.createElement('li');
  item.classList.add('todo-item');
  item.textContent = todo.task;

  if (todo.completed) {
    item.style.textDecoration = 'line-through';
  }

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => onDelete(todo.id);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.onclick = () => onToggleComplete(todo.id);

  item.appendChild(completeButton);
  item.appendChild(deleteButton);

  return item;
};
