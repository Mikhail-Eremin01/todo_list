import React, {useEffect} from 'react';
import './App.css';
import { Authorization } from './components/Authorization/Authorization';
import { Loading } from './components/Loading/Loading';
import { MainContent } from './components/MainContent/MainContent';
import { useAppDispatch, useAppSelector } from './hook';
import { fetchCheckAuth } from './store/authorizationSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(fetchCheckAuth());
    }
  }, []);
  const isAuth = useAppSelector( state => state.authorization.isAuth);
  const loading = useAppSelector(state => state.authorization.loading);

  // if(loading) {
  //   return <Loading />
  // }

  if(!isAuth) {
    return <div className={'App'}>
      <Authorization />
    </div>
  }

  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

export default App;