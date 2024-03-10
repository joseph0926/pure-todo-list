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
  } else {
    item.style.cursor = 'grab';
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

  let isDragged = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragTimeout: NodeJS.Timeout | null = null;

  item.addEventListener('mousedown', (e) => {
    if (todo.completed) return;

    isDragged = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    item.style.cursor = 'grabbing';

    const mirror = item.cloneNode(true) as HTMLElement;
    mirror.style.position = 'absolute';
    mirror.style.opacity = '0.5';
    mirror.style.pointerEvents = 'none';
    document.body.appendChild(mirror);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragged) return;
      mirror.style.left = `${e.clientX - dragStartX + item.getBoundingClientRect().left}px`;
      mirror.style.top = `${e.clientY - dragStartY + item.getBoundingClientRect().top}px`;

      clearTimeout(dragTimeout!);
      dragTimeout = setTimeout(() => {
        mirror.style.filter = 'blur(4px)';
      }, 2000);
    };

    const onMouseUp = () => {
      if (mirror.parentNode) {
        document.body.removeChild(mirror);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      isDragged = false;
      item.style.cursor = 'grab';
      clearTimeout(dragTimeout!);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDragged) {
        onMouseUp();
      }
    };

    document.addEventListener('keydown', onKeyUp);

    item.addEventListener('mouseup', () => {
      document.removeEventListener('keydown', onKeyUp);
    });
  });

  return item;
};
