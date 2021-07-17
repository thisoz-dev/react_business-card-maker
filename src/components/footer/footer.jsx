import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <p className={styles.footer_title}>Code your dream</p>
  </footer>
));

export default Footer;
