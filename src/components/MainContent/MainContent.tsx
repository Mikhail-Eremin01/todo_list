import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './MainContent.module.scss';
import { WriteFirstTodo } from '../WriteFirstTodo/WriteFirstTodo';
import { WriteNewTodo } from '../WriteTodo/WriteNewTodo';
import { MainScreen } from '../MainScreen/MainScreen';



function MainContent() {
  return (
    <div className={styles.mainContent}>
      <Header button = {true} />
      <MainScreen />
      <Footer />
    </div>
  )
}

export {MainContent}