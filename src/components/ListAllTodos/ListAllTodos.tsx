import React from 'react';
import styles from './ListAllTodos.module.scss';
import { TodoList } from '../TodoList/TodoList';
import { CustomLink } from '../CustomLink/CustomLink';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hook';


function ListAllTodos() {
    let activeTasks = useAppSelector(state => state.tasks.active);
    const completedTasks = useAppSelector(state => state.tasks.completed);
    return (
        <div className={styles.listAllTodosContainer}>
            <p className = {styles.listAllTodos__title}>
                My tasks
            </p>
            <div className = {styles.listAllTodos_menuSelectTodoCondition}>
                <ul className={styles.listAllTodos_ul}>
                    <li className = {styles.listAllTodos_ul__li}>
                        <CustomLink to = {'/'} text = {'All'}></CustomLink>
                    </li>
                    <li className = {styles.listAllTodos_ul__li}>
                        <CustomLink to = {'/active'} text = {`Active(${activeTasks})`}></CustomLink>
                    </li>
                    <li className = {styles.listAllTodos_ul__li}>
                        <CustomLink to = {'/completed'} text = {`Completed(${completedTasks})`}></CustomLink>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path = "/" element = {<TodoList />}></Route>
                <Route path = "/active" element = {<TodoList filter = {false}/>}></Route>
                <Route path = "/completed" element = {<TodoList filter = {true} />}></Route>
            </Routes>
        </div>
    )
}

export {ListAllTodos}