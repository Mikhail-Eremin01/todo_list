import React, {useState} from 'react';
import styles from './LoginForm.module.scss';
import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchLogin } from '../../store/authorizationSlice';

function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeEmail = (e:any) => setEmail(e.target.value);
  const changePassword = (e:any) => setPassword(e.target.value);

  const handler = (e:any) => {
    dispatch(fetchLogin({email, password}))
    e.preventDefault();
  };

  return (
    <form className={styles.logForm} onSubmit={handler}>

      <div className = {styles.logFormEmail}>
        <label className = {classnames(styles.logFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            onChange={changeEmail}
            placeholder='mail@gmail.com'
            className = {classnames(styles.logFormEmail__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.logFormPass}>
        <label className = {classnames(styles.logFormPass__label, styles.label)}>
          <span>Password</span>
          <input
            onChange={changePassword}
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