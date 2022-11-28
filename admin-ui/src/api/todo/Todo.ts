import { TodoList } from "../todoList/TodoList";

export type Todo = {
  createdAt: Date;
  description: string;
  id: string;
  todoList?: TodoList;
  updatedAt: Date;
};
