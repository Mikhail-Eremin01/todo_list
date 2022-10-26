import React from 'react';
import { Image } from '../Image/Image';
import styles from './BtnExitProfile.module.scss';

function BtnExitProfile() {
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
        <p className={styles.header_exitProfile__name}>Jessica Solares</p>
        <i className={styles.arrowDown}></i>
      </div>
      <div className = {styles.dropDownChild}>
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