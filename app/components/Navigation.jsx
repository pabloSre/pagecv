'use client'

import React, { useState, useEffect, useRef } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/io5';
import { SlOptionsVertical } from 'react-icons/sl'
import Logos from './Logos';
import styles from './navigation.module.css';
import Switch from './Switch';
import {MdOutlineDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';

export default function Navigation() {
  //abrir menu hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //abrir search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const searchContainerRef = useRef(null);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.navbarActive') &&
        !event.target.closest('.cajaSearchOpen') &&
        !searchContainerRef.current.contains(event.target)
      ) {
        if (isMenuOpen || isSearchOpen) {
          setIsMenuOpen(false);
          setIsSearchOpen(false);
        }
      } 
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSearchOpen, isMenuOpen]);


  return (
    <header className={styles.Header}>
      <section className={styles.navbarLeft}>
        <nav className={`${styles.menu} ${isMenuOpen ? styles.blue : ''}`}>
          <div className={styles.divIcon}>
          <TfiMenu className={styles.menuIcon} onClick={toggleMenu} />
          </div>
          {/* {isMenuOpen && ( */}
            <section className={`${styles.menuNav} ${isMenuOpen ? styles.menuNavActive : ''}`}>
              <ul className={`${styles.navbar} ${isMenuOpen ? styles.navbarActive : ''}`}>

                <li className={styles.navbar1}>
                <a href="/#contacto">Contacto</a>
              </li>
              <li className={styles.navbar1}>
                <a href="mailto:pvdev.web@gmail.com?subject=Notificar%20un%20error&body=He%20encontrado%20un%20error">Notificar un error</a>
              </li>
              </ul>
            </section>
         {/*  )} */}
        </nav>

        <Logos theme={theme} />

        <div className={styles.changeSwitch}>{/* no tiene clase activada */}
          <Switch onThemeChange={handleThemeChange} />
          
            
        </div>
        <section className={styles.containerCambio}>  
          <MdOutlineDarkMode className={`${theme === 'light' ? styles.luna : styles.lunaOff}`} />
          <BsSun className={`${theme === 'dark' ? styles.sol : styles.solOff}`} />
        </section>
      </section>
      
      <section className={`${styles.navbarRigth} ${isSearchOpen ? styles.navbarRigthOpen : ''}`}>
        <label className={`${styles.cajaSearch} ${isSearchOpen ? styles.cajaSearchOpen : ''}`} ref={searchContainerRef}>
          {isSearchOpen && (
            <input
              className={`${styles.search} ${isSearchOpen ? styles.searchOpen : ''}`}
              placeholder='Buscar en wikipedia'
            />
          )}
          <IoSearchSharp className={styles.SearchIcon} onClick={toggleSearch} />
        </label>

        <div className={`${styles.navUser1} ${isSearchOpen ? styles.navUser0 : ''}`}>
          <div className={styles.navUser}>
            <p className={styles.textUser}>Crear una cuenta</p>
            <p className={styles.textUser}>Acceder</p>
            <SlOptionsVertical className={styles.options}/>
          </div>
        </div>
      </section>
    </header>
    
  );
}
