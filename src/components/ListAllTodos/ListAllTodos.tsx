import React from 'react';
import styles from './ListAllTodos.module.scss';
import { Image } from '../Image/Image';
import { TodoList } from '../TodoList/TodoList';
import { CustomLink } from '../CustomLink/CustomLink';
import { Todo } from '../Todo/Todo';
import { NavLink, Routes, Route } from 'react-router-dom';

function ListAllTodos() {

    const todos = [
        {
            id: '1',
            name: 'Plant flowers in potsnt flowers in pots7Plant flowers in pots',
            completed: true,
        },
        {
            id: '2',
            name: 'Walk the dog on an evening walk',
            completed: true,
        },
        {
            id: '3',
            name: 'Plant flowers in pots Plant flowe5rs in potsPlant flowers in potsPlant flowers in pots',
            completed: false,
        },
        {
            id: '4',
            name: 'Plant flowers flowers flo1wers flowers flowers flowers pots',
            completed: false,
        },
        {
            id: '5',
            name: 'Plant flowers flowers flowers flowers fl2owers flowers pots',
            completed: true,
        },
        // {
            // id: '6',
        //     name: 'Plant flowers flowers flowers flowers flowers flowers pots',
        //     completed: true,
        // },
        // {
            // id: '7',
        //     name: 'Plant flowers flowers flowers flowers flowers flowers pots',
        //     completed: true,
        // }
    ]
    const todos2 = [
        {
            id: '1',
            name: 'Plant flowers in potsnt flowers in pots7Plant flowers in pots',
            completed: true,
        },
        {
            id: '2',
            name: 'Walk the dog on an evening walk',
            completed: true,
        },
        {
            id: '3',
            name: 'Plant flowers in pots Plant flowe5rs in potsPlant flowers in potsPlant flowers in pots',
            completed: false,
        },
        {
            id: '4',
            name: 'Plant flowers flowers flo1wers flowers flowers flowers pots',
            completed: false,
        },
        {
            id: '5',
            name: 'Plant flowers flowers flowers flowers fl2owers flowers pots',
            completed: true,
        },
        {
            id: '6',
            name: 'Plant flowers flowers flowers flowers flowers flowers pots',
            completed: true,
        },
        {
            id: '7',
            name: 'Plant flowers flowers flowers flowers flowers flowers pots',
            completed: true,
        }
    ]
    const todos3 = [
        {
            id: '1',
            name: 'Plant flowers in potsnt flowers in pots7Plant flowers in pots',
            completed: true,
        }
    ]

    const checkCheckbox = () => {

    }

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
                    <CustomLink to = {'/active'} text = {'Active(2)'}></CustomLink>
                </li>
                <li className = {styles.listAllTodos_ul__li}>
                    <CustomLink to = {'/completed'} text = {'Completed(1)'}></CustomLink>
                </li>
            </ul>
        </div>
        <Routes>
            <Route path = "/" element = {<TodoList todos = {todos} />}></Route>
            <Route path = "/active" element = {<TodoList todos = {todos2} />}></Route>
            <Route path = "/completed" element = {<TodoList todos = {todos3} />}></Route>
        </Routes>
        
    </div>
  )
}

export {ListAllTodos}