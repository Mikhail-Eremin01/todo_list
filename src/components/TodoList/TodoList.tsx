import React, {useState} from 'react';
import styles from './TodoList.module.scss';
import { Todo } from '../Todo/Todo';
import { InputEditTask } from '../InputEditTask/InputEditTask';

interface Todo{
  id: string,
  name: string,
  completed: boolean,
}
interface ITodoList{
  todos: Todo[];
}

function TodoList({todos}:ITodoList) {

  return (
    <div className = {styles.listAllTodos}>
      <InputEditTask />
      {todos.map(elem => {
        return <Todo key = {elem.id} name = {elem.name} completed = {elem.completed} />
      })}
    </div>
  )
}

export {TodoList}