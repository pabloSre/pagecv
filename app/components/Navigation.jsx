'use client'

import React, { useState, useEffect, useRef } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/Bs';
import { SlOptionsVertical } from 'react-icons/sl'
import styles from './navigation.module.css';

import Link from 'next/link';

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Proyects',
  route: '/proyects'
}]


export function Navigation() {

  //abrir menu hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  //abrir search
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  
  //click fuera de area de search tendria que cerrarlo.
  const handleOutsideClick = (event) => {
    if (isSearchOpen && searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  }
  const searchContainerRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSearchOpen]);

  
  return (
    <>
  <header className={styles.Header}>
    
    <section className={styles.navbarLeft}>

    <nav className={`${styles.menu} ${isMenuOpen ? styles.blue : ''}`}>{/* activar varias clases */}

      <TfiMenu className={styles.menuIcon}  onClick={toggleMenu} />

        {isMenuOpen && (
          <section className={styles.menuNav}>
        <ul className={styles.navbar}>{/* REVISAR KEY ERROR DE CONSOLA */}
          {links.map(({ label, route }) => (
            <li className={styles.navbar1}>
              <Link href={route} className={styles.textnav}>
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.navbar1}><a className={styles.textnav} href="/">Help</a></li>
          <li className={styles.navbar1}><a className={styles.textnav} href="/">Contact</a></li>
          <li className={styles.navbar1}><a className={styles.textnav} href="/">Notificar un error</a></li>
        </ul>
        </section>
        )}
      </nav>

      <div className={styles.containerIcon} >

        <img src='/wiki.png' alt='mundowiki'  className={styles.logo}/>

        <div className={styles.textWiki}>
        <img src='/wikipedia.svg' alt='wiki' className={styles.logo2}/>
        
        <img src='/laenciclopedia.svg' alt='laenciclopedia' className={styles.logo3}/>
        </div>
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
        
      <BsSearch 
        className={styles.SearchIcon}
        onClick={toggleSearch}
        
        />
      </label>

      <div className={`${styles.navUser1} ${isSearchOpen ? styles.navUser0 : ''}`}>
        <div className={styles.navUser}>
          <p className={styles.textUser}>Crear una cuenta</p>
          
          <p className={styles.textUser}>Acceder</p>
        </div>
      <SlOptionsVertical className={styles.options}/>  
      </div>

      </section>
      </header>
</>

  )
}