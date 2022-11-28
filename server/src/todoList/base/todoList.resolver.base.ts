/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTodoListArgs } from "./CreateTodoListArgs";
import { UpdateTodoListArgs } from "./UpdateTodoListArgs";
import { DeleteTodoListArgs } from "./DeleteTodoListArgs";
import { TodoListFindManyArgs } from "./TodoListFindManyArgs";
import { TodoListFindUniqueArgs } from "./TodoListFindUniqueArgs";
import { TodoList } from "./TodoList";
import { TodoFindManyArgs } from "../../todo/base/TodoFindManyArgs";
import { Todo } from "../../todo/base/Todo";
import { TodoListService } from "../todoList.service";

@graphql.Resolver(() => TodoList)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TodoListResolverBase {
  constructor(
    protected readonly service: TodoListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "read",
    possession: "any",
  })
  async _todoListsMeta(
    @graphql.Args() args: TodoListFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TodoList])
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "read",
    possession: "any",
  })
  async todoLists(
    @graphql.Args() args: TodoListFindManyArgs
  ): Promise<TodoList[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TodoList, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "read",
    possession: "own",
  })
  async todoList(
    @graphql.Args() args: TodoListFindUniqueArgs
  ): Promise<TodoList | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TodoList)
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "create",
    possession: "any",
  })
  async createTodoList(
    @graphql.Args() args: CreateTodoListArgs
  ): Promise<TodoList> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TodoList)
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "update",
    possession: "any",
  })
  async updateTodoList(
    @graphql.Args() args: UpdateTodoListArgs
  ): Promise<TodoList | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TodoList)
  @nestAccessControl.UseRoles({
    resource: "TodoList",
    action: "delete",
    possession: "any",
  })
  async deleteTodoList(
    @graphql.Args() args: DeleteTodoListArgs
  ): Promise<TodoList | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Todo])
  @nestAccessControl.UseRoles({
    resource: "Todo",
    action: "read",
    possession: "any",
  })
  async todos(
    @graphql.Parent() parent: TodoList,
    @graphql.Args() args: TodoFindManyArgs
  ): Promise<Todo[]> {
    const results = await this.service.findTodos(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
