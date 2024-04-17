import { Appointment } from "../entities/Appointment";
import { AppDataSource, AppointmentModel } from "../config/data-source";
import AppointmentDto, { AppointmentStatus } from "../dto/appointmentDto";




 export const getAppointmentsSvc = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find();
    return appointments;
 };

 export const getAppointmentByIdSvc = async (id: number): Promise<Appointment | null> => {
    const appointment = await AppointmentModel.findOneBy({
        id
    })
     return appointment;
 };

 export const createAppointSvc = async (appointmentData: AppointmentDto)  => {
     const  appointment = await AppointmentModel.create(appointmentData)
     await AppointmentModel.save(appointment) //results
     return appointment;
     };
    


     export const cancelAppointmentSvc = async (id: number): Promise<void> => {
        const appointment = await AppointmentModel.findOneBy({ id });
        console.log("Turno encontrado:", appointment);
        if (appointment) {
            appointment.status = AppointmentStatus.CANCELLED;
            await AppointmentModel.save(appointment);
        } else {
            throw new Error("Turno no encontrado");
        }
    };