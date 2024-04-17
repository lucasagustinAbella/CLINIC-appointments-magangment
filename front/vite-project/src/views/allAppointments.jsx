import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Appointment from '../components/Appointment';
import NoAppointments from '../components/noAppointments'; // Importa el componente NoAppointments
import styles from "../styles/MisTurnos.module.css";
import axios from "axios";
import { setUserAppointments } from '../redux/reducer';
import HomeCard from "../components/HomeCard";
import calendarIcon from "../assets/Calendar.png"



const Appointments = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const loginState = user.login;
  useEffect(() => {
    if (user.login === true) {
      axios.get(`http://localhost:3000/users/${user.user.id}`)
        .then((res) => {
          const appointments = res.data.appointment;
          dispatch(setUserAppointments(appointments));
        })
        .catch(error => {
          console.error('Error al obtener los turnos:', error);
        });
    }
  }, [dispatch, user.login, user.user.id]);

  return (
    <>
      <h2 className={styles.AppointTittle}>Mis Turnos</h2>
      <div className={styles.Appointments}>
        {user.userAppointments && user.userAppointments.length > 0 ? (
          user.userAppointments.map((appointment) => (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
            />
          ))
        ) : (
          <NoAppointments />
        )}
        {user.userAppointments && user.userAppointments.length > 0 && loginState && (
          <HomeCard url={calendarIcon} />
        )}
      </div>
    </>
  );
}

export default Appointments;