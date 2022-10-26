import React from 'react';
import styles from './RegistrationForm.module.scss';
import classnames from 'classnames';

function RegistrationForm() {

    const handler = (e:any) => {
      console.log('1');
      e.preventDefault();
    };

  return (
    <form className={styles.regForm} onSubmit={handler}>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormName__label, styles.label)}>
          <span>Name</span>
          <input
            placeholder='name'
            className = {classnames(styles.regFormName__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            placeholder='mail@gmail.com'
            className = {classnames(styles.regFormEmail__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormPass__label, styles.label)}>
          <span>Password</span>
          <input
            placeholder='password'
            type='password'
            className = {classnames(styles.regFormPass__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.regFormConfPass}>
        <label className = {classnames(styles.regFormPass__label, styles.label)}>
          <span>Confirm password</span>
          <input
            placeholder='confirm your password'
            type='password'
            className = {classnames(styles.regFormPass__input, styles.input)}
          />
        </label>
      </div>
      
      <input className={classnames(styles.regForm__submitInput, styles.submitInput)} type="submit" value={'Create account'} />
    </form>
  )
}

export {RegistrationForm}