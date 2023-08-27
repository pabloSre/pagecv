'use client'
import React, { useState, useEffect } from 'react';
import styles from './Switch.modules.css';

export function Switch({ onThemeChange }) {
  const [theme, setTheme] = useState('light');

  const handleChange = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('temaSwitch:', newTheme);
    onThemeChange(newTheme);
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.containerSwitch}>
      <span className={styles.change}>Change Theme</span>
      <label className={styles.switch}>
        <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
