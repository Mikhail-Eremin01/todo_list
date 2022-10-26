import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>Copyright © 2022 All rights reserved</p>
    </div>
  )
}

export {Footer}