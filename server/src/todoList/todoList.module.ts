import { Module } from "@nestjs/common";
import { TodoListModuleBase } from "./base/todoList.module.base";
import { TodoListService } from "./todoList.service";
import { TodoListController } from "./todoList.controller";
import { TodoListResolver } from "./todoList.resolver";

@Module({
  imports: [TodoListModuleBase],
  controllers: [TodoListController],
  providers: [TodoListService, TodoListResolver],
  exports: [TodoListService],
})
export class TodoListModule {}
