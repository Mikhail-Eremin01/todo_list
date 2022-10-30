import React from 'react';
import { Image } from '../Image/Image';
import styles from './WriteFirstTodo.module.scss';
import { InputNewTask } from '../InputNewTask/InputNewTask';
import { useAppSelector } from '../../hook';
import { Loading } from '../Loading/Loading';

function WriteFirstTodo() {
    const loading = useAppSelector(state => state.authorization.loading);
    const usersName = useAppSelector(state => state.authorization.user.name);

    if(loading) {
        return (<Loading />)
    }
  
    return (
        <div className={styles.writeFirstTodo}>
            <div className={styles.writeFirstTodo_imageContainer}>
                <Image
                    src = 'writingNotes.svg'
                    alt = {'Oops'}
                    className = {'writeFirstTodo_imageContainer__image'}
                    width = {300}
                    height = {300}
                />
            </div>
            <div className={styles.writeFirstTodo_text}>
                <h3 className={styles.writeFirstTodo_text__title}>Hello {usersName}!</h3>
                <p className={styles.writeFirstTodo_text__subtitle}>Write your first task now</p>
                <InputNewTask />
            </div>
        </div>
    )
}

export {WriteFirstTodo}