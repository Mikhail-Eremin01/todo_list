import React from 'react';
import styles from './InputNewTask.module.scss';

function InputNewTask() {

    const handler = (e: any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handler}>
            <div className={styles.inputNewTask}>
                <input placeholder = 'What needs to be done?' className={styles.inputNewTask__input} />
                <input type='submit' className={styles.inputNewTask__btn} value = {'Add'}></input>
            </div>
        </form>
    )
}

export {InputNewTask}