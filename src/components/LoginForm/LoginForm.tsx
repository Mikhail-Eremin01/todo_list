import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import classnames from 'classnames';
import { useAppDispatch } from '../../hook';
import { fetchLogin } from '../../store/authorizationSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  mail: string;
  password: string;
};

function LoginForm() {
  // const err = useAppSelector(state => state.authorization.error);
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset

  } = useForm<FormValues>({
    mode: 'onBlur'
  });
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const login: SubmitHandler<FormValues> = (e) => {
    reset();  
    dispatch(fetchLogin({email, password}));
  };

  return (
    <form className={styles.logForm} onSubmit={handleSubmit(login)}>

      <div className = {styles.logFormEmail}>
        <label className = {classnames(styles.logFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            {...register('mail', {
              required: 'Please fill in the required field',
            })}
            onChange={changeEmail}
            placeholder='mail@gmail.com'
            className = {classnames(styles.logFormEmail__input, styles.input)}
            style={{ border: errors.mail?.message ? '1px solid red' : '' }}
          />
          <div>
            {errors?.mail && <p>{errors?.mail?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>

      <div className = {styles.logFormPass}>
        <label className = {classnames(styles.logFormPass__label, styles.label)}>
          <span>Password</span>
          <input
            {...register('password', {
              required: 'Please fill in the required field',
              minLength: {
                value: 4,
                message: 'Please enter at least 4 characters'
              }
            })}
            onChange={changePassword}
            placeholder='password'
            type='password'
            className = {classnames(styles.logFormPass__input, styles.input)}
            style={{ border: errors.password?.message ? '1px solid red' : '' }}
          />
          <div>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>
      
      <input className={classnames(styles.logForm__submitInput, styles.submitInput)} type="submit" value={'Sign In'} />
    </form>
  )
}

export {LoginForm}