// GET /appointments => obtener todos los usuarios
// GET /appointments/:id => obtener un usuario por ID
// POST /appointments/register => crear un nuevo usuario
// PUT /appoint/cancel => cancelar un turno

 import express from "express"; 
 import { getAppointments, getAppointment, scheduleAppointment, cancelAppointment } from "../controllers/appointController";

 const appointRouter = express.Router();

appointRouter.get("/", getAppointments);

appointRouter.get("/:id", getAppointment); 

appointRouter.post("/schedule", scheduleAppointment);

appointRouter.put("/cancel/:id", cancelAppointment); 

export default appointRouter;