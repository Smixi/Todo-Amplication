import { StringFilter } from "../../util/StringFilter";
import { TodoListRelationFilter } from "../todo/TodoListRelationFilter";

export type TodoListWhereInput = {
  id?: StringFilter;
  todos?: TodoListRelationFilter;
};
