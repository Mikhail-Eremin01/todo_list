import React, {useState} from 'react';
import styles from './RegistrationForm.module.scss';
import classnames from 'classnames';
import { fetchRegistration } from '../../store/authorizationSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  mail: string;
  password: string;
  confPassword: string;
};

function RegistrationForm() {
  const err = useAppSelector(state => state.authorization.error);
  
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormValues>({
    mode: 'onBlur'
  });

  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeName = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const registration: SubmitHandler<FormValues> = () => {
    reset();
    dispatch(fetchRegistration({name, email, password}))
    .then(() => {
      window.location.href = "http://localhost:3000/"
    });
  };

  return (
    <form className={styles.regForm} onSubmit={handleSubmit(registration)}>
      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormName__label, styles.label)}>
          <span>Name</span>
          <input
            {...register('name', {
              required: 'Please fill in the required field',
            })}
            onChange={changeName}
            placeholder='name'
            className = {classnames(styles.regFormName__input, styles.input)}
            style={{ border: errors.name?.message ? '1px solid red' : '' }}
          />
          <div>
            {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormEmail__label, styles.label)}>
          <span>Email</span>
          <input
            {...register('mail', {
              required: 'Please fill in the required field',
              // validate: () => {
              //   if(err !== null ) {
              //     return `${err.message}`;
                  
              //   }
              // }
            })}
            onChange={changeEmail}
            placeholder='mail@gmail.com'
            className = {classnames(styles.regFormEmail__input, styles.input)}
          />
          <div>
            {errors?.mail && <p>{errors?.mail?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>

      <div className = {styles.regForm}>
        <label className = {classnames(styles.regFormPass__label, styles.label)}>
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
            className = {classnames(styles.regFormPass__input, styles.input)}
          />
          <div>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>

      <div className = {styles.regFormConfPass}>
        <label className = {classnames(styles.regFormPass__label, styles.label)}>
          <span>Confirm password</span>
          <input
            {...register('confPassword', {
              required: 'Please fill in the required field',
              validate: (value:string) => {
                if(watch('password') !== value) return "Your passwords do not match"
              }
            })}
            placeholder='confirm your password'
            type='password'
            className = {classnames(styles.regFormPass__input, styles.input)}
          />
          <div>
            {errors?.confPassword && <p>{errors?.confPassword?.message || 'Error!'}</p>}
          </div>
        </label>
      </div>
      <input className={classnames(styles.regForm__submitInput, styles.submitInput)} type="submit" value={'Create account'} />
    </form>
  )
}

export {RegistrationForm}