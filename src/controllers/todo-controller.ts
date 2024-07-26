import { Request, Response, NextFunction } from "express";
import prisma from '../config/prisma'
import createError from "../utils/createError";
import * as todoService from '../services/todo-service'

export const createTodo = async(req: Request, res: Response, next: NextFunction) => {
    try {

        const {title} = req.body;

        if(!title || typeof title !== "string") {
            return createError("Incorrect title", 400);
        }
await todoService.createTodo({ title })

        res.json({ message: "Created todo" });
    } catch (err) {
        next(err);
    }
};

export const getTodos = async(req: Request, res: Response, next: NextFunction) => {
    try {
       const todos = await todoService.getAllTodos()

        res.json({ todos });
    } catch (err) {
        next(err);
    }
};

export const deleteTodo = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {todoId} = req.params;

        if(isNaN(Number(todoId))) {
            return createError("Id should be number", 400)
        }

        await todoService.deleteTodo(Number(todoId))

        

        res.json({ message: `Deleted todo id ${todoId}` });
    } catch (err) {
        next(err);
    }
};
