"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getAllTodos = exports.createTodo = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createTodo = (todo) => {
    return prisma_1.default.todo.create({ data: todo });
};
exports.createTodo = createTodo;
const getAllTodos = () => {
    return prisma_1.default.todo.findMany({
        orderBy: {
            createdAt: "desc",
        }
    });
};
exports.getAllTodos = getAllTodos;
const deleteTodo = (id) => {
    return prisma_1.default.todo.delete({
        where: {
            id,
        }
    });
};
exports.deleteTodo = deleteTodo;
