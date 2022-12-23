import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navItems}>
      <Link className={styles.navLink} to="/">BOOKS</Link>
      <Link className={styles.navLink} to="/categories">CATEGORIES</Link>
    </ul>
  </nav>
);

export default Navbar;
