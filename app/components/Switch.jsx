import React, { useState, useEffect } from 'react';
import styles from './Switch.modules.css'

export function Switch(){
  const [theme, setTheme] = useState('ligth');

  const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)/*  setAttribute, recibe en este caso dos parámetros:el nombre del nuevo atributo.el valor para ese nuevo atributo.*/
  }, [theme]);

  return (
    <div className={styles.containerSwitch}>
      <span>Change Theme</span>
      <label className={styles.switch}>
      <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
