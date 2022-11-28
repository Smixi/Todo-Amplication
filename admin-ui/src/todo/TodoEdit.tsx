import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TodoListTitle } from "../todoList/TodoListTitle";

export const TodoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
