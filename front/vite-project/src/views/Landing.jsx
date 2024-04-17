import RegisterCard from "../components/registerCard";
import LoginCard from "../components/loginCard";
import styles from "../styles/Landing.module.css"

const Landing = () => {
  return (
    <div className={styles.landingDiv}>
      <RegisterCard />
      <h1 className={styles.textSeparator}>O</h1>
      <LoginCard />
    </div>
  );
}

export default Landing;