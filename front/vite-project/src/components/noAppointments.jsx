import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/noAppointments.module.css"

const NoAppointments = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/schedule');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div>
      <p className={styles.errorText}>No tienes turnos programados.</p>
    </div>
  );
}

export default NoAppointments;
