/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, TodoList, Todo } from "@prisma/client";

export class TodoListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TodoListFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListFindManyArgs>
  ): Promise<number> {
    return this.prisma.todoList.count(args);
  }

  async findMany<T extends Prisma.TodoListFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListFindManyArgs>
  ): Promise<TodoList[]> {
    return this.prisma.todoList.findMany(args);
  }
  async findOne<T extends Prisma.TodoListFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListFindUniqueArgs>
  ): Promise<TodoList | null> {
    return this.prisma.todoList.findUnique(args);
  }
  async create<T extends Prisma.TodoListCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListCreateArgs>
  ): Promise<TodoList> {
    return this.prisma.todoList.create<T>(args);
  }
  async update<T extends Prisma.TodoListUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListUpdateArgs>
  ): Promise<TodoList> {
    return this.prisma.todoList.update<T>(args);
  }
  async delete<T extends Prisma.TodoListDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoListDeleteArgs>
  ): Promise<TodoList> {
    return this.prisma.todoList.delete(args);
  }

  async findTodos(
    parentId: string,
    args: Prisma.TodoFindManyArgs
  ): Promise<Todo[]> {
    return this.prisma.todoList
      .findUnique({
        where: { id: parentId },
      })
      .todos(args);
  }
}
