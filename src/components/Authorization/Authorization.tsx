import React from 'react'
import styles from './Authorization.module.scss';
import { Routes, Route, Link} from 'react-router-dom';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import { Layout } from '../Layout/Layout';


function Authorization() {
  return (
    <div className={styles.authorization}>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Login />} />
          <Route path='registration' element = {<Registration />} />
        </Route>
      </Routes>
    </div>
  )
}

export {Authorization}