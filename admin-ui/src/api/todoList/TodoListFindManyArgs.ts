import { TodoListWhereInput } from "./TodoListWhereInput";
import { TodoListOrderByInput } from "./TodoListOrderByInput";

export type TodoListFindManyArgs = {
  where?: TodoListWhereInput;
  orderBy?: Array<TodoListOrderByInput>;
  skip?: number;
  take?: number;
};
