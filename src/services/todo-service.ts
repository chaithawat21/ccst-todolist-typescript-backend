import { Prisma} from "@prisma/client"
import prisma from "../config/prisma"

export const createTodo = (todo: Prisma.TodoCreateInput) => {
    return prisma.todo.create({data:todo})
}

export const getAllTodos = () => {
    return prisma.todo.findMany({
        orderBy: {
            createdAt: "desc",
        }
    })
}

export const deleteTodo = (id:number) => {
    return prisma.todo.delete({
        where: {
            id,
        }
    });
}