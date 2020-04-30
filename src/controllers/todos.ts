import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const newTodo: Todo = {
    id: Math.floor(Math.random() * 10),
    text: req.body.text,
  };
  TODOS.push(newTodo);
  res.status(201).json({ message: "created", createdTodo: newTodo });
};
