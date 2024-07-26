import express from "express";
import { createTodo, deleteTodo, getTodos } from "../controllers/todo-controller";
const router = express.Router();

router.post("/", createTodo)
router.get("/", getTodos)
router.delete("/:todoId", deleteTodo)

export default router; 