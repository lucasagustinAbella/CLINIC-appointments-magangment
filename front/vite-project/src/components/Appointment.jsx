import React, { useState } from 'react';
import styles from "../styles/Appointment.module.css";
import CancelButton from "./CancelButton";
import axios from 'axios';

const Appointment = ({ id, date, time, status }) => {
  const [appointmentStatus, setAppointmentStatus] = useState(status);
  const currentDate = new Date();
  const appointmentDate = new Date(date);

  const handleCancel = async () => {
    const timeDifference = appointmentDate.getTime() - currentDate.getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; 
    if (timeDifference >= oneDayInMilliseconds) {
      if (window.confirm('¿Estás seguro de que quieres cancelar este turno?')) {
        if (appointmentStatus === 'active') {
          try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            setAppointmentStatus('cancelled');
          } catch (error) {
            console.error('Error al cancelar el turno:', error);
          }
        }
      }
    } else {
      alert('No se puede cancelar el turno con menos de un día de anticipación.');
    }
  };

  const formatDate = `${appointmentDate.getDate()}/${appointmentDate.getMonth()}/${appointmentDate.getFullYear()}`;

  return (
    <div className={styles.AppointmentCard}>
      <div className={styles.AppointmentContent}>
        <p>ID: {id}</p>
        <p>Fecha: {formatDate}</p>
        <p>Hora: {time}</p>
        <p>Estado: {appointmentStatus}</p>
      </div>
      <CancelButton status={appointmentStatus} onCancel={handleCancel} />
    </div>
  );
}

export default Appointment;
