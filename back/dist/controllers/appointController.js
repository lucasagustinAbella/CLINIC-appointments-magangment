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
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointment = exports.getAppointments = void 0;
const appointService_1 = require("../services/appointService");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointService_1.getAppointmentsSvc)();
        res.status(200).json(appointments);
    }
    catch (error) {
        console.error("Error al obtener los turnos:", error);
        res.status(500).send("Error al obtener los turnos");
    }
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id);
    try {
        const appointment = yield (0, appointService_1.getAppointmentByIdSvc)(appointmentId);
        if (!appointment) {
            return res.status(404).send("Turno no encontrado");
        }
        res.status(200).json(appointment);
    }
    catch (error) {
        console.error("Error al obtener el turno:", error);
        res.status(500).send("Error al obtener el turno");
    }
});
exports.getAppointment = getAppointment;
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, date, time, status } = req.body;
    try {
        const newAppointment = yield (0, appointService_1.createAppointSvc)({ userId, date, time, status });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        console.error("Error al crear el turno:", error);
        res.status(500).send("Error al crear el turno");
    }
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id, 10);
    console.log("ID del turno:", appointmentId);
    try {
        yield (0, appointService_1.cancelAppointmentSvc)(appointmentId);
        res.status(200).send("Turno cancelado correctamente");
    }
    catch (error) {
        console.error("Error al cancelar el turno:", error);
        res.status(500).send("Error al cancelar el turno");
    }
});
exports.cancelAppointment = cancelAppointment;
