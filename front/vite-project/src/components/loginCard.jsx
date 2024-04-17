import { Link } from 'react-router-dom'; 
import icon from "../assets/loginIcon.png";
import styles from "../styles/loginCard.module.css";

const LoginCard = () => {
  return (
    <Link to="/login" className={styles.link}>
      <div className={styles.loginCard}>
        <div className={styles.loginIcon}>
          <img src={icon} alt="login" className={styles.icon} />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>INICIA SESIÓN!!</h2>
        </div>
      </div>
    </Link>
  );
};

export default LoginCard;
