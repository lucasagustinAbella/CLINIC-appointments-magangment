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
exports.cancelAppointmentSvc = exports.createAppointSvc = exports.getAppointmentByIdSvc = exports.getAppointmentsSvc = void 0;
const data_source_1 = require("../config/data-source");
const appointmentDto_1 = require("../dto/appointmentDto");
const getAppointmentsSvc = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentModel.find();
    return appointments;
});
exports.getAppointmentsSvc = getAppointmentsSvc;
const getAppointmentByIdSvc = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOneBy({
        id
    });
    return appointment;
});
exports.getAppointmentByIdSvc = getAppointmentByIdSvc;
const createAppointSvc = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.create(appointmentData);
    yield data_source_1.AppointmentModel.save(appointment); //results
    return appointment;
});
exports.createAppointSvc = createAppointSvc;
const cancelAppointmentSvc = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOneBy({ id });
    console.log("Turno encontrado:", appointment);
    if (appointment) {
        appointment.status = appointmentDto_1.AppointmentStatus.CANCELLED;
        yield data_source_1.AppointmentModel.save(appointment);
    }
    else {
        throw new Error("Turno no encontrado");
    }
});
exports.cancelAppointmentSvc = cancelAppointmentSvc;
