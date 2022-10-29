import React from 'react';
import { Image } from '../Image/Image';
import styles from './BtnExitProfile.module.scss';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchLogout } from '../../store/authorizationSlice';
import userEvent from '@testing-library/user-event';

function BtnExitProfile() {
  const dispatch = useAppDispatch();

  const logout = () => dispatch(fetchLogout());

  const user = useAppSelector(state => state.authorization.user);
  console.log(user);

  return (
    <div className = {styles.userLogOut}>
      <div className={styles.header_exitProfile}>
        <div className={styles.header_imageContainer}>
          <Image
            src = {'user.svg'}
            alt = {'Oops'}
            className = {'header_exitProfile__image'}
            width = {20}
            height = {20}
          />
        </div>
        <p className={styles.header_exitProfile__name}>{user.name}</p>
        <i className={styles.arrowDown}></i>
      </div>
      <div onClick={logout} className = {styles.dropDownChild}>
        <div className = {styles.dropDownChild_itemContainer}>
          <Image
            src = 'logout.svg'
            alt = {'Oops'}
            className = {'dropdownChild__image'}
            width = {20}
            height = {20}
          />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}

export {BtnExitProfile}