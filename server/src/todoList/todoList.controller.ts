import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TodoListService } from "./todoList.service";
import { TodoListControllerBase } from "./base/todoList.controller.base";

@swagger.ApiTags("todoLists")
@common.Controller("todoLists")
export class TodoListController extends TodoListControllerBase {
  constructor(
    protected readonly service: TodoListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
