import Navbar from './Navbar';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo1.jpg"
import whiteUser from "../assets/whiteUser.png"
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state => state.user);
    const loginState = user.login;
    const Username = user.user.firstName
    + " " + user.user.lastName;
console.log(Username);

    console.log(user.user.username)
    return (
      <header className={styles.header}>
        <Link to="/Home" className={styles.navbarBrand}> 
          <img src={logo} alt="" className={styles.logo} />
        </Link>
        <Navbar />
        {loginState ? (
          <Link to="/profile" className={styles.userLink}>
            <img src={whiteUser} alt="" className={styles.userLogo} />
            <p className={styles.username}>{Username}</p>
          </Link>
        ) : (
          <Link to="/landing" className={styles.userLink}>
            <img src={whiteUser} alt="" className={styles.userLogo} />
          </Link>
        )}
      </header>
    );
}

export default Header;
