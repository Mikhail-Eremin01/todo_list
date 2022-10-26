import React from 'react';
import { Image } from '../Image/Image';
import styles from './WriteFirstTodo.module.scss';
import { InputNewTask } from '../InputNewTask/InputNewTask';

function WriteFirstTodo() {
  return (
        <div className={styles.writeFirstTodo}>
            <div className={styles.writeFirstTodo_imageContainer}>
                <Image
                    src = 'writingNotes.svg'
                    alt = {'Oops'}
                    className = {'login_imageContainer__image'}
                    width = {300}
                    height = {300}
                />
            </div>
            <div className={styles.writeFirstTodo_text}>
                <h3 className={styles.writeFirstTodo_text__title}>Hello Michele!</h3>
                <p className={styles.writeFirstTodo_text__subtitle}>Write your first task now</p>
                <InputNewTask />
            </div>
        </div>
    )
}

export {WriteFirstTodo}