"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.loginUser = exports.createUsers = exports.getUserById = exports.getUsers = void 0;
const userService_1 = require("../services/userService");
const credentialService_1 = require("../services/credentialService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getUsersSvc)();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserByIdSvc)(Number(id));
        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.getUserById = getUserById;
//modificar para que solo llegue en el dto USERNAME Y PASSWORD Y NO CREDENTIAL ID
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, firstName, lastName, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, userService_1.createUserSvc)({
            id,
            firstName,
            lastName,
            email,
            birthdate,
            nDni,
        }, {
            username,
            password
        });
        res.status(201).json(newUser);
        console.log("Usuario creado");
    }
    catch (err) {
        res.status(500).json({ err: err.message });
        console.log("Error en la creacion");
    }
});
exports.createUsers = createUsers;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credential = yield (0, credentialService_1.validateCredentials)({ username, password });
        const user = yield (0, userService_1.findUserByCredentialId)(credential.id);
        //  console.log(user)
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
});
exports.loginUser = loginUser;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    try {
        yield (0, userService_1.deleteUserSvc)(userId);
        res.status(200).send(`Usuario con ID ${userId} eliminado correctamente`);
    }
    catch (error) {
        res.status(500).send(`Error al eliminar el usuario: ${error.message}`);
    }
});
exports.deleteUsers = deleteUsers;
