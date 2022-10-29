import React from 'react';
import { Image } from '../Image/Image';
import styles from './WriteNewTodo.module.scss';
import { InputNewTask } from '../InputNewTask/InputNewTask';
import { useAppSelector, useAppDispatch } from '../../hook';


function WriteNewTodo() {
    const user = useAppSelector(state => state.authorization.user);
    return (
        <div className={styles.writeTodo}>
            <div className={styles.writeTodo_imageContainer}>
                <Image
                    src = 'writingNotes.svg'
                    alt = {'Oops'}
                    className = {'login_imageContainer__image'}
                    width = {150}
                    height = {150}
                />
            </div>
            <div className={styles.writeTodo_text}>
                <h3 className={styles.writeTodo_text__title}>Hello {user.name}!</h3>
                <p className={styles.writeTodo_text__subtitle}>Write {}your task now</p>
                <InputNewTask />
            </div>
        </div>
    )
}

export {WriteNewTodo}