import { StringFilter } from "../../util/StringFilter";
import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  todoList?: TodoListWhereUniqueInput;
};
