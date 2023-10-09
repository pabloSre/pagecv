'use client'

import React, { useState, useEffect, useRef } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { IoSearchSharp } from 'react-icons/Io5';
import { SlOptionsVertical } from 'react-icons/sl'
import { Logos } from './logos';
import styles from './navigation.module.css';
import { Switch } from '../components/Switch';
import {MdOutlineDarkMode} from 'react-icons/Md';
import {BsSun} from 'react-icons/Bs'

export function Navigation() {
  //abrir menu hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //abrir search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    
    console.log('temahome', newTheme);
  };

  const handleReportError = () => {
    // Utiliza el enlace mailto para abrir el cliente de correo por defecto del usuario
    // con tu dirección de correo electrónico prellenada.
    window.location.href = 'mailto:tucorreo@gmail.com?subject=Error en el sitio web&body=Descripción del error:';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  }
  
  const searchContainerRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isSearchOpen && searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSearchOpen]);


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
