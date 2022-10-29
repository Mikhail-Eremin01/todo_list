import React, {useState} from 'react';
import styles from './Todo.module.scss';
import { Image } from '../Image/Image';
import classNames from 'classnames';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { fetchTasksCondition } from '../../store/tasksSlice';
import { useAppDispatch } from '../../hook';


interface ITodo{
    key: string;
    name: string;
    completed: boolean;
    id: string;
    arrayLength?: number;
}

function Todo({name, completed, id, arrayLength}:ITodo) {
    const dispatch = useAppDispatch();
    const [todoCompleted, setTodoCompleted] = useState(completed);
    const changeTodo = () => {
        setTodoCompleted(!todoCompleted);
        dispatch(fetchTasksCondition(id));
    }

    return (
        <div className={styles.todo}>
            <input onChange={changeTodo} checked = {todoCompleted} className={styles.todo__checkbox} type="checkbox" />
            <p className={todoCompleted ? styles.todo__name_completed : styles.todo__name}>{name}</p>
            <DropDownMenu id = {id} />
        </div>
    )
}

export {Todo}