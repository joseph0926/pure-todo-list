import {
  onAdd,
  onDelete,
  toggleComplete,
  getTodos,
  clearCompletedTodos,
  setFilterStatus,
  FilterStatus,
  getFilteredTodos,
} from '@/features/todo';

describe('todo feature', () => {
  beforeEach(() => {
    while (getTodos().length > 0) {
      onDelete(getTodos()[0].id);
    }
  });

  test('onAdd adds a new todo', () => {
    onAdd('New Task');
    expect(getTodos()).toHaveLength(1);
    expect(getTodos()[0].task).toEqual('New Task');
  });

  test('onDelete removes a todo', () => {
    onAdd('Task to be deleted');
    const todoToDelete = getTodos()[0];
    onDelete(todoToDelete.id);
    expect(getTodos()).toHaveLength(0);
  });

  test('toggleComplete toggles the completion status of a todo', () => {
    onAdd('Task to be toggled');
    const todoToToggle = getTodos()[0];
    expect(todoToToggle.completed).toBe(false);
    toggleComplete(todoToToggle.id);
    expect(getTodos()[0].completed).toBe(true);
  });

  test('clearCompletedTodos removes completed todos', () => {
    onAdd('Completed Task');
    const completedTodo = getTodos()[0];
    toggleComplete(completedTodo.id);
    onAdd('Active Task');
    clearCompletedTodos();
    expect(getTodos()).toHaveLength(1);
    expect(getTodos()[0].task).toEqual('Active Task');
  });

  test('setFilterStatus and getFilteredTodos work correctly', () => {
    onAdd('Completed Task');
    const completedTodo = getTodos()[0];
    toggleComplete(completedTodo.id);
    onAdd('Active Task');

    setFilterStatus(FilterStatus.Completed);
    expect(getFilteredTodos()).toHaveLength(1);
    expect(getFilteredTodos()[0].completed).toBe(true);

    setFilterStatus(FilterStatus.Active);
    expect(getFilteredTodos()).toHaveLength(1);
    expect(getFilteredTodos()[0].completed).toBe(false);
  });
});
