import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoUpdateInput = {
  description?: string;
  todoList?: TodoListWhereUniqueInput;
};
