import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './MainContent.module.scss';
import { WriteFirstTodo } from '../WriteFirstTodo/WriteFirstTodo';
import { MainScreen } from '../MainScreen/MainScreen';
import { useAppSelector, useAppDispatch } from '../../hook';
import { fetchGetAllTasks } from '../../store/tasksSlice';
import { Loading } from '../Loading/Loading';
// import { changeLoading } from '../../store/authorizationSlice';


function MainContent() {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();
  const [stat, setState] = useState(false);

  useEffect(() => {
    dispatch(fetchGetAllTasks())
    .then(() => {
      setState(true);
    })
  },[dispatch])

  
  if(!stat) {
    return <Loading />
  } else {
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
}

export {MainContent}