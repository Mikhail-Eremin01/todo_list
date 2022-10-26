import React, {useState} from 'react';
import styles from './Todo.module.scss';
import { Image } from '../Image/Image';
import classNames from 'classnames';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';


interface ITodo{
    key: string;
    name: string;
    completed: boolean;
}

function Todo({name, completed}:ITodo) {
    const [TodoCompleted, setTodoCompleted] = useState(completed);
    const changeTodo = () => {
        setTodoCompleted(!TodoCompleted);
    }

    return (
        <div className={styles.todo}>
            <input onChange={changeTodo} checked = {TodoCompleted} className={styles.todo__checkbox} type="checkbox" />
            <p className={TodoCompleted ? styles.todo__name_completed : styles.todo__name}>{name}</p>
            <DropDownMenu />
        </div>
    )
}

export {Todo}