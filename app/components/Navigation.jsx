'use client'

import React, { useState, useEffect, useRef } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/Bs';
import { SlOptionsVertical } from 'react-icons/sl'
import { Logos } from './logos';
import styles from './navigation.module.css';
import { Switch } from '../components/Switch';
/* 
import Link from 'next/link';

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Proyectos',
  route: '/proyectos' // Corregí el nombre de la ruta si es necesario
}]
 */

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
          <TfiMenu className={styles.menuIcon} onClick={toggleMenu} />
          {isMenuOpen && (
            <section className={styles.menuNav}>
              <ul className={styles.navbar}>
              {/*  {links.map(({ label, route }) => (
                  <li key={label} className={styles.navbar1}>
                    <Link href={route} className={styles.textnav}>
                      {label}
                    </Link>
                  </li>
                ))} */}
                <li className={styles.navbar1}><a className={styles.textnav} href="/">Contact</a></li>
                <li className={styles.navbar1}><a className={styles.textnav} href="/">Notificar un error</a></li>
              </ul>
            </section>
          )}
        </nav>

        <Logos theme={theme} />

        <div className={styles.changeSwitch}>
        <Switch onThemeChange={handleThemeChange} />
        </div>
        
      </section>
      
      <section className={`${styles.navbarRigth} ${isSearchOpen ? styles.navbarRigthOpen : ''}`}>
        <label className={`${styles.cajaSearch} ${isSearchOpen ? styles.cajaSearchOpen : ''}`} ref={searchContainerRef}>
          {isSearchOpen && (
            <input
              className={`${styles.search} ${isSearchOpen ? styles.searchOpen : ''}`}
              placeholder='Buscar en wikipedia'
            />
          )}
          <BsSearch className={styles.SearchIcon} onClick={toggleSearch} />
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
