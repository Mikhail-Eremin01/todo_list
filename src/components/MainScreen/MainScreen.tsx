import React from 'react';
import styles from './MainScreen.module.scss';
import { WriteNewTodo } from '../WriteTodo/WriteNewTodo';
import { ListAllTodos } from '../ListAllTodos/ListAllTodos';

function MainScreen() {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.mainScreen_container}>
        <WriteNewTodo />
        <div className={styles.verticalLine}></div>
        <ListAllTodos />
      </div>
    </div>
  )
}

export {MainScreen}