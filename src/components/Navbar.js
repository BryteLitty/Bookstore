import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.links}>
      <div className="logo color-blue">
        Bookstore CMS
      </div>
      <ul className={styles.navItems}>
        <Link className={styles.navLink} to="/">BOOKS</Link>
        <Link className={styles.navLink} to="/categories">CATEGORIES</Link>
      </ul>
    </div>
    <div className={styles.personContainer}>
      <BsFillPersonFill className={styles.person} />
    </div>
  </nav>
);

export default Navbar;
