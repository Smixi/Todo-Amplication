/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TodoUpdateManyWithoutTodoListsInput } from "./TodoUpdateManyWithoutTodoListsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class TodoListUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TodoUpdateManyWithoutTodoListsInput,
  })
  @ValidateNested()
  @Type(() => TodoUpdateManyWithoutTodoListsInput)
  @IsOptional()
  @Field(() => TodoUpdateManyWithoutTodoListsInput, {
    nullable: true,
  })
  todos?: TodoUpdateManyWithoutTodoListsInput;
}
export { TodoListUpdateInput };
