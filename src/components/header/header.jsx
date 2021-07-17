import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => {
  console.log('header');
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
});

export default Header;
