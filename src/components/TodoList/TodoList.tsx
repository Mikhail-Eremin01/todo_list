import React from 'react';
import styles from './TodoList.module.scss';
import { Todo } from '../Todo/Todo';
import { InputEditTask } from '../InputEditTask/InputEditTask';
import { useAppSelector } from '../../hook';

interface ITodoList {
  filter?: boolean
}
function TodoList({filter}:ITodoList) {
  const tasks = useAppSelector(state => state.tasks.tasks);
  console.log(typeof filter);
  const arrayOfTasks = typeof filter === 'boolean' ? 
  tasks.filter((elem) => elem.completed === filter) : 
  tasks;
  console.log(arrayOfTasks);

  return (
    <div className = {styles.listAllTodos}>
      <InputEditTask />
      {arrayOfTasks.map(elem => {
        return <Todo arrayLength = {arrayOfTasks.length} key = {elem._id} id = {elem._id} name = {elem.name} completed = {elem.completed} />
      })}
    </div>
  )
}

export {TodoList}