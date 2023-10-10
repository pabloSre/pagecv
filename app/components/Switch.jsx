'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Switch.module.css';
import {BsToggleOff} from 'react-icons/bs';
import {BsToggleOn} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io'

export default function Switch({ onThemeChange }) {
  const [theme, setTheme] = useState('light');/* volver a modo light */
  const [isOnVisible, setIsOnVisible] = useState(true);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const switchContainerRef = useRef(null);

  const handleChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onThemeChange(newTheme);
    setIsOnVisible(!isOnVisible);
  }

  const handleArrowClick = (event) => {
    setIsArrowRotated(!isArrowRotated);
    setIsOnVisible(false); // Ocultar el botón al hacer clic en la flecha
    event.stopPropagation();
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        switchContainerRef.current && 
        !switchContainerRef.current.contains(event.target)) {
          setIsArrowRotated(false);
          setIsOnVisible(false);
        }
    };

  document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  },[]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
    <div ref={switchContainerRef} className={`${styles.containerSwitch} ${isArrowRotated ? styles.shifted : ''}`}>
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