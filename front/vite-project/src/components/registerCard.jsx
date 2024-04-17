import { Link } from 'react-router-dom'; 
import icon from "../assets/RegisterIcon.png"
import styles from "../styles/registerCard.module.css"

const RegisterCard = () => {
    return (
      <Link to="/register" className={styles.link}>
        <div className={styles.registerCard}>
          <div className={styles.icon}>
            <img src={icon} alt="Calendar" className={styles.icon} />
          </div>
          <div className={styles.text}>
            <h2>REGISTRATE <br/> AHORA!!</h2>
          </div>
        </div>
      </Link>
    );
};
  
export default RegisterCard;
