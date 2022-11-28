import { TodoList as TTodoList } from "../api/todoList/TodoList";

export const TODOLIST_TITLE_FIELD = "id";

export const TodoListTitle = (record: TTodoList): string => {
  return record.id || record.id;
};
