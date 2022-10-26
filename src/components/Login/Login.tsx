import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { Image } from '../Image/Image';
import styles from './Login.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login_imageContainer}>
        <Image
          src = 'key.svg'
          alt = {'Oops'}
          className = {'login_imageContainer__image'}
          width = {340}
          height = {340}
        />
      </div>
      <div className={styles.formsContainer}>
        <p className={styles.formsContainer__title}>Sign In</p>
        <LoginForm />
        <span>Don't have an account? <Link to = {'/registration'}><span className={styles.link_changeForm}>Sign Up</span></Link></span>
      </div>
    </div>
  )
}

export {Login}