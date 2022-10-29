import React, {useState} from 'react';
import styles from './RegistrationForm.module.scss';
import classnames from 'classnames';
import { fetchRegistration } from '../../store/authorizationSlice';
import { useAppDispatch } from '../../hook';

function RegistrationForm() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const changeName = (e:any) => setName(e.target.value);
  const changeEmail = (e:any) => setEmail(e.target.value);
  const changePassword = (e:any) => setPassword(e.target.value);
  const changeConfirmPassword = (e:any) => setConfirmPassword(e.target.value);


  const handler = (e:any) => {
    dispatch(fetchRegistration({name, email, password}))
    e.preventDefault();
  };

  return (
    <form className={styles.regForm} onSubmit={handler}>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormName__label, styles.label)}>
          <span>Name</span>
          <input
            onChange={changeName}
            placeholder='name'
            className = {classnames(styles.regFormName__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            onChange={changeEmail}
            placeholder='mail@gmail.com'
            className = {classnames(styles.regFormEmail__input, styles.input)}
          />
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormPass__label, styles.label)}>
          <span>Password</span>
          <input
            onChange={changePassword}
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
            onChange={changeConfirmPassword}
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