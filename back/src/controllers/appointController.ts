import { Request, Response } from "express";
 import {createAppointSvc, getAppointmentsSvc,  getAppointmentByIdSvc, cancelAppointmentSvc} from "../services/appointService"
 import { Appointment } from "../entities/Appointment";


 export const getAppointments = async (req: Request, res: Response) => {
     try {
         const appointments = await getAppointmentsSvc(); 

         res.status(200).json(appointments); 
     } catch (error) {
         console.error("Error al obtener los turnos:", error);
         res.status(500).send("Error al obtener los turnos"); 
    }
 };



 export const getAppointment = async (req: Request, res: Response) => {
    const appointmentId = parseInt(req.params.id); 
    try {
         const appointment = await getAppointmentByIdSvc(appointmentId); 

        if (!appointment) {
            return res.status(404).send("Turno no encontrado"); 
         }

         res.status(200).json(appointment); 
     } catch (error) {
         console.error("Error al obtener el turno:", error);
         res.status(500).send("Error al obtener el turno"); 
     }
 };



 export const scheduleAppointment = async (req: Request, res: Response) => {
         const { userId, date, time, status } = req.body; 

     try {
         const newAppointment = await createAppointSvc({userId, date, time, status}); 

         res.status(201).json(newAppointment); 
     } catch (error) {
         console.error("Error al crear el turno:", error);
         res.status(500).send("Error al crear el turno"); 
     }
 };



 export const cancelAppointment = async (req: Request, res: Response) => {
    const appointmentId = parseInt(req.params.id, 10); 
    console.log("ID del turno:", appointmentId);
    try {
        await cancelAppointmentSvc(appointmentId); 
        res.status(200).send("Turno cancelado correctamente");
    } catch (error) {
        console.error("Error al cancelar el turno:", error);
        res.status(500).send("Error al cancelar el turno");
    }
};

