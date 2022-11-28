import { TodoCreateNestedManyWithoutTodoListsInput } from "./TodoCreateNestedManyWithoutTodoListsInput";

export type TodoListCreateInput = {
  todos?: TodoCreateNestedManyWithoutTodoListsInput;
};
