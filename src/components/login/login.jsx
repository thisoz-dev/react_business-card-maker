import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>login</h1>
        <ul className={styles.login_list}>
          <li className={styles.login_item}>
            <button className={styles.login_btn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.login_btn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
