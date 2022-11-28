import { SortOrder } from "../../util/SortOrder";

export type TodoListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
