import React from 'react';
import styles from './LoginForm.module.scss';
import classnames from 'classnames';

function LoginForm() {

    const handler = (e:any) => {
      console.log('1');
      e.preventDefault();
    };

  return (
    <form className={styles.logForm} onSubmit={handler}>

      <div className = {styles.logFormEmail}>
        <label className = {classnames(styles.logFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            placeholder='mail@gmail.com'
            className = {classnames(styles.logFormEmail__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.logFormPass}>
        <label className = {classnames(styles.logFormPass__label, styles.label)}>
          <span>Password</span>
          <input
            placeholder='password'
            type='password'
            className = {classnames(styles.logFormPass__input, styles.input)}
          />
        </label>
      </div>
      
      <input className={classnames(styles.logForm__submitInput, styles.submitInput)} type="submit" value={'Sign In'} />
    </form>
  )
}

export {LoginForm}