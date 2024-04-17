export enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

interface AppointmentDto {
    date: string,
    time: string, 
    userId: number,
    status: AppointmentStatus, 
}

export default AppointmentDto;