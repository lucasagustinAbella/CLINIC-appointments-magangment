import { Link } from 'react-router-dom';
import styles from "../styles/landingCard.module.css";

const LandingCard = () => {
  return (
    <Link to="/landing" className={styles.landingCard}>
      <div className={styles.text}>
        <h2>PROBALO <br />AHORA!</h2>
      </div>
    </Link>
  );
}

export default LandingCard;