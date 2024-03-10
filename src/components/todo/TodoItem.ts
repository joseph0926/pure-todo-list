import { Todo } from '@/types/todo';

export const TodoItem = (
  todo: Todo,
  onDelete: (id: number) => void,
  onToggleComplete: (id: number) => void,
) => {
  const item = document.createElement('li');
  item.classList.add(
    'todo-item',
    todo.completed ? 'completed' : 'not-completed',
  );

  const checkboxId = `todo-${todo.id}`;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = checkboxId;
  checkbox.checked = todo.completed;
  checkbox.classList.add('todo-checkbox');
  checkbox.style.display = 'none';

  const label = document.createElement('label');
  label.htmlFor = checkboxId;
  label.classList.add('todo-label');
  item.onclick = () => onToggleComplete(todo.id);

  label.appendChild(document.createTextNode(todo.task));

  if (todo.completed) {
    item.style.textDecoration = 'line-through';
    item.style.color = '#A9A9A9';
  }

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    onDelete(todo.id);
  });

  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(deleteButton);

  return item;
};
