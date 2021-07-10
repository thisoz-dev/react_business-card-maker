import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.preview_title}>Card Preview</h1>
    <ul className={styles.preview_cards}>
      {cards.map((card, idx) => (
        <Card card={card} key={idx} />
      ))}
    </ul>
  </section>
);

export default Preview;
