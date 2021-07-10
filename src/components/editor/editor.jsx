import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.editor_title}>Card Maker</h1>
    {cards.map((card, idx) => (
      <CardEditForm card={card} key={idx} />
    ))}
  </section>
);

export default Editor;
