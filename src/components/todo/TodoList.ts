import { Todo } from '@/types/todo';
import { TodoItem } from '@/components/todo/TodoItem';

export const TodoList = (todos: Todo[], onDelete: (id: number) => void) => {
  const list = document.createElement('ul');
  todos.forEach((todo) => {
    const todoItem = TodoItem(todo, onDelete);
    list.appendChild(todoItem);
  });

  return list;
};
