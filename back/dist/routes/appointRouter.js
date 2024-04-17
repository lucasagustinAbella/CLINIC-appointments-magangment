"use strict";
// GET /appointments => obtener todos los usuarios
// GET /appointments/:id => obtener un usuario por ID
// POST /appointments/register => crear un nuevo usuario
// PUT /appoint/cancel => cancelar un turno
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointController_1 = require("../controllers/appointController");
const appointRouter = express_1.default.Router();
appointRouter.get("/", appointController_1.getAppointments);
appointRouter.get("/:id", appointController_1.getAppointment); // :ID?
appointRouter.post("/schedule", appointController_1.scheduleAppointment);
appointRouter.put("/cancel/:id", appointController_1.cancelAppointment); // :id?
exports.default = appointRouter;
