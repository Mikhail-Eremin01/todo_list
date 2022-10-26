import React from 'react';
import { Image } from '../Image/Image';
import styles from './Header.module.scss';
import { BtnExitProfile } from '../BtnExitProfile/BtnExitProfile';

interface IHeader {
  button?: boolean;
}

function Header({ button }: IHeader) {
  return (
    <div className={button ? styles.headerWithBtn : styles.header}>
      <Image 
        src = 'logo.svg'
        alt = {'Oops'}
        className = {'header__logo'}
        width = {176}
        height = {32}
      />
      {button ? 
        <BtnExitProfile /> :
        <></>
      }
    </div>
  )
}

export {Header}