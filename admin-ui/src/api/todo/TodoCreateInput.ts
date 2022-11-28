import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoCreateInput = {
  description: string;
  todoList: TodoListWhereUniqueInput;
};
