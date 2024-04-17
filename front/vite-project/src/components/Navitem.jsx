import React from 'react';
import styles from '../styles/NavItem.module.css'; 
import { Link } from 'react-router-dom'; 

const NavItem = ({ to, text, disabled }) => {
  const navItemClass = disabled ? `${styles.navItem} ${styles.disabled}` : styles.navItem;
  const navLinkClass = disabled ? `${styles.navLink} ${styles.disabledLink}` : styles.navLink;

  return (
    <li className={navItemClass}>
      {disabled ? (
        <span className={navLinkClass}>{text}</span>
      ) : (
        <Link to={to} className={navLinkClass}>{text}</Link>
      )}
    </li>
  );
}

export default NavItem;
