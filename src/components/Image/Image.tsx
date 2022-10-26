import React from 'react'
import styles from './Image.module.scss';

interface IImage {
    src: string,
    alt: string,
    className: string,
    width: number,
    height: number
}

function Image({src, alt, className, width, height}: IImage) {
  return (
    <img 
      src={`images/${src}`}
      alt={alt}
      className = {styles[className]}
      width = {width}
      height = {height}
    />
  )
}

export {Image}