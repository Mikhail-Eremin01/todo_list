import React, { useEffect } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './MainContent.module.scss';
import { WriteFirstTodo } from '../WriteFirstTodo/WriteFirstTodo';
import { WriteNewTodo } from '../WriteTodo/WriteNewTodo';
import { MainScreen } from '../MainScreen/MainScreen';
import { useAppSelector, useAppDispatch } from '../../hook';
import { fetchGetAllTasks } from '../../store/tasksSlice';


function MainContent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetAllTasks());
  },[])

  const tasks = useAppSelector(state => state.tasks.tasks);




  return (
    <div className={styles.mainContent}>
      <Header button = {true} />
        {tasks.length === 0 ? 
          <WriteFirstTodo />: 
          <MainScreen />
        }
      <Footer />
    </div>
  )
}

export {MainContent}