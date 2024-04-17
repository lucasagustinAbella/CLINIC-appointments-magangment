import { Link } from "react-router-dom";
import styles from "../styles/HomeCard.module.css";

const HeaderCard = ({ url, disabled }) => {
  return (
    <Link to={disabled ? "/landing" : "/schedule"} className={styles.headerCard}>
      <div className={styles.icon}>
        <img src={url} alt="Calendar" className={styles.icon} />
      </div>
      <div className={styles.text}>
        <h2>TURNOS <br/> ONLINE</h2>
        {disabled ? (
          <p>DEBE INICIAR SESION <br/>PARA ACCEDER</p>
        ) : (
          <p>HAGA CLICK AQUI PARA PEDIR UN TURNO</p>
        )}
      </div>
    </Link>
  );
};

export default HeaderCard;
