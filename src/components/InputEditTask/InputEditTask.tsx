import React, {useState} from 'react';
import styles from './InputEditTask.module.scss';
import { useAppSelector, useAppDispatch } from '../../hook';
import { hideInput } from '../../store/showInputEditTaskSlice';
import { fetchUpdateTask } from '../../store/tasksSlice';

function InputEditTask() {
    const dispatch = useAppDispatch();
    const conditionInput = useAppSelector(state => state.showInputEditTask.conditionInput.showInput);
    const todosId = useAppSelector(state => state.showInputEditTask.conditionInput.todosId);
    
    const [inputsValue, setInputsValue] = useState('');

    const changeInputValue = (e:any) => {
        setInputsValue(e.target.value);
    }

    const handler = (e: any) => {
        console.log(todosId);
        dispatch(fetchUpdateTask({id: todosId, name: inputsValue}));
        e.preventDefault();
        dispatch(hideInput());
    }

    return (
        <form className={styles.form} onSubmit={handler} style = {{
            display: conditionInput ? 'flex' : 'none'
        }}>
            <div className={styles.inputEditTask}>
                <input onChange={changeInputValue} placeholder='Edit your task' className={styles.inputEditTask__input} />
                <input type='submit' className={styles.inputEditTask__btn} value = {'Save'}></input>
            </div>
        </form>
    )
}

export {InputEditTask}