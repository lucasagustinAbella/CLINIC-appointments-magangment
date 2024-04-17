import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { AppointmentStatus } from "../dto/appointmentDto"




@Entity( {
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string // o date?

    @Column()
    userId: number

    @Column()
    status: AppointmentStatus 

    @ManyToOne (() => User, (User) => User.appointment)
    user: User
}
