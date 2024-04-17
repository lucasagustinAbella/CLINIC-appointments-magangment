import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"
import { Credential } from "./Credential"

@Entity( {
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column()
    birthdate: Date

    @Column({unique: true})
    nDni: number

     @Column()
     credentialId: number

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    appointment: Appointment[]

    @OneToOne(() => Credential) 
    @JoinColumn()
    Credential: Credential
    
    
}