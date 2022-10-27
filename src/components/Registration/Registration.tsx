import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import styles from './Registration.module.scss';
import { Image } from '../Image/Image';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

function Registration() {
  return (
    <div className={styles.registContainer}>
      <div className={styles.regist_imageContainer}>
        <Image
          src = 'padlock.svg'
          alt = {'Oops'}
          className = {'regist_imageContainer__image'}
          width = {300}
          height = {300}
        />
      </div>
      <div className={styles.formsContainer}>
        <p className={styles.formsContainer__title}>Create account</p>
        <RegistrationForm />
        <span>Already have  an account? <Link to = {'/'}><span className={styles.link_changeForm}>Sign In</span></Link></span>
      </div>
    </div>
  )
}

export {Registration}