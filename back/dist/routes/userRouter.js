"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// GET /users => obtener todos los usuarios
// GET /users/:id => obtener un usuario por ID
// POST /users/register => crear un nuevo usuario
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
userRouter.get("/", userController_1.getUsers);
userRouter.get("/:id", userController_1.getUserById);
userRouter.post("/register", userController_1.createUsers);
userRouter.post("/login", userController_1.loginUser);
userRouter.delete("/delete/:id", userController_1.deleteUsers);
exports.default = userRouter;
