import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TodoListTitle } from "../todoList/TodoListTitle";

export const TodoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="todolist.id"
          reference="TodoList"
          label="todo_list"
        >
          <SelectInput optionText={TodoListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
