import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TodoListResolverBase } from "./base/todoList.resolver.base";
import { TodoList } from "./base/TodoList";
import { TodoListService } from "./todoList.service";

@graphql.Resolver(() => TodoList)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TodoListResolver extends TodoListResolverBase {
  constructor(
    protected readonly service: TodoListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
