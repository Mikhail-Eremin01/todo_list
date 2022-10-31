import React, {useState} from 'react';
import styles from './InputEditTask.module.scss';
import { useAppSelector, useAppDispatch } from '../../hook';
import { hideInput } from '../../store/showInputEditTaskSlice';
import { fetchUpdateTask } from '../../store/tasksSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    name: string;
};

function InputEditTask() {
    const usersId = useAppSelector(state => state.authorization.user.id);

    const {
        register,
        formState: {
          errors
        },
        handleSubmit,
        reset,
    
      } = useForm<FormValues>({
        mode: 'onBlur'
    });

    const dispatch = useAppDispatch();
    const conditionInput = useAppSelector(state => state.showInputEditTask.conditionInput.showInput);
    const todosId = useAppSelector(state => state.showInputEditTask.conditionInput.todosId);
    
    const [inputsValue, setInputsValue] = useState('');

    const changeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputsValue(e.target.value);
    }

    const editTask: SubmitHandler<FormValues> = (e) => {
        dispatch(fetchUpdateTask({id: todosId, name: inputsValue, usersId}));
        dispatch(hideInput());
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(editTask)} style = {{
            display: conditionInput ? 'flex' : 'none'
        }}>
            <div className={styles.inputEditTask}>
                <input
                    {...register('name', {
                        required: 'Please fill in the required field'
                    })}
                    onChange={changeInputValue}
                    placeholder='Edit your task'
                    className={styles.inputEditTask__input}
                />
                <input type='submit' className={styles.inputEditTask__btn} value = {'Save'}></input>
            </div>
            <div>
                {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
            </div>
        </form>
    )
}

export {InputEditTask}