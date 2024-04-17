// GET /users => obtener todos los usuarios
// GET /users/:id => obtener un usuario por ID
// POST /users/register => crear un nuevo usuario
import express from "express";
import { getUsers, createUsers, loginUser, deleteUsers, getUserById } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/register", createUsers);

userRouter.post("/login", loginUser);

userRouter.delete("/delete/:id", deleteUsers);

export default userRouter;