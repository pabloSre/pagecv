'use client'
import React, { useState, useEffect } from 'react';
import styles from './Switch.module.css';
import {BsToggleOff} from 'react-icons/Bs';
import {BsToggleOn} from 'react-icons/Bs';
import {IoIosArrowDown} from 'react-icons/Io'

export function Switch({ onThemeChange }) {
  const [theme, setTheme] = useState('light');/* volver a modo light */
  const [isOnVisible, setIsOnVisible] = useState(true);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('temaSwitch:', newTheme);
    onThemeChange(newTheme);
    setIsOnVisible(!isOnVisible);
  }

  const handleArrowClick = () => {
    setIsArrowRotated(!isArrowRotated);
    setIsOnVisible(false); // Ocultar el botón al hacer clic en la flecha
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
    <div className={`${styles.containerSwitch} ${isArrowRotated ? styles.shifted : ''}`}>
      <div className={styles.onOff}>
        <BsToggleOff onClick={handleChange} className={`${styles.off} ${isOnVisible ? styles.hidden : ''}`} />
        <BsToggleOn onClick={handleChange} className={`${styles.on} ${isOnVisible ? '' : styles.hidden}`} />
        <IoIosArrowDown
          className={`${styles.arrowTheme} ${isArrowRotated ? styles.rotate : ''}`}
          onClick={handleArrowClick}
        />
      </div>
      </div>
    </>
  );
}