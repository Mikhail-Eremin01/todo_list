import React from 'react';
import styles from './InputEditTask.module.scss';
import { useAppSelector, useAppDispatch } from '../../hook';
import { hideInput } from '../../store/showInputEditTaskSlice';

function InputEditTask() {
    const dispatch = useAppDispatch();
    const conditionInput = useAppSelector(state => state.showInputEditTask.conditionInput);
    
    const handler = (e: any) => {
        dispatch(hideInput());
        e.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={handler} style = {{
            display: conditionInput ? 'flex' : 'none'
        }}>
            <div className={styles.inputEditTask}>
                <input placeholder='Edit your task' className={styles.inputEditTask__input} />
                <input type='submit' className={styles.inputEditTask__btn} value = {'Save'}></input>
            </div>
        </form>
    )
}

export {InputEditTask}