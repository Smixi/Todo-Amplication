import { Todo } from "../todo/Todo";

export type TodoList = {
  createdAt: Date;
  id: string;
  todos?: Array<Todo>;
  updatedAt: Date;
};
