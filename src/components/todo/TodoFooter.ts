import {
  FilterStatus,
  setFilterStatus,
  getFilteredTodos,
} from '@/features/todo';

export const TodoFooter = (
  clearAllTodos: () => void,
  filterTodos: () => void,
) => {
  const footer = document.createElement('div');
  footer.classList.add('todo-footer');

  const totalCount = document.createElement('span');
  totalCount.textContent = `Total: ${getFilteredTodos().length}`;

  Object.values(FilterStatus).forEach((status) => {
    const filterBtn = document.createElement('button');
    filterBtn.textContent = status;
    filterBtn.onclick = () => {
      setFilterStatus(status as FilterStatus);
      filterTodos();
    };
    footer.appendChild(filterBtn);
  });

  const clearCompletedBtn = document.createElement('button');
  clearCompletedBtn.textContent = 'Clear Completed';
  clearCompletedBtn.onclick = () => {
    clearAllTodos();
  };

  footer.appendChild(totalCount);
  footer.appendChild(clearCompletedBtn);

  return footer;
};
