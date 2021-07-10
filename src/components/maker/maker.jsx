import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'thisoz',
      company: 'naver',
      theme: 'dark',
      title: 'Developer',
      email: 'thisoz.dev@gmail.com',
      fileName: 'thisoz',
      fileURL: 'thisoz.png',
    },
    {
      id: '2',
      name: 'Sujin',
      company: 'kakao',
      theme: 'light',
      title: 'Developer',
      email: 'sujin@gmail.com',
      fileName: 'sujin',
      fileURL: null,
    },
    {
      id: '3',
      name: 'bora',
      company: 'naver',
      theme: 'colorful',
      title: 'Developer',
      email: 'bora@gmail.com',
      fileName: 'bora',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const updateCard = (card) => {
    console.log('updateCard', card);
  };

  const deleteCard = (card) => {
    console.log('deleteCard', card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
