import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout_btn} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo_img} src="/images/logo.png" alt="logo" />
      <h1 className={styles.header_title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
