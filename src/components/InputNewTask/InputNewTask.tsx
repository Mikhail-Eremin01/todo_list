import React, {useState} from 'react';
import styles from './InputNewTask.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchCreateTask } from '../../store/tasksSlice';

function InputNewTask() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const changeTasksName = (e:any) => {
        setName(e.target.value);
    }
    const handler = (e: any) => {
        console.log(name);
        dispatch(fetchCreateTask(name))
        e.preventDefault();
    }

    return (
        <form onSubmit={handler}>
            <div className={styles.inputNewTask}>
                <input
                    onChange={changeTasksName}
                    placeholder = 'What needs to be done?'
                    className={styles.inputNewTask__input}
                />
                <input type='submit' className={styles.inputNewTask__btn} value = {'Add'}></input>
            </div>
        </form>
    )
}

export {InputNewTask}