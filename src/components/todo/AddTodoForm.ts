export const AddTodoForm = (onAdd: (task: string) => void) => {
  const form = document.createElement('form');
  form.classList.add('add-todo');

  const input = document.createElement('input');

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';

  form.appendChild(input);
  form.appendChild(addButton);

  form.onsubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    onAdd(input.value);
    input.value = '';
  };

  return form;
};
