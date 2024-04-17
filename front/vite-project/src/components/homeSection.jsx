import React from "react";
import styles from "../styles/HomeSection.module.css";
import HomeCard from "./HomeCard";
import calendarIcon from "../assets/Calendar.png"
import loginIcon from "../assets/loginIcon.png"
import { useSelector } from "react-redux";



const HomeSection = () => {
  const user = useSelector(state => state.user);
  const loginState = user.login;
  return (
    <section className={styles["home-section"]}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>NUESTRA MISION</h1>
          <div className={styles.textAndCard}>
            <p className={styles.paragraph}>
              Brindar un servicio integral de calidad con seguridad en el cuidado
              humanizado de la salud de las personas; promoviendo la participación
              activa del paciente y su familia; centrado en la gestión del
              conocimiento y evidencia científica, ofreciendo a los pacientes,
              personal y profesionales un ambiente cálido, de bienestar, sustentable
              e innovador.
            </p>
            <HomeCard url={calendarIcon} disabled={!loginState}/>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
