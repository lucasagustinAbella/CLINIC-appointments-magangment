import React from 'react';
import styles from "../styles/User.module.css";

const User = ({ firstName, lastName, email, birthdate, nDni }) => {
  return (
    <div className={styles.UserCard}>
      <div className={styles.UserContent}>
        <p>Nombre: {firstName} {lastName}</p>
        <p>Correo Electrónico: {email}</p>
        <p>Fecha de Nacimiento: {birthdate}</p>
        <p>Número de DNI: {nDni}</p>
      </div>
    </div>
  );
}

export default User;