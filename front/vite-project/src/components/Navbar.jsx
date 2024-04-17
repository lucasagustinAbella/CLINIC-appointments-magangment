import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';
import NavItem from '../components/Navitem';

const Navbar = () => {
  const user = useSelector(state => state.user);
  const loginState = user.login;
  console.log (loginState)
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbarUl}>
          <NavItem to="/Home" text="INICIO" /> 
          {/* <NavItem to="/Perfil" text="PERFIL" /> */}
          {/* <NavItem to="/SobreNosotros" text="ACERCA DE" /> */}
          <NavItem to="/appointments" text="MIS TURNOS" disabled={!loginState} />
          <NavItem to="/Contacto" text="CONTACTO" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
